
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
        if (window && window['xxxxx'])
            window['xxxxx']("aHADP3AZFStniFm5CaTQ4ZZKD");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("GCsyZmDR");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("3JiRbw352hnQ7FDmarf");
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
            if (window && window['xxxxx'])
                window['xxxxx']("trDGiD8kCjPty7nYF5");
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
        if (window && window['xxxxx'])
            window['xxxxx']("CnP2FYK3fZjajrcdEZRe");
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
            if (window && window['xxxxx'])
                window['xxxxx']("XNwCJjGMaRQKMNP");
            this.GetGameObject("sp").runAction(cc.sequence(cc.delayTime(0.5), cc.fadeTo(.2, 0), cc.callFunc(function () {
                _this.node.removeFromParent(true);
            })));
            if (ChickData_1.default.user.double_income_time > Utils_1.default.getServerTime()) {
                this.money *= 2;
            }
            //daboss界面加钱
            if (this.type != 2) {
                if (window && window['xxxxx'])
                    window['xxxxx']("cKN");
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
        if (window && window['xxxxx'])
            window['xxxxx']("sWPA2xEhiH8");
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
        if (window && window['xxxxx'])
            window['xxxxx']("mhNZcpD2dfTJK");
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
            if (window && window['xxxxx'])
                window['xxxxx']("PTw32TyhaeZtjyjW3FJ7kRXFjyB");
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
        if (window && window['xxxxx'])
            window['xxxxx']("aChcC5HmTyY3D56zw");
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
        if (window && window['xxxxx'])
            window['xxxxx']("mA23Ppek68DcMrPddYS6sfyMEhZjEPhc");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvRW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHFEQUFnRDtBQUNoRCxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLG9DQUF5RDtBQUN6RCwwQ0FBcUM7QUFHL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQU07SUFBekM7UUFBQSxxRUF5UkM7UUFyUkcsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNULFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBZ0JWLFVBQUksR0FBRyxDQUFDLENBQUMsQ0FBQSxxQkFBcUI7UUFvSXRDLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFpQlIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVSxHQUFFLEVBQUUsQ0FBRTtRQUVoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFhLEdBQUcsQ0FBQyxDQUFDOztJQXVHOUIsQ0FBQztjQXpSb0IsS0FBSztJQVVmLDRCQUFZLEdBQW5CO1FBRUksSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzNFLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQ2pCO1lBQ0ksSUFBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEVBQzVEO2dCQUNJLElBQUksQ0FBQyxLQUFLLElB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SSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgQ29uZmlnX2FuaW1hbHMsIENvbmZpZ19jaGljayB9IGZyb20gXCIuLi9Db25maWdcIjtcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4uL0hhbGxTY2VuZVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBCYXNlVUkge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdldGNvaW5fcHJlOmNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1heGhwID0gMFxuICAgIHByaXZhdGUgaHAgPSAwO1xuICAgIHByaXZhdGUgbW9uZXkgPSAwO1xuXG4gICAgcHVibGljIGdldEJvc3NNb25leSgpXG4gICAge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJhSEFEUDNBWkZTdG5pRm01Q2FUUTRaWktEXCIpO1xuICAgICAgICBpZih0aGlzLnR5cGUgPT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMubW9uZXkgKj0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAodGhpcy5tYXhocCAtIHRoaXMuaHApL3RoaXMubWF4aHAgKiB0aGlzLm1vbmV5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHlwZSA9IDA7Ly8wIOaZrumAmiAxIOWwj2Jvc3MgMuWkp2Jvc3NcbiAgICBhc3luYyBzZXRJRChpZDpudW1iZXIsYm9zczpib29sZWFuKS8v5piv5ZCmYm9zc1xuICAgIHtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiR0NzeVptRFJcIik7XG4gICAgICAgIHRoaXMudHlwZSA9IGJvc3MgPyAxOjA7XG4gICAgICAgIGxldCBpbmZvID0gQ29uZmlnX2FuaW1hbHNbaWQrXCJcIl07XG4gICAgICAgIGlmKGlkID4gMTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZCAtPSAxMDA7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaWQgPiA1MikgaWQgPSBVdGlscy5nZXRSYW5kb21JbnQoMSw1Mik7XG5cbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYm9zc1wiKS5hY3RpdmUgPSB0aGlzLnR5cGUgPT0gMjtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdzcCcpLnNjYWxlID0gdGhpcy50eXBlID09IDIgPyAxIDogMC43NDtcbiAgICAgICAgdGhpcy5zcGVkID0gaW5mb1syXSAqIHRoaXMuYmFzZV9zcGVlZDtcbiAgICAgICAgdGhpcy5tYXhocCA9IGluZm9bMV07XG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLm1heGhwO1xuICAgICAgICB0aGlzLm1vbmV5ID0gTWF0aC5mbG9vcihpbmZvWzNdICogVXRpbHMuZ2V0UmFuZG9tKDAuOCwxLjIpKTtcblxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBIYWxsU2NlbmUuSW5zdGFuY2UucGF0aFswXTtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gdGhpcy50eXBlID09IDAgPyAuOCA6IDE7XG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKCdjaHV4aWFuJylcbiAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTplbmVteSR7aWR9X3NrZWA7XG4gICAgICAgIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6ZW5lbXkke2lkfV90ZXhgO1xuICAgICAgICBsZXQgYXJtYXR1cmUgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoXCJzcFwiKTtcbiAgICAgICAgYXJtYXR1cmUuZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIzSmlSYnczNTJoblE3RkRtYXJmXCIpO1xuICAgICAgICBhcm1hdHVyZS5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XG4gICAgICAgIGFybWF0dXJlLmFybWF0dXJlTmFtZSA9IFwiQXJtYXR1cmVcIjtcbiAgICAgICAgYXJtYXR1cmUucGxheUFuaW1hdGlvbigncnVuJywwKTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLm9wYWNpdHkgPSAwO1xuICAgIH1cblxuICAgIGhpdChwbGFudGx2Om51bWJlcixza2lsbHR5cGU6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5ocCA8PSAwKXJldHVybjtcbiAgICAgICAgbGV0IGluZm8gPSBDb25maWdfY2hpY2tbcGxhbnRsdi0xXTtcbiAgICAgICAgbGV0IHBvd2VyID0gTnVtYmVyKGluZm9bMl0pXG4gICAgICAgIGxldCBiYmogPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzc2tpbGwgPSBmYWxzZTtcbiAgICAgICAgaWYoc2tpbGx0eXBlID09IDEpe1xuICAgICAgICAgICAgLy/lh4/pgJ9cbiAgICAgICAgICAgIHRoaXMuc2xvd2Rvd24oKTtcbiAgICAgICAgICAgIGlzc2tpbGwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDIpe1xuICAgICAgICAgICAgLy/lj4zlgI3kvKTlrrNcbiAgICAgICAgICAgIHBvd2VyICo9IDI7XG4gICAgICAgICAgICBiYmogPSB0cnVlO1xuICAgICAgICAgICAgaXNza2lsbCA9IHRydWU7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ0ckRHaUQ4a0NqUHR5N25ZRjVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihza2lsbHR5cGUgPT0gMyl7XG4gICAgICAgICAgICAvL+WGsOWGu1xuICAgICAgICAgICAgaXNza2lsbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZyb3plbigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmhwIC09IHBvd2VyO1xuICAgICAgICB0aGlzLmhwID0gTWF0aC5tYXgodGhpcy5ocCwwKVxuICAgICAgICB0aGlzLlNldFByb2dyZXNzQmFyKFwiTmV3IFByb2dyZXNzQmFyXCIsdGhpcy5ocC90aGlzLm1heGhwKTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJOZXcgUHJvZ3Jlc3NCYXJcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxjYy5mYWRlVG8oMC4yLDApKSlcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQ25QMkZZSzNmWmphanJjZEVaUmVcIik7XG4gICAgICAgIGlmKCFpc3NraWxsKSBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWCgnaGl0Jyk7XG4gICAgICAgIGlmKGJiail7XG4gICAgICAgICAgICB0aGlzLnNob3dCSihwb3dlcixVdGlscy5nZXRSYW5kb20oMCwxKT4wLjUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLnNob3dIdXJ0KHBvd2VyLFV0aWxzLmdldFJhbmRvbSgwLDEpPjAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5ocCA8PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UuZW5lbXlEaWUodGhpcy5ub2RlLGZhbHNlKTtcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlhOd0NKakdNYVJRS01OUFwiKTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5mYWRlVG8oLjIsMCksY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgIH0pKSlcbiAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5ICo9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZGFib3Nz55WM6Z2i5Yqg6ZKxXG4gICAgICAgICAgICBpZih0aGlzLnR5cGUgIT0gMilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJjS05cIik7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdldGNvaW5fcHJlKTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibF9hZGRfY29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLm1vbmV5KTtcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MygwLDUwLDApKTtcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IDEwMDA7XG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDAuNVxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4rPXRoaXMubW9uZXk7XG4gICAgICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2Muc2NhbGVUbygwLjIsMS4zKSxjYy5tb3ZlQnkoMC4yLDAsODApKSxjYy5kZWxheVRpbWUoLjgpLGNjLnNwYXduKGNjLm1vdmVCeSgwLjUsNTApLGNjLmZhZGVUbygwLjUsNTApKSxjYy5yZW1vdmVTZWxmKCkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYodGhpcy50eXBlID09IDIpXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZS9vdGhlci9kZWF0aFwiLFwiYW5pbWF0aW9uXCIsdGhpcy5ub2RlLGNjLnYzKDAsNzUsMCksMC44KVxuICAgICAgICAgICAgLy8gZWxzZVxuICAgICAgICAgICAgdGhpcy5wbGF5U2tlQW5pKFwic3BpbmU6b3RoZXIvemh1b3NoYW9cIixcImVmZmVjdFwiLHRoaXMubm9kZSxjYy52MygwLDc1LDApLDEpLnRoZW4oKG5vZGUpPT57XG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9MiA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImhpdFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaGl0XCIpO1xuICAgICAgICAgICAgdGhpcy5wbGF5U2tlQW5pKFwic3BpbmU6b3RoZXIvaml6aG9uZ1wiLFwiYW5pbWF0aW9uXCIsdGhpcy5ub2RlLGNjLnYzKDAsNzUsMCksMSlcbiAgICAgICAgICAgIHRoaXMucmVkZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKSArIDMwMDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJoaXRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhpdFwiKTtcbiAgICB9XG5cbiAgICBzbG93ZG93bigpXG4gICAge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJzV1BBMnhFaGlIOFwiKTtcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJza2lsbF9zbG93XCIpXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS50aW1lU2NhbGUgPSAwLjU7XG4gICAgICAgIHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnc3AnKS50aW1lU2NhbGUgPSAwLjU7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImppYW5zdVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcInNwXCIpLnRpbWVTY2FsZSA9IDE7XG4gICAgICAgICAgICB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ3NwJykudGltZVNjYWxlID0gMTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImppYW5zdVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpKVxuICAgIH1cblxuICAgIGJmcm96ZW4gPSBmYWxzZTtcbiAgICBmcm96ZW4oKVxuICAgIHtcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJza2lsbF9mcmVlemVcIilcbiAgICAgICAgdGhpcy5iZnJvemVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc3R1blwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJtaE5aY3BEMmRmVEpLXCIpO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zdHVuXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucHVycGxlZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKSArIDEwMDA7XG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zdHVuXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikucGF1c2VkID0gZmFsc2U7ICBcbiAgICAgICAgICAgIHRoaXMuYmZyb3plbiA9IGZhbHNlO1xuICAgICAgICB9KSkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYXRoaW5kZXggPSAxO1xuICAgIHByaXZhdGUgc3BlZCA9IDE7XG4gICAgcHJpdmF0ZSBiYXNlX3NwZWVkID01MCA7XG5cbiAgICBwcml2YXRlIHJlZGVuZHRpbWUgPSAwO1xuICAgIHByaXZhdGUgcHVycGxlZW5kdGltZSA9IDA7XG4gICAgcHVibGljIHN0YXRpYyBtdWwgPSAxO1xuICAgIHVwZGF0ZShkdClcbiAgICB7XG4gICAgICAgIGlmKGR0PjEpZHQ9MTtcbiAgICAgICAgaWYodGhpcy5yZWRlbmR0aW1lPlV0aWxzLmdldFNlcnZlclRpbWUoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuY29sb3IgPSBjYy5Db2xvci5SRUQuZnJvbUhFWChcIiM3QzgyREVcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMucHVycGxlZW5kdGltZT5VdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoXCIjRUQ3MzczXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5jb2xvciA9Y2MuQ29sb3IuV0hJVEVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuYmZyb3plbilyZXR1cm47XG4gICAgICAgIGlmKCFIYWxsU2NlbmUuSW5zdGFuY2UucGF0aFt0aGlzLnBhdGhpbmRleF0pcmV0dXJuO1xuICAgICAgICBsZXQgZCA9IEhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoW3RoaXMucGF0aGluZGV4XS5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgaWYoZC5tYWcoKSA8IHRoaXMuc3BlZCAqIGR0KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPUhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoW3RoaXMucGF0aGluZGV4XTtcbiAgICAgICAgICAgIHRoaXMucGF0aGluZGV4Kys7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJQVHczMlR5aGFlWnRqeWpXM0ZKN2tSWEZqeUJcIik7XG4gICAgICAgICAgICBpZih0aGlzLnBhdGhpbmRleCA9PSAzKVxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnNjYWxlWCA9IC0wLjc0O1xuXG4gICAgICAgICAgICBpZih0aGlzLnBhdGhpbmRleD49SGFsbFNjZW5lLkluc3RhbmNlLnBhdGgubGVuZ3RoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEhhbGxTY2VuZS5JbnN0YW5jZS5lbmVteURpZSh0aGlzLm5vZGUsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB2ID0gZC5ub3JtYWxpemUoKS5tdWwoRW5lbXkubXVsICogICB0aGlzLnNwZWQgKiBkdCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPXRoaXMubm9kZS5wb3NpdGlvbi5hZGQodik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93SHVydChudW06IG51bWJlciwgZm9yd2FyZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5HZXRHYW1lT2JqZWN0KFwiZnNfaHVydFwiKSk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBpZiAoZm9yd2FyZCkgbm9kZS54ICo9IC0xO1xuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q29pbihudW0pO1xuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImFDaGNDNUhtVHlZM0Q1Nnp3XCIpO1xuICAgICAgICB2YXIgYmV6aWVyO1xuICAgICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKC0xMCwgNTApLCBjYy52MigtNDAsIDYwKSwgY2MudjIoLTYwLCAyMCldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKDEwLCA1MCksIGNjLnYyKDQwLCA2MCksIGNjLnYyKDYwLCAyMCldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiZXppZXJGb3J3YXJkID0gY2MuYmV6aWVyQnkoMSwgYmV6aWVyKTtcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAvLyBjYy5mYWRlVG8oMSwgMCksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAwLjYpLFxuICAgICAgICAgICAgICAgIGJlemllckZvcndhcmRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYy5yZW1vdmVTZWxmKClcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgc2hvd0JKKG51bTogbnVtYmVyLCBmb3J3YXJkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJza2lsbF9jcml0XCIpXG4gICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5HZXRHYW1lT2JqZWN0KFwid2xfYmFvamlcIikpO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgaWYgKGZvcndhcmQpIG5vZGUueCAqPSAtMTtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdENvaW4obnVtKTtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJtQTIzUHBlazY4RGNNclBkZFlTNnNmeU1FaFpqRVBoY1wiKTtcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuMjtcbiAgICAgICAgdmFyIGJlemllcjtcbiAgICAgICAgdmFyIGJlemllcjE7XG4gICAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgICAgICBiZXppZXIgPSBbY2MudjIoLTUsIDIwKSwgY2MudjIoLTgsIDMwKSwgY2MudjIoLTEwLCAzMCldO1xuICAgICAgICAgICAgYmV6aWVyMSA9IFtjYy52MigtNSwgLTIwKSwgY2MudjIoLTgsIC0zMCksIGNjLnYyKC0xMCwgLTMwKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiZXppZXIgPSBbY2MudjIoNSwgMjApLCBjYy52Mig4LCAzMCksIGNjLnYyKDEwLCAzMCldO1xuICAgICAgICAgICAgYmV6aWVyMSA9IFtjYy52Mig1LCAtMjApLCBjYy52Mig4LCAtMzApLCBjYy52MigxMCwgLTMwKV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJlemllckZyb250ID0gY2MuYmV6aWVyQnkoMC4yLCBiZXppZXIpO1xuICAgICAgICB2YXIgYmV6aWVyQmFjayA9IGNjLmJlemllckJ5KDAuNSwgYmV6aWVyMSk7XG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KDAuMiwgMCwgMzApLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxKSxcbiAgICAgICAgICAgICAgICBiZXppZXJGcm9udFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjUpLFxuICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KDAuMiwgMCwgLTMwKSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuNSwgMC4yKSxcbiAgICAgICAgICAgICAgICBiZXppZXJCYWNrLFxuICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC41KSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYy5yZW1vdmVTZWxmKClcbiAgICAgICAgKSk7XG4gICAgfVxuICAgIFxufVxuIl19