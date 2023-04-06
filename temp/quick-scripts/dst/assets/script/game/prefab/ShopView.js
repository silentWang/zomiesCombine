
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/ShopView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd2798exgyFBwbE/jvMs82x9', 'ShopView');
// script/game/prefab/ShopView.ts

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
var ChickData_1 = require("../../manager/ChickData");
var WxCenter_1 = require("../../manager/WxCenter");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var Config_1 = require("../Config");
var GameConst_1 = require("../GameConst");
var ShopItem_1 = require("./ShopItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopView = /** @class */ (function (_super) {
    __extends(ShopView, _super);
    function ShopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = null;
        return _this;
    }
    ShopView_1 = ShopView;
    ShopView.show = function () {
        if (!ShopView_1._instance) {
            Utils_1.default.createUI("prefab/ShopLayer");
        }
        else {
            ShopView_1._instance.active = true;
            ShopView_1._instance.getComponent(ShopView_1).reLoad();
        }
    };
    ShopView.prototype.start = function () {
        var _this = this;
        WxCenter_1.default.aldReport('ShopShow', 'show');
        ShopView_1._instance = this.node;
        this.list = Config_1.Config_chick;
        this.reLoad();
        this.rigester(GameConst_1.default.BUY_CHICK, function (gun, listid) {
            _this.GetGameObject("ScrollView").getComponent(List_1.default).updateAppointed(listid);
        });
        this.rigester(GameConst_1.default.NEW_CHICK, function () {
            _this.reLoad();
        });
    };
    ShopView.prototype.reLoad = function () {
        this.list = Config_1.Config_chick;
        var sview = this.GetGameObject("ScrollView");
        var list = sview.getComponent(List_1.default);
        list.numItems = this.list.length;
        var index = Math.max(0, ChickData_1.default.user.getLvlMax() - 5);
        list.scrollTo(index, 0.2);
    };
    ShopView.prototype.onUIClicked = function (event, c) {
        AudioMgr_1.default.Instance().playMX("click");
        this.node.active = false;
    };
    ShopView.prototype.onListRender = function (item, idx) {
        item.getComponent(ShopItem_1.default).setShopItemData(this.list[idx]);
    };
    var ShopView_1;
    ShopView._instance = null;
    ShopView = ShopView_1 = __decorate([
        ccclass
    ], ShopView);
    return ShopView;
}(BaseUI_1.default));
exports.default = ShopView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvU2hvcFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLDRDQUF1QztBQUN2QyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsb0NBQXlDO0FBQ3pDLDBDQUFxQztBQUNyQyx1Q0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQU07SUFBNUM7UUFBQSxxRUFtREM7UUFsQ0csVUFBSSxHQUFHLElBQUksQ0FBQzs7SUFrQ2hCLENBQUM7aUJBbkRvQixRQUFRO0lBSWxCLGFBQUksR0FBWDtRQUVJLElBQUcsQ0FBQyxVQUFRLENBQUMsU0FBUyxFQUN0QjtZQUNJLGVBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtTQUNyQzthQUVEO1lBQ0ksVUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLFVBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFVBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztJQUdELHdCQUFLLEdBQUw7UUFBQSxpQkFZQztRQVhHLGtCQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxVQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBWSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEVBQUMsVUFBQyxHQUFPLEVBQUMsTUFBYTtZQUNwRCxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEYsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsU0FBUyxFQUFDO1lBQzlCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBWSxDQUFDO1FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLG1CQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBQVksS0FBSyxFQUFDLENBQUM7UUFFZixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxJQUFhLEVBQUUsR0FBVztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O0lBL0NjLGtCQUFTLEdBQVcsSUFBSSxDQUFDO0lBSHZCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRDVCO0lBQUQsZUFBQztDQW5ERCxBQW1EQyxDQW5EcUMsZ0JBQU0sR0FtRDNDO2tCQW5Eb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0xpc3RcIjtcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvV3hDZW50ZXJcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7IENvbmZpZ19jaGljayB9IGZyb20gXCIuLi9Db25maWdcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL0dhbWVDb25zdFwiO1xuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFZpZXcgZXh0ZW5kcyBCYXNlVUl7XG5cblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpjYy5Ob2RlID0gbnVsbDtcbiAgICBzdGF0aWMgc2hvdygpXG4gICAge1xuICAgICAgICBpZighU2hvcFZpZXcuX2luc3RhbmNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9TaG9wTGF5ZXJcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIFNob3BWaWV3Ll9pbnN0YW5jZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgU2hvcFZpZXcuX2luc3RhbmNlLmdldENvbXBvbmVudChTaG9wVmlldykucmVMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0ID0gbnVsbDtcbiAgICBzdGFydCAoKSB7XG4gICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnU2hvcFNob3cnLCdzaG93Jyk7XG4gICAgICAgIFNob3BWaWV3Ll9pbnN0YW5jZSA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5saXN0ID0gQ29uZmlnX2NoaWNrXG4gICAgICAgIHRoaXMucmVMb2FkKCk7XG4gICAgICAgIHRoaXMucmlnZXN0ZXIoR2FtZUNvbnN0LkJVWV9DSElDSywoZ3VuOmFueSxsaXN0aWQ6bnVtYmVyKT0+e1xuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiU2Nyb2xsVmlld1wiKS5nZXRDb21wb25lbnQoTGlzdCkudXBkYXRlQXBwb2ludGVkKGxpc3RpZCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5yaWdlc3RlcihHYW1lQ29uc3QuTkVXX0NISUNLLCgpPT57XG4gICAgICAgICAgICB0aGlzLnJlTG9hZCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlTG9hZCgpXG4gICAge1xuICAgICAgICB0aGlzLmxpc3QgPSBDb25maWdfY2hpY2s7XG4gICAgICAgIGxldCBzdmlldyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIlNjcm9sbFZpZXdcIik7XG4gICAgICAgIGxldCBsaXN0ID0gc3ZpZXcuZ2V0Q29tcG9uZW50KExpc3QpO1xuICAgICAgICBsaXN0Lm51bUl0ZW1zID0gdGhpcy5saXN0Lmxlbmd0aDtcbiAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5tYXgoMCxDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDUpO1xuICAgICAgICBsaXN0LnNjcm9sbFRvKGluZGV4LDAuMik7XG4gICAgfVxuXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsYylcbiAgICB7XG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgb25MaXN0UmVuZGVyKGl0ZW06IGNjLk5vZGUsIGlkeDogbnVtYmVyKSB7XG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFNob3BJdGVtKS5zZXRTaG9wSXRlbURhdGEodGhpcy5saXN0W2lkeF0pO1xuICAgIH1cbn1cbiJdfQ==