
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
        var videoAd = this.rewardVideo;
        if (!videoAd) {
            videoAd = wx.createRewardedVideoAd({ adUnitId: 'xxxx' });
            this.rewardVideo = videoAd;
        }
        videoAd.onError(function (err) {
            console.log(err);
            //重新拉取
            videoAd.load().then(function () { return videoAd.show(); });
        });
        videoAd.show().then(function (res) {
            // console.log('激励视频 广告显示')
            videoAd.load().then(function () { return videoAd.show(); }).catch(function (err) {
                wx.showToast({
                    title: WxCenter.videoAdErrHandle(err),
                    icon: 'none'
                });
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO0lBNEdBLENBQUM7SUF4R1UsYUFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QixjQUFjO1lBQ2QsT0FBTztnQkFDTCxLQUFLLEVBQUUsV0FBVzthQUNuQixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUM7Z0JBQzlCLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0ks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QUksRUFBQyxVQUFVO1lBQ2YsSUFBSSxFQUFDLE1BQU07WUFDWCxJQUFJLEVBQUMsUUFBUTtZQUNiLElBQUksRUFBQyxNQUFNO1lBQ1gsSUFBSSxFQUFDLFFBQVE7WUFDYixJQUFJLEVBQUMsU0FBUztZQUNkLElBQUksRUFBQyxTQUFTO1lBQ2QsSUFBSSxFQUFDLFNBQVM7WUFDZCxJQUFJLEVBQUMsU0FBUztTQUNqQixDQUFBO1FBQ0QsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLGtCQUFrQixDQUFBO0lBQ3ZELENBQUM7SUFFTCxlQUFDO0FBQUQsQ0E1R0EsQUE0R0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dIaW50cyBmcm9tIFwiLi4vZnJhbXdvcmsvTXNnSGludHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4Q2VudGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHd4OmFueTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZXdhcmRWaWRlbzphbnk7XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMud3ggPSB3aW5kb3cgJiYgd2luZG93Wyd3eCddO1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy53eC5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huKAnOi9rOWPkeKAneaMiemSrlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5qyi6L+O5Yqg5YWl5ZCD6bih5bCP5YiG6ZifJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Li75YqoXHJcbiAgICBzdGF0aWMgc2hhcmVBcHBNZXNzYWdlKGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcclxuICAgICAgICB0aGlzLnd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5qyi6L+O5Yqg5YWl5ZCD6bih5bCP5YiG6ZifJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFjYWxsYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGNhbGxiYWNrWydrZXlzJ10gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnd4Lm9uU2hvdygoKT0+e1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmKG5vdyAtIGNhbGxiYWNrWydrZXlzJ10gPj0gMzAwMCl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgc2hvd0Jhbm5lcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBsZXQgYmFubmVyQWQgPSB3eC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAneHh4eCcsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgICAgICAgdG9wOiA3NixcclxuICAgICAgICAgICAgICB3aWR0aDogMzIwLFxyXG4gICAgICAgICAgICAgIGFkSW50ZXJ2YWxzOjMwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIGJhbm5lckFkLnNob3coKTtcclxuICAgICAgICBiYW5uZXJBZC5vbkVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dSZXdhcmRlZFZpZGVvQWQoY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICBpZighdGhpcy53eCkge1xyXG4gICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi5YGH6KOF55yL5LqG5LiA5Liq5bm/5ZGKXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5YGH6KOF55yL5LqG5LiA5Liq5bm/5ZGKJylcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBsZXQgdmlkZW9BZCA9IHRoaXMucmV3YXJkVmlkZW87XHJcbiAgICAgICAgaWYoIXZpZGVvQWQpe1xyXG4gICAgICAgICAgICB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgYWRVbml0SWQ6ICd4eHh4JyB9KTtcclxuICAgICAgICAgICAgdGhpcy5yZXdhcmRWaWRlbyA9IHZpZGVvQWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZGVvQWQub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAvL+mHjeaWsOaLieWPllxyXG4gICAgICAgICAgICB2aWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHZpZGVvQWQuc2hvdygpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZpZGVvQWQuc2hvdygpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pi+56S6JylcclxuICAgICAgICAgICAgdmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB2aWRlb0FkLnNob3coKSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFd4Q2VudGVyLnZpZGVvQWRFcnJIYW5kbGUoZXJyKSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB2aWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgLy8g5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmlkZW9BZEVyckhhbmRsZShlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfop4bpopHliqDovb3lpLHotKUnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAvLyB7ZXJyTXNnOiBcIm5vIGFkdmVydGlzZW1lbnRcIiwgZXJyQ29kZTogMTAwNH1cclxuICAgICAgICBjb25zdCBlcnJIYW5kbGU9e1xyXG4gICAgICAgICAgICAxMDAwOiflkI7nq6/mjqXlj6PosIPnlKjlpLHotKUnLFxyXG4gICAgICAgICAgICAxMDAxOiflj4LmlbDplJnor68nLFxyXG4gICAgICAgICAgICAxMDAyOiflub/lkYrljZXlhYPml6DmlYgnLFxyXG4gICAgICAgICAgICAxMDAzOiflhoXpg6jplJnor68nLFxyXG4gICAgICAgICAgICAxMDA0Oifml6DlkIjpgILnmoTlub/lkYonLFxyXG4gICAgICAgICAgICAxMDA1Oiflub/lkYrnu4Tku7blrqHmoLjkuK0nLFxyXG4gICAgICAgICAgICAxMDA2Oiflub/lkYrnu4Tku7booqvpqbPlm54nLFxyXG4gICAgICAgICAgICAxMDA3Oiflub/lkYrnu4Tku7booqvlsIHnpoEnLFxyXG4gICAgICAgICAgICAxMDA4Oiflub/lkYrljZXlhYPlt7LlhbPpl60nLFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJySGFuZGxlW2Vyci5lcnJDb2RlXSB8fCAn6KeG6aKR5Yqg6L296ZSZ6K+vLOmHjeaWsOWKoOi9vemhtemdouivleivleWQpydcclxuICAgIH1cclxuXHJcbn0iXX0=