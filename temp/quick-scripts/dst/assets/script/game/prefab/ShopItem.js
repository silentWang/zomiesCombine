
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0Msb0RBQStDO0FBQy9DLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QywwQ0FBcUM7QUFDckMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCx1REFBYSxDQUFBO0lBQ2IsdURBQWEsQ0FBQTtJQUNiLGdCQUFnQjtJQUNoQixrREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQU5JLFVBQVUsS0FBVixVQUFVLFFBTWQ7QUFJRDtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQThLQztRQTNIVyxlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQzdCLFNBQUcsR0FBTyxJQUFJLENBQUM7O0lBMEhuQixDQUFDO0lBNUtHLGVBQWU7SUFDUCw0QkFBUyxHQUFqQixVQUFrQixFQUFTO1FBRXZCLElBQUksS0FBSyxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLElBQUcsS0FBSyxHQUFHLENBQUM7WUFBQyxPQUFPLEtBQUssQ0FBQztRQUMxQixPQUFPLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO0lBQ1AsK0JBQVksR0FBcEIsVUFBcUIsRUFBUztRQUUxQixJQUFJLEtBQUssR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QyxJQUFHLEtBQUssR0FB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QUE7b0JBQ3JCLE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFDN0M7b0JBQ0ksa0JBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3ZGO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUE3S2dCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4SzVCO0lBQUQsZUFBQztDQTlLRCxBQThLQyxDQTlLcUMsZ0JBQU0sR0E4SzNDO2tCQTlLb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9HYW1lQ29uc3RcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEd1bkJ1eVR5cGUge1xyXG4gICAgQ0FOX0JVWSA9IDEsXHJcbiAgICBDQU5fQURfQlVZPSAyLFxyXG4gICAgT05MWV9DSEVDSz0gNCxcclxuICAgIC8vIENOTk9UX1NFRT0gOCxcclxuICAgIEdFTV9CVVk9IDE2LFxyXG59XHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcEl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIC8v6KeC55yL6KeG6aKR5YWN6LS56I635b6X55qE5p6q5qKw562J57qnXHJcbiAgICBwcml2YXRlIFNob3dCdXlBZChpZDpudW1iZXIpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB2YXIgZ3VubHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKTtcclxuICAgICAgICBpZihndW5sdiA8IDgpcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBndW5sdiAtIDQgPT0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuI3lj6/mjIflrprotK3kubDlj6rlj6/mn6XnnIvnmoTljLrpl7RcclxuICAgIHByaXZhdGUgT25seUZvckNoZWNrKGlkOm51bWJlcik6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHZhciBndW5sdiA9IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpO1xyXG4gICAgICAgIGlmKGd1bmx2IC0gMiA8PSBpZCAmJiBpZCA8PSBndW5sdiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQnV5RGlhbW9uZChpZDpudW1iZXIpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB2YXIgZ3VubHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKTtcclxuICAgICAgICByZXR1cm4gZ3VubHYgLSAxID09IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnV5Q29pblR5cGUoZ3VuKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBndW5sdiA9IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpXHJcbiAgICAgICAgdmFyIHR5cGU6bnVtYmVyID0gMDtcclxuICAgICAgICBpZihndW5bMF0gPD0gZ3VubHYgLSAyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSB8PSBHdW5CdXlUeXBlLkNBTl9CVVk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuU2hvd0J1eUFkKGd1blswXSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuQ0FOX0FEX0JVWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5CdXlEaWFtb25kKGd1blswXSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuR0VNX0JVWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5Pbmx5Rm9yQ2hlY2soZ3VuWzBdKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5PTkxZX0NIRUNLO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3N0X2NvaW46bnVtYmVyID0gMDtcclxuICAgIGd1bjphbnkgPSBudWxsO1xyXG4gICAgYXN5bmMgc2V0U2hvcEl0ZW1EYXRhKGd1bjphbnkpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgLy8gW1wibGV2ZWxcIiwgXCJjZFwiLCBcInBvd2VyXCIsIFwic2tpbGxcIiwgXCJvZmZsaW5lXCIsIFwicHJpY2VcIiwgXCJnZW1cIiwgXCJwcmVmYWJcIiwgXCJzaG9vdFBvc1wiLCBcInN0ZWFrQ29sb3JcIiwgXCJoZWFkXCJdXHJcbiAgICAgICAgbGV0IG5vZGUgPSBudWxsO1xyXG4gICAgICAgIGxldCBiaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBidXl0eXBlID0gdGhpcy5nZXRCdXlDb2luVHlwZShndW4pO1xyXG4gICAgICAgIHRoaXMuZ3VuID0gZ3VuO1xyXG5cclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImhpZGVcIikuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl95ZWxsb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2ZyZWVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2dyYXlcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLkdFTV9CVVkpICE9IDAgJiYgZ3VuWzZdPjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5DQU5fQURfQlVZKSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZnJlZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZigoYnV5dHlwZSAmIEd1bkJ1eVR5cGUuQ0FOX0JVWSkgIT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3llbGxvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLk9OTFlfQ0hFQ0spICE9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9ncmF5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImhpZGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgYmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX2x2XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIitndW5bMF07XHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcIk5ldyBMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5YiwXCIrKGd1blswXSsyKSsn57qn6Kej6ZSBJztcclxuXHJcbiAgICAgICAgbGV0IHNraWxsID0gZ3VuWzNdLnNwbGl0KFwifFwiKTtcclxuICAgICAgICBsZXQgc2tpbGx0eXBlID0gc2tpbGxbMF07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gc2tpbGxbMV07XHJcblxyXG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZihiaGlkZSkgdmFsdWUgPSBcIj9cIlxyXG4gICAgICAgIGlmKHNraWxsdHlwZSA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyID1cIuaKgOiDvTpcIiArIHZhbHVlK1wiJeeahOWHoOeOh+inpuWPkeWHj+mAn+ebruaghzHnp5JcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihza2lsbHR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgIHN0ciA9XCLmioDog706XCIgKyB2YWx1ZStcIiXlh6Dnjoflr7nnm67moIfpgKDmiJDlj4zlgI3kvKTlrrNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihza2lsbHR5cGUgPT0gMyl7XHJcbiAgICAgICAgICAgIHN0ciA9XCLmioDog706XCIgKyB2YWx1ZStcIiXlh6DnjoflhrDlhrvnm67moIcx56eSXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX25hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBiaGlkZT8n5pyq55+l6JCM6bihJzpndW5bN107XHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9kZXNjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYmhpZGU/J+aKgOiDvTrmnKrnn6UnOnN0cjtcclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX2NkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1iaGlkZT9cIj9cIjogZ3VuWzFdK1wiXCI7XHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9wb3dlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJoaWRlP1wiP1wiOlV0aWxzLmZvcm1hdE51bWJlcihndW5bMl0pK1wiXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWJoaWRlKXtcclxuICAgICAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTpmbG93ZXIke2d1blswXX1fc2tlYDtcclxuICAgICAgICAgICAgbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpmbG93ZXIke2d1blswXX1fdGV4YDtcclxuICAgICAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdzaG9wQ2hpY2snKTtcclxuICAgICAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgICAgICBjaGljay5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgICAgIGNoaWNrLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XHJcbiAgICAgICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb3N0X2NvaW4gPSBDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKGd1blswXSlcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfYnV5X2NvaW5cIixVdGlscy5mb3JtYXROdW1iZXIoIHRoaXMuY29zdF9jb2luKSk7XHJcbiAgICAgICAgdGhpcy5HZXRCdXR0b24oXCJidG5feWVsbG93XCIpLmludGVyYWN0YWJsZSA9IENoaWNrRGF0YS51c2VyLmNvaW4gPj0gdGhpcy5jb3N0X2NvaW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBzdXBlci5vblVJQ2xpY2tlZChldmVudCxjdXN0b21FdmVudERhdGEpO1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9mcmVlXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoKGIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEhhbGxTY2VuZS5JbnN0YW5jZS5idXlDaGljayh0aGlzLmd1blswXSwyKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi6LSt5Lmw5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEdhbWVDb25zdC5CVVlfQ0hJQ0ssdGhpcy5ndW4sdGhpcy5ub2RlLmdldENvbXBvbmVudChMaXN0SXRlbSkubGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3llbGxvd1wiOlxyXG4gICAgICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuY29pbiA8IHRoaXMuY29zdF9jb2luIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi6YeR5biB5LiN6LazXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLmJ1eUNoaWNrKHRoaXMuZ3VuWzBdLDApKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLotK3kubDmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChHYW1lQ29uc3QuQlVZX0NISUNLLHRoaXMuZ3VuLHRoaXMubm9kZS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pLmxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19