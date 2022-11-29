
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/SlotItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        var str = DB_1.DB_slot[i - 1].price + "\u5173";
        this.SetText("lbl_open_cost", str);
    };
    var SlotItem_1;
    SlotItem = SlotItem_1 = __decorate([
        ccclass
    ], SlotItem);
    return SlotItem;
}(BaseUI_1.default));
exports.default = SlotItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTbG90SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsd0NBQW1DO0FBQ25DLDJCQUErQjtBQU16QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQTZFQztRQWpCVyxXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQWlCdEIsQ0FBQztpQkE3RW9CLFFBQVE7SUFFbEIsbUJBQVUsR0FBakI7UUFFSSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNoQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUN4QjtZQUNJLElBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMxQjtnQkFDSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLE1BQU07YUFDVDtTQUNKO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsZUFBZTtRQUMvQix1Q0FBdUM7UUFDdkMsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QixJQUFJO1FBQ0osMENBQTBDO1FBQzFDLGNBQWM7UUFDZCxJQUFJO1FBRUosb0NBQW9DO1FBQ3BDLGdCQUFnQjtRQUNoQixJQUFJO1FBQ0osa0RBQWtEO1FBQ2xELFFBQVE7UUFDUixpQ0FBaUM7UUFDakMsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixJQUFJO1FBQ0osT0FBTztRQUNQLElBQUk7UUFDSixpREFBaUQ7UUFDakQsUUFBUTtRQUNSLGlDQUFpQztRQUNqQyxpQkFBaUI7UUFDakIsUUFBUTtRQUNSLElBQUk7UUFFSixnQ0FBZ0M7UUFDaEMsZ0JBQWdCO1FBQ2hCLElBQUk7UUFDSiwrQ0FBK0M7UUFDL0MsSUFBSTtRQUNKLE9BQU87UUFDUCxJQUFJO1FBQ0osOENBQThDO1FBQzlDLElBQUk7UUFDSiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLGVBQWU7UUFDZiw4Q0FBOEM7UUFDOUMsNkJBQTZCO0lBQ2pDLENBQUM7SUFJRCwyQkFBUSxHQUFSLFVBQVMsQ0FBQztRQUVOLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLFVBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxJQUFFLE9BQU8sSUFBSSxPQUFPLElBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdkYseURBQXlEO1FBQ3pELGdEQUFnRDtRQUNoRCxJQUFJLElBQUksR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxHQUFHLEdBQU8sWUFBTyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOztJQTVFZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZFNUI7SUFBRCxlQUFDO0NBN0VELEFBNkVDLENBN0VxQyxnQkFBTSxHQTZFM0M7a0JBN0VvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi9mcmFtd29yay9CYXNlVUknO1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuLi9tYW5hZ2VyL0RhdGEnO1xyXG5pbXBvcnQgeyBEQl9zbG90IH0gZnJvbSAnLi9EQic7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XHJcbmltcG9ydCBNc2dIaW50cyBmcm9tICcuLi9mcmFtd29yay9Nc2dIaW50cyc7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSAnLi9HYW1lQ29uc3QnO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gJy4vSGFsbFNjZW5lJztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdEl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIHN0YXRpYyBnZXRDdXJPcGVuKClcclxuICAgIHtcclxuICAgICAgICBsZXQgY3Vyb3BlbiA9IC0xXHJcbiAgICAgICAgZm9yKHZhciBpID0gMTtpIDwgMTI7KytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoRGF0YS51c2VyLnNsb3RzW2ldID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGN1cm9wZW4gPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cm9wZW47XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICAvLyBsZXQgY3Vyb3BlbiA9IFNsb3RJdGVtLmdldEN1ck9wZW4oKTtcclxuICAgICAgICAvLyBpZihjdXJvcGVuID09IC0xKXJldHVybjtcclxuICAgICAgICAvLyBpZih0aGlzLmluZGV4LTEgPiBjdXJvcGVuIClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIE1zZ0hpbnRzLnNob3coXCLpnIDopoHlhYjop6PplIFcIisoY3Vyb3BlbisxKSk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGxldCB0eXBlID0gREJfc2xvdFtjdXJvcGVuXS50eXBlO1xyXG4gICAgICAgIC8vIGlmKHR5cGUgPT0gMClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlmKERhdGEudXNlci5jb2luIDwgREJfc2xvdFtjdXJvcGVuXS5wcmljZSlcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgTXNnSGludHMuc2hvdyhcIumHkeW4geS4jei2s1wiKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVyblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2VcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlmKERhdGEudXNlci5nZW0gPCBEQl9zbG90W2N1cm9wZW5dLnByaWNlKVxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBNc2dIaW50cy5zaG93KFwi6ZK755+z5LiN6LazXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIERhdGEudXNlci5zbG90c1tjdXJvcGVuXSA9IDE7XHJcbiAgICAgICAgLy8gaWYodHlwZSA9PSAwKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgRGF0YS51c2VyLmNvaW4gLT0gREJfc2xvdFtjdXJvcGVuXS5wcmljZVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZ2VtIC09IERCX3Nsb3RbY3Vyb3Blbl0ucHJpY2VcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLop6PplIHlnJ/lnLBcIixjdXJvcGVuKVxyXG4gICAgICAgIC8vIE1zZ0hpbnRzLnNob3coXCLmiJDlip/op6PplIHmlrDkvY3nva5cIik7XHJcbiAgICAgICAgLy8gRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5kaXNwYXRjaChHYW1lQ29uc3QuT1BFTl9TTE9ULGN1cm9wZW4pO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0SW5kZXgodGhpcy5pbmRleCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaW5kZXggPSAwO1xyXG4gICAgc2V0SW5kZXgoaSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfaW5kZXhcIixpK1wiXCIpO1xyXG4gICAgICAgIGxldCBjdXJvcGVuID0gU2xvdEl0ZW0uZ2V0Q3VyT3BlbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLmluZGV4LTE+PWN1cm9wZW4gJiYgY3Vyb3BlbiAhPS0xO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwiZnhfc2xvdFwiKS5zZXRBbmltYXRpb24oMCxcImJ1eVwiLHRydWUpXHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc2xvdFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaW5mbyA9IERhdGEudXNlci5zbG90c1tpLTFdO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxvY2tcIikuYWN0aXZlID0gaW5mbyA9PSAwO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9pbmRleFwiKS5hY3RpdmUgPSBpbmZvID09IDA7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb3N0XCIpLmFjdGl2ZSA9IGluZm8gPT0gMDtcclxuICAgICAgICBsZXQgc3RyICA9IGAke0RCX3Nsb3RbaS0xXS5wcmljZX3lhbNgO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9vcGVuX2Nvc3RcIixzdHIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==