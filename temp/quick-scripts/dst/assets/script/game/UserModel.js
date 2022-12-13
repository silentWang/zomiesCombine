
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxVc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msa0RBQTZDO0FBQzdDLHdDQUFtQztBQUNuQyx5Q0FBb0M7QUFDcEMsbUNBQXlEO0FBQ3pELDhDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsU0FBUyxJQUFJLENBQUMsTUFBVyxFQUFFLFdBQW1CO0lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWVELFFBQVE7QUFDRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBRWlCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0IsdUJBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsQ0FBQyxDQUFDO1FBRTNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBb0RoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFBLE1BQU07UUFDdkIsaUJBQVksR0FBRyxFQUFFLENBQUMsQ0FBQSxvQkFBb0I7UUFHcEMsVUFBSyxHQUFXLElBQUksQ0FBQztRQVNyQixTQUFJLEdBQVcsR0FBRyxDQUFDO1FBUW5CLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBUW5CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUErSnpFLENBQUM7SUFqUEcscUJBQUMsR0FBRDtRQUNILDREQUE0RDtRQUNyRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsd0JBQWUsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUE7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEIsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxvQ0FBZ0IsR0FBdkIsVUFBd0IsQ0FBQztRQUVyQixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUE7UUFDdkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRXhCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDWjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDZCxJQUFHLENBQUMsR0FBQyxDQUFDLEVBQ047WUFDSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUNSLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsS0FBaUIsVUFBYyxFQUFkLEtBQUEsSUFBSSxDQUFDLFNBQVMsRUFBZCxjQUFjLEVBQWQsSUFBYyxFQUMvQjtZQURJLElBQUksS0FBSyxTQUFBO1lBRVQsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNqQixJQUFHLEtBQUssQ0FBQyxFQUFFLEdBQUMsQ0FBQyxFQUNiO2dCQUNJLElBQUksSUFBSSxHQUFHLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ2hCO1NBQ0o7UUFDRCxPQUFPLENBQUMsQ0FBQTtJQUNaLENBQUM7SUFPRCxzQkFBVywyQkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlDLENBQUM7YUFDRCxVQUFnQixLQUFhO1lBQ3pCLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFPRCxzQkFBVywwQkFBRzthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFlLEtBQWE7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBVyxpQ0FBVTthQUFyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBQ0QsVUFBc0IsS0FBYTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FIQTtJQVVNLGdDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzVDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFO2dCQUM1QixHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7YUFDN0I7U0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU07SUFDQyxpQ0FBYSxHQUFwQixVQUFxQixFQUFVO1FBQzNCLElBQUksQ0FBQyxHQUFVLE1BQU0sQ0FBQyxxQkFBWSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRU0sMkJBQU8sR0FBZCxVQUFlLEVBQVUsRUFBRSxFQUFVO1FBQ2pDLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqRSxJQUFJLEdBQUcsR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksR0FBRyxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ1osR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDZixHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNsQjthQUNJO1lBQ0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDbEI7WUFDRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNsQjtTQUNKO0lBQ0wsQ0FBQztJQUVELElBQUk7SUFDRyxpQ0FBYSxHQUFwQixVQUFxQixFQUFVLEVBQUUsRUFBVTtRQUN2QyxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRTtZQUM5QixPQUFPLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUU7WUFDOUIsT0FBTyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3BCLE9BQU8sS0FBSyxDQUFBO1NBQ2Y7UUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0IsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixvQkFBb0I7Z0JBQ3BCLE1BQU07YUFDVDtTQUNKO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzVDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLG9CQUFvQjtnQkFDcEIsTUFBTTthQUNUO1NBQ0o7UUFFRCxvQkFBb0I7UUFDcEIsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixJQUFHLE1BQU0sR0FBRyxLQUFLLElBQUksTUFBTSxHQUFHLEVBQUUsRUFDaEM7WUFDSSxlQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDbkMsbUJBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEVBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUMzQyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFRCxJQUFJO0lBQ0csNEJBQVEsR0FBZixVQUFnQixLQUFhLEVBQUUsRUFBVTtRQUNyQyxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQTtRQUNwQixDQUFDLENBQUMsRUFDRjtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDckIsT0FBTztTQUNWO1FBQ0QsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBSTtJQUNHLHVDQUFtQixHQUExQixVQUEyQixLQUFhO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDbEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUNsRCxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDekQsbUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLHVDQUF1QztnQkFDdkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUE7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBRU0sOEJBQVUsR0FBakI7UUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFDYixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTSwyQkFBTyxHQUFkLFVBQWUsSUFBUztRQUNwQixlQUFlO1FBQ2YsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU87U0FDVjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3RDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtnQkFDekMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQWlCLEVBQUU7b0JBQzlELEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO3dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN6QztpQkFDSjs7b0JBRUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNuQztTQUNKO0lBQ0wsQ0FBQztJQXpRSztRQUFMLElBQUk7Z0RBQTZCO0lBQzVCO1FBQUwsSUFBSTsrQ0FBNEU7SUFDM0U7UUFBTCxJQUFJOytDQUE4QjtJQUM3QjtRQUFMLElBQUk7Z0RBQStCO0lBQzlCO1FBQUwsSUFBSTs2Q0FBNEI7SUFDM0I7UUFBTCxJQUFJOytDQUE4QjtJQUM3QjtRQUFMLElBQUk7OENBQTZCO0lBRTVCO1FBQUwsSUFBSTtvREFBaUM7SUFDaEM7UUFBTCxJQUFJO3NEQUFtQztJQUNsQztRQUFMLElBQUk7eURBQXNDO0lBQ3JDO1FBQUwsSUFBSTtzREFBbUM7SUFFbEM7UUFBTCxJQUFJOzJEQUFpQztJQUNoQztRQUFMLElBQUk7MkRBQWlDO0lBRWhDO1FBQUwsSUFBSTswREFBZ0M7SUFDL0I7UUFBTCxJQUFJOzBEQUFnQztJQUUvQjtRQUFMLElBQUk7a0RBQWdDO0lBRS9CO1FBQUwsSUFBSTs0Q0FBMEM7SUFDekM7UUFBTCxJQUFJO3lDQUFlO0lBQ2Q7UUFBTCxJQUFJOzJDQUFpQjtJQW9EaEI7UUFBTCxJQUFJO2tEQUFrQjtJQUNqQjtRQUFMLElBQUk7bURBQW1CO0lBR3hCO1FBREMsSUFBSTs0Q0FDd0I7SUFTN0I7UUFEQyxJQUFJOzJDQUNzQjtJQVEzQjtRQURDLElBQUk7a0RBQzJCO0lBUTFCO1FBQUwsSUFBSTtpREFBdUI7SUFDdEI7UUFBTCxJQUFJO29EQUEyQjtJQUMxQjtRQUFMLElBQUk7b0RBQTBCO0lBQ3pCO1FBQUwsSUFBSTtnREFBZ0U7SUE3R3BELFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E0UTdCO0lBQUQsZ0JBQUM7Q0E1UUQsQUE0UUMsSUFBQTtrQkE1UW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9ldmVudC9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tICcuL0dhbWVDb25zdCc7XHJcbmltcG9ydCB7IENvbmZpZ19jaGljaywgQ29uZmlnX3Nob3Bzb3J0IH0gZnJvbSAnLi9Db25maWcnO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSAnLi4vdXRpbHMvQXVkaW9NZ3InO1xyXG5sZXQgc2F2ZXBhcnMgPSBbXTtcclxuZnVuY3Rpb24gc2F2ZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xyXG4gICAgc2F2ZXBhcnMucHVzaChwcm9wZXJ0eUtleSk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBsYW50SW5mbyA9XHJcbiAgICB7XHJcbiAgICAgICAgb3BlbjogbnVtYmVyO1xyXG4gICAgICAgIGx2OiBudW1iZXI7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgdHlwZSBTaWduSW5mbyA9IHtcclxuICAgICAgICBzaWduX2luZGV4OiBudW1iZXIsLy/lvZPliY3nrb7liLDntKLlvJVcclxuICAgICAgICBzaWduX3RpbWU6IG51bWJlciwvL+S4iuasoeetvuWIsOaXtumXtFxyXG4gICAgICAgIHNpZ25fYmVpc3U6IG51bWJlciwvL+mihuWPluWAjeaVsFxyXG4gICAgfVxyXG4gICAgXHJcbi8v55So5oi35pWw5o2u5qih5Z6LXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNb2RlbCB7XHJcblxyXG4gICAgQHNhdmUgcHVibGljIGxhc3RfZGF0ZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIHNpZ25pbmZvOiBTaWduSW5mbyA9IHsgc2lnbl9pbmRleDogMCwgc2lnbl90aW1lOiAwLCBzaWduX2JlaXN1OiAwIH07XHJcbiAgICBAc2F2ZSBwdWJsaWMgbmlja05hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAc2F2ZSBwdWJsaWMgYXZhdGFyVXJsOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHNhdmUgcHVibGljIG9wZW5pZDogc3RyaW5nID0gXCJcIjtcclxuICAgIEBzYXZlIHB1YmxpYyBuaWNrbmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIEBzYXZlIHB1YmxpYyBoZWFkaW1nOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBhdXRvX2NvbV90aW1lOm51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgZG91YmxlX2F0dF90aW1lOm51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgZG91YmxlX2luY29tZV90aW1lOm51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgZHJvcF9wbGFudF90aW1lOm51bWJlciA9IDA7XHJcblxyXG4gICAgQHNhdmUgcHVibGljIHRvZGF5X2dldGNoaWNrX3RpbWVzID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjaGlja190b3RhbCA9IDU7XHJcbiAgICBcclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjb2luX3RpbWVzID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjb2luX3RvdGFsID0gNTtcclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgc2hhcmVfdGltZXM6bnVtYmVyID0gMTA7XHJcblxyXG4gICAgQHNhdmUgcHVibGljIHNsb3RzID0gWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwXTtcclxuICAgIEBzYXZlIHB1YmxpYyBsdiA9IDE7XHJcbiAgICBAc2F2ZSBwdWJsaWMgd2F2ZSA9IDE7XHJcblxyXG4gICAgVCgpIHtcclxuXHQvLyBcIjIwXCI6IFsyMCwgXCJVXCIsIFwiVVwiLCBcIkdcIiwgXCJHXCIsIFwiTVwiLCBcIkFEXCIsIFwiTVwiLCBcIk1cIiwgXCJNXCJdLFxyXG4gICAgICAgIGxldCBsdiA9IHRoaXMuZ2V0THZsTWF4KCk7XHJcbiAgICAgICAgdmFyIHQgPSBDb25maWdfc2hvcHNvcnRbbHYrXCJcIl1cclxuICAgICAgICBmb3IgKHZhciBuID0gMTsgbiA8PSA4OyArK24pXHJcbiAgICAgICAgICAgICBpZiAoXCJBRFwiID09IHRbbl0pIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGx2IC0gbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGx2IC0gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T2ZmbGluZVJld2FyZCh0KS8v5YiG6ZKfXHJcbiAgICB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiRFdhWkhZdzJTOFc3S3lLblpSNVpcIik7XHJcbiAgICAgICAgdmFyIG4gPSBudWxsO1xyXG4gICAgICAgIHZhciBvID0gWyA1MCwgMzAsIDIwLCAxNSwgMTAsIDUsIDMsIDIgXVxyXG4gICAgICAgIHZhciBhID0gTWF0aC5tYXgoMSwgdGhpcy5UKCkpO1xyXG4gICAgICAgIHZhciByID0gdGhpcy5nZXRMdmxNYXgoKVxyXG5cclxuICAgICAgICBmb3IgKHZhciBzID0gTWF0aC5tYXgoMSwgYSAtIDEwKTsgcyA8PSBhOyArK3MpIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmJ1eUNoaWNrUHJpY2Uocyk7XHJcbiAgICAgICAgICAgIGlmKCFuIHx8IGMgPiBuKVxyXG4gICAgICAgICAgICAgICAgbiA9IGNcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGwgPSBuLzNlMztcclxuICAgICAgICBpZihsPDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHUgPSBNYXRoLmZsb29yKHQgLyA2MCksIGQgPSB0ICUgNjAgLyA2MDtcclxuICAgICAgICB2YXIgcCA9IDA7XHJcbiAgICAgICAgZm9yIChzID0gMDsgcyA8PSB1OyArK3MpIHtcclxuICAgICAgICAgICAgdmFyIGggPSBvW3NdIHx8IDEsIGYgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIGYgPSBzID09IHUgPyBsKig2MCAqIGgpKigxMDAgKiBkKS8oMTAwKSA6IGwqKDYwICogaCksIFxyXG4gICAgICAgICAgICBwID0gcCtmO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJmZWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtID0gMDtcclxuICAgICAgICBmb3IodmFyIHBsYW50IG9mIHRoaXMuQ29tUGxhbnRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBwbGFudC5sdjtcclxuICAgICAgICAgICAgaWYocGxhbnQubHY+MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBwKigxZTQpLygxZTQgKiBNYXRoLnBvdygyLjEsIE1hdGgubWF4KDAsIHIgLSBlKSkpO1xyXG4gICAgICAgICAgICAgICAgbSA9IG0gKyB0ZW1wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtXHJcbiAgICB9XHJcblxyXG4gICAgQHNhdmUgRHJvcEdpZnRQdHMgPSBbXTsvL+i0reS5sOiKseebhlxyXG4gICAgQHNhdmUgQWRCdXlOb3REcm9wID0gW107Ly/lub/lkYrotK3kubDmiJDlip/vvIzlm6DkuLrmsqHmnInnqbrkvY3mnKrmiJDlip/mt7vliqBcclxuXHJcbiAgICBAc2F2ZVxyXG4gICAgcHJpdmF0ZSBfY29pbjogbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBnZXQgY29pbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuX2NvaW4gKiAxMDApIC8gMTAwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBjb2luKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJzTWp3UjdjU0R6RWloeUNNR01RbktKRUJ4V0NhcHhcIik7XHJcbiAgICAgICAgdGhpcy5fY29pbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHNhdmVcclxuICAgIHByaXZhdGUgX2dlbTogbnVtYmVyID0gMjAwO1xyXG4gICAgcHVibGljIGdldCBnZW0oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2VtO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBnZW0odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2dlbSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHNhdmVcclxuICAgIHByaXZhdGUgX3NlcnZlclRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0IHNlcnZlclRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmVyVGltZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc2VydmVyVGltZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmVyVGltZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBndWlkZUluZGV4ID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBwbGFudEJ1eVRpbWVzID0ge307XHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlDb21UaW1lcyA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgQ29tUGxhbnRzOiBQbGFudEluZm9bXSA9IFt7IG9wZW46IDEsIGluZGV4OiAwLCBsdjogMSB9XTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hpY2tJbmZvKGluZGV4OiBudW1iZXIpOiBQbGFudEluZm8ge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImFjQkRcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbVBsYW50c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0THZsTWF4KCl7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0ubHYgPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgIG1heCA9IHRoaXMuQ29tUGxhbnRzW2ldLmx2IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgLy/otK3kubDoirHotLlcclxuICAgIHB1YmxpYyBidXlDaGlja1ByaWNlKGx2OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciB0Om51bWJlciA9IE51bWJlcihDb25maWdfY2hpY2tbbHYtMV1bNV0pO1xyXG4gICAgICAgIHZhciBuID0gdGhpcy5wbGFudEJ1eVRpbWVzW2x2XSB8fCAwO1xyXG4gICAgICAgIHJldHVybiAxID09IGx2ID8gdCAqICgxZTQgKiBNYXRoLnBvdygxLjA3LCBuKSkgLyAoMWU0KSA6IHQgKiAoMWU0ICogTWF0aC5wb3coMS4xNzUsIG4pKSAvICgxZTQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlRWZmKGkwOiBudW1iZXIsIGkxOiBudW1iZXIpIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJuRWp6aFd4YVdOY240NG5cIik7XHJcbiAgICAgICAgdmFyIGl0MDogUGxhbnRJbmZvID0gdGhpcy5nZXRDaGlja0luZm8oaTApO1xyXG4gICAgICAgIHZhciBpdDE6IFBsYW50SW5mbyA9IHRoaXMuZ2V0Q2hpY2tJbmZvKGkxKTtcclxuICAgICAgICBpZiAoaXQwICYmIGl0MSkge1xyXG4gICAgICAgICAgICBpdDAuaW5kZXggPSBpMTtcclxuICAgICAgICAgICAgaXQxLmluZGV4ID0gaTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXQwKSB7XHJcbiAgICAgICAgICAgICAgICBpdDAuaW5kZXggPSBpMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXQxKSB7XHJcbiAgICAgICAgICAgICAgICBpdDEuaW5kZXggPSBpMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WQiOaIkFxyXG4gICAgcHVibGljIGNvbXBvc2VDaGlja3MoaTA6IG51bWJlciwgaTE6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlA2eXhCXCIpO1xyXG4gICAgICAgIGxldCB0bXAxID0gdGhpcy5Db21QbGFudHMuZmluZCgod2opID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdqLmluZGV4ID09IGkwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCF0bXAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IHRtcDIgPSB0aGlzLkNvbVBsYW50cy5maW5kKCh3aikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2ouaW5kZXggPT0gaTE7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCF0bXAyKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRtcDEubHYgIT0gdG1wMi5sdikge1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJaa2NCRVljUVFhV2ZyWFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVyclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0bXBsdiA9IHRoaXMuZ2V0THZsTWF4KCk7XHJcbiAgICAgICAgdmFyIHRtcFByZTogUGxhbnRJbmZvID0gdGhpcy5nZXRDaGlja0luZm8oaTApO1xyXG4gICAgICAgIHZhciBsdiA9IHRtcFByZS5sdjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tUGxhbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db21QbGFudHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5Yig6ZmkXCIsIGkwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tUGxhbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db21QbGFudHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5Yig6ZmkXCIsIGkxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYy5sb2coXCLliJvlu7pcIiwgaTApO1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjM1d3J4Sk5EaXJhM3lmZHNLMkNzTTdyM3puY0ZcIik7XHJcbiAgICAgICAgdGhpcy5Db21QbGFudHMucHVzaCh7IG9wZW46IHRtcFByZS5vcGVuLCBpbmRleDogaTAsIGx2OiBsdiArIDEgfSk7XHJcbiAgICAgICAgdGhpcy50b2RheUNvbVRpbWVzKys7XHJcblxyXG4gICAgICAgIGxldCB0bXBsdjIgPSB0aGlzLmdldEx2bE1heCgpO1xyXG4gICAgICAgIGlmKHRtcGx2MiA+IHRtcGx2ICYmIHRtcGx2MiA8IDYwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTmV3UGxhbnRVSVwiKVxyXG4gICAgICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaChHYW1lQ29uc3QuTkVXX0NISUNLLHRtcGx2Mik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwibWVyZ2Vfc3VjY2Vzc1wiKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgLy/otK3kubBcclxuICAgIHB1YmxpYyBidXlDaGljayhpbmRleDogbnVtYmVyLCBsdjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiM0pcIik7XHJcbiAgICAgICAgaWYoIXRoaXMucGxhbnRCdXlUaW1lc1tsdl0pdGhpcy5wbGFudEJ1eVRpbWVzW2x2XT0wO1xyXG4gICAgICAgIHRoaXMucGxhbnRCdXlUaW1lc1tsdl0rKztcclxuICAgICAgICBpZih0aGlzLkNvbVBsYW50cy5maW5kKChwKT0+e1xyXG4gICAgICAgICAgICBwLmluZGV4ID09IGluZGV4XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi57Si5byV6ZSZ6K+vXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRtcCA9IHsgb3BlbjogMSwgaW5kZXg6IGluZGV4LCBsdjogbHYgfTtcclxuICAgICAgICB0aGlzLkNvbVBsYW50cy5wdXNoKHRtcCk7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pGn5q+BXHJcbiAgICBwdWJsaWMgdXBkYXRlU2VsbENoaWNrQ29pbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0bXAgPSB0aGlzLmJ1eUNoaWNrUHJpY2UodGhpcy5Db21QbGFudHNbaV0ubHYpXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI1aEE4M0ZhXCIpO1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSBNYXRoLmZsb29yKHRtcCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNoYW5nZUdhbWVDb2luKE1hdGguZmxvb3IodG1wKSlcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWNluS6huaNoumSse+8mlwiICsgdG1wKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5Db21QbGFudHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgZ2V0QWxsRGF0YSgpOiBvYmplY3Qge1xyXG4gICAgICAgIHZhciBkYXRhID0ge31cclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJBbTZyeFhrQkpaNVJadG42a2E4M2JCZmU4WFwiKTtcclxuICAgICAgICB0aGlzLnNlcnZlclRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYXZlcGFycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBkYXRhW3NhdmVwYXJzW2ldXSA9IHRoaXNbc2F2ZXBhcnNbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5LiL5pWw5o2uICAgICAgIFxyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbc2F2ZXBhcnNbaV1dO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsIHx8IGVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsZW1lbnQpID09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbc2F2ZXBhcnNbaV1dW2tleV0gPSBlbGVtZW50W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc2F2ZXBhcnNbaV1dID0gZWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==