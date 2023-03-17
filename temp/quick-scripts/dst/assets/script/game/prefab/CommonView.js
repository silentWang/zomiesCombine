
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXENvbW1vblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QyxJQUFLLFFBS0o7QUFMRCxXQUFLLFFBQVE7SUFDVCxtREFBVSxDQUFBO0lBQ1YseURBQWEsQ0FBQTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUxJLFFBQVEsS0FBUixRQUFRLFFBS1o7QUEyTFEsNEJBQVE7QUF6TGpCLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM3QixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDcEUsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQzNCLElBQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQztBQUVmLFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLFFBQUEsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLFFBQUEsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0FBR3JDO0lBQXdDLDhCQUFNO0lBQTlDOztJQXlLQSxDQUFDO0lBdEtHLDBCQUFLLEdBQUw7UUFFSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pDLGVBQUssQ0FBQyxVQUFVLENB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QyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNoRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBeEtnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBeUs5QjtJQUFELGlCQUFDO0NBektELEFBeUtDLENBekt1QyxnQkFBTSxHQXlLN0M7a0JBektvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuZW51bSBFQURMQVlFUiB7XHJcbiAgICBET1VCTEVfQVRULFxyXG4gICAgRE9VQkxFX0lOQ09NRSxcclxuICAgIEFVVE9fQ09NLFxyXG4gICAgRFJPUF9QTEFOVFxyXG59XHJcblxyXG5jb25zdCBBVVRPX0NPTV9USU1FID0gMjtcclxuY29uc3QgRE9VQkxFX0lOQ09NRV9USU1FID0gMjtcclxuaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiR3JYTm1kTVlONFpjQ1hCazJuXCIpO1xyXG5jb25zdCBEUk9QX1BMQU5UX1RJTUUgPSAxMDtcclxuY29uc3QgRE9VQkxFX0FUVF9USU1FID0gMC41O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BWF9BVVRPX0NPTV9USU1FID0gNDtcclxuZXhwb3J0IGNvbnN0IE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgPSA0O1xyXG5leHBvcnQgY29uc3QgTUFYX0RST1BfUExBTlRfVElNRSA9IDIwO1xyXG5leHBvcnQgY29uc3QgTUFYX0RPVUJMRV9BVFRfVElNRSA9IDE7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25WaWV3IGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICBwcml2YXRlIHR5cGU6IEVBRExBWUVSO1xyXG4gICAgc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xyXG4gICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYWQnKSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZihkdCA+IDEpIGR0ID0gMTtcclxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVNVGltZSgpO1xyXG4gICAgICAgIGlmKGVuZF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5MZWZ0ID0gZW5kX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIiwobkxlZnQvMTAwMC82MCkvbWF4KTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVcIixVdGlscy5nZXRUaW1lU3RyQnlTKG5MZWZ0LzEwMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5TZXRQcm9ncmVzc0JhcihcIk5ldyBQcm9ncmVzc0JhclwiLDApO1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfdGltZVwiLFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgTVRaYV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcInQ4N0ZqN0Jwd3hcIik7IH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVNVGltZSgpe1xyXG4gICAgICAgIGxldCBlbmRfdGltZSA9IDA7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IE1BWF9BVVRPX0NPTV9USU1FO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJLTnlCUlRkRlpHbTg0U0JyWmVmN2lKZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQpIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IE1BWF9ET1VCTEVfQVRUX1RJTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XHJcbiAgICAgICAgICAgIGVuZF90aW1lID0gQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBNQVhfRE9VQkxFX0lOQ09NRV9USU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IE1BWF9EUk9QX1BMQU5UX1RJTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7ZW5kX3RpbWUsbWF4fVxyXG4gICAgfVxyXG5cclxuICAgIHNldFR5cGUoZTogRUFETEFZRVIpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25fZmFzdFwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRST1BfUExBTlQ7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9hdXRvX21lcmdlXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuQVVUT19DT007XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9pbmNvbWVcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FO1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInhNcDZRWmhQWWZhR3RCUDNiS3dkclp4aXg0c1NFSEpDXCIpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25fYW5ncmVcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBNQVhfQVVUT19DT01fVElNRSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0F1dG9TaG93Jywnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0RPVUJMRV9BVFRfVElNRSo2MCArIFwi56eSXCIpO1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoJ2xibF9kJyxg6L+b5YWl5omT6bih6KGA54q25oCBICDmjIHnu60ke01BWF9ET1VCTEVfQVRUX1RJTUUqNjB956eSYClcclxuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdSYWdlU2hvdycsJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiNVhCeUdCXCIpO1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0RvdWJsZVNob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0RST1BfUExBTlRfVElNRSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0Ryb3BTaG93Jywnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVNVGltZSgpO1xyXG4gICAgICAgIGxldCBpc1J1bm5pbmcgPSBlbmRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9hZCcpLmFjdGl2ZSA9ICFpc1J1bm5pbmc7XHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fbm9ybWFsJykuYWN0aXZlID0gIWlzUnVubmluZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENvaW4oZG91YmxlOm51bWJlciA9IDEpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlzVXNlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0F1dG9DbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKE1BWF9BVVRPX0NPTV9USU1FIC0gQVVUT19DT01fVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgLy8gICAgIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9BVVRPX0NPTV9USU1FICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgKz0gQVVUT19DT01fVElNRSAqIDYwICogMTAwMCAqIGRvdWJsZTtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwid1l3V3NuTkUyZXBKRDdFNUtqajN6ZkEyYXAyeFwiKTtcclxuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1JhZ2VDbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0RPVUJMRV9BVFRfVElNRSAtIERPVUJMRV9BVFRfVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9ET1VCTEVfQVRUX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlFZU2NRYnJwOE1IVEVzclJad1g3YkZoYkJYcG5UNlwiKTtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lICs9IERPVUJMRV9BVFRfVElNRSAqIDYwICogMTAwMCAqIGRvdWJsZTtcclxuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0RvdWJsZUNsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChNQVhfRE9VQkxFX0lOQ09NRV9USU1FIC0gRE9VQkxFX0lOQ09NRV9USU1FKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTXNnVG9hc3Quc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgTUFYX0RPVUJMRV9JTkNPTUVfVElNRSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lICs9IERPVUJMRV9JTkNPTUVfVElNRSAqIDYwICogMTAwMCAqIGRvdWJsZTtcclxuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVCkge1xyXG4gICAgICAgICAgICBpZihkb3VibGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdEcm9wQ2xpY2snLCdjbGljaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0RST1BfUExBTlRfVElNRSAtIERST1BfUExBTlRfVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgLy8gICAgIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9EUk9QX1BMQU5UX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjZyTUs4NWtrUjJkMnBqZkZEU3p0RHJqTVhKQzVjQmNcIik7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSArPSBEUk9QX1BMQU5UX1RJTUUgKiA2MCAqIDEwMDAgKiBkb3VibGU7XHJcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICBpZihpc1VzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgTXNnVG9hc3Quc2hvdygn5L2/55So5oiQ5YqfJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkQ29pbigxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYWRcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKSB0aGlzLmFkZENvaW4oMik7XHJcbiAgICAgICAgICAgICAgICB9LDIpO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiUmRmS0dNWFlaUEgzUDdZQm5OXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvaW4oMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9ub3JtYWwnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBFQURMQVlFUiB9XHJcbiJdfQ==