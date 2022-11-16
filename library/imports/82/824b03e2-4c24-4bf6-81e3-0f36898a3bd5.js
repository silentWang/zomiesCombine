"use strict";
cc._RF.push(module, '824b0PiTCRL9oHjDzaJijvV', 'LoseUI');
// script/game/prefab/LoseUI.ts

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
var LoseUI = /** @class */ (function (_super) {
    __extends(LoseUI, _super);
    function LoseUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coin = 0;
        return _this;
    }
    LoseUI.prototype.start = function () {
        var _this = this;
        this.GetGameObject("lbl_coin").opacity = 0;
        this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(0.5), cc.fadeTo(1, 255)));
        this.GetGameObject("btn_get").active = false;
        AudioMgr_1.default.Instance().playSFX("fail");
        // this.GetSkeleton("fx_victory").setAnimation(0,"start",false);
        var t = 5;
        this.node.runAction(cc.sequence(cc.callFunc(function () {
            console.log("---", t, Utils_1.default.getTimeStrByS(t));
            _this.GetGameObject("btn_get").active = t <= 4;
            _this.SetText("lbl_time", Utils_1.default.getTimeStrByS(t));
            if (t < 0) {
                _this.getCoinReward();
                _this.closeUI();
            }
            t--;
        }), cc.delayTime(1)).repeat(7));
    };
    LoseUI.prototype.setInfo = function (coin) {
        this.coin = coin;
        this.SetText("lbl_coin", Utils_1.default.formatNumber(coin * 5));
        this.SetText("btn_normal", "\u9886\u53D6" + Utils_1.default.formatNumber(coin) + "\u91D1\u5E01");
    };
    LoseUI.prototype.closeUI = function () {
        this.shutAnim();
    };
    LoseUI.prototype.getCoinReward = function () {
        var coin = this.coin;
        AudioMgr_1.default.Instance().playSFX("coin");
        Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
            if (b)
                Data_1.default.user.coin += coin;
        });
    };
    LoseUI.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_get":
                AdCenter_1.default.Instance().play(function () {
                    _this.getCoinReward();
                });
                this.closeUI();
                break;
            case 'btn_normal':
                this.getCoinReward();
                this.closeUI();
                break;
        }
    };
    LoseUI = __decorate([
        ccclass
    ], LoseUI);
    return LoseUI;
}(BaseUI_1.default));
exports.default = LoseUI;

cc._RF.pop();