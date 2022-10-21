import BaseUI from "../framwork/BaseUI";
import MsgHints from "../framwork/MsgHints";
import Data from "../manager/Data";
import WxCenter from "../manager/WxCenter";
import AudioMgr from "../utils/AudioMgr";
import Utils from "../utils/Utils";
import { DB_level, DB_plant } from "./DB";
import AdLayer, { max_auto_double_att, max_auto_double_income, max_auto_com, max_drop_plant, EADLAYER } from "./prefab/AdLayer";
import Enemy from "./prefab/Enemy";
import LoseUI from "./prefab/LoseUI";
import LuPinResult from "./prefab/LuPinResult";
import OfflineAwardUI from "./prefab/OfflineAwardUI";
import ShopLayer from "./prefab/ShopLayer";
import VictoryUI from "./prefab/VictoryUI";
import SlotItem from "./SlotItem";
import SoldierItem from "./SoldierItem";
import { PlantInfo } from "./UserModel";


const { ccclass, property } = cc._decorator;

@ccclass
export default class HallScene extends BaseUI {
    @property(cc.Prefab)
    enemy_pre:cc.Prefab = null;

    static _instance = null;

    static get Instance():HallScene
    {
        return HallScene._instance;
    }

    private _lastdroptime = 0;
    public enemylist:cc.Node[] = [];
    private wave_info:any = null;


    hidemergetips()
    {
        let slots = this.GetGameObject("slots");//fx_ground_merge
        for(var slot of slots.children)
        {
            slot.getChildByName("fx_ground_merge").active = false;
        }
    }

    showmergetips(lv:number)
    {
        let indexs = [];
        for(var item of this.items)
        {
            if(item.datacopy && item.datacopy.lv == lv && item.droptype == 0 && item.datacopy.lv<60)
            {
                indexs.push(item.index);
            }
        }
        // console.log(indexs);
        let slots = this.GetGameObject("slots");//fx_ground_merge
        for(var i = 0;i<slots.children.length;++i)
        {
            slots.children[i].getChildByName("fx_ground_merge").active = indexs.indexOf(i) >=0;
        }
    }


    update(dt)
	{
        if(dt>1)dt=1;
		this.SetText("lbl_coin",Utils.formatNumber(Data.user.coin)+"");
        this.SetText("lbl_gem",Utils.formatNumber(Data.user.gem)+"");
        
        if(this.recordertime != 0)
        {
            let s = Math.floor((Utils.getServerTime() - this.recordertime)/1000);
            if(s>0)this.SetText("lbl_luping",s+"s");
        }
        else
            this.SetText("lbl_luping","");

        //y排序
        this.enemylist.sort((a,b)=>{
            return b.y - a.y;
        })

        for(var i = 0;i<this.enemylist.length;++i)
        {
            this.enemylist[i].zIndex = i;
        }

        this._lastdroptime += dt;
        if(this._lastdroptime > 25 * (Data.user.drop_plant_time > Utils.getServerTime()?.3:1))
        {
            //普通花盆掉落
            if (this.item_drag.datacopy) return
            let lv = Math.max(1, Data.user.GetMaxLv() - Utils.getRandomInt(6, 9));
            this.tryBuyPlant(lv, 3)
            this._lastdroptime = 0;
        }

        //一段时间不操作，提示可以合成
        if(this.touchendtime != 0 && Utils.getServerTime() - this.touchendtime > 5000)
        {
            this.mergetip();
        }
    }

    //中间显示图片
    public async showImage(imgpath:string)
    {
        let node = new cc.Node();
        node.addComponent(cc.Sprite).spriteFrame = await Utils.loadRes(imgpath,cc.SpriteFrame) as cc.SpriteFrame;
        node.parent = this.node;
        node.y = 200;
        node.scale = 1.2;
        node.runAction(cc.sequence(cc.delayTime(2),cc.spawn(cc.moveBy(0.5,0,100),cc.fadeTo(0.5,0)),cc.removeSelf()))
    }

    private bFail = false;
    removeenemy(node:cc.Node,bFail:boolean)
    {
        if(bFail)this.bFail = true;
        for(var i = this.enemylist.length-1;i>=0;--i)
        {
            if(node == this.enemylist[i])
            {
                this.enemylist.splice(i,1);
                break;
            }
        }
        if(this.createcomplete && this.enemylist.length == 0)
        {
            if(this.bFail)
            {
                if(Data.user.wave>= this.wave_info[2])
                {
                    Data.user.wave= 1;
                    let enemy = node.getComponent(Enemy);
                    Utils.createUI("prefab/LoseUI").then((node:cc.Node)=>{
                        node.getComponent(LoseUI).setInfo(enemy.getBossMoney())
                    })
                }
                else
                {
                    Data.user.wave = 1;
                    this.showImage("texture/defeat");
                }
            }
            else
            {
                Data.user.wave++;
                if(Data.user.wave> this.wave_info[2])
                {
                    let enemy = node.getComponent(Enemy);
                    let money = enemy.getBossMoney();
				    this.node.runAction(cc.sequence(cc.delayTime(1.2),cc.callFunc(()=>{
                        Utils.createUI("prefab/VictoryUI").then((node:cc.Node)=>{
                            node.getComponent(VictoryUI).setInfo(money)
                        })
                    })))
                    Data.user.wave= 1;
                    Data.user.lv++;
                    Data.save(true);
                    let key = Data.user.lv + "_" + Data.user.wave;
                    this.wave_info = DB_level[key];
                }
                else
                {
                    AudioMgr.Instance().playSFX("win_wave")
                    // this.showImage("texture/success");
                    this.playSkAni("spine:other/shengjichenggong", "effect", this.node,cc.v3(0,150,0), 2);
                }
            }
            this.createwave();
        }
    }

    private createcomplete = false;
    createwave()
    {
        this.bFail = false;
        this.createcomplete = false;

        let key = Data.user.lv + "_" + Data.user.wave;
        this.wave_info = DB_level[key];

        //通关后就一直读最后一关
        if(!this.wave_info)
        {
            let key = 60 + "_" + Data.user.wave;
            this.wave_info = DB_level[key];
        }

        if(Data.user.wave== this.wave_info[2])
        {
            AudioMgr.Instance().playBGM("bgBoss");
            this.node.runAction(cc.sequence(cc.delayTime(.8),cc.callFunc(()=>{
                Utils.createUI("prefab/BossCommingUI")
            })))
        }
        else if(Data.user.wave == 1)
        {
            AudioMgr.Instance().playBGM("BGM1");
        }

        //创建怪物
        let list = [];
        let num = 0;

        for(let i = 0;i<this.wave_info[4];++i)
            list.push(this.wave_info[3])
        
            num = list.length;

        for(let i = 0;i<this.wave_info[6];++i)
            list.push(this.wave_info[5])

        for(let i = 0;i<list.length;++i)
        {
            let id = list[i];
            this.node.runAction(cc.sequence(cc.delayTime(2.2 * i),cc.callFunc(()=>{
                let e = cc.instantiate(this.enemy_pre);
                e.parent = this.GetGameObject("node_obj");

                
                e.getComponent(Enemy).setID(id,i>=num);
                this.enemylist.push(e);
                if(i == list.length-1)
                    this.createcomplete = true;
            })))
        }
        
        //关卡信息
        this.SetText("lbl_cur_lv",Data.user.lv+"");
        this.SetText("lbl_waves",Data.user.wave+"/"+ this.wave_info[2]);
        this.SetText("lbl_pre_lv",(Data.user.lv-1)+"");
        this.SetText("lbl_nex_lv",(Data.user.lv+1)+"");
    }

    public path:cc.Vec3[] = [];

	item_drag: SoldierItem = null;
	autocomindexs: number[] = [-1, -1];

    private items: Array<SoldierItem> = [];
    initComposeItems() {
        var list = Data.user.ComPlants;
        
        let m = {};
        for (var i = list.length - 1; i >= 0; i--) {
            if(list[i].lv>60)list[i].lv=60
            if(m[list[i].index] == 1)
            {
                list.splice(i,1);
                console.warn("错误...修正")
                continue;
            }
            m[list[i].index] = 1;
        }

        for (var i = list.length - 1; i >= 0; i--) {
            if (this.items[list[i].index])
                this.items[list[i].index].setItemData(list[i]);
        }
    }
    bPauseAutoCom: boolean = false; //是否暂停自动合成
	bInAutoCom: boolean = false;     //是否正在自动合成动画
	
	getItemByPos(pos: cc.Vec2): SoldierItem {
        for (var i = 0; i < this.items.length; ++i) {
            if (this.items[i].node.getBoundingBox().contains(pos)) {
                return this.items[i].node.getComponent(SoldierItem);
            }
        }
        return null;
    }

	setdragitempos(pos) {
        pos = this.GetGameObject("node_com").convertToWorldSpaceAR(pos);
        pos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(pos);
        this.GetGameObject("item_drag").position = pos;
    }
	
	async start()
	{
        this.hidemergetips();
        HallScene._instance = this;
        WxCenter.init();

        // if (window["wx"]) {
        //     let obj = window["wx"].getLaunchOptionsSync({})
        //     console.log('启动小程序的路径:', obj.path)
        //     console.log('启动小程序的场景值:', obj.scene)
        //     console.log('启动小程序的 query 参数:', obj.query)
        //     console.log('来源信息:', obj.shareTicket)
        //     console.log('来源信息参数appId:', obj.referrerInfo.appId)
        //     console.log('来源信息传过来的数据:', obj.referrerInfo.extraData)

        //     window["wx"].onShareMessageToFriend((errMsg) => {
        //         console.log("errMsg", errMsg)
        //         if (errMsg.success) {
        //             AudioMgr.Instance().playSFX("gem");
        //             Utils.flyAnim(1,this.node,"icon_gem",Utils.getRandomInt(2,4),85,(b)=>{
        //                 if(b)
        //                 {
        //                     Data.user.gem += GameConst.INVITE_FRIEND_ADD_GEM;
        //                 }  
        //             })
        //         }
        //     })
        // }
        
		let slots = this.GetGameObject("slots");
		let i = 0;
		for(var slot of slots.children)
		{
			slot.getComponent(SlotItem).setIndex(++i);
		}

        await this.initView();

		this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(() => {
            this.tryAutocom();

            if (this.item_drag.node.active) return

            // 小精灵掉落
            if(Data.user.DropGiftPts.length>0)
            {
               let b= this.tryBuyPlant(Data.user.DropGiftPts[0],4);
               if(b)
                   Data.user.DropGiftPts.shift();
            }
           //  广告购买成功，因为没有空位未成功添加
           if(Data.user.AdBuyNotDrop.length>0)
            {
               let b= this.tryBuyPlant(Data.user.AdBuyNotDrop[0],2);
               if(b)
                   Data.user.AdBuyNotDrop.shift();
            }

		})).repeatForever())
        
        Data.user.auto_com_time = Math.max(0,Data.user.auto_com_time);
        Data.user.double_income_time = Math.max(0,Data.user.double_income_time);
        Data.user.drop_plant_time = Math.max(0,Data.user.drop_plant_time);
        Data.user.double_att_time = Math.max(0,Data.user.double_att_time);
        this.updateBuyButton();

         //离线奖励,暂时只给6小时的         
         var t = (Utils.getServerTime() - Data.user.serverTime) / 1000;
         if ( Data.user.serverTime != 0 && t>3*60) {
             var t = Math.min(7200 * 3, t);
             var money = Data.user.getOfflineEarning(t/60);
             Utils.createUI('prefab/OfflineAwardUI', null, (ui) => {
                 ui.getComponent(OfflineAwardUI).data = money;
             })
         }

        for(var c of this.GetGameObject("node_path").children)
            this.path.push(c.position)

        this.node.runAction(cc.sequence(cc.delayTime(3),cc.callFunc(()=>{
            this.createwave();
        })))

		//更新各种时间
        this.GetGameObject("bottom").runAction(cc.sequence( cc.callFunc(() => {
            let isX2In = Data.user.double_att_time - Utils.getServerTime() > 0;
            let isInDb = Data.user.double_income_time - Utils.getServerTime() > 0;
            let isDpIn = Data.user.drop_plant_time - Utils.getServerTime() > 0;

            //校验时间
            if (Data.user.double_att_time - Utils.getServerTime() > max_auto_double_att * 60 * 1000) {
                Data.user.double_att_time = Utils.getServerTime();
            }
            if (Data.user.double_income_time - Utils.getServerTime() > max_auto_double_income * 60 * 1000) {
                Data.user.double_income_time = Utils.getServerTime();
            }
            if (Data.user.auto_com_time - Utils.getServerTime() > max_auto_com * 60 * 1000) {
                Data.user.auto_com_time = Utils.getServerTime();
            }
            if (Data.user.drop_plant_time - Utils.getServerTime() > max_drop_plant * 60 * 1000) {
                Data.user.drop_plant_time = Utils.getServerTime();
            }

            this.SetText("att_x2_time", isX2In ? Utils.getTimeStrByS((Data.user.double_att_time - Utils.getServerTime()) / 1000) : '狂暴');
            this.SetText("rewardx2_time", isInDb ? Utils.getTimeStrByS((Data.user.double_income_time - Utils.getServerTime()) / 1000) : '双倍');
            if( Data.user.auto_com_time - Utils.getServerTime() > 0)
            {
                this.SetText("auto_time", Utils.getTimeStrByS((Data.user.auto_com_time - Utils.getServerTime()) / 1000));
            }
            else
            {
                this.SetText("auto_time", "自动合成");
            }
            this.SetText("lbl_drop_plant",isDpIn ? Utils.getTimeStrByS((Data.user.drop_plant_time - Utils.getServerTime()) / 1000) : '掉落');
            this.GetGameObject("fx_bt_angry").active = this.GetGameObject("att_x2_time").active;


            if(Data.user.drop_plant_time - Utils.getServerTime()<0)
                this.GetSprite("bt_fast_gen_process_item").fillRange = 0;
            else
                this.GetSprite("bt_fast_gen_process_item").fillRange = ( (Data.user.drop_plant_time - Utils.getServerTime())/1000/60)/max_drop_plant;// (max_drop_plant * 60 - (Data.user.drop_plant_time - Utils.getServerTime())/1000) /max_drop_plant * 60

            // this.updateUI();
            // TaskLayer.checkTask();//任务检测
            // if (GameManager.Instance().isGuide == false)
            //     this.GetGameObject("btn_auto").active = Data.user.guideIndex > 2;
            // Data.user.checkNewTody();


             
		}),cc.delayTime(1)).repeatForever());
        this.GetGameObject("btn_delete").opacity = 0;
        this.GetGameObject("guild_0").active = Data.user.guideIndex == 0;

        // if (this.GetGameObject("supermarket"))
        //     this.GetGameObject("supermarket").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(2)).repeatForever());


        // if (this.GetGameObject("powerman"))
        //     this.GetGameObject("powerman").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(3)).repeatForever());

            // this.GetGameObject("btn_inviate").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(3)).repeatForever());
            this.GetGameObject("lupin_gem").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(3)).repeatForever());


        
        if (this.GetGameObject("btn_Recorder")) this.GetGameObject("btn_Recorder").active = window["tt"];
        if (window["tt"]) {
            const recorder = window["tt"].getGameRecorderManager();
            recorder.onStart(res => {
                this.GetGameObject("lupin_gem").active = false;
                this.GetGameObject("btn_VCR").active = false;
                this.GetGameObject("btn_end").active = true;
                this.GetGameObject("btn_Recorder").stopAllActions();
                this.GetGameObject("btn_Recorder").runAction(cc.sequence(cc.scaleTo(0.5, .9), cc.scaleTo(0.5, 1)).repeatForever());
                console.log("tt录屏开始");
                this.recordertime = Utils.getServerTime();
            });

            recorder.onStop(res => {
                this.bRecorder = false;
                this.GetGameObject("btn_Recorder").stopAllActions();
                this.GetGameObject("lupin_gem").active = true;
                this.GetGameObject("btn_Recorder").scale = 1;
                this.GetGameObject("btn_VCR").active = true;
                this.GetGameObject("btn_end").active = false;
                console.log("tt录屏结束");
                console.log(res.videoPath);
                
                if (Utils.getServerTime() - this.recordertime < 3000) {
                    MsgHints.show("录屏时间过短");
                    this.recordertime = 0
                    return;
                }

                this.recordertime = 0
                Utils.createUI("prefab/LuPinResult", null, (node: cc.Node) => {
                    node.getComponent(LuPinResult).setData(res);
                })
            });
        }
        
        cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
    }

    bRecorder = false;
    recordertime = 0;
    onGameHide() {
    }

    onDestroy() {
        cc.game.off(cc.game.EVENT_SHOW, this.onGameShow);
        cc.game.off(cc.game.EVENT_HIDE, this.onGameHide);
        super.onDestroy();
    }

    onGameShow() {
        if (Utils.sharetime != 0 && Utils.sharecallback) {
            if (Utils.getServerTime() - Utils.sharetime >= 2000) {
                Utils.sharecallback(true)
            }
            else {
                MsgHints.show("分享失败");
                Utils.sharecallback(false)
            }
        }

        Utils.sharetime = 0;
        Utils.sharecallback = null;
    }



	@property(cc.Prefab)
    pre_soldier: cc.Prefab = null;
    async initView() {
      
        var node_com = this.GetGameObject("node_com");

        var index = 0;
        for (var i = 0; i < 12; ++i) {
			var node: cc.Node = cc.instantiate(this.pre_soldier);
			node.parent = node_com;
			node.position = this.GetGameObject("slots").children[i].position;// cc.v2(x, y);
			node.name = "itme" + index;
			var plant: SoldierItem = node.getComponent(SoldierItem);
			plant.index = index;
			this.items.push(plant);
			++index
        }

        var node_drag = cc.instantiate(this.pre_soldier);
        node_drag.parent = node_com.parent;
        node_drag.name = "item_drag";
        node_drag.x = -1000;

        this.item_drag = this.GetGameObject("item_drag").getComponent(SoldierItem);
        this.item_drag.node.active = false;
        this.item_drag.bDrag = true;

        this.initComposeItems();

        node_com.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => {
            this.bPauseAutoCom = true;
            this.GetGameObject("node_com").stopAllActions();
            // cc.log("暂停自动合成")

            //如果在自动合成中，取消当前合成
            if (this.item_drag.node.active && this.item_drag.datacopy) {
                this.item_drag.node.stopAllActions();
                this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                this.item_drag.node.active = false;

                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;

                this.item_drag.linkItem = null;
                this.GetGameObject("node_com").stopAllActions();
                cc.log("取消当前合成");
            }

            this.item_drag.datacopy = null;
            var pos = e.getLocation();
            pos = node_com.convertToNodeSpaceAR(pos);
            var item = this.getItemByPos(pos);

            if(item && item.droptype != 0)
            {
                item.droptype = 0;
                item.updateItem();
            }

            if (item && item.datacopy && item.droptype == 0 ) {
                this.touchPos = pos;
                this.bChoosed = true;
                this.setdragitempos(item.node.position);
                this.item_drag.index = item.index;
                this.item_drag.setItemData(item.datacopy);
                this.item_drag.linkItem = item;

                this.showmergetips(item.datacopy.lv)
            }
            else {
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
            }

        }, this);

        node_com.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
            var pos = e.getLocation();
            pos = node_com.convertToNodeSpaceAR(pos);
            if (this.bChoosed && pos.sub(this.touchPos).mag() > 15) {
                if (this.item_drag.datacopy == null) return;
                this.GetGameObject("btn_delete").opacity = 255;

                this.item_drag.node.active = true;
                this.item_drag.linkItem.setItemData(null);
                this.setdragitempos(pos);

                var pos1 = this.GetGameObject("btn_delete").position;
                pos1 = this.GetGameObject("btn_delete").parent.convertToWorldSpaceAR(pos1);
                if (e.getLocation().sub(cc.v2(pos1.x,pos1.y)).mag() < 100) {
                    this.GetGameObject("btn_delete").scale = 0.55;
                }
                else {
                    this.GetGameObject("btn_delete").scale = 0.5;
                }
            }
        }, this);

        node_com.on(cc.Node.EventType.TOUCH_END, this.docomp, this);
        node_com.on(cc.Node.EventType.TOUCH_CANCEL, this.docomp, this);
    }

	bChoosed: boolean = false;
    touchPos: cc.Vec2 = cc.Vec2.ZERO;
	
    tryAutocom() {
        if (this.bPauseAutoCom || this.bInAutoCom) return;
        if (Utils.getServerTime() < Data.user.auto_com_time && !this.bInAutoCom) {
            this.initComposeItems();

            for (let i = 0; i < this.items.length ; ++i) {
                if (!this.items[i] || !this.items[i].datacopy) continue;
                for (let j = i + 1; j < this.items.length ; ++j) {
          
                    if (!this.items[j] || !this.items[j].datacopy) continue;
                    if (this.bInAutoCom) return;
                    if (this.items[i].datacopy.lv == this.items[j].datacopy.lv && this.items[i].droptype == 0 && this.items[j].droptype == 0 && this.items[i].datacopy.lv<60) {
                        this.autocomindexs[0] = this.items[i].index;
                        this.autocomindexs[1] = this.items[j].index;

                        this.item_drag.linkItem = this.items[j];
                        this.item_drag.index = this.items[j].index;
                        this.item_drag.setItemData(this.items[j].datacopy);
                        this.item_drag.node.active = true;
                        this.items[j].setItemData(null);
                        this.item_drag.node.position = this.items[j].node.position;
                        this.setdragitempos(this.items[j].node);

                        var targetpos = this.GetGameObject("node_com").convertToWorldSpaceAR(this.items[i].node.position);
                        targetpos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(targetpos);

                        // cc.log("开始自动合成")
                        this.bInAutoCom = true;
                        this.item_drag.node.stopAllActions();
                        this.item_drag.node.runAction(cc.sequence(cc.moveTo(0.13, cc.v2(targetpos.x,targetpos.y)), cc.callFunc(() => {
                            this.comani(this.items[i]);
                            // cc.log("自动合成结束");
                            this.bInAutoCom = false;
                        })))
                        return;
                    }
                }
            }
        }
    }
    
    
    private touchendtime = 0;
    docomp(e: cc.Event.EventTouch) {
        this.touchendtime = Utils.getServerTime();
        this.hidemergetips();
        this.GetGameObject("btn_delete").stopAllActions();
        this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(2),cc.fadeTo(1,0)))

        this.GetGameObject("node_com").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(() => {
            this.bPauseAutoCom = false;
            this.bInAutoCom = false;
            // cc.log("恢复自动合成")
        })))
        this.bChoosed = false;
        var pos = e ? e.getLocation() : cc.Vec2.ZERO;

        if (this.item_drag.node.active) {
            if (!this.item_drag.datacopy) {
                return;
            }
            //删除
            var pos1 = this.GetGameObject("btn_delete").position;
            pos1 = this.GetGameObject("btn_delete").parent.convertToWorldSpaceAR(pos1);
            if (pos.sub(cc.v2(pos1.x,pos1.y)).mag() < 100) {
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                this.GetGameObject("btn_delete").scale = 0.5;
                var tmp: number = 0;
                for (var i = 0; i < this.items.length; ++i) {
                    if (this.items[i].datacopy) tmp++;
                }

                if (tmp <= 2) {
                    MsgHints.show("植物数量过少不能删除");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }

                if (this.item_drag.datacopy.lv >= Data.user.GetMaxLv()) {
                    MsgHints.show("最高等级植物就不删除了吧！");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }

                Data.user.DropWuJiang(this.item_drag.datacopy.index);
                this.item_drag.linkItem.setItemData(null);
                this.item_drag.linkItem = null;

                // this.updateRecruitment();
                // if (GameScene.Instance().fps > 30)
                //     this.playSkAni("spine/ui/yinliangzengjia", "effect", this.GetGameObject("btn_delete"), cc.v2(0, 20), 1);
                // return
            }

            //合成 移动  交换
            pos = this.GetGameObject("node_com").convertToNodeSpaceAR(pos);
            var item: SoldierItem = this.getItemByPos(pos);

            if (item == null || Data.user.slots[item.index] == 0 || item == this.item_drag.linkItem || (item && item.droptype != 0)) {

                //取消
                if(this.item_drag.linkItem)
                this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                this.item_drag.linkItem = null;
                this.item_drag.node.stopAllActions();
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                return;
            }

            if (!item.datacopy) {
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                //移动
                Data.user.CompMove(this.item_drag.linkItem.index, item.index);
                item.setItemData(this.item_drag.datacopy);
                this.item_drag.linkItem.setItemData(null);
                this.item_drag.linkItem = null;
                return;
            }

            if (item.datacopy.open == this.item_drag.datacopy.open &&
                item.datacopy.lv == this.item_drag.datacopy.lv && item.datacopy.index != this.item_drag.datacopy.index && item.droptype == 0 && item.datacopy.lv<60) {
                this.comani(item);
            }
            else {
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                //交换
                Data.user.CompMove(this.item_drag.linkItem.index, item.index);

                var _tmp: PlantInfo = JSON.parse(JSON.stringify(item.datacopy));
                item.setItemData(this.item_drag.datacopy);
                this.item_drag.linkItem.setItemData(_tmp);
            }
        }
        else {
            if (!e) return;
            this.item_drag.linkItem = null;
        }
    }
	
    comani(item: SoldierItem) {
        let b = Data.user.ComposePlant(item.index, this.item_drag.datacopy.index);
        this.GetGameObject("guild_1").active = false;
        if(Data.user.guideIndex == 1)
        {
            Data.user.guideIndex ++;
            Data.save();
        }
        if (!b) return;
        let nextGun = Data.user.getPlantInfo(item.index);
        item.setItemData(nextGun);
        this.GetGameObject("item_drag").active = false;

        this.item_drag.datacopy = null;
        this.item_drag.linkItem = null;
        this.autocomindexs = [-1, -1];

        var targetpos = this.GetGameObject("node_com").convertToWorldSpaceAR(item.node.position);
        targetpos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(targetpos);
            this.playSkAni("spine:other/effect_hecheng", "effect", this.GetGameObject("item_drag").parent, targetpos.add(cc.v3(0,20,0)), 1);
    }

    updateBuyButton()
    {
        let lv = Data.user.GetMaxLv() - 3;
        if(lv<1)lv = 1;
        this.SetText("lbl_buy_lvl",'LV.' + lv);
        this.SetText("lbl_buy_cost",Utils.formatNumber(Data.user.BuyPrice(lv)));
        this.SetSprite("icon_buy","texture/plants/"+(lv-1));
    }

     public tryBuyPlant(lv:number,buytype:number) {//0 coin 1 gem 2 ad 3普通掉落 4小精灵掉落

        var item: SoldierItem = null;
        for (var i = 0; i < 12; ++i) {
            if (Data.user.slots[i] == 0) continue;

            if (!this.items[i].datacopy && this.autocomindexs[0] != i && this.autocomindexs[1] != i) {
                item = this.items[i];
                break;
            }
        }
        if (!lv) {
            lv = Data.user.GetMaxLv() - 3;
            if(lv<1)lv = 1;
        }

        if (item) {
            if (buytype == 0) {
                let cost = Data.user.BuyPrice(lv);
                if (Data.user.BuyPrice(lv) > Data.user.coin) {
                    MsgHints.show("金币不足");
                    return;
                }
                Data.user.coin -= cost;
            }
            else if (buytype == 1) {
                let gem = Math.min(5, Number(DB_plant[lv - 1][6]));
                if (gem > Data.user.gem) {
                    MsgHints.show("钻石不足");
                    return;
                }
                Data.user.gem -= gem;
            }
            else {

            }
            if (buytype >= 3) {
                console.log("花盆掉落")
            }
            
            AudioMgr.Instance().playSFX("flower_pot_land")

            this.docomp(null);
            item.setItemData(Data.user.BuyPlant(item.index, lv) as PlantInfo,buytype);
            this.updateBuyButton();
            return true
        }
        else {
            if (buytype <= 2) {
                MsgHints.show("位置不够啦！");
                this.GetGameObject("btn_delete").stopAllActions();
                this.GetGameObject("btn_delete").opacity = 255;
                this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(2),cc.fadeTo(1,0)))
            }
            return false
        }
    }

    private mergetip(){
        this.touchendtime = Utils.getServerTime();
        if (this.bPauseAutoCom || this.bInAutoCom) return;
        if (!this.bInAutoCom) {
            for (let i = 0; i < this.items.length ; ++i) {
                if (!this.items[i] || !this.items[i].datacopy) continue;
                for (let j = i + 1; j < this.items.length ; ++j) {
        
                    if (!this.items[j] || !this.items[j].datacopy) continue;
                    if (this.bInAutoCom) return;
                    if (this.items[i].datacopy.lv == this.items[j].datacopy.lv && this.items[i].droptype == 0 && this.items[j].droptype == 0 && this.items[i].datacopy.lv < 60) {
                        let index1 = this.items[i].index;
                        let index2 = this.items[j].index

                        this.GetGameObject("guild_1").active = true;
                        this.GetGameObject("guild_1").zIndex = cc.macro.MAX_ZINDEX;
                        this.GetGameObject("guild_1").stopAllActions();
                        let p0 = this.GetGameObject("slots").children[index1].position;
                        let p1 = this.GetGameObject("slots").children[index2].position;
                        this.GetGameObject("guild_1").position = p0;
                        this.GetGameObject("guild_1").runAction(cc.sequence(cc.moveTo(1,cc.v2(p1.x,p1.y)),cc.moveTo(0.1,cc.v2(p0.x,p0.y))).repeatForever());
                        return;
                    }
                }
            }
        }
    }

	onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");

        switch (btnName) {
			case "btn_setting":
				Utils.createUI("prefab/SettingUI")
				break;
			case "btn_sign":
				Utils.createUI("prefab/SignUI")
				break;
			case "btn_buy":
                this.tryBuyPlant(null,0);
                this.GetGameObject("guild_0").active = false;
                if(Data.user.guideIndex==0)
                {
                    Data.user.guideIndex++;
                    Data.save();
                }
                if(Data.user.guideIndex == 1)
                {
                    this.mergetip();
                }
				break;
			case "bt_fast_gen":
				Utils.createUI("prefab/AdLayer").then((node:cc.Node)=>{
					node.getComponent(AdLayer).setType(EADLAYER.DROP_PLANT)
				})
				break;
			case "btn_angry":
				Utils.createUI("prefab/AdLayer").then((node:cc.Node)=>{
					node.getComponent(AdLayer).setType(EADLAYER.DOUBLE_ATT)
				})
				break;
			case "btn_double_coin":
				Utils.createUI("prefab/AdLayer").then((node:cc.Node)=>{
					node.getComponent(AdLayer).setType(EADLAYER.DOUBLE_INCOME)
				})
				break;
			case "bt_auto_merge":
				Utils.createUI("prefab/AdLayer").then((node:cc.Node)=>{
					node.getComponent(AdLayer).setType(EADLAYER.AUTO_COM)
				})
                break;
            case "btn_shop":
               ShopLayer.show();
                break;
            case "btn_delete":
                if(this.GetGameObject("btn_delete").opacity == 255)
                MsgHints.show("拖动到这里卖出")
                break;
            case "btn_inviate":
                WxCenter.shareAppMessage();
                break;
            case "btn_Recorder":
                if (this.bRecorder == false) {
                    cc.log("开始录屏");
                    this.bRecorder = true;
                    if (window["tt"]) {
                        const recorder = window["tt"].getGameRecorderManager();
                        recorder.start({
                            duration: 30
                        });
                    }
                }
                else {
                    cc.log("结束录屏")
                    this.bRecorder = false;
                    if (window["tt"]) {
                        const recorder = window["tt"].getGameRecorderManager();
                        recorder.stop();
                    }
                }
                break;
        }
    }
    private bFirstSubContex = true;
}
