
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO0lBOEVBLENBQUM7SUE1RVUsYUFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QixjQUFjO1lBQ2QsT0FBTztnQkFDTCxLQUFLLEVBQUUsV0FBVzthQUNuQixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUM7Z0JBQzlCLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDN0IsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxFQUFFO2dCQUNSLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEtBQUssRUFBRSxHQUFHO2dCQUNWLFdBQVcsRUFBQyxFQUFFO2FBQ2Y7U0FDRixDQUFDLENBQUE7UUFDSixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw0QkFBbUIsR0FBMUIsVUFBMkIsUUFBd0I7UUFBeEIseUJBQUEsRUFBQSxlQUF3QjtRQUMvQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNULGtCQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixPQUFPO1NBQ1Y7UUFDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDckUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixNQUFNO1lBQ04sZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsZUFBZSxDQUFDLElBQUksRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUE7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFDSCxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUMzQiwyQkFBMkI7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUN2QixnQkFBZ0I7WUFDaEIsb0NBQW9DO1lBQ3BDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFDM0Msa0JBQWtCO2dCQUNsQixRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO2lCQUNJO2dCQUNELGlCQUFpQjthQUNwQjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLGVBQUM7QUFBRCxDQTlFQSxBQThFQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0hpbnRzIGZyb20gXCIuLi9mcmFtd29yay9Nc2dIaW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3hDZW50ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgd3g6YW55O1xyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB0aGlzLnd4ID0gd2luZG93ICYmIHdpbmRvd1snd3gnXTtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMud3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobigJzovazlj5HigJ3mjInpkq5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+asoui/juWKoOWFpeWQg+m4oeWwj+WIhumYnydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+S4u+WKqFxyXG4gICAgc3RhdGljIHNoYXJlQXBwTWVzc2FnZShjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy53eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+asoui/juWKoOWFpeWQg+m4oeWwj+WIhumYnydcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZighY2FsbGJhY2spIHJldHVybjtcclxuICAgICAgICBjYWxsYmFja1sna2V5cyddID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy53eC5vblNob3coKCk9PntcclxuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBpZihub3cgLSBjYWxsYmFja1sna2V5cyddID49IDMwMDApe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIHNob3dCYW5uZXIoKXtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgbGV0IGJhbm5lckFkID0gd3guY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogJ3h4eHgnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDEwLFxyXG4gICAgICAgICAgICAgIHRvcDogNzYsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMyMCxcclxuICAgICAgICAgICAgICBhZEludGVydmFsczozMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICBiYW5uZXJBZC5zaG93KCk7XHJcbiAgICAgICAgYmFubmVyQWQub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93UmV3YXJkZWRWaWRlb0FkKGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHtcclxuICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuWBh+ijheeci+S6huS4gOS4quW5v+WRilwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WBh+ijheeci+S6huS4gOS4quW5v+WRiicpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgbGV0IHJld2FyZGVkVmlkZW9BZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7IGFkVW5pdElkOiAneHh4eCcgfSk7XHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkLm9uRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgLy/ph43mlrDmi4nlj5ZcclxuICAgICAgICAgICAgcmV3YXJkZWRWaWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHJld2FyZGVkVmlkZW9BZC5zaG93KCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkLnNob3coKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuicpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgLy8g5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IFxyXG5cclxufSJdfQ==