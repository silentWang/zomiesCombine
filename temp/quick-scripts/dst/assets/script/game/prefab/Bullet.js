
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
                window['xxxxx']("ArHetsgsdes");
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
    Bullet.prototype.pESGDSEX_xxxx_fun = function () { console.log("Zkpetsdgvse"); };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLG9DQUF5QztBQUN6QyxpQ0FBNEI7QUFHdEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQU07SUFBMUM7UUFBQSxxRUEwR0M7UUF4R1csWUFBTSxHQUFXLElBQUksQ0FBQztRQUN0QixVQUFJLEdBQVUsR0FBRyxDQUFDO1FBQ2xCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQXFHMUIsQ0FBQztJQW5HRyxzQkFBSyxHQUFMO1FBRUkseUNBQXlDO1FBQ3pDLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsd0NBQXdDO1FBQ3hDLElBQUk7UUFDSix5QkFBeUI7SUFDN0IsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBRyxFQUFFLEdBQUcsQ0FBQztZQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUNmO1lBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pFLElBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDOUI7Z0JBQ0ksSUFB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QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBeEdnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMEcxQjtJQUFELGFBQUM7Q0ExR0QsQUEwR0MsQ0ExR21DLGdCQUFNLEdBMEd6QztrQkExR29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7IENvbmZpZ19jaGljayB9IGZyb20gXCIuLi9Db25maWdcIjtcbmltcG9ydCBFbmVteSBmcm9tIFwiLi9FbmVteVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgQmFzZVVJIHtcblxuICAgIHByaXZhdGUgdGFyZ2V0OmNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgc3BlZDpudW1iZXIgPSA3MDA7XG4gICAgcHJpdmF0ZSBwbGFudGx2ID0gMDtcbiAgICBwcml2YXRlIHNraWxsVHlwZSA9IDA7XG5cbiAgICBzdGFydCgpXG4gICAge1xuICAgICAgICAvLyBsZXQgYnQgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJ0cmFpbDJcIik7XG4gICAgICAgIC8vIGlmKGJ0KXtcbiAgICAgICAgLy8gICAgIGJ0Lm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyAgICAgYnQucnVuQWN0aW9uKGNjLmZhZGVUbygwLjQsMjU1KSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlID0gMS4yO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmKGR0ID4gMSkgZHQgPSAxO1xuICAgICAgICBpZiggdGhpcy50YXJnZXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBkID0gdGhpcy50YXJnZXQucG9zaXRpb24uYWRkKGNjLnYzKDAsODAsMCkpIC5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmKGQubWFnKCkgPCB0aGlzLnNwZWQgKiBkdCAqMilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoRW5lbXkpLmhpdCh0aGlzLnBsYW50bHYsdGhpcy5za2lsbFR5cGUpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMudGFyZ2V0LnBvc2l0aW9uLmFkZChjYy52MygwLDgwLDApKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQXJIZXRzZ3NkZXNcIik7XG4gICAgICAgICAgICBsZXQgdiA9IGQubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZCAqIGR0KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9dGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh2KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDE4MC1jYy52MihkLngsZC55KS5zaWduQW5nbGUoY2MudjIoMSwwKSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBwcml2YXRlIHBHREFfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJaa3BcIik7IH1cblxuICAgIHByaXZhdGUgZ2V0QnVsbGV0VHlwZSgpe1xuICAgICAgICBsZXQgaW5mbyA9IENvbmZpZ19jaGlja1t0aGlzLnBsYW50bHYgLSAxXTtcbiAgICAgICAgbGV0IHNraWxsID0gU3RyaW5nKGluZm9bM10pLnNwbGl0KFwifFwiKTtcbiAgICAgICAgbGV0IHNraWxsdHlwZSA9IE51bWJlcihza2lsbFswXSk7XG4gICAgICAgIGxldCBza2lsbHZhbHVlID0gTnVtYmVyKHNraWxsWzFdKTtcbiAgICAgICAgaWYoVXRpbHMuZ2V0UmFuZG9tKDAsMTAwKSA8IHNraWxsdmFsdWUpIHJldHVybiBza2lsbHR5cGU7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0SW5mbyh0YXJnZXQ6Y2MuTm9kZSxwbGFudGx2Om51bWJlcilcbiAgICB7XG4gICAgICAgIHBsYW50bHYgPSBNYXRoLm1pbihwbGFudGx2LDYwKVxuICAgICAgICB0aGlzLnBsYW50bHYgPSBwbGFudGx2O1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJSWlQ2ZFBHeG1cIik7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnNraWxsVHlwZSA9IHRoaXMuZ2V0QnVsbGV0VHlwZSgpO1xuICAgICAgICBpZih0aGlzLnNraWxsVHlwZSA9PSAxKXtcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKCdza2lsbDUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuc2tpbGxUeXBlID09IDIpe1xuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoJ3NraWxsMycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5za2lsbFR5cGUgPT0gMyl7XG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWCgnc2tpbGwyJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWCgnc2tpbGwxJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMucmVzZXRCdWxsZXQoKTtcbiAgICAgICAgbGV0IGlkeCA9IENvbmZpZ19jaGlja1twbGFudGx2IC0gMV1bOF07XG4gICAgICAgIGlkeCA9ICghaWR4IHx8IGlkeCA+IDUpID8gMSA6IGlkeDtcbiAgICAgICAgLy8gbGV0IHNrcGF0aCA9IGBzcGluZTpvdGhlci9idWxsZXQke2lkeH1fc2tlYDtcbiAgICAgICAgLy8gbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpvdGhlci9idWxsZXQke2lkeH1fdGV4YDtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiSnphWmJRakRZSDhcIik7XG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2JzcCcraWR4KTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdic3AnK2lkeCkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgYnVsbGV0LmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XG4gICAgICAgIGJ1bGxldC5wbGF5QW5pbWF0aW9uKCdidWxsZXQnICsgaWR4LDApO1xuICAgICAgICAvLyBidWxsZXQuZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xuICAgICAgICAvLyBidWxsZXQuZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xuXG4gICAgICAgIC8vIOWOn+mAu+i+kVxuICAgICAgICAvLyB0aGlzLkdldFNwcml0ZShcInNwXCIpLnNwcml0ZUZyYW1lID0gYXdhaXQgVXRpbHMubG9hZFJlcyhcInRleHR1cmUvYnVsbGV0cy9cIisocGxhbnRsdi0xKSxjYy5TcHJpdGVGcmFtZSkgYXMgY2MuU3ByaXRlRnJhbWU7XG4gICAgICAgIC8vIGxldCBidCA9IHRoaXMuR2V0R2FtZU9iamVjdChcInRyYWlsMlwiKTtcbiAgICAgICAgLy8gaWYoYnQpe1xuICAgICAgICAvLyAgICAgYnQuY29sb3IgPSBjYy5Db2xvci5SRUQuZnJvbUhFWChTdHJpbmcoREJfcGxhbnRbcGxhbnRsdi0xXVs5XSkpXG4gICAgICAgIC8vICAgICBidC5oZWlnaHQgPSAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3BcIikuaGVpZ2h0O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcInN0cmVha1wiKS5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzcFwiKS5oZWlnaHQ7XG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcInN0cmVha1wiKS5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IGNjLkNvbG9yLlJFRC5mcm9tSEVYKFN0cmluZyhEQl9wbGFudFtwbGFudGx2LTFdWzldKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHBFU0dEU0VYX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiWmtwZXRzZGd2c2VcIik7IH1cblxuICAgIHByaXZhdGUgcmVzZXRCdWxsZXQoKXtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdic3AxJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwMicpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2JzcDMnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdic3A0JykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnNwNScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxufVxuIl19