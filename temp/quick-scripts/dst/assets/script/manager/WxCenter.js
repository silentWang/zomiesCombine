
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUEyTEEsQ0FBQztJQXRMVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3RCLGNBQWM7WUFDZCxPQUFPO2dCQUNMLEtBQUssRUFBRSxXQUFXO2FBQ25CLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU87UUFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUNJLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FB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R0FBRyxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVhLHVCQUFjLEdBQTVCLFVBQTZCLEtBQVk7UUFDckMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDbkIsT0FBTyxFQUFFLEtBQUssR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxpQkFBSyxLQUFPO1NBQzFCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBckxjLHNCQUFhLEdBQVksSUFBSSxDQUFDO0lBdUxqRCxlQUFDO0NBM0xELEFBMkxDLElBQUE7a0JBM0xvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3hDZW50ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgd3g6YW55O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmFubmVyQWQ6YW55O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmlkZW9BZDphbnk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB2aWRlb0NhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbDtcclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdGhpcy53eCA9IHdpbmRvdyAmJiB3aW5kb3dbJ3d4J107XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcclxuICAgICAgICB0aGlzLnd4Lm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG4oCc6L2s5Y+R4oCd5oyJ6ZKuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmrKLov47liqDlhaXlkIPpuKHlsI/liIbpmJ8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIOaPkOWJjeWKoOi9vVxyXG4gICAgICAgIHRoaXMuc2hvd1Jld2FyZGVkVmlkZW9BZChudWxsLDEsdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNXeEVudigpe1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cgJiYgd2luZG93Wyd3eCddO1xyXG4gICAgfVxyXG4gICAgLy/kuLvliqhcclxuICAgIHN0YXRpYyBzaGFyZUFwcE1lc3NhZ2UoY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMud3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmrKLov47liqDlhaXlkIPpuKHlsI/liIbpmJ8nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoIWNhbGxiYWNrKSByZXR1cm47XHJcbiAgICAgICAgY2FsbGJhY2tbJ2tleXMnXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMud3gub25TaG93KCgpPT57XHJcbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgaWYobm93IC0gY2FsbGJhY2tbJ2tleXMnXSA+PSAzMDAwKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBzaG93QmFubmVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIGlmKCF0aGlzLmJhbm5lckFkKXtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZCA9IHd4LmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAneHh4eCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgdG9wOiA3NixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyMCxcclxuICAgICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6MzAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFubmVyQWQuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlQmFubmVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuYmFubmVyQWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJhbm5lckFkLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd0ludGVyc3RpdGlhbEFkKCl7XHJcbiAgICAgICAgLy8g5a6a5LmJ5o+S5bGP5bm/5ZGKXHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBpZighd3gpIHJldHVybjtcclxuICAgICAgICBsZXQgaW50ZXJzdGl0aWFsQWQgPSBudWxsXHJcbiAgICAgICAgLy8g5Yib5bu65o+S5bGP5bm/5ZGK5a6e5L6L77yM5o+Q5YmN5Yid5aeL5YyWXHJcbiAgICAgICAgaWYgKHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKXtcclxuICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC1jNjQ4MTRiMTU1YWY3M2U2J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlnKjpgILlkIjnmoTlnLrmma/mmL7npLrmj5LlsY/lub/lkYpcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXHJcbiAgICAgICAgICAgIGlmIChpbnRlcnN0aXRpYWxBZCkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQuc2hvdygpLnRoZW4oKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5o+S5bGPIOW5v+WRiuWksei0pTonLGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aPkuWxjyDlub/lkYrlhbPpl60nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbEFkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aPkuWxjyDlub/lkYrliqDovb3miJDlip8nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDM1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93UmV3YXJkZWRWaWRlb0FkKGNhbGxiYWNrOkZ1bmN0aW9uLHR5cGU6bnVtYmVyLGlzaW5pdCA9IGZhbHNlKXtcclxuICAgICAgICBpZighdGhpcy53eCkge1xyXG4gICAgICAgICAgICAvLyBNc2dUb2FzdC5zaG93KFwi55yL5LqG5LiA5Liq5bm/5ZGKXCIpO1xyXG4gICAgICAgICAgICAvLyBjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIGxldCBhZFVuaXRJZCA9ICcnXHJcbiAgICAgICAgaWYodHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgYWRVbml0SWQgPSAnYWR1bml0LWNhZDdkZTM1NjkxMDliMzgnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGFkVW5pdElkID0gJ2FkdW5pdC1lNDgyZGZiMDEyMDdkNDkyJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpZGVvQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICBpZighaXNpbml0KXtcclxuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOifop4bpopHliqDovb3kuK0uLi4nLG1hc2s6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIGxldCB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgYWRVbml0SWQgfSk7XHJcbiAgICAgICAgaWYoaXNpbml0KXtcclxuICAgICAgICAgICAgdmlkZW9BZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobjgJDlhbPpl63lub/lkYrjgJHmjInpkq5cclxuICAgICAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9DYWxsYmFjayAmJiB0aGlzLnZpZGVvQ2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdmlkZW9BZC5vbkVycm9yKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCgn6KeG6aKR6I635Y+W5aSx6LSlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZGVvQWQuc2hvdygpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pi+56S6JylcclxuICAgICAgICAgICAgdmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB2aWRlb0FkLnNob3coKSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCgn6KeG6aKR6I635Y+W5aSx6LSlJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyDkuIrmiqVcclxuICAgICAgICAvLyBpZih2aWRlb0FkLnJlcG9ydFNoYXJlQmVoYXZpb3Ipe1xyXG4gICAgICAgIC8vICAgICB2aWRlb0FkLnJlcG9ydFNoYXJlQmVoYXZpb3Ioe1xyXG4gICAgICAgIC8vICAgICAgICAgb3BlcmF0aW9uOiAyLCAvLyAxLeabneWFiSAyLeeCueWHuyAzLeWFs+mXrSA0LeaTjeS9nOaIkOWKnyA1LeaTjeS9nOWksei0pVxyXG4gICAgICAgIC8vICAgICAgICAgY3VycmVudFNob3c6IDAsIC8vIDAt5bm/5ZGKIDEt5YiG5Lqr77yM5b2TIG9wZXJhdGlvbiDkuLogMS01IOaXtuW/heWhq1xyXG4gICAgICAgIC8vICAgICAgICAgc3RyYXRlZ3k6IDEsIC8vIDAt5Lia5YqhIDEt5b6u5L+h562W55WlXHJcbiAgICAgICAgLy8gICAgICAgICBhZHVuaXQ6YWRVbml0SWQsIC8v5b2T5YmN54K55L2N55qEYWR1bml0XHJcbiAgICAgICAgLy8gICAgICAgICBzY2VuZUlEOnR5cGUgLy/lvZPliY3ngrnkvY3nmoRzY2VuZUlEXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB2aWRlb0FkRXJySGFuZGxlKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+inhumikeWKoOi9veWksei0pScpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIC8vIHtlcnJNc2c6IFwibm8gYWR2ZXJ0aXNlbWVudFwiLCBlcnJDb2RlOiAxMDA0fVxyXG4gICAgICAgIGNvbnN0IGVyckhhbmRsZT17XHJcbiAgICAgICAgICAgIDEwMDA6J+WQjuerr+aOpeWPo+iwg+eUqOWksei0pScsXHJcbiAgICAgICAgICAgIDEwMDE6J+WPguaVsOmUmeivrycsXHJcbiAgICAgICAgICAgIDEwMDI6J+W5v+WRiuWNleWFg+aXoOaViCcsXHJcbiAgICAgICAgICAgIDEwMDM6J+WGhemDqOmUmeivrycsXHJcbiAgICAgICAgICAgIDEwMDQ6J+aXoOWQiOmAgueahOW5v+WRiicsXHJcbiAgICAgICAgICAgIDEwMDU6J+W5v+WRiue7hOS7tuWuoeaguOS4rScsXHJcbiAgICAgICAgICAgIDEwMDY6J+W5v+WRiue7hOS7tuiiq+mps+WbnicsXHJcbiAgICAgICAgICAgIDEwMDc6J+W5v+WRiue7hOS7tuiiq+WwgeemgScsXHJcbiAgICAgICAgICAgIDEwMDg6J+W5v+WRiuWNleWFg+W3suWFs+mXrScsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJIYW5kbGVbZXJyLmVyckNvZGVdIHx8ICfop4bpopHliqDovb3plJnor68s6YeN5paw5Yqg6L296aG16Z2i6K+V6K+V5ZCnJ1xyXG4gICAgfVxyXG4gICAgLyoq6YCa55So57uf6K6hICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZFJlcG9ydChyaWQ6c3RyaW5nLHR5cGU6c3RyaW5nID0gJ3Nob3cnKXtcclxuICAgICAgICBpZighdGhpcy53eCB8fCAhdGhpcy53eC5hbGRTdGFnZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgd3guYWxkU2VuZEV2ZW50KHJpZCx7YWN0aW9uOnR5cGV9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhbGRMZXZlbFJlcG9ydChsZXZlbDpudW1iZXIpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4IHx8ICF0aGlzLnd4LmFsZFN0YWdlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICB3eC5hbGRMZXZlbC5vblNldExldmVsKHtcclxuICAgICAgICAgICAgbGV2ZWxJZDogbGV2ZWwgKyAnJywgIC8vIOetiee6p2lkIOW/heS8oFxyXG4gICAgICAgICAgICBsZXZlbE5hbWU6IGDnrYnnuqcke2xldmVsfWAsICAvLyDnrYnnuqflkI3np7Ag5b+F5LygXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NzZGZnZTJxOTAzNDIzLTItMycpXHJcbiAgICB9XHJcblxyXG59Il19