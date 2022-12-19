
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
        if (window && window['xxxxx'])
            window['xxxxx']("Sn2mfdEzWRYhwXAtSRK8c5");
        this.coin = coin;
        this.aTobAnim(coin * 2);
        this.SetText("btn_normal", "\u9886\u53D6" + Utils_1.default.formatNumber(coin) + "\u91D1\u5E01");
    };
    WinView.prototype.RstP_xxxx_fun = function () { console.log("ykzPX2QsDWmFfEfSaPiy"); };
    WinView.prototype.aTobAnim = function (num) {
        var _this = this;
        var aver = Math.ceil(num / 60);
        if (window && window['xxxxx'])
            window['xxxxx']("ED");
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
        if (window && window['xxxxx'])
            window['xxxxx']("3CsKk45QY");
        HallScene_1.default.Instance.createEnemys();
    };
    WinView.prototype.getCoinReward = function (isdouble) {
        if (isdouble === void 0) { isdouble = false; }
        var coin = isdouble ? this.coin * Utils_1.default.getRandom(1.2, 2) : this.coin;
        AudioMgr_1.default.Instance().playMX("coin");
        Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
            if (b) {
                ChickData_1.default.user.coin += coin;
                if (ChickData_1.default.user.lv >= 30)
                    AdCenter_1.default.Instance().showBigPicAd();
            }
        });
    };
    WinView.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_get":
                WxCenter_1.default.aldReport('PassClick', 'click');
                if (window && window['xxxxx'])
                    window['xxxxx']("DZxBHMTnts7Nb");
                AdCenter_1.default.Instance().play(function () {
                    _this.getCoinReward();
                    _this.closeUI();
                }, 1);
                break;
            case "btn_normal":
                this.getCoinReward();
                this.closeUI();
                if (window && window['xxxxx'])
                    window['xxxxx']("ZrHnJSB53BTwr");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFdpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFNO0lBQTNDO1FBQUEscUVBeUVDO1FBaEVXLFVBQUksR0FBRyxDQUFDLENBQUM7O0lBZ0VyQixDQUFDO0lBeEVHLHVCQUFLLEdBQUw7UUFDSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDL0Msa0JBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHRCx5QkFBTyxHQUFQLFVBQVEsSUFBVztRQUVmLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMs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RUFBQyxPQUFPLENBQUMsQ0FBQztnQkFDeEMsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQy9ELGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUNyQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQy9ELE1BQU07U0FDYjtJQUNMLENBQUM7SUF4RWdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F5RTNCO0lBQUQsY0FBQztDQXpFRCxBQXlFQyxDQXpFb0MsZ0JBQU0sR0F5RTFDO2tCQXpFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gXCIuLi9IYWxsU2NlbmVcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpblZpZXcgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwid2luX3N0YWdlXCIpXHJcbiAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZ4X3ZpY3RvcnlcIikuc2V0QW5pbWF0aW9uKDAsXCJzdGFydFwiLGZhbHNlKTtcclxuICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZnhfdmljdG9yeVwiKS5zZXRBbmltYXRpb24oMSxcImlkbGVcIix0cnVlKTtcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2dldCcpKVxyXG4gICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnUGFzc1Nob3cnLCdzaG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2luID0gMDtcclxuICAgIHNldEluZm8oY29pbjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiU24ybWZkRXpXUllod1hBdFNSSzhjNVwiKTtcclxuICAgICAgICB0aGlzLmNvaW4gPSBjb2luO1xyXG4gICAgICAgIHRoaXMuYVRvYkFuaW0oY29pbioyKTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJidG5fbm9ybWFsXCIsYOmihuWPliR7VXRpbHMuZm9ybWF0TnVtYmVyKGNvaW4pfemHkeW4gWApO1xyXG4gICAgfVxyXG4gICAgICAgIHByaXZhdGUgUnN0UF94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcInlrelBYMlFzRFdtRmZFZlNhUGl5XCIpOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBhVG9iQW5pbShudW06bnVtYmVyKXtcclxuICAgICAgICBsZXQgYXZlciA9IE1hdGguY2VpbChudW0vNjApO1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkVEXCIpO1xyXG4gICAgICAgIGxldCB4biA9IDA7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoMCkpO1xyXG4gICAgICAgIGxldCBjYiA9ICgpPT57XHJcbiAgICAgICAgICAgIHhuICs9IGF2ZXI7XHJcbiAgICAgICAgICAgIGlmKHhuID49IG51bSl7XHJcbiAgICAgICAgICAgICAgICB4biA9IG51bTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShjYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoeG4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShjYiwwLDYxKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVVJKCkge1xyXG4gICAgICAgIHRoaXMuc2h1dEFuaW0oKTtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIzQ3NLazQ1UVlcIik7XHJcbiAgICAgICAgSGFsbFNjZW5lLkluc3RhbmNlLmNyZWF0ZUVuZW15cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29pblJld2FyZChpc2RvdWJsZSA9IGZhbHNlKXtcclxuICAgICAgICBsZXQgY29pbiA9IGlzZG91YmxlID8gdGhpcy5jb2luICogVXRpbHMuZ2V0UmFuZG9tKDEuMiwyKSA6IHRoaXMuY29pbjtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNvaW5cIik7XHJcbiAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XHJcbiAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gY29pbjtcclxuICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLmx2ID49IDMwKVxyXG4gICAgICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0JpZ1BpY0FkKCk7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9nZXRcIjpcclxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnUGFzc0NsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkRaeEJITVRudHM3TmJcIik7XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvaW5SZXdhcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIH0sMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9ub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29pblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJackhuSlNCNTNCVHdyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==