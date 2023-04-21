
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
        this.addFreeAdEvent();
        this.handleFreeAd();
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
            this.SetText("lbl_effect", "+" + exports.MAX_AUTO_COM_TIME + "分鐘");
            WxCenter_1.default.aldReport('AutoShow', 'show');
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            this.SetText("lbl_effect", "+" + exports.MAX_DOUBLE_ATT_TIME * 60 + "秒");
            this.SetText('lbl_d', "\u9032\u5165\u6253\u9DC4\u8840\u72C0\u614B  \u6301\u7E8C" + exports.MAX_DOUBLE_ATT_TIME * 60 + "\u79D2");
            WxCenter_1.default.aldReport('RageShow', 'show');
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            this.SetText("lbl_effect", "+" + exports.MAX_DOUBLE_INCOME_TIME + "分鐘");
            WxCenter_1.default.aldReport('DoubleShow', 'show');
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            this.SetText("lbl_effect", "+" + exports.MAX_DROP_PLANT_TIME + "分鐘");
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
    CommonView.prototype.handleFreeAd = function () {
        var isfree = ChickData_1.default.isFreeAd;
        this.GetGameObject('icon_video').active = !isfree;
        this.GetGameObject('btn_buyfree').active = !isfree;
        if (isfree) {
            var pos = this.GetGameObject('ad_label').getPosition();
            this.GetGameObject('ad_label').setPosition(new cc.Vec2(0, pos.y));
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
                Utils_1.default.createUI("prefab/MonthCardUI");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXENvbW1vblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QyxJQUFLLFFBS0o7QUFMRCxXQUFLLFFBQVE7SUFDVCxtREFBVSxDQUFBO0lBQ1YseURBQWEsQ0FBQTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUxJLFFBQVEsS0FBUixRQUFRLFFBS1o7QUFpTVEsNEJBQVE7QUEvTGpCLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM3QixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBRWYsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBQSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsUUFBQSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFHckM7SUFBd0MsOEJBQU07SUFBOUM7O0lBZ0xBLENBQUM7SUE3S0csMEJBQUssR0FBTDtRQUVJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FB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QUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNuRTtJQUNMLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFBbEMsaUJBcUJDO1FBcEJHLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxXQUFXO2dCQUNaLG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1Qsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO29CQUN2QixJQUFHLENBQUM7d0JBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hELE1BQU07WUFDVixLQUFLLGFBQWE7Z0JBQ2QsZUFBSyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO2dCQUNwQyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBL0tnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBZ0w5QjtJQUFELGlCQUFDO0NBaExELEFBZ0xDLENBaEx1QyxnQkFBTSxHQWdMN0M7a0JBaExvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuZW51bSBFQURMQVlFUiB7XHJcbiAgICBET1VCTEVfQVRULFxyXG4gICAgRE9VQkxFX0lOQ09NRSxcclxuICAgIEFVVE9fQ09NLFxyXG4gICAgRFJPUF9QTEFOVFxyXG59XHJcblxyXG5jb25zdCBBVVRPX0NPTV9USU1FID0gMjtcclxuY29uc3QgRE9VQkxFX0lOQ09NRV9USU1FID0gMjtcclxuY29uc3QgRFJPUF9QTEFOVF9USU1FID0gMTA7XHJcbmNvbnN0IERPVUJMRV9BVFRfVElNRSA9IDAuNTtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfQVVUT19DT01fVElNRSA9IDQ7XHJcbmV4cG9ydCBjb25zdCBNQVhfRE9VQkxFX0lOQ09NRV9USU1FID0gNDtcclxuZXhwb3J0IGNvbnN0IE1BWF9EUk9QX1BMQU5UX1RJTUUgPSAyMDtcclxuZXhwb3J0IGNvbnN0IE1BWF9ET1VCTEVfQVRUX1RJTUUgPSAxO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uVmlldyBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgcHJpdmF0ZSB0eXBlOiBFQURMQVlFUjtcclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FkJykpXHJcbiAgICAgICAgdGhpcy5hZGRGcmVlQWRFdmVudCgpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVGcmVlQWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZihkdCA+IDEpIGR0ID0gMTtcclxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVNVGltZSgpO1xyXG4gICAgICAgIGlmKGVuZF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5MZWZ0ID0gZW5kX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIiwobkxlZnQvMTAwMC82MCkvbWF4KTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVcIixVdGlscy5nZXRUaW1lU3RyQnlTKG5MZWZ0LzEwMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5TZXRQcm9ncmVzc0JhcihcIk5ldyBQcm9ncmVzc0JhclwiLDApO1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfdGltZVwiLFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVNVGltZSgpe1xyXG4gICAgICAgIGxldCBlbmRfdGltZSA9IDA7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IE1BWF9BVVRPX0NPTV9USU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gTUFYX0RPVUJMRV9BVFRfVElNRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IE1BWF9ET1VCTEVfSU5DT01FX1RJTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gTUFYX0RST1BfUExBTlRfVElNRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtlbmRfdGltZSxtYXh9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHlwZShlOiBFQURMQVlFUikge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9mYXN0XCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2F1dG9fbWVyZ2VcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5BVVRPX0NPTTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2luY29tZVwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9hbmdyZVwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIE1BWF9BVVRPX0NPTV9USU1FICsgXCLliIbpkJhcIik7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnQXV0b1Nob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBNQVhfRE9VQkxFX0FUVF9USU1FKjYwICsgXCLnp5JcIik7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dCgnbGJsX2QnLGDpgLLlhaXmiZPpt4TooYDni4DmhYsgIOaMgee6jCR7TUFYX0RPVUJMRV9BVFRfVElNRSo2MH3np5JgKVxyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1JhZ2VTaG93Jywnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0RPVUJMRV9JTkNPTUVfVElNRSArIFwi5YiG6ZCYXCIpO1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0RvdWJsZVNob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0RST1BfUExBTlRfVElNRSArIFwi5YiG6ZCYXCIpO1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0Ryb3BTaG93Jywnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVNVGltZSgpO1xyXG4gICAgICAgIGxldCBpc1J1bm5pbmcgPSBlbmRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9hZCcpLmFjdGl2ZSA9ICFpc1J1bm5pbmc7XHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fbm9ybWFsJykuYWN0aXZlID0gIWlzUnVubmluZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENvaW4oZG91YmxlOm51bWJlciA9IDEpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlzVXNlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0F1dG9DbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKE1BWF9BVVRPX0NPTV9USU1FIC0gQVVUT19DT01fVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgLy8gICAgIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9BVVRPX0NPTV9USU1FICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgKz0gQVVUT19DT01fVElNRSAqIDYwICogMTAwMCAqIGRvdWJsZTtcclxuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1JhZ2VDbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0RPVUJMRV9BVFRfVElNRSAtIERPVUJMRV9BVFRfVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9ET1VCTEVfQVRUX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSArPSBET1VCTEVfQVRUX1RJTUUgKiA2MCAqIDEwMDAgKiBkb3VibGU7XHJcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdEb3VibGVDbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0RPVUJMRV9JTkNPTUVfVElNRSAtIERPVUJMRV9JTkNPTUVfVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSArPSBET1VCTEVfSU5DT01FX1RJTUUgKiA2MCAqIDEwMDAgKiBkb3VibGU7XHJcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpIHtcclxuICAgICAgICAgICAgaWYoZG91YmxlID09IDIpIHtcclxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRHJvcENsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKE1BWF9EUk9QX1BMQU5UX1RJTUUgLSBEUk9QX1BMQU5UX1RJTUUpICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBNc2dUb2FzdC5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBNQVhfRFJPUF9QTEFOVF9USU1FICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgKz0gRFJPUF9QTEFOVF9USU1FICogNjAgKiAxMDAwICogZG91YmxlO1xyXG4gICAgICAgICAgICBpc1VzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgaWYoaXNVc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coJ+S9v+eUqOaIkOWKnycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaGFuZGxlRnJlZUFkKCl7XHJcbiAgICAgICAgbGV0IGlzZnJlZSA9IENoaWNrRGF0YS5pc0ZyZWVBZDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2ljb25fdmlkZW8nKS5hY3RpdmUgPSAhaXNmcmVlXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYnV5ZnJlZScpLmFjdGl2ZSA9ICFpc2ZyZWVcclxuICAgICAgICBpZihpc2ZyZWUpe1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KCdhZF9sYWJlbCcpLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdhZF9sYWJlbCcpLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKDAscG9zLnkpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZENvaW4oMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2FkXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYikgdGhpcy5hZGRDb2luKDIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9ub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29pbigxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX25vcm1hbCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYnV5ZnJlZVwiOlxyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTW9udGhDYXJkVUlcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBFQURMQVlFUiB9XHJcbiJdfQ==