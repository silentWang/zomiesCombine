
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
                        this.GetGameObject('sp').scale = this.type == 2 ? 1 : 0.74;
                        this.sped = info[2] * this.base_speed;
                        this.maxhp = info[1];
                        this.hp = this.maxhp;
                        this.money = Math.floor(info[3] * Utils_1.default.getRandom(0.8, 1.2));
                        // console.log(this.type == 2?"boss":"e",this.maxhp,this.money,"====")
                        this.node.position = HallScene_1.default.Instance.path[0];
                        this.node.scale = this.type == 0 ? .8 : 1;
                        AudioMgr_1.default.Instance().playSFX('chuxian');
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
        var isskill = false;
        if (Utils_1.default.getRandom(0, 100) < skillvalue) {
            if (skilltype == 1) //减速
             {
                this.slowdown();
                isskill = true;
            }
            else if (skilltype == 2) //双倍伤害
             {
                power *= 2;
                bbj = true;
                isskill = true;
            }
            else if (skilltype == 3) //冰冻
             {
                isskill = true;
                this.frozen();
            }
        }
        this.hp -= power;
        this.hp = Math.max(this.hp, 0);
        this.SetProgressBar("New ProgressBar", this.hp / this.maxhp);
        this.GetGameObject("New ProgressBar").stopAllActions();
        this.GetGameObject("New ProgressBar").opacity = 255;
        this.GetGameObject("New ProgressBar").runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.2, 0)));
        if (!isskill)
            AudioMgr_1.default.Instance().playSFX('hit');
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
                this.GetGameObject("sp").scaleX = -0.74;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEVuZW15LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQywyQ0FBc0M7QUFDdEMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0Qyw0QkFBNEM7QUFDNUMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFNO0lBQXpDO1FBQUEscUVBb1JDO1FBaFJHLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsV0FBSyxHQUFHLENBQUMsQ0FBQztRQWVWLFVBQUksR0FBRyxDQUFDLENBQUMsQ0FBQSxxQkFBcUI7UUFtSXRDLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFnQlIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVSxHQUFFLEVBQUUsQ0FBRTtRQUVoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFhLEdBQUcsQ0FBQyxDQUFDOztJQXFHOUIsQ0FBQztjQXBSb0IsS0FBSztJQVVmLDRCQUFZLEdBQW5CO1FBRUksSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFDakI7WUFDSSxJQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxFQUN2RDtnQkFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUNuQjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENB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QUUsQ0FBQyxNQUFNLENBQUM7OENBQ1M7SUFKWixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBb1J6QjtJQUFELFlBQUM7Q0FwUkQsQUFvUkMsQ0FwUmtDLGdCQUFNLEdBb1J4QztrQkFwUm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvRGF0YVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgREJfem9tYmllLCBEQl9wbGFudCB9IGZyb20gXCIuLi9EQlwiO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gXCIuLi9IYWxsU2NlbmVcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGdldGNvaW5fcHJlOmNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhocCA9IDBcclxuICAgIHByaXZhdGUgaHAgPSAwO1xyXG4gICAgcHJpdmF0ZSBtb25leSA9IDA7XHJcblxyXG4gICAgcHVibGljIGdldEJvc3NNb25leSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy50eXBlID09IDIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5ICo9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLm1heGhwIC0gdGhpcy5ocCkvdGhpcy5tYXhocCAqIHRoaXMubW9uZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHlwZSA9IDA7Ly8wIOaZrumAmiAxIOWwj2Jvc3MgMuWkp2Jvc3NcclxuICAgIGFzeW5jIHNldElEKGlkOm51bWJlcixib3NzOmJvb2xlYW4pLy/mmK/lkKZib3NzXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gYm9zcyA/IDE6MDtcclxuICAgICAgICBsZXQgaW5mbyA9IERCX3pvbWJpZVtpZCtcIlwiXTtcclxuICAgICAgICBpZihpZCA+IDEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkIC09IDEwMDtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGlkID4gNTIpIGlkID0gVXRpbHMuZ2V0UmFuZG9tSW50KDEsNTIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJib3NzXCIpLmFjdGl2ZSA9IHRoaXMudHlwZSA9PSAyO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnc3AnKS5zY2FsZSA9IHRoaXMudHlwZSA9PSAyID8gMSA6IDAuNzQ7XHJcbiAgICAgICAgdGhpcy5zcGVkID0gaW5mb1syXSAqIHRoaXMuYmFzZV9zcGVlZDtcclxuICAgICAgICB0aGlzLm1heGhwID0gaW5mb1sxXTtcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5tYXhocDtcclxuICAgICAgICB0aGlzLm1vbmV5ID0gTWF0aC5mbG9vcihpbmZvWzNdICogVXRpbHMuZ2V0UmFuZG9tKDAuOCwxLjIpKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50eXBlID09IDI/XCJib3NzXCI6XCJlXCIsdGhpcy5tYXhocCx0aGlzLm1vbmV5LFwiPT09PVwiKVxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IEhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoWzBdO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMudHlwZSA9PSAwID8gLjggOiAxO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWCgnY2h1eGlhbicpXHJcbiAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTplbmVteSR7aWR9X3NrZWA7XHJcbiAgICAgICAgbGV0IGF0bGFzcGF0aCA9IGBzcGluZTplbmVteSR7aWR9X3RleGA7XHJcbiAgICAgICAgbGV0IGFybWF0dXJlID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKFwic3BcIik7XHJcbiAgICAgICAgYXJtYXR1cmUuZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgIGFybWF0dXJlLmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcclxuICAgICAgICBhcm1hdHVyZS5hcm1hdHVyZU5hbWUgPSBcIkFybWF0dXJlXCI7XHJcbiAgICAgICAgYXJtYXR1cmUucGxheUFuaW1hdGlvbigncnVuJywwKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJOZXcgUHJvZ3Jlc3NCYXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KHBsYW50bHY6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuaHAgPD0gMClyZXR1cm47XHJcbiAgICAgICAgbGV0IGluZm8gPSBEQl9wbGFudFtwbGFudGx2LTFdO1xyXG4gICAgICAgIGxldCBza2lsbCA9IFN0cmluZyhpbmZvWzNdKS5zcGxpdChcInxcIik7XHJcbiAgICAgICAgbGV0IHNraWxsdHlwZSA9IE51bWJlcihza2lsbFswXSk7XHJcbiAgICAgICAgbGV0IHNraWxsdmFsdWUgPSBOdW1iZXIoc2tpbGxbMV0pO1xyXG4gICAgICAgIGxldCBwb3dlciA9IE51bWJlcihpbmZvWzJdKVxyXG4gICAgICAgIGxldCBiYmogPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNza2lsbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKFV0aWxzLmdldFJhbmRvbSgwLDEwMCkgPCBza2lsbHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoc2tpbGx0eXBlID09IDEpLy/lh4/pgJ9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbG93ZG93bigpO1xyXG4gICAgICAgICAgICAgICAgaXNza2lsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihza2lsbHR5cGUgPT0gMikvL+WPjOWAjeS8pOWus1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3dlciAqPSAyO1xyXG4gICAgICAgICAgICAgICAgYmJqID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlzc2tpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09MykvL+WGsOWGu1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc3NraWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ocCAtPSBwb3dlcjtcclxuICAgICAgICB0aGlzLmhwID0gTWF0aC5tYXgodGhpcy5ocCwwKVxyXG4gICAgICAgIHRoaXMuU2V0UHJvZ3Jlc3NCYXIoXCJOZXcgUHJvZ3Jlc3NCYXJcIix0aGlzLmhwL3RoaXMubWF4aHApO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLGNjLmZhZGVUbygwLjIsMCkpKVxyXG4gICAgICAgIGlmKCFpc3NraWxsKSBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoJ2hpdCcpO1xyXG4gICAgICAgIGlmKGJiail7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1dMQmFvamkocG93ZXIsVXRpbHMuZ2V0UmFuZG9tKDAsMSk+MC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93RlNIdXJ0KHBvd2VyLFV0aWxzLmdldFJhbmRvbSgwLDEpPjAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaHAgPD0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEhhbGxTY2VuZS5JbnN0YW5jZS5yZW1vdmVlbmVteSh0aGlzLm5vZGUsZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNSksY2MuZmFkZVRvKC4yLDApLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgICAgICBpZihEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5ICo9IDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZGFib3Nz55WM6Z2i5Yqg6ZKxXHJcbiAgICAgICAgICAgIGlmKHRoaXMudHlwZSAhPSAyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2V0Y29pbl9wcmUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibF9hZGRfY29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsNTAsMCkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDAuNVxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmNvaW4rPXRoaXMubW9uZXk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5zY2FsZVRvKDAuMiwxLjMpLGNjLm1vdmVCeSgwLjIsMCw4MCkpLGNjLmRlbGF5VGltZSguOCksY2Muc3Bhd24oY2MubW92ZUJ5KDAuNSw1MCksY2MuZmFkZVRvKDAuNSw1MCkpLGNjLnJlbW92ZVNlbGYoKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZih0aGlzLnR5cGUgPT0gMilcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheVNrQW5pKFwic3BpbmUvb3RoZXIvZGVhdGhcIixcImFuaW1hdGlvblwiLHRoaXMubm9kZSxjYy52MygwLDc1LDApLDAuOClcclxuICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBsYXlTa0FuaShcInNwaW5lOm90aGVyL3podW9zaGFvXCIsXCJlZmZlY3RcIix0aGlzLm5vZGUsY2MudjMoMCw3NSwwKSwxKS50aGVuKChub2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9MiA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJoaXRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhpdFwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZTpvdGhlci9qaXpob25nXCIsXCJhbmltYXRpb25cIix0aGlzLm5vZGUsY2MudjMoMCw3NSwwKSwxKVxyXG4gICAgICAgICAgICB0aGlzLnJlZGVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgKyAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImhpdFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaGl0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNsb3dkb3duKClcclxuICAgIHtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJza2lsbF9zbG93XCIpXHJcbiAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcInNwXCIpLnRpbWVTY2FsZSA9IDAuNTtcclxuICAgICAgICB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ3NwJykudGltZVNjYWxlID0gMC41O1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImppYW5zdVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikudGltZVNjYWxlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5HZXREcmFnb25BbWF0dXJlKCdzcCcpLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImppYW5zdVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KSkpXHJcbiAgICB9XHJcblxyXG4gICAgYmZyb3plbiA9IGZhbHNlO1xyXG4gICAgZnJvemVuKClcclxuICAgIHtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJza2lsbF9mcmVlemVcIilcclxuICAgICAgICB0aGlzLmJmcm96ZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zdHVuXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wdXJwbGVlbmR0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpICsgMTAwMDtcclxuICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zdHVuXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc3R1blwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcInNwXCIpLnBhdXNlZCA9IGZhbHNlOyAgXHJcbiAgICAgICAgICAgIHRoaXMuYmZyb3plbiA9IGZhbHNlO1xyXG4gICAgICAgIH0pKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhdGhpbmRleCA9IDE7XHJcbiAgICBwcml2YXRlIHNwZWQgPSAxO1xyXG4gICAgcHJpdmF0ZSBiYXNlX3NwZWVkID01MCA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWRlbmR0aW1lID0gMDtcclxuICAgIHByaXZhdGUgcHVycGxlZW5kdGltZSA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIG11bCA9IDE7XHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZHQ+MSlkdD0xO1xyXG4gICAgICAgIGlmKHRoaXMucmVkZW5kdGltZT5VdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5jb2xvciA9IGNjLkNvbG9yLlJFRC5mcm9tSEVYKFwiIzdDODJERVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMucHVycGxlZW5kdGltZT5VdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5jb2xvciA9IGNjLkNvbG9yLlJFRC5mcm9tSEVYKFwiI0VENzM3M1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5jb2xvciA9Y2MuQ29sb3IuV0hJVEVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYmZyb3plbilyZXR1cm47XHJcbiAgICAgICAgaWYoIUhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoW3RoaXMucGF0aGluZGV4XSlyZXR1cm47XHJcbiAgICAgICAgbGV0IGQgPSBIYWxsU2NlbmUuSW5zdGFuY2UucGF0aFt0aGlzLnBhdGhpbmRleF0uc3ViKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgaWYoZC5tYWcoKSA8IHRoaXMuc3BlZCAqIGR0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID1IYWxsU2NlbmUuSW5zdGFuY2UucGF0aFt0aGlzLnBhdGhpbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMucGF0aGluZGV4Kys7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGF0aGluZGV4ID09IDMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5zY2FsZVggPSAtMC43NDtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMucGF0aGluZGV4Pj1IYWxsU2NlbmUuSW5zdGFuY2UucGF0aC5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YCD6L+HXCIpXHJcbiAgICAgICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UucmVtb3ZlZW5lbXkodGhpcy5ub2RlLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9IGQubm9ybWFsaXplKCkubXVsKEVuZW15Lm11bCAqICAgdGhpcy5zcGVkICogZHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPXRoaXMubm9kZS5wb3NpdGlvbi5hZGQodik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dGU0h1cnQobnVtOiBudW1iZXIsIGZvcndhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5HZXRHYW1lT2JqZWN0KFwiZnNfaHVydFwiKSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIG5vZGUueCAqPSAtMTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q29pbihudW0pO1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgYmV6aWVyO1xyXG4gICAgICAgIGlmIChmb3J3YXJkKSB7XHJcbiAgICAgICAgICAgIGJlemllciA9IFtjYy52MigtMTAsIDUwKSwgY2MudjIoLTQwLCA2MCksIGNjLnYyKC02MCwgMjApXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiZXppZXIgPSBbY2MudjIoMTAsIDUwKSwgY2MudjIoNDAsIDYwKSwgY2MudjIoNjAsIDIwKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiZXppZXJGb3J3YXJkID0gY2MuYmV6aWVyQnkoMSwgYmV6aWVyKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5mYWRlVG8oMSwgMCksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDEsIDAuNiksXHJcbiAgICAgICAgICAgICAgICBiZXppZXJGb3J3YXJkXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLnJlbW92ZVNlbGYoKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXTEJhb2ppKG51bTogbnVtYmVyLCBmb3J3YXJkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJza2lsbF9jcml0XCIpXHJcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkdldEdhbWVPYmplY3QoXCJ3bF9iYW9qaVwiKSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIG5vZGUueCAqPSAtMTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q29pbihudW0pO1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC4yO1xyXG4gICAgICAgIHZhciBiZXppZXI7XHJcbiAgICAgICAgdmFyIGJlemllcjE7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIHtcclxuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKC01LCAyMCksIGNjLnYyKC04LCAzMCksIGNjLnYyKC0xMCwgMzApXTtcclxuICAgICAgICAgICAgYmV6aWVyMSA9IFtjYy52MigtNSwgLTIwKSwgY2MudjIoLTgsIC0zMCksIGNjLnYyKC0xMCwgLTMwKV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKDUsIDIwKSwgY2MudjIoOCwgMzApLCBjYy52MigxMCwgMzApXTtcclxuICAgICAgICAgICAgYmV6aWVyMSA9IFtjYy52Mig1LCAtMjApLCBjYy52Mig4LCAtMzApLCBjYy52MigxMCwgLTMwKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiZXppZXJGcm9udCA9IGNjLmJlemllckJ5KDAuMiwgYmV6aWVyKTtcclxuICAgICAgICB2YXIgYmV6aWVyQmFjayA9IGNjLmJlemllckJ5KDAuNSwgYmV6aWVyMSk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KDAuMiwgMCwgMzApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDEpLFxyXG4gICAgICAgICAgICAgICAgYmV6aWVyRnJvbnRcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuNSksXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KDAuMiwgMCwgLTMwKSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC41LCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgYmV6aWVyQmFjayxcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC41KSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2MucmVtb3ZlU2VsZigpXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=