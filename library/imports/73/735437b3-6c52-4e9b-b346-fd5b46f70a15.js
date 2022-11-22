"use strict";
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
            // this.SetProgressBar("New ProgressBar",(nLeft/1000/60)/max);
            this.SetText("lbl_time", Utils_1.default.getTimeStrByS(nLeft / 1000));
        }
        else {
            // this.SetProgressBar("New ProgressBar",0);
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
    };
    AdLayer.prototype.addvalue = function (gem) {
        if (gem === void 0) { gem = 1; }
        var isUse = false;
        if (this.type == EADLAYER.AUTO_COM) {
            if (Data_1.default.user.auto_com_time - Utils_1.default.getServerTime() > (exports.max_auto_com - add_time_auto_com) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_com + "分钟");
                return;
            }
            if (Data_1.default.user.auto_com_time < Utils_1.default.getServerTime())
                Data_1.default.user.auto_com_time = Utils_1.default.getServerTime();
            Data_1.default.user.auto_com_time += add_time_auto_com * 60 * 1000 * gem;
            isUse = true;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            if (Data_1.default.user.double_att_time - Utils_1.default.getServerTime() > (exports.max_auto_double_att - add_time_double_att) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_double_att + "分钟");
                return;
            }
            if (Data_1.default.user.double_att_time < Utils_1.default.getServerTime())
                Data_1.default.user.double_att_time = Utils_1.default.getServerTime();
            Data_1.default.user.double_att_time += add_time_double_att * 60 * 1000 * gem;
            isUse = true;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            if (Data_1.default.user.double_income_time - Utils_1.default.getServerTime() > (exports.max_auto_double_income - add_time_double_income) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_double_income + "分钟");
                return;
            }
            if (Data_1.default.user.double_income_time < Utils_1.default.getServerTime())
                Data_1.default.user.double_income_time = Utils_1.default.getServerTime();
            Data_1.default.user.double_income_time += add_time_double_income * 60 * 1000 * gem;
            isUse = true;
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            if (Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime() > (exports.max_drop_plant - add_time_drop_plant) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_drop_plant + "分钟");
                return;
            }
            if (Data_1.default.user.drop_plant_time < Utils_1.default.getServerTime())
                Data_1.default.user.drop_plant_time = Utils_1.default.getServerTime();
            Data_1.default.user.drop_plant_time += add_time_drop_plant * 60 * 1000 * gem;
            isUse = true;
        }
        Data_1.default.save();
        if (isUse) {
            this.closeUI();
            MsgHints_1.default.show('使用成功');
        }
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