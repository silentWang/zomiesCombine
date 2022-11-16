"use strict";
cc._RF.push(module, 'bdcb9Wp8YxFErWZb5qYmaOU', 'VictoryUI');
// script/game/prefab/VictoryUI.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VictoryUI = /** @class */ (function (_super) {
    __extends(VictoryUI, _super);
    function VictoryUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coin = 0;
        return _this;
    }
    VictoryUI.prototype.start = function () {
        var _this = this;
        // this.GetGameObject("lbl_coin").opacity = 0;
        // this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(0.5),cc.fadeTo(1,255)));
        AudioMgr_1.default.Instance().playSFX("win_stage");
        this.GetSkeleton("fx_victory").setAnimation(0, "start", false);
        this.GetSkeleton("fx_victory").setAnimation(1, "idle", true);
        this.GetGameObject("btn_get").active = false;
        var t = 5;
        this.node.runAction(cc.sequence(cc.callFunc(function () {
            _this.SetText("lbl_time", Utils_1.default.getTimeStrByS(t));
            _this.GetGameObject("btn_get").active = t <= 4;
            if (t < 0) {
                _this.getCoinReward();
                _this.closeUI();
            }
            t--;
        }), cc.delayTime(1)).repeat(7));
    };
    VictoryUI.prototype.setInfo = function (coin) {
        this.coin = coin;
        this.SetText("lbl_coin", Utils_1.default.formatNumber(coin * 5));
        this.SetText("btn_normal", "\u9886\u53D6" + Utils_1.default.formatNumber(coin) + "\u91D1\u5E01");
    };
    VictoryUI.prototype.closeUI = function () {
        this.shutAnim();
    };
    VictoryUI.prototype.getCoinReward = function (isdouble) {
        if (isdouble === void 0) { isdouble = false; }
        var coin = isdouble ? this.coin * 2 : this.coin;
        AudioMgr_1.default.Instance().playSFX("coin");
        Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
            if (b) {
                Data_1.default.user.coin += coin;
                if (Data_1.default.user.lv >= 30)
                    AdCenter_1.default.Instance().showinterstitialAd();
            }
        });
    };
    VictoryUI.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_get":
                this.closeUI();
                AdCenter_1.default.Instance().play(function () {
                    _this.getCoinReward();
                });
                break;
            case "btn_normal":
                this.getCoinReward();
                this.closeUI();
                break;
        }
    };
    VictoryUI = __decorate([
        ccclass
    ], VictoryUI);
    return VictoryUI;
}(BaseUI_1.default));
exports.default = VictoryUI;

cc._RF.pop();