
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
            MsgHints_1.default.show("看了一个广告");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO0lBbUhBLENBQUM7SUEvR1UsYUFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QixjQUFjO1lBQ2QsT0FBTztnQkFDTCxLQUFLLEVBQUUsV0FBVzthQUNuQixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUM7Z0JBQzlCLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0ks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LENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVjLHlCQUFnQixHQUEvQixVQUFnQyxHQUFHO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQiw4Q0FBOEM7UUFDOUMsSUFBTSxTQUFTLEdBQUM7WUFDWixJQUFJLEVBQUMsVUFBVTtZQUNmLElBQUksRUFBQyxNQUFNO1lBQ1gsSUFBSSxFQUFDLFFBQVE7WUFDYixJQUFJLEVBQUMsTUFBTTtZQUNYLElBQUksRUFBQyxRQUFRO1lBQ2IsSUFBSSxFQUFDLFNBQVM7WUFDZCxJQUFJLEVBQUMsU0FBUztZQUNkLElBQUksRUFBQyxTQUFTO1lBQ2QsSUFBSSxFQUFDLFNBQVM7U0FDakIsQ0FBQTtRQUNELE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxrQkFBa0IsQ0FBQTtJQUN2RCxDQUFDO0lBRUwsZUFBQztBQUFELENBbkhBLEFBbUhDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSGludHMgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ0hpbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXeENlbnRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB3eDphbnk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBiYW5uZXJBZDphbnk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZXdhcmRWaWRlbzphbnk7XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMud3ggPSB3aW5kb3cgJiYgd2luZG93Wyd3eCddO1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy53eC5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huKAnOi9rOWPkeKAneaMiemSrlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5qyi6L+O5Yqg5YWl5ZCD6bih5bCP5YiG6ZifJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Li75YqoXHJcbiAgICBzdGF0aWMgc2hhcmVBcHBNZXNzYWdlKGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcclxuICAgICAgICB0aGlzLnd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5qyi6L+O5Yqg5YWl5ZCD6bih5bCP5YiG6ZifJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFjYWxsYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGNhbGxiYWNrWydrZXlzJ10gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnd4Lm9uU2hvdygoKT0+e1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmKG5vdyAtIGNhbGxiYWNrWydrZXlzJ10gPj0gMzAwMCl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgc2hvd0Jhbm5lcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBpZighdGhpcy5iYW5uZXJBZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSB3eC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ3h4eHgnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNzYsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjAsXHJcbiAgICAgICAgICAgICAgICAgIGFkSW50ZXJ2YWxzOjMwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkLm9uRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJhbm5lckFkLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGlkZUJhbm5lcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLmJhbm5lckFkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dSZXdhcmRlZFZpZGVvQWQoY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICBpZighdGhpcy53eCkge1xyXG4gICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi55yL5LqG5LiA5Liq5bm/5ZGKXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn55yL5LqG5LiA5Liq5bm/5ZGKJylcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBsZXQgdmlkZW9BZCA9IHRoaXMucmV3YXJkVmlkZW87XHJcbiAgICAgICAgaWYoIXZpZGVvQWQpe1xyXG4gICAgICAgICAgICB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgYWRVbml0SWQ6ICd4eHh4JyB9KTtcclxuICAgICAgICAgICAgdGhpcy5yZXdhcmRWaWRlbyA9IHZpZGVvQWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZGVvQWQub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAvL+mHjeaWsOaLieWPllxyXG4gICAgICAgICAgICB2aWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHZpZGVvQWQuc2hvdygpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZpZGVvQWQuc2hvdygpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pi+56S6JylcclxuICAgICAgICAgICAgdmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB2aWRlb0FkLnNob3coKSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFd4Q2VudGVyLnZpZGVvQWRFcnJIYW5kbGUoZXJyKSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB2aWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgLy8g5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmlkZW9BZEVyckhhbmRsZShlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfop4bpopHliqDovb3lpLHotKUnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAvLyB7ZXJyTXNnOiBcIm5vIGFkdmVydGlzZW1lbnRcIiwgZXJyQ29kZTogMTAwNH1cclxuICAgICAgICBjb25zdCBlcnJIYW5kbGU9e1xyXG4gICAgICAgICAgICAxMDAwOiflkI7nq6/mjqXlj6PosIPnlKjlpLHotKUnLFxyXG4gICAgICAgICAgICAxMDAxOiflj4LmlbDplJnor68nLFxyXG4gICAgICAgICAgICAxMDAyOiflub/lkYrljZXlhYPml6DmlYgnLFxyXG4gICAgICAgICAgICAxMDAzOiflhoXpg6jplJnor68nLFxyXG4gICAgICAgICAgICAxMDA0Oifml6DlkIjpgILnmoTlub/lkYonLFxyXG4gICAgICAgICAgICAxMDA1Oiflub/lkYrnu4Tku7blrqHmoLjkuK0nLFxyXG4gICAgICAgICAgICAxMDA2Oiflub/lkYrnu4Tku7booqvpqbPlm54nLFxyXG4gICAgICAgICAgICAxMDA3Oiflub/lkYrnu4Tku7booqvlsIHnpoEnLFxyXG4gICAgICAgICAgICAxMDA4Oiflub/lkYrljZXlhYPlt7LlhbPpl60nLFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJySGFuZGxlW2Vyci5lcnJDb2RlXSB8fCAn6KeG6aKR5Yqg6L296ZSZ6K+vLOmHjeaWsOWKoOi9vemhtemdouivleivleWQpydcclxuICAgIH1cclxuXHJcbn0iXX0=