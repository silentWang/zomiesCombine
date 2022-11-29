
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/SoldierItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58176B7xzJGVr/d2mUCbUBE', 'SoldierItem');
// script/game/SoldierItem.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framwork/BaseUI");
var Data_1 = require("../manager/Data");
var Utils_1 = require("../utils/Utils");
var DB_1 = require("./DB");
var HallScene_1 = require("./HallScene");
var Bullet_1 = require("./prefab/Bullet");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, property = _a.property;
var SoldierItem = /** @class */ (function (_super) {
    __extends(SoldierItem, _super);
    function SoldierItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bullet_pre = null;
        _this.index = -1;
        _this.linkItem = null;
        _this.datacopy = null;
        _this.bDrag = false;
        _this.droptype = 0;
        _this.droptype0endtime = 0;
        _this.curplayani = "";
        _this.cd = 0;
        _this.lastfire = 0;
        return _this;
    }
    SoldierItem.prototype.start = function () {
        var chick = this.GetDragonAmature('chick');
        chick.addEventListener(dragonBones.EventObject.COMPLETE, this.animComplete, this);
    };
    SoldierItem.prototype.setItemData = function (d, droptype) {
        if (droptype === void 0) { droptype = -1; }
        if (droptype != -1)
            this.droptype = droptype;
        if (this.droptype != 0 && this.droptype0endtime < Utils_1.default.getServerTime()) {
            this.droptype0endtime = Utils_1.default.getServerTime() + 10000;
        }
        //减少重绘制
        if (this.datacopy && d) {
            if (this.datacopy.index == d.index &&
                this.datacopy.lv == d.lv &&
                this.datacopy.open == d.open) {
                return;
            }
        }
        // console.log("setItemData",d)
        this.datacopy = d ? JSON.parse(JSON.stringify(d)) : null;
        if (this.datacopy)
            this.datacopy.index = this.index;
        this.updateItem();
    };
    SoldierItem.prototype.updateItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isNull;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isNull = this.datacopy == null;
                        this.GetGameObject("level_1").active = !isNull;
                        if (isNull) {
                            this.GetGameObject('chick').active = false;
                            this.GetGameObject("lbl_lv").active = false;
                            this.GetGameObject("flower1").active = false;
                            return [2 /*return*/];
                        }
                        if (!!isNull) return [3 /*break*/, 3];
                        this.GetGameObject("lbl_lv").getComponent(cc.Label).string = "lv." + this.datacopy.lv;
                        if (!(this.droptype == 0)) return [3 /*break*/, 2];
                        this.GetGameObject('chick').active = true;
                        this.GetGameObject("lbl_lv").active = true;
                        this.GetGameObject("flower1").active = false;
                        return [4 /*yield*/, this.produceChick()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.GetGameObject('chick').active = false;
                        this.GetGameObject("lbl_lv").active = false;
                        this.GetGameObject("flower1").active = true;
                        this.showPot('spine:pot1');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SoldierItem.prototype.showPot = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var potAni;
            return __generator(this, function (_a) {
                this.curplayani = "pot1_idle";
                potAni = this.GetDragonAmature('flower1');
                potAni.playAnimation('fall', 1);
                this.node.runAction(cc.sequence(cc.delayTime(0.8), cc.callFunc(function () {
                    potAni.playAnimation('idle', 0);
                })));
                return [2 /*return*/];
            });
        });
    };
    SoldierItem.prototype.produceChick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, nowani, sfid, skpath, atlaspath, chick, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        info = DB_1.DB_plant[Math.min(this.datacopy.lv - 1, 59)];
                        this.cd = Number(info[1]);
                        nowani = this.datacopy.lv + '_idleL';
                        if (!(this.curplayani != nowani)) return [3 /*break*/, 3];
                        this.curplayani = nowani;
                        sfid = Math.min(this.datacopy.lv, 60);
                        skpath = "spine:flower" + sfid + "_ske";
                        atlaspath = "spine:flower" + sfid + "_tex";
                        chick = this.GetDragonAmature('chick');
                        _a = chick;
                        return [4 /*yield*/, Utils_1.default.loadRes(skpath, dragonBones.DragonBonesAsset)];
                    case 1:
                        _a.dragonAsset = (_c.sent());
                        _b = chick;
                        return [4 /*yield*/, Utils_1.default.loadRes(atlaspath, dragonBones.DragonBonesAtlasAsset)];
                    case 2:
                        _b.dragonAtlasAsset = (_c.sent());
                        chick.armatureName = 'Armature';
                        chick.playAnimation('idleL', 0);
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SoldierItem.prototype.animComplete = function (evt) {
        if (evt.type == dragonBones.EventObject.COMPLETE) {
            var chick = this.GetDragonAmature('chick');
            if (chick.animationName == 'atkR') {
                chick.playAnimation('idleR', 0);
                this.curplayani = 'idleR';
            }
            else if (chick.animationName == 'atkL') {
                chick.playAnimation('idleL', 0);
                this.curplayani = 'idleL';
            }
        }
    };
    SoldierItem.prototype.getTarget = function () {
        var enemylist = HallScene_1.default.Instance.enemylist;
        var target = null;
        var mindis = 600;
        for (var i = 0; i < enemylist.length; ++i) {
            if (enemylist[i].x < -cc.winSize.width / 2)
                continue;
            var dis = enemylist[i].position.sub(this.node.position).mag();
            if (dis < mindis) {
                target = enemylist[i];
                mindis = dis;
            }
        }
        return target;
    };
    SoldierItem.prototype.update = function (dt) {
        var _this = this;
        if (dt > 1)
            dt = 1;
        var chick = this.GetDragonAmature('chick');
        if (this.datacopy && this.droptype == 0 && Data_1.default.user.double_att_time > Utils_1.default.getServerTime()) {
            if (chick)
                chick.timeScale = 1.5;
            this.GetGameObject("kb").active = true;
        }
        else {
            if (chick)
                chick.timeScale = 1;
            this.GetGameObject("kb").active = false;
        }
        if (this.droptype != 0) {
            if (Utils_1.default.getServerTime() > this.droptype0endtime) {
                this.droptype = 0;
                this.updateItem();
            }
        }
        if (this.bDrag)
            return;
        if (!this.datacopy)
            return;
        if (this.droptype != 0)
            return;
        this.lastfire += dt;
        if (this.lastfire >= this.cd / ((Data_1.default.user.double_att_time > Utils_1.default.getServerTime()) ? 2 : 1)) {
            this.lastfire = 0;
            var target_1 = this.getTarget();
            if (target_1) {
                this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
                    if (_this.bDrag)
                        return;
                    if (!_this.datacopy)
                        return;
                    var b = cc.instantiate(_this.bullet_pre);
                    b.position = _this.node.position.add(target_1.x > _this.node.x ? cc.v3(30, 35, 0) : cc.v3(-30, 35, 0));
                    b.parent = HallScene_1.default.Instance.GetGameObject("node_bullet");
                    b.getComponent(Bullet_1.default).setInfo(target_1, _this.datacopy.lv);
                    if (target_1.x > _this.node.x) {
                        chick.playAnimation('atkR', 1);
                        _this.curplayani = "atkR";
                    }
                    else {
                        chick.playAnimation('atkL', 1);
                        _this.curplayani = "atkL";
                    }
                })));
            }
        }
    };
    __decorate([
        property(cc.Prefab)
    ], SoldierItem.prototype, "bullet_pre", void 0);
    SoldierItem = __decorate([
        ccclass
    ], SoldierItem);
    return SoldierItem;
}(BaseUI_1.default));
exports.default = SoldierItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTb2xkaWVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsd0NBQW1DO0FBRW5DLHdDQUFtQztBQUNuQywyQkFBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLDBDQUFxQztBQUkvQixJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUcvRDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQXFMQztRQW5MRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUNyQixXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFDN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDbkIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBb0hoQixRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVAsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFzRHpCLENBQUM7SUExS0csMkJBQUssR0FBTDtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLENBQVksRUFBQyxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW1CLENBQUM7UUFDekMsSUFBRyxRQUFR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QVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uL21hbmFnZXIvRGF0YVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgREJfcGxhbnQgfSBmcm9tIFwiLi9EQlwiO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gXCIuL0hhbGxTY2VuZVwiO1xyXG5pbXBvcnQgQnVsbGV0IGZyb20gXCIuL3ByZWZhYi9CdWxsZXRcIjtcclxuaW1wb3J0IHsgUGxhbnRJbmZvIH0gZnJvbSBcIi4vVXNlck1vZGVsXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBleGVjdXRlSW5FZGl0TW9kZSwgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2xkaWVySXRlbSBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYnVsbGV0X3ByZTpjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBsaW5rSXRlbTogU29sZGllckl0ZW0gPSBudWxsO1xyXG4gICAgcHVibGljIGRhdGFjb3B5OiBQbGFudEluZm8gPSBudWxsO1xyXG4gICAgcHVibGljIGJEcmFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZHJvcHR5cGU6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZHJvcHR5cGUwZW5kdGltZSA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnBsYXlhbmkgPSBcIlwiO1xyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpO1xyXG4gICAgICAgIGNoaWNrLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsdGhpcy5hbmltQ29tcGxldGUsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbURhdGEoZDogUGxhbnRJbmZvLGRyb3B0eXBlOm51bWJlciA9IC0xKSB7Ly8gM+aZrumAmuaOieiQvSA05bCP57K+54G15o6J6JC9XHJcbiAgICAgICAgaWYoZHJvcHR5cGUgIT0gLTEpIHRoaXMuZHJvcHR5cGUgPSBkcm9wdHlwZTtcclxuICAgICAgICBpZih0aGlzLmRyb3B0eXBlICE9IDAgJiYgIHRoaXMuZHJvcHR5cGUwZW5kdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcHR5cGUwZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKSArIDEwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WHj+WwkemHjee7mOWItlxyXG4gICAgICAgIGlmICh0aGlzLmRhdGFjb3B5ICYmIGQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YWNvcHkuaW5kZXggPT0gZC5pbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhY29weS5sdiA9PSBkLmx2ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFjb3B5Lm9wZW4gPT0gZC5vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2V0SXRlbURhdGFcIixkKVxyXG4gICAgICAgIHRoaXMuZGF0YWNvcHkgPSBkID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkKSkgOiBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFjb3B5KSB0aGlzLmRhdGFjb3B5LmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVJdGVtKCkge1xyXG4gICAgICAgIGxldCBpc051bGwgPSB0aGlzLmRhdGFjb3B5ID09IG51bGw7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGV2ZWxfMVwiKS5hY3RpdmUgPSAhaXNOdWxsO1xyXG4gICAgICAgIGlmKGlzTnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnY2hpY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2x2XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmbG93ZXIxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNOdWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2x2XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJsdi5cIiArIHRoaXMuZGF0YWNvcHkubHY7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZHJvcHR5cGUgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdjaGljaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfbHZcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZsb3dlcjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByb2R1Y2VDaGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdjaGljaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2x2XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZmxvd2VyMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG90KCdzcGluZTpwb3QxJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgYXN5bmMgc2hvd1BvdChwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gIFwicG90MV9pZGxlXCI7XHJcbiAgICAgICAgbGV0IHBvdEFuaSA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnZmxvd2VyMScpO1xyXG4gICAgICAgIHBvdEFuaS5wbGF5QW5pbWF0aW9uKCdmYWxsJywxKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjgpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHBvdEFuaS5wbGF5QW5pbWF0aW9uKCdpZGxlJywwKTtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcHJvZHVjZUNoaWNrKCl7XHJcbiAgICAgICAgbGV0IGluZm8gPSBEQl9wbGFudFtNYXRoLm1pbih0aGlzLmRhdGFjb3B5Lmx2IC0gMSw1OSldO1xyXG4gICAgICAgIHRoaXMuY2QgPSBOdW1iZXIoaW5mb1sxXSk7XHJcbiAgICAgICAgbGV0IG5vd2FuaSA9IHRoaXMuZGF0YWNvcHkubHYgKyAnX2lkbGVMJztcclxuICAgICAgICBpZih0aGlzLmN1cnBsYXlhbmkgIT0gbm93YW5pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gbm93YW5pO1xyXG4gICAgICAgICAgICBsZXQgc2ZpZCA9IE1hdGgubWluKHRoaXMuZGF0YWNvcHkubHYsNjApO1xyXG4gICAgICAgICAgICBsZXQgc2twYXRoID0gYHNwaW5lOmZsb3dlciR7c2ZpZH1fc2tlYDtcclxuICAgICAgICAgICAgbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpmbG93ZXIke3NmaWR9X3RleGA7XHJcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgICAgICBjaGljay5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgICAgIGNoaWNrLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XHJcbiAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltQ29tcGxldGUoZXZ0OmNjLkV2ZW50KXtcclxuICAgICAgICBpZihldnQudHlwZSA9PSBkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSl7XHJcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICAgICAgaWYoY2hpY2suYW5pbWF0aW9uTmFtZSA9PSAnYXRrUicpe1xyXG4gICAgICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignaWRsZVInLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gJ2lkbGVSJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGNoaWNrLmFuaW1hdGlvbk5hbWUgPT0gJ2F0a0wnKXtcclxuICAgICAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9ICdpZGxlTCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYXJnZXQoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbmVteWxpc3QgPSBIYWxsU2NlbmUuSW5zdGFuY2UuZW5lbXlsaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIGxldCBtaW5kaXMgPSA2MDA7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpPGVuZW15bGlzdC5sZW5ndGg7KytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZW5lbXlsaXN0W2ldLng8IC1jYy53aW5TaXplLndpZHRoLzIpY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSBlbmVteWxpc3RbaV0ucG9zaXRpb24uc3ViKHRoaXMubm9kZS5wb3NpdGlvbikubWFnKCk7XHJcbiAgICAgICAgICAgIGlmKGRpcyA8IG1pbmRpcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZW5lbXlsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbWluZGlzID0gZGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjZCA9IDA7XHJcbiAgICBcclxuICAgIHByaXZhdGUgbGFzdGZpcmUgPSAwO1xyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gICAgICAgIGlmKGR0ID4gMSkgZHQgPSAxO1xyXG4gICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICBpZih0aGlzLmRhdGFjb3B5ICYmIHRoaXMuZHJvcHR5cGUgPT0gMCAmJiBEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2hpY2spIGNoaWNrLnRpbWVTY2FsZSA9IDEuNTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwia2JcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2hpY2spIGNoaWNrLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImtiXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRyb3B0eXBlICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiB0aGlzLmRyb3B0eXBlMGVuZHRpbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcHR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5iRHJhZykgcmV0dXJuO1xyXG4gICAgICAgIGlmKCF0aGlzLmRhdGFjb3B5KSByZXR1cm47XHJcbiAgICAgICAgaWYodGhpcy5kcm9wdHlwZSAhPSAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5sYXN0ZmlyZSArPSBkdDtcclxuICAgICAgICBpZih0aGlzLmxhc3RmaXJlID49IHRoaXMuY2QgLyAoKERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpID8gMiA6IDEpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0ZmlyZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmdldFRhcmdldCgpO1xyXG4gICAgICAgICAgICBpZih0YXJnZXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNSksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJEcmFnKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuZGF0YWNvcHkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0X3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQodGFyZ2V0LnggPiB0aGlzLm5vZGUueCA/IGNjLnYzKDMwLDM1LDApOmNjLnYzKC0zMCwzNSwwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5wYXJlbnQgPSBIYWxsU2NlbmUuSW5zdGFuY2UuR2V0R2FtZU9iamVjdChcIm5vZGVfYnVsbGV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIuZ2V0Q29tcG9uZW50KEJ1bGxldCkuc2V0SW5mbyh0YXJnZXQsdGhpcy5kYXRhY29weS5sdik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFyZ2V0LnggPiB0aGlzLm5vZGUueClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2F0a1InLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSBcImF0a1JcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignYXRrTCcsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IFwiYXRrTFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=