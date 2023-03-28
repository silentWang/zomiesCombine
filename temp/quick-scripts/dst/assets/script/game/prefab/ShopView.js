
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
            if (window && window['xxxxx'])
                window['xxxxx']("r6nwcchDZ6swy");
            Utils_1.default.createUI("prefab/ShopLayer");
        }
        else {
            ShopView_1._instance.active = true;
            ShopView_1._instance.getComponent(ShopView_1).reLoad();
        }
    };
    ShopView.prototype.start = function () {
        var _this = this;
        if (window && window['xxxxx'])
            window['xxxxx']("rasjRJpYskKJp7t5f2mQrN");
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
        if (window && window['xxxxx'])
            window['xxxxx']("3RbyFrh");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvU2hvcFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLDRDQUF1QztBQUN2QyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsb0NBQXlDO0FBQ3pDLDBDQUFxQztBQUNyQyx1Q0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQU07SUFBNUM7UUFBQSxxRUFzREM7UUFwQ0csVUFBSSxHQUFHLElBQUksQ0FBQzs7SUFvQ2hCLENBQUM7aUJBdERvQixRQUFRO0lBSWxCLGFBQUksR0FBWDtRQUVJLElBQUcsQ0FBQyxVQUFRLENBQUMsU0FBUyxFQUN0QjtZQUNJLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9ELGVBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtTQUNyQzthQUVEO1lBQ0ksVUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLFVBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFVBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztJQUdELHdCQUFLLEdBQUw7UUFBQSxpQkFhQztRQVpHLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4RSxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsVUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVksQ0FBQTtRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsU0FBUyxFQUFDLFVBQUMsR0FBTyxFQUFDLE1BQWE7WUFDcEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hGLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBQztZQUM5QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVksQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQUssRUFBQyxDQUFDO1FBRWYsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxJQUFhLEVBQUUsR0FBVztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O0lBbERjLGtCQUFTLEdBQVcsSUFBSSxDQUFDO0lBSHZCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzRDVCO0lBQUQsZUFBQztDQXRERCxBQXNEQyxDQXREcUMsZ0JBQU0sR0FzRDNDO2tCQXREb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0xpc3RcIjtcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvV3hDZW50ZXJcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7IENvbmZpZ19jaGljayB9IGZyb20gXCIuLi9Db25maWdcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL0dhbWVDb25zdFwiO1xuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFZpZXcgZXh0ZW5kcyBCYXNlVUl7XG5cblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpjYy5Ob2RlID0gbnVsbDtcbiAgICBzdGF0aWMgc2hvdygpXG4gICAge1xuICAgICAgICBpZighU2hvcFZpZXcuX2luc3RhbmNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJyNm53Y2NoRFo2c3d5XCIpO1xuICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2hvcExheWVyXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBTaG9wVmlldy5faW5zdGFuY2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIFNob3BWaWV3Ll9pbnN0YW5jZS5nZXRDb21wb25lbnQoU2hvcFZpZXcpLnJlTG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdCA9IG51bGw7XG4gICAgc3RhcnQgKCkge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJyYXNqUkpwWXNrS0pwN3Q1ZjJtUXJOXCIpO1xuICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1Nob3BTaG93Jywnc2hvdycpO1xuICAgICAgICBTaG9wVmlldy5faW5zdGFuY2UgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMubGlzdCA9IENvbmZpZ19jaGlja1xuICAgICAgICB0aGlzLnJlTG9hZCgpO1xuICAgICAgICB0aGlzLnJpZ2VzdGVyKEdhbWVDb25zdC5CVVlfQ0hJQ0ssKGd1bjphbnksbGlzdGlkOm51bWJlcik9PntcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIlNjcm9sbFZpZXdcIikuZ2V0Q29tcG9uZW50KExpc3QpLnVwZGF0ZUFwcG9pbnRlZChsaXN0aWQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucmlnZXN0ZXIoR2FtZUNvbnN0Lk5FV19DSElDSywoKT0+e1xuICAgICAgICAgICAgdGhpcy5yZUxvYWQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZUxvYWQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0ID0gQ29uZmlnX2NoaWNrO1xuICAgICAgICBsZXQgc3ZpZXcgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJTY3JvbGxWaWV3XCIpO1xuICAgICAgICBsZXQgbGlzdCA9IHN2aWV3LmdldENvbXBvbmVudChMaXN0KTtcbiAgICAgICAgbGlzdC5udW1JdGVtcyA9IHRoaXMubGlzdC5sZW5ndGg7XG4gICAgICAgIHZhciBpbmRleCA9IE1hdGgubWF4KDAsQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSA1KTtcbiAgICAgICAgbGlzdC5zY3JvbGxUbyhpbmRleCwwLjIpO1xuICAgIH1cblxuICAgIG9uVUlDbGlja2VkKGV2ZW50LGMpXG4gICAge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIzUmJ5RnJoXCIpO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIG9uTGlzdFJlbmRlcihpdGVtOiBjYy5Ob2RlLCBpZHg6IG51bWJlcikge1xuICAgICAgICBpdGVtLmdldENvbXBvbmVudChTaG9wSXRlbSkuc2V0U2hvcEl0ZW1EYXRhKHRoaXMubGlzdFtpZHhdKTtcbiAgICB9XG59XG4iXX0=