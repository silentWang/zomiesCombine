
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlci9BZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsK0NBQStDO0FBRS9DLHdDQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMsMENBQXlDO0FBQ3pDLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV4QiwrQ0FBK0M7QUFDL0M7SUFBc0MsNEJBQVM7SUFFM0M7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFFTyxtQkFBYSxHQUFXLENBQUMsQ0FBQzs7SUFGbEMsQ0FBQztJQUdNLHVCQUFJLEdBQVgsVUFBWSxRQUFrQixFQUFFLFFBQWtDO1FBQWxDLHlCQUFBLEVBQUEsMkJBQWtDO1FBQzlELElBQUksZUFBSyxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQztZQUMzQixlQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztTQUN6QzthQUNHO1lBQ0EsUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUMxQjtJQUNMLENBQUM7SUFFTSw2QkFBVSxHQUFqQjtRQUVJLGVBQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU0sNkJBQVUsR0FBakI7UUFDSSxlQUFNLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUVNLHFDQUFrQixHQUF6QixVQUEwQixNQUFnQztRQUFoQyx1QkFBQSxFQUFBLHlCQUFnQztRQUN0RCxlQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQWxDQSxBQWtDQyxDQWxDcUMsbUJBQVMsR0FrQzlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi9TaW5nbGV0b25cIjtcbi8vIGltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcblxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcbi8vIGltcG9ydCBXeENlbnRlciBmcm9tIFwiLi9XeENlbnRlclwiO1xuaW1wb3J0IHsgTmF0aXZlIH0gZnJvbSBcIi4uL3V0aWxzL05hdGl2ZVwiO1xuY29uc3QgdHQgPSB3aW5kb3dbXCJ0dFwiXTtcblxuLy8gY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkQ2VudGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xhc3RQbGF5VGltZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgcGxheShjYWxsYmFjazogRnVuY3Rpb24sIGFkdW5pdElkOnN0cmluZyA9ICdiNjQyNDJhOTY1NWQwZicpIHtcbiAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMuX2xhc3RQbGF5VGltZSA8IDEwMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye76L+H5LqO6aKR57mBXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGFzdFBsYXlUaW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICBpZihjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1Mpe1xuICAgICAgICAgICAgTmF0aXZlLnBsYXlWaWRlb0FkKGNhbGxiYWNrLGFkdW5pdElkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93R3JpZEFkKCkgXG4gICAge1xuICAgICAgICBOYXRpdmUuc2hvd0Jhbm5lckFkKCdiNjQyNDJhYjE2NGQ3MicpXG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVHcmlkQWQoKSB7XG4gICAgICAgIE5hdGl2ZS5oaWRlQmFubmVyQWQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93SW50ZXJzdGl0aWFsQWQoYWR1bml0OnN0cmluZyA9ICdiNjQyNDJhOGMwMWNkYycpe1xuICAgICAgICBOYXRpdmUuc2hvd0ludGVyc3RpdGlhbEFkKGFkdW5pdClcbiAgICB9XG5cbn0iXX0=