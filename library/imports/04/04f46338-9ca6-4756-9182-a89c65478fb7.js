"use strict";
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
var MsgHints_1 = require("../framwork/MsgHints");
var Utils_1 = require("../utils/Utils");
var WxCenter_1 = require("./WxCenter");
var tt = window["tt"];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AdCenter = /** @class */ (function (_super) {
    __extends(AdCenter, _super);
    function AdCenter() {
        var _this = _super.call(this) || this;
        _this.VideoAd = null;
        _this.bannerAd = null;
        _this.interstitialAd = null;
        _this._lasttryplaytime = 0;
        if (tt && tt.createRewardedVideoAd) {
            _this.VideoAd = tt.createRewardedVideoAd({
                adUnitId: '1r3lbfr4d9e6veouju'
            });
            _this.VideoAd.onError(function (res) {
                console.log("onError", res);
                MsgHints_1.default.show("广告加载错误");
            });
            _this.VideoAd.onLoad(function () {
                // console.log('广告加载成功');
            });
            _this.VideoAd.onClose(function (res) {
                if (res && res.isEnded || res === undefined) {
                    cc.log("正常播放结束，可以下发游戏奖励");
                    _this.callBack(true);
                }
                else {
                    cc.log("播放中途退出，不下发游戏奖励");
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
    AdCenter.prototype.showinterstitialAd = function () {
        // 在适合的场景显示插屏广告
        if (this.interstitialAd) {
            this.interstitialAd.show().catch(function (err) {
                console.log(err);
            });
        }
    };
    AdCenter.prototype.showGridAd = function () {
        // if (this.bannerAd)
        //     this.bannerAd.show()
        WxCenter_1.default.showBanner();
    };
    AdCenter.prototype.hideGridAd = function () {
        // if (this.bannerAd)
        //     this.bannerAd.hide()
        WxCenter_1.default.hideBanner();
    };
    AdCenter.prototype.play = function (callback, type) {
        if (type === void 0) { type = 0; }
        if (Utils_1.default.getServerTime() - this._lasttryplaytime < 1000) {
            console.log("点击过于频繁");
            return;
        }
        console.log("尝试播放广告");
        this._lasttryplaytime = Utils_1.default.getServerTime();
        this.callBack = callback;
        WxCenter_1.default.showRewardedVideoAd(callback);
        // this.dyShowVideo();
    };
    AdCenter.prototype.dyShowVideo = function () {
        var _this = this;
        if (this.VideoAd) {
            this.VideoAd.show().catch(function () {
                _this.VideoAd.load()
                    .then(function () { return _this.VideoAd.show(); })
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
    return AdCenter;
}(Singleton_1.default));
exports.default = AdCenter;

cc._RF.pop();