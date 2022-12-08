
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/WxCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51ec5mQNrhCjJFzoCadnNBY', 'WxCenter');
// script/manager/WxCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MsgToast_1 = require("../framwork/MsgToast");
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
        if (!this.bannerAd) {
            this.bannerAd = wx.createBannerAd({
                adUnitId: 'xxxx',
                style: {
                    left: 10,
                    top: 76,
                    width: 320,
                    adIntervals: 30,
                }
            });
            this.bannerAd.onError(function (err) {
                console.log(err);
            });
        }
        this.bannerAd.show();
    };
    WxCenter.hideBanner = function () {
        if (!this.bannerAd)
            return;
        this.bannerAd.hide();
    };
    WxCenter.showRewardedVideoAd = function (callback) {
        if (callback === void 0) { callback = null; }
        if (!this.wx) {
            MsgToast_1.default.show("看了一个广告");
            console.log('看了一个广告');
            callback && callback(true);
            return;
        }
        callback && callback(true);
        var wx = this.wx;
        var videoAd = this.rewardVideo;
        if (!videoAd) {
            videoAd = wx.createRewardedVideoAd({ adUnitId: 'xxxx' });
            this.rewardVideo = videoAd;
            videoAd.onError(function (err) {
                console.log(err);
                //重新拉取
                videoAd.load().then(function () { return videoAd.show(); });
            });
            videoAd.onClose(function (res) {
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
        }
        videoAd.show().then(function (res) {
            // console.log('激励视频 广告显示')
            videoAd.load().then(function () { return videoAd.show(); }).catch(function (err) {
                wx.showToast({
                    title: WxCenter.videoAdErrHandle(err),
                    icon: 'none'
                });
            });
        });
    };
    WxCenter.videoAdErrHandle = function (err) {
        console.log('视频加载失败');
        console.log(err);
        // {errMsg: "no advertisement", errCode: 1004}
        var errHandle = {
            1000: '后端接口调用失败',
            1001: '参数错误',
            1002: '广告单元无效',
            1003: '内部错误',
            1004: '无合适的广告',
            1005: '广告组件审核中',
            1006: '广告组件被驳回',
            1007: '广告组件被封禁',
            1008: '广告单元已关闭',
        };
        return errHandle[err.errCode] || '视频加载错误,重新加载页面试试吧';
    };
    /**通用统计 */
    WxCenter.aldReport = function (rid, type) {
        if (type === void 0) { type = 'show'; }
        if (!this.wx || !this.wx.aldStage)
            return;
        var wx = this.wx;
        wx.aldSendEvent(rid, { action: type });
    };
    WxCenter.aldLevelReport = function (level) {
        if (!this.wx || !this.wx.aldStage)
            return;
        var wx = this.wx;
        wx.aldLevel.onSetLevel({
            levelId: level + '',
            levelName: "\u7B49\u7EA7" + level,
        });
    };
    return WxCenter;
}());
exports.default = WxCenter;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO0lBa0lBLENBQUM7SUE5SFUsYUFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QixjQUFjO1lBQ2QsT0FBTztnQkFDTCxLQUFLLEVBQUUsV0FBVzthQUNuQixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUM7Z0JBQzlCLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0ks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LEVBQUUsS0FBSyxHQUFHLEVBQUU7WUFDbkIsU0FBUyxFQUFFLGlCQUFLLEtBQU87U0FDMUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQWxJQSxBQWtJQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3hDZW50ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgd3g6YW55O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmFubmVyQWQ6YW55O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmV3YXJkVmlkZW86YW55O1xyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB0aGlzLnd4ID0gd2luZG93ICYmIHdpbmRvd1snd3gnXTtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMud3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobigJzovazlj5HigJ3mjInpkq5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+asoui/juWKoOWFpeWQg+m4oeWwj+WIhumYnydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+S4u+WKqFxyXG4gICAgc3RhdGljIHNoYXJlQXBwTWVzc2FnZShjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy53eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+asoui/juWKoOWFpeWQg+m4oeWwj+WIhumYnydcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZighY2FsbGJhY2spIHJldHVybjtcclxuICAgICAgICBjYWxsYmFja1sna2V5cyddID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy53eC5vblNob3coKCk9PntcclxuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBpZihub3cgLSBjYWxsYmFja1sna2V5cyddID49IDMwMDApe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIHNob3dCYW5uZXIoKXtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgaWYoIXRoaXMuYmFubmVyQWQpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkID0gd3guY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICd4eHh4JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICB0b3A6IDc2LFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzIwLFxyXG4gICAgICAgICAgICAgICAgICBhZEludGVydmFsczozMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5vbkVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iYW5uZXJBZC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGVCYW5uZXIoKXtcclxuICAgICAgICBpZighdGhpcy5iYW5uZXJBZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYmFubmVyQWQuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93UmV3YXJkZWRWaWRlb0FkKGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHtcclxuICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIueci+S6huS4gOS4quW5v+WRilwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eci+S6huS4gOS4quW5v+WRiicpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgbGV0IHZpZGVvQWQgPSB0aGlzLnJld2FyZFZpZGVvO1xyXG4gICAgICAgIGlmKCF2aWRlb0FkKXtcclxuICAgICAgICAgICAgdmlkZW9BZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7IGFkVW5pdElkOiAneHh4eCcgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkVmlkZW8gPSB2aWRlb0FkO1xyXG4gICAgICAgICAgICB2aWRlb0FkLm9uRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAvL+mHjeaWsOaLieWPllxyXG4gICAgICAgICAgICAgICAgdmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB2aWRlb0FkLnNob3coKSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZpZGVvQWQub25DbG9zZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzIOaYr+S4gOS4qiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmlzRW5kZWQgfHwgcmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8g5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZGVvQWQuc2hvdygpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pi+56S6JylcclxuICAgICAgICAgICAgdmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB2aWRlb0FkLnNob3coKSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFd4Q2VudGVyLnZpZGVvQWRFcnJIYW5kbGUoZXJyKSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB2aWRlb0FkRXJySGFuZGxlKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+inhumikeWKoOi9veWksei0pScpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIC8vIHtlcnJNc2c6IFwibm8gYWR2ZXJ0aXNlbWVudFwiLCBlcnJDb2RlOiAxMDA0fVxyXG4gICAgICAgIGNvbnN0IGVyckhhbmRsZT17XHJcbiAgICAgICAgICAgIDEwMDA6J+WQjuerr+aOpeWPo+iwg+eUqOWksei0pScsXHJcbiAgICAgICAgICAgIDEwMDE6J+WPguaVsOmUmeivrycsXHJcbiAgICAgICAgICAgIDEwMDI6J+W5v+WRiuWNleWFg+aXoOaViCcsXHJcbiAgICAgICAgICAgIDEwMDM6J+WGhemDqOmUmeivrycsXHJcbiAgICAgICAgICAgIDEwMDQ6J+aXoOWQiOmAgueahOW5v+WRiicsXHJcbiAgICAgICAgICAgIDEwMDU6J+W5v+WRiue7hOS7tuWuoeaguOS4rScsXHJcbiAgICAgICAgICAgIDEwMDY6J+W5v+WRiue7hOS7tuiiq+mps+WbnicsXHJcbiAgICAgICAgICAgIDEwMDc6J+W5v+WRiue7hOS7tuiiq+WwgeemgScsXHJcbiAgICAgICAgICAgIDEwMDg6J+W5v+WRiuWNleWFg+W3suWFs+mXrScsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJIYW5kbGVbZXJyLmVyckNvZGVdIHx8ICfop4bpopHliqDovb3plJnor68s6YeN5paw5Yqg6L296aG16Z2i6K+V6K+V5ZCnJ1xyXG4gICAgfVxyXG4gICAgLyoq6YCa55So57uf6K6hICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZFJlcG9ydChyaWQ6c3RyaW5nLHR5cGU6c3RyaW5nID0gJ3Nob3cnKXtcclxuICAgICAgICBpZighdGhpcy53eCB8fCAhdGhpcy53eC5hbGRTdGFnZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgd3guYWxkU2VuZEV2ZW50KHJpZCx7YWN0aW9uOnR5cGV9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhbGRMZXZlbFJlcG9ydChsZXZlbDpudW1iZXIpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4IHx8ICF0aGlzLnd4LmFsZFN0YWdlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICB3eC5hbGRMZXZlbC5vblNldExldmVsKHtcclxuICAgICAgICAgICAgbGV2ZWxJZDogbGV2ZWwgKyAnJywgIC8vIOetiee6p2lkIOW/heS8oFxyXG4gICAgICAgICAgICBsZXZlbE5hbWU6IGDnrYnnuqcke2xldmVsfWAsICAvLyDnrYnnuqflkI3np7Ag5b+F5LygXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19