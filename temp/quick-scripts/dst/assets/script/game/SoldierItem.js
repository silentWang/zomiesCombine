
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/SoldierItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58176B7xzJGVr/d2mUCbUBE', 'SoldierItem');
// script/game/SoldierItem.ts

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
var Data_1 = require("../manager/Data");
var Utils_1 = require("../utils/Utils");
var DB_1 = require("./DB");
var HallScene_1 = require("./HallScene");
var Bullet_1 = require("./prefab/Bullet");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, property = _a.property;
var SoldierItem = /** @class */ (function (_super) {
    __extends(SoldierItem, _super);
    function SoldierItem() {
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
    SoldierItem.prototype.start = function () {
        var chick = this.GetDragonAmature('chick');
        chick.addEventListener(dragonBones.EventObject.COMPLETE, this.animComplete, this);
    };
    SoldierItem.prototype.setItemData = function (d, droptype) {
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
        // console.log("setItemData",d)
        this.datacopy = d ? JSON.parse(JSON.stringify(d)) : null;
        if (this.datacopy)
            this.datacopy.index = this.index;
        this.updateItem();
    };
    SoldierItem.prototype.updateItem = function () {
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
    SoldierItem.prototype.showPot = function (path) {
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
    SoldierItem.prototype.produceChick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, nowani, sfid, skpath, atlaspath, chick, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        info = DB_1.DB_plant[Math.min(this.datacopy.lv - 1, 59)];
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
    SoldierItem.prototype.animComplete = function (evt) {
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
    SoldierItem.prototype.getTarget = function () {
        var enemylist = HallScene_1.default.Instance.enemylist;
        var target = null;
        var mindis = 400;
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
    SoldierItem.prototype.update = function (dt) {
        var _this = this;
        if (dt > 1)
            dt = 1;
        var chick = this.GetDragonAmature('chick');
        if (this.datacopy && this.droptype == 0 && Data_1.default.user.double_att_time > Utils_1.default.getServerTime()) {
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
        if (this.lastfire >= this.cd / ((Data_1.default.user.double_att_time > Utils_1.default.getServerTime()) ? 2 : 1)) {
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
    ], SoldierItem.prototype, "bullet_pre", void 0);
    SoldierItem = __decorate([
        ccclass
    ], SoldierItem);
    return SoldierItem;
}(BaseUI_1.default));
exports.default = SoldierItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTb2xkaWVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsd0NBQW1DO0FBQ25DLHdDQUFtQztBQUNuQywyQkFBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLDBDQUFxQztBQUkvQixJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUcvRDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQXFMQztRQW5MRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUNyQixXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFDN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDbkIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBb0hoQixRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVAsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFzRHpCLENBQUM7SUExS0csMkJBQUssR0FBTDtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLENBQVksRUFBQyxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW1CLENBQUM7UUFDekMsSUFBRyxRQUFRLElBQUksQ0FBQyxDQUFDO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDNUMsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFFLENBQUMsSUFBSyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxFQUNyRTtZQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsS0FBSyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTztRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlCLE9BQU87YUFDVjtTQUNKO1FBRUQsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUssZ0NBQVUsR0FBaEI7Ozs7Ozt3QkFDUSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7d0JBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDO3dCQUMvQyxJQUFHLE1BQU0sRUFBQzs0QkFDTixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0QkFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUM3QyxzQkFBTzt5QkFDVjs2QkFDRyxDQUFDLE1BQU0sRUFBUCx3QkFBTzt3QkFFUCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs2QkFDbkYsQ0FBQSxJQUFJLENBQUMsUUFBUSxJQUFFLENBQUMsQ0FBQSxFQUFoQix3QkFBZ0I7d0JBRWYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDN0MscUJBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzs7O3dCQUkxQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7Ozs7S0FHdEM7SUFFYSw2QkFBTyxHQUFyQixVQUFzQixJQUFXOzs7O2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFJLFdBQVcsQ0FBQztnQkFDM0IsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUMxRCxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0tBQ1I7SUFFYSxrQ0FBWSxHQUExQjs7Ozs7O3dCQUNRLElBQUksR0FBRyxhQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUM7NkJBQ3RDLENBQUEsSUFBSSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUEsRUFBekIsd0JBQXlCO3dCQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQzt3QkFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3JDLE1BQU0sR0FBRyxpQkFBZSxJQUFJLFNBQU0sQ0FBQzt3QkFDbkMsU0FBUyxHQUFHLGlCQUFlLElBQUksU0FBTSxDQUFDO3dCQUN0QyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMzQyxLQUFBLEtBQUssQ0FBQTt3QkFBZSxxQkFBTSxlQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBQTs7d0JBQTVFLEdBQU0sV0FBVyxJQUFHLFNBQXdGLENBQUEsQ0FBQzt3QkFDN0csS0FBQSxLQUFLLENBQUE7d0JBQW9CLHFCQUFNLGVBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFBOzt3QkFBekYsR0FBTSxnQkFBZ0IsSUFBRyxTQUFxRyxDQUFBLENBQUM7d0JBQy9ILEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO3dCQUNoQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRXRDO0lBRU8sa0NBQVksR0FBcEIsVUFBcUIsR0FBWTtRQUM3QixJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUM7WUFDNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLElBQUcsS0FBSyxDQUFDLGFBQWEsSUFBSSxNQUFNLEVBQUM7Z0JBQzdCLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQzthQUM3QjtpQkFDSSxJQUFHLEtBQUssQ0FBQyxhQUFhLElBQUksTUFBTSxFQUFDO2dCQUNsQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7YUFDN0I7U0FDSjtJQUNMLENBQUM7SUFFTywrQkFBUyxHQUFqQjtRQUVJLElBQUksU0FBUyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQyxFQUNwQztZQUNJLElBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFDLENBQUM7Z0JBQUMsU0FBUztZQUNoRCxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzlELElBQUcsR0FBRyxHQUFHLE1BQU0sRUFDZjtnQkFDSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQ2hCO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBSUQsNEJBQU0sR0FBTixVQUFPLEVBQUU7UUFBVCxpQkFvREM7UUFsREcsSUFBRyxFQUFFLEdBQUcsQ0FBQztZQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEVBQzNGO1lBQ0ksSUFBRyxLQUFLO2dCQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUMxQzthQUVEO1lBQ0ksSUFBRyxLQUFLO2dCQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMzQztRQUNELElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQ3JCO1lBQ0ksSUFBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUNoRDtnQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1NBQ0o7UUFDRCxJQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN0QixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzFCLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzNGO1lBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxRQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzlCLElBQUcsUUFBTSxFQUNUO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUMxRCxJQUFHLEtBQUksQ0FBQyxLQUFLO3dCQUFFLE9BQU87b0JBQ3RCLElBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUTt3QkFBRSxPQUFPO29CQUMxQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3RixDQUFDLENBQUMsTUFBTSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDM0QsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQU0sRUFBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxJQUFHLFFBQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3pCO3dCQUNJLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztxQkFDNUI7eUJBRUQ7d0JBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO3FCQUM1QjtnQkFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDUDtTQUNKO0lBQ0wsQ0FBQztJQWxMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNRO0lBRlgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFML0I7SUFBRCxrQkFBQztDQXJMRCxBQXFMQyxDQXJMd0MsZ0JBQU0sR0FxTDlDO2tCQXJMb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgREJfcGxhbnQgfSBmcm9tIFwiLi9EQlwiO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gXCIuL0hhbGxTY2VuZVwiO1xyXG5pbXBvcnQgQnVsbGV0IGZyb20gXCIuL3ByZWZhYi9CdWxsZXRcIjtcclxuaW1wb3J0IHsgUGxhbnRJbmZvIH0gZnJvbSBcIi4vVXNlck1vZGVsXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBleGVjdXRlSW5FZGl0TW9kZSwgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2xkaWVySXRlbSBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYnVsbGV0X3ByZTpjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBsaW5rSXRlbTogU29sZGllckl0ZW0gPSBudWxsO1xyXG4gICAgcHVibGljIGRhdGFjb3B5OiBQbGFudEluZm8gPSBudWxsO1xyXG4gICAgcHVibGljIGJEcmFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZHJvcHR5cGU6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZHJvcHR5cGUwZW5kdGltZSA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnBsYXlhbmkgPSBcIlwiO1xyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpO1xyXG4gICAgICAgIGNoaWNrLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsdGhpcy5hbmltQ29tcGxldGUsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbURhdGEoZDogUGxhbnRJbmZvLGRyb3B0eXBlOm51bWJlciA9IC0xKSB7Ly8gM+aZrumAmuaOieiQvSA05bCP57K+54G15o6J6JC9XHJcbiAgICAgICAgaWYoZHJvcHR5cGUgIT0gLTEpIHRoaXMuZHJvcHR5cGUgPSBkcm9wdHlwZTtcclxuICAgICAgICBpZih0aGlzLmRyb3B0eXBlIT0wICYmICB0aGlzLmRyb3B0eXBlMGVuZHRpbWUgPCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRyb3B0eXBlMGVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgKyAxMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lh4/lsJHph43nu5jliLZcclxuICAgICAgICBpZiAodGhpcy5kYXRhY29weSAmJiBkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFjb3B5LmluZGV4ID09IGQuaW5kZXggJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWNvcHkubHYgPT0gZC5sdiAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhY29weS5vcGVuID09IGQub3Blbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNldEl0ZW1EYXRhXCIsZClcclxuICAgICAgICB0aGlzLmRhdGFjb3B5ID0gZCA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZCkpIDogbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5kYXRhY29weSkgdGhpcy5kYXRhY29weS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlSXRlbSgpIHtcclxuICAgICAgICBsZXQgaXNOdWxsID0gdGhpcy5kYXRhY29weSA9PSBudWxsO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxldmVsXzFcIikuYWN0aXZlID0gIWlzTnVsbDtcclxuICAgICAgICBpZihpc051bGwpe1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZmxvd2VyMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzTnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwibHYuXCIgKyB0aGlzLmRhdGFjb3B5Lmx2O1xyXG4gICAgICAgICAgICBpZih0aGlzLmRyb3B0eXBlPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZmxvd2VyMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvZHVjZUNoaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2NoaWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfbHZcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmbG93ZXIxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3QoJ3NwaW5lOnBvdDEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBhc3luYyBzaG93UG90KHBhdGg6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSAgXCJwb3QxX2lkbGVcIjtcclxuICAgICAgICBsZXQgcG90QW5pID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdmbG93ZXIxJyk7XHJcbiAgICAgICAgcG90QW5pLnBsYXlBbmltYXRpb24oJ2ZhbGwnLDEpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuOCksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgcG90QW5pLnBsYXlBbmltYXRpb24oJ2lkbGUnLDApO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBwcm9kdWNlQ2hpY2soKXtcclxuICAgICAgICBsZXQgaW5mbyA9IERCX3BsYW50W01hdGgubWluKHRoaXMuZGF0YWNvcHkubHYgLSAxLDU5KV07XHJcbiAgICAgICAgdGhpcy5jZCA9IE51bWJlcihpbmZvWzFdKTtcclxuICAgICAgICBsZXQgbm93YW5pID0gdGhpcy5kYXRhY29weS5sdiArICdfaWRsZUwnO1xyXG4gICAgICAgIGlmKHRoaXMuY3VycGxheWFuaSAhPSBub3dhbmkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSBub3dhbmk7XHJcbiAgICAgICAgICAgIGxldCBzZmlkID0gTWF0aC5taW4odGhpcy5kYXRhY29weS5sdiw2MCk7XHJcbiAgICAgICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtzZmlkfV9za2VgO1xyXG4gICAgICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7c2ZpZH1fdGV4YDtcclxuICAgICAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpO1xyXG4gICAgICAgICAgICBjaGljay5kcmFnb25Bc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoc2twYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQ7XHJcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcclxuICAgICAgICAgICAgY2hpY2suYXJtYXR1cmVOYW1lID0gJ0FybWF0dXJlJztcclxuICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignaWRsZUwnLDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFuaW1Db21wbGV0ZShldnQ6Y2MuRXZlbnQpe1xyXG4gICAgICAgIGlmKGV2dC50eXBlID09IGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkNPTVBMRVRFKXtcclxuICAgICAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpO1xyXG4gICAgICAgICAgICBpZihjaGljay5hbmltYXRpb25OYW1lID09ICdhdGtSJyl7XHJcbiAgICAgICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlUicsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSAnaWRsZVInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY2hpY2suYW5pbWF0aW9uTmFtZSA9PSAnYXRrTCcpe1xyXG4gICAgICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignaWRsZUwnLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gJ2lkbGVMJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhcmdldCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVuZW15bGlzdCA9IEhhbGxTY2VuZS5JbnN0YW5jZS5lbmVteWxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgbGV0IG1pbmRpcyA9IDQwMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwO2k8ZW5lbXlsaXN0Lmxlbmd0aDsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihlbmVteWxpc3RbaV0ueDwgLWNjLndpblNpemUud2lkdGgvMiljb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGRpcyA9IGVuZW15bGlzdFtpXS5wb3NpdGlvbi5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYoZGlzIDwgbWluZGlzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBlbmVteWxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBtaW5kaXMgPSBkaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNkID0gMDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsYXN0ZmlyZSA9IDA7XHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZHQgPiAxKSBkdCA9IDE7XHJcbiAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGljaycpO1xyXG4gICAgICAgIGlmKHRoaXMuZGF0YWNvcHkgJiYgdGhpcy5kcm9wdHlwZSA9PSAwICYmIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihjaGljaykgY2hpY2sudGltZVNjYWxlID0gMS41O1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJrYlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihjaGljaykgY2hpY2sudGltZVNjYWxlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwia2JcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZHJvcHR5cGUgIT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IHRoaXMuZHJvcHR5cGUwZW5kdGltZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wdHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmJEcmFnKSByZXR1cm47XHJcbiAgICAgICAgaWYoIXRoaXMuZGF0YWNvcHkpIHJldHVybjtcclxuICAgICAgICBpZih0aGlzLmRyb3B0eXBlICE9IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLmxhc3RmaXJlICs9IGR0O1xyXG4gICAgICAgIGlmKHRoaXMubGFzdGZpcmUgPj0gdGhpcy5jZCAvICgoRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKSkgPyAyIDogMSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RmaXJlID0gMDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0VGFyZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmKHRhcmdldClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYkRyYWcpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5kYXRhY29weSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRfcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICBiLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh0YXJnZXQueCA+IHRoaXMubm9kZS54ID8gY2MudjMoMzAsMzUsMCk6Y2MudjMoLTMwLDM1LDApKTtcclxuICAgICAgICAgICAgICAgICAgICBiLnBhcmVudCA9IEhhbGxTY2VuZS5JbnN0YW5jZS5HZXRHYW1lT2JqZWN0KFwibm9kZV9idWxsZXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5nZXRDb21wb25lbnQoQnVsbGV0KS5zZXRJbmZvKHRhcmdldCx0aGlzLmRhdGFjb3B5Lmx2KTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0YXJnZXQueCA+IHRoaXMubm9kZS54KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignYXRrUicsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IFwiYXRrUlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdhdGtMJywxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJwbGF5YW5pID0gXCJhdGtMXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==