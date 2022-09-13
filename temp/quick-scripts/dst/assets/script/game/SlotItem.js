
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
var Utils_1 = require("../utils/Utils");
var MsgHints_1 = require("../framwork/MsgHints");
var GameConst_1 = require("./GameConst");
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
        var curopen = SlotItem_1.getCurOpen();
        if (curopen == -1)
            return;
        if (this.index - 1 > curopen) {
            MsgHints_1.default.show("需要先解锁" + (curopen + 1));
            return;
        }
        var type = DB_1.DB_slot[curopen].type;
        if (type == 0) {
            if (Data_1.default.user.coin < DB_1.DB_slot[curopen].price) {
                MsgHints_1.default.show("金币不足");
                return;
            }
        }
        else {
            if (Data_1.default.user.gem < DB_1.DB_slot[curopen].price) {
                MsgHints_1.default.show("钻石不足");
                return;
            }
        }
        Data_1.default.user.slots[curopen] = 1;
        if (type == 0) {
            Data_1.default.user.coin -= DB_1.DB_slot[curopen].price;
        }
        else {
            Data_1.default.user.gem -= DB_1.DB_slot[curopen].price;
        }
        console.log("解锁土地", curopen);
        Data_1.default.save();
        this.dispatch(GameConst_1.default.OPEN_SLOT, curopen);
        this.setIndex(this.index);
    };
    SlotItem.prototype.setIndex = function (i) {
        this.index = i;
        this.SetText("lbl_index", i + "");
        // console.log(i,Data.user.slots[i])
        var curopen = SlotItem_1.getCurOpen();
        this.node.getComponent(cc.Button).interactable = this.index - 1 >= curopen && curopen != -1;
        // this.GetSkeleton("fx_slot").setAnimation(0,"buy",true)
        // this.GetGameObject("fx_slot").active = false;
        var info = Data_1.default.user.slots[i - 1];
        this.GetGameObject("lock").active = info == 0;
        this.GetGameObject("lbl_index").active = info == 0;
        this.GetGameObject("node_cost").active = info == 0;
        this.GetGameObject("2btcoin").active = DB_1.DB_slot[i - 1].type == 0;
        this.GetGameObject("2btdiamond").active = DB_1.DB_slot[i - 1].type == 1;
        this.SetText("lbl_open_cost", Utils_1.default.formatNumber(DB_1.DB_slot[i - 1].price));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTbG90SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsd0NBQW1DO0FBQ25DLDJCQUErQjtBQUMvQix3Q0FBbUM7QUFDbkMsaURBQTRDO0FBQzVDLHlDQUFvQztBQUU5QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQWtGQztRQXJCVyxXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQXFCdEIsQ0FBQztpQkFsRm9CLFFBQVE7SUFFbEIsbUJBQVUsR0FBakI7UUFFSSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNoQixLQUFJLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUNyQjtZQUNJLElBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMxQjtnQkFDSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLE1BQU07YUFDVDtTQUNKO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFFbkIsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsZUFBZTtRQUMvQixJQUFJLE9BQU8sR0FBRyxVQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEMsSUFBRyxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQUMsT0FBTztRQUN4QixJQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFHLE9BQU8sRUFDekI7WUFDSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUks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YSxRQUFRLENBa0Y1QjtJQUFELGVBQUM7Q0FsRkQsQUFrRkMsQ0FsRnFDLGdCQUFNLEdBa0YzQztrQkFsRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uL2ZyYW13b3JrL0Jhc2VVSSc7XHJcbmltcG9ydCBEYXRhIGZyb20gJy4uL21hbmFnZXIvRGF0YSc7XHJcbmltcG9ydCB7IERCX3Nsb3QgfSBmcm9tICcuL0RCJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IE1zZ0hpbnRzIGZyb20gJy4uL2ZyYW13b3JrL01zZ0hpbnRzJztcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tICcuL0dhbWVDb25zdCc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RJdGVtIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0Q3VyT3BlbigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN1cm9wZW4gPSAtMVxyXG4gICAgICAgIGZvcih2YXIgaT0gMTtpPDEyOysraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKERhdGEudXNlci5zbG90c1tpXSA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdXJvcGVuID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3Vyb3BlbjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBsZXQgY3Vyb3BlbiA9IFNsb3RJdGVtLmdldEN1ck9wZW4oKTtcclxuICAgICAgICBpZihjdXJvcGVuID09IC0xKXJldHVybjtcclxuICAgICAgICBpZih0aGlzLmluZGV4LTEgPiBjdXJvcGVuIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLpnIDopoHlhYjop6PplIFcIisoY3Vyb3BlbisxKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0eXBlID0gREJfc2xvdFtjdXJvcGVuXS50eXBlO1xyXG4gICAgICAgIGlmKHR5cGUgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKERhdGEudXNlci5jb2luIDwgREJfc2xvdFtjdXJvcGVuXS5wcmljZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIumHkeW4geS4jei2s1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKERhdGEudXNlci5nZW0gPCBEQl9zbG90W2N1cm9wZW5dLnByaWNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi6ZK755+z5LiN6LazXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGEudXNlci5zbG90c1tjdXJvcGVuXSA9IDE7XHJcbiAgICAgICAgaWYodHlwZSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRGF0YS51c2VyLmNvaW4gLT0gREJfc2xvdFtjdXJvcGVuXS5wcmljZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEYXRhLnVzZXIuZ2VtIC09IERCX3Nsb3RbY3Vyb3Blbl0ucHJpY2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLop6PplIHlnJ/lnLBcIixjdXJvcGVuKVxyXG4gICAgICAgIERhdGEuc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2goR2FtZUNvbnN0Lk9QRU5fU0xPVCxjdXJvcGVuKTtcclxuICAgICAgICB0aGlzLnNldEluZGV4KHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGluZGV4ID0gMDtcclxuICAgIHNldEluZGV4KGkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGk7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2luZGV4XCIsaStcIlwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpLERhdGEudXNlci5zbG90c1tpXSlcclxuICAgICAgICBsZXQgY3Vyb3BlbiA9IFNsb3RJdGVtLmdldEN1ck9wZW4oKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5pbmRleC0xPj1jdXJvcGVuICYmIGN1cm9wZW4gIT0tMTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5HZXRTa2VsZXRvbihcImZ4X3Nsb3RcIikuc2V0QW5pbWF0aW9uKDAsXCJidXlcIix0cnVlKVxyXG4gICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X3Nsb3RcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGluZm8gPSBEYXRhLnVzZXIuc2xvdHNbaS0xXTtcclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibG9ja1wiKS5hY3RpdmUgPSBpbmZvID09IDA7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibGJsX2luZGV4XCIpLmFjdGl2ZSA9IGluZm8gPT0gMDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2Nvc3RcIikuYWN0aXZlID0gaW5mbyA9PSAwO1xyXG5cclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCIyYnRjb2luXCIpLmFjdGl2ZSA9IERCX3Nsb3RbaS0xXS50eXBlID09IDA7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiMmJ0ZGlhbW9uZFwiKS5hY3RpdmUgPSBEQl9zbG90W2ktMV0udHlwZSA9PSAxO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9vcGVuX2Nvc3RcIixVdGlscy5mb3JtYXROdW1iZXIoIERCX3Nsb3RbaS0xXS5wcmljZSkpXHJcbiAgICB9XHJcbn1cclxuIl19