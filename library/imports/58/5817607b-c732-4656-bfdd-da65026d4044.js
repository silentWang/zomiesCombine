"use strict";
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