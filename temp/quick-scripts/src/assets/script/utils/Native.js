"use strict";
cc._RF.push(module, 'b37b9TahItL06rtAJjikj0a', 'Native');
// script/utils/Native.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VIP_TYPE = void 0;
var GameEvent_1 = require("../event/GameEvent");
var GameConst_1 = require("../game/GameConst");
var ChickData_1 = require("../manager/ChickData");
var VIP_TYPE;
(function (VIP_TYPE) {
    VIP_TYPE["VIP_MONTH"] = "hw_vip_003";
    VIP_TYPE["VIP_FOREVER"] = "hw_vip_004";
    VIP_TYPE["RECOVER_VIP"] = "3";
})(VIP_TYPE = exports.VIP_TYPE || (exports.VIP_TYPE = {}));
var Native = /** @class */ (function () {
    function Native() {
    }
    Native.callAppMethod = function (methodName, params, callback) {
        if (params === void 0) { params = ''; }
        if (callback === void 0) { callback = null; }
        if (cc.sys.os !== cc.sys.OS_IOS)
            return;
        var callfunc = 'callBackFunc_' + new Date().getTime();
        window[callfunc] = function (res) {
            console.log("---ios callback---" + methodName, res);
            callback && callback(res);
            window[callfunc] = null;
        };
        var obj = { method: callfunc, params: params };
        var json = JSON.stringify(obj);
        var methodstr = "" + methodName + json;
        console.log("----HWGameJSHandle:" + methodName + "---" + methodstr);
        if (!jsb || !jsb.reflection || !jsb.reflection.callStaticMethod) {
            console.log('HWGameJSHandle:找不到jsb');
            return;
        }
        jsb.reflection.callStaticMethod('HWGameJSHandle', methodName + ":", json);
    };
    /**视频广告 */
    Native.playVideoAd = function (callback, adUnitId) {
        if (ChickData_1.default.isFreeAd) {
            callback && callback(1);
            return;
        }
        this.callAppMethod('loadTopOnRewardAd', { adUnitId: adUnitId }, function (res) {
            if (res && res.status == 200) {
                callback && callback(1);
            }
            else {
                callback && callback();
            }
        });
    };
    /**插屏广告 */
    Native.showInterstitialAd = function (adUnitId, callback) {
        if (callback === void 0) { callback = null; }
        this.callAppMethod('loadTopOnInterstitialAd', { adUnitId: adUnitId }, function (res) {
            callback && callback();
        });
    };
    /**banner广告 */
    Native.showBannerAd = function (adUnitId, callback) {
        if (callback === void 0) { callback = null; }
        this.callAppMethod('loadBannerAd', { adUnitId: adUnitId }, function (res) {
            callback && callback();
        });
    };
    Native.hideBannerAd = function () {
        this.callAppMethod('hideBannerAd');
    };
    /**月卡購買 */
    Native.buyMonthCard = function (type, callback) {
        if (callback === void 0) { callback = null; }
        this.callAppMethod('hwIAP', type, function (res) {
            callback && callback(res);
            if (res.code != 0)
                return;
            if (res.type == VIP_TYPE.RECOVER_VIP || res.type == VIP_TYPE.VIP_FOREVER || res.type == VIP_TYPE.VIP_MONTH) {
                ChickData_1.default.isFreeAd = true;
            }
            GameEvent_1.default.Instance().dispatch(GameConst_1.default.FREE_AD_EVENT);
        });
    };
    /**get buy info */
    Native.getMyMonthInfo = function (callback) {
        if (callback === void 0) { callback = null; }
        callback && callback();
        return;
        // this.callAppMethod('getVipInfo','',(res)=>{
        //     callback && callback(res)
        //     if(res.type == VIP_TYPE.RECOVER_VIP || res.type == VIP_TYPE.VIP_FOREVER || res.type == VIP_TYPE.VIP_MONTH){
        //         ChickData.isFreeAd = true;
        //     }
        //     GameEvent.Instance().dispatch(GameConst.FREE_AD_EVENT)
        // })
    };
    /**open webview */
    Native.openWebView = function (url) {
        this.callAppMethod('hw_openH5', { url: url });
    };
    /**setlocal */
    Native.saveDataToApp = function (json) {
        if (cc.sys.os === cc.sys.OS_IOS) {
            this.callAppMethod('setCacheData', { userdata: json });
        }
        else {
            cc.sys.localStorage.setItem(GameConst_1.default.cache_chick_data_key, JSON.stringify({ userdata: json }));
        }
    };
    /**getlocal */
    Native.getDataFromApp = function (callback) {
        if (cc.sys.os === cc.sys.OS_IOS) {
            this.callAppMethod('getCacheData', '', function (res) {
                if (res && res.userdata) {
                    callback && callback(JSON.parse(res.userdata));
                }
                else {
                    callback && callback(null);
                }
            });
        }
        else {
            var res = cc.sys.localStorage.getItem(GameConst_1.default.cache_chick_data_key);
            var userdata = null;
            if (res) {
                var data = JSON.parse(res);
                if (data.userdata) {
                    userdata = JSON.parse(data.userdata);
                }
            }
            callback && callback(userdata);
        }
    };
    return Native;
}());
exports.default = Native;

cc._RF.pop();