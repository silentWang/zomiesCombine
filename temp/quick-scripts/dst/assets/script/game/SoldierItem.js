
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
                    var amr = _this.GetDragonAmature('chick');
                    if (target_1.x > _this.node.x) {
                        // this.GetSkeleton("flower1").setAnimation(0,"atkR",false);
                        // this.GetSkeleton("flower1").setAnimation(1,"idleR",true);
                        amr.armature().animation.gotoAndPlayByFrame('atkR', 1, 1);
                        _this.curplayani = "idleR";
                    }
                    else {
                        // this.GetSkeleton("flower1").setAnimation(0,"atkL",false);
                        // this.GetSkeleton("flower1").setAnimation(1,"idleL",true);
                        amr.armature().animation.gotoAndPlayByFrame('atkL', 1, 1);
                        _this.curplayani = "idleL";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTb2xkaWVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsd0NBQW1DO0FBQ25DLHdDQUFtQztBQUNuQywyQkFBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLDBDQUFxQztBQUkvQixJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUcvRDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQXlMQztRQXZMRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUNyQixXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFDN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDbkIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBa0hoQixRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVAsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUE0RHpCLENBQUM7SUE5S0csaUNBQVcsR0FBWCxVQUFZLENBQVksRUFBQyxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW1CLENBQUM7UUFDekMsSUFBRyxRQUFRLElBQUksQ0FBQyxDQUFDO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDNUMsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFFLENBQUMsSUFBSyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxFQUNyRTtZQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFLLENBQUMs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O0lBdExEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1E7SUFGWCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBeUwvQjtJQUFELGtCQUFDO0NBekxELEFBeUxDLENBekx3QyxnQkFBTSxHQXlMOUM7a0JBekxvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBEQl9wbGFudCB9IGZyb20gXCIuL0RCXCI7XHJcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4vSGFsbFNjZW5lXCI7XHJcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vcHJlZmFiL0J1bGxldFwiO1xyXG5pbXBvcnQgeyBQbGFudEluZm8gfSBmcm9tIFwiLi9Vc2VyTW9kZWxcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIGV4ZWN1dGVJbkVkaXRNb2RlLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbGRpZXJJdGVtIGV4dGVuZHMgQmFzZVVJIHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWxsZXRfcHJlOmNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIGxpbmtJdGVtOiBTb2xkaWVySXRlbSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZGF0YWNvcHk6IFBsYW50SW5mbyA9IG51bGw7XHJcbiAgICBwdWJsaWMgYkRyYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBkcm9wdHlwZTpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkcm9wdHlwZTBlbmR0aW1lID0gMDtcclxuICAgIHByaXZhdGUgY3VycGxheWFuaSA9IFwiXCI7XHJcblxyXG4gICAgc2V0SXRlbURhdGEoZDogUGxhbnRJbmZvLGRyb3B0eXBlOm51bWJlciA9IC0xKSB7Ly8gM+aZrumAmuaOieiQvSA05bCP57K+54G15o6J6JC9XHJcbiAgICAgICAgaWYoZHJvcHR5cGUgIT0gLTEpIHRoaXMuZHJvcHR5cGUgPSBkcm9wdHlwZTtcclxuICAgICAgICBpZih0aGlzLmRyb3B0eXBlIT0wICYmICB0aGlzLmRyb3B0eXBlMGVuZHRpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRyb3B0eXBlMGVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgKyAxMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lh4/lsJHph43nu5jliLZcclxuICAgICAgICBpZiAodGhpcy5kYXRhY29weSAmJiBkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFjb3B5LmluZGV4ID09IGQuaW5kZXggJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWNvcHkubHYgPT0gZC5sdiAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhY29weS5vcGVuID09IGQub3Blbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNldEl0ZW1EYXRhXCIsZClcclxuICAgICAgICB0aGlzLmRhdGFjb3B5ID0gZCA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZCkpIDogbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5kYXRhY29weSkgdGhpcy5kYXRhY29weS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlSXRlbSgpIHtcclxuICAgICAgICBsZXQgaXNOdWxsID0gdGhpcy5kYXRhY29weSA9PSBudWxsO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxldmVsXzFcIikuYWN0aXZlID0gIWlzTnVsbDtcclxuICAgICAgICBpZihpc051bGwpe1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZmxvd2VyMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzTnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwibHYuXCIgKyB0aGlzLmRhdGFjb3B5Lmx2O1xyXG4gICAgICAgICAgICBpZih0aGlzLmRyb3B0eXBlPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZmxvd2VyMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvZHVjZUNoaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfbHZcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmbG93ZXIxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRyb3B0eXBlID09IDQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJwbGF5YW5pICE9ICBcInBvdDFfaWRsZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gIFwicG90MV9pZGxlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvdCgnc3BpbmU6cG90MScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnBsYXlhbmkgIT0gIFwicG90M19pZGxlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSAgXCJwb3QzX2lkbGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UG90KCdzcGluZTpwb3QzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2hvd1BvdChwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLnNrZWxldG9uRGF0YSA9IGF3YWl0IFV0aWxzLmxvYWRSZXMocGF0aCxzcC5Ta2VsZXRvbkRhdGEpIGFzIHNwLlNrZWxldG9uRGF0YTtcclxuICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5jbGVhclRyYWNrcygpO1xyXG4gICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLnNldEFuaW1hdGlvbigwLFwiZmFsbFwiLGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjgpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLnNldEFuaW1hdGlvbigxLFwiaWRsZVwiLHRydWUpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBwcm9kdWNlQ2hpY2soKXtcclxuICAgICAgICBsZXQgaW5mbyA9IERCX3BsYW50W01hdGgubWluKHRoaXMuZGF0YWNvcHkubHYgLSAxLDU5KV07XHJcbiAgICAgICAgdGhpcy5jZCA9IE51bWJlcihpbmZvWzFdKTtcclxuICAgICAgICBsZXQgbm93YW5pID0gdGhpcy5kYXRhY29weS5sdiArICdfaWRsZUwnO1xyXG4gICAgICAgIGlmKHRoaXMuY3VycGxheWFuaSAhPSBub3dhbmkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSBub3dhbmk7XHJcbiAgICAgICAgICAgIGxldCBzZmlkID0gTWF0aC5taW4odGhpcy5kYXRhY29weS5sdiw2MCk7XHJcbiAgICAgICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtzZmlkfV9za2VgO1xyXG4gICAgICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7c2ZpZH1fdGV4YDtcclxuICAgICAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpO1xyXG4gICAgICAgICAgICBjaGljay5kcmFnb25Bc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoc2twYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQ7XHJcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcclxuICAgICAgICAgICAgY2hpY2suYXJtYXR1cmVOYW1lID0gJ0FybWF0dXJlJztcclxuICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignaWRsZUwnLDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhcmdldCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVuZW15bGlzdCA9IEhhbGxTY2VuZS5JbnN0YW5jZS5lbmVteWxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgbGV0IG1pbmRpcyA9IDQwMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwO2k8ZW5lbXlsaXN0Lmxlbmd0aDsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihlbmVteWxpc3RbaV0ueDwgLWNjLndpblNpemUud2lkdGgvMiljb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGRpcyA9IGVuZW15bGlzdFtpXS5wb3NpdGlvbi5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYoZGlzIDwgbWluZGlzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBlbmVteWxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBtaW5kaXMgPSBkaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNkID0gMDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsYXN0ZmlyZSA9IDA7XHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZHQ+MSkgZHQ9MTtcclxuICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrJylcclxuICAgICAgICBpZih0aGlzLmRhdGFjb3B5ICYmIHRoaXMuZHJvcHR5cGUgPT0gMCAmJiBEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2hpY2spIGNoaWNrLnRpbWVTY2FsZSA9IDEuNTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwia2JcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2hpY2spIGNoaWNrLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImtiXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRyb3B0eXBlICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiB0aGlzLmRyb3B0eXBlMGVuZHRpbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcHR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5iRHJhZykgcmV0dXJuO1xyXG4gICAgICAgIGlmKCF0aGlzLmRhdGFjb3B5KSByZXR1cm47XHJcbiAgICAgICAgaWYodGhpcy5kcm9wdHlwZSE9MCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFzdGZpcmUgKz0gZHQ7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0ZmlyZSA+PSB0aGlzLmNkIC8gKChEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSA/IDIgOiAxKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdGZpcmUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQoKTtcclxuICAgICAgICAgICAgaWYodGFyZ2V0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5iRHJhZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmRhdGFjb3B5KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldF9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRhcmdldC54ID4gdGhpcy5ub2RlLnggPyBjYy52MygzMCwzNSwwKTpjYy52MygtMzAsMzUsMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIucGFyZW50ID0gSGFsbFNjZW5lLkluc3RhbmNlLkdldEdhbWVPYmplY3QoXCJub2RlX2J1bGxldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBiLmdldENvbXBvbmVudChCdWxsZXQpLnNldEluZm8odGFyZ2V0LHRoaXMuZGF0YWNvcHkubHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbXIgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFyZ2V0LnggPiB0aGlzLm5vZGUueClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLnNldEFuaW1hdGlvbigwLFwiYXRrUlwiLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDEsXCJpZGxlUlwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYW1yLmFybWF0dXJlKCkgYXMgZHJhZ29uQm9uZXMuQXJtYXR1cmUpLmFuaW1hdGlvbi5nb3RvQW5kUGxheUJ5RnJhbWUoJ2F0a1InLDEsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IFwiaWRsZVJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDAsXCJhdGtMXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5zZXRBbmltYXRpb24oMSxcImlkbGVMXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYW1yLmFybWF0dXJlKCkgYXMgZHJhZ29uQm9uZXMuQXJtYXR1cmUpLmFuaW1hdGlvbi5nb3RvQW5kUGxheUJ5RnJhbWUoJ2F0a0wnLDEsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IFwiaWRsZUxcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19