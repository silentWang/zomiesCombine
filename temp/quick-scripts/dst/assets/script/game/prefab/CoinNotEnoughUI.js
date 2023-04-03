
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
                }, '1');
                break;
            case "btn_buyfree":
                // to do
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXENvaW5Ob3RFbm91Z2hVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnREFBMkM7QUFDM0MsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwyQ0FBc0M7QUFDdEMsb0NBQXlDO0FBQ3pDLDBDQUFxQztBQUUvQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBTTtJQUFuRDtRQUFBLHFFQXNGQztRQW5GRyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDOztJQWlGbEMsQ0FBQztJQTVFRyxlQUFlO0lBRWYsK0JBQUssR0FBTDtRQUNJLGVBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxpQkFBaUI7SUFFSixxQ0FBVyxHQUF4QixVQUF5QixJQUFXOzs7Ozs7d0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO3dCQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO3dCQUM3QyxHQUFHLEdBQUcsRUFBRSxDQUFDOzZCQUNWLENB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UyxDQUFDLFdBQVcsRUFBQyxPQUFPLENBQUMsQ0FBQztnQkFDeEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO29CQUN2QixJQUFHLENBQUM7d0JBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1AsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxRQUFRO2dCQUNSLE1BQU07U0FDYjtJQUNMLENBQUM7SUFsRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNXO0lBTGIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXNGbkM7SUFBRCxzQkFBQztDQXRGRCxBQXNGQyxDQXRGNEMsZ0JBQU0sR0FzRmxEO2tCQXRGb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IE51bWJlclV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9OdW1iZXJVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ19jaGljayB9IGZyb20gXCIuLi9Db25maWdcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW5Ob3RFbm91Z2hVSSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJsX3RpbWVzOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYmxfY2hpY2tuYW1lOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHByaXZhdGUgdHlwZTpudW1iZXI7XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYWQnKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzZXRWaWV3VHlwZSh0eXBlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2dldENoaWNrJykuYWN0aXZlID0gdHlwZSA9PSAxO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnZ2V0Q29pbicpLmFjdGl2ZSA9IHR5cGUgPT0gMjtcclxuICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgaWYodHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgc3RyID0gYCR7Q2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdGltZXN9LyR7Q2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdG90YWx9YDtcclxuICAgICAgICAgICAgbGV0IGx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzID4gMCA/IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpIC0gMyA6IDE7XHJcbiAgICAgICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtsdn1fc2tlYDtcclxuICAgICAgICAgICAgbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpmbG93ZXIke2x2fV90ZXhgO1xyXG4gICAgICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrJyk7XHJcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcclxuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xyXG4gICAgICAgICAgICBjaGljay5hcm1hdHVyZU5hbWUgPSAnQXJtYXR1cmUnO1xyXG4gICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XHJcbiAgICAgICAgICAgIHRoaXMubGJsX2NoaWNrbmFtZS5zdHJpbmcgPSBg4oCcJHtDb25maWdfY2hpY2tbbHYgLSAxXVs3XX3igJ1gO1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoJ2xibF9lZmZlY3QnLCd4MScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgIHN0ciA9IGAke0NoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNvaW5fdGltZXN9LyR7Q2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90b3RhbH1gO1xyXG4gICAgICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDEgPiAwID8gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAxIDogMTtcclxuICAgICAgICAgICAgbGV0IGNvaW4gPSAwLjUqQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdik7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dCgnbGJsX2VmZmVjdCcsYCske051bWJlclV0aWxzLmdldExhcmdlU3RyaW5nKFV0aWxzLmZpeEZsb2F0KGNvaW4pKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdMYWNrU2hvdycsJ3Nob3cnKTtcclxuICAgICAgICB0aGlzLmxibF90aW1lcy5zdHJpbmcgPSBg5b2T5pel5qyh5pWwJHtzdHJ9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENvaW4oKXtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgICAgICBpZih0eXBlID09IDEpe1xyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci50b2RheV9nZXRjaGlja190aW1lcysrO1xyXG4gICAgICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDMgPiAwID8gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzIDogMTtcclxuICAgICAgICAgICAgSGFsbFNjZW5lLkluc3RhbmNlLmJ1eUNoaWNrKGx2LDIpO1xyXG4gICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0eXBlID09IDIpe1xyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci50b2RheV9nZXRjb2luX3RpbWVzKys7XHJcbiAgICAgICAgICAgIGxldCBjb2luID0gMC41KkNoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UoQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkpO1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNvaW5cIik7XHJcbiAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYikgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSBjb2luO1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9ub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYWRcIjpcclxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnTGFja0NsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKSB0aGlzLmFkZENvaW4oKTtcclxuICAgICAgICAgICAgICAgIH0sJzEnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2J1eWZyZWVcIjpcclxuICAgICAgICAgICAgICAgIC8vIHRvIGRvXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19