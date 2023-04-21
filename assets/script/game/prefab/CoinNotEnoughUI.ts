// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
import WxCenter from "../../manager/WxCenter";
import AudioMgr from "../../utils/AudioMgr";
import NumberUtils from "../../utils/NumberUtils";
import Utils from "../../utils/Utils";
import { Config_chick } from "../Config";
import HallScene from "../HallScene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CoinNotEnoughUI extends BaseUI {

    @property(cc.Label)
    lbl_times: cc.Label = null;
    @property(cc.Label)
    lbl_chickname:cc.Label = null;

    // LIFE-CYCLE CALLBACKS:
    private type:number;

    // onLoad () {}

    start () {
        AdCenter.Instance().showGridAd();
        Utils.playBreath(this.GetGameObject('btn_ad'))
        this.addFreeAdEvent()
        this.handleFreeAd();
    }

    // update (dt) {}

    public async setViewType(type:number){
        this.type = type;
        this.GetGameObject('getChick').active = type == 1;
        this.GetGameObject('getCoin').active = type == 2;
        let str = '';
        if(type == 1){
            str = `${ChickData.user.today_getchick_times}/${ChickData.user.today_getchick_total}`;
            let lv = ChickData.user.getLvlMax() - 3 > 0 ? ChickData.user.getLvlMax() - 3 : 1;
            let skpath = `spine:flower${lv}_ske`;
            let atlaspath = `spine:flower${lv}_tex`;
            let chick = this.GetDragonAmature('chick');
            chick.dragonAsset = await Utils.loadRes(skpath,dragonBones.DragonBonesAsset) as dragonBones.DragonBonesAsset;
            chick.dragonAtlasAsset = await Utils.loadRes(atlaspath,dragonBones.DragonBonesAtlasAsset) as dragonBones.DragonBonesAtlasAsset;
            chick.armatureName = 'Armature';
            chick.playAnimation('idleL',0);
            this.lbl_chickname.string = `“${Config_chick[lv - 1][7]}”`;
            this.SetText('lbl_effect','x1');
        }
        else if(type == 2){
            str = `${ChickData.user.today_getcoin_times}/${ChickData.user.today_getcoin_total}`;
            let lv = ChickData.user.getLvlMax() - 1 > 0 ? ChickData.user.getLvlMax() - 1 : 1;
            let coin = 0.5*ChickData.user.buyChickPrice(lv);
            this.SetText('lbl_effect',`+${NumberUtils.getLargeString(Utils.fixFloat(coin))}`);
        }
        WxCenter.aldReport('LackShow','show');
        this.lbl_times.string = `當日次數${str}`;
    }

    private addCoin(){
        let type = this.type;
        if(type == 1){
            ChickData.user.today_getchick_times++;
            let lv = ChickData.user.getLvlMax() - 3 > 0 ? ChickData.user.getLvlMax() - 3 : 1;
            HallScene.Instance.buyChick(lv,2);
            ChickData.save();
            this.closeUI();
        }
        else if(type == 2){
            ChickData.user.today_getcoin_times++;
            let coin = 0.5*ChickData.user.buyChickPrice(ChickData.user.getLvlMax());
            AudioMgr.Instance().playMX("coin");
            Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                if(b) ChickData.user.coin += coin;
                ChickData.save();
            })
            this.closeUI();
        }
    }

    protected handleFreeAd(){
        let isfree = ChickData.isFreeAd;
        this.GetGameObject('icon_video').active = !isfree
        this.GetGameObject('btn_buyfree').active = !isfree
        if(isfree){
            let pos = this.GetGameObject('ad_label').getPosition()
            this.GetGameObject('ad_label').setPosition(new cc.Vec2(0,pos.y))
        }
    }

    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
            case "btn_normal":
                this.closeUI();
                break;
            case "btn_ad":
                WxCenter.aldReport('LackClick','click');
                AdCenter.Instance().play((b)=>{
                    if(b) this.addCoin();
                });
                break;
            case "btn_buyfree":
                Utils.createUI("prefab/MonthCardUI")
                break;
        }
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }
}
