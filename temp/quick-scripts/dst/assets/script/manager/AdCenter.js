
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
var MsgToast_1 = require("../framwork/MsgToast");
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
                adUnitId: '73ejb9hf3j84rs5p9b'
            });
            if (window && window['xxxxx'])
                window['xxxxx']("cM5zM6kQEi");
            _this.videoAdID.onError(function (res) {
                console.log("onError", res);
                MsgToast_1.default.show('视频加载失败');
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
                    adUnitId: 'dj4bajb3m18ue2079v'
                });
            }
            var _a = tt.getSystemInfoSync(), screenWidth = _a.screenWidth, screenHeight = _a.screenHeight;
            // this.bannerAd = tt.createBannerAd({
            //     adUnitId: '3a3ld4b071g57lnlji',
            //     style: { width: screenWidth,
            //         top:screenHeight - 150 }
            // })
        }
        return _this;
    }
    AdCenter.prototype.play = function (callback, type) {
        if (window && window['xxxxx'])
            window['xxxxx']("xYBwNjGb4PRGfc678KbNpCti");
        if (Utils_1.default.getServerTime() - this._lastPlayTime < 1000) {
            console.log("点击过于频繁");
            return;
        }
        this._lastPlayTime = Utils_1.default.getServerTime();
        this.callBack = callback;
        if (tt) {
            this.playVideo(type);
            // callback && callback(1)
        }
        else if (WxCenter_1.default.isWxEnv()) {
            WxCenter_1.default.showRewardedVideoAd(callback, type);
        }
        else {
            callback && callback(1);
        }
    };
    AdCenter.prototype.playVideo = function (type) {
        var _this = this;
        if (this.videoAdID) {
            var unitid = type == 2 ? '73ejb9hf3j84rs5p9b' : '73ejb9hf3j84rs5p9b';
            this.videoAdID = tt.createRewardedVideoAd({
                adUnitId: unitid
            });
            this.videoAdID.show().catch(function () {
                _this.videoAdID.load()
                    .then(function () { return _this.videoAdID.show(); })
                    .catch(function (err) {
                    cc.log('激励视频 广告显示失败');
                    _this.callBack(false);
                    MsgToast_1.default.show('视频加载失败');
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
            window['xxxxx']("3DmJjHm2mF8Z");
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
        else if (this.interstitialAd) {
            this.interstitialAd.show().catch(function (err) {
                console.log(err);
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsaURBQTRDO0FBRTVDLHdDQUFtQztBQUNuQyx1Q0FBa0M7QUFDbEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDO0lBQXNDLDRCQUFTO0lBUzNDO1FBQUEsWUFDSSxpQkFBTyxTQXlDVjtRQWxERCxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsb0JBQWMsR0FBRyxJQUFJLENBQUE7UUErQ2IsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUExQzlCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDdEMsUUFBUSxFQUFFLG9CQUFvQjthQUNqQyxDQUFDLENBQUM7WUFFSCxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1RCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixrQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUNsQix5QkFBeUI7WUFDN0IsQ0FB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R0FBakI7UUFFSSxJQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLEVBQUM7WUFDbEIsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUN6QjthQUNHO1lBQ0EsSUFBSSxJQUFJLENBQUMsUUFBUTtnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQzNCO1FBQ0QsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sNkJBQVUsR0FBakI7UUFDSSxJQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLEVBQUM7WUFDbEIsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUN6QjthQUNHO1lBQ0EsSUFBSSxJQUFJLENBQUMsUUFBUTtnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQzNCO0lBQ0wsQ0FBQztJQUVNLHFDQUFrQixHQUF6QjtRQUNJLElBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBQztZQUNsQixrQkFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDakM7YUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUwsZUFBQztBQUFELENBbElBLEFBa0lDLENBbElxQyxtQkFBUyxHQWtJOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuL1NpbmdsZXRvblwiO1xyXG5pbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XHJcblxyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xyXG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4vV3hDZW50ZXJcIjtcclxuY29uc3QgdHQgPSB3aW5kb3dbXCJ0dFwiXTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkQ2VudGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICAgIHZpZGVvQWRJRCA9IG51bGw7XHJcblxyXG4gICAgYmFubmVyQWRJRCA9IG51bGw7XHJcblxyXG4gICAgYmFubmVyQWQgPSBudWxsO1xyXG5cclxuICAgIGludGVyc3RpdGlhbEFkID0gbnVsbFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGlmICh0dCAmJiB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQgPSB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICc3M2VqYjloZjNqODRyczVwOWInXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiY001ek02a1FFaVwiKTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQub25FcnJvcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uRXJyb3JcIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coJ+inhumikeWKoOi9veWksei0pScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElELm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5bm/5ZGK5Yqg6L295oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWRJRC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKHR0LmNyZWF0ZUludGVyc3RpdGlhbEFkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkID0gdHQuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnZGo0YmFqYjNtMTh1ZTIwNzl2J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmJhbm5lckFkID0gdHQuY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAvLyAgICAgYWRVbml0SWQ6ICczYTNsZDRiMDcxZzU3bG5samknLFxyXG4gICAgICAgICAgICAvLyAgICAgc3R5bGU6IHsgd2lkdGg6IHNjcmVlbldpZHRoLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRvcDpzY3JlZW5IZWlnaHQgLSAxNTAgfVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGxCYWNrOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2xhc3RQbGF5VGltZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBwbGF5KGNhbGxiYWNrOiBGdW5jdGlvbiwgdHlwZTpudW1iZXIpIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ4WUJ3TmpHYjRQUkdmYzY3OEtiTnBDdGlcIik7XHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMuX2xhc3RQbGF5VGltZSA8IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vov4fkuo7popHnuYFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sYXN0UGxheVRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIGlmKHR0KXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5VmlkZW8odHlwZSk7XHJcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrICYmIGNhbGxiYWNrKDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoV3hDZW50ZXIuaXNXeEVudigpKXtcclxuICAgICAgICAgICAgV3hDZW50ZXIuc2hvd1Jld2FyZGVkVmlkZW9BZChjYWxsYmFjayx0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheVZpZGVvKHR5cGU6bnVtYmVyKXtcclxuICAgICAgICBpZiAoIHRoaXMudmlkZW9BZElEKSB7XHJcbiAgICAgICAgICAgIGxldCB1bml0aWQgPSB0eXBlID09IDIgPyAnNzNlamI5aGYzajg0cnM1cDliJyA6ICc3M2VqYjloZjNqODRyczVwOWInXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElEID0gdHQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiB1bml0aWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElELnNob3coKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWRJRC5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnZpZGVvQWRJRC5zaG93KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuuWksei0pScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdygn6KeG6aKR5Yqg6L295aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93R3JpZEFkKCkgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoV3hDZW50ZXIuaXNXeEVudigpKXtcclxuICAgICAgICAgICAgV3hDZW50ZXIuc2hvd0Jhbm5lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYW5uZXJBZClcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuc2hvdygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjNEbUpqSG0ybUY4WlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZUdyaWRBZCgpIHtcclxuICAgICAgICBpZihXeENlbnRlci5pc1d4RW52KCkpe1xyXG4gICAgICAgICAgICBXeENlbnRlci5oaWRlQmFubmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbm5lckFkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dJbnRlcnN0aXRpYWxBZCgpe1xyXG4gICAgICAgIGlmKFd4Q2VudGVyLmlzV3hFbnYoKSl7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLnNob3dJbnRlcnN0aXRpYWxBZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmludGVyc3RpdGlhbEFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzdGl0aWFsQWQuc2hvdygpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==