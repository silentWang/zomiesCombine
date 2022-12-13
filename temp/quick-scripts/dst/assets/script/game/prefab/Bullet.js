
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
            if (window && window['xxxxx'])
                window['xxxxx']("ArH");
            var v = d.normalize().mul(this.sped * dt);
            this.node.position = this.node.position.add(v);
            this.node.angle = 180 - cc.v2(d.x, d.y).signAngle(cc.v2(1, 0)) * 180 / Math.PI;
        }
        else {
            this.node.removeFromParent(true);
        }
    };
    Bullet.prototype.pGDA_xxxx_fun = function () { console.log("Zkp"); };
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
                if (window && window['xxxxx'])
                    window['xxxxx']("RZT6dPGxm");
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
                idx = (!idx || idx > 5) ? 1 : idx;
                // let skpath = `spine:other/bullet${idx}_ske`;
                // let atlaspath = `spine:other/bullet${idx}_tex`;
                if (window && window['xxxxx'])
                    window['xxxxx']("JzaZbQjDYH8");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXEJ1bGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QyxvQ0FBeUM7QUFDekMsaUNBQTRCO0FBR3RCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFNO0lBQTFDO1FBQUEscUVBd0dDO1FBdEdXLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFVLEdBQUcsQ0FBQztRQUNsQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUFtRzFCLENBQUM7SUFqR0csc0JBQUssR0FBTDtRQUVJLHlDQUF5QztRQUN6QyxVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLHdDQUF3QztRQUN4QyxJQUFJO1FBQ0oseUJBQXlCO0lBQzdCLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsRUFBRSxHQUFHLENBQUM7WUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFDZjtZQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RSxJQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQzlCO2dCQUNJ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SSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBdEdnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBd0cxQjtJQUFELGFBQUM7Q0F4R0QsQUF3R0MsQ0F4R21DLGdCQUFNLEdBd0d6QztrQkF4R29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ19jaGljayB9IGZyb20gXCIuLi9Db25maWdcIjtcclxuaW1wb3J0IEVuZW15IGZyb20gXCIuL0VuZW15XCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIHByaXZhdGUgdGFyZ2V0OmNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzcGVkOm51bWJlciA9IDcwMDtcclxuICAgIHByaXZhdGUgcGxhbnRsdiA9IDA7XHJcbiAgICBwcml2YXRlIHNraWxsVHlwZSA9IDA7XHJcblxyXG4gICAgc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGxldCBidCA9IHRoaXMuR2V0R2FtZU9iamVjdChcInRyYWlsMlwiKTtcclxuICAgICAgICAvLyBpZihidCl7XHJcbiAgICAgICAgLy8gICAgIGJ0Lm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIC8vICAgICBidC5ydW5BY3Rpb24oY2MuZmFkZVRvKDAuNCwyNTUpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlID0gMS4yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoZHQgPiAxKSBkdCA9IDE7XHJcbiAgICAgICAgaWYoIHRoaXMudGFyZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGQgPSB0aGlzLnRhcmdldC5wb3NpdGlvbi5hZGQoY2MudjMoMCw4MCwwKSkgLnN1Yih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBpZihkLm1hZygpIDwgdGhpcy5zcGVkICogZHQgKjIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmdldENvbXBvbmVudChFbmVteSkuaGl0KHRoaXMucGxhbnRsdix0aGlzLnNraWxsVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLnRhcmdldC5wb3NpdGlvbi5hZGQoY2MudjMoMCw4MCwwKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJBckhcIik7XHJcbiAgICAgICAgICAgIGxldCB2ID0gZC5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVkICogZHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPXRoaXMubm9kZS5wb3NpdGlvbi5hZGQodik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDE4MC1jYy52MihkLngsZC55KS5zaWduQW5nbGUoY2MudjIoMSwwKSkgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgICAgIHByaXZhdGUgcEdEQV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIlprcFwiKTsgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnVsbGV0VHlwZSgpe1xyXG4gICAgICAgIGxldCBpbmZvID0gQ29uZmlnX2NoaWNrW3RoaXMucGxhbnRsdiAtIDFdO1xyXG4gICAgICAgIGxldCBza2lsbCA9IFN0cmluZyhpbmZvWzNdKS5zcGxpdChcInxcIik7XHJcbiAgICAgICAgbGV0IHNraWxsdHlwZSA9IE51bWJlcihza2lsbFswXSk7XHJcbiAgICAgICAgbGV0IHNraWxsdmFsdWUgPSBOdW1iZXIoc2tpbGxbMV0pO1xyXG4gICAgICAgIGlmKFV0aWxzLmdldFJhbmRvbSgwLDEwMCkgPCBza2lsbHZhbHVlKSByZXR1cm4gc2tpbGx0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldEluZm8odGFyZ2V0OmNjLk5vZGUscGxhbnRsdjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcGxhbnRsdiA9IE1hdGgubWluKHBsYW50bHYsNjApXHJcbiAgICAgICAgdGhpcy5wbGFudGx2ID0gcGxhbnRsdjtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJSWlQ2ZFBHeG1cIik7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5za2lsbFR5cGUgPSB0aGlzLmdldEJ1bGxldFR5cGUoKTtcclxuICAgICAgICBpZih0aGlzLnNraWxsVHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoJ3NraWxsNScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuc2tpbGxUeXBlID09IDIpe1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWCgnc2tpbGwzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5za2lsbFR5cGUgPT0gMyl7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKCdza2lsbDInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKCdza2lsbDEnKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJlc2V0QnVsbGV0KCk7XHJcbiAgICAgICAgbGV0IGlkeCA9IENvbmZpZ19jaGlja1twbGFudGx2IC0gMV1bOF07XHJcbiAgICAgICAgaWR4ID0gKCFpZHggfHwgaWR4ID4gNSkgPyAxIDogaWR4O1xyXG4gICAgICAgIC8vIGxldCBza3BhdGggPSBgc3BpbmU6b3RoZXIvYnVsbGV0JHtpZHh9X3NrZWA7XHJcbiAgICAgICAgLy8gbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpvdGhlci9idWxsZXQke2lkeH1fdGV4YDtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJKemFaYlFqRFlIOFwiKTtcclxuICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdic3AnK2lkeCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdic3AnK2lkeCkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBidWxsZXQuYXJtYXR1cmVOYW1lID0gJ0FybWF0dXJlJztcclxuICAgICAgICBidWxsZXQucGxheUFuaW1hdGlvbignYnVsbGV0JyArIGlkeCwwKTtcclxuICAgICAgICAvLyBidWxsZXQuZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgIC8vIGJ1bGxldC5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcblxyXG4gICAgICAgIC8vIOWOn+mAu+i+kVxyXG4gICAgICAgIC8vIHRoaXMuR2V0U3ByaXRlKFwic3BcIikuc3ByaXRlRnJhbWUgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwidGV4dHVyZS9idWxsZXRzL1wiKyhwbGFudGx2LTEpLGNjLlNwcml0ZUZyYW1lKSBhcyBjYy5TcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyBsZXQgYnQgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJ0cmFpbDJcIik7XHJcbiAgICAgICAgLy8gaWYoYnQpe1xyXG4gICAgICAgIC8vICAgICBidC5jb2xvciA9IGNjLkNvbG9yLlJFRC5mcm9tSEVYKFN0cmluZyhEQl9wbGFudFtwbGFudGx2LTFdWzldKSlcclxuICAgICAgICAvLyAgICAgYnQuaGVpZ2h0ID0gIHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmhlaWdodDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwic3RyZWFrXCIpLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnN0cm9rZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNwXCIpLmhlaWdodDtcclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJzdHJlYWtcIikuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBjYy5Db2xvci5SRUQuZnJvbUhFWChTdHJpbmcoREJfcGxhbnRbcGxhbnRsdi0xXVs5XSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEJ1bGxldCgpe1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwMScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwMicpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwMycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwNCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwNScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=