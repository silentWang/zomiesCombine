import MsgToast from "../framwork/MsgToast";

export default class WxCenter {
    private static wx:any;
    private static bannerAd:any;
    private static videoAd:any;
    private static videoCallback:Function = null;
    static init(){
        this.wx = window && window['wx'];
        if(!this.wx) return;
        this.wx.onShareAppMessage(function () {
            // 用户点击了“转发”按钮
            return {
              title: '欢迎加入吃鸡小分队'
            }
        })
        // 提前加载
        this.showRewardedVideoAd(null,1,true)
    }

    static isWxEnv(){
        return window && window['wx'];
    }
    //主动
    static shareAppMessage(callback:Function = null){
        if(!this.wx) return;
        this.wx.shareAppMessage({
            title: '欢迎加入吃鸡小分队'
        });
        if(!callback) return;
        callback['keys'] = new Date().getTime();
        this.wx.onShow(()=>{
            let now = new Date().getTime();
            if(now - callback['keys'] >= 3000){
                callback();
            }
            callback = null;
        })
    }
    
    static showBanner(){
        if(!this.wx) return;
        let wx = this.wx;
        if(!this.bannerAd){
            this.bannerAd = wx.createBannerAd({
                adUnitId: 'xxxx',
                style: {
                  left: 10,
                  top: 76,
                  width: 320,
                  adIntervals:30,
                }
            })
            if(window && window['xxxxx']) window['xxxxx']("5HWkSDfZSWrTMw");
            this.bannerAd.onError(err => {
                console.log(err);
            });
        }
        this.bannerAd.show();
    }

    static hideBanner(){
        if(!this.bannerAd) return;
        this.bannerAd.hide();
    }

    static showInterstitialAd(){
        // 定义插屏广告
        let wx = this.wx;
        if(!wx) return;
        let interstitialAd = null
        // 创建插屏广告实例，提前初始化
        if (wx.createInterstitialAd){
            interstitialAd = wx.createInterstitialAd({
                adUnitId: 'adunit-c64814b155af73e6'
            })
        }
        // 在适合的场景显示插屏广告
        setTimeout(function () {
            // 在适合的场景显示插屏广告
            if (interstitialAd) {
                interstitialAd.show().then().catch((err) => {
                    console.error('插屏 广告失败:',err)
                })
                interstitialAd.onClose(res => {
                    console.log('插屏 广告关闭')
                })
                interstitialAd.onLoad(() => {
                    console.log('插屏 广告加载成功')
                })
            }
        }, 3500);
    }

    static showRewardedVideoAd(callback:Function,type:number,isinit = false){
        if(!this.wx) {
            // MsgToast.show("看了一个广告");
            // callback && callback(true);
            return;
        }
        let wx = this.wx;
        if(window && window['xxxxx']) window['xxxxx']("TFfmND");
        let adUnitId = ''
        if(type == 2){
            adUnitId = 'adunit-cad7de3569109b38'
        }
        else{
            adUnitId = 'adunit-e482dfb01207d492'
        }
        this.videoCallback = callback;
        if(!isinit){
            wx.showLoading({title:'视频加载中...',mask:true});
        }
        setTimeout(() => {
            wx.hideLoading()
        }, 3000);
        let videoAd = wx.createRewardedVideoAd({ adUnitId });
        if(isinit){
            videoAd.onClose(res => {
                // 用户点击了【关闭广告】按钮
                // 小于 2.1.0 的基础库版本，res 是一个 undefined
                wx.hideLoading()
                if (res && res.isEnded || res === undefined) {
                    // 正常播放结束，可以下发游戏奖励
                    if(window && window['xxxxx']) window['xxxxx']("MZ4rjBkGDEMcYHjpy6ewY");
                    this.videoCallback && this.videoCallback(true);
                }
                else {
                    // 播放中途退出，不下发游戏奖励
                }
            })
            videoAd.onError(error=>{
                console.log(error)
                wx.hideLoading()
                wx.showToast('视频获取失败');
            });
            return;
        }
        videoAd.show().then(res=>{
            // console.log('激励视频 广告显示')
            videoAd.load().then(() => videoAd.show()).catch(err => {
                console.log(err)
                wx.hideLoading()
                wx.showToast('视频获取失败');
            })
        })
        // 上报
        // if(videoAd.reportShareBehavior){
        //     videoAd.reportShareBehavior({
        //         operation: 2, // 1-曝光 2-点击 3-关闭 4-操作成功 5-操作失败
        //         currentShow: 0, // 0-广告 1-分享，当 operation 为 1-5 时必填
        //         strategy: 1, // 0-业务 1-微信策略
        //         adunit:adUnitId, //当前点位的adunit
        //         sceneID:type //当前点位的sceneID
        //     });
        // }
    }

    private static videoAdErrHandle(err){
        console.log('视频加载失败')
        console.log(err)
        // {errMsg: "no advertisement", errCode: 1004}
        const errHandle={
            1000:'后端接口调用失败',
            1001:'参数错误',
            1002:'广告单元无效',
            1003:'内部错误',
            1004:'无合适的广告',
            1005:'广告组件审核中',
            1006:'广告组件被驳回',
            1007:'广告组件被封禁',
            1008:'广告单元已关闭',
        }
        return errHandle[err.errCode] || '视频加载错误,重新加载页面试试吧'
    }
    /**通用统计 */
    public static aldReport(rid:string,type:string = 'show'){
        if(!this.wx || !this.wx.aldStage) return;
        let wx = this.wx;
        if(window && window['xxxxx']) window['xxxxx']("kJZjZmzMmmpFeK4NXdZ8taSPGN");
        wx.aldSendEvent(rid,{action:type});
    }
    
    public static aldLevelReport(level:number){
        if(!this.wx || !this.wx.aldStage) return;
        let wx = this.wx;
        wx.aldLevel.onSetLevel({
            levelId: level + '',  // 等级id 必传
            levelName: `等级${level}`,  // 等级名称 必传
        });
    }

}