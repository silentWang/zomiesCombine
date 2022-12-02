
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
var Data_1 = require("../manager/Data");
var Utils_1 = require("../utils/Utils");
var GameConst_1 = require("./GameConst");
var DB_1 = require("./DB");
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
        var lv = this.GetMaxLv();
        var t = DB_1.DB_shopSort[lv + ""];
        for (var n = 1; n <= 8; ++n)
            if ("AD" == t[n])
                return lv - n;
        return lv - 4;
    };
    UserModel.prototype.getOfflineEarning = function (t) {
        var n = null;
        var o = [50, 30, 20, 15, 10, 5, 3, 2];
        var a = Math.max(1, this.T());
        var r = this.GetMaxLv();
        for (var s = Math.max(1, a - 10); s <= a; ++s) {
            var c = this.BuyPrice(s);
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
    UserModel.prototype.getPlantInfo = function (index) {
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == index) {
                return this.ComPlants[i];
            }
        }
        return null;
    };
    UserModel.prototype.GetMaxLv = function () {
        var max = 0;
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].lv > max) {
                max = this.ComPlants[i].lv;
            }
        }
        return max;
    };
    //购买花费
    UserModel.prototype.BuyPrice = function (lv) {
        var t = Number(DB_1.DB_plant[lv - 1][5]);
        var n = this.plantBuyTimes[lv] || 0;
        return 1 == lv ? t * (1e4 * Math.pow(1.07, n)) / (1e4) : t * (1e4 * Math.pow(1.175, n)) / (1e4);
    };
    UserModel.prototype.CompMove = function (i0, i1) {
        var it0 = this.getPlantInfo(i0);
        var it1 = this.getPlantInfo(i1);
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
    UserModel.prototype.ComposePlant = function (i0, i1) {
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
            console.log(tmp1, tmp2);
            console.error("err");
            return false;
        }
        var tmplv = this.GetMaxLv();
        var tmpPre = this.getPlantInfo(i0);
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
        var tmplv2 = this.GetMaxLv();
        if (tmplv2 > tmplv && tmplv2 < 60) {
            console.log("新植物     ");
            Utils_1.default.createUI("prefab/NewPlantUI");
            GameEvent_1.default.Instance().dispatch(GameConst_1.default.NEW_PLANT, tmplv2);
        }
        AudioMgr_1.default.Instance().playSFX("merge_success");
        return true;
    };
    //购买
    UserModel.prototype.BuyPlant = function (index, lv) {
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
        // console.log("buy",lv)
        Data_1.default.save();
        return tmp;
    };
    //摧毁
    UserModel.prototype.DropWuJiang = function (index) {
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == index) {
                var tmp = this.BuyPrice(this.ComPlants[i].lv);
                Data_1.default.user.coin += Math.floor(tmp);
                // this.changeGameCoin(Math.floor(tmp))
                cc.log("卖了换钱：" + tmp);
                this.ComPlants.splice(i, 1);
                break;
            }
        }
    };
    UserModel.prototype.getUploadData = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxVc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msd0NBQW1DO0FBQ25DLHdDQUFtQztBQUNuQyx5Q0FBb0M7QUFDcEMsMkJBQTZDO0FBQzdDLDhDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsU0FBUyxJQUFJLENBQUMsTUFBVyxFQUFFLFdBQW1CO0lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWVELFFBQVE7QUFDRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBRWlCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0IsdUJBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsQ0FBQyxDQUFDO1FBRTNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBa0RoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFBLE1BQU07UUFDdkIsaUJBQVksR0FBRyxFQUFFLENBQUMsQ0FBQSxvQkFBb0I7UUFHcEMsVUFBSyxHQUFXLElBQUksQ0FBQztRQVFyQixTQUFJLEdBQVcsR0FBRyxDQUFDO1FBUW5CLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBUW5CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUEwSnpFLENBQUM7SUF6T0cscUJBQUMsR0FBRDtRQUNILDREQUE0RDtRQUNyRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsZ0JBQVcsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEIsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxxQ0FBaUIsR0FBeEIsVUFBeUIsQ0FBQztRQUV0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQTtRQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNaO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUNkLElBQUcsQ0FBQyxHQUFDLENBQUMsRUFDTjtZQUNJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFD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QUFMLElBQUk7OENBQTZCO0lBRTVCO1FBQUwsSUFBSTtvREFBaUM7SUFDaEM7UUFBTCxJQUFJO3NEQUFtQztJQUNsQztRQUFMLElBQUk7eURBQXNDO0lBQ3JDO1FBQUwsSUFBSTtzREFBbUM7SUFFbEM7UUFBTCxJQUFJOzJEQUFpQztJQUNoQztRQUFMLElBQUk7MkRBQWlDO0lBRWhDO1FBQUwsSUFBSTswREFBZ0M7SUFDL0I7UUFBTCxJQUFJOzBEQUFnQztJQUUvQjtRQUFMLElBQUk7a0RBQWdDO0lBRS9CO1FBQUwsSUFBSTs0Q0FBMEM7SUFDekM7UUFBTCxJQUFJO3lDQUFlO0lBQ2Q7UUFBTCxJQUFJOzJDQUFpQjtJQWtEaEI7UUFBTCxJQUFJO2tEQUFrQjtJQUNqQjtRQUFMLElBQUk7bURBQW1CO0lBR3hCO1FBREMsSUFBSTs0Q0FDd0I7SUFRN0I7UUFEQyxJQUFJOzJDQUNzQjtJQVEzQjtRQURDLElBQUk7a0RBQzJCO0lBUTFCO1FBQUwsSUFBSTtpREFBdUI7SUFDdEI7UUFBTCxJQUFJO29EQUEyQjtJQUMxQjtRQUFMLElBQUk7b0RBQTBCO0lBQ3pCO1FBQUwsSUFBSTtnREFBZ0U7SUExR3BELFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvUTdCO0lBQUQsZ0JBQUM7Q0FwUUQsQUFvUUMsSUFBQTtrQkFwUW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9ldmVudC9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uL21hbmFnZXIvRGF0YVwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xyXG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gJy4vR2FtZUNvbnN0JztcclxuaW1wb3J0IHsgREJfcGxhbnQsIERCX3Nob3BTb3J0IH0gZnJvbSAnLi9EQic7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tICcuLi91dGlscy9BdWRpb01ncic7XHJcbmxldCBzYXZlcGFycyA9IFtdO1xyXG5mdW5jdGlvbiBzYXZlKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XHJcbiAgICBzYXZlcGFycy5wdXNoKHByb3BlcnR5S2V5KTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUGxhbnRJbmZvID1cclxuICAgIHtcclxuICAgICAgICBvcGVuOiBudW1iZXI7XHJcbiAgICAgICAgbHY6IG51bWJlcjtcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCB0eXBlIFNpZ25JbmZvID0ge1xyXG4gICAgICAgIHNpZ25faW5kZXg6IG51bWJlciwvL+W9k+WJjeetvuWIsOe0ouW8lVxyXG4gICAgICAgIHNpZ25fdGltZTogbnVtYmVyLC8v5LiK5qyh562+5Yiw5pe26Ze0XHJcbiAgICAgICAgc2lnbl9iZWlzdTogbnVtYmVyLC8v6aKG5Y+W5YCN5pWwXHJcbiAgICB9XHJcbiAgICBcclxuLy/nlKjmiLfmlbDmja7mqKHlnotcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1vZGVsIHtcclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgbGFzdF9kYXRlOm51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgc2lnbmluZm86IFNpZ25JbmZvID0geyBzaWduX2luZGV4OiAwLCBzaWduX3RpbWU6IDAsIHNpZ25fYmVpc3U6IDAgfTtcclxuICAgIEBzYXZlIHB1YmxpYyBuaWNrTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIEBzYXZlIHB1YmxpYyBhdmF0YXJVcmw6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAc2F2ZSBwdWJsaWMgb3BlbmlkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHNhdmUgcHVibGljIG5pY2tuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHNhdmUgcHVibGljIGhlYWRpbWc6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgQHNhdmUgcHVibGljIGF1dG9fY29tX3RpbWU6bnVtYmVyID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBkb3VibGVfYXR0X3RpbWU6bnVtYmVyID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBkb3VibGVfaW5jb21lX3RpbWU6bnVtYmVyID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBkcm9wX3BsYW50X3RpbWU6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y2hpY2tfdGltZXMgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIHRvZGF5X2dldGNoaWNrX3RvdGFsID0gNTtcclxuICAgIFxyXG4gICAgQHNhdmUgcHVibGljIHRvZGF5X2dldGNvaW5fdGltZXMgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIHRvZGF5X2dldGNvaW5fdG90YWwgPSA1O1xyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBzaGFyZV90aW1lczpudW1iZXIgPSAxMDtcclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgc2xvdHMgPSBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDBdO1xyXG4gICAgQHNhdmUgcHVibGljIGx2ID0gMTtcclxuICAgIEBzYXZlIHB1YmxpYyB3YXZlID0gMTtcclxuXHJcbiAgICBUKCkge1xyXG5cdC8vIFwiMjBcIjogWzIwLCBcIlVcIiwgXCJVXCIsIFwiR1wiLCBcIkdcIiwgXCJNXCIsIFwiQURcIiwgXCJNXCIsIFwiTVwiLCBcIk1cIl0sXHJcbiAgICAgICAgbGV0IGx2ID0gdGhpcy5HZXRNYXhMdigpO1xyXG4gICAgICAgIHZhciB0ID0gREJfc2hvcFNvcnRbbHYrXCJcIl1cclxuICAgICAgICBmb3IgKHZhciBuID0gMTsgbiA8PSA4OyArK24pXHJcbiAgICAgICAgICAgICBpZiAoXCJBRFwiID09IHRbbl0pIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGx2IC0gbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGx2IC0gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T2ZmbGluZUVhcm5pbmcodCkvL+WIhumSn1xyXG4gICAge1xyXG4gICAgICAgIHZhciBuID0gbnVsbDtcclxuICAgICAgICB2YXIgbyA9IFsgNTAsIDMwLCAyMCwgMTUsIDEwLCA1LCAzLCAyIF1cclxuICAgICAgICB2YXIgYSA9IE1hdGgubWF4KDEsIHRoaXMuVCgpKTtcclxuICAgICAgICB2YXIgciA9IHRoaXMuR2V0TWF4THYoKVxyXG5cclxuICAgICAgICBmb3IgKHZhciBzID0gTWF0aC5tYXgoMSwgYSAtIDEwKTsgcyA8PSBhOyArK3MpIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLkJ1eVByaWNlKHMpO1xyXG4gICAgICAgICAgICBpZighbiB8fCBjID4gbilcclxuICAgICAgICAgICAgICAgIG4gPSBjXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsID0gbi8zZTM7XHJcbiAgICAgICAgaWYobDwxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1ID0gTWF0aC5mbG9vcih0IC8gNjApLCBkID0gdCAlIDYwIC8gNjA7XHJcbiAgICAgICAgdmFyIHAgPSAwO1xyXG4gICAgICAgIGZvciAocyA9IDA7IHMgPD0gdTsgKytzKSB7XHJcbiAgICAgICAgICAgIHZhciBoID0gb1tzXSB8fCAxLCBmID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBmID0gcyA9PSB1ID8gbCooNjAgKiBoKSooMTAwICogZCkvKDEwMCkgOiBsKig2MCAqIGgpLCBcclxuICAgICAgICAgICAgcCA9IHArZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG0gPSAwO1xyXG4gICAgICAgIGZvcih2YXIgcGxhbnQgb2YgdGhpcy5Db21QbGFudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZSA9IHBsYW50Lmx2O1xyXG4gICAgICAgICAgICBpZihwbGFudC5sdj4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHAqKDFlNCkvKDFlNCAqIE1hdGgucG93KDIuMSwgTWF0aC5tYXgoMCwgciAtIGUpKSk7XHJcbiAgICAgICAgICAgICAgICBtID0gbSArIHRlbXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1cclxuICAgIH1cclxuXHJcbiAgICBAc2F2ZSBEcm9wR2lmdFB0cyA9IFtdOy8v6LSt5Lmw6Iqx55uGXHJcbiAgICBAc2F2ZSBBZEJ1eU5vdERyb3AgPSBbXTsvL+W5v+WRiui0reS5sOaIkOWKn++8jOWboOS4uuayoeacieepuuS9jeacquaIkOWKn+a3u+WKoFxyXG5cclxuICAgIEBzYXZlXHJcbiAgICBwcml2YXRlIF9jb2luOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgcHVibGljIGdldCBjb2luKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5fY29pbiAqIDEwMCkgLyAxMDA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGNvaW4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2NvaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBzYXZlXHJcbiAgICBwcml2YXRlIF9nZW06IG51bWJlciA9IDIwMDtcclxuICAgIHB1YmxpYyBnZXQgZ2VtKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dlbTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgZ2VtKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9nZW0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBzYXZlXHJcbiAgICBwcml2YXRlIF9zZXJ2ZXJUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCBzZXJ2ZXJUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclRpbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHNlcnZlclRpbWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZlclRpbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgZ3VpZGVJbmRleCA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgcGxhbnRCdXlUaW1lcyA9IHt9O1xyXG4gICAgQHNhdmUgcHVibGljIHRvZGF5Q29tVGltZXMgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIENvbVBsYW50czogUGxhbnRJbmZvW10gPSBbeyBvcGVuOiAxLCBpbmRleDogMCwgbHY6IDEgfV07XHJcblxyXG4gICAgcHVibGljIGdldFBsYW50SW5mbyhpbmRleDogbnVtYmVyKTogUGxhbnRJbmZvIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tUGxhbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tUGxhbnRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRNYXhMdigpe1xyXG4gICAgICAgIGxldCBtYXggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmx2ID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXggPSB0aGlzLkNvbVBsYW50c1tpXS5sdiBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8v6LSt5Lmw6Iqx6LS5XHJcbiAgICBwdWJsaWMgQnV5UHJpY2UobHY6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIHQ6bnVtYmVyID0gTnVtYmVyKERCX3BsYW50W2x2LTFdWzVdKTtcclxuICAgICAgICB2YXIgbiA9IHRoaXMucGxhbnRCdXlUaW1lc1tsdl0gfHwgMDtcclxuICAgICAgICByZXR1cm4gMSA9PSBsdiA/IHQgKiAoMWU0ICogTWF0aC5wb3coMS4wNywgbikpIC8gKDFlNCkgOiB0ICogKDFlNCAqIE1hdGgucG93KDEuMTc1LCBuKSkgLyAoMWU0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ29tcE1vdmUoaTA6IG51bWJlciwgaTE6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBpdDA6IFBsYW50SW5mbyA9IHRoaXMuZ2V0UGxhbnRJbmZvKGkwKTtcclxuICAgICAgICB2YXIgaXQxOiBQbGFudEluZm8gPSB0aGlzLmdldFBsYW50SW5mbyhpMSk7XHJcbiAgICAgICAgaWYgKGl0MCAmJiBpdDEpIHtcclxuICAgICAgICAgICAgaXQwLmluZGV4ID0gaTE7XHJcbiAgICAgICAgICAgIGl0MS5pbmRleCA9IGkwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGl0MCkge1xyXG4gICAgICAgICAgICAgICAgaXQwLmluZGV4ID0gaTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0MSkge1xyXG4gICAgICAgICAgICAgICAgaXQxLmluZGV4ID0gaTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lkIjmiJBcclxuICAgIHB1YmxpYyBDb21wb3NlUGxhbnQoaTA6IG51bWJlciwgaTE6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0bXAxID0gdGhpcy5Db21QbGFudHMuZmluZCgod2opID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdqLmluZGV4ID09IGkwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCF0bXAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IHRtcDIgPSB0aGlzLkNvbVBsYW50cy5maW5kKCh3aikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2ouaW5kZXggPT0gaTE7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCF0bXAyKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRtcDEubHYgIT0gdG1wMi5sdikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0bXAxLHRtcDIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG1wbHYgPSB0aGlzLkdldE1heEx2KCk7XHJcbiAgICAgICAgdmFyIHRtcFByZTogUGxhbnRJbmZvID0gdGhpcy5nZXRQbGFudEluZm8oaTApO1xyXG4gICAgICAgIHZhciBsdiA9IHRtcFByZS5sdjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tUGxhbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db21QbGFudHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5Yig6ZmkXCIsIGkwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tUGxhbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db21QbGFudHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5Yig6ZmkXCIsIGkxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYy5sb2coXCLliJvlu7pcIiwgaTApO1xyXG4gICAgICAgIHRoaXMuQ29tUGxhbnRzLnB1c2goeyBvcGVuOiB0bXBQcmUub3BlbiwgaW5kZXg6IGkwLCBsdjogbHYgKyAxIH0pO1xyXG4gICAgICAgIHRoaXMudG9kYXlDb21UaW1lcysrO1xyXG5cclxuICAgICAgICBsZXQgdG1wbHYyID0gdGhpcy5HZXRNYXhMdigpO1xyXG4gICAgICAgIGlmKHRtcGx2MiA+IHRtcGx2ICYmIHRtcGx2MiA8IDYwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlrDmpI3niakgICAgIFwiKVxyXG4gICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9OZXdQbGFudFVJXCIpXHJcbiAgICAgICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLmRpc3BhdGNoKEdhbWVDb25zdC5ORVdfUExBTlQsdG1wbHYyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwibWVyZ2Vfc3VjY2Vzc1wiKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgLy/otK3kubBcclxuICAgIHB1YmxpYyBCdXlQbGFudChpbmRleDogbnVtYmVyLCBsdjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucGxhbnRCdXlUaW1lc1tsdl0pdGhpcy5wbGFudEJ1eVRpbWVzW2x2XT0wO1xyXG4gICAgICAgIHRoaXMucGxhbnRCdXlUaW1lc1tsdl0rKztcclxuICAgICAgICBpZih0aGlzLkNvbVBsYW50cy5maW5kKChwKT0+e1xyXG4gICAgICAgICAgICBwLmluZGV4ID09IGluZGV4XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi57Si5byV6ZSZ6K+vXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRtcCA9IHsgb3BlbjogMSwgaW5kZXg6IGluZGV4LCBsdjogbHYgfTtcclxuICAgICAgICB0aGlzLkNvbVBsYW50cy5wdXNoKHRtcCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJidXlcIixsdilcclxuICAgICAgICBEYXRhLnNhdmUoKTtcclxuICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pGn5q+BXHJcbiAgICBwdWJsaWMgRHJvcFd1SmlhbmcoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5CdXlQcmljZSh0aGlzLkNvbVBsYW50c1tpXS5sdilcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5jb2luICs9IE1hdGguZmxvb3IodG1wKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhbmdlR2FtZUNvaW4oTWF0aC5mbG9vcih0bXApKVxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Y2W5LqG5o2i6ZKx77yaXCIgKyB0bXApXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbVBsYW50cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHB1YmxpYyBnZXRVcGxvYWREYXRhKCk6IG9iamVjdCB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7fVxyXG4gICAgICAgIHRoaXMuc2VydmVyVGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNhdmVwYXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGRhdGFbc2F2ZXBhcnNbaV1dID0gdGhpc1tzYXZlcGFyc1tpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldERhdGEoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbkuIvmlbDmja4gICAgICAgXHJcbiAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYXZlcGFycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YVtzYXZlcGFyc1tpXV07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwgfHwgZWxlbWVudCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWxlbWVudCkgPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tzYXZlcGFyc1tpXV1ba2V5XSA9IGVsZW1lbnRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzYXZlcGFyc1tpXV0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19