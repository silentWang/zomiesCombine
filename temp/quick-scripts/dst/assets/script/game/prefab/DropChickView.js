
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
                // to do
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXERyb3BDaGlja1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsb0NBQStDO0FBR3pDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFNO0lBQWpEO1FBQUEscUVBdURDO1FBdERHLGNBQVEsR0FBRyxFQUFFLENBQUM7O0lBc0RsQixDQUFDO0lBckRHLDZCQUFLLEdBQUw7UUFDSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pDLGVBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQzlDLGtCQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUVJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsaUJBQU0sU0FBUyxXQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLGlDQUFTLEdBQWpCLFVBQWtCLEVBQWtCO1FBQWxCLG1CQUFBLEVBQUEsVUFBa0I7UUFDaEMsSUFBSSxDQUFDLEdBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsMkJBQWtCLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsZUFBZTtRQUFsQyxpQkE0QkM7UUEzQkcsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2Isa0JBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNCLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztvQkFDdkIsSUFBRyxDQUFDLEVBQ0o7d0JBQ0ksSUFBSSxLQUFHLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0IsbUJBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBRyxDQUFDLENBQUM7d0JBQ3BFLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDbEI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxRQUFRO2dCQUNSLE1BQU07U0FDYjtJQUNMLENBQUM7SUFyRGdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F1RGpDO0lBQUQsb0JBQUM7Q0F2REQsQUF1REMsQ0F2RDBDLGdCQUFNLEdBdURoRDtrQkF2RG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnX2Ryb3BBd3dhcmRzIH0gZnJvbSBcIi4uL0NvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcENoaWNrVmlldyBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBzdXBlclBvdCA9IFtdO1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xyXG4gICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYWQnKSlcclxuICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0FpcmRyb3BTaG93Jywnc2hvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCaWdQb3QoZGI6Ym9vbGVhbiA9IGZhbHNlKXtcclxuICAgICAgICB2YXIgdCA9ICBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKTtcclxuICAgICAgICB2YXIgbiA9IENvbmZpZ19kcm9wQXd3YXJkc1t0K1wiXCJdWzFdO1xyXG4gICAgICAgIGxldCBsZW4gPSBkYiA/IDggOiA0O1xyXG4gICAgICAgIGxldCBwb3RzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBsZW47IG8rKyl7XHJcbiAgICAgICAgICAgIHBvdHMucHVzaChuKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBwb3RzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBaXJkcm9wQ2xpY2snLCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwdCA9IHRoaXMuZ2V0QmlnUG90KCk7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5Ecm9wR2lmdFB0cyA9IENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzLmNvbmNhdChzcHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9hZFwiOlxyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBaXJkcm9wQ2xpY2snLCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3B0ID0gdGhpcy5nZXRCaWdQb3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzID0gQ2hpY2tEYXRhLnVzZXIuRHJvcEdpZnRQdHMuY29uY2F0KHNwdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYnV5ZnJlZVwiOlxyXG4gICAgICAgICAgICAgICAgLy8gdG8gZG9cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19