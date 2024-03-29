"use strict";
cc._RF.push(module, 'd79a1IGYc5Ds7RQV9hCY0sd', 'BossCommingUI');
// script/game/prefab/BossCommingUI.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BossCommingUI = /** @class */ (function (_super) {
    __extends(BossCommingUI, _super);
    function BossCommingUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BossCommingUI.prototype.start = function () {
        var _this = this;
        AudioMgr_1.default.Instance().playMX("Arlam");
        this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
            _this.closeUI();
        })));
    };
    BossCommingUI = __decorate([
        ccclass
    ], BossCommingUI);
    return BossCommingUI;
}(BaseUI_1.default));
exports.default = BossCommingUI;

cc._RF.pop();