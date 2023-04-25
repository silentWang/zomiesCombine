
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
    ShopItem.prototype.start = function () {
        this.addFreeAdEvent();
    };
    //观看视频免费获得的枪械等级
    ShopItem.prototype.ShowBuyAd = function (id) {
        var gunlv = ChickData_1.default.user.getLvlMax();
        if (gunlv < 8)
            return false;
        return gunlv - 4 == id;
    };
    //不可指定购买只可查看的区间
    ShopItem.prototype.OnlyForCheck = function (id) {
        var gunlv = ChickData_1.default.user.getLvlMax();
        if (gunlv - 2 <= id && id <= gunlv) {
            return true;
        }
        return false;
    };
    ShopItem.prototype.BuyDiamond = function (id) {
        var gunlv = ChickData_1.default.user.getLvlMax();
        return gunlv - 1 == id;
    };
    ShopItem.prototype.getBuyCoinType = function (gun) {
        var gunlv = ChickData_1.default.user.getLvlMax();
        var type = 0;
        if (gun[0] <= gunlv - 2) {
            type |= GunBuyType.CAN_BUY;
        }
        if (this.ShowBuyAd(gun[0])) {
            type |= GunBuyType.CAN_AD_BUY;
        }
        if (this.BuyDiamond(gun[0])) {
            type |= GunBuyType.GEM_BUY;
        }
        if (this.OnlyForCheck(gun[0])) {
            type |= GunBuyType.ONLY_CHECK;
        }
        return type;
    };
    ShopItem.prototype.setShopItemData = function (gun) {
        return __awaiter(this, void 0, void 0, function () {
            var node, bhide, buytype, skill, skilltype, value, str, skpath, atlaspath, chick, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        node = null;
                        bhide = false;
                        buytype = this.getBuyCoinType(gun);
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
                        this._findInChildren(node, "New Label").getComponent(cc.Label).string = "到" + (gun[0] + 2) + '級解鎖';
                        skill = gun[3].split("|");
                        skilltype = skill[0];
                        value = skill[1];
                        str = "";
                        if (bhide)
                            value = "?";
                        if (skilltype == 1) {
                            str = "技能:" + value + "%幾率觸發減速目標1秒";
                        }
                        else if (skilltype == 2) {
                            str = "技能:" + value + "%幾率對目標造成雙倍傷害";
                        }
                        else if (skilltype == 3) {
                            str = "技能:" + value + "%幾率冰凍目標1秒";
                        }
                        this._findInChildren(node, "lbl_name").getComponent(cc.Label).string = bhide ? '未知萌鷄' : gun[7];
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
                        this.cost_coin = ChickData_1.default.user.buyChickPrice(gun[0]);
                        this.SetText("lbl_buy_coin", Utils_1.default.formatNumber(this.cost_coin));
                        this.GetButton("btn_yellow").interactable = ChickData_1.default.user.coin >= this.cost_coin;
                        this.handleFreeAd();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopItem.prototype.handleFreeAd = function () {
        var isfree = ChickData_1.default.isFreeAd;
        this.GetGameObject('icon_video').active = !isfree;
        if (isfree) {
            var pos = this.GetGameObject('ad_label').getPosition();
            this.GetGameObject('ad_label').setPosition(new cc.Vec2(0, pos.y));
        }
    };
    ShopItem.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        _super.prototype.onUIClicked.call(this, event, customEventData);
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_free":
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        if (HallScene_1.default.Instance.buyChick(_this.gun[0], 2)) {
                            MsgToast_1.default.show("購買成功");
                            _this.dispatch(GameConst_1.default.BUY_CHICK, _this.gun, _this.node.getComponent(ListItem_1.default).listId);
                        }
                    }
                });
                break;
            case "btn_yellow":
                if (ChickData_1.default.user.coin < this.cost_coin) {
                    MsgToast_1.default.show("金幣不足");
                    return;
                }
                if (HallScene_1.default.Instance.buyChick(this.gun[0], 0)) {
                    MsgToast_1.default.show("購買成功");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0Msb0RBQStDO0FBQy9DLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QywwQ0FBcUM7QUFDckMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCx1REFBYSxDQUFBO0lBQ2IsdURBQWEsQ0FBQTtJQUNiLGdCQUFnQjtJQUNoQixrREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQU5JLFVBQVUsS0FBVixVQUFVLFFBTWQ7QUFJRDtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQTRMQztRQXRJVyxlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQzdCLFNBQUcsR0FBTyxJQUFJLENBQUM7O0lBcUluQixDQUFDO0lBMUxhLHdCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUNELGVBQWU7SUFDUCw0QkFBUyxHQUFqQixVQUFrQixFQUFTO1FBRXZCLElBQUksS0FBSyxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLElBQUcsS0FBSyxHQUFHLENBQUM7WUFBQyxPQUFPLEtBQUssQ0FBQztRQUMxQixPQUFPLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO0lBQ1AsK0JBQVksR0FBcEIsVUFBcUIsRUFBUztRQUUxQixJQUFJLEtBQUssR0FB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cnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi8uLi9mcmFtd29yay9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XHJcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xyXG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vR2FtZUNvbnN0XCI7XHJcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4uL0hhbGxTY2VuZVwiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBHdW5CdXlUeXBlIHtcclxuICAgIENBTl9CVVkgPSAxLFxyXG4gICAgQ0FOX0FEX0JVWT0gMixcclxuICAgIE9OTFlfQ0hFQ0s9IDQsXHJcbiAgICAvLyBDTk5PVF9TRUU9IDgsXHJcbiAgICBHRU1fQlVZPSAxNixcclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BJdGVtIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZGRGcmVlQWRFdmVudCgpXHJcbiAgICB9XHJcbiAgICAvL+ingueci+inhumikeWFjei0ueiOt+W+l+eahOaequaisOetiee6p1xyXG4gICAgcHJpdmF0ZSBTaG93QnV5QWQoaWQ6bnVtYmVyKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGd1bmx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCk7XHJcbiAgICAgICAgaWYoZ3VubHYgPCA4KXJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZ3VubHYgLSA0ID09IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LiN5Y+v5oyH5a6a6LSt5Lmw5Y+q5Y+v5p+l55yL55qE5Yy66Ze0XHJcbiAgICBwcml2YXRlIE9ubHlGb3JDaGVjayhpZDpudW1iZXIpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB2YXIgZ3VubHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKTtcclxuICAgICAgICBpZihndW5sdiAtIDIgPD0gaWQgJiYgaWQgPD0gZ3VubHYgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEJ1eURpYW1vbmQoaWQ6bnVtYmVyKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGd1bmx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCk7XHJcbiAgICAgICAgcmV0dXJuIGd1bmx2IC0gMSA9PSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEJ1eUNvaW5UeXBlKGd1bilcclxuICAgIHtcclxuICAgICAgICB2YXIgZ3VubHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKVxyXG4gICAgICAgIHZhciB0eXBlOm51bWJlciA9IDA7XHJcbiAgICAgICAgaWYoZ3VuWzBdIDw9IGd1bmx2IC0gMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5DQU5fQlVZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLlNob3dCdXlBZChndW5bMF0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSB8PSBHdW5CdXlUeXBlLkNBTl9BRF9CVVk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuQnV5RGlhbW9uZChndW5bMF0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSB8PSBHdW5CdXlUeXBlLkdFTV9CVVk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuT25seUZvckNoZWNrKGd1blswXSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuT05MWV9DSEVDSztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29zdF9jb2luOm51bWJlciA9IDA7XHJcbiAgICBndW46YW55ID0gbnVsbDtcclxuICAgIGFzeW5jIHNldFNob3BJdGVtRGF0YShndW46YW55KVxyXG4gICAgeyAgIFxyXG4gICAgICAgIC8vIFtcImxldmVsXCIsIFwiY2RcIiwgXCJwb3dlclwiLCBcInNraWxsXCIsIFwib2ZmbGluZVwiLCBcInByaWNlXCIsIFwiZ2VtXCIsIFwicHJlZmFiXCIsIFwic2hvb3RQb3NcIiwgXCJzdGVha0NvbG9yXCIsIFwiaGVhZFwiXVxyXG4gICAgICAgIGxldCBub2RlID0gbnVsbDtcclxuICAgICAgICBsZXQgYmhpZGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYnV5dHlwZSA9IHRoaXMuZ2V0QnV5Q29pblR5cGUoZ3VuKTtcclxuICAgICAgICB0aGlzLmd1biA9IGd1bjtcclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJoaWRlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5feWVsbG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9mcmVlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9ncmF5XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5HRU1fQlVZKSAhPSAwICYmIGd1bls2XT4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZigoYnV5dHlwZSAmIEd1bkJ1eVR5cGUuQ0FOX0FEX0JVWSkgIT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2ZyZWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLkNBTl9CVVkpICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl95ZWxsb3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5PTkxZX0NIRUNLKSAhPSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZ3JheVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJoaWRlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIGJoaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9sdlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIrZ3VuWzBdO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuWIsFwiKyhndW5bMF0rMikrJ+e0muino+mOlic7XHJcblxyXG4gICAgICAgIGxldCBza2lsbCA9IGd1blszXS5zcGxpdChcInxcIik7XHJcbiAgICAgICAgbGV0IHNraWxsdHlwZSA9IHNraWxsWzBdO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHNraWxsWzFdO1xyXG5cclxuICAgICAgICBsZXQgc3RyID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYoYmhpZGUpIHZhbHVlID0gXCI/XCJcclxuICAgICAgICBpZihza2lsbHR5cGUgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0ciA9XCLmioDog706XCIgKyB2YWx1ZStcIiXlub7njofop7jnmbzmuJvpgJ/nm67mqJkx56eSXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDIpe1xyXG4gICAgICAgICAgICBzdHIgPVwi5oqA6IO9OlwiICsgdmFsdWUrXCIl5bm+546H5bCN55uu5qiZ6YCg5oiQ6ZuZ5YCN5YK35a6zXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDMpe1xyXG4gICAgICAgICAgICBzdHIgPVwi5oqA6IO9OlwiICsgdmFsdWUrXCIl5bm+546H5Yaw5YeN55uu5qiZMeenklwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9uYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYmhpZGU/J+acquefpeiQjOm3hCc6Z3VuWzddO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfZGVzY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJoaWRlPyfmioDog7065pyq55+lJzpzdHI7XHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9jZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9YmhpZGU/XCI/XCI6IGd1blsxXStcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfcG93ZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBiaGlkZT9cIj9cIjpVdGlscy5mb3JtYXROdW1iZXIoZ3VuWzJdKStcIlwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFiaGlkZSl7XHJcbiAgICAgICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtndW5bMF19X3NrZWA7XHJcbiAgICAgICAgICAgIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtndW5bMF19X3RleGA7XHJcbiAgICAgICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnc2hvcENoaWNrJyk7XHJcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcclxuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xyXG4gICAgICAgICAgICBjaGljay5hcm1hdHVyZU5hbWUgPSAnQXJtYXR1cmUnO1xyXG4gICAgICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29zdF9jb2luID0gQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShndW5bMF0pXHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2J1eV9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKCB0aGlzLmNvc3RfY29pbikpO1xyXG4gICAgICAgIHRoaXMuR2V0QnV0dG9uKFwiYnRuX3llbGxvd1wiKS5pbnRlcmFjdGFibGUgPSBDaGlja0RhdGEudXNlci5jb2luID49IHRoaXMuY29zdF9jb2luO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUZyZWVBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBoYW5kbGVGcmVlQWQoKXtcclxuICAgICAgICBsZXQgaXNmcmVlID0gQ2hpY2tEYXRhLmlzRnJlZUFkO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdCgnaWNvbl92aWRlbycpLmFjdGl2ZSA9ICFpc2ZyZWVcclxuICAgICAgICBpZihpc2ZyZWUpe1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KCdhZF9sYWJlbCcpLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdhZF9sYWJlbCcpLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKDAscG9zLnkpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHN1cGVyLm9uVUlDbGlja2VkKGV2ZW50LGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2ZyZWVcIjpcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLmJ1eUNoaWNrKHRoaXMuZ3VuWzBdLDIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLos7zosrfmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2goR2FtZUNvbnN0LkJVWV9DSElDSyx0aGlzLmd1bix0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KExpc3RJdGVtKS5saXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5feWVsbG93XCI6XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5jb2luIDwgdGhpcy5jb3N0X2NvaW4gKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLph5HluaPkuI3otrNcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihIYWxsU2NlbmUuSW5zdGFuY2UuYnV5Q2hpY2sodGhpcy5ndW5bMF0sMCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIuizvOiyt+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEdhbWVDb25zdC5CVVlfQ0hJQ0ssdGhpcy5ndW4sdGhpcy5ub2RlLmdldENvbXBvbmVudChMaXN0SXRlbSkubGlzdElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=