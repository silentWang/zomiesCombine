
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/ShopLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsNENBQXVDO0FBQ3ZDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLDRCQUFpQztBQUNqQywwQ0FBcUM7QUFDckMsdUNBQWtDO0FBSTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFNO0lBQTdDO1FBQUEscUVBZ0RDO1FBL0JHLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBK0JoQixDQUFDO2tCQWhEb0IsU0FBUztJQUluQixjQUFJLEdBQVg7UUFFSSxJQUFHLENBQUMsV0FBUyxDQUFDLFNBQVMsRUFDdkI7WUFDSSxlQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDckM7YUFFRDtZQUNJLFdBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsQyxXQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxXQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFHRCx5QkFBSyxHQUFMO1FBQUEsaUJBV0M7UUFWRyxXQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFRLENBQUE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBQyxVQUFDLEdBQU8sRUFBQyxNQUFhO1lBQ3BELEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEVBQUM7WUFDOUIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDBCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsS0FBSyxFQUFDLENBQUM7UUFFaEIsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsSUFBYSxFQUFFLEdBQVc7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOztJQTVDYyxtQkFBUyxHQUFXLElBQUksQ0FBQztJQUh2QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ0Q3QjtJQUFELGdCQUFDO0NBaERELEFBZ0RDLENBaERzQyxnQkFBTSxHQWdENUM7a0JBaERvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi8uLi9mcmFtd29yay9MaXN0XCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IERCX3BsYW50IH0gZnJvbSBcIi4uL0RCXCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL0dhbWVDb25zdFwiO1xyXG5pbXBvcnQgU2hvcEl0ZW0gZnJvbSBcIi4vU2hvcEl0ZW1cIjtcclxuXHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wTGF5ZXIgZXh0ZW5kcyBCYXNlVUl7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpjYy5Ob2RlID0gbnVsbDtcclxuICAgIHN0YXRpYyBzaG93KClcclxuICAgIHtcclxuICAgICAgICBpZighU2hvcExheWVyLl9pbnN0YW5jZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1Nob3BMYXllclwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTaG9wTGF5ZXIuX2luc3RhbmNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFNob3BMYXllci5faW5zdGFuY2UuZ2V0Q29tcG9uZW50KFNob3BMYXllcikucmVMb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3QgPSBudWxsO1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFNob3BMYXllci5faW5zdGFuY2UgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gREJfcGxhbnRcclxuICAgICAgICB0aGlzLnJlTG9hZCgpO1xyXG4gICAgICAgIHRoaXMucmlnZXN0ZXIoR2FtZUNvbnN0LkJVWV9QTEFOVCwoZ3VuOmFueSxsaXN0aWQ6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJTY3JvbGxWaWV3XCIpLmdldENvbXBvbmVudChMaXN0KS51cGRhdGVBcHBvaW50ZWQobGlzdGlkKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnJpZ2VzdGVyKEdhbWVDb25zdC5ORVdfUExBTlQsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5yZUxvYWQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gREJfcGxhbnQ7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiU2Nyb2xsVmlld1wiKS5nZXRDb21wb25lbnQoTGlzdCkubnVtSXRlbXMgPSB0aGlzLmxpc3QubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpbmRleCA9IE1hdGgubWF4KDAsRGF0YS51c2VyLkdldE1heEx2KCkgLSA1KTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJTY3JvbGxWaWV3XCIpLmdldENvbXBvbmVudChMaXN0KS5zY3JvbGxUbyhpbmRleCwwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuQ2xpY2tlZChldmVudCxjKVxyXG4gICAge1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25MaXN0UmVuZGVyKGl0ZW06IGNjLk5vZGUsIGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoU2hvcEl0ZW0pLnNldEl0ZW1EYXRhKHRoaXMubGlzdFtpZHhdKTtcclxuICAgIH1cclxufVxyXG4iXX0=