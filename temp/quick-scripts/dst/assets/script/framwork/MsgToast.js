
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
        node.scaleY = 0;
        node.parent = cc.find("Canvas");
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.getChildByName("label").getComponent(cc.Label).string = msg;
        node.getComponent(cc.Animation).play("msghints", 0);
        node.getComponent(cc.Animation).on('finished', function () {
            // node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbXdvcmsvTXNnVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWlDQSxDQUFDO2lCQWpDb0IsUUFBUTtJQUlYLGFBQUksR0FBbEIsVUFBbUIsR0FBVztRQUMxQixJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQUUsT0FBTztRQUN0QixJQUFJLFVBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07Z0JBQ3JELElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU87aUJBQ1Y7Z0JBQ0QsVUFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQzFCLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxVQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxVQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNWO1FBRUQsaUJBQWlCO1FBQ2pCLElBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztZQUFFLE9BQU87UUFFOUQsSUFBSSxJQUFJLEdBQVksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxtQ0FBbUM7UUFDM0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQzNDLGtCQUFrQjtZQUNsQixpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQTdCYyxnQkFBTyxHQUFHLElBQUksQ0FBQztJQUZiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQzVCO0lBQUQsZUFBQztDQWpDRCxBQWlDQyxDQWpDcUMsRUFBRSxDQUFDLFNBQVMsR0FpQ2pEO2tCQWpDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb29sTWdyIGZyb20gXCIuLi9tYW5hZ2VyL1Bvb2xNZ3JcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1zZ1RvYXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9wcmVmYWIgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBzaG93KG1zZzogc3RyaW5nKSB7XG4gICAgICAgIGlmIChtc2cgPT0gXCJcIikgcmV0dXJuO1xuICAgICAgICBpZiAoTXNnVG9hc3QuX3ByZWZhYiA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInByZWZhYi9jb21tb24vbXNnX2hpbnRzXCIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5fcHJlZmFiID0gcHJlZmFiO1xuICAgICAgICAgICAgICAgIFBvb2xNZ3IuSW5zdGFuY2UoKS5pbml0UG9vbChcIm1zZ19oaW50c1wiLCBNc2dUb2FzdC5fcHJlZmFiLCAyMCk7XG4gICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhtc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvL+WvueixoeaxoOayoeacieWvueixoeWwseS4jeaYvuekuuS6hiAgIFxuICAgICAgICBpZiAoUG9vbE1nci5JbnN0YW5jZSgpLnBvb2xzW1wibXNnX2hpbnRzXCJdLnNpemUoKSA9PSAwKSByZXR1cm47XG5cbiAgICAgICAgdmFyIG5vZGU6IGNjLk5vZGUgPSBQb29sTWdyLkluc3RhbmNlKCkuZ2V0KFwibXNnX2hpbnRzXCIpOy8vY2MuaW5zdGFudGlhdGUoTXNnSGludHMuX3ByZWZhYik7XG4gICAgICAgIG5vZGUuc2NhbGVZID0gMDtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICBub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1zZztcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibXNnaGludHNcIiwgMCk7XG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oJ2ZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBQb29sTWdyLkluc3RhbmNlKCkucHV0KFwibXNnX2hpbnRzXCIsIG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=