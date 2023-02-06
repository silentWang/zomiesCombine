
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/UserModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5755yzM1lE0roEui3wv0BT', 'UserModel');
// script/game/UserModel.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../event/GameEvent");
var ChickData_1 = require("../manager/ChickData");
var Utils_1 = require("../utils/Utils");
var GameConst_1 = require("./GameConst");
var Config_1 = require("./Config");
var AudioMgr_1 = require("../utils/AudioMgr");
var savepars = [];
function save(target, propertyKey) {
    savepars.push(propertyKey);
}
//用户数据模型
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.last_date = 0;
        this.signinfo = { sign_index: 0, sign_time: 0, sign_beisu: 0 };
        this.nickName = "";
        this.avatarUrl = "";
        this.openid = "";
        this.nickname = "";
        this.headimg = "";
        this.auto_com_time = 0;
        this.double_att_time = 0;
        this.double_income_time = 0;
        this.drop_plant_time = 0;
        this.today_getchick_times = 0;
        this.today_getchick_total = 5;
        this.today_getcoin_times = 0;
        this.today_getcoin_total = 5;
        this.share_times = 10;
        this.slots = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.lv = 1;
        this.wave = 1;
        this.DropGiftPts = []; //购买花盆
        this.AdBuyNotDrop = []; //广告购买成功，因为没有空位未成功添加
        this._coin = 1000;
        this._gem = 200;
        this._serverTime = 0;
        this.guideIndex = 0;
        this.plantBuyTimes = {};
        this.todayComTimes = 0;
        this.ComPlants = [{ open: 1, index: 0, lv: 1 }];
    }
    UserModel.prototype.T = function () {
        // "20": [20, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
        var lv = this.getLvlMax();
        var t = Config_1.Config_shopsort[lv + ""];
        for (var n = 1; n <= 8; ++n)
            if ("AD" == t[n])
                return lv - n;
        return lv - 4;
    };
    UserModel.prototype.getOfflineReward = function (t) {
        if (window && window['xxxxx'])
            window['xxxxx']("DWaZHYw2S8W7KyKnZR5Z");
        var n = null;
        var o = [50, 30, 20, 15, 10, 5, 3, 2];
        var a = Math.max(1, this.T());
        var r = this.getLvlMax();
        for (var s = Math.max(1, a - 10); s <= a; ++s) {
            var c = this.buyChickPrice(s);
            if (!n || c > n)
                n = c;
        }
        var l = n / 3e3;
        if (l < 1) {
            l = 1;
        }
        var u = Math.floor(t / 60), d = t % 60 / 60;
        var p = 0;
        for (s = 0; s <= u; ++s) {
            var h = o[s] || 1, f = void 0;
            f = s == u ? l * (60 * h) * (100 * d) / (100) : l * (60 * h),
                p = p + f;
            if (window && window['xxxxx'])
                window['xxxxx']("fee");
        }
        var m = 0;
        for (var _i = 0, _a = this.ComPlants; _i < _a.length; _i++) {
            var plant = _a[_i];
            var e = plant.lv;
            if (plant.lv > 0) {
                var temp = p * (1e4) / (1e4 * Math.pow(2.1, Math.max(0, r - e)));
                m = m + temp;
            }
        }
        return m;
    };
    Object.defineProperty(UserModel.prototype, "coin", {
        get: function () {
            return Math.floor(this._coin * 100) / 100;
        },
        set: function (value) {
            if (window && window['xxxxx'])
                window['xxxxx']("sMjwR7cSDzEihyCMGMQnKJEBxWCapx");
            this._coin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "gem", {
        get: function () {
            return this._gem;
        },
        set: function (value) {
            this._gem = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "serverTime", {
        get: function () {
            return this._serverTime;
        },
        set: function (value) {
            this._serverTime = value;
        },
        enumerable: false,
        configurable: true
    });
    UserModel.prototype.getChickInfo = function (index) {
        if (window && window['xxxxx'])
            window['xxxxx']("acBD");
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == index) {
                return this.ComPlants[i];
            }
        }
        return null;
    };
    UserModel.prototype.getLvlMax = function () {
        var max = 0;
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].lv > max) {
                max = this.ComPlants[i].lv;
            }
        }
        return max;
    };
    //购买花费
    UserModel.prototype.buyChickPrice = function (lv) {
        var t = Number(Config_1.Config_chick[lv - 1][5]);
        var n = this.plantBuyTimes[lv] || 0;
        return 1 == lv ? t * (1e4 * Math.pow(1.07, n)) / (1e4) : t * (1e4 * Math.pow(1.175, n)) / (1e4);
    };
    UserModel.prototype.moveEff = function (i0, i1) {
        if (window && window['xxxxx'])
            window['xxxxx']("nEjzhWxaWNcn44n");
        var it0 = this.getChickInfo(i0);
        var it1 = this.getChickInfo(i1);
        if (it0 && it1) {
            it0.index = i1;
            it1.index = i0;
        }
        else {
            if (it0) {
                it0.index = i1;
            }
            if (it1) {
                it1.index = i0;
            }
        }
    };
    //合成
    UserModel.prototype.composeChicks = function (i0, i1) {
        if (window && window['xxxxx'])
            window['xxxxx']("P6yxB");
        var tmp1 = this.ComPlants.find(function (wj) {
            return wj.index == i0;
        });
        if (!tmp1)
            return false;
        var tmp2 = this.ComPlants.find(function (wj) {
            return wj.index == i1;
        });
        if (!tmp2)
            return false;
        if (tmp1.lv != tmp2.lv) {
            if (window && window['xxxxx'])
                window['xxxxx']("ZkcBEYcQQaWfrX");
            console.error("err");
            return false;
        }
        var tmplv = this.getLvlMax();
        var tmpPre = this.getChickInfo(i0);
        var lv = tmpPre.lv;
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == i0) {
                this.ComPlants.splice(i, 1);
                // cc.log("删除", i0);
                break;
            }
        }
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == i1) {
                this.ComPlants.splice(i, 1);
                // cc.log("删除", i1);
                break;
            }
        }
        // cc.log("创建", i0);
        if (window && window['xxxxx'])
            window['xxxxx']("35wrxJNDira3yfdsK2CsM7r3zncF");
        this.ComPlants.push({ open: tmpPre.open, index: i0, lv: lv + 1 });
        this.todayComTimes++;
        var tmplv2 = this.getLvlMax();
        if (tmplv2 > tmplv && tmplv2 < 60) {
            Utils_1.default.createUI("prefab/NewPlantUI");
            GameEvent_1.default.Instance().dispatch(GameConst_1.default.NEW_CHICK, tmplv2);
        }
        AudioMgr_1.default.Instance().playMX("merge_success");
        return true;
    };
    //购买
    UserModel.prototype.buyChick = function (index, lv) {
        if (window && window['xxxxx'])
            window['xxxxx']("3J");
        if (!this.plantBuyTimes[lv])
            this.plantBuyTimes[lv] = 0;
        this.plantBuyTimes[lv]++;
        if (this.ComPlants.find(function (p) {
            p.index == index;
        })) {
            console.error("索引错误");
            return;
        }
        var tmp = { open: 1, index: index, lv: lv };
        this.ComPlants.push(tmp);
        ChickData_1.default.save();
        return tmp;
    };
    //摧毁
    UserModel.prototype.updateSellChickCoin = function (index) {
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == index) {
                var tmp = this.buyChickPrice(this.ComPlants[i].lv);
                if (window && window['xxxxx'])
                    window['xxxxx']("5hA83Fa");
                ChickData_1.default.user.coin += Math.floor(tmp);
                // this.changeGameCoin(Math.floor(tmp))
                cc.log("卖了换钱：" + tmp);
                this.ComPlants.splice(i, 1);
                break;
            }
        }
    };
    UserModel.prototype.getAllData = function () {
        var data = {};
        if (window && window['xxxxx'])
            window['xxxxx']("Am6rxXkBJZ5RZtn6ka83bBfe8X");
        this.serverTime = Utils_1.default.getServerTime();
        for (var i = 0; i < savepars.length; ++i) {
            data[savepars[i]] = this[savepars[i]];
        }
        return data;
    };
    UserModel.prototype.setData = function (data) {
        //初始化下数据       
        if (!data) {
            return;
        }
        for (var i = 0; i < savepars.length; ++i) {
            var element = data[savepars[i]];
            if (element != null || element != undefined) {
                if (Object.prototype.toString.call(element) == "[object Object]") {
                    for (var key in element) {
                        this[savepars[i]][key] = element[key];
                    }
                }
                else
                    this[savepars[i]] = element;
            }
        }
        if (window && window['xxxxx'])
            window['xxxxx']("nEjzhWxaWNcn44ntewsd");
    };
    __decorate([
        save
    ], UserModel.prototype, "last_date", void 0);
    __decorate([
        save
    ], UserModel.prototype, "signinfo", void 0);
    __decorate([
        save
    ], UserModel.prototype, "nickName", void 0);
    __decorate([
        save
    ], UserModel.prototype, "avatarUrl", void 0);
    __decorate([
        save
    ], UserModel.prototype, "openid", void 0);
    __decorate([
        save
    ], UserModel.prototype, "nickname", void 0);
    __decorate([
        save
    ], UserModel.prototype, "headimg", void 0);
    __decorate([
        save
    ], UserModel.prototype, "auto_com_time", void 0);
    __decorate([
        save
    ], UserModel.prototype, "double_att_time", void 0);
    __decorate([
        save
    ], UserModel.prototype, "double_income_time", void 0);
    __decorate([
        save
    ], UserModel.prototype, "drop_plant_time", void 0);
    __decorate([
        save
    ], UserModel.prototype, "today_getchick_times", void 0);
    __decorate([
        save
    ], UserModel.prototype, "today_getchick_total", void 0);
    __decorate([
        save
    ], UserModel.prototype, "today_getcoin_times", void 0);
    __decorate([
        save
    ], UserModel.prototype, "today_getcoin_total", void 0);
    __decorate([
        save
    ], UserModel.prototype, "share_times", void 0);
    __decorate([
        save
    ], UserModel.prototype, "slots", void 0);
    __decorate([
        save
    ], UserModel.prototype, "lv", void 0);
    __decorate([
        save
    ], UserModel.prototype, "wave", void 0);
    __decorate([
        save
    ], UserModel.prototype, "DropGiftPts", void 0);
    __decorate([
        save
    ], UserModel.prototype, "AdBuyNotDrop", void 0);
    __decorate([
        save
    ], UserModel.prototype, "_coin", void 0);
    __decorate([
        save
    ], UserModel.prototype, "_gem", void 0);
    __decorate([
        save
    ], UserModel.prototype, "_serverTime", void 0);
    __decorate([
        save
    ], UserModel.prototype, "guideIndex", void 0);
    __decorate([
        save
    ], UserModel.prototype, "plantBuyTimes", void 0);
    __decorate([
        save
    ], UserModel.prototype, "todayComTimes", void 0);
    __decorate([
        save
    ], UserModel.prototype, "ComPlants", void 0);
    UserModel = __decorate([
        ccclass
    ], UserModel);
    return UserModel;
}());
exports.default = UserModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxVc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msa0RBQTZDO0FBQzdDLHdDQUFtQztBQUNuQyx5Q0FBb0M7QUFDcEMsbUNBQXlEO0FBQ3pELDhDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsU0FBUyxJQUFJLENBQUMsTUFBVyxFQUFFLFdBQW1CO0lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWVELFFBQVE7QUFDRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBRWlCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0IsdUJBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsQ0FBQyxDQUFDO1FBRTNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQUcs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QUM5QjtRQUFMLElBQUk7NkNBQTRCO0lBQzNCO1FBQUwsSUFBSTsrQ0FBOEI7SUFDN0I7UUFBTCxJQUFJOzhDQUE2QjtJQUU1QjtRQUFMLElBQUk7b0RBQWlDO0lBQ2hDO1FBQUwsSUFBSTtzREFBbUM7SUFDbEM7UUFBTCxJQUFJO3lEQUFzQztJQUNyQztRQUFMLElBQUk7c0RBQW1DO0lBRWxDO1FBQUwsSUFBSTsyREFBaUM7SUFDaEM7UUFBTCxJQUFJOzJEQUFpQztJQUVoQztRQUFMLElBQUk7MERBQWdDO0lBQy9CO1FBQUwsSUFBSTswREFBZ0M7SUFFL0I7UUFBTCxJQUFJO2tEQUFnQztJQUUvQjtRQUFMLElBQUk7NENBQTBDO0lBQ3pDO1FBQUwsSUFBSTt5Q0FBZTtJQUNkO1FBQUwsSUFBSTsyQ0FBaUI7SUFvRGhCO1FBQUwsSUFBSTtrREFBa0I7SUFDakI7UUFBTCxJQUFJO21EQUFtQjtJQUd4QjtRQURDLElBQUk7NENBQ3dCO0lBUzdCO1FBREMsSUFBSTsyQ0FDc0I7SUFRM0I7UUFEQyxJQUFJO2tEQUMyQjtJQVExQjtRQUFMLElBQUk7aURBQXVCO0lBQ3RCO1FBQUwsSUFBSTtvREFBMkI7SUFDMUI7UUFBTCxJQUFJO29EQUEwQjtJQUN6QjtRQUFMLElBQUk7Z0RBQWdFO0lBN0dwRCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBNlE3QjtJQUFELGdCQUFDO0NBN1FELEFBNlFDLElBQUE7a0JBN1FvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZXZlbnQvR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSAnLi9HYW1lQ29uc3QnO1xyXG5pbXBvcnQgeyBDb25maWdfY2hpY2ssIENvbmZpZ19zaG9wc29ydCB9IGZyb20gJy4vQ29uZmlnJztcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gJy4uL3V0aWxzL0F1ZGlvTWdyJztcclxubGV0IHNhdmVwYXJzID0gW107XHJcbmZ1bmN0aW9uIHNhdmUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIHNhdmVwYXJzLnB1c2gocHJvcGVydHlLZXkpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQbGFudEluZm8gPVxyXG4gICAge1xyXG4gICAgICAgIG9wZW46IG51bWJlcjtcclxuICAgICAgICBsdjogbnVtYmVyO1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IHR5cGUgU2lnbkluZm8gPSB7XHJcbiAgICAgICAgc2lnbl9pbmRleDogbnVtYmVyLC8v5b2T5YmN562+5Yiw57Si5byVXHJcbiAgICAgICAgc2lnbl90aW1lOiBudW1iZXIsLy/kuIrmrKHnrb7liLDml7bpl7RcclxuICAgICAgICBzaWduX2JlaXN1OiBudW1iZXIsLy/pooblj5blgI3mlbBcclxuICAgIH1cclxuICAgIFxyXG4vL+eUqOaIt+aVsOaNruaooeWei1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyTW9kZWwge1xyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBsYXN0X2RhdGU6bnVtYmVyID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBzaWduaW5mbzogU2lnbkluZm8gPSB7IHNpZ25faW5kZXg6IDAsIHNpZ25fdGltZTogMCwgc2lnbl9iZWlzdTogMCB9O1xyXG4gICAgQHNhdmUgcHVibGljIG5pY2tOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHNhdmUgcHVibGljIGF2YXRhclVybDogc3RyaW5nID0gXCJcIjtcclxuICAgIEBzYXZlIHB1YmxpYyBvcGVuaWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAc2F2ZSBwdWJsaWMgbmlja25hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAc2F2ZSBwdWJsaWMgaGVhZGltZzogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgYXV0b19jb21fdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIGRvdWJsZV9hdHRfdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIGRvdWJsZV9pbmNvbWVfdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIGRyb3BfcGxhbnRfdGltZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjaGlja190aW1lcyA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y2hpY2tfdG90YWwgPSA1O1xyXG4gICAgXHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y29pbl90aW1lcyA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y29pbl90b3RhbCA9IDU7XHJcblxyXG4gICAgQHNhdmUgcHVibGljIHNoYXJlX3RpbWVzOm51bWJlciA9IDEwO1xyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBzbG90cyA9IFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMF07XHJcbiAgICBAc2F2ZSBwdWJsaWMgbHYgPSAxO1xyXG4gICAgQHNhdmUgcHVibGljIHdhdmUgPSAxO1xyXG5cclxuICAgIFQoKSB7XHJcblx0Ly8gXCIyMFwiOiBbMjAsIFwiVVwiLCBcIlVcIiwgXCJHXCIsIFwiR1wiLCBcIk1cIiwgXCJBRFwiLCBcIk1cIiwgXCJNXCIsIFwiTVwiXSxcclxuICAgICAgICBsZXQgbHYgPSB0aGlzLmdldEx2bE1heCgpO1xyXG4gICAgICAgIHZhciB0ID0gQ29uZmlnX3Nob3Bzb3J0W2x2K1wiXCJdXHJcbiAgICAgICAgZm9yICh2YXIgbiA9IDE7IG4gPD0gODsgKytuKVxyXG4gICAgICAgICAgICAgaWYgKFwiQURcIiA9PSB0W25dKSBcclxuICAgICAgICAgICAgICAgIHJldHVybiBsdiAtIG47XHJcblxyXG4gICAgICAgIHJldHVybiBsdiAtIDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9mZmxpbmVSZXdhcmQodCkvL+WIhumSn1xyXG4gICAge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkRXYVpIWXcyUzhXN0t5S25aUjVaXCIpO1xyXG4gICAgICAgIHZhciBuID0gbnVsbDtcclxuICAgICAgICB2YXIgbyA9IFsgNTAsIDMwLCAyMCwgMTUsIDEwLCA1LCAzLCAyIF1cclxuICAgICAgICB2YXIgYSA9IE1hdGgubWF4KDEsIHRoaXMuVCgpKTtcclxuICAgICAgICB2YXIgciA9IHRoaXMuZ2V0THZsTWF4KClcclxuXHJcbiAgICAgICAgZm9yICh2YXIgcyA9IE1hdGgubWF4KDEsIGEgLSAxMCk7IHMgPD0gYTsgKytzKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5idXlDaGlja1ByaWNlKHMpO1xyXG4gICAgICAgICAgICBpZighbiB8fCBjID4gbilcclxuICAgICAgICAgICAgICAgIG4gPSBjXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsID0gbi8zZTM7XHJcbiAgICAgICAgaWYobDwxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1ID0gTWF0aC5mbG9vcih0IC8gNjApLCBkID0gdCAlIDYwIC8gNjA7XHJcbiAgICAgICAgdmFyIHAgPSAwO1xyXG4gICAgICAgIGZvciAocyA9IDA7IHMgPD0gdTsgKytzKSB7XHJcbiAgICAgICAgICAgIHZhciBoID0gb1tzXSB8fCAxLCBmID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBmID0gcyA9PSB1ID8gbCooNjAgKiBoKSooMTAwICogZCkvKDEwMCkgOiBsKig2MCAqIGgpLCBcclxuICAgICAgICAgICAgcCA9IHArZjtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZmVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbSA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBwbGFudCBvZiB0aGlzLkNvbVBsYW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBlID0gcGxhbnQubHY7XHJcbiAgICAgICAgICAgIGlmKHBsYW50Lmx2PjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gcCooMWU0KS8oMWU0ICogTWF0aC5wb3coMi4xLCBNYXRoLm1heCgwLCByIC0gZSkpKTtcclxuICAgICAgICAgICAgICAgIG0gPSBtICsgdGVtcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbVxyXG4gICAgfVxyXG5cclxuICAgIEBzYXZlIERyb3BHaWZ0UHRzID0gW107Ly/otK3kubDoirHnm4ZcclxuICAgIEBzYXZlIEFkQnV5Tm90RHJvcCA9IFtdOy8v5bm/5ZGK6LSt5Lmw5oiQ5Yqf77yM5Zug5Li65rKh5pyJ56m65L2N5pyq5oiQ5Yqf5re75YqgXHJcblxyXG4gICAgQHNhdmVcclxuICAgIHByaXZhdGUgX2NvaW46IG51bWJlciA9IDEwMDA7XHJcbiAgICBwdWJsaWMgZ2V0IGNvaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLl9jb2luICogMTAwKSAvIDEwMDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgY29pbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwic01qd1I3Y1NEekVpaHlDTUdNUW5LSkVCeFdDYXB4XCIpO1xyXG4gICAgICAgIHRoaXMuX2NvaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBzYXZlXHJcbiAgICBwcml2YXRlIF9nZW06IG51bWJlciA9IDIwMDtcclxuICAgIHB1YmxpYyBnZXQgZ2VtKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dlbTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgZ2VtKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9nZW0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBzYXZlXHJcbiAgICBwcml2YXRlIF9zZXJ2ZXJUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCBzZXJ2ZXJUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclRpbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHNlcnZlclRpbWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZlclRpbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgZ3VpZGVJbmRleCA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgcGxhbnRCdXlUaW1lcyA9IHt9O1xyXG4gICAgQHNhdmUgcHVibGljIHRvZGF5Q29tVGltZXMgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIENvbVBsYW50czogUGxhbnRJbmZvW10gPSBbeyBvcGVuOiAxLCBpbmRleDogMCwgbHY6IDEgfV07XHJcblxyXG4gICAgcHVibGljIGdldENoaWNrSW5mbyhpbmRleDogbnVtYmVyKTogUGxhbnRJbmZvIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJhY0JEXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21QbGFudHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEx2bE1heCgpe1xyXG4gICAgICAgIGxldCBtYXggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmx2ID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXggPSB0aGlzLkNvbVBsYW50c1tpXS5sdiBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8v6LSt5Lmw6Iqx6LS5XHJcbiAgICBwdWJsaWMgYnV5Q2hpY2tQcmljZShsdjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgdDpudW1iZXIgPSBOdW1iZXIoQ29uZmlnX2NoaWNrW2x2LTFdWzVdKTtcclxuICAgICAgICB2YXIgbiA9IHRoaXMucGxhbnRCdXlUaW1lc1tsdl0gfHwgMDtcclxuICAgICAgICByZXR1cm4gMSA9PSBsdiA/IHQgKiAoMWU0ICogTWF0aC5wb3coMS4wNywgbikpIC8gKDFlNCkgOiB0ICogKDFlNCAqIE1hdGgucG93KDEuMTc1LCBuKSkgLyAoMWU0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZUVmZihpMDogbnVtYmVyLCBpMTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwibkVqemhXeGFXTmNuNDRuXCIpO1xyXG4gICAgICAgIHZhciBpdDA6IFBsYW50SW5mbyA9IHRoaXMuZ2V0Q2hpY2tJbmZvKGkwKTtcclxuICAgICAgICB2YXIgaXQxOiBQbGFudEluZm8gPSB0aGlzLmdldENoaWNrSW5mbyhpMSk7XHJcbiAgICAgICAgaWYgKGl0MCAmJiBpdDEpIHtcclxuICAgICAgICAgICAgaXQwLmluZGV4ID0gaTE7XHJcbiAgICAgICAgICAgIGl0MS5pbmRleCA9IGkwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGl0MCkge1xyXG4gICAgICAgICAgICAgICAgaXQwLmluZGV4ID0gaTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0MSkge1xyXG4gICAgICAgICAgICAgICAgaXQxLmluZGV4ID0gaTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lkIjmiJBcclxuICAgIHB1YmxpYyBjb21wb3NlQ2hpY2tzKGkwOiBudW1iZXIsIGkxOiBudW1iZXIpIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJQNnl4QlwiKTtcclxuICAgICAgICBsZXQgdG1wMSA9IHRoaXMuQ29tUGxhbnRzLmZpbmQoKHdqKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3ai5pbmRleCA9PSBpMDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghdG1wMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCB0bXAyID0gdGhpcy5Db21QbGFudHMuZmluZCgod2opID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdqLmluZGV4ID09IGkxO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghdG1wMikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0bXAxLmx2ICE9IHRtcDIubHYpIHtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiWmtjQkVZY1FRYVdmclhcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG1wbHYgPSB0aGlzLmdldEx2bE1heCgpO1xyXG4gICAgICAgIHZhciB0bXBQcmU6IFBsYW50SW5mbyA9IHRoaXMuZ2V0Q2hpY2tJbmZvKGkwKTtcclxuICAgICAgICB2YXIgbHYgPSB0bXBQcmUubHY7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tUGxhbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuWIoOmZpFwiLCBpMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tUGxhbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuWIoOmZpFwiLCBpMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2MubG9nKFwi5Yib5bu6XCIsIGkwKTtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIzNXdyeEpORGlyYTN5ZmRzSzJDc003cjN6bmNGXCIpO1xyXG4gICAgICAgIHRoaXMuQ29tUGxhbnRzLnB1c2goeyBvcGVuOiB0bXBQcmUub3BlbiwgaW5kZXg6IGkwLCBsdjogbHYgKyAxIH0pO1xyXG4gICAgICAgIHRoaXMudG9kYXlDb21UaW1lcysrO1xyXG5cclxuICAgICAgICBsZXQgdG1wbHYyID0gdGhpcy5nZXRMdmxNYXgoKTtcclxuICAgICAgICBpZih0bXBsdjIgPiB0bXBsdiAmJiB0bXBsdjIgPCA2MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL05ld1BsYW50VUlcIilcclxuICAgICAgICAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkuZGlzcGF0Y2goR2FtZUNvbnN0Lk5FV19DSElDSyx0bXBsdjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcIm1lcmdlX3N1Y2Nlc3NcIilcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIC8v6LSt5LmwXHJcbiAgICBwdWJsaWMgYnV5Q2hpY2soaW5kZXg6IG51bWJlciwgbHY6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjNKXCIpO1xyXG4gICAgICAgIGlmKCF0aGlzLnBsYW50QnV5VGltZXNbbHZdKXRoaXMucGxhbnRCdXlUaW1lc1tsdl09MDtcclxuICAgICAgICB0aGlzLnBsYW50QnV5VGltZXNbbHZdKys7XHJcbiAgICAgICAgaWYodGhpcy5Db21QbGFudHMuZmluZCgocCk9PntcclxuICAgICAgICAgICAgcC5pbmRleCA9PSBpbmRleFxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIue0ouW8lemUmeivr1wiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0bXAgPSB7IG9wZW46IDEsIGluZGV4OiBpbmRleCwgbHY6IGx2IH07XHJcbiAgICAgICAgdGhpcy5Db21QbGFudHMucHVzaCh0bXApO1xyXG4gICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRtcDtcclxuICAgIH1cclxuXHJcbiAgICAvL+aRp+avgVxyXG4gICAgcHVibGljIHVwZGF0ZVNlbGxDaGlja0NvaW4oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5idXlDaGlja1ByaWNlKHRoaXMuQ29tUGxhbnRzW2ldLmx2KVxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiNWhBODNGYVwiKTtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gTWF0aC5mbG9vcih0bXApO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jaGFuZ2VHYW1lQ29pbihNYXRoLmZsb29yKHRtcCkpXHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLljZbkuobmjaLpkrHvvJpcIiArIHRtcClcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tUGxhbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIGdldEFsbERhdGEoKTogb2JqZWN0IHtcclxuICAgICAgICB2YXIgZGF0YSA9IHt9XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQW02cnhYa0JKWjVSWnRuNmthODNiQmZlOFhcIik7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZGF0YVtzYXZlcGFyc1tpXV0gPSB0aGlzW3NhdmVwYXJzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICAvL+WIneWni+WMluS4i+aVsOaNriAgICAgICBcclxuICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNhdmVwYXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW3NhdmVwYXJzW2ldXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCB8fCBlbGVtZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbGVtZW50KSA9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3NhdmVwYXJzW2ldXVtrZXldID0gZWxlbWVudFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW3NhdmVwYXJzW2ldXSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwibkVqemhXeGFXTmNuNDRudGV3c2RcIik7XHJcbiAgICB9XHJcbn0iXX0=