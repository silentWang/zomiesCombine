
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
                AdCenter_1.default.Instance().play(0, function (b) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFDL0Msb0RBQStDO0FBQy9DLG1EQUE4QztBQUM5QywyQ0FBc0M7QUFDdEMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0QywwQ0FBcUM7QUFDckMsMENBQXFDO0FBRy9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCx1REFBYSxDQUFBO0lBQ2IsdURBQWEsQ0FBQTtJQUNiLGdCQUFnQjtJQUNoQixrREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQU5JLFVBQVUsS0FBVixVQUFVLFFBTWQ7QUFJRDtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQTZNQztRQXpKVyxlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDNUIsU0FBRyxHQUFPLElBQUksQ0FBQzs7SUF1Sm5CLENBQUM7SUEzTUcsZUFBZTtJQUNQLDZCQUFVLEdBQWxCLFVBQW1CLEVBQVM7UUFFeEIsSUFBSSxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFHLEtBQUssR0FBRyxDQUFDO1lBQUMsT0FBTyxLQUFLLENBQUM7UUFDMUIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtJQUNQLDRCQUFTLEdBQWpCLFVBQWtCLEVBQVM7UUFFdkIsSUFBSSxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUs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TUFBTSxDQUFDLENBQUM7aUJBQ3ZGO2dCQUNELE1BQUs7U0FDWjtJQUNMLENBQUM7SUE1TWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2TTVCO0lBQUQsZUFBQztDQTdNRCxBQTZNQyxDQTdNcUMsZ0JBQU0sR0E2TTNDO2tCQTdNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBNc2dIaW50cyBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnSGludHNcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL0dhbWVDb25zdFwiO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gXCIuLi9IYWxsU2NlbmVcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gR3VuQnV5VHlwZSB7XHJcbiAgICBDQU5fQlVZID0gMSxcclxuICAgIENBTl9BRF9CVVk9IDIsXHJcbiAgICBPTkxZX0NIRUNLPSA0LFxyXG4gICAgLy8gQ05OT1RfU0VFPSA4LFxyXG4gICAgR0VNX0JVWT0gMTYsXHJcbn1cclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wSXRlbSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgLy/op4LnnIvop4bpopHlhY3otLnojrflvpfnmoTmnqrmorDnrYnnuqdcclxuICAgIHByaXZhdGUgV2F0Y2hBZEJ1eShpZDpudW1iZXIpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB2YXIgZ3VubHYgPSBEYXRhLnVzZXIuR2V0TWF4THYoKTtcclxuICAgICAgICBpZihndW5sdiA8IDgpcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBndW5sdiAtIDQgPT0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuI3lj6/mjIflrprotK3kubDlj6rlj6/mn6XnnIvnmoTljLrpl7RcclxuICAgIHByaXZhdGUgT25seUNoZWNrKGlkOm51bWJlcik6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHZhciBndW5sdiA9IERhdGEudXNlci5HZXRNYXhMdigpO1xyXG4gICAgICAgIGlmKGd1bmx2IC0gMiA8PSBpZCAmJiBpZCA8PSBndW5sdiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQnV5R2VtKGlkOm51bWJlcik6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHZhciBndW5sdiA9IERhdGEudXNlci5HZXRNYXhMdigpO1xyXG4gICAgICAgIHJldHVybiBndW5sdiAtIDEgPT0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCdXlUeXBlKGd1bilcclxuICAgIHtcclxuICAgICAgICB2YXIgZ3VubHYgPSBEYXRhLnVzZXIuR2V0TWF4THYoKVxyXG4gICAgICAgIHZhciB0eXBlOm51bWJlciA9IDA7XHJcbiAgICAgICAgaWYoZ3VuWzBdIDw9IGd1bmx2IC0gMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5DQU5fQlVZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLldhdGNoQWRCdXkoZ3VuWzBdKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGUgfD0gR3VuQnV5VHlwZS5DQU5fQURfQlVZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLkJ1eUdlbShndW5bMF0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSB8PSBHdW5CdXlUeXBlLkdFTV9CVVk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuT25seUNoZWNrKGd1blswXSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlIHw9IEd1bkJ1eVR5cGUuT05MWV9DSEVDSztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvc3RfY29pbjpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb3N0X2dlbTpudW1iZXIgPSAwO1xyXG4gICAgZ3VuOmFueSA9IG51bGw7XHJcbiAgICBhc3luYyBzZXRJdGVtRGF0YShndW46YW55KVxyXG4gICAgeyAgIFxyXG4gICAgICAgIC8vIFtcImxldmVsXCIsIFwiY2RcIiwgXCJwb3dlclwiLCBcInNraWxsXCIsIFwib2ZmbGluZVwiLCBcInByaWNlXCIsIFwiZ2VtXCIsIFwicHJlZmFiXCIsIFwic2hvb3RQb3NcIiwgXCJzdGVha0NvbG9yXCIsIFwiaGVhZFwiXVxyXG4gICAgICAgIGxldCBub2RlID0gbnVsbDtcclxuICAgICAgICBsZXQgYmhpZGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYnV5dHlwZSA9IHRoaXMuZ2V0QnV5VHlwZShndW4pO1xyXG4gICAgICAgIHRoaXMuZ3VuID0gZ3VuO1xyXG5cclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImhpZGVcIikuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9nZW1cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3llbGxvd1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZnJlZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZ3JheVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb3N0X2dlbSA9IE1hdGgubWluKGd1bls2XSw1KTtcclxuICAgICAgICBpZigoYnV5dHlwZSAmIEd1bkJ1eVR5cGUuR0VNX0JVWSkgIT0gMCAmJiBndW5bNl0+MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9nZW1cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLkNBTl9BRF9CVVkpICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9mcmVlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKChidXl0eXBlICYgR3VuQnV5VHlwZS5DQU5fQlVZKSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5feWVsbG93XCIpLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoKGJ1eXR5cGUgJiBHdW5CdXlUeXBlLk9OTFlfQ0hFQ0spICE9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInNob3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9ncmF5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImhpZGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgYmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX2x2XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIitndW5bMF07XHJcbiAgICAgICAgdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZSxcIk5ldyBMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5YiwXCIrKGd1blswXSsyKSsn57qn6Kej6ZSBJztcclxuXHJcbiAgICAgICAgbGV0IHNraWxsID0gZ3VuWzNdLnNwbGl0KFwifFwiKTtcclxuICAgICAgICBsZXQgc2tpbGx0eXBlID0gc2tpbGxbMF07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gc2tpbGxbMV07XHJcblxyXG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZihiaGlkZSl2YWx1ZSA9IFwiP1wiXHJcbiAgICAgICAgaWYoc2tpbGx0eXBlID09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHIgPVwi5oqA6IO9OlwiICsgdmFsdWUrXCIl55qE5Yeg546H6Kem5Y+R5YeP6YCf55uu5qCHMeenklwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgc3RyID1cIuaKgOiDvTpcIiArIHZhbHVlK1wiJeWHoOeOh+Wvueebruagh+mAoOaIkOWPjOWAjeS8pOWus1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHNraWxsdHlwZSA9PSAzKXtcclxuICAgICAgICAgICAgc3RyID1cIuaKgOiDvTpcIiArIHZhbHVlK1wiJeWHoOeOh+WGsOWGu+ebruaghzHnp5JcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJoaWRlPyfmnKrnn6XokIzpuKEnOmd1bls3XTtcclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX2Rlc2NcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBiaGlkZT8n5oqA6IO9OuacquefpSc6c3RyO1xyXG4gICAgICAgIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJsYmxfY2RcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPWJoaWRlP1wiP1wiOiBndW5bMV0rXCJcIjtcclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwibGJsX3Bvd2VyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYmhpZGU/XCI/XCI6VXRpbHMuZm9ybWF0TnVtYmVyKGd1blsyXSkrXCJcIjtcclxuICAgICAgICB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwiZ3VuXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gYXdhaXQgVXRpbHMubG9hZFJlcyhcInRleHR1cmUvcGxhbnRzL1wiKyhndW5bMF0tMSksY2MuU3ByaXRlRnJhbWUpIGFzIGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgIC8vIHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUsXCJndW5cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwidGV4dHVyZS9wbGFudHMvXCIrKGd1blswXS0xKSxjYy5TcHJpdGVGcmFtZSkgYXMgY2MuU3ByaXRlRnJhbWU7XHJcbiAgICAgICBcclxuICAgICAgICAvLyBsZXQgY3MgPSB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLFwiMFwiKTtcclxuICAgICAgICAvLyBpZihndW5bMF0rMTw2MClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlmKGNzKXtcclxuICAgICAgICAvLyAgICAgICAgIGNzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gYXdhaXQgVXRpbHMubG9hZFJlcyhcInRleHR1cmUvcGxhbnRzL1wiKyhndW5bMF0rMSksY2MuU3ByaXRlRnJhbWUpIGFzIGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2VcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlmKGNzKXtcclxuICAgICAgICAvLyAgICAgICAgICBjcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoXCJ0ZXh0dXJlL3BsYW50cy81OVwiLGNjLlNwcml0ZUZyYW1lKSBhcyBjYy5TcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvc3RfY29pbiA9IERhdGEudXNlci5CdXlQcmljZShndW5bMF0pXHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2J1eV9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKCB0aGlzLmNvc3RfY29pbikpO1xyXG4gICAgICAgIHRoaXMuR2V0QnV0dG9uKFwiYnRuX3llbGxvd1wiKS5pbnRlcmFjdGFibGUgPSBEYXRhLnVzZXIuY29pbiA+PSB0aGlzLmNvc3RfY29pbjtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfYnV5X2dlbVwiLFV0aWxzLmZvcm1hdE51bWJlciggdGhpcy5jb3N0X2dlbSkpOyAgICAvL+mSu+efs+S6p+WHuuWwke+8jOacgOWkmuWwsTXkuKrpkrvnn7PlkKdcclxuICAgICAgICAvLyBpZihVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSBEYXRhTWFuYWdlci5JbnN0YW5jZSgpLmxhc3RTaGFyZUdldEd1blRpbWUgPCBHQU1FX0NPTkZJRy5TSEFSRV9HRVRfR1VOX1RJTUUpXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZnJlZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQnRuQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgc3VwZXIub25CdG5DbGlja2VkKGV2ZW50LGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9mcmVlXCI6XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoMCwoYik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLnRyeUJ1eVBsYW50KHRoaXMuZ3VuWzBdLDIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLotK3kubDmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2goR2FtZUNvbnN0LkJVWV9QTEFOVCx0aGlzLmd1bix0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KExpc3RJdGVtKS5saXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5feWVsbG93XCI6XHJcbiAgICAgICAgICAgICAgICBpZihEYXRhLnVzZXIuY29pbiA8IHRoaXMuY29zdF9jb2luIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi6YeR5biB5LiN6LazXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLnRyeUJ1eVBsYW50KHRoaXMuZ3VuWzBdLDApKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLotK3kubDmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChHYW1lQ29uc3QuQlVZX1BMQU5ULHRoaXMuZ3VuLHRoaXMubm9kZS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pLmxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9nZW1cIjpcclxuICAgICAgICAgICAgICAgIGlmKERhdGEudXNlci5nZW0gPCB0aGlzLmNvc3RfZ2VtIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi6ZK755+z5LiN6LazXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoSGFsbFNjZW5lLkluc3RhbmNlLnRyeUJ1eVBsYW50KHRoaXMuZ3VuWzBdLDEpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLotK3kubDmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChHYW1lQ29uc3QuQlVZX1BMQU5ULHRoaXMuZ3VuLHRoaXMubm9kZS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pLmxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=