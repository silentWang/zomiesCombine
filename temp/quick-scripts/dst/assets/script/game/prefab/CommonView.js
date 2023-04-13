
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvQ29tbW9uVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG9EQUErQztBQUMvQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULG1EQUFVLENBQUE7SUFDVix5REFBYSxDQUFBO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7QUFDZCxDQUFDLEVBTEksUUFBUSxLQUFSLFFBQVEsUUFLWjtBQXNMUSw0QkFBUTtBQXBMakIsSUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLElBQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFNLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFFZixRQUFBLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUN0QixRQUFBLHNCQUFzQixHQUFHLENBQUMsQ0FBQztBQUMzQixRQUFBLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztBQUN6QixRQUFBLG1CQUFtQixHQUFHLENBQUMsQ0FBQztBQUdyQztJQUF3Qyw4QkFBTTtJQUE5Qzs7SUFxS0EsQ0FBQztJQWxLRywwQkFBSyxHQUFMO1FBRUksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxlQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUVJLGtCQUFRLENBQUMsUUFBUSxF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Q0FBQztvQkFDdkIsSUFBRyxDQUFDO3dCQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNoRCxNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLFFBQVE7Z0JBQ1IsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQXBLZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFLOUI7SUFBRCxpQkFBQztDQXJLRCxBQXFLQyxDQXJLdUMsZ0JBQU0sR0FxSzdDO2tCQXJLb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi8uLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cblxuZW51bSBFQURMQVlFUiB7XG4gICAgRE9VQkxFX0FUVCxcbiAgICBET1VCTEVfSU5DT01FLFxuICAgIEFVVE9fQ09NLFxuICAgIERST1BfUExBTlRcbn1cblxuY29uc3QgQVVUT19DT01fVElNRSA9IDI7XG5jb25zdCBET1VCTEVfSU5DT01FX1RJTUUgPSAyO1xuY29uc3QgRFJPUF9QTEFOVF9USU1FID0gMTA7XG5jb25zdCBET1VCTEVfQVRUX1RJTUUgPSAwLjU7XG5cbmV4cG9ydCBjb25zdCBNQVhfQVVUT19DT01fVElNRSA9IDQ7XG5leHBvcnQgY29uc3QgTUFYX0RPVUJMRV9JTkNPTUVfVElNRSA9IDQ7XG5leHBvcnQgY29uc3QgTUFYX0RST1BfUExBTlRfVElNRSA9IDIwO1xuZXhwb3J0IGNvbnN0IE1BWF9ET1VCTEVfQVRUX1RJTUUgPSAxO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uVmlldyBleHRlbmRzIEJhc2VVSSB7XG5cbiAgICBwcml2YXRlIHR5cGU6IEVBRExBWUVSO1xuICAgIHN0YXJ0KClcbiAgICB7XG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FkJykpXG4gICAgfVxuXG4gICAgb25EZXN0cm95KClcbiAgICB7XG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpXG4gICAge1xuICAgICAgICBpZihkdCA+IDEpIGR0ID0gMTtcbiAgICAgICAgbGV0IHtlbmRfdGltZSxtYXh9ID0gdGhpcy5nZXRFTVRpbWUoKTtcbiAgICAgICAgaWYoZW5kX3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBuTGVmdCA9IGVuZF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICAgICAgLy8gdGhpcy5TZXRQcm9ncmVzc0JhcihcIk5ldyBQcm9ncmVzc0JhclwiLChuTGVmdC8xMDAwLzYwKS9tYXgpO1xuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVcIixVdGlscy5nZXRUaW1lU3RyQnlTKG5MZWZ0LzEwMDApKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIiwwKTtcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF90aW1lXCIsXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIHByaXZhdGUgTVRaYV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcInQ4N0ZqN0Jwd3hcIik7IH1cblxuICAgIHByaXZhdGUgZ2V0RU1UaW1lKCl7XG4gICAgICAgIGxldCBlbmRfdGltZSA9IDA7XG4gICAgICAgIGxldCBtYXggPSAwO1xuICAgICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWU7XG4gICAgICAgICAgICBtYXggPSBNQVhfQVVUT19DT01fVElNRTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xuICAgICAgICAgICAgZW5kX3RpbWUgPSBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWU7XG4gICAgICAgICAgICBtYXggPSBNQVhfRE9VQkxFX0FUVF9USU1FO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XG4gICAgICAgICAgICBlbmRfdGltZSA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZTtcbiAgICAgICAgICAgIG1heCA9IE1BWF9ET1VCTEVfSU5DT01FX1RJTUU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVClcbiAgICAgICAge1xuICAgICAgICAgICAgZW5kX3RpbWUgPSBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWU7XG4gICAgICAgICAgICBtYXggPSBNQVhfRFJPUF9QTEFOVF9USU1FO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7ZW5kX3RpbWUsbWF4fVxuICAgIH1cblxuICAgIHNldFR5cGUoZTogRUFETEFZRVIpIHtcbiAgICAgICAgdGhpcy50eXBlID0gZTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9mYXN0XCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVDtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9hdXRvX21lcmdlXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuQVVUT19DT007XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25faW5jb21lXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9hbmdyZVwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQ7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIE1BWF9BVVRPX0NPTV9USU1FICsgXCLliIbpkp9cIik7XG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0F1dG9TaG93Jywnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0RPVUJMRV9BVFRfVElNRSo2MCArIFwi56eSXCIpO1xuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KCdsYmxfZCcsYOi/m+WFpeaJk+m4oeihgOeKtuaAgSAg5oyB57utJHtNQVhfRE9VQkxFX0FUVF9USU1FKjYwfeenkmApXG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1JhZ2VTaG93Jywnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgTUFYX0RPVUJMRV9JTkNPTUVfVElNRSArIFwi5YiG6ZKfXCIpO1xuICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdEb3VibGVTaG93Jywnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBNQVhfRFJPUF9QTEFOVF9USU1FICsgXCLliIbpkp9cIik7XG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0Ryb3BTaG93Jywnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB7ZW5kX3RpbWUsbWF4fSA9IHRoaXMuZ2V0RU1UaW1lKCk7XG4gICAgICAgIGxldCBpc1J1bm5pbmcgPSBlbmRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYWQnKS5hY3RpdmUgPSAhaXNSdW5uaW5nO1xuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9ub3JtYWwnKS5hY3RpdmUgPSAhaXNSdW5uaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29pbihkb3VibGU6bnVtYmVyID0gMSlcbiAgICB7XG4gICAgICAgIGxldCBpc1VzZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XG4gICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0F1dG9DbGljaycsJ2NsaWNrJyk7XG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChNQVhfQVVUT19DT01fVElNRSAtIEFVVE9fQ09NX1RJTUUpICogNjAgKiAxMDAwKSB7XG4gICAgICAgICAgICAvLyAgICAgTXNnVG9hc3Quc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgTUFYX0FVVE9fQ09NX1RJTUUgKyBcIuWIhumSn1wiKTtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lICs9IEFVVE9fQ09NX1RJTUUgKiA2MCAqIDEwMDAgKiBkb3VibGU7XG4gICAgICAgICAgICBpc1VzZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQpIHtcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnUmFnZUNsaWNrJywnY2xpY2snKTtcbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAoTUFYX0RPVUJMRV9BVFRfVElNRSAtIERPVUJMRV9BVFRfVElNRSkgKiA2MCAqIDEwMDApIHtcbiAgICAgICAgICAgICAgICAvLyBNc2dUb2FzdC5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBNQVhfRE9VQkxFX0FUVF9USU1FICsgXCLliIbpkp9cIik7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSArPSBET1VCTEVfQVRUX1RJTUUgKiA2MCAqIDEwMDAgKiBkb3VibGU7XG4gICAgICAgICAgICBpc1VzZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcbiAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnRG91YmxlQ2xpY2snLCdjbGljaycpO1xuICAgICAgICAgICAgLy8gaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChNQVhfRE9VQkxFX0lOQ09NRV9USU1FIC0gRE9VQkxFX0lOQ09NRV9USU1FKSAqIDYwICogMTAwMCkge1xuICAgICAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgKyBcIuWIhumSn1wiKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lICs9IERPVUJMRV9JTkNPTUVfVElNRSAqIDYwICogMTAwMCAqIGRvdWJsZTtcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVCkge1xuICAgICAgICAgICAgaWYoZG91YmxlID09IDIpIHtcbiAgICAgICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0Ryb3BDbGljaycsJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKE1BWF9EUk9QX1BMQU5UX1RJTUUgLSBEUk9QX1BMQU5UX1RJTUUpICogNjAgKiAxMDAwKSB7XG4gICAgICAgICAgICAvLyAgICAgTXNnVG9hc3Quc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgTUFYX0RST1BfUExBTlRfVElNRSArIFwi5YiG6ZKfXCIpO1xuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGlmIChDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgKz0gRFJPUF9QTEFOVF9USU1FICogNjAgKiAxMDAwICogZG91YmxlO1xuICAgICAgICAgICAgaXNVc2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgIGlmKGlzVXNlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coJ+S9v+eUqOaIkOWKnycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZENvaW4oMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2FkXCI6XG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihiKSB0aGlzLmFkZENvaW4oMik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29pbigxKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9ub3JtYWwnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYnV5ZnJlZVwiOlxuICAgICAgICAgICAgICAgIC8vIHRvIGRvXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyBFQURMQVlFUiB9XG4iXX0=