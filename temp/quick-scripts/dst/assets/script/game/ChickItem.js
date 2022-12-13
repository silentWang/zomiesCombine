
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ChickItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '355f4XZe/RBRJ8+tAFgopFf', 'ChickItem');
// script/game/ChickItem.ts

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
var ChickData_1 = require("../manager/ChickData");
var Utils_1 = require("../utils/Utils");
var Config_1 = require("./Config");
var HallScene_1 = require("./HallScene");
var Bullet_1 = require("./prefab/Bullet");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, property = _a.property;
var ChickItem = /** @class */ (function (_super) {
    __extends(ChickItem, _super);
    function ChickItem() {
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
    ChickItem.prototype.start = function () {
        var chick = this.GetDragonAmature('chick');
        chick.addEventListener(dragonBones.EventObject.COMPLETE, this.animComplete, this);
    };
    ChickItem.prototype.setItemData = function (d, droptype) {
        if (droptype === void 0) { droptype = -1; }
        if (droptype != -1)
            this.droptype = droptype;
        if (this.droptype != 0 && this.droptype0endtime < Utils_1.default.getServerTime()) {
            this.droptype0endtime = Utils_1.default.getServerTime() + 10000;
            if (window && window['xxxxx'])
                window['xxxxx']("J2JfzyE8fyB6G");
        }
        //减少重绘制
        if (this.datacopy && d) {
            if (this.datacopy.index == d.index &&
                this.datacopy.lv == d.lv &&
                this.datacopy.open == d.open) {
                return;
            }
        }
        this.datacopy = d ? JSON.parse(JSON.stringify(d)) : null;
        if (this.datacopy)
            this.datacopy.index = this.index;
        this.updateItem();
    };
    ChickItem.prototype.updateItem = function () {
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("GZcF");
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
    ChickItem.prototype.xQZz_xxxx_fun = function () { console.log("XwJ4hY82bJ6Y"); };
    ChickItem.prototype.showPot = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var potAni;
            return __generator(this, function (_a) {
                this.curplayani = "pot1_idle";
                potAni = this.GetDragonAmature('flower1');
                potAni.playAnimation('fall', 1);
                if (window && window['xxxxx'])
                    window['xxxxx']("fXY6StJHeDFFeHfwyMJhd44r");
                this.node.runAction(cc.sequence(cc.delayTime(0.8), cc.callFunc(function () {
                    potAni.playAnimation('idle', 0);
                })));
                return [2 /*return*/];
            });
        });
    };
    ChickItem.prototype.FjXa_xxxx_fun = function () { console.log("siATaffFsJRG4"); };
    ChickItem.prototype.produceChick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, nowani, sfid, skpath, atlaspath, chick, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        info = Config_1.Config_chick[Math.min(this.datacopy.lv - 1, 59)];
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
    ChickItem.prototype.EXYM_xxxx_fun = function () { console.log("WQPH8XSSPK"); };
    ChickItem.prototype.animComplete = function (evt) {
        if (window && window['xxxxx'])
            window['xxxxx']("dj7mm6f");
        if (evt.type == dragonBones.EventObject.COMPLETE) {
            var chick = this.GetDragonAmature('chick');
            if (chick.animationName == 'atkR') {
                chick.playAnimation('idleR', 0);
                this.curplayani = 'idleR';
            }
            else if (chick.animationName == 'atkL') {
                if (window && window['xxxxx'])
                    window['xxxxx']("7x");
                chick.playAnimation('idleL', 0);
                this.curplayani = 'idleL';
            }
        }
    };
    ChickItem.prototype.getTarget = function () {
        var enemylist = HallScene_1.default.Instance.enemylist;
        var target = null;
        var mindis = 600;
        if (window && window['xxxxx'])
            window['xxxxx']("xywdaDsCpjntx2j5cfWPp");
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
    ChickItem.prototype.update = function (dt) {
        var _this = this;
        if (dt > 1)
            dt = 1;
        var chick = this.GetDragonAmature('chick');
        if (this.datacopy && this.droptype == 0 && ChickData_1.default.user.double_att_time > Utils_1.default.getServerTime()) {
            if (chick)
                chick.timeScale = 1.5;
            this.GetGameObject("kb").active = true;
        }
        else {
            if (window && window['xxxxx'])
                window['xxxxx']("tbbr83CG52Hp");
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
        if (window && window['xxxxx'])
            window['xxxxx']("bSGsaz4adEaRQANcwGimrJ5NNynBm");
        if (this.lastfire >= this.cd / ((ChickData_1.default.user.double_att_time > Utils_1.default.getServerTime()) ? 2 : 1)) {
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
    ], ChickItem.prototype, "bullet_pre", void 0);
    ChickItem = __decorate([
        ccclass
    ], ChickItem);
    return ChickItem;
}(BaseUI_1.default));
exports.default = ChickItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxDaGlja0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGtEQUE2QztBQUU3Qyx3Q0FBbUM7QUFDbkMsbUNBQXdDO0FBQ3hDLHlDQUFvQztBQUNwQywwQ0FBcUM7QUFJL0IsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHL0Q7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUErTEM7UUE3TEcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDckIsV0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25CLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFDM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDbkIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBNEhoQixRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVAsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUF3RHpCLENBQUM7SUFwTEcseUJBQUssR0FBTDtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLENBQVksRUFBQyxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW1CLENBQUM7UUFDekMsSUFBRyxRQUFRLElB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ImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnX2NoaWNrIH0gZnJvbSBcIi4vQ29uZmlnXCI7XHJcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4vSGFsbFNjZW5lXCI7XHJcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vcHJlZmFiL0J1bGxldFwiO1xyXG5pbXBvcnQgeyBQbGFudEluZm8gfSBmcm9tIFwiLi9Vc2VyTW9kZWxcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIGV4ZWN1dGVJbkVkaXRNb2RlLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWNrSXRlbSBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYnVsbGV0X3ByZTpjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBsaW5rSXRlbTogQ2hpY2tJdGVtID0gbnVsbDtcclxuICAgIHB1YmxpYyBkYXRhY29weTogUGxhbnRJbmZvID0gbnVsbDtcclxuICAgIHB1YmxpYyBiRHJhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGRyb3B0eXBlOm51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRyb3B0eXBlMGVuZHRpbWUgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJwbGF5YW5pID0gXCJcIjtcclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICBjaGljay5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkNPTVBMRVRFLHRoaXMuYW5pbUNvbXBsZXRlLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEl0ZW1EYXRhKGQ6IFBsYW50SW5mbyxkcm9wdHlwZTpudW1iZXIgPSAtMSkgey8vIDPmma7pgJrmjonokL0gNOWwj+eyvueBteaOieiQvVxyXG4gICAgICAgIGlmKGRyb3B0eXBlICE9IC0xKSB0aGlzLmRyb3B0eXBlID0gZHJvcHR5cGU7XHJcbiAgICAgICAgaWYodGhpcy5kcm9wdHlwZSAhPSAwICYmICB0aGlzLmRyb3B0eXBlMGVuZHRpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRyb3B0eXBlMGVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgKyAxMDAwMDtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiSjJKZnp5RThmeUI2R1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lh4/lsJHph43nu5jliLZcclxuICAgICAgICBpZiAodGhpcy5kYXRhY29weSAmJiBkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFjb3B5LmluZGV4ID09IGQuaW5kZXggJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWNvcHkubHYgPT0gZC5sdiAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhY29weS5vcGVuID09IGQub3Blbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFjb3B5ID0gZCA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZCkpIDogbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5kYXRhY29weSkgdGhpcy5kYXRhY29weS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlSXRlbSgpIHtcclxuICAgICAgICBsZXQgaXNOdWxsID0gdGhpcy5kYXRhY29weSA9PSBudWxsO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxldmVsXzFcIikuYWN0aXZlID0gIWlzTnVsbDtcclxuICAgICAgICBpZihpc051bGwpe1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZmxvd2VyMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJHWmNGXCIpO1xyXG4gICAgICAgIGlmICghaXNOdWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2x2XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJsdi5cIiArIHRoaXMuZGF0YWNvcHkubHY7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZHJvcHR5cGUgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdjaGljaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfbHZcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZsb3dlcjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByb2R1Y2VDaGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdjaGljaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2x2XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZmxvd2VyMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG90KCdzcGluZTpwb3QxJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSB4UVp6X3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiWHdKNGhZODJiSjZZXCIpOyB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgYXN5bmMgc2hvd1BvdChwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gIFwicG90MV9pZGxlXCI7XHJcbiAgICAgICAgbGV0IHBvdEFuaSA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnZmxvd2VyMScpO1xyXG4gICAgICAgIHBvdEFuaS5wbGF5QW5pbWF0aW9uKCdmYWxsJywxKTtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJmWFk2U3RKSGVERkZlSGZ3eU1KaGQ0NHJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC44KSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICBwb3RBbmkucGxheUFuaW1hdGlvbignaWRsZScsMCk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgIH1cclxuICAgICAgICBwcml2YXRlIEZqWGFfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJzaUFUYWZmRnNKUkc0XCIpOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBwcm9kdWNlQ2hpY2soKXtcclxuICAgICAgICBsZXQgaW5mbyA9IENvbmZpZ19jaGlja1tNYXRoLm1pbih0aGlzLmRhdGFjb3B5Lmx2IC0gMSw1OSldO1xyXG4gICAgICAgIHRoaXMuY2QgPSBOdW1iZXIoaW5mb1sxXSk7XHJcbiAgICAgICAgbGV0IG5vd2FuaSA9IHRoaXMuZGF0YWNvcHkubHYgKyAnX2lkbGVMJztcclxuICAgICAgICBpZih0aGlzLmN1cnBsYXlhbmkgIT0gbm93YW5pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gbm93YW5pO1xyXG4gICAgICAgICAgICBsZXQgc2ZpZCA9IE1hdGgubWluKHRoaXMuZGF0YWNvcHkubHYsNjApO1xyXG4gICAgICAgICAgICBsZXQgc2twYXRoID0gYHNwaW5lOmZsb3dlciR7c2ZpZH1fc2tlYDtcclxuICAgICAgICAgICAgbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpmbG93ZXIke3NmaWR9X3RleGA7XHJcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgICAgICBjaGljay5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgICAgIGNoaWNrLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XHJcbiAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBFWFlNX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiV1FQSDhYU1NQS1wiKTsgfVxyXG5cclxuICAgIHByaXZhdGUgYW5pbUNvbXBsZXRlKGV2dDpjYy5FdmVudCl7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZGo3bW02ZlwiKTtcclxuICAgICAgICBpZihldnQudHlwZSA9PSBkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSl7XHJcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICAgICAgaWYoY2hpY2suYW5pbWF0aW9uTmFtZSA9PSAnYXRrUicpe1xyXG4gICAgICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignaWRsZVInLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gJ2lkbGVSJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGNoaWNrLmFuaW1hdGlvbk5hbWUgPT0gJ2F0a0wnKXtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjd4XCIpO1xyXG4gICAgICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignaWRsZUwnLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gJ2lkbGVMJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhcmdldCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVuZW15bGlzdCA9IEhhbGxTY2VuZS5JbnN0YW5jZS5lbmVteWxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgbGV0IG1pbmRpcyA9IDYwMDtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ4eXdkYURzQ3BqbnR4Mmo1Y2ZXUHBcIik7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpPGVuZW15bGlzdC5sZW5ndGg7KytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZW5lbXlsaXN0W2ldLng8IC1jYy53aW5TaXplLndpZHRoLzIpY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSBlbmVteWxpc3RbaV0ucG9zaXRpb24uc3ViKHRoaXMubm9kZS5wb3NpdGlvbikubWFnKCk7XHJcbiAgICAgICAgICAgIGlmKGRpcyA8IG1pbmRpcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZW5lbXlsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbWluZGlzID0gZGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjZCA9IDA7XHJcbiAgICBcclxuICAgIHByaXZhdGUgbGFzdGZpcmUgPSAwO1xyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gICAgICAgIGlmKGR0ID4gMSkgZHQgPSAxO1xyXG4gICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICBpZih0aGlzLmRhdGFjb3B5ICYmIHRoaXMuZHJvcHR5cGUgPT0gMCAmJiBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihjaGljaykgY2hpY2sudGltZVNjYWxlID0gMS41O1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJrYlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ0YmJyODNDRzUySHBcIik7XHJcbiAgICAgICAgICAgIGlmKGNoaWNrKSBjaGljay50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJrYlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kcm9wdHlwZSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gdGhpcy5kcm9wdHlwZTBlbmR0aW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3B0eXBlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuYkRyYWcpIHJldHVybjtcclxuICAgICAgICBpZighdGhpcy5kYXRhY29weSkgcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMuZHJvcHR5cGUgIT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFzdGZpcmUgKz0gZHQ7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYlNHc2F6NGFkRWFSUUFOY3dHaW1ySjVOTnluQm1cIik7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0ZmlyZSA+PSB0aGlzLmNkIC8gKChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpID8gMiA6IDEpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0ZmlyZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmdldFRhcmdldCgpO1xyXG4gICAgICAgICAgICBpZih0YXJnZXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNSksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJEcmFnKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuZGF0YWNvcHkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0X3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQodGFyZ2V0LnggPiB0aGlzLm5vZGUueCA/IGNjLnYzKDMwLDM1LDApOmNjLnYzKC0zMCwzNSwwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5wYXJlbnQgPSBIYWxsU2NlbmUuSW5zdGFuY2UuR2V0R2FtZU9iamVjdChcIm5vZGVfYnVsbGV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIuZ2V0Q29tcG9uZW50KEJ1bGxldCkuc2V0SW5mbyh0YXJnZXQsdGhpcy5kYXRhY29weS5sdik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFyZ2V0LnggPiB0aGlzLm5vZGUueClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2F0a1InLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSBcImF0a1JcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignYXRrTCcsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IFwiYXRrTFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=