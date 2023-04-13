
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9Vc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msa0RBQTZDO0FBQzdDLHdDQUFtQztBQUNuQyx5Q0FBb0M7QUFDcEMsbUNBQXlEO0FBQ3pELDhDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsU0FBUyxJQUFJLENBQUMsTUFBVyxFQUFFLFdBQW1CO0lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWVELFFBQVE7QUFDRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBRWlCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0IsdUJBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsQ0FBQyxDQUFDO1FBRTNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBa0RoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFBLE1BQU07UUFDdkIsaUJBQVksR0FBRyxFQUFFLENBQUMsQ0FBQSxvQkFBb0I7UUFHcEMsVUFBSyxHQUFXLElBQUksQ0FBQztRQVFyQixTQUFJLEdBQVcsR0FBRyxDQUFDO1FBUW5CLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBUW5CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUEwSnpFLENBQUM7SUF6T0cscUJBQUMsR0FBRDtRQUNILDREQUE0RDtRQUNyRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsd0JBQWUsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUE7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEIsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxvQ0FBZ0IsR0FBdkIsVUFBd0IsQ0FBQztRQUVyQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQTtRQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFFeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNaO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUNkLElBQUcsQ0FBQyxHQUFDLENBQUMsRUFDTjtZQUNJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENB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QjtRQUFMLElBQUk7OENBQTZCO0lBRTVCO1FBQUwsSUFBSTtvREFBaUM7SUFDaEM7UUFBTCxJQUFJO3NEQUFtQztJQUNsQztRQUFMLElBQUk7eURBQXNDO0lBQ3JDO1FBQUwsSUFBSTtzREFBbUM7SUFFbEM7UUFBTCxJQUFJOzJEQUFpQztJQUNoQztRQUFMLElBQUk7MkRBQWlDO0lBRWhDO1FBQUwsSUFBSTswREFBZ0M7SUFDL0I7UUFBTCxJQUFJOzBEQUFnQztJQUUvQjtRQUFMLElBQUk7a0RBQWdDO0lBRS9CO1FBQUwsSUFBSTs0Q0FBMEM7SUFDekM7UUFBTCxJQUFJO3lDQUFlO0lBQ2Q7UUFBTCxJQUFJOzJDQUFpQjtJQWtEaEI7UUFBTCxJQUFJO2tEQUFrQjtJQUNqQjtRQUFMLElBQUk7bURBQW1CO0lBR3hCO1FBREMsSUFBSTs0Q0FDd0I7SUFRN0I7UUFEQyxJQUFJOzJDQUNzQjtJQVEzQjtRQURDLElBQUk7a0RBQzJCO0lBUTFCO1FBQUwsSUFBSTtpREFBdUI7SUFDdEI7UUFBTCxJQUFJO29EQUEyQjtJQUMxQjtRQUFMLElBQUk7b0RBQTBCO0lBQ3pCO1FBQUwsSUFBSTtnREFBZ0U7SUExR3BELFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvUTdCO0lBQUQsZ0JBQUM7Q0FwUUQsQUFvUUMsSUFBQTtrQkFwUW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9ldmVudC9HYW1lRXZlbnRcIjtcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IEdhbWVDb25zdCBmcm9tICcuL0dhbWVDb25zdCc7XG5pbXBvcnQgeyBDb25maWdfY2hpY2ssIENvbmZpZ19zaG9wc29ydCB9IGZyb20gJy4vQ29uZmlnJztcbmltcG9ydCBBdWRpb01nciBmcm9tICcuLi91dGlscy9BdWRpb01ncic7XG5sZXQgc2F2ZXBhcnMgPSBbXTtcbmZ1bmN0aW9uIHNhdmUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcbiAgICBzYXZlcGFycy5wdXNoKHByb3BlcnR5S2V5KTtcbn1cblxuZXhwb3J0IHR5cGUgUGxhbnRJbmZvID1cbiAgICB7XG4gICAgICAgIG9wZW46IG51bWJlcjtcbiAgICAgICAgbHY6IG51bWJlcjtcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcbiAgICB9XG5cbiAgICBleHBvcnQgdHlwZSBTaWduSW5mbyA9IHtcbiAgICAgICAgc2lnbl9pbmRleDogbnVtYmVyLC8v5b2T5YmN562+5Yiw57Si5byVXG4gICAgICAgIHNpZ25fdGltZTogbnVtYmVyLC8v5LiK5qyh562+5Yiw5pe26Ze0XG4gICAgICAgIHNpZ25fYmVpc3U6IG51bWJlciwvL+mihuWPluWAjeaVsFxuICAgIH1cbiAgICBcbi8v55So5oi35pWw5o2u5qih5Z6LXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNb2RlbCB7XG5cbiAgICBAc2F2ZSBwdWJsaWMgbGFzdF9kYXRlOm51bWJlciA9IDA7XG4gICAgQHNhdmUgcHVibGljIHNpZ25pbmZvOiBTaWduSW5mbyA9IHsgc2lnbl9pbmRleDogMCwgc2lnbl90aW1lOiAwLCBzaWduX2JlaXN1OiAwIH07XG4gICAgQHNhdmUgcHVibGljIG5pY2tOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBzYXZlIHB1YmxpYyBhdmF0YXJVcmw6IHN0cmluZyA9IFwiXCI7XG4gICAgQHNhdmUgcHVibGljIG9wZW5pZDogc3RyaW5nID0gXCJcIjtcbiAgICBAc2F2ZSBwdWJsaWMgbmlja25hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgQHNhdmUgcHVibGljIGhlYWRpbWc6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBAc2F2ZSBwdWJsaWMgYXV0b19jb21fdGltZTpudW1iZXIgPSAwO1xuICAgIEBzYXZlIHB1YmxpYyBkb3VibGVfYXR0X3RpbWU6bnVtYmVyID0gMDtcbiAgICBAc2F2ZSBwdWJsaWMgZG91YmxlX2luY29tZV90aW1lOm51bWJlciA9IDA7XG4gICAgQHNhdmUgcHVibGljIGRyb3BfcGxhbnRfdGltZTpudW1iZXIgPSAwO1xuXG4gICAgQHNhdmUgcHVibGljIHRvZGF5X2dldGNoaWNrX3RpbWVzID0gMDtcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y2hpY2tfdG90YWwgPSA1O1xuICAgIFxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjb2luX3RpbWVzID0gMDtcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y29pbl90b3RhbCA9IDU7XG5cbiAgICBAc2F2ZSBwdWJsaWMgc2hhcmVfdGltZXM6bnVtYmVyID0gMTA7XG5cbiAgICBAc2F2ZSBwdWJsaWMgc2xvdHMgPSBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDBdO1xuICAgIEBzYXZlIHB1YmxpYyBsdiA9IDE7XG4gICAgQHNhdmUgcHVibGljIHdhdmUgPSAxO1xuXG4gICAgVCgpIHtcblx0Ly8gXCIyMFwiOiBbMjAsIFwiVVwiLCBcIlVcIiwgXCJHXCIsIFwiR1wiLCBcIk1cIiwgXCJBRFwiLCBcIk1cIiwgXCJNXCIsIFwiTVwiXSxcbiAgICAgICAgbGV0IGx2ID0gdGhpcy5nZXRMdmxNYXgoKTtcbiAgICAgICAgdmFyIHQgPSBDb25maWdfc2hvcHNvcnRbbHYrXCJcIl1cbiAgICAgICAgZm9yICh2YXIgbiA9IDE7IG4gPD0gODsgKytuKVxuICAgICAgICAgICAgIGlmIChcIkFEXCIgPT0gdFtuXSkgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGx2IC0gbjtcblxuICAgICAgICByZXR1cm4gbHYgLSA0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPZmZsaW5lUmV3YXJkKHQpLy/liIbpkp9cbiAgICB7XG4gICAgICAgIHZhciBuID0gbnVsbDtcbiAgICAgICAgdmFyIG8gPSBbIDUwLCAzMCwgMjAsIDE1LCAxMCwgNSwgMywgMiBdXG4gICAgICAgIHZhciBhID0gTWF0aC5tYXgoMSwgdGhpcy5UKCkpO1xuICAgICAgICB2YXIgciA9IHRoaXMuZ2V0THZsTWF4KClcblxuICAgICAgICBmb3IgKHZhciBzID0gTWF0aC5tYXgoMSwgYSAtIDEwKTsgcyA8PSBhOyArK3MpIHtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5idXlDaGlja1ByaWNlKHMpO1xuICAgICAgICAgICAgaWYoIW4gfHwgYyA+IG4pXG4gICAgICAgICAgICAgICAgbiA9IGNcbiAgICAgICAgfVxuICAgICAgICB2YXIgbCA9IG4vM2UzO1xuICAgICAgICBpZihsPDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGwgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1ID0gTWF0aC5mbG9vcih0IC8gNjApLCBkID0gdCAlIDYwIC8gNjA7XG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgZm9yIChzID0gMDsgcyA8PSB1OyArK3MpIHtcbiAgICAgICAgICAgIHZhciBoID0gb1tzXSB8fCAxLCBmID0gdm9pZCAwO1xuICAgICAgICAgICAgZiA9IHMgPT0gdSA/IGwqKDYwICogaCkqKDEwMCAqIGQpLygxMDApIDogbCooNjAgKiBoKSwgXG4gICAgICAgICAgICBwID0gcCtmO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtID0gMDtcbiAgICAgICAgZm9yKHZhciBwbGFudCBvZiB0aGlzLkNvbVBsYW50cylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGUgPSBwbGFudC5sdjtcbiAgICAgICAgICAgIGlmKHBsYW50Lmx2PjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBwKigxZTQpLygxZTQgKiBNYXRoLnBvdygyLjEsIE1hdGgubWF4KDAsIHIgLSBlKSkpO1xuICAgICAgICAgICAgICAgIG0gPSBtICsgdGVtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbVxuICAgIH1cblxuICAgIEBzYXZlIERyb3BHaWZ0UHRzID0gW107Ly/otK3kubDoirHnm4ZcbiAgICBAc2F2ZSBBZEJ1eU5vdERyb3AgPSBbXTsvL+W5v+WRiui0reS5sOaIkOWKn++8jOWboOS4uuayoeacieepuuS9jeacquaIkOWKn+a3u+WKoFxuXG4gICAgQHNhdmVcbiAgICBwcml2YXRlIF9jb2luOiBudW1iZXIgPSAxMDAwO1xuICAgIHB1YmxpYyBnZXQgY29pbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLl9jb2luICogMTAwKSAvIDEwMDtcbiAgICB9XG4gICAgcHVibGljIHNldCBjb2luKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY29pbiA9IHZhbHVlO1xuICAgIH1cbiAgICBAc2F2ZVxuICAgIHByaXZhdGUgX2dlbTogbnVtYmVyID0gMjAwO1xuICAgIHB1YmxpYyBnZXQgZ2VtKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZW07XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZ2VtKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZ2VtID0gdmFsdWU7XG4gICAgfVxuICAgIEBzYXZlXG4gICAgcHJpdmF0ZSBfc2VydmVyVGltZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZ2V0IHNlcnZlclRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclRpbWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc2VydmVyVGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlcnZlclRpbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBAc2F2ZSBwdWJsaWMgZ3VpZGVJbmRleCA9IDA7XG4gICAgQHNhdmUgcHVibGljIHBsYW50QnV5VGltZXMgPSB7fTtcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlDb21UaW1lcyA9IDA7XG4gICAgQHNhdmUgcHVibGljIENvbVBsYW50czogUGxhbnRJbmZvW10gPSBbeyBvcGVuOiAxLCBpbmRleDogMCwgbHY6IDEgfV07XG5cbiAgICBwdWJsaWMgZ2V0Q2hpY2tJbmZvKGluZGV4OiBudW1iZXIpOiBQbGFudEluZm8ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tUGxhbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21QbGFudHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEx2bE1heCgpe1xuICAgICAgICBsZXQgbWF4ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmx2ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gdGhpcy5Db21QbGFudHNbaV0ubHYgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG5cbiAgICAvL+i0reS5sOiKsei0uVxuICAgIHB1YmxpYyBidXlDaGlja1ByaWNlKGx2OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICB2YXIgdDpudW1iZXIgPSBOdW1iZXIoQ29uZmlnX2NoaWNrW2x2LTFdWzVdKTtcbiAgICAgICAgdmFyIG4gPSB0aGlzLnBsYW50QnV5VGltZXNbbHZdIHx8IDA7XG4gICAgICAgIHJldHVybiAxID09IGx2ID8gdCAqICgxZTQgKiBNYXRoLnBvdygxLjA3LCBuKSkgLyAoMWU0KSA6IHQgKiAoMWU0ICogTWF0aC5wb3coMS4xNzUsIG4pKSAvICgxZTQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlRWZmKGkwOiBudW1iZXIsIGkxOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGl0MDogUGxhbnRJbmZvID0gdGhpcy5nZXRDaGlja0luZm8oaTApO1xuICAgICAgICB2YXIgaXQxOiBQbGFudEluZm8gPSB0aGlzLmdldENoaWNrSW5mbyhpMSk7XG4gICAgICAgIGlmIChpdDAgJiYgaXQxKSB7XG4gICAgICAgICAgICBpdDAuaW5kZXggPSBpMTtcbiAgICAgICAgICAgIGl0MS5pbmRleCA9IGkwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGl0MCkge1xuICAgICAgICAgICAgICAgIGl0MC5pbmRleCA9IGkxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0MSkge1xuICAgICAgICAgICAgICAgIGl0MS5pbmRleCA9IGkwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkc2RzZV9kc2V4Y3hjX2Z1bigpe2NvbnNvbGUubG9nKCdkc2ZnYWppc2RvZTM5MjQtNT0zND00LS0nKX1cblxuICAgIC8v5ZCI5oiQXG4gICAgcHVibGljIGNvbXBvc2VDaGlja3MoaTA6IG51bWJlciwgaTE6IG51bWJlcikge1xuICAgICAgICBsZXQgdG1wMSA9IHRoaXMuQ29tUGxhbnRzLmZpbmQoKHdqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2ouaW5kZXggPT0gaTA7XG4gICAgICAgIH0pXG4gICAgICAgIGlmICghdG1wMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgdG1wMiA9IHRoaXMuQ29tUGxhbnRzLmZpbmQoKHdqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2ouaW5kZXggPT0gaTE7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0bXAyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0bXAxLmx2ICE9IHRtcDIubHYpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRtcGx2ID0gdGhpcy5nZXRMdmxNYXgoKTtcbiAgICAgICAgdmFyIHRtcFByZTogUGxhbnRJbmZvID0gdGhpcy5nZXRDaGlja0luZm8oaTApO1xuICAgICAgICB2YXIgbHYgPSB0bXBQcmUubHY7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuQ29tUGxhbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLliKDpmaRcIiwgaTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGkxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db21QbGFudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuWIoOmZpFwiLCBpMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYy5sb2coXCLliJvlu7pcIiwgaTApO1xuICAgICAgICB0aGlzLkNvbVBsYW50cy5wdXNoKHsgb3BlbjogdG1wUHJlLm9wZW4sIGluZGV4OiBpMCwgbHY6IGx2ICsgMSB9KTtcbiAgICAgICAgdGhpcy50b2RheUNvbVRpbWVzKys7XG5cbiAgICAgICAgbGV0IHRtcGx2MiA9IHRoaXMuZ2V0THZsTWF4KCk7XG4gICAgICAgIGlmKHRtcGx2MiA+IHRtcGx2ICYmIHRtcGx2MiA8IDYwKVxuICAgICAgICB7XG4gICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9OZXdQbGFudFVJXCIpXG4gICAgICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaChHYW1lQ29uc3QuTkVXX0NISUNLLHRtcGx2Mik7XG4gICAgICAgIH1cbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJtZXJnZV9zdWNjZXNzXCIpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy/otK3kubBcbiAgICBwdWJsaWMgYnV5Q2hpY2soaW5kZXg6IG51bWJlciwgbHY6IG51bWJlcikge1xuICAgICAgICBpZighdGhpcy5wbGFudEJ1eVRpbWVzW2x2XSl0aGlzLnBsYW50QnV5VGltZXNbbHZdPTA7XG4gICAgICAgIHRoaXMucGxhbnRCdXlUaW1lc1tsdl0rKztcbiAgICAgICAgaWYodGhpcy5Db21QbGFudHMuZmluZCgocCk9PntcbiAgICAgICAgICAgIHAuaW5kZXggPT0gaW5kZXhcbiAgICAgICAgfSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLntKLlvJXplJnor69cIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG1wID0geyBvcGVuOiAxLCBpbmRleDogaW5kZXgsIGx2OiBsdiB9O1xuICAgICAgICB0aGlzLkNvbVBsYW50cy5wdXNoKHRtcCk7XG4gICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgIHJldHVybiB0bXA7XG4gICAgfVxuXG4gICAgLy/mkafmr4FcbiAgICBwdWJsaWMgdXBkYXRlU2VsbENoaWNrQ29pbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciB0bXAgPSB0aGlzLmJ1eUNoaWNrUHJpY2UodGhpcy5Db21QbGFudHNbaV0ubHYpXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSBNYXRoLmZsb29yKHRtcCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jaGFuZ2VHYW1lQ29pbihNYXRoLmZsb29yKHRtcCkpXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Y2W5LqG5o2i6ZKx77yaXCIgKyB0bXApXG4gICAgICAgICAgICAgICAgdGhpcy5Db21QbGFudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICBcbiAgICBwdWJsaWMgZ2V0QWxsRGF0YSgpOiBvYmplY3Qge1xuICAgICAgICB2YXIgZGF0YSA9IHt9XG4gICAgICAgIHRoaXMuc2VydmVyVGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYXZlcGFycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgZGF0YVtzYXZlcGFyc1tpXV0gPSB0aGlzW3NhdmVwYXJzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgcHVibGljIHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIC8v5Yid5aeL5YyW5LiL5pWw5o2uICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNhdmVwYXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YVtzYXZlcGFyc1tpXV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsIHx8IGVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbGVtZW50KSA9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbc2F2ZXBhcnNbaV1dW2tleV0gPSBlbGVtZW50W2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzW3NhdmVwYXJzW2ldXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kc2RzZV9kc2V4Y3hjX2Z1bigpO1xuICAgIH1cbn0iXX0=