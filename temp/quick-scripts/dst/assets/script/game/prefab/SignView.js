
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
                if (window && window['xxxxx'])
                    window['xxxxx']("xtRsR2cxzKerfr8TitR8dn34a6Fe");
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
            if (window && window['xxxxx'])
                window['xxxxx']("H4xafSYtyJ5MTRxfMRYrZhPTCmNFNsx");
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
            if (window && window['xxxxx'])
                window['xxxxx']("zejjwT");
            bNewDay = true;
            if (window && window['xxxxx'])
                window['xxxxx']("K8ZHwPderC8EGn4sKKmhJwibhbHpd");
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
        if (window && window['xxxxx'])
            window['xxxxx']("YDR4mx6X56bYYnbK");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("Xcyb2cNxZPrscDrwBZZyayRSbjD6JeM");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("t");
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
            if (window && window['xxxxx'])
                window['xxxxx']("Wt2hBpw7bfCSt3GYhMmwPdjh7CB");
            AudioMgr_1.default.Instance().playMX("coin");
            Utils_1.default.flyAnim(0, this.node, "icon_coin", 5, 200, function (b) {
                if (b) {
                    ChickData_1.default.user.coin += tmp.value * beishu;
                }
            });
        }
        else {
            AudioMgr_1.default.Instance().playMX("gem");
            if (window && window['xxxxx'])
                window['xxxxx']("PjjxAaKh");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("XissQnKkW4J7t8xJBDW3Rpkjd");
                        if (!SignView_1.checkIsToday(ChickData_1.default.user.signinfo.sign_time)) {
                            ChickData_1.default.user.signinfo.sign_index++;
                        }
                        ChickData_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                        _this.updateUI();
                    }
                });
                break;
            case "btn_3times":
                AdCenter_1.default.Instance().play(function (b) {
                    if (window && window['xxxxx'])
                        window['xxxxx']("yyFyEHEwzt");
                    if (b) {
                        ChickData_1.default.user.signinfo.sign_beisu = 3;
                        _this.flayAnim(3);
                        if (!SignView_1.checkIsToday(ChickData_1.default.user.signinfo.sign_time)) {
                            ChickData_1.default.user.signinfo.sign_index++;
                        }
                        ChickData_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                        _this.updateUI();
                    }
                });
                if (window && window['xxxxx'])
                    window['xxxxx']("en67ZtrmG5i4R5f4RA2xXctkEBXa55");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNpZ25WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQU07SUFBNUM7O0lBNk5BLENBQUM7aUJBN05vQixRQUFRO0lBQ2xCLGlCQUFRLEdBQWY7UUFDSSxJQUFJLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksVUFBUSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzFELElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7b0JBQ3pDLE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUNJO29CQUNELE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtnQkFDRCxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQ2pGO2lCQUNJO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQkFBVyxHQUFsQjtRQUNJLEtBQUs7UUFDTCxJQUFJLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3pDLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQUUsTUFBTSxDQUFDLE9B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UyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDMUQsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUNuQjtnQkFDTCxDQUFDLENBQUMsQ0FBQTtnQkFDRixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2dCQUNoRixNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBUSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzNELG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDeEM7Z0JBQ0QsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsTUFBTTtTQUNiO0lBQ0wsQ0FBQzs7SUE1TmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2TjVCO0lBQUQsZUFBQztDQTdORCxBQTZOQyxDQTdOcUMsZ0JBQU0sR0E2TjNDO2tCQTdOb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25WaWV3IGV4dGVuZHMgQmFzZVVJIHtcclxuICAgIHN0YXRpYyByZWRQb2ludCgpIHtcclxuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ4dFJzUjJjeHpLZXJmcjhUaXRSOGRuMzRhNkZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrSXNTaG93KCkge1xyXG4gICAgICAgIC8v5paw55So5oi3XHJcbiAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJINHhhZlNZdHlKNU1UUnhmTVJZclpoUFRDbU5GTnN4XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+W3sue7j+etvuWIsFxyXG4gICAgICAgIGlmIChTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1NpZ25MYXllclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i/memHjOmFjee9ruetvuWIsOWlluWKsVxyXG4gICAgZ2V0U2lnbkluZm8oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBsdiA9IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpIC0gMztcclxuICAgICAgICBpZiAobHYgPCAxKSBsdiA9IDE7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXHJcbiAgICAgICAgICAgIC8v5L+u5pS557G75Z6L6ZyA6KaB55u45bqU5L+u5pS555WM6Z2i5Zu+5qCHXHJcbiAgICAgICAgICAgIHsgdHlwZTogMCwgdmFsdWU6IENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpICogNH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMSwgdmFsdWU6IDIgfSxcclxuICAgICAgICAgICAgeyB0eXBlOiAwLCB2YWx1ZTogQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdikgKiA4IH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMCwgdmFsdWU6IENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpICogMTIgfSxcclxuICAgICAgICAgICAgeyB0eXBlOiAxLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDEsIHZhbHVlOiA4IH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMSwgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIHJldHVybiBsaXN0W2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tJc1RvZGF5KHRpbWUpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xyXG4gICAgICAgIHZhciBkYXRlTm93ID0gbmV3IERhdGUoVXRpbHMuZ2V0U2VydmVyVGltZSgpKTtcclxuICAgICAgICBsZXQgYk5ld0RheSA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT0gZGF0ZU5vdy5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpID09IGRhdGVOb3cuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpID09IGRhdGVOb3cuZ2V0RGF0ZSgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInplamp3VFwiKTtcclxuICAgICAgICAgICAgYk5ld0RheSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIks4Wkh3UGRlckM4RUduNHNLS21oSndpYmhiSHBkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYk5ld0RheTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5zaG93R3JpZEFkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLmhpZGVHcmlkQWQoKTtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVSSgpIHtcclxuICAgICAgICBsZXQgaXRlbV9kYXlzID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kYXlzXCIpO1xyXG5cclxuICAgICAgICBsZXQgYlNpZ25Ub2R5ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgYlNpZ25Ub2R5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNpZ25faW5kZXggPSBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4ICUgNztcclxuXHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiWURSNG14Nlg1NmJZWW5iS1wiKTtcclxuICAgICAgICBpZiAoc2lnbl9pbmRleCA9PSAwICYmIGJTaWduVG9keSlcclxuICAgICAgICAgICAgc2lnbl9pbmRleCA9IDc7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gaXRlbV9kYXlzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwic2V2ZW5kYXlfY2hlY2tlZFwiKS5hY3RpdmUgPSBpIDwgc2lnbl9pbmRleDtcclxuXHJcbiAgICAgICAgICAgIGxldCB0bXAgPSB0aGlzLmdldFNpZ25JbmZvKGkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRtcC52YWx1ZSkgKyBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiWGN5YjJjTnhaUHJzY0Ryd0JaWnlheVJTYmpENkplTVwiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gdG1wLnZhbHVlICsgXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8zdGltZXNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzJ0aW1lc1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fc2lnblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGJTaWduVG9keSkge1xyXG4gICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fMnRpbWVzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fMnRpbWVzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fMnRpbWVzXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEJ1dHRvbihcImJ0bl8ydGltZXNcIikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fM3RpbWVzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fM3RpbWVzXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRCdXR0b24oXCJidG5fM3RpbWVzXCIpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fc2lnblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fM3RpbWVzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIHByaXZhdGUgZFlkWV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIk5mRzZlUUVlYXdzOG1OYUY1ZFRYeDZhM3g2aDhmclwiKTsgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VG9kYXlTaWduKCkge1xyXG4gICAgICAgIGxldCBiU2lnblRvZHkgPSBmYWxzZTtcclxuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBiU2lnblRvZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4O1xyXG4gICAgICAgIGlmIChiU2lnblRvZHkpXHJcbiAgICAgICAgICAgIGluZGV4LS07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2lnbkluZm8oaW5kZXggJSA3KTtcclxuICAgIH1cclxuXHJcbiAgICBmbGF5QW5pbShiZWlzaHU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmdldFRvZGF5U2lnbigpO1xyXG4gICAgICAgIGlmICh0bXAudHlwZSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJXdDJoQnB3N2JmQ1N0M0dZaE1td1Bkamg3Q0JcIik7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcclxuICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgwLCB0aGlzLm5vZGUsIFwiaWNvbl9jb2luXCIsIDUsIDIwMCwgKGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSB0bXAudmFsdWUgKiBiZWlzaHU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJnZW1cIik7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlBqanhBYUtoXCIpO1xyXG4gICAgICAgICAgICBVdGlscy5mbHlBbmltKDEsIHRoaXMubm9kZSwgXCJpY29uX2dlbVwiLCA1LCAyMDAsIChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmdlbSArPSB0bXAudmFsdWUgKiBiZWlzaHU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fMnRpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGF5QW5pbSgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiWGlzc1FuS2tXNEo3dDh4SkJEVzNScGtqZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl8zdGltZXNcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInl5RnlFSEV3enRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghU2lnblZpZXcuY2hlY2tJc1RvZGF5KENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZW42N1p0cm1HNWk0UjVmNFJBMnhYY3RrRUJYYTU1XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2lnblwiOlxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsYXlBbmltKDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19