import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
import WxCenter from "../../manager/WxCenter";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import HallScene from "../HallScene";


const {ccclass, property} = cc._decorator;

@ccclass
export default class WinView extends BaseUI {
    start () {
        AudioMgr.Instance().playSFX("win_stage")
        this.GetSkeleton("fx_victory").setAnimation(0,"start",false);
        this.GetSkeleton("fx_victory").setAnimation(1,"idle",true);
        Utils.playBreath(this.GetGameObject('btn_get'))
        WxCenter.aldReport('PassShow','show');
    }

    private coin = 0;
    setInfo(coin:number)
    {
        this.coin = coin;
        this.aTobAnim(coin*2);
        this.SetText("btn_normal",`领取${Utils.formatNumber(coin)}金币`);
    }

    private aTobAnim(num:number){
        let aver = Math.ceil(num/60);
        let xn = 0;
        this.SetText("lbl_coin",Utils.formatNumber(0));
        let cb = ()=>{
            xn += aver;
            if(xn >= num){
                xn = num;
                this.unschedule(cb);
            }
            this.SetText("lbl_coin",Utils.formatNumber(xn));
        }
        this.schedule(cb,0,61);
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
                ChickData.user.coin += coin;
                if(ChickData.user.lv >= 30)
                    AdCenter.Instance().showinterstitialAd();
            }  
        })
    }

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_get":
                WxCenter.aldReport('PassClick','click');
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
