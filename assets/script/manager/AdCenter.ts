import Singleton from "./Singleton";
import MsgToast from "../framwork/MsgToast";

import Utils from '../utils/Utils';
import WxCenter from "./WxCenter";
const tt = window["tt"];

const { ccclass, property } = cc._decorator;
export default class AdCenter extends Singleton {
    VideoAd = null;

    bannerAd = null;

    constructor() {
        super();

        if (tt && tt.createRewardedVideoAd) {
            this.VideoAd = tt.createRewardedVideoAd({
                adUnitId: '1r3lbfr4d9e6veouju'
            });

            this.VideoAd.onError((res) => {
                console.log("onError", res);
                // MsgToast.show("广告加载错误");
            });

            this.VideoAd.onLoad(() => {
                // console.log('广告加载成功');
            })

            this.VideoAd.onClose(res => {
                if (res && res.isEnded || res === undefined) {
                    // cc.log("正常播放结束，可以下发游戏奖励")
                    this.callBack(true);
                }
                else {
                    // cc.log("播放中途退出，不下发游戏奖励")
                    this.callBack(false);
                }
            })

            // if (tt.createInterstitialAd) {
            //     this.interstitialAd = tt.createInterstitialAd({
            //         adUnitId: '60jin0has9p2b8n774'
            //     })
            // }

            // let { screenWidth, screenHeight } = tt.getSystemInfoSync()
            // this.bannerAd = tt.createBannerAd({
            //     adUnitId: '3a3ld4b071g57lnlji',
            //     style: { width: screenWidth,
            //         top:screenHeight - 150 }
            // })
        }
    }

    interstitialAd = null
    public showinterstitialAd() {
        // 在适合的场景显示插屏广告
        if (this.interstitialAd) {
            this.interstitialAd.show().catch((err) => {
                console.log(err);
            })
        }
    }

    public showGridAd() 
    {
        // if (this.bannerAd)
        //     this.bannerAd.show()
        WxCenter.showBanner();
    }

    public hideGridAd() {
        // if (this.bannerAd)
        //     this.bannerAd.hide()
        WxCenter.hideBanner();
    }

    private callBack: Function;
    private _lasttryplaytime: number = 0;
    public play(callback: Function, type:number = 0) {
        if (Utils.getServerTime() - this._lasttryplaytime < 1000) {
            console.log("点击过于频繁")
            return;
        }
        this._lasttryplaytime = Utils.getServerTime();
        this.callBack = callback;
        WxCenter.showRewardedVideoAd(callback);
        // this.dyShowVideo();
    }

    private dyShowVideo(){
        if ( this.VideoAd) {
            this.VideoAd.show().catch(() => {
                this.VideoAd.load()
                    .then(() => this.VideoAd.show())
                    .catch(err => {
                        cc.log('激励视频 广告显示失败');
                        this.callBack(false);
                    })
            })
        }
        else {
            this.callBack(true);
        }
    }

}