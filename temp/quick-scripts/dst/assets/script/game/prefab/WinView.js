
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/WinView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffa08746MdNVbqeCZZG4PO8', 'WinView');
// script/game/prefab/WinView.ts

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
var WinView = /** @class */ (function (_super) {
    __extends(WinView, _super);
    function WinView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coin = 0;
        return _this;
    }
    WinView.prototype.start = function () {
        AudioMgr_1.default.Instance().playMX("win_stage");
        this.GetSkeleton("fx_victory").setAnimation(0, "start", false);
        this.GetSkeleton("fx_victory").setAnimation(1, "idle", true);
        Utils_1.default.playBreath(this.GetGameObject('btn_get'));
        WxCenter_1.default.aldReport('PassShow', 'show');
    };
    WinView.prototype.setInfo = function (coin) {
        this.coin = coin;
        this.aTobAnim(coin * 2);
        this.SetText("btn_normal", "\u9886\u53D6" + Utils_1.default.formatNumber(coin) + "\u91D1\u5E01");
    };
    WinView.prototype.aTobAnim = function (num) {
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
    WinView.prototype.closeUI = function () {
        this.shutAnim();
        HallScene_1.default.Instance.createEnemys();
    };
    WinView.prototype.getCoinReward = function (isdouble) {
        if (isdouble === void 0) { isdouble = false; }
        var coin = isdouble ? this.coin * Utils_1.default.getRandom(1.2, 2) : this.coin;
        AudioMgr_1.default.Instance().playMX("coin");
        Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
            if (b) {
                ChickData_1.default.user.coin += coin;
            }
        });
    };
    WinView.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
                this.getCoinReward();
                this.closeUI();
                break;
            case "btn_get":
                WxCenter_1.default.aldReport('PassClick', 'click');
                AdCenter_1.default.Instance().play(function () {
                    _this.getCoinReward();
                    _this.closeUI();
                });
                break;
            case "btn_normal":
                this.getCoinReward();
                this.closeUI();
                break;
            case "btn_buyfree":
                // to do
                break;
        }
    };
    WinView = __decorate([
        ccclass
    ], WinView);
    return WinView;
}(BaseUI_1.default));
exports.default = WinView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvV2luVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QywwQ0FBcUM7QUFHL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQU07SUFBM0M7UUFBQSxxRUF3RUM7UUEvRFcsVUFBSSxHQUFHLENBQUMsQ0FBQzs7SUErRHJCLENBQUM7SUF2RUcsdUJBQUssR0FBTDtRQUNJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxlQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUMvQyxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdELHlCQUFPLEdBQVAsVUFBUSxJQUFXO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUMsaUJBQUssZUFBSyxDQUFDLFlBQVks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QUFELGNBQUM7Q0F4RUQsQUF3RUMsQ0F4RW9DLGdCQUFNLEdBd0UxQztrQkF4RW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5WaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgICBzdGFydCAoKSB7XG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwid2luX3N0YWdlXCIpXG4gICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmeF92aWN0b3J5XCIpLnNldEFuaW1hdGlvbigwLFwic3RhcnRcIixmYWxzZSk7XG4gICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmeF92aWN0b3J5XCIpLnNldEFuaW1hdGlvbigxLFwiaWRsZVwiLHRydWUpO1xuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2dldCcpKVxuICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1Bhc3NTaG93Jywnc2hvdycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29pbiA9IDA7XG4gICAgc2V0SW5mbyhjb2luOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuY29pbiA9IGNvaW47XG4gICAgICAgIHRoaXMuYVRvYkFuaW0oY29pbioyKTtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwiYnRuX25vcm1hbFwiLGDpooblj5Yke1V0aWxzLmZvcm1hdE51bWJlcihjb2luKX3ph5HluIFgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFUb2JBbmltKG51bTpudW1iZXIpe1xuICAgICAgICBsZXQgYXZlciA9IE1hdGguY2VpbChudW0vNjApO1xuICAgICAgICBsZXQgeG4gPSAwO1xuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfY29pblwiLFV0aWxzLmZvcm1hdE51bWJlcigwKSk7XG4gICAgICAgIGxldCBjYiA9ICgpPT57XG4gICAgICAgICAgICB4biArPSBhdmVyO1xuICAgICAgICAgICAgaWYoeG4gPj0gbnVtKXtcbiAgICAgICAgICAgICAgICB4biA9IG51bTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoeG4pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKGNiLDAsNjEpO1xuICAgIH1cblxuICAgIGNsb3NlVUkoKSB7XG4gICAgICAgIHRoaXMuc2h1dEFuaW0oKTtcbiAgICAgICAgSGFsbFNjZW5lLkluc3RhbmNlLmNyZWF0ZUVuZW15cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29pblJld2FyZChpc2RvdWJsZSA9IGZhbHNlKXtcbiAgICAgICAgbGV0IGNvaW4gPSBpc2RvdWJsZSA/IHRoaXMuY29pbiAqIFV0aWxzLmdldFJhbmRvbSgxLjIsMikgOiB0aGlzLmNvaW47XG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcbiAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XG4gICAgICAgICAgICBpZihiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gY29pbjtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luUmV3YXJkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2dldFwiOlxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnUGFzc0NsaWNrJywnY2xpY2snKTtcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luUmV3YXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9ub3JtYWxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvaW5SZXdhcmQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYnV5ZnJlZVwiOlxuICAgICAgICAgICAgICAgIC8vIHRvIGRvXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=