
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
    };
    WxCenter.showRewardedVideoAd = function (callback, type) {
        if (!this.wx) {
            // MsgToast.show("看了一个广告");
            // callback && callback(true);
            return;
        }
        var wx = this.wx;
        if (window && window['xxxxx'])
            window['xxxxx']("TFfmND");
        var adUnitId = '';
        if (type == 1) {
            adUnitId = 'adunit-e482dfb01207d492';
        }
        else if (type == 2) {
            adUnitId = 'adunit-422d6afe8dcddd39';
        }
        if (!adUnitId)
            return;
        wx.showLoading({ title: '视频加载中...', mask: true });
        setTimeout(function () {
            wx.hideLoading();
        }, 3000);
        var videoAd = wx.createRewardedVideoAd({ adUnitId: adUnitId });
        videoAd.onClose(function (res) {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            wx.hideLoading();
            if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励
                if (window && window['xxxxx'])
                    window['xxxxx']("MZ4rjBkGDEMcYHjpy6ewY");
                callback && callback(true);
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
        videoAd.show().then(function (res) {
            // console.log('激励视频 广告显示')
            videoAd.load().then(function () { return videoAd.show(); }).catch(function (err) {
                console.log(err);
                wx.hideLoading();
                wx.showToast('视频获取失败');
            });
        });
        // 上报
        if (videoAd.reportShareBehavior) {
            videoAd.reportShareBehavior({
                operation: 2,
                currentShow: 0,
                strategy: 1,
                adunit: adUnitId,
                sceneID: type //当前点位的sceneID
            });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUFtTEEsQ0FBQztJQWhMVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3RCLGNBQWM7WUFDZCxPQUFPO2dCQUNMLEtBQUssRUFBRSxXQUFXO2FBQ25CLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxnQkFBTyxHQUFkO1FBQ0ksT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJO0lBQ0csd0JBQWUsR0FBdEIsVUFBdUIsUUFBd0I7UUFBeEIseUJBQUEsRUFBQSxlQUF3QjtRQUMzQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFPO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxXQUFXO1NBQ3JCLENBQUMsQ0FBQztRQUNILElBQUcsQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUNyQixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNYLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsSUFBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBQztnQkFDOUIsUUFBUSxFQUFFLENBQUM7YUFDZDtZQUNELFFBQVEsR0FBRyxJQUFJ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Q0FBQyxFQUFFLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDekMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRWEsdUJBQWMsR0FBNUIsVUFBNkIsS0FBWTtRQUNyQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDekMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNuQixPQUFPLEVBQUUsS0FBSyxHQUFHLEVBQUU7WUFDbkIsU0FBUyxFQUFFLGlCQUFLLEtBQU87U0FDMUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQW5MQSxBQW1MQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3hDZW50ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgd3g6YW55O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmFubmVyQWQ6YW55O1xyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB0aGlzLnd4ID0gd2luZG93ICYmIHdpbmRvd1snd3gnXTtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMud3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobigJzovazlj5HigJ3mjInpkq5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+asoui/juWKoOWFpeWQg+m4oeWwj+WIhumYnydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzV3hFbnYoKXtcclxuICAgICAgICByZXR1cm4gd2luZG93ICYmIHdpbmRvd1snd3gnXTtcclxuICAgIH1cclxuICAgIC8v5Li75YqoXHJcbiAgICBzdGF0aWMgc2hhcmVBcHBNZXNzYWdlKGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcclxuICAgICAgICB0aGlzLnd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5qyi6L+O5Yqg5YWl5ZCD6bih5bCP5YiG6ZifJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFjYWxsYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGNhbGxiYWNrWydrZXlzJ10gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnd4Lm9uU2hvdygoKT0+e1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmKG5vdyAtIGNhbGxiYWNrWydrZXlzJ10gPj0gMzAwMCl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgc2hvd0Jhbm5lcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBpZighdGhpcy5iYW5uZXJBZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSB3eC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ3h4eHgnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNzYsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjAsXHJcbiAgICAgICAgICAgICAgICAgIGFkSW50ZXJ2YWxzOjMwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI1SFdrU0RmWlNXclRNd1wiKTtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5vbkVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iYW5uZXJBZC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGVCYW5uZXIoKXtcclxuICAgICAgICBpZighdGhpcy5iYW5uZXJBZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYmFubmVyQWQuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93SW50ZXJzdGl0aWFsQWQoKXtcclxuICAgICAgICAvLyDlrprkuYnmj5LlsY/lub/lkYpcclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIGlmKCF3eCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpbnRlcnN0aXRpYWxBZCA9IG51bGxcclxuICAgICAgICAvLyDliJvlu7rmj5LlsY/lub/lkYrlrp7kvovvvIzmj5DliY3liJ3lp4vljJZcclxuICAgICAgICBpZiAod3guY3JlYXRlSW50ZXJzdGl0aWFsQWQpe1xyXG4gICAgICAgICAgICBpbnRlcnN0aXRpYWxBZCA9IHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWM2NDgxNGIxNTVhZjczZTYnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWcqOmAguWQiOeahOWcuuaZr+aYvuekuuaPkuWxj+W5v+WRilxyXG4gICAgICAgIGlmIChpbnRlcnN0aXRpYWxBZCkge1xyXG4gICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5zaG93KCkudGhlbigpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aPkuWxjyDlub/lkYrlpLHotKU6JyxlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGludGVyc3RpdGlhbEFkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5LlsY8g5bm/5ZGK5YWz6ZetJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5LlsY8g5bm/5ZGK5Yqg6L295oiQ5YqfJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dSZXdhcmRlZFZpZGVvQWQoY2FsbGJhY2s6RnVuY3Rpb24sdHlwZTpudW1iZXIpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSB7XHJcbiAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLnnIvkuobkuIDkuKrlub/lkYpcIik7XHJcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiVEZmbU5EXCIpO1xyXG4gICAgICAgIGxldCBhZFVuaXRJZCA9ICcnXHJcbiAgICAgICAgaWYodHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgYWRVbml0SWQgPSAnYWR1bml0LWU0ODJkZmIwMTIwN2Q0OTInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgYWRVbml0SWQgPSAnYWR1bml0LTQyMmQ2YWZlOGRjZGRkMzknXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFhZFVuaXRJZCkgcmV0dXJuO1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTon6KeG6aKR5Yqg6L295LitLi4uJyxtYXNrOnRydWV9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIGxldCB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgYWRVbml0SWQgfSk7XHJcbiAgICAgICAgdmlkZW9BZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huOAkOWFs+mXreW5v+WRiuOAkeaMiemSrlxyXG4gICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzIOaYr+S4gOS4qiB1bmRlZmluZWRcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIk1aNHJqQmtHREVNY1lIanB5NmV3WVwiKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHZpZGVvQWQub25FcnJvcihlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3QoJ+inhumikeiOt+WPluWksei0pScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZpZGVvQWQuc2hvdygpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pi+56S6JylcclxuICAgICAgICAgICAgdmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB2aWRlb0FkLnNob3coKSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCgn6KeG6aKR6I635Y+W5aSx6LSlJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyDkuIrmiqVcclxuICAgICAgICBpZih2aWRlb0FkLnJlcG9ydFNoYXJlQmVoYXZpb3Ipe1xyXG4gICAgICAgICAgICB2aWRlb0FkLnJlcG9ydFNoYXJlQmVoYXZpb3Ioe1xyXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiAyLCAvLyAxLeabneWFiSAyLeeCueWHuyAzLeWFs+mXrSA0LeaTjeS9nOaIkOWKnyA1LeaTjeS9nOWksei0pVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNob3c6IDAsIC8vIDAt5bm/5ZGKIDEt5YiG5Lqr77yM5b2TIG9wZXJhdGlvbiDkuLogMS01IOaXtuW/heWhq1xyXG4gICAgICAgICAgICAgICAgc3RyYXRlZ3k6IDEsIC8vIDAt5Lia5YqhIDEt5b6u5L+h562W55WlXHJcbiAgICAgICAgICAgICAgICBhZHVuaXQ6YWRVbml0SWQsIC8v5b2T5YmN54K55L2N55qEYWR1bml0XHJcbiAgICAgICAgICAgICAgICBzY2VuZUlEOnR5cGUgLy/lvZPliY3ngrnkvY3nmoRzY2VuZUlEXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB2aWRlb0FkRXJySGFuZGxlKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+inhumikeWKoOi9veWksei0pScpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIC8vIHtlcnJNc2c6IFwibm8gYWR2ZXJ0aXNlbWVudFwiLCBlcnJDb2RlOiAxMDA0fVxyXG4gICAgICAgIGNvbnN0IGVyckhhbmRsZT17XHJcbiAgICAgICAgICAgIDEwMDA6J+WQjuerr+aOpeWPo+iwg+eUqOWksei0pScsXHJcbiAgICAgICAgICAgIDEwMDE6J+WPguaVsOmUmeivrycsXHJcbiAgICAgICAgICAgIDEwMDI6J+W5v+WRiuWNleWFg+aXoOaViCcsXHJcbiAgICAgICAgICAgIDEwMDM6J+WGhemDqOmUmeivrycsXHJcbiAgICAgICAgICAgIDEwMDQ6J+aXoOWQiOmAgueahOW5v+WRiicsXHJcbiAgICAgICAgICAgIDEwMDU6J+W5v+WRiue7hOS7tuWuoeaguOS4rScsXHJcbiAgICAgICAgICAgIDEwMDY6J+W5v+WRiue7hOS7tuiiq+mps+WbnicsXHJcbiAgICAgICAgICAgIDEwMDc6J+W5v+WRiue7hOS7tuiiq+WwgeemgScsXHJcbiAgICAgICAgICAgIDEwMDg6J+W5v+WRiuWNleWFg+W3suWFs+mXrScsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJIYW5kbGVbZXJyLmVyckNvZGVdIHx8ICfop4bpopHliqDovb3plJnor68s6YeN5paw5Yqg6L296aG16Z2i6K+V6K+V5ZCnJ1xyXG4gICAgfVxyXG4gICAgLyoq6YCa55So57uf6K6hICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZFJlcG9ydChyaWQ6c3RyaW5nLHR5cGU6c3RyaW5nID0gJ3Nob3cnKXtcclxuICAgICAgICBpZighdGhpcy53eCB8fCAhdGhpcy53eC5hbGRTdGFnZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwia0paalptek1tbXBGZUs0TlhkWjh0YVNQR05cIik7XHJcbiAgICAgICAgd3guYWxkU2VuZEV2ZW50KHJpZCx7YWN0aW9uOnR5cGV9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhbGRMZXZlbFJlcG9ydChsZXZlbDpudW1iZXIpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4IHx8ICF0aGlzLnd4LmFsZFN0YWdlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICB3eC5hbGRMZXZlbC5vblNldExldmVsKHtcclxuICAgICAgICAgICAgbGV2ZWxJZDogbGV2ZWwgKyAnJywgIC8vIOetiee6p2lkIOW/heS8oFxyXG4gICAgICAgICAgICBsZXZlbE5hbWU6IGDnrYnnuqcke2xldmVsfWAsICAvLyDnrYnnuqflkI3np7Ag5b+F5LygXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19