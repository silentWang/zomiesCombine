
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvTmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUF5QkEsQ0FBQztJQXhCVSxvQkFBYSxHQUFwQixVQUFxQixVQUFpQixFQUFDLE1BQWUsRUFBQyxRQUF3QjtRQUF4Qyx1QkFBQSxFQUFBLFdBQWU7UUFBQyx5QkFBQSxFQUFBLGVBQXdCO1FBQzNFLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN2QyxJQUFJLFFBQVEsR0FBRyxlQUFlLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBQyxHQUFHO1lBQ25CLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUE7UUFDRCxJQUFJLEdBQUcsR0FBRyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsTUFBTSxRQUFBLEVBQUMsQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFHLEtBQUcsVUFBVSxHQUFHLElBQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUFzQixVQUFVLFdBQU0sU0FBVyxDQUFDLENBQUE7UUFDOUQsSUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtZQUNwQyxPQUFPO1NBQ1Y7UUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFJLFVBQVUsTUFBRyxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFTSxvQkFBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsVUFBQyxHQUFHO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsYUFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6Qlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmF0aXZlIHtcbiAgICBzdGF0aWMgY2FsbEFwcE1ldGhvZChtZXRob2ROYW1lOnN0cmluZyxwYXJhbXM6YW55ID0gJycsY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKXtcbiAgICAgICAgaWYoY2Muc3lzLm9zICE9PSBjYy5zeXMuT1NfSU9TKSByZXR1cm47XG4gICAgICAgIGxldCBjYWxsZnVuYyA9ICdjYWxsQmFja0Z1bmNfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB3aW5kb3dbY2FsbGZ1bmNdID0gKHJlcyk9PntcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICB3aW5kb3dbY2FsbGZ1bmNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2JqID0ge21ldGhvZDpjYWxsZnVuYyxwYXJhbXN9O1xuICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgICAgIGxldCBtZXRob2RzdHIgPSBgJHttZXRob2ROYW1lfSR7anNvbn1gO1xuICAgICAgICBjb25zb2xlLmxvZyhgLS0tLUhXR2FtZUpTSGFuZGxlOiR7bWV0aG9kTmFtZX0tLS0ke21ldGhvZHN0cn1gKVxuICAgICAgICBpZighanNiIHx8ICFqc2IucmVmbGVjdGlvbiB8fCAhanNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hXR2FtZUpTSGFuZGxlOuaJvuS4jeWIsGpzYicpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCgnSFdHYW1lSlNIYW5kbGUnLGAke21ldGhvZE5hbWV9OmAsanNvbilcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QXBwVmVyc2lvbigpe1xuICAgICAgICB0aGlzLmNhbGxBcHBNZXRob2QoJ2dldEFwcFZlcnNpb24nLHt4OjEseTonMjUyMjInfSwocmVzKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEFwcFZlcnNpb24gaW9zIOWbnuiwgycscmVzKVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=