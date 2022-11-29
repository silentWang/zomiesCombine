import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import HallScene from "../HallScene";


const {ccclass, property} = cc._decorator;

@ccclass
export default class VictoryUI extends BaseUI {
    start () {
        // this.GetGameObject("lbl_coin").opacity = 0;
        // this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(0.5),cc.fadeTo(1,255)));
        AudioMgr.Instance().playSFX("win_stage")
        this.GetSkeleton("fx_victory").setAnimation(0,"start",false);
        this.GetSkeleton("fx_victory").setAnimation(1,"idle",true);
        Utils.playBreath(this.GetGameObject('btn_get'))
    }

    private coin = 0;
    setInfo(coin:number)
    {
        this.coin = coin;
        this.SetText("lbl_coin",Utils.formatNumber(coin*2));
        this.SetText("btn_normal",`领取${Utils.formatNumber(coin)}金币`);
    }

    closeUI() {
        this.shutAnim();
        HallScene.Instance.createwave();
    }

    private getCoinReward(isdouble = false){
        let coin = isdouble ? this.coin * Utils.getRandom(1.2,2) : this.coin;
        AudioMgr.Instance().playSFX("coin");
        Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
            if(b)
            {
                Data.user.coin += coin;
                if(Data.user.lv >= 30)
                    AdCenter.Instance().showinterstitialAd();
            }  
        })
    }

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_get":
                AdCenter.Instance().play(()=>{
                    this.getCoinReward();
                    this.closeUI();
                });
                break;
            case "btn_normal":
                this.getCoinReward();
                this.closeUI();
                break;
        }
    }
}
