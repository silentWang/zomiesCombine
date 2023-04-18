
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
var Native_1 = require("../utils/Native");
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
            Native_1.default.playVideoAd(callback, adunitId);
        }
        else {
            callback && callback(1);
        }
    };
    AdCenter.prototype.showGridAd = function () {
        Native_1.default.showBannerAd('b64242ab164d72');
    };
    AdCenter.prototype.hideGridAd = function () {
        Native_1.default.hideBannerAd();
    };
    AdCenter.prototype.showInterstitialAd = function (adunit) {
        if (adunit === void 0) { adunit = 'b64242a8c01cdc'; }
        Native_1.default.showInterstitialAd(adunit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsd0NBQW1DO0FBQ25DLDBDQUFxQztBQUVyQywrQ0FBK0M7QUFDL0M7SUFBc0MsNEJBQVM7SUFFM0M7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFFTyxtQkFBYSxHQUFXLENBQUMsQ0FBQzs7SUFGbEMsQ0FBQztJQUdNLHVCQUFJLEdBQVgsVUFBWSxRQUFrQixFQUFFLFFBQWtDO1FBQWxDLHlCQUFBLEVBQUEsMkJBQWtDO1FBQzlELElBQUksZUFBSyxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQztZQUMzQixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7YUFDRztZQUNBLFFBQVEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDMUI7SUFDTCxDQUFDO0lBRU0sNkJBQVUsR0FBakI7UUFFSSxnQkFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFTSw2QkFBVSxHQUFqQjtRQUNJLGdCQUFNLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUVNLHFDQUFrQixHQUF6QixVQUEwQixNQUFnQztRQUFoQyx1QkFBQSxFQUFBLHlCQUFnQztRQUN0RCxnQkFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsQ0FsQ3FDLG1CQUFTLEdBa0M5QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4vU2luZ2xldG9uXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XHJcbmltcG9ydCBOYXRpdmUgZnJvbSBcIi4uL3V0aWxzL05hdGl2ZVwiO1xyXG5cclxuLy8gY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRDZW50ZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFzdFBsYXlUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHBsYXkoY2FsbGJhY2s6IEZ1bmN0aW9uLCBhZHVuaXRJZDpzdHJpbmcgPSAnYjY0MjQyYTk2NTVkMGYnKSB7XHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMuX2xhc3RQbGF5VGltZSA8IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vov4fkuo7popHnuYFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sYXN0UGxheVRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAgTmF0aXZlLnBsYXlWaWRlb0FkKGNhbGxiYWNrLGFkdW5pdElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dHcmlkQWQoKSBcclxuICAgIHtcclxuICAgICAgICBOYXRpdmUuc2hvd0Jhbm5lckFkKCdiNjQyNDJhYjE2NGQ3MicpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVHcmlkQWQoKSB7XHJcbiAgICAgICAgTmF0aXZlLmhpZGVCYW5uZXJBZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dJbnRlcnN0aXRpYWxBZChhZHVuaXQ6c3RyaW5nID0gJ2I2NDI0MmE4YzAxY2RjJyl7XHJcbiAgICAgICAgTmF0aXZlLnNob3dJbnRlcnN0aXRpYWxBZChhZHVuaXQpXHJcbiAgICB9XHJcblxyXG59Il19