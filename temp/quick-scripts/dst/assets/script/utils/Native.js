
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQywrQ0FBMEM7QUFDMUMsa0RBQTZDO0FBQzdDLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNoQixvQ0FBd0IsQ0FBQTtJQUN4QixzQ0FBMEIsQ0FBQTtJQUMxQiw2QkFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFDRDtJQUFBO0lBZ0hBLENBQUM7SUEvR1Usb0JBQWEsR0FBcEIsVUFBcUIsVUFBaUIsRUFBQyxNQUFlLEVBQUMsUUFBd0I7UUFBeEMsdUJBQUEsRUFBQSxXQUFlO1FBQUMseUJBQUEsRUFBQSxlQUF3QjtRQUMzRSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDdkMsSUFBSSxRQUFRLEdBQUcsZUFBZSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQUMsR0FBRztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixVQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1lBQ2pELFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUE7UUFDRCxJQUFJLEdBQUcsR0FBRyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsTUFBTSxRQUFBLEVBQUMsQ0FBQztR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QkFDQSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFDRztZQUNBLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBUyxDQUFDLG9CQUFvQixDQUFDLENBQUE7WUFDckUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUcsR0FBRyxFQUFDO2dCQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztvQkFDYixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQ3ZDO2FBQ0o7WUFDRCxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQWhIQSxBQWdIQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZXZlbnQvR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL2dhbWUvR2FtZUNvbnN0XCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmV4cG9ydCBlbnVtIFZJUF9UWVBFICB7XHJcbiAgICBWSVBfTU9OVEggPSAnaHdfdmlwXzAwMycsXHJcbiAgICBWSVBfRk9SRVZFUiA9ICdod192aXBfMDA0JyxcclxuICAgIFJFQ09WRVJfVklQID0gJzMnXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF0aXZlIHtcclxuICAgIHN0YXRpYyBjYWxsQXBwTWV0aG9kKG1ldGhvZE5hbWU6c3RyaW5nLHBhcmFtczphbnkgPSAnJyxjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyAhPT0gY2Muc3lzLk9TX0lPUykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjYWxsZnVuYyA9ICdjYWxsQmFja0Z1bmNfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHdpbmRvd1tjYWxsZnVuY10gPSAocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgLS0taW9zIGNhbGxiYWNrLS0tJHttZXRob2ROYW1lfWAscmVzKVxyXG4gICAgICAgICAgICBsZXQgcmVwID0gKCFyZXMgfHwgcmVzID09ICd1bmRlZmluZWQnKSA/ICcnIDogcmVzXHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcCk7XHJcbiAgICAgICAgICAgIHdpbmRvd1tjYWxsZnVuY10gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2JqID0ge21ldGhvZDpjYWxsZnVuYyxwYXJhbXN9O1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuICAgICAgICBsZXQgbWV0aG9kc3RyID0gYCR7bWV0aG9kTmFtZX0ke2pzb259YDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgLS1pb3MgY2FsbGJhY2sgYmVmb3JlLS0tOiR7bWV0aG9kTmFtZX0tLS0ke21ldGhvZHN0cn1gKVxyXG4gICAgICAgIGlmKCFqc2IgfHwgIWpzYi5yZWZsZWN0aW9uIHx8ICFqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIV0dhbWVKU0hhbmRsZTrmib7kuI3liLBqc2InKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoJ0hXR2FtZUpTSGFuZGxlJyxgJHttZXRob2ROYW1lfTpgLGpzb24pXHJcbiAgICB9XHJcbiAgICAvKirop4bpopHlub/lkYogKi9cclxuICAgIHN0YXRpYyBwbGF5VmlkZW9BZChjYWxsYmFjazpGdW5jdGlvbixhZFVuaXRJZDpzdHJpbmcpe1xyXG4gICAgICAgIGlmKENoaWNrRGF0YS5pc0ZyZWVBZCl7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKDEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnbG9hZFRvcE9uUmV3YXJkQWQnLHthZFVuaXRJZH0sKHJlcyk9PntcclxuICAgICAgICAgICAgaWYocmVzICYmIHJlcy5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKirmj5LlsY/lub/lkYogKi9cclxuICAgIHN0YXRpYyBzaG93SW50ZXJzdGl0aWFsQWQoYWRVbml0SWQ6c3RyaW5nLGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdsb2FkVG9wT25JbnRlcnN0aXRpYWxBZCcse2FkVW5pdElkfSwocmVzKT0+e1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqYmFubmVy5bm/5ZGKICovXHJcbiAgICBzdGF0aWMgc2hvd0Jhbm5lckFkKGFkVW5pdElkOnN0cmluZyxjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnbG9hZEJhbm5lckFkJyx7YWRVbml0SWR9LChyZXMpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBoaWRlQmFubmVyQWQoKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2hpZGVCYW5uZXJBZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirmnIjljaHos7zosrcgKi9cclxuICAgIHN0YXRpYyBidXlNb250aENhcmQodHlwZTpzdHJpbmcsY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2h3SUFQJyx0eXBlLChyZXMpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcylcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgIT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZihyZXMudHlwZSA9PSBWSVBfVFlQRS5SRUNPVkVSX1ZJUCB8fCByZXMudHlwZSA9PSBWSVBfVFlQRS5WSVBfRk9SRVZFUiB8fCByZXMudHlwZSA9PSBWSVBfVFlQRS5WSVBfTU9OVEgpe1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLmlzRnJlZUFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaChHYW1lQ29uc3QuRlJFRV9BRF9FVkVOVClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLyoqZ2V0IGJ1eSBpbmZvICovXHJcbiAgICBzdGF0aWMgZ2V0TXlNb250aEluZm8oY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIHRoaXMuY2FsbEFwcE1ldGhvZCgnZ2V0VmlwSW5mbycsJycsKHJlcyk9PntcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzKVxyXG4gICAgICAgIC8vICAgICBpZihyZXMudHlwZSA9PSBWSVBfVFlQRS5SRUNPVkVSX1ZJUCB8fCByZXMudHlwZSA9PSBWSVBfVFlQRS5WSVBfRk9SRVZFUiB8fCByZXMudHlwZSA9PSBWSVBfVFlQRS5WSVBfTU9OVEgpe1xyXG4gICAgICAgIC8vICAgICAgICAgQ2hpY2tEYXRhLmlzRnJlZUFkID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaChHYW1lQ29uc3QuRlJFRV9BRF9FVkVOVClcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgLyoqb3BlbiB3ZWJ2aWV3ICovXHJcbiAgICBzdGF0aWMgb3BlbldlYlZpZXcodXJsOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdod19vcGVuSDUnLHt1cmx9KTtcclxuICAgIH1cclxuICAgIC8qKnNldGxvY2FsICovXHJcbiAgICBzdGF0aWMgc2F2ZURhdGFUb0FwcChqc29uOnN0cmluZyl7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdzZXRDYWNoZURhdGEnLHt1c2VyZGF0YTpqc29ufSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShHYW1lQ29uc3QuY2FjaGVfY2hpY2tfZGF0YV9rZXksSlNPTi5zdHJpbmdpZnkoe3VzZXJkYXRhOmpzb259KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipnZXRsb2NhbCAqL1xyXG4gICAgc3RhdGljIGdldERhdGFGcm9tQXBwKGNhbGxiYWNrOkZ1bmN0aW9uKXtcclxuICAgICAgICBpZihjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1Mpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2dldENhY2hlRGF0YScsJycsKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMudXNlcmRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzLnVzZXJkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShHYW1lQ29uc3QuY2FjaGVfY2hpY2tfZGF0YV9rZXkpXHJcbiAgICAgICAgICAgIGxldCB1c2VyZGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEudXNlcmRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhID0gSlNPTi5wYXJzZShkYXRhLnVzZXJkYXRhKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHVzZXJkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=