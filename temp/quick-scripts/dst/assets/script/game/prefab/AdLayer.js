
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
        // var b: boolean = true;
        // if (this.type == EADLAYER.AUTO_COM && Data.user.auto_com_time == 0)
        //     b = false;
        // if (this.type == EADLAYER.DOUBLE_ATT && Data.user.double_att_time == 0)
        //     b = false;
        // if (this.type == EADLAYER.DOUBLE_INCOME && Data.user.double_income_time == 0)
        //     b = false;
        // this.GetGameObject("btn_play").active = b;
    };
    AdLayer.prototype.checkIsMax = function () {
        // if (this.type == EADLAYER.AUTO_COM && Data.user.auto_com_time == 0) {
        //     Data.user.auto_com_time = Utils.getServerTime();
        //     Data.user.auto_com_time += add_time_auto_com * 60 * 1000;
        //     cc.log("第一次免广告")
        //     return
        // }
        // if (this.type == EADLAYER.DOUBLE_ATT && Data.user.double_att_time == 0) {
        //     Data.user.double_att_time = Utils.getServerTime();
        //     Data.user.double_att_time += add_time_double_att * 60 * 1000;
        //     cc.log("第一次免广告")
        //     return
        // }
        // if (this.type == EADLAYER.DOUBLE_INCOME && Data.user.double_income_time == 0) {
        //     Data.user.double_income_time = Utils.getServerTime();
        //     Data.user.double_income_time += add_time_double_income * 60 * 1000;
        //     cc.log("第一次免广告")
        //     return
        // }
        // if (this.type == EADLAYER.DROP_PLANT && Data.user.drop_plant_time == 0) {
        //     Data.user.drop_plant_time = Utils.getServerTime();
        //     Data.user.drop_plant_time += add_time_drop_plant * 60 * 1000;
        //     cc.log("第一次免广告")
        //     return
        // }
        // if (this.type == EADLAYER.AUTO_COM) {
        //     if (Data.user.auto_com_time - Utils.getServerTime() > (max_auto_com - add_time_auto_com) * 60 * 1000) {
        //         MsgHints.show("最大累积时间" + max_auto_com + "分钟");
        //         return;
        //     }
        // }
        // else if (this.type == EADLAYER.DOUBLE_ATT) {
        //     if (Data.user.double_att_time - Utils.getServerTime() > (max_auto_double_att - add_time_double_att) * 60 * 1000) {
        //         MsgHints.show("最大累积时间" + max_auto_double_att + "分钟");
        //         return;
        //     }
        // }
        // else if (this.type == EADLAYER.DOUBLE_INCOME) {
        //     if (Data.user.double_income_time - Utils.getServerTime() > (max_auto_double_income - add_time_double_income) * 60 * 1000) {
        //         MsgHints.show("最大累积时间" + max_auto_double_income + "分钟");
        //         return;
        //     }
        // }
        // else if (this.type == EADLAYER.DROP_PLANT) {
        //     if (Data.user.drop_plant_time - Utils.getServerTime() > (max_drop_plant - add_time_drop_plant) * 60 * 1000) {
        //         MsgHints.show("最大累积时间" + max_drop_plant + "分钟");
        //         return;
        //     }
        // }
    };
    AdLayer.prototype.addvalue = function (gem) {
        if (gem === void 0) { gem = 0; }
        if (gem > 0) {
            if (gem > Data_1.default.user.gem) {
                MsgHints_1.default.show("钻石不足");
                return;
            }
            else
                Data_1.default.user.gem -= gem;
        }
        if (this.type == EADLAYER.AUTO_COM) {
            if (Data_1.default.user.auto_com_time - Utils_1.default.getServerTime() > (exports.max_auto_com - add_time_auto_com) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_com + "分钟");
                return;
            }
            if (Data_1.default.user.auto_com_time < Utils_1.default.getServerTime())
                Data_1.default.user.auto_com_time = Utils_1.default.getServerTime();
            Data_1.default.user.auto_com_time += add_time_auto_com * 60 * 1000;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            if (Data_1.default.user.double_att_time - Utils_1.default.getServerTime() > (exports.max_auto_double_att - add_time_double_att) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_double_att + "分钟");
                return;
            }
            if (Data_1.default.user.double_att_time < Utils_1.default.getServerTime())
                Data_1.default.user.double_att_time = Utils_1.default.getServerTime();
            Data_1.default.user.double_att_time += add_time_double_att * 60 * 1000;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            if (Data_1.default.user.double_income_time - Utils_1.default.getServerTime() > (exports.max_auto_double_income - add_time_double_income) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_double_income + "分钟");
                return;
            }
            if (Data_1.default.user.double_income_time < Utils_1.default.getServerTime())
                Data_1.default.user.double_income_time = Utils_1.default.getServerTime();
            Data_1.default.user.double_income_time += add_time_double_income * 60 * 1000;
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            if (Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime() > (exports.max_drop_plant - add_time_drop_plant) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_drop_plant + "分钟");
                return;
            }
            if (Data_1.default.user.drop_plant_time < Utils_1.default.getServerTime())
                Data_1.default.user.drop_plant_time = Utils_1.default.getServerTime();
            Data_1.default.user.drop_plant_time += add_time_drop_plant * 60 * 1000;
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
                AdCenter_1.default.Instance().play(0, function (b) {
                    if (b)
                        _this.addvalue();
                });
                break;
            case "btn_normal":
                this.addvalue();
                break;
            case "btn_gem":
                var gem = 0;
                if (this.type == EADLAYER.AUTO_COM) {
                    gem = auto_com_gem;
                }
                else if (this.type == EADLAYER.DOUBLE_ATT) {
                    gem = double_att_gem;
                }
                else if (this.type == EADLAYER.DOUBLE_INCOME) {
                    gem = double_income_gem;
                }
                else if (this.type == EADLAYER.DROP_PLANT) {
                    gem = double_drop_plant_gem;
                }
                this.addvalue(gem);
                break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEFkTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULG1EQUFVLENBQUE7SUFDVix5REFBYSxDQUFBO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7QUFDZCxDQUFDLEVBTEksUUFBUSxLQUFSLFFBQVEsUUFLWjtBQTBQUSw0QkFBUTtBQXhQakIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsSUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDbEMsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDL0IsSUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFNLHFCQUFxQixHQUFHLENBQUMsQ0FBQztBQUVuQixRQUFBLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBQSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFBQSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBR2pDO0lBQXFDLDJCQUFNO0lBQTNDOztJQW9PQSxDQUFDO0lBak9HLHVCQUFLLEdBQUw7UUFFSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxD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USxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO29CQUNoQyxHQUFHLEdBQUcsWUFBWSxDQUFBO2lCQUNyQjtxQkFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtvQkFDdkMsR0FBRyxHQUFHLGNBQWMsQ0FBQTtpQkFDdkI7cUJBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7b0JBQzFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQTtpQkFDMUI7cUJBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQ3ZDLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQTtpQkFDOUI7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtTQUNUO0lBQ1QsQ0FBQztJQW5PZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQW9PM0I7SUFBRCxjQUFDO0NBcE9ELEFBb09DLENBcE9vQyxnQkFBTSxHQW9PMUM7a0JBcE9vQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBNc2dIaW50cyBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnSGludHNcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmVudW0gRUFETEFZRVIge1xyXG4gICAgRE9VQkxFX0FUVCxcclxuICAgIERPVUJMRV9JTkNPTUUsXHJcbiAgICBBVVRPX0NPTSxcclxuICAgIERST1BfUExBTlRcclxufVxyXG5cclxuY29uc3QgYWRkX3RpbWVfYXV0b19jb20gPSAyO1xyXG5jb25zdCBhZGRfdGltZV9kb3VibGVfaW5jb21lID0gMTA7XHJcbmNvbnN0IGFkZF90aW1lX2Ryb3BfcGxhbnQgPSAxMDtcclxuY29uc3QgYWRkX3RpbWVfZG91YmxlX2F0dCA9IDE7XHJcblxyXG5jb25zdCBhdXRvX2NvbV9nZW0gPSA0O1xyXG5jb25zdCBkb3VibGVfaW5jb21lX2dlbSA9IDQ7XHJcbmNvbnN0IGRvdWJsZV9hdHRfZ2VtID0gNDtcclxuY29uc3QgZG91YmxlX2Ryb3BfcGxhbnRfZ2VtID0gNDtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXhfYXV0b19jb20gPSAxMDtcclxuZXhwb3J0IGNvbnN0IG1heF9hdXRvX2RvdWJsZV9pbmNvbWUgPSA2MDtcclxuZXhwb3J0IGNvbnN0IG1heF9hdXRvX2RvdWJsZV9hdHQgPSA2O1xyXG5leHBvcnQgY29uc3QgbWF4X2Ryb3BfcGxhbnQgPSA2MDtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkTGF5ZXIgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuXHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5zaG93R3JpZEFkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLmhpZGVHcmlkQWQoKTtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZHQ+MSlkdD0xO1xyXG4gICAgICAgIGxldCBlbmRfdGltZSA9IDA7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IERhdGEudXNlci5hdXRvX2NvbV90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBtYXhfYXV0b19jb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcbiAgICAgICAgICAgIGVuZF90aW1lID0gRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gbWF4X2F1dG9fZG91YmxlX2F0dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBtYXhfYXV0b19kb3VibGVfaW5jb21lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lO1xyXG4gICAgICAgICAgICBtYXggPSBtYXhfZHJvcF9wbGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZW5kX3RpbWU+VXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5MZWZ0ID0gZW5kX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIiwobkxlZnQvMTAwMC82MCkvbWF4KTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVcIixVdGlscy5nZXRUaW1lU3RyQnlTKG5MZWZ0LzEwMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5TZXRQcm9ncmVzc0JhcihcIk5ldyBQcm9ncmVzc0JhclwiLDApO1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfdGltZVwiLFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0eXBlOiBFQURMQVlFUjtcclxuICAgIHNldFR5cGUoZTogRUFETEFZRVIpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25fZmFzdFwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkRST1BfUExBTlQ7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9hdXRvX21lcmdlXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuQVVUT19DT007XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaWNvbl9pbmNvbWVcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25fYW5ncmVcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUO1xyXG5cclxuICAgICAgICAvLyBsZXQgYnRudHlwZSA9IEFEX1NIQVJFLuaUu+WHu3gyXHJcbiAgICAgICAgLy8gaWYgKGUgPT0gRUFETEFZRVIuQVVUT19DT00pXHJcbiAgICAgICAgLy8gICAgIGJ0bnR5cGUgPSBBRF9TSEFSRS7oh6rliqjlkIjmiJBcclxuICAgICAgICAvLyBlbHNlIGlmIChlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpXHJcbiAgICAgICAgLy8gICAgIGJ0bnR5cGUgPSBBRF9TSEFSRS7mlLbnm4p4MlxyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihBZE9yU2hhcmUpLmNoYW5nZVR5cGUoYnRudHlwZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2VmZmVjdFwiLCBcIitcIiArIGFkZF90aW1lX2F1dG9fY29tICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgYWRkX3RpbWVfZG91YmxlX2F0dCArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwi5aKe5YqgXCIgKyBhZGRfdGltZV9kb3VibGVfaW5jb21lICsgXCLliIbpkp/lj4zlgI3mlLbnm4rml7bpl7RcIik7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCIrXCIgKyBhZGRfdGltZV9kb3VibGVfaW5jb21lICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwiK1wiICsgYWRkX3RpbWVfZHJvcF9wbGFudCArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmFyIGI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00gJiYgRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPT0gMClcclxuICAgICAgICAvLyAgICAgYiA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCAmJiBEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID09IDApXHJcbiAgICAgICAgLy8gICAgIGIgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUgJiYgRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9PSAwKVxyXG4gICAgICAgIC8vICAgICBiID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3BsYXlcIikuYWN0aXZlID0gYjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSXNNYXgoKXtcclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NICYmIERhdGEudXNlci5hdXRvX2NvbV90aW1lID09IDApIHtcclxuICAgICAgICAvLyAgICAgRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgLy8gICAgIERhdGEudXNlci5hdXRvX2NvbV90aW1lICs9IGFkZF90aW1lX2F1dG9fY29tICogNjAgKiAxMDAwO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCLnrKzkuIDmrKHlhY3lub/lkYpcIilcclxuICAgICAgICAvLyAgICAgcmV0dXJuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQgJiYgRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgLy8gICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgKz0gYWRkX3RpbWVfZG91YmxlX2F0dCAqIDYwICogMTAwMDtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwi56ys5LiA5qyh5YWN5bm/5ZGKXCIpXHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FICYmIERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPT0gMCkge1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lICs9IGFkZF90aW1lX2RvdWJsZV9pbmNvbWUgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIuesrOS4gOasoeWFjeW5v+WRilwiKVxyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UICYmIERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPT0gMCkge1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lICs9IGFkZF90aW1lX2Ryb3BfcGxhbnQgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIuesrOS4gOasoeWFjeW5v+WRilwiKVxyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAvLyAgICAgaWYgKERhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9hdXRvX2NvbSAtIGFkZF90aW1lX2F1dG9fY29tKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2F1dG9fY29tICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQpIHtcclxuICAgICAgICAvLyAgICAgaWYgKERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2F1dG9fZG91YmxlX2F0dCAtIGFkZF90aW1lX2RvdWJsZV9hdHQpICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBNc2dIaW50cy5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBtYXhfYXV0b19kb3VibGVfYXR0ICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAvLyAgICAgaWYgKERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2F1dG9fZG91YmxlX2luY29tZSAtIGFkZF90aW1lX2RvdWJsZV9pbmNvbWUpICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBNc2dIaW50cy5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBtYXhfYXV0b19kb3VibGVfaW5jb21lICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpIHtcclxuICAgICAgICAvLyAgICAgaWYgKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2Ryb3BfcGxhbnQgLSBhZGRfdGltZV9kcm9wX3BsYW50KSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2Ryb3BfcGxhbnQgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZHZhbHVlKGdlbTpudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGdlbT4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZ2VtID4gRGF0YS51c2VyLmdlbSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIumSu+efs+S4jei2s1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlICBEYXRhLnVzZXIuZ2VtIC09IGdlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2F1dG9fY29tIC0gYWRkX3RpbWVfYXV0b19jb20pICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBtYXhfYXV0b19jb20gKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuYXV0b19jb21fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgKz0gYWRkX3RpbWVfYXV0b19jb20gKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9hdXRvX2RvdWJsZV9hdHQgLSBhZGRfdGltZV9kb3VibGVfYXR0KSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2F1dG9fZG91YmxlX2F0dCArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSArPSBhZGRfdGltZV9kb3VibGVfYXR0ICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChtYXhfYXV0b19kb3VibGVfaW5jb21lIC0gYWRkX3RpbWVfZG91YmxlX2luY29tZSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIG1heF9hdXRvX2RvdWJsZV9pbmNvbWUgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgKz0gYWRkX3RpbWVfZG91YmxlX2luY29tZSAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2Ryb3BfcGxhbnQgLSBhZGRfdGltZV9kcm9wX3BsYW50KSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2Ryb3BfcGxhbnQgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgKz0gYWRkX3RpbWVfZHJvcF9wbGFudCAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGF0YS5zYXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2FkXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoMCwoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKSB0aGlzLmFkZHZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZHZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9nZW1cIjpcclxuICAgICAgICAgICAgICAgIGxldCBnZW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5BVVRPX0NPTSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbSA9IGF1dG9fY29tX2dlbVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZW0gPSBkb3VibGVfYXR0X2dlbVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZW0gPSBkb3VibGVfaW5jb21lX2dlbSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2VtID0gZG91YmxlX2Ryb3BfcGxhbnRfZ2VtICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkdmFsdWUoZ2VtKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgRUFETEFZRVIgfVxyXG4iXX0=