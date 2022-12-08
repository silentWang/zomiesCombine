
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
        var lv = this.GetMaxLv();
        var t = Config_1.Config_shopsort[lv + ""];
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
        var t = Number(Config_1.Config_chick[lv - 1][5]);
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
            Utils_1.default.createUI("prefab/NewPlantUI");
            GameEvent_1.default.Instance().dispatch(GameConst_1.default.NEW_CHICK, tmplv2);
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
        ChickData_1.default.save();
        return tmp;
    };
    //摧毁
    UserModel.prototype.DropWuJiang = function (index) {
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == index) {
                var tmp = this.BuyPrice(this.ComPlants[i].lv);
                ChickData_1.default.user.coin += Math.floor(tmp);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxVc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msa0RBQTZDO0FBQzdDLHdDQUFtQztBQUNuQyx5Q0FBb0M7QUFDcEMsbUNBQXlEO0FBQ3pELDhDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsU0FBUyxJQUFJLENBQUMsTUFBVyxFQUFFLFdBQW1CO0lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWVELFFBQVE7QUFDRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBRWlCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0IsdUJBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsQ0FBQyxDQUFDO1FBRTNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBa0RoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFBLE1BQU07UUFDdkIsaUJBQVksR0FBRyxFQUFFLENBQUMsQ0FBQSxvQkFBb0I7UUFHcEMsVUFBSyxHQUFXLElBQUksQ0FBQztRQVFyQixTQUFJLEdBQVcsR0FBRyxDQUFDO1FBUW5CLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBUW5CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUF1SnpFLENBQUM7SUF0T0cscUJBQUMsR0FBRDtRQUNILDREQUE0RDtRQUNyRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsd0JBQWUsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUE7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEIsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxxQ0FBaUIsR0FBeEIsVUFBeUIsQ0FBQztRQUV0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQTtRQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNaO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUNkLElBQUcsQ0FBQyxHQUFDLENBQUMsRUFDTjtZQUNJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFD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c0RBQW1DO0lBRWxDO1FBQUwsSUFBSTsyREFBaUM7SUFDaEM7UUFBTCxJQUFJOzJEQUFpQztJQUVoQztRQUFMLElBQUk7MERBQWdDO0lBQy9CO1FBQUwsSUFBSTswREFBZ0M7SUFFL0I7UUFBTCxJQUFJO2tEQUFnQztJQUUvQjtRQUFMLElBQUk7NENBQTBDO0lBQ3pDO1FBQUwsSUFBSTt5Q0FBZTtJQUNkO1FBQUwsSUFBSTsyQ0FBaUI7SUFrRGhCO1FBQUwsSUFBSTtrREFBa0I7SUFDakI7UUFBTCxJQUFJO21EQUFtQjtJQUd4QjtRQURDLElBQUk7NENBQ3dCO0lBUTdCO1FBREMsSUFBSTsyQ0FDc0I7SUFRM0I7UUFEQyxJQUFJO2tEQUMyQjtJQVExQjtRQUFMLElBQUk7aURBQXVCO0lBQ3RCO1FBQUwsSUFBSTtvREFBMkI7SUFDMUI7UUFBTCxJQUFJO29EQUEwQjtJQUN6QjtRQUFMLElBQUk7Z0RBQWdFO0lBMUdwRCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBaVE3QjtJQUFELGdCQUFDO0NBalFELEFBaVFDLElBQUE7a0JBalFvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZXZlbnQvR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSAnLi9HYW1lQ29uc3QnO1xyXG5pbXBvcnQgeyBDb25maWdfY2hpY2ssIENvbmZpZ19zaG9wc29ydCB9IGZyb20gJy4vQ29uZmlnJztcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gJy4uL3V0aWxzL0F1ZGlvTWdyJztcclxubGV0IHNhdmVwYXJzID0gW107XHJcbmZ1bmN0aW9uIHNhdmUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIHNhdmVwYXJzLnB1c2gocHJvcGVydHlLZXkpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQbGFudEluZm8gPVxyXG4gICAge1xyXG4gICAgICAgIG9wZW46IG51bWJlcjtcclxuICAgICAgICBsdjogbnVtYmVyO1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IHR5cGUgU2lnbkluZm8gPSB7XHJcbiAgICAgICAgc2lnbl9pbmRleDogbnVtYmVyLC8v5b2T5YmN562+5Yiw57Si5byVXHJcbiAgICAgICAgc2lnbl90aW1lOiBudW1iZXIsLy/kuIrmrKHnrb7liLDml7bpl7RcclxuICAgICAgICBzaWduX2JlaXN1OiBudW1iZXIsLy/pooblj5blgI3mlbBcclxuICAgIH1cclxuICAgIFxyXG4vL+eUqOaIt+aVsOaNruaooeWei1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyTW9kZWwge1xyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBsYXN0X2RhdGU6bnVtYmVyID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBzaWduaW5mbzogU2lnbkluZm8gPSB7IHNpZ25faW5kZXg6IDAsIHNpZ25fdGltZTogMCwgc2lnbl9iZWlzdTogMCB9O1xyXG4gICAgQHNhdmUgcHVibGljIG5pY2tOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHNhdmUgcHVibGljIGF2YXRhclVybDogc3RyaW5nID0gXCJcIjtcclxuICAgIEBzYXZlIHB1YmxpYyBvcGVuaWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAc2F2ZSBwdWJsaWMgbmlja25hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAc2F2ZSBwdWJsaWMgaGVhZGltZzogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgYXV0b19jb21fdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIGRvdWJsZV9hdHRfdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIGRvdWJsZV9pbmNvbWVfdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIGRyb3BfcGxhbnRfdGltZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjaGlja190aW1lcyA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y2hpY2tfdG90YWwgPSA1O1xyXG4gICAgXHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y29pbl90aW1lcyA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y29pbl90b3RhbCA9IDU7XHJcblxyXG4gICAgQHNhdmUgcHVibGljIHNoYXJlX3RpbWVzOm51bWJlciA9IDEwO1xyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBzbG90cyA9IFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMF07XHJcbiAgICBAc2F2ZSBwdWJsaWMgbHYgPSAxO1xyXG4gICAgQHNhdmUgcHVibGljIHdhdmUgPSAxO1xyXG5cclxuICAgIFQoKSB7XHJcblx0Ly8gXCIyMFwiOiBbMjAsIFwiVVwiLCBcIlVcIiwgXCJHXCIsIFwiR1wiLCBcIk1cIiwgXCJBRFwiLCBcIk1cIiwgXCJNXCIsIFwiTVwiXSxcclxuICAgICAgICBsZXQgbHYgPSB0aGlzLkdldE1heEx2KCk7XHJcbiAgICAgICAgdmFyIHQgPSBDb25maWdfc2hvcHNvcnRbbHYrXCJcIl1cclxuICAgICAgICBmb3IgKHZhciBuID0gMTsgbiA8PSA4OyArK24pXHJcbiAgICAgICAgICAgICBpZiAoXCJBRFwiID09IHRbbl0pIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGx2IC0gbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGx2IC0gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T2ZmbGluZUVhcm5pbmcodCkvL+WIhumSn1xyXG4gICAge1xyXG4gICAgICAgIHZhciBuID0gbnVsbDtcclxuICAgICAgICB2YXIgbyA9IFsgNTAsIDMwLCAyMCwgMTUsIDEwLCA1LCAzLCAyIF1cclxuICAgICAgICB2YXIgYSA9IE1hdGgubWF4KDEsIHRoaXMuVCgpKTtcclxuICAgICAgICB2YXIgciA9IHRoaXMuR2V0TWF4THYoKVxyXG5cclxuICAgICAgICBmb3IgKHZhciBzID0gTWF0aC5tYXgoMSwgYSAtIDEwKTsgcyA8PSBhOyArK3MpIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLkJ1eVByaWNlKHMpO1xyXG4gICAgICAgICAgICBpZighbiB8fCBjID4gbilcclxuICAgICAgICAgICAgICAgIG4gPSBjXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsID0gbi8zZTM7XHJcbiAgICAgICAgaWYobDwxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1ID0gTWF0aC5mbG9vcih0IC8gNjApLCBkID0gdCAlIDYwIC8gNjA7XHJcbiAgICAgICAgdmFyIHAgPSAwO1xyXG4gICAgICAgIGZvciAocyA9IDA7IHMgPD0gdTsgKytzKSB7XHJcbiAgICAgICAgICAgIHZhciBoID0gb1tzXSB8fCAxLCBmID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBmID0gcyA9PSB1ID8gbCooNjAgKiBoKSooMTAwICogZCkvKDEwMCkgOiBsKig2MCAqIGgpLCBcclxuICAgICAgICAgICAgcCA9IHArZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG0gPSAwO1xyXG4gICAgICAgIGZvcih2YXIgcGxhbnQgb2YgdGhpcy5Db21QbGFudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZSA9IHBsYW50Lmx2O1xyXG4gICAgICAgICAgICBpZihwbGFudC5sdj4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHAqKDFlNCkvKDFlNCAqIE1hdGgucG93KDIuMSwgTWF0aC5tYXgoMCwgciAtIGUpKSk7XHJcbiAgICAgICAgICAgICAgICBtID0gbSArIHRlbXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1cclxuICAgIH1cclxuXHJcbiAgICBAc2F2ZSBEcm9wR2lmdFB0cyA9IFtdOy8v6LSt5Lmw6Iqx55uGXHJcbiAgICBAc2F2ZSBBZEJ1eU5vdERyb3AgPSBbXTsvL+W5v+WRiui0reS5sOaIkOWKn++8jOWboOS4uuayoeacieepuuS9jeacquaIkOWKn+a3u+WKoFxyXG5cclxuICAgIEBzYXZlXHJcbiAgICBwcml2YXRlIF9jb2luOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgcHVibGljIGdldCBjb2luKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5fY29pbiAqIDEwMCkgLyAxMDA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGNvaW4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2NvaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBzYXZlXHJcbiAgICBwcml2YXRlIF9nZW06IG51bWJlciA9IDIwMDtcclxuICAgIHB1YmxpYyBnZXQgZ2VtKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dlbTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgZ2VtKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9nZW0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBzYXZlXHJcbiAgICBwcml2YXRlIF9zZXJ2ZXJUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCBzZXJ2ZXJUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclRpbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHNlcnZlclRpbWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZlclRpbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgZ3VpZGVJbmRleCA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgcGxhbnRCdXlUaW1lcyA9IHt9O1xyXG4gICAgQHNhdmUgcHVibGljIHRvZGF5Q29tVGltZXMgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIENvbVBsYW50czogUGxhbnRJbmZvW10gPSBbeyBvcGVuOiAxLCBpbmRleDogMCwgbHY6IDEgfV07XHJcblxyXG4gICAgcHVibGljIGdldFBsYW50SW5mbyhpbmRleDogbnVtYmVyKTogUGxhbnRJbmZvIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tUGxhbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tUGxhbnRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRNYXhMdigpe1xyXG4gICAgICAgIGxldCBtYXggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmx2ID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXggPSB0aGlzLkNvbVBsYW50c1tpXS5sdiBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8v6LSt5Lmw6Iqx6LS5XHJcbiAgICBwdWJsaWMgQnV5UHJpY2UobHY6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIHQ6bnVtYmVyID0gTnVtYmVyKENvbmZpZ19jaGlja1tsdi0xXVs1XSk7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzLnBsYW50QnV5VGltZXNbbHZdIHx8IDA7XHJcbiAgICAgICAgcmV0dXJuIDEgPT0gbHYgPyB0ICogKDFlNCAqIE1hdGgucG93KDEuMDcsIG4pKSAvICgxZTQpIDogdCAqICgxZTQgKiBNYXRoLnBvdygxLjE3NSwgbikpIC8gKDFlNCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENvbXBNb3ZlKGkwOiBudW1iZXIsIGkxOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgaXQwOiBQbGFudEluZm8gPSB0aGlzLmdldFBsYW50SW5mbyhpMCk7XHJcbiAgICAgICAgdmFyIGl0MTogUGxhbnRJbmZvID0gdGhpcy5nZXRQbGFudEluZm8oaTEpO1xyXG4gICAgICAgIGlmIChpdDAgJiYgaXQxKSB7XHJcbiAgICAgICAgICAgIGl0MC5pbmRleCA9IGkxO1xyXG4gICAgICAgICAgICBpdDEuaW5kZXggPSBpMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpdDApIHtcclxuICAgICAgICAgICAgICAgIGl0MC5pbmRleCA9IGkxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdDEpIHtcclxuICAgICAgICAgICAgICAgIGl0MS5pbmRleCA9IGkwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5ZCI5oiQXHJcbiAgICBwdWJsaWMgQ29tcG9zZVBsYW50KGkwOiBudW1iZXIsIGkxOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdG1wMSA9IHRoaXMuQ29tUGxhbnRzLmZpbmQoKHdqKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3ai5pbmRleCA9PSBpMDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghdG1wMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCB0bXAyID0gdGhpcy5Db21QbGFudHMuZmluZCgod2opID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdqLmluZGV4ID09IGkxO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghdG1wMikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0bXAxLmx2ICE9IHRtcDIubHYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVyclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0bXBsdiA9IHRoaXMuR2V0TWF4THYoKTtcclxuICAgICAgICB2YXIgdG1wUHJlOiBQbGFudEluZm8gPSB0aGlzLmdldFBsYW50SW5mbyhpMCk7XHJcbiAgICAgICAgdmFyIGx2ID0gdG1wUHJlLmx2O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGkwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbVBsYW50cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLliKDpmaRcIiwgaTApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGkxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbVBsYW50cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLliKDpmaRcIiwgaTEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhcIuWIm+W7ulwiLCBpMCk7XHJcbiAgICAgICAgdGhpcy5Db21QbGFudHMucHVzaCh7IG9wZW46IHRtcFByZS5vcGVuLCBpbmRleDogaTAsIGx2OiBsdiArIDEgfSk7XHJcbiAgICAgICAgdGhpcy50b2RheUNvbVRpbWVzKys7XHJcblxyXG4gICAgICAgIGxldCB0bXBsdjIgPSB0aGlzLkdldE1heEx2KCk7XHJcbiAgICAgICAgaWYodG1wbHYyID4gdG1wbHYgJiYgdG1wbHYyIDwgNjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9OZXdQbGFudFVJXCIpXHJcbiAgICAgICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLmRpc3BhdGNoKEdhbWVDb25zdC5ORVdfQ0hJQ0ssdG1wbHYyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwibWVyZ2Vfc3VjY2Vzc1wiKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgLy/otK3kubBcclxuICAgIHB1YmxpYyBCdXlQbGFudChpbmRleDogbnVtYmVyLCBsdjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucGxhbnRCdXlUaW1lc1tsdl0pdGhpcy5wbGFudEJ1eVRpbWVzW2x2XT0wO1xyXG4gICAgICAgIHRoaXMucGxhbnRCdXlUaW1lc1tsdl0rKztcclxuICAgICAgICBpZih0aGlzLkNvbVBsYW50cy5maW5kKChwKT0+e1xyXG4gICAgICAgICAgICBwLmluZGV4ID09IGluZGV4XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi57Si5byV6ZSZ6K+vXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRtcCA9IHsgb3BlbjogMSwgaW5kZXg6IGluZGV4LCBsdjogbHYgfTtcclxuICAgICAgICB0aGlzLkNvbVBsYW50cy5wdXNoKHRtcCk7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pGn5q+BXHJcbiAgICBwdWJsaWMgRHJvcFd1SmlhbmcoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Db21QbGFudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ29tUGxhbnRzW2ldLmluZGV4ID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5CdXlQcmljZSh0aGlzLkNvbVBsYW50c1tpXS5sdilcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gTWF0aC5mbG9vcih0bXApO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jaGFuZ2VHYW1lQ29pbihNYXRoLmZsb29yKHRtcCkpXHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLljZbkuobmjaLpkrHvvJpcIiArIHRtcClcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tUGxhbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIGdldFVwbG9hZERhdGEoKTogb2JqZWN0IHtcclxuICAgICAgICB2YXIgZGF0YSA9IHt9XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZGF0YVtzYXZlcGFyc1tpXV0gPSB0aGlzW3NhdmVwYXJzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICAvL+WIneWni+WMluS4i+aVsOaNriAgICAgICBcclxuICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNhdmVwYXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW3NhdmVwYXJzW2ldXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCB8fCBlbGVtZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbGVtZW50KSA9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3NhdmVwYXJzW2ldXVtrZXldID0gZWxlbWVudFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW3NhdmVwYXJzW2ldXSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=