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
            // if (tt.createInterstitialAd) {
            //     this.interstitialAd = tt.createInterstitialAd({
            //         adUnitId: '60jin0has9p2b8n774'
            //     })
            // }
            // let { screenWidth, screenHeight } = tt.getSystemInfoSync()
            // this.bannerAd = tt.createBannerAd({
            //     adUnitId: '3a3ld4b071g57lnlji',
            //     style: { width: screenWidth,
            //         top:screenHeight - 150 }
            // })
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
        if (type === void 0) { type = 0; }
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
            WxCenter_1.default.showRewardedVideoAd(callback);
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
            // if (this.bannerAd)
            //     this.bannerAd.show()
        }
        if (window && window['xxxxx'])
            window['xxxxx']("3DmJjHm2mF8Z");
    };
    AdCenter.prototype.hideGridAd = function () {
        if (WxCenter_1.default.isWxEnv()) {
            WxCenter_1.default.hideBanner();
        }
        else {
            // if (this.bannerAd)
            //     this.bannerAd.hide()
        }
    };
    return AdCenter;
}(Singleton_1.default));
exports.default = AdCenter;

cc._RF.pop();