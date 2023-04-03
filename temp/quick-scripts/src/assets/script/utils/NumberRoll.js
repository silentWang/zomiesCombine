"use strict";
cc._RF.push(module, '7afd2vdphtCjKWi+cfBvmoW', 'NumberRoll');
// script/utils/NumberRoll.ts

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
var BaseUI_1 = require("../framwork/BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumberRoll = /** @class */ (function (_super) {
    __extends(NumberRoll, _super);
    function NumberRoll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cur = 0;
        _this._target = 0;
        _this._offset = 0;
        return _this;
    }
    NumberRoll.prototype.start = function () {
        this.label = this.node.getComponent(cc.Label);
    };
    Object.defineProperty(NumberRoll.prototype, "vaule", {
        set: function (n) {
            this._target = n;
            this._offset = Math.floor((this._target - this._cur) / Math.min(30, Math.abs(this._target - this._cur)));
        },
        enumerable: false,
        configurable: true
    });
    NumberRoll.prototype.update = function (dt) {
        if (dt > 1)
            dt = 1;
        if (1 / dt < cc.game.getFrameRate() / 2) {
            this.label.string = this._target + "";
            return;
        }
        if (this._cur != this._target) {
            this._cur += this._offset;
            if (this._offset > 0 && this._cur > this._target) {
                this._cur = this._target;
            }
            if (this._offset < 0 && this._cur < this._target) {
                this._cur = this._target;
            }
        }
        this.label.string = this._cur + "";
    };
    NumberRoll = __decorate([
        ccclass
    ], NumberRoll);
    return NumberRoll;
}(BaseUI_1.default));
exports.default = NumberRoll;

cc._RF.pop();