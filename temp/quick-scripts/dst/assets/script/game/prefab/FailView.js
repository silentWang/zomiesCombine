
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
        this.coin = coin;
        this.aTobAnim(coin * 1.8);
        this.SetText("btn_normal", "\u9886\u53D6" + Utils_1.default.formatNumber(coin) + "\u91D1\u5E01");
    };
    FailView.prototype.FcMb_xxxx_fun = function () { console.log("CcXaFhTmA53RKRMHjJpQNE2kd"); };
    FailView.prototype.aTobAnim = function (num) {
        var _this = this;
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
            case "btn_close":
                this.getCoinReward();
                this.closeUI();
                break;
            case "btn_get":
                WxCenter_1.default.aldReport('FailClick', 'click');
                AdCenter_1.default.Instance().play(function () {
                    _this.getCoinReward();
                    _this.closeUI();
                });
                break;
            case 'btn_normal':
                this.getCoinReward();
                this.closeUI();
                break;
            case "btn_buyfree":
                // to do
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvRmFpbFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBc0VDO1FBN0RXLFVBQUksR0FBRyxDQUFDLENBQUM7O0lBNkRyQixDQUFDO0lBckVHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNsQyxlQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUMvQyxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdELDBCQUFPLEdBQVAsVUFBUSxJQUFXO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIs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LENBdEVxQyxnQkFBTSxHQXNFM0M7a0JBdEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvV3hDZW50ZXJcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4uL0hhbGxTY2VuZVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFpbFZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2NvaW5cIikub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9jb2luXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5mYWRlVG8oMSwyNTUpKSk7XG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiZmFpbFwiKVxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2dldCcpKVxuICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0ZhaWxTaG93Jywnc2hvdycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29pbiA9IDA7XG4gICAgc2V0SW5mbyhjb2luOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuY29pbiA9IGNvaW47XG4gICAgICAgIHRoaXMuYVRvYkFuaW0oY29pbioxLjgpO1xuICAgICAgICB0aGlzLlNldFRleHQoXCJidG5fbm9ybWFsXCIsYOmihuWPliR7VXRpbHMuZm9ybWF0TnVtYmVyKGNvaW4pfemHkeW4gWApO1xuICAgIH1cbiAgICAgICAgcHJpdmF0ZSBGY01iX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiQ2NYYUZoVG1BNTNSS1JNSGpKcFFORTJrZFwiKTsgfVxuXG4gICAgcHJpdmF0ZSBhVG9iQW5pbShudW06bnVtYmVyKXtcbiAgICAgICAgbGV0IGF2ZXIgPSBNYXRoLmNlaWwobnVtLzYwKTtcbiAgICAgICAgbGV0IHhuID0gMDtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoMCkpO1xuICAgICAgICBsZXQgY2IgPSAoKT0+e1xuICAgICAgICAgICAgeG4gKz0gYXZlcjtcbiAgICAgICAgICAgIGlmKHhuID49IG51bSl7XG4gICAgICAgICAgICAgICAgeG4gPSBudW07XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKHhuKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZShjYiwwLDYxKTtcbiAgICB9XG5cbiAgICBjbG9zZVVJKCkge1xuICAgICAgICB0aGlzLnNodXRBbmltKCk7XG4gICAgICAgIEhhbGxTY2VuZS5JbnN0YW5jZS5jcmVhdGVFbmVteXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvaW5SZXdhcmQoKXtcbiAgICAgICAgbGV0IGNvaW4gPSB0aGlzLmNvaW47XG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcbiAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XG4gICAgICAgICAgICBpZihiKSBDaGlja0RhdGEudXNlci5jb2luKz0gY29pblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luUmV3YXJkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2dldFwiOlxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRmFpbENsaWNrJywnY2xpY2snKTtcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luUmV3YXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYnRuX25vcm1hbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luUmV3YXJkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2J1eWZyZWVcIjpcbiAgICAgICAgICAgICAgICAvLyB0byBkb1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19