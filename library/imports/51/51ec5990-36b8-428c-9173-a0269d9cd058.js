"use strict";
cc._RF.push(module, '51ec5mQNrhCjJFzoCadnNBY', 'WxCenter');
// script/manager/WxCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MsgHints_1 = require("../framwork/MsgHints");
var WxCenter = /** @class */ (function () {
    function WxCenter() {
    }
    WxCenter.init = function () {
        this.wx = window && window['wx'];
        if (!this.wx)
            return;
        this.wx.onShareAppMessage(function () {
            // 用户点击了“转发”按钮
            return {
                title: '欢迎加入吃鸡小分队'
            };
        });
    };
    //主动
    WxCenter.shareAppMessage = function (callback) {
        if (callback === void 0) { callback = null; }
        if (!this.wx)
            return;
        this.wx.shareAppMessage({
            title: '欢迎加入吃鸡小分队'
        });
        if (!callback)
            return;
        callback['keys'] = new Date().getTime();
        this.wx.onShow(function () {
            var now = new Date().getTime();
            if (now - callback['keys'] >= 3000) {
                callback();
            }
            callback = null;
        });
    };
    WxCenter.showBanner = function () {
        if (!this.wx)
            return;
        var wx = this.wx;
        var bannerAd = wx.createBannerAd({
            adUnitId: 'xxxx',
            style: {
                left: 10,
                top: 76,
                width: 320,
                adIntervals: 30,
            }
        });
        bannerAd.show();
        bannerAd.onError(function (err) {
            console.log(err);
        });
    };
    WxCenter.showRewardedVideoAd = function (callback) {
        if (callback === void 0) { callback = null; }
        if (!this.wx) {
            MsgHints_1.default.show("假装看了一个广告");
            console.log('假装看了一个广告');
            callback && callback(true);
            return;
        }
        callback && callback(true);
        var wx = this.wx;
        var rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'xxxx' });
        rewardedVideoAd.onError(function (err) {
            console.log(err);
            //重新拉取
            rewardedVideoAd.load().then(function () { return rewardedVideoAd.show(); });
        });
        rewardedVideoAd.show().then(function (res) {
            // console.log('激励视频 广告显示')
        });
        rewardedVideoAd.onClose(function (res) {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励
                callback && callback(true);
            }
            else {
                // 播放中途退出，不下发游戏奖励
            }
        });
    };
    return WxCenter;
}());
exports.default = WxCenter;

cc._RF.pop();