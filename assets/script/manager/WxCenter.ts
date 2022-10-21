export default class WxCenter {
    private static wx:any;
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
    static shareAppMessage(){
        if(!this.wx) return;
        this.wx.shareAppMessage({
            title: '欢迎加入吃鸡小分队'
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

    static showRewardedVideoAd(){
        if(!this.wx) return;
        let wx = this.wx;
        let rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'xxxx' });
        rewardedVideoAd.onError(err => {
            console.log(err);
            //重新拉取
            rewardedVideoAd.load().then(() => rewardedVideoAd.show())
        });
        rewardedVideoAd.show().then(res=>{
            console.log('激励视频 广告显示')
        });
        rewardedVideoAd.onClose(res => {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
              // 正常播放结束，可以下发游戏奖励
            }
            else {
                // 播放中途退出，不下发游戏奖励
            }
        })
    } 

}