
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
    Enemy.prototype.hit = function (plantlv, skilltype) {
        var _this = this;
        if (this.hp <= 0)
            return;
        var info = DB_1.DB_plant[plantlv - 1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEVuZW15LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQywyQ0FBc0M7QUFDdEMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0Qyw0QkFBNEM7QUFDNUMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFNO0lBQXpDO1FBQUEscUVBK1FDO1FBM1FHLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsV0FBSyxHQUFHLENBQUMsQ0FBQztRQWVWLFVBQUksR0FBRyxDQUFDLENBQUMsQ0FBQSxxQkFBcUI7UUE4SHRDLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFnQlIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVSxHQUFFLEVBQUUsQ0FBRTtRQUVoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFhLEdBQUcsQ0FBQyxDQUFDOztJQXFHOUIsQ0FBQztjQS9Rb0IsS0FBSztJQVVmLDRCQUFZLEdBQW5CO1FBRUksSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFDakI7WUFDSSxJQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxFQUN2RDtnQkFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUNuQjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENB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LEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ3RCLEVBQUUsQ0FBQyxLQUFLO1FBQ0oseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUNsQixXQUFXLENBQ2QsRUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixFQUFFLENBQUMsS0FBSztRQUNKLDBCQUEwQjtRQUMxQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDcEIsVUFBVSxFQUNWLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQ2xCLEVBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDOztJQWxHYSxTQUFHLEdBQUcsQ0FBQyxDQUFDO0lBdkt0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNTO0lBSlosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQStRekI7SUFBRCxZQUFDO0NBL1FELEFBK1FDLENBL1FrQyxnQkFBTSxHQStReEM7a0JBL1FvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IERCX3pvbWJpZSwgREJfcGxhbnQgfSBmcm9tIFwiLi4vREJcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBnZXRjb2luX3ByZTpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbWF4aHAgPSAwXHJcbiAgICBwcml2YXRlIGhwID0gMDtcclxuICAgIHByaXZhdGUgbW9uZXkgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBnZXRCb3NzTW9uZXkoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25leSAqPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5tYXhocCAtIHRoaXMuaHApL3RoaXMubWF4aHAgKiB0aGlzLm1vbmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHR5cGUgPSAwOy8vMCDmma7pgJogMSDlsI9ib3NzIDLlpKdib3NzXHJcbiAgICBhc3luYyBzZXRJRChpZDpudW1iZXIsYm9zczpib29sZWFuKS8v5piv5ZCmYm9zc1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGJvc3MgPyAxOjA7XHJcbiAgICAgICAgbGV0IGluZm8gPSBEQl96b21iaWVbaWQrXCJcIl07XHJcbiAgICAgICAgaWYoaWQgPiAxMDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZCAtPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpZCA+IDUyKSBpZCA9IFV0aWxzLmdldFJhbmRvbUludCgxLDUyKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYm9zc1wiKS5hY3RpdmUgPSB0aGlzLnR5cGUgPT0gMjtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ3NwJykuc2NhbGUgPSB0aGlzLnR5cGUgPT0gMiA/IDEgOiAwLjc0O1xyXG4gICAgICAgIHRoaXMuc3BlZCA9IGluZm9bMl0gKiB0aGlzLmJhc2Vfc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5tYXhocCA9IGluZm9bMV07XHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4aHA7XHJcbiAgICAgICAgdGhpcy5tb25leSA9IE1hdGguZmxvb3IoaW5mb1szXSAqIFV0aWxzLmdldFJhbmRvbSgwLjgsMS4yKSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudHlwZSA9PSAyP1wiYm9zc1wiOlwiZVwiLHRoaXMubWF4aHAsdGhpcy5tb25leSxcIj09PT1cIilcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBIYWxsU2NlbmUuSW5zdGFuY2UucGF0aFswXTtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSB0aGlzLnR5cGUgPT0gMCA/IC44IDogMTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoJ2NodXhpYW4nKVxyXG4gICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6ZW5lbXkke2lkfV9za2VgO1xyXG4gICAgICAgIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6ZW5lbXkke2lkfV90ZXhgO1xyXG4gICAgICAgIGxldCBhcm1hdHVyZSA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZShcInNwXCIpO1xyXG4gICAgICAgIGFybWF0dXJlLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcclxuICAgICAgICBhcm1hdHVyZS5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgYXJtYXR1cmUuYXJtYXR1cmVOYW1lID0gXCJBcm1hdHVyZVwiO1xyXG4gICAgICAgIGFybWF0dXJlLnBsYXlBbmltYXRpb24oJ3J1bicsMCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiTmV3IFByb2dyZXNzQmFyXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdChwbGFudGx2Om51bWJlcixza2lsbHR5cGU6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuaHAgPD0gMClyZXR1cm47XHJcbiAgICAgICAgbGV0IGluZm8gPSBEQl9wbGFudFtwbGFudGx2LTFdO1xyXG4gICAgICAgIGxldCBwb3dlciA9IE51bWJlcihpbmZvWzJdKVxyXG4gICAgICAgIGxldCBiYmogPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNza2lsbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHNraWxsdHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgLy/lh4/pgJ9cclxuICAgICAgICAgICAgdGhpcy5zbG93ZG93bigpO1xyXG4gICAgICAgICAgICBpc3NraWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihza2lsbHR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgIC8v5Y+M5YCN5Lyk5a6zXHJcbiAgICAgICAgICAgIHBvd2VyICo9IDI7XHJcbiAgICAgICAgICAgIGJiaiA9IHRydWU7XHJcbiAgICAgICAgICAgIGlzc2tpbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAzKXtcclxuICAgICAgICAgICAgLy/lhrDlhrtcclxuICAgICAgICAgICAgaXNza2lsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaHAgLT0gcG93ZXI7XHJcbiAgICAgICAgdGhpcy5ocCA9IE1hdGgubWF4KHRoaXMuaHAsMClcclxuICAgICAgICB0aGlzLlNldFByb2dyZXNzQmFyKFwiTmV3IFByb2dyZXNzQmFyXCIsdGhpcy5ocC90aGlzLm1heGhwKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJOZXcgUHJvZ3Jlc3NCYXJcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJOZXcgUHJvZ3Jlc3NCYXJcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJOZXcgUHJvZ3Jlc3NCYXJcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxjYy5mYWRlVG8oMC4yLDApKSlcclxuICAgICAgICBpZighaXNza2lsbCkgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKCdoaXQnKTtcclxuICAgICAgICBpZihiYmope1xyXG4gICAgICAgICAgICB0aGlzLnNob3dXTEJhb2ppKHBvd2VyLFV0aWxzLmdldFJhbmRvbSgwLDEpPjAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZTSHVydChwb3dlcixVdGlscy5nZXRSYW5kb20oMCwxKT4wLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmhwIDw9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UucmVtb3ZlZW5lbXkodGhpcy5ub2RlLGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmZhZGVUbyguMiwwKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgaWYoRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25leSAqPSAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2RhYm9zc+eVjOmdouWKoOmSsVxyXG4gICAgICAgICAgICBpZih0aGlzLnR5cGUgIT0gMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdldGNvaW5fcHJlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfYWRkX2NvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MygwLDUwLDApKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuekluZGV4ID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAwLjVcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5jb2luKz10aGlzLm1vbmV5O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2Muc2NhbGVUbygwLjIsMS4zKSxjYy5tb3ZlQnkoMC4yLDAsODApKSxjYy5kZWxheVRpbWUoLjgpLGNjLnNwYXduKGNjLm1vdmVCeSgwLjUsNTApLGNjLmZhZGVUbygwLjUsNTApKSxjYy5yZW1vdmVTZWxmKCkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYodGhpcy50eXBlID09IDIpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXlTa0FuaShcInNwaW5lL290aGVyL2RlYXRoXCIsXCJhbmltYXRpb25cIix0aGlzLm5vZGUsY2MudjMoMCw3NSwwKSwwLjgpXHJcbiAgICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZTpvdGhlci96aHVvc2hhb1wiLFwiZWZmZWN0XCIsdGhpcy5ub2RlLGNjLnYzKDAsNzUsMCksMSkudGhlbigobm9kZSk9PntcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPTIgO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGl0XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJoaXRcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVNrQW5pKFwic3BpbmU6b3RoZXIvaml6aG9uZ1wiLFwiYW5pbWF0aW9uXCIsdGhpcy5ub2RlLGNjLnYzKDAsNzUsMCksMSlcclxuICAgICAgICAgICAgdGhpcy5yZWRlbmR0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpICsgMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJoaXRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhpdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzbG93ZG93bigpXHJcbiAgICB7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwic2tpbGxfc2xvd1wiKVxyXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS50aW1lU2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5HZXREcmFnb25BbWF0dXJlKCdzcCcpLnRpbWVTY2FsZSA9IDAuNTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJqaWFuc3VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcInNwXCIpLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnc3AnKS50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJqaWFuc3VcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkpKVxyXG4gICAgfVxyXG5cclxuICAgIGJmcm96ZW4gPSBmYWxzZTtcclxuICAgIGZyb3plbigpXHJcbiAgICB7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwic2tpbGxfZnJlZXplXCIpXHJcbiAgICAgICAgdGhpcy5iZnJvemVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zdHVuXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc3R1blwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHVycGxlZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKSArIDEwMDA7XHJcbiAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcInNwXCIpLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc3R1blwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3N0dW5cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJzcFwiKS5wYXVzZWQgPSBmYWxzZTsgIFxyXG4gICAgICAgICAgICB0aGlzLmJmcm96ZW4gPSBmYWxzZTtcclxuICAgICAgICB9KSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXRoaW5kZXggPSAxO1xyXG4gICAgcHJpdmF0ZSBzcGVkID0gMTtcclxuICAgIHByaXZhdGUgYmFzZV9zcGVlZCA9NTAgO1xyXG5cclxuICAgIHByaXZhdGUgcmVkZW5kdGltZSA9IDA7XHJcbiAgICBwcml2YXRlIHB1cnBsZWVuZHRpbWUgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBtdWwgPSAxO1xyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gICAgICAgIGlmKGR0PjEpZHQ9MTtcclxuICAgICAgICBpZih0aGlzLnJlZGVuZHRpbWU+VXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuY29sb3IgPSBjYy5Db2xvci5SRUQuZnJvbUhFWChcIiM3QzgyREVcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnB1cnBsZWVuZHRpbWU+VXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuY29sb3IgPSBjYy5Db2xvci5SRUQuZnJvbUhFWChcIiNFRDczNzNcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuY29sb3IgPWNjLkNvbG9yLldISVRFXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmJmcm96ZW4pcmV0dXJuO1xyXG4gICAgICAgIGlmKCFIYWxsU2NlbmUuSW5zdGFuY2UucGF0aFt0aGlzLnBhdGhpbmRleF0pcmV0dXJuO1xyXG4gICAgICAgIGxldCBkID0gSGFsbFNjZW5lLkluc3RhbmNlLnBhdGhbdGhpcy5wYXRoaW5kZXhdLnN1Yih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGlmKGQubWFnKCkgPCB0aGlzLnNwZWQgKiBkdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9SGFsbFNjZW5lLkluc3RhbmNlLnBhdGhbdGhpcy5wYXRoaW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLnBhdGhpbmRleCsrO1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhdGhpbmRleCA9PSAzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuc2NhbGVYID0gLTAuNzQ7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnBhdGhpbmRleD49SGFsbFNjZW5lLkluc3RhbmNlLnBhdGgubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumAg+i/h1wiKVxyXG4gICAgICAgICAgICAgICAgSGFsbFNjZW5lLkluc3RhbmNlLnJlbW92ZWVuZW15KHRoaXMubm9kZSx0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHYgPSBkLm5vcm1hbGl6ZSgpLm11bChFbmVteS5tdWwgKiAgIHRoaXMuc3BlZCAqIGR0KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID10aGlzLm5vZGUucG9zaXRpb24uYWRkKHYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93RlNIdXJ0KG51bTogbnVtYmVyLCBmb3J3YXJkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuR2V0R2FtZU9iamVjdChcImZzX2h1cnRcIikpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGlmIChmb3J3YXJkKSBub2RlLnggKj0gLTE7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdENvaW4obnVtKTtcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIGJlemllcjtcclxuICAgICAgICBpZiAoZm9yd2FyZCkge1xyXG4gICAgICAgICAgICBiZXppZXIgPSBbY2MudjIoLTEwLCA1MCksIGNjLnYyKC00MCwgNjApLCBjYy52MigtNjAsIDIwKV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmV6aWVyID0gW2NjLnYyKDEwLCA1MCksIGNjLnYyKDQwLCA2MCksIGNjLnYyKDYwLCAyMCldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYmV6aWVyRm9yd2FyZCA9IGNjLmJlemllckJ5KDEsIGJlemllcik7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgLy8gY2MuZmFkZVRvKDEsIDApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAwLjYpLFxyXG4gICAgICAgICAgICAgICAgYmV6aWVyRm9yd2FyZFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjYy5yZW1vdmVTZWxmKClcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93V0xCYW9qaShudW06IG51bWJlciwgZm9yd2FyZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwic2tpbGxfY3JpdFwiKVxyXG4gICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5HZXRHYW1lT2JqZWN0KFwid2xfYmFvamlcIikpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGlmIChmb3J3YXJkKSBub2RlLnggKj0gLTE7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdENvaW4obnVtKTtcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuMjtcclxuICAgICAgICB2YXIgYmV6aWVyO1xyXG4gICAgICAgIHZhciBiZXppZXIxO1xyXG4gICAgICAgIGlmIChmb3J3YXJkKSB7XHJcbiAgICAgICAgICAgIGJlemllciA9IFtjYy52MigtNSwgMjApLCBjYy52MigtOCwgMzApLCBjYy52MigtMTAsIDMwKV07XHJcbiAgICAgICAgICAgIGJlemllcjEgPSBbY2MudjIoLTUsIC0yMCksIGNjLnYyKC04LCAtMzApLCBjYy52MigtMTAsIC0zMCldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJlemllciA9IFtjYy52Mig1LCAyMCksIGNjLnYyKDgsIDMwKSwgY2MudjIoMTAsIDMwKV07XHJcbiAgICAgICAgICAgIGJlemllcjEgPSBbY2MudjIoNSwgLTIwKSwgY2MudjIoOCwgLTMwKSwgY2MudjIoMTAsIC0zMCldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYmV6aWVyRnJvbnQgPSBjYy5iZXppZXJCeSgwLjIsIGJlemllcik7XHJcbiAgICAgICAgdmFyIGJlemllckJhY2sgPSBjYy5iZXppZXJCeSgwLjUsIGJlemllcjEpO1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgIC8vIGNjLm1vdmVCeSgwLjIsIDAsIDMwKSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxKSxcclxuICAgICAgICAgICAgICAgIGJlemllckZyb250XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjUpLFxyXG4gICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgIC8vIGNjLm1vdmVCeSgwLjIsIDAsIC0zMCksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuNSwgMC4yKSxcclxuICAgICAgICAgICAgICAgIGJlemllckJhY2ssXHJcbiAgICAgICAgICAgICAgICBjYy5mYWRlT3V0KDAuNSksXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLnJlbW92ZVNlbGYoKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19