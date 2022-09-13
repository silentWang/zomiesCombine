import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";


const {ccclass, property} = cc._decorator;

@ccclass
export default class VictoryUI extends BaseUI {
    start () {
        // this.GetGameObject("lbl_coin").opacity = 0;
        // this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(0.5),cc.fadeTo(1,255)));

        AudioMgr.Instance().playSFX("win_stage")
        this.GetSkeleton("fx_victory").setAnimation(0,"start",false);
        this.GetSkeleton("fx_victory").setAnimation(1,"idle",true);

        this.GetGameObject("btn_get").active = false;
        let t = 5;
        this.node.runAction(cc.sequence(cc.callFunc(()=>{
            console.log("---",t,Utils.getTimeStrByS(t))
            this.SetText("lbl_time",Utils.getTimeStrByS(t))
            this.GetGameObject("btn_get").active = t<=4;
            if(t<0)this.closeUI();
            t--;
        }),cc.delayTime(1)).repeat(7))
    }

    private coin = 0;
    setInfo(coin:number)
    {
        this.coin = coin;
        this.SetText("lbl_coin",Utils.formatNumber(coin));
    }

    closeUI() {
        let coin = this.coin;
        
        AudioMgr.Instance().playSFX("coin");
        Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
            if(b)
            {
                Data.user.coin+= coin;
                if(Data.user.lv>=30)
                    AdCenter.Instance().showinterstitialAd();
            }  
        })
        this.shutAnim();
    }

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_get":
                this.closeUI();
                break;
        }
    }
}
