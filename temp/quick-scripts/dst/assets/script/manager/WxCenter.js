
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
                // interstitialAd.show().then().catch((err) => {
                //     console.error('插屏 展示广告失败:',err)
                // })
                // interstitialAd.onClose(res => {
                //     console.log('插屏 广告关闭')
                // })
                // interstitialAd.onLoad(() => {
                //     console.log('插屏 广告加载成功')
                // })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUE4TEEsQ0FBQztJQXpMVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3RCLGNBQWM7WUFDZCxPQUFPO2dCQUNMLEtBQUssRUFBRSxXQUFXO2FBQ25CLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU87UUFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUNJLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FB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LEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRWEsdUJBQWMsR0FBNUIsVUFBNkIsS0FBWTtRQUNyQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDekMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNuQixPQUFPLEVBQUUsS0FBSyxHQUFHLEVBQUU7WUFDbkIsU0FBUyxFQUFFLGlCQUFLLEtBQU87U0FDMUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhMYyxzQkFBYSxHQUFZLElBQUksQ0FBQztJQTBMakQsZUFBQztDQTlMRCxBQThMQyxJQUFBO2tCQTlMb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4Q2VudGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHd4OmFueTtcclxuICAgIHByaXZhdGUgc3RhdGljIGJhbm5lckFkOmFueTtcclxuICAgIHByaXZhdGUgc3RhdGljIHZpZGVvQWQ6YW55O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmlkZW9DYWxsYmFjazpGdW5jdGlvbiA9IG51bGw7XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMud3ggPSB3aW5kb3cgJiYgd2luZG93Wyd3eCddO1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy53eC5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huKAnOi9rOWPkeKAneaMiemSrlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5qyi6L+O5Yqg5YWl5ZCD6bih5bCP5YiG6ZifJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyDmj5DliY3liqDovb1cclxuICAgICAgICB0aGlzLnNob3dSZXdhcmRlZFZpZGVvQWQobnVsbCwxLHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzV3hFbnYoKXtcclxuICAgICAgICByZXR1cm4gd2luZG93ICYmIHdpbmRvd1snd3gnXTtcclxuICAgIH1cclxuICAgIC8v5Li75YqoXHJcbiAgICBzdGF0aWMgc2hhcmVBcHBNZXNzYWdlKGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcclxuICAgICAgICB0aGlzLnd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5qyi6L+O5Yqg5YWl5ZCD6bih5bCP5YiG6ZifJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFjYWxsYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGNhbGxiYWNrWydrZXlzJ10gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnd4Lm9uU2hvdygoKT0+e1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmKG5vdyAtIGNhbGxiYWNrWydrZXlzJ10gPj0gMzAwMCl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgc2hvd0Jhbm5lcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBpZighdGhpcy5iYW5uZXJBZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSB3eC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ3h4eHgnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNzYsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjAsXHJcbiAgICAgICAgICAgICAgICAgIGFkSW50ZXJ2YWxzOjMwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI1SFdrU0RmWlNXclRNd1wiKTtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5vbkVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iYW5uZXJBZC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGVCYW5uZXIoKXtcclxuICAgICAgICBpZighdGhpcy5iYW5uZXJBZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYmFubmVyQWQuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93SW50ZXJzdGl0aWFsQWQoKXtcclxuICAgICAgICAvLyDlrprkuYnmj5LlsY/lub/lkYpcclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIGlmKCF3eCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpbnRlcnN0aXRpYWxBZCA9IG51bGxcclxuICAgICAgICAvLyDliJvlu7rmj5LlsY/lub/lkYrlrp7kvovvvIzmj5DliY3liJ3lp4vljJZcclxuICAgICAgICBpZiAod3guY3JlYXRlSW50ZXJzdGl0aWFsQWQpe1xyXG4gICAgICAgICAgICBpbnRlcnN0aXRpYWxBZCA9IHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWM2NDgxNGIxNTVhZjczZTYnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWcqOmAguWQiOeahOWcuuaZr+aYvuekuuaPkuWxj+W5v+WRilxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyDlnKjpgILlkIjnmoTlnLrmma/mmL7npLrmj5LlsY/lub/lkYpcclxuICAgICAgICAgICAgaWYgKGludGVyc3RpdGlhbEFkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnRlcnN0aXRpYWxBZC5zaG93KCkudGhlbigpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKCfmj5LlsY8g5bGV56S65bm/5ZGK5aSx6LSlOicsZXJyKVxyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgIC8vIGludGVyc3RpdGlhbEFkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygn5o+S5bGPIOW5v+WRiuWFs+mXrScpXHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gaW50ZXJzdGl0aWFsQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygn5o+S5bGPIOW5v+WRiuWKoOi9veaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMzUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dSZXdhcmRlZFZpZGVvQWQoY2FsbGJhY2s6RnVuY3Rpb24sdHlwZTpudW1iZXIsaXNpbml0ID0gZmFsc2Upe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSB7XHJcbiAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLnnIvkuobkuIDkuKrlub/lkYpcIik7XHJcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiVEZmbU5EXCIpO1xyXG4gICAgICAgIGxldCBhZFVuaXRJZCA9ICcnXHJcbiAgICAgICAgaWYodHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgYWRVbml0SWQgPSAnYWR1bml0LWNhZDdkZTM1NjkxMDliMzgnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGFkVW5pdElkID0gJ2FkdW5pdC1lNDgyZGZiMDEyMDdkNDkyJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpZGVvQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICBpZighaXNpbml0KXtcclxuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOifop4bpopHliqDovb3kuK0uLi4nLG1hc2s6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIGxldCB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgYWRVbml0SWQgfSk7XHJcbiAgICAgICAgaWYoaXNpbml0KXtcclxuICAgICAgICAgICAgdmlkZW9BZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobjgJDlhbPpl63lub/lkYrjgJHmjInpkq5cclxuICAgICAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIk1aNHJqQmtHREVNY1lIanB5NmV3WVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQ2FsbGJhY2sgJiYgdGhpcy52aWRlb0NhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHZpZGVvQWQub25FcnJvcihlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoJ+inhumikeiOt+WPluWksei0pScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2aWRlb0FkLnNob3coKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuicpXHJcbiAgICAgICAgICAgIHZpZGVvQWQubG9hZCgpLnRoZW4oKCkgPT4gdmlkZW9BZC5zaG93KCkpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoJ+inhumikeiOt+WPluWksei0pScpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8g5LiK5oqlXHJcbiAgICAgICAgLy8gaWYodmlkZW9BZC5yZXBvcnRTaGFyZUJlaGF2aW9yKXtcclxuICAgICAgICAvLyAgICAgdmlkZW9BZC5yZXBvcnRTaGFyZUJlaGF2aW9yKHtcclxuICAgICAgICAvLyAgICAgICAgIG9wZXJhdGlvbjogMiwgLy8gMS3mm53lhYkgMi3ngrnlh7sgMy3lhbPpl60gNC3mk43kvZzmiJDlip8gNS3mk43kvZzlpLHotKVcclxuICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRTaG93OiAwLCAvLyAwLeW5v+WRiiAxLeWIhuS6q++8jOW9kyBvcGVyYXRpb24g5Li6IDEtNSDml7blv4XloatcclxuICAgICAgICAvLyAgICAgICAgIHN0cmF0ZWd5OiAxLCAvLyAwLeS4muWKoSAxLeW+ruS/oeetlueVpVxyXG4gICAgICAgIC8vICAgICAgICAgYWR1bml0OmFkVW5pdElkLCAvL+W9k+WJjeeCueS9jeeahGFkdW5pdFxyXG4gICAgICAgIC8vICAgICAgICAgc2NlbmVJRDp0eXBlIC8v5b2T5YmN54K55L2N55qEc2NlbmVJRFxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmlkZW9BZEVyckhhbmRsZShlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfop4bpopHliqDovb3lpLHotKUnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAvLyB7ZXJyTXNnOiBcIm5vIGFkdmVydGlzZW1lbnRcIiwgZXJyQ29kZTogMTAwNH1cclxuICAgICAgICBjb25zdCBlcnJIYW5kbGU9e1xyXG4gICAgICAgICAgICAxMDAwOiflkI7nq6/mjqXlj6PosIPnlKjlpLHotKUnLFxyXG4gICAgICAgICAgICAxMDAxOiflj4LmlbDplJnor68nLFxyXG4gICAgICAgICAgICAxMDAyOiflub/lkYrljZXlhYPml6DmlYgnLFxyXG4gICAgICAgICAgICAxMDAzOiflhoXpg6jplJnor68nLFxyXG4gICAgICAgICAgICAxMDA0Oifml6DlkIjpgILnmoTlub/lkYonLFxyXG4gICAgICAgICAgICAxMDA1Oiflub/lkYrnu4Tku7blrqHmoLjkuK0nLFxyXG4gICAgICAgICAgICAxMDA2Oiflub/lkYrnu4Tku7booqvpqbPlm54nLFxyXG4gICAgICAgICAgICAxMDA3Oiflub/lkYrnu4Tku7booqvlsIHnpoEnLFxyXG4gICAgICAgICAgICAxMDA4Oiflub/lkYrljZXlhYPlt7LlhbPpl60nLFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJySGFuZGxlW2Vyci5lcnJDb2RlXSB8fCAn6KeG6aKR5Yqg6L296ZSZ6K+vLOmHjeaWsOWKoOi9vemhtemdouivleivleWQpydcclxuICAgIH1cclxuICAgIC8qKumAmueUqOe7n+iuoSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhbGRSZXBvcnQocmlkOnN0cmluZyx0eXBlOnN0cmluZyA9ICdzaG93Jyl7XHJcbiAgICAgICAgaWYoIXRoaXMud3ggfHwgIXRoaXMud3guYWxkU3RhZ2UpIHJldHVybjtcclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImtKWmpabXpNbW1wRmVLNE5YZFo4dGFTUEdOXCIpO1xyXG4gICAgICAgIHd4LmFsZFNlbmRFdmVudChyaWQse2FjdGlvbjp0eXBlfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgYWxkTGV2ZWxSZXBvcnQobGV2ZWw6bnVtYmVyKXtcclxuICAgICAgICBpZighdGhpcy53eCB8fCAhdGhpcy53eC5hbGRTdGFnZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgd3guYWxkTGV2ZWwub25TZXRMZXZlbCh7XHJcbiAgICAgICAgICAgIGxldmVsSWQ6IGxldmVsICsgJycsICAvLyDnrYnnuqdpZCDlv4XkvKBcclxuICAgICAgICAgICAgbGV2ZWxOYW1lOiBg562J57qnJHtsZXZlbH1gLCAgLy8g562J57qn5ZCN56ewIOW/heS8oFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==