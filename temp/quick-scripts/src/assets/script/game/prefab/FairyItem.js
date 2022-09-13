"use strict";
cc._RF.push(module, 'fd0779orjRI8rleyDsPRVW2', 'FairyItem');
// script/game/prefab/FairyItem.ts

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
var FairyItem = /** @class */ (function (_super) {
    __extends(FairyItem, _super);
    function FairyItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FairyItem.prototype.start = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(function () {
            _this.ChuXian();
        })));
    };
    FairyItem.prototype.ChuXian = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.callFunc(function () {
            _this.node.position = cc.v3(-cc.winSize.width / 2 - 200, cc.winSize.height / 4 - 100);
        }), cc.moveTo(20, cc.winSize.width / 2 + 200, cc.winSize.height / 4 - 100)).repeatForever());
    };
    FairyItem.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "FairyItem":
                this.node.stopAllActions();
                this.node.position = cc.v3(-cc.winSize.width / 2 - 200, cc.winSize.height / 4 - 100);
                this.node.runAction(cc.sequence(cc.delayTime(40), cc.callFunc(function () {
                    _this.ChuXian();
                })));
                Utils_1.default.createUI("prefab/FairyBonusUI");
                break;
        }
    };
    FairyItem = __decorate([
        ccclass
    ], FairyItem);
    return FairyItem;
}(BaseUI_1.default));
exports.default = FairyItem;

cc._RF.pop();