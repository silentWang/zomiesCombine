
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
        this.FjXa_xxxx_fun();
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
                this.xQZz_xxxx_fun();
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
                    case 3:
                        this.EXYM_xxxx_fun();
                        return [2 /*return*/];
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
                    window['xxxxx']("7xdsagasde");
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
                window['xxxxx']("tbbr83CG52Hpgdsae");
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
            window['xxxxx']("bSGsaz4adEaRQANcwGimrJ5NNynBmgdsa");
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
        this.gewsxcx_ewioe88_fun();
    };
    ChickItem.prototype.gewsxcx_ewioe88_fun = function () { console.log("xvdsalv,sdgewasdfg..m;j;asd"); };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxDaGlja0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGtEQUE2QztBQUU3Qyx3Q0FBbUM7QUFDbkMsbUNBQXdDO0FBQ3hDLHlDQUFvQztBQUNwQywwQ0FBcUM7QUFJL0IsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHL0Q7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUFvTUM7UUFsTUcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDckIsV0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25CLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFDM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDbkIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBK0hoQixRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVAsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUEwRHpCLENBQUM7SUF6TEcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxDQUFZLEVBQUMsUUFBb0I7UUFBcEIseUJBQUEsRUFB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LEdBQTNCLGNBQStCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFqTTVFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1E7SUFGWCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb003QjtJQUFELGdCQUFDO0NBcE1ELEFBb01DLENBcE1zQyxnQkFBTSxHQW9NNUM7a0JBcE1vQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBDb25maWdfY2hpY2sgfSBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi9IYWxsU2NlbmVcIjtcclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi9wcmVmYWIvQnVsbGV0XCI7XHJcbmltcG9ydCB7IFBsYW50SW5mbyB9IGZyb20gXCIuL1VzZXJNb2RlbFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgZXhlY3V0ZUluRWRpdE1vZGUsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpY2tJdGVtIGV4dGVuZHMgQmFzZVVJIHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWxsZXRfcHJlOmNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIGxpbmtJdGVtOiBDaGlja0l0ZW0gPSBudWxsO1xyXG4gICAgcHVibGljIGRhdGFjb3B5OiBQbGFudEluZm8gPSBudWxsO1xyXG4gICAgcHVibGljIGJEcmFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZHJvcHR5cGU6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZHJvcHR5cGUwZW5kdGltZSA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnBsYXlhbmkgPSBcIlwiO1xyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5GalhhX3h4eHhfZnVuKCk7XHJcbiAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpO1xyXG4gICAgICAgIGNoaWNrLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsdGhpcy5hbmltQ29tcGxldGUsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbURhdGEoZDogUGxhbnRJbmZvLGRyb3B0eXBlOm51bWJlciA9IC0xKSB7Ly8gM+aZrumAmuaOieiQvSA05bCP57K+54G15o6J6JC9XHJcbiAgICAgICAgaWYoZHJvcHR5cGUgIT0gLTEpIHRoaXMuZHJvcHR5cGUgPSBkcm9wdHlwZTtcclxuICAgICAgICBpZih0aGlzLmRyb3B0eXBlICE9IDAgJiYgIHRoaXMuZHJvcHR5cGUwZW5kdGltZSA8IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcHR5cGUwZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKSArIDEwMDAwO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJKMkpmenlFOGZ5QjZHXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WHj+WwkemHjee7mOWItlxyXG4gICAgICAgIGlmICh0aGlzLmRhdGFjb3B5ICYmIGQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YWNvcHkuaW5kZXggPT0gZC5pbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhY29weS5sdiA9PSBkLmx2ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFjb3B5Lm9wZW4gPT0gZC5vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWNvcHkgPSBkID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkKSkgOiBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFjb3B5KSB0aGlzLmRhdGFjb3B5LmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVJdGVtKCkge1xyXG4gICAgICAgIGxldCBpc051bGwgPSB0aGlzLmRhdGFjb3B5ID09IG51bGw7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGV2ZWxfMVwiKS5hY3RpdmUgPSAhaXNOdWxsO1xyXG4gICAgICAgIGlmKGlzTnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnY2hpY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2x2XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmbG93ZXIxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkdaY0ZcIik7XHJcbiAgICAgICAgaWYgKCFpc051bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfbHZcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcImx2LlwiICsgdGhpcy5kYXRhY29weS5sdjtcclxuICAgICAgICAgICAgaWYodGhpcy5kcm9wdHlwZSA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZmxvd2VyMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvZHVjZUNoaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfbHZcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmbG93ZXIxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3QoJ3NwaW5lOnBvdDEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgeFFael94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIlh3SjRoWTgyYko2WVwiKTsgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGFzeW5jIHNob3dQb3QocGF0aDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY3VycGxheWFuaSA9ICBcInBvdDFfaWRsZVwiO1xyXG4gICAgICAgIGxldCBwb3RBbmkgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2Zsb3dlcjEnKTtcclxuICAgICAgICBwb3RBbmkucGxheUFuaW1hdGlvbignZmFsbCcsMSk7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZlhZNlN0SkhlREZGZUhmd3lNSmhkNDRyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuOCksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgcG90QW5pLnBsYXlBbmltYXRpb24oJ2lkbGUnLDApO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgdGhpcy54UVp6X3h4eHhfZnVuKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEZqWGFfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJzaUFUYWZmRnNKUkc0XCIpOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBwcm9kdWNlQ2hpY2soKXtcclxuICAgICAgICBsZXQgaW5mbyA9IENvbmZpZ19jaGlja1tNYXRoLm1pbih0aGlzLmRhdGFjb3B5Lmx2IC0gMSw1OSldO1xyXG4gICAgICAgIHRoaXMuY2QgPSBOdW1iZXIoaW5mb1sxXSk7XHJcbiAgICAgICAgbGV0IG5vd2FuaSA9IHRoaXMuZGF0YWNvcHkubHYgKyAnX2lkbGVMJztcclxuICAgICAgICBpZih0aGlzLmN1cnBsYXlhbmkgIT0gbm93YW5pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gbm93YW5pO1xyXG4gICAgICAgICAgICBsZXQgc2ZpZCA9IE1hdGgubWluKHRoaXMuZGF0YWNvcHkubHYsNjApO1xyXG4gICAgICAgICAgICBsZXQgc2twYXRoID0gYHNwaW5lOmZsb3dlciR7c2ZpZH1fc2tlYDtcclxuICAgICAgICAgICAgbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpmbG93ZXIke3NmaWR9X3RleGA7XHJcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgICAgICBjaGljay5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgICAgIGNoaWNrLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XHJcbiAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5FWFlNX3h4eHhfZnVuKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEVYWU1feHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJXUVBIOFhTU1BLXCIpOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltQ29tcGxldGUoZXZ0OmNjLkV2ZW50KXtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJkajdtbTZmXCIpO1xyXG4gICAgICAgIGlmKGV2dC50eXBlID09IGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkNPTVBMRVRFKXtcclxuICAgICAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpO1xyXG4gICAgICAgICAgICBpZihjaGljay5hbmltYXRpb25OYW1lID09ICdhdGtSJyl7XHJcbiAgICAgICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlUicsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSAnaWRsZVInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY2hpY2suYW5pbWF0aW9uTmFtZSA9PSAnYXRrTCcpe1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiN3hkc2FnYXNkZVwiKTtcclxuICAgICAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9ICdpZGxlTCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYXJnZXQoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbmVteWxpc3QgPSBIYWxsU2NlbmUuSW5zdGFuY2UuZW5lbXlsaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIGxldCBtaW5kaXMgPSA2MDA7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwieHl3ZGFEc0Nwam50eDJqNWNmV1BwXCIpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aTxlbmVteWxpc3QubGVuZ3RoOysraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGVuZW15bGlzdFtpXS54PCAtY2Mud2luU2l6ZS53aWR0aC8yKWNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gZW5lbXlsaXN0W2ldLnBvc2l0aW9uLnN1Yih0aGlzLm5vZGUucG9zaXRpb24pLm1hZygpO1xyXG4gICAgICAgICAgICBpZihkaXMgPCBtaW5kaXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGVuZW15bGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIG1pbmRpcyA9IGRpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2QgPSAwO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGxhc3RmaXJlID0gMDtcclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZihkdCA+IDEpIGR0ID0gMTtcclxuICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrJyk7XHJcbiAgICAgICAgaWYodGhpcy5kYXRhY29weSAmJiB0aGlzLmRyb3B0eXBlID09IDAgJiYgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2hpY2spIGNoaWNrLnRpbWVTY2FsZSA9IDEuNTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwia2JcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwidGJicjgzQ0c1MkhwZ2RzYWVcIik7XHJcbiAgICAgICAgICAgIGlmKGNoaWNrKSBjaGljay50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJrYlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kcm9wdHlwZSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gdGhpcy5kcm9wdHlwZTBlbmR0aW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3B0eXBlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuYkRyYWcpIHJldHVybjtcclxuICAgICAgICBpZighdGhpcy5kYXRhY29weSkgcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMuZHJvcHR5cGUgIT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFzdGZpcmUgKz0gZHQ7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYlNHc2F6NGFkRWFSUUFOY3dHaW1ySjVOTnluQm1nZHNhXCIpO1xyXG4gICAgICAgIGlmKHRoaXMubGFzdGZpcmUgPj0gdGhpcy5jZCAvICgoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSA/IDIgOiAxKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdGZpcmUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQoKTtcclxuICAgICAgICAgICAgaWYodGFyZ2V0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5iRHJhZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmRhdGFjb3B5KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldF9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRhcmdldC54ID4gdGhpcy5ub2RlLnggPyBjYy52MygzMCwzNSwwKTpjYy52MygtMzAsMzUsMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIucGFyZW50ID0gSGFsbFNjZW5lLkluc3RhbmNlLkdldEdhbWVPYmplY3QoXCJub2RlX2J1bGxldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBiLmdldENvbXBvbmVudChCdWxsZXQpLnNldEluZm8odGFyZ2V0LHRoaXMuZGF0YWNvcHkubHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhcmdldC54ID4gdGhpcy5ub2RlLngpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdhdGtSJywxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gXCJhdGtSXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2F0a0wnLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSBcImF0a0xcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXdzeGN4X2V3aW9lODhfZnVuKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdld3N4Y3hfZXdpb2U4OF9mdW4oKXsgY29uc29sZS5sb2coXCJ4dmRzYWx2LHNkZ2V3YXNkZmcuLm07ajthc2RcIik7IH1cclxufVxyXG4iXX0=