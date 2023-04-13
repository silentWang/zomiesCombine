
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
    CommonView.prototype.getEMTime = function () {
        var end_time = 0;
        var max = 0;
        if (this.type == EADLAYER.AUTO_COM) {
            end_time = ChickData_1.default.user.auto_com_time;
            max = exports.MAX_AUTO_COM_TIME;
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
                });
                break;
            case "btn_normal":
                this.addCoin(1);
                this.GetGameObject('btn_normal').active = false;
                break;
            case "btn_buyfree":
                // to do
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXENvbW1vblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QyxJQUFLLFFBS0o7QUFMRCxXQUFLLFFBQVE7SUFDVCxtREFBVSxDQUFBO0lBQ1YseURBQWEsQ0FBQTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUxJLFFBQVEsS0FBUixRQUFRLFFBS1o7QUFxTFEsNEJBQVE7QUFuTGpCLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM3QixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBRWYsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBQSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsUUFBQSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFHckM7SUFBd0MsOEJBQU07SUFBOUM7O0lBb0tBLENBQUM7SUFqS0csMEJBQUssR0FBTDtRQUVJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFFSSxrQkFBUSxDQUFDLFFB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QUMxQixDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEQsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxRQUFRO2dCQUNSLE1BQU07U0FDYjtJQUNMLENBQUM7SUFuS2dCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FvSzlCO0lBQUQsaUJBQUM7Q0FwS0QsQUFvS0MsQ0FwS3VDLGdCQUFNLEdBb0s3QztrQkFwS29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi8uLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5lbnVtIEVBRExBWUVSIHtcclxuICAgIERPVUJMRV9BVFQsXHJcbiAgICBET1VCTEVfSU5DT01FLFxyXG4gICAgQVVUT19DT00sXHJcbiAgICBEUk9QX1BMQU5UXHJcbn1cclxuXHJcbmNvbnN0IEFVVE9fQ09NX1RJTUUgPSAyO1xyXG5jb25zdCBET1VCTEVfSU5DT01FX1RJTUUgPSAyO1xyXG5jb25zdCBEUk9QX1BMQU5UX1RJTUUgPSAxMDtcclxuY29uc3QgRE9VQkxFX0FUVF9USU1FID0gMC41O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BWF9BVVRPX0NPTV9USU1FID0gNDtcclxuZXhwb3J0IGNvbnN0IE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgPSA0O1xyXG5leHBvcnQgY29uc3QgTUFYX0RST1BfUExBTlRfVElNRSA9IDIwO1xyXG5leHBvcnQgY29uc3QgTUFYX0RPVUJMRV9BVFRfVElNRSA9IDE7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25WaWV3IGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICBwcml2YXRlIHR5cGU6IEVBRExBWUVSO1xyXG4gICAgc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xyXG4gICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYWQnKSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZihkdCA+IDEpIGR0ID0gMTtcclxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVNVGltZSgpO1xyXG4gICAgICAgIGlmKGVuZF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5MZWZ0ID0gZW5kX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIiwobkxlZnQvMTAwMC82MCkvbWF4KTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVcIixVdGlscy5nZXRUaW1lU3RyQnlTKG5MZWZ0LzEwMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5TZXRQcm9ncmVzc0JhcihcIk5ldyBQcm9ncmVzc0JhclwiLDApO1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfdGltZVwiLFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVNVGltZSgpe1xyXG4gICAgICAgIGxldCBlbmRfdGltZSA9IDA7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IE1BWF9BVVRPX0NPTV9USU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gTUFYX0RPVUJMRV9BVFRfVElNRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IE1BWF9ET1VCTEVfSU5DT01FX1RJTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gTUFYX0RST1BfUExBTlRfVElNRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtlbmRfdGltZSxtYXh9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHlwZShlOiBFQURMQVlFUikge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9mYXN0XCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2F1dG9fbWVyZ2VcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5BVVRPX0NPTTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2luY29tZVwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9hbmdyZVwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIE1BWF9BVVRPX0NPTV9USU1FICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnQXV0b1Nob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBNQVhfRE9VQkxFX0FUVF9USU1FKjYwICsgXCLnp5JcIik7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dCgnbGJsX2QnLGDov5vlhaXmiZPpuKHooYDnirbmgIEgIOaMgee7rSR7TUFYX0RPVUJMRV9BVFRfVElNRSo2MH3np5JgKVxyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1JhZ2VTaG93Jywnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0RPVUJMRV9JTkNPTUVfVElNRSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0RvdWJsZVNob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0RST1BfUExBTlRfVElNRSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0Ryb3BTaG93Jywnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVNVGltZSgpO1xyXG4gICAgICAgIGxldCBpc1J1bm5pbmcgPSBlbmRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9hZCcpLmFjdGl2ZSA9ICFpc1J1bm5pbmc7XHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fbm9ybWFsJykuYWN0aXZlID0gIWlzUnVubmluZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENvaW4oZG91YmxlOm51bWJlciA9IDEpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlzVXNlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0F1dG9DbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKE1BWF9BVVRPX0NPTV9USU1FIC0gQVVUT19DT01fVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgLy8gICAgIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9BVVRPX0NPTV9USU1FICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgKz0gQVVUT19DT01fVElNRSAqIDYwICogMTAwMCAqIGRvdWJsZTtcclxuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1JhZ2VDbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0RPVUJMRV9BVFRfVElNRSAtIERPVUJMRV9BVFRfVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9ET1VCTEVfQVRUX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSArPSBET1VCTEVfQVRUX1RJTUUgKiA2MCAqIDEwMDAgKiBkb3VibGU7XHJcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdEb3VibGVDbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0RPVUJMRV9JTkNPTUVfVElNRSAtIERPVUJMRV9JTkNPTUVfVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSArPSBET1VCTEVfSU5DT01FX1RJTUUgKiA2MCAqIDEwMDAgKiBkb3VibGU7XHJcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpIHtcclxuICAgICAgICAgICAgaWYoZG91YmxlID09IDIpIHtcclxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRHJvcENsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKE1BWF9EUk9QX1BMQU5UX1RJTUUgLSBEUk9QX1BMQU5UX1RJTUUpICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBNc2dUb2FzdC5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBNQVhfRFJPUF9QTEFOVF9USU1FICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgKz0gRFJPUF9QTEFOVF9USU1FICogNjAgKiAxMDAwICogZG91YmxlO1xyXG4gICAgICAgICAgICBpc1VzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgaWYoaXNVc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coJ+S9v+eUqOaIkOWKnycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZENvaW4oMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2FkXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYikgdGhpcy5hZGRDb2luKDIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9ub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29pbigxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX25vcm1hbCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYnV5ZnJlZVwiOlxyXG4gICAgICAgICAgICAgICAgLy8gdG8gZG9cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBFQURMQVlFUiB9XHJcbiJdfQ==