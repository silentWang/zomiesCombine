
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9Hcm91bmRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxrREFBNkM7QUFDN0MsbUNBQXlDO0FBTW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBaUZDO1FBcEJXLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBb0J0QixDQUFDO21CQWpGb0IsVUFBVTtJQUVwQixzQkFBVyxHQUFsQjtRQUVJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQ3hCO1lBQ0ksSUFBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMvQjtnQkFDSSxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckQsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDWixNQUFNO2FBQ1Q7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsdUNBQXVDO1FBQ3ZDLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsSUFBSTtRQUNKLDBDQUEwQztRQUMxQyxjQUFjO1FBQ2QsSUFBSTtRQUVKLG9DQUFvQztRQUNwQyxnQkFBZ0I7UUFDaEIsSUFBSTtRQUNKLGtEQUFrRDtRQUNsRCxRQUFRO1FBQ1IsaUNBQWlDO1FBQ2pDLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsSUFBSTtRQUNKLE9BQU87UUFDUCxJQUFJO1FBQ0osaURBQWlEO1FBQ2pELFFBQVE7UUFDUixpQ0FBaUM7UUFDakMsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixJQUFJO1FBRUosZ0NBQWdDO1FBQ2hDLGdCQUFnQjtRQUNoQixJQUFJO1FBQ0osK0NBQStDO1FBQy9DLElBQUk7UUFDSixPQUFPO1FBQ1AsSUFBSTtRQUNKLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2YsOENBQThDO1FBQzlDLDZCQUE2QjtRQUM3QixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFHRCw2QkFBUSxHQUFSLFVBQVMsQ0FBQztRQUVOLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLFlBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxJQUFFLE9BQU8sSUFBSSxPQUFPLElBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdkYseURBQXlEO1FBQ3pELGdEQUFnRDtRQUNoRCxJQUFJLElBQUksR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksR0FBRyxHQUFPLHNCQUFhLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBRyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTyx5Q0FBb0IsR0FBNUIsY0FBK0IsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBLENBQUM7O0lBaEY1RSxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBaUY5QjtJQUFELGlCQUFDO0NBakZELEFBaUZDLENBakZ1QyxnQkFBTSxHQWlGN0M7a0JBakZvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi9mcmFtd29yay9CYXNlVUknO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tICcuLi9tYW5hZ2VyL0NoaWNrRGF0YSc7XG5pbXBvcnQgeyBDb25maWdfZ3JvdW5kIH0gZnJvbSAnLi9Db25maWcnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcbmltcG9ydCBNc2dUb2FzdCBmcm9tICcuLi9mcmFtd29yay9Nc2dUb2FzdCc7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gJy4vR2FtZUNvbnN0JztcbmltcG9ydCBIYWxsU2NlbmUgZnJvbSAnLi9IYWxsU2NlbmUnO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZEl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xuXG4gICAgc3RhdGljIGdldE5lZWRPcGVuKClcbiAgICB7XG4gICAgICAgIGxldCBjdXJvcGVuID0gLTFcbiAgICAgICAgZm9yKHZhciBpID0gMTtpIDwgMTI7KytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5zbG90c1tpXSA9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImpKWVwiKTtcbiAgICAgICAgICAgICAgICBjdXJvcGVuID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3Vyb3BlbjtcbiAgICB9XG5cbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIC8vIGxldCBjdXJvcGVuID0gU2xvdEl0ZW0uZ2V0Q3VyT3BlbigpO1xuICAgICAgICAvLyBpZihjdXJvcGVuID09IC0xKXJldHVybjtcbiAgICAgICAgLy8gaWYodGhpcy5pbmRleC0xID4gY3Vyb3BlbiApXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIE1zZ0hpbnRzLnNob3coXCLpnIDopoHlhYjop6PplIFcIisoY3Vyb3BlbisxKSk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBsZXQgdHlwZSA9IERCX3Nsb3RbY3Vyb3Blbl0udHlwZTtcbiAgICAgICAgLy8gaWYodHlwZSA9PSAwKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBpZihEYXRhLnVzZXIuY29pbiA8IERCX3Nsb3RbY3Vyb3Blbl0ucHJpY2UpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgTXNnSGludHMuc2hvdyhcIumHkeW4geS4jei2s1wiKTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGlmKERhdGEudXNlci5nZW0gPCBEQl9zbG90W2N1cm9wZW5dLnByaWNlKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLpkrvnn7PkuI3otrNcIik7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBEYXRhLnVzZXIuc2xvdHNbY3Vyb3Blbl0gPSAxO1xuICAgICAgICAvLyBpZih0eXBlID09IDApXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIERhdGEudXNlci5jb2luIC09IERCX3Nsb3RbY3Vyb3Blbl0ucHJpY2VcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIERhdGEudXNlci5nZW0gLT0gREJfc2xvdFtjdXJvcGVuXS5wcmljZVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6Kej6ZSB5Zyf5ZywXCIsY3Vyb3BlbilcbiAgICAgICAgLy8gTXNnSGludHMuc2hvdyhcIuaIkOWKn+ino+mUgeaWsOS9jee9rlwiKTtcbiAgICAgICAgLy8gRGF0YS5zYXZlKCk7XG4gICAgICAgIC8vIHRoaXMuZGlzcGF0Y2goR2FtZUNvbnN0Lk9QRU5fU0xPVCxjdXJvcGVuKTtcbiAgICAgICAgLy8gdGhpcy5zZXRJbmRleCh0aGlzLmluZGV4KTtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiakpZZXJ0c2RzZ3NcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbmRleCA9IDA7XG4gICAgc2V0SW5kZXgoaSlcbiAgICB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpO1xuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfaW5kZXhcIixpK1wiXCIpO1xuICAgICAgICBsZXQgY3Vyb3BlbiA9IEdyb3VuZEl0ZW0uZ2V0TmVlZE9wZW4oKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMuaW5kZXgtMT49Y3Vyb3BlbiAmJiBjdXJvcGVuICE9LTE7XG5cbiAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcImZ4X3Nsb3RcIikuc2V0QW5pbWF0aW9uKDAsXCJidXlcIix0cnVlKVxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zbG90XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgaW5mbyA9IENoaWNrRGF0YS51c2VyLnNsb3RzW2ktMV07XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxvY2tcIikuYWN0aXZlID0gaW5mbyA9PSAwO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsYmxfaW5kZXhcIikuYWN0aXZlID0gaW5mbyA9PSAwO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2Nvc3RcIikuYWN0aXZlID0gaW5mbyA9PSAwO1xuICAgICAgICBsZXQgc3RyICA9IGAke0NvbmZpZ19ncm91bmRbaS0xXS5wcmljZX3lhbNgO1xuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfb3Blbl9jb3N0XCIsc3RyKTtcbiAgICAgICAgdGhpcy5kc2FlcnNfZXc5ODQzOTlfZnVuYygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHNhZXJzX2V3OTg0Mzk5X2Z1bmMoKXtpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJnZHNhZXdkY2Znc1wiKTt9XG59XG4iXX0=