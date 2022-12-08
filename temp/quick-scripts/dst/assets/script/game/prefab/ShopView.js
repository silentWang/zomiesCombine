
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
        var index = Math.max(0, ChickData_1.default.user.GetMaxLv() - 5);
        list.scrollTo(index, 0.2);
    };
    ShopView.prototype.onBtnClicked = function (event, c) {
        AudioMgr_1.default.Instance().playSFX("click");
        this.node.active = false;
    };
    ShopView.prototype.onListRender = function (item, idx) {
        item.getComponent(ShopItem_1.default).setItemData(this.list[idx]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyw0Q0FBdUM7QUFDdkMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLG9DQUF5QztBQUN6QywwQ0FBcUM7QUFDckMsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBbURDO1FBbENHLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBa0NoQixDQUFDO2lCQW5Eb0IsUUFBUTtJQUlsQixhQUFJLEdBQVg7UUFFSSxJQUFHLENBQUMsVUFBUSxDQUFDLFNBQVMsRUFDdEI7WUFDSSxlQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDckM7YUFFRDtZQUNJLFVBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxVQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFHRCx3QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFYRyxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsVUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVksQ0FBQTtRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsU0FBUyxFQUFDLFVBQUMsR0FBTyxFQUFDLE1BQWE7WUFDcEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hGLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBQztZQUM5QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVksQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLEtBQUssRUFBQyxDQUFDO1FBRWhCLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLElBQWEsRUFBRSxHQUFXO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7SUEvQ2Msa0JBQVMsR0FBVyxJQUFJLENBQUM7SUFIdkIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1ENUI7SUFBRCxlQUFDO0NBbkRELEFBbURDLENBbkRxQyxnQkFBTSxHQW1EM0M7a0JBbkRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi8uLi9mcmFtd29yay9MaXN0XCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnX2NoaWNrIH0gZnJvbSBcIi4uL0NvbmZpZ1wiO1xyXG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9HYW1lQ29uc3RcIjtcclxuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BWaWV3IGV4dGVuZHMgQmFzZVVJe1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICBzdGF0aWMgc2hvdygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIVNob3BWaWV3Ll9pbnN0YW5jZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1Nob3BMYXllclwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTaG9wVmlldy5faW5zdGFuY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgU2hvcFZpZXcuX2luc3RhbmNlLmdldENvbXBvbmVudChTaG9wVmlldykucmVMb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3QgPSBudWxsO1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnU2hvcFNob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgU2hvcFZpZXcuX2luc3RhbmNlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IENvbmZpZ19jaGlja1xyXG4gICAgICAgIHRoaXMucmVMb2FkKCk7XHJcbiAgICAgICAgdGhpcy5yaWdlc3RlcihHYW1lQ29uc3QuQlVZX0NISUNLLChndW46YW55LGxpc3RpZDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIlNjcm9sbFZpZXdcIikuZ2V0Q29tcG9uZW50KExpc3QpLnVwZGF0ZUFwcG9pbnRlZChsaXN0aWQpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMucmlnZXN0ZXIoR2FtZUNvbnN0Lk5FV19DSElDSywoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlTG9hZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVMb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBDb25maWdfY2hpY2s7XHJcbiAgICAgICAgbGV0IHN2aWV3ID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiU2Nyb2xsVmlld1wiKTtcclxuICAgICAgICBsZXQgbGlzdCA9IHN2aWV3LmdldENvbXBvbmVudChMaXN0KTtcclxuICAgICAgICBsaXN0Lm51bUl0ZW1zID0gdGhpcy5saXN0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgaW5kZXggPSBNYXRoLm1heCgwLENoaWNrRGF0YS51c2VyLkdldE1heEx2KCkgLSA1KTtcclxuICAgICAgICBsaXN0LnNjcm9sbFRvKGluZGV4LDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LGMpXHJcbiAgICB7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkxpc3RSZW5kZXIoaXRlbTogY2MuTm9kZSwgaWR4OiBudW1iZXIpIHtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChTaG9wSXRlbSkuc2V0SXRlbURhdGEodGhpcy5saXN0W2lkeF0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==