
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/CommonView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '039ebY1Zw9E6qK2t7IVVW/N', 'CommonView');
// script/game/prefab/CommonView.ts

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
exports.EADLAYER = exports.MAX_DOUBLE_ATT_TIME = exports.MAX_DROP_PLANT_TIME = exports.MAX_DOUBLE_INCOME_TIME = exports.MAX_AUTO_COM_TIME = void 0;
var BaseUI_1 = require("../../framwork/BaseUI");
var MsgToast_1 = require("../../framwork/MsgToast");
var AdCenter_1 = require("../../manager/AdCenter");
var ChickData_1 = require("../../manager/ChickData");
var WxCenter_1 = require("../../manager/WxCenter");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EADLAYER;
(function (EADLAYER) {
    EADLAYER[EADLAYER["DOUBLE_ATT"] = 0] = "DOUBLE_ATT";
    EADLAYER[EADLAYER["DOUBLE_INCOME"] = 1] = "DOUBLE_INCOME";
    EADLAYER[EADLAYER["AUTO_COM"] = 2] = "AUTO_COM";
    EADLAYER[EADLAYER["DROP_PLANT"] = 3] = "DROP_PLANT";
})(EADLAYER || (EADLAYER = {}));
exports.EADLAYER = EADLAYER;
var AUTO_COM_TIME = 2;
var DOUBLE_INCOME_TIME = 2;
if (window && window['xxxxx'])
    window['xxxxx']("GrXNmdMYN4ZcCXBk2n");
var DROP_PLANT_TIME = 10;
var DOUBLE_ATT_TIME = 0.5;
exports.MAX_AUTO_COM_TIME = 4;
exports.MAX_DOUBLE_INCOME_TIME = 4;
exports.MAX_DROP_PLANT_TIME = 20;
exports.MAX_DOUBLE_ATT_TIME = 1;
var CommonView = /** @class */ (function (_super) {
    __extends(CommonView, _super);
    function CommonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommonView.prototype.start = function () {
        AdCenter_1.default.Instance().showGridAd();
        Utils_1.default.playBreath(this.GetGameObject('btn_ad'));
    };
    CommonView.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
    };
    CommonView.prototype.update = function (dt) {
        if (dt > 1)
            dt = 1;
        var _a = this.getEMTime(), end_time = _a.end_time, max = _a.max;
        if (end_time > Utils_1.default.getServerTime()) {
            var nLeft = end_time - Utils_1.default.getServerTime();
            // this.SetProgressBar("New ProgressBar",(nLeft/1000/60)/max);
            this.SetText("lbl_time", Utils_1.default.getTimeStrByS(nLeft / 1000));
        }
        else {
            // this.SetProgressBar("New ProgressBar",0);
            this.SetText("lbl_time", "");
        }
    };
    CommonView.prototype.MTZa_xxxx_fun = function () { console.log("t87Fj7Bpwx"); };
    CommonView.prototype.getEMTime = function () {
        var end_time = 0;
        var max = 0;
        if (this.type == EADLAYER.AUTO_COM) {
            end_time = ChickData_1.default.user.auto_com_time;
            max = exports.MAX_AUTO_COM_TIME;
            if (window && window['xxxxx'])
                window['xxxxx']("KNyBRTdFZGm84SBrZef7iJe");
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            end_time = ChickData_1.default.user.double_att_time;
            max = exports.MAX_DOUBLE_ATT_TIME;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            end_time = ChickData_1.default.user.double_income_time;
            max = exports.MAX_DOUBLE_INCOME_TIME;
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            end_time = ChickData_1.default.user.drop_plant_time;
            max = exports.MAX_DROP_PLANT_TIME;
        }
        return { end_time: end_time, max: max };
    };
    CommonView.prototype.setType = function (e) {
        this.type = e;
        this.GetGameObject("icon_fast").active = e == EADLAYER.DROP_PLANT;
        this.GetGameObject("icon_auto_merge").active = e == EADLAYER.AUTO_COM;
        this.GetGameObject("icon_income").active = e == EADLAYER.DOUBLE_INCOME;
        if (window && window['xxxxx'])
            window['xxxxx']("xMp6QZhPYfaGtBP3bKwdrZxix4sSEHJC");
        this.GetGameObject("icon_angre").active = e == EADLAYER.DOUBLE_ATT;
        if (this.type == EADLAYER.AUTO_COM) {
            this.SetText("lbl_effect", "+" + exports.MAX_AUTO_COM_TIME + "分钟");
            WxCenter_1.default.aldReport('AutoShow', 'show');
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            this.SetText("lbl_effect", "+" + exports.MAX_DOUBLE_ATT_TIME * 60 + "秒");
            this.SetText('lbl_d', "\u8FDB\u5165\u6253\u9E21\u8840\u72B6\u6001  \u6301\u7EED" + exports.MAX_DOUBLE_ATT_TIME * 60 + "\u79D2");
            WxCenter_1.default.aldReport('RageShow', 'show');
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            this.SetText("lbl_effect", "+" + exports.MAX_DOUBLE_INCOME_TIME + "分钟");
            if (window && window['xxxxx'])
                window['xxxxx']("5XByGB");
            WxCenter_1.default.aldReport('DoubleShow', 'show');
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            this.SetText("lbl_effect", "+" + exports.MAX_DROP_PLANT_TIME + "分钟");
            WxCenter_1.default.aldReport('DropShow', 'show');
        }
        var _a = this.getEMTime(), end_time = _a.end_time, max = _a.max;
        var isRunning = end_time > Utils_1.default.getServerTime();
        // this.GetGameObject('btn_ad').active = !isRunning;
        // this.GetGameObject('btn_normal').active = !isRunning;
    };
    CommonView.prototype.addCoin = function (double) {
        if (double === void 0) { double = 1; }
        var isUse = false;
        if (this.type == EADLAYER.AUTO_COM) {
            WxCenter_1.default.aldReport('AutoClick', 'click');
            // if (ChickData.user.auto_com_time - Utils.getServerTime() > (MAX_AUTO_COM_TIME - AUTO_COM_TIME) * 60 * 1000) {
            //     MsgToast.show("最大累积时间" + MAX_AUTO_COM_TIME + "分钟");
            //     return;
            // }
            // if (ChickData.user.auto_com_time < Utils.getServerTime())
            ChickData_1.default.user.auto_com_time = Utils_1.default.getServerTime();
            ChickData_1.default.user.auto_com_time += AUTO_COM_TIME * 60 * 1000 * double;
            if (window && window['xxxxx'])
                window['xxxxx']("wYwWsnNE2epJD7E5Kjj3zfA2ap2x");
            isUse = true;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            WxCenter_1.default.aldReport('RageClick', 'click');
            // if (ChickData.user.double_att_time - Utils.getServerTime() > (MAX_DOUBLE_ATT_TIME - DOUBLE_ATT_TIME) * 60 * 1000) {
            // MsgToast.show("最大累积时间" + MAX_DOUBLE_ATT_TIME + "分钟");
            // return;
            // }
            // if (ChickData.user.double_att_time < Utils.getServerTime())
            ChickData_1.default.user.double_att_time = Utils_1.default.getServerTime();
            if (window && window['xxxxx'])
                window['xxxxx']("QYScQbrp8MHTEsrRZwX7bFhbBXpnT6");
            ChickData_1.default.user.double_att_time += DOUBLE_ATT_TIME * 60 * 1000 * double;
            isUse = true;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            WxCenter_1.default.aldReport('DoubleClick', 'click');
            // if (ChickData.user.double_income_time - Utils.getServerTime() > (MAX_DOUBLE_INCOME_TIME - DOUBLE_INCOME_TIME) * 60 * 1000) {
            // MsgToast.show("最大累积时间" + MAX_DOUBLE_INCOME_TIME + "分钟");
            // return;
            // }
            // if (ChickData.user.double_income_time < Utils.getServerTime())
            ChickData_1.default.user.double_income_time = Utils_1.default.getServerTime();
            ChickData_1.default.user.double_income_time += DOUBLE_INCOME_TIME * 60 * 1000 * double;
            isUse = true;
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            if (double == 2) {
                WxCenter_1.default.aldReport('DropClick', 'click');
            }
            // if (ChickData.user.drop_plant_time - Utils.getServerTime() > (MAX_DROP_PLANT_TIME - DROP_PLANT_TIME) * 60 * 1000) {
            //     MsgToast.show("最大累积时间" + MAX_DROP_PLANT_TIME + "分钟");
            //     return;
            // }
            // if (ChickData.user.drop_plant_time < Utils.getServerTime())
            ChickData_1.default.user.drop_plant_time = Utils_1.default.getServerTime();
            if (window && window['xxxxx'])
                window['xxxxx']("6rMK85kkR2d2pjfFDSztDrjMXJC5cBc");
            ChickData_1.default.user.drop_plant_time += DROP_PLANT_TIME * 60 * 1000 * double;
            isUse = true;
        }
        ChickData_1.default.save();
        if (isUse) {
            this.closeUI();
            MsgToast_1.default.show('使用成功');
        }
    };
    CommonView.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
                // this.addCoin(1);
                this.closeUI();
                break;
            case "btn_ad":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b)
                        _this.addCoin(2);
                }, 2);
                if (window && window['xxxxx'])
                    window['xxxxx']("RdfKGMXYZPH3P7YBnN");
                break;
            case "btn_normal":
                this.addCoin(1);
                this.GetGameObject('btn_normal').active = false;
                break;
        }
    };
    CommonView = __decorate([
        ccclass
    ], CommonView);
    return CommonView;
}(BaseUI_1.default));
exports.default = CommonView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvQ29tbW9uVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG9EQUErQztBQUMvQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULG1EQUFVLENBQUE7SUFDVix5REFBYSxDQUFBO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7QUFDZCxDQUFDLEVBTEksUUFBUSxLQUFSLFFBQVEsUUFLWjtBQTJMUSw0QkFBUTtBQXpMakIsSUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLElBQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNwRSxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBRWYsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBQSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsUUFBQSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFHckM7SUFBd0MsOEJBQU07SUFBOUM7O0lBeUtBLENBQUM7SUF0S0csMEJBQUssR0FBTDtRQUVJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJ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QVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hELE1BQU07U0FDYjtJQUNMLENBQUM7SUF4S2dCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F5SzlCO0lBQUQsaUJBQUM7Q0F6S0QsQUF5S0MsQ0F6S3VDLGdCQUFNLEdBeUs3QztrQkF6S29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbmVudW0gRUFETEFZRVIge1xuICAgIERPVUJMRV9BVFQsXG4gICAgRE9VQkxFX0lOQ09NRSxcbiAgICBBVVRPX0NPTSxcbiAgICBEUk9QX1BMQU5UXG59XG5cbmNvbnN0IEFVVE9fQ09NX1RJTUUgPSAyO1xuY29uc3QgRE9VQkxFX0lOQ09NRV9USU1FID0gMjtcbmlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkdyWE5tZE1ZTjRaY0NYQmsyblwiKTtcbmNvbnN0IERST1BfUExBTlRfVElNRSA9IDEwO1xuY29uc3QgRE9VQkxFX0FUVF9USU1FID0gMC41O1xuXG5leHBvcnQgY29uc3QgTUFYX0FVVE9fQ09NX1RJTUUgPSA0O1xuZXhwb3J0IGNvbnN0IE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgPSA0O1xuZXhwb3J0IGNvbnN0IE1BWF9EUk9QX1BMQU5UX1RJTUUgPSAyMDtcbmV4cG9ydCBjb25zdCBNQVhfRE9VQkxFX0FUVF9USU1FID0gMTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vblZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuXG4gICAgcHJpdmF0ZSB0eXBlOiBFQURMQVlFUjtcbiAgICBzdGFydCgpXG4gICAge1xuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcbiAgICAgICAgVXRpbHMucGxheUJyZWF0aCh0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9hZCcpKVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpXG4gICAge1xuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLmhpZGVHcmlkQWQoKTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KVxuICAgIHtcbiAgICAgICAgaWYoZHQgPiAxKSBkdCA9IDE7XG4gICAgICAgIGxldCB7ZW5kX3RpbWUsbWF4fSA9IHRoaXMuZ2V0RU1UaW1lKCk7XG4gICAgICAgIGlmKGVuZF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbkxlZnQgPSBlbmRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIiwobkxlZnQvMTAwMC82MCkvbWF4KTtcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF90aW1lXCIsVXRpbHMuZ2V0VGltZVN0ckJ5UyhuTGVmdC8xMDAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB0aGlzLlNldFByb2dyZXNzQmFyKFwiTmV3IFByb2dyZXNzQmFyXCIsMCk7XG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfdGltZVwiLFwiXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgICAgICBwcml2YXRlIE1UWmFfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJ0ODdGajdCcHd4XCIpOyB9XG5cbiAgICBwcml2YXRlIGdldEVNVGltZSgpe1xuICAgICAgICBsZXQgZW5kX3RpbWUgPSAwO1xuICAgICAgICBsZXQgbWF4ID0gMDtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xuICAgICAgICAgICAgZW5kX3RpbWUgPSBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lO1xuICAgICAgICAgICAgbWF4ID0gTUFYX0FVVE9fQ09NX1RJTUU7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJLTnlCUlRkRlpHbTg0U0JyWmVmN2lKZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xuICAgICAgICAgICAgZW5kX3RpbWUgPSBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWU7XG4gICAgICAgICAgICBtYXggPSBNQVhfRE9VQkxFX0FUVF9USU1FO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZTtcbiAgICAgICAgICAgIG1heCA9IE1BWF9ET1VCTEVfSU5DT01FX1RJTUU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVClcbiAgICAgICAge1xuICAgICAgICAgICAgZW5kX3RpbWUgPSBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWU7XG4gICAgICAgICAgICBtYXggPSBNQVhfRFJPUF9QTEFOVF9USU1FO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7ZW5kX3RpbWUsbWF4fVxuICAgIH1cblxuICAgIHNldFR5cGUoZTogRUFETEFZRVIpIHtcbiAgICAgICAgdGhpcy50eXBlID0gZTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9mYXN0XCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVDtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9hdXRvX21lcmdlXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuQVVUT19DT007XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25faW5jb21lXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRTtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwieE1wNlFaaFBZZmFHdEJQM2JLd2RyWnhpeDRzU0VISkNcIik7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25fYW5ncmVcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBNQVhfQVVUT19DT01fVElNRSArIFwi5YiG6ZKfXCIpO1xuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBdXRvU2hvdycsJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIE1BWF9ET1VCTEVfQVRUX1RJTUUqNjAgKyBcIuenklwiKTtcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dCgnbGJsX2QnLGDov5vlhaXmiZPpuKHooYDnirbmgIEgIOaMgee7rSR7TUFYX0RPVUJMRV9BVFRfVElNRSo2MH3np5JgKVxuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdSYWdlU2hvdycsJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgKyBcIuWIhumSn1wiKTtcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjVYQnlHQlwiKTtcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRG91YmxlU2hvdycsJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0RST1BfUExBTlRfVElNRSArIFwi5YiG6ZKfXCIpO1xuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdEcm9wU2hvdycsJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVNVGltZSgpO1xuICAgICAgICBsZXQgaXNSdW5uaW5nID0gZW5kX3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FkJykuYWN0aXZlID0gIWlzUnVubmluZztcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fbm9ybWFsJykuYWN0aXZlID0gIWlzUnVubmluZztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvaW4oZG91YmxlOm51bWJlciA9IDEpXG4gICAge1xuICAgICAgICBsZXQgaXNVc2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBdXRvQ2xpY2snLCdjbGljaycpO1xuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0FVVE9fQ09NX1RJTUUgLSBBVVRPX0NPTV9USU1FKSAqIDYwICogMTAwMCkge1xuICAgICAgICAgICAgLy8gICAgIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9BVVRPX0NPTV9USU1FICsgXCLliIbpkp9cIik7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSArPSBBVVRPX0NPTV9USU1FICogNjAgKiAxMDAwICogZG91YmxlO1xuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwid1l3V3NuTkUyZXBKRDdFNUtqajN6ZkEyYXAyeFwiKTtcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdSYWdlQ2xpY2snLCdjbGljaycpO1xuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChNQVhfRE9VQkxFX0FUVF9USU1FIC0gRE9VQkxFX0FUVF9USU1FKSAqIDYwICogMTAwMCkge1xuICAgICAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9ET1VCTEVfQVRUX1RJTUUgKyBcIuWIhumSn1wiKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiUVlTY1FicnA4TUhURXNyUlp3WDdiRmhiQlhwblQ2XCIpO1xuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lICs9IERPVUJMRV9BVFRfVElNRSAqIDYwICogMTAwMCAqIGRvdWJsZTtcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdEb3VibGVDbGljaycsJ2NsaWNrJyk7XG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgLSBET1VCTEVfSU5DT01FX1RJTUUpICogNjAgKiAxMDAwKSB7XG4gICAgICAgICAgICAgICAgLy8gTXNnVG9hc3Quc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgTUFYX0RPVUJMRV9JTkNPTUVfVElNRSArIFwi5YiG6ZKfXCIpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgKz0gRE9VQkxFX0lOQ09NRV9USU1FICogNjAgKiAxMDAwICogZG91YmxlO1xuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UKSB7XG4gICAgICAgICAgICBpZihkb3VibGUgPT0gMikge1xuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRHJvcENsaWNrJywnY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0RST1BfUExBTlRfVElNRSAtIERST1BfUExBTlRfVElNRSkgKiA2MCAqIDEwMDApIHtcbiAgICAgICAgICAgIC8vICAgICBNc2dUb2FzdC5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBNQVhfRFJPUF9QTEFOVF9USU1FICsgXCLliIbpkp9cIik7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjZyTUs4NWtrUjJkMnBqZkZEU3p0RHJqTVhKQzVjQmNcIik7XG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgKz0gRFJPUF9QTEFOVF9USU1FICogNjAgKiAxMDAwICogZG91YmxlO1xuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgIGlmKGlzVXNlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coJ+S9v+eUqOaIkOWKnycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZENvaW4oMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2FkXCI6XG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihiKSB0aGlzLmFkZENvaW4oMik7XG4gICAgICAgICAgICAgICAgfSwyKTtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJSZGZLR01YWVpQSDNQN1lCbk5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29pbigxKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9ub3JtYWwnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IEVBRExBWUVSIH1cbiJdfQ==