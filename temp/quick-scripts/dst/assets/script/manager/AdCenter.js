
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
                // MsgToast.show("广告加载错误");
            });
            _this.VideoAd.onLoad(function () {
                // console.log('广告加载成功');
            });
            _this.VideoAd.onClose(function (res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFHcEMsd0NBQW1DO0FBQ25DLHVDQUFrQztBQUNsQyxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7SUFBc0MsNEJBQVM7SUFLM0M7UUFBQSxZQUNJLGlCQUFPLFNBd0NWO1FBN0NELGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBNkNoQixvQkFBYyxHQUFHLElBQUksQ0FBQTtRQXdCYixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFoRWpDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtZQUNoQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDcEMsUUFBUSxFQUFFLG9CQUFvQjthQUNqQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QiwyQkFBMkI7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDaEIseUJBQXlCO1lBQzdCLENBQUMsQ0FBQyxDQUFBO1lBRUYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUNwQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7b0JBQ3pDLDRCQUE0QjtvQkFDNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdkI7cUJBQ0k7b0JBQ0QsMkJBQTJCO29CQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QjtZQUNMLENBQUMsQ0FBQyxDQUFBO1lBRUYsaUNBQWlDO1lBQ2pDLHNEQUFzRDtZQUN0RCx5Q0FBeUM7WUFDekMsU0FBUztZQUNULElBQUk7WUFFSiw2REFBNkQ7WUFDN0Qsc0NBQXNDO1lBQ3RDLHNDQUFzQztZQUN0QyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLEtBQUs7U0FDUjs7SUFDTCxDQUFDO0lBR00scUNBQWtCLEdBQXpCO1FBQ0ksZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFTSw2QkFBVSxHQUFqQjtRQUVJLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0Isa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sNkJBQVUsR0FBakI7UUFDSSxxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLGtCQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUlNLHVCQUFJLEdBQVgsVUFBWSxRQUFrQixFQUFFLElBQWU7UUFBZixxQkFBQSxFQUFBLFFBQWU7UUFDM0MsSUFBSSxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksRUFBRTtZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsa0JBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxzQkFBc0I7SUFDMUIsQ0FBQztJQUVPLDhCQUFXLEdBQW5CO1FBQUEsaUJBY0M7UUFiRyxJQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7cUJBQ2QsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFuQixDQUFtQixDQUFDO3FCQUMvQixLQUFLLENBQUMsVUFBQSxHQUFHO29CQUNOLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFBO1lBQ1YsQ0FBQyxDQUFDLENBQUE7U0FDTDthQUNJO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FwR0EsQUFvR0MsQ0FwR3FDLG1CQUFTLEdBb0c5QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4vU2luZ2xldG9uXCI7XHJcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcclxuXHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi9XeENlbnRlclwiO1xyXG5jb25zdCB0dCA9IHdpbmRvd1tcInR0XCJdO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRDZW50ZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG4gICAgVmlkZW9BZCA9IG51bGw7XHJcblxyXG4gICAgYmFubmVyQWQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGlmICh0dCAmJiB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWRlb0FkID0gdHQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnMXIzbGJmcjRkOWU2dmVvdWp1J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVmlkZW9BZC5vbkVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25FcnJvclwiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gTXNnVG9hc3Quc2hvdyhcIuW5v+WRiuWKoOi9vemUmeivr1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlZpZGVvQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflub/lkYrliqDovb3miJDlip8nKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVmlkZW9BZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHR0LmNyZWF0ZUludGVyc3RpdGlhbEFkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmludGVyc3RpdGlhbEFkID0gdHQuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFkVW5pdElkOiAnNjBqaW4waGFzOXAyYjhuNzc0J1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmJhbm5lckFkID0gdHQuY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAvLyAgICAgYWRVbml0SWQ6ICczYTNsZDRiMDcxZzU3bG5samknLFxyXG4gICAgICAgICAgICAvLyAgICAgc3R5bGU6IHsgd2lkdGg6IHNjcmVlbldpZHRoLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRvcDpzY3JlZW5IZWlnaHQgLSAxNTAgfVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnRlcnN0aXRpYWxBZCA9IG51bGxcclxuICAgIHB1YmxpYyBzaG93aW50ZXJzdGl0aWFsQWQoKSB7XHJcbiAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXHJcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJzdGl0aWFsQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnN0aXRpYWxBZC5zaG93KCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dHcmlkQWQoKSBcclxuICAgIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5iYW5uZXJBZClcclxuICAgICAgICAvLyAgICAgdGhpcy5iYW5uZXJBZC5zaG93KClcclxuICAgICAgICBXeENlbnRlci5zaG93QmFubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVHcmlkQWQoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYmFubmVyQWQpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmFubmVyQWQuaGlkZSgpXHJcbiAgICAgICAgV3hDZW50ZXIuaGlkZUJhbm5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsbEJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfbGFzdHRyeXBsYXl0aW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHBsYXkoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0eXBlOm51bWJlciA9IDApIHtcclxuICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gdGhpcy5fbGFzdHRyeXBsYXl0aW1lIDwgMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+i/h+S6jumikee5gVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xhc3R0cnlwbGF5dGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgV3hDZW50ZXIuc2hvd1Jld2FyZGVkVmlkZW9BZChjYWxsYmFjayk7XHJcbiAgICAgICAgLy8gdGhpcy5keVNob3dWaWRlbygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHlTaG93VmlkZW8oKXtcclxuICAgICAgICBpZiAoIHRoaXMuVmlkZW9BZCkge1xyXG4gICAgICAgICAgICB0aGlzLlZpZGVvQWQuc2hvdygpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVmlkZW9BZC5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLlZpZGVvQWQuc2hvdygpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ+a/gOWKseinhumikSDlub/lkYrmmL7npLrlpLHotKUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==