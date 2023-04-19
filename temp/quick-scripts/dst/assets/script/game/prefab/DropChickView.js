
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/DropChickView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0f634S9eFEnaf/sMGhqJY3', 'DropChickView');
// script/game/prefab/DropChickView.ts

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
var Config_1 = require("../Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DropChickView = /** @class */ (function (_super) {
    __extends(DropChickView, _super);
    function DropChickView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.superPot = [];
        return _this;
    }
    DropChickView.prototype.start = function () {
        AdCenter_1.default.Instance().showGridAd();
        Utils_1.default.playBreath(this.GetGameObject('btn_ad'));
        WxCenter_1.default.aldReport('AirdropShow', 'show');
        this.addFreeAdEvent();
        this.handleFreeAd();
    };
    DropChickView.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
    };
    DropChickView.prototype.getBigPot = function (db) {
        if (db === void 0) { db = false; }
        var t = ChickData_1.default.user.getLvlMax();
        var n = Config_1.Config_dropAwwards[t + ""][1];
        var len = db ? 8 : 4;
        var pots = [];
        for (var o = 0; o < len; o++) {
            pots.push(n);
        }
        return pots;
    };
    DropChickView.prototype.handleFreeAd = function () {
        var isfree = ChickData_1.default.isFreeAd;
        this.GetGameObject('icon_video').active = !isfree;
        this.GetGameObject('btn_buyfree').active = !isfree;
        if (isfree) {
            var pos = this.GetGameObject('ad_label').getPosition();
            this.GetGameObject('ad_label').setPosition(new cc.Vec2(0, pos.y));
        }
    };
    DropChickView.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_normal":
                WxCenter_1.default.aldReport('AirdropClick', 'click');
                var spt = this.getBigPot();
                ChickData_1.default.user.DropGiftPts = ChickData_1.default.user.DropGiftPts.concat(spt);
                this.closeUI();
                break;
            case "btn_ad":
                WxCenter_1.default.aldReport('AirdropClick', 'click');
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        var spt_1 = _this.getBigPot(true);
                        ChickData_1.default.user.DropGiftPts = ChickData_1.default.user.DropGiftPts.concat(spt_1);
                        _this.closeUI();
                    }
                });
                break;
            case "btn_buyfree":
                Utils_1.default.createUI("prefab/MonthCardUI");
                break;
        }
    };
    DropChickView = __decorate([
        ccclass
    ], DropChickView);
    return DropChickView;
}(BaseUI_1.default));
exports.default = DropChickView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXERyb3BDaGlja1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsb0NBQStDO0FBR3pDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFNO0lBQWpEO1FBQUEscUVBbUVDO1FBbEVHLGNBQVEsR0FBRyxFQUFFLENBQUM7O0lBa0VsQixDQUFDO0lBakVHLDZCQUFLLEdBQUw7UUFDSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pDLGVBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQzlDLGtCQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBRUksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8saUNBQVMsR0FBakIsVUFBa0IsRUFBa0I7UUFBbEIsbUJBQUEsRUFBQSxVQUFrQjtRQUNoQyxJQUFJLENBQUMsR0FBSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRywyQkFBa0IsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsb0NBQVksR0FBdEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQTtRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQTtRQUNsRCxJQUFHLE1BQU0sRUFBQztZQUNOLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNuRTtJQUNMLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFBbEMsaUJBNEJDO1FBM0JHLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLGtCQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQixtQkFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1Qsa0JBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7b0JBQ3ZCLElBQUcsQ0FBQyxFQUNKO3dCQUNJLElBQUksS0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9CLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUcsQ0FBQyxDQUFDO3dCQUNwRSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ2xCO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLGFBQWE7Z0JBQ2QsZUFBSyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO2dCQUNwQyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBakVnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBbUVqQztJQUFELG9CQUFDO0NBbkVELEFBbUVDLENBbkUwQyxnQkFBTSxHQW1FaEQ7a0JBbkVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xyXG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xyXG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvV3hDZW50ZXJcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ19kcm9wQXd3YXJkcyB9IGZyb20gXCIuLi9Db25maWdcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3BDaGlja1ZpZXcgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgc3VwZXJQb3QgPSBbXTtcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FkJykpXHJcbiAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBaXJkcm9wU2hvdycsJ3Nob3cnKTtcclxuICAgICAgICB0aGlzLmFkZEZyZWVBZEV2ZW50KClcclxuICAgICAgICB0aGlzLmhhbmRsZUZyZWVBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCaWdQb3QoZGI6Ym9vbGVhbiA9IGZhbHNlKXtcclxuICAgICAgICB2YXIgdCA9ICBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKTtcclxuICAgICAgICB2YXIgbiA9IENvbmZpZ19kcm9wQXd3YXJkc1t0K1wiXCJdWzFdO1xyXG4gICAgICAgIGxldCBsZW4gPSBkYiA/IDggOiA0O1xyXG4gICAgICAgIGxldCBwb3RzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBsZW47IG8rKyl7XHJcbiAgICAgICAgICAgIHBvdHMucHVzaChuKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBwb3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBoYW5kbGVGcmVlQWQoKXtcclxuICAgICAgICBsZXQgaXNmcmVlID0gQ2hpY2tEYXRhLmlzRnJlZUFkO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnaWNvbl92aWRlbycpLmFjdGl2ZSA9ICFpc2ZyZWVcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9idXlmcmVlJykuYWN0aXZlID0gIWlzZnJlZVxyXG4gICAgICAgIGlmKGlzZnJlZSl7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoJ2FkX2xhYmVsJykuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2FkX2xhYmVsJykuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoMCxwb3MueSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBaXJkcm9wQ2xpY2snLCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwdCA9IHRoaXMuZ2V0QmlnUG90KCk7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5Ecm9wR2lmdFB0cyA9IENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzLmNvbmNhdChzcHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9hZFwiOlxyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBaXJkcm9wQ2xpY2snLCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3B0ID0gdGhpcy5nZXRCaWdQb3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzID0gQ2hpY2tEYXRhLnVzZXIuRHJvcEdpZnRQdHMuY29uY2F0KHNwdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYnV5ZnJlZVwiOlxyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTW9udGhDYXJkVUlcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19