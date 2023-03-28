
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
                }, 1);
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
                }, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvU2lnblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLDJDQUFzQztBQUdoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBTTtJQUE1Qzs7SUE2TkEsQ0FBQztpQkE3Tm9CLFFBQVE7SUFDbEIsaUJBQVEsR0FBZjtRQUNJLElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxVQUFRLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDMUQsSUFBSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtvQkFDekMsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQ0k7b0JBQ0QsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2dCQUNELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDakY7aUJBQ0k7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLG9CQUFXLEdBQWxCO1FBQ0ksS0FBSztRQUNMLElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDekMsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFBRSxNQUFNLENBQUMsT0FBTyxD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RCxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDMUQsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUNuQjtnQkFDTCxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztnQkFDaEYsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFVBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMzRCxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3hDO2dCQUNELG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07U0FDYjtJQUNMLENBQUM7O0lBNU5nQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNk41QjtJQUFELGVBQUM7Q0E3TkQsQUE2TkMsQ0E3TnFDLGdCQUFNLEdBNk4zQztrQkE3Tm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICAgIHN0YXRpYyByZWRQb2ludCgpIHtcbiAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoU2lnblZpZXcuY2hlY2tJc1RvZGF5KENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ4dFJzUjJjeHpLZXJmcjhUaXRSOGRuMzRhNkZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrSXNTaG93KCkge1xuICAgICAgICAvL+aWsOeUqOaIt1xuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCA9PSAwKSB7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJINHhhZlNZdHlKNU1UUnhmTVJZclpoUFRDbU5GTnN4XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/lt7Lnu4/nrb7liLBcbiAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2lnbkxheWVyXCIpO1xuICAgIH1cblxuICAgIC8v6L+Z6YeM6YWN572u562+5Yiw5aWW5YqxXG4gICAgZ2V0U2lnbkluZm8oaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDM7XG4gICAgICAgIGlmIChsdiA8IDEpIGx2ID0gMTtcbiAgICAgICAgbGV0IGxpc3QgPSBbXG4gICAgICAgICAgICAvL+S/ruaUueexu+Wei+mcgOimgeebuOW6lOS/ruaUueeVjOmdouWbvuagh1xuICAgICAgICAgICAgeyB0eXBlOiAwLCB2YWx1ZTogQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdikgKiA0fSxcbiAgICAgICAgICAgIHsgdHlwZTogMSwgdmFsdWU6IDIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogMCwgdmFsdWU6IENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpICogOCB9LFxuICAgICAgICAgICAgeyB0eXBlOiAwLCB2YWx1ZTogQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdikgKiAxMiB9LFxuICAgICAgICAgICAgeyB0eXBlOiAxLCB2YWx1ZTogNSB9LFxuICAgICAgICAgICAgeyB0eXBlOiAxLCB2YWx1ZTogOCB9LFxuICAgICAgICAgICAgeyB0eXBlOiAxLCB2YWx1ZTogMTAgfSxcbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gbGlzdFtpbmRleF07XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrSXNUb2RheSh0aW1lKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgICAgIHZhciBkYXRlTm93ID0gbmV3IERhdGUoVXRpbHMuZ2V0U2VydmVyVGltZSgpKTtcbiAgICAgICAgbGV0IGJOZXdEYXkgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT0gZGF0ZU5vdy5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSA9PSBkYXRlTm93LmdldE1vbnRoKCkgJiZcbiAgICAgICAgZGF0ZS5nZXREYXRlKCkgPT0gZGF0ZU5vdy5nZXREYXRlKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ6ZWpqd1RcIik7XG4gICAgICAgICAgICBiTmV3RGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIks4Wkh3UGRlckM4RUduNHNLS21oSndpYmhiSHBkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiTmV3RGF5O1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpXG4gICAge1xuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLmhpZGVHcmlkQWQoKTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVUkoKSB7XG4gICAgICAgIGxldCBpdGVtX2RheXMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RheXNcIik7XG5cbiAgICAgICAgbGV0IGJTaWduVG9keSA9IGZhbHNlO1xuICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcbiAgICAgICAgICAgIGlmIChTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xuICAgICAgICAgICAgICAgIGJTaWduVG9keSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2lnbl9pbmRleCA9IENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXggJSA3O1xuXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIllEUjRteDZYNTZiWVluYktcIik7XG4gICAgICAgIGlmIChzaWduX2luZGV4ID09IDAgJiYgYlNpZ25Ub2R5KVxuICAgICAgICAgICAgc2lnbl9pbmRleCA9IDc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyArK2kpIHtcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gaXRlbV9kYXlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNldmVuZGF5X2NoZWNrZWRcIikuYWN0aXZlID0gaSA8IHNpZ25faW5kZXg7XG5cbiAgICAgICAgICAgIGxldCB0bXAgPSB0aGlzLmdldFNpZ25JbmZvKGkpO1xuXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRtcC52YWx1ZSkgKyBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiWGN5YjJjTnhaUHJzY0Ryd0JaWnlheVJTYmpENkplTVwiKTtcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IHRtcC52YWx1ZSArIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8zdGltZXNcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8ydGltZXNcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9zaWduXCIpLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChiU2lnblRvZHkpIHtcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fMnRpbWVzXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fMnRpbWVzXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzJ0aW1lc1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0QnV0dG9uKFwiYnRuXzJ0aW1lc1wiKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl8zdGltZXNcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fM3RpbWVzXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwidFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEJ1dHRvbihcImJ0bl8zdGltZXNcIikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fc2lnblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgICAgICBwcml2YXRlIGRZZFlfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJOZkc2ZVFFZWF3czhtTmFGNWRUWHg2YTN4Nmg4ZnJcIik7IH1cblxuICAgIHByaXZhdGUgZ2V0VG9kYXlTaWduKCkge1xuICAgICAgICBsZXQgYlNpZ25Ub2R5ID0gZmFsc2U7XG4gICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgIT0gMCkge1xuICAgICAgICAgICAgaWYgKFNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XG4gICAgICAgICAgICAgICAgYlNpZ25Ub2R5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXg7XG4gICAgICAgIGlmIChiU2lnblRvZHkpXG4gICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTaWduSW5mbyhpbmRleCAlIDcpO1xuICAgIH1cblxuICAgIGZsYXlBbmltKGJlaXNodTogbnVtYmVyKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmdldFRvZGF5U2lnbigpO1xuICAgICAgICBpZiAodG1wLnR5cGUgPT0gMCkge1xuXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJXdDJoQnB3N2JmQ1N0M0dZaE1td1Bkamg3Q0JcIik7XG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNvaW5cIik7XG4gICAgICAgICAgICBVdGlscy5mbHlBbmltKDAsIHRoaXMubm9kZSwgXCJpY29uX2NvaW5cIiwgNSwgMjAwLCAoYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gdG1wLnZhbHVlICogYmVpc2h1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiZ2VtXCIpO1xuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiUGpqeEFhS2hcIik7XG4gICAgICAgICAgICBVdGlscy5mbHlBbmltKDEsIHRoaXMubm9kZSwgXCJpY29uX2dlbVwiLCA1LCAyMDAsIChiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ2VtICs9IHRtcC52YWx1ZSAqIGJlaXNodTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fMnRpbWVzXCI6XG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJYaXNzUW5La1c0Sjd0OHhKQkRXM1Jwa2pkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sMSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fM3RpbWVzXCI6XG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInl5RnlFSEV3enRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVNpZ25WaWV3LmNoZWNrSXNUb2RheShDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwxKVxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImVuNjdadHJtRzVpNFI1ZjRSQTJ4WGN0a0VCWGE1NVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2lnblwiOlxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fYmVpc3UgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFTaWduVmlldy5jaGVja0lzVG9kYXkoQ2hpY2tEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==