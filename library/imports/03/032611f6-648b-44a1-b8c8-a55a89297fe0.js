"use strict";
cc._RF.push(module, '03261H2ZItEobjIpVqJKX/g', 'DropItem');
// script/game/prefab/DropItem.ts

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
var BaseUI_1 = require("../../framwork/BaseUI");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DropItem = /** @class */ (function (_super) {
    __extends(DropItem, _super);
    function DropItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropItem.prototype.start = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(function () {
            _this.Comming();
        })));
    };
    DropItem.prototype.Comming = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.callFunc(function () {
            _this.node.position = cc.v3(-cc.winSize.width / 2 - 200, cc.winSize.height / 4 - 100);
        }), cc.moveTo(20, cc.winSize.width / 2 + 200, cc.winSize.height / 4 - 100)).repeatForever());
    };
    DropItem.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "FairyItem":
                this.node.stopAllActions();
                this.node.position = cc.v3(-cc.winSize.width / 2 - 200, cc.winSize.height / 4 - 100);
                this.node.runAction(cc.sequence(cc.delayTime(40), cc.callFunc(function () {
                    _this.Comming();
                })));
                Utils_1.default.createUI("prefab/FairyBonusUI");
                break;
        }
    };
    DropItem = __decorate([
        ccclass
    ], DropItem);
    return DropItem;
}(BaseUI_1.default));
exports.default = DropItem;

cc._RF.pop();