import BaseUI from "../framwork/BaseUI";
import MsgToast from "../framwork/MsgToast";
import ChickData from "../manager/ChickData";
import WxCenter from "../manager/WxCenter";
import AudioMgr from "../utils/AudioMgr";
import Utils from "../utils/Utils";
import { User_level, Config_chick, Config_ground } from "./Config";
import CommonView, { MAX_DOUBLE_ATT_TIME, MAX_DOUBLE_INCOME_TIME, MAX_AUTO_COM_TIME, MAX_DROP_PLANT_TIME, EADLAYER } from "./prefab/CommonView";
import ShareLayer from "./prefab/ShareView";
import Enemy from "./prefab/Enemy";
import FailView from "./prefab/FailView";
import RecordView from "./prefab/RecordView";
import OfflineAwardUI from "./prefab/OfflineAwardUI";
import ShopView from "./prefab/ShopView";
import WinView from "./prefab/WinView";
import GroundItem from "./GroundItem";
import ChickItem from "./ChickItem";
import { PlantInfo } from "./UserModel";
import CoinNotEnoughUI from "./prefab/CoinNotEnoughUI";


const { ccclass, property } = cc._decorator;

if(window && window['xxxxx']) window['xxxxx']("aYDFkt4MzNGJwrR3QZ2amnAF");
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

    hidComposeTips()
    {
        let slots = this.GetGameObject("slots");//fx_ground_merge
        for(var slot of slots.children)
        {
            slot.getChildByName("fx_ground_merge").active = false;
        }
    }

    showComposetips(lv:number)
    {
        let indexs = [];
        for(var item of this.items)
        {
            if(window && window['xxxxx']) window['xxxxx']("asE5tNmAMJ4jn4QDd");
            if(item.datacopy && item.datacopy.lv == lv && item.droptype == 0 && item.datacopy.lv<60)
            {
                indexs.push(item.index);
            }
        }
        let slots = this.GetGameObject("slots");//fx_ground_merge
        for(var i = 0;i<slots.children.length;++i)
        {
            slots.children[i].getChildByName("fx_ground_merge").active = indexs.indexOf(i) >=0;
        }
    }


    update(dt)
	{
        if(dt>1)dt=1;
		this.SetText("lbl_coin",Utils.formatNumber(ChickData.user.coin)+"");
        // if(this.recordertime != 0)
        // {
        //     let s = Math.floor((Utils.getServerTime() - this.recordertime)/1000);
        //     if(s>0)this.SetText("lbl_luping",s+"s");
        // }
        // else{
        //     this.SetText("lbl_luping","");
        // }

        //y排序
        if(window && window['xxxxx']) window['xxxxx']("NXGzsRnwSceZCbrfXsjH");
        this.enemylist.sort((a,b)=>{
            return b.y - a.y;
        })

        for(var i = 0;i<this.enemylist.length;++i)
        {
            this.enemylist[i].zIndex = i;
        }

        this._lastdroptime += dt;
        if(this._lastdroptime > 25 * (ChickData.user.drop_plant_time > Utils.getServerTime()?.3:1))
        {
            //普通花盆掉落
            if (this.item_drag.datacopy) return
            let lv = Math.max(1, ChickData.user.getLvlMax() - Utils.getRandomInt(6, 9));
            this.buyChick(lv, 3)
            this._lastdroptime = 0;
        }

        //一段时间不操作，提示可以合成
        if(this.touchendtime != 0 && Utils.getServerTime() - this.touchendtime > 5000)
        {
            if(window && window['xxxxx']) window['xxxxx']("wesePhK2sti2YjXPrsGDcaebt");
            this.composeTip();
        }
    }

    //中间显示图片
    public async showImage(imgpath:string)
    {
        let node = new cc.Node();
        node.addComponent(cc.Sprite).spriteFrame = await Utils.loadRes(imgpath,cc.SpriteFrame) as cc.SpriteFrame;
        node.parent = this.node;
        if(window && window['xxxxx']) window['xxxxx']("FrKksY6WWmE5DdSemBi");
        node.y = 200;
        node.scale = 1.2;
        node.runAction(cc.sequence(cc.delayTime(2),cc.spawn(cc.moveBy(0.5,0,100),cc.fadeTo(0.5,0)),cc.removeSelf()))
    }

    private bFail = false;
    enemyDie(node:cc.Node,bFail:boolean)
    {
        let isStop = false;
        let isChange = false;
        if(window && window['xxxxx']) window['xxxxx']("YC4mJADWn2ExsbPbt");
        if(bFail) this.bFail = true;
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
                if(ChickData.user.wave>= this.wave_info[2])
                {
                    ChickData.user.wave= 1;
                    isStop = true;
                    let enemy = node.getComponent(Enemy);
                    Utils.createUI("prefab/LoseUI").then((node:cc.Node)=>{
                        node.getComponent(FailView).setInfo(enemy.getBossMoney())
                    })
                }
                else
                {
                    ChickData.user.wave = 1;
                    this.showImage("texture/defeat");
                }
                if(window && window['xxxxx']) window['xxxxx']("2d6cc6kHNNHPMJKQsSyPx");
            }
            else
            {
                ChickData.user.wave++;
                isChange = true;
                if(ChickData.user.wave > this.wave_info[2])
                {
                    let enemy = node.getComponent(Enemy);
                    let money = enemy.getBossMoney();
				    this.node.runAction(cc.sequence(cc.delayTime(1.2),cc.callFunc(()=>{
                        Utils.createUI("prefab/VictoryUI").then((node:cc.Node)=>{
                            node.getComponent(WinView).setInfo(money)
                        })
                    })))
                    isStop = true;
                    ChickData.user.wave = 1;
                    ChickData.user.lv++;
                    this.openNewGround();
                    ChickData.save(true);
                    let key = ChickData.user.lv + "_" + ChickData.user.wave;
                    this.wave_info = User_level[key];
                    WxCenter.aldLevelReport(ChickData.user.lv);
                }
                else
                {
                    if(window && window['xxxxx']) window['xxxxx']("aZdRiB");
                    AudioMgr.Instance().playMX("win_wave")
                    // this.showImage("texture/success");
                    this.playSkeAni("spine:other/shengjichenggong", "effect", this.node,cc.v3(0,150,0), 2);
                }
            }
            if(isStop) return;
            this.createEnemys(isChange);
        }
    }

    private createcomplete = false;
    createEnemys(isChange:boolean = false)
    {
        this.bFail = false;
        this.createcomplete = false;

        let key = ChickData.user.lv + "_" + ChickData.user.wave;
        this.wave_info = User_level[key];

        //通关后就一直读最后一关
        if(!this.wave_info)
        {
            let key = 60 + "_" + ChickData.user.wave;
            if(window && window['xxxxx']) window['xxxxx']("ArRzG2WMzEmMZfjiWa8S6KasHz");
            this.wave_info = User_level[key];
        }

        if(ChickData.user.wave == this.wave_info[2])
        {
            AudioMgr.Instance().playMusic("bgBoss");
            this.node.runAction(cc.sequence(cc.delayTime(.8),cc.callFunc(()=>{
                Utils.createUI("prefab/BossCommingUI")
            })))
        }
        else if(ChickData.user.wave == 1)
        {
            if(window && window['xxxxx']) window['xxxxx']("B3AEM7J75BWdr3sQ7myfae");
            AudioMgr.Instance().playMusic("BGM1");
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
        if(window && window['xxxxx']) window['xxxxx']("hEXSmcDd57zwYGnDHTZrKT");
        this.SetText("lbl_cur_lv",ChickData.user.lv+"");
        this.SetText("lbl_waves",ChickData.user.wave+"/"+ this.wave_info[2]);
        this.SetText("lbl_pre_lv",(ChickData.user.lv-1)+"");
        this.SetText("lbl_nex_lv",(ChickData.user.lv+1)+"");
        if(isChange){
            Utils.playBreath(this.GetGameObject('lbl_waves'),1,3,0.5,false);
        }
    }

    public path:cc.Vec3[] = [];

	item_drag: ChickItem = null;
	autocomindexs: number[] = [-1, -1];

    private items: Array<ChickItem> = [];
    initComposeChicks() {
        var list = ChickData.user.ComPlants;
        
        let m = {};
        for (var i = list.length - 1; i >= 0; i--) {
            if(list[i].lv>60)list[i].lv=60
            if(m[list[i].index] == 1)
            {
                list.splice(i,1);
                console.warn("错误...修正")
                continue;
                if(window && window['xxxxx']) window['xxxxx']("jYEpCE24wWZ2ZGkW");
            }
            m[list[i].index] = 1;
        }

        for (var i = list.length - 1; i >= 0; i--) {
            if (this.items[list[i].index])
                this.items[list[i].index].setItemData(list[i]);
        }
        if(window && window['xxxxx']) window['xxxxx']("6sDpi");
    }
    bPauseAutoCom: boolean = false; //是否暂停自动合成
	bInAutoCom: boolean = false;     //是否正在自动合成动画
	
	getItemByPos(pos: cc.Vec2): ChickItem {
        for (var i = 0; i < this.items.length; ++i) {
            if (this.items[i].node.getBoundingBox().contains(pos)) {
                return this.items[i].node.getComponent(ChickItem);
            }
        }
        return null;
    }

	setDragPos(pos) {
        pos = this.GetGameObject("node_com").convertToWorldSpaceAR(pos);
        pos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(pos);
        this.GetGameObject("item_drag").position = pos;
        if(window && window['xxxxx']) window['xxxxx']("gdasghdasgadshgasge");
    }
	
	async start()
	{
        WxCenter.aldReport('HomeShow','show');
        this.hidComposeTips();
        HallScene._instance = this;
		let slots = this.GetGameObject("slots");
		let i = 0;
		for(var slot of slots.children){
			slot.getComponent(GroundItem).setIndex(++i);
		}
        await this.initView();

		this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(() => {
            this.startAutoCompose();
            if (this.item_drag.node.active) return
            // 小精灵掉落
            if(ChickData.user.DropGiftPts.length>0)
            {
               let b= this.buyChick(ChickData.user.DropGiftPts[0],4);
               if(b)
                   ChickData.user.DropGiftPts.shift();
            }
           //  广告购买成功，因为没有空位未成功添加
           if(window && window['xxxxx']) window['xxxxx']("hZF2RfaahNHMbEQ7X2ae");
           if(ChickData.user.AdBuyNotDrop.length>0)
            {
               let b= this.buyChick(ChickData.user.AdBuyNotDrop[0],2);
               if(b)
                   ChickData.user.AdBuyNotDrop.shift();
            }

		})).repeatForever())
        
        if(window && window['xxxxx']) window['xxxxx']("cFH6JekkpasTYZZXshHwky3ADdS3TZ");
        ChickData.user.auto_com_time = Math.max(0,ChickData.user.auto_com_time);
        ChickData.user.double_income_time = Math.max(0,ChickData.user.double_income_time);
        ChickData.user.drop_plant_time = Math.max(0,ChickData.user.drop_plant_time);
        ChickData.user.double_att_time = Math.max(0,ChickData.user.double_att_time);
        this.updateBuyButton();

         //离线奖励,暂时只给6小时的
         let stime = ChickData.user.serverTime;    
         var t = (Utils.getServerTime() - stime) / 1000;
         if (stime != 0 && t > 3*60) {
             var t = Math.min(7200 * 3, t);
             var money = ChickData.user.getOfflineReward(t/60);
             Utils.createUI('prefab/OfflineAwardUI', null, (ui) => {
                 ui.getComponent(OfflineAwardUI).data = money;
             })
         }

        for(var c of this.GetGameObject("node_path").children)
            this.path.push(c.position)

        if(window && window['xxxxx']) window['xxxxx']("kNexZXRcniiw4rXjrsny8");
        this.node.runAction(cc.sequence(cc.delayTime(3),cc.callFunc(()=>{
            this.createEnemys();
        })))

		//更新各种时间
        this.GetGameObject("bottom").runAction(cc.sequence( cc.callFunc(() => {
            let isX2In = ChickData.user.double_att_time - Utils.getServerTime() > 0;
            let isInDb = ChickData.user.double_income_time - Utils.getServerTime() > 0;
            let isDpIn = ChickData.user.drop_plant_time - Utils.getServerTime() > 0;

            //校验时间
            if (ChickData.user.double_att_time - Utils.getServerTime() > MAX_DOUBLE_ATT_TIME * 60 * 1000) {
                ChickData.user.double_att_time = Utils.getServerTime();
            }
            if (ChickData.user.double_income_time - Utils.getServerTime() > MAX_DOUBLE_INCOME_TIME * 60 * 1000) {
                ChickData.user.double_income_time = Utils.getServerTime();
            }
            if (ChickData.user.auto_com_time - Utils.getServerTime() > MAX_AUTO_COM_TIME * 60 * 1000) {
                ChickData.user.auto_com_time = Utils.getServerTime();
            }
            if (ChickData.user.drop_plant_time - Utils.getServerTime() > MAX_DROP_PLANT_TIME * 60 * 1000) {
                ChickData.user.drop_plant_time = Utils.getServerTime();
            }
            this.breathAngry(isX2In);
            this.SetText("att_x2_time", isX2In ? Utils.getTimeStrByS((ChickData.user.double_att_time - Utils.getServerTime()) / 1000) : '打鸡血');
            this.SetText("rewardx2_time", isInDb ? Utils.getTimeStrByS((ChickData.user.double_income_time - Utils.getServerTime()) / 1000) : '双倍');
            if(window && window['xxxxx']) window['xxxxx']("27Cs6Ny6nxBDyebzZxyPDPwwQr");
            if( ChickData.user.auto_com_time - Utils.getServerTime() > 0)
            {
                this.SetText("auto_time", Utils.getTimeStrByS((ChickData.user.auto_com_time - Utils.getServerTime()) / 1000));
            }
            else
            {
                this.SetText("auto_time", "自动合成");
                if(window && window['xxxxx']) window['xxxxx']("4tCfkJyFfcCPZGM3");
            }
            this.SetText("lbl_drop_plant",isDpIn ? Utils.getTimeStrByS((ChickData.user.drop_plant_time - Utils.getServerTime()) / 1000) : '掉落');
            this.GetGameObject("fx_bt_angry").active = this.GetGameObject("att_x2_time").active;
            // if(Data.user.drop_plant_time - Utils.getServerTime()<0)
            //     this.GetSprite("bt_fast_gen_process_item").fillRange = 0;
            // else
            //     this.GetSprite("bt_fast_gen_process_item").fillRange = ( (Data.user.drop_plant_time - Utils.getServerTime())/1000/60)/MAX_DROP_PLANT_TIME;// (max_drop_plant * 60 - (Data.user.drop_plant_time - Utils.getServerTime())/1000) /max_drop_plant * 60

            // this.updateUI();
            // TaskLayer.checkTask();//任务检测
            // if (GameManager.Instance().isGuide == false)
            //     this.GetGameObject("btn_auto").active = Data.user.guideIndex > 2;
            // Data.user.checkNewTody();
		}),cc.delayTime(1)).repeatForever());
        this.GetGameObject("btn_delete").opacity = 0;
        this.GetGameObject("guild_0").active = ChickData.user.guideIndex == 0;

        // if (this.GetGameObject("supermarket"))
        //     this.GetGameObject("supermarket").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(2)).repeatForever());


        // if (this.GetGameObject("powerman"))
        //     this.GetGameObject("powerman").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(3)).repeatForever());

            // this.GetGameObject("btn_inviate").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(3)).repeatForever());
        if(window && window['xxxxx']) window['xxxxx']("crrDFT");
        this.GetGameObject("lupin_gem").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(3)).repeatForever());
        
        // if (this.GetGameObject("btn_Recorder")) this.GetGameObject("btn_Recorder").active = window["tt"];
        // if (window["tt"]) {
        //     const recorder = window["tt"].getGameRecorderManager();
        //     recorder.onStart(res => {
        //         this.GetGameObject("lupin_gem").active = false;
        //         this.GetGameObject("btn_VCR").active = false;
        //         this.GetGameObject("btn_end").active = true;
        //         this.GetGameObject("btn_Recorder").stopAllActions();
        //         this.GetGameObject("btn_Recorder").runAction(cc.sequence(cc.scaleTo(0.5, .9), cc.scaleTo(0.5, 1)).repeatForever());
        //         //console.log("tt录屏开始");
        //         this.recordertime = Utils.getServerTime();
        //     });

        //     recorder.onStop(res => {
        //         this.bRecorder = false;
        //         this.GetGameObject("btn_Recorder").stopAllActions();
        //         this.GetGameObject("lupin_gem").active = true;
        //         this.GetGameObject("btn_Recorder").scale = 1;
        //         this.GetGameObject("btn_VCR").active = true;
        //         this.GetGameObject("btn_end").active = false;
        //         // console.log("tt录屏结束");
        //         // console.log(res.videoPath);
                
        //         if(window && window['xxxxx']) window['xxxxx']("4Y6PtM8mRpwk7Js");
        //         if (Utils.getServerTime() - this.recordertime < 3000) {
        //             // MsgHints.show("录屏时间过短");
        //             this.recordertime = 0
        //             return;
        //         }

        //         this.recordertime = 0
        //         Utils.createUI("prefab/LuPinResult", null, (node: cc.Node) => {
        //             node.getComponent(RecordView).setData(res);
        //         })
        //     });
        // }
        if(window && window['xxxxx']) window['xxxxx']("JZrNWSWwjtMdh7DMMhe");
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
                MsgToast.show("分享失败");
                if(window && window['xxxxx']) window['xxxxx']("CCRy5yYyFWPy3ZCC4ZdKisRx");
                Utils.sharecallback(false)
            }
        }

        Utils.sharetime = 0;
        Utils.sharecallback = null;
    }

    openNewGround(){
        let curopen = GroundItem.getNeedOpen();
        if(curopen < 0) return;
        let lv = Config_ground[curopen].price;
        if(lv < ChickData.user.lv) return;
        ChickData.user.slots[curopen] = 1;
        ChickData.save();
        let slots = this.GetGameObject("slots");
        let slot = slots.children[curopen];
        if(slot){
            slot.getComponent(GroundItem).setIndex(curopen);
            MsgToast.show("成功解锁新位置");
        }
    }

    private isInAngry = false;
    public breathAngry(isbool:boolean){
        let node = this.GetGameObject('btn_angry')
        if(!node) return;
        if(isbool) {
            if(this.isInAngry){
                if(window && window['xxxxx']) window['xxxxx']("Qf6YhWWT83xQRdHKRFEA");
                node.stopAllActions();
                node.scaleX = 1;
                node.scaleY = 1;
            }
            this.isInAngry = false;
            return;
        }
        if(this.isInAngry) return;
        this.isInAngry = true;
        if(window && window['xxxxx']) window['xxxxx']("A7mirkABh62pYWSAf3jZJWSGkTx");
        node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(() => {
            Utils.playBreath(node).setTag(2);
        })).repeat(1)).setTag(1)
    }

	@property(cc.Prefab)
    pre_soldier: cc.Prefab = null;
    async initView() {
      
        if(window && window['xxxxx']) window['xxxxx']("Wr3z7WbfdzdHThyk5wdSycf7tE");
        var node_com = this.GetGameObject("node_com");

        var index = 0;
        for (var i = 0; i < 12; ++i) {
			var node: cc.Node = cc.instantiate(this.pre_soldier);
			node.parent = node_com;
			node.position = this.GetGameObject("slots").children[i].position;// cc.v2(x, y);
			node.name = "itme" + index;
			var plant: ChickItem = node.getComponent(ChickItem);
			plant.index = index;
			this.items.push(plant);
			++index
        }

        if(window && window['xxxxx']) window['xxxxx']("eiEm7fwYHNhZ8A2MBD");
        var node_drag = cc.instantiate(this.pre_soldier);
        node_drag.parent = node_com.parent;
        node_drag.name = "item_drag";
        node_drag.x = -1000;

        this.item_drag = this.GetGameObject("item_drag").getComponent(ChickItem);
        this.item_drag.node.active = false;
        this.item_drag.bDrag = true;

        this.initComposeChicks();

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
                if(window && window['xxxxx']) window['xxxxx']("N56TrHcre6KdafZSycjhEQ");
                this.autocomindexs[1] = -1;

                this.item_drag.linkItem = null;
                this.GetGameObject("node_com").stopAllActions();
                cc.log("取消当前合成");
            }

            this.item_drag.datacopy = null;
            var pos = e.getLocation();
            pos = node_com.convertToNodeSpaceAR(pos);
            var item = this.getItemByPos(pos);

            if(window && window['xxxxx']) window['xxxxx']("yRdi6wtNfNEnZfAE");
            if(item && item.droptype != 0)
            {
                item.droptype = 0;
                item.updateItem();
            }

            if (item && item.datacopy && item.droptype == 0 ) {
                this.touchPos = pos;
                this.bChoosed = true;
                this.setDragPos(item.node.position);
                this.item_drag.index = item.index;
                this.item_drag.setItemData(item.datacopy);
                this.item_drag.linkItem = item;

                this.showComposetips(item.datacopy.lv)
            }
            else {
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
            }

        }, this);

        if(window && window['xxxxx']) window['xxxxx']("f5kDJh6Ybpa");
        node_com.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
            var pos = e.getLocation();
            pos = node_com.convertToNodeSpaceAR(pos);
            if (this.bChoosed && pos.sub(this.touchPos).mag() > 15) {
                if (this.item_drag.datacopy == null) return;
                this.GetGameObject("btn_delete").opacity = 255;

                this.item_drag.node.active = true;
                this.item_drag.linkItem.setItemData(null);
                this.setDragPos(pos);

                var pos1 = this.GetGameObject("btn_delete").position;
                pos1 = this.GetGameObject("btn_delete").parent.convertToWorldSpaceAR(pos1);
                // if (e.getLocation().sub(cc.v2(pos1.x,pos1.y)).mag() < 100) {
                //     this.GetGameObject("btn_delete").scale = 0.55;
                // }
                // else {
                //     this.GetGameObject("btn_delete").scale = 0.5;
                // }
            }
        }, this);

        node_com.on(cc.Node.EventType.TOUCH_END, this.composeHandle, this);
        if(window && window['xxxxx']) window['xxxxx']("d3yCSia2tnBPM7PW36nQB755");
        node_com.on(cc.Node.EventType.TOUCH_CANCEL, this.composeHandle, this);
    }

	bChoosed: boolean = false;
    touchPos: cc.Vec2 = cc.Vec2.ZERO;
	
    startAutoCompose() {
        if (this.bPauseAutoCom || this.bInAutoCom) return;
        if (Utils.getServerTime() < ChickData.user.auto_com_time && !this.bInAutoCom) {
            this.initComposeChicks();

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
                        if(window && window['xxxxx']) window['xxxxx']("BStDDid6P");
                        this.item_drag.node.position = this.items[j].node.position;
                        this.setDragPos(this.items[j].node);

                        var targetpos = this.GetGameObject("node_com").convertToWorldSpaceAR(this.items[i].node.position);
                        targetpos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(targetpos);

                        // cc.log("开始自动合成")
                        this.bInAutoCom = true;
                        this.item_drag.node.stopAllActions();
                        this.item_drag.node.runAction(cc.sequence(cc.moveTo(0.13, cc.v2(targetpos.x,targetpos.y)), cc.callFunc(() => {
                            if(window && window['xxxxx']) window['xxxxx']("ebxrHwwa3swPENiBhsnABspf");
                            this.showCompEff(this.items[i]);
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
    composeHandle(e: cc.Event.EventTouch) {
        this.touchendtime = Utils.getServerTime();
        this.hidComposeTips();
        this.GetGameObject("btn_delete").stopAllActions();
        this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(0.25),cc.fadeTo(0.25,0)))

        this.GetGameObject("node_com").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(() => {
            this.bPauseAutoCom = false;
            this.bInAutoCom = false;
            // cc.log("恢复自动合成")
        if(window && window['xxxxx']) window['xxxxx']("x4N");
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
                if(window && window['xxxxx']) window['xxxxx']("2np");
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                // this.GetGameObject("btn_delete").scale = 0.5;
                var tmp: number = 0;
                for (var i = 0; i < this.items.length; ++i) {
                    if (this.items[i].datacopy) tmp++;
                }

                if (tmp <= 2) {
                    if(window && window['xxxxx']) window['xxxxx']("ghdsghasewbxad");
                    MsgToast.show("小鸡数量过少不能删除");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }

                if (this.item_drag.datacopy.lv >= ChickData.user.getLvlMax()) {
                    MsgToast.show("最高等级小鸡就不删除了吧！");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }

                if(window && window['xxxxx']) window['xxxxx']("7F8CGzwFHQAwAdybBb4x");
                ChickData.user.updateSellChickCoin(this.item_drag.datacopy.index);
                this.item_drag.linkItem.setItemData(null);
                this.item_drag.linkItem = null;

                // this.updateRecruitment();
                // if (GameScene.Instance().fps > 30)
                //     this.playSkAni("spine/ui/yinliangzengjia", "effect", this.GetGameObject("btn_delete"), cc.v2(0, 20), 1);
                // return
            }

            //合成 移动  交换
            pos = this.GetGameObject("node_com").convertToNodeSpaceAR(pos);
            var item: ChickItem = this.getItemByPos(pos);

            if (item == null || ChickData.user.slots[item.index] == 0 || item == this.item_drag.linkItem || (item && item.droptype != 0)) {

                //取消
                if(this.item_drag.linkItem)
                this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                this.item_drag.linkItem = null;
                this.item_drag.node.stopAllActions();
                if(window && window['xxxxx']) window['xxxxx']("y");
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
                ChickData.user.moveEff(this.item_drag.linkItem.index, item.index);
                item.setItemData(this.item_drag.datacopy);
                if(window && window['xxxxx']) window['xxxxx']("fnefDynMBiXx2F");
                this.item_drag.linkItem.setItemData(null);
                this.item_drag.linkItem = null;
                return;
            }

            if (item.datacopy.open == this.item_drag.datacopy.open &&
                item.datacopy.lv == this.item_drag.datacopy.lv && item.datacopy.index != this.item_drag.datacopy.index && item.droptype == 0 && item.datacopy.lv<60) {
                this.showCompEff(item);
            }
            else {
                this.item_drag.node.active = false;
                if(window && window['xxxxx']) window['xxxxx']("zf4p7FCW");
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                //交换
                ChickData.user.moveEff(this.item_drag.linkItem.index, item.index);

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
	
    showCompEff(item: ChickItem) {
        let b = ChickData.user.composeChicks(item.index, this.item_drag.datacopy.index);
        this.GetGameObject("guild_1").active = false;
        if(ChickData.user.guideIndex == 1)
        {
            if(window && window['xxxxx']) window['xxxxx']("fNDzPrNkQRDxSF853Zwe7TQWwwkJ");
            ChickData.user.guideIndex ++;
            ChickData.save();
        }
        if (!b) return;
        let nextGun = ChickData.user.getChickInfo(item.index);
        item.setItemData(nextGun);
        this.GetGameObject("item_drag").active = false;

        this.item_drag.datacopy = null;
        if(window && window['xxxxx']) window['xxxxx']("SnZMS52ZRmXQSpekM");
        this.item_drag.linkItem = null;
        this.autocomindexs = [-1, -1];

        let targetpos = this.GetGameObject("node_com").convertToWorldSpaceAR(item.node.position);
        targetpos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(targetpos);
        this.playSkeAni("spine:other/effect_hecheng", "effect", this.GetGameObject("item_drag").parent, targetpos.add(cc.v3(0,20,0)), 1);
    }

    async updateBuyButton()
    {
        let lv = ChickData.user.getLvlMax() - 3;
        if(lv<1)lv = 1;
        this.SetText("lbl_buy_lvl",'LV.' + lv);
        this.SetText("lbl_buy_cost",Utils.formatNumber(ChickData.user.buyChickPrice(lv)));

        let skpath = `spine:flower${lv}_ske`;
        let atlaspath = `spine:flower${lv}_tex`;
        let chick = this.GetDragonAmature('chickbuy');
        chick.dragonAsset = await Utils.loadRes(skpath,dragonBones.DragonBonesAsset) as dragonBones.DragonBonesAsset;
        chick.dragonAtlasAsset = await Utils.loadRes(atlaspath,dragonBones.DragonBonesAtlasAsset) as dragonBones.DragonBonesAtlasAsset;
        chick.armatureName = 'Armature';
        chick.playAnimation('idleL',0);
    }
    //0 coin 1 gem 2 ad 3普通掉落 4小精灵掉落
    public buyChick(lv:number,buytype:number) {
        if(window && window['xxxxx']) window['xxxxx']("biYwQzHEFs5KKJ23");
        var item: ChickItem = null;
        for (var i = 0; i < 12; ++i) {
            if (ChickData.user.slots[i] == 0) continue;
            if (!this.items[i].datacopy && this.autocomindexs[0] != i && this.autocomindexs[1] != i) {
                item = this.items[i];
                break;
            }
            if(window && window['xxxxx']) window['xxxxx']("JfCNwMFkZrXP2EZn3phQERHMhxb");
        }
        if (!lv) {
            lv = ChickData.user.getLvlMax() - 3;
            if(lv<1)lv = 1;
        }

        if (item) {
            if(window && window['xxxxx']) window['xxxxx']("DY");
            if (buytype == 0) {
                let cost = ChickData.user.buyChickPrice(lv);
                if (ChickData.user.buyChickPrice(lv) > ChickData.user.coin) {
                    let type = 0;
                    if(ChickData.user.today_getchick_times < ChickData.user.today_getchick_total){
                        type = 1;
                    }
                    else if(ChickData.user.today_getcoin_times < ChickData.user.today_getcoin_total){
                        type = 2;
                    }
                    if(type > 0){
                        Utils.createUI("prefab/CoinNotEnough").then((node:cc.Node)=>{
                            node.getComponent(CoinNotEnoughUI).setViewType(type);
                        });
                    }
                    else{
                        MsgToast.show("金币不足");
                    }
                    return;
                }
                if(window && window['xxxxx']) window['xxxxx']("eT5WZyiJ7Z8nxGSWdcbJ");
                ChickData.user.coin -= cost;
            }
            else if (buytype == 1) {
                let gem = Math.min(5, Number(Config_chick[lv - 1][6]));
                if (gem > ChickData.user.gem) {
                    // MsgToast.show("钻石不足");
                    return;
                }
                ChickData.user.gem -= gem;
            }
            else if(buytype == 2){

            }
            else if (buytype >= 3) {
                // console.log("飞机掉落")
            }
            
            AudioMgr.Instance().playMX("flower_pot_land")

            this.composeHandle(null);
            item.setItemData(ChickData.user.buyChick(item.index, lv) as PlantInfo,buytype);
            this.updateBuyButton();
            return true
        }
        else {
            if(window && window['xxxxx']) window['xxxxx']("2ZJD5zPJYRZGMz8Sx5cX");
            if (buytype <= 2) {
                MsgToast.show("位置不够啦！");
                this.GetGameObject("btn_delete").stopAllActions();
                this.GetGameObject("btn_delete").opacity = 255;
                this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(0.25),cc.fadeTo(0.25,0)))
            }
            return false
        }
    }
        private SEaw_xxxx_fun(){ console.log("CBdm4nadpBtrd6wp"); }

    private composeTip(){
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
                        if(window && window['xxxxx']) window['xxxxx']("Mhzz3fk5jCJP");
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

	onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");

        switch (btnName) {
			case "btn_setting":
				Utils.createUI("prefab/SettingUI")
				break;
			case "btn_sign":
				Utils.createUI("prefab/SignUI")
				break;
			case "btn_buy":
                this.buyChick(null,0);
                this.GetGameObject("guild_0").active = false;
                if(ChickData.user.guideIndex == 0)
                {
                    ChickData.user.guideIndex++;
                    ChickData.save();
                }
                if(ChickData.user.guideIndex == 1)
                {
                    this.composeTip();
                }
                if(window && window['xxxxx']) window['xxxxx']("eCrirp8jJPWSSHfHs");
				break;
			case "bt_fast_gen":
				Utils.createUI("prefab/AdLayer").then((node:cc.Node)=>{
					node.getComponent(CommonView).setType(EADLAYER.DROP_PLANT)
				})
				break;
			case "btn_angry":
				Utils.createUI("prefab/AdLayer").then((node:cc.Node)=>{
					node.getComponent(CommonView).setType(EADLAYER.DOUBLE_ATT)
				})
				break;
			case "btn_double_coin":
                if(window && window['xxxxx']) window['xxxxx']("zaMpypz");
				Utils.createUI("prefab/AdLayer").then((node:cc.Node)=>{
					node.getComponent(CommonView).setType(EADLAYER.DOUBLE_INCOME)
				})
				break;
			case "bt_auto_merge":
				Utils.createUI("prefab/AdLayer").then((node:cc.Node)=>{
					node.getComponent(CommonView).setType(EADLAYER.AUTO_COM)
				})
                if(window && window['xxxxx']) window['xxxxx']("yWXK2GCrckXNNh");
                break;
            case "btn_shop":
               ShopView.show();
                break;
            case "btn_delete":
                if(this.GetGameObject("btn_delete").opacity == 255)
                MsgToast.show("拖动到这里卖出")
                break;
            case "btn_inviate":
                // WxCenter.shareAppMessage();
                WxCenter.aldReport('InvitationClick','click');
                Utils.createUI("prefab/ShareLayer").then((node:cc.Node)=>{
                    node.getComponent(ShareLayer).setData();
                })
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
                    if(window && window['xxxxx']) window['xxxxx']("YNQTK5EbC78K7");
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
}
