import Singleton from "./Singleton";
import MsgToast from "../framwork/MsgToast";

import Utils from '../utils/Utils';
import WxCenter from "./WxCenter";
const tt = window["tt"];

const { ccclass, property } = cc._decorator;
export default class AdCenter extends Singleton {
    videoAdID = null;

    bannerAdID = null;

    bannerAd = null;

    interstitialAd = null

    constructor() {
        super();

        if (tt && tt.createRewardedVideoAd) {
            this.videoAdID = tt.createRewardedVideoAd({
                adUnitId: '70hhbiamja091f0fhk'
            });

            if(window && window['xxxxx']) window['xxxxx']("cM5zM6kQEi");
            this.videoAdID.onError((res) => {
                console.log("onError", res);
                MsgToast.show("广告加载失败");
                MsgToast.show('视频加载失败');
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
                    adUnitId: 'dj4bajb3m18ue2079v'
                })
            }

            let { screenWidth, screenHeight } = tt.getSystemInfoSync()
            // this.bannerAd = tt.createBannerAd({
            //     adUnitId: '3a3ld4b071g57lnlji',
            //     style: { width: screenWidth,
            //         top:screenHeight - 150 }
            // })
        }
    }

    private callBack: Function;
    private _lastPlayTime: number = 0;
    public play(callback: Function, type:number) {
        if(window && window['xxxxx']) window['xxxxx']("xYBwNjGb4PRGfc678KbNpCti");
        if (Utils.getServerTime() - this._lastPlayTime < 1000) {
            console.log("点击过于频繁")
            return;
        }
        this._lastPlayTime = Utils.getServerTime();
        this.callBack = callback;
        if(tt){
            this.playVideo(type);
        }
        else if(WxCenter.isWxEnv()){
            WxCenter.showRewardedVideoAd(callback,type);
        }
        else{
            callback && callback(1)
        }

    }

    private playVideo(type:number){
        if ( this.videoAdID) {
            let unitid = type == 2 ? '4o7jsa34etoo0hbgrk' : '70hhbiamja091f0fhk'
            this.videoAdID = tt.createRewardedVideoAd({
                adUnitId: unitid
            });
            this.videoAdID.show().catch(() => {
                this.videoAdID.load()
                    .then(() => this.videoAdID.show())
                    .catch(err => {
                        cc.log('激励视频 广告显示失败');
                        this.callBack(false);
                        MsgToast.show('视频加载失败');
                    })
            })
        }
        else {
            this.callBack(true);
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
        if(window && window['xxxxx']) window['xxxxx']("3DmJjHm2mF8Z");
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

    public showInterstitialAd(){
        if(WxCenter.isWxEnv()){
            WxCenter.showInterstitialAd();
        }
        else if (this.interstitialAd) {
            this.interstitialAd.show().catch((err) => {
                console.log(err);
            })
        }
    }

}