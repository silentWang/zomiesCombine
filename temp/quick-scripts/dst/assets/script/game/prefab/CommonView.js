
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
    CommonView.prototype.MTZa_xxxx_fun = function () { console.log("t87Fj7Bpwx"); };
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
                }, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXENvbW1vblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QyxJQUFLLFFBS0o7QUFMRCxXQUFLLFFBQVE7SUFDVCxtREFBVSxDQUFBO0lBQ1YseURBQWEsQ0FBQTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUxJLFFBQVEsS0FBUixRQUFRLFFBS1o7QUFzTFEsNEJBQVE7QUFwTGpCLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM3QixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBRWYsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBQSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsUUFBQSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFHckM7SUFBd0MsOEJBQU07SUFBOUM7O0lBcUtBLENBQUM7SUFsS0csMEJBQUssR0FBTDtRQUVJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFFSSxrQkFBUSxDQUFDLFFB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QUFDLENBQUM7b0JBQ3ZCLElBQUcsQ0FBQzt3QkFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hELE1BQU07WUFDVixLQUFLLGFBQWE7Z0JBQ2QsUUFBUTtnQkFDUixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBcEtnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBcUs5QjtJQUFELGlCQUFDO0NBcktELEFBcUtDLENBckt1QyxnQkFBTSxHQXFLN0M7a0JBcktvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuZW51bSBFQURMQVlFUiB7XHJcbiAgICBET1VCTEVfQVRULFxyXG4gICAgRE9VQkxFX0lOQ09NRSxcclxuICAgIEFVVE9fQ09NLFxyXG4gICAgRFJPUF9QTEFOVFxyXG59XHJcblxyXG5jb25zdCBBVVRPX0NPTV9USU1FID0gMjtcclxuY29uc3QgRE9VQkxFX0lOQ09NRV9USU1FID0gMjtcclxuY29uc3QgRFJPUF9QTEFOVF9USU1FID0gMTA7XHJcbmNvbnN0IERPVUJMRV9BVFRfVElNRSA9IDAuNTtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfQVVUT19DT01fVElNRSA9IDQ7XHJcbmV4cG9ydCBjb25zdCBNQVhfRE9VQkxFX0lOQ09NRV9USU1FID0gNDtcclxuZXhwb3J0IGNvbnN0IE1BWF9EUk9QX1BMQU5UX1RJTUUgPSAyMDtcclxuZXhwb3J0IGNvbnN0IE1BWF9ET1VCTEVfQVRUX1RJTUUgPSAxO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uVmlldyBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgcHJpdmF0ZSB0eXBlOiBFQURMQVlFUjtcclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FkJykpXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLmhpZGVHcmlkQWQoKTtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZHQgPiAxKSBkdCA9IDE7XHJcbiAgICAgICAgbGV0IHtlbmRfdGltZSxtYXh9ID0gdGhpcy5nZXRFTVRpbWUoKTtcclxuICAgICAgICBpZihlbmRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuTGVmdCA9IGVuZF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLlNldFByb2dyZXNzQmFyKFwiTmV3IFByb2dyZXNzQmFyXCIsKG5MZWZ0LzEwMDAvNjApL21heCk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF90aW1lXCIsVXRpbHMuZ2V0VGltZVN0ckJ5UyhuTGVmdC8xMDAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIiwwKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVcIixcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBNVFphX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwidDg3Rmo3QnB3eFwiKTsgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RU1UaW1lKCl7XHJcbiAgICAgICAgbGV0IGVuZF90aW1lID0gMDtcclxuICAgICAgICBsZXQgbWF4ID0gMDtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XHJcbiAgICAgICAgICAgIGVuZF90aW1lID0gQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gTUFYX0FVVE9fQ09NX1RJTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcbiAgICAgICAgICAgIGVuZF90aW1lID0gQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBNQVhfRE9VQkxFX0FUVF9USU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gTUFYX0RPVUJMRV9JTkNPTUVfVElNRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVuZF90aW1lID0gQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBNQVhfRFJPUF9QTEFOVF9USU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2VuZF90aW1lLG1heH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUeXBlKGU6IEVBRExBWUVSKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2Zhc3RcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25fYXV0b19tZXJnZVwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkFVVE9fQ09NO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25faW5jb21lXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2FuZ3JlXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0FVVE9fQ09NX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdBdXRvU2hvdycsJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQpIHtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIE1BWF9ET1VCTEVfQVRUX1RJTUUqNjAgKyBcIuenklwiKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KCdsYmxfZCcsYOi/m+WFpeaJk+m4oeihgOeKtuaAgSAg5oyB57utJHtNQVhfRE9VQkxFX0FUVF9USU1FKjYwfeenkmApXHJcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnUmFnZVNob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBNQVhfRE9VQkxFX0lOQ09NRV9USU1FICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRG91YmxlU2hvdycsJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBNQVhfRFJPUF9QTEFOVF9USU1FICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRHJvcFNob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB7ZW5kX3RpbWUsbWF4fSA9IHRoaXMuZ2V0RU1UaW1lKCk7XHJcbiAgICAgICAgbGV0IGlzUnVubmluZyA9IGVuZF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FkJykuYWN0aXZlID0gIWlzUnVubmluZztcclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9ub3JtYWwnKS5hY3RpdmUgPSAhaXNSdW5uaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQ29pbihkb3VibGU6bnVtYmVyID0gMSlcclxuICAgIHtcclxuICAgICAgICBsZXQgaXNVc2UgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnQXV0b0NsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0FVVE9fQ09NX1RJTUUgLSBBVVRPX0NPTV9USU1FKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgTXNnVG9hc3Quc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgTUFYX0FVVE9fQ09NX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSArPSBBVVRPX0NPTV9USU1FICogNjAgKiAxMDAwICogZG91YmxlO1xyXG4gICAgICAgICAgICBpc1VzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnUmFnZUNsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChNQVhfRE9VQkxFX0FUVF9USU1FIC0gRE9VQkxFX0FUVF9USU1FKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTXNnVG9hc3Quc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgTUFYX0RPVUJMRV9BVFRfVElNRSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lICs9IERPVUJMRV9BVFRfVElNRSAqIDYwICogMTAwMCAqIGRvdWJsZTtcclxuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0RvdWJsZUNsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChNQVhfRE9VQkxFX0lOQ09NRV9USU1FIC0gRE9VQkxFX0lOQ09NRV9USU1FKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTXNnVG9hc3Quc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgTUFYX0RPVUJMRV9JTkNPTUVfVElNRSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lICs9IERPVUJMRV9JTkNPTUVfVElNRSAqIDYwICogMTAwMCAqIGRvdWJsZTtcclxuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVCkge1xyXG4gICAgICAgICAgICBpZihkb3VibGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdEcm9wQ2xpY2snLCdjbGljaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0RST1BfUExBTlRfVElNRSAtIERST1BfUExBTlRfVElNRSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgLy8gICAgIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9EUk9QX1BMQU5UX1RJTUUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSArPSBEUk9QX1BMQU5UX1RJTUUgKiA2MCAqIDEwMDAgKiBkb3VibGU7XHJcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICBpZihpc1VzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgTXNnVG9hc3Quc2hvdygn5L2/55So5oiQ5YqfJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkQ29pbigxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYWRcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKSB0aGlzLmFkZENvaW4oMik7XHJcbiAgICAgICAgICAgICAgICB9LDIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvaW4oMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9ub3JtYWwnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2J1eWZyZWVcIjpcclxuICAgICAgICAgICAgICAgIC8vIHRvIGRvXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgRUFETEFZRVIgfVxyXG4iXX0=