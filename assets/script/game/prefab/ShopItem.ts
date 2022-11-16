import BaseUI from "../../framwork/BaseUI";
import ListItem from "../../framwork/ListItem";
import MsgHints from "../../framwork/MsgHints";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import GameConst from "../GameConst";
import HallScene from "../HallScene";


const {ccclass, property} = cc._decorator;

enum GunBuyType {
    CAN_BUY = 1,
    CAN_AD_BUY= 2,
    ONLY_CHECK= 4,
    // CNNOT_SEE= 8,
    GEM_BUY= 16,
}


@ccclass
export default class ShopItem extends BaseUI {

    //观看视频免费获得的枪械等级
    private WatchAdBuy(id:number):boolean
    {
        var gunlv = Data.user.GetMaxLv();
        if(gunlv < 8)return false;
        return gunlv - 4 == id;
    }

    //不可指定购买只可查看的区间
    private OnlyCheck(id:number):boolean
    {
        var gunlv = Data.user.GetMaxLv();
        if(gunlv - 2 <= id && id <= gunlv )
        {
            return true;
        }
        return false;
    }

    private BuyGem(id:number):boolean
    {
        var gunlv = Data.user.GetMaxLv();
        return gunlv - 1 == id;
    }

    private getBuyType(gun)
    {
        var gunlv = Data.user.GetMaxLv()
        var type:number = 0;
        if(gun[0] <= gunlv - 2)
        {
            type |= GunBuyType.CAN_BUY;
        }
        if(this.WatchAdBuy(gun[0]))
        {
            type |= GunBuyType.CAN_AD_BUY;
        }
        if(this.BuyGem(gun[0]))
        {
            type |= GunBuyType.GEM_BUY;
        }
        if(this.OnlyCheck(gun[0]))
        {
            type |= GunBuyType.ONLY_CHECK;
        }

        return type;
    }


    private cost_coin:number = 0;
    private cost_gem:number = 0;
    gun:any = null;
    async setItemData(gun:any)
    {   
        // ["level", "cd", "power", "skill", "offline", "price", "gem", "prefab", "shootPos", "steakColor", "head"]
        let node = null;
        let bhide = false;
        let buytype = this.getBuyType(gun);
        this.gun = gun;

        this.GetGameObject("show").active = false;
        this.GetGameObject("hide").active = false;

        this.GetGameObject("btn_gem").active = false;
        this.GetGameObject("btn_yellow").active = false;
        this.GetGameObject("btn_free").active = false;
        this.GetGameObject("btn_gray").active = false;

        this.cost_gem = Math.min(gun[6],5);
        if((buytype & GunBuyType.GEM_BUY) != 0 && gun[6]>0)
        {
            this.GetGameObject("show").active = true;

            this.GetGameObject("btn_gem").active = true;
            node = this.GetGameObject("show");
        }
        else if((buytype & GunBuyType.CAN_AD_BUY) != 0)
        {
            this.GetGameObject("show").active = true;
            this.GetGameObject("btn_free").active = true;
            node = this.GetGameObject("show");
        }
        else if((buytype & GunBuyType.CAN_BUY) != 0)
        {
            this.GetGameObject("show").active = true;
            this.GetGameObject("btn_yellow").active = true;

           
            node = this.GetGameObject("show");
        }
        else
        {
            if((buytype & GunBuyType.ONLY_CHECK) != 0)
            {
                this.GetGameObject("show").active = true;
                this.GetGameObject("btn_gray").active = true;
                node = this.GetGameObject("show");
            }
            else
            {
                this.GetGameObject("hide").active = true;
                node = this.GetGameObject("hide");
                bhide = true;
            }
        }

        this._findInChildren(node,"lbl_lv").getComponent(cc.Label).string = ""+gun[0];
        this._findInChildren(node,"New Label").getComponent(cc.Label).string = "到"+(gun[0]+2)+'级解锁';

        let skill = gun[3].split("|");
        let skilltype = skill[0];
        let value = skill[1];

        let str = "";

        if(bhide)value = "?"
        if(skilltype == 1)
        {
            str ="技能:" + value+"%的几率触发减速目标1秒";
        }
        else if(skilltype == 2){
            str ="技能:" + value+"%几率对目标造成双倍伤害";
        }
        else if(skilltype == 3){
            str ="技能:" + value+"%几率冰冻目标1秒";
        }

        this._findInChildren(node,"lbl_name").getComponent(cc.Label).string = bhide?'未知萌鸡':gun[7];
        this._findInChildren(node,"lbl_desc").getComponent(cc.Label).string = bhide?'技能:未知':str;
        this._findInChildren(node,"lbl_cd").getComponent(cc.Label).string =bhide?"?": gun[1]+"";
        this._findInChildren(node,"lbl_power").getComponent(cc.Label).string = bhide?"?":Utils.formatNumber(gun[2])+"";
        this._findInChildren(node,"gun").getComponent(cc.Sprite).spriteFrame = await Utils.loadRes("texture/plants/"+(gun[0]-1),cc.SpriteFrame) as cc.SpriteFrame;
        // this._findInChildren(node,"gun").getComponent(cc.Sprite).spriteFrame = await Utils.loadRes("texture/plants/"+(gun[0]-1),cc.SpriteFrame) as cc.SpriteFrame;
       
        // let cs = this._findInChildren(node,"0");
        // if(gun[0]+1<60)
        // {
        //     if(cs){
        //         cs.getComponent(cc.Sprite).spriteFrame = await Utils.loadRes("texture/plants/"+(gun[0]+1),cc.SpriteFrame) as cc.SpriteFrame;
        //     }
        // }
        // else
        // {
        //     if(cs){
        //          cs.getComponent(cc.Sprite).spriteFrame = await Utils.loadRes("texture/plants/59",cc.SpriteFrame) as cc.SpriteFrame;
        //     }
        // }
        
        this.cost_coin = Data.user.BuyPrice(gun[0])
        this.SetText("lbl_buy_coin",Utils.formatNumber( this.cost_coin));
        this.GetButton("btn_yellow").interactable = Data.user.coin >= this.cost_coin;
        this.SetText("lbl_buy_gem",Utils.formatNumber( this.cost_gem));    //钻石产出少，最多就5个钻石吧
        // if(Utils.getServerTime() - DataManager.Instance().lastShareGetGunTime < GAME_CONFIG.SHARE_GET_GUN_TIME)
        // {
        //     this.GetGameObject("btn_free").active = false;
        // }
    }
    
    onBtnClicked(event, customEventData) {
        super.onBtnClicked(event,customEventData);
        var btnName = event.target.name;
        
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_free":
                AdCenter.Instance().play((b)=>{
                    if(b)
                    {
                        if(HallScene.Instance.tryBuyPlant(this.gun[0],2))
                        {
                           MsgHints.show("购买成功");
                           this.dispatch(GameConst.BUY_PLANT,this.gun,this.node.getComponent(ListItem).listId);
                        }
                    }
                })
                break
            case "btn_yellow":
                if(Data.user.coin < this.cost_coin )
                {
                    MsgHints.show("金币不足")
                    return;
                }
                if(HallScene.Instance.tryBuyPlant(this.gun[0],0))
                {
                    MsgHints.show("购买成功");
                    this.dispatch(GameConst.BUY_PLANT,this.gun,this.node.getComponent(ListItem).listId);
                }
                break;
            case "btn_gem":
                if(Data.user.gem < this.cost_gem )
                {
                    MsgHints.show("钻石不足")
                    return;
                }
                if(HallScene.Instance.tryBuyPlant(this.gun[0],1))
                {
                    MsgHints.show("购买成功");
                    this.dispatch(GameConst.BUY_PLANT,this.gun,this.node.getComponent(ListItem).listId);
                }
                break
        }
    }
}
