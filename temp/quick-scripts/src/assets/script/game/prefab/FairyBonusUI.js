"use strict";
cc._RF.push(module, 'f1d79P4wcFK9KwHCsJWJWld', 'FairyBonusUI');
// script/game/prefab/FairyBonusUI.ts

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
var AdCenter_1 = require("../../manager/AdCenter");
var Data_1 = require("../../manager/Data");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var DB_1 = require("../DB");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FairyBonusUI = /** @class */ (function (_super) {
    __extends(FairyBonusUI, _super);
    function FairyBonusUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.superPot = [];
        return _this;
    }
    FairyBonusUI.prototype.start = function () {
        AdCenter_1.default.Instance().showGridAd();
        Utils_1.default.playBreath(this.GetGameObject('btn_ad'));
    };
    FairyBonusUI.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
    };
    FairyBonusUI.prototype.getSuperPot = function (db) {
        if (db === void 0) { db = false; }
        var t = Data_1.default.user.GetMaxLv();
        var n = DB_1.DB_droneRewards[t + ""][1];
        var len = db ? 8 : 4;
        var pots = [];
        for (var o = 0; o < len; o++) {
            pots.push(n);
        }
        return pots;
    };
    FairyBonusUI.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_normal":
                var spt = this.getSuperPot();
                Data_1.default.user.DropGiftPts = Data_1.default.user.DropGiftPts.concat(spt);
                this.closeUI();
                break;
            case "btn_ad":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        var spt_1 = _this.getSuperPot(true);
                        Data_1.default.user.DropGiftPts = Data_1.default.user.DropGiftPts.concat(spt_1);
                        _this.closeUI();
                    }
                });
                break;
        }
    };
    FairyBonusUI = __decorate([
        ccclass
    ], FairyBonusUI);
    return FairyBonusUI;
}(BaseUI_1.default));
exports.default = FairyBonusUI;

cc._RF.pop();