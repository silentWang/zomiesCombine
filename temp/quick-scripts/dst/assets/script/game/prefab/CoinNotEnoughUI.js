
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
var ChickData_1 = require("../../manager/ChickData");
var WxCenter_1 = require("../../manager/WxCenter");
var AudioMgr_1 = require("../../utils/AudioMgr");
var NumberUtils_1 = require("../../utils/NumberUtils");
var Utils_1 = require("../../utils/Utils");
var Config_1 = require("../Config");
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
        AdCenter_1.default.Instance().showGridAd();
        Utils_1.default.playBreath(this.GetGameObject('btn_ad'));
    };
    // update (dt) {}
    CoinNotEnoughUI.prototype.setViewType = function (type) {
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
                        str = ChickData_1.default.user.today_getchick_times + "/" + ChickData_1.default.user.today_getchick_total;
                        lv = ChickData_1.default.user.getLvlMax() - 3 > 0 ? ChickData_1.default.user.getLvlMax() - 3 : 1;
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
                        this.lbl_chickname.string = "\u201C" + Config_1.Config_chick[lv - 1][7] + "\u201D";
                        this.SetText('lbl_effect', 'x1');
                        return [3 /*break*/, 4];
                    case 3:
                        if (type == 2) {
                            str = ChickData_1.default.user.today_getcoin_times + "/" + ChickData_1.default.user.today_getcoin_total;
                            lv = ChickData_1.default.user.getLvlMax() - 1 > 0 ? ChickData_1.default.user.getLvlMax() - 1 : 1;
                            coin = 0.5 * ChickData_1.default.user.buyChickPrice(lv);
                            this.SetText('lbl_effect', "+" + NumberUtils_1.default.getLargeString(Utils_1.default.fixFloat(coin)));
                        }
                        _c.label = 4;
                    case 4:
                        WxCenter_1.default.aldReport('LackShow', 'show');
                        this.lbl_times.string = "\u5F53\u65E5\u6B21\u6570" + str;
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinNotEnoughUI.prototype.addCoin = function () {
        var type = this.type;
        if (type == 1) {
            ChickData_1.default.user.today_getchick_times++;
            var lv = ChickData_1.default.user.getLvlMax() - 3 > 0 ? ChickData_1.default.user.getLvlMax() - 3 : 1;
            HallScene_1.default.Instance.buyChick(lv, 2);
            ChickData_1.default.save();
            this.closeUI();
        }
        else if (type == 2) {
            ChickData_1.default.user.today_getcoin_times++;
            var coin_1 = 0.5 * ChickData_1.default.user.buyChickPrice(ChickData_1.default.user.getLvlMax());
            AudioMgr_1.default.Instance().playMX("coin");
            Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                if (b)
                    ChickData_1.default.user.coin += coin_1;
                ChickData_1.default.save();
            });
            this.closeUI();
        }
    };
    CoinNotEnoughUI.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
            case "btn_normal":
                this.closeUI();
                break;
            case "btn_ad":
                WxCenter_1.default.aldReport('LackClick', 'click');
                AdCenter_1.default.Instance().play(function (b) {
                    if (b)
                        _this.addCoin();
                });
                break;
            case "btn_buyfree":
                // to do
                break;
        }
    };
    CoinNotEnoughUI.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvQ29pbk5vdEVub3VnaFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsdURBQWtEO0FBQ2xELDJDQUFzQztBQUN0QyxvQ0FBeUM7QUFDekMsMENBQXFDO0FBRS9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFNO0lBQW5EO1FBQUEscUVBNkZDO1FBMUZHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBd0ZsQyxDQUFDO0lBbkZHLGVBQWU7SUFFZiwrQkFBSyxHQUFMO1FBQ0ksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxlQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsaUJBQWlCO0lBRUoscUNBQVcsR0FBeEIsVUFBeUIsSUFBVzs7Ozs7O3dCQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENB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Q2YsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztvQkFDdkIsSUFBRyxDQUFDO3dCQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxRQUFRO2dCQUNSLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBRUksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBekZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDVztJQUxiLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E2Rm5DO0lBQUQsc0JBQUM7Q0E3RkQsQUE2RkMsQ0E3RjRDLGdCQUFNLEdBNkZsRDtrQkE3Rm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvV3hDZW50ZXJcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBOdW1iZXJVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvTnVtYmVyVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7IENvbmZpZ19jaGljayB9IGZyb20gXCIuLi9Db25maWdcIjtcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4uL0hhbGxTY2VuZVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW5Ob3RFbm91Z2hVSSBleHRlbmRzIEJhc2VVSSB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsX3RpbWVzOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibF9jaGlja25hbWU6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgcHJpdmF0ZSB0eXBlOm51bWJlcjtcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcbiAgICAgICAgVXRpbHMucGxheUJyZWF0aCh0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9hZCcpKVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0Vmlld1R5cGUodHlwZTpudW1iZXIpe1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2dldENoaWNrJykuYWN0aXZlID0gdHlwZSA9PSAxO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2dldENvaW4nKS5hY3RpdmUgPSB0eXBlID09IDI7XG4gICAgICAgIGxldCBzdHIgPSAnJztcbiAgICAgICAgaWYodHlwZSA9PSAxKXtcbiAgICAgICAgICAgIHN0ciA9IGAke0NoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzfS8ke0NoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RvdGFsfWA7XG4gICAgICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDMgPiAwID8gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzIDogMTtcbiAgICAgICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtsdn1fc2tlYDtcbiAgICAgICAgICAgIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtsdn1fdGV4YDtcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcbiAgICAgICAgICAgIGNoaWNrLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XG4gICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XG4gICAgICAgICAgICB0aGlzLmxibF9jaGlja25hbWUuc3RyaW5nID0gYOKAnCR7Q29uZmlnX2NoaWNrW2x2IC0gMV1bN1194oCdYDtcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dCgnbGJsX2VmZmVjdCcsJ3gxJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0eXBlID09IDIpe1xuICAgICAgICAgICAgc3RyID0gYCR7Q2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90aW1lc30vJHtDaGlja0RhdGEudXNlci50b2RheV9nZXRjb2luX3RvdGFsfWA7XG4gICAgICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDEgPiAwID8gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAxIDogMTtcbiAgICAgICAgICAgIGxldCBjb2luID0gMC41KkNoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpO1xuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KCdsYmxfZWZmZWN0JyxgKyR7TnVtYmVyVXRpbHMuZ2V0TGFyZ2VTdHJpbmcoVXRpbHMuZml4RmxvYXQoY29pbikpfWApO1xuICAgICAgICB9XG4gICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnTGFja1Nob3cnLCdzaG93Jyk7XG4gICAgICAgIHRoaXMubGJsX3RpbWVzLnN0cmluZyA9IGDlvZPml6XmrKHmlbAke3N0cn1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29pbigpe1xuICAgICAgICBsZXQgdHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgaWYodHlwZSA9PSAxKXtcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzKys7XG4gICAgICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDMgPiAwID8gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzIDogMTtcbiAgICAgICAgICAgIEhhbGxTY2VuZS5JbnN0YW5jZS5idXlDaGljayhsdiwyKTtcbiAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHR5cGUgPT0gMil7XG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci50b2RheV9nZXRjb2luX3RpbWVzKys7XG4gICAgICAgICAgICBsZXQgY29pbiA9IDAuNSpDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpKTtcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcbiAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xuICAgICAgICAgICAgICAgIGlmKGIpIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gY29pbjtcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbm9ybWFsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2FkXCI6XG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdMYWNrQ2xpY2snLCdjbGljaycpO1xuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoYikgdGhpcy5hZGRDb2luKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2J1eWZyZWVcIjpcbiAgICAgICAgICAgICAgICAvLyB0byBkb1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KClcbiAgICB7XG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=