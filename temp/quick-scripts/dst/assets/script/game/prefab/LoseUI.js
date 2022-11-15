
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/LoseUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var Data_1 = require("../../manager/Data");
var WxCenter_1 = require("../../manager/WxCenter");
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
                WxCenter_1.default.showRewardedVideoAd(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXExvc2VVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsMkNBQXNDO0FBQ3RDLG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBR2hDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFNO0lBQTFDO1FBQUEscUVBeURDO1FBbkNXLFVBQUksR0FBRyxDQUFDLENBQUM7O0lBbUNyQixDQUFDO0lBeERHLHNCQUFLLEdBQUw7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTdDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25DLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLGVBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMzQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUUsQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDLGVBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMvQyxJQUFHLENBQUMsR0FBQyxDQUFDLEVBQUU7Z0JBQ0osS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7WUFDRCxDQUFDLEVBQUUsQ0FBQztRQUNSLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBR0Qsd0JBQU8sR0FBUCxVQUFRLElBQVc7UUFFZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFDLGlCQUFLLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0Qsd0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sOEJBQWEsR0FBckI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxVQUFDLENBQUM7WUFDakUsSUFBRyxDQUFDO2dCQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFHLElBQUksQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw2QkFBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLGVBQWU7UUFBbkMsaUJBZUM7UUFkRyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssU0FBUztnQkFDVixrQkFBUSxDQUFDLG1CQUFtQixDQUFDO29CQUN6QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07U0FDYjtJQUNMLENBQUM7SUF4RGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F5RDFCO0lBQUQsYUFBQztDQXpERCxBQXlEQyxDQXpEbUMsZ0JBQU0sR0F5RHpDO2tCQXpEb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvc2VVSSBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2NvaW5cIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2NvaW5cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmZhZGVUbygxLDI1NSkpKTtcclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2dldFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiZmFpbFwiKVxyXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJmeF92aWN0b3J5XCIpLnNldEFuaW1hdGlvbigwLFwic3RhcnRcIixmYWxzZSk7XHJcbiAgICAgICAgbGV0IHQgPSA1O1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS1cIix0LFV0aWxzLmdldFRpbWVTdHJCeVModCkpXHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9nZXRcIikuYWN0aXZlID0gdDw9NDtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVcIixVdGlscy5nZXRUaW1lU3RyQnlTKHQpKVxyXG4gICAgICAgICAgICBpZih0PDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29pblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC0tO1xyXG4gICAgICAgIH0pLGNjLmRlbGF5VGltZSgxKSkucmVwZWF0KDcpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29pbiA9IDA7XHJcbiAgICBzZXRJbmZvKGNvaW46bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29pbiA9IGNvaW47XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoY29pbio1KSk7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwiYnRuX25vcm1hbFwiLGDpooblj5Yke1V0aWxzLmZvcm1hdE51bWJlcihjb2luKX3ph5HluIFgKTtcclxuICAgIH1cclxuICAgIGNsb3NlVUkoKSB7XHJcbiAgICAgICAgdGhpcy5zaHV0QW5pbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29pblJld2FyZCgpe1xyXG4gICAgICAgIGxldCBjb2luID0gdGhpcy5jb2luO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImNvaW5cIik7XHJcbiAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XHJcbiAgICAgICAgICAgIGlmKGIpIERhdGEudXNlci5jb2luKz0gY29pblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2dldFwiOlxyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuc2hvd1Jld2FyZGVkVmlkZW9BZCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29pblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidG5fbm9ybWFsJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29pblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=