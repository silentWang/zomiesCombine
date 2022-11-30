import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import WxCenter from "../../manager/WxCenter";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import { DB_droneRewards } from "../DB";


const {ccclass, property} = cc._decorator;

@ccclass
export default class FairyBonusUI extends BaseUI {
    superPot = [];
    start () {
        AdCenter.Instance().showGridAd();
        Utils.playBreath(this.GetGameObject('btn_ad'))
        WxCenter.aldReport('AirdropShow','show');
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }

    private getSuperPot(db:boolean = false){
        var t =  Data.user.GetMaxLv();
        var n = DB_droneRewards[t+""][1];
        let len = db ? 8 : 4;
        let pots = [];
        for (var o = 0; o < len; o++){
            pots.push(n);
        } 
        return pots;
    }
    
    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_normal":
                WxCenter.aldReport('AirdropClick','click');
                let spt = this.getSuperPot();
                Data.user.DropGiftPts = Data.user.DropGiftPts.concat(spt);
                this.closeUI();
                break;
            case "btn_ad":
                WxCenter.aldReport('AirdropClick','click');
                AdCenter.Instance().play((b)=>{
                    if(b)
                    {
                        let spt = this.getSuperPot(true);
                        Data.user.DropGiftPts = Data.user.DropGiftPts.concat(spt);
                        this.closeUI();
                    }
                });
                break;
        }
    }

}
