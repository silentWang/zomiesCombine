import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
import WxCenter from "../../manager/WxCenter";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import { Config_dropAwwards } from "../Config";


const {ccclass, property} = cc._decorator;

@ccclass
export default class DropChickView extends BaseUI {
    superPot = [];
    start () {
        AdCenter.Instance().showGridAd();
        Utils.playBreath(this.GetGameObject('btn_ad'))
        WxCenter.aldReport('AirdropShow','show');
        this.addFreeAdEvent()
        this.handleFreeAd();
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }

    private getBigPot(db:boolean = false){
        var t =  ChickData.user.getLvlMax();
        var n = Config_dropAwwards[t+""][1];
        let len = db ? 8 : 4;
        let pots = [];
        for (var o = 0; o < len; o++){
            pots.push(n);
        } 
        return pots;
    }

    protected handleFreeAd(){
        let isfree = ChickData.isFreeAd;
        this.GetGameObject('icon_video').active = !isfree
        this.GetGameObject('btn_buyfree').active = !isfree
        let pos = this.GetGameObject('ad_label').getPosition()
        this.GetGameObject('ad_label').setPosition(new cc.Vec2(0,pos.y))
    }
    
    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_normal":
                WxCenter.aldReport('AirdropClick','click');
                let spt = this.getBigPot();
                ChickData.user.DropGiftPts = ChickData.user.DropGiftPts.concat(spt);
                this.closeUI();
                break;
            case "btn_ad":
                WxCenter.aldReport('AirdropClick','click');
                AdCenter.Instance().play((b)=>{
                    if(b)
                    {
                        let spt = this.getBigPot(true);
                        ChickData.user.DropGiftPts = ChickData.user.DropGiftPts.concat(spt);
                        this.closeUI();
                    }
                });
                break;
            case "btn_buyfree":
                Utils.createUI("prefab/MonthCardUI")
                break;
        }
    }

}
