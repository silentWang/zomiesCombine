
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyw0Q0FBdUM7QUFDdkMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLG9DQUF5QztBQUN6QywwQ0FBcUM7QUFDckMsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBc0RDO1FBcENHLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBb0NoQixDQUFDO2lCQXREb0IsUUFBUTtJQUlsQixhQUFJLEdBQVg7UUFFSSxJQUFHLENBQUMsVUFBUSxDQUFDLFNBQVMsRUFDdEI7WUFDSSxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMvRCxlQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDckM7YUFFRDtZQUNJLFVBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxVQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFHRCx3QkFBSyxHQUFMO1FBQUEsaUJBYUM7UUFaRyxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEUsa0JBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLFVBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFZLENBQUE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBQyxVQUFDLEdBQU8sRUFBQyxNQUFhO1lBQ3BELEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEVBQUM7WUFDOUIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHlCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFZLENBQUM7UUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDhCQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUMsQ0FBQztRQUVmLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsSUFBYSxFQUFFLEdBQVc7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOztJQWxEYyxrQkFBUyxHQUFXLElBQUksQ0FBQztJQUh2QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0Q1QjtJQUFELGVBQUM7Q0F0REQsQUFzREMsQ0F0RHFDLGdCQUFNLEdBc0QzQztrQkF0RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0xpc3RcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBDb25maWdfY2hpY2sgfSBmcm9tIFwiLi4vQ29uZmlnXCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL0dhbWVDb25zdFwiO1xyXG5pbXBvcnQgU2hvcEl0ZW0gZnJvbSBcIi4vU2hvcEl0ZW1cIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFZpZXcgZXh0ZW5kcyBCYXNlVUl7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpjYy5Ob2RlID0gbnVsbDtcclxuICAgIHN0YXRpYyBzaG93KClcclxuICAgIHtcclxuICAgICAgICBpZighU2hvcFZpZXcuX2luc3RhbmNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwicjZud2NjaERaNnN3eVwiKTtcclxuICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2hvcExheWVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNob3BWaWV3Ll9pbnN0YW5jZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBTaG9wVmlldy5faW5zdGFuY2UuZ2V0Q29tcG9uZW50KFNob3BWaWV3KS5yZUxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdCA9IG51bGw7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwicmFzalJKcFlza0tKcDd0NWYybVFyTlwiKTtcclxuICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ1Nob3BTaG93Jywnc2hvdycpO1xyXG4gICAgICAgIFNob3BWaWV3Ll9pbnN0YW5jZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmxpc3QgPSBDb25maWdfY2hpY2tcclxuICAgICAgICB0aGlzLnJlTG9hZCgpO1xyXG4gICAgICAgIHRoaXMucmlnZXN0ZXIoR2FtZUNvbnN0LkJVWV9DSElDSywoZ3VuOmFueSxsaXN0aWQ6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJTY3JvbGxWaWV3XCIpLmdldENvbXBvbmVudChMaXN0KS51cGRhdGVBcHBvaW50ZWQobGlzdGlkKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnJpZ2VzdGVyKEdhbWVDb25zdC5ORVdfQ0hJQ0ssKCk9PntcclxuICAgICAgICAgICAgdGhpcy5yZUxvYWQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gQ29uZmlnX2NoaWNrO1xyXG4gICAgICAgIGxldCBzdmlldyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIlNjcm9sbFZpZXdcIik7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBzdmlldy5nZXRDb21wb25lbnQoTGlzdCk7XHJcbiAgICAgICAgbGlzdC5udW1JdGVtcyA9IHRoaXMubGlzdC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5tYXgoMCxDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDUpO1xyXG4gICAgICAgIGxpc3Quc2Nyb2xsVG8oaW5kZXgsMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCxjKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjNSYnlGcmhcIik7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtOiBjYy5Ob2RlLCBpZHg6IG51bWJlcikge1xyXG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFNob3BJdGVtKS5zZXRTaG9wSXRlbURhdGEodGhpcy5saXN0W2lkeF0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==