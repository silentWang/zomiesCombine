
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/CoinNotEnoughUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5b6f4QML1AbaLoQd7JYOMJ', 'CoinNotEnoughUI');
// script/game/prefab/CoinNotEnoughUI.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var AdCenter_1 = require("../../manager/AdCenter");
var Data_1 = require("../../manager/Data");
var AudioMgr_1 = require("../../utils/AudioMgr");
var BigNumber_1 = require("../../utils/BigNumber");
var Utils_1 = require("../../utils/Utils");
var DB_1 = require("../DB");
var HallScene_1 = require("../HallScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CoinNotEnoughUI = /** @class */ (function (_super) {
    __extends(CoinNotEnoughUI, _super);
    function CoinNotEnoughUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbl_times = null;
        _this.lbl_chickname = null;
        return _this;
    }
    // onLoad () {}
    CoinNotEnoughUI.prototype.start = function () {
        Utils_1.default.playBreath(this.GetGameObject('btn_ad'));
    };
    // update (dt) {}
    CoinNotEnoughUI.prototype.setType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var str, lv, skpath, atlaspath, chick, _a, _b, lv, coin;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.type = type;
                        this.GetGameObject('getChick').active = type == 1;
                        this.GetGameObject('getCoin').active = type == 2;
                        str = '';
                        if (!(type == 1)) return [3 /*break*/, 3];
                        str = Data_1.default.user.today_getchick_times + "/" + Data_1.default.user.today_getchick_total;
                        lv = Data_1.default.user.GetMaxLv() - 1 > 0 ? Data_1.default.user.GetMaxLv() - 1 : 1;
                        skpath = "spine:flower" + lv + "_ske";
                        atlaspath = "spine:flower" + lv + "_tex";
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
                        this.lbl_chickname.string = "\u201C" + DB_1.DB_plant[lv - 1][7] + "\u201D";
                        this.SetText('lbl_effect', 'x1');
                        return [3 /*break*/, 4];
                    case 3:
                        if (type == 2) {
                            str = Data_1.default.user.today_getcoin_times + "/" + Data_1.default.user.today_getcoin_total;
                            lv = Data_1.default.user.GetMaxLv() - 1 > 0 ? Data_1.default.user.GetMaxLv() - 1 : 1;
                            coin = 0.5 * Data_1.default.user.BuyPrice(lv);
                            this.SetText('lbl_effect', "+" + BigNumber_1.default.getLargeString(Utils_1.default.fixFloat(coin)));
                        }
                        _c.label = 4;
                    case 4:
                        this.lbl_times.string = "\u5F53\u65E5\u6B21\u6570" + str;
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinNotEnoughUI.prototype.addValue = function () {
        var type = this.type;
        if (type == 1) {
            Data_1.default.user.today_getchick_times++;
            var lv = Data_1.default.user.GetMaxLv() - 1 > 0 ? Data_1.default.user.GetMaxLv() - 1 : 1;
            HallScene_1.default.Instance.tryBuyPlant(lv, 2);
            Data_1.default.save();
            this.closeUI();
        }
        else if (type == 2) {
            Data_1.default.user.today_getcoin_times++;
            var coin_1 = 0.5 * Data_1.default.user.BuyPrice(Data_1.default.user.GetMaxLv());
            AudioMgr_1.default.Instance().playSFX("coin");
            Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                if (b)
                    Data_1.default.user.coin += coin_1;
                Data_1.default.save();
            });
            this.closeUI();
        }
    };
    CoinNotEnoughUI.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
            case "btn_normal":
                this.closeUI();
                break;
            case "btn_ad":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b)
                        _this.addValue();
                });
                break;
        }
    };
    __decorate([
        property(cc.Label)
    ], CoinNotEnoughUI.prototype, "lbl_times", void 0);
    __decorate([
        property(cc.Label)
    ], CoinNotEnoughUI.prototype, "lbl_chickname", void 0);
    CoinNotEnoughUI = __decorate([
        ccclass
    ], CoinNotEnoughUI);
    return CoinNotEnoughUI;
}(BaseUI_1.default));
exports.default = CoinNotEnoughUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXENvaW5Ob3RFbm91Z2hVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnREFBMkM7QUFDM0MsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0Qyw0QkFBaUM7QUFDakMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFNO0lBQW5EO1FBQUEscUVBaUZDO1FBOUVHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBNEVsQyxDQUFDO0lBdkVHLGVBQWU7SUFFZiwrQkFBSyxHQUFMO1FBQ0ksZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELGlCQUFpQjtJQUVKLGlDQUFPLEdBQXBCLFVBQXFCLElBQVc7Ozs7Ozt3QkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7d0JBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7d0JBQzdDLEdBQUcsR0FBRyxFQUFFLENBQUM7NkJBQ1YsQ0FBQSxJQUFJLElBQUks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Q0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQTdFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ1c7SUFMYixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBaUZuQztJQUFELHNCQUFDO0NBakZELEFBaUZDLENBakY0QyxnQkFBTSxHQWlGbEQ7a0JBakZvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiLi4vLi4vdXRpbHMvQmlnTnVtYmVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgREJfcGxhbnQgfSBmcm9tIFwiLi4vREJcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL1VzZXJNb2RlbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luTm90RW5vdWdoVUkgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxibF90aW1lczogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJsX2NoaWNrbmFtZTpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwcml2YXRlIHR5cGU6bnVtYmVyO1xyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FkJykpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2V0VHlwZSh0eXBlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2dldENoaWNrJykuYWN0aXZlID0gdHlwZSA9PSAxO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnZ2V0Q29pbicpLmFjdGl2ZSA9IHR5cGUgPT0gMjtcclxuICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgaWYodHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgc3RyID0gYCR7RGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzfS8ke0RhdGEudXNlci50b2RheV9nZXRjaGlja190b3RhbH1gO1xyXG4gICAgICAgICAgICBsZXQgbHYgPSBEYXRhLnVzZXIuR2V0TWF4THYoKSAtIDEgPiAwID8gRGF0YS51c2VyLkdldE1heEx2KCkgLSAxIDogMTtcclxuICAgICAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTpmbG93ZXIke2x2fV9za2VgO1xyXG4gICAgICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7bHZ9X3RleGA7XHJcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgICAgICBjaGljay5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgICAgIGNoaWNrLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XHJcbiAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgICAgICAgICAgdGhpcy5sYmxfY2hpY2tuYW1lLnN0cmluZyA9IGDigJwke0RCX3BsYW50W2x2IC0gMV1bN1194oCdYDtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KCdsYmxfZWZmZWN0JywneDEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0eXBlID09IDIpe1xyXG4gICAgICAgICAgICBzdHIgPSBgJHtEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90aW1lc30vJHtEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90b3RhbH1gO1xyXG4gICAgICAgICAgICBsZXQgbHYgPSBEYXRhLnVzZXIuR2V0TWF4THYoKSAtIDEgPiAwID8gRGF0YS51c2VyLkdldE1heEx2KCkgLSAxIDogMTtcclxuICAgICAgICAgICAgbGV0IGNvaW4gPSAwLjUqRGF0YS51c2VyLkJ1eVByaWNlKGx2KTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KCdsYmxfZWZmZWN0JyxgKyR7QmlnTnVtYmVyLmdldExhcmdlU3RyaW5nKFV0aWxzLmZpeEZsb2F0KGNvaW4pKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYmxfdGltZXMuc3RyaW5nID0gYOW9k+aXpeasoeaVsCR7c3RyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRWYWx1ZSgpe1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgICAgIGlmKHR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgIERhdGEudXNlci50b2RheV9nZXRjaGlja190aW1lcysrO1xyXG4gICAgICAgICAgICBsZXQgbHYgPSBEYXRhLnVzZXIuR2V0TWF4THYoKSAtIDEgPiAwID8gRGF0YS51c2VyLkdldE1heEx2KCkgLSAxIDogMTtcclxuICAgICAgICAgICAgSGFsbFNjZW5lLkluc3RhbmNlLnRyeUJ1eVBsYW50KGx2LDIpO1xyXG4gICAgICAgICAgICBEYXRhLnNhdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgRGF0YS51c2VyLnRvZGF5X2dldGNvaW5fdGltZXMrKztcclxuICAgICAgICAgICAgbGV0IGNvaW4gPSAwLjUqRGF0YS51c2VyLkJ1eVByaWNlKERhdGEudXNlci5HZXRNYXhMdigpKTtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY29pblwiKTtcclxuICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihiKSBEYXRhLnVzZXIuY29pbiArPSBjb2luO1xyXG4gICAgICAgICAgICAgICAgRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9ub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYWRcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKSB0aGlzLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=