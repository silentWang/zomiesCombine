
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
            var info, _a, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.GetGameObject("level_1").active = this.datacopy != null;
                        this.GetGameObject("flower1").active = this.datacopy != null;
                        if (!this.datacopy) return [3 /*break*/, 8];
                        this.GetGameObject("lbl_lv").getComponent(cc.Label).string = "lv." + this.datacopy.lv;
                        if (!(this.droptype == 0)) return [3 /*break*/, 3];
                        this.GetGameObject("lbl_lv").active = true;
                        info = DB_1.DB_plant[Math.min(this.datacopy.lv - 1, 59)];
                        this.cd = Number(info[1]);
                        if (!(this.curplayani != this.datacopy.lv + "_idleL")) return [3 /*break*/, 2];
                        this.curplayani = this.datacopy.lv + "_idleL";
                        _a = this.GetSkeleton("flower1");
                        return [4 /*yield*/, Utils_1.default.loadRes("spine:flower" + Math.min(this.datacopy.lv, 60), sp.SkeletonData)];
                    case 1:
                        _a.skeletonData = (_d.sent());
                        this.GetSkeleton("flower1").setAnimation(0, "idleL", true);
                        _d.label = 2;
                    case 2: return [3 /*break*/, 8];
                    case 3:
                        this.GetGameObject("lbl_lv").active = false;
                        if (!(this.droptype == 4)) return [3 /*break*/, 6];
                        if (!(this.curplayani != "pot1_idle")) return [3 /*break*/, 5];
                        this.curplayani = "pot1_idle";
                        this.node.opacity = 0;
                        _b = this.GetSkeleton("flower1");
                        return [4 /*yield*/, Utils_1.default.loadRes("spine:pot1", sp.SkeletonData)];
                    case 4:
                        _b.skeletonData = (_d.sent());
                        this.GetSkeleton("flower1").clearTracks();
                        this.GetSkeleton("flower1").setAnimation(0, "fall", false);
                        this.node.opacity = 255;
                        this.node.runAction(cc.sequence(cc.delayTime(0.8), cc.callFunc(function () {
                            _this.GetSkeleton("flower1").setAnimation(1, "idle", true);
                        })));
                        console.log("===2=", this.datacopy.lv);
                        _d.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        if (!(this.curplayani != "pot3_idle")) return [3 /*break*/, 8];
                        this.curplayani = "pot3_idle";
                        this.node.opacity = 0;
                        _c = this.GetSkeleton("flower1");
                        return [4 /*yield*/, Utils_1.default.loadRes("spine:pot3", sp.SkeletonData)];
                    case 7:
                        _c.skeletonData = (_d.sent());
                        this.GetSkeleton("flower1").clearTracks();
                        this.GetSkeleton("flower1").setAnimation(0, "fall", false);
                        this.node.opacity = 255;
                        this.node.runAction(cc.sequence(cc.delayTime(0.8), cc.callFunc(function () {
                            _this.GetSkeleton("flower1").setAnimation(1, "idle", true);
                        })));
                        console.log("===1", this.datacopy.lv);
                        _d.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
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
        if (this.datacopy && this.droptype == 0 && Data_1.default.user.double_att_time > Utils_1.default.getServerTime()) {
            this.GetSkeleton("flower1").timeScale = 1.5;
            this.GetGameObject("kb").active = true;
        }
        else {
            this.GetSkeleton("flower1").timeScale = 1;
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
                    b.position = _this.node.position.add(target_1.x > _this.node.x ? cc.v3(15, 35, 0) : cc.v3(-15, 35, 0));
                    b.parent = HallScene_1.default.Instance.GetGameObject("node_bullet");
                    b.getComponent(Bullet_1.default).setInfo(target_1, _this.datacopy.lv);
                })));
                if (target_1.x > this.node.x) {
                    this.GetSkeleton("flower1").setAnimation(0, "atkR", false);
                    this.GetSkeleton("flower1").setAnimation(1, "idleR", true);
                    this.curplayani = "idleR";
                }
                else {
                    this.GetSkeleton("flower1").setAnimation(0, "atkL", false);
                    this.GetSkeleton("flower1").setAnimation(1, "idleL", true);
                    this.curplayani = "idleL";
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTb2xkaWVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsd0NBQW1DO0FBQ25DLHdDQUFtQztBQUNuQywyQkFBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLDBDQUFxQztBQUkvQixJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUcvRDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQW9MQztRQWhMRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFbkIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFDN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFFcEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBMkJiLGdCQUFVLEdBQUcsRUFBRSxDQUFBO1FBK0VmLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFFUCxjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQTBEekIsQ0FBQztJQXBLRyxpQ0FBVyxHQUFYLFVBQVksQ0FBWSxFQUFDLFFBQW9CO1FBQXBCLHlCQUFBLEVBQUEsWUFBbUIsQ0FBQztRQUN6QyxJQUFHLFFBQVEsSUFBSSxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUU3QixJQUFHLElBQUksQ0FBQyxRQUFRLElBQUUsQ0FBQyxJQUFLLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEVBQ3JFO1lBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQUssQ0FBQyxh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Q0FwTEQsQUFvTEMsQ0FwTHdDLGdCQUFNLEdBb0w5QztrQkFwTG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uL21hbmFnZXIvRGF0YVwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IERCX3BsYW50IH0gZnJvbSBcIi4vREJcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi9IYWxsU2NlbmVcIjtcclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi9wcmVmYWIvQnVsbGV0XCI7XHJcbmltcG9ydCB7IFBsYW50SW5mbyB9IGZyb20gXCIuL1VzZXJNb2RlbFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgZXhlY3V0ZUluRWRpdE1vZGUsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29sZGllckl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYnVsbGV0X3ByZTpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBpbmRleDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgbGlua0l0ZW06IFNvbGRpZXJJdGVtID0gbnVsbDtcclxuICAgIGRhdGFjb3B5OiBQbGFudEluZm8gPSBudWxsO1xyXG4gICAgYkRyYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGRyb3B0eXBlOm51bWJlciA9IDA7XHJcblxyXG4gICAgZHJvcHR5cGUwZW5kdGltZSA9IDA7XHJcblxyXG4gICAgc2V0SXRlbURhdGEoZDogUGxhbnRJbmZvLGRyb3B0eXBlOm51bWJlciA9IC0xKSB7Ly8gM+aZrumAmuaOieiQvSA05bCP57K+54G15o6J6JC9XHJcbiAgICAgICAgaWYoZHJvcHR5cGUgIT0gLTEpXHJcbiAgICAgICAgICAgIHRoaXMuZHJvcHR5cGUgPSBkcm9wdHlwZTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5kcm9wdHlwZSE9MCAmJiAgdGhpcy5kcm9wdHlwZTBlbmR0aW1lIDwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kcm9wdHlwZTBlbmR0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpICsgMTAwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WHj+WwkemHjee7mOWItlxyXG4gICAgICAgIGlmICh0aGlzLmRhdGFjb3B5ICYmIGQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YWNvcHkuaW5kZXggPT0gZC5pbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhY29weS5sdiA9PSBkLmx2ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFjb3B5Lm9wZW4gPT0gZC5vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2V0SXRlbURhdGFcIixkKVxyXG4gICAgICAgIHRoaXMuZGF0YWNvcHkgPSBkID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkKSkgOiBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFjb3B5KVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFjb3B5LmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGN1cnBsYXlhbmkgPSBcIlwiXHJcbiAgICBhc3luYyB1cGRhdGVJdGVtKCkge1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxldmVsXzFcIikuYWN0aXZlID0gdGhpcy5kYXRhY29weSAhPSBudWxsO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZsb3dlcjFcIikuYWN0aXZlID0gdGhpcy5kYXRhY29weSAhPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFjb3B5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2x2XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJsdi5cIiArIHRoaXMuZGF0YWNvcHkubHY7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmRyb3B0eXBlPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfbHZcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IERCX3BsYW50W01hdGgubWluKHRoaXMuZGF0YWNvcHkubHYgLSAxLDU5KV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkID0gTnVtYmVyKGluZm9bMV0pO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jdXJwbGF5YW5pICE9ICB0aGlzLmRhdGFjb3B5Lmx2ICsgXCJfaWRsZUxcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSB0aGlzLmRhdGFjb3B5Lmx2ICsgXCJfaWRsZUxcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5za2VsZXRvbkRhdGEgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwic3BpbmU6Zmxvd2VyXCIrTWF0aC5taW4odGhpcy5kYXRhY29weS5sdiw2MCksc3AuU2tlbGV0b25EYXRhKSBhcyBzcC5Ta2VsZXRvbkRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDAsXCJpZGxlTFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PVwiLHRoaXMuZGF0YWNvcHkubHYsdGhpcy5kcm9wdHlwZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9sdlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZHJvcHR5cGUgPT0gNClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnBsYXlhbmkgIT0gIFwicG90MV9pZGxlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnBsYXlhbmkgPSAgXCJwb3QxX2lkbGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5za2VsZXRvbkRhdGEgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwic3BpbmU6cG90MVwiLHNwLlNrZWxldG9uRGF0YSkgYXMgc3AuU2tlbGV0b25EYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5jbGVhclRyYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5zZXRBbmltYXRpb24oMCxcImZhbGxcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjgpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5zZXRBbmltYXRpb24oMSxcImlkbGVcIix0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT0yPVwiLHRoaXMuZGF0YWNvcHkubHYpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VycGxheWFuaSAhPSAgXCJwb3QzX2lkbGVcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9ICBcInBvdDNfaWRsZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLnNrZWxldG9uRGF0YSA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoXCJzcGluZTpwb3QzXCIsc3AuU2tlbGV0b25EYXRhKSBhcyBzcC5Ta2VsZXRvbkRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLmNsZWFyVHJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLnNldEFuaW1hdGlvbigwLFwiZmFsbFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuOCksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0U2tlbGV0b24oXCJmbG93ZXIxXCIpLnNldEFuaW1hdGlvbigxLFwiaWRsZVwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PTFcIix0aGlzLmRhdGFjb3B5Lmx2KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhcmdldCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVuZW15bGlzdCA9IEhhbGxTY2VuZS5JbnN0YW5jZS5lbmVteWxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgbGV0IG1pbmRpcyA9IDQwMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwO2k8ZW5lbXlsaXN0Lmxlbmd0aDsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihlbmVteWxpc3RbaV0ueDwgLWNjLndpblNpemUud2lkdGgvMiljb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGRpcyA9IGVuZW15bGlzdFtpXS5wb3NpdGlvbi5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYoZGlzIDwgbWluZGlzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBlbmVteWxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBtaW5kaXMgPSBkaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNkID0gMDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsYXN0ZmlyZSA9IDA7XHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZHQ+MSlkdD0xO1xyXG4gICAgICAgIGlmKHRoaXMuZGF0YWNvcHkgJiYgdGhpcy5kcm9wdHlwZSA9PSAwICYmIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWU+VXRpbHMuZ2V0U2VydmVyVGltZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikudGltZVNjYWxlID0gMS41O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwia2JcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikudGltZVNjYWxlID0gMVxyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJrYlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kcm9wdHlwZSE9MCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiB0aGlzLmRyb3B0eXBlMGVuZHRpbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcHR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5iRHJhZylyZXR1cm47XHJcbiAgICAgICAgaWYoIXRoaXMuZGF0YWNvcHkpcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMuZHJvcHR5cGUhPTApcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RmaXJlICs9IGR0XHJcblxyXG4gICAgICAgIGlmKHRoaXMubGFzdGZpcmUgPj0gdGhpcy5jZCAvICgoRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZT5VdGlscy5nZXRTZXJ2ZXJUaW1lKCkpPzI6MSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RmaXJlID0gMDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0VGFyZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmKHRhcmdldClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYkRyYWcpcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmRhdGFjb3B5KXJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldF9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRhcmdldC54PnRoaXMubm9kZS54P2NjLnYzKDE1LDM1LDApOmNjLnYzKC0xNSwzNSwwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5wYXJlbnQgPSBIYWxsU2NlbmUuSW5zdGFuY2UuR2V0R2FtZU9iamVjdChcIm5vZGVfYnVsbGV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIuZ2V0Q29tcG9uZW50KEJ1bGxldCkuc2V0SW5mbyh0YXJnZXQsdGhpcy5kYXRhY29weS5sdik7XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICBpZih0YXJnZXQueD50aGlzLm5vZGUueClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5zZXRBbmltYXRpb24oMCxcImF0a1JcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDEsXCJpZGxlUlwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IFwiaWRsZVJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5zZXRBbmltYXRpb24oMCxcImF0a0xcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDEsXCJpZGxlTFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycGxheWFuaSA9IFwiaWRsZUxcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=