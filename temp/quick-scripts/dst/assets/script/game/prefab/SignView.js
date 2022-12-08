
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
    SignView.reddot = function () {
        if (ChickData_1.default.user.signinfo.sign_time != 0) {
            if (SignView_1.checkIsTody(ChickData_1.default.user.signinfo.sign_time)) {
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
    SignView.checkShow = function () {
        //新用户
        if (ChickData_1.default.user.signinfo.sign_index == 0) {
            return;
        }
        //已经签到
        if (SignView_1.checkIsTody(ChickData_1.default.user.signinfo.sign_time)) {
            return;
        }
        Utils_1.default.createUI("prefab/SignLayer");
    };
    //这里配置签到奖励
    SignView.prototype.getSignValue = function (index) {
        var lv = ChickData_1.default.user.GetMaxLv() - 3;
        if (lv < 1)
            lv = 1;
        var list = [
            //修改类型需要相应修改界面图标
            { type: 0, value: ChickData_1.default.user.BuyPrice(lv) * 4 },
            { type: 1, value: 2 },
            { type: 0, value: ChickData_1.default.user.BuyPrice(lv) * 8 },
            { type: 0, value: ChickData_1.default.user.BuyPrice(lv) * 12 },
            { type: 1, value: 5 },
            { type: 1, value: 8 },
            { type: 1, value: 10 },
        ];
        return list[index];
    };
    SignView.checkIsTody = function (time) {
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
            if (SignView_1.checkIsTody(ChickData_1.default.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }
        var sign_index = ChickData_1.default.user.signinfo.sign_index % 7;
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
    SignView.prototype.getTodySign = function () {
        var bSignTody = false;
        if (ChickData_1.default.user.signinfo.sign_time != 0) {
            if (SignView_1.checkIsTody(ChickData_1.default.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }
        var index = ChickData_1.default.user.signinfo.sign_index;
        if (bSignTody)
            index--;
        return this.getSignValue(index % 7);
    };
    SignView.prototype.flayAnim = function (beishu) {
        var tmp = this.getTodySign();
        if (tmp.type == 0) {
            AudioMgr_1.default.Instance().playSFX("coin");
            Utils_1.default.flyAnim(0, this.node, "icon_coin", 5, 200, function (b) {
                if (b) {
                    ChickData_1.default.user.coin += tmp.value * beishu;
                }
            });
        }
        else {
            AudioMgr_1.default.Instance().playSFX("gem");
            Utils_1.default.flyAnim(1, this.node, "icon_gem", 5, 200, function (b) {
                if (b) {
                    ChickData_1.default.user.gem += tmp.value * beishu;
                }
            });
        }
    };
    SignView.prototype.onBtnClicked = function (event, customEventData) {
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
                        ChickData_1.default.user.signinfo.sign_beisu = 2;
                        _this.flayAnim(2);
                        if (!SignView_1.checkIsTody(ChickData_1.default.user.signinfo.sign_time)) {
                            ChickData_1.default.user.signinfo.sign_index++;
                        }
                        ChickData_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                        _this.updateUI();
                    }
                });
                break;
            case "btn_3times":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        ChickData_1.default.user.signinfo.sign_beisu = 3;
                        _this.flayAnim(3);
                        if (!SignView_1.checkIsTody(ChickData_1.default.user.signinfo.sign_time)) {
                            ChickData_1.default.user.signinfo.sign_index++;
                        }
                        ChickData_1.default.user.signinfo.sign_time = Utils_1.default.getServerTime();
                        _this.updateUI();
                    }
                });
                break;
            case "btn_sign":
                ChickData_1.default.user.signinfo.sign_beisu = 1;
                this.flayAnim(1);
                if (!SignView_1.checkIsTody(ChickData_1.default.user.signinfo.sign_time)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNpZ25WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQU07SUFBNUM7O0lBZ05BLENBQUM7aUJBaE5vQixRQUFRO0lBQ2xCLGVBQU0sR0FBYjtRQUNJLElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxVQUFRLENBQUMsV0FBVyxDQUFDLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDekQsSUFBSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtvQkFDekMsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQ0k7b0JBQ0QsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0o7aUJBQ0k7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGtCQUFTLEdBQWhCO1FBQ0ksS0FBSztRQUNMLElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDekMsT0FBTztTQUNWO1FBRUQsTUFBTTtRQUNOLElBQUksVUFBUSxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekQsT0FBTztTQUNWO1FBQ0QsZUFBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0Is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VTtnQkFDWCxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFVBQVEsQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMxRCxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3hDO2dCQUNELG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07U0FDYjtJQUNMLENBQUM7O0lBL01nQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ041QjtJQUFELGVBQUM7Q0FoTkQsQUFnTkMsQ0FoTnFDLGdCQUFNLEdBZ04zQztrQkFoTm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduVmlldyBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBzdGF0aWMgcmVkZG90KCkge1xyXG4gICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgIT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoU2lnblZpZXcuY2hlY2tJc1RvZHkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fYmVpc3UgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrU2hvdygpIHtcclxuICAgICAgICAvL+aWsOeUqOaIt1xyXG4gICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4ID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/lt7Lnu4/nrb7liLBcclxuICAgICAgICBpZiAoU2lnblZpZXcuY2hlY2tJc1RvZHkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1NpZ25MYXllclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i/memHjOmFjee9ruetvuWIsOWlluWKsVxyXG4gICAgZ2V0U2lnblZhbHVlKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5HZXRNYXhMdigpIC0gMztcclxuICAgICAgICBpZiAobHYgPCAxKSBsdiA9IDE7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXHJcbiAgICAgICAgICAgIC8v5L+u5pS557G75Z6L6ZyA6KaB55u45bqU5L+u5pS555WM6Z2i5Zu+5qCHXHJcbiAgICAgICAgICAgIHsgdHlwZTogMCwgdmFsdWU6IENoaWNrRGF0YS51c2VyLkJ1eVByaWNlKGx2KSAqIDR9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDEsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMCwgdmFsdWU6IENoaWNrRGF0YS51c2VyLkJ1eVByaWNlKGx2KSAqIDggfSxcclxuICAgICAgICAgICAgeyB0eXBlOiAwLCB2YWx1ZTogQ2hpY2tEYXRhLnVzZXIuQnV5UHJpY2UobHYpICogMTIgfSxcclxuICAgICAgICAgICAgeyB0eXBlOiAxLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDEsIHZhbHVlOiA4IH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMSwgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIHJldHVybiBsaXN0W2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tJc1RvZHkodGltZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodGltZSk7XHJcbiAgICAgICAgdmFyIGRhdGVOb3cgPSBuZXcgRGF0ZShVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpO1xyXG4gICAgICAgIGxldCBiTmV3RGF5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT0gZGF0ZU5vdy5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgoKSA9PSBkYXRlTm93LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgZGF0ZS5nZXREYXRlKCkgPT0gZGF0ZU5vdy5nZXREYXRlKClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgYk5ld0RheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiTmV3RGF5O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIGxldCBpdGVtX2RheXMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RheXNcIik7XHJcblxyXG4gICAgICAgIGxldCBiU2lnblRvZHkgPSBmYWxzZTtcclxuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2R5KENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgICAgIGJTaWduVG9keSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaWduX2luZGV4ID0gQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCAlIDc7XHJcblxyXG4gICAgICAgIGlmIChzaWduX2luZGV4ID09IDAgJiYgYlNpZ25Ub2R5KVxyXG4gICAgICAgICAgICBzaWduX2luZGV4ID0gNztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBpdGVtX2RheXMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZXZlbmRheV9jaGVja2VkXCIpLmFjdGl2ZSA9IGkgPCBzaWduX2luZGV4O1xyXG5cclxuICAgICAgICAgICAgbGV0IHRtcCA9IHRoaXMuZ2V0U2lnblZhbHVlKGkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRtcC52YWx1ZSkgKyBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSB0bXAudmFsdWUgKyBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fMnRpbWVzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9zaWduXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYlNpZ25Ub2R5KSB7XHJcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8ydGltZXNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8ydGltZXNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8ydGltZXNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0QnV0dG9uKFwiYnRuXzJ0aW1lc1wiKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8zdGltZXNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8zdGltZXNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0QnV0dG9uKFwiYnRuXzN0aW1lc1wiKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3NpZ25cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvZHlTaWduKCkge1xyXG4gICAgICAgIGxldCBiU2lnblRvZHkgPSBmYWxzZTtcclxuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2R5KENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgICAgIGJTaWduVG9keSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXg7XHJcbiAgICAgICAgaWYgKGJTaWduVG9keSlcclxuICAgICAgICAgICAgaW5kZXgtLTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTaWduVmFsdWUoaW5kZXggJSA3KTtcclxuICAgIH1cclxuXHJcbiAgICBmbGF5QW5pbShiZWlzaHU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmdldFRvZHlTaWduKCk7XHJcbiAgICAgICAgaWYgKHRtcC50eXBlID09IDApIHtcclxuXHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImNvaW5cIik7XHJcbiAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCwgdGhpcy5ub2RlLCBcImljb25fY29pblwiLCA1LCAyMDAsIChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gdG1wLnZhbHVlICogYmVpc2h1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImdlbVwiKTtcclxuICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgxLCB0aGlzLm5vZGUsIFwiaWNvbl9nZW1cIiwgNSwgMjAwLCAoYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5nZW0gKz0gdG1wLnZhbHVlICogYmVpc2h1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fMnRpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGF5QW5pbSgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFTaWduVmlldy5jaGVja0lzVG9keShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuXzN0aW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghU2lnblZpZXcuY2hlY2tJc1RvZHkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9zaWduXCI6XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVNpZ25WaWV3LmNoZWNrSXNUb2R5KENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==