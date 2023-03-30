
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlci9XeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUErTEEsQ0FBQztJQTFMVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3RCLGNBQWM7WUFDZCxPQUFPO2dCQUNMLEtBQUssRUFBRSxXQUFXO2FBQ25CLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU87UUFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUNJLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxN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QUFHLENBQUMsT0FBTyxDQUFDLElBQUksa0JBQWtCLENBQUE7SUFDdkQsQ0FBQztJQUNELFVBQVU7SUFDSSxrQkFBUyxHQUF2QixVQUF3QixHQUFVLEVBQUMsSUFBb0I7UUFBcEIscUJBQUEsRUFBQSxhQUFvQjtRQUNuRCxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDekMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRWEsdUJBQWMsR0FBNUIsVUFBNkIsS0FBWTtRQUNyQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDekMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNuQixPQUFPLEVBQUUsS0FBSyxHQUFHLEVBQUU7WUFDbkIsU0FBUyxFQUFFLGlCQUFLLEtBQU87U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUF6TGMsc0JBQWEsR0FBWSxJQUFJLENBQUM7SUEyTGpELGVBQUM7Q0EvTEQsQUErTEMsSUFBQTtrQkEvTG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4Q2VudGVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyB3eDphbnk7XG4gICAgcHJpdmF0ZSBzdGF0aWMgYmFubmVyQWQ6YW55O1xuICAgIHByaXZhdGUgc3RhdGljIHZpZGVvQWQ6YW55O1xuICAgIHByaXZhdGUgc3RhdGljIHZpZGVvQ2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsO1xuICAgIHN0YXRpYyBpbml0KCl7XG4gICAgICAgIHRoaXMud3ggPSB3aW5kb3cgJiYgd2luZG93Wyd3eCddO1xuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnd4Lm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huKAnOi9rOWPkeKAneaMiemSrlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmrKLov47liqDlhaXlkIPpuKHlsI/liIbpmJ8nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIOaPkOWJjeWKoOi9vVxuICAgICAgICB0aGlzLnNob3dSZXdhcmRlZFZpZGVvQWQobnVsbCwxLHRydWUpXG4gICAgfVxuXG4gICAgc3RhdGljIGlzV3hFbnYoKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdyAmJiB3aW5kb3dbJ3d4J107XG4gICAgfVxuICAgIC8v5Li75YqoXG4gICAgc3RhdGljIHNoYXJlQXBwTWVzc2FnZShjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnd4LnNoYXJlQXBwTWVzc2FnZSh7XG4gICAgICAgICAgICB0aXRsZTogJ+asoui/juWKoOWFpeWQg+m4oeWwj+WIhumYnydcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKCFjYWxsYmFjaykgcmV0dXJuO1xuICAgICAgICBjYWxsYmFja1sna2V5cyddID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMud3gub25TaG93KCgpPT57XG4gICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZihub3cgLSBjYWxsYmFja1sna2V5cyddID49IDMwMDApe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBzaG93QmFubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XG4gICAgICAgIGlmKCF0aGlzLmJhbm5lckFkKXtcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSB3eC5jcmVhdGVCYW5uZXJBZCh7XG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICd4eHh4JyxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgbGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICB0b3A6IDc2LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyMCxcbiAgICAgICAgICAgICAgICAgIGFkSW50ZXJ2YWxzOjMwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI1SFdrU0RmWlNXclRNd1wiKTtcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQub25FcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhbm5lckFkLnNob3coKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZUJhbm5lcigpe1xuICAgICAgICBpZighdGhpcy5iYW5uZXJBZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmJhbm5lckFkLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd0ludGVyc3RpdGlhbEFkKCl7XG4gICAgICAgIC8vIOWumuS5ieaPkuWxj+W5v+WRilxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xuICAgICAgICBpZighd3gpIHJldHVybjtcbiAgICAgICAgbGV0IGludGVyc3RpdGlhbEFkID0gbnVsbFxuICAgICAgICAvLyDliJvlu7rmj5LlsY/lub/lkYrlrp7kvovvvIzmj5DliY3liJ3lp4vljJZcbiAgICAgICAgaWYgKHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKXtcbiAgICAgICAgICAgIGludGVyc3RpdGlhbEFkID0gd3guY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWM2NDgxNGIxNTVhZjczZTYnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIOWcqOmAguWQiOeahOWcuuaZr+aYvuekuuaPkuWxj+W5v+WRilxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIOWcqOmAguWQiOeahOWcuuaZr+aYvuekuuaPkuWxj+W5v+WRilxuICAgICAgICAgICAgaWYgKGludGVyc3RpdGlhbEFkKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQuc2hvdygpLnRoZW4oKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aPkuWxjyDlub/lkYrlpLHotKU6JyxlcnIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5vbkNsb3NlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5LlsY8g5bm/5ZGK5YWz6ZetJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbEFkLm9uTG9hZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5LlsY8g5bm/5ZGK5Yqg6L295oiQ5YqfJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzNTAwKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd1Jld2FyZGVkVmlkZW9BZChjYWxsYmFjazpGdW5jdGlvbix0eXBlOm51bWJlcixpc2luaXQgPSBmYWxzZSl7XG4gICAgICAgIGlmKCF0aGlzLnd4KSB7XG4gICAgICAgICAgICAvLyBNc2dUb2FzdC5zaG93KFwi55yL5LqG5LiA5Liq5bm/5ZGKXCIpO1xuICAgICAgICAgICAgLy8gY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiVEZmbU5EXCIpO1xuICAgICAgICBsZXQgYWRVbml0SWQgPSAnJ1xuICAgICAgICBpZih0eXBlID09IDIpe1xuICAgICAgICAgICAgYWRVbml0SWQgPSAnYWR1bml0LWNhZDdkZTM1NjkxMDliMzgnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGFkVW5pdElkID0gJ2FkdW5pdC1lNDgyZGZiMDEyMDdkNDkyJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlkZW9DYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBpZighaXNpbml0KXtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTon6KeG6aKR5Yqg6L295LitLi4uJyxtYXNrOnRydWV9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIGxldCB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgYWRVbml0SWQgfSk7XG4gICAgICAgIGlmKGlzaW5pdCl7XG4gICAgICAgICAgICB2aWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobjgJDlhbPpl63lub/lkYrjgJHmjInpkq5cbiAgICAgICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzIOaYr+S4gOS4qiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiTVo0cmpCa0dERU1jWUhqcHk2ZXdZXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQ2FsbGJhY2sgJiYgdGhpcy52aWRlb0NhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZpZGVvQWQub25FcnJvcihlcnJvcj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoJ+inhumikeiOt+WPluWksei0pScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmlkZW9BZC5zaG93KCkudGhlbihyZXM9PntcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pi+56S6JylcbiAgICAgICAgICAgIHZpZGVvQWQubG9hZCgpLnRoZW4oKCkgPT4gdmlkZW9BZC5zaG93KCkpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoJ+inhumikeiOt+WPluWksei0pScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8g5LiK5oqlXG4gICAgICAgIC8vIGlmKHZpZGVvQWQucmVwb3J0U2hhcmVCZWhhdmlvcil7XG4gICAgICAgIC8vICAgICB2aWRlb0FkLnJlcG9ydFNoYXJlQmVoYXZpb3Ioe1xuICAgICAgICAvLyAgICAgICAgIG9wZXJhdGlvbjogMiwgLy8gMS3mm53lhYkgMi3ngrnlh7sgMy3lhbPpl60gNC3mk43kvZzmiJDlip8gNS3mk43kvZzlpLHotKVcbiAgICAgICAgLy8gICAgICAgICBjdXJyZW50U2hvdzogMCwgLy8gMC3lub/lkYogMS3liIbkuqvvvIzlvZMgb3BlcmF0aW9uIOS4uiAxLTUg5pe25b+F5aGrXG4gICAgICAgIC8vICAgICAgICAgc3RyYXRlZ3k6IDEsIC8vIDAt5Lia5YqhIDEt5b6u5L+h562W55WlXG4gICAgICAgIC8vICAgICAgICAgYWR1bml0OmFkVW5pdElkLCAvL+W9k+WJjeeCueS9jeeahGFkdW5pdFxuICAgICAgICAvLyAgICAgICAgIHNjZW5lSUQ6dHlwZSAvL+W9k+WJjeeCueS9jeeahHNjZW5lSURcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmlkZW9BZEVyckhhbmRsZShlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZygn6KeG6aKR5Yqg6L295aSx6LSlJylcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAvLyB7ZXJyTXNnOiBcIm5vIGFkdmVydGlzZW1lbnRcIiwgZXJyQ29kZTogMTAwNH1cbiAgICAgICAgY29uc3QgZXJySGFuZGxlPXtcbiAgICAgICAgICAgIDEwMDA6J+WQjuerr+aOpeWPo+iwg+eUqOWksei0pScsXG4gICAgICAgICAgICAxMDAxOiflj4LmlbDplJnor68nLFxuICAgICAgICAgICAgMTAwMjon5bm/5ZGK5Y2V5YWD5peg5pWIJyxcbiAgICAgICAgICAgIDEwMDM6J+WGhemDqOmUmeivrycsXG4gICAgICAgICAgICAxMDA0Oifml6DlkIjpgILnmoTlub/lkYonLFxuICAgICAgICAgICAgMTAwNTon5bm/5ZGK57uE5Lu25a6h5qC45LitJyxcbiAgICAgICAgICAgIDEwMDY6J+W5v+WRiue7hOS7tuiiq+mps+WbnicsXG4gICAgICAgICAgICAxMDA3Oiflub/lkYrnu4Tku7booqvlsIHnpoEnLFxuICAgICAgICAgICAgMTAwODon5bm/5ZGK5Y2V5YWD5bey5YWz6ZetJyxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJySGFuZGxlW2Vyci5lcnJDb2RlXSB8fCAn6KeG6aKR5Yqg6L296ZSZ6K+vLOmHjeaWsOWKoOi9vemhtemdouivleivleWQpydcbiAgICB9XG4gICAgLyoq6YCa55So57uf6K6hICovXG4gICAgcHVibGljIHN0YXRpYyBhbGRSZXBvcnQocmlkOnN0cmluZyx0eXBlOnN0cmluZyA9ICdzaG93Jyl7XG4gICAgICAgIGlmKCF0aGlzLnd4IHx8ICF0aGlzLnd4LmFsZFN0YWdlKSByZXR1cm47XG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImtKWmpabXpNbW1wRmVLNE5YZFo4dGFTUEdOXCIpO1xuICAgICAgICB3eC5hbGRTZW5kRXZlbnQocmlkLHthY3Rpb246dHlwZX0pO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIGFsZExldmVsUmVwb3J0KGxldmVsOm51bWJlcil7XG4gICAgICAgIGlmKCF0aGlzLnd4IHx8ICF0aGlzLnd4LmFsZFN0YWdlKSByZXR1cm47XG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XG4gICAgICAgIHd4LmFsZExldmVsLm9uU2V0TGV2ZWwoe1xuICAgICAgICAgICAgbGV2ZWxJZDogbGV2ZWwgKyAnJywgIC8vIOetiee6p2lkIOW/heS8oFxuICAgICAgICAgICAgbGV2ZWxOYW1lOiBg562J57qnJHtsZXZlbH1gLCAgLy8g562J57qn5ZCN56ewIOW/heS8oFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NzZGZnZTJxOTAzNDIzLTItMycpXG4gICAgfVxuXG59Il19