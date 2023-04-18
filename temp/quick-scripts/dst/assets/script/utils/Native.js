
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
        this.callAppMethod('', '', function (res) {
            callback && callback(res);
            if (res.type == VIP_TYPE.RECOVER_VIP || res.type == VIP_TYPE.VIP_FOREVER || res.type == VIP_TYPE.VIP_MONTH) {
                ChickData_1.default.isFreeAd = true;
            }
            GameEvent_1.default.Instance().dispatch(GameConst_1.default.FREE_AD_EVENT);
        });
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
            cc.sys.localStorage.setItem(GameConst_1.default.cache_chick_data_key, json);
        }
    };
    /**getlocal */
    Native.getDataFromApp = function (callback) {
        if (cc.sys.os === cc.sys.OS_IOS) {
            this.callAppMethod('getCacheData', '', function (res) {
                if (res.userdata) {
                    callback && callback(JSON.parse(res.userdata));
                }
                else {
                    callback && callback(null);
                }
            });
        }
        else {
            var res = cc.sys.localStorage.getItem(GameConst_1.default.cache_chick_data_key);
            var data = null;
            if (res) {
                data = JSON.parse(res);
            }
            callback && callback(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQywrQ0FBMEM7QUFDMUMsa0RBQTZDO0FBQzdDLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNoQixvQ0FBd0IsQ0FBQTtJQUN4QixzQ0FBMEIsQ0FBQTtJQUMxQiw2QkFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFDRDtJQUFBO0lBMEdBLENBQUM7SUF6R1Usb0JBQWEsR0FBcEIsVUFBcUIsVUFBaUIsRUFBQyxNQUFlLEVBQUMsUUFBd0I7UUFBeEMsdUJBQUEsRUFBQSxXQUFlO1FBQUMseUJBQUEsRUFBQSxlQUF3QjtRQUMzRSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDdkMsSUFBSSxRQUFRLEdBQUcsZUFBZSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQUMsR0FBRztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixVQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEQsUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQTtRQUNELElBQUksR0FBRyxHQUFHLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxTQUFTLEdBQUcsS0FBRyxVQUFVLEdBQUcsSUFBTSxDQUFDO1FBQ3ZD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USxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQ2xEO3FCQUNHO29CQUNBLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzlCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUNHO1lBQ0EsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUNyRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBRyxHQUFHLEVBQUM7Z0JBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDekI7WUFDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQTFHQSxBQTBHQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZXZlbnQvR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL2dhbWUvR2FtZUNvbnN0XCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmV4cG9ydCBlbnVtIFZJUF9UWVBFICB7XHJcbiAgICBWSVBfTU9OVEggPSAnaHdfdmlwXzAwMycsXHJcbiAgICBWSVBfRk9SRVZFUiA9ICdod192aXBfMDA0JyxcclxuICAgIFJFQ09WRVJfVklQID0gJzMnXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF0aXZlIHtcclxuICAgIHN0YXRpYyBjYWxsQXBwTWV0aG9kKG1ldGhvZE5hbWU6c3RyaW5nLHBhcmFtczphbnkgPSAnJyxjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyAhPT0gY2Muc3lzLk9TX0lPUykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjYWxsZnVuYyA9ICdjYWxsQmFja0Z1bmNfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHdpbmRvd1tjYWxsZnVuY10gPSAocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgLS0taW9zIGNhbGxiYWNrLS0tJHttZXRob2ROYW1lfWAscmVzKVxyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICB3aW5kb3dbY2FsbGZ1bmNdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9iaiA9IHttZXRob2Q6Y2FsbGZ1bmMscGFyYW1zfTtcclxuICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICAgICAgbGV0IG1ldGhvZHN0ciA9IGAke21ldGhvZE5hbWV9JHtqc29ufWA7XHJcbiAgICAgICAgY29uc29sZS5sb2coYC0tLS1IV0dhbWVKU0hhbmRsZToke21ldGhvZE5hbWV9LS0tJHttZXRob2RzdHJ9YClcclxuICAgICAgICBpZighanNiIHx8ICFqc2IucmVmbGVjdGlvbiB8fCAhanNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSFdHYW1lSlNIYW5kbGU65om+5LiN5YiwanNiJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCdIV0dhbWVKU0hhbmRsZScsYCR7bWV0aG9kTmFtZX06YCxqc29uKVxyXG4gICAgfVxyXG4gICAgLyoq6KeG6aKR5bm/5ZGKICovXHJcbiAgICBzdGF0aWMgcGxheVZpZGVvQWQoY2FsbGJhY2s6RnVuY3Rpb24sYWRVbml0SWQ6c3RyaW5nKXtcclxuICAgICAgICBpZihDaGlja0RhdGEuaXNGcmVlQWQpe1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2xvYWRUb3BPblJld2FyZEFkJyx7YWRVbml0SWR9LChyZXMpPT57XHJcbiAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoq5o+S5bGP5bm/5ZGKICovXHJcbiAgICBzdGF0aWMgc2hvd0ludGVyc3RpdGlhbEFkKGFkVW5pdElkOnN0cmluZyxjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnbG9hZFRvcE9uSW50ZXJzdGl0aWFsQWQnLHthZFVuaXRJZH0sKHJlcyk9PntcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKmJhbm5lcuW5v+WRiiAqL1xyXG4gICAgc3RhdGljIHNob3dCYW5uZXJBZChhZFVuaXRJZDpzdHJpbmcsY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2xvYWRCYW5uZXJBZCcse2FkVW5pdElkfSwocmVzKT0+e1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgaGlkZUJhbm5lckFkKCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdoaWRlQmFubmVyQWQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5pyI5Y2h6LO86LK3ICovXHJcbiAgICBzdGF0aWMgYnV5TW9udGhDYXJkKHR5cGU6c3RyaW5nLGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdod0lBUCcsdHlwZSwocmVzKT0+e1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXMpXHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlICE9IDApIHJldHVybjtcclxuICAgICAgICAgICAgaWYocmVzLnR5cGUgPT0gVklQX1RZUEUuUkVDT1ZFUl9WSVAgfHwgcmVzLnR5cGUgPT0gVklQX1RZUEUuVklQX0ZPUkVWRVIgfHwgcmVzLnR5cGUgPT0gVklQX1RZUEUuVklQX01PTlRIKXtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS5pc0ZyZWVBZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkuZGlzcGF0Y2goR2FtZUNvbnN0LkZSRUVfQURfRVZFTlQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKmdldCBidXkgaW5mbyAqL1xyXG4gICAgc3RhdGljIGdldE15TW9udGhJbmZvKGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCcnLCcnLChyZXMpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcylcclxuICAgICAgICAgICAgaWYocmVzLnR5cGUgPT0gVklQX1RZUEUuUkVDT1ZFUl9WSVAgfHwgcmVzLnR5cGUgPT0gVklQX1RZUEUuVklQX0ZPUkVWRVIgfHwgcmVzLnR5cGUgPT0gVklQX1RZUEUuVklQX01PTlRIKXtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS5pc0ZyZWVBZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkuZGlzcGF0Y2goR2FtZUNvbnN0LkZSRUVfQURfRVZFTlQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKm9wZW4gd2VidmlldyAqL1xyXG4gICAgc3RhdGljIG9wZW5XZWJWaWV3KHVybDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnaHdfb3Blbkg1Jyx7dXJsfSk7XHJcbiAgICB9XHJcbiAgICAvKipzZXRsb2NhbCAqL1xyXG4gICAgc3RhdGljIHNhdmVEYXRhVG9BcHAoanNvbjpzdHJpbmcpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnc2V0Q2FjaGVEYXRhJyx7dXNlcmRhdGE6anNvbn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oR2FtZUNvbnN0LmNhY2hlX2NoaWNrX2RhdGFfa2V5LGpzb24pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqZ2V0bG9jYWwgKi9cclxuICAgIHN0YXRpYyBnZXREYXRhRnJvbUFwcChjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdnZXRDYWNoZURhdGEnLCcnLChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXMudXNlcmRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzLnVzZXJkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShHYW1lQ29uc3QuY2FjaGVfY2hpY2tfZGF0YV9rZXkpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHJlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=