
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/NewChickUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03d56pGmRJDcJ6Q4cidnntP', 'NewChickUI');
// script/game/prefab/NewChickUI.ts

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
var AdCenter_1 = require("../../manager/AdCenter");
var ChickData_1 = require("../../manager/ChickData");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var Config_1 = require("../Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewChickUI = /** @class */ (function (_super) {
    __extends(NewChickUI, _super);
    function NewChickUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coin = 0;
        return _this;
    }
    NewChickUI.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lv, coin, skpath, atlaspath, armature, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        lv = ChickData_1.default.user.getLvlMax();
                        coin = ChickData_1.default.user.buyChickPrice(Math.max(1, lv - 3));
                        this.SetText('lbl_name', Config_1.Config_chick[lv - 1][7] + '');
                        this.SetText("lbl_lv", "等级 " + lv);
                        AudioMgr_1.default.Instance().playMX("unlock_plant");
                        this.coin = coin;
                        this.SetText("lbl_coin", Utils_1.default.formatNumber(coin));
                        skpath = "spine:flower" + lv + "_ske";
                        atlaspath = "spine:flower" + lv + "_tex";
                        armature = this.GetDragonAmature("chick");
                        _a = armature;
                        return [4 /*yield*/, Utils_1.default.loadRes(skpath, dragonBones.DragonBonesAsset)];
                    case 1:
                        _a.dragonAsset = (_c.sent());
                        _b = armature;
                        return [4 /*yield*/, Utils_1.default.loadRes(atlaspath, dragonBones.DragonBonesAtlasAsset)];
                    case 2:
                        _b.dragonAtlasAsset = (_c.sent());
                        armature.armatureName = "Armature";
                        armature.playAnimation('idleL', 0);
                        AdCenter_1.default.Instance().showGridAd();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewChickUI.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
    };
    NewChickUI.prototype.onUIClicked = function (event, customEventData) {
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_get":
                {
                    var coin_1 = this.coin;
                    AudioMgr_1.default.Instance().playMX("coin");
                    Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                        if (b) {
                            ChickData_1.default.user.coin += coin_1;
                        }
                    });
                    this.closeUI();
                }
                break;
        }
    };
    NewChickUI = __decorate([
        ccclass
    ], NewChickUI);
    return NewChickUI;
}(BaseUI_1.default));
exports.default = NewChickUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvTmV3Q2hpY2tVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLG9DQUF5QztBQUduQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBTTtJQUE5QztRQUFBLHFFQThDQztRQTVDVyxVQUFJLEdBQUcsQ0FBQyxDQUFDOztJQTRDckIsQ0FBQztJQTNDUywwQkFBSyxHQUFYOzs7Ozs7d0JBQ1EsRUFBRSxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO3dCQUMvQixJQUFJLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxxQkFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNoQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTt3QkFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDOUMsTUFBTSxHQUFHLGlCQUFlLEVBQUUsU0FBTSxDQUFDO3dCQUNqQyxTQUFTLEdBQUcsaUJBQWUsRUFBRSxTQUFNLENBQUM7d0JBQ3BDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzlDLEtBQUEsUUFBUSxDQUFBO3dCQUFlLHFCQUFNLGVBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFBOzt3QkFBL0UsR0FBUyxXQUFXLElBQUcsU0FBd0YsQ0FBQSxDQUFDO3dCQUNoSCxLQUFBLFFBQVEsQ0FBQTt3QkFBb0IscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLEVBQUE7O3dCQUE1RixHQUFTLGdCQUFnQixJQUFHLFNBQXFHLENBQUEsQ0FBQzt3QkFDbEksUUFBUSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7d0JBQ25DLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7OztLQUNwQztJQUVELDhCQUFTLEdBQVQ7UUFFSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pDLGlCQUFNLFNBQVMsV0FBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFNBQVM7Z0JBQ1Y7b0JBQ0ksSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtvQkFDcEIsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25DLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxVQUFDLENBQUM7d0JBQ2pFLElBQUcsQ0FBQyxFQUNKOzRCQUNJLG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFJLENBQUM7eUJBQy9CO29CQUNMLENBQUMsQ0FBQyxDQUFBO29CQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDbEI7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQTdDZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThDOUI7SUFBRCxpQkFBQztDQTlDRCxBQThDQyxDQTlDdUMsZ0JBQU0sR0E4QzdDO2tCQTlDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgQ29uZmlnX2NoaWNrIH0gZnJvbSBcIi4uL0NvbmZpZ1wiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2hpY2tVSSBleHRlbmRzIEJhc2VVSSB7XG5cbiAgICBwcml2YXRlIGNvaW4gPSAwO1xuICAgIGFzeW5jIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KClcbiAgICAgICAgbGV0IGNvaW4gPSBDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKE1hdGgubWF4KDEsbHYtMykpO1xuICAgICAgICB0aGlzLlNldFRleHQoJ2xibF9uYW1lJyxDb25maWdfY2hpY2tbbHYgLSAxXVs3XSArICcnKTtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2x2XCIsXCLnrYnnuqcgXCIrbHYpO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcInVubG9ja19wbGFudFwiKVxuICAgICAgICB0aGlzLmNvaW4gPSBjb2luO1xuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfY29pblwiLFV0aWxzLmZvcm1hdE51bWJlcihjb2luKSk7XG4gICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtsdn1fc2tlYDtcbiAgICAgICAgbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpmbG93ZXIke2x2fV90ZXhgO1xuICAgICAgICBsZXQgYXJtYXR1cmUgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoXCJjaGlja1wiKTtcbiAgICAgICAgYXJtYXR1cmUuZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xuICAgICAgICBhcm1hdHVyZS5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XG4gICAgICAgIGFybWF0dXJlLmFybWF0dXJlTmFtZSA9IFwiQXJtYXR1cmVcIjtcbiAgICAgICAgYXJtYXR1cmUucGxheUFuaW1hdGlvbignaWRsZUwnLDApO1xuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKVxuICAgIHtcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2dldFwiOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvaW4gPSB0aGlzLmNvaW5cbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjb2luXCIpO1xuICAgICAgICAgICAgICAgICAgICBVdGlscy5mbHlBbmltKDAsdGhpcy5ub2RlLFwiaWNvbl9jb2luXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDUsMTApLDEwMCwoYik9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGIpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSBjb2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==