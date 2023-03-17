
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
                if (window && window['xxxxx'])
                    window['xxxxx']("jJY");
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
        if (window && window['xxxxx'])
            window['xxxxx']("jJYertsdsgs");
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
        this.dsaers_ew984399_func();
    };
    GroundItem.prototype.dsaers_ew984399_func = function () { if (window && window['xxxxx'])
        window['xxxxx']("gdsaewdcfgs"); };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxHcm91bmRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxrREFBNkM7QUFDN0MsbUNBQXlDO0FBTW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBaUZDO1FBcEJXLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBb0J0QixDQUFDO21CQWpGb0IsVUFBVTtJQUVwQixzQkFBVyxHQUFsQjtRQUVJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQ3hCO1lBQ0ksSUFBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMvQjtnQkFDSSxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckQsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDWixNQUFNO2FBQ1Q7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsdUNBQXVDO1FBQ3ZDLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsSUFBSTtRQUNKLDBDQUEwQztRQUMxQyxjQUFjO1FBQ2QsSUFBSTtRQUVKLG9DQUFvQztRQUNwQyxnQkFBZ0I7UUFDaEIsSUFBSTtRQUNKLGtEQUFrRDtRQUNsRCxRQUFRO1FBQ1IsaUNBQWlDO1FBQ2pDLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsSUFBSTtRQUNKLE9BQU87UUFDUCxJQUFJO1FBQ0osaURBQWlEO1FBQ2pELFFBQVE7UUFDUixpQ0FBaUM7UUFDakMsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixJQUFJO1FBRUosZ0NBQWdDO1FBQ2hDLGdCQUFnQjtRQUNoQixJQUFJO1FBQ0osK0NBQStDO1FBQy9DLElBQUk7UUFDSixPQUFPO1FBQ1AsSUFBSTtRQUNKLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2YsOENBQThDO1FBQzlDLDZCQUE2QjtRQUM3QixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFHRCw2QkFBUSxHQUFSLFVBQVMsQ0FBQztRQUVOLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLFlBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxJQUFFLE9BQU8sSUFBSSxPQUFPLElBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdkYseURBQXlEO1FBQ3pELGdEQUFnRDtRQUNoRCxJQUFJLElBQUksR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksR0FBRyxHQUFPLHNCQUFhLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBRyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTyx5Q0FBb0IsR0FBNUIsY0FBK0IsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBLENBQUM7O0lBaEY1RSxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBaUY5QjtJQUFELGlCQUFDO0NBakZELEFBaUZDLENBakZ1QyxnQkFBTSxHQWlGN0M7a0JBakZvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi9mcmFtd29yay9CYXNlVUknO1xyXG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gJy4uL21hbmFnZXIvQ2hpY2tEYXRhJztcclxuaW1wb3J0IHsgQ29uZmlnX2dyb3VuZCB9IGZyb20gJy4vQ29uZmlnJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IE1zZ1RvYXN0IGZyb20gJy4uL2ZyYW13b3JrL01zZ1RvYXN0JztcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tICcuL0dhbWVDb25zdCc7XHJcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSAnLi9IYWxsU2NlbmUnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmRJdGVtIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0TmVlZE9wZW4oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjdXJvcGVuID0gLTFcclxuICAgICAgICBmb3IodmFyIGkgPSAxO2kgPCAxMjsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5zbG90c1tpXSA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJqSllcIik7XHJcbiAgICAgICAgICAgICAgICBjdXJvcGVuID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJvcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICAvLyBsZXQgY3Vyb3BlbiA9IFNsb3RJdGVtLmdldEN1ck9wZW4oKTtcclxuICAgICAgICAvLyBpZihjdXJvcGVuID09IC0xKXJldHVybjtcclxuICAgICAgICAvLyBpZih0aGlzLmluZGV4LTEgPiBjdXJvcGVuIClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIE1zZ0hpbnRzLnNob3coXCLpnIDopoHlhYjop6PplIFcIisoY3Vyb3BlbisxKSk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGxldCB0eXBlID0gREJfc2xvdFtjdXJvcGVuXS50eXBlO1xyXG4gICAgICAgIC8vIGlmKHR5cGUgPT0gMClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlmKERhdGEudXNlci5jb2luIDwgREJfc2xvdFtjdXJvcGVuXS5wcmljZSlcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgTXNnSGludHMuc2hvdyhcIumHkeW4geS4jei2s1wiKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVyblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2VcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlmKERhdGEudXNlci5nZW0gPCBEQl9zbG90W2N1cm9wZW5dLnByaWNlKVxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBNc2dIaW50cy5zaG93KFwi6ZK755+z5LiN6LazXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIERhdGEudXNlci5zbG90c1tjdXJvcGVuXSA9IDE7XHJcbiAgICAgICAgLy8gaWYodHlwZSA9PSAwKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgRGF0YS51c2VyLmNvaW4gLT0gREJfc2xvdFtjdXJvcGVuXS5wcmljZVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBEYXRhLnVzZXIuZ2VtIC09IERCX3Nsb3RbY3Vyb3Blbl0ucHJpY2VcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLop6PplIHlnJ/lnLBcIixjdXJvcGVuKVxyXG4gICAgICAgIC8vIE1zZ0hpbnRzLnNob3coXCLmiJDlip/op6PplIHmlrDkvY3nva5cIik7XHJcbiAgICAgICAgLy8gRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5kaXNwYXRjaChHYW1lQ29uc3QuT1BFTl9TTE9ULGN1cm9wZW4pO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0SW5kZXgodGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiakpZZXJ0c2RzZ3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleCA9IDA7XHJcbiAgICBzZXRJbmRleChpKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9pbmRleFwiLGkrXCJcIik7XHJcbiAgICAgICAgbGV0IGN1cm9wZW4gPSBHcm91bmRJdGVtLmdldE5lZWRPcGVuKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMuaW5kZXgtMT49Y3Vyb3BlbiAmJiBjdXJvcGVuICE9LTE7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJmeF9zbG90XCIpLnNldEFuaW1hdGlvbigwLFwiYnV5XCIsdHJ1ZSlcclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zbG90XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpbmZvID0gQ2hpY2tEYXRhLnVzZXIuc2xvdHNbaS0xXTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsb2NrXCIpLmFjdGl2ZSA9IGluZm8gPT0gMDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfaW5kZXhcIikuYWN0aXZlID0gaW5mbyA9PSAwO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29zdFwiKS5hY3RpdmUgPSBpbmZvID09IDA7XHJcbiAgICAgICAgbGV0IHN0ciAgPSBgJHtDb25maWdfZ3JvdW5kW2ktMV0ucHJpY2V95YWzYDtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfb3Blbl9jb3N0XCIsc3RyKTtcclxuICAgICAgICB0aGlzLmRzYWVyc19ldzk4NDM5OV9mdW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkc2FlcnNfZXc5ODQzOTlfZnVuYygpe2lmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImdkc2Fld2RjZmdzXCIpO31cclxufVxyXG4iXX0=