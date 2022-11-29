
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
var Enemy_1 = require("./Enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.sped = 700;
        _this.plantlv = 0;
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
                this.target.getComponent(Enemy_1.default).hit(this.plantlv);
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
    Bullet.prototype.setInfo = function (target, plantlv) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                plantlv = Math.min(plantlv, 60);
                this.plantlv = plantlv;
                this.target = target;
                AudioMgr_1.default.Instance().playSFX('skill1');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEJ1bGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsaURBQTRDO0FBRzVDLGlDQUE0QjtBQUd0QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBTTtJQUExQztRQUFBLHFFQWlFQztRQTlCVyxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLFVBQUksR0FBVSxHQUFHLENBQUM7UUFDbEIsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUE0QnhCLENBQUM7SUEvREcsc0JBQUssR0FBTDtRQUVJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsSUFBRyxFQUFFLEVBQUM7WUFDRixFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsdUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLEVBQUUsR0FBRyxDQUFDO1lBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQ2Y7WUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekUsSUFBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUM5QjtnQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsRCwrREFBK0Q7Z0JBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDOUU7YUFFRDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFFTCxDQUFDO0lBS0ssd0JBQU8sR0FBYixVQUFjLE1BQWMsRUFBQyxPQUFjOzs7Z0JBRXZDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQTtnQkFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztLQXFCekM7SUFoRWdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FpRTFCO0lBQUQsYUFBQztDQWpFRCxBQWlFQyxDQWpFbUMsZ0JBQU0sR0FpRXpDO2tCQWpFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgREJfcGxhbnQgfSBmcm9tIFwiLi4vREJcIjtcclxuaW1wb3J0IEVuZW15IGZyb20gXCIuL0VuZW15XCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBsZXQgYnQgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJ0cmFpbDJcIik7XHJcbiAgICAgICAgaWYoYnQpe1xyXG4gICAgICAgICAgICBidC5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgYnQucnVuQWN0aW9uKGNjLmZhZGVUbygwLjQsMjU1KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEuMjtcclxuICAgIH1cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZihkdCA+IDEpIGR0ID0gMTtcclxuICAgICAgICBpZiggdGhpcy50YXJnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZCA9IHRoaXMudGFyZ2V0LnBvc2l0aW9uLmFkZChjYy52MygwLDgwLDApKSAuc3ViKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmKGQubWFnKCkgPCB0aGlzLnNwZWQgKiBkdCAqMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KEVuZW15KS5oaXQodGhpcy5wbGFudGx2KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMudGFyZ2V0LnBvc2l0aW9uLmFkZChjYy52MygwLDgwLDApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB2ID0gZC5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVkICogZHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPXRoaXMubm9kZS5wb3NpdGlvbi5hZGQodik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDE4MC1jYy52MihkLngsZC55KS5zaWduQW5nbGUoY2MudjIoMSwwKSkgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGFyZ2V0OmNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzcGVkOm51bWJlciA9IDcwMDtcclxuICAgIHByaXZhdGUgcGxhbnRsdiA9IDA7XHJcbiAgICBhc3luYyBzZXRJbmZvKHRhcmdldDpjYy5Ob2RlLHBsYW50bHY6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHBsYW50bHYgPSBNYXRoLm1pbihwbGFudGx2LDYwKVxyXG4gICAgICAgIHRoaXMucGxhbnRsdiA9IHBsYW50bHY7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKCdza2lsbDEnKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGlkeCA9IE1hdGguY2VpbChwbGFudGx2LzEwKTtcclxuICAgICAgICAvLyBpZHggPSBpZHggPiA1ID8gNSA6IGlkeDtcclxuICAgICAgICAvLyBsZXQgc2twYXRoID0gYHNwaW5lOm90aGVyL2J1bGxldCR7aWR4fV9za2VgO1xyXG4gICAgICAgIC8vIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6b3RoZXIvYnVsbGV0JHtpZHh9X3RleGA7XHJcbiAgICAgICAgLy8gbGV0IGJ1bGxldCA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnYnNwJyk7XHJcbiAgICAgICAgLy8gYnVsbGV0LmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcclxuICAgICAgICAvLyBidWxsZXQuZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xyXG4gICAgICAgIC8vIGJ1bGxldC5hcm1hdHVyZU5hbWUgPSAnQXJtYXR1cmUnO1xyXG4gICAgICAgIC8vIGJ1bGxldC5wbGF5QW5pbWF0aW9uKCdidWxsZXQnICsgaWR4LDApO1xyXG5cclxuICAgICAgICAvLyDljp/pgLvovpFcclxuICAgICAgICAvLyB0aGlzLkdldFNwcml0ZShcInNwXCIpLnNwcml0ZUZyYW1lID0gYXdhaXQgVXRpbHMubG9hZFJlcyhcInRleHR1cmUvYnVsbGV0cy9cIisocGxhbnRsdi0xKSxjYy5TcHJpdGVGcmFtZSkgYXMgY2MuU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgLy8gbGV0IGJ0ID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwidHJhaWwyXCIpO1xyXG4gICAgICAgIC8vIGlmKGJ0KXtcclxuICAgICAgICAvLyAgICAgYnQuY29sb3IgPSBjYy5Db2xvci5SRUQuZnJvbUhFWChTdHJpbmcoREJfcGxhbnRbcGxhbnRsdi0xXVs5XSkpXHJcbiAgICAgICAgLy8gICAgIGJ0LmhlaWdodCA9ICB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5oZWlnaHQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcInN0cmVha1wiKS5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5oZWlnaHQ7XHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwic3RyZWFrXCIpLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmNvbG9yID0gY2MuQ29sb3IuUkVELmZyb21IRVgoU3RyaW5nKERCX3BsYW50W3BsYW50bHYtMV1bOV0pKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==