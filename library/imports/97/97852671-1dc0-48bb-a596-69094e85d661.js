"use strict";
cc._RF.push(module, '97852ZxHcBIu6WWaQlOhdZh', 'ShopLayer');
// script/game/prefab/ShopLayer.ts

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
var BaseUI_1 = require("../../framwork/BaseUI");
var List_1 = require("../../framwork/List");
var Data_1 = require("../../manager/Data");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var DB_1 = require("../DB");
var GameConst_1 = require("../GameConst");
var ShopItem_1 = require("./ShopItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopLayer = /** @class */ (function (_super) {
    __extends(ShopLayer, _super);
    function ShopLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = null;
        return _this;
    }
    ShopLayer_1 = ShopLayer;
    ShopLayer.show = function () {
        if (!ShopLayer_1._instance) {
            Utils_1.default.createUI("prefab/ShopLayer");
        }
        else {
            ShopLayer_1._instance.active = true;
            ShopLayer_1._instance.getComponent(ShopLayer_1).reLoad();
        }
    };
    ShopLayer.prototype.start = function () {
        var _this = this;
        ShopLayer_1._instance = this.node;
        this.list = DB_1.DB_plant;
        this.reLoad();
        this.rigester(GameConst_1.default.BUY_PLANT, function (gun, listid) {
            _this.GetGameObject("ScrollView").getComponent(List_1.default).updateAppointed(listid);
        });
        this.rigester(GameConst_1.default.NEW_PLANT, function () {
            _this.reLoad();
        });
    };
    ShopLayer.prototype.reLoad = function () {
        this.list = DB_1.DB_plant;
        this.GetGameObject("ScrollView").getComponent(List_1.default).numItems = this.list.length;
        var index = Math.max(0, Data_1.default.user.GetMaxLv() - 5);
        this.GetGameObject("ScrollView").getComponent(List_1.default).scrollTo(index, 0.2);
    };
    ShopLayer.prototype.onBtnClicked = function (event, c) {
        AudioMgr_1.default.Instance().playSFX("click");
        this.node.active = false;
    };
    ShopLayer.prototype.onListRender = function (item, idx) {
        item.getComponent(ShopItem_1.default).setItemData(this.list[idx]);
    };
    var ShopLayer_1;
    ShopLayer._instance = null;
    ShopLayer = ShopLayer_1 = __decorate([
        ccclass
    ], ShopLayer);
    return ShopLayer;
}(BaseUI_1.default));
exports.default = ShopLayer;

cc._RF.pop();