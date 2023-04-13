
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
        // 提前加载
        this.showRewardedVideoAd(null, 1, true);
    };
    WxCenter.isWxEnv = function () {
        return window && window['wx'];
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
    WxCenter.showInterstitialAd = function () {
        // 定义插屏广告
        var wx = this.wx;
        if (!wx)
            return;
        var interstitialAd = null;
        // 创建插屏广告实例，提前初始化
        if (wx.createInterstitialAd) {
            interstitialAd = wx.createInterstitialAd({
                adUnitId: 'adunit-c64814b155af73e6'
            });
        }
        // 在适合的场景显示插屏广告
        setTimeout(function () {
            // 在适合的场景显示插屏广告
            if (interstitialAd) {
                interstitialAd.show().then().catch(function (err) {
                    console.error('插屏 广告失败:', err);
                });
                interstitialAd.onClose(function (res) {
                    console.log('插屏 广告关闭');
                });
                interstitialAd.onLoad(function () {
                    console.log('插屏 广告加载成功');
                });
            }
        }, 3500);
    };
    WxCenter.showRewardedVideoAd = function (callback, type, isinit) {
        var _this = this;
        if (isinit === void 0) { isinit = false; }
        if (!this.wx) {
            // MsgToast.show("看了一个广告");
            // callback && callback(true);
            return;
        }
        var wx = this.wx;
        var adUnitId = '';
        if (type == 2) {
            adUnitId = 'adunit-cad7de3569109b38';
        }
        else {
            adUnitId = 'adunit-e482dfb01207d492';
        }
        this.videoCallback = callback;
        if (!isinit) {
            wx.showLoading({ title: '视频加载中...', mask: true });
        }
        setTimeout(function () {
            wx.hideLoading();
        }, 3000);
        var videoAd = wx.createRewardedVideoAd({ adUnitId: adUnitId });
        if (isinit) {
            videoAd.onClose(function (res) {
                // 用户点击了【关闭广告】按钮
                // 小于 2.1.0 的基础库版本，res 是一个 undefined
                wx.hideLoading();
                if (res && res.isEnded || res === undefined) {
                    // 正常播放结束，可以下发游戏奖励
                    _this.videoCallback && _this.videoCallback(true);
                }
                else {
                    // 播放中途退出，不下发游戏奖励
                }
            });
            videoAd.onError(function (error) {
                console.log(error);
                wx.hideLoading();
                wx.showToast('视频获取失败');
            });
            return;
        }
        videoAd.show().then(function (res) {
            // console.log('激励视频 广告显示')
            videoAd.load().then(function () { return videoAd.show(); }).catch(function (err) {
                console.log(err);
                wx.hideLoading();
                wx.showToast('视频获取失败');
            });
        });
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
        console.log('csdfge2q903423-2-3');
    };
    WxCenter.videoCallback = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlci9XeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUEyTEEsQ0FBQztJQXRMVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3RCLGNBQWM7WUFDZCxPQUFPO2dCQUNMLEtBQUssRUFBRSxXQUFXO2FBQ25CLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU87UUFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUNJLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxN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RyxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVhLHVCQUFjLEdBQTVCLFVBQTZCLEtBQVk7UUFDckMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDbkIsT0FBTyxFQUFFLEtBQUssR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxpQkFBSyxLQUFPO1NBQzFCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBckxjLHNCQUFhLEdBQVksSUFBSSxDQUFDO0lBdUxqRCxlQUFDO0NBM0xELEFBMkxDLElBQUE7a0JBM0xvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXeENlbnRlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgd3g6YW55O1xuICAgIHByaXZhdGUgc3RhdGljIGJhbm5lckFkOmFueTtcbiAgICBwcml2YXRlIHN0YXRpYyB2aWRlb0FkOmFueTtcbiAgICBwcml2YXRlIHN0YXRpYyB2aWRlb0NhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbDtcbiAgICBzdGF0aWMgaW5pdCgpe1xuICAgICAgICB0aGlzLnd4ID0gd2luZG93ICYmIHdpbmRvd1snd3gnXTtcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcbiAgICAgICAgdGhpcy53eC5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobigJzovazlj5HigJ3mjInpkq5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5qyi6L+O5Yqg5YWl5ZCD6bih5bCP5YiG6ZifJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyDmj5DliY3liqDovb1cbiAgICAgICAgdGhpcy5zaG93UmV3YXJkZWRWaWRlb0FkKG51bGwsMSx0cnVlKVxuICAgIH1cblxuICAgIHN0YXRpYyBpc1d4RW52KCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cgJiYgd2luZG93Wyd3eCddO1xuICAgIH1cbiAgICAvL+S4u+WKqFxuICAgIHN0YXRpYyBzaGFyZUFwcE1lc3NhZ2UoY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcbiAgICAgICAgdGhpcy53eC5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdGl0bGU6ICfmrKLov47liqDlhaXlkIPpuKHlsI/liIbpmJ8nXG4gICAgICAgIH0pO1xuICAgICAgICBpZighY2FsbGJhY2spIHJldHVybjtcbiAgICAgICAgY2FsbGJhY2tbJ2tleXMnXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnd4Lm9uU2hvdygoKT0+e1xuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgaWYobm93IC0gY2FsbGJhY2tbJ2tleXMnXSA+PSAzMDAwKXtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgc2hvd0Jhbm5lcigpe1xuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xuICAgICAgICBpZighdGhpcy5iYW5uZXJBZCl7XG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkID0gd3guY3JlYXRlQmFubmVyQWQoe1xuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAneHh4eCcsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgdG9wOiA3NixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgICAgICAgICAgICBhZEludGVydmFsczozMCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5vbkVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFubmVyQWQuc2hvdygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlQmFubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmJhbm5lckFkKSByZXR1cm47XG4gICAgICAgIHRoaXMuYmFubmVyQWQuaGlkZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG93SW50ZXJzdGl0aWFsQWQoKXtcbiAgICAgICAgLy8g5a6a5LmJ5o+S5bGP5bm/5ZGKXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XG4gICAgICAgIGlmKCF3eCkgcmV0dXJuO1xuICAgICAgICBsZXQgaW50ZXJzdGl0aWFsQWQgPSBudWxsXG4gICAgICAgIC8vIOWIm+W7uuaPkuWxj+W5v+WRiuWunuS+i++8jOaPkOWJjeWIneWni+WMllxuICAgICAgICBpZiAod3guY3JlYXRlSW50ZXJzdGl0aWFsQWQpe1xuICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtYzY0ODE0YjE1NWFmNzNlNidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXG4gICAgICAgICAgICBpZiAoaW50ZXJzdGl0aWFsQWQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5zaG93KCkudGhlbigpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5o+S5bGPIOW5v+WRiuWksei0pTonLGVycilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbEFkLm9uQ2xvc2UocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aPkuWxjyDlub/lkYrlhbPpl60nKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQub25Mb2FkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aPkuWxjyDlub/lkYrliqDovb3miJDlip8nKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDM1MDApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG93UmV3YXJkZWRWaWRlb0FkKGNhbGxiYWNrOkZ1bmN0aW9uLHR5cGU6bnVtYmVyLGlzaW5pdCA9IGZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMud3gpIHtcbiAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLnnIvkuobkuIDkuKrlub/lkYpcIik7XG4gICAgICAgICAgICAvLyBjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xuICAgICAgICBsZXQgYWRVbml0SWQgPSAnJ1xuICAgICAgICBpZih0eXBlID09IDIpe1xuICAgICAgICAgICAgYWRVbml0SWQgPSAnYWR1bml0LWNhZDdkZTM1NjkxMDliMzgnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGFkVW5pdElkID0gJ2FkdW5pdC1lNDgyZGZiMDEyMDdkNDkyJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlkZW9DYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBpZighaXNpbml0KXtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTon6KeG6aKR5Yqg6L295LitLi4uJyxtYXNrOnRydWV9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIGxldCB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgYWRVbml0SWQgfSk7XG4gICAgICAgIGlmKGlzaW5pdCl7XG4gICAgICAgICAgICB2aWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobjgJDlhbPpl63lub/lkYrjgJHmjInpkq5cbiAgICAgICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzIOaYr+S4gOS4qiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0NhbGxiYWNrICYmIHRoaXMudmlkZW9DYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2aWRlb0FkLm9uRXJyb3IoZXJyb3I9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KCfop4bpopHojrflj5blpLHotKUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvQWQuc2hvdygpLnRoZW4ocmVzPT57XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuicpXG4gICAgICAgICAgICB2aWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHZpZGVvQWQuc2hvdygpKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KCfop4bpopHojrflj5blpLHotKUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOS4iuaKpVxuICAgICAgICAvLyBpZih2aWRlb0FkLnJlcG9ydFNoYXJlQmVoYXZpb3Ipe1xuICAgICAgICAvLyAgICAgdmlkZW9BZC5yZXBvcnRTaGFyZUJlaGF2aW9yKHtcbiAgICAgICAgLy8gICAgICAgICBvcGVyYXRpb246IDIsIC8vIDEt5pud5YWJIDIt54K55Ye7IDMt5YWz6ZetIDQt5pON5L2c5oiQ5YqfIDUt5pON5L2c5aSx6LSlXG4gICAgICAgIC8vICAgICAgICAgY3VycmVudFNob3c6IDAsIC8vIDAt5bm/5ZGKIDEt5YiG5Lqr77yM5b2TIG9wZXJhdGlvbiDkuLogMS01IOaXtuW/heWhq1xuICAgICAgICAvLyAgICAgICAgIHN0cmF0ZWd5OiAxLCAvLyAwLeS4muWKoSAxLeW+ruS/oeetlueVpVxuICAgICAgICAvLyAgICAgICAgIGFkdW5pdDphZFVuaXRJZCwgLy/lvZPliY3ngrnkvY3nmoRhZHVuaXRcbiAgICAgICAgLy8gICAgICAgICBzY2VuZUlEOnR5cGUgLy/lvZPliY3ngrnkvY3nmoRzY2VuZUlEXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHZpZGVvQWRFcnJIYW5kbGUoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coJ+inhumikeWKoOi9veWksei0pScpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgLy8ge2Vyck1zZzogXCJubyBhZHZlcnRpc2VtZW50XCIsIGVyckNvZGU6IDEwMDR9XG4gICAgICAgIGNvbnN0IGVyckhhbmRsZT17XG4gICAgICAgICAgICAxMDAwOiflkI7nq6/mjqXlj6PosIPnlKjlpLHotKUnLFxuICAgICAgICAgICAgMTAwMTon5Y+C5pWw6ZSZ6K+vJyxcbiAgICAgICAgICAgIDEwMDI6J+W5v+WRiuWNleWFg+aXoOaViCcsXG4gICAgICAgICAgICAxMDAzOiflhoXpg6jplJnor68nLFxuICAgICAgICAgICAgMTAwNDon5peg5ZCI6YCC55qE5bm/5ZGKJyxcbiAgICAgICAgICAgIDEwMDU6J+W5v+WRiue7hOS7tuWuoeaguOS4rScsXG4gICAgICAgICAgICAxMDA2Oiflub/lkYrnu4Tku7booqvpqbPlm54nLFxuICAgICAgICAgICAgMTAwNzon5bm/5ZGK57uE5Lu26KKr5bCB56aBJyxcbiAgICAgICAgICAgIDEwMDg6J+W5v+WRiuWNleWFg+W3suWFs+mXrScsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVyckhhbmRsZVtlcnIuZXJyQ29kZV0gfHwgJ+inhumikeWKoOi9vemUmeivryzph43mlrDliqDovb3pobXpnaLor5Xor5XlkKcnXG4gICAgfVxuICAgIC8qKumAmueUqOe7n+iuoSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYWxkUmVwb3J0KHJpZDpzdHJpbmcsdHlwZTpzdHJpbmcgPSAnc2hvdycpe1xuICAgICAgICBpZighdGhpcy53eCB8fCAhdGhpcy53eC5hbGRTdGFnZSkgcmV0dXJuO1xuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xuICAgICAgICB3eC5hbGRTZW5kRXZlbnQocmlkLHthY3Rpb246dHlwZX0pO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIGFsZExldmVsUmVwb3J0KGxldmVsOm51bWJlcil7XG4gICAgICAgIGlmKCF0aGlzLnd4IHx8ICF0aGlzLnd4LmFsZFN0YWdlKSByZXR1cm47XG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XG4gICAgICAgIHd4LmFsZExldmVsLm9uU2V0TGV2ZWwoe1xuICAgICAgICAgICAgbGV2ZWxJZDogbGV2ZWwgKyAnJywgIC8vIOetiee6p2lkIOW/heS8oFxuICAgICAgICAgICAgbGV2ZWxOYW1lOiBg562J57qnJHtsZXZlbH1gLCAgLy8g562J57qn5ZCN56ewIOW/heS8oFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NzZGZnZTJxOTAzNDIzLTItMycpXG4gICAgfVxuXG59Il19