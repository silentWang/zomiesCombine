
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxHcm91bmRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxrREFBNkM7QUFDN0MsbUNBQXlDO0FBTW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBNkVDO1FBakJXLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBaUJ0QixDQUFDO21CQTdFb0IsVUFBVTtJQUVwQixzQkFBVyxHQUFsQjtRQUVJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQ3hCO1lBQ0ksSUFBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMvQjtnQkFDSSxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckQsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDWixNQUFNO2FBQ1Q7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsdUNBQXVDO1FBQ3ZDLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsSUFBSTtRQUNKLDBDQUEwQztRQUMxQyxjQUFjO1FBQ2QsSUFBSTtRQUVKLG9DQUFvQztRQUNwQyxnQkFBZ0I7UUFDaEIsSUFBSTtRQUNKLGtEQUFrRDtRQUNsRCxRQUFRO1FBQ1IsaUNBQWlDO1FBQ2pDLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsSUFBSTtRQUNKLE9BQU87UUFDUCxJQUFJO1FBQ0osaURBQWlEO1FBQ2pELFFBQVE7UUFDUixpQ0FBaUM7UUFDakMsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixJQUFJO1FBRUosZ0NBQWdDO1FBQ2hDLGdCQUFnQjtRQUNoQixJQUFJO1FBQ0osK0NBQStDO1FBQy9DLElBQUk7UUFDSixPQUFPO1FBQ1AsSUFBSTtRQUNKLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2YsOENBQThDO1FBQzlDLDZCQUE2QjtJQUNqQyxDQUFDO0lBR0QsNkJBQVEsR0FBUixVQUFTLENBQUM7UUFFTixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxZQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsSUFBRSxPQUFPLElBQUksT0FBTyxJQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXZGLHlEQUF5RDtRQUN6RCxnREFBZ0Q7UUFDaEQsSUFBSSxJQUFJLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLEdBQUcsR0FBTyxzQkFBYSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQUcsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOztJQTVFZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTZFOUI7SUFBRCxpQkFBQztDQTdFRCxBQTZFQyxDQTdFdUMsZ0JBQU0sR0E2RTdDO2tCQTdFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vZnJhbXdvcmsvQmFzZVVJJztcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tICcuLi9tYW5hZ2VyL0NoaWNrRGF0YSc7XHJcbmltcG9ydCB7IENvbmZpZ19ncm91bmQgfSBmcm9tICcuL0NvbmZpZyc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XHJcbmltcG9ydCBNc2dUb2FzdCBmcm9tICcuLi9mcmFtd29yay9Nc2dUb2FzdCc7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSAnLi9HYW1lQ29uc3QnO1xyXG5pbXBvcnQgSGFsbFNjZW5lIGZyb20gJy4vSGFsbFNjZW5lJztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdW5kSXRlbSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgc3RhdGljIGdldE5lZWRPcGVuKClcclxuICAgIHtcclxuICAgICAgICBsZXQgY3Vyb3BlbiA9IC0xXHJcbiAgICAgICAgZm9yKHZhciBpID0gMTtpIDwgMTI7KytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuc2xvdHNbaV0gPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiakpZXCIpO1xyXG4gICAgICAgICAgICAgICAgY3Vyb3BlbiA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3Vyb3BlbjtcclxuICAgIH1cclxuXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gbGV0IGN1cm9wZW4gPSBTbG90SXRlbS5nZXRDdXJPcGVuKCk7XHJcbiAgICAgICAgLy8gaWYoY3Vyb3BlbiA9PSAtMSlyZXR1cm47XHJcbiAgICAgICAgLy8gaWYodGhpcy5pbmRleC0xID4gY3Vyb3BlbiApXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBNc2dIaW50cy5zaG93KFwi6ZyA6KaB5YWI6Kej6ZSBXCIrKGN1cm9wZW4rMSkpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBsZXQgdHlwZSA9IERCX3Nsb3RbY3Vyb3Blbl0udHlwZTtcclxuICAgICAgICAvLyBpZih0eXBlID09IDApXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBpZihEYXRhLnVzZXIuY29pbiA8IERCX3Nsb3RbY3Vyb3Blbl0ucHJpY2UpXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLph5HluIHkuI3otrNcIik7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBpZihEYXRhLnVzZXIuZ2VtIDwgREJfc2xvdFtjdXJvcGVuXS5wcmljZSlcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgTXNnSGludHMuc2hvdyhcIumSu+efs+S4jei2s1wiKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVyblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBEYXRhLnVzZXIuc2xvdHNbY3Vyb3Blbl0gPSAxO1xyXG4gICAgICAgIC8vIGlmKHR5cGUgPT0gMClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIERhdGEudXNlci5jb2luIC09IERCX3Nsb3RbY3Vyb3Blbl0ucHJpY2VcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgRGF0YS51c2VyLmdlbSAtPSBEQl9zbG90W2N1cm9wZW5dLnByaWNlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6Kej6ZSB5Zyf5ZywXCIsY3Vyb3BlbilcclxuICAgICAgICAvLyBNc2dIaW50cy5zaG93KFwi5oiQ5Yqf6Kej6ZSB5paw5L2N572uXCIpO1xyXG4gICAgICAgIC8vIERhdGEuc2F2ZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuZGlzcGF0Y2goR2FtZUNvbnN0Lk9QRU5fU0xPVCxjdXJvcGVuKTtcclxuICAgICAgICAvLyB0aGlzLnNldEluZGV4KHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXggPSAwO1xyXG4gICAgc2V0SW5kZXgoaSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfaW5kZXhcIixpK1wiXCIpO1xyXG4gICAgICAgIGxldCBjdXJvcGVuID0gR3JvdW5kSXRlbS5nZXROZWVkT3BlbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLmluZGV4LTE+PWN1cm9wZW4gJiYgY3Vyb3BlbiAhPS0xO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkdldFNrZWxldG9uKFwiZnhfc2xvdFwiKS5zZXRBbmltYXRpb24oMCxcImJ1eVwiLHRydWUpXHJcbiAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfc2xvdFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaW5mbyA9IENoaWNrRGF0YS51c2VyLnNsb3RzW2ktMV07XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibG9ja1wiKS5hY3RpdmUgPSBpbmZvID09IDA7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2luZGV4XCIpLmFjdGl2ZSA9IGluZm8gPT0gMDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2Nvc3RcIikuYWN0aXZlID0gaW5mbyA9PSAwO1xyXG4gICAgICAgIGxldCBzdHIgID0gYCR7Q29uZmlnX2dyb3VuZFtpLTFdLnByaWNlfeWFs2A7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX29wZW5fY29zdFwiLHN0cik7XHJcbiAgICB9XHJcbn1cclxuIl19