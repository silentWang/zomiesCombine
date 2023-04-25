
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLGtEQUE2QztBQUM3QyxJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDaEIsb0NBQXdCLENBQUE7SUFDeEIsc0NBQTBCLENBQUE7SUFDMUIsNkJBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0FBQ0Q7SUFBQTtJQTRIQSxDQUFDO0lBM0hVLHdCQUFpQixHQUF4QjtRQUNJLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxHQUFHO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUMzQyxtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQTtJQUVMLENBQUM7SUFDTSxvQkFBYSxHQUFwQixVQUFxQixVQUFpQixFQUFDLE1BQWUsRUFBQyxRQUF3QjtRQUF4Qyx1QkFBQSxFQUFBLFdBQWU7UUFBQyx5QkFBQSxFQUFBLGVBQXdCO1FBQzNFLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN2QyxJQUFJLFFBQVEsR0FBRyxlQUFlLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBQyxHQUFHO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLFVBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUNsRCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7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QUFJLEVBQUMsQ0FBQyxDQUFDLENBQUE7U0FDOUY7SUFDTCxDQUFDO0lBQ0QsY0FBYztJQUNQLHFCQUFjLEdBQXJCLFVBQXNCLFFBQWlCO1FBQ25DLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUMsRUFBRSxFQUFDLFVBQUMsR0FBRztnQkFDckMsSUFBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBQztvQkFDbkIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNsRDtxQkFDRztvQkFDQSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFDRztZQUNBLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBUyxDQUFDLG9CQUFvQixDQUFDLENBQUE7WUFDckUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUcsR0FBRyxFQUFDO2dCQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztvQkFDYixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQ3ZDO2FBQ0o7WUFDRCxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQTVIQSxBQTRIQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZXZlbnQvR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vZ2FtZS9HYW1lQ29uc3RcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuZXhwb3J0IGVudW0gVklQX1RZUEUgIHtcclxuICAgIFZJUF9NT05USCA9ICdod192aXBfMDAzJyxcclxuICAgIFZJUF9GT1JFVkVSID0gJ2h3X3ZpcF8wMDQnLFxyXG4gICAgUkVDT1ZFUl9WSVAgPSAnMydcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXRpdmUge1xyXG4gICAgc3RhdGljIGluaXRBcHBDYWxsTWV0aG9kKCl7XHJcbiAgICAgICAgd2luZG93WydIV0dhbWVEaWRFbnRlckJhY2tncm91bmQnXSA9ICgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLUhXR2FtZURpZEVudGVyQmFja2dyb3VuZC0tJylcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2FsbEFwcE1ldGhvZChtZXRob2ROYW1lOnN0cmluZyxwYXJhbXM6YW55ID0gJycsY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICBpZihjYy5zeXMub3MgIT09IGNjLnN5cy5PU19JT1MpIHJldHVybjtcclxuICAgICAgICBsZXQgY2FsbGZ1bmMgPSAnY2FsbEJhY2tGdW5jXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB3aW5kb3dbY2FsbGZ1bmNdID0gKHJlcyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYC0tLWlvcyBjYWxsYmFjay0tLSR7bWV0aG9kTmFtZX1gLHJlcylcclxuICAgICAgICAgICAgbGV0IHJlcCA9ICghcmVzIHx8IHJlcyA9PSAndW5kZWZpbmVkJykgPyAnJyA6IHJlc1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXApO1xyXG4gICAgICAgICAgICB3aW5kb3dbY2FsbGZ1bmNdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9iaiA9IHttZXRob2Q6Y2FsbGZ1bmMscGFyYW1zfTtcclxuICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICAgICAgbGV0IG1ldGhvZHN0ciA9IGAke21ldGhvZE5hbWV9JHtqc29ufWA7XHJcbiAgICAgICAgY29uc29sZS5sb2coYC0taW9zIGNhbGxiYWNrIGJlZm9yZS0tLToke21ldGhvZE5hbWV9LS0tJHttZXRob2RzdHJ9YClcclxuICAgICAgICBpZighanNiIHx8ICFqc2IucmVmbGVjdGlvbiB8fCAhanNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSFdHYW1lSlNIYW5kbGU65om+5LiN5YiwanNiJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCdIV0dhbWVKU0hhbmRsZScsYCR7bWV0aG9kTmFtZX06YCxqc29uKVxyXG4gICAgfVxyXG4gICAgLyoq6KeG6aKR5bm/5ZGKICovXHJcbiAgICBzdGF0aWMgcGxheVZpZGVvQWQoY2FsbGJhY2s6RnVuY3Rpb24sYWRVbml0SWQ6c3RyaW5nKXtcclxuICAgICAgICBpZihDaGlja0RhdGEuaXNGcmVlQWQpe1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2xvYWRUb3BPblJld2FyZEFkJyx7YWRVbml0SWR9LChyZXMpPT57XHJcbiAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygxKTtcclxuICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coJ+ingOeci+aIkOWKnycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKirmj5LlsY/lub/lkYogKi9cclxuICAgIHN0YXRpYyBzaG93SW50ZXJzdGl0aWFsQWQoYWRVbml0SWQ6c3RyaW5nLGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdsb2FkVG9wT25JbnRlcnN0aXRpYWxBZCcse2FkVW5pdElkfSwocmVzKT0+e1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqYmFubmVy5bm/5ZGKICovXHJcbiAgICBzdGF0aWMgc2hvd0Jhbm5lckFkKGFkVW5pdElkOnN0cmluZyxjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnbG9hZEJhbm5lckFkJyx7YWRVbml0SWR9LChyZXMpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBoaWRlQmFubmVyQWQoKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2hpZGVCYW5uZXJBZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirmnIjljaHos7zosrcgKi9cclxuICAgIHN0YXRpYyBidXlNb250aENhcmQodHlwZTpzdHJpbmcsY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2h3SUFQJyx0eXBlLChyZXMpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcylcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgIT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZihyZXMudHlwZSA9PSBWSVBfVFlQRS5SRUNPVkVSX1ZJUCB8fCByZXMudHlwZSA9PSBWSVBfVFlQRS5WSVBfRk9SRVZFUiB8fCByZXMudHlwZSA9PSBWSVBfVFlQRS5WSVBfTU9OVEgpe1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLmlzRnJlZUFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaChHYW1lQ29uc3QuRlJFRV9BRF9FVkVOVClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLyoqZ2V0IGJ1eSBpbmZvICovXHJcbiAgICBzdGF0aWMgZ2V0TXlNb250aEluZm8oY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIHRoaXMuY2FsbEFwcE1ldGhvZCgnZ2V0VmlwSW5mbycsJycsKHJlcyk9PntcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzKVxyXG4gICAgICAgIC8vICAgICBpZihyZXMudHlwZSA9PSBWSVBfVFlQRS5SRUNPVkVSX1ZJUCB8fCByZXMudHlwZSA9PSBWSVBfVFlQRS5WSVBfRk9SRVZFUiB8fCByZXMudHlwZSA9PSBWSVBfVFlQRS5WSVBfTU9OVEgpe1xyXG4gICAgICAgIC8vICAgICAgICAgQ2hpY2tEYXRhLmlzRnJlZUFkID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaChHYW1lQ29uc3QuRlJFRV9BRF9FVkVOVClcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgLyoqb3BlbiB3ZWJ2aWV3ICovXHJcbiAgICBzdGF0aWMgb3BlbldlYlZpZXcodXJsOnN0cmluZyl7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zICE9PSBjYy5zeXMuT1NfSU9TKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnaHdfb3Blbkg1Jyx7dXJsfSk7XHJcbiAgICB9XHJcbiAgICAvKipzZXRsb2NhbCAqL1xyXG4gICAgc3RhdGljIHNhdmVEYXRhVG9BcHAoanNvbjpzdHJpbmcpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnc2V0Q2FjaGVEYXRhJyx7dXNlcmRhdGE6anNvbn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oR2FtZUNvbnN0LmNhY2hlX2NoaWNrX2RhdGFfa2V5LEpTT04uc3RyaW5naWZ5KHt1c2VyZGF0YTpqc29ufSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqZ2V0bG9jYWwgKi9cclxuICAgIHN0YXRpYyBnZXREYXRhRnJvbUFwcChjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdnZXRDYWNoZURhdGEnLCcnLChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnVzZXJkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhKU09OLnBhcnNlKHJlcy51c2VyZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oR2FtZUNvbnN0LmNhY2hlX2NoaWNrX2RhdGFfa2V5KVxyXG4gICAgICAgICAgICBsZXQgdXNlcmRhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnVzZXJkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YSA9IEpTT04ucGFyc2UoZGF0YS51c2VyZGF0YSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh1c2VyZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19