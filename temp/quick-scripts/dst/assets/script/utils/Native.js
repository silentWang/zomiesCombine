
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/Native.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b37b9TahItL06rtAJjikj0a', 'Native');
// script/utils/Native.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VIP_TYPE = void 0;
var GameEvent_1 = require("../event/GameEvent");
var MsgToast_1 = require("../framwork/MsgToast");
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
    Native.initAppCallMethod = function () {
        window['HWGameDidEnterBackground'] = function () {
            console.log('--HWGameDidEnterBackground--');
            ChickData_1.default.save();
        };
    };
    Native.callAppMethod = function (methodName, params, callback) {
        if (params === void 0) { params = ''; }
        if (callback === void 0) { callback = null; }
        if (cc.sys.os !== cc.sys.OS_IOS)
            return;
        var callfunc = 'callBackFunc_' + new Date().getTime();
        window[callfunc] = function (res) {
            console.log("---ios callback---" + methodName, res);
            var rep = (!res || res == 'undefined') ? '' : res;
            callback && callback(rep);
            window[callfunc] = null;
        };
        var obj = { method: callfunc, params: params };
        var json = JSON.stringify(obj);
        var methodstr = "" + methodName + json;
        console.log("--ios callback before---:" + methodName + "---" + methodstr);
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
                MsgToast_1.default.show('觀看成功');
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
        if (cc.sys.os !== cc.sys.OS_IOS) {
            window.location.href = url;
            return;
        }
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
                    console.log('---getCacheData111---' + res.userdata);
                    console.log('---getCacheData222---' + JSON.parse(res.userdata));
                    callback && callback(JSON.parse(res.userdata).user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLGtEQUE2QztBQUM3QyxJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDaEIsb0NBQXdCLENBQUE7SUFDeEIsc0NBQTBCLENBQUE7SUFDMUIsNkJBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0FBQ0Q7SUFBQTtJQThIQSxDQUFDO0lBN0hVLHdCQUFpQixHQUF4QjtRQUNJLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxHQUFHO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUMzQyxtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQTtJQUVMLENBQUM7SUFDTSxvQkFBYSxHQUFwQixVQUFxQixVQUFpQixFQUFDLE1BQWUsRUFBQyxRQUF3QjtRQUF4Qyx1QkFBQSxFQUFBLFdBQWU7UUFBQyx5QkFBQSxFQUFBLGVBQXdCO1FBQzNFLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN2QyxJQUFJLFFBQVEsR0FBRyxlQUFlLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBQyxHQUFHO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLFVBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUNsRCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7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Q0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0E5SEEsQUE4SEMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRXZlbnQgZnJvbSBcIi4uL2V2ZW50L0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL2dhbWUvR2FtZUNvbnN0XCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmV4cG9ydCBlbnVtIFZJUF9UWVBFICB7XHJcbiAgICBWSVBfTU9OVEggPSAnaHdfdmlwXzAwMycsXHJcbiAgICBWSVBfRk9SRVZFUiA9ICdod192aXBfMDA0JyxcclxuICAgIFJFQ09WRVJfVklQID0gJzMnXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF0aXZlIHtcclxuICAgIHN0YXRpYyBpbml0QXBwQ2FsbE1ldGhvZCgpe1xyXG4gICAgICAgIHdpbmRvd1snSFdHYW1lRGlkRW50ZXJCYWNrZ3JvdW5kJ10gPSAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS1IV0dhbWVEaWRFbnRlckJhY2tncm91bmQtLScpXHJcbiAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGNhbGxBcHBNZXRob2QobWV0aG9kTmFtZTpzdHJpbmcscGFyYW1zOmFueSA9ICcnLGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zICE9PSBjYy5zeXMuT1NfSU9TKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNhbGxmdW5jID0gJ2NhbGxCYWNrRnVuY18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgd2luZG93W2NhbGxmdW5jXSA9IChyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAtLS1pb3MgY2FsbGJhY2stLS0ke21ldGhvZE5hbWV9YCxyZXMpXHJcbiAgICAgICAgICAgIGxldCByZXAgPSAoIXJlcyB8fCByZXMgPT0gJ3VuZGVmaW5lZCcpID8gJycgOiByZXNcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVwKTtcclxuICAgICAgICAgICAgd2luZG93W2NhbGxmdW5jXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvYmogPSB7bWV0aG9kOmNhbGxmdW5jLHBhcmFtc307XHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmopO1xyXG4gICAgICAgIGxldCBtZXRob2RzdHIgPSBgJHttZXRob2ROYW1lfSR7anNvbn1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAtLWlvcyBjYWxsYmFjayBiZWZvcmUtLS06JHttZXRob2ROYW1lfS0tLSR7bWV0aG9kc3RyfWApXHJcbiAgICAgICAgaWYoIWpzYiB8fCAhanNiLnJlZmxlY3Rpb24gfHwgIWpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hXR2FtZUpTSGFuZGxlOuaJvuS4jeWIsGpzYicpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCgnSFdHYW1lSlNIYW5kbGUnLGAke21ldGhvZE5hbWV9OmAsanNvbilcclxuICAgIH1cclxuICAgIC8qKuinhumikeW5v+WRiiAqL1xyXG4gICAgc3RhdGljIHBsYXlWaWRlb0FkKGNhbGxiYWNrOkZ1bmN0aW9uLGFkVW5pdElkOnN0cmluZyl7XHJcbiAgICAgICAgaWYoQ2hpY2tEYXRhLmlzRnJlZUFkKXtcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdsb2FkVG9wT25SZXdhcmRBZCcse2FkVW5pdElkfSwocmVzKT0+e1xyXG4gICAgICAgICAgICBpZihyZXMgJiYgcmVzLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soMSk7XHJcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KCfop4DnnIvmiJDlip8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoq5o+S5bGP5bm/5ZGKICovXHJcbiAgICBzdGF0aWMgc2hvd0ludGVyc3RpdGlhbEFkKGFkVW5pdElkOnN0cmluZyxjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnbG9hZFRvcE9uSW50ZXJzdGl0aWFsQWQnLHthZFVuaXRJZH0sKHJlcyk9PntcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKmJhbm5lcuW5v+WRiiAqL1xyXG4gICAgc3RhdGljIHNob3dCYW5uZXJBZChhZFVuaXRJZDpzdHJpbmcsY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2xvYWRCYW5uZXJBZCcse2FkVW5pdElkfSwocmVzKT0+e1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgaGlkZUJhbm5lckFkKCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdoaWRlQmFubmVyQWQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5pyI5Y2h6LO86LK3ICovXHJcbiAgICBzdGF0aWMgYnV5TW9udGhDYXJkKHR5cGU6c3RyaW5nLGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdod0lBUCcsdHlwZSwocmVzKT0+e1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXMpXHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlICE9IDApIHJldHVybjtcclxuICAgICAgICAgICAgaWYocmVzLnR5cGUgPT0gVklQX1RZUEUuUkVDT1ZFUl9WSVAgfHwgcmVzLnR5cGUgPT0gVklQX1RZUEUuVklQX0ZPUkVWRVIgfHwgcmVzLnR5cGUgPT0gVklQX1RZUEUuVklQX01PTlRIKXtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS5pc0ZyZWVBZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkuZGlzcGF0Y2goR2FtZUNvbnN0LkZSRUVfQURfRVZFTlQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKmdldCBidXkgaW5mbyAqL1xyXG4gICAgc3RhdGljIGdldE15TW9udGhJbmZvKGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyB0aGlzLmNhbGxBcHBNZXRob2QoJ2dldFZpcEluZm8nLCcnLChyZXMpPT57XHJcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcylcclxuICAgICAgICAvLyAgICAgaWYocmVzLnR5cGUgPT0gVklQX1RZUEUuUkVDT1ZFUl9WSVAgfHwgcmVzLnR5cGUgPT0gVklQX1RZUEUuVklQX0ZPUkVWRVIgfHwgcmVzLnR5cGUgPT0gVklQX1RZUEUuVklQX01PTlRIKXtcclxuICAgICAgICAvLyAgICAgICAgIENoaWNrRGF0YS5pc0ZyZWVBZCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkuZGlzcGF0Y2goR2FtZUNvbnN0LkZSRUVfQURfRVZFTlQpXHJcbiAgICAgICAgLy8gfSlcclxuICAgIH1cclxuICAgIC8qKm9wZW4gd2VidmlldyAqL1xyXG4gICAgc3RhdGljIG9wZW5XZWJWaWV3KHVybDpzdHJpbmcpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyAhPT0gY2Muc3lzLk9TX0lPUykge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2h3X29wZW5INScse3VybH0pO1xyXG4gICAgfVxyXG4gICAgLyoqc2V0bG9jYWwgKi9cclxuICAgIHN0YXRpYyBzYXZlRGF0YVRvQXBwKGpzb246c3RyaW5nKXtcclxuICAgICAgICBpZihjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1Mpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ3NldENhY2hlRGF0YScse3VzZXJkYXRhOmpzb259KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEdhbWVDb25zdC5jYWNoZV9jaGlja19kYXRhX2tleSxKU09OLnN0cmluZ2lmeSh7dXNlcmRhdGE6anNvbn0pKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKmdldGxvY2FsICovXHJcbiAgICBzdGF0aWMgZ2V0RGF0YUZyb21BcHAoY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnZ2V0Q2FjaGVEYXRhJywnJywocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy51c2VyZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLWdldENhY2hlRGF0YTExMS0tLScgKyByZXMudXNlcmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLWdldENhY2hlRGF0YTIyMi0tLScgKyBKU09OLnBhcnNlKHJlcy51c2VyZGF0YSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soSlNPTi5wYXJzZShyZXMudXNlcmRhdGEpLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oR2FtZUNvbnN0LmNhY2hlX2NoaWNrX2RhdGFfa2V5KVxyXG4gICAgICAgICAgICBsZXQgdXNlcmRhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnVzZXJkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YSA9IEpTT04ucGFyc2UoZGF0YS51c2VyZGF0YSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh1c2VyZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19