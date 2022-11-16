
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
        if (this.bannerAd)
            this.bannerAd.show();
    };
    AdCenter.prototype.hideGridAd = function () {
        if (this.bannerAd)
            this.bannerAd.hide();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsaURBQTRDO0FBRTVDLHdDQUFtQztBQUNuQyx1Q0FBa0M7QUFDbEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDO0lBQXNDLDRCQUFTO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQXdDVjtRQTdDRCxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWYsY0FBUSxHQUFHLElBQUksQ0FBQztRQTZDaEIsb0JBQWMsR0FBRyxJQUFJLENBQUE7UUFzQmIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBOURqQyxJQUFJLEVBQUUsSUFBRyxFQUFFLENBQUMscUJBQXFCLEVBQUU7WUFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxvQkFBb0I7YUFDakMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDNUIsa0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDaEIseUJBQXlCO1lBQzdCLENBQUMsQ0FBQyxDQUFBO1lBRUYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUNwQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7b0JBQ3pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtvQkFDekIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdkI7cUJBQ0k7b0JBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO29CQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QjtZQUNMLENBQUMsQ0FBQyxDQUFBO1lBRUYsSUFBSSxFQUFFLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMxQyxRQUFRLEVBQUUsb0JBQW9CO2lCQUNqQyxDQUFDLENBQUE7YUFDTDtZQUVHLElBQUEsS0FBZ0MsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQXBELFdBQVcsaUJBQUEsRUFBRSxZQUFZLGtCQUEyQixDQUFBO1lBQzFELEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVc7b0JBQ3ZCLEdBQUcsRUFBQyxZQUFZLEdBQUcsR0FBRyxFQUFFO2FBQy9CLENBQUMsQ0FBQTtTQUNMOztJQUNMLENBQUM7SUFHTSxxQ0FBa0IsR0FBekI7UUFDSSxlQUFlO1FBQ2YsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVNLDZCQUFVLEdBQWpCO1FBRUksSUFBSSxJQUFJLENBQUMsUUFBUTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDZCQUFVLEdBQWpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUlNLHVCQUFJLEdBQVgsVUFBWSxRQUFrQixFQUFFLElBQWU7UUFBZixxQkFBQSxFQUFBLFFBQWU7UUFDM0MsSUFBSSxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksRUFBRTtZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLE9BQU87U0FDVjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixrQkFBUSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLHNCQUFzQjtJQUMxQixDQUFDO0lBRU8sOEJBQVcsR0FBbkI7UUFBQSxpQkFjQztRQWJHLElBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUN0QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtxQkFDZCxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQW5CLENBQW1CLENBQUM7cUJBQy9CLEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ04sRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUE7WUFDVixDQUFDLENBQUMsQ0FBQTtTQUNMO2FBQ0k7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQW5HQSxBQW1HQyxDQW5HcUMsbUJBQVMsR0FtRzlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi9TaW5nbGV0b25cIjtcclxuaW1wb3J0IE1zZ0hpbnRzIGZyb20gXCIuLi9mcmFtd29yay9Nc2dIaW50c1wiO1xyXG5cclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuL1d4Q2VudGVyXCI7XHJcbmNvbnN0IHR0ID0gd2luZG93W1widHRcIl07XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZENlbnRlciBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgICBWaWRlb0FkID0gbnVsbDtcclxuXHJcbiAgICBiYW5uZXJBZCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHR0JiYgdHQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVmlkZW9BZCA9IHR0LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJzFyM2xiZnI0ZDllNnZlb3VqdSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlZpZGVvQWQub25FcnJvcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uRXJyb3JcIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLlub/lkYrliqDovb3plJnor69cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5WaWRlb0FkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5bm/5ZGK5Yqg6L295oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLlZpZGVvQWQub25DbG9zZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HmuLjmiI/lpZblirFcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmICh0dC5jcmVhdGVJbnRlcnN0aXRpYWxBZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcnN0aXRpYWxBZCA9IHR0LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcclxuICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogJzYwamluMGhhczlwMmI4bjc3NCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB7IHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQgfSA9IHR0LmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZCA9IHR0LmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnM2EzbGQ0YjA3MWc1N2xubGppJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBzY3JlZW5XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6c2NyZWVuSGVpZ2h0IC0gMTUwIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJzdGl0aWFsQWQgPSBudWxsXHJcbiAgICBwdWJsaWMgc2hvd2ludGVyc3RpdGlhbEFkKCkge1xyXG4gICAgICAgIC8vIOWcqOmAguWQiOeahOWcuuaZr+aYvuekuuaPkuWxj+W5v+WRilxyXG4gICAgICAgIGlmICh0aGlzLmludGVyc3RpdGlhbEFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzdGl0aWFsQWQuc2hvdygpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93R3JpZEFkKCkgXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFubmVyQWQpXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuc2hvdygpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVHcmlkQWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFubmVyQWQpXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuaGlkZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsQmFjazogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9sYXN0dHJ5cGxheXRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGxheShjYWxsYmFjazogRnVuY3Rpb24sIHR5cGU6bnVtYmVyID0gMCkge1xyXG4gICAgICAgIGlmIChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSB0aGlzLl9sYXN0dHJ5cGxheXRpbWUgPCAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye76L+H5LqO6aKR57mBXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlsJ3or5Xmkq3mlL7lub/lkYpcIilcclxuICAgICAgICB0aGlzLl9sYXN0dHJ5cGxheXRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIFd4Q2VudGVyLnNob3dSZXdhcmRlZFZpZGVvQWQoY2FsbGJhY2spO1xyXG4gICAgICAgIC8vIHRoaXMuZHlTaG93VmlkZW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGR5U2hvd1ZpZGVvKCl7XHJcbiAgICAgICAgaWYgKCB0aGlzLlZpZGVvQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWRlb0FkLnNob3coKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZGVvQWQubG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5WaWRlb0FkLnNob3coKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pi+56S65aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxCYWNrKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=