
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
            callback && callback();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFpREEsQ0FBQztJQWhEVSxvQkFBYSxHQUFwQixVQUFxQixVQUFpQixFQUFDLE1BQWUsRUFBQyxRQUF3QjtRQUF4Qyx1QkFBQSxFQUFBLFdBQWU7UUFBQyx5QkFBQSxFQUFBLGVBQXdCO1FBQzNFLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN2QyxJQUFJLFFBQVEsR0FBRyxlQUFlLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBQyxHQUFHO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLFVBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUNsRCxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxHQUFHLEdBQUcsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLFNBQVMsR0FBRyxLQUFHLFVBQVUsR0FBRyxJQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsVUFBVSxXQUFNLFNBQVcsQ0FBQyxDQUFBO1FBQzlELElBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7WUFDcEMsT0FBTztTQUNWO1FBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBSSxVQUFVLE1BQUcsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRU0sb0JBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFDLFVBQUMsR0FBRztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFVBQVU7SUFDSCxrQkFBVyxHQUFsQixVQUFtQixRQUFpQixFQUFDLFFBQWU7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBQyxFQUFDLFFBQVEsVUFBQSxFQUFDLEVBQUMsVUFBQyxHQUFHO1lBQ2xELFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxVQUFVO0lBQ0gseUJBQWtCLEdBQXpCLFVBQTBCLFFBQWUsRUFBQyxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLGVBQXdCO1FBQzlELElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUMsRUFBQyxRQUFRLFVBQUEsRUFBQyxFQUFDLFVBQUMsR0FBRztZQUN4RCxRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsY0FBYztJQUNQLG1CQUFZLEdBQW5CLFVBQW9CLFFBQWUsRUFBQyxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLGVBQXdCO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFDLEVBQUMsUUFBUSxVQUFBLEVBQUMsRUFBQyxVQUFDLEdBQUc7WUFDN0MsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG1CQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR0wsYUFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmF0aXZlIHtcclxuICAgIHN0YXRpYyBjYWxsQXBwTWV0aG9kKG1ldGhvZE5hbWU6c3RyaW5nLHBhcmFtczphbnkgPSAnJyxjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyAhPT0gY2Muc3lzLk9TX0lPUykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjYWxsZnVuYyA9ICdjYWxsQmFja0Z1bmNfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHdpbmRvd1tjYWxsZnVuY10gPSAocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgLS0taW9zIGNhbGxiYWNrLS0tJHttZXRob2ROYW1lfWAscmVzKVxyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICB3aW5kb3dbY2FsbGZ1bmNdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9iaiA9IHttZXRob2Q6Y2FsbGZ1bmMscGFyYW1zfTtcclxuICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICAgICAgbGV0IG1ldGhvZHN0ciA9IGAke21ldGhvZE5hbWV9JHtqc29ufWA7XHJcbiAgICAgICAgY29uc29sZS5sb2coYC0tLS1IV0dhbWVKU0hhbmRsZToke21ldGhvZE5hbWV9LS0tJHttZXRob2RzdHJ9YClcclxuICAgICAgICBpZighanNiIHx8ICFqc2IucmVmbGVjdGlvbiB8fCAhanNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSFdHYW1lSlNIYW5kbGU65om+5LiN5YiwanNiJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCdIV0dhbWVKU0hhbmRsZScsYCR7bWV0aG9kTmFtZX06YCxqc29uKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBcHBWZXJzaW9uKCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdnZXRBcHBWZXJzaW9uJyx7eDoxLHk6JzI1MjIyJ30sKHJlcyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEFwcFZlcnNpb24gaW9zIOWbnuiwgycscmVzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoq6KeG6aKR5bm/5ZGKICovXHJcbiAgICBzdGF0aWMgcGxheVZpZGVvQWQoY2FsbGJhY2s6RnVuY3Rpb24sYWRVbml0SWQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2xvYWRUb3BPblJld2FyZEFkJyx7YWRVbml0SWR9LChyZXMpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKirmj5LlsY/lub/lkYogKi9cclxuICAgIHN0YXRpYyBzaG93SW50ZXJzdGl0aWFsQWQoYWRVbml0SWQ6c3RyaW5nLGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jYWxsQXBwTWV0aG9kKCdsb2FkVG9wT25JbnRlcnN0aXRpYWxBZCcse2FkVW5pdElkfSwocmVzKT0+e1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqYmFubmVy5bm/5ZGKICovXHJcbiAgICBzdGF0aWMgc2hvd0Jhbm5lckFkKGFkVW5pdElkOnN0cmluZyxjYWxsYmFjazpGdW5jdGlvbiA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuY2FsbEFwcE1ldGhvZCgnbG9hZEJhbm5lckFkJyx7YWRVbml0SWR9LChyZXMpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBoaWRlQmFubmVyQWQoKXtcclxuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2hpZGVCYW5uZXJBZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59Il19