
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
var AudioMgr_1 = require("../utils/AudioMgr");
var dyTT = window["tt"];
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
        if (dyTT && dyTT.createRewardedVideoAd) {
            _this.videoAdID = dyTT.createRewardedVideoAd({
                adUnitId: '73ejb9hf3j84rs5p9b'
            });
            _this.videoAdID.onError(function (res) {
                MsgToast_1.default.show('视频加载失败');
            });
            _this.videoAdID.onLoad(function (res) {
                console.log('------videoAdID---广告加载---', res);
            });
            _this.videoAdID.onClose(function (res) {
                if (res && res.isEnded || res === undefined) {
                    cc.log("正常播放结束，可以下发游戏奖励");
                    _this.callBack(true);
                }
                else {
                    cc.log("播放中途退出，不下发游戏奖励");
                    _this.callBack(false);
                }
                AudioMgr_1.default.Instance().resumMusic();
            });
            _this.videoAdID.load();
            // if (dyTT.createInterstitialAd) {
            //     this.interstitialAd = dyTT.createInterstitialAd({
            //         adUnitId: 'dj4bajb3m18ue2079v'
            //     })
            //     this.interstitialAd.load().catch((err)=>{
            //         console.log('interstitialAd--error--',err)
            //     })
            // }
            // let { screenWidth, screenHeight } = dyTT.getSystemInfoSync()
            // this.bannerAd = tt.createBannerAd({
            //     adUnitId: '3a3ld4b071g57lnlji',
            //     style: { width: screenWidth,
            //         top:screenHeight - 150 }
            // })
        }
        return _this;
    }
    AdCenter.prototype.play = function (callback, type) {
        if (Utils_1.default.getServerTime() - this._lastPlayTime < 1000) {
            console.log("点击过于频繁");
            return;
        }
        AudioMgr_1.default.Instance().pauseMusic();
        this._lastPlayTime = Utils_1.default.getServerTime();
        this.callBack = callback;
        if (dyTT) {
            this.playVideo(type);
        }
        else {
            callback && callback(1);
            AudioMgr_1.default.Instance().resumMusic();
        }
    };
    AdCenter.prototype.playVideo = function (type) {
        var _this = this;
        if (this.videoAdID) {
            var video_1 = this.videoAdID;
            dyTT.showLoading({ title: '加载中' });
            setTimeout(function () {
                dyTT.hideLoading();
            }, 3000);
            video_1.show().catch(function () {
                video_1.load().then(function () { return video_1.show(); })
                    .catch(function (err) {
                    cc.log('激励视频 广告显示失败');
                    _this.callBack(false);
                    AudioMgr_1.default.Instance().resumMusic();
                    MsgToast_1.default.show('视频加载失败');
                    dyTT.hideLoading();
                });
            });
        }
        else {
            this.callBack(true);
            AudioMgr_1.default.Instance().resumMusic();
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
    AdCenter.prototype.showInterstitialAd = function () {
        // let interAd = this.interstitialAd
        // if (interAd) {
        //     interAd.show().catch((err) => {
        //         interAd.load().then(()=>{
        //             interAd.show()
        //         }).catch((err)=>{
        //             console.log('interstitialAd--error--',err)
        //         })
        //     })
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBZENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsaURBQTRDO0FBRTVDLHdDQUFtQztBQUNuQyw4Q0FBeUM7QUFFekMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDO0lBQXNDLDRCQUFTO0lBUzNDO1FBQUEsWUFDSSxpQkFBTyxTQTZDVjtRQXRERCxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsb0JBQWMsR0FBRyxJQUFJLENBQUE7UUFtRGIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUE5QzlCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUNwQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztnQkFDeEMsUUFBUSxFQUFFLG9CQUFvQjthQUNqQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3ZCLGtCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFBO1lBRUYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUN0QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMs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SSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sNkJBQVUsR0FBakI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0scUNBQWtCLEdBQXpCO1FBQ0ksb0NBQW9DO1FBQ3BDLGlCQUFpQjtRQUNqQixzQ0FBc0M7UUFDdEMsb0NBQW9DO1FBQ3BDLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIseURBQXlEO1FBQ3pELGFBQWE7UUFDYixTQUFTO1FBQ1QsSUFBSTtJQUNSLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0E5SEEsQUE4SEMsQ0E5SHFDLG1CQUFTLEdBOEg5QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4vU2luZ2xldG9uXCI7XHJcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcclxuXHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuXHJcbmNvbnN0IGR5VFQgPSB3aW5kb3dbXCJ0dFwiXTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkQ2VudGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICAgIHZpZGVvQWRJRCA9IG51bGw7XHJcblxyXG4gICAgYmFubmVyQWRJRCA9IG51bGw7XHJcblxyXG4gICAgYmFubmVyQWQgPSBudWxsO1xyXG5cclxuICAgIGludGVyc3RpdGlhbEFkID0gbnVsbFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGlmIChkeVRUICYmIGR5VFQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElEID0gZHlUVC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICc3M2VqYjloZjNqODRyczVwOWInXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQub25FcnJvcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KCfop4bpopHliqDovb3lpLHotKUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWRJRC5vbkxvYWQoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLXZpZGVvQWRJRC0tLeW5v+WRiuWKoOi9vS0tLScscmVzKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZElELm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmlzRW5kZWQgfHwgcmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnJlc3VtTXVzaWMoKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkSUQubG9hZCgpXHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoZHlUVC5jcmVhdGVJbnRlcnN0aXRpYWxBZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5pbnRlcnN0aXRpYWxBZCA9IGR5VFQuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFkVW5pdElkOiAnZGo0YmFqYjNtMTh1ZTIwNzl2J1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuaW50ZXJzdGl0aWFsQWQubG9hZCgpLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2ludGVyc3RpdGlhbEFkLS1lcnJvci0tJyxlcnIpXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgeyBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0IH0gPSBkeVRULmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgLy8gdGhpcy5iYW5uZXJBZCA9IHR0LmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgLy8gICAgIGFkVW5pdElkOiAnM2EzbGQ0YjA3MWc1N2xubGppJyxcclxuICAgICAgICAgICAgLy8gICAgIHN0eWxlOiB7IHdpZHRoOiBzY3JlZW5XaWR0aCxcclxuICAgICAgICAgICAgLy8gICAgICAgICB0b3A6c2NyZWVuSGVpZ2h0IC0gMTUwIH1cclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsQmFjazogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9sYXN0UGxheVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGxheShjYWxsYmFjazogRnVuY3Rpb24sIHR5cGU6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMuX2xhc3RQbGF5VGltZSA8IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vov4fkuo7popHnuYFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBhdXNlTXVzaWMoKVxyXG4gICAgICAgIHRoaXMuX2xhc3RQbGF5VGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgaWYoZHlUVCl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygxKVxyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnJlc3VtTXVzaWMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlWaWRlbyh0eXBlOm51bWJlcil7XHJcbiAgICAgICAgaWYgKCB0aGlzLnZpZGVvQWRJRCkge1xyXG4gICAgICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLnZpZGVvQWRJRFxyXG4gICAgICAgICAgICBkeVRULnNob3dMb2FkaW5nKHt0aXRsZTon5Yqg6L295LitJ30pXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIGR5VFQuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICB9LDMwMDApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2aWRlby5zaG93KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmlkZW8ubG9hZCgpLnRoZW4oKCkgPT4gdmlkZW8uc2hvdygpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pi+56S65aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5yZXN1bU11c2ljKClcclxuICAgICAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KCfop4bpopHliqDovb3lpLHotKUnKTtcclxuICAgICAgICAgICAgICAgICAgICBkeVRULmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxCYWNrKHRydWUpO1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnJlc3VtTXVzaWMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNob3dHcmlkQWQoKSBcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5iYW5uZXJBZClcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5zaG93KClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZUdyaWRBZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5iYW5uZXJBZClcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0ludGVyc3RpdGlhbEFkKCl7XHJcbiAgICAgICAgLy8gbGV0IGludGVyQWQgPSB0aGlzLmludGVyc3RpdGlhbEFkXHJcbiAgICAgICAgLy8gaWYgKGludGVyQWQpIHtcclxuICAgICAgICAvLyAgICAgaW50ZXJBZC5zaG93KCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaW50ZXJBZC5sb2FkKCkudGhlbigoKT0+e1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGludGVyQWQuc2hvdygpXHJcbiAgICAgICAgLy8gICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnRlcnN0aXRpYWxBZC0tZXJyb3ItLScsZXJyKVxyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG59Il19