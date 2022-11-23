
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
        MsgHints_1.default.show("成功解锁新位置");
        Data_1.default.save();
        this.dispatch(GameConst_1.default.OPEN_SLOT, curopen);
        this.setIndex(this.index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTbG90SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsd0NBQW1DO0FBQ25DLDJCQUErQjtBQUMvQix3Q0FBbUM7QUFDbkMsaURBQTRDO0FBQzVDLHlDQUFvQztBQUU5QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQWtGQztRQXBCVyxXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQW9CdEIsQ0FBQztpQkFsRm9CLFFBQVE7SUFFbEIsbUJBQVUsR0FBakI7UUFFSSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNoQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUN4QjtZQUNJLElBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMxQjtnQkFDSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLE1BQU07YUFDVDtTQUNKO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFFbkIsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsZUFBZTtRQUMvQixJQUFJLE9BQU8sR0FBRyxVQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEMsSUFBRyxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQUMsT0FBTztRQUN4QixJQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFHLE9BQU8sRUFDekI7WUFDSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUks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Qzs7SUFqRmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrRjVCO0lBQUQsZUFBQztDQWxGRCxBQWtGQyxDQWxGcUMsZ0JBQU0sR0FrRjNDO2tCQWxGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vZnJhbXdvcmsvQmFzZVVJJztcclxuaW1wb3J0IERhdGEgZnJvbSAnLi4vbWFuYWdlci9EYXRhJztcclxuaW1wb3J0IHsgREJfc2xvdCB9IGZyb20gJy4vREInO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xyXG5pbXBvcnQgTXNnSGludHMgZnJvbSAnLi4vZnJhbXdvcmsvTXNnSGludHMnO1xyXG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gJy4vR2FtZUNvbnN0JztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdEl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIHN0YXRpYyBnZXRDdXJPcGVuKClcclxuICAgIHtcclxuICAgICAgICBsZXQgY3Vyb3BlbiA9IC0xXHJcbiAgICAgICAgZm9yKHZhciBpID0gMTtpIDwgMTI7KytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoRGF0YS51c2VyLnNsb3RzW2ldID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGN1cm9wZW4gPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdXJvcGVuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBjdXJvcGVuID0gU2xvdEl0ZW0uZ2V0Q3VyT3BlbigpO1xyXG4gICAgICAgIGlmKGN1cm9wZW4gPT0gLTEpcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMuaW5kZXgtMSA+IGN1cm9wZW4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIumcgOimgeWFiOino+mUgVwiKyhjdXJvcGVuKzEpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHR5cGUgPSBEQl9zbG90W2N1cm9wZW5dLnR5cGU7XHJcbiAgICAgICAgaWYodHlwZSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoRGF0YS51c2VyLmNvaW4gPCBEQl9zbG90W2N1cm9wZW5dLnByaWNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi6YeR5biB5LiN6LazXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoRGF0YS51c2VyLmdlbSA8IERCX3Nsb3RbY3Vyb3Blbl0ucHJpY2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLpkrvnn7PkuI3otrNcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGF0YS51c2VyLnNsb3RzW2N1cm9wZW5dID0gMTtcclxuICAgICAgICBpZih0eXBlID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEYXRhLnVzZXIuY29pbiAtPSBEQl9zbG90W2N1cm9wZW5dLnByaWNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERhdGEudXNlci5nZW0gLT0gREJfc2xvdFtjdXJvcGVuXS5wcmljZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuino+mUgeWcn+WcsFwiLGN1cm9wZW4pXHJcbiAgICAgICAgTXNnSGludHMuc2hvdyhcIuaIkOWKn+ino+mUgeaWsOS9jee9rlwiKTtcclxuICAgICAgICBEYXRhLnNhdmUoKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoKEdhbWVDb25zdC5PUEVOX1NMT1QsY3Vyb3Blbik7XHJcbiAgICAgICAgdGhpcy5zZXRJbmRleCh0aGlzLmluZGV4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleCA9IDA7XHJcbiAgICBzZXRJbmRleChpKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9pbmRleFwiLGkrXCJcIik7XHJcbiAgICAgICAgbGV0IGN1cm9wZW4gPSBTbG90SXRlbS5nZXRDdXJPcGVuKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMuaW5kZXgtMT49Y3Vyb3BlbiAmJiBjdXJvcGVuICE9LTE7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuR2V0U2tlbGV0b24oXCJmeF9zbG90XCIpLnNldEFuaW1hdGlvbigwLFwiYnV5XCIsdHJ1ZSlcclxuICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9zbG90XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpbmZvID0gRGF0YS51c2VyLnNsb3RzW2ktMV07XHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxvY2tcIikuYWN0aXZlID0gaW5mbyA9PSAwO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImxibF9pbmRleFwiKS5hY3RpdmUgPSBpbmZvID09IDA7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb3N0XCIpLmFjdGl2ZSA9IGluZm8gPT0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiMmJ0Y29pblwiKS5hY3RpdmUgPSBEQl9zbG90W2ktMV0udHlwZSA9PSAwO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIjJidGRpYW1vbmRcIikuYWN0aXZlID0gREJfc2xvdFtpLTFdLnR5cGUgPT0gMTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfb3Blbl9jb3N0XCIsVXRpbHMuZm9ybWF0TnVtYmVyKCBEQl9zbG90W2ktMV0ucHJpY2UpKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==