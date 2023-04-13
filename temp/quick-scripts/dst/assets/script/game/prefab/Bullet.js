
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
var Config_1 = require("../Config");
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
        // let bt = this.GetGameObject("trail2");
        // if(bt){
        //     bt.opacity = 0;
        //     bt.runAction(cc.fadeTo(0.4,255));
        // }
        // this.node.scale = 1.2;
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
        var info = Config_1.Config_chick[this.plantlv - 1];
        var skill = String(info[3]).split("|");
        var skilltype = Number(skill[0]);
        var skillvalue = Number(skill[1]);
        if (Utils_1.default.getRandom(0, 100) < skillvalue)
            return skilltype;
    };
    Bullet.prototype.setInfo = function (target, plantlv) {
        return __awaiter(this, void 0, void 0, function () {
            var idx, bullet;
            return __generator(this, function (_a) {
                plantlv = Math.min(plantlv, 60);
                this.plantlv = plantlv;
                this.target = target;
                this.skillType = this.getBulletType();
                if (this.skillType == 1) {
                    AudioMgr_1.default.Instance().playMX('skill5');
                }
                else if (this.skillType == 2) {
                    AudioMgr_1.default.Instance().playMX('skill3');
                }
                else if (this.skillType == 3) {
                    AudioMgr_1.default.Instance().playMX('skill2');
                }
                else {
                    AudioMgr_1.default.Instance().playMX('skill1');
                }
                this.resetBullet();
                idx = Config_1.Config_chick[plantlv - 1][8];
                idx = (!idx || (~~idx) > 5) ? 1 : idx;
                bullet = this.GetDragonAmature('bsp' + idx);
                this.GetGameObject('bsp' + idx).active = true;
                bullet.armatureName = 'Armature';
                bullet.playAnimation('bullet' + idx, 0);
                return [2 /*return*/];
            });
        });
    };
    Bullet.prototype.resetBullet = function () {
        this.GetGameObject('bsp1').active = false;
        this.GetGameObject('bsp2').active = false;
        this.GetGameObject('bsp3').active = false;
        this.GetGameObject('bsp4').active = false;
        this.GetGameObject('bsp5').active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEJ1bGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QyxvQ0FBeUM7QUFDekMsaUNBQTRCO0FBR3RCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFNO0lBQTFDO1FBQUEscUVBb0dDO1FBbEdXLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFVLEdBQUcsQ0FBQztRQUNsQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUErRjFCLENBQUM7SUE3Rkcsc0JBQUssR0FBTDtRQUVJLHlDQUF5QztRQUN6QyxVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLHdDQUF3QztRQUN4QyxJQUFJO1FBQ0oseUJBQXlCO0lBQzdCLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsRUFBRSxHQUFHLENBQUM7WUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFDZjtZQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RSxJQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQzlCO2dCQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakUsK0RBQStEO2dCQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQzlFO2FBRUQ7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBRUwsQ0FBQztJQUVPLDhCQUFhLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLEdBQUcscUJBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFHLGVBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVU7WUFBRSxPQUFPLFNBQVMsQ0FBQztJQUM3RCxDQUFDO0lBRUssd0JBQU8sR0FBYixVQUFjLE1BQWMsRUFBQyxPQUFjOzs7O2dCQUV2QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3RDLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUM7b0JBQ25CLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN4QztxQkFDSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFDO29CQUN4QixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDeEM7cUJBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBQztvQkFDeEIsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3hDO3FCQUNJO29CQUNELGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN4QztnQkFHRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2YsR0FBRyxHQUFHLHFCQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBR2xDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM1QyxNQUFNLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztnQkFDakMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0tBYTFDO0lBRU8sNEJBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzlDLENBQUM7SUFsR2dCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FvRzFCO0lBQUQsYUFBQztDQXBHRCxBQW9HQyxDQXBHbUMsZ0JBQU0sR0FvR3pDO2tCQXBHb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnX2NoaWNrIH0gZnJvbSBcIi4uL0NvbmZpZ1wiO1xyXG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4vRW5lbXlcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNwZWQ6bnVtYmVyID0gNzAwO1xyXG4gICAgcHJpdmF0ZSBwbGFudGx2ID0gMDtcclxuICAgIHByaXZhdGUgc2tpbGxUeXBlID0gMDtcclxuXHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbGV0IGJ0ID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwidHJhaWwyXCIpO1xyXG4gICAgICAgIC8vIGlmKGJ0KXtcclxuICAgICAgICAvLyAgICAgYnQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgLy8gICAgIGJ0LnJ1bkFjdGlvbihjYy5mYWRlVG8oMC40LDI1NSkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLm5vZGUuc2NhbGUgPSAxLjI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZihkdCA+IDEpIGR0ID0gMTtcclxuICAgICAgICBpZiggdGhpcy50YXJnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZCA9IHRoaXMudGFyZ2V0LnBvc2l0aW9uLmFkZChjYy52MygwLDgwLDApKSAuc3ViKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmKGQubWFnKCkgPCB0aGlzLnNwZWQgKiBkdCAqMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KEVuZW15KS5oaXQodGhpcy5wbGFudGx2LHRoaXMuc2tpbGxUeXBlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMudGFyZ2V0LnBvc2l0aW9uLmFkZChjYy52MygwLDgwLDApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB2ID0gZC5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVkICogZHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPXRoaXMubm9kZS5wb3NpdGlvbi5hZGQodik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDE4MC1jYy52MihkLngsZC55KS5zaWduQW5nbGUoY2MudjIoMSwwKSkgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnVsbGV0VHlwZSgpe1xyXG4gICAgICAgIGxldCBpbmZvID0gQ29uZmlnX2NoaWNrW3RoaXMucGxhbnRsdiAtIDFdO1xyXG4gICAgICAgIGxldCBza2lsbCA9IFN0cmluZyhpbmZvWzNdKS5zcGxpdChcInxcIik7XHJcbiAgICAgICAgbGV0IHNraWxsdHlwZSA9IE51bWJlcihza2lsbFswXSk7XHJcbiAgICAgICAgbGV0IHNraWxsdmFsdWUgPSBOdW1iZXIoc2tpbGxbMV0pO1xyXG4gICAgICAgIGlmKFV0aWxzLmdldFJhbmRvbSgwLDEwMCkgPCBza2lsbHZhbHVlKSByZXR1cm4gc2tpbGx0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldEluZm8odGFyZ2V0OmNjLk5vZGUscGxhbnRsdjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcGxhbnRsdiA9IE1hdGgubWluKHBsYW50bHYsNjApXHJcbiAgICAgICAgdGhpcy5wbGFudGx2ID0gcGxhbnRsdjtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnNraWxsVHlwZSA9IHRoaXMuZ2V0QnVsbGV0VHlwZSgpO1xyXG4gICAgICAgIGlmKHRoaXMuc2tpbGxUeXBlID09IDEpe1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWCgnc2tpbGw1Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5za2lsbFR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKCdza2lsbDMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnNraWxsVHlwZSA9PSAzKXtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoJ3NraWxsMicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoJ3NraWxsMScpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRCdWxsZXQoKTtcclxuICAgICAgICBsZXQgaWR4ID0gQ29uZmlnX2NoaWNrW3BsYW50bHYgLSAxXVs4XTtcclxuICAgICAgICBpZHggPSAoIWlkeCB8fCAofn5pZHgpID4gNSkgPyAxIDogaWR4O1xyXG4gICAgICAgIC8vIGxldCBza3BhdGggPSBgc3BpbmU6b3RoZXIvYnVsbGV0JHtpZHh9X3NrZWA7XHJcbiAgICAgICAgLy8gbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpvdGhlci9idWxsZXQke2lkeH1fdGV4YDtcclxuICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdic3AnK2lkeCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdic3AnK2lkeCkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBidWxsZXQuYXJtYXR1cmVOYW1lID0gJ0FybWF0dXJlJztcclxuICAgICAgICBidWxsZXQucGxheUFuaW1hdGlvbignYnVsbGV0JyArIGlkeCwwKTtcclxuICAgICAgICAvLyBidWxsZXQuZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgIC8vIGJ1bGxldC5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcblxyXG4gICAgICAgIC8vIOWOn+mAu+i+kVxyXG4gICAgICAgIC8vIHRoaXMuR2V0U3ByaXRlKFwic3BcIikuc3ByaXRlRnJhbWUgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwidGV4dHVyZS9idWxsZXRzL1wiKyhwbGFudGx2LTEpLGNjLlNwcml0ZUZyYW1lKSBhcyBjYy5TcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyBsZXQgYnQgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJ0cmFpbDJcIik7XHJcbiAgICAgICAgLy8gaWYoYnQpe1xyXG4gICAgICAgIC8vICAgICBidC5jb2xvciA9IGNjLkNvbG9yLlJFRC5mcm9tSEVYKFN0cmluZyhEQl9wbGFudFtwbGFudGx2LTFdWzldKSlcclxuICAgICAgICAvLyAgICAgYnQuaGVpZ2h0ID0gIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmhlaWdodDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwic3RyZWFrXCIpLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnN0cm9rZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmhlaWdodDtcclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJzdHJlYWtcIikuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBjYy5Db2xvci5SRUQuZnJvbUhFWChTdHJpbmcoREJfcGxhbnRbcGxhbnRsdi0xXVs5XSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEJ1bGxldCgpe1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwMScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwMicpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwMycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwNCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwNScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=