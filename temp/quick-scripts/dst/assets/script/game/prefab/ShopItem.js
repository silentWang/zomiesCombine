
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
if (window && window['xxxxx'])
    window['xxxxx']("bP");
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
        if (window && window['xxxxx'])
            window['xxxxx']("sbPmZdfXXDjTAt8jMiBxiYRpYc");
        var gunlv = ChickData_1.default.user.getLvlMax();
        var type = 0;
        if (gun[0] <= gunlv - 2) {
            type |= GunBuyType.CAN_BUY;
        }
        if (this.ShowBuyAd(gun[0])) {
            type |= GunBuyType.CAN_AD_BUY;
            if (window && window['xxxxx'])
                window['xxxxx']("2DcHAZtJXdSC52eFrbe3mH6P");
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
                            if (window && window['xxxxx'])
                                window['xxxxx']("r4jsxj435tPSfynCkPTf7DyGmJK647");
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
                                if (window && window['xxxxx'])
                                    window['xxxxx']("nS68yQymxN46JakxX");
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
                            if (window && window['xxxxx'])
                                window['xxxxx']("eHSD5Sz6yyaBHAnj62TiYAmwkFnFz");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("7tnkcYdyZcthbRnjE2mHckiQ");
                AdCenter_1.default.Instance().play(function (b) {
                    if (b) {
                        if (HallScene_1.default.Instance.buyChick(_this.gun[0], 2)) {
                            if (window && window['xxxxx'])
                                window['xxxxx']("EPem3QPTBF6rtYjchp7WYWa");
                            MsgToast_1.default.show("购买成功");
                            _this.dispatch(GameConst_1.default.BUY_CHICK, _this.gun, _this.node.getComponent(ListItem_1.default).listId);
                        }
                    }
                });
                break;
            case "btn_yellow":
                if (ChickData_1.default.user.coin < this.cost_coin) {
                    if (window && window['xxxxx'])
                        window['xxxxx']("hzRNeci");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0Msb0RBQStDO0FBQy9DLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QywwQ0FBcUM7QUFDckMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCx1REFBYSxDQUFBO0lBQ2IsdURBQWEsQ0FBQTtJQUNiLGdCQUFnQjtJQUNoQixrREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQU5JLFVBQVUsS0FBVixVQUFVLFFBTWQ7QUFHRCxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXBEO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBc0xDO1FBaklXLGVBQVMsR0FBVSxDQUFDLENBQUM7UUFDN0IsU0FBRyxHQUFPLElBQUksQ0FBQzs7SUFnSW5CLENBQUM7SUFwTEcsZUFBZTtJQUNQLDRCQUFTLEdBQWpCLFVBQWtCLEVBQVM7UUFFdkIsSUFBSSxLQUFLLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkMsSUFBRyxLQUFLLEdBQUcsQ0FBQztZQUFDLE9BQU8sS0FBSyxDQUFDO1FBQzFCLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7SUFDUCwrQkFBWSxHQUFwQixV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QUFDLENBQUMsRUFDN0M7b0JBQ0ksa0JBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3ZGO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFyTGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzTDVCO0lBQUQsZUFBQztDQXRMRCxBQXNMQyxDQXRMcUMsZ0JBQU0sR0FzTDNDO2tCQXRMb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9HYW1lQ29uc3RcIjtcclxuaW1wb3J0IEhhbGxTY2VuZSBmcm9tIFwiLi4vSGFsbFNjZW5lXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEd1bkJ1eVR5cGUge1xyXG4gICAgQ0FOX0JVWSA9IDEsXHJcbiAgICBDQU5fQURfQlVZPSAyLFxyXG4gICAgT05MWV9DSEVDSz0gNCxcclxuICAgIC8vIENOTk9UX1NFRT0gOCxcclxuICAgIEdFTV9CVVk9IDE2LFxyXG59XHJcblxyXG5cclxuaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYlBcIik7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BJdGVtIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICAvL+ingueci+inhumikeWFjei0ueiOt+W+l+eahOaequaisOetiee6p1xyXG4gICAgcHJpdmF0ZSBTaG93QnV5QWQoaWQ6bnVtYmVyKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGd1bmx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCk7XHJcbiAgICAgICAgaWYoZ3VubHYgPCA4KXJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZ3VubHYgLSA0ID09IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LiN5Y+v5oyH5a6a6LSt5Lmw5Y+q5Y+v5p+l55yL55qE5Yy66Ze0XHJcbiAgICBwcml2YXRlIE9ubHlGb3JDaGVjayhpZDpudW1iZXIpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB2YXIgZ3VubHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKTtcclxuICAgICAgICBpZihndW5sdiAtIDIgPD0gaWQgJiYgaWQgPD0gZ3VubHYgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEJ1eURpYW1vbmQoaWQ6bnVtYmVyKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGd1bmx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCk7XHJcbiAgICAgICAgcmV0dXJuIGd1bmx2IC0gMSA9PSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEJ1eUNvaW5UeXBlKGd1bilcclxuICAgIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJzYlBtWmRmWFhEalRBdDhqTWlCeGlZUnBZY1wiKTtcclxuICAgICAgICB2YXIgZ3VubHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKVxyXG4gICAgICAgIHZhciB0eXBlOm51bWJlciA9IDA7XHJcbiAgICAgICAgaWYoZ3VuWzBdIDw9IGd1bmx2IC0gMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5DQU5fQlVZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLlNob3dCdXlBZChndW5bMF0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSB8PSBHdW5CdXlUeXBlLkNBTl9BRF9CVVk7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjJEY0hBWnRKWGRTQzUyZUZyYmUzbUg2UFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5CdXlEaWFtb25kKGd1blswXSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuR0VNX0JVWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5Pbmx5Rm9yQ2hlY2soZ3VuWzBdKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5PTkxZX0NIRUNLO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3N0X2NvaW46bnVtYmVyID0gMDtcclxuICAgIGd1bjphbnkgPSBudWxsO1xyXG4gICAgYXN5bmMgc2V0U2hvcEl0ZW1EYXRhKGd1bjphbnkpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgLy8gW1wibGV2ZWxcIiwgXCJjZFwiLCBcInBvd2VyXCIsIFwic2tpbGxcIiwgXCJvZmZsaW5lXCIsIFwicHJpY2VcIiwgXCJnZW1cIiwgXCJwcmVmYWJcIiwgXCJzaG9vdFBvc1wiLCBcInN0ZWFrQ29sb3JcIiwgXCJoZWFkXCJdXHJcbiAgICAgICAgbGV0IG5vZGUgPSBudWxsO1xyXG4gICAgICAgIGxldCBiaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBidXl0eXBlID0gdGhpcy5nZXRCdXlDb2luVHlwZShndW4pO1xyXG4gICAgICAgIHRoaXMuZ3VuID0gZ3VuO1xyXG5cclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImhpZGVcIikuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl95ZWxsb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2ZyZWVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2dyYXlcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLkdFTV9CVVkpICE9IDAgJiYgZ3VuWzZdPjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5DQU5fQURfQlVZKSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwicjRqc3hqNDM1dFBTZnluQ2tQVGY3RHlHbUpLNjQ3XCIpO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9mcmVlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5DQU5fQlVZKSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5feWVsbG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZigoYnV5dHlwZSAmIEd1bkJ1eVR5cGUuT05MWV9DSEVDSykgIT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2dyYXlcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiblM2OHlReW14TjQ2SmFreFhcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJoaWRlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIGJoaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcImxibF9sdlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIrZ3VuWzBdO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuWIsFwiKyhndW5bMF0rMikrJ+e6p+ino+mUgSc7XHJcblxyXG4gICAgICAgIGxldCBza2lsbCA9IGd1blszXS5zcGxpdChcInxcIik7XHJcbiAgICAgICAgbGV0IHNraWxsdHlwZSA9IHNraWxsWzBdO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHNraWxsWzFdO1xyXG5cclxuICAgICAgICBsZXQgc3RyID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYoYmhpZGUpIHZhbHVlID0gXCI/XCJcclxuICAgICAgICBpZihza2lsbHR5cGUgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0ciA9XCLmioDog706XCIgKyB2YWx1ZStcIiXnmoTlh6Dnjofop6blj5Hlh4/pgJ/nm67moIcx56eSXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2tpbGx0eXBlID09IDIpe1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJlSFNENVN6Nnl5YUJIQW5qNjJUaVlBbXdrRm5GelwiKTtcclxuICAgICAgICAgICAgc3RyID1cIuaKgOiDvTpcIiArIHZhbHVlK1wiJeWHoOeOh+Wvueebruagh+mAoOaIkOWPjOWAjeS8pOWus1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAzKXtcclxuICAgICAgICAgICAgc3RyID1cIuaKgOiDvTpcIiArIHZhbHVlK1wiJeWHoOeOh+WGsOWGu+ebruaghzHnp5JcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJoaWRlPyfmnKrnn6XokIzpuKEnOmd1bls3XTtcclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX2Rlc2NcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBiaGlkZT8n5oqA6IO9OuacquefpSc6c3RyO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfY2RcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPWJoaWRlP1wiP1wiOiBndW5bMV0rXCJcIjtcclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX3Bvd2VyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYmhpZGU/XCI/XCI6VXRpbHMuZm9ybWF0TnVtYmVyKGd1blsyXSkrXCJcIjtcclxuICAgICAgICBcclxuICAgICAgICBpZighYmhpZGUpe1xyXG4gICAgICAgICAgICBsZXQgc2twYXRoID0gYHNwaW5lOmZsb3dlciR7Z3VuWzBdfV9za2VgO1xyXG4gICAgICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7Z3VuWzBdfV90ZXhgO1xyXG4gICAgICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ3Nob3BDaGljaycpO1xyXG4gICAgICAgICAgICBjaGljay5kcmFnb25Bc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoc2twYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQ7XHJcbiAgICAgICAgICAgIGNoaWNrLmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcclxuICAgICAgICAgICAgY2hpY2suYXJtYXR1cmVOYW1lID0gJ0FybWF0dXJlJztcclxuICAgICAgICAgICAgY2hpY2sucGxheUFuaW1hdGlvbignaWRsZUwnLDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvc3RfY29pbiA9IENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UoZ3VuWzBdKVxyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9idXlfY29pblwiLFV0aWxzLmZvcm1hdE51bWJlciggdGhpcy5jb3N0X2NvaW4pKTtcclxuICAgICAgICB0aGlzLkdldEJ1dHRvbihcImJ0bl95ZWxsb3dcIikuaW50ZXJhY3RhYmxlID0gQ2hpY2tEYXRhLnVzZXIuY29pbiA+PSB0aGlzLmNvc3RfY29pbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHN1cGVyLm9uVUlDbGlja2VkKGV2ZW50LGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2ZyZWVcIjpcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjd0bmtjWWR5WmN0aGJSbmpFMm1IY2tpUVwiKTtcclxuICAgICAgICAgICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkucGxheSgoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLmJ1eUNoaWNrKHRoaXMuZ3VuWzBdLDIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkVQZW0zUVBUQkY2cnRZamNocDdXWVdhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi6LSt5Lmw5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEdhbWVDb25zdC5CVVlfQ0hJQ0ssdGhpcy5ndW4sdGhpcy5ub2RlLmdldENvbXBvbmVudChMaXN0SXRlbSkubGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3llbGxvd1wiOlxyXG4gICAgICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuY29pbiA8IHRoaXMuY29zdF9jb2luIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJoelJOZWNpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLph5HluIHkuI3otrNcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihIYWxsU2NlbmUuSW5zdGFuY2UuYnV5Q2hpY2sodGhpcy5ndW5bMF0sMCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIui0reS5sOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEdhbWVDb25zdC5CVVlfQ0hJQ0ssdGhpcy5ndW4sdGhpcy5ub2RlLmdldENvbXBvbmVudChMaXN0SXRlbSkubGlzdElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=