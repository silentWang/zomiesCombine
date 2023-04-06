
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/GroundItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '698053mR6RLi5RtkgJOjimr', 'GroundItem');
// script/game/GroundItem.ts

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
var ChickData_1 = require("../manager/ChickData");
var Config_1 = require("./Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GroundItem = /** @class */ (function (_super) {
    __extends(GroundItem, _super);
    function GroundItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        return _this;
    }
    GroundItem_1 = GroundItem;
    GroundItem.getNeedOpen = function () {
        var curopen = -1;
        for (var i = 1; i < 12; ++i) {
            if (ChickData_1.default.user.slots[i] == 0) {
                curopen = i;
                break;
            }
        }
        return curopen;
    };
    GroundItem.prototype.onUIClicked = function (event, customEventData) {
        // let curopen = SlotItem.getCurOpen();
        // if(curopen == -1)return;
        // if(this.index-1 > curopen )
        // {
        //     MsgHints.show("需要先解锁"+(curopen+1));
        //     return;
        // }
        // let type = DB_slot[curopen].type;
        // if(type == 0)
        // {
        //     if(Data.user.coin < DB_slot[curopen].price)
        //     {
        //         MsgHints.show("金币不足");
        //         return
        //     }
        // }
        // else
        // {
        //     if(Data.user.gem < DB_slot[curopen].price)
        //     {
        //         MsgHints.show("钻石不足");
        //         return
        //     }
        // }
        // Data.user.slots[curopen] = 1;
        // if(type == 0)
        // {
        //     Data.user.coin -= DB_slot[curopen].price
        // }
        // else
        // {
        //     Data.user.gem -= DB_slot[curopen].price
        // }
        // console.log("解锁土地",curopen)
        // MsgHints.show("成功解锁新位置");
        // Data.save();
        // this.dispatch(GameConst.OPEN_SLOT,curopen);
        // this.setIndex(this.index);
    };
    GroundItem.prototype.setIndex = function (i) {
        this.index = i;
        this.SetText("lbl_index", i + "");
        var curopen = GroundItem_1.getNeedOpen();
        this.node.getComponent(cc.Button).interactable = this.index - 1 >= curopen && curopen != -1;
        // this.GetSkeleton("fx_slot").setAnimation(0,"buy",true)
        // this.GetGameObject("fx_slot").active = false;
        var info = ChickData_1.default.user.slots[i - 1];
        this.GetGameObject("lock").active = info == 0;
        this.GetGameObject("lbl_index").active = info == 0;
        this.GetGameObject("node_cost").active = info == 0;
        var str = Config_1.Config_ground[i - 1].price + "\u5173";
        this.SetText("lbl_open_cost", str);
    };
    var GroundItem_1;
    GroundItem = GroundItem_1 = __decorate([
        ccclass
    ], GroundItem);
    return GroundItem;
}(BaseUI_1.default));
exports.default = GroundItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9Hcm91bmRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxrREFBNkM7QUFDN0MsbUNBQXlDO0FBTW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBNEVDO1FBakJXLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBaUJ0QixDQUFDO21CQTVFb0IsVUFBVTtJQUVwQixzQkFBVyxHQUFsQjtRQUVJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQ3hCO1lBQ0ksSUFBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMvQjtnQkFDSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLE1BQU07YUFDVDtTQUNKO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsZUFBZTtRQUM5Qix1Q0FBdUM7UUFDdkMsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QixJQUFJO1FBQ0osMENBQTBDO1FBQzFDLGNBQWM7UUFDZCxJQUFJO1FBRUosb0NBQW9DO1FBQ3BDLGdCQUFnQjtRQUNoQixJQUFJO1FBQ0osa0RBQWtEO1FBQ2xELFFBQVE7UUFDUixpQ0FBaUM7UUFDakMsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixJQUFJO1FBQ0osT0FBTztRQUNQLElBQUk7UUFDSixpREFBaUQ7UUFDakQsUUFBUTtRQUNSLGlDQUFpQztRQUNqQyxpQkFBaUI7UUFDakIsUUFBUTtRQUNSLElBQUk7UUFFSixnQ0FBZ0M7UUFDaEMsZ0JBQWdCO1FBQ2hCLElBQUk7UUFDSiwrQ0FBK0M7UUFDL0MsSUFBSTtRQUNKLE9BQU87UUFDUCxJQUFJO1FBQ0osOENBQThDO1FBQzlDLElBQUk7UUFDSiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLGVBQWU7UUFDZiw4Q0FBOEM7UUFDOUMsNkJBQTZCO0lBQ2pDLENBQUM7SUFHRCw2QkFBUSxHQUFSLFVBQVMsQ0FBQztRQUVOLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLFlBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxJQUFFLE9BQU8sSUFBSSxPQUFPLElBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdkYseURBQXlEO1FBQ3pELGdEQUFnRDtRQUNoRCxJQUFJLElBQUksR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksR0FBRyxHQUFPLHNCQUFhLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBRyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O0lBM0VnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNEU5QjtJQUFELGlCQUFDO0NBNUVELEFBNEVDLENBNUV1QyxnQkFBTSxHQTRFN0M7a0JBNUVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi9mcmFtd29yay9CYXNlVUknO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tICcuLi9tYW5hZ2VyL0NoaWNrRGF0YSc7XG5pbXBvcnQgeyBDb25maWdfZ3JvdW5kIH0gZnJvbSAnLi9Db25maWcnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcbmltcG9ydCBNc2dUb2FzdCBmcm9tICcuLi9mcmFtd29yay9Nc2dUb2FzdCc7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gJy4vR2FtZUNvbnN0JztcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSAnLi9IYWxsU2NlbmUnO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZEl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xuXG4gICAgc3RhdGljIGdldE5lZWRPcGVuKClcbiAgICB7XG4gICAgICAgIGxldCBjdXJvcGVuID0gLTFcbiAgICAgICAgZm9yKHZhciBpID0gMTtpIDwgMTI7KytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5zbG90c1tpXSA9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGN1cm9wZW4gPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJvcGVuO1xuICAgIH1cblxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgLy8gbGV0IGN1cm9wZW4gPSBTbG90SXRlbS5nZXRDdXJPcGVuKCk7XG4gICAgICAgIC8vIGlmKGN1cm9wZW4gPT0gLTEpcmV0dXJuO1xuICAgICAgICAvLyBpZih0aGlzLmluZGV4LTEgPiBjdXJvcGVuIClcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgTXNnSGludHMuc2hvdyhcIumcgOimgeWFiOino+mUgVwiKyhjdXJvcGVuKzEpKTtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGxldCB0eXBlID0gREJfc2xvdFtjdXJvcGVuXS50eXBlO1xuICAgICAgICAvLyBpZih0eXBlID09IDApXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGlmKERhdGEudXNlci5jb2luIDwgREJfc2xvdFtjdXJvcGVuXS5wcmljZSlcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBNc2dIaW50cy5zaG93KFwi6YeR5biB5LiN6LazXCIpO1xuICAgICAgICAvLyAgICAgICAgIHJldHVyblxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2VcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgaWYoRGF0YS51c2VyLmdlbSA8IERCX3Nsb3RbY3Vyb3Blbl0ucHJpY2UpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgTXNnSGludHMuc2hvdyhcIumSu+efs+S4jei2s1wiKTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIERhdGEudXNlci5zbG90c1tjdXJvcGVuXSA9IDE7XG4gICAgICAgIC8vIGlmKHR5cGUgPT0gMClcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgRGF0YS51c2VyLmNvaW4gLT0gREJfc2xvdFtjdXJvcGVuXS5wcmljZVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2VcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgRGF0YS51c2VyLmdlbSAtPSBEQl9zbG90W2N1cm9wZW5dLnByaWNlXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLop6PplIHlnJ/lnLBcIixjdXJvcGVuKVxuICAgICAgICAvLyBNc2dIaW50cy5zaG93KFwi5oiQ5Yqf6Kej6ZSB5paw5L2N572uXCIpO1xuICAgICAgICAvLyBEYXRhLnNhdmUoKTtcbiAgICAgICAgLy8gdGhpcy5kaXNwYXRjaChHYW1lQ29uc3QuT1BFTl9TTE9ULGN1cm9wZW4pO1xuICAgICAgICAvLyB0aGlzLnNldEluZGV4KHRoaXMuaW5kZXgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5kZXggPSAwO1xuICAgIHNldEluZGV4KGkpXG4gICAge1xuICAgICAgICB0aGlzLmluZGV4ID0gaTtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2luZGV4XCIsaStcIlwiKTtcbiAgICAgICAgbGV0IGN1cm9wZW4gPSBHcm91bmRJdGVtLmdldE5lZWRPcGVuKCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLmluZGV4LTE+PWN1cm9wZW4gJiYgY3Vyb3BlbiAhPS0xO1xuXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJmeF9zbG90XCIpLnNldEFuaW1hdGlvbigwLFwiYnV5XCIsdHJ1ZSlcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc2xvdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGluZm8gPSBDaGlja0RhdGEudXNlci5zbG90c1tpLTFdO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsb2NrXCIpLmFjdGl2ZSA9IGluZm8gPT0gMDtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2luZGV4XCIpLmFjdGl2ZSA9IGluZm8gPT0gMDtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb3N0XCIpLmFjdGl2ZSA9IGluZm8gPT0gMDtcbiAgICAgICAgbGV0IHN0ciAgPSBgJHtDb25maWdfZ3JvdW5kW2ktMV0ucHJpY2V95YWzYDtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX29wZW5fY29zdFwiLHN0cik7XG4gICAgfVxufVxuIl19