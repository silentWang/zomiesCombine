
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/AdLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73543ezbFJOm7NG/VtG9woV', 'AdLayer');
// script/game/prefab/AdLayer.ts

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
exports.EADLAYER = exports.max_drop_plant = exports.max_auto_double_att = exports.max_auto_double_income = exports.max_auto_com = void 0;
var BaseUI_1 = require("../../framwork/BaseUI");
var MsgHints_1 = require("../../framwork/MsgHints");
var AdCenter_1 = require("../../manager/AdCenter");
var Data_1 = require("../../manager/Data");
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
var add_time_auto_com = 2;
var add_time_double_income = 10;
var add_time_drop_plant = 10;
var add_time_double_att = 1;
var auto_com_gem = 4;
var double_income_gem = 4;
var double_att_gem = 4;
var double_drop_plant_gem = 4;
exports.max_auto_com = 10;
exports.max_auto_double_income = 60;
exports.max_auto_double_att = 6;
exports.max_drop_plant = 60;
var AdLayer = /** @class */ (function (_super) {
    __extends(AdLayer, _super);
    function AdLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdLayer.prototype.start = function () {
        AdCenter_1.default.Instance().showGridAd();
    };
    AdLayer.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
    };
    AdLayer.prototype.update = function (dt) {
        if (dt > 1)
            dt = 1;
        var _a = this.getEndAndMaxTime(), end_time = _a.end_time, max = _a.max;
        if (end_time > Utils_1.default.getServerTime()) {
            var nLeft = end_time - Utils_1.default.getServerTime();
            this.SetProgressBar("New ProgressBar", (nLeft / 1000 / 60) / max);
            this.SetText("lbl_time", Utils_1.default.getTimeStrByS(nLeft / 1000));
        }
        else {
            this.SetProgressBar("New ProgressBar", 0);
            this.SetText("lbl_time", "");
        }
    };
    AdLayer.prototype.getEndAndMaxTime = function () {
        var end_time = 0;
        var max = 0;
        if (this.type == EADLAYER.AUTO_COM) {
            end_time = Data_1.default.user.auto_com_time;
            max = exports.max_auto_com;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            end_time = Data_1.default.user.double_att_time;
            max = exports.max_auto_double_att;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            end_time = Data_1.default.user.double_income_time;
            max = exports.max_auto_double_income;
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            end_time = Data_1.default.user.drop_plant_time;
            max = exports.max_drop_plant;
        }
        return { end_time: end_time, max: max };
    };
    AdLayer.prototype.setType = function (e) {
        this.type = e;
        this.GetGameObject("icon_fast").active = e == EADLAYER.DROP_PLANT;
        this.GetGameObject("icon_auto_merge").active = e == EADLAYER.AUTO_COM;
        this.GetGameObject("icon_income").active = e == EADLAYER.DOUBLE_INCOME;
        this.GetGameObject("icon_angre").active = e == EADLAYER.DOUBLE_ATT;
        // let btntype = AD_SHARE.攻击x2
        // if (e == EADLAYER.AUTO_COM)
        //     btntype = AD_SHARE.自动合成
        // else if (e == EADLAYER.DOUBLE_INCOME)
        //     btntype = AD_SHARE.收益x2
        // this.getComponentInChildren(AdOrShare).changeType(btntype);
        if (this.type == EADLAYER.AUTO_COM) {
            this.SetText("lbl_effect", "+" + add_time_auto_com + "分钟");
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            this.SetText("lbl_effect", "+" + add_time_double_att + "分钟");
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            // this.SetText("lbl_effect", "增加" + add_time_double_income + "分钟双倍收益时间");
            this.SetText("lbl_effect", "+" + add_time_double_income + "分钟");
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            this.SetText("lbl_effect", "+" + add_time_drop_plant + "分钟");
        }
        var _a = this.getEndAndMaxTime(), end_time = _a.end_time, max = _a.max;
        this.GetGameObject('btn_normal').active = end_time <= Utils_1.default.getServerTime();
        // var b: boolean = true;
        // if (this.type == EADLAYER.AUTO_COM && Data.user.auto_com_time == 0)
        //     b = false;
        // if (this.type == EADLAYER.DOUBLE_ATT && Data.user.double_att_time == 0)
        //     b = false;
        // if (this.type == EADLAYER.DOUBLE_INCOME && Data.user.double_income_time == 0)
        //     b = false;
        // this.GetGameObject("btn_play").active = b;
    };
    AdLayer.prototype.addvalue = function (gem) {
        if (gem === void 0) { gem = 1; }
        // if(gem>0)
        // {
        //     if(gem > Data.user.gem)
        //     {
        //         MsgHints.show("钻石不足");
        //         return;
        //     }
        //     else  Data.user.gem -= gem;
        // }
        if (this.type == EADLAYER.AUTO_COM) {
            if (Data_1.default.user.auto_com_time - Utils_1.default.getServerTime() > (exports.max_auto_com - add_time_auto_com) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_com + "分钟");
                return;
            }
            if (Data_1.default.user.auto_com_time < Utils_1.default.getServerTime())
                Data_1.default.user.auto_com_time = Utils_1.default.getServerTime();
            Data_1.default.user.auto_com_time += add_time_auto_com * 60 * 1000 * gem;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            if (Data_1.default.user.double_att_time - Utils_1.default.getServerTime() > (exports.max_auto_double_att - add_time_double_att) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_double_att + "分钟");
                return;
            }
            if (Data_1.default.user.double_att_time < Utils_1.default.getServerTime())
                Data_1.default.user.double_att_time = Utils_1.default.getServerTime();
            Data_1.default.user.double_att_time += add_time_double_att * 60 * 1000 * gem;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            if (Data_1.default.user.double_income_time - Utils_1.default.getServerTime() > (exports.max_auto_double_income - add_time_double_income) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_double_income + "分钟");
                return;
            }
            if (Data_1.default.user.double_income_time < Utils_1.default.getServerTime())
                Data_1.default.user.double_income_time = Utils_1.default.getServerTime();
            Data_1.default.user.double_income_time += add_time_double_income * 60 * 1000 * gem;
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            if (Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime() > (exports.max_drop_plant - add_time_drop_plant) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_drop_plant + "分钟");
                return;
            }
            if (Data_1.default.user.drop_plant_time < Utils_1.default.getServerTime())
                Data_1.default.user.drop_plant_time = Utils_1.default.getServerTime();
            Data_1.default.user.drop_plant_time += add_time_drop_plant * 60 * 1000 * gem;
        }
        Data_1.default.save();
    };
    AdLayer.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_ad":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b)
                        _this.addvalue(2);
                });
                break;
            case "btn_normal":
                this.addvalue(1);
                this.GetGameObject('btn_normal').active = false;
                break;
            // case "btn_gem":
            //     let gem = 0;
            //     if (this.type == EADLAYER.AUTO_COM) {
            //         gem = auto_com_gem
            //     }
            //     else if (this.type == EADLAYER.DOUBLE_ATT) {
            //         gem = double_att_gem
            //     }
            //     else if (this.type == EADLAYER.DOUBLE_INCOME) {
            //         gem = double_income_gem                   
            //     }
            //     else if (this.type == EADLAYER.DROP_PLANT) {
            //         gem = double_drop_plant_gem                 
            //     }
            //     this.addvalue(gem);
            //     break;
        }
    };
    AdLayer = __decorate([
        ccclass
    ], AdLayer);
    return AdLayer;
}(BaseUI_1.default));
exports.default = AdLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEFkTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULG1EQUFVLENBQUE7SUFDVix5REFBYSxDQUFBO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7QUFDZCxDQUFDLEVBTEksUUFBUSxLQUFSLFFBQVEsUUFLWjtBQTRNUSw0QkFBUTtBQTFNakIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsSUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDbEMsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDL0IsSUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFNLHFCQUFxQixHQUFHLENBQUMsQ0FBQztBQUVuQixRQUFBLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBQSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFBQSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBR2pDO0lBQXFDLDJCQUFNO0lBQTNDOztJQXNMQSxDQUFDO0lBbkxHLHVCQUFLLEdBQUw7UUFFSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxD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Q0FzTDNCO0lBQUQsY0FBQztDQXRMRCxBQXNMQyxDQXRMb0MsZ0JBQU0sR0FzTDFDO2tCQXRMb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgTXNnSGludHMgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL01zZ0hpbnRzXCI7XHJcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5lbnVtIEVBRExBWUVSIHtcclxuICAgIERPVUJMRV9BVFQsXHJcbiAgICBET1VCTEVfSU5DT01FLFxyXG4gICAgQVVUT19DT00sXHJcbiAgICBEUk9QX1BMQU5UXHJcbn1cclxuXHJcbmNvbnN0IGFkZF90aW1lX2F1dG9fY29tID0gMjtcclxuY29uc3QgYWRkX3RpbWVfZG91YmxlX2luY29tZSA9IDEwO1xyXG5jb25zdCBhZGRfdGltZV9kcm9wX3BsYW50ID0gMTA7XHJcbmNvbnN0IGFkZF90aW1lX2RvdWJsZV9hdHQgPSAxO1xyXG5cclxuY29uc3QgYXV0b19jb21fZ2VtID0gNDtcclxuY29uc3QgZG91YmxlX2luY29tZV9nZW0gPSA0O1xyXG5jb25zdCBkb3VibGVfYXR0X2dlbSA9IDQ7XHJcbmNvbnN0IGRvdWJsZV9kcm9wX3BsYW50X2dlbSA9IDQ7XHJcblxyXG5leHBvcnQgY29uc3QgbWF4X2F1dG9fY29tID0gMTA7XHJcbmV4cG9ydCBjb25zdCBtYXhfYXV0b19kb3VibGVfaW5jb21lID0gNjA7XHJcbmV4cG9ydCBjb25zdCBtYXhfYXV0b19kb3VibGVfYXR0ID0gNjtcclxuZXhwb3J0IGNvbnN0IG1heF9kcm9wX3BsYW50ID0gNjA7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZExheWVyIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcblxyXG4gICAgc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gICAgICAgIGlmKGR0PjEpZHQ9MTtcclxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVuZEFuZE1heFRpbWUoKTtcclxuICAgICAgICBpZihlbmRfdGltZT5VdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbkxlZnQgPSBlbmRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRQcm9ncmVzc0JhcihcIk5ldyBQcm9ncmVzc0JhclwiLChuTGVmdC8xMDAwLzYwKS9tYXgpO1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfdGltZVwiLFV0aWxzLmdldFRpbWVTdHJCeVMobkxlZnQvMTAwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlNldFByb2dyZXNzQmFyKFwiTmV3IFByb2dyZXNzQmFyXCIsMCk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF90aW1lXCIsXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RW5kQW5kTWF4VGltZSgpe1xyXG4gICAgICAgIGxldCBlbmRfdGltZSA9IDA7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IERhdGEudXNlci5hdXRvX2NvbV90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBtYXhfYXV0b19jb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcbiAgICAgICAgICAgIGVuZF90aW1lID0gRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gbWF4X2F1dG9fZG91YmxlX2F0dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBtYXhfYXV0b19kb3VibGVfaW5jb21lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBtYXhfZHJvcF9wbGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtlbmRfdGltZSxtYXh9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0eXBlOiBFQURMQVlFUjtcclxuICAgIHNldFR5cGUoZTogRUFETEFZRVIpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25fZmFzdFwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRST1BfUExBTlQ7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9hdXRvX21lcmdlXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuQVVUT19DT007XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9pbmNvbWVcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25fYW5ncmVcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUO1xyXG5cclxuICAgICAgICAvLyBsZXQgYnRudHlwZSA9IEFEX1NIQVJFLuaUu+WHu3gyXHJcbiAgICAgICAgLy8gaWYgKGUgPT0gRUFETEFZRVIuQVVUT19DT00pXHJcbiAgICAgICAgLy8gICAgIGJ0bnR5cGUgPSBBRF9TSEFSRS7oh6rliqjlkIjmiJBcclxuICAgICAgICAvLyBlbHNlIGlmIChlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpXHJcbiAgICAgICAgLy8gICAgIGJ0bnR5cGUgPSBBRF9TSEFSRS7mlLbnm4p4MlxyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihBZE9yU2hhcmUpLmNoYW5nZVR5cGUoYnRudHlwZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIGFkZF90aW1lX2F1dG9fY29tICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgYWRkX3RpbWVfZG91YmxlX2F0dCArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwi5aKe5YqgXCIgKyBhZGRfdGltZV9kb3VibGVfaW5jb21lICsgXCLliIbpkp/lj4zlgI3mlLbnm4rml7bpl7RcIik7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBhZGRfdGltZV9kb3VibGVfaW5jb21lICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgYWRkX3RpbWVfZHJvcF9wbGFudCArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHtlbmRfdGltZSxtYXh9ID0gdGhpcy5nZXRFbmRBbmRNYXhUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fbm9ybWFsJykuYWN0aXZlID0gZW5kX3RpbWUgPD0gVXRpbHMuZ2V0U2VydmVyVGltZSgpXHJcblxyXG4gICAgICAgIC8vIHZhciBiOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NICYmIERhdGEudXNlci5hdXRvX2NvbV90aW1lID09IDApXHJcbiAgICAgICAgLy8gICAgIGIgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQgJiYgRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9PSAwKVxyXG4gICAgICAgIC8vICAgICBiID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FICYmIERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPT0gMClcclxuICAgICAgICAvLyAgICAgYiA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9wbGF5XCIpLmFjdGl2ZSA9IGI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGR2YWx1ZShnZW06bnVtYmVyID0gMSlcclxuICAgIHtcclxuICAgICAgICAvLyBpZihnZW0+MClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlmKGdlbSA+IERhdGEudXNlci5nZW0pXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLpkrvnn7PkuI3otrNcIik7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZWxzZSAgRGF0YS51c2VyLmdlbSAtPSBnZW07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9hdXRvX2NvbSAtIGFkZF90aW1lX2F1dG9fY29tKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2F1dG9fY29tICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5hdXRvX2NvbV90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIERhdGEudXNlci5hdXRvX2NvbV90aW1lICs9IGFkZF90aW1lX2F1dG9fY29tICogNjAgKiAxMDAwICogZ2VtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChtYXhfYXV0b19kb3VibGVfYXR0IC0gYWRkX3RpbWVfZG91YmxlX2F0dCkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIG1heF9hdXRvX2RvdWJsZV9hdHQgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgKz0gYWRkX3RpbWVfZG91YmxlX2F0dCAqIDYwICogMTAwMCAqIGdlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2F1dG9fZG91YmxlX2luY29tZSAtIGFkZF90aW1lX2RvdWJsZV9pbmNvbWUpICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBtYXhfYXV0b19kb3VibGVfaW5jb21lICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lICs9IGFkZF90aW1lX2RvdWJsZV9pbmNvbWUgKiA2MCAqIDEwMDAgKiBnZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9kcm9wX3BsYW50IC0gYWRkX3RpbWVfZHJvcF9wbGFudCkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIG1heF9kcm9wX3BsYW50ICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lICs9IGFkZF90aW1lX2Ryb3BfcGxhbnQgKiA2MCAqIDEwMDAgKiBnZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERhdGEuc2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9jbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9hZFwiOlxyXG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGIpIHRoaXMuYWRkdmFsdWUoMik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGR2YWx1ZSgxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX25vcm1hbCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGNhc2UgXCJidG5fZ2VtXCI6XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgZ2VtID0gMDtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBnZW0gPSBhdXRvX2NvbV9nZW1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZ2VtID0gZG91YmxlX2F0dF9nZW1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZ2VtID0gZG91YmxlX2luY29tZV9nZW0gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGdlbSA9IGRvdWJsZV9kcm9wX3BsYW50X2dlbSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFkZHZhbHVlKGdlbSk7XHJcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IEVBRExBWUVSIH1cclxuIl19