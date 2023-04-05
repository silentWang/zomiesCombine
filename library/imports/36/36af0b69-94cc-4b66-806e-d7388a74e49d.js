"use strict";
cc._RF.push(module, '36af0tplMxLZoBu1ziKdOSd', 'MonthView');
// script/game/prefab/MonthView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var MonthView = /** @class */ (function (_super) {
    __extends(MonthView, _super);
    function MonthView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MonthView.prototype.start = function () {
        this.SetText('txtPrice', '12');
    };
    MonthView.prototype.setSelect = function (type) {
        var isAD = type == 0;
        var imgsel = this.GetGameObject('imgSelected');
        var pos = imgsel.position;
        imgsel.position = cc.v3(isAD ? -147 : 147, pos.y, pos.z);
    };
    // update (dt) {}
    MonthView.prototype.onUIClicked = function (event, customEventData) {
        _super.prototype.onUIClicked.call(this, event, customEventData);
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btnA":
                this.setSelect(0);
                break;
            case "btnB":
                this.setSelect(1);
                break;
            case "btnBuy":
                // to do
                cc.log('cccccccc');
                break;
            case "btnRecover":
                break;
            case "btnPrivacy":
                break;
            case "btnXieyi":
                break;
        }
    };
    MonthView = __decorate([
        ccclass
    ], MonthView);
    return MonthView;
}(BaseUI_1.default));
exports.default = MonthView;

cc._RF.pop();