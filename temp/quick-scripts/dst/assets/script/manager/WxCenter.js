
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxXeENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO0lBa0lBLENBQUM7SUE5SFUsYUFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QixjQUFjO1lBQ2QsT0FBTztnQkFDTCxLQUFLLEVBQUUsV0FBVzthQUNuQixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsSUFBSTtJQUNHLHdCQUFlLEdBQXRCLFVBQXVCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNwQixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUM7Z0JBQzlCLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0ks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QUssR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxpQkFBSyxLQUFPO1NBQzFCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FsSUEsQUFrSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dIaW50cyBmcm9tIFwiLi4vZnJhbXdvcmsvTXNnSGludHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4Q2VudGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHd4OmFueTtcclxuICAgIHByaXZhdGUgc3RhdGljIGJhbm5lckFkOmFueTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJld2FyZFZpZGVvOmFueTtcclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdGhpcy53eCA9IHdpbmRvdyAmJiB3aW5kb3dbJ3d4J107XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcclxuICAgICAgICB0aGlzLnd4Lm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG4oCc6L2s5Y+R4oCd5oyJ6ZKuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmrKLov47liqDlhaXlkIPpuKHlsI/liIbpmJ8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/kuLvliqhcclxuICAgIHN0YXRpYyBzaGFyZUFwcE1lc3NhZ2UoY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICBpZighdGhpcy53eCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMud3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmrKLov47liqDlhaXlkIPpuKHlsI/liIbpmJ8nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoIWNhbGxiYWNrKSByZXR1cm47XHJcbiAgICAgICAgY2FsbGJhY2tbJ2tleXMnXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMud3gub25TaG93KCgpPT57XHJcbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgaWYobm93IC0gY2FsbGJhY2tbJ2tleXMnXSA+PSAzMDAwKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBzaG93QmFubmVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpIHJldHVybjtcclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIGlmKCF0aGlzLmJhbm5lckFkKXtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZCA9IHd4LmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAneHh4eCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgdG9wOiA3NixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyMCxcclxuICAgICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6MzAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFubmVyQWQuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlQmFubmVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuYmFubmVyQWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJhbm5lckFkLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd1Jld2FyZGVkVmlkZW9BZChjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KSB7XHJcbiAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLnnIvkuobkuIDkuKrlub/lkYpcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnnIvkuobkuIDkuKrlub/lkYonKVxyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICBsZXQgd3ggPSB0aGlzLnd4O1xyXG4gICAgICAgIGxldCB2aWRlb0FkID0gdGhpcy5yZXdhcmRWaWRlbztcclxuICAgICAgICBpZighdmlkZW9BZCl7XHJcbiAgICAgICAgICAgIHZpZGVvQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoeyBhZFVuaXRJZDogJ3h4eHgnIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZFZpZGVvID0gdmlkZW9BZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlkZW9BZC5vbkVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIC8v6YeN5paw5ouJ5Y+WXHJcbiAgICAgICAgICAgIHZpZGVvQWQubG9hZCgpLnRoZW4oKCkgPT4gdmlkZW9BZC5zaG93KCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlkZW9BZC5zaG93KCkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+a/gOWKseinhumikSDlub/lkYrmmL7npLonKVxyXG4gICAgICAgICAgICB2aWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHZpZGVvQWQuc2hvdygpKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogV3hDZW50ZXIudmlkZW9BZEVyckhhbmRsZShlcnIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHZpZGVvQWQub25DbG9zZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobjgJDlhbPpl63lub/lkYrjgJHmjInpkq5cclxuICAgICAgICAgICAgLy8g5bCP5LqOIDIuMS4wIOeahOWfuuehgOW6k+eJiOacrO+8jHJlcyDmmK/kuIDkuKogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmlzRW5kZWQgfHwgcmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB2aWRlb0FkRXJySGFuZGxlKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+inhumikeWKoOi9veWksei0pScpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIC8vIHtlcnJNc2c6IFwibm8gYWR2ZXJ0aXNlbWVudFwiLCBlcnJDb2RlOiAxMDA0fVxyXG4gICAgICAgIGNvbnN0IGVyckhhbmRsZT17XHJcbiAgICAgICAgICAgIDEwMDA6J+WQjuerr+aOpeWPo+iwg+eUqOWksei0pScsXHJcbiAgICAgICAgICAgIDEwMDE6J+WPguaVsOmUmeivrycsXHJcbiAgICAgICAgICAgIDEwMDI6J+W5v+WRiuWNleWFg+aXoOaViCcsXHJcbiAgICAgICAgICAgIDEwMDM6J+WGhemDqOmUmeivrycsXHJcbiAgICAgICAgICAgIDEwMDQ6J+aXoOWQiOmAgueahOW5v+WRiicsXHJcbiAgICAgICAgICAgIDEwMDU6J+W5v+WRiue7hOS7tuWuoeaguOS4rScsXHJcbiAgICAgICAgICAgIDEwMDY6J+W5v+WRiue7hOS7tuiiq+mps+WbnicsXHJcbiAgICAgICAgICAgIDEwMDc6J+W5v+WRiue7hOS7tuiiq+WwgeemgScsXHJcbiAgICAgICAgICAgIDEwMDg6J+W5v+WRiuWNleWFg+W3suWFs+mXrScsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJIYW5kbGVbZXJyLmVyckNvZGVdIHx8ICfop4bpopHliqDovb3plJnor68s6YeN5paw5Yqg6L296aG16Z2i6K+V6K+V5ZCnJ1xyXG4gICAgfVxyXG4gICAgLyoq6YCa55So57uf6K6hICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZFJlcG9ydChyaWQ6c3RyaW5nLHR5cGU6c3RyaW5nID0gJ3Nob3cnKXtcclxuICAgICAgICBpZighdGhpcy53eCB8fCAhdGhpcy53eC5hbGRTdGFnZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB3eCA9IHRoaXMud3g7XHJcbiAgICAgICAgd3guYWxkU2VuZEV2ZW50KHJpZCx7YWN0aW9uOnR5cGV9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhbGRMZXZlbFJlcG9ydChsZXZlbDpudW1iZXIpe1xyXG4gICAgICAgIGlmKCF0aGlzLnd4IHx8ICF0aGlzLnd4LmFsZFN0YWdlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHd4ID0gdGhpcy53eDtcclxuICAgICAgICB3eC5hbGRMZXZlbC5vblNldExldmVsKHtcclxuICAgICAgICAgICAgbGV2ZWxJZDogbGV2ZWwgKyAnJywgIC8vIOetiee6p2lkIOW/heS8oFxyXG4gICAgICAgICAgICBsZXZlbE5hbWU6IGDnrYnnuqcke2xldmVsfWAsICAvLyDnrYnnuqflkI3np7Ag5b+F5LygXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19