
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/ShopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6b02e+8pRDZ6todV8KUlNR', 'ShopItem');
// script/game/prefab/ShopItem.ts

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
var ListItem_1 = require("../../framwork/ListItem");
var MsgToast_1 = require("../../framwork/MsgToast");
var AdCenter_1 = require("../../manager/AdCenter");
var ChickData_1 = require("../../manager/ChickData");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var GameConst_1 = require("../GameConst");
var HallScene_1 = require("../HallScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GunBuyType;
(function (GunBuyType) {
    GunBuyType[GunBuyType["CAN_BUY"] = 1] = "CAN_BUY";
    GunBuyType[GunBuyType["CAN_AD_BUY"] = 2] = "CAN_AD_BUY";
    GunBuyType[GunBuyType["ONLY_CHECK"] = 4] = "ONLY_CHECK";
    // CNNOT_SEE= 8,
    GunBuyType[GunBuyType["GEM_BUY"] = 16] = "GEM_BUY";
})(GunBuyType || (GunBuyType = {}));
var ShopItem = /** @class */ (function (_super) {
    __extends(ShopItem, _super);
    function ShopItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cost_coin = 0;
        _this.gun = null;
        return _this;
    }
    //观看视频免费获得的枪械等级
    ShopItem.prototype.WatchAdBuy = function (id) {
        var gunlv = ChickData_1.default.user.GetMaxLv();
        if (gunlv < 8)
            return false;
        return gunlv - 4 == id;
    };
    //不可指定购买只可查看的区间
    ShopItem.prototype.OnlyCheck = function (id) {
        var gunlv = ChickData_1.default.user.GetMaxLv();
        if (gunlv - 2 <= id && id <= gunlv) {
            return true;
        }
        return false;
    };
    ShopItem.prototype.BuyGem = function (id) {
        var gunlv = ChickData_1.default.user.GetMaxLv();
        return gunlv - 1 == id;
    };
    ShopItem.prototype.getBuyType = function (gun) {
        var gunlv = ChickData_1.default.user.GetMaxLv();
        var type = 0;
        if (gun[0] <= gunlv - 2) {
            type |= GunBuyType.CAN_BUY;
        }
        if (this.WatchAdBuy(gun[0])) {
            type |= GunBuyType.CAN_AD_BUY;
        }
        if (this.BuyGem(gun[0])) {
            type |= GunBuyType.GEM_BUY;
        }
        if (this.OnlyCheck(gun[0])) {
            type |= GunBuyType.ONLY_CHECK;
        }
        return type;
    };
    ShopItem.prototype.setItemData = function (gun) {
        return __awaiter(this, void 0, void 0, function () {
            var node, bhide, buytype, skill, skilltype, value, str, skpath, atlaspath, chick, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        node = null;
                        bhide = false;
                        buytype = this.getBuyType(gun);
                        this.gun = gun;
                        this.GetGameObject("show").active = false;
                        this.GetGameObject("hide").active = false;
                        this.GetGameObject("btn_yellow").active = false;
                        this.GetGameObject("btn_free").active = false;
                        this.GetGameObject("btn_gray").active = false;
                        if ((buytype & GunBuyType.GEM_BUY) != 0 && gun[6] > 0) {
                            this.GetGameObject("show").active = true;
                            node = this.GetGameObject("show");
                        }
                        else if ((buytype & GunBuyType.CAN_AD_BUY) != 0) {
                            this.GetGameObject("show").active = true;
                            this.GetGameObject("btn_free").active = true;
                            node = this.GetGameObject("show");
                        }
                        else if ((buytype & GunBuyType.CAN_BUY) != 0) {
                            this.GetGameObject("show").active = true;
                            this.GetGameObject("btn_yellow").active = true;
                            node = this.GetGameObject("show");
                        }
                        else {
                            if ((buytype & GunBuyType.ONLY_CHECK) != 0) {
                                this.GetGameObject("show").active = true;
                                this.GetGameObject("btn_gray").active = true;
                                node = this.GetGameObject("show");
                            }
                            else {
                                this.GetGameObject("hide").active = true;
                                node = this.GetGameObject("hide");
                                bhide = true;
                            }
                        }
                        this._findInChildren(node, "lbl_lv").getComponent(cc.Label).string = "" + gun[0];
                        this._findInChildren(node, "New Label").getComponent(cc.Label).string = "到" + (gun[0] + 2) + '级解锁';
                        skill = gun[3].split("|");
                        skilltype = skill[0];
                        value = skill[1];
                        str = "";
                        if (bhide)
                            value = "?";
                        if (skilltype == 1) {
                            str = "技能:" + value + "%的几率触发减速目标1秒";
                        }
                        else if (skilltype == 2) {
                            str = "技能:" + value + "%几率对目标造成双倍伤害";
                        }
                        else if (skilltype == 3) {
                            str = "技能:" + value + "%几率冰冻目标1秒";
                        }
                        this._findInChildren(node, "lbl_name").getComponent(cc.Label).string = bhide ? '未知萌鸡' : gun[7];
                        this._findInChildren(node, "lbl_desc").getComponent(cc.Label).string = bhide ? '技能:未知' : str;
                        this._findInChildren(node, "lbl_cd").getComponent(cc.Label).string = bhide ? "?" : gun[1] + "";
                        this._findInChildren(node, "lbl_power").getComponent(cc.Label).string = bhide ? "?" : Utils_1.default.formatNumber(gun[2]) + "";
                        if (!!bhide) return [3 /*break*/, 3];
                        skpath = "spine:flower" + gun[0] + "_ske";
                        atlaspath = "spine:flower" + gun[0] + "_tex";
                        chick = this.GetDragonAmature('shopChick');
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
                        _c.label = 3;
                    case 3:
                        this.cost_coin = ChickData_1.default.user.BuyPrice(gun[0]);
                        this.SetText("lbl_buy_coin", Utils_1.default.formatNumber(this.cost_coin));
                        this.GetButton("btn_yellow").interactable = ChickData_1.default.user.coin >= this.cost_coin;
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopItem.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        _super.prototype.onBtnClicked.call(this, event, customEventData);
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_free":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        if (HallScene_1.default.Instance.tryBuyPlant(_this.gun[0], 2)) {
                            MsgToast_1.default.show("购买成功");
                            _this.dispatch(GameConst_1.default.BUY_CHICK, _this.gun, _this.node.getComponent(ListItem_1.default).listId);
                        }
                    }
                });
                break;
            case "btn_yellow":
                if (ChickData_1.default.user.coin < this.cost_coin) {
                    MsgToast_1.default.show("金币不足");
                    return;
                }
                if (HallScene_1.default.Instance.tryBuyPlant(this.gun[0], 0)) {
                    MsgToast_1.default.show("购买成功");
                    this.dispatch(GameConst_1.default.BUY_CHICK, this.gun, this.node.getComponent(ListItem_1.default).listId);
                }
                break;
        }
    };
    ShopItem = __decorate([
        ccclass
    ], ShopItem);
    return ShopItem;
}(BaseUI_1.default));
exports.default = ShopItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0Msb0RBQStDO0FBQy9DLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QywwQ0FBcUM7QUFDckMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCx1REFBYSxDQUFBO0lBQ2IsdURBQWEsQ0FBQTtJQUNiLGdCQUFnQjtJQUNoQixrREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQU5JLFVBQVUsS0FBVixVQUFVLFFBTWQ7QUFJRDtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQStLQztRQTNIVyxlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQzdCLFNBQUcsR0FBTyxJQUFJLENBQUM7O0lBMEhuQixDQUFDO0lBN0tHLGVBQWU7SUFDUCw2QkFBVSxHQUFsQixVQUFtQixFQUFTO1FBRXhCLElBQUksS0FBSyxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLElBQUcsS0FBSyxHQUFHLENBQUM7WUFBQyxPQUFPLEtBQUssQ0FBQztRQUMxQixPQUFPLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO0lBQ1AsNEJBQVMsR0FBakIsVUFBa0IsRUFBUztRQUV2QixJQUFJLEtBQUssR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxJQUFHLEtBQUssR0FB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O29CQUNyQixPQUFPO2lCQUNWO2dCQUNELElBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQ2hEO29CQUNJLGtCQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN2RjtnQkFDRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBOUtnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK0s1QjtJQUFELGVBQUM7Q0EvS0QsQUErS0MsQ0EvS3FDLGdCQUFNLEdBK0szQztrQkEvS29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi8uLi9mcmFtd29yay9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XHJcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xyXG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vR2FtZUNvbnN0XCI7XHJcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4uL0hhbGxTY2VuZVwiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBHdW5CdXlUeXBlIHtcclxuICAgIENBTl9CVVkgPSAxLFxyXG4gICAgQ0FOX0FEX0JVWT0gMixcclxuICAgIE9OTFlfQ0hFQ0s9IDQsXHJcbiAgICAvLyBDTk5PVF9TRUU9IDgsXHJcbiAgICBHRU1fQlVZPSAxNixcclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BJdGVtIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICAvL+ingueci+inhumikeWFjei0ueiOt+W+l+eahOaequaisOetiee6p1xyXG4gICAgcHJpdmF0ZSBXYXRjaEFkQnV5KGlkOm51bWJlcik6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHZhciBndW5sdiA9IENoaWNrRGF0YS51c2VyLkdldE1heEx2KCk7XHJcbiAgICAgICAgaWYoZ3VubHYgPCA4KXJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZ3VubHYgLSA0ID09IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LiN5Y+v5oyH5a6a6LSt5Lmw5Y+q5Y+v5p+l55yL55qE5Yy66Ze0XHJcbiAgICBwcml2YXRlIE9ubHlDaGVjayhpZDpudW1iZXIpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB2YXIgZ3VubHYgPSBDaGlja0RhdGEudXNlci5HZXRNYXhMdigpO1xyXG4gICAgICAgIGlmKGd1bmx2IC0gMiA8PSBpZCAmJiBpZCA8PSBndW5sdiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQnV5R2VtKGlkOm51bWJlcik6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHZhciBndW5sdiA9IENoaWNrRGF0YS51c2VyLkdldE1heEx2KCk7XHJcbiAgICAgICAgcmV0dXJuIGd1bmx2IC0gMSA9PSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEJ1eVR5cGUoZ3VuKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBndW5sdiA9IENoaWNrRGF0YS51c2VyLkdldE1heEx2KClcclxuICAgICAgICB2YXIgdHlwZTpudW1iZXIgPSAwO1xyXG4gICAgICAgIGlmKGd1blswXSA8PSBndW5sdiAtIDIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuQ0FOX0JVWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5XYXRjaEFkQnV5KGd1blswXSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuQ0FOX0FEX0JVWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5CdXlHZW0oZ3VuWzBdKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5HRU1fQlVZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLk9ubHlDaGVjayhndW5bMF0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSB8PSBHdW5CdXlUeXBlLk9OTFlfQ0hFQ0s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb3N0X2NvaW46bnVtYmVyID0gMDtcclxuICAgIGd1bjphbnkgPSBudWxsO1xyXG4gICAgYXN5bmMgc2V0SXRlbURhdGEoZ3VuOmFueSlcclxuICAgIHsgICBcclxuICAgICAgICAvLyBbXCJsZXZlbFwiLCBcImNkXCIsIFwicG93ZXJcIiwgXCJza2lsbFwiLCBcIm9mZmxpbmVcIiwgXCJwcmljZVwiLCBcImdlbVwiLCBcInByZWZhYlwiLCBcInNob290UG9zXCIsIFwic3RlYWtDb2xvclwiLCBcImhlYWRcIl1cclxuICAgICAgICBsZXQgbm9kZSA9IG51bGw7XHJcbiAgICAgICAgbGV0IGJoaWRlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJ1eXR5cGUgPSB0aGlzLmdldEJ1eVR5cGUoZ3VuKTtcclxuICAgICAgICB0aGlzLmd1biA9IGd1bjtcclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJoaWRlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5feWVsbG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9mcmVlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9ncmF5XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5HRU1fQlVZKSAhPSAwICYmIGd1bls2XT4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZigoYnV5dHlwZSAmIEd1bkJ1eVR5cGUuQ0FOX0FEX0JVWSkgIT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2ZyZWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLkNBTl9CVVkpICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl95ZWxsb3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5PTkxZX0NIRUNLKSAhPSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZ3JheVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJoaWRlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIGJoaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9sdlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIrZ3VuWzBdO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuWIsFwiKyhndW5bMF0rMikrJ+e6p+ino+mUgSc7XHJcblxyXG4gICAgICAgIGxldCBza2lsbCA9IGd1blszXS5zcGxpdChcInxcIik7XHJcbiAgICAgICAgbGV0IHNraWxsdHlwZSA9IHNraWxsWzBdO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHNraWxsWzFdO1xyXG5cclxuICAgICAgICBsZXQgc3RyID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYoYmhpZGUpIHZhbHVlID0gXCI/XCJcclxuICAgICAgICBpZihza2lsbHR5cGUgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0ciA9XCLmioDog706XCIgKyB2YWx1ZStcIiXnmoTlh6Dnjofop6blj5Hlh4/pgJ/nm67moIcx56eSXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDIpe1xyXG4gICAgICAgICAgICBzdHIgPVwi5oqA6IO9OlwiICsgdmFsdWUrXCIl5Yeg546H5a+555uu5qCH6YCg5oiQ5Y+M5YCN5Lyk5a6zXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDMpe1xyXG4gICAgICAgICAgICBzdHIgPVwi5oqA6IO9OlwiICsgdmFsdWUrXCIl5Yeg546H5Yaw5Ya755uu5qCHMeenklwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9uYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYmhpZGU/J+acquefpeiQjOm4oSc6Z3VuWzddO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfZGVzY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJoaWRlPyfmioDog7065pyq55+lJzpzdHI7XHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9jZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9YmhpZGU/XCI/XCI6IGd1blsxXStcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfcG93ZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBiaGlkZT9cIj9cIjpVdGlscy5mb3JtYXROdW1iZXIoZ3VuWzJdKStcIlwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFiaGlkZSl7XHJcbiAgICAgICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtndW5bMF19X3NrZWA7XHJcbiAgICAgICAgICAgIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtndW5bMF19X3RleGA7XHJcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnc2hvcENoaWNrJyk7XHJcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcclxuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xyXG4gICAgICAgICAgICBjaGljay5hcm1hdHVyZU5hbWUgPSAnQXJtYXR1cmUnO1xyXG4gICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29zdF9jb2luID0gQ2hpY2tEYXRhLnVzZXIuQnV5UHJpY2UoZ3VuWzBdKVxyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9idXlfY29pblwiLFV0aWxzLmZvcm1hdE51bWJlciggdGhpcy5jb3N0X2NvaW4pKTtcclxuICAgICAgICB0aGlzLkdldEJ1dHRvbihcImJ0bl95ZWxsb3dcIikuaW50ZXJhY3RhYmxlID0gQ2hpY2tEYXRhLnVzZXIuY29pbiA+PSB0aGlzLmNvc3RfY29pbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBzdXBlci5vbkJ0bkNsaWNrZWQoZXZlbnQsY3VzdG9tRXZlbnREYXRhKTtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2ZyZWVcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLnRyeUJ1eVBsYW50KHRoaXMuZ3VuWzBdLDIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLotK3kubDmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2goR2FtZUNvbnN0LkJVWV9DSElDSyx0aGlzLmd1bix0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KExpc3RJdGVtKS5saXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5feWVsbG93XCI6XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5jb2luIDwgdGhpcy5jb3N0X2NvaW4gKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLph5HluIHkuI3otrNcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihIYWxsU2NlbmUuSW5zdGFuY2UudHJ5QnV5UGxhbnQodGhpcy5ndW5bMF0sMCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIui0reS5sOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEdhbWVDb25zdC5CVVlfQ0hJQ0ssdGhpcy5ndW4sdGhpcy5ub2RlLmdldENvbXBvbmVudChMaXN0SXRlbSkubGlzdElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=