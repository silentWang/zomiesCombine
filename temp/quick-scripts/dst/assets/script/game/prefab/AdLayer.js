
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
            this.SetText("lbl_effect", "增加" + add_time_auto_com + "分钟自动合成时间");
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            this.SetText("lbl_effect", "增加" + add_time_double_att + "分钟持续时间");
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            this.SetText("lbl_effect", "增加" + add_time_double_income + "分钟双倍收益时间");
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            this.SetText("lbl_effect", "增加" + add_time_drop_plant + "分钟植物快速掉落时间");
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
    AdLayer.prototype.addvalue = function (gem) {
        // if (this.type == EADLAYER.AUTO_COM && Data.user.auto_com_time == 0) {
        //     Data.user.auto_com_time = Utils.getServerTime();
        //     Data.user.auto_com_time += add_time_auto_com * 60 * 1000;
        //     cc.log("第一次免广告")
        //     return
        // }
        if (gem === void 0) { gem = 0; }
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
        if (this.type == EADLAYER.AUTO_COM) {
            if (Data_1.default.user.auto_com_time - Utils_1.default.getServerTime() > (exports.max_auto_com - add_time_auto_com) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_com + "分钟");
                return;
            }
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            if (Data_1.default.user.double_att_time - Utils_1.default.getServerTime() > (exports.max_auto_double_att - add_time_double_att) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_double_att + "分钟");
                return;
            }
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            if (Data_1.default.user.double_income_time - Utils_1.default.getServerTime() > (exports.max_auto_double_income - add_time_double_income) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_auto_double_income + "分钟");
                return;
            }
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            if (Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime() > (exports.max_drop_plant - add_time_drop_plant) * 60 * 1000) {
                MsgHints_1.default.show("最大累积时间" + exports.max_drop_plant + "分钟");
                return;
            }
        }
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
                    if (b) {
                        _this.addvalue();
                    }
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEFkTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULG1EQUFVLENBQUE7SUFDVix5REFBYSxDQUFBO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7QUFDZCxDQUFDLEVBTEksUUFBUSxLQUFSLFFBQVEsUUFLWjtBQXVQUSw0QkFBUTtBQXJQakIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsSUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDbEMsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDL0IsSUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFNLHFCQUFxQixHQUFHLENBQUMsQ0FBQztBQUVuQixRQUFBLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBQSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFBQSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBR2pDO0lBQXFDLDJCQUFNO0lBQTNDOztJQWlPQSxDQUFDO0lBOU5HLHVCQUFLLEdBQUw7UUFFSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxD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QUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFO29CQUMxQyxHQUFHLEdBQUcsaUJBQWlCLENBQUE7aUJBQzFCO3FCQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO29CQUN2QyxHQUFHLEdBQUcscUJBQXFCLENBQUE7aUJBQzlCO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07U0FDVDtJQUNULENBQUM7SUFoT2dCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FpTzNCO0lBQUQsY0FBQztDQWpPRCxBQWlPQyxDQWpPb0MsZ0JBQU0sR0FpTzFDO2tCQWpPb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgTXNnSGludHMgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL01zZ0hpbnRzXCI7XHJcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5lbnVtIEVBRExBWUVSIHtcclxuICAgIERPVUJMRV9BVFQsXHJcbiAgICBET1VCTEVfSU5DT01FLFxyXG4gICAgQVVUT19DT00sXHJcbiAgICBEUk9QX1BMQU5UXHJcbn1cclxuXHJcbmNvbnN0IGFkZF90aW1lX2F1dG9fY29tID0gMjtcclxuY29uc3QgYWRkX3RpbWVfZG91YmxlX2luY29tZSA9IDEwO1xyXG5jb25zdCBhZGRfdGltZV9kcm9wX3BsYW50ID0gMTA7XHJcbmNvbnN0IGFkZF90aW1lX2RvdWJsZV9hdHQgPSAxO1xyXG5cclxuY29uc3QgYXV0b19jb21fZ2VtID0gNDtcclxuY29uc3QgZG91YmxlX2luY29tZV9nZW0gPSA0O1xyXG5jb25zdCBkb3VibGVfYXR0X2dlbSA9IDQ7XHJcbmNvbnN0IGRvdWJsZV9kcm9wX3BsYW50X2dlbSA9IDQ7XHJcblxyXG5leHBvcnQgY29uc3QgbWF4X2F1dG9fY29tID0gMTA7XHJcbmV4cG9ydCBjb25zdCBtYXhfYXV0b19kb3VibGVfaW5jb21lID0gNjA7XHJcbmV4cG9ydCBjb25zdCBtYXhfYXV0b19kb3VibGVfYXR0ID0gNjtcclxuZXhwb3J0IGNvbnN0IG1heF9kcm9wX3BsYW50ID0gNjA7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZExheWVyIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcblxyXG4gICAgc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gICAgICAgIGlmKGR0PjEpZHQ9MTtcclxuICAgICAgICBsZXQgZW5kX3RpbWUgPSAwO1xyXG4gICAgICAgIGxldCBtYXggPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgZW5kX3RpbWUgPSBEYXRhLnVzZXIuYXV0b19jb21fdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gbWF4X2F1dG9fY29tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICBlbmRfdGltZSA9IERhdGEudXNlci5kb3VibGVfYXR0X3RpbWU7XHJcbiAgICAgICAgICAgIG1heCA9IG1heF9hdXRvX2RvdWJsZV9hdHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XHJcbiAgICAgICAgICAgIGVuZF90aW1lID0gRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gbWF4X2F1dG9fZG91YmxlX2luY29tZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVuZF90aW1lID0gRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZTtcclxuICAgICAgICAgICAgbWF4ID0gbWF4X2Ryb3BfcGxhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVuZF90aW1lPlV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuTGVmdCA9IGVuZF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICB0aGlzLlNldFByb2dyZXNzQmFyKFwiTmV3IFByb2dyZXNzQmFyXCIsKG5MZWZ0LzEwMDAvNjApL21heCk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF90aW1lXCIsVXRpbHMuZ2V0VGltZVN0ckJ5UyhuTGVmdC8xMDAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIiwwKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVcIixcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHlwZTogRUFETEFZRVI7XHJcbiAgICBzZXRUeXBlKGU6IEVBRExBWUVSKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2Zhc3RcIikuYWN0aXZlID0gZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25fYXV0b19tZXJnZVwiKS5hY3RpdmUgPSBlID09IEVBRExBWUVSLkFVVE9fQ09NO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImljb25faW5jb21lXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpY29uX2FuZ3JlXCIpLmFjdGl2ZSA9IGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVDtcclxuXHJcbiAgICAgICAgLy8gbGV0IGJ0bnR5cGUgPSBBRF9TSEFSRS7mlLvlh7t4MlxyXG4gICAgICAgIC8vIGlmIChlID09IEVBRExBWUVSLkFVVE9fQ09NKVxyXG4gICAgICAgIC8vICAgICBidG50eXBlID0gQURfU0hBUkUu6Ieq5Yqo5ZCI5oiQXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKVxyXG4gICAgICAgIC8vICAgICBidG50eXBlID0gQURfU0hBUkUu5pS255uKeDJcclxuICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oQWRPclNoYXJlKS5jaGFuZ2VUeXBlKGJ0bnR5cGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCLlop7liqBcIiArIGFkZF90aW1lX2F1dG9fY29tICsgXCLliIbpkp/oh6rliqjlkIjmiJDml7bpl7RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfQVRUKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZWZmZWN0XCIsIFwi5aKe5YqgXCIgKyBhZGRfdGltZV9kb3VibGVfYXR0ICsgXCLliIbpkp/mjIHnu63ml7bpl7RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCLlop7liqBcIiArIGFkZF90aW1lX2RvdWJsZV9pbmNvbWUgKyBcIuWIhumSn+WPjOWAjeaUtuebiuaXtumXtFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9lZmZlY3RcIiwgXCLlop7liqBcIiArIGFkZF90aW1lX2Ryb3BfcGxhbnQgKyBcIuWIhumSn+akjeeJqeW/q+mAn+aOieiQveaXtumXtFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZhciBiOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NICYmIERhdGEudXNlci5hdXRvX2NvbV90aW1lID09IDApXHJcbiAgICAgICAgLy8gICAgIGIgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQgJiYgRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9PSAwKVxyXG4gICAgICAgIC8vICAgICBiID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FICYmIERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPT0gMClcclxuICAgICAgICAvLyAgICAgYiA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9wbGF5XCIpLmFjdGl2ZSA9IGI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGR2YWx1ZShnZW06bnVtYmVyID0gMClcclxuICAgIHtcclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NICYmIERhdGEudXNlci5hdXRvX2NvbV90aW1lID09IDApIHtcclxuICAgICAgICAvLyAgICAgRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgLy8gICAgIERhdGEudXNlci5hdXRvX2NvbV90aW1lICs9IGFkZF90aW1lX2F1dG9fY29tICogNjAgKiAxMDAwO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCLnrKzkuIDmrKHlhY3lub/lkYpcIilcclxuICAgICAgICAvLyAgICAgcmV0dXJuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQgJiYgRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgLy8gICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgKz0gYWRkX3RpbWVfZG91YmxlX2F0dCAqIDYwICogMTAwMDtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwi56ys5LiA5qyh5YWN5bm/5ZGKXCIpXHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FICYmIERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPT0gMCkge1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lICs9IGFkZF90aW1lX2RvdWJsZV9pbmNvbWUgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIuesrOS4gOasoeWFjeW5v+WRilwiKVxyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5EUk9QX1BMQU5UICYmIERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPT0gMCkge1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lICs9IGFkZF90aW1lX2Ryb3BfcGxhbnQgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIuesrOS4gOasoeWFjeW5v+WRilwiKVxyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuQVVUT19DT00pIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9hdXRvX2NvbSAtIGFkZF90aW1lX2F1dG9fY29tKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2F1dG9fY29tICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQpIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2F1dG9fZG91YmxlX2F0dCAtIGFkZF90aW1lX2RvdWJsZV9hdHQpICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBtYXhfYXV0b19kb3VibGVfYXR0ICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2F1dG9fZG91YmxlX2luY29tZSAtIGFkZF90aW1lX2RvdWJsZV9pbmNvbWUpICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBtYXhfYXV0b19kb3VibGVfaW5jb21lICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2Ryb3BfcGxhbnQgLSBhZGRfdGltZV9kcm9wX3BsYW50KSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2Ryb3BfcGxhbnQgKyBcIuWIhumSn1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZ2VtPjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihnZW0gPiBEYXRhLnVzZXIuZ2VtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi6ZK755+z5LiN6LazXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgIERhdGEudXNlci5nZW0gLT0gZ2VtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuYXV0b19jb21fdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChtYXhfYXV0b19jb20gLSBhZGRfdGltZV9hdXRvX2NvbSkgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLmnIDlpKfntK/np6/ml7bpl7RcIiArIG1heF9hdXRvX2NvbSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuYXV0b19jb21fdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5hdXRvX2NvbV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICBEYXRhLnVzZXIuYXV0b19jb21fdGltZSArPSBhZGRfdGltZV9hdXRvX2NvbSAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRPVUJMRV9BVFQpIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAobWF4X2F1dG9fZG91YmxlX2F0dCAtIGFkZF90aW1lX2RvdWJsZV9hdHQpICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBtYXhfYXV0b19kb3VibGVfYXR0ICsgXCLliIbpkp9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICBEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lICs9IGFkZF90aW1lX2RvdWJsZV9hdHQgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBFQURMQVlFUi5ET1VCTEVfSU5DT01FKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gKG1heF9hdXRvX2RvdWJsZV9pbmNvbWUgLSBhZGRfdGltZV9kb3VibGVfaW5jb21lKSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuacgOWkp+e0r+enr+aXtumXtFwiICsgbWF4X2F1dG9fZG91YmxlX2luY29tZSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSArPSBhZGRfdGltZV9kb3VibGVfaW5jb21lICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRFJPUF9QTEFOVCkge1xyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IChtYXhfZHJvcF9wbGFudCAtIGFkZF90aW1lX2Ryb3BfcGxhbnQpICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi5pyA5aSn57Sv56ev5pe26Ze0XCIgKyBtYXhfZHJvcF9wbGFudCArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSArPSBhZGRfdGltZV9kcm9wX3BsYW50ICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBEYXRhLnNhdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYWRcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgwLChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2dlbVwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGdlbSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkFVVE9fQ09NKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2VtID0gYXV0b19jb21fZ2VtXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0FUVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbSA9IGRvdWJsZV9hdHRfZ2VtXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRUFETEFZRVIuRE9VQkxFX0lOQ09NRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbSA9IGRvdWJsZV9pbmNvbWVfZ2VtICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IEVBRExBWUVSLkRST1BfUExBTlQpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZW0gPSBkb3VibGVfZHJvcF9wbGFudF9nZW0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGR2YWx1ZShnZW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBFQURMQVlFUiB9XHJcbiJdfQ==