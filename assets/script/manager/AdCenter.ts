import Singleton from "./Singleton";
import MsgToast from "../framwork/MsgToast";

import Utils from '../utils/Utils';
import WxCenter from "./WxCenter";
import { Native } from "../utils/Native";
const tt = window["tt"];

const { ccclass, property } = cc._decorator;
export default class AdCenter extends Singleton {
    videoAdID = null;

    bannerAdID = null;

    bannerAd = null;

    constructor() {
        super();

        if (tt && tt.createRewardedVideoAd) {
            this.videoAdID = tt.createRewardedVideoAd({
                adUnitId: '1r3lbfr4d9e6veouju'
            });

            if(window && window['xxxxx']) window['xxxxx']("cM5zM6kQEi");
            this.videoAdID.onError((res) => {
                console.log("onError", res);
                // MsgToast.show("广告加载错误");
            });

            this.videoAdID.onLoad(() => {
                // console.log('广告加载成功');
            })

            this.videoAdID.onClose(res => {
                if (res && res.isEnded || res === undefined) {
                    // cc.log("正常播放结束，可以下发游戏奖励")
                    this.callBack(true);
                }
                else {
                    // cc.log("播放中途退出，不下发游戏奖励")
                    this.callBack(false);
                }
            })

            if (tt.createInterstitialAd) {
                this.interstitialAd = tt.createInterstitialAd({
                    adUnitId: '60jin0has9p2b8n774'
                })
            }

            let { screenWidth, screenHeight } = tt.getSystemInfoSync()
            this.bannerAd = tt.createBannerAd({
                adUnitId: '3a3ld4b071g57lnlji',
                style: { width: screenWidth,
                    top:screenHeight - 150 }
            })
        }
    }

    interstitialAd = null
    public showBigPicAd() {
        // 在适合的场景显示插屏广告
        if (this.interstitialAd) {
            this.interstitialAd.show().catch((err) => {
                console.log(err);
            })
        }
    }

    private callBack: Function;
    private _lastPlayTime: number = 0;
    public play(callback: Function, adunitId:string) {
        if (Utils.getServerTime() - this._lastPlayTime < 1000) {
            console.log("点击过于频繁")
            return;
        }
        this._lastPlayTime = Utils.getServerTime();
        this.callBack = callback;
        if(cc.sys.os === cc.sys.OS_IOS){
            Native.playVideoAd(callback,adunitId);
        }
        else{
            callback && callback(1)
        }
    }

    public showGridAd() 
    {
        if(WxCenter.isWxEnv()){
            WxCenter.showBanner();
        }
        else{
            if (this.bannerAd)
                this.bannerAd.show()
        }
    }

    public hideGridAd() {
        if(WxCenter.isWxEnv()){
            WxCenter.hideBanner();
        }
        else{
            if (this.bannerAd)
                this.bannerAd.hide()
        }
    }

    public showInterstitialAd(adunit:string){
        Native.showInterstitialAd(adunit)
    }

}