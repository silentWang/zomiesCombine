import MsgHints from "../framwork/MsgHints";

export default class WxCenter {
    private static wx:any;

    private static rewardVideo:any;
    static init(){
        this.wx = window && window['wx'];
        if(!this.wx) return;
        this.wx.onShareAppMessage(function () {
            // 用户点击了“转发”按钮
            return {
              title: '欢迎加入吃鸡小分队'
            }
        })
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
        let bannerAd = wx.createBannerAd({
            adUnitId: 'xxxx',
            style: {
              left: 10,
              top: 76,
              width: 320,
              adIntervals:30,
            }
          })
        bannerAd.show();
        bannerAd.onError(err => {
            console.log(err);
        });
    }

    static showRewardedVideoAd(callback:Function = null){
        if(!this.wx) {
            MsgHints.show("假装看了一个广告");
            console.log('假装看了一个广告')
            callback && callback(true);
            return;
        }
        callback && callback(true);
        let wx = this.wx;
        let videoAd = this.rewardVideo;
        if(!videoAd){
            videoAd = wx.createRewardedVideoAd({ adUnitId: 'xxxx' });
            this.rewardVideo = videoAd;
        }
        videoAd.onError(err => {
            console.log(err);
            //重新拉取
            videoAd.load().then(() => videoAd.show())
        });
        videoAd.show().then(res=>{
            // console.log('激励视频 广告显示')
            videoAd.load().then(() => videoAd.show()).catch(err => {
                wx.showToast({
                    title: WxCenter.videoAdErrHandle(err),
                    icon: 'none'
                })
            })
        })
        videoAd.onClose(res => {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
              // 正常播放结束，可以下发游戏奖励
              callback && callback(true);
            }
            else {
                // 播放中途退出，不下发游戏奖励
            }
        })
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

}