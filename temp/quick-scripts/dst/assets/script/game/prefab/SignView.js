
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
                });
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
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNpZ25WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQU07SUFBNUM7O0lBOE1BLENBQUM7aUJBOU1vQixRQUFRO0lBQ2xCLGlCQUFRLEdBQWY7UUFDSSxJQUFJLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksVUFBUSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzFELElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7b0JBQ3pDLE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUNJO29CQUNELE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO2lCQUNJO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQkFBVyxHQUFsQjtRQUNJLEtBQUs7UUFDTCxJQUFJLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3pDLE9BQU87U0FDVjtRQUVELE1BQU07UUFDTixJQUFJLFVBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzFELE9BQU87U0FDVjtRQUNELGVBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtC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QVU7Z0JBQ1gsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxVQUFRLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDM0QsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUN4QztnQkFDRCxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixNQUFNO1NBQ2I7SUFDTCxDQUFDOztJQTdNZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThNNUI7SUFBRCxlQUFDO0NBOU1ELEFBOE1DLENBOU1xQyxnQkFBTSxHQThNM0M7a0JBOU1vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xyXG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblZpZXcgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgc3RhdGljIHJlZFBvaW50KCkge1xyXG4gICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgIT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoU2lnblZpZXcuY2hlY2tJc1RvZGF5KENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGVja0lzU2hvdygpIHtcclxuICAgICAgICAvL+aWsOeUqOaIt1xyXG4gICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4ID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/lt7Lnu4/nrb7liLBcclxuICAgICAgICBpZiAoU2lnblZpZXcuY2hlY2tJc1RvZGF5KENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9TaWduTGF5ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ov5nph4zphY3nva7nrb7liLDlpZblirFcclxuICAgIGdldFNpZ25JbmZvKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDM7XHJcbiAgICAgICAgaWYgKGx2IDwgMSkgbHYgPSAxO1xyXG4gICAgICAgIGxldCBsaXN0ID0gW1xyXG4gICAgICAgICAgICAvL+S/ruaUueexu+Wei+mcgOimgeebuOW6lOS/ruaUueeVjOmdouWbvuagh1xyXG4gICAgICAgICAgICB7IHR5cGU6IDAsIHZhbHVlOiBDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKGx2KSAqIDR9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDEsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMCwgdmFsdWU6IENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpICogOCB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDAsIHZhbHVlOiBDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKGx2KSAqIDEyIH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMSwgdmFsdWU6IDUgfSxcclxuICAgICAgICAgICAgeyB0eXBlOiAxLCB2YWx1ZTogOCB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDEsIHZhbHVlOiAxMCB9LFxyXG4gICAgICAgIF1cclxuICAgICAgICByZXR1cm4gbGlzdFtpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrSXNUb2RheSh0aW1lKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICAgICAgICB2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKFV0aWxzLmdldFNlcnZlclRpbWUoKSk7XHJcbiAgICAgICAgbGV0IGJOZXdEYXkgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID09IGRhdGVOb3cuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSA9PSBkYXRlTm93LmdldE1vbnRoKCkgJiZcclxuICAgICAgICBkYXRlLmdldERhdGUoKSA9PSBkYXRlTm93LmdldERhdGUoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBiTmV3RGF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJOZXdEYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVUkoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1fZGF5cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZGF5c1wiKTtcclxuXHJcbiAgICAgICAgbGV0IGJTaWduVG9keSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgIT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoU2lnblZpZXcuY2hlY2tJc1RvZGF5KENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgICAgIGJTaWduVG9keSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaWduX2luZGV4ID0gQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCAlIDc7XHJcblxyXG4gICAgICAgIGlmIChzaWduX2luZGV4ID09IDAgJiYgYlNpZ25Ub2R5KVxyXG4gICAgICAgICAgICBzaWduX2luZGV4ID0gNztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBpdGVtX2RheXMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZXZlbmRheV9jaGVja2VkXCIpLmFjdGl2ZSA9IGkgPCBzaWduX2luZGV4O1xyXG5cclxuICAgICAgICAgICAgbGV0IHRtcCA9IHRoaXMuZ2V0U2lnbkluZm8oaSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodG1wLnZhbHVlKSArIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IHRtcC52YWx1ZSArIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fM3RpbWVzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8ydGltZXNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3NpZ25cIikuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChiU2lnblRvZHkpIHtcclxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fYmVpc3UgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzJ0aW1lc1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fYmVpc3UgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzJ0aW1lc1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzJ0aW1lc1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRCdXR0b24oXCJidG5fMnRpbWVzXCIpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRCdXR0b24oXCJidG5fM3RpbWVzXCIpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fc2lnblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fM3RpbWVzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VG9kYXlTaWduKCkge1xyXG4gICAgICAgIGxldCBiU2lnblRvZHkgPSBmYWxzZTtcclxuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBiU2lnblRvZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4O1xyXG4gICAgICAgIGlmIChiU2lnblRvZHkpXHJcbiAgICAgICAgICAgIGluZGV4LS07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2lnbkluZm8oaW5kZXggJSA3KTtcclxuICAgIH1cclxuXHJcbiAgICBmbGF5QW5pbShiZWlzaHU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmdldFRvZGF5U2lnbigpO1xyXG4gICAgICAgIGlmICh0bXAudHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcclxuICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgwLCB0aGlzLm5vZGUsIFwiaWNvbl9jb2luXCIsIDUsIDIwMCwgKGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSB0bXAudmFsdWUgKiBiZWlzaHU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImdlbVwiKTtcclxuICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgxLCB0aGlzLm5vZGUsIFwiaWNvbl9nZW1cIiwgNSwgMjAwLCAoYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5nZW0gKz0gdG1wLnZhbHVlICogYmVpc2h1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuXzJ0aW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghU2lnblZpZXcuY2hlY2tJc1RvZGF5KENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fM3RpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGF5QW5pbSgzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9zaWduXCI6XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=