
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7abb6Nw6whC5Ira83PINgLj', 'Enemy');
// script/game/prefab/Enemy.ts

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
var BaseUI_1 = require("../../framwork/BaseUI");
var Data_1 = require("../../manager/Data");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var DB_1 = require("../DB");
var HallScene_1 = require("../HallScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getcoin_pre = null;
        _this.maxhp = 0;
        _this.hp = 0;
        _this.money = 0;
        _this.type = 0; //0 普通 1 小boss 2大boss
        _this.bfrozen = false;
        _this.pathindex = 1;
        _this.sped = 1;
        _this.base_speed = 50;
        _this.redendtime = 0;
        _this.purpleendtime = 0;
        return _this;
    }
    Enemy_1 = Enemy;
    Enemy.prototype.getBossMoney = function () {
        if (this.type == 2) {
            if (Data_1.default.user.double_income_time > Utils_1.default.getServerTime()) {
                this.money *= 2;
            }
            return (this.maxhp - this.hp) / this.maxhp * this.money;
        }
        return 0;
    };
    Enemy.prototype.setID = function (id, boss) {
        return __awaiter(this, void 0, void 0, function () {
            var info, skpath, atlaspath, armature, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.type = boss ? 1 : 0;
                        info = DB_1.DB_zombie[id + ""];
                        if (id > 100) {
                            id -= 100;
                            this.type = 2;
                        }
                        if (id > 52)
                            id = Utils_1.default.getRandomInt(1, 52);
                        // this.GetGameObject("boss").active = this.type == 2;
                        this.sped = info[2] * this.base_speed;
                        this.maxhp = info[1];
                        this.hp = this.maxhp;
                        this.money = Math.floor(info[3] * Utils_1.default.getRandom(0.8, 1.2));
                        // console.log(this.type == 2?"boss":"e",this.maxhp,this.money,"====")
                        this.node.position = HallScene_1.default.Instance.path[0];
                        this.node.scale = this.type == 0 ? .8 : 1.1;
                        // this.GetGameObject("sp").scaleX = 0.5;
                        if (id == 25) {
                            AudioMgr_1.default.Instance().playSFX("dog");
                        }
                        else if (id == 13) {
                            AudioMgr_1.default.Instance().playSFX("pig");
                        }
                        else {
                            AudioMgr_1.default.Instance().playSFX(Utils_1.default.getRandom(0, 1) < .6 ? "zb1" : "zb2");
                        }
                        skpath = "spine:enemy" + id + "_ske";
                        atlaspath = "spine:enemy" + id + "_tex";
                        armature = this.GetDragonAmature("sp");
                        _a = armature;
                        return [4 /*yield*/, Utils_1.default.loadRes(skpath, dragonBones.DragonBonesAsset)];
                    case 1:
                        _a.dragonAsset = (_c.sent());
                        _b = armature;
                        return [4 /*yield*/, Utils_1.default.loadRes(atlaspath, dragonBones.DragonBonesAtlasAsset)];
                    case 2:
                        _b.dragonAtlasAsset = (_c.sent());
                        armature.armatureName = "Armature";
                        armature.playAnimation('run', 0);
                        this.GetGameObject("New ProgressBar").opacity = 0;
                        return [2 /*return*/];
                }
            });
        });
    };
    Enemy.prototype.hit = function (plantlv) {
        var _this = this;
        if (this.hp <= 0)
            return;
        var info = DB_1.DB_plant[plantlv - 1];
        var skill = String(info[3]).split("|");
        var skilltype = Number(skill[0]);
        var skillvalue = Number(skill[1]);
        var power = Number(info[2]);
        var bbj = false;
        if (Utils_1.default.getRandom(0, 100) < skillvalue) {
            if (skilltype == 1) //减速
             {
                this.slowdown();
            }
            else if (skilltype == 2) //双倍伤害
             {
                power *= 2;
                bbj = true;
            }
            else if (skilltype == 3) //冰冻
             {
                this.frozen();
            }
        }
        this.hp -= power;
        this.hp = Math.max(this.hp, 0);
        this.SetProgressBar("New ProgressBar", this.hp / this.maxhp);
        this.GetGameObject("New ProgressBar").stopAllActions();
        this.GetGameObject("New ProgressBar").opacity = 255;
        this.GetGameObject("New ProgressBar").runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.2, 0)));
        if (bbj) {
            this.showWLBaoji(power, Utils_1.default.getRandom(0, 1) > 0.5);
        }
        else {
            this.showFSHurt(power, Utils_1.default.getRandom(0, 1) > 0.5);
        }
        if (this.hp <= 0) {
            HallScene_1.default.Instance.removeenemy(this.node, false);
            this.GetGameObject("sp").runAction(cc.sequence(cc.delayTime(0.5), cc.fadeTo(.2, 0), cc.callFunc(function () {
                _this.node.removeFromParent(true);
            })));
            if (Data_1.default.user.double_income_time > Utils_1.default.getServerTime()) {
                this.money *= 2;
            }
            //daboss界面加钱
            if (this.type != 2) {
                var node = cc.instantiate(this.getcoin_pre);
                node.parent = this.node.parent;
                node.getChildByName("lbl_add_coin").getComponent(cc.Label).string = Utils_1.default.formatNumber(this.money);
                node.position = this.node.position.add(cc.v3(0, 50, 0));
                node.zIndex = 1000;
                node.scale = 0.5;
                Data_1.default.user.coin += this.money;
                node.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.2, 1.3), cc.moveBy(0.2, 0, 80)), cc.delayTime(.8), cc.spawn(cc.moveBy(0.5, 50), cc.fadeTo(0.5, 50)), cc.removeSelf()));
            }
            // if(this.type == 2)
            //     this.playSkAni("spine/other/death","animation",this.node,cc.v3(0,75,0),0.8)
            // else
            this.playSkAni("spine:other/zhuoshao", "effect", this.node, cc.v3(0, 75, 0), 1).then(function (node) {
                node.scale = 2;
            });
        }
        else {
            // this.GetGameObject("hit").getComponent(cc.Animation).play("hit");
            this.playSkAni("spine:other/jizhong", "animation", this.node, cc.v3(0, 75, 0), 1);
            this.redendtime = Utils_1.default.getServerTime() + 300;
        }
        AudioMgr_1.default.Instance().playSFX("hit");
        // this.GetGameObject("hit").getComponent(cc.Animation).play("hit");
    };
    Enemy.prototype.slowdown = function () {
        var _this = this;
        AudioMgr_1.default.Instance().playSFX("skill_slow");
        // this.GetSkeleton("sp").timeScale = 0.5;
        this.GetDragonAmature('sp').timeScale = 0.5;
        this.GetGameObject("jiansu").active = true;
        this.GetGameObject("sp").stopAllActions();
        this.GetGameObject("sp").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            _this.GetGameObject("sp").color = cc.Color.WHITE;
            // this.GetSkeleton("sp").timeScale = 1;
            _this.GetDragonAmature('sp').timeScale = 1;
            _this.GetGameObject("jiansu").active = false;
        })));
    };
    Enemy.prototype.frozen = function () {
        var _this = this;
        AudioMgr_1.default.Instance().playSFX("skill_freeze");
        this.bfrozen = true;
        this.GetGameObject("fx_stun").stopAllActions();
        this.GetGameObject("fx_stun").active = true;
        this.purpleendtime = Utils_1.default.getServerTime() + 1000;
        // this.GetSkeleton("sp").paused = true;
        this.GetGameObject("fx_stun").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            _this.GetGameObject("fx_stun").active = false;
            // this.GetSkeleton("sp").paused = false;  
            _this.bfrozen = false;
        })));
    };
    Enemy.prototype.update = function (dt) {
        if (dt > 1)
            dt = 1;
        if (this.redendtime > Utils_1.default.getServerTime()) {
            this.GetGameObject("sp").color = cc.Color.RED.fromHEX("#7C82DE");
        }
        else if (this.purpleendtime > Utils_1.default.getServerTime()) {
            this.GetGameObject("sp").color = cc.Color.RED.fromHEX("#ED7373");
        }
        else {
            this.GetGameObject("sp").color = cc.Color.WHITE;
        }
        if (this.bfrozen)
            return;
        if (!HallScene_1.default.Instance.path[this.pathindex])
            return;
        var d = HallScene_1.default.Instance.path[this.pathindex].sub(this.node.position);
        if (d.mag() < this.sped * dt) {
            this.node.position = HallScene_1.default.Instance.path[this.pathindex];
            this.pathindex++;
            if (this.pathindex == 3)
                this.GetGameObject("sp").scaleX = -0.5;
            if (this.pathindex >= HallScene_1.default.Instance.path.length) {
                console.log("逃过");
                HallScene_1.default.Instance.removeenemy(this.node, true);
                this.node.removeFromParent(true);
            }
        }
        else {
            var v = d.normalize().mul(Enemy_1.mul * this.sped * dt);
            this.node.position = this.node.position.add(v);
        }
    };
    Enemy.prototype.showFSHurt = function (num, forward) {
        if (forward === void 0) { forward = false; }
        var node = cc.instantiate(this.GetGameObject("fs_hurt"));
        node.parent = this.node;
        if (forward)
            node.x *= -1;
        node.getComponent(cc.Label).string = Utils_1.default.formatCoin(num);
        node.active = true;
        var bezier;
        if (forward) {
            bezier = [cc.v2(-10, 50), cc.v2(-40, 60), cc.v2(-60, 20)];
        }
        else {
            bezier = [cc.v2(10, 50), cc.v2(40, 60), cc.v2(60, 20)];
        }
        var bezierForward = cc.bezierBy(1, bezier);
        node.runAction(cc.sequence(cc.spawn(
        // cc.fadeTo(1, 0),
        cc.scaleTo(1, 0.6), bezierForward), cc.removeSelf()));
    };
    Enemy.prototype.showWLBaoji = function (num, forward) {
        if (forward === void 0) { forward = false; }
        AudioMgr_1.default.Instance().playSFX("skill_crit");
        var node = cc.instantiate(this.GetGameObject("wl_baoji"));
        node.parent = this.node;
        if (forward)
            node.x *= -1;
        node.getComponent(cc.Label).string = Utils_1.default.formatCoin(num);
        node.active = true;
        node.scale = 0.2;
        var bezier;
        var bezier1;
        if (forward) {
            bezier = [cc.v2(-5, 20), cc.v2(-8, 30), cc.v2(-10, 30)];
            bezier1 = [cc.v2(-5, -20), cc.v2(-8, -30), cc.v2(-10, -30)];
        }
        else {
            bezier = [cc.v2(5, 20), cc.v2(8, 30), cc.v2(10, 30)];
            bezier1 = [cc.v2(5, -20), cc.v2(8, -30), cc.v2(10, -30)];
        }
        var bezierFront = cc.bezierBy(0.2, bezier);
        var bezierBack = cc.bezierBy(0.5, bezier1);
        node.runAction(cc.sequence(cc.spawn(
        // cc.moveBy(0.2, 0, 30),
        cc.scaleTo(0.2, 1), bezierFront), cc.delayTime(0.5), cc.spawn(
        // cc.moveBy(0.2, 0, -30),
        cc.scaleTo(0.5, 0.2), bezierBack, cc.fadeOut(0.5)), cc.removeSelf()));
    };
    var Enemy_1;
    Enemy.mul = 1;
    __decorate([
        property(cc.Prefab)
    ], Enemy.prototype, "getcoin_pre", void 0);
    Enemy = Enemy_1 = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(BaseUI_1.default));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEVuZW15LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQywyQ0FBc0M7QUFDdEMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0Qyw0QkFBNEM7QUFDNUMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFNO0lBQXpDO1FBQUEscUVBaVRDO1FBN1NHLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsV0FBSyxHQUFHLENBQUMsQ0FBQztRQWVWLFVBQUksR0FBRyxDQUFDLENBQUMsQ0FBQSxxQkFBcUI7UUFnS3RDLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFnQlIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVSxHQUFFLEVBQUUsQ0FBRTtRQUVoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFhLEdBQUcsQ0FBQyxDQUFDOztJQXFHOUIsQ0FBQztjQWpUb0IsS0FBSztJQVVmLDRCQUFZLEdBQW5CO1FBRUksSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFDakI7WUFDSSxJQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxFQUN2RDtnQkFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUNuQjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENB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QWxHYSxTQUFHLEdBQUcsQ0FBQyxDQUFDO0lBek10QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNTO0lBSlosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlUekI7SUFBRCxZQUFDO0NBalRELEFBaVRDLENBalRrQyxnQkFBTSxHQWlUeEM7a0JBalRvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IERCX3pvbWJpZSwgREJfcGxhbnQgfSBmcm9tIFwiLi4vREJcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBnZXRjb2luX3ByZTpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbWF4aHAgPSAwXHJcbiAgICBwcml2YXRlIGhwID0gMDtcclxuICAgIHByaXZhdGUgbW9uZXkgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBnZXRCb3NzTW9uZXkoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25leSAqPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5tYXhocCAtIHRoaXMuaHApL3RoaXMubWF4aHAgKiB0aGlzLm1vbmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHR5cGUgPSAwOy8vMCDmma7pgJogMSDlsI9ib3NzIDLlpKdib3NzXHJcbiAgICBhc3luYyBzZXRJRChpZDpudW1iZXIsYm9zczpib29sZWFuKS8v5piv5ZCmYm9zc1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGJvc3M/MTowO1xyXG4gICAgICAgIGxldCBpbmZvID0gREJfem9tYmllW2lkK1wiXCJdO1xyXG4gXHJcbiAgICAgICAgaWYoaWQgPjEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkIC09IDEwMDtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGlkPjUyKVxyXG4gICAgICAgICAgICBpZCA9IFV0aWxzLmdldFJhbmRvbUludCgxLDUyKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYm9zc1wiKS5hY3RpdmUgPSB0aGlzLnR5cGUgPT0gMjtcclxuXHJcbiAgICAgICAgdGhpcy5zcGVkID0gaW5mb1syXSAqIHRoaXMuYmFzZV9zcGVlZDtcclxuICAgICAgICB0aGlzLm1heGhwID0gaW5mb1sxXTtcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5tYXhocDtcclxuICAgICAgICB0aGlzLm1vbmV5ID0gTWF0aC5mbG9vcihpbmZvWzNdICogVXRpbHMuZ2V0UmFuZG9tKDAuOCwxLjIpKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50eXBlID09IDI/XCJib3NzXCI6XCJlXCIsdGhpcy5tYXhocCx0aGlzLm1vbmV5LFwiPT09PVwiKVxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IEhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoWzBdO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMudHlwZT09MD8uODoxLjE7XHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuc2NhbGVYID0gMC41O1xyXG4gICAgICAgIGlmKGlkID09IDI1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiZG9nXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaWQgPT0gMTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJwaWdcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFV0aWxzLmdldFJhbmRvbSgwLDEpPC42PyBcInpiMVwiOlwiemIyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6ZW5lbXkke2lkfV9za2VgO1xyXG4gICAgICAgIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6ZW5lbXkke2lkfV90ZXhgO1xyXG4gICAgICAgIGxldCBhcm1hdHVyZSA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZShcInNwXCIpO1xyXG4gICAgICAgIGFybWF0dXJlLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcclxuICAgICAgICBhcm1hdHVyZS5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgYXJtYXR1cmUuYXJtYXR1cmVOYW1lID0gXCJBcm1hdHVyZVwiO1xyXG4gICAgICAgIGFybWF0dXJlLnBsYXlBbmltYXRpb24oJ3J1bicsMCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICAvLyBsZXQgZmFjdG9yeSA9IGRyYWdvbkJvbmVzLkNDRmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIC8vIGZhY3RvcnkucmVwbGFjZVNraW4oYXJtYXR1cmUuYXJtYXR1cmUoKSwgKGFybWF0dXJlRGlzcGxheTIuYXJtYXR1cmUoKSBhcyBkcmFnb25Cb25lcy5Bcm1hdHVyZSkuYXJtYXR1cmVEYXRhLmRlZmF1bHRTa2luLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8g5Y6f6YC76L6RXHJcbiAgICAgICAgLy8gbGV0IHJlc3BhdGggPSBcInNwaW5lOmVuZW15XCIgKyBpZDtcclxuICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikuc2tlbGV0b25EYXRhID0gYXdhaXQgVXRpbHMubG9hZFJlcyhyZXNwYXRoLHNwLlNrZWxldG9uRGF0YSkgYXMgc3AuU2tlbGV0b25EYXRhO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS5zZXRBbmltYXRpb24oMCxcInJ1blwiLHRydWUpO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBoaXQocGxhbnRsdjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5ocDw9MClyZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBpbmZvID0gREJfcGxhbnRbcGxhbnRsdi0xXTtcclxuXHJcbiAgICAgICAgbGV0IHNraWxsID0gU3RyaW5nKGluZm9bM10pLnNwbGl0KFwifFwiKTtcclxuICAgICAgICBsZXQgc2tpbGx0eXBlID0gTnVtYmVyKHNraWxsWzBdKTtcclxuICAgICAgICBsZXQgc2tpbGx2YWx1ZSA9IE51bWJlcihza2lsbFsxXSk7XHJcbiAgICAgICAgbGV0IHBvd2VyID0gTnVtYmVyKGluZm9bMl0pXHJcblxyXG4gICAgICAgIGxldCBiYmogPSBmYWxzZTtcclxuICAgICAgICBpZihVdGlscy5nZXRSYW5kb20oMCwxMDApIDwgc2tpbGx2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHNraWxsdHlwZSA9PSAxKS8v5YeP6YCfXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xvd2Rvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAyKS8v5Y+M5YCN5Lyk5a6zXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvd2VyKj0yO1xyXG4gICAgICAgICAgICAgICAgYmJqID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PTMpLy/lhrDlhrtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuaHAgLT0gcG93ZXI7XHJcbiAgICAgICAgdGhpcy5ocCA9IE1hdGgubWF4KHRoaXMuaHAsMClcclxuXHJcbiAgICAgICAgdGhpcy5TZXRQcm9ncmVzc0JhcihcIk5ldyBQcm9ncmVzc0JhclwiLHRoaXMuaHAvdGhpcy5tYXhocCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksY2MuZmFkZVRvKDAuMiwwKSkpXHJcblxyXG4gICAgICAgaWYoYmJqKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dXTEJhb2ppKHBvd2VyLFV0aWxzLmdldFJhbmRvbSgwLDEpPjAuNSk7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZTSHVydChwb3dlcixVdGlscy5nZXRSYW5kb20oMCwxKT4wLjUpO1xyXG4gICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaHA8PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UucmVtb3ZlZW5lbXkodGhpcy5ub2RlLGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmZhZGVUbyguMiwwKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgaWYoRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25leSAqPSAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2RhYm9zc+eVjOmdouWKoOmSsVxyXG4gICAgICAgICAgICBpZih0aGlzLnR5cGUgIT0gMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdldGNvaW5fcHJlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfYWRkX2NvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MygwLDUwLDApKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuekluZGV4ID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAwLjVcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5jb2luKz10aGlzLm1vbmV5O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2Muc2NhbGVUbygwLjIsMS4zKSxjYy5tb3ZlQnkoMC4yLDAsODApKSxjYy5kZWxheVRpbWUoLjgpLGNjLnNwYXduKGNjLm1vdmVCeSgwLjUsNTApLGNjLmZhZGVUbygwLjUsNTApKSxjYy5yZW1vdmVTZWxmKCkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYodGhpcy50eXBlID09IDIpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXlTa0FuaShcInNwaW5lL290aGVyL2RlYXRoXCIsXCJhbmltYXRpb25cIix0aGlzLm5vZGUsY2MudjMoMCw3NSwwKSwwLjgpXHJcbiAgICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVNrQW5pKFwic3BpbmU6b3RoZXIvemh1b3NoYW9cIixcImVmZmVjdFwiLHRoaXMubm9kZSxjYy52MygwLDc1LDApLDEpLnRoZW4oKG5vZGUpPT57XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0yIDtcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImhpdFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaGl0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTa0FuaShcInNwaW5lOm90aGVyL2ppemhvbmdcIixcImFuaW1hdGlvblwiLHRoaXMubm9kZSxjYy52MygwLDc1LDApLDEpXHJcbiAgICAgICAgICAgIHRoaXMucmVkZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKSArIDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiaGl0XCIpXHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGl0XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJoaXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2xvd2Rvd24oKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcInNraWxsX3Nsb3dcIilcclxuICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikudGltZVNjYWxlID0gMC41O1xyXG4gICAgICAgIHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnc3AnKS50aW1lU2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiamlhbnN1XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ3NwJykudGltZVNjYWxlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiamlhbnN1XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pKSlcclxuICAgIH1cclxuXHJcbiAgICBiZnJvemVuID0gZmFsc2U7XHJcbiAgICBmcm96ZW4oKVxyXG4gICAge1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcInNraWxsX2ZyZWV6ZVwiKVxyXG4gICAgICAgIHRoaXMuYmZyb3plbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc3R1blwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnB1cnBsZWVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgKyAxMDAwO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zdHVuXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikucGF1c2VkID0gZmFsc2U7ICBcclxuICAgICAgICAgICAgdGhpcy5iZnJvemVuID0gZmFsc2U7XHJcbiAgICAgICAgfSkpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGF0aGluZGV4ID0gMTtcclxuICAgIHByaXZhdGUgc3BlZCA9IDE7XHJcbiAgICBwcml2YXRlIGJhc2Vfc3BlZWQgPTUwIDtcclxuXHJcbiAgICBwcml2YXRlIHJlZGVuZHRpbWUgPSAwO1xyXG4gICAgcHJpdmF0ZSBwdXJwbGVlbmR0aW1lID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsID0gMTtcclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZihkdD4xKWR0PTE7XHJcbiAgICAgICAgaWYodGhpcy5yZWRlbmR0aW1lPlV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoXCIjN0M4MkRFXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5wdXJwbGVlbmR0aW1lPlV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoXCIjRUQ3MzczXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID1jYy5Db2xvci5XSElURVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5iZnJvemVuKXJldHVybjtcclxuICAgICAgICBpZighSGFsbFNjZW5lLkluc3RhbmNlLnBhdGhbdGhpcy5wYXRoaW5kZXhdKXJldHVybjtcclxuICAgICAgICBsZXQgZCA9IEhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoW3RoaXMucGF0aGluZGV4XS5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBpZihkLm1hZygpIDwgdGhpcy5zcGVkICogZHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPUhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoW3RoaXMucGF0aGluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5wYXRoaW5kZXgrKztcclxuICAgICAgICAgICAgaWYodGhpcy5wYXRoaW5kZXggPT0gMylcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnNjYWxlWD0gLTAuNTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMucGF0aGluZGV4Pj1IYWxsU2NlbmUuSW5zdGFuY2UucGF0aC5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YCD6L+HXCIpXHJcbiAgICAgICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UucmVtb3ZlZW5lbXkodGhpcy5ub2RlLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9IGQubm9ybWFsaXplKCkubXVsKEVuZW15Lm11bCAqICAgdGhpcy5zcGVkICogZHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPXRoaXMubm9kZS5wb3NpdGlvbi5hZGQodik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dGU0h1cnQobnVtOiBudW1iZXIsIGZvcndhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5HZXRHYW1lT2JqZWN0KFwiZnNfaHVydFwiKSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIG5vZGUueCAqPSAtMTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q29pbihudW0pO1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgYmV6aWVyO1xyXG4gICAgICAgIGlmIChmb3J3YXJkKSB7XHJcbiAgICAgICAgICAgIGJlemllciA9IFtjYy52MigtMTAsIDUwKSwgY2MudjIoLTQwLCA2MCksIGNjLnYyKC02MCwgMjApXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiZXppZXIgPSBbY2MudjIoMTAsIDUwKSwgY2MudjIoNDAsIDYwKSwgY2MudjIoNjAsIDIwKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiZXppZXJGb3J3YXJkID0gY2MuYmV6aWVyQnkoMSwgYmV6aWVyKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5mYWRlVG8oMSwgMCksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDEsIDAuNiksXHJcbiAgICAgICAgICAgICAgICBiZXppZXJGb3J3YXJkXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLnJlbW92ZVNlbGYoKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXTEJhb2ppKG51bTogbnVtYmVyLCBmb3J3YXJkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJza2lsbF9jcml0XCIpXHJcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkdldEdhbWVPYmplY3QoXCJ3bF9iYW9qaVwiKSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIG5vZGUueCAqPSAtMTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q29pbihudW0pO1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC4yO1xyXG4gICAgICAgIHZhciBiZXppZXI7XHJcbiAgICAgICAgdmFyIGJlemllcjE7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIHtcclxuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKC01LCAyMCksIGNjLnYyKC04LCAzMCksIGNjLnYyKC0xMCwgMzApXTtcclxuICAgICAgICAgICAgYmV6aWVyMSA9IFtjYy52MigtNSwgLTIwKSwgY2MudjIoLTgsIC0zMCksIGNjLnYyKC0xMCwgLTMwKV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKDUsIDIwKSwgY2MudjIoOCwgMzApLCBjYy52MigxMCwgMzApXTtcclxuICAgICAgICAgICAgYmV6aWVyMSA9IFtjYy52Mig1LCAtMjApLCBjYy52Mig4LCAtMzApLCBjYy52MigxMCwgLTMwKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiZXppZXJGcm9udCA9IGNjLmJlemllckJ5KDAuMiwgYmV6aWVyKTtcclxuICAgICAgICB2YXIgYmV6aWVyQmFjayA9IGNjLmJlemllckJ5KDAuNSwgYmV6aWVyMSk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KDAuMiwgMCwgMzApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDEpLFxyXG4gICAgICAgICAgICAgICAgYmV6aWVyRnJvbnRcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuNSksXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KDAuMiwgMCwgLTMwKSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC41LCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgYmV6aWVyQmFjayxcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC41KSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2MucmVtb3ZlU2VsZigpXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=