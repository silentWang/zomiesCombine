
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
var MsgHints_1 = require("../../framwork/MsgHints");
var AdCenter_1 = require("../../manager/AdCenter");
var Data_1 = require("../../manager/Data");
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
        _this.cost_gem = 0;
        _this.gun = null;
        return _this;
    }
    //观看视频免费获得的枪械等级
    ShopItem.prototype.WatchAdBuy = function (id) {
        var gunlv = Data_1.default.user.GetMaxLv();
        if (gunlv < 8)
            return false;
        return gunlv - 4 == id;
    };
    //不可指定购买只可查看的区间
    ShopItem.prototype.OnlyCheck = function (id) {
        var gunlv = Data_1.default.user.GetMaxLv();
        if (gunlv - 2 <= id && id <= gunlv) {
            return true;
        }
        return false;
    };
    ShopItem.prototype.BuyGem = function (id) {
        var gunlv = Data_1.default.user.GetMaxLv();
        return gunlv - 1 == id;
    };
    ShopItem.prototype.getBuyType = function (gun) {
        var gunlv = Data_1.default.user.GetMaxLv();
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
            var node, bhide, buytype, skill, skilltype, value, str, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        node = null;
                        bhide = false;
                        buytype = this.getBuyType(gun);
                        this.gun = gun;
                        this.GetGameObject("show").active = false;
                        this.GetGameObject("hide").active = false;
                        this.GetGameObject("btn_gem").active = false;
                        this.GetGameObject("btn_yellow").active = false;
                        this.GetGameObject("btn_free").active = false;
                        this.GetGameObject("btn_gray").active = false;
                        this.cost_gem = Math.min(gun[6], 5);
                        if ((buytype & GunBuyType.GEM_BUY) != 0 && gun[6] > 0) {
                            this.GetGameObject("show").active = true;
                            this.GetGameObject("btn_gem").active = true;
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
                        _a = this._findInChildren(node, "gun").getComponent(cc.Sprite);
                        return [4 /*yield*/, Utils_1.default.loadRes("texture/plants/" + (gun[0] - 1), cc.SpriteFrame)];
                    case 1:
                        _a.spriteFrame = (_b.sent());
                        // this._findInChildren(node,"gun").getComponent(cc.Sprite).spriteFrame = await Utils.loadRes("texture/plants/"+(gun[0]-1),cc.SpriteFrame) as cc.SpriteFrame;
                        // let cs = this._findInChildren(node,"0");
                        // if(gun[0]+1<60)
                        // {
                        //     if(cs){
                        //         cs.getComponent(cc.Sprite).spriteFrame = await Utils.loadRes("texture/plants/"+(gun[0]+1),cc.SpriteFrame) as cc.SpriteFrame;
                        //     }
                        // }
                        // else
                        // {
                        //     if(cs){
                        //          cs.getComponent(cc.Sprite).spriteFrame = await Utils.loadRes("texture/plants/59",cc.SpriteFrame) as cc.SpriteFrame;
                        //     }
                        // }
                        this.cost_coin = Data_1.default.user.BuyPrice(gun[0]);
                        this.SetText("lbl_buy_coin", Utils_1.default.formatNumber(this.cost_coin));
                        this.GetButton("btn_yellow").interactable = Data_1.default.user.coin >= this.cost_coin;
                        this.SetText("lbl_buy_gem", Utils_1.default.formatNumber(this.cost_gem)); //钻石产出少，最多就5个钻石吧
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
                            MsgHints_1.default.show("购买成功");
                            _this.dispatch(GameConst_1.default.BUY_PLANT, _this.gun, _this.node.getComponent(ListItem_1.default).listId);
                        }
                    }
                });
                break;
            case "btn_yellow":
                if (Data_1.default.user.coin < this.cost_coin) {
                    MsgHints_1.default.show("金币不足");
                    return;
                }
                if (HallScene_1.default.Instance.tryBuyPlant(this.gun[0], 0)) {
                    MsgHints_1.default.show("购买成功");
                    this.dispatch(GameConst_1.default.BUY_PLANT, this.gun, this.node.getComponent(ListItem_1.default).listId);
                }
                break;
            case "btn_gem":
                if (Data_1.default.user.gem < this.cost_gem) {
                    MsgHints_1.default.show("钻石不足");
                    return;
                }
                if (HallScene_1.default.Instance.tryBuyPlant(this.gun[0], 1)) {
                    MsgHints_1.default.show("购买成功");
                    this.dispatch(GameConst_1.default.BUY_PLANT, this.gun, this.node.getComponent(ListItem_1.default).listId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0Msb0RBQStDO0FBQy9DLG1EQUE4QztBQUM5QywyQ0FBc0M7QUFDdEMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QywwQ0FBcUM7QUFDckMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCx1REFBYSxDQUFBO0lBQ2IsdURBQWEsQ0FBQTtJQUNiLGdCQUFnQjtJQUNoQixrREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQU5JLFVBQVUsS0FBVixVQUFVLFFBTWQ7QUFJRDtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQTZNQztRQXpKVyxlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDNUIsU0FBRyxHQUFPLElBQUksQ0FBQzs7SUF1Sm5CLENBQUM7SUEzTUcsZUFBZTtJQUNQLDZCQUFVLEdBQWxCLFVBQW1CLEVBQVM7UUFFeEIsSUFBSSxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFHLEtBQUssR0FBRyxDQUFDO1lBQUMsT0FBTyxLQUFLLENBQUM7UUFDMUIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtJQUNQLDRCQUFTLEdBQWpCLFVBQWtCLEVBQVM7UUFFdkIsSUFBSSxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUs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Q0FBQztpQkFDdkY7Z0JBQ0QsTUFBSztTQUNaO0lBQ0wsQ0FBQztJQTVNZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZNNUI7SUFBRCxlQUFDO0NBN01ELEFBNk1DLENBN01xQyxnQkFBTSxHQTZNM0M7a0JBN01vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IE1zZ0hpbnRzIGZyb20gXCIuLi8uLi9mcmFtd29yay9Nc2dIaW50c1wiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvRGF0YVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vR2FtZUNvbnN0XCI7XHJcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4uL0hhbGxTY2VuZVwiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBHdW5CdXlUeXBlIHtcclxuICAgIENBTl9CVVkgPSAxLFxyXG4gICAgQ0FOX0FEX0JVWT0gMixcclxuICAgIE9OTFlfQ0hFQ0s9IDQsXHJcbiAgICAvLyBDTk5PVF9TRUU9IDgsXHJcbiAgICBHRU1fQlVZPSAxNixcclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BJdGVtIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICAvL+ingueci+inhumikeWFjei0ueiOt+W+l+eahOaequaisOetiee6p1xyXG4gICAgcHJpdmF0ZSBXYXRjaEFkQnV5KGlkOm51bWJlcik6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHZhciBndW5sdiA9IERhdGEudXNlci5HZXRNYXhMdigpO1xyXG4gICAgICAgIGlmKGd1bmx2IDwgOClyZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGd1bmx2IC0gNCA9PSBpZDtcclxuICAgIH1cclxuXHJcbiAgICAvL+S4jeWPr+aMh+Wumui0reS5sOWPquWPr+afpeeci+eahOWMuumXtFxyXG4gICAgcHJpdmF0ZSBPbmx5Q2hlY2soaWQ6bnVtYmVyKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGd1bmx2ID0gRGF0YS51c2VyLkdldE1heEx2KCk7XHJcbiAgICAgICAgaWYoZ3VubHYgLSAyIDw9IGlkICYmIGlkIDw9IGd1bmx2IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBCdXlHZW0oaWQ6bnVtYmVyKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGd1bmx2ID0gRGF0YS51c2VyLkdldE1heEx2KCk7XHJcbiAgICAgICAgcmV0dXJuIGd1bmx2IC0gMSA9PSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEJ1eVR5cGUoZ3VuKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBndW5sdiA9IERhdGEudXNlci5HZXRNYXhMdigpXHJcbiAgICAgICAgdmFyIHR5cGU6bnVtYmVyID0gMDtcclxuICAgICAgICBpZihndW5bMF0gPD0gZ3VubHYgLSAyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSB8PSBHdW5CdXlUeXBlLkNBTl9CVVk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuV2F0Y2hBZEJ1eShndW5bMF0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSB8PSBHdW5CdXlUeXBlLkNBTl9BRF9CVVk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuQnV5R2VtKGd1blswXSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuR0VNX0JVWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5Pbmx5Q2hlY2soZ3VuWzBdKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5PTkxZX0NIRUNLO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29zdF9jb2luOm51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvc3RfZ2VtOm51bWJlciA9IDA7XHJcbiAgICBndW46YW55ID0gbnVsbDtcclxuICAgIGFzeW5jIHNldEl0ZW1EYXRhKGd1bjphbnkpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgLy8gW1wibGV2ZWxcIiwgXCJjZFwiLCBcInBvd2VyXCIsIFwic2tpbGxcIiwgXCJvZmZsaW5lXCIsIFwicHJpY2VcIiwgXCJnZW1cIiwgXCJwcmVmYWJcIiwgXCJzaG9vdFBvc1wiLCBcInN0ZWFrQ29sb3JcIiwgXCJoZWFkXCJdXHJcbiAgICAgICAgbGV0IG5vZGUgPSBudWxsO1xyXG4gICAgICAgIGxldCBiaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBidXl0eXBlID0gdGhpcy5nZXRCdXlUeXBlKGd1bik7XHJcbiAgICAgICAgdGhpcy5ndW4gPSBndW47XHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGlkZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2dlbVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5feWVsbG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9mcmVlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9ncmF5XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNvc3RfZ2VtID0gTWF0aC5taW4oZ3VuWzZdLDUpO1xyXG4gICAgICAgIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5HRU1fQlVZKSAhPSAwICYmIGd1bls2XT4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2dlbVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZigoYnV5dHlwZSAmIEd1bkJ1eVR5cGUuQ0FOX0FEX0JVWSkgIT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2ZyZWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLkNBTl9CVVkpICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl95ZWxsb3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZigoYnV5dHlwZSAmIEd1bkJ1eVR5cGUuT05MWV9DSEVDSykgIT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2dyYXlcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGlkZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICBiaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfbHZcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiK2d1blswXTtcclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwiTmV3IExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLliLBcIisoZ3VuWzBdKzIpKyfnuqfop6PplIEnO1xyXG5cclxuICAgICAgICBsZXQgc2tpbGwgPSBndW5bM10uc3BsaXQoXCJ8XCIpO1xyXG4gICAgICAgIGxldCBza2lsbHR5cGUgPSBza2lsbFswXTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBza2lsbFsxXTtcclxuXHJcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmKGJoaWRlKXZhbHVlID0gXCI/XCJcclxuICAgICAgICBpZihza2lsbHR5cGUgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0ciA9XCLmioDog706XCIgKyB2YWx1ZStcIiXnmoTlh6Dnjofop6blj5Hlh4/pgJ/nm67moIcx56eSXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDIpe1xyXG4gICAgICAgICAgICBzdHIgPVwi5oqA6IO9OlwiICsgdmFsdWUrXCIl5Yeg546H5a+555uu5qCH6YCg5oiQ5Y+M5YCN5Lyk5a6zXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDMpe1xyXG4gICAgICAgICAgICBzdHIgPVwi5oqA6IO9OlwiICsgdmFsdWUrXCIl5Yeg546H5Yaw5Ya755uu5qCHMeenklwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9uYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYmhpZGU/J+acquefpeiQjOm4oSc6Z3VuWzddO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfZGVzY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJoaWRlPyfmioDog7065pyq55+lJzpzdHI7XHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9jZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9YmhpZGU/XCI/XCI6IGd1blsxXStcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfcG93ZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBiaGlkZT9cIj9cIjpVdGlscy5mb3JtYXROdW1iZXIoZ3VuWzJdKStcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJndW5cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwidGV4dHVyZS9wbGFudHMvXCIrKGd1blswXS0xKSxjYy5TcHJpdGVGcmFtZSkgYXMgY2MuU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgLy8gdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImd1blwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoXCJ0ZXh0dXJlL3BsYW50cy9cIisoZ3VuWzBdLTEpLGNjLlNwcml0ZUZyYW1lKSBhcyBjYy5TcHJpdGVGcmFtZTtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGxldCBjcyA9IHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCIwXCIpO1xyXG4gICAgICAgIC8vIGlmKGd1blswXSsxPDYwKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgaWYoY3Mpe1xyXG4gICAgICAgIC8vICAgICAgICAgY3MuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwidGV4dHVyZS9wbGFudHMvXCIrKGd1blswXSsxKSxjYy5TcHJpdGVGcmFtZSkgYXMgY2MuU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgaWYoY3Mpe1xyXG4gICAgICAgIC8vICAgICAgICAgIGNzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gYXdhaXQgVXRpbHMubG9hZFJlcyhcInRleHR1cmUvcGxhbnRzLzU5XCIsY2MuU3ByaXRlRnJhbWUpIGFzIGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29zdF9jb2luID0gRGF0YS51c2VyLkJ1eVByaWNlKGd1blswXSlcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfYnV5X2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoIHRoaXMuY29zdF9jb2luKSk7XHJcbiAgICAgICAgdGhpcy5HZXRCdXR0b24oXCJidG5feWVsbG93XCIpLmludGVyYWN0YWJsZSA9IERhdGEudXNlci5jb2luID49IHRoaXMuY29zdF9jb2luO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9idXlfZ2VtXCIsVXRpbHMuZm9ybWF0TnVtYmVyKCB0aGlzLmNvc3RfZ2VtKSk7ICAgIC8v6ZK755+z5Lqn5Ye65bCR77yM5pyA5aSa5bCxNeS4qumSu+efs+WQp1xyXG4gICAgICAgIC8vIGlmKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIERhdGFNYW5hZ2VyLkluc3RhbmNlKCkubGFzdFNoYXJlR2V0R3VuVGltZSA8IEdBTUVfQ09ORklHLlNIQVJFX0dFVF9HVU5fVElNRSlcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9mcmVlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBzdXBlci5vbkJ0bkNsaWNrZWQoZXZlbnQsY3VzdG9tRXZlbnREYXRhKTtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2ZyZWVcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLnRyeUJ1eVBsYW50KHRoaXMuZ3VuWzBdLDIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLotK3kubDmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2goR2FtZUNvbnN0LkJVWV9QTEFOVCx0aGlzLmd1bix0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KExpc3RJdGVtKS5saXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5feWVsbG93XCI6XHJcbiAgICAgICAgICAgICAgICBpZihEYXRhLnVzZXIuY29pbiA8IHRoaXMuY29zdF9jb2luIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi6YeR5biB5LiN6LazXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLnRyeUJ1eVBsYW50KHRoaXMuZ3VuWzBdLDApKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLotK3kubDmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChHYW1lQ29uc3QuQlVZX1BMQU5ULHRoaXMuZ3VuLHRoaXMubm9kZS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pLmxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9nZW1cIjpcclxuICAgICAgICAgICAgICAgIGlmKERhdGEudXNlci5nZW0gPCB0aGlzLmNvc3RfZ2VtIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi6ZK755+z5LiN6LazXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLnRyeUJ1eVBsYW50KHRoaXMuZ3VuWzBdLDEpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLotK3kubDmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChHYW1lQ29uc3QuQlVZX1BMQU5ULHRoaXMuZ3VuLHRoaXMubm9kZS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pLmxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=