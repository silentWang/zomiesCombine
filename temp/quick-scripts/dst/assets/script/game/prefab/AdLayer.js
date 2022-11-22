
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEFkTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULG1EQUFVLENBQUE7SUFDVix5REFBYSxDQUFBO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7QUFDZCxDQUFDLEVBTEksUUFBUSxLQUFSLFFBQVEsUUFLWjtBQTJMUSw0QkFBUTtBQXpMakIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsSUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDbEMsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDL0IsSUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFNLHFCQUFxQixHQUFHLENBQUMsQ0FBQztBQUVuQixRQUFBLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBQSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFBQSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBR2pDO0lBQXFDLDJCQUFNO0lBQTNDOztJQXFLQSxDQUFDO0lBbEtHLHVCQUFLLEdBQUw7UUFFSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBRUksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxJQUFHLEVBQUUsR0FBRyxDQUFDO1lBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUEsS0FBaUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQXZDLFFBQVEsY0FBQSxFQUFDLEdBQUcsU0FBMkIsQ0FBQztRQUM3QyxJQUFHLFFBQVEsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEVBQ25DO1lBQ0ksSUFBSSxLQUFLLEdBQUcsUUFBUSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM3Qyw4REFBOEQ7WUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUMsZUFBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM1RDthQUVEO1lBQ0ksNENBQTRDO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVPLGtDQUFnQixHQUF4QjtRQUNJLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxRQUFRLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDbkMsR0FBRyxHQUFHLG9CQUFZLENBQUM7U0FDdEI7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUN2QyxRQUFRLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDckMsR0FBRyxHQUFHLDJCQUFtQixDQUFDO1NBQzdCO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsUUFBUSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDeEMsR0FBRyxHQUFHLDhCQUFzQixDQUFDO1NBQ2hDO2FBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQ3hDO1lBQ0ksUUFBUSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3JDLEdBQUcsR0FBRyxzQkFBYyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxFQUFDLFFBQVEsVUFBQSxFQUFDLEdBQUcsS0FBQSxFQUFDLENBQUE7SUFDekIsQ0FBQztJQUdELHlCQUFPLEdBQVAsVUFBUSxDQUFXO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNsRSxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDO1FBRW5FLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUM5RDthQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO1lBRXZDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNoRTthQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQzFDLDBFQUEwRTtZQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDbkU7YUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFVBQVUsRUFDeEM7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLEdBQUcsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDaEU7UUFDRyxJQUFBLEtBQWlCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUF2QyxRQUFRLGNBQUEsRUFBQyxHQUFHLFNBQTJCLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxJQUFJLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUMvRSxDQUFDO0lBRU8sMEJBQVEsR0FBaEIsVUFBaUIsR0FBYztRQUFkLG9CQUFBLEVBQUEsT0FBYztRQUUzQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxvQkFBWSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRTtnQkFDbEcsa0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzlDLE9BQU87YUFDVjtZQUNELElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRTtnQkFDL0MsY0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BELGNBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQy9ELEtBQUssR0FBRyxJQUFJLENBQUM7U0FDaEI7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUN2QyxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLDJCQUFtQixHQUFHLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRTtnQkFDN0csa0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNyRCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQ2pELGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN0RCxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxtQkFBbUIsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLDhCQUFzQixHQUFHLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRTtnQkFDdEgsa0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLDhCQUFzQixHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRTtnQkFDcEQsY0FBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekQsY0FBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxzQkFBc0IsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUN6RSxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDdkMsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxzQkFBYyxHQUFHLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRTtnQkFDeEcsa0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFjLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELE9BQU87YUFDVjtZQUNELElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRTtnQkFDakQsY0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RELGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLG1CQUFtQixHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ25FLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDaEI7UUFDRCxjQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFHLEtBQUssRUFBRTtZQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLGtCQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELDhCQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsZUFBZTtRQUFuQyxpQkFpQ0M7UUFoQ0csSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1Qsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO29CQUN2QixJQUFHLENBQUM7d0JBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hELE1BQU07WUFDVixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLDRDQUE0QztZQUM1Qyw2QkFBNkI7WUFDN0IsUUFBUTtZQUNSLG1EQUFtRDtZQUNuRCwrQkFBK0I7WUFDL0IsUUFBUTtZQUNSLHNEQUFzRDtZQUN0RCxxREFBcUQ7WUFDckQsUUFBUTtZQUNSLG1EQUFtRDtZQUNuRCx1REFBdUQ7WUFDdkQsUUFBUTtZQUNSLDBCQUEwQjtZQUMxQixhQUFhO1NBQ1o7SUFDVCxDQUFDO0lBcEtnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBcUszQjtJQUFELGNBQUM7Q0FyS0QsQUFxS0MsQ0FyS29DLGdCQUFNLEdBcUsxQztrQkFyS29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IE1zZ0hpbnRzIGZyb20gXCIuLi8uLi9mcmFtd29yay9Nc2dIaW50c1wiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvRGF0YVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuZW51bSBFQURMQVlFUiB7XHJcbiAgICBET1VCTEVfQVRULFxyXG4gICAgRE9VQkxFX0lOQ09NRSxcclxuICAgIEFVVE9fQ09NLFxyXG4gICAgRFJPUF9QTEFOVFxyXG59XHJcblxyXG5jb25zdCBhZGRfdGltZV9hdXRvX2NvbSA9IDI7XHJcbmNvbnN0IGFkZF90aW1lX2RvdWJsZV9pbmNvbWUgPSAxMDtcclxuY29uc3QgYWRkX3RpbWVfZHJvcF9wbGFudCA9IDEwO1xyXG5jb25zdCBhZGRfdGltZV9kb3VibGVfYXR0ID0gMTtcclxuXHJcbmNvbnN0IGF1dG9fY29tX2dlbSA9IDQ7XHJcbmNvbnN0IGRvdWJsZV9pbmNvbWVfZ2VtID0gNDtcclxuY29uc3QgZG91YmxlX2F0dF9nZW0gPSA0O1xyXG5jb25zdCBkb3VibGVfZHJvcF9wbGFudF9nZW0gPSA0O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1heF9hdXRvX2NvbSA9IDEwO1xyXG5leHBvcnQgY29uc3QgbWF4X2F1dG9fZG91YmxlX2luY29tZSA9IDYwO1xyXG5leHBvcnQgY29uc3QgbWF4X2F1dG9fZG91YmxlX2F0dCA9IDY7XHJcbmV4cG9ydCBjb25zdCBtYXhfZHJvcF9wbGFudCA9IDYwO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRMYXllciBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG5cclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZihkdCA+IDEpIGR0ID0gMTtcclxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVuZEFuZE1heFRpbWUoKTtcclxuICAgICAgICBpZihlbmRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuTGVmdCA9IGVuZF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLlNldFByb2dyZXNzQmFyKFwiTmV3IFByb2dyZXNzQmFyXCIsKG5MZWZ0LzEwMDAvNjApL21heCk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF90aW1lXCIsVXRpbHMuZ2V0VGltZVN0ckJ5UyhuTGVmdC8xMDAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIiwwKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVcIixcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFbmRBbmRNYXhUaW1lKCl7XHJcbiAgICAgICAgbGV0IGVuZF90aW1lID0gMDtcclxuICAgICAgICBsZXQgbWF4ID0gMDtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XHJcbiAgICAgICAgICAgIGVuZF90aW1lID0gRGF0YS51c2VyLmF1dG9fY29tX3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IG1heF9hdXRvX2NvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQpIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBtYXhfYXV0b19kb3VibGVfYXR0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IG1heF9hdXRvX2RvdWJsZV9pbmNvbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IERhdGEudXNlci5kcm9wX3BsYW50X3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IG1heF9kcm9wX3BsYW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2VuZF90aW1lLG1heH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHR5cGU6IEVBRExBWUVSO1xyXG4gICAgc2V0VHlwZShlOiBFQURMQVlFUikge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9mYXN0XCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2F1dG9fbWVyZ2VcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5BVVRPX0NPTTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2luY29tZVwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9hbmdyZVwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIGFkZF90aW1lX2F1dG9fY29tICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgYWRkX3RpbWVfZG91YmxlX2F0dCArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwi5aKe5YqgXCIgKyBhZGRfdGltZV9kb3VibGVfaW5jb21lICsgXCLliIbpkp/lj4zlgI3mlLbnm4rml7bpl7RcIik7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBhZGRfdGltZV9kb3VibGVfaW5jb21lICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgYWRkX3RpbWVfZHJvcF9wbGFudCArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQge2VuZF90aW1lLG1heH0gPSB0aGlzLmdldEVuZEFuZE1heFRpbWUoKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9ub3JtYWwnKS5hY3RpdmUgPSBlbmRfdGltZSA8PSBVdGlscy5nZXRTZXJ2ZXJUaW1lKClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZHZhbHVlKGdlbTpudW1iZXIgPSAxKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpc1VzZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9hdXRvX2NvbSAtIGFkZF90aW1lX2F1dG9fY29tKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2F1dG9fY29tICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5hdXRvX2NvbV90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIERhdGEudXNlci5hdXRvX2NvbV90aW1lICs9IGFkZF90aW1lX2F1dG9fY29tICogNjAgKiAxMDAwICogZ2VtO1xyXG4gICAgICAgICAgICBpc1VzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9hdXRvX2RvdWJsZV9hdHQgLSBhZGRfdGltZV9kb3VibGVfYXR0KSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2F1dG9fZG91YmxlX2F0dCArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSArPSBhZGRfdGltZV9kb3VibGVfYXR0ICogNjAgKiAxMDAwICogZ2VtO1xyXG4gICAgICAgICAgICBpc1VzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9hdXRvX2RvdWJsZV9pbmNvbWUgLSBhZGRfdGltZV9kb3VibGVfaW5jb21lKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2F1dG9fZG91YmxlX2luY29tZSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSArPSBhZGRfdGltZV9kb3VibGVfaW5jb21lICogNjAgKiAxMDAwICogZ2VtO1xyXG4gICAgICAgICAgICBpc1VzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9kcm9wX3BsYW50IC0gYWRkX3RpbWVfZHJvcF9wbGFudCkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIG1heF9kcm9wX3BsYW50ICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lICs9IGFkZF90aW1lX2Ryb3BfcGxhbnQgKiA2MCAqIDEwMDAgKiBnZW07XHJcbiAgICAgICAgICAgIGlzVXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgaWYoaXNVc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coJ+S9v+eUqOaIkOWKnycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYWRcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKSB0aGlzLmFkZHZhbHVlKDIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9ub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkdmFsdWUoMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9ub3JtYWwnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBjYXNlIFwiYnRuX2dlbVwiOlxyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGdlbSA9IDA7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZ2VtID0gYXV0b19jb21fZ2VtXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGdlbSA9IGRvdWJsZV9hdHRfZ2VtXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGdlbSA9IGRvdWJsZV9pbmNvbWVfZ2VtICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBnZW0gPSBkb3VibGVfZHJvcF9wbGFudF9nZW0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hZGR2YWx1ZShnZW0pO1xyXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBFQURMQVlFUiB9XHJcbiJdfQ==