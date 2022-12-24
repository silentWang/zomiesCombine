
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
                adUnitId: '1r3lbfr4d9e6veouju'
            });
            if (window && window['xxxxx'])
                window['xxxxx']("cM5zM6kQEi");
            _this.videoAdID.onError(function (res) {
                console.log("onError", res);
                // MsgToast.show("广告加载错误");
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
                    adUnitId: '60jin0has9p2b8n774'
                });
            }
            var _a = tt.getSystemInfoSync(), screenWidth = _a.screenWidth, screenHeight = _a.screenHeight;
            _this.bannerAd = tt.createBannerAd({
                adUnitId: '3a3ld4b071g57lnlji',
                style: { width: screenWidth,
                    top: screenHeight - 150 }
            });
        }
        return _this;
    }
    AdCenter.prototype.showBigPicAd = function () {
        // 在适合的场景显示插屏广告
        if (this.interstitialAd) {
            this.interstitialAd.show().catch(function (err) {
                console.log(err);
            });
        }
    };
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
            this.playVideo();
        }
        else if (WxCenter_1.default.isWxEnv()) {
            WxCenter_1.default.showRewardedVideoAd(callback, type);
        }
        else {
            callback && callback(1);
        }
    };
    AdCenter.prototype.playVideo = function () {
        var _this = this;
        if (this.videoAdID) {
            this.videoAdID.show().catch(function () {
                _this.videoAdID.load()
                    .then(function () { return _this.videoAdID.show(); })
                    .catch(function (err) {
                    cc.log('激励视频 广告显示失败');
                    _this.callBack(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFHcEMsd0NBQW1DO0FBQ25DLHVDQUFrQztBQUNsQyxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7SUFBc0MsNEJBQVM7SUFPM0M7UUFBQSxZQUNJLGlCQUFPLFNBeUNWO1FBaERELGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQThDaEIsb0JBQWMsR0FBRyxJQUFJLENBQUE7UUFXYixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQXBEOUIsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUN0QyxRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDLENBQUMsQ0FBQztZQUVILElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVELEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLDJCQUEyQjtZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUNsQix5QkFBeUI7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFFRixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8s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LEdBQWpCO1FBRUksSUFBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDO1lBQ2xCLGtCQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDekI7YUFDRztZQUNBLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUMzQjtRQUNELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLDZCQUFVLEdBQWpCO1FBQ0ksSUFBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDO1lBQ2xCLGtCQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDekI7YUFDRztZQUNBLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUMzQjtJQUNMLENBQUM7SUFFTSxxQ0FBa0IsR0FBekI7UUFDSSxJQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLEVBQUM7WUFDbEIsa0JBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQS9IQSxBQStIQyxDQS9IcUMsbUJBQVMsR0ErSDlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi9TaW5nbGV0b25cIjtcclxuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xyXG5cclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuL1d4Q2VudGVyXCI7XHJcbmNvbnN0IHR0ID0gd2luZG93W1widHRcIl07XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZENlbnRlciBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgICB2aWRlb0FkSUQgPSBudWxsO1xyXG5cclxuICAgIGJhbm5lckFkSUQgPSBudWxsO1xyXG5cclxuICAgIGJhbm5lckFkID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZiAodHQgJiYgdHQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElEID0gdHQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnMXIzbGJmcjRkOWU2dmVvdWp1J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImNNNXpNNmtRRWlcIik7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElELm9uRXJyb3IoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkVycm9yXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAvLyBNc2dUb2FzdC5zaG93KFwi5bm/5ZGK5Yqg6L296ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElELm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5bm/5ZGK5Yqg6L295oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWRJRC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKHR0LmNyZWF0ZUludGVyc3RpdGlhbEFkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkID0gdHQuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnNjBqaW4waGFzOXAyYjhuNzc0J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkID0gdHQuY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICczYTNsZDRiMDcxZzU3bG5samknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IHNjcmVlbldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDpzY3JlZW5IZWlnaHQgLSAxNTAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnRlcnN0aXRpYWxBZCA9IG51bGxcclxuICAgIHB1YmxpYyBzaG93QmlnUGljQWQoKSB7XHJcbiAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXHJcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJzdGl0aWFsQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnN0aXRpYWxBZC5zaG93KCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsQmFjazogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9sYXN0UGxheVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGxheShjYWxsYmFjazogRnVuY3Rpb24sIHR5cGU6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwieFlCd05qR2I0UFJHZmM2NzhLYk5wQ3RpXCIpO1xyXG4gICAgICAgIGlmIChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSB0aGlzLl9sYXN0UGxheVRpbWUgPCAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye76L+H5LqO6aKR57mBXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGFzdFBsYXlUaW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICBpZih0dCl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoV3hDZW50ZXIuaXNXeEVudigpKXtcclxuICAgICAgICAgICAgV3hDZW50ZXIuc2hvd1Jld2FyZGVkVmlkZW9BZChjYWxsYmFjayx0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheVZpZGVvKCl7XHJcbiAgICAgICAgaWYgKCB0aGlzLnZpZGVvQWRJRCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWRJRC5zaG93KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQubG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy52aWRlb0FkSUQuc2hvdygpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ+a/gOWKseinhumikSDlub/lkYrmmL7npLrlpLHotKUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93R3JpZEFkKCkgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoV3hDZW50ZXIuaXNXeEVudigpKXtcclxuICAgICAgICAgICAgV3hDZW50ZXIuc2hvd0Jhbm5lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYW5uZXJBZClcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuc2hvdygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjNEbUpqSG0ybUY4WlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZUdyaWRBZCgpIHtcclxuICAgICAgICBpZihXeENlbnRlci5pc1d4RW52KCkpe1xyXG4gICAgICAgICAgICBXeENlbnRlci5oaWRlQmFubmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbm5lckFkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dJbnRlcnN0aXRpYWxBZCgpe1xyXG4gICAgICAgIGlmKFd4Q2VudGVyLmlzV3hFbnYoKSl7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLnNob3dJbnRlcnN0aXRpYWxBZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=