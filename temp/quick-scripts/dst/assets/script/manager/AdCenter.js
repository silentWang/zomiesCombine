
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/AdCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04f46M4nKZHVpGCqJxlR4+3', 'AdCenter');
// script/manager/AdCenter.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
var MsgToast_1 = require("../framwork/MsgToast");
var Utils_1 = require("../utils/Utils");
var WxCenter_1 = require("./WxCenter");
var tt = window["tt"];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AdCenter = /** @class */ (function (_super) {
    __extends(AdCenter, _super);
    function AdCenter() {
        var _this = _super.call(this) || this;
        _this.videoAdID = null;
        _this.bannerAdID = null;
        _this.bannerAd = null;
        _this.interstitialAd = null;
        _this._lastPlayTime = 0;
        if (tt && tt.createRewardedVideoAd) {
            _this.videoAdID = tt.createRewardedVideoAd({
                adUnitId: '73ejb9hf3j84rs5p9b'
            });
            if (window && window['xxxxx'])
                window['xxxxx']("cM5zM6kQEi");
            _this.videoAdID.onError(function (res) {
                console.log("onError", res);
                MsgToast_1.default.show("广告加载失败");
                MsgToast_1.default.show('视频加载失败');
            });
            _this.videoAdID.onLoad(function () {
                // console.log('广告加载成功');
            });
            _this.videoAdID.onClose(function (res) {
                if (res && res.isEnded || res === undefined) {
                    // cc.log("正常播放结束，可以下发游戏奖励")
                    _this.callBack(true);
                }
                else {
                    // cc.log("播放中途退出，不下发游戏奖励")
                    _this.callBack(false);
                }
            });
            if (tt.createInterstitialAd) {
                _this.interstitialAd = tt.createInterstitialAd({
                    adUnitId: 'dj4bajb3m18ue2079v'
                });
            }
            var _a = tt.getSystemInfoSync(), screenWidth = _a.screenWidth, screenHeight = _a.screenHeight;
            // this.bannerAd = tt.createBannerAd({
            //     adUnitId: '3a3ld4b071g57lnlji',
            //     style: { width: screenWidth,
            //         top:screenHeight - 150 }
            // })
        }
        return _this;
    }
    AdCenter.prototype.play = function (callback, type) {
        if (window && window['xxxxx'])
            window['xxxxx']("xYBwNjGb4PRGfc678KbNpCti");
        if (Utils_1.default.getServerTime() - this._lastPlayTime < 1000) {
            console.log("点击过于频繁");
            return;
        }
        this._lastPlayTime = Utils_1.default.getServerTime();
        this.callBack = callback;
        if (tt) {
            this.playVideo(type);
            // callback && callback(1)
        }
        else if (WxCenter_1.default.isWxEnv()) {
            WxCenter_1.default.showRewardedVideoAd(callback, type);
        }
        else {
            callback && callback(1);
        }
    };
    AdCenter.prototype.playVideo = function (type) {
        var _this = this;
        if (this.videoAdID) {
            var unitid = type == 2 ? '73ejb9hf3j84rs5p9b' : '73ejb9hf3j84rs5p9b';
            this.videoAdID = tt.createRewardedVideoAd({
                adUnitId: unitid
            });
            this.videoAdID.show().catch(function () {
                _this.videoAdID.load()
                    .then(function () { return _this.videoAdID.show(); })
                    .catch(function (err) {
                    cc.log('激励视频 广告显示失败');
                    _this.callBack(false);
                    MsgToast_1.default.show('视频加载失败');
                });
            });
        }
        else {
            this.callBack(true);
        }
    };
    AdCenter.prototype.showGridAd = function () {
        if (WxCenter_1.default.isWxEnv()) {
            WxCenter_1.default.showBanner();
        }
        else {
            if (this.bannerAd)
                this.bannerAd.show();
        }
        if (window && window['xxxxx'])
            window['xxxxx']("3DmJjHm2mF8Z");
    };
    AdCenter.prototype.hideGridAd = function () {
        if (WxCenter_1.default.isWxEnv()) {
            WxCenter_1.default.hideBanner();
        }
        else {
            if (this.bannerAd)
                this.bannerAd.hide();
        }
    };
    AdCenter.prototype.showInterstitialAd = function () {
        if (WxCenter_1.default.isWxEnv()) {
            WxCenter_1.default.showInterstitialAd();
        }
        else if (this.interstitialAd) {
            this.interstitialAd.show().catch(function (err) {
                console.log(err);
            });
        }
    };
    return AdCenter;
}(Singleton_1.default));
exports.default = AdCenter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsaURBQTRDO0FBRTVDLHdDQUFtQztBQUNuQyx1Q0FBa0M7QUFDbEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDO0lBQXNDLDRCQUFTO0lBUzNDO1FBQUEsWUFDSSxpQkFBTyxTQTBDVjtRQW5ERCxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsb0JBQWMsR0FBRyxJQUFJLENBQUE7UUFnRGIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUEzQzlCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDdEMsUUFBUSxFQUFFLG9CQUFvQjthQUNqQyxDQUFDLENBQUM7WUFFSCxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1RCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixrQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsa0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMs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LElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVNLDZCQUFVLEdBQWpCO1FBRUksSUFBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDO1lBQ2xCLGtCQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDekI7YUFDRztZQUNBLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUMzQjtRQUNELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLDZCQUFVLEdBQWpCO1FBQ0ksSUFBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDO1lBQ2xCLGtCQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDekI7YUFDRztZQUNBLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUMzQjtJQUNMLENBQUM7SUFFTSxxQ0FBa0IsR0FBekI7UUFDSSxJQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLEVBQUM7WUFDbEIsa0JBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2pDO2FBQ0ksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQW5JQSxBQW1JQyxDQW5JcUMsbUJBQVMsR0FtSTlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi9TaW5nbGV0b25cIjtcclxuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xyXG5cclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuL1d4Q2VudGVyXCI7XHJcbmNvbnN0IHR0ID0gd2luZG93W1widHRcIl07XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZENlbnRlciBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgICB2aWRlb0FkSUQgPSBudWxsO1xyXG5cclxuICAgIGJhbm5lckFkSUQgPSBudWxsO1xyXG5cclxuICAgIGJhbm5lckFkID0gbnVsbDtcclxuXHJcbiAgICBpbnRlcnN0aXRpYWxBZCA9IG51bGxcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZiAodHQgJiYgdHQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElEID0gdHQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnNzNlamI5aGYzajg0cnM1cDliJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImNNNXpNNmtRRWlcIik7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElELm9uRXJyb3IoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkVycm9yXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5bm/5ZGK5Yqg6L295aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdygn6KeG6aKR5Yqg6L295aSx6LSlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflub/lkYrliqDovb3miJDlip8nKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElELm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmlzRW5kZWQgfHwgcmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZiAodHQuY3JlYXRlSW50ZXJzdGl0aWFsQWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJzdGl0aWFsQWQgPSB0dC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6ICdkajRiYWpiM20xOHVlMjA3OXYnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgeyBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0IH0gPSB0dC5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYmFubmVyQWQgPSB0dC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgIC8vICAgICBhZFVuaXRJZDogJzNhM2xkNGIwNzFnNTdsbmxqaScsXHJcbiAgICAgICAgICAgIC8vICAgICBzdHlsZTogeyB3aWR0aDogc2NyZWVuV2lkdGgsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9wOnNjcmVlbkhlaWdodCAtIDE1MCB9XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsbEJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfbGFzdFBsYXlUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHBsYXkoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0eXBlOm51bWJlcikge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInhZQndOakdiNFBSR2ZjNjc4S2JOcEN0aVwiKTtcclxuICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gdGhpcy5fbGFzdFBsYXlUaW1lIDwgMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+i/h+S6jumikee5gVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xhc3RQbGF5VGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgaWYodHQpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlWaWRlbyh0eXBlKTtcclxuICAgICAgICAgICAgLy8gY2FsbGJhY2sgJiYgY2FsbGJhY2soMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihXeENlbnRlci5pc1d4RW52KCkpe1xyXG4gICAgICAgICAgICBXeENlbnRlci5zaG93UmV3YXJkZWRWaWRlb0FkKGNhbGxiYWNrLHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygxKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5VmlkZW8odHlwZTpudW1iZXIpe1xyXG4gICAgICAgIGlmICggdGhpcy52aWRlb0FkSUQpIHtcclxuICAgICAgICAgICAgbGV0IHVuaXRpZCA9IHR5cGUgPT0gMiA/ICc3M2VqYjloZjNqODRyczVwOWInIDogJzczZWpiOWhmM2o4NHJzNXA5YidcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQgPSB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6IHVuaXRpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQuc2hvdygpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BZElELmxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMudmlkZW9BZElELnNob3coKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pi+56S65aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KCfop4bpopHliqDovb3lpLHotKUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsQmFjayh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dHcmlkQWQoKSBcclxuICAgIHtcclxuICAgICAgICBpZihXeENlbnRlci5pc1d4RW52KCkpe1xyXG4gICAgICAgICAgICBXeENlbnRlci5zaG93QmFubmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbm5lckFkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5zaG93KClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiM0RtSmpIbTJtRjhaXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlR3JpZEFkKCkge1xyXG4gICAgICAgIGlmKFd4Q2VudGVyLmlzV3hFbnYoKSl7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLmhpZGVCYW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmFubmVyQWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkLmhpZGUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0ludGVyc3RpdGlhbEFkKCl7XHJcbiAgICAgICAgaWYoV3hDZW50ZXIuaXNXeEVudigpKXtcclxuICAgICAgICAgICAgV3hDZW50ZXIuc2hvd0ludGVyc3RpdGlhbEFkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW50ZXJzdGl0aWFsQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnN0aXRpYWxBZC5zaG93KCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19