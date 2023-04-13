
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framwork/ListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66c9a84a69BcLUb4nTwbgy6', 'ListItem');
// script/framwork/ListItem.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder;
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
    SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
})(SelectedType || (SelectedType = {}));
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //图标
        _this.icon = null;
        //标题
        _this.title = null;
        //选择模式
        _this.selectedMode = SelectedType.NONE;
        //被选标志
        _this.selectedFlag = null;
        //被选择的SpriteFrame
        _this.selectedSpriteFrame = null;
        //未被选择的SpriteFrame
        _this._unselectedSpriteFrame = null;
        //选择
        _this._selected = false;
        //是否已经注册过事件
        _this._eventReg = false;
        return _this;
    }
    Object.defineProperty(ListItem.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            if (!this.selectedFlag)
                return;
            switch (this.selectedMode) {
                case SelectedType.TOGGLE:
                    this.selectedFlag.active = val;
                    break;
                case SelectedType.SWITCH:
                    var sp = this.selectedFlag.getComponent(cc.Sprite);
                    if (sp)
                        sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
                    break;
            }
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.onLoad = function () {
        //获取按钮组件，没有的话，selectedFlag无效
        this._btnCom = this.node.getComponent(cc.Button);
        if (!this._btnCom)
            this.selectedMode == SelectedType.NONE;
        //有选择模式时，保存相应的东西
        if (this.selectedMode == SelectedType.SWITCH) {
            var com = this.selectedFlag.getComponent(cc.Sprite);
            this._unselectedSpriteFrame = com.spriteFrame;
        }
    };
    ListItem.prototype._registerEvent = function () {
        if (this._btnCom && this.list.selectedMode > 0 && !this._eventReg) {
            var eh = new cc.Component.EventHandler();
            eh.target = this.node;
            eh.component = 'ListItem';
            eh.handler = 'onClickThis';
            this._btnCom.clickEvents.unshift(eh);
            this._eventReg = true;
        }
    };
    ListItem.prototype.showAni = function (aniType, callFunc, del) {
        var _this = this;
        var acts;
        switch (aniType) {
            case 0: //向上消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, 0, this.node.height * 2),
                ];
                break;
            case 1: //向右消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, this.node.width * 2, 0),
                ];
                break;
            case 2: //向下消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, 0, this.node.height * -2),
                ];
                break;
            case 3: //向左消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, this.node.width * -2, 0),
                ];
                break;
            default: //默认：缩小消失
                acts = [
                    cc.scaleTo(.3, .1),
                ];
                break;
        }
        if (callFunc || del) {
            acts.push(cc.callFunc(function () {
                if (del) {
                    _this.list._delSingleItem(_this.node);
                    for (var n = _this.list.displayData.length - 1; n >= 0; n--) {
                        if (_this.list.displayData[n].id == _this.listId) {
                            _this.list.displayData.splice(n, 1);
                            break;
                        }
                    }
                }
                callFunc();
            }));
        }
        this.node.runAction(cc.sequence(acts));
    };
    ListItem.prototype.onClickThis = function () {
        this.list.selectedId = this.listId;
    };
    __decorate([
        property({ type: cc.Sprite, tooltip: CC_DEV && '图标' })
    ], ListItem.prototype, "icon", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: CC_DEV && '标题' })
    ], ListItem.prototype, "title", void 0);
    __decorate([
        property({
            type: cc.Enum(SelectedType),
            tooltip: CC_DEV && '选择模式'
        })
    ], ListItem.prototype, "selectedMode", void 0);
    __decorate([
        property({
            type: cc.Node, tooltip: CC_DEV && '被选标志',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], ListItem.prototype, "selectedFlag", void 0);
    __decorate([
        property({
            type: cc.SpriteFrame, tooltip: CC_DEV && '被选择的SpriteFrame',
            visible: function () { return this.selectedMode == SelectedType.SWITCH; }
        })
    ], ListItem.prototype, "selectedSpriteFrame", void 0);
    ListItem = __decorate([
        ccclass,
        disallowMultiple(),
        menu('自定义组件/List Item'),
        executionOrder(-5001) //先于List
    ], ListItem);
    return ListItem;
}(cc.Component));
exports.default = ListItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcTGlzdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFnRSxFQUFFLENBQUMsVUFBVSxFQUEzRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxjQUFjLG9CQUFrQixDQUFDO0FBSXBGLElBQUssWUFJSjtBQUpELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0lBQ1YsbURBQVUsQ0FBQTtBQUNkLENBQUMsRUFKSSxZQUFZLEtBQVosWUFBWSxRQUloQjtBQU1EO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUlDO1FBcElHLElBQUk7UUFFSixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLElBQUk7UUFFSixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLE1BQU07UUFLTixrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQy9DLE1BQU07UUFLTixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixpQkFBaUI7UUFLakIseUJBQW1CLEdBQW1CLElBQUksQ0FBQztRQUMzQyxrQkFBa0I7UUFDbEIsNEJBQXNCLEdBQW1CLElBQUksQ0FBQztRQUM5QyxJQUFJO1FBQ0osZUFBUyxHQUFZLEtBQUssQ0FBQztRQXVCM0IsV0FBVztRQUNILGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBaUY5QixDQUFDO0lBeEdHLHNCQUFJLDhCQUFRO2FBZVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQWpCRCxVQUFhLEdBQVk7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUN0QixPQUFPO1lBQ1AsUUFBUSxJQUFJLENBQUMsWUFB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cUk1QjtJQUFELGVBQUM7Q0FySUQsQUFxSUMsQ0FySXFDLEVBQUUsQ0FBQyxTQUFTLEdBcUlqRDtrQkFySW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBkaXNhbGxvd011bHRpcGxlLCBtZW51LCBleGVjdXRpb25PcmRlciB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XHJcblxyXG5lbnVtIFNlbGVjdGVkVHlwZSB7XHJcbiAgICBOT05FID0gMCxcclxuICAgIFRPR0dMRSA9IDEsXHJcbiAgICBTV0lUQ0ggPSAyLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5AZGlzYWxsb3dNdWx0aXBsZSgpXHJcbkBtZW51KCfoh6rlrprkuYnnu4Tku7YvTGlzdCBJdGVtJylcclxuQGV4ZWN1dGlvbk9yZGVyKC01MDAxKS8v5YWI5LqOTGlzdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvL+Wbvuagh1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+WbvuaghycgfSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICAvL+agh+mimFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogQ0NfREVWICYmICfmoIfpopgnIH0pXHJcbiAgICB0aXRsZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+mAieaLqeaooeW8j1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5FbnVtKFNlbGVjdGVkVHlwZSksXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfpgInmi6nmqKHlvI8nXHJcbiAgICB9KVxyXG4gICAgc2VsZWN0ZWRNb2RlOiBTZWxlY3RlZFR5cGUgPSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgIC8v6KKr6YCJ5qCH5b+XXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IENDX0RFViAmJiAn6KKr6YCJ5qCH5b+XJyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPiBTZWxlY3RlZFR5cGUuTk9ORSB9XHJcbiAgICB9KVxyXG4gICAgc2VsZWN0ZWRGbGFnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8v6KKr6YCJ5oup55qEU3ByaXRlRnJhbWVcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHRvb2x0aXA6IENDX0RFViAmJiAn6KKr6YCJ5oup55qEU3ByaXRlRnJhbWUnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU1dJVENIIH1cclxuICAgIH0pXHJcbiAgICBzZWxlY3RlZFNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAvL+acquiiq+mAieaLqeeahFNwcml0ZUZyYW1lXHJcbiAgICBfdW5zZWxlY3RlZFNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAvL+mAieaLqVxyXG4gICAgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZXQgc2VsZWN0ZWQodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWw7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkRmxhZylcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdGVkTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5UT0dHTEU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmxhZy5hY3RpdmUgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuU1dJVENIOlxyXG4gICAgICAgICAgICAgICAgbGV0IHNwOiBjYy5TcHJpdGUgPSB0aGlzLnNlbGVjdGVkRmxhZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcClcclxuICAgICAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHZhbCA/IHRoaXMuc2VsZWN0ZWRTcHJpdGVGcmFtZSA6IHRoaXMuX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBzZWxlY3RlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICAvL+aMiemSrue7hOS7tlxyXG4gICAgcHJpdmF0ZSBfYnRuQ29tOiBhbnk7XHJcbiAgICAvL+S+nei1lueahExpc3Tnu4Tku7ZcclxuICAgIHB1YmxpYyBsaXN0OiBMaXN0O1xyXG4gICAgLy/mmK/lkKblt7Lnu4/ms6jlhozov4fkuovku7ZcclxuICAgIHByaXZhdGUgX2V2ZW50UmVnID0gZmFsc2U7XHJcbiAgICAvL+W6j+WIl2lkXHJcbiAgICBwdWJsaWMgbGlzdElkOiBudW1iZXI7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8v6I635Y+W5oyJ6ZKu57uE5Lu277yM5rKh5pyJ55qE6K+d77yMc2VsZWN0ZWRGbGFn5peg5pWIXHJcbiAgICAgICAgdGhpcy5fYnRuQ29tID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIGlmICghdGhpcy5fYnRuQ29tKVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgICAgICAvL+aciemAieaLqeaooeW8j+aXtu+8jOS/neWtmOebuOW6lOeahOS4nOilv1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU1dJVENIKSB7XHJcbiAgICAgICAgICAgIGxldCBjb206IGNjLlNwcml0ZSA9IHRoaXMuc2VsZWN0ZWRGbGFnLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB0aGlzLl91bnNlbGVjdGVkU3ByaXRlRnJhbWUgPSBjb20uc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9yZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9idG5Db20gJiYgdGhpcy5saXN0LnNlbGVjdGVkTW9kZSA+IDAgJiYgIXRoaXMuX2V2ZW50UmVnKSB7XHJcbiAgICAgICAgICAgIGxldCBlaDogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGVoLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgZWguY29tcG9uZW50ID0gJ0xpc3RJdGVtJztcclxuICAgICAgICAgICAgZWguaGFuZGxlciA9ICdvbkNsaWNrVGhpcyc7XHJcbiAgICAgICAgICAgIHRoaXMuX2J0bkNvbS5jbGlja0V2ZW50cy51bnNoaWZ0KGVoKTtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRSZWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93QW5pKGFuaVR5cGU6IG51bWJlciwgY2FsbEZ1bmM6IEZ1bmN0aW9uLCBkZWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYWN0czogYW55W107XHJcbiAgICAgICAgc3dpdGNoIChhbmlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy/lkJHkuIrmtojlpLFcclxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSguMywgMCwgdGhpcy5ub2RlLmhlaWdodCAqIDIpLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IC8v5ZCR5Y+z5raI5aSxXHJcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIHRoaXMubm9kZS53aWR0aCAqIDIsIDApLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8v5ZCR5LiL5raI5aSxXHJcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIDAsIHRoaXMubm9kZS5oZWlnaHQgKiAtMiksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzogLy/lkJHlt6bmtojlpLFcclxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSguMywgdGhpcy5ub2RlLndpZHRoICogLTIsIDApLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvL+m7mOiupO+8mue8qeWwj+a2iOWksVxyXG4gICAgICAgICAgICAgICAgYWN0cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4zLCAuMSksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsRnVuYyB8fCBkZWwpIHtcclxuICAgICAgICAgICAgYWN0cy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QuX2RlbFNpbmdsZUl0ZW0odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLmxpc3QuZGlzcGxheURhdGEubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5kaXNwbGF5RGF0YVtuXS5pZCA9PSB0aGlzLmxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmRpc3BsYXlEYXRhLnNwbGljZShuLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmMoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrVGhpcygpIHtcclxuICAgICAgICB0aGlzLmxpc3Quc2VsZWN0ZWRJZCA9IHRoaXMubGlzdElkO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=