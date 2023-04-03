
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
var Native_1 = require("../utils/Native");
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
    AdCenter.prototype.play = function (callback, adunitId) {
        if (Utils_1.default.getServerTime() - this._lastPlayTime < 1000) {
            console.log("点击过于频繁");
            return;
        }
        this._lastPlayTime = Utils_1.default.getServerTime();
        this.callBack = callback;
        if (cc.sys.os === cc.sys.OS_IOS) {
            Native_1.Native.playVideoAd(callback, adunitId);
        }
        else {
            callback && callback(1);
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
    AdCenter.prototype.showInterstitialAd = function (adunit) {
        Native_1.Native.showInterstitialAd(adunit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFHcEMsd0NBQW1DO0FBQ25DLHVDQUFrQztBQUNsQywwQ0FBeUM7QUFDekMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDO0lBQXNDLDRCQUFTO0lBTzNDO1FBQUEsWUFDSSxpQkFBTyxTQXlDVjtRQWhERCxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUE4Q2hCLG9CQUFjLEdBQUcsSUFBSSxDQUFBO1FBV2IsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFwRDlCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDdEMsUUFBUSxFQUFFLG9CQUFvQjthQUNqQyxDQUFDLENBQUM7WUFFSCxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1RCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QiwyQkFBMkI7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDbEIseUJBQXlCO1lBQzdCLENBQUMsQ0FBQyxDQUFBO1lBRUYsS0FBSSxDQUFDLFNB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biBmcm9tIFwiLi9TaW5nbGV0b25cIjtcclxuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xyXG5cclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuL1d4Q2VudGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZSB9IGZyb20gXCIuLi91dGlscy9OYXRpdmVcIjtcclxuY29uc3QgdHQgPSB3aW5kb3dbXCJ0dFwiXTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkQ2VudGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICAgIHZpZGVvQWRJRCA9IG51bGw7XHJcblxyXG4gICAgYmFubmVyQWRJRCA9IG51bGw7XHJcblxyXG4gICAgYmFubmVyQWQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGlmICh0dCAmJiB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQgPSB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICcxcjNsYmZyNGQ5ZTZ2ZW91anUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiY001ek02a1FFaVwiKTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQub25FcnJvcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uRXJyb3JcIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLlub/lkYrliqDovb3plJnor69cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflub/lkYrliqDovb3miJDlip8nKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElELm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmlzRW5kZWQgfHwgcmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZiAodHQuY3JlYXRlSW50ZXJzdGl0aWFsQWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJzdGl0aWFsQWQgPSB0dC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6ICc2MGppbjBoYXM5cDJiOG43NzQnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgeyBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0IH0gPSB0dC5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSB0dC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJzNhM2xkNGIwNzFnNTdsbmxqaScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogc2NyZWVuV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOnNjcmVlbkhlaWdodCAtIDE1MCB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludGVyc3RpdGlhbEFkID0gbnVsbFxyXG4gICAgcHVibGljIHNob3dCaWdQaWNBZCgpIHtcclxuICAgICAgICAvLyDlnKjpgILlkIjnmoTlnLrmma/mmL7npLrmj5LlsY/lub/lkYpcclxuICAgICAgICBpZiAodGhpcy5pbnRlcnN0aXRpYWxBZCkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkLnNob3coKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGxCYWNrOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2xhc3RQbGF5VGltZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBwbGF5KGNhbGxiYWNrOiBGdW5jdGlvbiwgYWR1bml0SWQ6c3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMuX2xhc3RQbGF5VGltZSA8IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vov4fkuo7popHnuYFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sYXN0UGxheVRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyl7XHJcbiAgICAgICAgICAgIE5hdGl2ZS5wbGF5VmlkZW9BZChjYWxsYmFjayxhZHVuaXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93R3JpZEFkKCkgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoV3hDZW50ZXIuaXNXeEVudigpKXtcclxuICAgICAgICAgICAgV3hDZW50ZXIuc2hvd0Jhbm5lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYW5uZXJBZClcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuc2hvdygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlR3JpZEFkKCkge1xyXG4gICAgICAgIGlmKFd4Q2VudGVyLmlzV3hFbnYoKSl7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLmhpZGVCYW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmFubmVyQWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkLmhpZGUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0ludGVyc3RpdGlhbEFkKGFkdW5pdDpzdHJpbmcpe1xyXG4gICAgICAgIE5hdGl2ZS5zaG93SW50ZXJzdGl0aWFsQWQoYWR1bml0KVxyXG4gICAgfVxyXG5cclxufSJdfQ==