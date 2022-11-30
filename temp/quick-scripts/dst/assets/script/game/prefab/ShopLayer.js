
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
var WxCenter_1 = require("../../manager/WxCenter");
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
        WxCenter_1.default.aldReport('ShopShow', 'show');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNob3BMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsNENBQXVDO0FBQ3ZDLDJDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLDJDQUFzQztBQUN0Qyw0QkFBaUM7QUFDakMsMENBQXFDO0FBQ3JDLHVDQUFrQztBQUk1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQWlEQztRQWhDRyxVQUFJLEdBQUcsSUFBSSxDQUFDOztJQWdDaEIsQ0FBQztrQkFqRG9CLFNBQVM7SUFJbkIsY0FBSSxHQUFYO1FBRUksSUFBRyxDQUFDLFdBQVMsQ0FBQyxTQUFTLEVBQ3ZCO1lBQ0ksZUFBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1NBQ3JDO2FBRUQ7WUFDSSxXQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEMsV0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsV0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEQ7SUFDTCxDQUFDO0lBR0QseUJBQUssR0FBTDtRQUFBLGlCQVlDO1FBWEcsa0JBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLFdBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQVEsQ0FBQTtRQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsU0FBUyxFQUFDLFVBQUMsR0FBTyxFQUFDLE1BQWE7WUFDcEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hGLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBQztZQUM5QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBUSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxLQUFLLEVBQUMsQ0FBQztRQUVoQixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxJQUFhLEVBQUUsR0FBVztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7O0lBN0NjLG1CQUFTLEdBQVcsSUFBSSxDQUFDO0lBSHZCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FpRDdCO0lBQUQsZ0JBQUM7Q0FqREQsQUFpREMsQ0FqRHNDLGdCQUFNLEdBaUQ1QztrQkFqRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0xpc3RcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvRGF0YVwiO1xyXG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvV3hDZW50ZXJcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IERCX3BsYW50IH0gZnJvbSBcIi4uL0RCXCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL0dhbWVDb25zdFwiO1xyXG5pbXBvcnQgU2hvcEl0ZW0gZnJvbSBcIi4vU2hvcEl0ZW1cIjtcclxuXHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wTGF5ZXIgZXh0ZW5kcyBCYXNlVUl7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpjYy5Ob2RlID0gbnVsbDtcclxuICAgIHN0YXRpYyBzaG93KClcclxuICAgIHtcclxuICAgICAgICBpZighU2hvcExheWVyLl9pbnN0YW5jZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1Nob3BMYXllclwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTaG9wTGF5ZXIuX2luc3RhbmNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFNob3BMYXllci5faW5zdGFuY2UuZ2V0Q29tcG9uZW50KFNob3BMYXllcikucmVMb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3QgPSBudWxsO1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnU2hvcFNob3cnLCdzaG93Jyk7XHJcbiAgICAgICAgU2hvcExheWVyLl9pbnN0YW5jZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmxpc3QgPSBEQl9wbGFudFxyXG4gICAgICAgIHRoaXMucmVMb2FkKCk7XHJcbiAgICAgICAgdGhpcy5yaWdlc3RlcihHYW1lQ29uc3QuQlVZX1BMQU5ULChndW46YW55LGxpc3RpZDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIlNjcm9sbFZpZXdcIikuZ2V0Q29tcG9uZW50KExpc3QpLnVwZGF0ZUFwcG9pbnRlZChsaXN0aWQpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMucmlnZXN0ZXIoR2FtZUNvbnN0Lk5FV19QTEFOVCwoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlTG9hZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVMb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBEQl9wbGFudDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJTY3JvbGxWaWV3XCIpLmdldENvbXBvbmVudChMaXN0KS5udW1JdGVtcyA9IHRoaXMubGlzdC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5tYXgoMCxEYXRhLnVzZXIuR2V0TWF4THYoKSAtIDUpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIlNjcm9sbFZpZXdcIikuZ2V0Q29tcG9uZW50KExpc3QpLnNjcm9sbFRvKGluZGV4LDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LGMpXHJcbiAgICB7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkxpc3RSZW5kZXIoaXRlbTogY2MuTm9kZSwgaWR4OiBudW1iZXIpIHtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChTaG9wSXRlbSkuc2V0SXRlbURhdGEodGhpcy5saXN0W2lkeF0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==