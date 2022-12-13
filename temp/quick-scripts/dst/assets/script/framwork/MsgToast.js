
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framwork/MsgToast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9114dC92g5BGrnJuc5h3P6G', 'MsgToast');
// script/framwork/MsgToast.ts

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
var MsgToast = /** @class */ (function (_super) {
    __extends(MsgToast, _super);
    function MsgToast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MsgToast_1 = MsgToast;
    MsgToast.show = function (msg) {
        if (msg == "")
            return;
        if (MsgToast_1._prefab == null) {
            cc.loader.loadRes("prefab/common/msg_hints", function (err, prefab) {
                if (err) {
                    return;
                }
                MsgToast_1._prefab = prefab;
                PoolMgr_1.default.Instance().initPool("msg_hints", MsgToast_1._prefab, 20);
                MsgToast_1.show(msg);
            });
            return;
        }
        //对象池没有对象就不显示了   
        if (PoolMgr_1.default.Instance().pools["msg_hints"].size() == 0)
            return;
        var node = PoolMgr_1.default.Instance().get("msg_hints"); //cc.instantiate(MsgHints._prefab);
        if (window && window['xxxxx'])
            window['xxxxx']("mpQRyXyQEKNcDa53tXxChwxY6dNZrnS");
        node.scaleY = 0;
        node.parent = cc.find("Canvas");
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.getChildByName("label").getComponent(cc.Label).string = msg;
        node.getComponent(cc.Animation).play("msghints", 0);
        node.getComponent(cc.Animation).on('finished', function () {
            // node.destroy();
            if (window && window['xxxxx'])
                window['xxxxx']("C2mstZ");
            PoolMgr_1.default.Instance().put("msg_hints", node);
        });
    };
    var MsgToast_1;
    MsgToast._prefab = null;
    MsgToast = MsgToast_1 = __decorate([
        ccclass
    ], MsgToast);
    return MsgToast;
}(cc.Component));
exports.default = MsgToast;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcTXNnVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQW1DQSxDQUFDO2lCQW5Db0IsUUFBUTtJQUlYLGFBQUksR0FBbEIsVUFBbUIsR0FBVztRQUMxQixJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQUUsT0FBTztRQUN0QixJQUFJLFVBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07Z0JBQ3JELElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU87aUJBQ1Y7Z0JBQ0QsVUFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQzFCLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxVQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxVQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNWO1FBRUQsaUJBQWlCO1FBQ2pCLElBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztZQUFFLE9BQU87UUFFOUQsSUFBSSxJQUFJLEdBQVksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxtQ0FBbUM7UUFDM0YsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUMzQyxrQkFBa0I7WUFDbEIsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7SUEvQmMsZ0JBQU8sR0FBRyxJQUFJLENBQUM7SUFGYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUM1QjtJQUFELGVBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBbUNqRDtrQkFuQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9vbE1nciBmcm9tIFwiLi4vbWFuYWdlci9Qb29sTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnVG9hc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvdyhtc2c6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChtc2cgPT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgIGlmIChNc2dUb2FzdC5fcHJlZmFiID09IG51bGwpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwcmVmYWIvY29tbW9uL21zZ19oaW50c1wiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5fcHJlZmFiID0gcHJlZmFiO1xyXG4gICAgICAgICAgICAgICAgUG9vbE1nci5JbnN0YW5jZSgpLmluaXRQb29sKFwibXNnX2hpbnRzXCIsIE1zZ1RvYXN0Ll9wcmVmYWIsIDIwKTtcclxuICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3cobXNnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5a+56LGh5rGg5rKh5pyJ5a+56LGh5bCx5LiN5pi+56S65LqGICAgXHJcbiAgICAgICAgaWYgKFBvb2xNZ3IuSW5zdGFuY2UoKS5wb29sc1tcIm1zZ19oaW50c1wiXS5zaXplKCkgPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgbm9kZTogY2MuTm9kZSA9IFBvb2xNZ3IuSW5zdGFuY2UoKS5nZXQoXCJtc2dfaGludHNcIik7Ly9jYy5pbnN0YW50aWF0ZShNc2dIaW50cy5fcHJlZmFiKTtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJtcFFSeVh5UUVLTmNEYTUzdFh4Q2h3eFk2ZE5acm5TXCIpO1xyXG4gICAgICAgIG5vZGUuc2NhbGVZID0gMDtcclxuICAgICAgICBub2RlLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgbm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1zZztcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtc2doaW50c1wiLCAwKTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKCdmaW5pc2hlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkMybXN0WlwiKTtcclxuICAgICAgICAgICAgUG9vbE1nci5JbnN0YW5jZSgpLnB1dChcIm1zZ19oaW50c1wiLCBub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=