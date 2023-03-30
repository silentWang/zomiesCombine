
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
            window['xxxxx']("xYBwNjGb4PRGfc678esKbNpCti");
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
        this.JDSLX_gdasweww_fun();
    };
    AdCenter.prototype.JDSLX_gdasweww_fun = function () { console.log("238989ODIJMKGESAOJMD"); };
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
            window['xxxxx']("3DmJjHm2mesvF8Z");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlci9BZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFHcEMsd0NBQW1DO0FBQ25DLHVDQUFrQztBQUNsQyxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7SUFBc0MsNEJBQVM7SUFPM0M7UUFBQSxZQUNJLGlCQUFPLFNBeUNWO1FBaERELGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQThDaEIsb0JBQWMsR0FBRyxJQUFJLENBQUE7UUFXYixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQXBEOUIsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUN0QyxRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDLENBQUMsQ0FBQztZQUVILElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVELEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLDJCQUEyQjtZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUNsQix5QkFBeUI7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFFRixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FB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LENBQUE7WUFDVixDQUFDLENBQUMsQ0FBQTtTQUNMO2FBQ0k7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVNLDZCQUFVLEdBQWpCO1FBRUksSUFBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDO1lBQ2xCLGtCQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDekI7YUFDRztZQUNBLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUMzQjtRQUNELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0sNkJBQVUsR0FBakI7UUFDSSxJQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLEVBQUM7WUFDbEIsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUN6QjthQUNHO1lBQ0EsSUFBSSxJQUFJLENBQUMsUUFBUTtnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQzNCO0lBQ0wsQ0FBQztJQUVNLHFDQUFrQixHQUF6QjtRQUNJLElBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBQztZQUNsQixrQkFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUwsZUFBQztBQUFELENBaklBLEFBaUlDLENBaklxQyxtQkFBUyxHQWlJOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuL1NpbmdsZXRvblwiO1xuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xuXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuL1d4Q2VudGVyXCI7XG5jb25zdCB0dCA9IHdpbmRvd1tcInR0XCJdO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRDZW50ZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIHZpZGVvQWRJRCA9IG51bGw7XG5cbiAgICBiYW5uZXJBZElEID0gbnVsbDtcblxuICAgIGJhbm5lckFkID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmICh0dCAmJiB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElEID0gdHQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJzFyM2xiZnI0ZDllNnZlb3VqdSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJjTTV6TTZrUUVpXCIpO1xuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQub25FcnJvcigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkVycm9yXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgLy8gTXNnVG9hc3Quc2hvdyhcIuW5v+WRiuWKoOi9vemUmeivr1wiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWRJRC5vbkxvYWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflub/lkYrliqDovb3miJDlip8nKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElELm9uQ2xvc2UocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2soZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmICh0dC5jcmVhdGVJbnRlcnN0aXRpYWxBZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJzdGl0aWFsQWQgPSB0dC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XG4gICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnNjBqaW4waGFzOXAyYjhuNzc0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB7IHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQgfSA9IHR0LmdldFN5c3RlbUluZm9TeW5jKClcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSB0dC5jcmVhdGVCYW5uZXJBZCh7XG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICczYTNsZDRiMDcxZzU3bG5samknLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBzY3JlZW5XaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOnNjcmVlbkhlaWdodCAtIDE1MCB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW50ZXJzdGl0aWFsQWQgPSBudWxsXG4gICAgcHVibGljIHNob3dCaWdQaWNBZCgpIHtcbiAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXG4gICAgICAgIGlmICh0aGlzLmludGVyc3RpdGlhbEFkKSB7XG4gICAgICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkLnNob3coKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGxCYWNrOiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIF9sYXN0UGxheVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHBsYXkoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0eXBlOm51bWJlcikge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ4WUJ3TmpHYjRQUkdmYzY3OGVzS2JOcEN0aVwiKTtcbiAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMuX2xhc3RQbGF5VGltZSA8IDEwMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye76L+H5LqO6aKR57mBXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGFzdFBsYXlUaW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICB0aGlzLmNhbGxCYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIGlmKHR0KXtcbiAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihXeENlbnRlci5pc1d4RW52KCkpe1xuICAgICAgICAgICAgV3hDZW50ZXIuc2hvd1Jld2FyZGVkVmlkZW9BZChjYWxsYmFjayx0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soMSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkpEU0xYX2dkYXN3ZXd3X2Z1bigpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBKRFNMWF9nZGFzd2V3d19mdW4oKXsgY29uc29sZS5sb2coXCIyMzg5ODlPRElKTUtHRVNBT0pNRFwiKTsgfVxuXG4gICAgcHJpdmF0ZSBwbGF5VmlkZW8oKXtcbiAgICAgICAgaWYgKCB0aGlzLnZpZGVvQWRJRCkge1xuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQuc2hvdygpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWRJRC5sb2FkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy52aWRlb0FkSUQuc2hvdygpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuuWksei0pScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxsQmFjayh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93R3JpZEFkKCkgXG4gICAge1xuICAgICAgICBpZihXeENlbnRlci5pc1d4RW52KCkpe1xuICAgICAgICAgICAgV3hDZW50ZXIuc2hvd0Jhbm5lcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBpZiAodGhpcy5iYW5uZXJBZClcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkLnNob3coKVxuICAgICAgICB9XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjNEbUpqSG0ybWVzdkY4WlwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZUdyaWRBZCgpIHtcbiAgICAgICAgaWYoV3hDZW50ZXIuaXNXeEVudigpKXtcbiAgICAgICAgICAgIFd4Q2VudGVyLmhpZGVCYW5uZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaWYgKHRoaXMuYmFubmVyQWQpXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93SW50ZXJzdGl0aWFsQWQoKXtcbiAgICAgICAgaWYoV3hDZW50ZXIuaXNXeEVudigpKXtcbiAgICAgICAgICAgIFd4Q2VudGVyLnNob3dJbnRlcnN0aXRpYWxBZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19