
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEVuZW15LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQywyQ0FBc0M7QUFDdEMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0Qyw0QkFBNEM7QUFDNUMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFNO0lBQXpDO1FBQUEscUVBZ1NDO1FBNVJHLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsV0FBSyxHQUFHLENBQUMsQ0FBQztRQWVWLFVBQUksR0FBRyxDQUFDLENBQUMsQ0FBQSxxQkFBcUI7UUErSXRDLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFnQlIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVSxHQUFFLEVBQUUsQ0FBRTtRQUVoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFhLEdBQUcsQ0FBQyxDQUFDOztJQXFHOUIsQ0FBQztjQWhTb0IsS0FBSztJQVVmLDRCQUFZLEdBQW5CO1FBRUksSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFDakI7WUFDSSxJQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxFQUN2RDtnQkFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUNuQjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENB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QUcsRUFBRSxDQUFDLENBQUMsRUFDbEIsV0FBVyxDQUNkLEVBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsRUFBRSxDQUFDLEtBQUs7UUFDSiwwQkFBMEI7UUFDMUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLFVBQVUsRUFDVixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUNsQixFQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FDbEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7SUFsR2EsU0FBRyxHQUFHLENBQUMsQ0FBQztJQXhMdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDUztJQUpaLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FnU3pCO0lBQUQsWUFBQztDQWhTRCxBQWdTQyxDQWhTa0MsZ0JBQU0sR0FnU3hDO2tCQWhTb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBEQl96b21iaWUsIERCX3BsYW50IH0gZnJvbSBcIi4uL0RCXCI7XHJcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4uL0hhbGxTY2VuZVwiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ2V0Y29pbl9wcmU6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1heGhwID0gMFxyXG4gICAgcHJpdmF0ZSBocCA9IDA7XHJcbiAgICBwcml2YXRlIG1vbmV5ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0Qm9zc01vbmV5KClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uZXkgKj0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMubWF4aHAgLSB0aGlzLmhwKS90aGlzLm1heGhwICogdGhpcy5tb25leTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0eXBlID0gMDsvLzAg5pmu6YCaIDEg5bCPYm9zcyAy5aSnYm9zc1xyXG4gICAgYXN5bmMgc2V0SUQoaWQ6bnVtYmVyLGJvc3M6Ym9vbGVhbikvL+aYr+WQpmJvc3NcclxuICAgIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBib3NzPzE6MDtcclxuICAgICAgICBsZXQgaW5mbyA9IERCX3pvbWJpZVtpZCtcIlwiXTtcclxuICAgICAgICBpZihpZCA+IDEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkIC09IDEwMDtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGlkID4gNTIpIGlkID0gVXRpbHMuZ2V0UmFuZG9tSW50KDEsNTIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJib3NzXCIpLmFjdGl2ZSA9IHRoaXMudHlwZSA9PSAyO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnc3AnKS5zY2FsZSA9IHRoaXMudHlwZSA9PSAyID8gMSA6IDAuNzQ7XHJcbiAgICAgICAgdGhpcy5zcGVkID0gaW5mb1syXSAqIHRoaXMuYmFzZV9zcGVlZDtcclxuICAgICAgICB0aGlzLm1heGhwID0gaW5mb1sxXTtcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5tYXhocDtcclxuICAgICAgICB0aGlzLm1vbmV5ID0gTWF0aC5mbG9vcihpbmZvWzNdICogVXRpbHMuZ2V0UmFuZG9tKDAuOCwxLjIpKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50eXBlID09IDI/XCJib3NzXCI6XCJlXCIsdGhpcy5tYXhocCx0aGlzLm1vbmV5LFwiPT09PVwiKVxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IEhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoWzBdO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMudHlwZSA9PSAwID8gLjggOiAxO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnNjYWxlWCA9IDAuNTtcclxuICAgICAgICBpZihpZCA9PSAyNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImRvZ1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlkID09IDEzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwicGlnXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChVdGlscy5nZXRSYW5kb20oMCwxKTwuNj8gXCJ6YjFcIjpcInpiMlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2twYXRoID0gYHNwaW5lOmVuZW15JHtpZH1fc2tlYDtcclxuICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmVuZW15JHtpZH1fdGV4YDtcclxuICAgICAgICBsZXQgYXJtYXR1cmUgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoXCJzcFwiKTtcclxuICAgICAgICBhcm1hdHVyZS5kcmFnb25Bc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoc2twYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQ7XHJcbiAgICAgICAgYXJtYXR1cmUuZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xyXG4gICAgICAgIGFybWF0dXJlLmFybWF0dXJlTmFtZSA9IFwiQXJtYXR1cmVcIjtcclxuICAgICAgICBhcm1hdHVyZS5wbGF5QW5pbWF0aW9uKCdydW4nLDApO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIk5ldyBQcm9ncmVzc0JhclwiKS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBoaXQocGxhbnRsdjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5ocCA8PSAwKXJldHVybjtcclxuICAgICAgICBsZXQgaW5mbyA9IERCX3BsYW50W3BsYW50bHYtMV07XHJcbiAgICAgICAgbGV0IHNraWxsID0gU3RyaW5nKGluZm9bM10pLnNwbGl0KFwifFwiKTtcclxuICAgICAgICBsZXQgc2tpbGx0eXBlID0gTnVtYmVyKHNraWxsWzBdKTtcclxuICAgICAgICBsZXQgc2tpbGx2YWx1ZSA9IE51bWJlcihza2lsbFsxXSk7XHJcbiAgICAgICAgbGV0IHBvd2VyID0gTnVtYmVyKGluZm9bMl0pXHJcbiAgICAgICAgbGV0IGJiaiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc3NraWxsID0gZmFsc2U7XHJcbiAgICAgICAgaWYoVXRpbHMuZ2V0UmFuZG9tKDAsMTAwKSA8IHNraWxsdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihza2lsbHR5cGUgPT0gMSkvL+WHj+mAn1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsb3dkb3duKCk7XHJcbiAgICAgICAgICAgICAgICBpc3NraWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAyKS8v5Y+M5YCN5Lyk5a6zXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvd2VyICo9IDI7XHJcbiAgICAgICAgICAgICAgICBiYmogPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXNza2lsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihza2lsbHR5cGUgPT0zKS8v5Yaw5Ya7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzc2tpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhwIC09IHBvd2VyO1xyXG4gICAgICAgIHRoaXMuaHAgPSBNYXRoLm1heCh0aGlzLmhwLDApXHJcbiAgICAgICAgdGhpcy5TZXRQcm9ncmVzc0JhcihcIk5ldyBQcm9ncmVzc0JhclwiLHRoaXMuaHAvdGhpcy5tYXhocCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksY2MuZmFkZVRvKDAuMiwwKSkpXHJcbiAgICAgICAgaWYoIWlzc2tpbGwpIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWCgnaGl0Jyk7XHJcbiAgICAgICAgaWYoYmJqKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93V0xCYW9qaShwb3dlcixVdGlscy5nZXRSYW5kb20oMCwxKT4wLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNob3dGU0h1cnQocG93ZXIsVXRpbHMuZ2V0UmFuZG9tKDAsMSk+MC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5ocCA8PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSGFsbFNjZW5lLkluc3RhbmNlLnJlbW92ZWVuZW15KHRoaXMubm9kZSxmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5mYWRlVG8oLjIsMCksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgIGlmKERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uZXkgKj0gMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9kYWJvc3PnlYzpnaLliqDpkrFcclxuICAgICAgICAgICAgaWYodGhpcy50eXBlICE9IDIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5nZXRjb2luX3ByZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwibGJsX2FkZF9jb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMoMCw1MCwwKSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gMC41XHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuY29pbis9dGhpcy5tb25leTtcclxuICAgICAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLnNjYWxlVG8oMC4yLDEuMyksY2MubW92ZUJ5KDAuMiwwLDgwKSksY2MuZGVsYXlUaW1lKC44KSxjYy5zcGF3bihjYy5tb3ZlQnkoMC41LDUwKSxjYy5mYWRlVG8oMC41LDUwKSksY2MucmVtb3ZlU2VsZigpKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMudHlwZSA9PSAyKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZS9vdGhlci9kZWF0aFwiLFwiYW5pbWF0aW9uXCIsdGhpcy5ub2RlLGNjLnYzKDAsNzUsMCksMC44KVxyXG4gICAgICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGxheVNrQW5pKFwic3BpbmU6b3RoZXIvemh1b3NoYW9cIixcImVmZmVjdFwiLHRoaXMubm9kZSxjYy52MygwLDc1LDApLDEpLnRoZW4oKG5vZGUpPT57XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0yIDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImhpdFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaGl0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTa0FuaShcInNwaW5lOm90aGVyL2ppemhvbmdcIixcImFuaW1hdGlvblwiLHRoaXMubm9kZSxjYy52MygwLDc1LDApLDEpXHJcbiAgICAgICAgICAgIHRoaXMucmVkZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKSArIDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGl0XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJoaXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2xvd2Rvd24oKVxyXG4gICAge1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcInNraWxsX3Nsb3dcIilcclxuICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikudGltZVNjYWxlID0gMC41O1xyXG4gICAgICAgIHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnc3AnKS50aW1lU2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiamlhbnN1XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ3NwJykudGltZVNjYWxlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiamlhbnN1XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pKSlcclxuICAgIH1cclxuXHJcbiAgICBiZnJvemVuID0gZmFsc2U7XHJcbiAgICBmcm96ZW4oKVxyXG4gICAge1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcInNraWxsX2ZyZWV6ZVwiKVxyXG4gICAgICAgIHRoaXMuYmZyb3plbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc3R1blwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnB1cnBsZWVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgKyAxMDAwO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zdHVuXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwic3BcIikucGF1c2VkID0gZmFsc2U7ICBcclxuICAgICAgICAgICAgdGhpcy5iZnJvemVuID0gZmFsc2U7XHJcbiAgICAgICAgfSkpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGF0aGluZGV4ID0gMTtcclxuICAgIHByaXZhdGUgc3BlZCA9IDE7XHJcbiAgICBwcml2YXRlIGJhc2Vfc3BlZWQgPTUwIDtcclxuXHJcbiAgICBwcml2YXRlIHJlZGVuZHRpbWUgPSAwO1xyXG4gICAgcHJpdmF0ZSBwdXJwbGVlbmR0aW1lID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsID0gMTtcclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZihkdD4xKWR0PTE7XHJcbiAgICAgICAgaWYodGhpcy5yZWRlbmR0aW1lPlV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoXCIjN0M4MkRFXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5wdXJwbGVlbmR0aW1lPlV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoXCIjRUQ3MzczXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmNvbG9yID1jYy5Db2xvci5XSElURVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5iZnJvemVuKXJldHVybjtcclxuICAgICAgICBpZighSGFsbFNjZW5lLkluc3RhbmNlLnBhdGhbdGhpcy5wYXRoaW5kZXhdKXJldHVybjtcclxuICAgICAgICBsZXQgZCA9IEhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoW3RoaXMucGF0aGluZGV4XS5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBpZihkLm1hZygpIDwgdGhpcy5zcGVkICogZHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPUhhbGxTY2VuZS5JbnN0YW5jZS5wYXRoW3RoaXMucGF0aGluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5wYXRoaW5kZXgrKztcclxuICAgICAgICAgICAgaWYodGhpcy5wYXRoaW5kZXggPT0gMylcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnNjYWxlWD0gLTAuNTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMucGF0aGluZGV4Pj1IYWxsU2NlbmUuSW5zdGFuY2UucGF0aC5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YCD6L+HXCIpXHJcbiAgICAgICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UucmVtb3ZlZW5lbXkodGhpcy5ub2RlLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9IGQubm9ybWFsaXplKCkubXVsKEVuZW15Lm11bCAqICAgdGhpcy5zcGVkICogZHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPXRoaXMubm9kZS5wb3NpdGlvbi5hZGQodik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dGU0h1cnQobnVtOiBudW1iZXIsIGZvcndhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5HZXRHYW1lT2JqZWN0KFwiZnNfaHVydFwiKSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIG5vZGUueCAqPSAtMTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q29pbihudW0pO1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgYmV6aWVyO1xyXG4gICAgICAgIGlmIChmb3J3YXJkKSB7XHJcbiAgICAgICAgICAgIGJlemllciA9IFtjYy52MigtMTAsIDUwKSwgY2MudjIoLTQwLCA2MCksIGNjLnYyKC02MCwgMjApXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiZXppZXIgPSBbY2MudjIoMTAsIDUwKSwgY2MudjIoNDAsIDYwKSwgY2MudjIoNjAsIDIwKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiZXppZXJGb3J3YXJkID0gY2MuYmV6aWVyQnkoMSwgYmV6aWVyKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5mYWRlVG8oMSwgMCksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDEsIDAuNiksXHJcbiAgICAgICAgICAgICAgICBiZXppZXJGb3J3YXJkXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLnJlbW92ZVNlbGYoKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXTEJhb2ppKG51bTogbnVtYmVyLCBmb3J3YXJkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJza2lsbF9jcml0XCIpXHJcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkdldEdhbWVPYmplY3QoXCJ3bF9iYW9qaVwiKSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIG5vZGUueCAqPSAtMTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q29pbihudW0pO1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC4yO1xyXG4gICAgICAgIHZhciBiZXppZXI7XHJcbiAgICAgICAgdmFyIGJlemllcjE7XHJcbiAgICAgICAgaWYgKGZvcndhcmQpIHtcclxuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKC01LCAyMCksIGNjLnYyKC04LCAzMCksIGNjLnYyKC0xMCwgMzApXTtcclxuICAgICAgICAgICAgYmV6aWVyMSA9IFtjYy52MigtNSwgLTIwKSwgY2MudjIoLTgsIC0zMCksIGNjLnYyKC0xMCwgLTMwKV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKDUsIDIwKSwgY2MudjIoOCwgMzApLCBjYy52MigxMCwgMzApXTtcclxuICAgICAgICAgICAgYmV6aWVyMSA9IFtjYy52Mig1LCAtMjApLCBjYy52Mig4LCAtMzApLCBjYy52MigxMCwgLTMwKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiZXppZXJGcm9udCA9IGNjLmJlemllckJ5KDAuMiwgYmV6aWVyKTtcclxuICAgICAgICB2YXIgYmV6aWVyQmFjayA9IGNjLmJlemllckJ5KDAuNSwgYmV6aWVyMSk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KDAuMiwgMCwgMzApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDEpLFxyXG4gICAgICAgICAgICAgICAgYmV6aWVyRnJvbnRcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuNSksXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KDAuMiwgMCwgLTMwKSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC41LCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgYmV6aWVyQmFjayxcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC41KSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2MucmVtb3ZlU2VsZigpXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=