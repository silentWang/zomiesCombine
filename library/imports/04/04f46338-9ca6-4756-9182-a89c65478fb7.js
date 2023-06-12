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