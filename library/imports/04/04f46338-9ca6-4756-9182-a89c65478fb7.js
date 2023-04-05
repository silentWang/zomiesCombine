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
// import MsgToast from "../framwork/MsgToast";
var Utils_1 = require("../utils/Utils");
// import WxCenter from "./WxCenter";
var Native_1 = require("../utils/Native");
var tt = window["tt"];
// const { ccclass, property } = cc._decorator;
var AdCenter = /** @class */ (function (_super) {
    __extends(AdCenter, _super);
    function AdCenter() {
        var _this = _super.call(this) || this;
        _this._lastPlayTime = 0;
        return _this;
    }
    AdCenter.prototype.play = function (callback, adunitId) {
        if (adunitId === void 0) { adunitId = 'b64242a9655d0f'; }
        if (Utils_1.default.getServerTime() - this._lastPlayTime < 1000) {
            console.log("点击过于频繁");
            return;
        }
        this._lastPlayTime = Utils_1.default.getServerTime();
        if (cc.sys.os === cc.sys.OS_IOS) {
            Native_1.Native.playVideoAd(callback, adunitId);
        }
        else {
            callback && callback(1);
        }
    };
    AdCenter.prototype.showGridAd = function () {
        Native_1.Native.showBannerAd('b64242ab164d72');
    };
    AdCenter.prototype.hideGridAd = function () {
        Native_1.Native.hideBannerAd();
    };
    AdCenter.prototype.showInterstitialAd = function (adunit) {
        if (adunit === void 0) { adunit = 'b64242a8c01cdc'; }
        Native_1.Native.showInterstitialAd(adunit);
    };
    return AdCenter;
}(Singleton_1.default));
exports.default = AdCenter;

cc._RF.pop();