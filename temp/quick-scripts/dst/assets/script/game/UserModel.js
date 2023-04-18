
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
        this.dayDateTime = 0;
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
    UserModel.prototype.getADLv = function () {
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
        var a = Math.max(1, this.getADLv());
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
        if (!data)
            return;
        for (var i = 0; i < savepars.length; ++i) {
            var element = data[savepars[i]];
            if (element != null || element != undefined) {
                if (Object.prototype.toString.call(element) == "[object Object]") {
                    for (var key in element) {
                        this[savepars[i]][key] = element[key];
                    }
                }
                else {
                    this[savepars[i]] = element;
                }
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
    ], UserModel.prototype, "dayDateTime", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxVc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msa0RBQTZDO0FBQzdDLHdDQUFtQztBQUNuQyx5Q0FBb0M7QUFDcEMsbUNBQXlEO0FBQ3pELDhDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsU0FBUyxJQUFJLENBQUMsTUFBVyxFQUFFLFdBQW1CO0lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWVELFFBQVE7QUFDRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBQ2lCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0IsdUJBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsQ0FBQyxDQUFDO1FBQzNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQUcs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TCxJQUFJO3lEQUFzQztJQUNyQztRQUFMLElBQUk7c0RBQW1DO0lBQ2xDO1FBQUwsSUFBSTsyREFBaUM7SUFDaEM7UUFBTCxJQUFJOzJEQUFpQztJQUNoQztRQUFMLElBQUk7MERBQWdDO0lBQy9CO1FBQUwsSUFBSTswREFBZ0M7SUFDL0I7UUFBTCxJQUFJO2tEQUFnQztJQUMvQjtRQUFMLElBQUk7NENBQTBDO0lBQ3pDO1FBQUwsSUFBSTt5Q0FBZTtJQUNkO1FBQUwsSUFBSTsyQ0FBaUI7SUFDaEI7UUFBTCxJQUFJO2tEQUF3QjtJQWtEdkI7UUFBTCxJQUFJO2tEQUFrQjtJQUNqQjtRQUFMLElBQUk7bURBQW1CO0lBR3hCO1FBREMsSUFBSTs0Q0FDd0I7SUFRN0I7UUFEQyxJQUFJOzJDQUNzQjtJQVEzQjtRQURDLElBQUk7a0RBQzJCO0lBUTFCO1FBQUwsSUFBSTtpREFBdUI7SUFDdEI7UUFBTCxJQUFJO29EQUEyQjtJQUMxQjtRQUFMLElBQUk7b0RBQTBCO0lBQ3pCO1FBQUwsSUFBSTtnREFBZ0U7SUFyR3BELFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EyUDdCO0lBQUQsZ0JBQUM7Q0EzUEQsQUEyUEMsSUFBQTtrQkEzUG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9ldmVudC9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tICcuL0dhbWVDb25zdCc7XHJcbmltcG9ydCB7IENvbmZpZ19jaGljaywgQ29uZmlnX3Nob3Bzb3J0IH0gZnJvbSAnLi9Db25maWcnO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSAnLi4vdXRpbHMvQXVkaW9NZ3InO1xyXG5sZXQgc2F2ZXBhcnMgPSBbXTtcclxuZnVuY3Rpb24gc2F2ZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xyXG4gICAgc2F2ZXBhcnMucHVzaChwcm9wZXJ0eUtleSk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBsYW50SW5mbyA9XHJcbiAgICB7XHJcbiAgICAgICAgb3BlbjogbnVtYmVyO1xyXG4gICAgICAgIGx2OiBudW1iZXI7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgdHlwZSBTaWduSW5mbyA9IHtcclxuICAgICAgICBzaWduX2luZGV4OiBudW1iZXIsLy/lvZPliY3nrb7liLDntKLlvJVcclxuICAgICAgICBzaWduX3RpbWU6IG51bWJlciwvL+S4iuasoeetvuWIsOaXtumXtFxyXG4gICAgICAgIHNpZ25fYmVpc3U6IG51bWJlciwvL+mihuWPluWAjeaVsFxyXG4gICAgfVxyXG4gICAgXHJcbi8v55So5oi35pWw5o2u5qih5Z6LXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNb2RlbCB7XHJcbiAgICBAc2F2ZSBwdWJsaWMgbGFzdF9kYXRlOm51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgc2lnbmluZm86IFNpZ25JbmZvID0geyBzaWduX2luZGV4OiAwLCBzaWduX3RpbWU6IDAsIHNpZ25fYmVpc3U6IDAgfTtcclxuICAgIEBzYXZlIHB1YmxpYyBuaWNrTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIEBzYXZlIHB1YmxpYyBhdmF0YXJVcmw6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAc2F2ZSBwdWJsaWMgb3BlbmlkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHNhdmUgcHVibGljIG5pY2tuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHNhdmUgcHVibGljIGhlYWRpbWc6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAc2F2ZSBwdWJsaWMgYXV0b19jb21fdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIGRvdWJsZV9hdHRfdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIGRvdWJsZV9pbmNvbWVfdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIGRyb3BfcGxhbnRfdGltZTpudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIHRvZGF5X2dldGNoaWNrX3RpbWVzID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheV9nZXRjaGlja190b3RhbCA9IDU7XHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y29pbl90aW1lcyA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgdG9kYXlfZ2V0Y29pbl90b3RhbCA9IDU7XHJcbiAgICBAc2F2ZSBwdWJsaWMgc2hhcmVfdGltZXM6bnVtYmVyID0gMTA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgc2xvdHMgPSBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDBdO1xyXG4gICAgQHNhdmUgcHVibGljIGx2ID0gMTtcclxuICAgIEBzYXZlIHB1YmxpYyB3YXZlID0gMTtcclxuICAgIEBzYXZlIHB1YmxpYyBkYXlEYXRlVGltZSA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBREx2KCkge1xyXG5cdC8vIFwiMjBcIjogWzIwLCBcIlVcIiwgXCJVXCIsIFwiR1wiLCBcIkdcIiwgXCJNXCIsIFwiQURcIiwgXCJNXCIsIFwiTVwiLCBcIk1cIl0sXHJcbiAgICAgICAgbGV0IGx2ID0gdGhpcy5nZXRMdmxNYXgoKTtcclxuICAgICAgICB2YXIgdCA9IENvbmZpZ19zaG9wc29ydFtsditcIlwiXVxyXG4gICAgICAgIGZvciAodmFyIG4gPSAxOyBuIDw9IDg7ICsrbilcclxuICAgICAgICAgICAgIGlmIChcIkFEXCIgPT0gdFtuXSkgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbHYgLSBuO1xyXG5cclxuICAgICAgICByZXR1cm4gbHYgLSA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPZmZsaW5lUmV3YXJkKHQpLy/liIbpkp9cclxuICAgIHtcclxuICAgICAgICB2YXIgbiA9IG51bGw7XHJcbiAgICAgICAgdmFyIG8gPSBbIDUwLCAzMCwgMjAsIDE1LCAxMCwgNSwgMywgMiBdXHJcbiAgICAgICAgdmFyIGEgPSBNYXRoLm1heCgxLCB0aGlzLmdldEFETHYoKSk7XHJcbiAgICAgICAgdmFyIHIgPSB0aGlzLmdldEx2bE1heCgpXHJcblxyXG4gICAgICAgIGZvciAodmFyIHMgPSBNYXRoLm1heCgxLCBhIC0gMTApOyBzIDw9IGE7ICsrcykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuYnV5Q2hpY2tQcmljZShzKTtcclxuICAgICAgICAgICAgaWYoIW4gfHwgYyA+IG4pXHJcbiAgICAgICAgICAgICAgICBuID0gY1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbCA9IG4vM2UzO1xyXG4gICAgICAgIGlmKGw8MSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGwgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdSA9IE1hdGguZmxvb3IodCAvIDYwKSwgZCA9IHQgJSA2MCAvIDYwO1xyXG4gICAgICAgIHZhciBwID0gMDtcclxuICAgICAgICBmb3IgKHMgPSAwOyBzIDw9IHU7ICsrcykge1xyXG4gICAgICAgICAgICB2YXIgaCA9IG9bc10gfHwgMSwgZiA9IHZvaWQgMDtcclxuICAgICAgICAgICAgZiA9IHMgPT0gdSA/IGwqKDYwICogaCkqKDEwMCAqIGQpLygxMDApIDogbCooNjAgKiBoKSwgXHJcbiAgICAgICAgICAgIHAgPSBwK2Y7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtID0gMDtcclxuICAgICAgICBmb3IodmFyIHBsYW50IG9mIHRoaXMuQ29tUGxhbnRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBwbGFudC5sdjtcclxuICAgICAgICAgICAgaWYocGxhbnQubHY+MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBwKigxZTQpLygxZTQgKiBNYXRoLnBvdygyLjEsIE1hdGgubWF4KDAsIHIgLSBlKSkpO1xyXG4gICAgICAgICAgICAgICAgbSA9IG0gKyB0ZW1wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtXHJcbiAgICB9XHJcblxyXG4gICAgQHNhdmUgRHJvcEdpZnRQdHMgPSBbXTsvL+i0reS5sOiKseebhlxyXG4gICAgQHNhdmUgQWRCdXlOb3REcm9wID0gW107Ly/lub/lkYrotK3kubDmiJDlip/vvIzlm6DkuLrmsqHmnInnqbrkvY3mnKrmiJDlip/mt7vliqBcclxuXHJcbiAgICBAc2F2ZVxyXG4gICAgcHJpdmF0ZSBfY29pbjogbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBnZXQgY29pbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuX2NvaW4gKiAxMDApIC8gMTAwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBjb2luKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jb2luID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBAc2F2ZVxyXG4gICAgcHJpdmF0ZSBfZ2VtOiBudW1iZXIgPSAyMDA7XHJcbiAgICBwdWJsaWMgZ2V0IGdlbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZW07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGdlbSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZ2VtID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBAc2F2ZVxyXG4gICAgcHJpdmF0ZSBfc2VydmVyVGltZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBnZXQgc2VydmVyVGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJUaW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBzZXJ2ZXJUaW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2ZXJUaW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQHNhdmUgcHVibGljIGd1aWRlSW5kZXggPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIHBsYW50QnV5VGltZXMgPSB7fTtcclxuICAgIEBzYXZlIHB1YmxpYyB0b2RheUNvbVRpbWVzID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBDb21QbGFudHM6IFBsYW50SW5mb1tdID0gW3sgb3BlbjogMSwgaW5kZXg6IDAsIGx2OiAxIH1dO1xyXG5cclxuICAgIHB1YmxpYyBnZXRDaGlja0luZm8oaW5kZXg6IG51bWJlcik6IFBsYW50SW5mbyB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbVBsYW50c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0THZsTWF4KCl7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0ubHYgPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgIG1heCA9IHRoaXMuQ29tUGxhbnRzW2ldLmx2IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgLy/otK3kubDoirHotLlcclxuICAgIHB1YmxpYyBidXlDaGlja1ByaWNlKGx2OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciB0Om51bWJlciA9IE51bWJlcihDb25maWdfY2hpY2tbbHYtMV1bNV0pO1xyXG4gICAgICAgIHZhciBuID0gdGhpcy5wbGFudEJ1eVRpbWVzW2x2XSB8fCAwO1xyXG4gICAgICAgIHJldHVybiAxID09IGx2ID8gdCAqICgxZTQgKiBNYXRoLnBvdygxLjA3LCBuKSkgLyAoMWU0KSA6IHQgKiAoMWU0ICogTWF0aC5wb3coMS4xNzUsIG4pKSAvICgxZTQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlRWZmKGkwOiBudW1iZXIsIGkxOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgaXQwOiBQbGFudEluZm8gPSB0aGlzLmdldENoaWNrSW5mbyhpMCk7XHJcbiAgICAgICAgdmFyIGl0MTogUGxhbnRJbmZvID0gdGhpcy5nZXRDaGlja0luZm8oaTEpO1xyXG4gICAgICAgIGlmIChpdDAgJiYgaXQxKSB7XHJcbiAgICAgICAgICAgIGl0MC5pbmRleCA9IGkxO1xyXG4gICAgICAgICAgICBpdDEuaW5kZXggPSBpMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpdDApIHtcclxuICAgICAgICAgICAgICAgIGl0MC5pbmRleCA9IGkxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdDEpIHtcclxuICAgICAgICAgICAgICAgIGl0MS5pbmRleCA9IGkwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5ZCI5oiQXHJcbiAgICBwdWJsaWMgY29tcG9zZUNoaWNrcyhpMDogbnVtYmVyLCBpMTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRtcDEgPSB0aGlzLkNvbVBsYW50cy5maW5kKCh3aikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2ouaW5kZXggPT0gaTA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoIXRtcDEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgdG1wMiA9IHRoaXMuQ29tUGxhbnRzLmZpbmQoKHdqKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3ai5pbmRleCA9PSBpMTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIXRtcDIpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodG1wMS5sdiAhPSB0bXAyLmx2KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG1wbHYgPSB0aGlzLmdldEx2bE1heCgpO1xyXG4gICAgICAgIHZhciB0bXBQcmU6IFBsYW50SW5mbyA9IHRoaXMuZ2V0Q2hpY2tJbmZvKGkwKTtcclxuICAgICAgICB2YXIgbHYgPSB0bXBQcmUubHY7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tUGxhbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuWIoOmZpFwiLCBpMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNvbVBsYW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db21QbGFudHNbaV0uaW5kZXggPT0gaTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tUGxhbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuWIoOmZpFwiLCBpMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2MubG9nKFwi5Yib5bu6XCIsIGkwKTtcclxuICAgICAgICB0aGlzLkNvbVBsYW50cy5wdXNoKHsgb3BlbjogdG1wUHJlLm9wZW4sIGluZGV4OiBpMCwgbHY6IGx2ICsgMSB9KTtcclxuICAgICAgICB0aGlzLnRvZGF5Q29tVGltZXMrKztcclxuXHJcbiAgICAgICAgbGV0IHRtcGx2MiA9IHRoaXMuZ2V0THZsTWF4KCk7XHJcbiAgICAgICAgaWYodG1wbHYyID4gdG1wbHYgJiYgdG1wbHYyIDwgNjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9OZXdQbGFudFVJXCIpXHJcbiAgICAgICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLmRpc3BhdGNoKEdhbWVDb25zdC5ORVdfQ0hJQ0ssdG1wbHYyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJtZXJnZV9zdWNjZXNzXCIpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICAvL+i0reS5sFxyXG4gICAgcHVibGljIGJ1eUNoaWNrKGluZGV4OiBudW1iZXIsIGx2OiBudW1iZXIpIHtcclxuICAgICAgICBpZighdGhpcy5wbGFudEJ1eVRpbWVzW2x2XSl0aGlzLnBsYW50QnV5VGltZXNbbHZdPTA7XHJcbiAgICAgICAgdGhpcy5wbGFudEJ1eVRpbWVzW2x2XSsrO1xyXG4gICAgICAgIGlmKHRoaXMuQ29tUGxhbnRzLmZpbmQoKHApPT57XHJcbiAgICAgICAgICAgIHAuaW5kZXggPT0gaW5kZXhcclxuICAgICAgICB9KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLntKLlvJXplJnor69cIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG1wID0geyBvcGVuOiAxLCBpbmRleDogaW5kZXgsIGx2OiBsdiB9O1xyXG4gICAgICAgIHRoaXMuQ29tUGxhbnRzLnB1c2godG1wKTtcclxuICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xyXG4gICAgICAgIHJldHVybiB0bXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mkafmr4FcclxuICAgIHB1YmxpYyB1cGRhdGVTZWxsQ2hpY2tDb2luKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tUGxhbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbVBsYW50c1tpXS5pbmRleCA9PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuYnV5Q2hpY2tQcmljZSh0aGlzLkNvbVBsYW50c1tpXS5sdilcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gTWF0aC5mbG9vcih0bXApO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jaGFuZ2VHYW1lQ29pbihNYXRoLmZsb29yKHRtcCkpXHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLljZbkuobmjaLpkrHvvJpcIiArIHRtcClcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tUGxhbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIGdldEFsbERhdGEoKTogb2JqZWN0IHtcclxuICAgICAgICB2YXIgZGF0YSA9IHt9XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZGF0YVtzYXZlcGFyc1tpXV0gPSB0aGlzW3NhdmVwYXJzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICAvL+WIneWni+WMluS4i+aVsOaNriAgICAgICBcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNhdmVwYXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW3NhdmVwYXJzW2ldXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCB8fCBlbGVtZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbGVtZW50KSA9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3NhdmVwYXJzW2ldXVtrZXldID0gZWxlbWVudFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzYXZlcGFyc1tpXV0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19