
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
        this.addFreeAdEvent();
        this.handleFreeAd();
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
    CoinNotEnoughUI.prototype.handleFreeAd = function () {
        var isfree = ChickData_1.default.isFreeAd;
        this.GetGameObject('icon_video').active = !isfree;
        this.GetGameObject('btn_buyfree').active = !isfree;
        if (isfree) {
            var pos = this.GetGameObject('ad_label').getPosition();
            this.GetGameObject('ad_label').setPosition(new cc.Vec2(0, pos.y));
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
                Utils_1.default.createUI("prefab/MonthCardUI");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXENvaW5Ob3RFbm91Z2hVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnREFBMkM7QUFDM0MsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwyQ0FBc0M7QUFDdEMsb0NBQXlDO0FBQ3pDLDBDQUFxQztBQUUvQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBTTtJQUFuRDtRQUFBLHFFQXlHQztRQXRHRyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDOztJQW9HbEMsQ0FBQztJQS9GRyxlQUFlO0lBRWYsK0JBQUssR0FBTDtRQUNJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsaUJBQWlCO0lBRUoscUNBQVcsR0FBeEIsVUFBeUIsSUFBVzs7Ozs7O3dCQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FB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QUFDLEtBQUssQ0FBQztzREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNXO0lBTGIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXlHbkM7SUFBRCxzQkFBQztDQXpHRCxBQXlHQyxDQXpHNEMsZ0JBQU0sR0F5R2xEO2tCQXpHb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IE51bWJlclV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9OdW1iZXJVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ19jaGljayB9IGZyb20gXCIuLi9Db25maWdcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW5Ob3RFbm91Z2hVSSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJsX3RpbWVzOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYmxfY2hpY2tuYW1lOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHByaXZhdGUgdHlwZTpudW1iZXI7XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xyXG4gICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYWQnKSlcclxuICAgICAgICB0aGlzLmFkZEZyZWVBZEV2ZW50KClcclxuICAgICAgICB0aGlzLmhhbmRsZUZyZWVBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNldFZpZXdUeXBlKHR5cGU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnZ2V0Q2hpY2snKS5hY3RpdmUgPSB0eXBlID09IDE7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdnZXRDb2luJykuYWN0aXZlID0gdHlwZSA9PSAyO1xyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBpZih0eXBlID09IDEpe1xyXG4gICAgICAgICAgICBzdHIgPSBgJHtDaGlja0RhdGEudXNlci50b2RheV9nZXRjaGlja190aW1lc30vJHtDaGlja0RhdGEudXNlci50b2RheV9nZXRjaGlja190b3RhbH1gO1xyXG4gICAgICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDMgPiAwID8gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzIDogMTtcclxuICAgICAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTpmbG93ZXIke2x2fV9za2VgO1xyXG4gICAgICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7bHZ9X3RleGA7XHJcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2snKTtcclxuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgICAgICBjaGljay5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgICAgIGNoaWNrLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XHJcbiAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgICAgICAgICAgdGhpcy5sYmxfY2hpY2tuYW1lLnN0cmluZyA9IGDigJwke0NvbmZpZ19jaGlja1tsdiAtIDFdWzddfeKAnWA7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dCgnbGJsX2VmZmVjdCcsJ3gxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgc3RyID0gYCR7Q2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90aW1lc30vJHtDaGlja0RhdGEudXNlci50b2RheV9nZXRjb2luX3RvdGFsfWA7XHJcbiAgICAgICAgICAgIGxldCBsdiA9IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpIC0gMSA+IDAgPyBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDEgOiAxO1xyXG4gICAgICAgICAgICBsZXQgY29pbiA9IDAuNSpDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKGx2KTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KCdsYmxfZWZmZWN0JyxgKyR7TnVtYmVyVXRpbHMuZ2V0TGFyZ2VTdHJpbmcoVXRpbHMuZml4RmxvYXQoY29pbikpfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0xhY2tTaG93Jywnc2hvdycpO1xyXG4gICAgICAgIHRoaXMubGJsX3RpbWVzLnN0cmluZyA9IGDlvZPml6XmrKHmlbAke3N0cn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQ29pbigpe1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgICAgIGlmKHR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzKys7XHJcbiAgICAgICAgICAgIGxldCBsdiA9IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpIC0gMyA+IDAgPyBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDMgOiAxO1xyXG4gICAgICAgICAgICBIYWxsU2NlbmUuSW5zdGFuY2UuYnV5Q2hpY2sobHYsMik7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNvaW5fdGltZXMrKztcclxuICAgICAgICAgICAgbGV0IGNvaW4gPSAwLjUqQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSk7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcclxuICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihiKSBDaGlja0RhdGEudXNlci5jb2luICs9IGNvaW47XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGhhbmRsZUZyZWVBZCgpe1xyXG4gICAgICAgIGxldCBpc2ZyZWUgPSBDaGlja0RhdGEuaXNGcmVlQWQ7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdpY29uX3ZpZGVvJykuYWN0aXZlID0gIWlzZnJlZVxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2J1eWZyZWUnKS5hY3RpdmUgPSAhaXNmcmVlXHJcbiAgICAgICAgaWYoaXNmcmVlKXtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdCgnYWRfbGFiZWwnKS5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnYWRfbGFiZWwnKS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigwLHBvcy55KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9jbG9zZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9hZFwiOlxyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdMYWNrQ2xpY2snLCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGIpIHRoaXMuYWRkQ29pbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9idXlmcmVlXCI6XHJcbiAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Nb250aENhcmRVSVwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuIl19