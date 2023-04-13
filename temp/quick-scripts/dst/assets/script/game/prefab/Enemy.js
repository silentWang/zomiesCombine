
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
var ChickData_1 = require("../../manager/ChickData");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var Config_1 = require("../Config");
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
            if (ChickData_1.default.user.double_income_time > Utils_1.default.getServerTime()) {
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
                        info = Config_1.Config_animals[id + ""];
                        if (id > 100) {
                            id -= 100;
                            this.type = 2;
                        }
                        if (id > 52)
                            id = Utils_1.default.getRandomInt(1, 52);
                        // this.GetGameObject("boss").active = this.type == 2;
                        this.GetGameObject('sp').scale = this.type == 2 ? 1 : 0.74;
                        this.sped = info[2] * this.base_speed;
                        this.maxhp = info[1];
                        this.hp = this.maxhp;
                        this.money = Math.floor(info[3] * Utils_1.default.getRandom(0.8, 1.2));
                        this.node.position = HallScene_1.default.Instance.path[0];
                        this.node.scale = this.type == 0 ? .8 : 1;
                        AudioMgr_1.default.Instance().playMX('chuxian');
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
    Enemy.prototype.hit = function (plantlv, skilltype) {
        var _this = this;
        if (this.hp <= 0)
            return;
        var info = Config_1.Config_chick[plantlv - 1];
        var power = Number(info[2]);
        var bbj = false;
        var isskill = false;
        if (skilltype == 1) {
            //减速
            this.slowdown();
            isskill = true;
        }
        else if (skilltype == 2) {
            //双倍伤害
            power *= 2;
            bbj = true;
            isskill = true;
        }
        else if (skilltype == 3) {
            //冰冻
            isskill = true;
            this.frozen();
        }
        this.hp -= power;
        this.hp = Math.max(this.hp, 0);
        this.SetProgressBar("New ProgressBar", this.hp / this.maxhp);
        this.GetGameObject("New ProgressBar").stopAllActions();
        this.GetGameObject("New ProgressBar").opacity = 255;
        this.GetGameObject("New ProgressBar").runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.2, 0)));
        if (!isskill)
            AudioMgr_1.default.Instance().playMX('hit');
        if (bbj) {
            this.showBJ(power, Utils_1.default.getRandom(0, 1) > 0.5);
        }
        else {
            this.showHurt(power, Utils_1.default.getRandom(0, 1) > 0.5);
        }
        if (this.hp <= 0) {
            HallScene_1.default.Instance.enemyDie(this.node, false);
            this.GetGameObject("sp").runAction(cc.sequence(cc.delayTime(0.5), cc.fadeTo(.2, 0), cc.callFunc(function () {
                _this.node.removeFromParent(true);
            })));
            if (ChickData_1.default.user.double_income_time > Utils_1.default.getServerTime()) {
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
                ChickData_1.default.user.coin += this.money;
                node.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.2, 1.3), cc.moveBy(0.2, 0, 80)), cc.delayTime(.8), cc.spawn(cc.moveBy(0.5, 50), cc.fadeTo(0.5, 50)), cc.removeSelf()));
            }
            // if(this.type == 2)
            //     this.playSkAni("spine/other/death","animation",this.node,cc.v3(0,75,0),0.8)
            // else
            this.playSkeAni("spine:other/zhuoshao", "effect", this.node, cc.v3(0, 75, 0), 1).then(function (node) {
                node.scale = 2;
            });
        }
        else {
            // this.GetGameObject("hit").getComponent(cc.Animation).play("hit");
            this.playSkeAni("spine:other/jizhong", "animation", this.node, cc.v3(0, 75, 0), 1);
            this.redendtime = Utils_1.default.getServerTime() + 300;
        }
        // this.GetGameObject("hit").getComponent(cc.Animation).play("hit");
    };
    Enemy.prototype.slowdown = function () {
        var _this = this;
        AudioMgr_1.default.Instance().playMX("skill_slow");
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
        AudioMgr_1.default.Instance().playMX("skill_freeze");
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
                this.GetGameObject("sp").scaleX = -0.74;
            if (this.pathindex >= HallScene_1.default.Instance.path.length) {
                HallScene_1.default.Instance.enemyDie(this.node, true);
                this.node.removeFromParent(true);
            }
        }
        else {
            var v = d.normalize().mul(Enemy_1.mul * this.sped * dt);
            this.node.position = this.node.position.add(v);
        }
    };
    Enemy.prototype.showHurt = function (num, forward) {
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
    Enemy.prototype.showBJ = function (num, forward) {
        if (forward === void 0) { forward = false; }
        AudioMgr_1.default.Instance().playMX("skill_crit");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvRW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHFEQUFnRDtBQUNoRCxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLG9DQUF5RDtBQUN6RCwwQ0FBcUM7QUFHL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQU07SUFBekM7UUFBQSxxRUE2UUM7UUF6UUcsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNULFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBZVYsVUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFBLHFCQUFxQjtRQTZIdEMsYUFBTyxHQUFHLEtBQUssQ0FBQztRQWdCUixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULGdCQUFVLEdBQUUsRUFBRSxDQUFFO1FBRWhCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsbUJBQWEsR0FBRyxDQUFDLENBQUM7O0lBb0c5QixDQUFDO2NBN1FvQixLQUFLO0lBVWYsNEJBQVksR0FBbkI7UUFFSSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUNqQjtZQUNJLElBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxFQUM1RDtnQkFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUNuQjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMs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LENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDdEIsRUFBRSxDQUFDLEtBQUs7UUFDSix5QkFBeUI7UUFDekIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQ2xCLFdBQVcsQ0FDZCxFQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEVBQUUsQ0FBQyxLQUFLO1FBQ0osMEJBQTBCO1FBQzFCLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNwQixVQUFVLEVBQ1YsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDbEIsRUFDRCxFQUFFLENBQUMsVUFBVSxFQUFFLENBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBakdhLFNBQUcsR0FBRyxDQUFDLENBQUM7SUF0S3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1M7SUFKWixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNlF6QjtJQUFELFlBQUM7Q0E3UUQsQUE2UUMsQ0E3UWtDLGdCQUFNLEdBNlF4QztrQkE3UW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgeyBDb25maWdfYW5pbWFscywgQ29uZmlnX2NoaWNrIH0gZnJvbSBcIi4uL0NvbmZpZ1wiO1xuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIEJhc2VVSSB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2V0Y29pbl9wcmU6Y2MuUHJlZmFiID0gbnVsbDtcblxuICAgIHByaXZhdGUgbWF4aHAgPSAwXG4gICAgcHJpdmF0ZSBocCA9IDA7XG4gICAgcHJpdmF0ZSBtb25leSA9IDA7XG5cbiAgICBwdWJsaWMgZ2V0Qm9zc01vbmV5KClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25leSAqPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLm1heGhwIC0gdGhpcy5ocCkvdGhpcy5tYXhocCAqIHRoaXMubW9uZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0eXBlID0gMDsvLzAg5pmu6YCaIDEg5bCPYm9zcyAy5aSnYm9zc1xuICAgIGFzeW5jIHNldElEKGlkOm51bWJlcixib3NzOmJvb2xlYW4pLy/mmK/lkKZib3NzXG4gICAge1xuICAgICAgICB0aGlzLnR5cGUgPSBib3NzID8gMTowO1xuICAgICAgICBsZXQgaW5mbyA9IENvbmZpZ19hbmltYWxzW2lkK1wiXCJdO1xuICAgICAgICBpZihpZCA+IDEwMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWQgLT0gMTAwO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlkID4gNTIpIGlkID0gVXRpbHMuZ2V0UmFuZG9tSW50KDEsNTIpO1xuXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJvc3NcIikuYWN0aXZlID0gdGhpcy50eXBlID09IDI7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnc3AnKS5zY2FsZSA9IHRoaXMudHlwZSA9PSAyID8gMSA6IDAuNzQ7XG4gICAgICAgIHRoaXMuc3BlZCA9IGluZm9bMl0gKiB0aGlzLmJhc2Vfc3BlZWQ7XG4gICAgICAgIHRoaXMubWF4aHAgPSBpbmZvWzFdO1xuICAgICAgICB0aGlzLmhwID0gdGhpcy5tYXhocDtcbiAgICAgICAgdGhpcy5tb25leSA9IE1hdGguZmxvb3IoaW5mb1szXSAqIFV0aWxzLmdldFJhbmRvbSgwLjgsMS4yKSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gSGFsbFNjZW5lLkluc3RhbmNlLnBhdGhbMF07XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMudHlwZSA9PSAwID8gLjggOiAxO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWCgnY2h1eGlhbicpXG4gICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6ZW5lbXkke2lkfV9za2VgO1xuICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmVuZW15JHtpZH1fdGV4YDtcbiAgICAgICAgbGV0IGFybWF0dXJlID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKFwic3BcIik7XG4gICAgICAgIGFybWF0dXJlLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcbiAgICAgICAgYXJtYXR1cmUuZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xuICAgICAgICBhcm1hdHVyZS5hcm1hdHVyZU5hbWUgPSBcIkFybWF0dXJlXCI7XG4gICAgICAgIGFybWF0dXJlLnBsYXlBbmltYXRpb24oJ3J1bicsMCk7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5vcGFjaXR5ID0gMDtcbiAgICB9XG5cbiAgICBoaXQocGxhbnRsdjpudW1iZXIsc2tpbGx0eXBlOm51bWJlcilcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuaHAgPD0gMClyZXR1cm47XG4gICAgICAgIGxldCBpbmZvID0gQ29uZmlnX2NoaWNrW3BsYW50bHYtMV07XG4gICAgICAgIGxldCBwb3dlciA9IE51bWJlcihpbmZvWzJdKVxuICAgICAgICBsZXQgYmJqID0gZmFsc2U7XG4gICAgICAgIGxldCBpc3NraWxsID0gZmFsc2U7XG4gICAgICAgIGlmKHNraWxsdHlwZSA9PSAxKXtcbiAgICAgICAgICAgIC8v5YeP6YCfXG4gICAgICAgICAgICB0aGlzLnNsb3dkb3duKCk7XG4gICAgICAgICAgICBpc3NraWxsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAyKXtcbiAgICAgICAgICAgIC8v5Y+M5YCN5Lyk5a6zXG4gICAgICAgICAgICBwb3dlciAqPSAyO1xuICAgICAgICAgICAgYmJqID0gdHJ1ZTtcbiAgICAgICAgICAgIGlzc2tpbGwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDMpe1xuICAgICAgICAgICAgLy/lhrDlhrtcbiAgICAgICAgICAgIGlzc2tpbGwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mcm96ZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5ocCAtPSBwb3dlcjtcbiAgICAgICAgdGhpcy5ocCA9IE1hdGgubWF4KHRoaXMuaHAsMClcbiAgICAgICAgdGhpcy5TZXRQcm9ncmVzc0JhcihcIk5ldyBQcm9ncmVzc0JhclwiLHRoaXMuaHAvdGhpcy5tYXhocCk7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJOZXcgUHJvZ3Jlc3NCYXJcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksY2MuZmFkZVRvKDAuMiwwKSkpXG4gICAgICAgIGlmKCFpc3NraWxsKSBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWCgnaGl0Jyk7XG4gICAgICAgIGlmKGJiail7XG4gICAgICAgICAgICB0aGlzLnNob3dCSihwb3dlcixVdGlscy5nZXRSYW5kb20oMCwxKT4wLjUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLnNob3dIdXJ0KHBvd2VyLFV0aWxzLmdldFJhbmRvbSgwLDEpPjAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5ocCA8PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UuZW5lbXlEaWUodGhpcy5ub2RlLGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5mYWRlVG8oLjIsMCksY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgIH0pKSlcbiAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5ICo9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZGFib3Nz55WM6Z2i5Yqg6ZKxXG4gICAgICAgICAgICBpZih0aGlzLnR5cGUgIT0gMilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2V0Y29pbl9wcmUpO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwibGJsX2FkZF9jb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsNTAsMCkpO1xuICAgICAgICAgICAgICAgIG5vZGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gMC41XG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbis9dGhpcy5tb25leTtcbiAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5zY2FsZVRvKDAuMiwxLjMpLGNjLm1vdmVCeSgwLjIsMCw4MCkpLGNjLmRlbGF5VGltZSguOCksY2Muc3Bhd24oY2MubW92ZUJ5KDAuNSw1MCksY2MuZmFkZVRvKDAuNSw1MCkpLGNjLnJlbW92ZVNlbGYoKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZih0aGlzLnR5cGUgPT0gMilcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXlTa0FuaShcInNwaW5lL290aGVyL2RlYXRoXCIsXCJhbmltYXRpb25cIix0aGlzLm5vZGUsY2MudjMoMCw3NSwwKSwwLjgpXG4gICAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICB0aGlzLnBsYXlTa2VBbmkoXCJzcGluZTpvdGhlci96aHVvc2hhb1wiLFwiZWZmZWN0XCIsdGhpcy5ub2RlLGNjLnYzKDAsNzUsMCksMSkudGhlbigobm9kZSk9PntcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0yIDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGl0XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJoaXRcIik7XG4gICAgICAgICAgICB0aGlzLnBsYXlTa2VBbmkoXCJzcGluZTpvdGhlci9qaXpob25nXCIsXCJhbmltYXRpb25cIix0aGlzLm5vZGUsY2MudjMoMCw3NSwwKSwxKVxuICAgICAgICAgICAgdGhpcy5yZWRlbmR0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpICsgMzAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImhpdFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaGl0XCIpO1xuICAgIH1cblxuICAgIHNsb3dkb3duKClcbiAgICB7XG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwic2tpbGxfc2xvd1wiKVxuICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikudGltZVNjYWxlID0gMC41O1xuICAgICAgICB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ3NwJykudGltZVNjYWxlID0gMC41O1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJqaWFuc3VcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS50aW1lU2NhbGUgPSAxO1xuICAgICAgICAgICAgdGhpcy5HZXREcmFnb25BbWF0dXJlKCdzcCcpLnRpbWVTY2FsZSA9IDE7XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJqaWFuc3VcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pKSlcbiAgICB9XG5cbiAgICBiZnJvemVuID0gZmFsc2U7XG4gICAgZnJvemVuKClcbiAgICB7XG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwic2tpbGxfZnJlZXplXCIpXG4gICAgICAgIHRoaXMuYmZyb3plbiA9IHRydWU7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc3R1blwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnB1cnBsZWVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgKyAxMDAwO1xuICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc3R1blwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zdHVuXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcInNwXCIpLnBhdXNlZCA9IGZhbHNlOyAgXG4gICAgICAgICAgICB0aGlzLmJmcm96ZW4gPSBmYWxzZTtcbiAgICAgICAgfSkpKVxuICAgIH1cblxuICAgIHByaXZhdGUgcGF0aGluZGV4ID0gMTtcbiAgICBwcml2YXRlIHNwZWQgPSAxO1xuICAgIHByaXZhdGUgYmFzZV9zcGVlZCA9NTAgO1xuXG4gICAgcHJpdmF0ZSByZWRlbmR0aW1lID0gMDtcbiAgICBwcml2YXRlIHB1cnBsZWVuZHRpbWUgPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgbXVsID0gMTtcbiAgICB1cGRhdGUoZHQpXG4gICAge1xuICAgICAgICBpZihkdD4xKWR0PTE7XG4gICAgICAgIGlmKHRoaXMucmVkZW5kdGltZT5VdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoXCIjN0M4MkRFXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnB1cnBsZWVuZHRpbWU+VXRpbHMuZ2V0U2VydmVyVGltZSgpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5jb2xvciA9IGNjLkNvbG9yLlJFRC5mcm9tSEVYKFwiI0VENzM3M1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuY29sb3IgPWNjLkNvbG9yLldISVRFXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmJmcm96ZW4pcmV0dXJuO1xuICAgICAgICBpZighSGFsbFNjZW5lLkluc3RhbmNlLnBhdGhbdGhpcy5wYXRoaW5kZXhdKXJldHVybjtcbiAgICAgICAgbGV0IGQgPSBIYWxsU2NlbmUuSW5zdGFuY2UucGF0aFt0aGlzLnBhdGhpbmRleF0uc3ViKHRoaXMubm9kZS5wb3NpdGlvbik7XG4gICAgICAgIGlmKGQubWFnKCkgPCB0aGlzLnNwZWQgKiBkdClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID1IYWxsU2NlbmUuSW5zdGFuY2UucGF0aFt0aGlzLnBhdGhpbmRleF07XG4gICAgICAgICAgICB0aGlzLnBhdGhpbmRleCsrO1xuICAgICAgICAgICAgaWYodGhpcy5wYXRoaW5kZXggPT0gMylcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5zY2FsZVggPSAtMC43NDtcblxuICAgICAgICAgICAgaWYodGhpcy5wYXRoaW5kZXg+PUhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoLmxlbmd0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UuZW5lbXlEaWUodGhpcy5ub2RlLHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdiA9IGQubm9ybWFsaXplKCkubXVsKEVuZW15Lm11bCAqICAgdGhpcy5zcGVkICogZHQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID10aGlzLm5vZGUucG9zaXRpb24uYWRkKHYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0h1cnQobnVtOiBudW1iZXIsIGZvcndhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuR2V0R2FtZU9iamVjdChcImZzX2h1cnRcIikpO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgaWYgKGZvcndhcmQpIG5vZGUueCAqPSAtMTtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdENvaW4obnVtKTtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB2YXIgYmV6aWVyO1xuICAgICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKC0xMCwgNTApLCBjYy52MigtNDAsIDYwKSwgY2MudjIoLTYwLCAyMCldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKDEwLCA1MCksIGNjLnYyKDQwLCA2MCksIGNjLnYyKDYwLCAyMCldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiZXppZXJGb3J3YXJkID0gY2MuYmV6aWVyQnkoMSwgYmV6aWVyKTtcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAvLyBjYy5mYWRlVG8oMSwgMCksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAwLjYpLFxuICAgICAgICAgICAgICAgIGJlemllckZvcndhcmRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYy5yZW1vdmVTZWxmKClcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgc2hvd0JKKG51bTogbnVtYmVyLCBmb3J3YXJkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJza2lsbF9jcml0XCIpXG4gICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5HZXRHYW1lT2JqZWN0KFwid2xfYmFvamlcIikpO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgaWYgKGZvcndhcmQpIG5vZGUueCAqPSAtMTtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdENvaW4obnVtKTtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLnNjYWxlID0gMC4yO1xuICAgICAgICB2YXIgYmV6aWVyO1xuICAgICAgICB2YXIgYmV6aWVyMTtcbiAgICAgICAgaWYgKGZvcndhcmQpIHtcbiAgICAgICAgICAgIGJlemllciA9IFtjYy52MigtNSwgMjApLCBjYy52MigtOCwgMzApLCBjYy52MigtMTAsIDMwKV07XG4gICAgICAgICAgICBiZXppZXIxID0gW2NjLnYyKC01LCAtMjApLCBjYy52MigtOCwgLTMwKSwgY2MudjIoLTEwLCAtMzApXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJlemllciA9IFtjYy52Mig1LCAyMCksIGNjLnYyKDgsIDMwKSwgY2MudjIoMTAsIDMwKV07XG4gICAgICAgICAgICBiZXppZXIxID0gW2NjLnYyKDUsIC0yMCksIGNjLnYyKDgsIC0zMCksIGNjLnYyKDEwLCAtMzApXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmV6aWVyRnJvbnQgPSBjYy5iZXppZXJCeSgwLjIsIGJlemllcik7XG4gICAgICAgIHZhciBiZXppZXJCYWNrID0gY2MuYmV6aWVyQnkoMC41LCBiZXppZXIxKTtcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAvLyBjYy5tb3ZlQnkoMC4yLCAwLCAzMCksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDEpLFxuICAgICAgICAgICAgICAgIGJlemllckZyb250XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuNSksXG4gICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAvLyBjYy5tb3ZlQnkoMC4yLCAwLCAtMzApLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC41LCAwLjIpLFxuICAgICAgICAgICAgICAgIGJlemllckJhY2ssXG4gICAgICAgICAgICAgICAgY2MuZmFkZU91dCgwLjUpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNjLnJlbW92ZVNlbGYoKVxuICAgICAgICApKTtcbiAgICB9XG4gICAgXG59XG4iXX0=