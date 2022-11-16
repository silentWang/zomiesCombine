import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";


const {ccclass, property} = cc._decorator;

@ccclass
export default class LoseUI extends BaseUI {
    start () {
        this.GetGameObject("lbl_coin").opacity = 0;
        this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(0.5),cc.fadeTo(1,255)));

        this.GetGameObject("btn_get").active = false;

        AudioMgr.Instance().playSFX("fail")
        // this.GetSkeleton("fx_victory").setAnimation(0,"start",false);
        let t = 5;
        this.node.runAction(cc.sequence(cc.callFunc(()=>{
            console.log("---",t,Utils.getTimeStrByS(t))
            this.GetGameObject("btn_get").active = t<=4;
            this.SetText("lbl_time",Utils.getTimeStrByS(t))
            if(t<0) {
                this.getCoinReward();
                this.closeUI();
            }
            t--;
        }),cc.delayTime(1)).repeat(7))
    }

    private coin = 0;
    setInfo(coin:number)
    {
        this.coin = coin;
        this.SetText("lbl_coin",Utils.formatNumber(coin*5));
        this.SetText("btn_normal",`领取${Utils.formatNumber(coin)}金币`);
    }
    closeUI() {
        this.shutAnim();
    }

    private getCoinReward(){
        let coin = this.coin;
        AudioMgr.Instance().playSFX("coin");
        Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
            if(b) Data.user.coin+= coin
        })
    }

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_get":
                AdCenter.Instance().play(()=>{
                    this.getCoinReward();
                });
                this.closeUI();
                break;
            case 'btn_normal':
                this.getCoinReward();
                this.closeUI();
                break;    
        }
    }
}

