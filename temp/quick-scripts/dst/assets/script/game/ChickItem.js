
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
    ChickItem.prototype.showPot = function (path) {
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
    ChickItem.prototype.animComplete = function (evt) {
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
    ChickItem.prototype.getTarget = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9DaGlja0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGtEQUE2QztBQUU3Qyx3Q0FBbUM7QUFDbkMsbUNBQXdDO0FBQ3hDLHlDQUFvQztBQUNwQywwQ0FBcUM7QUFJL0IsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHL0Q7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUFvTEM7UUFsTEcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDckIsV0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25CLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFDM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDbkIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBbUhoQixRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVAsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFzRHpCLENBQUM7SUF6S0cseUJBQUssR0FBTDtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLENBQVksRUFBQyxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW1CLENBQUM7UUFDekMsSUFBRyxRQUFRLElBQUksQ0FBQyxDQUFDO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDNUMsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxFQUN2RTtZQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsS0FBSyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTztRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlCLE9BQU87YUFDVjtTQUNKO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFSyw4QkFBVSxHQUFoQjs7Ozs7O3dCQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7d0JBQy9DLElBQUcsTUFBTSxFQUFDOzRCQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0QkFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQzdDLHNCQUFPO3lCQUNWOzZCQUNHLENBQUMsTUFBTSxFQUFQLHdCQUFPO3dCQUVQLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDOzZCQUNuRixDQUFBLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFBLEVBQWxCLHdCQUFrQjt3QkFFakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDN0MscUJBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzs7O3dCQUkxQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7Ozs7S0FHdEM7SUFFYSwyQkFBTyxHQUFyQixVQUFzQixJQUFXOzs7O2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFJLFdBQVcsQ0FBQztnQkFDM0IsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUMxRCxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0tBQ1I7SUFFYSxnQ0FBWSxHQUExQjs7Ozs7O3dCQUNRLElBQUksR0FBRyxxQkFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzNELElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDOzZCQUN0QyxDQUFBLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFBLEVBQXpCLHdCQUF5Qjt3QkFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7d0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNyQyxNQUFNLEdBQUcsaUJBQWUsSUFBSSxTQUFNLENBQUM7d0JBQ25DLFNBQVMsR0FBRyxpQkFBZSxJQUFJLFNBQU0sQ0FBQzt3QkFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDM0MsS0FBQSxLQUFLLENBQUE7d0JBQWUscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUE7O3dCQUE1RSxHQUFNLFdBQVcsSUFBRyxTQUF3RixDQUFBLENBQUM7d0JBQzdHLEtBQUEsS0FBSyxDQUFBO3dCQUFvQixxQkFBTSxlQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsRUFBQTs7d0JBQXpGLEdBQU0sZ0JBQWdCLElBQUcsU0FBcUcsQ0FBQSxDQUFDO3dCQUMvSCxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQzt3QkFDaEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztLQUV0QztJQUVPLGdDQUFZLEdBQXBCLFVBQXFCLEdBQVk7UUFDN0IsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFDO1lBQzVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxJQUFHLEtBQUssQ0FBQyxhQUFhLElBQUksTUFBTSxFQUFDO2dCQUM3QixLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7YUFDN0I7aUJBQ0ksSUFBRyxLQUFLLENBQUMsYUFBYSxJQUFJLE1BQU0sRUFBQztnQkFDbEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO2FBQzdCO1NBQ0o7SUFDTCxDQUFDO0lBRU8sNkJBQVMsR0FBakI7UUFFSSxJQUFJLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsRUFDcEM7WUFDSSxJQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBQyxDQUFDO2dCQUFDLFNBQVM7WUFDaEQsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5RCxJQUFHLEdBQUcsR0FBRyxNQUFNLEVBQ2Y7Z0JBQ0ksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxHQUFHLEdBQUcsQ0FBQzthQUNoQjtTQUNKO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUlELDBCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQVQsaUJBb0RDO1FBbERHLElBQUcsRUFBRSxHQUFHLENBQUM7WUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsRUFDaEc7WUFDSSxJQUFHLEtBQUs7Z0JBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzFDO2FBRUQ7WUFDSSxJQUFHLEtBQUs7Z0JBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzNDO1FBQ0QsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFDckI7WUFDSSxJQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQ2hEO2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckI7U0FDSjtRQUNELElBQUcsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ3RCLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDMUIsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQzlCLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hHO1lBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxRQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzlCLElBQUcsUUFBTSxFQUNUO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUMxRCxJQUFHLEtBQUksQ0FBQyxLQUFLO3dCQUFFLE9BQU87b0JBQ3RCLElBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUTt3QkFBRSxPQUFPO29CQUMxQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3RixDQUFDLENBQUMsTUFBTSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDM0QsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQU0sRUFBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxJQUFHLFFBQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3pCO3dCQUNJLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztxQkFDNUI7eUJBRUQ7d0JBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO3FCQUM1QjtnQkFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDUDtTQUNKO0lBQ0wsQ0FBQztJQWpMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNRO0lBRlgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW9MN0I7SUFBRCxnQkFBQztDQXBMRCxBQW9MQyxDQXBMc0MsZ0JBQU0sR0FvTDVDO2tCQXBMb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7IENvbmZpZ19jaGljayB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi9IYWxsU2NlbmVcIjtcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vcHJlZmFiL0J1bGxldFwiO1xuaW1wb3J0IHsgUGxhbnRJbmZvIH0gZnJvbSBcIi4vVXNlck1vZGVsXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBleGVjdXRlSW5FZGl0TW9kZSwgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlja0l0ZW0gZXh0ZW5kcyBCYXNlVUkge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYnVsbGV0X3ByZTpjYy5QcmVmYWIgPSBudWxsO1xuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIGxpbmtJdGVtOiBDaGlja0l0ZW0gPSBudWxsO1xuICAgIHB1YmxpYyBkYXRhY29weTogUGxhbnRJbmZvID0gbnVsbDtcbiAgICBwdWJsaWMgYkRyYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZHJvcHR5cGU6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGRyb3B0eXBlMGVuZHRpbWUgPSAwO1xuICAgIHByaXZhdGUgY3VycGxheWFuaSA9IFwiXCI7XG5cbiAgICBzdGFydCgpe1xuICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrJyk7XG4gICAgICAgIGNoaWNrLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsdGhpcy5hbmltQ29tcGxldGUsdGhpcyk7XG4gICAgfVxuXG4gICAgc2V0SXRlbURhdGEoZDogUGxhbnRJbmZvLGRyb3B0eXBlOm51bWJlciA9IC0xKSB7Ly8gM+aZrumAmuaOieiQvSA05bCP57K+54G15o6J6JC9XG4gICAgICAgIGlmKGRyb3B0eXBlICE9IC0xKSB0aGlzLmRyb3B0eXBlID0gZHJvcHR5cGU7XG4gICAgICAgIGlmKHRoaXMuZHJvcHR5cGUgIT0gMCAmJiAgdGhpcy5kcm9wdHlwZTBlbmR0aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRyb3B0eXBlMGVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgKyAxMDAwMDtcbiAgICAgICAgfVxuICAgICAgICAvL+WHj+WwkemHjee7mOWItlxuICAgICAgICBpZiAodGhpcy5kYXRhY29weSAmJiBkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhY29weS5pbmRleCA9PSBkLmluZGV4ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhY29weS5sdiA9PSBkLmx2ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhY29weS5vcGVuID09IGQub3Blbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YWNvcHkgPSBkID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkKSkgOiBudWxsO1xuICAgICAgICBpZiAodGhpcy5kYXRhY29weSkgdGhpcy5kYXRhY29weS5pbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZUl0ZW0oKSB7XG4gICAgICAgIGxldCBpc051bGwgPSB0aGlzLmRhdGFjb3B5ID09IG51bGw7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxldmVsXzFcIikuYWN0aXZlID0gIWlzTnVsbDtcbiAgICAgICAgaWYoaXNOdWxsKXtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnY2hpY2snKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZsb3dlcjFcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc051bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwibHYuXCIgKyB0aGlzLmRhdGFjb3B5Lmx2O1xuICAgICAgICAgICAgaWYodGhpcy5kcm9wdHlwZSA9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnY2hpY2snKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZsb3dlcjFcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9kdWNlQ2hpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2x2XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZsb3dlcjFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3QoJ3NwaW5lOnBvdDEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGFzeW5jIHNob3dQb3QocGF0aDpzdHJpbmcpe1xuICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSAgXCJwb3QxX2lkbGVcIjtcbiAgICAgICAgbGV0IHBvdEFuaSA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnZmxvd2VyMScpO1xuICAgICAgICBwb3RBbmkucGxheUFuaW1hdGlvbignZmFsbCcsMSk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuOCksY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgIHBvdEFuaS5wbGF5QW5pbWF0aW9uKCdpZGxlJywwKTtcbiAgICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHByb2R1Y2VDaGljaygpe1xuICAgICAgICBsZXQgaW5mbyA9IENvbmZpZ19jaGlja1tNYXRoLm1pbih0aGlzLmRhdGFjb3B5Lmx2IC0gMSw1OSldO1xuICAgICAgICB0aGlzLmNkID0gTnVtYmVyKGluZm9bMV0pO1xuICAgICAgICBsZXQgbm93YW5pID0gdGhpcy5kYXRhY29weS5sdiArICdfaWRsZUwnO1xuICAgICAgICBpZih0aGlzLmN1cnBsYXlhbmkgIT0gbm93YW5pKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSBub3dhbmk7XG4gICAgICAgICAgICBsZXQgc2ZpZCA9IE1hdGgubWluKHRoaXMuZGF0YWNvcHkubHYsNjApO1xuICAgICAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTpmbG93ZXIke3NmaWR9X3NrZWA7XG4gICAgICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7c2ZpZH1fdGV4YDtcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcbiAgICAgICAgICAgIGNoaWNrLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XG4gICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFuaW1Db21wbGV0ZShldnQ6Y2MuRXZlbnQpe1xuICAgICAgICBpZihldnQudHlwZSA9PSBkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSl7XG4gICAgICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrJyk7XG4gICAgICAgICAgICBpZihjaGljay5hbmltYXRpb25OYW1lID09ICdhdGtSJyl7XG4gICAgICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignaWRsZVInLDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9ICdpZGxlUic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGNoaWNrLmFuaW1hdGlvbk5hbWUgPT0gJ2F0a0wnKXtcbiAgICAgICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gJ2lkbGVMJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VGFyZ2V0KClcbiAgICB7XG4gICAgICAgIGxldCBlbmVteWxpc3QgPSBIYWxsU2NlbmUuSW5zdGFuY2UuZW5lbXlsaXN0O1xuICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgbGV0IG1pbmRpcyA9IDYwMDtcbiAgICAgICAgZm9yKHZhciBpID0gMDtpPGVuZW15bGlzdC5sZW5ndGg7KytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihlbmVteWxpc3RbaV0ueDwgLWNjLndpblNpemUud2lkdGgvMiljb250aW51ZTtcbiAgICAgICAgICAgIGxldCBkaXMgPSBlbmVteWxpc3RbaV0ucG9zaXRpb24uc3ViKHRoaXMubm9kZS5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgICAgICBpZihkaXMgPCBtaW5kaXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZW5lbXlsaXN0W2ldO1xuICAgICAgICAgICAgICAgIG1pbmRpcyA9IGRpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIHByaXZhdGUgY2QgPSAwO1xuICAgIFxuICAgIHByaXZhdGUgbGFzdGZpcmUgPSAwO1xuICAgIHVwZGF0ZShkdClcbiAgICB7XG4gICAgICAgIGlmKGR0ID4gMSkgZHQgPSAxO1xuICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrJyk7XG4gICAgICAgIGlmKHRoaXMuZGF0YWNvcHkgJiYgdGhpcy5kcm9wdHlwZSA9PSAwICYmIENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoY2hpY2spIGNoaWNrLnRpbWVTY2FsZSA9IDEuNTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImtiXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihjaGljaykgY2hpY2sudGltZVNjYWxlID0gMTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImtiXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZHJvcHR5cGUgIT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gdGhpcy5kcm9wdHlwZTBlbmR0aW1lKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcHR5cGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYkRyYWcpIHJldHVybjtcbiAgICAgICAgaWYoIXRoaXMuZGF0YWNvcHkpIHJldHVybjtcbiAgICAgICAgaWYodGhpcy5kcm9wdHlwZSAhPSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMubGFzdGZpcmUgKz0gZHQ7XG4gICAgICAgIGlmKHRoaXMubGFzdGZpcmUgPj0gdGhpcy5jZCAvICgoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSA/IDIgOiAxKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5sYXN0ZmlyZSA9IDA7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQoKTtcbiAgICAgICAgICAgIGlmKHRhcmdldClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYkRyYWcpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuZGF0YWNvcHkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldF9wcmUpO1xuICAgICAgICAgICAgICAgICAgICBiLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh0YXJnZXQueCA+IHRoaXMubm9kZS54ID8gY2MudjMoMzAsMzUsMCk6Y2MudjMoLTMwLDM1LDApKTtcbiAgICAgICAgICAgICAgICAgICAgYi5wYXJlbnQgPSBIYWxsU2NlbmUuSW5zdGFuY2UuR2V0R2FtZU9iamVjdChcIm5vZGVfYnVsbGV0XCIpO1xuICAgICAgICAgICAgICAgICAgICBiLmdldENvbXBvbmVudChCdWxsZXQpLnNldEluZm8odGFyZ2V0LHRoaXMuZGF0YWNvcHkubHYpO1xuICAgICAgICAgICAgICAgICAgICBpZih0YXJnZXQueCA+IHRoaXMubm9kZS54KVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdhdGtSJywxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IFwiYXRrUlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignYXRrTCcsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSBcImF0a0xcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==