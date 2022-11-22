
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
                            this.GetGameObject('container').removeAllChildren();
                            this.GetGameObject("lbl_lv").active = false;
                            this.GetGameObject("flower1").active = false;
                            return [2 /*return*/];
                        }
                        if (!!isNull) return [3 /*break*/, 3];
                        this.GetGameObject("lbl_lv").getComponent(cc.Label).string = "lv." + this.datacopy.lv;
                        if (!(this.droptype == 0)) return [3 /*break*/, 2];
                        this.GetGameObject("lbl_lv").active = true;
                        this.GetGameObject("flower1").active = false;
                        return [4 /*yield*/, this.produceChick()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.GetGameObject("lbl_lv").active = false;
                        this.GetGameObject("flower1").active = true;
                        if (this.droptype == 4) {
                            if (this.curplayani != "pot1_idle") {
                                this.curplayani = "pot1_idle";
                                this.showPot('spine:pot1');
                            }
                        }
                        else {
                            if (this.curplayani != "pot3_idle") {
                                this.curplayani = "pot3_idle";
                                this.showPot('spine:pot3');
                            }
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SoldierItem.prototype.showPot = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.node.opacity = 0;
                        _a = this.GetSkeleton("flower1");
                        return [4 /*yield*/, Utils_1.default.loadRes(path, sp.SkeletonData)];
                    case 1:
                        _a.skeletonData = (_b.sent());
                        this.GetSkeleton("flower1").clearTracks();
                        this.GetSkeleton("flower1").setAnimation(0, "fall", false);
                        this.node.opacity = 255;
                        this.node.runAction(cc.sequence(cc.delayTime(0.8), cc.callFunc(function () {
                            _this.GetSkeleton("flower1").setAnimation(1, "idle", true);
                        })));
                        return [2 /*return*/];
                }
            });
        });
    };
    SoldierItem.prototype.produceChick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, nowani, sfid, skpath, atlaspath, tnode, newArm, _a, _b, container;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        info = DB_1.DB_plant[Math.min(this.datacopy.lv - 1, 59)];
                        this.cd = Number(info[1]);
                        nowani = this.datacopy.lv + '_idleL';
                        if (!(this.curplayani != nowani)) return [3 /*break*/, 3];
                        this.curplayani = nowani;
                        sfid = Math.min(this.datacopy.lv, 60);
                        sfid = 12;
                        skpath = "spine:flower" + sfid + "_ske";
                        atlaspath = "spine:flower" + sfid + "_tex";
                        tnode = new cc.Node('chick');
                        newArm = tnode.addComponent(dragonBones.ArmatureDisplay);
                        _a = newArm;
                        return [4 /*yield*/, Utils_1.default.loadRes(skpath, dragonBones.DragonBonesAsset)];
                    case 1:
                        _a.dragonAsset = (_c.sent());
                        _b = newArm;
                        return [4 /*yield*/, Utils_1.default.loadRes(atlaspath, dragonBones.DragonBonesAtlasAsset)];
                    case 2:
                        _b.dragonAtlasAsset = (_c.sent());
                        newArm.armatureName = 'Armature';
                        newArm.playAnimation('idleL', 0);
                        container = this.GetGameObject('container');
                        container.removeAllChildren();
                        container.addChild(tnode);
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SoldierItem.prototype.getTarget = function () {
        var enemylist = HallScene_1.default.Instance.enemylist;
        var target = null;
        var mindis = 400;
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
            // this.GetSkeleton("flower1").timeScale = 1.5;
            if (chick)
                chick.timeScale = 1.5;
            this.GetGameObject("kb").active = true;
        }
        else {
            // this.GetSkeleton("flower1").timeScale = 1;
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
                    b.position = _this.node.position.add(target_1.x > _this.node.x ? cc.v3(15, 35, 0) : cc.v3(-15, 35, 0));
                    b.parent = HallScene_1.default.Instance.GetGameObject("node_bullet");
                    b.getComponent(Bullet_1.default).setInfo(target_1, _this.datacopy.lv);
                })));
                var amr = this.GetDragonAmature('chick');
                if (target_1.x > this.node.x) {
                    // this.GetSkeleton("flower1").setAnimation(0,"atkR",false);
                    // this.GetSkeleton("flower1").setAnimation(1,"idleR",true);
                    amr.armature().animation.gotoAndPlayByFrame('atkR', 1, 1);
                    // this.GetDragonAmature('chick').playAnimation('idleR',0);1
                    this.curplayani = "idleR";
                }
                else {
                    // this.GetSkeleton("flower1").setAnimation(0,"atkL",false);
                    // this.GetSkeleton("flower1").setAnimation(1,"idleL",true);
                    amr.armature().animation.gotoAndPlayByFrame('atkL', 1, 1);
                    // this.GetDragonAmature('chick').playAnimation('atkL',1);
                    // this.GetDragonAmature('chick').playAnimation('idleL',0);
                    this.curplayani = "idleL";
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTb2xkaWVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsd0NBQW1DO0FBQ25DLHdDQUFtQztBQUNuQywyQkFBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLDBDQUFxQztBQUkvQixJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUcvRDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQWdOQztRQTlNRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUNyQixXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFDN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDbkIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBa0loQixRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVAsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFtRXpCLENBQUM7SUFyTUcsaUNBQVcsR0FBWCxVQUFZLENBQVksRUFBQyxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW1CLENBQUM7UUFDekMsSUFBRyxRQUFRLElBQUksQ0FBQyxDQUFDO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDNUMsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFFLENBQUMsSUFBSyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxFQUNyRTtZQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFLLENBQUMs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LEVBQTJCLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xGLDBEQUEwRDtvQkFDMUQsMkRBQTJEO29CQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztpQkFDN0I7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQTdNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNRO0lBRlgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWdOL0I7SUFBRCxrQkFBQztDQWhORCxBQWdOQyxDQWhOd0MsZ0JBQU0sR0FnTjlDO2tCQWhOb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgREJfcGxhbnQgfSBmcm9tIFwiLi9EQlwiO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gXCIuL0hhbGxTY2VuZVwiO1xyXG5pbXBvcnQgQnVsbGV0IGZyb20gXCIuL3ByZWZhYi9CdWxsZXRcIjtcclxuaW1wb3J0IHsgUGxhbnRJbmZvIH0gZnJvbSBcIi4vVXNlck1vZGVsXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBleGVjdXRlSW5FZGl0TW9kZSwgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2xkaWVySXRlbSBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYnVsbGV0X3ByZTpjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBsaW5rSXRlbTogU29sZGllckl0ZW0gPSBudWxsO1xyXG4gICAgcHVibGljIGRhdGFjb3B5OiBQbGFudEluZm8gPSBudWxsO1xyXG4gICAgcHVibGljIGJEcmFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZHJvcHR5cGU6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZHJvcHR5cGUwZW5kdGltZSA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnBsYXlhbmkgPSBcIlwiO1xyXG5cclxuICAgIHNldEl0ZW1EYXRhKGQ6IFBsYW50SW5mbyxkcm9wdHlwZTpudW1iZXIgPSAtMSkgey8vIDPmma7pgJrmjonokL0gNOWwj+eyvueBteaOieiQvVxyXG4gICAgICAgIGlmKGRyb3B0eXBlICE9IC0xKSB0aGlzLmRyb3B0eXBlID0gZHJvcHR5cGU7XHJcbiAgICAgICAgaWYodGhpcy5kcm9wdHlwZSE9MCAmJiAgdGhpcy5kcm9wdHlwZTBlbmR0aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kcm9wdHlwZTBlbmR0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpICsgMTAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5YeP5bCR6YeN57uY5Yi2XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YWNvcHkgJiYgZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhY29weS5pbmRleCA9PSBkLmluZGV4ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFjb3B5Lmx2ID09IGQubHYgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWNvcHkub3BlbiA9PSBkLm9wZW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZXRJdGVtRGF0YVwiLGQpXHJcbiAgICAgICAgdGhpcy5kYXRhY29weSA9IGQgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGQpKSA6IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YWNvcHkpIHRoaXMuZGF0YWNvcHkuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUl0ZW0oKSB7XHJcbiAgICAgICAgbGV0IGlzTnVsbCA9IHRoaXMuZGF0YWNvcHkgPT0gbnVsbDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsZXZlbF8xXCIpLmFjdGl2ZSA9ICFpc051bGw7XHJcbiAgICAgICAgaWYoaXNOdWxsKXtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdjb250YWluZXInKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfbHZcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZsb3dlcjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc051bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfbHZcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcImx2LlwiICsgdGhpcy5kYXRhY29weS5sdjtcclxuICAgICAgICAgICAgaWYodGhpcy5kcm9wdHlwZT09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2x2XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmbG93ZXIxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9kdWNlQ2hpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZsb3dlcjFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZHJvcHR5cGUgPT0gNClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnBsYXlhbmkgIT0gIFwicG90MV9pZGxlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSAgXCJwb3QxX2lkbGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UG90KCdzcGluZTpwb3QxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VycGxheWFuaSAhPSAgXCJwb3QzX2lkbGVcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9ICBcInBvdDNfaWRsZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3QoJ3NwaW5lOnBvdDMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzaG93UG90KHBhdGg6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2tlbGV0b25EYXRhID0gYXdhaXQgVXRpbHMubG9hZFJlcyhwYXRoLHNwLlNrZWxldG9uRGF0YSkgYXMgc3AuU2tlbGV0b25EYXRhO1xyXG4gICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLmNsZWFyVHJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDAsXCJmYWxsXCIsZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuOCksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDEsXCJpZGxlXCIsdHJ1ZSk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHByb2R1Y2VDaGljaygpe1xyXG4gICAgICAgIGxldCBpbmZvID0gREJfcGxhbnRbTWF0aC5taW4odGhpcy5kYXRhY29weS5sdiAtIDEsNTkpXTtcclxuICAgICAgICB0aGlzLmNkID0gTnVtYmVyKGluZm9bMV0pO1xyXG4gICAgICAgIGxldCBub3dhbmkgPSB0aGlzLmRhdGFjb3B5Lmx2ICsgJ19pZGxlTCc7XHJcbiAgICAgICAgaWYodGhpcy5jdXJwbGF5YW5pICE9IG5vd2FuaSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IG5vd2FuaTtcclxuICAgICAgICAgICAgbGV0IHNmaWQgPSBNYXRoLm1pbih0aGlzLmRhdGFjb3B5Lmx2LDYwKTtcclxuXHJcbiAgICAgICAgICAgIHNmaWQgPSAxMlxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2tlbGV0b25EYXRhID0gYXdhaXQgVXRpbHMubG9hZFJlcyhgc3BpbmU6Zmxvd2VyJHtzZmlkfWAsc3AuU2tlbGV0b25EYXRhKSBhcyBzcC5Ta2VsZXRvbkRhdGE7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLnNldEFuaW1hdGlvbigwLFwiaWRsZUxcIix0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtzZmlkfV9za2VgO1xyXG4gICAgICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7c2ZpZH1fdGV4YDtcclxuICAgICAgICAgICAgbGV0IHRub2RlID0gbmV3IGNjLk5vZGUoJ2NoaWNrJyk7XHJcbiAgICAgICAgICAgIGxldCBuZXdBcm0gPSB0bm9kZS5hZGRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICAgICAgbmV3QXJtLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcclxuICAgICAgICAgICAgbmV3QXJtLmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcclxuICAgICAgICAgICAgbmV3QXJtLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XHJcbiAgICAgICAgICAgIG5ld0FybS5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLkdldEdhbWVPYmplY3QoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRub2RlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgbm93QXJtID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKFwiY2hpY2tcIik7XHJcbiAgICAgICAgICAgIC8vIGxldCBza2luRGF0YSA9IChuZXdBcm0uYXJtYXR1cmUoKSBhcyBkcmFnb25Cb25lcy5Bcm1hdHVyZSkuYXJtYXR1cmVEYXRhLmRlZmF1bHRTa2luO1xyXG4gICAgICAgICAgICAvLyBkcmFnb25Cb25lcy5DQ0ZhY3RvcnkuZ2V0SW5zdGFuY2UoKS5yZXBsYWNlU2tpbihub3dBcm0uYXJtYXR1cmUoKSxza2luRGF0YSx0cnVlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIG5vd0FybS5hcm1hdHVyZU5hbWUgPSBcIkFybWF0dXJlXCI7XHJcbiAgICAgICAgICAgIC8vIG5vd0FybS5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFyZ2V0KClcclxuICAgIHtcclxuICAgICAgICBsZXQgZW5lbXlsaXN0ID0gSGFsbFNjZW5lLkluc3RhbmNlLmVuZW15bGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBsZXQgbWluZGlzID0gNDAwO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aTxlbmVteWxpc3QubGVuZ3RoOysraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGVuZW15bGlzdFtpXS54PCAtY2Mud2luU2l6ZS53aWR0aC8yKWNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gZW5lbXlsaXN0W2ldLnBvc2l0aW9uLnN1Yih0aGlzLm5vZGUucG9zaXRpb24pLm1hZygpO1xyXG4gICAgICAgICAgICBpZihkaXMgPCBtaW5kaXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGVuZW15bGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIG1pbmRpcyA9IGRpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2QgPSAwO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGxhc3RmaXJlID0gMDtcclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZihkdD4xKSBkdD0xO1xyXG4gICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YWNvcHkgJiYgdGhpcy5kcm9wdHlwZSA9PSAwICYmIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWU+VXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikudGltZVNjYWxlID0gMS41O1xyXG4gICAgICAgICAgICBpZihjaGljaykgY2hpY2sudGltZVNjYWxlID0gMS41O1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJrYlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICBpZihjaGljaykgY2hpY2sudGltZVNjYWxlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwia2JcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZHJvcHR5cGUhPTAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gdGhpcy5kcm9wdHlwZTBlbmR0aW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3B0eXBlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuYkRyYWcpcmV0dXJuO1xyXG4gICAgICAgIGlmKCF0aGlzLmRhdGFjb3B5KXJldHVybjtcclxuICAgICAgICBpZih0aGlzLmRyb3B0eXBlIT0wKXJldHVybjtcclxuICAgICAgICB0aGlzLmxhc3RmaXJlICs9IGR0O1xyXG4gICAgICAgIGlmKHRoaXMubGFzdGZpcmUgPj0gdGhpcy5jZCAvICgoRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZT5VdGlscy5nZXRTZXJ2ZXJUaW1lKCkpPzI6MSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RmaXJlID0gMDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0VGFyZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmKHRhcmdldClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYkRyYWcpcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmRhdGFjb3B5KXJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldF9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRhcmdldC54PnRoaXMubm9kZS54P2NjLnYzKDE1LDM1LDApOmNjLnYzKC0xNSwzNSwwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5wYXJlbnQgPSBIYWxsU2NlbmUuSW5zdGFuY2UuR2V0R2FtZU9iamVjdChcIm5vZGVfYnVsbGV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIuZ2V0Q29tcG9uZW50KEJ1bGxldCkuc2V0SW5mbyh0YXJnZXQsdGhpcy5kYXRhY29weS5sdik7XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICBsZXQgYW1yID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpO1xyXG4gICAgICAgICAgICAgICAgaWYodGFyZ2V0Lng+dGhpcy5ub2RlLngpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDAsXCJhdGtSXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLnNldEFuaW1hdGlvbigxLFwiaWRsZVJcIix0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGFtci5hcm1hdHVyZSgpIGFzIGRyYWdvbkJvbmVzLkFybWF0dXJlKS5hbmltYXRpb24uZ290b0FuZFBsYXlCeUZyYW1lKCdhdGtSJywxLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKS5wbGF5QW5pbWF0aW9uKCdpZGxlUicsMCk7MVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IFwiaWRsZVJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5zZXRBbmltYXRpb24oMCxcImF0a0xcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDEsXCJpZGxlTFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIChhbXIuYXJtYXR1cmUoKSBhcyBkcmFnb25Cb25lcy5Bcm1hdHVyZSkuYW5pbWF0aW9uLmdvdG9BbmRQbGF5QnlGcmFtZSgnYXRrTCcsMSwxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrJykucGxheUFuaW1hdGlvbignYXRrTCcsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSBcImlkbGVMXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19