
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/DebugTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afc5a/e3ihDopuoBgs/d9wY', 'DebugTools');
// script/utils/DebugTools.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DebugTools = /** @class */ (function (_super) {
    __extends(DebugTools, _super);
    function DebugTools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugTools.prototype.start = function () {
        // if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
        //     return;
        // }
        // this.addBtn("清除数据", () => {
        //     localStorage.setItem(GameConst.cache_chick_data_key, "");
        // })
        // this.addBtn("金币+很多", () => {
        //     ChickData.user.coin += 1000000000000000
        // })
        // this.addBtn("钻石+很多", () => {
        //     ChickData.user.gem += 100000
        // })
        // this.addBtn("1倍数",()=>{
        //     cc.kSpeed(1);
        // })
        // this.addBtn("4倍数",()=>{
        //     cc.kSpeed(4);
        // })
        // this.addBtn("lv++", () => {
        //    ChickData.user.lv++;
        // })
    };
    DebugTools = __decorate([
        ccclass
    ], DebugTools);
    return DebugTools;
}(cc.Component));
exports.default = DebugTools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvRGVidWdUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDs7SUEyQ0EsQ0FBQztJQTFDRywwQkFBSyxHQUFMO1FBQ0ksbURBQW1EO1FBQ25ELGNBQWM7UUFDZCxJQUFJO1FBRUosOEJBQThCO1FBQzlCLGdFQUFnRTtRQUNoRSxLQUFLO1FBRUwsK0JBQStCO1FBQy9CLDhDQUE4QztRQUM5QyxLQUFLO1FBRUwsK0JBQStCO1FBQy9CLG1DQUFtQztRQUNuQyxLQUFLO1FBRUwsMEJBQTBCO1FBQzFCLG9CQUFvQjtRQUNwQixLQUFLO1FBRUwsMEJBQTBCO1FBQzFCLG9CQUFvQjtRQUNwQixLQUFLO1FBRUwsOEJBQThCO1FBQzlCLDBCQUEwQjtRQUMxQixLQUFLO0lBQ1QsQ0FBQztJQTdCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTJDOUI7SUFBRCxpQkFBQztDQTNDRCxBQTJDQyxDQTNDdUMsRUFBRSxDQUFDLFNBQVMsR0EyQ25EO2tCQTNDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lQ29uc3QgZnJvbSAnLi4vZ2FtZS9HYW1lQ29uc3QnO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tICcuLi9tYW5hZ2VyL0NoaWNrRGF0YSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1Z1Rvb2xzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5wbGF0Zm9ybSAhPSBjYy5zeXMuREVTS1RPUF9CUk9XU0VSKSB7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLmFkZEJ0bihcIua4hemZpOaVsOaNrlwiLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShHYW1lQ29uc3QuY2FjaGVfY2hpY2tfZGF0YV9rZXksIFwiXCIpO1xuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIHRoaXMuYWRkQnRuKFwi6YeR5biBK+W+iOWkmlwiLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBDaGlja0RhdGEudXNlci5jb2luICs9IDEwMDAwMDAwMDAwMDAwMDBcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyB0aGlzLmFkZEJ0bihcIumSu+efsyvlvojlpJpcIiwgKCkgPT4ge1xuICAgICAgICAvLyAgICAgQ2hpY2tEYXRhLnVzZXIuZ2VtICs9IDEwMDAwMFxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIHRoaXMuYWRkQnRuKFwiMeWAjeaVsFwiLCgpPT57XG4gICAgICAgIC8vICAgICBjYy5rU3BlZWQoMSk7XG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgLy8gdGhpcy5hZGRCdG4oXCI05YCN5pWwXCIsKCk9PntcbiAgICAgICAgLy8gICAgIGNjLmtTcGVlZCg0KTtcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyB0aGlzLmFkZEJ0bihcImx2KytcIiwgKCkgPT4ge1xuICAgICAgICAvLyAgICBDaGlja0RhdGEudXNlci5sdisrO1xuICAgICAgICAvLyB9KVxuICAgIH1cblxuICAgIC8vIGFkZEJ0bihuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIC8vICAgICBsZXQgdG9vbGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b29sYmFyXCIpWzBdO1xuICAgIC8vICAgICBpZiAoIXRvb2xiYXIpIHJldHVybjtcbiAgICAvLyAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gICAgIGRpdi5jbGFzc05hbWUgPSBcIml0ZW1cIjtcbiAgICAvLyAgICAgZGl2LmlubmVySFRNTCA9IFwiPGJ1dHRvbiBpZD0nXCIgKyBuYW1lICsgXCInPlwiICsgbmFtZSArIFwiPC9idXR0b24+XCI7XG4gICAgLy8gICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgY2FsbGJhY2soKVxuICAgIC8vICAgICB9O1xuICAgIC8vIH1cbn1cbiJdfQ==