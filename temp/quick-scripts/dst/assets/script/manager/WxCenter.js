
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
            if (window && window['xxxxx'])
                window['xxxxx']("5HWkSDfZSWrTMw");
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
        if (window && window['xxxxx'])
            window['xxxxx']("TFfmND");
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
                    if (window && window['xxxxx'])
                        window['xxxxx']("MZ4rjBkGDEMcYHjpy6ewY");
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
        if (window && window['xxxxx'])
            window['xxxxx']("kJZjZmzMmmpFeK4NXdZ8taSPGN");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUErTEEsQ0FBQztJQTFMVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3RCLGNBQWM7WUFDZCxPQUFPO2dCQUNMLEtBQUssRUFBRSxXQUFXO2FBQ25CLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU87UUFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUNJLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FB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QyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksa0JBQWtCLENBQUE7SUFDdkQsQ0FBQztJQUNELFVBQVU7SUFDSSxrQkFBUyxHQUF2QixVQUF3QixHQUFVLEVBQUMsSUFBb0I7UUFBcEIscUJBQUEsRUFBQSxhQUFvQjtRQUNuRCxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDekMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRWEsdUJBQWMsR0FBNUIsVUFBNkIsS0FBWTtRQUNyQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDekMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNuQixPQUFPLEVBQUUsS0FBSyxHQUFHLEVBQUU7WUFDbkIsU0FBUyxFQUFFLGlCQUFLLEtBQU87U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUF6TGMsc0JBQWEsR0FBWSxJQUFJLENBQUM7SUEyTGpELGVBQUM7Q0EvTEQsQUErTEMsSUFBQTtrQkEvTG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXeENlbnRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB3eDphbnk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBiYW5uZXJBZDphbnk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB2aWRlb0FkOmFueTtcclxuICAgIHByaXZhdGUgc3RhdGljIHZpZGVvQ2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsO1xyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB0aGlzLnd4ID0gd2luZG93ICYmIHdpbmRvd1snd3gnXTtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMud3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobigJzovazlj5HigJ3mjInpkq5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+asoui/juWKoOWFpeWQg+m4oeWwj+WIhumYnydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8g5o+Q5YmN5Yqg6L29XHJcbiAgICAgICAgdGhpcy5zaG93UmV3YXJkZWRWaWRlb0FkKG51bGwsMSx0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1d4RW52KCl7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdyAmJiB3aW5kb3dbJ3d4J107XHJcbiAgICB9XHJcbiAgICAvL+S4u+WKqFxyXG4gICAgc3RhdGljIHNoYXJlQXBwTWVzc2FnZShjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy53eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+asoui/juWKoOWFpeWQg+m4oeWwj+WIhumYnydcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZighY2FsbGJhY2spIHJldHVybjtcclxuICAgICAgICBjYWxsYmFja1sna2V5cyddID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy53eC5vblNob3coKCk9PntcclxuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBpZihub3cgLSBjYWxsYmFja1sna2V5cyddID49IDMwMDApe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIHNob3dCYW5uZXIoKXtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgaWYoIXRoaXMuYmFubmVyQWQpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkID0gd3guY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICd4eHh4JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICB0b3A6IDc2LFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzIwLFxyXG4gICAgICAgICAgICAgICAgICBhZEludGVydmFsczozMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiNUhXa1NEZlpTV3JUTXdcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFubmVyQWQuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlQmFubmVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuYmFubmVyQWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJhbm5lckFkLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd0ludGVyc3RpdGlhbEFkKCl7XHJcbiAgICAgICAgLy8g5a6a5LmJ5o+S5bGP5bm/5ZGKXHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBpZighd3gpIHJldHVybjtcclxuICAgICAgICBsZXQgaW50ZXJzdGl0aWFsQWQgPSBudWxsXHJcbiAgICAgICAgLy8g5Yib5bu65o+S5bGP5bm/5ZGK5a6e5L6L77yM5o+Q5YmN5Yid5aeL5YyWXHJcbiAgICAgICAgaWYgKHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKXtcclxuICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC1jNjQ4MTRiMTU1YWY3M2U2J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlnKjpgILlkIjnmoTlnLrmma/mmL7npLrmj5LlsY/lub/lkYpcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXHJcbiAgICAgICAgICAgIGlmIChpbnRlcnN0aXRpYWxBZCkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQuc2hvdygpLnRoZW4oKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5o+S5bGPIOW5v+WRiuWksei0pTonLGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aPkuWxjyDlub/lkYrlhbPpl60nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbEFkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aPkuWxjyDlub/lkYrliqDovb3miJDlip8nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDM1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93UmV3YXJkZWRWaWRlb0FkKGNhbGxiYWNrOkZ1bmN0aW9uLHR5cGU6bnVtYmVyLGlzaW5pdCA9IGZhbHNlKXtcclxuICAgICAgICBpZighdGhpcy53eCkge1xyXG4gICAgICAgICAgICAvLyBNc2dUb2FzdC5zaG93KFwi55yL5LqG5LiA5Liq5bm/5ZGKXCIpO1xyXG4gICAgICAgICAgICAvLyBjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlRGZm1ORFwiKTtcclxuICAgICAgICBsZXQgYWRVbml0SWQgPSAnJ1xyXG4gICAgICAgIGlmKHR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgIGFkVW5pdElkID0gJ2FkdW5pdC1jYWQ3ZGUzNTY5MTA5YjM4J1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBhZFVuaXRJZCA9ICdhZHVuaXQtZTQ4MmRmYjAxMjA3ZDQ5MidcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWRlb0NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgaWYoIWlzaW5pdCl7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTon6KeG6aKR5Yqg6L295LitLi4uJyxtYXNrOnRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICBsZXQgdmlkZW9BZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7IGFkVW5pdElkIH0pO1xyXG4gICAgICAgIGlmKGlzaW5pdCl7XHJcbiAgICAgICAgICAgIHZpZGVvQWQub25DbG9zZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzIOaYr+S4gOS4qiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmlzRW5kZWQgfHwgcmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJNWjRyakJrR0RFTWNZSGpweTZld1lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0NhbGxiYWNrICYmIHRoaXMudmlkZW9DYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB2aWRlb0FkLm9uRXJyb3IoZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KCfop4bpopHojrflj5blpLHotKUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlkZW9BZC5zaG93KCkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+a/gOWKseinhumikSDlub/lkYrmmL7npLonKVxyXG4gICAgICAgICAgICB2aWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHZpZGVvQWQuc2hvdygpKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KCfop4bpopHojrflj5blpLHotKUnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIOS4iuaKpVxyXG4gICAgICAgIC8vIGlmKHZpZGVvQWQucmVwb3J0U2hhcmVCZWhhdmlvcil7XHJcbiAgICAgICAgLy8gICAgIHZpZGVvQWQucmVwb3J0U2hhcmVCZWhhdmlvcih7XHJcbiAgICAgICAgLy8gICAgICAgICBvcGVyYXRpb246IDIsIC8vIDEt5pud5YWJIDIt54K55Ye7IDMt5YWz6ZetIDQt5pON5L2c5oiQ5YqfIDUt5pON5L2c5aSx6LSlXHJcbiAgICAgICAgLy8gICAgICAgICBjdXJyZW50U2hvdzogMCwgLy8gMC3lub/lkYogMS3liIbkuqvvvIzlvZMgb3BlcmF0aW9uIOS4uiAxLTUg5pe25b+F5aGrXHJcbiAgICAgICAgLy8gICAgICAgICBzdHJhdGVneTogMSwgLy8gMC3kuJrliqEgMS3lvq7kv6HnrZbnlaVcclxuICAgICAgICAvLyAgICAgICAgIGFkdW5pdDphZFVuaXRJZCwgLy/lvZPliY3ngrnkvY3nmoRhZHVuaXRcclxuICAgICAgICAvLyAgICAgICAgIHNjZW5lSUQ6dHlwZSAvL+W9k+WJjeeCueS9jeeahHNjZW5lSURcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHZpZGVvQWRFcnJIYW5kbGUoZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn6KeG6aKR5Yqg6L295aSx6LSlJylcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgLy8ge2Vyck1zZzogXCJubyBhZHZlcnRpc2VtZW50XCIsIGVyckNvZGU6IDEwMDR9XHJcbiAgICAgICAgY29uc3QgZXJySGFuZGxlPXtcclxuICAgICAgICAgICAgMTAwMDon5ZCO56uv5o6l5Y+j6LCD55So5aSx6LSlJyxcclxuICAgICAgICAgICAgMTAwMTon5Y+C5pWw6ZSZ6K+vJyxcclxuICAgICAgICAgICAgMTAwMjon5bm/5ZGK5Y2V5YWD5peg5pWIJyxcclxuICAgICAgICAgICAgMTAwMzon5YaF6YOo6ZSZ6K+vJyxcclxuICAgICAgICAgICAgMTAwNDon5peg5ZCI6YCC55qE5bm/5ZGKJyxcclxuICAgICAgICAgICAgMTAwNTon5bm/5ZGK57uE5Lu25a6h5qC45LitJyxcclxuICAgICAgICAgICAgMTAwNjon5bm/5ZGK57uE5Lu26KKr6amz5ZueJyxcclxuICAgICAgICAgICAgMTAwNzon5bm/5ZGK57uE5Lu26KKr5bCB56aBJyxcclxuICAgICAgICAgICAgMTAwODon5bm/5ZGK5Y2V5YWD5bey5YWz6ZetJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVyckhhbmRsZVtlcnIuZXJyQ29kZV0gfHwgJ+inhumikeWKoOi9vemUmeivryzph43mlrDliqDovb3pobXpnaLor5Xor5XlkKcnXHJcbiAgICB9XHJcbiAgICAvKirpgJrnlKjnu5/orqEgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWxkUmVwb3J0KHJpZDpzdHJpbmcsdHlwZTpzdHJpbmcgPSAnc2hvdycpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4IHx8ICF0aGlzLnd4LmFsZFN0YWdlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJrSlpqWm16TW1tcEZlSzROWGRaOHRhU1BHTlwiKTtcclxuICAgICAgICB3eC5hbGRTZW5kRXZlbnQocmlkLHthY3Rpb246dHlwZX0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZExldmVsUmVwb3J0KGxldmVsOm51bWJlcil7XHJcbiAgICAgICAgaWYoIXRoaXMud3ggfHwgIXRoaXMud3guYWxkU3RhZ2UpIHJldHVybjtcclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIHd4LmFsZExldmVsLm9uU2V0TGV2ZWwoe1xyXG4gICAgICAgICAgICBsZXZlbElkOiBsZXZlbCArICcnLCAgLy8g562J57qnaWQg5b+F5LygXHJcbiAgICAgICAgICAgIGxldmVsTmFtZTogYOetiee6pyR7bGV2ZWx9YCwgIC8vIOetiee6p+WQjeensCDlv4XkvKBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3NkZmdlMnE5MDM0MjMtMi0zJylcclxuICAgIH1cclxuXHJcbn0iXX0=