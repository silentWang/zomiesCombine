
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
                        this.cost_coin = ChickData_1.default.user.buyChickPrice(gun[0]);
                        this.SetText("lbl_buy_coin", Utils_1.default.formatNumber(this.cost_coin));
                        this.GetButton("btn_yellow").interactable = ChickData_1.default.user.coin >= this.cost_coin;
                        return [2 /*return*/];
                }
            });
        });
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
                if (HallScene_1.default.Instance.buyChick(this.gun[0], 0)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvU2hvcEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG9EQUErQztBQUMvQyxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLDBDQUFxQztBQUNyQywwQ0FBcUM7QUFHL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBSyxVQU1KO0FBTkQsV0FBSyxVQUFVO0lBQ1gsaURBQVcsQ0FBQTtJQUNYLHVEQUFhLENBQUE7SUFDYix1REFBYSxDQUFBO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtEQUFXLENBQUE7QUFDZixDQUFDLEVBTkksVUFBVSxLQUFWLFVBQVUsUUFNZDtBQUlEO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBOEtDO1FBM0hXLGVBQVMsR0FBVSxDQUFDLENBQUM7UUFDN0IsU0FBRyxHQUFPLElBQUksQ0FBQzs7SUEwSG5CLENBQUM7SUE1S0csZUFBZTtJQUNQLDRCQUFTLEdBQWpCLFVBQWtCLEVBQVM7UUFFdkIsSUFBSSxLQUFLLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkMsSUFBRyxLQUFLLEdBQUcsQ0FBQztZQUFDLE9BQU8sS0FBSyxDQUFDO1FBQzFCLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7SUFDUCwrQkFBWSxHQUFwQixVQUFxQixFQUFTO1FBRTFCLElBQUksS0FBSyxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLElBQUcsS0FBSyxHQUFHLENB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QkFDckIsT0FBTztpQkFDVjtnQkFDRCxJQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUM3QztvQkFDSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkY7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQTdLZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThLNUI7SUFBRCxlQUFDO0NBOUtELEFBOEtDLENBOUtxQyxnQkFBTSxHQThLM0M7a0JBOUtvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0xpc3RJdGVtXCI7XG5pbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9HYW1lQ29uc3RcIjtcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSBcIi4uL0hhbGxTY2VuZVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIEd1bkJ1eVR5cGUge1xuICAgIENBTl9CVVkgPSAxLFxuICAgIENBTl9BRF9CVVk9IDIsXG4gICAgT05MWV9DSEVDSz0gNCxcbiAgICAvLyBDTk5PVF9TRUU9IDgsXG4gICAgR0VNX0JVWT0gMTYsXG59XG5cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BJdGVtIGV4dGVuZHMgQmFzZVVJIHtcblxuICAgIC8v6KeC55yL6KeG6aKR5YWN6LS56I635b6X55qE5p6q5qKw562J57qnXG4gICAgcHJpdmF0ZSBTaG93QnV5QWQoaWQ6bnVtYmVyKTpib29sZWFuXG4gICAge1xuICAgICAgICB2YXIgZ3VubHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKTtcbiAgICAgICAgaWYoZ3VubHYgPCA4KXJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGd1bmx2IC0gNCA9PSBpZDtcbiAgICB9XG5cbiAgICAvL+S4jeWPr+aMh+Wumui0reS5sOWPquWPr+afpeeci+eahOWMuumXtFxuICAgIHByaXZhdGUgT25seUZvckNoZWNrKGlkOm51bWJlcik6Ym9vbGVhblxuICAgIHtcbiAgICAgICAgdmFyIGd1bmx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCk7XG4gICAgICAgIGlmKGd1bmx2IC0gMiA8PSBpZCAmJiBpZCA8PSBndW5sdiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIEJ1eURpYW1vbmQoaWQ6bnVtYmVyKTpib29sZWFuXG4gICAge1xuICAgICAgICB2YXIgZ3VubHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKTtcbiAgICAgICAgcmV0dXJuIGd1bmx2IC0gMSA9PSBpZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEJ1eUNvaW5UeXBlKGd1bilcbiAgICB7XG4gICAgICAgIHZhciBndW5sdiA9IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpXG4gICAgICAgIHZhciB0eXBlOm51bWJlciA9IDA7XG4gICAgICAgIGlmKGd1blswXSA8PSBndW5sdiAtIDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5DQU5fQlVZO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuU2hvd0J1eUFkKGd1blswXSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5DQU5fQURfQlVZO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuQnV5RGlhbW9uZChndW5bMF0pKVxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuR0VNX0JVWTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLk9ubHlGb3JDaGVjayhndW5bMF0pKVxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuT05MWV9DSEVDSztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29zdF9jb2luOm51bWJlciA9IDA7XG4gICAgZ3VuOmFueSA9IG51bGw7XG4gICAgYXN5bmMgc2V0U2hvcEl0ZW1EYXRhKGd1bjphbnkpXG4gICAgeyAgIFxuICAgICAgICAvLyBbXCJsZXZlbFwiLCBcImNkXCIsIFwicG93ZXJcIiwgXCJza2lsbFwiLCBcIm9mZmxpbmVcIiwgXCJwcmljZVwiLCBcImdlbVwiLCBcInByZWZhYlwiLCBcInNob290UG9zXCIsIFwic3RlYWtDb2xvclwiLCBcImhlYWRcIl1cbiAgICAgICAgbGV0IG5vZGUgPSBudWxsO1xuICAgICAgICBsZXQgYmhpZGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGJ1eXR5cGUgPSB0aGlzLmdldEJ1eUNvaW5UeXBlKGd1bik7XG4gICAgICAgIHRoaXMuZ3VuID0gZ3VuO1xuXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImhpZGVcIikuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3llbGxvd1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2ZyZWVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9ncmF5XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLkdFTV9CVVkpICE9IDAgJiYgZ3VuWzZdPjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLkNBTl9BRF9CVVkpICE9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9mcmVlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5DQU5fQlVZKSAhPSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5feWVsbG93XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5PTkxZX0NIRUNLKSAhPSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZ3JheVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImhpZGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICBiaGlkZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX2x2XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIitndW5bMF07XG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuWIsFwiKyhndW5bMF0rMikrJ+e6p+ino+mUgSc7XG5cbiAgICAgICAgbGV0IHNraWxsID0gZ3VuWzNdLnNwbGl0KFwifFwiKTtcbiAgICAgICAgbGV0IHNraWxsdHlwZSA9IHNraWxsWzBdO1xuICAgICAgICBsZXQgdmFsdWUgPSBza2lsbFsxXTtcblxuICAgICAgICBsZXQgc3RyID0gXCJcIjtcblxuICAgICAgICBpZihiaGlkZSkgdmFsdWUgPSBcIj9cIlxuICAgICAgICBpZihza2lsbHR5cGUgPT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3RyID1cIuaKgOiDvTpcIiArIHZhbHVlK1wiJeeahOWHoOeOh+inpuWPkeWHj+mAn+ebruaghzHnp5JcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAyKXtcbiAgICAgICAgICAgIHN0ciA9XCLmioDog706XCIgKyB2YWx1ZStcIiXlh6Dnjoflr7nnm67moIfpgKDmiJDlj4zlgI3kvKTlrrNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAzKXtcbiAgICAgICAgICAgIHN0ciA9XCLmioDog706XCIgKyB2YWx1ZStcIiXlh6DnjoflhrDlhrvnm67moIcx56eSXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX25hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBiaGlkZT8n5pyq55+l6JCM6bihJzpndW5bN107XG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfZGVzY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJoaWRlPyfmioDog7065pyq55+lJzpzdHI7XG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfY2RcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPWJoaWRlP1wiP1wiOiBndW5bMV0rXCJcIjtcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9wb3dlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJoaWRlP1wiP1wiOlV0aWxzLmZvcm1hdE51bWJlcihndW5bMl0pK1wiXCI7XG4gICAgICAgIFxuICAgICAgICBpZighYmhpZGUpe1xuICAgICAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTpmbG93ZXIke2d1blswXX1fc2tlYDtcbiAgICAgICAgICAgIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtndW5bMF19X3RleGA7XG4gICAgICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ3Nob3BDaGljaycpO1xuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xuICAgICAgICAgICAgY2hpY2suYXJtYXR1cmVOYW1lID0gJ0FybWF0dXJlJztcbiAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jb3N0X2NvaW4gPSBDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKGd1blswXSlcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2J1eV9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKCB0aGlzLmNvc3RfY29pbikpO1xuICAgICAgICB0aGlzLkdldEJ1dHRvbihcImJ0bl95ZWxsb3dcIikuaW50ZXJhY3RhYmxlID0gQ2hpY2tEYXRhLnVzZXIuY29pbiA+PSB0aGlzLmNvc3RfY29pbjtcbiAgICB9XG4gICAgXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICBzdXBlci5vblVJQ2xpY2tlZChldmVudCxjdXN0b21FdmVudERhdGEpO1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2ZyZWVcIjpcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGIpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEhhbGxTY2VuZS5JbnN0YW5jZS5idXlDaGljayh0aGlzLmd1blswXSwyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLotK3kubDmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEdhbWVDb25zdC5CVVlfQ0hJQ0ssdGhpcy5ndW4sdGhpcy5ub2RlLmdldENvbXBvbmVudChMaXN0SXRlbSkubGlzdElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJidG5feWVsbG93XCI6XG4gICAgICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuY29pbiA8IHRoaXMuY29zdF9jb2luIClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLph5HluIHkuI3otrNcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihIYWxsU2NlbmUuSW5zdGFuY2UuYnV5Q2hpY2sodGhpcy5ndW5bMF0sMCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi6LSt5Lmw5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEdhbWVDb25zdC5CVVlfQ0hJQ0ssdGhpcy5ndW4sdGhpcy5ub2RlLmdldENvbXBvbmVudChMaXN0SXRlbSkubGlzdElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=