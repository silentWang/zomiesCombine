
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/SignView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1aca7eivGtO/Z+kbVBIQ4KP', 'SignView');
// script/game/prefab/SignView.ts

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
var ChickData_1 = require("../../manager/ChickData");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SignView = /** @class */ (function (_super) {
    __extends(SignView, _super);
    function SignView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignView_1 = SignView;
    SignView.redPoint = function () {
        if (ChickData_1.default.user.signinfo.sign_time != 0) {
            if (SignView_1.checkIsToday(ChickData_1.default.user.signinfo.sign_time)) {
                if (ChickData_1.default.user.signinfo.sign_beisu == 1) {
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
    SignView.checkIsShow = function () {
        //新用户
        if (ChickData_1.default.user.signinfo.sign_index == 0) {
            return;
        }
        //已经签到
        if (SignView_1.checkIsToday(ChickData_1.default.user.signinfo.sign_time)) {
            return;
        }
        Utils_1.default.createUI("prefab/SignLayer");
    };
    //这里配置签到奖励
    SignView.prototype.getSignInfo = function (index) {
        var lv = ChickData_1.default.user.getLvlMax() - 3;
        if (lv < 1)
            lv = 1;
        var list = [
            //修改类型需要相应修改界面图标
            { type: 0, value: ChickData_1.default.user.buyChickPrice(lv) * 4 },
            { type: 1, value: 2 },
            { type: 0, value: ChickData_1.default.user.buyChickPrice(lv) * 8 },
            { type: 0, value: ChickData_1.default.user.buyChickPrice(lv) * 12 },
            { type: 1, value: 5 },
            { type: 1, value: 8 },
            { type: 1, value: 10 },
        ];
        return list[index];
    };
    SignView.checkIsToday = function (time) {
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
    SignView.prototype.start = function () {
        this.updateUI();
        AdCenter_1.default.Instance().showGridAd();
    };
    SignView.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
    };
    SignView.prototype.updateUI = function () {
        var item_days = this.GetGameObject("item_days");
        var bSignTody = false;
        if (ChickData_1.default.user.signinfo.sign_time != 0) {
            if (SignView_1.checkIsToday(ChickData_1.default.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }
        var sign_index = ChickData_1.default.user.signinfo.sign_index % 7;
        if (sign_index == 0 && bSignTody)
            sign_index = 7;
        for (var i = 0; i < 7; ++i) {
            var node = item_days.children[i];
            node.getChildByName("sevenday_checked").active = i < sign_index;
            var tmp = this.getSignInfo(i);
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
            if (ChickData_1.default.user.signinfo.sign_beisu == 1) {
                this.GetGameObject("btn_2times").active = true;
            }
            else if (ChickData_1.default.user.signinfo.sign_beisu == 2) {
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
    };
    SignView.prototype.dYdY_xxxx_fun = function () { console.log("NfG6eQEeaws8mNaF5dTXx6a3x6h8fr"); };
    SignView.prototype.getTodaySign = function () {
        var bSignTody = false;
        if (ChickData_1.default.user.signinfo.sign_time != 0) {
            if (SignView_1.checkIsToday(ChickData_1.default.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }
        var index = ChickData_1.default.user.signinfo.sign_index;
        if (bSignTody)
            index--;
        return this.getSignInfo(index % 7);
    };
    SignView.prototype.flayAnim = function (beishu) {
        var tmp = this.getTodaySign();
        if (tmp.type == 0) {
            AudioMgr_1.default.Instance().playMX("coin");
            Utils_1.default.flyAnim(0, this.node, "icon_coin", 5, 200, function (b) {
                if (b) {
                    ChickData_1.default.user.coin += tmp.value * beishu;
                }
            });
        }
        else {
            AudioMgr_1.default.Instance().playMX("gem");
            Utils_1.default.flyAnim(1, this.node, "icon_gem", 5, 200, function (b) {
                if (b) {
                    ChickData_1.default.user.gem += tmp.value * beishu;
                }
            });
        }
    };
    SignView.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_2times":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        ChickData_1.default.user.signinfo.sign_beisu = 2;
                        _this.flayAnim(2);
                        if (!SignView_1.checkIsToday(ChickData_1.default.user.signinfo.sign_time)) {
                            ChickData_1.default.user.signinfo.sign_index++;
                        }
                        ChickData_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                        _this.updateUI();
                    }
                }, 1);
                break;
            case "btn_3times":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        ChickData_1.default.user.signinfo.sign_beisu = 3;
                        _this.flayAnim(3);
                        if (!SignView_1.checkIsToday(ChickData_1.default.user.signinfo.sign_time)) {
                            ChickData_1.default.user.signinfo.sign_index++;
                        }
                        ChickData_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                        _this.updateUI();
                    }
                }, '1');
                break;
            case "btn_sign":
                ChickData_1.default.user.signinfo.sign_beisu = 1;
                this.flayAnim(1);
                if (!SignView_1.checkIsToday(ChickData_1.default.user.signinfo.sign_time)) {
                    ChickData_1.default.user.signinfo.sign_index++;
                }
                ChickData_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                this.updateUI();
                break;
        }
    };
    var SignView_1;
    SignView = SignView_1 = __decorate([
        ccclass
    ], SignView);
    return SignView;
}(BaseUI_1.default));
exports.default = SignView;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNpZ25WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQU07SUFBNUM7O0lBK01BLENBQUM7aUJBL01vQixRQUFRO0lBQ2xCLGlCQUFRLEdBQWY7UUFDSSxJQUFJLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksVUFBUSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzFELElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7b0JBQ3pDLE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUNJO29CQUNELE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO2lCQUNJO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQkFBVyxHQUFsQjtRQUNJLEtBQUs7UUFDTCxJQUFJLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3pDLE9BQU87U0FDVjtRQUVELE1BQU07UUFDTixJQUFJLFVBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzFELE9BQU87U0FDVjtRQUNELGVBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtC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QUMxRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ25CO2dCQUNMLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtnQkFDTixNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBUSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzNELG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDeEM7Z0JBQ0QsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsTUFBTTtTQUNiO0lBQ0wsQ0FBQzs7SUE5TWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErTTVCO0lBQUQsZUFBQztDQS9NRCxBQStNQyxDQS9NcUMsZ0JBQU0sR0ErTTNDO2tCQS9Nb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25WaWV3IGV4dGVuZHMgQmFzZVVJIHtcclxuICAgIHN0YXRpYyByZWRQb2ludCgpIHtcclxuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tJc1Nob3coKSB7XHJcbiAgICAgICAgLy/mlrDnlKjmiLdcclxuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5bey57uP562+5YiwXHJcbiAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2lnbkxheWVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+Z6YeM6YWN572u562+5Yiw5aWW5YqxXHJcbiAgICBnZXRTaWduSW5mbyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzO1xyXG4gICAgICAgIGlmIChsdiA8IDEpIGx2ID0gMTtcclxuICAgICAgICBsZXQgbGlzdCA9IFtcclxuICAgICAgICAgICAgLy/kv67mlLnnsbvlnovpnIDopoHnm7jlupTkv67mlLnnlYzpnaLlm77moIdcclxuICAgICAgICAgICAgeyB0eXBlOiAwLCB2YWx1ZTogQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdikgKiA0fSxcclxuICAgICAgICAgICAgeyB0eXBlOiAxLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDAsIHZhbHVlOiBDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKGx2KSAqIDggfSxcclxuICAgICAgICAgICAgeyB0eXBlOiAwLCB2YWx1ZTogQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdikgKiAxMiB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDEsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMSwgdmFsdWU6IDggfSxcclxuICAgICAgICAgICAgeyB0eXBlOiAxLCB2YWx1ZTogMTAgfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgcmV0dXJuIGxpc3RbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGVja0lzVG9kYXkodGltZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodGltZSk7XHJcbiAgICAgICAgdmFyIGRhdGVOb3cgPSBuZXcgRGF0ZShVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpO1xyXG4gICAgICAgIGxldCBiTmV3RGF5ID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA9PSBkYXRlTm93LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICBkYXRlLmdldE1vbnRoKCkgPT0gZGF0ZU5vdy5nZXRNb250aCgpICYmXHJcbiAgICAgICAgZGF0ZS5nZXREYXRlKCkgPT0gZGF0ZU5vdy5nZXREYXRlKClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgYk5ld0RheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiTmV3RGF5O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIGxldCBpdGVtX2RheXMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RheXNcIik7XHJcblxyXG4gICAgICAgIGxldCBiU2lnblRvZHkgPSBmYWxzZTtcclxuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBiU2lnblRvZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2lnbl9pbmRleCA9IENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXggJSA3O1xyXG5cclxuICAgICAgICBpZiAoc2lnbl9pbmRleCA9PSAwICYmIGJTaWduVG9keSlcclxuICAgICAgICAgICAgc2lnbl9pbmRleCA9IDc7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gaXRlbV9kYXlzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwic2V2ZW5kYXlfY2hlY2tlZFwiKS5hY3RpdmUgPSBpIDwgc2lnbl9pbmRleDtcclxuXHJcbiAgICAgICAgICAgIGxldCB0bXAgPSB0aGlzLmdldFNpZ25JbmZvKGkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRtcC52YWx1ZSkgKyBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSB0bXAudmFsdWUgKyBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fMnRpbWVzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9zaWduXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYlNpZ25Ub2R5KSB7XHJcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8ydGltZXNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8ydGltZXNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8ydGltZXNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0QnV0dG9uKFwiYnRuXzJ0aW1lc1wiKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8zdGltZXNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8zdGltZXNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0QnV0dG9uKFwiYnRuXzN0aW1lc1wiKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3NpZ25cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICBwcml2YXRlIGRZZFlfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJOZkc2ZVFFZWF3czhtTmFGNWRUWHg2YTN4Nmg4ZnJcIik7IH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvZGF5U2lnbigpIHtcclxuICAgICAgICBsZXQgYlNpZ25Ub2R5ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgYlNpZ25Ub2R5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleDtcclxuICAgICAgICBpZiAoYlNpZ25Ub2R5KVxyXG4gICAgICAgICAgICBpbmRleC0tO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpZ25JbmZvKGluZGV4ICUgNyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmxheUFuaW0oYmVpc2h1OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdG1wID0gdGhpcy5nZXRUb2RheVNpZ24oKTtcclxuICAgICAgICBpZiAodG1wLnR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNvaW5cIik7XHJcbiAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCwgdGhpcy5ub2RlLCBcImljb25fY29pblwiLCA1LCAyMDAsIChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gdG1wLnZhbHVlICogYmVpc2h1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJnZW1cIik7XHJcbiAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMSwgdGhpcy5ub2RlLCBcImljb25fZ2VtXCIsIDUsIDIwMCwgKGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ2VtICs9IHRtcC52YWx1ZSAqIGJlaXNodTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9jbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl8ydGltZXNcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fYmVpc3UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYXlBbmltKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwxKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fM3RpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGF5QW5pbSgzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sJzEnKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2lnblwiOlxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsYXlBbmltKDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19