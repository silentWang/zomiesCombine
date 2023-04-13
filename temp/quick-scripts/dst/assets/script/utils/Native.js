
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
exports.Native = void 0;
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
    Native.getAppVersion = function () {
        this.callAppMethod('getAppVersion', { x: 1, y: '25222' }, function (res) {
            console.log('getAppVersion ios 回调', res);
        });
    };
    /**视频广告 */
    Native.playVideoAd = function (callback, adUnitId) {
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
        this.callAppMethod('hwIAP', type, function (res) {
            callback && callback(res);
        });
    };
    return Native;
}());
exports.Native = Native;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUEyREEsQ0FBQztJQTFEVSxvQkFBYSxHQUFwQixVQUFxQixVQUFpQixFQUFDLE1BQWUsRUFBQyxRQUF3QjtRQUF4Qyx1QkFBQSxFQUFBLFdBQWU7UUFBQyx5QkFBQSxFQUFBLGVBQXdCO1FBQzNFLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN2QyxJQUFJLFFBQVEsR0FBRyxlQUFlLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBQyxHQUFHO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLFVBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUNsRCxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxHQUFHLEdBQUcsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLFNBQVMsR0FBRyxLQUFHLFVBQVUsR0FBRyxJQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsVUFBVSxXQUFNLFNBQVcsQ0FBQyxDQUFBO1FBQzlELElBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7WUFDcEMsT0FBTztTQUNWO1FBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBSSxVQUFVLE1BQUcsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRU0sb0JBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFDLFVBQUMsR0FBRztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFVBQVU7SUFDSCxrQkFBVyxHQUFsQixVQUFtQixRQUFpQixFQUFDLFFBQWU7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBQyxFQUFDLFFBQVEsVUFBQSxFQUFDLEVBQUMsVUFBQyxHQUFHO1lBQ2xELElBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFDO2dCQUN4QixRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO2lCQUNHO2dCQUNBLFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQzthQUMxQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFVBQVU7SUFDSCx5QkFBa0IsR0FBekIsVUFBMEIsUUFBZSxFQUFDLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsRUFBQyxFQUFDLFFBQVEsVUFBQSxFQUFDLEVBQUMsVUFBQyxHQUFHO1lBQ3hELFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxjQUFjO0lBQ1AsbUJBQVksR0FBbkIsVUFBb0IsUUFBZSxFQUFDLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUMsRUFBQyxRQUFRLFVBQUEsRUFBQyxFQUFDLFVBQUMsR0FBRztZQUM3QyxRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sbUJBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxVQUFVO0lBQ0gsbUJBQVksR0FBbkIsVUFBb0IsSUFBVyxFQUFDLFFBQWlCO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxVQUFDLEdBQUc7WUFDaEMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0EzREEsQUEyREMsSUFBQTtBQTNEWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOYXRpdmUge1xyXG4gICAgc3RhdGljIGNhbGxBcHBNZXRob2QobWV0aG9kTmFtZTpzdHJpbmcscGFyYW1zOmFueSA9ICcnLGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zICE9PSBjYy5zeXMuT1NfSU9TKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNhbGxmdW5jID0gJ2NhbGxCYWNrRnVuY18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgd2luZG93W2NhbGxmdW5jXSA9IChyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAtLS1pb3MgY2FsbGJhY2stLS0ke21ldGhvZE5hbWV9YCxyZXMpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgIHdpbmRvd1tjYWxsZnVuY10gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2JqID0ge21ldGhvZDpjYWxsZnVuYyxwYXJhbXN9O1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuICAgICAgICBsZXQgbWV0aG9kc3RyID0gYCR7bWV0aG9kTmFtZX0ke2pzb259YDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgLS0tLUhXR2FtZUpTSGFuZGxlOiR7bWV0aG9kTmFtZX0tLS0ke21ldGhvZHN0cn1gKVxyXG4gICAgICAgIGlmKCFqc2IgfHwgIWpzYi5yZWZsZWN0aW9uIHx8ICFqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIV0dhbWVKU0hhbmRsZTrmib7kuI3liLBqc2InKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoJ0hXR2FtZUpTSGFuZGxlJyxgJHttZXRob2ROYW1lfTpgLGpzb24pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFwcFZlcnNpb24oKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2dldEFwcFZlcnNpb24nLHt4OjEseTonMjUyMjInfSwocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0QXBwVmVyc2lvbiBpb3Mg5Zue6LCDJyxyZXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKirop4bpopHlub/lkYogKi9cclxuICAgIHN0YXRpYyBwbGF5VmlkZW9BZChjYWxsYmFjazpGdW5jdGlvbixhZFVuaXRJZDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnbG9hZFRvcE9uUmV3YXJkQWQnLHthZFVuaXRJZH0sKHJlcyk9PntcclxuICAgICAgICAgICAgaWYocmVzICYmIHJlcy5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKirmj5LlsY/lub/lkYogKi9cclxuICAgIHN0YXRpYyBzaG93SW50ZXJzdGl0aWFsQWQoYWRVbml0SWQ6c3RyaW5nLGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdsb2FkVG9wT25JbnRlcnN0aXRpYWxBZCcse2FkVW5pdElkfSwocmVzKT0+e1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqYmFubmVy5bm/5ZGKICovXHJcbiAgICBzdGF0aWMgc2hvd0Jhbm5lckFkKGFkVW5pdElkOnN0cmluZyxjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnbG9hZEJhbm5lckFkJyx7YWRVbml0SWR9LChyZXMpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBoaWRlQmFubmVyQWQoKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2hpZGVCYW5uZXJBZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirmnIjljaHos7zosrcgKi9cclxuICAgIHN0YXRpYyBidXlNb250aENhcmQodHlwZTpzdHJpbmcsY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnaHdJQVAnLHR5cGUsKHJlcyk9PntcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXX0=