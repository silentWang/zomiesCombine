
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEZhaWxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLDBDQUFxQztBQUcvQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQXFFQztRQTVEVyxVQUFJLEdBQUcsQ0FBQyxDQUFDOztJQTREckIsQ0FBQztJQXBFRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUYsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbEMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDL0Msa0JBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHRCwwQkFBTyxHQUFQLFVBQVEsSUFBVztRQUVmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDO1FB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Y2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWlsVmlldyBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2NvaW5cIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2NvaW5cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmZhZGVUbygxLDI1NSkpKTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImZhaWxcIilcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2dldCcpKVxyXG4gICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRmFpbFNob3cnLCdzaG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2luID0gMDtcclxuICAgIHNldEluZm8oY29pbjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2luID0gY29pbjtcclxuICAgICAgICB0aGlzLmFUb2JBbmltKGNvaW4qMS44KTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJidG5fbm9ybWFsXCIsYOmihuWPliR7VXRpbHMuZm9ybWF0TnVtYmVyKGNvaW4pfemHkeW4gWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYVRvYkFuaW0obnVtOm51bWJlcil7XHJcbiAgICAgICAgbGV0IGF2ZXIgPSBNYXRoLmNlaWwobnVtLzYwKTtcclxuICAgICAgICBsZXQgeG4gPSAwO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKDApKTtcclxuICAgICAgICBsZXQgY2IgPSAoKT0+e1xyXG4gICAgICAgICAgICB4biArPSBhdmVyO1xyXG4gICAgICAgICAgICBpZih4biA+PSBudW0pe1xyXG4gICAgICAgICAgICAgICAgeG4gPSBudW07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKHhuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoY2IsMCw2MSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VVSSgpIHtcclxuICAgICAgICB0aGlzLnNodXRBbmltKCk7XHJcbiAgICAgICAgSGFsbFNjZW5lLkluc3RhbmNlLmNyZWF0ZUVuZW15cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29pblJld2FyZCgpe1xyXG4gICAgICAgIGxldCBjb2luID0gdGhpcy5jb2luO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcclxuICAgICAgICBVdGlscy5mbHlBbmltKDAsdGhpcy5ub2RlLFwiaWNvbl9jb2luXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDUsMTApLDEwMCwoYik9PntcclxuICAgICAgICAgICAgaWYoYikgQ2hpY2tEYXRhLnVzZXIuY29pbis9IGNvaW5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29pblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9nZXRcIjpcclxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRmFpbENsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29pblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRuX25vcm1hbCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvaW5SZXdhcmQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYnV5ZnJlZVwiOlxyXG4gICAgICAgICAgICAgICAgLy8gdG8gZG9cclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==