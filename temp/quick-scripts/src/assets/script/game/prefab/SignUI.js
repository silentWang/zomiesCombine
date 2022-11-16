"use strict";
cc._RF.push(module, '64219eP4AFEgKvAI3OK34/i', 'SignUI');
// script/game/prefab/SignUI.ts

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
var SignUI = /** @class */ (function (_super) {
    __extends(SignUI, _super);
    function SignUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignUI_1 = SignUI;
    SignUI.reddot = function () {
        if (Data_1.default.user.signinfo.sign_time != 0) {
            if (SignUI_1.checkIsTody(Data_1.default.user.signinfo.sign_time)) {
                if (Data_1.default.user.signinfo.sign_beisu == 1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        return true;
    };
    SignUI.checkShow = function () {
        //新用户
        if (Data_1.default.user.signinfo.sign_index == 0) {
            return;
        }
        //已经签到
        if (SignUI_1.checkIsTody(Data_1.default.user.signinfo.sign_time)) {
            return;
        }
        Utils_1.default.createUI("prefab/SignLayer");
    };
    //这里配置签到奖励
    SignUI.prototype.getSignValue = function (index) {
        var lv = Data_1.default.user.GetMaxLv() - 3;
        if (lv < 1)
            lv = 1;
        var list = [
            //修改类型需要相应修改界面图标
            { type: 0, value: Data_1.default.user.BuyPrice(lv) * 4 },
            { type: 1, value: 2 },
            { type: 0, value: Data_1.default.user.BuyPrice(lv) * 8 },
            { type: 0, value: Data_1.default.user.BuyPrice(lv) * 12 },
            { type: 1, value: 5 },
            { type: 1, value: 8 },
            { type: 1, value: 10 },
        ];
        return list[index];
    };
    SignUI.checkIsTody = function (time) {
        var date = new Date(time);
        var dateNow = new Date(Utils_1.default.getServerTime());
        var bNewDay = false;
        if (date.getFullYear() == dateNow.getFullYear() &&
            date.getMonth() == dateNow.getMonth() &&
            date.getDate() == dateNow.getDate()) {
            bNewDay = true;
        }
        return bNewDay;
    };
    SignUI.prototype.start = function () {
        this.updateUI();
        AdCenter_1.default.Instance().showGridAd();
    };
    SignUI.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
    };
    SignUI.prototype.updateUI = function () {
        var item_days = this.GetGameObject("item_days");
        var bSignTody = false;
        if (Data_1.default.user.signinfo.sign_time != 0) {
            if (SignUI_1.checkIsTody(Data_1.default.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }
        var sign_index = Data_1.default.user.signinfo.sign_index % 7;
        if (sign_index == 0 && bSignTody)
            sign_index = 7;
        for (var i = 0; i < 7; ++i) {
            var node = item_days.children[i];
            node.getChildByName("sevenday_checked").active = i < sign_index;
            var tmp = this.getSignValue(i);
            if (tmp.type == 0) {
                node.getComponentInChildren(cc.Label).string = Utils_1.default.formatNumber(tmp.value) + "";
            }
            else {
                node.getComponentInChildren(cc.Label).string = tmp.value + "";
            }
        }
        this.GetGameObject("btn_3times").active = false;
        this.GetGameObject("btn_2times").active = false;
        this.GetGameObject("btn_sign").active = false;
        if (bSignTody) {
            if (Data_1.default.user.signinfo.sign_beisu == 1) {
                this.GetGameObject("btn_2times").active = true;
            }
            else if (Data_1.default.user.signinfo.sign_beisu == 2) {
                this.GetGameObject("btn_2times").active = true;
                // this.GetGameObject("btn_2times").children[0].active = true;
                this.GetButton("btn_2times").interactable = false;
            }
            else {
                this.GetGameObject("btn_3times").active = true;
                // this.GetGameObject("btn_3times").children[0].active = true;
                this.GetButton("btn_3times").interactable = false;
            }
        }
        else {
            this.GetGameObject("btn_sign").active = true;
            this.GetGameObject("btn_3times").active = true;
        }
        console.log(Data_1.default.user.signinfo);
    };
    SignUI.prototype.getTodySign = function () {
        var bSignTody = false;
        if (Data_1.default.user.signinfo.sign_time != 0) {
            if (SignUI_1.checkIsTody(Data_1.default.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }
        var index = Data_1.default.user.signinfo.sign_index;
        if (bSignTody)
            index--;
        return this.getSignValue(index % 7);
    };
    SignUI.prototype.flayAnim = function (beishu) {
        var tmp = this.getTodySign();
        if (tmp.type == 0) {
            AudioMgr_1.default.Instance().playSFX("coin");
            Utils_1.default.flyAnim(0, this.node, "icon_coin", 5, 200, function (b) {
                if (b) {
                    Data_1.default.user.coin += tmp.value * beishu;
                }
            });
        }
        else {
            AudioMgr_1.default.Instance().playSFX("gem");
            Utils_1.default.flyAnim(1, this.node, "icon_gem", 5, 200, function (b) {
                if (b) {
                    Data_1.default.user.gem += tmp.value * beishu;
                }
            });
        }
    };
    SignUI.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_2times":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        Data_1.default.user.signinfo.sign_beisu = 2;
                        _this.flayAnim(2);
                        if (!SignUI_1.checkIsTody(Data_1.default.user.signinfo.sign_time)) {
                            Data_1.default.user.signinfo.sign_index++;
                        }
                        Data_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                        _this.updateUI();
                    }
                });
                break;
            case "btn_3times":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        Data_1.default.user.signinfo.sign_beisu = 3;
                        _this.flayAnim(3);
                        if (!SignUI_1.checkIsTody(Data_1.default.user.signinfo.sign_time)) {
                            Data_1.default.user.signinfo.sign_index++;
                        }
                        Data_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                        _this.updateUI();
                    }
                });
                break;
            case "btn_sign":
                Data_1.default.user.signinfo.sign_beisu = 1;
                this.flayAnim(1);
                if (!SignUI_1.checkIsTody(Data_1.default.user.signinfo.sign_time)) {
                    Data_1.default.user.signinfo.sign_index++;
                }
                Data_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                this.updateUI();
                break;
        }
    };
    var SignUI_1;
    SignUI = SignUI_1 = __decorate([
        ccclass
    ], SignUI);
    return SignUI;
}(BaseUI_1.default));
exports.default = SignUI;

cc._RF.pop();