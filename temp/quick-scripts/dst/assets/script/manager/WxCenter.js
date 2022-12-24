
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
        }, 3000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUFzTEEsQ0FBQztJQW5MVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3RCLGNBQWM7WUFDZCxPQUFPO2dCQUNMLEtBQUssRUFBRSxXQUFXO2FBQ25CLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxnQkFBTyxHQUFkO1FBQ0ksT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJO0lBQ0csd0JBQWUsR0FBdEIsVUFBdUIsUUFBd0I7UUFBeEIseUJBQUEsRUFBQSxlQUF3QjtRQUMzQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFPO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxXQUFXO1NBQ3JCLENBQUMsQ0FBQztRQUNILElBQUcsQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUNyQixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNYLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsSUFBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBQztnQkFDOUIsUUFBUSxFQUFFLENBQUM7YUFDZDtZQUNELFFBQVEsR0FBRyxJQUFJ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T0FBTztRQUN6QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUM1RSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFYSx1QkFBYyxHQUE1QixVQUE2QixLQUFZO1FBQ3JDLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUN6QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxLQUFLLEdBQUcsRUFBRTtZQUNuQixTQUFTLEVBQUUsaUJBQUssS0FBTztTQUMxQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsZUFBQztBQUFELENBdExBLEFBc0xDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXeENlbnRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB3eDphbnk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBiYW5uZXJBZDphbnk7XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMud3ggPSB3aW5kb3cgJiYgd2luZG93Wyd3eCddO1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy53eC5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huKAnOi9rOWPkeKAneaMiemSrlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5qyi6L+O5Yqg5YWl5ZCD6bih5bCP5YiG6ZifJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNXeEVudigpe1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cgJiYgd2luZG93Wyd3eCddO1xyXG4gICAgfVxyXG4gICAgLy/kuLvliqhcclxuICAgIHN0YXRpYyBzaGFyZUFwcE1lc3NhZ2UoY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMud3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmrKLov47liqDlhaXlkIPpuKHlsI/liIbpmJ8nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoIWNhbGxiYWNrKSByZXR1cm47XHJcbiAgICAgICAgY2FsbGJhY2tbJ2tleXMnXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMud3gub25TaG93KCgpPT57XHJcbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgaWYobm93IC0gY2FsbGJhY2tbJ2tleXMnXSA+PSAzMDAwKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBzaG93QmFubmVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIGlmKCF0aGlzLmJhbm5lckFkKXtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZCA9IHd4LmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAneHh4eCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgdG9wOiA3NixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyMCxcclxuICAgICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6MzAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjVIV2tTRGZaU1dyVE13XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkLm9uRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJhbm5lckFkLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGlkZUJhbm5lcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLmJhbm5lckFkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dJbnRlcnN0aXRpYWxBZCgpe1xyXG4gICAgICAgIC8vIOWumuS5ieaPkuWxj+W5v+WRilxyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgaWYoIXd4KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGludGVyc3RpdGlhbEFkID0gbnVsbFxyXG4gICAgICAgIC8vIOWIm+W7uuaPkuWxj+W5v+WRiuWunuS+i++8jOaPkOWJjeWIneWni+WMllxyXG4gICAgICAgIGlmICh3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCl7XHJcbiAgICAgICAgICAgIGludGVyc3RpdGlhbEFkID0gd3guY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtYzY0ODE0YjE1NWFmNzNlNidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIOWcqOmAguWQiOeahOWcuuaZr+aYvuekuuaPkuWxj+W5v+WRilxyXG4gICAgICAgICAgICBpZiAoaW50ZXJzdGl0aWFsQWQpIHtcclxuICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbEFkLnNob3coKS50aGVuKCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aPkuWxjyDlub/lkYrlpLHotKU6JyxlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQub25DbG9zZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5LlsY8g5bm/5ZGK5YWz6ZetJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5LlsY8g5bm/5ZGK5Yqg6L295oiQ5YqfJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd1Jld2FyZGVkVmlkZW9BZChjYWxsYmFjazpGdW5jdGlvbix0eXBlOm51bWJlcil7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHtcclxuICAgICAgICAgICAgLy8gTXNnVG9hc3Quc2hvdyhcIueci+S6huS4gOS4quW5v+WRilwiKTtcclxuICAgICAgICAgICAgLy8gY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJURmZtTkRcIik7XHJcbiAgICAgICAgbGV0IGFkVW5pdElkID0gJydcclxuICAgICAgICBpZih0eXBlID09IDEpe1xyXG4gICAgICAgICAgICBhZFVuaXRJZCA9ICdhZHVuaXQtZTQ4MmRmYjAxMjA3ZDQ5MidcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0eXBlID09IDIpe1xyXG4gICAgICAgICAgICBhZFVuaXRJZCA9ICdhZHVuaXQtNDIyZDZhZmU4ZGNkZGQzOSdcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWFkVW5pdElkKSByZXR1cm47XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOifop4bpopHliqDovb3kuK0uLi4nLG1hc2s6dHJ1ZX0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgbGV0IHZpZGVvQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoeyBhZFVuaXRJZCB9KTtcclxuICAgICAgICB2aWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmlzRW5kZWQgfHwgcmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiTVo0cmpCa0dERU1jWUhqcHk2ZXdZXCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdmlkZW9BZC5vbkVycm9yKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCgn6KeG6aKR6I635Y+W5aSx6LSlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmlkZW9BZC5zaG93KCkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+a/gOWKseinhumikSDlub/lkYrmmL7npLonKVxyXG4gICAgICAgICAgICB2aWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHZpZGVvQWQuc2hvdygpKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KCfop4bpopHojrflj5blpLHotKUnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIOS4iuaKpVxyXG4gICAgICAgIC8vIGlmKHZpZGVvQWQucmVwb3J0U2hhcmVCZWhhdmlvcil7XHJcbiAgICAgICAgLy8gICAgIHZpZGVvQWQucmVwb3J0U2hhcmVCZWhhdmlvcih7XHJcbiAgICAgICAgLy8gICAgICAgICBvcGVyYXRpb246IDIsIC8vIDEt5pud5YWJIDIt54K55Ye7IDMt5YWz6ZetIDQt5pON5L2c5oiQ5YqfIDUt5pON5L2c5aSx6LSlXHJcbiAgICAgICAgLy8gICAgICAgICBjdXJyZW50U2hvdzogMCwgLy8gMC3lub/lkYogMS3liIbkuqvvvIzlvZMgb3BlcmF0aW9uIOS4uiAxLTUg5pe25b+F5aGrXHJcbiAgICAgICAgLy8gICAgICAgICBzdHJhdGVneTogMSwgLy8gMC3kuJrliqEgMS3lvq7kv6HnrZbnlaVcclxuICAgICAgICAvLyAgICAgICAgIGFkdW5pdDphZFVuaXRJZCwgLy/lvZPliY3ngrnkvY3nmoRhZHVuaXRcclxuICAgICAgICAvLyAgICAgICAgIHNjZW5lSUQ6dHlwZSAvL+W9k+WJjeeCueS9jeeahHNjZW5lSURcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHZpZGVvQWRFcnJIYW5kbGUoZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn6KeG6aKR5Yqg6L295aSx6LSlJylcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgLy8ge2Vyck1zZzogXCJubyBhZHZlcnRpc2VtZW50XCIsIGVyckNvZGU6IDEwMDR9XHJcbiAgICAgICAgY29uc3QgZXJySGFuZGxlPXtcclxuICAgICAgICAgICAgMTAwMDon5ZCO56uv5o6l5Y+j6LCD55So5aSx6LSlJyxcclxuICAgICAgICAgICAgMTAwMTon5Y+C5pWw6ZSZ6K+vJyxcclxuICAgICAgICAgICAgMTAwMjon5bm/5ZGK5Y2V5YWD5peg5pWIJyxcclxuICAgICAgICAgICAgMTAwMzon5YaF6YOo6ZSZ6K+vJyxcclxuICAgICAgICAgICAgMTAwNDon5peg5ZCI6YCC55qE5bm/5ZGKJyxcclxuICAgICAgICAgICAgMTAwNTon5bm/5ZGK57uE5Lu25a6h5qC45LitJyxcclxuICAgICAgICAgICAgMTAwNjon5bm/5ZGK57uE5Lu26KKr6amz5ZueJyxcclxuICAgICAgICAgICAgMTAwNzon5bm/5ZGK57uE5Lu26KKr5bCB56aBJyxcclxuICAgICAgICAgICAgMTAwODon5bm/5ZGK5Y2V5YWD5bey5YWz6ZetJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVyckhhbmRsZVtlcnIuZXJyQ29kZV0gfHwgJ+inhumikeWKoOi9vemUmeivryzph43mlrDliqDovb3pobXpnaLor5Xor5XlkKcnXHJcbiAgICB9XHJcbiAgICAvKirpgJrnlKjnu5/orqEgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWxkUmVwb3J0KHJpZDpzdHJpbmcsdHlwZTpzdHJpbmcgPSAnc2hvdycpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4IHx8ICF0aGlzLnd4LmFsZFN0YWdlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJrSlpqWm16TW1tcEZlSzROWGRaOHRhU1BHTlwiKTtcclxuICAgICAgICB3eC5hbGRTZW5kRXZlbnQocmlkLHthY3Rpb246dHlwZX0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZExldmVsUmVwb3J0KGxldmVsOm51bWJlcil7XHJcbiAgICAgICAgaWYoIXRoaXMud3ggfHwgIXRoaXMud3guYWxkU3RhZ2UpIHJldHVybjtcclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIHd4LmFsZExldmVsLm9uU2V0TGV2ZWwoe1xyXG4gICAgICAgICAgICBsZXZlbElkOiBsZXZlbCArICcnLCAgLy8g562J57qnaWQg5b+F5LygXHJcbiAgICAgICAgICAgIGxldmVsTmFtZTogYOetiee6pyR7bGV2ZWx9YCwgIC8vIOetiee6p+WQjeensCDlv4XkvKBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=