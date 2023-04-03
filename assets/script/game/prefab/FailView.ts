import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
import WxCenter from "../../manager/WxCenter";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import HallScene from "../HallScene";


const {ccclass, property} = cc._decorator;

@ccclass
export default class FailView extends BaseUI {
    start () {
        this.GetGameObject("lbl_coin").opacity = 0;
        this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(0.5),cc.fadeTo(1,255)));
        AudioMgr.Instance().playMX("fail")
        Utils.playBreath(this.GetGameObject('btn_get'))
        WxCenter.aldReport('FailShow','show');
    }

    private coin = 0;
    setInfo(coin:number)
    {
        this.coin = coin;
        this.aTobAnim(coin*1.8);
        this.SetText("btn_normal",`领取${Utils.formatNumber(coin)}金币`);
    }
        private FcMb_xxxx_fun(){ console.log("CcXaFhTmA53RKRMHjJpQNE2kd"); }

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
        HallScene.Instance.createEnemys();
    }

    private getCoinReward(){
        let coin = this.coin;
        AudioMgr.Instance().playMX("coin");
        Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
            if(b) ChickData.user.coin+= coin
        })
    }

    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
                this.getCoinReward();
                this.closeUI();
                break;
            case "btn_get":
                WxCenter.aldReport('FailClick','click');
                AdCenter.Instance().play(()=>{
                    this.getCoinReward();
                    this.closeUI();
                },'1');
                break;
            case 'btn_normal':
                this.getCoinReward();
                this.closeUI();
                break;
            case "btn_buyfree":
                // to do
                break;    
        }
    }
}

