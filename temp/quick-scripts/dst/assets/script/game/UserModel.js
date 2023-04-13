
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxVc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msa0RBQTZDO0FBQzdDLHdDQUFtQztBQUNuQyx5Q0FBb0M7QUFDcEMsbUNBQXlEO0FBQ3pELDhDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsU0FBUyxJQUFJLENBQUMsTUFBVyxFQUFFLFdBQW1CO0lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWVELFFBQVE7QUFDRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBRWlCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0IsdUJBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsQ0FBQyxDQUFDO1FBRTNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBa0RoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFBLE1BQU07UUFDdkIsaUJBQVksR0FBRyxFQUFFLENBQUMsQ0FBQSxvQkFBb0I7UUFHcEMsVUFBSyxHQUFXLElBQUksQ0FBQztRQVFyQixTQUFJLEdBQVcsR0FBRyxDQUFDO1FBUW5CLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBUW5CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUF1SnpFLENBQUM7SUF0T0cscUJBQUMsR0FBRDtRQUNILDREQUE0RDtRQUNyRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsd0JBQWUsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUE7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEIsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxvQ0FBZ0IsR0FBdkIsVUFBd0IsQ0FBQztRQUVyQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQTtRQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFFeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNaO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUNkLElBQUcsQ0FBQyxHQUFDLENBQUMsRUFDTjtZQUNJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFD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STtzREFBbUM7SUFFbEM7UUFBTCxJQUFJOzJEQUFpQztJQUNoQztRQUFMLElBQUk7MkRBQWlDO0lBRWhDO1FBQUwsSUFBSTswREFBZ0M7SUFDL0I7UUFBTCxJQUFJOzBEQUFnQztJQUUvQjtRQUFMLElBQUk7a0RBQWdDO0lBRS9CO1FBQUwsSUFBSTs0Q0FBMEM7SUFDekM7UUFBTCxJQUFJO3lDQUFlO0lBQ2Q7UUFBTCxJQUFJOzJDQUFpQjtJQWtEaEI7UUFBTCxJQUFJO2tEQUFrQjtJQUNqQjtRQUFMLElBQUk7bURBQW1CO0lBR3hCO1FBREMsSUFBSTs0Q0FDd0I7SUFRN0I7UUFEQyxJQUFJOzJDQUNzQjtJQVEzQjtRQURDLElBQUk7a0RBQzJCO0lBUTFCO1FBQUwsSUFBSTtpREFBdUI7SUFDdEI7UUFBTCxJQUFJO29EQUEyQjtJQUMxQjtRQUFMLElBQUk7b0RBQTBCO0lBQ3pCO1FBQUwsSUFBSTtnREFBZ0U7SUExR3BELFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FpUTdCO0lBQUQsZ0JBQUM7Q0FqUUQsQUFpUUMsSUFBQTtrQkFqUW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9ldmVudC9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tICcuL0dhbWVDb25zdCc7XHJcbmltcG9ydCB7IENvbmZpZ19jaGljaywgQ29uZmlnX3Nob3Bzb3J0IH0gZnJvbSAnLi9Db25maWcnO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSAnLi4vdXRpbHMvQXVkaW9NZ3InO1xyXG5sZXQgc2F2ZXBhcnMgPSBbXTtcclxuZnVuY3Rpb24gc2F2ZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xyXG4gICAgc2F2ZXBhcnMucHVzaChwcm9wZXJ0eUtleSk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBsYW50SW5mbyA9XHJcbiAgICB7XHJcbiAgICAgICAgb3BlbjogbnVtYmVyO1xyXG4gICAgICAgIGx2OiBudW1iZXI7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgdHlwZSBTaWduSW5mbyA9IHtcclxuICAgICAgICBzaWduX2luZGV4OiBudW1iZXIsLy/lvZPliY3nrb7liLDntKLlvJVcclxuICAgICAgICBzaWduX3RpbWU6IG51bWJlciwvL+S4iuasoeetvuWIsOaXtumXtFxyXG4gICAgICAgIHNpZ25fYmVpc3U6IG51bWJlciwvL+mihuWPluWAjeaVsFxyXG4gICAgfVxyXG4gICAgXHJcbi8v55So5oi35pWw5o2u5qih5Z6LXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNb2RlbCB7XHJcblxyXG4gICAgQHNhdmUgcHVibGljIGxhc3RfZGF0ZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIHNpZ25pbmZvOiBTaWduSW5mbyA9IHsgc2lnbl9pbmRleDogMCwgc2lnbl90aW1lOiAwLCBzaWduX2JlaXN1OiAwIH07XHJcbiAgICBAc2F2ZSBwdWJsaWMgbmlja05hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAc2F2ZSBwdWJsaWMgYXZhdGFyVXJsOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHNhdmUgcHVibGljIG9wZW5pZDogc3RyaW5nID0gXCJcIjtcclxuICAgIEBzYXZlIHB1YmxpYyBuaWNrbmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIEBzYXZlIHB1YmxpYyBoZWFkaW1nOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBhdXRvX2NvbV90aW1lOm51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgZG91YmxlX2F0dF90aW1lOm51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgZG91YmxlX2luY29tZV90aW1lOm51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgZHJvcF9wbGFudF90aW1lOm51bWJlciA9IDA7XHJcblxyXG4gICAgQHNhdmUgcHVibGljIHRvZGF5X2dldGNoaWNrX3RpbWVzID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjaGlja190b3RhbCA9IDU7XHJcbiAgICBcclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjb2luX3RpbWVzID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjb2luX3RvdGFsID0gNTtcclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgc2hhcmVfdGltZXM6bnVtYmVyID0gMTA7XHJcblxyXG4gICAgQHNhdmUgcHVibGljIHNsb3RzID0gWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwXTtcclxuICAgIEBzYXZlIHB1YmxpYyBsdiA9IDE7XHJcbiAgICBAc2F2ZSBwdWJsaWMgd2F2ZSA9IDE7XHJcblxyXG4gICAgVCgpIHtcclxuXHQvLyBcIjIwXCI6IFsyMCwgXCJVXCIsIFwiVVwiLCBcIkdcIiwgXCJHXCIsIFwiTVwiLCBcIkFEXCIsIFwiTVwiLCBcIk1cIiwgXCJNXCJdLFxyXG4gICAgICAgIGxldCBsdiA9IHRoaXMuZ2V0THZsTWF4KCk7XHJcbiAgICAgICAgdmFyIHQgPSBDb25maWdfc2hvcHNvcnRbbHYrXCJcIl1cclxuICAgICAgICBmb3IgKHZhciBuID0gMTsgbiA8PSA4OyArK24pXHJcbiAgICAgICAgICAgICBpZiAoXCJBRFwiID09IHRbbl0pIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGx2IC0gbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGx2IC0gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T2ZmbGluZVJld2FyZCh0KS8v5YiG6ZKfXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG4gPSBudWxsO1xyXG4gICAgICAgIHZhciBvID0gWyA1MCwgMzAsIDIwLCAxNSwgMTAsIDUsIDMsIDIgXVxyXG4gICAgICAgIHZhciBhID0gTWF0aC5tYXgoMSwgdGhpcy5UKCkpO1xyXG4gICAgICAgIHZhciByID0gdGhpcy5nZXRMdmxNYXgoKVxyXG5cclxuICAgICAgICBmb3IgKHZhciBzID0gTWF0aC5tYXgoMSwgYSAtIDEwKTsgcyA8PSBhOyArK3MpIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmJ1eUNoaWNrUHJpY2Uocyk7XHJcbiAgICAgICAgICAgIGlmKCFuIHx8IGMgPiBuKVxyXG4gICAgICAgICAgICAgICAgbiA9IGNcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGwgPSBuLzNlMztcclxuICAgICAgICBpZihsPDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHUgPSBNYXRoLmZsb29yKHQgLyA2MCksIGQgPSB0ICUgNjAgLyA2MDtcclxuICAgICAgICB2YXIgcCA9IDA7XHJcbiAgICAgICAgZm9yIChzID0gMDsgcyA8PSB1OyArK3MpIHtcclxuICAgICAgICAgICAgdmFyIGggPSBvW3NdIHx8IDEsIGYgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIGYgPSBzID09IHUgPyBsKig2MCAqIGgpKigxMDAgKiBkKS8oMTAwKSA6IGwqKDYwICogaCksIFxyXG4gICAgICAgICAgICBwID0gcCtmO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbSA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBwbGFudCBvZiB0aGlzLkNvbVBsYW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBlID0gcGxhbnQubHY7XHJcbiAgICAgICAgICAgIGlmKHBsYW50Lmx2PjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gcCooMWU0KS8oMWU0ICogTWF0aC5wb3coMi4xLCBNYXRoLm1heCgwLCByIC0gZSkpKTtcclxuICAgICAgICAgICAgICAgIG0gPSBtICsgdGVtcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbVxyXG4gICAgfVxyXG5cclxuICAgIEBzYXZlIERyb3BHaWZ0UHRzID0gW107Ly/otK3kubDoirHnm4ZcclxuICAgIEBzYXZlIEFkQnV5Tm90RHJvcCA9IFtdOy8v5bm/5ZGK6LSt5Lmw5oiQ5Yqf77yM5Zug5Li65rKh5pyJ56m65L2N5pyq5oiQ5Yqf5re75YqgXHJcblxyXG4gICAgQHNhdmVcclxuICAgIHByaXZhdGUgX2NvaW46IG51bWJlciA9IDEwMDA7XHJcbiAgICBwdWJsaWMgZ2V0IGNvaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLl9jb2luICogMTAwKSAvIDEwMDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgY29pbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29pbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHNhdmVcclxuICAgIHByaXZhdGUgX2dlbTogbnVtYmVyID0gMjAwO1xyXG4gICAgcHVibGljIGdldCBnZW0oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2VtO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBnZW0odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2dlbSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHNhdmVcclxuICAgIHByaXZhdGUgX3NlcnZlclRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0IHNlcnZlclRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmVyVGltZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc2VydmVyVGltZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmVyVGltZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBndWlkZUluZGV4ID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBwbGFudEJ1eVRpbWVzID0ge307XHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlDb21UaW1lcyA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgQ29tUGxhbnRzOiBQbGFudEluZm9bXSA9IFt7IG9wZW46IDEsIGluZGV4OiAwLCBsdjogMSB9XTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hpY2tJbmZvKGluZGV4OiBudW1iZXIpOiBQbGFudEluZm8ge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21QbGFudHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEx2bE1heCgpe1xyXG4gICAgICAgIGxldCBtYXggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmx2ID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXggPSB0aGlzLkNvbVBsYW50c1tpXS5sdiBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8v6LSt5Lmw6Iqx6LS5XHJcbiAgICBwdWJsaWMgYnV5Q2hpY2tQcmljZShsdjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgdDpudW1iZXIgPSBOdW1iZXIoQ29uZmlnX2NoaWNrW2x2LTFdWzVdKTtcclxuICAgICAgICB2YXIgbiA9IHRoaXMucGxhbnRCdXlUaW1lc1tsdl0gfHwgMDtcclxuICAgICAgICByZXR1cm4gMSA9PSBsdiA/IHQgKiAoMWU0ICogTWF0aC5wb3coMS4wNywgbikpIC8gKDFlNCkgOiB0ICogKDFlNCAqIE1hdGgucG93KDEuMTc1LCBuKSkgLyAoMWU0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZUVmZihpMDogbnVtYmVyLCBpMTogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGl0MDogUGxhbnRJbmZvID0gdGhpcy5nZXRDaGlja0luZm8oaTApO1xyXG4gICAgICAgIHZhciBpdDE6IFBsYW50SW5mbyA9IHRoaXMuZ2V0Q2hpY2tJbmZvKGkxKTtcclxuICAgICAgICBpZiAoaXQwICYmIGl0MSkge1xyXG4gICAgICAgICAgICBpdDAuaW5kZXggPSBpMTtcclxuICAgICAgICAgICAgaXQxLmluZGV4ID0gaTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXQwKSB7XHJcbiAgICAgICAgICAgICAgICBpdDAuaW5kZXggPSBpMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXQxKSB7XHJcbiAgICAgICAgICAgICAgICBpdDEuaW5kZXggPSBpMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WQiOaIkFxyXG4gICAgcHVibGljIGNvbXBvc2VDaGlja3MoaTA6IG51bWJlciwgaTE6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0bXAxID0gdGhpcy5Db21QbGFudHMuZmluZCgod2opID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdqLmluZGV4ID09IGkwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCF0bXAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IHRtcDIgPSB0aGlzLkNvbVBsYW50cy5maW5kKCh3aikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2ouaW5kZXggPT0gaTE7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCF0bXAyKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRtcDEubHYgIT0gdG1wMi5sdikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRtcGx2ID0gdGhpcy5nZXRMdmxNYXgoKTtcclxuICAgICAgICB2YXIgdG1wUHJlOiBQbGFudEluZm8gPSB0aGlzLmdldENoaWNrSW5mbyhpMCk7XHJcbiAgICAgICAgdmFyIGx2ID0gdG1wUHJlLmx2O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGkwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbVBsYW50cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLliKDpmaRcIiwgaTApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGkxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbVBsYW50cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLliKDpmaRcIiwgaTEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhcIuWIm+W7ulwiLCBpMCk7XHJcbiAgICAgICAgdGhpcy5Db21QbGFudHMucHVzaCh7IG9wZW46IHRtcFByZS5vcGVuLCBpbmRleDogaTAsIGx2OiBsdiArIDEgfSk7XHJcbiAgICAgICAgdGhpcy50b2RheUNvbVRpbWVzKys7XHJcblxyXG4gICAgICAgIGxldCB0bXBsdjIgPSB0aGlzLmdldEx2bE1heCgpO1xyXG4gICAgICAgIGlmKHRtcGx2MiA+IHRtcGx2ICYmIHRtcGx2MiA8IDYwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTmV3UGxhbnRVSVwiKVxyXG4gICAgICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaChHYW1lQ29uc3QuTkVXX0NISUNLLHRtcGx2Mik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwibWVyZ2Vfc3VjY2Vzc1wiKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgLy/otK3kubBcclxuICAgIHB1YmxpYyBidXlDaGljayhpbmRleDogbnVtYmVyLCBsdjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucGxhbnRCdXlUaW1lc1tsdl0pdGhpcy5wbGFudEJ1eVRpbWVzW2x2XT0wO1xyXG4gICAgICAgIHRoaXMucGxhbnRCdXlUaW1lc1tsdl0rKztcclxuICAgICAgICBpZih0aGlzLkNvbVBsYW50cy5maW5kKChwKT0+e1xyXG4gICAgICAgICAgICBwLmluZGV4ID09IGluZGV4XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi57Si5byV6ZSZ6K+vXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRtcCA9IHsgb3BlbjogMSwgaW5kZXg6IGluZGV4LCBsdjogbHYgfTtcclxuICAgICAgICB0aGlzLkNvbVBsYW50cy5wdXNoKHRtcCk7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pGn5q+BXHJcbiAgICBwdWJsaWMgdXBkYXRlU2VsbENoaWNrQ29pbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0bXAgPSB0aGlzLmJ1eUNoaWNrUHJpY2UodGhpcy5Db21QbGFudHNbaV0ubHYpXHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5jb2luICs9IE1hdGguZmxvb3IodG1wKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhbmdlR2FtZUNvaW4oTWF0aC5mbG9vcih0bXApKVxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Y2W5LqG5o2i6ZKx77yaXCIgKyB0bXApXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbVBsYW50cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHB1YmxpYyBnZXRBbGxEYXRhKCk6IG9iamVjdCB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7fVxyXG4gICAgICAgIHRoaXMuc2VydmVyVGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNhdmVwYXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGRhdGFbc2F2ZXBhcnNbaV1dID0gdGhpc1tzYXZlcGFyc1tpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldERhdGEoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbkuIvmlbDmja4gICAgICAgXHJcbiAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYXZlcGFycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YVtzYXZlcGFyc1tpXV07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwgfHwgZWxlbWVudCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWxlbWVudCkgPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tzYXZlcGFyc1tpXV1ba2V5XSA9IGVsZW1lbnRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzYXZlcGFyc1tpXV0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19