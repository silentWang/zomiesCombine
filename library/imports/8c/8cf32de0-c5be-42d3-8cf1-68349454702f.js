"use strict";
cc._RF.push(module, '8cf323gxb5C04zxaDSUVHAv', 'SlotItem');
// script/game/SlotItem.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framwork/BaseUI");
var Data_1 = require("../manager/Data");
var DB_1 = require("./DB");
var Utils_1 = require("../utils/Utils");
var MsgHints_1 = require("../framwork/MsgHints");
var GameConst_1 = require("./GameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SlotItem = /** @class */ (function (_super) {
    __extends(SlotItem, _super);
    function SlotItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        return _this;
    }
    SlotItem_1 = SlotItem;
    SlotItem.getCurOpen = function () {
        var curopen = -1;
        for (var i = 1; i < 12; ++i) {
            if (Data_1.default.user.slots[i] == 0) {
                curopen = i;
                break;
            }
        }
        return curopen;
    };
    SlotItem.prototype.onBtnClicked = function (event, customEventData) {
        var curopen = SlotItem_1.getCurOpen();
        if (curopen == -1)
            return;
        if (this.index - 1 > curopen) {
            MsgHints_1.default.show("需要先解锁" + (curopen + 1));
            return;
        }
        var type = DB_1.DB_slot[curopen].type;
        if (type == 0) {
            if (Data_1.default.user.coin < DB_1.DB_slot[curopen].price) {
                MsgHints_1.default.show("金币不足");
                return;
            }
        }
        else {
            if (Data_1.default.user.gem < DB_1.DB_slot[curopen].price) {
                MsgHints_1.default.show("钻石不足");
                return;
            }
        }
        Data_1.default.user.slots[curopen] = 1;
        if (type == 0) {
            Data_1.default.user.coin -= DB_1.DB_slot[curopen].price;
        }
        else {
            Data_1.default.user.gem -= DB_1.DB_slot[curopen].price;
        }
        console.log("解锁土地", curopen);
        MsgHints_1.default.show("成功解锁新位置");
        Data_1.default.save();
        this.dispatch(GameConst_1.default.OPEN_SLOT, curopen);
        this.setIndex(this.index);
    };
    SlotItem.prototype.setIndex = function (i) {
        this.index = i;
        this.SetText("lbl_index", i + "");
        var curopen = SlotItem_1.getCurOpen();
        this.node.getComponent(cc.Button).interactable = this.index - 1 >= curopen && curopen != -1;
        // this.GetSkeleton("fx_slot").setAnimation(0,"buy",true)
        // this.GetGameObject("fx_slot").active = false;
        var info = Data_1.default.user.slots[i - 1];
        this.GetGameObject("lock").active = info == 0;
        this.GetGameObject("lbl_index").active = info == 0;
        this.GetGameObject("node_cost").active = info == 0;
        this.GetGameObject("2btcoin").active = DB_1.DB_slot[i - 1].type == 0;
        this.GetGameObject("2btdiamond").active = DB_1.DB_slot[i - 1].type == 1;
        this.SetText("lbl_open_cost", Utils_1.default.formatNumber(DB_1.DB_slot[i - 1].price));
    };
    var SlotItem_1;
    SlotItem = SlotItem_1 = __decorate([
        ccclass
    ], SlotItem);
    return SlotItem;
}(BaseUI_1.default));
exports.default = SlotItem;

cc._RF.pop();