
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/VictoryUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdcb9Wp8YxFErWZb5qYmaOU', 'VictoryUI');
// script/game/prefab/VictoryUI.ts

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
var HallScene_1 = require("../HallScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VictoryUI = /** @class */ (function (_super) {
    __extends(VictoryUI, _super);
    function VictoryUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coin = 0;
        return _this;
    }
    VictoryUI.prototype.start = function () {
        // this.GetGameObject("lbl_coin").opacity = 0;
        // this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(0.5),cc.fadeTo(1,255)));
        AudioMgr_1.default.Instance().playSFX("win_stage");
        this.GetSkeleton("fx_victory").setAnimation(0, "start", false);
        this.GetSkeleton("fx_victory").setAnimation(1, "idle", true);
        Utils_1.default.playBreath(this.GetGameObject('btn_get'));
    };
    VictoryUI.prototype.setInfo = function (coin) {
        this.coin = coin;
        this.SetText("lbl_coin", Utils_1.default.formatNumber(coin * 2));
        this.SetText("btn_normal", "\u9886\u53D6" + Utils_1.default.formatNumber(coin) + "\u91D1\u5E01");
    };
    VictoryUI.prototype.closeUI = function () {
        this.shutAnim();
        HallScene_1.default.Instance.createwave();
    };
    VictoryUI.prototype.getCoinReward = function (isdouble) {
        if (isdouble === void 0) { isdouble = false; }
        var coin = isdouble ? this.coin * Utils_1.default.getRandom(1.2, 2) : this.coin;
        AudioMgr_1.default.Instance().playSFX("coin");
        Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
            if (b) {
                Data_1.default.user.coin += coin;
                if (Data_1.default.user.lv >= 30)
                    AdCenter_1.default.Instance().showinterstitialAd();
            }
        });
    };
    VictoryUI.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_get":
                AdCenter_1.default.Instance().play(function () {
                    _this.getCoinReward();
                    _this.closeUI();
                });
                break;
            case "btn_normal":
                this.getCoinReward();
                this.closeUI();
                break;
        }
    };
    VictoryUI = __decorate([
        ccclass
    ], VictoryUI);
    return VictoryUI;
}(BaseUI_1.default));
exports.default = VictoryUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFZpY3RvcnlVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLDBDQUFxQztBQUcvQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQW9EQztRQTFDVyxVQUFJLEdBQUcsQ0FBQyxDQUFDOztJQTBDckIsQ0FBQztJQW5ERyx5QkFBSyxHQUFMO1FBQ0ksOENBQThDO1FBQzlDLDZGQUE2RjtRQUM3RixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUdELDJCQUFPLEdBQVAsVUFBUSxJQUFXO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUMsZUFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBQyxpQkFBSyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVPLGlDQUFhLEdBQXJCLFVBQXNCLFFBQWdCO1FBQWhCLHlCQUFBLEVBQUEsZ0JBQWdCO1FBQ2xDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyRSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBQyxDQUFDO1lBQ2pFLElBQUcsQ0FBQyxFQUNKO2dCQUNJLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztnQkFDdkIsSUFBRyxjQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFO29CQUNqQixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDaEQ7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLGVBQWU7UUFBbkMsaUJBZUM7UUFkRyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssU0FBUztnQkFDVixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQW5EZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW9EN0I7SUFBRCxnQkFBQztDQXBERCxBQW9EQyxDQXBEc0MsZ0JBQU0sR0FvRDVDO2tCQXBEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvRGF0YVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWN0b3J5VUkgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9jb2luXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9jb2luXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5mYWRlVG8oMSwyNTUpKSk7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwid2luX3N0YWdlXCIpXHJcbiAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZ4X3ZpY3RvcnlcIikuc2V0QW5pbWF0aW9uKDAsXCJzdGFydFwiLGZhbHNlKTtcclxuICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZnhfdmljdG9yeVwiKS5zZXRBbmltYXRpb24oMSxcImlkbGVcIix0cnVlKTtcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2dldCcpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29pbiA9IDA7XHJcbiAgICBzZXRJbmZvKGNvaW46bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29pbiA9IGNvaW47XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoY29pbioyKSk7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwiYnRuX25vcm1hbFwiLGDpooblj5Yke1V0aWxzLmZvcm1hdE51bWJlcihjb2luKX3ph5HluIFgKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVVJKCkge1xyXG4gICAgICAgIHRoaXMuc2h1dEFuaW0oKTtcclxuICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UuY3JlYXRld2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29pblJld2FyZChpc2RvdWJsZSA9IGZhbHNlKXtcclxuICAgICAgICBsZXQgY29pbiA9IGlzZG91YmxlID8gdGhpcy5jb2luICogVXRpbHMuZ2V0UmFuZG9tKDEuMiwyKSA6IHRoaXMuY29pbjtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjb2luXCIpO1xyXG4gICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xyXG4gICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuY29pbiArPSBjb2luO1xyXG4gICAgICAgICAgICAgICAgaWYoRGF0YS51c2VyLmx2ID49IDMwKVxyXG4gICAgICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd2ludGVyc3RpdGlhbEFkKCk7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2dldFwiOlxyXG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=