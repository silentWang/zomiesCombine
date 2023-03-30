
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
    UserModel.prototype.dsdse_dsexcxc_fun = function () { console.log('dsfgajisdoe3924-5=34=4--'); };
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
        this.dsdse_dsexcxc_fun();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9Vc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msa0RBQTZDO0FBQzdDLHdDQUFtQztBQUNuQyx5Q0FBb0M7QUFDcEMsbUNBQXlEO0FBQ3pELDhDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsU0FBUyxJQUFJLENBQUMsTUFBVyxFQUFFLFdBQW1CO0lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWVELFFBQVE7QUFDRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBRWlCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0IsdUJBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsQ0FBQyxDQUFDO1FBRTNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQUcsQ0FB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QzdCLENBQUM7SUE3UUs7UUFBTCxJQUFJO2dEQUE2QjtJQUM1QjtRQUFMLElBQUk7K0NBQTRFO0lBQzNFO1FBQUwsSUFBSTsrQ0FBOEI7SUFDN0I7UUFBTCxJQUFJO2dEQUErQjtJQUM5QjtRQUFMLElBQUk7NkNBQTRCO0lBQzNCO1FBQUwsSUFBSTsrQ0FBOEI7SUFDN0I7UUFBTCxJQUFJOzhDQUE2QjtJQUU1QjtRQUFMLElBQUk7b0RBQWlDO0lBQ2hDO1FBQUwsSUFBSTtzREFBbUM7SUFDbEM7UUFBTCxJQUFJO3lEQUFzQztJQUNyQztRQUFMLElBQUk7c0RBQW1DO0lBRWxDO1FBQUwsSUFBSTsyREFBaUM7SUFDaEM7UUFBTCxJQUFJOzJEQUFpQztJQUVoQztRQUFMLElBQUk7MERBQWdDO0lBQy9CO1FBQUwsSUFBSTswREFBZ0M7SUFFL0I7UUFBTCxJQUFJO2tEQUFnQztJQUUvQjtRQUFMLElBQUk7NENBQTBDO0lBQ3pDO1FBQUwsSUFBSTt5Q0FBZTtJQUNkO1FBQUwsSUFBSTsyQ0FBaUI7SUFvRGhCO1FBQUwsSUFBSTtrREFBa0I7SUFDakI7UUFBTCxJQUFJO21EQUFtQjtJQUd4QjtRQURDLElBQUk7NENBQ3dCO0lBUzdCO1FBREMsSUFBSTsyQ0FDc0I7SUFRM0I7UUFEQyxJQUFJO2tEQUMyQjtJQVExQjtRQUFMLElBQUk7aURBQXVCO0lBQ3RCO1FBQUwsSUFBSTtvREFBMkI7SUFDMUI7UUFBTCxJQUFJO29EQUEwQjtJQUN6QjtRQUFMLElBQUk7Z0RBQWdFO0lBN0dwRCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ1I3QjtJQUFELGdCQUFDO0NBaFJELEFBZ1JDLElBQUE7a0JBaFJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZXZlbnQvR2FtZUV2ZW50XCI7XG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSAnLi9HYW1lQ29uc3QnO1xuaW1wb3J0IHsgQ29uZmlnX2NoaWNrLCBDb25maWdfc2hvcHNvcnQgfSBmcm9tICcuL0NvbmZpZyc7XG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSAnLi4vdXRpbHMvQXVkaW9NZ3InO1xubGV0IHNhdmVwYXJzID0gW107XG5mdW5jdGlvbiBzYXZlKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG4gICAgc2F2ZXBhcnMucHVzaChwcm9wZXJ0eUtleSk7XG59XG5cbmV4cG9ydCB0eXBlIFBsYW50SW5mbyA9XG4gICAge1xuICAgICAgICBvcGVuOiBudW1iZXI7XG4gICAgICAgIGx2OiBudW1iZXI7XG4gICAgICAgIGluZGV4OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IHR5cGUgU2lnbkluZm8gPSB7XG4gICAgICAgIHNpZ25faW5kZXg6IG51bWJlciwvL+W9k+WJjeetvuWIsOe0ouW8lVxuICAgICAgICBzaWduX3RpbWU6IG51bWJlciwvL+S4iuasoeetvuWIsOaXtumXtFxuICAgICAgICBzaWduX2JlaXN1OiBudW1iZXIsLy/pooblj5blgI3mlbBcbiAgICB9XG4gICAgXG4vL+eUqOaIt+aVsOaNruaooeWei1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyTW9kZWwge1xuXG4gICAgQHNhdmUgcHVibGljIGxhc3RfZGF0ZTpudW1iZXIgPSAwO1xuICAgIEBzYXZlIHB1YmxpYyBzaWduaW5mbzogU2lnbkluZm8gPSB7IHNpZ25faW5kZXg6IDAsIHNpZ25fdGltZTogMCwgc2lnbl9iZWlzdTogMCB9O1xuICAgIEBzYXZlIHB1YmxpYyBuaWNrTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBAc2F2ZSBwdWJsaWMgYXZhdGFyVXJsOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBzYXZlIHB1YmxpYyBvcGVuaWQ6IHN0cmluZyA9IFwiXCI7XG4gICAgQHNhdmUgcHVibGljIG5pY2tuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBzYXZlIHB1YmxpYyBoZWFkaW1nOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQHNhdmUgcHVibGljIGF1dG9fY29tX3RpbWU6bnVtYmVyID0gMDtcbiAgICBAc2F2ZSBwdWJsaWMgZG91YmxlX2F0dF90aW1lOm51bWJlciA9IDA7XG4gICAgQHNhdmUgcHVibGljIGRvdWJsZV9pbmNvbWVfdGltZTpudW1iZXIgPSAwO1xuICAgIEBzYXZlIHB1YmxpYyBkcm9wX3BsYW50X3RpbWU6bnVtYmVyID0gMDtcblxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjaGlja190aW1lcyA9IDA7XG4gICAgQHNhdmUgcHVibGljIHRvZGF5X2dldGNoaWNrX3RvdGFsID0gNTtcbiAgICBcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y29pbl90aW1lcyA9IDA7XG4gICAgQHNhdmUgcHVibGljIHRvZGF5X2dldGNvaW5fdG90YWwgPSA1O1xuXG4gICAgQHNhdmUgcHVibGljIHNoYXJlX3RpbWVzOm51bWJlciA9IDEwO1xuXG4gICAgQHNhdmUgcHVibGljIHNsb3RzID0gWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICBAc2F2ZSBwdWJsaWMgbHYgPSAxO1xuICAgIEBzYXZlIHB1YmxpYyB3YXZlID0gMTtcblxuICAgIFQoKSB7XG5cdC8vIFwiMjBcIjogWzIwLCBcIlVcIiwgXCJVXCIsIFwiR1wiLCBcIkdcIiwgXCJNXCIsIFwiQURcIiwgXCJNXCIsIFwiTVwiLCBcIk1cIl0sXG4gICAgICAgIGxldCBsdiA9IHRoaXMuZ2V0THZsTWF4KCk7XG4gICAgICAgIHZhciB0ID0gQ29uZmlnX3Nob3Bzb3J0W2x2K1wiXCJdXG4gICAgICAgIGZvciAodmFyIG4gPSAxOyBuIDw9IDg7ICsrbilcbiAgICAgICAgICAgICBpZiAoXCJBRFwiID09IHRbbl0pIFxuICAgICAgICAgICAgICAgIHJldHVybiBsdiAtIG47XG5cbiAgICAgICAgcmV0dXJuIGx2IC0gNDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0T2ZmbGluZVJld2FyZCh0KS8v5YiG6ZKfXG4gICAge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJEV2FaSFl3MlM4VzdLeUtuWlI1WlwiKTtcbiAgICAgICAgdmFyIG4gPSBudWxsO1xuICAgICAgICB2YXIgbyA9IFsgNTAsIDMwLCAyMCwgMTUsIDEwLCA1LCAzLCAyIF1cbiAgICAgICAgdmFyIGEgPSBNYXRoLm1heCgxLCB0aGlzLlQoKSk7XG4gICAgICAgIHZhciByID0gdGhpcy5nZXRMdmxNYXgoKVxuXG4gICAgICAgIGZvciAodmFyIHMgPSBNYXRoLm1heCgxLCBhIC0gMTApOyBzIDw9IGE7ICsrcykge1xuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmJ1eUNoaWNrUHJpY2Uocyk7XG4gICAgICAgICAgICBpZighbiB8fCBjID4gbilcbiAgICAgICAgICAgICAgICBuID0gY1xuICAgICAgICB9XG4gICAgICAgIHZhciBsID0gbi8zZTM7XG4gICAgICAgIGlmKGw8MSlcbiAgICAgICAge1xuICAgICAgICAgICAgbCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHUgPSBNYXRoLmZsb29yKHQgLyA2MCksIGQgPSB0ICUgNjAgLyA2MDtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICBmb3IgKHMgPSAwOyBzIDw9IHU7ICsrcykge1xuICAgICAgICAgICAgdmFyIGggPSBvW3NdIHx8IDEsIGYgPSB2b2lkIDA7XG4gICAgICAgICAgICBmID0gcyA9PSB1ID8gbCooNjAgKiBoKSooMTAwICogZCkvKDEwMCkgOiBsKig2MCAqIGgpLCBcbiAgICAgICAgICAgIHAgPSBwK2Y7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJmZWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICBmb3IodmFyIHBsYW50IG9mIHRoaXMuQ29tUGxhbnRzKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZSA9IHBsYW50Lmx2O1xuICAgICAgICAgICAgaWYocGxhbnQubHY+MClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHAqKDFlNCkvKDFlNCAqIE1hdGgucG93KDIuMSwgTWF0aC5tYXgoMCwgciAtIGUpKSk7XG4gICAgICAgICAgICAgICAgbSA9IG0gKyB0ZW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtXG4gICAgfVxuXG4gICAgQHNhdmUgRHJvcEdpZnRQdHMgPSBbXTsvL+i0reS5sOiKseebhlxuICAgIEBzYXZlIEFkQnV5Tm90RHJvcCA9IFtdOy8v5bm/5ZGK6LSt5Lmw5oiQ5Yqf77yM5Zug5Li65rKh5pyJ56m65L2N5pyq5oiQ5Yqf5re75YqgXG5cbiAgICBAc2F2ZVxuICAgIHByaXZhdGUgX2NvaW46IG51bWJlciA9IDEwMDA7XG4gICAgcHVibGljIGdldCBjb2luKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuX2NvaW4gKiAxMDApIC8gMTAwO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNvaW4odmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJzTWp3UjdjU0R6RWloeUNNR01RbktKRUJ4V0NhcHhcIik7XG4gICAgICAgIHRoaXMuX2NvaW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgQHNhdmVcbiAgICBwcml2YXRlIF9nZW06IG51bWJlciA9IDIwMDtcbiAgICBwdWJsaWMgZ2V0IGdlbSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2VtO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGdlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2dlbSA9IHZhbHVlO1xuICAgIH1cbiAgICBAc2F2ZVxuICAgIHByaXZhdGUgX3NlcnZlclRpbWU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGdldCBzZXJ2ZXJUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJUaW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHNlcnZlclRpbWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zZXJ2ZXJUaW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQHNhdmUgcHVibGljIGd1aWRlSW5kZXggPSAwO1xuICAgIEBzYXZlIHB1YmxpYyBwbGFudEJ1eVRpbWVzID0ge307XG4gICAgQHNhdmUgcHVibGljIHRvZGF5Q29tVGltZXMgPSAwO1xuICAgIEBzYXZlIHB1YmxpYyBDb21QbGFudHM6IFBsYW50SW5mb1tdID0gW3sgb3BlbjogMSwgaW5kZXg6IDAsIGx2OiAxIH1dO1xuXG4gICAgcHVibGljIGdldENoaWNrSW5mbyhpbmRleDogbnVtYmVyKTogUGxhbnRJbmZvIHtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYWNCRFwiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tUGxhbnRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMdmxNYXgoKXtcbiAgICAgICAgbGV0IG1heCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5sdiA+IG1heCkge1xuICAgICAgICAgICAgICAgIG1heCA9IHRoaXMuQ29tUGxhbnRzW2ldLmx2IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuXG4gICAgLy/otK3kubDoirHotLlcbiAgICBwdWJsaWMgYnV5Q2hpY2tQcmljZShsdjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHQ6bnVtYmVyID0gTnVtYmVyKENvbmZpZ19jaGlja1tsdi0xXVs1XSk7XG4gICAgICAgIHZhciBuID0gdGhpcy5wbGFudEJ1eVRpbWVzW2x2XSB8fCAwO1xuICAgICAgICByZXR1cm4gMSA9PSBsdiA/IHQgKiAoMWU0ICogTWF0aC5wb3coMS4wNywgbikpIC8gKDFlNCkgOiB0ICogKDFlNCAqIE1hdGgucG93KDEuMTc1LCBuKSkgLyAoMWU0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZUVmZihpMDogbnVtYmVyLCBpMTogbnVtYmVyKSB7XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIm5FanpoV3hhV05jbjQ0blwiKTtcbiAgICAgICAgdmFyIGl0MDogUGxhbnRJbmZvID0gdGhpcy5nZXRDaGlja0luZm8oaTApO1xuICAgICAgICB2YXIgaXQxOiBQbGFudEluZm8gPSB0aGlzLmdldENoaWNrSW5mbyhpMSk7XG4gICAgICAgIGlmIChpdDAgJiYgaXQxKSB7XG4gICAgICAgICAgICBpdDAuaW5kZXggPSBpMTtcbiAgICAgICAgICAgIGl0MS5pbmRleCA9IGkwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGl0MCkge1xuICAgICAgICAgICAgICAgIGl0MC5pbmRleCA9IGkxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0MSkge1xuICAgICAgICAgICAgICAgIGl0MS5pbmRleCA9IGkwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkc2RzZV9kc2V4Y3hjX2Z1bigpe2NvbnNvbGUubG9nKCdkc2ZnYWppc2RvZTM5MjQtNT0zND00LS0nKX1cblxuICAgIC8v5ZCI5oiQXG4gICAgcHVibGljIGNvbXBvc2VDaGlja3MoaTA6IG51bWJlciwgaTE6IG51bWJlcikge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJQNnl4QlwiKTtcbiAgICAgICAgbGV0IHRtcDEgPSB0aGlzLkNvbVBsYW50cy5maW5kKCh3aikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdqLmluZGV4ID09IGkwO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoIXRtcDEpIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHRtcDIgPSB0aGlzLkNvbVBsYW50cy5maW5kKCh3aikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdqLmluZGV4ID09IGkxO1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdG1wMikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodG1wMS5sdiAhPSB0bXAyLmx2KSB7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJaa2NCRVljUVFhV2ZyWFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRtcGx2ID0gdGhpcy5nZXRMdmxNYXgoKTtcbiAgICAgICAgdmFyIHRtcFByZTogUGxhbnRJbmZvID0gdGhpcy5nZXRDaGlja0luZm8oaTApO1xuICAgICAgICB2YXIgbHYgPSB0bXBQcmUubHY7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuQ29tUGxhbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLliKDpmaRcIiwgaTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGkxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db21QbGFudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuWIoOmZpFwiLCBpMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYy5sb2coXCLliJvlu7pcIiwgaTApO1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIzNXdyeEpORGlyYTN5ZmRzSzJDc003cjN6bmNGXCIpO1xuICAgICAgICB0aGlzLkNvbVBsYW50cy5wdXNoKHsgb3BlbjogdG1wUHJlLm9wZW4sIGluZGV4OiBpMCwgbHY6IGx2ICsgMSB9KTtcbiAgICAgICAgdGhpcy50b2RheUNvbVRpbWVzKys7XG5cbiAgICAgICAgbGV0IHRtcGx2MiA9IHRoaXMuZ2V0THZsTWF4KCk7XG4gICAgICAgIGlmKHRtcGx2MiA+IHRtcGx2ICYmIHRtcGx2MiA8IDYwKVxuICAgICAgICB7XG4gICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9OZXdQbGFudFVJXCIpXG4gICAgICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaChHYW1lQ29uc3QuTkVXX0NISUNLLHRtcGx2Mik7XG4gICAgICAgIH1cbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJtZXJnZV9zdWNjZXNzXCIpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy/otK3kubBcbiAgICBwdWJsaWMgYnV5Q2hpY2soaW5kZXg6IG51bWJlciwgbHY6IG51bWJlcikge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIzSlwiKTtcbiAgICAgICAgaWYoIXRoaXMucGxhbnRCdXlUaW1lc1tsdl0pdGhpcy5wbGFudEJ1eVRpbWVzW2x2XT0wO1xuICAgICAgICB0aGlzLnBsYW50QnV5VGltZXNbbHZdKys7XG4gICAgICAgIGlmKHRoaXMuQ29tUGxhbnRzLmZpbmQoKHApPT57XG4gICAgICAgICAgICBwLmluZGV4ID09IGluZGV4XG4gICAgICAgIH0pKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi57Si5byV6ZSZ6K+vXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRtcCA9IHsgb3BlbjogMSwgaW5kZXg6IGluZGV4LCBsdjogbHYgfTtcbiAgICAgICAgdGhpcy5Db21QbGFudHMucHVzaCh0bXApO1xuICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xuICAgICAgICByZXR1cm4gdG1wO1xuICAgIH1cblxuICAgIC8v5pGn5q+BXG4gICAgcHVibGljIHVwZGF0ZVNlbGxDaGlja0NvaW4oaW5kZXg6IG51bWJlcikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tUGxhbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5idXlDaGlja1ByaWNlKHRoaXMuQ29tUGxhbnRzW2ldLmx2KVxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjVoQTgzRmFcIik7XG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSBNYXRoLmZsb29yKHRtcCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jaGFuZ2VHYW1lQ29pbihNYXRoLmZsb29yKHRtcCkpXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Y2W5LqG5o2i6ZKx77yaXCIgKyB0bXApXG4gICAgICAgICAgICAgICAgdGhpcy5Db21QbGFudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICBcbiAgICBwdWJsaWMgZ2V0QWxsRGF0YSgpOiBvYmplY3Qge1xuICAgICAgICB2YXIgZGF0YSA9IHt9XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkFtNnJ4WGtCSlo1Ulp0bjZrYTgzYkJmZThYXCIpO1xuICAgICAgICB0aGlzLnNlcnZlclRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGRhdGFbc2F2ZXBhcnNbaV1dID0gdGhpc1tzYXZlcGFyc1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IGFueSkge1xuICAgICAgICAvL+WIneWni+WMluS4i+aVsOaNriAgICAgICBcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYXZlcGFycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbc2F2ZXBhcnNbaV1dO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCB8fCBlbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWxlbWVudCkgPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3NhdmVwYXJzW2ldXVtrZXldID0gZWxlbWVudFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzYXZlcGFyc1tpXV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIm5FanpoV3hhV05jbjQ0bnRld3NkXCIpO1xuICAgICAgICB0aGlzLmRzZHNlX2RzZXhjeGNfZnVuKCk7XG4gICAgfVxufSJdfQ==