
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
var GameConst_1 = require("../game/GameConst");
var Data_1 = require("../manager/Data");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DebugTools = /** @class */ (function (_super) {
    __extends(DebugTools, _super);
    function DebugTools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugTools.prototype.start = function () {
        if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
            return;
        }
        this.addBtn("清除数据", function () {
            localStorage.setItem(GameConst_1.default.local_data_key, "");
        });
        this.addBtn("金币+很多", function () {
            Data_1.default.user.coin += 1000000000000000;
        });
        this.addBtn("钻石+很多", function () {
            Data_1.default.user.gem += 100000;
        });
        this.addBtn("1倍数", function () {
            cc.kSpeed(1);
        });
        this.addBtn("4倍数", function () {
            cc.kSpeed(4);
        });
        this.addBtn("lv++", function () {
            Data_1.default.user.lv++;
        });
    };
    DebugTools.prototype.addBtn = function (name, callback) {
        var toolbar = document.getElementsByClassName("toolbar")[0];
        if (!toolbar)
            return;
        var div = document.createElement("div");
        div.className = "item";
        div.innerHTML = "<button id='" + name + "'>" + name + "</button>";
        toolbar.appendChild(div);
        document.getElementById(name).onclick = function () {
            callback();
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcRGVidWdUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMsd0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEOztJQTJDQSxDQUFDO0lBMUNHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFO1lBQzNDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2hCLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNqQixjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxnQkFBZ0IsQ0FBQTtRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2pCLGNBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLGNBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLElBQVksRUFBRSxRQUFrQjtRQUNuQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3JCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDdkIsR0FBRyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUc7WUFDcEMsUUFBUSxFQUFFLENBQUE7UUFDZCxDQUFDLENBQUM7SUFDTixDQUFDO0lBMUNnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMkM5QjtJQUFELGlCQUFDO0NBM0NELEFBMkNDLENBM0N1QyxFQUFFLENBQUMsU0FBUyxHQTJDbkQ7a0JBM0NvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDb25zdCBmcm9tICcuLi9nYW1lL0dhbWVDb25zdCc7XHJcbmltcG9ydCBEYXRhIGZyb20gJy4uL21hbmFnZXIvRGF0YSc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdUb29scyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICE9IGNjLnN5cy5ERVNLVE9QX0JST1dTRVIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRCdG4oXCLmuIXpmaTmlbDmja5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShHYW1lQ29uc3QubG9jYWxfZGF0YV9rZXksIFwiXCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuYWRkQnRuKFwi6YeR5biBK+W+iOWkmlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERhdGEudXNlci5jb2luICs9IDEwMDAwMDAwMDAwMDAwMDBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmFkZEJ0bihcIumSu+efsyvlvojlpJpcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBEYXRhLnVzZXIuZ2VtICs9IDEwMDAwMFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuYWRkQnRuKFwiMeWAjeaVsFwiLCgpPT57XHJcbiAgICAgICAgICAgIGNjLmtTcGVlZCgxKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmFkZEJ0bihcIjTlgI3mlbBcIiwoKT0+e1xyXG4gICAgICAgICAgICBjYy5rU3BlZWQoNCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5hZGRCdG4oXCJsdisrXCIsICgpID0+IHtcclxuICAgICAgICAgICBEYXRhLnVzZXIubHYrKztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ0bihuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCB0b29sYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvb2xiYXJcIilbMF07XHJcbiAgICAgICAgaWYgKCF0b29sYmFyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBcIjxidXR0b24gaWQ9J1wiICsgbmFtZSArIFwiJz5cIiArIG5hbWUgKyBcIjwvYnV0dG9uPlwiO1xyXG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19