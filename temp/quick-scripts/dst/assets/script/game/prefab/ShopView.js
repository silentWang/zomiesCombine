
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyw0Q0FBdUM7QUFDdkMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLG9DQUF5QztBQUN6QywwQ0FBcUM7QUFDckMsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBbURDO1FBbENHLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBa0NoQixDQUFDO2lCQW5Eb0IsUUFBUTtJQUlsQixhQUFJLEdBQVg7UUFFSSxJQUFHLENBQUMsVUFBUSxDQUFDLFNBQVMsRUFDdEI7WUFDSSxlQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDckM7YUFFRDtZQUNJLFVBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxVQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFHRCx3QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFYRyxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsVUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVksQ0FBQTtRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsU0FBUyxFQUFDLFVBQUMsR0FBTyxFQUFDLE1BQWE7WUFDcEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hGLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBQztZQUM5QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVksQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQUssRUFBQyxDQUFDO1FBRWYsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsSUFBYSxFQUFFLEdBQVc7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOztJQS9DYyxrQkFBUyxHQUFXLElBQUksQ0FBQztJQUh2QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUQ1QjtJQUFELGVBQUM7Q0FuREQsQUFtREMsQ0FuRHFDLGdCQUFNLEdBbUQzQztrQkFuRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0xpc3RcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBDb25maWdfY2hpY2sgfSBmcm9tIFwiLi4vQ29uZmlnXCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL0dhbWVDb25zdFwiO1xyXG5pbXBvcnQgU2hvcEl0ZW0gZnJvbSBcIi4vU2hvcEl0ZW1cIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFZpZXcgZXh0ZW5kcyBCYXNlVUl7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpjYy5Ob2RlID0gbnVsbDtcclxuICAgIHN0YXRpYyBzaG93KClcclxuICAgIHtcclxuICAgICAgICBpZighU2hvcFZpZXcuX2luc3RhbmNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2hvcExheWVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNob3BWaWV3Ll9pbnN0YW5jZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBTaG9wVmlldy5faW5zdGFuY2UuZ2V0Q29tcG9uZW50KFNob3BWaWV3KS5yZUxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdCA9IG51bGw7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdTaG9wU2hvdycsJ3Nob3cnKTtcclxuICAgICAgICBTaG9wVmlldy5faW5zdGFuY2UgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gQ29uZmlnX2NoaWNrXHJcbiAgICAgICAgdGhpcy5yZUxvYWQoKTtcclxuICAgICAgICB0aGlzLnJpZ2VzdGVyKEdhbWVDb25zdC5CVVlfQ0hJQ0ssKGd1bjphbnksbGlzdGlkOm51bWJlcik9PntcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiU2Nyb2xsVmlld1wiKS5nZXRDb21wb25lbnQoTGlzdCkudXBkYXRlQXBwb2ludGVkKGxpc3RpZCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5yaWdlc3RlcihHYW1lQ29uc3QuTkVXX0NISUNLLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmVMb2FkKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZUxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IENvbmZpZ19jaGljaztcclxuICAgICAgICBsZXQgc3ZpZXcgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJTY3JvbGxWaWV3XCIpO1xyXG4gICAgICAgIGxldCBsaXN0ID0gc3ZpZXcuZ2V0Q29tcG9uZW50KExpc3QpO1xyXG4gICAgICAgIGxpc3QubnVtSXRlbXMgPSB0aGlzLmxpc3QubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpbmRleCA9IE1hdGgubWF4KDAsQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSA1KTtcclxuICAgICAgICBsaXN0LnNjcm9sbFRvKGluZGV4LDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsYylcclxuICAgIHtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25MaXN0UmVuZGVyKGl0ZW06IGNjLk5vZGUsIGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoU2hvcEl0ZW0pLnNldFNob3BJdGVtRGF0YSh0aGlzLmxpc3RbaWR4XSk7XHJcbiAgICB9XHJcbn1cclxuIl19