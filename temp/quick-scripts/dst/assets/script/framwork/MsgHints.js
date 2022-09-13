
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framwork/MsgHints.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '922a144cLRCbrDv5hv5JyP8', 'MsgHints');
// script/framwork/MsgHints.ts

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
var PoolMgr_1 = require("../manager/PoolMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MsgHints = /** @class */ (function (_super) {
    __extends(MsgHints, _super);
    function MsgHints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MsgHints_1 = MsgHints;
    MsgHints.show = function (msg) {
        if (msg == "")
            return;
        if (MsgHints_1._prefab == null) {
            cc.loader.loadRes("prefab/common/msg_hints", function (err, prefab) {
                if (err) {
                    return;
                }
                MsgHints_1._prefab = prefab;
                PoolMgr_1.default.Instance().initPool("msg_hints", MsgHints_1._prefab, 20);
                MsgHints_1.show(msg);
            });
            return;
        }
        //对象池没有对象就不显示了   
        if (PoolMgr_1.default.Instance().pools["msg_hints"].size() == 0)
            return;
        var node = PoolMgr_1.default.Instance().get("msg_hints"); //cc.instantiate(MsgHints._prefab);
        node.scaleY = 0;
        node.parent = cc.find("Canvas");
        node.zIndex = 999999999;
        node.getChildByName("label").getComponent(cc.Label).string = msg;
        node.getComponent(cc.Animation).play("msghints", 0);
        node.getComponent(cc.Animation).on('finished', function () {
            // node.destroy();
            PoolMgr_1.default.Instance().put("msg_hints", node);
        });
    };
    var MsgHints_1;
    MsgHints._prefab = null;
    MsgHints = MsgHints_1 = __decorate([
        ccclass
    ], MsgHints);
    return MsgHints;
}(cc.Component));
exports.default = MsgHints;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcTXNnSGludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWlDQSxDQUFDO2lCQWpDb0IsUUFBUTtJQUlYLGFBQUksR0FBbEIsVUFBbUIsR0FBVztRQUMxQixJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQUUsT0FBTztRQUN0QixJQUFJLFVBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07Z0JBQ3JELElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU87aUJBQ1Y7Z0JBQ0QsVUFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQzFCLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxVQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxVQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNWO1FBRUQsaUJBQWlCO1FBQ2pCLElBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztZQUFFLE9BQU87UUFFOUQsSUFBSSxJQUFJLEdBQVksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxtQ0FBbUM7UUFDM0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUMzQyxrQkFBa0I7WUFDbEIsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7SUE3QmMsZ0JBQU8sR0FBRyxJQUFJLENBQUM7SUFGYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUM1QjtJQUFELGVBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBaUNqRDtrQkFqQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9vbE1nciBmcm9tIFwiLi4vbWFuYWdlci9Qb29sTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnSGludHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvdyhtc2c6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChtc2cgPT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgIGlmIChNc2dIaW50cy5fcHJlZmFiID09IG51bGwpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwcmVmYWIvY29tbW9uL21zZ19oaW50c1wiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5fcHJlZmFiID0gcHJlZmFiO1xyXG4gICAgICAgICAgICAgICAgUG9vbE1nci5JbnN0YW5jZSgpLmluaXRQb29sKFwibXNnX2hpbnRzXCIsIE1zZ0hpbnRzLl9wcmVmYWIsIDIwKTtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3cobXNnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5a+56LGh5rGg5rKh5pyJ5a+56LGh5bCx5LiN5pi+56S65LqGICAgXHJcbiAgICAgICAgaWYgKFBvb2xNZ3IuSW5zdGFuY2UoKS5wb29sc1tcIm1zZ19oaW50c1wiXS5zaXplKCkgPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgbm9kZTogY2MuTm9kZSA9IFBvb2xNZ3IuSW5zdGFuY2UoKS5nZXQoXCJtc2dfaGludHNcIik7Ly9jYy5pbnN0YW50aWF0ZShNc2dIaW50cy5fcHJlZmFiKTtcclxuICAgICAgICBub2RlLnNjYWxlWSA9IDA7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIG5vZGUuekluZGV4ID0gOTk5OTk5OTk5O1xyXG4gICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1zZztcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtc2doaW50c1wiLCAwKTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKCdmaW5pc2hlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIFBvb2xNZ3IuSW5zdGFuY2UoKS5wdXQoXCJtc2dfaGludHNcIiwgbm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19