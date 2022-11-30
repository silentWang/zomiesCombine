
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b304r11c5BdrPI27Yo4iN5', 'Bullet');
// script/game/prefab/Bullet.ts

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
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var DB_1 = require("../DB");
var Enemy_1 = require("./Enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.sped = 700;
        _this.plantlv = 0;
        _this.skillType = 0;
        return _this;
    }
    Bullet.prototype.start = function () {
        var bt = this.GetGameObject("trail2");
        if (bt) {
            bt.opacity = 0;
            bt.runAction(cc.fadeTo(0.4, 255));
        }
        this.node.scale = 1.2;
    };
    Bullet.prototype.update = function (dt) {
        if (dt > 1)
            dt = 1;
        if (this.target) {
            var d = this.target.position.add(cc.v3(0, 80, 0)).sub(this.node.position);
            if (d.mag() < this.sped * dt * 2) {
                this.target.getComponent(Enemy_1.default).hit(this.plantlv, this.skillType);
                // this.node.position = this.target.position.add(cc.v3(0,80,0))
                this.node.destroy();
                this.node.removeFromParent(true);
                return;
            }
            var v = d.normalize().mul(this.sped * dt);
            this.node.position = this.node.position.add(v);
            this.node.angle = 180 - cc.v2(d.x, d.y).signAngle(cc.v2(1, 0)) * 180 / Math.PI;
        }
        else {
            this.node.removeFromParent(true);
        }
    };
    Bullet.prototype.getBulletType = function () {
        var info = DB_1.DB_plant[this.plantlv - 1];
        var skill = String(info[3]).split("|");
        var skilltype = Number(skill[0]);
        var skillvalue = Number(skill[1]);
        if (Utils_1.default.getRandom(0, 100) < skillvalue)
            return skilltype;
    };
    Bullet.prototype.setInfo = function (target, plantlv) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                plantlv = Math.min(plantlv, 60);
                this.plantlv = plantlv;
                this.target = target;
                this.skillType = this.getBulletType();
                if (this.skillType == 1) {
                    AudioMgr_1.default.Instance().playSFX('skill5');
                }
                else if (this.skillType == 2) {
                    AudioMgr_1.default.Instance().playSFX('skill3');
                }
                else if (this.skillType == 3) {
                    AudioMgr_1.default.Instance().playSFX('skill2');
                }
                else {
                    AudioMgr_1.default.Instance().playSFX('skill1');
                }
                return [2 /*return*/];
            });
        });
    };
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(BaseUI_1.default));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEJ1bGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0Qyw0QkFBaUM7QUFDakMsaUNBQTRCO0FBR3RCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFNO0lBQTFDO1FBQUEscUVBdUZDO1FBckZXLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFVLEdBQUcsQ0FBQztRQUNsQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUFrRjFCLENBQUM7SUFoRkcsc0JBQUssR0FBTDtRQUVJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsSUFBRyxFQUFFLEVBQUM7WUFDRixFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUMxQixDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLEVBQUUsR0FBRyxDQUFDO1lBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQ2Y7WUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxD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Q0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pDOzs7O0tBb0JKO0lBdEZnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBdUYxQjtJQUFELGFBQUM7Q0F2RkQsQUF1RkMsQ0F2Rm1DLGdCQUFNLEdBdUZ6QztrQkF2Rm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IERCX3BsYW50IH0gZnJvbSBcIi4uL0RCXCI7XHJcbmltcG9ydCBFbmVteSBmcm9tIFwiLi9FbmVteVwiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICBwcml2YXRlIHRhcmdldDpjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3BlZDpudW1iZXIgPSA3MDA7XHJcbiAgICBwcml2YXRlIHBsYW50bHYgPSAwO1xyXG4gICAgcHJpdmF0ZSBza2lsbFR5cGUgPSAwO1xyXG5cclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBsZXQgYnQgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJ0cmFpbDJcIik7XHJcbiAgICAgICAgaWYoYnQpe1xyXG4gICAgICAgICAgICBidC5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgYnQucnVuQWN0aW9uKGNjLmZhZGVUbygwLjQsMjU1KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEuMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKGR0ID4gMSkgZHQgPSAxO1xyXG4gICAgICAgIGlmKCB0aGlzLnRhcmdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkID0gdGhpcy50YXJnZXQucG9zaXRpb24uYWRkKGNjLnYzKDAsODAsMCkpIC5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYoZC5tYWcoKSA8IHRoaXMuc3BlZCAqIGR0ICoyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoRW5lbXkpLmhpdCh0aGlzLnBsYW50bHYsdGhpcy5za2lsbFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy50YXJnZXQucG9zaXRpb24uYWRkKGNjLnYzKDAsODAsMCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHYgPSBkLm5vcm1hbGl6ZSgpLm11bCh0aGlzLnNwZWQgKiBkdCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9dGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh2KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gMTgwLWNjLnYyKGQueCxkLnkpLnNpZ25BbmdsZShjYy52MigxLDApKSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCdWxsZXRUeXBlKCl7XHJcbiAgICAgICAgbGV0IGluZm8gPSBEQl9wbGFudFt0aGlzLnBsYW50bHYgLSAxXTtcclxuICAgICAgICBsZXQgc2tpbGwgPSBTdHJpbmcoaW5mb1szXSkuc3BsaXQoXCJ8XCIpO1xyXG4gICAgICAgIGxldCBza2lsbHR5cGUgPSBOdW1iZXIoc2tpbGxbMF0pO1xyXG4gICAgICAgIGxldCBza2lsbHZhbHVlID0gTnVtYmVyKHNraWxsWzFdKTtcclxuICAgICAgICBpZihVdGlscy5nZXRSYW5kb20oMCwxMDApIDwgc2tpbGx2YWx1ZSkgcmV0dXJuIHNraWxsdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRJbmZvKHRhcmdldDpjYy5Ob2RlLHBsYW50bHY6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHBsYW50bHYgPSBNYXRoLm1pbihwbGFudGx2LDYwKVxyXG4gICAgICAgIHRoaXMucGxhbnRsdiA9IHBsYW50bHY7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5za2lsbFR5cGUgPSB0aGlzLmdldEJ1bGxldFR5cGUoKTtcclxuICAgICAgICBpZih0aGlzLnNraWxsVHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKCdza2lsbDUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnNraWxsVHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKCdza2lsbDMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnNraWxsVHlwZSA9PSAzKXtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKCdza2lsbDInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWCgnc2tpbGwxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBpZHggPSBNYXRoLmNlaWwocGxhbnRsdi8xMCk7XHJcbiAgICAgICAgLy8gaWR4ID0gaWR4ID4gNSA/IDUgOiBpZHg7XHJcbiAgICAgICAgLy8gbGV0IHNrcGF0aCA9IGBzcGluZTpvdGhlci9idWxsZXQke2lkeH1fc2tlYDtcclxuICAgICAgICAvLyBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOm90aGVyL2J1bGxldCR7aWR4fV90ZXhgO1xyXG4gICAgICAgIC8vIGxldCBidWxsZXQgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2JzcCcpO1xyXG4gICAgICAgIC8vIGJ1bGxldC5kcmFnb25Bc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoc2twYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQ7XHJcbiAgICAgICAgLy8gYnVsbGV0LmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcclxuICAgICAgICAvLyBidWxsZXQuYXJtYXR1cmVOYW1lID0gJ0FybWF0dXJlJztcclxuICAgICAgICAvLyBidWxsZXQucGxheUFuaW1hdGlvbignYnVsbGV0JyArIGlkeCwwKTtcclxuXHJcbiAgICAgICAgLy8g5Y6f6YC76L6RXHJcbiAgICAgICAgLy8gdGhpcy5HZXRTcHJpdGUoXCJzcFwiKS5zcHJpdGVGcmFtZSA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoXCJ0ZXh0dXJlL2J1bGxldHMvXCIrKHBsYW50bHYtMSksY2MuU3ByaXRlRnJhbWUpIGFzIGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgIC8vIGxldCBidCA9IHRoaXMuR2V0R2FtZU9iamVjdChcInRyYWlsMlwiKTtcclxuICAgICAgICAvLyBpZihidCl7XHJcbiAgICAgICAgLy8gICAgIGJ0LmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoU3RyaW5nKERCX3BsYW50W3BsYW50bHYtMV1bOV0pKVxyXG4gICAgICAgIC8vICAgICBidC5oZWlnaHQgPSAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuaGVpZ2h0O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJzdHJlYWtcIikuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuaGVpZ2h0O1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcInN0cmVha1wiKS5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IGNjLkNvbG9yLlJFRC5mcm9tSEVYKFN0cmluZyhEQl9wbGFudFtwbGFudGx2LTFdWzldKSlcclxuICAgIH1cclxufVxyXG4iXX0=