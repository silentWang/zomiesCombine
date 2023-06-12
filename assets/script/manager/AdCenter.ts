import Singleton from "./Singleton";
import MsgToast from "../framwork/MsgToast";

import Utils from '../utils/Utils';
import AudioMgr from "../utils/AudioMgr";

const dyTT = window["tt"];

const { ccclass, property } = cc._decorator;
export default class AdCenter extends Singleton {
    videoAdID = null;

    bannerAdID = null;

    bannerAd = null;

    interstitialAd = null

    constructor() {
        super();

        if (dyTT && dyTT.createRewardedVideoAd) {
            this.videoAdID = dyTT.createRewardedVideoAd({
                adUnitId: '73ejb9hf3j84rs5p9b'
            });

            this.videoAdID.onError((res) => {
                MsgToast.show('视频加载失败');
            });

            this.videoAdID.onLoad((res) => {
                console.log('------videoAdID---广告加载---',res);
            })

            this.videoAdID.onClose(res => {
                if (res && res.isEnded || res === undefined) {
                    cc.log("正常播放结束，可以下发游戏奖励")
                    this.callBack(true);
                }
                else {
                    cc.log("播放中途退出，不下发游戏奖励")
                    this.callBack(false);
                }
                AudioMgr.Instance().resumMusic()
            })

            this.videoAdID.load()

            // if (dyTT.createInterstitialAd) {
            //     this.interstitialAd = dyTT.createInterstitialAd({
            //         adUnitId: 'dj4bajb3m18ue2079v'
            //     })
            //     this.interstitialAd.load().catch((err)=>{
            //         console.log('interstitialAd--error--',err)
            //     })
            // }

            // let { screenWidth, screenHeight } = dyTT.getSystemInfoSync()
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
        if (Utils.getServerTime() - this._lastPlayTime < 1000) {
            console.log("点击过于频繁")
            return;
        }
        AudioMgr.Instance().pauseMusic()
        this._lastPlayTime = Utils.getServerTime();
        this.callBack = callback;
        if(dyTT){
            this.playVideo(type);
        }
        else{
            callback && callback(1)
            AudioMgr.Instance().resumMusic()
        }
        
    }

    private playVideo(type:number){
        if ( this.videoAdID) {
            let video = this.videoAdID
            dyTT.showLoading({title:'加载中'})
            setTimeout(()=>{
                dyTT.hideLoading()
            },3000)
            
            video.show().catch(() => {
                video.load().then(() => video.show())
                .catch(err => {
                    cc.log('激励视频 广告显示失败');
                    this.callBack(false);
                    AudioMgr.Instance().resumMusic()
                    MsgToast.show('视频加载失败');
                    dyTT.hideLoading()
                })
            })
        }
        else {
            this.callBack(true);
            AudioMgr.Instance().resumMusic()
        }
    }
    
    public showGridAd() 
    {
        if (this.bannerAd)
            this.bannerAd.show()
    }

    public hideGridAd() {
        if (this.bannerAd)
            this.bannerAd.hide()
    }

    public showInterstitialAd(){
        // let interAd = this.interstitialAd
        // if (interAd) {
        //     interAd.show().catch((err) => {
        //         interAd.load().then(()=>{
        //             interAd.show()
        //         }).catch((err)=>{
        //             console.log('interstitialAd--error--',err)
        //         })
        //     })
        // }
    }

}