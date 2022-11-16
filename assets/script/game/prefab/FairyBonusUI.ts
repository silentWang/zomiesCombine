import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import { DB_droneRewards } from "../DB";


const {ccclass, property} = cc._decorator;

@ccclass
export default class FairyBonusUI extends BaseUI {
     superPot = [];
    start () {
        var t =  Data.user.GetMaxLv();
        var n = DB_droneRewards[t+""][1];
        
        for (var o = 0; o < 4; o++) 
            this.superPot.push(n);

        AdCenter.Instance().showGridAd();
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }
    
    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_ad":
                AdCenter.Instance().play((b)=>{
                    if(b)
                    {
                        Data.user.DropGiftPts = Data.user.DropGiftPts.concat(this.superPot);
                        this.closeUI();
                    }
                });
                break;
        }
    }

}
