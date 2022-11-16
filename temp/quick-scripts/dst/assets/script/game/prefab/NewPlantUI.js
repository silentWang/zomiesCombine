
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/NewPlantUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46e3e5iTx5BT7fDRmzqw2qW', 'NewPlantUI');
// script/game/prefab/NewPlantUI.ts

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
var Data_1 = require("../../manager/Data");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var DB_1 = require("../DB");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewPlantUI = /** @class */ (function (_super) {
    __extends(NewPlantUI, _super);
    function NewPlantUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coin = 0;
        _this.gem = 0;
        return _this;
    }
    NewPlantUI.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lv, coin, levelup, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        lv = Data_1.default.user.GetMaxLv();
                        coin = Data_1.default.user.BuyPrice(Math.max(1, lv - 3));
                        levelup = DB_1.DB_levelupGem[lv + ""];
                        // this.GetGameObject("node_gem").active = levelup;
                        this.SetText("lbl_lv", "等级 " + lv);
                        AudioMgr_1.default.Instance().playSFX("unlock_plant");
                        this.coin = coin;
                        if (levelup) {
                            this.gem = levelup[1];
                            // this.SetText("lbl_gem",this.gem+"");
                        }
                        this.SetText("lbl_coin", Utils_1.default.formatNumber(coin));
                        _a = this.GetSkeleton("flower1");
                        return [4 /*yield*/, Utils_1.default.loadRes("spine:flower" + lv, sp.SkeletonData)];
                    case 1:
                        _a.skeletonData = (_b.sent());
                        this.GetSkeleton("flower1").setAnimation(0, "idleL", true);
                        AdCenter_1.default.Instance().showGridAd();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewPlantUI.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        _super.prototype.onDestroy.call(this);
    };
    NewPlantUI.prototype.onBtnClicked = function (event, customEventData) {
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_get":
                {
                    var coin_1 = this.coin;
                    var gem_1 = this.gem;
                    AudioMgr_1.default.Instance().playSFX("coin");
                    Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                        if (b) {
                            Data_1.default.user.coin += coin_1;
                        }
                    });
                    if (gem_1 > 0) {
                        AudioMgr_1.default.Instance().playSFX("gem");
                        Utils_1.default.flyAnim(1, this.node, "icon_gem", Utils_1.default.getRandomInt(2, 4), 85, function (b) {
                            if (b) {
                                Data_1.default.user.gem += gem_1;
                            }
                        });
                    }
                    this.closeUI();
                }
                break;
        }
    };
    NewPlantUI = __decorate([
        ccclass
    ], NewPlantUI);
    return NewPlantUI;
}(BaseUI_1.default));
exports.default = NewPlantUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXE5ld1BsYW50VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUM5QywyQ0FBc0M7QUFDdEMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0Qyw0QkFBc0M7QUFHaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUFpRUM7UUEvRFcsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUcsR0FBRyxDQUFDLENBQUM7O0lBOERwQixDQUFDO0lBN0RTLDBCQUFLLEdBQVg7Ozs7Ozt3QkFFUSxFQUFFLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTt3QkFDekIsSUFBSSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxPQUFPLEdBQUcsa0JBQWEsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ25DLG1EQUFtRDt3QkFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUVoQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTt3QkFFM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2pCLElBQUcsT0FBTyxFQUNWOzRCQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUNyQix1Q0FBdUM7eUJBQzFDO3dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFFbEQsS0FBQSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFBO3dCQUFnQixxQkFBTSxlQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBakcsR0FBNEIsWUFBWSxJQUFHLFNBQXlFLENBQUEsQ0FBQzt3QkFDckgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQzt3QkFFekQsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7S0FDcEM7SUFFRCw4QkFBUyxHQUFUO1FBRUksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLEtBQUssRUFBRSxlQUFlO1FBQy9CLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxTQUFTO2dCQUNWO29CQUNJLElBQUksTUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7b0JBQ3BCLElBQUksS0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBRW5CLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBQyxDQUFDO3dCQUNqRSxJQUFHLENBQUMsRUFDSjs0QkFDSSxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFJLENBQUM7eUJBQzFCO29CQUNMLENBQUMsQ0FBQyxDQUFBO29CQUNGLElBQUcsS0FBRyxHQUFDLENBQUMsRUFDUjt3QkFDSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkMsZUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsZUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLFVBQUMsQ0FBQzs0QkFDOUQsSUFBRyxDQUFDLEVBQ0o7Z0NBQ0ksY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksS0FBRyxDQUFDOzZCQUN4Qjt3QkFDTCxDQUFDLENBQUMsQ0FBQTtxQkFDTDtvQkFDRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2xCO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFoRWdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpRTlCO0lBQUQsaUJBQUM7Q0FqRUQsQUFpRUMsQ0FqRXVDLGdCQUFNLEdBaUU3QztrQkFqRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IERCX2xldmVsdXBHZW0gfSBmcm9tIFwiLi4vREJcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1BsYW50VUkgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIHByaXZhdGUgY29pbiA9IDA7XHJcbiAgICBwcml2YXRlIGdlbSA9IDA7XHJcbiAgICBhc3luYyBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIGxldCBsdiA9IERhdGEudXNlci5HZXRNYXhMdigpXHJcbiAgICAgICAgbGV0IGNvaW4gPSBEYXRhLnVzZXIuQnV5UHJpY2UoTWF0aC5tYXgoMSxsdi0zKSk7XHJcbiAgICAgICAgbGV0IGxldmVsdXAgPSBEQl9sZXZlbHVwR2VtW2x2K1wiXCJdO1xyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfZ2VtXCIpLmFjdGl2ZSA9IGxldmVsdXA7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2x2XCIsXCLnrYnnuqcgXCIrbHYpO1xyXG5cclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJ1bmxvY2tfcGxhbnRcIilcclxuXHJcbiAgICAgICAgdGhpcy5jb2luID0gY29pbjtcclxuICAgICAgICBpZihsZXZlbHVwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nZW0gPSBsZXZlbHVwWzFdXHJcbiAgICAgICAgICAgIC8vIHRoaXMuU2V0VGV4dChcImxibF9nZW1cIix0aGlzLmdlbStcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoY29pbikpO1xyXG5cclxuICAgICAgICB0aGlzLkdldFNrZWxldG9uKFwiZmxvd2VyMVwiKS5za2VsZXRvbkRhdGEgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwic3BpbmU6Zmxvd2VyXCIrbHYsc3AuU2tlbGV0b25EYXRhKSBhcyBzcC5Ta2VsZXRvbkRhdGE7XHJcbiAgICAgICAgdGhpcy5HZXRTa2VsZXRvbihcImZsb3dlcjFcIikuc2V0QW5pbWF0aW9uKDAsXCJpZGxlTFwiLHRydWUpO1xyXG5cclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9nZXRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29pbiA9IHRoaXMuY29pblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW0gPSB0aGlzLmdlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjb2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIuY29pbiArPSBjb2luO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdlbT4wKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiZ2VtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5mbHlBbmltKDEsdGhpcy5ub2RlLFwiaWNvbl9nZW1cIixVdGlscy5nZXRSYW5kb21JbnQoMiw0KSw4NSwoYik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLmdlbSArPSBnZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19