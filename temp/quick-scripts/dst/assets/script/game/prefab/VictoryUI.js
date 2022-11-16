
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VictoryUI = /** @class */ (function (_super) {
    __extends(VictoryUI, _super);
    function VictoryUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coin = 0;
        return _this;
    }
    VictoryUI.prototype.start = function () {
        var _this = this;
        // this.GetGameObject("lbl_coin").opacity = 0;
        // this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(0.5),cc.fadeTo(1,255)));
        AudioMgr_1.default.Instance().playSFX("win_stage");
        this.GetSkeleton("fx_victory").setAnimation(0, "start", false);
        this.GetSkeleton("fx_victory").setAnimation(1, "idle", true);
        this.GetGameObject("btn_get").active = false;
        var t = 5;
        this.node.runAction(cc.sequence(cc.callFunc(function () {
            _this.SetText("lbl_time", Utils_1.default.getTimeStrByS(t));
            _this.GetGameObject("btn_get").active = t <= 4;
            if (t < 0) {
                _this.getCoinReward();
                _this.closeUI();
            }
            t--;
        }), cc.delayTime(1)).repeat(7));
    };
    VictoryUI.prototype.setInfo = function (coin) {
        this.coin = coin;
        this.SetText("lbl_coin", Utils_1.default.formatNumber(coin * 5));
        this.SetText("btn_normal", "\u9886\u53D6" + Utils_1.default.formatNumber(coin) + "\u91D1\u5E01");
    };
    VictoryUI.prototype.closeUI = function () {
        this.shutAnim();
    };
    VictoryUI.prototype.getCoinReward = function (isdouble) {
        if (isdouble === void 0) { isdouble = false; }
        var coin = isdouble ? this.coin * 2 : this.coin;
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
                this.closeUI();
                AdCenter_1.default.Instance().play(function () {
                    _this.getCoinReward();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFZpY3RvcnlVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBR2hDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFNO0lBQTdDO1FBQUEscUVBNkRDO1FBekNXLFVBQUksR0FBRyxDQUFDLENBQUM7O0lBeUNyQixDQUFDO0lBNURHLHlCQUFLLEdBQUw7UUFBQSxpQkFpQkM7UUFoQkcsOENBQThDO1FBQzlDLDZGQUE2RjtRQUM3RixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxlQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDL0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQztZQUM1QyxJQUFHLENBQUMsR0FBQyxDQUFDLEVBQUU7Z0JBQ0osS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7WUFDRCxDQUFDLEVBQUUsQ0FBQztRQUNSLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBR0QsMkJBQU8sR0FBUCxVQUFRLElBQVc7UUFFZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFDLGlCQUFLLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8saUNBQWEsR0FBckIsVUFBc0IsUUFBZ0I7UUFBaEIseUJBQUEsRUFBQSxnQkFBZ0I7UUFDbEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoRCxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBQyxDQUFDO1lBQ2pFLElBQUcsQ0FBQyxFQUNKO2dCQUNJLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBRyxjQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBRSxFQUFFO29CQUNmLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUNoRDtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsZUFBZTtRQUFuQyxpQkFlQztRQWRHLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07U0FDYjtJQUNMLENBQUM7SUE1RGdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E2RDdCO0lBQUQsZ0JBQUM7Q0E3REQsQUE2REMsQ0E3RHNDLGdCQUFNLEdBNkQ1QztrQkE3RG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWN0b3J5VUkgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9jb2luXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9jb2luXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5mYWRlVG8oMSwyNTUpKSk7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwid2luX3N0YWdlXCIpXHJcbiAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZ4X3ZpY3RvcnlcIikuc2V0QW5pbWF0aW9uKDAsXCJzdGFydFwiLGZhbHNlKTtcclxuICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZnhfdmljdG9yeVwiKS5zZXRBbmltYXRpb24oMSxcImlkbGVcIix0cnVlKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZ2V0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB0ID0gNTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF90aW1lXCIsVXRpbHMuZ2V0VGltZVN0ckJ5Uyh0KSlcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2dldFwiKS5hY3RpdmUgPSB0PD00O1xyXG4gICAgICAgICAgICBpZih0PDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29pblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC0tO1xyXG4gICAgICAgIH0pLGNjLmRlbGF5VGltZSgxKSkucmVwZWF0KDcpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29pbiA9IDA7XHJcbiAgICBzZXRJbmZvKGNvaW46bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29pbiA9IGNvaW47XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoY29pbio1KSk7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwiYnRuX25vcm1hbFwiLGDpooblj5Yke1V0aWxzLmZvcm1hdE51bWJlcihjb2luKX3ph5HluIFgKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVVJKCkge1xyXG4gICAgICAgIHRoaXMuc2h1dEFuaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvaW5SZXdhcmQoaXNkb3VibGUgPSBmYWxzZSl7XHJcbiAgICAgICAgbGV0IGNvaW4gPSBpc2RvdWJsZSA/IHRoaXMuY29pbiAqIDIgOiB0aGlzLmNvaW47XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY29pblwiKTtcclxuICAgICAgICBVdGlscy5mbHlBbmltKDAsdGhpcy5ub2RlLFwiaWNvbl9jb2luXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDUsMTApLDEwMCwoYik9PntcclxuICAgICAgICAgICAgaWYoYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmNvaW4rPSBjb2luO1xyXG4gICAgICAgICAgICAgICAgaWYoRGF0YS51c2VyLmx2Pj0zMClcclxuICAgICAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dpbnRlcnN0aXRpYWxBZCgpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9nZXRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=