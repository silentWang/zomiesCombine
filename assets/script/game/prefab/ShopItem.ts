import BaseUI from "../../framwork/BaseUI";
import ListItem from "../../framwork/ListItem";
import MsgToast from "../../framwork/MsgToast";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
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


if(window && window['xxxxx']) window['xxxxx']("bP");
@ccclass
export default class ShopItem extends BaseUI {

    //观看视频免费获得的枪械等级
    private ShowBuyAd(id:number):boolean
    {
        var gunlv = ChickData.user.getLvlMax();
        if(gunlv < 8)return false;
        return gunlv - 4 == id;
    }

    //不可指定购买只可查看的区间
    private OnlyForCheck(id:number):boolean
    {
        var gunlv = ChickData.user.getLvlMax();
        if(gunlv - 2 <= id && id <= gunlv )
        {
            return true;
        }
        return false;
    }

    private BuyDiamond(id:number):boolean
    {
        var gunlv = ChickData.user.getLvlMax();
        return gunlv - 1 == id;
    }

    private getBuyCoinType(gun)
    {
        if(window && window['xxxxx']) window['xxxxx']("sbPmZdfXXDjTAt8jMiBxiYRpYc");
        var gunlv = ChickData.user.getLvlMax()
        var type:number = 0;
        if(gun[0] <= gunlv - 2)
        {
            type |= GunBuyType.CAN_BUY;
        }
        if(this.ShowBuyAd(gun[0]))
        {
            type |= GunBuyType.CAN_AD_BUY;
            if(window && window['xxxxx']) window['xxxxx']("2DcHAZtJXdSC52eFrbe3mH6P");
        }
        if(this.BuyDiamond(gun[0]))
        {
            type |= GunBuyType.GEM_BUY;
        }
        if(this.OnlyForCheck(gun[0]))
        {
            type |= GunBuyType.ONLY_CHECK;
        }

        return type;
    }

    private cost_coin:number = 0;
    gun:any = null;
    async setShopItemData(gun:any)
    {   
        // ["level", "cd", "power", "skill", "offline", "price", "gem", "prefab", "shootPos", "steakColor", "head"]
        let node = null;
        let bhide = false;
        let buytype = this.getBuyCoinType(gun);
        this.gun = gun;

        this.GetGameObject("show").active = false;
        this.GetGameObject("hide").active = false;

        this.GetGameObject("btn_yellow").active = false;
        this.GetGameObject("btn_free").active = false;
        this.GetGameObject("btn_gray").active = false;
        
        if((buytype & GunBuyType.GEM_BUY) != 0 && gun[6]>0)
        {
            this.GetGameObject("show").active = true;
            node = this.GetGameObject("show");
        }
        else if((buytype & GunBuyType.CAN_AD_BUY) != 0)
        {
            if(window && window['xxxxx']) window['xxxxx']("r4jsxj435tPSfynCkPTf7DyGmJK647");
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
                if(window && window['xxxxx']) window['xxxxx']("nS68yQymxN46JakxX");
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

        if(bhide) value = "?"
        if(skilltype == 1)
        {
            str ="技能:" + value+"%的几率触发减速目标1秒";
        }
        else if(skilltype == 2){
            if(window && window['xxxxx']) window['xxxxx']("eHSD5Sz6yyaBHAnj62TiYAmwkFnFz");
            str ="技能:" + value+"%几率对目标造成双倍伤害";
        }
        else if(skilltype == 3){
            str ="技能:" + value+"%几率冰冻目标1秒";
        }

        this._findInChildren(node,"lbl_name").getComponent(cc.Label).string = bhide?'未知萌鸡':gun[7];
        this._findInChildren(node,"lbl_desc").getComponent(cc.Label).string = bhide?'技能:未知':str;
        this._findInChildren(node,"lbl_cd").getComponent(cc.Label).string =bhide?"?": gun[1]+"";
        this._findInChildren(node,"lbl_power").getComponent(cc.Label).string = bhide?"?":Utils.formatNumber(gun[2])+"";
        
        if(!bhide){
            let skpath = `spine:flower${gun[0]}_ske`;
            let atlaspath = `spine:flower${gun[0]}_tex`;
            let chick = this.GetDragonAmature('shopChick');
            chick.dragonAsset = await Utils.loadRes(skpath,dragonBones.DragonBonesAsset) as dragonBones.DragonBonesAsset;
            chick.dragonAtlasAsset = await Utils.loadRes(atlaspath,dragonBones.DragonBonesAtlasAsset) as dragonBones.DragonBonesAtlasAsset;
            chick.armatureName = 'Armature';
            chick.playAnimation('idleL',0);
        }
        
        this.cost_coin = ChickData.user.buyChickPrice(gun[0])
        this.SetText("lbl_buy_coin",Utils.formatNumber( this.cost_coin));
        this.GetButton("btn_yellow").interactable = ChickData.user.coin >= this.cost_coin;
    }
    
    onUIClicked(event, customEventData) {
        super.onUIClicked(event,customEventData);
        var btnName = event.target.name;
        
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btn_free":
                AdCenter.Instance().play((b)=>{
                    if(b)
                    {
                        if(HallScene.Instance.buyChick(this.gun[0],2))
                        {
                           MsgToast.show("购买成功");
                           this.dispatch(GameConst.BUY_CHICK,this.gun,this.node.getComponent(ListItem).listId);
                        }
                    }
                },1)
                break
            case "btn_yellow":
                if(ChickData.user.coin < this.cost_coin )
                {
                    MsgToast.show("金币不足")
                    return;
                }
                if(HallScene.Instance.buyChick(this.gun[0],0))
                {
                    MsgToast.show("购买成功");
                    this.dispatch(GameConst.BUY_CHICK,this.gun,this.node.getComponent(ListItem).listId);
                }
                break;
        }
    }
}
