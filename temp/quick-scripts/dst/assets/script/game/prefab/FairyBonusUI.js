
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/FairyBonusUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1d79P4wcFK9KwHCsJWJWld', 'FairyBonusUI');
// script/game/prefab/FairyBonusUI.ts

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
var WxCenter_1 = require("../../manager/WxCenter");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var DB_1 = require("../DB");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FairyBonusUI = /** @class */ (function (_super) {
    __extends(FairyBonusUI, _super);
    function FairyBonusUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.superPot = [];
        return _this;
    }
    FairyBonusUI.prototype.start = function () {
        AdCenter_1.default.Instance().showGridAd();
        Utils_1.default.playBreath(this.GetGameObject('btn_ad'));
        WxCenter_1.default.aldReport('AirdropShow', 'show');
    };
    FairyBonusUI.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
    };
    FairyBonusUI.prototype.getSuperPot = function (db) {
        if (db === void 0) { db = false; }
        var t = Data_1.default.user.GetMaxLv();
        var n = DB_1.DB_droneRewards[t + ""][1];
        var len = db ? 8 : 4;
        var pots = [];
        for (var o = 0; o < len; o++) {
            pots.push(n);
        }
        return pots;
    };
    FairyBonusUI.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_normal":
                WxCenter_1.default.aldReport('AirdropClick', 'click');
                var spt = this.getSuperPot();
                Data_1.default.user.DropGiftPts = Data_1.default.user.DropGiftPts.concat(spt);
                this.closeUI();
                break;
            case "btn_ad":
                WxCenter_1.default.aldReport('AirdropClick', 'click');
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        var spt_1 = _this.getSuperPot(true);
                        Data_1.default.user.DropGiftPts = Data_1.default.user.DropGiftPts.concat(spt_1);
                        _this.closeUI();
                    }
                });
                break;
        }
    };
    FairyBonusUI = __decorate([
        ccclass
    ], FairyBonusUI);
    return FairyBonusUI;
}(BaseUI_1.default));
exports.default = FairyBonusUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEZhaXJ5Qm9udXNVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0Qyw0QkFBd0M7QUFHbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQU07SUFBaEQ7UUFBQSxxRUFvREM7UUFuREcsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUFtRGxCLENBQUM7SUFsREcsNEJBQUssR0FBTDtRQUNJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDOUMsa0JBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBRUksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sa0NBQVcsR0FBbkIsVUFBb0IsRUFBa0I7UUFBbEIsbUJBQUEsRUFBQSxVQUFrQjtRQUNsQyxJQUFJLENBQUMsR0FBSSxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLG9CQUFlLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsZUFBZTtRQUFuQyxpQkF5QkM7UUF4QkcsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2Isa0JBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzdCLGNBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1Qsa0JBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7b0JBQ3ZCLElBQUcsQ0FBQyxFQUNKO3dCQUNJLElBQUksS0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pDLGNBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFHLENBQUMsQ0FBQzt3QkFDMUQsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNsQjtnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBbERnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBb0RoQztJQUFELG1CQUFDO0NBcERELEFBb0RDLENBcER5QyxnQkFBTSxHQW9EL0M7a0JBcERvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgREJfZHJvbmVSZXdhcmRzIH0gZnJvbSBcIi4uL0RCXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWlyeUJvbnVzVUkgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgc3VwZXJQb3QgPSBbXTtcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FkJykpXHJcbiAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBaXJkcm9wU2hvdycsJ3Nob3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3VwZXJQb3QoZGI6Ym9vbGVhbiA9IGZhbHNlKXtcclxuICAgICAgICB2YXIgdCA9ICBEYXRhLnVzZXIuR2V0TWF4THYoKTtcclxuICAgICAgICB2YXIgbiA9IERCX2Ryb25lUmV3YXJkc1t0K1wiXCJdWzFdO1xyXG4gICAgICAgIGxldCBsZW4gPSBkYiA/IDggOiA0O1xyXG4gICAgICAgIGxldCBwb3RzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBsZW47IG8rKyl7XHJcbiAgICAgICAgICAgIHBvdHMucHVzaChuKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBwb3RzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0FpcmRyb3BDbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3B0ID0gdGhpcy5nZXRTdXBlclBvdCgpO1xyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLkRyb3BHaWZ0UHRzID0gRGF0YS51c2VyLkRyb3BHaWZ0UHRzLmNvbmNhdChzcHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9hZFwiOlxyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBaXJkcm9wQ2xpY2snLCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3B0ID0gdGhpcy5nZXRTdXBlclBvdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLkRyb3BHaWZ0UHRzID0gRGF0YS51c2VyLkRyb3BHaWZ0UHRzLmNvbmNhdChzcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19