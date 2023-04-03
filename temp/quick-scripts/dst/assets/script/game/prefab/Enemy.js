
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEVuZW15LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QyxvQ0FBeUQ7QUFDekQsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFNO0lBQXpDO1FBQUEscUVBNlFDO1FBelFHLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsV0FBSyxHQUFHLENBQUMsQ0FBQztRQWVWLFVBQUksR0FBRyxDQUFDLENBQUMsQ0FBQSxxQkFBcUI7UUE2SHRDLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFnQlIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVSxHQUFFLEVBQUUsQ0FBRTtRQUVoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFhLEdBQUcsQ0FBQyxDQUFDOztJQW9HOUIsQ0FBQztjQTdRb0IsS0FBSztJQVVmLDRCQUFZLEdBQW5CO1FBRUksSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFDakI7WUFDSSxJQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsRUFDNUQ7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7YUFDbkI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxD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RUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ3RCLEVBQUUsQ0FBQyxLQUFLO1FBQ0oseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUNsQixXQUFXLENBQ2QsRUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixFQUFFLENBQUMsS0FBSztRQUNKLDBCQUEwQjtRQUMxQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDcEIsVUFBVSxFQUNWLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQ2xCLEVBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDOztJQWpHYSxTQUFHLEdBQUcsQ0FBQyxDQUFDO0lBdEt0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNTO0lBSlosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTZRekI7SUFBRCxZQUFDO0NBN1FELEFBNlFDLENBN1FrQyxnQkFBTSxHQTZReEM7a0JBN1FvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBDb25maWdfYW5pbWFscywgQ29uZmlnX2NoaWNrIH0gZnJvbSBcIi4uL0NvbmZpZ1wiO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gXCIuLi9IYWxsU2NlbmVcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGdldGNvaW5fcHJlOmNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhocCA9IDBcclxuICAgIHByaXZhdGUgaHAgPSAwO1xyXG4gICAgcHJpdmF0ZSBtb25leSA9IDA7XHJcblxyXG4gICAgcHVibGljIGdldEJvc3NNb25leSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy50eXBlID09IDIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uZXkgKj0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMubWF4aHAgLSB0aGlzLmhwKS90aGlzLm1heGhwICogdGhpcy5tb25leTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0eXBlID0gMDsvLzAg5pmu6YCaIDEg5bCPYm9zcyAy5aSnYm9zc1xyXG4gICAgYXN5bmMgc2V0SUQoaWQ6bnVtYmVyLGJvc3M6Ym9vbGVhbikvL+aYr+WQpmJvc3NcclxuICAgIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBib3NzID8gMTowO1xyXG4gICAgICAgIGxldCBpbmZvID0gQ29uZmlnX2FuaW1hbHNbaWQrXCJcIl07XHJcbiAgICAgICAgaWYoaWQgPiAxMDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZCAtPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpZCA+IDUyKSBpZCA9IFV0aWxzLmdldFJhbmRvbUludCgxLDUyKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYm9zc1wiKS5hY3RpdmUgPSB0aGlzLnR5cGUgPT0gMjtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ3NwJykuc2NhbGUgPSB0aGlzLnR5cGUgPT0gMiA/IDEgOiAwLjc0O1xyXG4gICAgICAgIHRoaXMuc3BlZCA9IGluZm9bMl0gKiB0aGlzLmJhc2Vfc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5tYXhocCA9IGluZm9bMV07XHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4aHA7XHJcbiAgICAgICAgdGhpcy5tb25leSA9IE1hdGguZmxvb3IoaW5mb1szXSAqIFV0aWxzLmdldFJhbmRvbSgwLjgsMS4yKSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IEhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoWzBdO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMudHlwZSA9PSAwID8gLjggOiAxO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKCdjaHV4aWFuJylcclxuICAgICAgICBsZXQgc2twYXRoID0gYHNwaW5lOmVuZW15JHtpZH1fc2tlYDtcclxuICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmVuZW15JHtpZH1fdGV4YDtcclxuICAgICAgICBsZXQgYXJtYXR1cmUgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoXCJzcFwiKTtcclxuICAgICAgICBhcm1hdHVyZS5kcmFnb25Bc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoc2twYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQ7XHJcbiAgICAgICAgYXJtYXR1cmUuZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xyXG4gICAgICAgIGFybWF0dXJlLmFybWF0dXJlTmFtZSA9IFwiQXJtYXR1cmVcIjtcclxuICAgICAgICBhcm1hdHVyZS5wbGF5QW5pbWF0aW9uKCdydW4nLDApO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBoaXQocGxhbnRsdjpudW1iZXIsc2tpbGx0eXBlOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmhwIDw9IDApcmV0dXJuO1xyXG4gICAgICAgIGxldCBpbmZvID0gQ29uZmlnX2NoaWNrW3BsYW50bHYtMV07XHJcbiAgICAgICAgbGV0IHBvd2VyID0gTnVtYmVyKGluZm9bMl0pXHJcbiAgICAgICAgbGV0IGJiaiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc3NraWxsID0gZmFsc2U7XHJcbiAgICAgICAgaWYoc2tpbGx0eXBlID09IDEpe1xyXG4gICAgICAgICAgICAvL+WHj+mAn1xyXG4gICAgICAgICAgICB0aGlzLnNsb3dkb3duKCk7XHJcbiAgICAgICAgICAgIGlzc2tpbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgLy/lj4zlgI3kvKTlrrNcclxuICAgICAgICAgICAgcG93ZXIgKj0gMjtcclxuICAgICAgICAgICAgYmJqID0gdHJ1ZTtcclxuICAgICAgICAgICAgaXNza2lsbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDMpe1xyXG4gICAgICAgICAgICAvL+WGsOWGu1xyXG4gICAgICAgICAgICBpc3NraWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ocCAtPSBwb3dlcjtcclxuICAgICAgICB0aGlzLmhwID0gTWF0aC5tYXgodGhpcy5ocCwwKVxyXG4gICAgICAgIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIix0aGlzLmhwL3RoaXMubWF4aHApO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLGNjLmZhZGVUbygwLjIsMCkpKVxyXG4gICAgICAgIGlmKCFpc3NraWxsKSBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWCgnaGl0Jyk7XHJcbiAgICAgICAgaWYoYmJqKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93QkoocG93ZXIsVXRpbHMuZ2V0UmFuZG9tKDAsMSk+MC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93SHVydChwb3dlcixVdGlscy5nZXRSYW5kb20oMCwxKT4wLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmhwIDw9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UuZW5lbXlEaWUodGhpcy5ub2RlLGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmZhZGVUbyguMiwwKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5ICo9IDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZGFib3Nz55WM6Z2i5Yqg6ZKxXHJcbiAgICAgICAgICAgIGlmKHRoaXMudHlwZSAhPSAyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2V0Y29pbl9wcmUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibF9hZGRfY29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsNTAsMCkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDAuNVxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbis9dGhpcy5tb25leTtcclxuICAgICAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLnNjYWxlVG8oMC4yLDEuMyksY2MubW92ZUJ5KDAuMiwwLDgwKSksY2MuZGVsYXlUaW1lKC44KSxjYy5zcGF3bihjYy5tb3ZlQnkoMC41LDUwKSxjYy5mYWRlVG8oMC41LDUwKSksY2MucmVtb3ZlU2VsZigpKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMudHlwZSA9PSAyKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZS9vdGhlci9kZWF0aFwiLFwiYW5pbWF0aW9uXCIsdGhpcy5ub2RlLGNjLnYzKDAsNzUsMCksMC44KVxyXG4gICAgICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGxheVNrZUFuaShcInNwaW5lOm90aGVyL3podW9zaGFvXCIsXCJlZmZlY3RcIix0aGlzLm5vZGUsY2MudjMoMCw3NSwwKSwxKS50aGVuKChub2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9MiA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJoaXRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhpdFwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5U2tlQW5pKFwic3BpbmU6b3RoZXIvaml6aG9uZ1wiLFwiYW5pbWF0aW9uXCIsdGhpcy5ub2RlLGNjLnYzKDAsNzUsMCksMSlcclxuICAgICAgICAgICAgdGhpcy5yZWRlbmR0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpICsgMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJoaXRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhpdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzbG93ZG93bigpXHJcbiAgICB7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJza2lsbF9zbG93XCIpXHJcbiAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcInNwXCIpLnRpbWVTY2FsZSA9IDAuNTtcclxuICAgICAgICB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ3NwJykudGltZVNjYWxlID0gMC41O1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImppYW5zdVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikudGltZVNjYWxlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5HZXREcmFnb25BbWF0dXJlKCdzcCcpLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImppYW5zdVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KSkpXHJcbiAgICB9XHJcblxyXG4gICAgYmZyb3plbiA9IGZhbHNlO1xyXG4gICAgZnJvemVuKClcclxuICAgIHtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcInNraWxsX2ZyZWV6ZVwiKVxyXG4gICAgICAgIHRoaXMuYmZyb3plbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc3R1blwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnB1cnBsZWVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgKyAxMDAwO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zdHVuXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikucGF1c2VkID0gZmFsc2U7ICBcclxuICAgICAgICAgICAgdGhpcy5iZnJvemVuID0gZmFsc2U7XHJcbiAgICAgICAgfSkpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGF0aGluZGV4ID0gMTtcclxuICAgIHByaXZhdGUgc3BlZCA9IDE7XHJcbiAgICBwcml2YXRlIGJhc2Vfc3BlZWQgPTUwIDtcclxuXHJcbiAgICBwcml2YXRlIHJlZGVuZHRpbWUgPSAwO1xyXG4gICAgcHJpdmF0ZSBwdXJwbGVlbmR0aW1lID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsID0gMTtcclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZihkdD4xKWR0PTE7XHJcbiAgICAgICAgaWYodGhpcy5yZWRlbmR0aW1lPlV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoXCIjN0M4MkRFXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5wdXJwbGVlbmR0aW1lPlV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoXCIjRUQ3MzczXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID1jYy5Db2xvci5XSElURVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5iZnJvemVuKXJldHVybjtcclxuICAgICAgICBpZighSGFsbFNjZW5lLkluc3RhbmNlLnBhdGhbdGhpcy5wYXRoaW5kZXhdKXJldHVybjtcclxuICAgICAgICBsZXQgZCA9IEhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoW3RoaXMucGF0aGluZGV4XS5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBpZihkLm1hZygpIDwgdGhpcy5zcGVkICogZHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPUhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoW3RoaXMucGF0aGluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5wYXRoaW5kZXgrKztcclxuICAgICAgICAgICAgaWYodGhpcy5wYXRoaW5kZXggPT0gMylcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnNjYWxlWCA9IC0wLjc0O1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5wYXRoaW5kZXg+PUhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoLmxlbmd0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgSGFsbFNjZW5lLkluc3RhbmNlLmVuZW15RGllKHRoaXMubm9kZSx0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHYgPSBkLm5vcm1hbGl6ZSgpLm11bChFbmVteS5tdWwgKiAgIHRoaXMuc3BlZCAqIGR0KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID10aGlzLm5vZGUucG9zaXRpb24uYWRkKHYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93SHVydChudW06IG51bWJlciwgZm9yd2FyZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkdldEdhbWVPYmplY3QoXCJmc19odXJ0XCIpKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBpZiAoZm9yd2FyZCkgbm9kZS54ICo9IC0xO1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXRDb2luKG51bSk7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBiZXppZXI7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIHtcclxuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKC0xMCwgNTApLCBjYy52MigtNDAsIDYwKSwgY2MudjIoLTYwLCAyMCldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJlemllciA9IFtjYy52MigxMCwgNTApLCBjYy52Mig0MCwgNjApLCBjYy52Mig2MCwgMjApXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJlemllckZvcndhcmQgPSBjYy5iZXppZXJCeSgxLCBiZXppZXIpO1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgIC8vIGNjLmZhZGVUbygxLCAwKSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMSwgMC42KSxcclxuICAgICAgICAgICAgICAgIGJlemllckZvcndhcmRcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2MucmVtb3ZlU2VsZigpXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0JKKG51bTogbnVtYmVyLCBmb3J3YXJkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcInNraWxsX2NyaXRcIilcclxuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuR2V0R2FtZU9iamVjdChcIndsX2Jhb2ppXCIpKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBpZiAoZm9yd2FyZCkgbm9kZS54ICo9IC0xO1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXRDb2luKG51bSk7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjI7XHJcbiAgICAgICAgdmFyIGJlemllcjtcclxuICAgICAgICB2YXIgYmV6aWVyMTtcclxuICAgICAgICBpZiAoZm9yd2FyZCkge1xyXG4gICAgICAgICAgICBiZXppZXIgPSBbY2MudjIoLTUsIDIwKSwgY2MudjIoLTgsIDMwKSwgY2MudjIoLTEwLCAzMCldO1xyXG4gICAgICAgICAgICBiZXppZXIxID0gW2NjLnYyKC01LCAtMjApLCBjYy52MigtOCwgLTMwKSwgY2MudjIoLTEwLCAtMzApXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiZXppZXIgPSBbY2MudjIoNSwgMjApLCBjYy52Mig4LCAzMCksIGNjLnYyKDEwLCAzMCldO1xyXG4gICAgICAgICAgICBiZXppZXIxID0gW2NjLnYyKDUsIC0yMCksIGNjLnYyKDgsIC0zMCksIGNjLnYyKDEwLCAtMzApXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJlemllckZyb250ID0gY2MuYmV6aWVyQnkoMC4yLCBiZXppZXIpO1xyXG4gICAgICAgIHZhciBiZXppZXJCYWNrID0gY2MuYmV6aWVyQnkoMC41LCBiZXppZXIxKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5tb3ZlQnkoMC4yLCAwLCAzMCksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMSksXHJcbiAgICAgICAgICAgICAgICBiZXppZXJGcm9udFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcclxuICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5tb3ZlQnkoMC4yLCAwLCAtMzApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjUsIDAuMiksXHJcbiAgICAgICAgICAgICAgICBiZXppZXJCYWNrLFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZU91dCgwLjUpLFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjYy5yZW1vdmVTZWxmKClcclxuICAgICAgICApKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ==