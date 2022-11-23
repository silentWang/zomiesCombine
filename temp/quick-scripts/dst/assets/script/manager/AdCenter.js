
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsaURBQTRDO0FBRTVDLHdDQUFtQztBQUNuQyx1Q0FBa0M7QUFDbEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDO0lBQXNDLDRCQUFTO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQXdDVjtRQTdDRCxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWYsY0FBUSxHQUFHLElBQUksQ0FBQztRQTZDaEIsb0JBQWMsR0FBRyxJQUFJLENBQUE7UUF3QmIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBaEVqQyxJQUFJLEVBQUUsSUFBRyxFQUFFLENBQUMscUJBQXFCLEVBQUU7WUFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxvQkFBb0I7YUFDakMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDNUIsa0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDaEIseUJBQXlCO1lBQzdCLENBQUMsQ0FBQyxDQUFBO1lBRUYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUNwQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7b0JBQ3pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtvQkFDekIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdkI7cUJBQ0k7b0JBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO29CQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QjtZQUNMLENBQUMsQ0FBQyxDQUFBO1lBRUYsSUFBSSxFQUFFLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMxQyxRQUFRLEVBQUUsb0JBQW9CO2lCQUNqQyxDQUFDLENBQUE7YUFDTDtZQUVHLElBQUEsS0FBZ0MsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQXBELFdBQVcsaUJBQUEsRUFBRSxZQUFZLGtCQUEyQixDQUFBO1lBQzFELEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVc7b0JBQ3ZCLEdBQUcsRUFBQyxZQUFZLEdBQUcsR0FBRyxFQUFFO2FBQy9CLENBQUMsQ0FBQTtTQUNMOztJQUNMLENBQUM7SUFHTSxxQ0FBa0IsR0FBekI7UUFDSSxlQUFlO1FBQ2YsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVNLDZCQUFVLEdBQWpCO1FBRUkscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixrQkFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSw2QkFBVSxHQUFqQjtRQUNJLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0Isa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBSU0sdUJBQUksR0FBWCxVQUFZLFFBQWtCLEVBQUUsSUFBZTtRQUFmLHFCQUFBLEVBQUEsUUFBZTtRQUMzQyxJQUFJLGVBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxFQUFFO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckIsT0FBTztTQUNWO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLGtCQUFRLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsc0JBQXNCO0lBQzFCLENBQUM7SUFFTyw4QkFBVyxHQUFuQjtRQUFBLGlCQWNDO1FBYkcsSUFBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO3FCQUNkLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQztxQkFDL0IsS0FBSyxDQUFDLFVBQUEsR0FBRztvQkFDTixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQTtZQUNWLENBQUMsQ0FBQyxDQUFBO1NBQ0w7YUFDSTtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUwsZUFBQztBQUFELENBckdBLEFBcUdDLENBckdxQyxtQkFBUyxHQXFHOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuL1NpbmdsZXRvblwiO1xyXG5pbXBvcnQgTXNnSGludHMgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ0hpbnRzXCI7XHJcblxyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xyXG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4vV3hDZW50ZXJcIjtcclxuY29uc3QgdHQgPSB3aW5kb3dbXCJ0dFwiXTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkQ2VudGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICAgIFZpZGVvQWQgPSBudWxsO1xyXG5cclxuICAgIGJhbm5lckFkID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZiAodHQmJiB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWRlb0FkID0gdHQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnMXIzbGJmcjRkOWU2dmVvdWp1J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVmlkZW9BZC5vbkVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25FcnJvclwiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuW5v+WRiuWKoOi9vemUmeivr1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlZpZGVvQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflub/lkYrliqDovb3miJDlip8nKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVmlkZW9BZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKHR0LmNyZWF0ZUludGVyc3RpdGlhbEFkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkID0gdHQuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnNjBqaW4waGFzOXAyYjhuNzc0J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkID0gdHQuY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICczYTNsZDRiMDcxZzU3bG5samknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IHNjcmVlbldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDpzY3JlZW5IZWlnaHQgLSAxNTAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnRlcnN0aXRpYWxBZCA9IG51bGxcclxuICAgIHB1YmxpYyBzaG93aW50ZXJzdGl0aWFsQWQoKSB7XHJcbiAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXHJcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJzdGl0aWFsQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnN0aXRpYWxBZC5zaG93KCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dHcmlkQWQoKSBcclxuICAgIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5iYW5uZXJBZClcclxuICAgICAgICAvLyAgICAgdGhpcy5iYW5uZXJBZC5zaG93KClcclxuICAgICAgICBXeENlbnRlci5zaG93QmFubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVHcmlkQWQoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYmFubmVyQWQpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmFubmVyQWQuaGlkZSgpXHJcbiAgICAgICAgV3hDZW50ZXIuaGlkZUJhbm5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsbEJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfbGFzdHRyeXBsYXl0aW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHBsYXkoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0eXBlOm51bWJlciA9IDApIHtcclxuICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gdGhpcy5fbGFzdHRyeXBsYXl0aW1lIDwgMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+i/h+S6jumikee5gVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5bCd6K+V5pKt5pS+5bm/5ZGKXCIpXHJcbiAgICAgICAgdGhpcy5fbGFzdHRyeXBsYXl0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICBXeENlbnRlci5zaG93UmV3YXJkZWRWaWRlb0FkKGNhbGxiYWNrKTtcclxuICAgICAgICAvLyB0aGlzLmR5U2hvd1ZpZGVvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkeVNob3dWaWRlbygpe1xyXG4gICAgICAgIGlmICggdGhpcy5WaWRlb0FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVmlkZW9BZC5zaG93KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5WaWRlb0FkLmxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuVmlkZW9BZC5zaG93KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuuWksei0pScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsQmFjayh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19