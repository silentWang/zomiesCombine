"use strict";
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