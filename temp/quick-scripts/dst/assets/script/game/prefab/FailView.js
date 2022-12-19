
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/FailView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d834jVHjpP748RznizFhuk', 'FailView');
// script/game/prefab/FailView.ts

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
var WxCenter_1 = require("../../manager/WxCenter");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var HallScene_1 = require("../HallScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FailView = /** @class */ (function (_super) {
    __extends(FailView, _super);
    function FailView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coin = 0;
        return _this;
    }
    FailView.prototype.start = function () {
        this.GetGameObject("lbl_coin").opacity = 0;
        this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(0.5), cc.fadeTo(1, 255)));
        AudioMgr_1.default.Instance().playMX("fail");
        Utils_1.default.playBreath(this.GetGameObject('btn_get'));
        WxCenter_1.default.aldReport('FailShow', 'show');
    };
    FailView.prototype.setInfo = function (coin) {
        if (window && window['xxxxx'])
            window['xxxxx']("fswbt5YFcd5xCdJMdMH7Mj");
        this.coin = coin;
        this.aTobAnim(coin * 1.8);
        this.SetText("btn_normal", "\u9886\u53D6" + Utils_1.default.formatNumber(coin) + "\u91D1\u5E01");
    };
    FailView.prototype.FcMb_xxxx_fun = function () { console.log("CcXaFhTmA53RKRMHjJpQNE2kd"); };
    FailView.prototype.aTobAnim = function (num) {
        var _this = this;
        if (window && window['xxxxx'])
            window['xxxxx']("rJJEDED4rWEptMPsAbj");
        var aver = Math.ceil(num / 60);
        var xn = 0;
        this.SetText("lbl_coin", Utils_1.default.formatNumber(0));
        var cb = function () {
            xn += aver;
            if (xn >= num) {
                xn = num;
                _this.unschedule(cb);
            }
            _this.SetText("lbl_coin", Utils_1.default.formatNumber(xn));
        };
        this.schedule(cb, 0, 61);
    };
    FailView.prototype.closeUI = function () {
        if (window && window['xxxxx'])
            window['xxxxx']("rza6xdb446ZPznaQxG");
        this.shutAnim();
        HallScene_1.default.Instance.createEnemys();
    };
    FailView.prototype.getCoinReward = function () {
        var coin = this.coin;
        AudioMgr_1.default.Instance().playMX("coin");
        Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
            if (b)
                ChickData_1.default.user.coin += coin;
        });
    };
    FailView.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_get":
                WxCenter_1.default.aldReport('FailClick', 'click');
                AdCenter_1.default.Instance().play(function () {
                    _this.getCoinReward();
                    _this.closeUI();
                }, 1);
                break;
            case 'btn_normal':
                this.getCoinReward();
                this.closeUI();
                break;
        }
    };
    FailView = __decorate([
        ccclass
    ], FailView);
    return FailView;
}(BaseUI_1.default));
exports.default = FailView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEZhaWxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLDBDQUFxQztBQUcvQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQWtFQztRQXpEVyxVQUFJLEdBQUcsQ0FBQyxDQUFDOztJQXlEckIsQ0FBQztJQWpFRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUYsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbEMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDL0Msa0JBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHRCwwQkFBTyxHQUFQLFVBQVEsSUFBVztRQUVmLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztR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O2dCQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07U0FDYjtJQUNMLENBQUM7SUFqRWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrRTVCO0lBQUQsZUFBQztDQWxFRCxBQWtFQyxDQWxFcUMsZ0JBQU0sR0FrRTNDO2tCQWxFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gXCIuLi9IYWxsU2NlbmVcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhaWxWaWV3IGV4dGVuZHMgQmFzZVVJIHtcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfY29pblwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfY29pblwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNSksY2MuZmFkZVRvKDEsMjU1KSkpO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiZmFpbFwiKVxyXG4gICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fZ2V0JykpXHJcbiAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdGYWlsU2hvdycsJ3Nob3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvaW4gPSAwO1xyXG4gICAgc2V0SW5mbyhjb2luOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJmc3didDVZRmNkNXhDZEpNZE1IN01qXCIpO1xyXG4gICAgICAgIHRoaXMuY29pbiA9IGNvaW47XHJcbiAgICAgICAgdGhpcy5hVG9iQW5pbShjb2luKjEuOCk7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwiYnRuX25vcm1hbFwiLGDpooblj5Yke1V0aWxzLmZvcm1hdE51bWJlcihjb2luKX3ph5HluIFgKTtcclxuICAgIH1cclxuICAgICAgICBwcml2YXRlIEZjTWJfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJDY1hhRmhUbUE1M1JLUk1IakpwUU5FMmtkXCIpOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBhVG9iQW5pbShudW06bnVtYmVyKXtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJySkpFREVENHJXRXB0TVBzQWJqXCIpO1xyXG4gICAgICAgIGxldCBhdmVyID0gTWF0aC5jZWlsKG51bS82MCk7XHJcbiAgICAgICAgbGV0IHhuID0gMDtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfY29pblwiLFV0aWxzLmZvcm1hdE51bWJlcigwKSk7XHJcbiAgICAgICAgbGV0IGNiID0gKCk9PntcclxuICAgICAgICAgICAgeG4gKz0gYXZlcjtcclxuICAgICAgICAgICAgaWYoeG4gPj0gbnVtKXtcclxuICAgICAgICAgICAgICAgIHhuID0gbnVtO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKGNiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfY29pblwiLFV0aWxzLmZvcm1hdE51bWJlcih4bikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGNiLDAsNjEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVUkoKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwicnphNnhkYjQ0NlpQem5hUXhHXCIpO1xyXG4gICAgICAgIHRoaXMuc2h1dEFuaW0oKTtcclxuICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UuY3JlYXRlRW5lbXlzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb2luUmV3YXJkKCl7XHJcbiAgICAgICAgbGV0IGNvaW4gPSB0aGlzLmNvaW47XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjb2luXCIpO1xyXG4gICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xyXG4gICAgICAgICAgICBpZihiKSBDaGlja0RhdGEudXNlci5jb2luKz0gY29pblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9nZXRcIjpcclxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRmFpbENsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29pblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgfSwxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidG5fbm9ybWFsJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29pblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=