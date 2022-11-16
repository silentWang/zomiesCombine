
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/SignUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNpZ25VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFNO0lBQTFDOztJQWlOQSxDQUFDO2VBak5vQixNQUFNO0lBQ2hCLGFBQU0sR0FBYjtRQUNJLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNuQyxJQUFJLFFBQU0sQ0FBQyxXQUFXLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ2xELElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtvQkFDcEMsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQ0k7b0JBQ0QsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0o7aUJBQ0k7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGdCQUFTLEdBQWhCO1FBQ0ksS0FBSztRQUNMLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUNwQyxPQUFPO1NBQ1Y7UUFFRCxNQUFNO1FBQ04sSUFBSSxRQUFNLENBQUMsV0FBVyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2xELE9BQU87U0FDVjtRQUNELGVBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FB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QyxDQUFBO2dCQUNGLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQU0sQ0FBQyxXQUFXLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25ELGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNuQztnQkFDRCxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07U0FDYjtJQUNMLENBQUM7O0lBaE5nQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaU4xQjtJQUFELGFBQUM7Q0FqTkQsQUFpTkMsQ0FqTm1DLGdCQUFNLEdBaU56QztrQkFqTm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25VSSBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBzdGF0aWMgcmVkZG90KCkge1xyXG4gICAgICAgIGlmIChEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKFNpZ25VSS5jaGVja0lzVG9keShEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKERhdGEudXNlci5zaWduaW5mby5zaWduX2JlaXN1ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGVja1Nob3coKSB7XHJcbiAgICAgICAgLy/mlrDnlKjmiLdcclxuICAgICAgICBpZiAoRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+W3sue7j+etvuWIsFxyXG4gICAgICAgIGlmIChTaWduVUkuY2hlY2tJc1RvZHkoRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9TaWduTGF5ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ov5nph4zphY3nva7nrb7liLDlpZblirFcclxuICAgIGdldFNpZ25WYWx1ZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGx2ID0gRGF0YS51c2VyLkdldE1heEx2KCkgLSAzO1xyXG4gICAgICAgIGlmIChsdiA8IDEpIGx2ID0gMTtcclxuICAgICAgICBsZXQgbGlzdCA9IFtcclxuICAgICAgICAgICAgLy/kv67mlLnnsbvlnovpnIDopoHnm7jlupTkv67mlLnnlYzpnaLlm77moIdcclxuICAgICAgICAgICAgeyB0eXBlOiAwLCB2YWx1ZTogRGF0YS51c2VyLkJ1eVByaWNlKGx2KSAqIDR9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDEsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMCwgdmFsdWU6IERhdGEudXNlci5CdXlQcmljZShsdikgKiA4IH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMCwgdmFsdWU6IERhdGEudXNlci5CdXlQcmljZShsdikgKiAxMiB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IDEsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogMSwgdmFsdWU6IDggfSxcclxuICAgICAgICAgICAgeyB0eXBlOiAxLCB2YWx1ZTogMTAgfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgcmV0dXJuIGxpc3RbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGVja0lzVG9keSh0aW1lKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICAgICAgICB2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKFV0aWxzLmdldFNlcnZlclRpbWUoKSk7XHJcbiAgICAgICAgbGV0IGJOZXdEYXkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA9PSBkYXRlTm93LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgZGF0ZS5nZXRNb250aCgpID09IGRhdGVOb3cuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICBkYXRlLmdldERhdGUoKSA9PSBkYXRlTm93LmdldERhdGUoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBiTmV3RGF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJOZXdEYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVUkoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1fZGF5cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZGF5c1wiKTtcclxuXHJcbiAgICAgICAgbGV0IGJTaWduVG9keSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKFNpZ25VSS5jaGVja0lzVG9keShEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl90aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgYlNpZ25Ub2R5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNpZ25faW5kZXggPSBEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCAlIDc7XHJcblxyXG4gICAgICAgIGlmIChzaWduX2luZGV4ID09IDAgJiYgYlNpZ25Ub2R5KVxyXG4gICAgICAgICAgICBzaWduX2luZGV4ID0gNztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBpdGVtX2RheXMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZXZlbmRheV9jaGVja2VkXCIpLmFjdGl2ZSA9IGkgPCBzaWduX2luZGV4O1xyXG5cclxuICAgICAgICAgICAgbGV0IHRtcCA9IHRoaXMuZ2V0U2lnblZhbHVlKGkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRtcC52YWx1ZSkgKyBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSB0bXAudmFsdWUgKyBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fMnRpbWVzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9zaWduXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYlNpZ25Ub2R5KSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fMnRpbWVzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fYmVpc3UgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzJ0aW1lc1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzJ0aW1lc1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRCdXR0b24oXCJidG5fMnRpbWVzXCIpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuXzN0aW1lc1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRCdXR0b24oXCJidG5fM3RpbWVzXCIpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fc2lnblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fM3RpbWVzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKERhdGEudXNlci5zaWduaW5mbylcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvZHlTaWduKCkge1xyXG4gICAgICAgIGxldCBiU2lnblRvZHkgPSBmYWxzZTtcclxuICAgICAgICBpZiAoRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChTaWduVUkuY2hlY2tJc1RvZHkoRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fdGltZSkpIHtcclxuICAgICAgICAgICAgICAgIGJTaWduVG9keSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IERhdGEudXNlci5zaWduaW5mby5zaWduX2luZGV4O1xyXG4gICAgICAgIGlmIChiU2lnblRvZHkpXHJcbiAgICAgICAgICAgIGluZGV4LS07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2lnblZhbHVlKGluZGV4ICUgNyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmxheUFuaW0oYmVpc2h1OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdG1wID0gdGhpcy5nZXRUb2R5U2lnbigpO1xyXG4gICAgICAgIGlmICh0bXAudHlwZSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjb2luXCIpO1xyXG4gICAgICAgICAgICBVdGlscy5mbHlBbmltKDAsIHRoaXMubm9kZSwgXCJpY29uX2NvaW5cIiwgNSwgMjAwLCAoYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIuY29pbiArPSB0bXAudmFsdWUgKiBiZWlzaHU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiZ2VtXCIpO1xyXG4gICAgICAgICAgICBVdGlscy5mbHlBbmltKDEsIHRoaXMubm9kZSwgXCJpY29uX2dlbVwiLCA1LCAyMDAsIChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGEudXNlci5nZW0gKz0gdG1wLnZhbHVlICogYmVpc2h1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fMnRpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghU2lnblVJLmNoZWNrSXNUb2R5KERhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fM3RpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9iZWlzdSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxheUFuaW0oMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghU2lnblVJLmNoZWNrSXNUb2R5KERhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIuc2lnbmluZm8uc2lnbl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2lnblwiOlxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25fYmVpc3UgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGF5QW5pbSgxKTtcclxuICAgICAgICAgICAgICAgIGlmICghU2lnblVJLmNoZWNrSXNUb2R5KERhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLnNpZ25pbmZvLnNpZ25faW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5zaWduaW5mby5zaWduX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==