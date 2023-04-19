
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
        this.addFreeAdEvent();
        this.handleFreeAd();
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
    WinView.prototype.handleFreeAd = function () {
        var isfree = ChickData_1.default.isFreeAd;
        this.GetGameObject('icon_video').active = !isfree;
        this.GetGameObject('btn_buyfree').active = !isfree;
        if (isfree) {
            var pos = this.GetGameObject('ad_label').getPosition();
            this.GetGameObject('ad_label').setPosition(new cc.Vec2(0, pos.y));
        }
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
                Utils_1.default.createUI("prefab/MonthCardUI");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFdpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFNO0lBQTNDO1FBQUEscUVBb0ZDO1FBekVXLFVBQUksR0FBRyxDQUFDLENBQUM7O0lBeUVyQixDQUFDO0lBbkZHLHVCQUFLLEdBQUw7UUFDSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDL0Msa0JBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdELHlCQUFPLEdBQVAsVUFBUSxJQUFXO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUMsQ0FBQyxD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O1lBQ2IsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1Ysa0JBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxlQUFLLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUE7Z0JBQ3BDLE1BQU07U0FDYjtJQUNMLENBQUM7SUFuRmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FvRjNCO0lBQUQsY0FBQztDQXBGRCxBQW9GQyxDQXBGb0MsZ0JBQU0sR0FvRjFDO2tCQXBGb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gXCIuLi9IYWxsU2NlbmVcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpblZpZXcgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwid2luX3N0YWdlXCIpXHJcbiAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZ4X3ZpY3RvcnlcIikuc2V0QW5pbWF0aW9uKDAsXCJzdGFydFwiLGZhbHNlKTtcclxuICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZnhfdmljdG9yeVwiKS5zZXRBbmltYXRpb24oMSxcImlkbGVcIix0cnVlKTtcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2dldCcpKVxyXG4gICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnUGFzc1Nob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgdGhpcy5hZGRGcmVlQWRFdmVudCgpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVGcmVlQWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvaW4gPSAwO1xyXG4gICAgc2V0SW5mbyhjb2luOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvaW4gPSBjb2luO1xyXG4gICAgICAgIHRoaXMuYVRvYkFuaW0oY29pbioyKTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJidG5fbm9ybWFsXCIsYOmihuWPliR7VXRpbHMuZm9ybWF0TnVtYmVyKGNvaW4pfemHkeW4gWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYVRvYkFuaW0obnVtOm51bWJlcil7XHJcbiAgICAgICAgbGV0IGF2ZXIgPSBNYXRoLmNlaWwobnVtLzYwKTtcclxuICAgICAgICBsZXQgeG4gPSAwO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKDApKTtcclxuICAgICAgICBsZXQgY2IgPSAoKT0+e1xyXG4gICAgICAgICAgICB4biArPSBhdmVyO1xyXG4gICAgICAgICAgICBpZih4biA+PSBudW0pe1xyXG4gICAgICAgICAgICAgICAgeG4gPSBudW07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKHhuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoY2IsMCw2MSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VVSSgpIHtcclxuICAgICAgICB0aGlzLnNodXRBbmltKCk7XHJcbiAgICAgICAgSGFsbFNjZW5lLkluc3RhbmNlLmNyZWF0ZUVuZW15cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29pblJld2FyZChpc2RvdWJsZSA9IGZhbHNlKXtcclxuICAgICAgICBsZXQgY29pbiA9IGlzZG91YmxlID8gdGhpcy5jb2luICogVXRpbHMuZ2V0UmFuZG9tKDEuMiwyKSA6IHRoaXMuY29pbjtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNvaW5cIik7XHJcbiAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XHJcbiAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gY29pbjtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaGFuZGxlRnJlZUFkKCl7XHJcbiAgICAgICAgbGV0IGlzZnJlZSA9IENoaWNrRGF0YS5pc0ZyZWVBZDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2ljb25fdmlkZW8nKS5hY3RpdmUgPSAhaXNmcmVlXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYnV5ZnJlZScpLmFjdGl2ZSA9ICFpc2ZyZWVcclxuICAgICAgICBpZihpc2ZyZWUpe1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KCdhZF9sYWJlbCcpLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdhZF9sYWJlbCcpLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKDAscG9zLnkpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvaW5SZXdhcmQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fZ2V0XCI6XHJcbiAgICAgICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1Bhc3NDbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvaW5SZXdhcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvaW5SZXdhcmQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYnV5ZnJlZVwiOlxyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTW9udGhDYXJkVUlcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=