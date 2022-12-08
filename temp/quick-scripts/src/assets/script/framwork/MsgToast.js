"use strict";
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