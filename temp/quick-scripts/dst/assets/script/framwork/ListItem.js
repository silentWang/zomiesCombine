
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbXdvcmsvTGlzdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFnRSxFQUFFLENBQUMsVUFBVSxFQUEzRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxjQUFjLG9CQUFrQixDQUFDO0FBSXBGLElBQUssWUFJSjtBQUpELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0lBQ1YsbURBQVUsQ0FBQTtBQUNkLENBQUMsRUFKSSxZQUFZLEtBQVosWUFBWSxRQUloQjtBQU1EO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUlDO1FBcElHLElBQUk7UUFFSixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLElBQUk7UUFFSixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLE1BQU07UUFLTixrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQy9DLE1BQU07UUFLTixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixpQkFBaUI7UUFLakIseUJBQW1CLEdBQW1CLElBQUksQ0FBQztRQUMzQyxrQkFBa0I7UUFDbEIsNEJBQXNCLEdBQW1CLElBQUksQ0FBQztRQUM5QyxJQUFJO1FBQ0osZUFBUyxHQUFZLEtBQUssQ0FBQztRQXVCM0IsV0FBVztRQUNILGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBaUY5QixDQUFDO0lBeEdHLHNCQUFJLDhCQUFRO2FBZVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQWpCRCxVQUFhLEdBQVk7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUN0QixPQUFPO1lBQ1AsUUFBUSxJQUFJLENBQUMsWUFBWSxF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QjtJQUFELGVBQUM7Q0FySUQsQUFxSUMsQ0FySXFDLEVBQUUsQ0FBQyxTQUFTLEdBcUlqRDtrQkFySW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBkaXNhbGxvd011bHRpcGxlLCBtZW51LCBleGVjdXRpb25PcmRlciB9ID0gY2MuX2RlY29yYXRvcjtcblxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcblxuZW51bSBTZWxlY3RlZFR5cGUge1xuICAgIE5PTkUgPSAwLFxuICAgIFRPR0dMRSA9IDEsXG4gICAgU1dJVENIID0gMixcbn1cblxuQGNjY2xhc3NcbkBkaXNhbGxvd011bHRpcGxlKClcbkBtZW51KCfoh6rlrprkuYnnu4Tku7YvTGlzdCBJdGVtJylcbkBleGVjdXRpb25PcmRlcigtNTAwMSkvL+WFiOS6jkxpc3RcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvL+Wbvuagh1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZSwgdG9vbHRpcDogQ0NfREVWICYmICflm77moIcnIH0pXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcbiAgICAvL+agh+mimFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IENDX0RFViAmJiAn5qCH6aKYJyB9KVxuICAgIHRpdGxlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvL+mAieaLqeaooeW8j1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oU2VsZWN0ZWRUeXBlKSxcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfpgInmi6nmqKHlvI8nXG4gICAgfSlcbiAgICBzZWxlY3RlZE1vZGU6IFNlbGVjdGVkVHlwZSA9IFNlbGVjdGVkVHlwZS5OT05FO1xuICAgIC8v6KKr6YCJ5qCH5b+XXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogQ0NfREVWICYmICfooqvpgInmoIflv5cnLFxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPiBTZWxlY3RlZFR5cGUuTk9ORSB9XG4gICAgfSlcbiAgICBzZWxlY3RlZEZsYWc6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8v6KKr6YCJ5oup55qEU3ByaXRlRnJhbWVcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdG9vbHRpcDogQ0NfREVWICYmICfooqvpgInmi6nnmoRTcHJpdGVGcmFtZScsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU1dJVENIIH1cbiAgICB9KVxuICAgIHNlbGVjdGVkU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAvL+acquiiq+mAieaLqeeahFNwcml0ZUZyYW1lXG4gICAgX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIC8v6YCJ5oupXG4gICAgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2V0IHNlbGVjdGVkKHZhbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbDtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkRmxhZylcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5UT0dHTEU6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuYWN0aXZlID0gdmFsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuU1dJVENIOlxuICAgICAgICAgICAgICAgIGxldCBzcDogY2MuU3ByaXRlID0gdGhpcy5zZWxlY3RlZEZsYWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwKVxuICAgICAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHZhbCA/IHRoaXMuc2VsZWN0ZWRTcHJpdGVGcmFtZSA6IHRoaXMuX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG4gICAgLy/mjInpkq7nu4Tku7ZcbiAgICBwcml2YXRlIF9idG5Db206IGFueTtcbiAgICAvL+S+nei1lueahExpc3Tnu4Tku7ZcbiAgICBwdWJsaWMgbGlzdDogTGlzdDtcbiAgICAvL+aYr+WQpuW3sue7j+azqOWGjOi/h+S6i+S7tlxuICAgIHByaXZhdGUgX2V2ZW50UmVnID0gZmFsc2U7XG4gICAgLy/luo/liJdpZFxuICAgIHB1YmxpYyBsaXN0SWQ6IG51bWJlcjtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/ojrflj5bmjInpkq7nu4Tku7bvvIzmsqHmnInnmoTor53vvIxzZWxlY3RlZEZsYWfml6DmlYhcbiAgICAgICAgdGhpcy5fYnRuQ29tID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBpZiAoIXRoaXMuX2J0bkNvbSlcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5OT05FO1xuICAgICAgICAvL+aciemAieaLqeaooeW8j+aXtu+8jOS/neWtmOebuOW6lOeahOS4nOilv1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNXSVRDSCkge1xuICAgICAgICAgICAgbGV0IGNvbTogY2MuU3ByaXRlID0gdGhpcy5zZWxlY3RlZEZsYWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLl91bnNlbGVjdGVkU3ByaXRlRnJhbWUgPSBjb20uc3ByaXRlRnJhbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVnaXN0ZXJFdmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2J0bkNvbSAmJiB0aGlzLmxpc3Quc2VsZWN0ZWRNb2RlID4gMCAmJiAhdGhpcy5fZXZlbnRSZWcpIHtcbiAgICAgICAgICAgIGxldCBlaDogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgICAgICBlaC50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBlaC5jb21wb25lbnQgPSAnTGlzdEl0ZW0nO1xuICAgICAgICAgICAgZWguaGFuZGxlciA9ICdvbkNsaWNrVGhpcyc7XG4gICAgICAgICAgICB0aGlzLl9idG5Db20uY2xpY2tFdmVudHMudW5zaGlmdChlaCk7XG4gICAgICAgICAgICB0aGlzLl9ldmVudFJlZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93QW5pKGFuaVR5cGU6IG51bWJlciwgY2FsbEZ1bmM6IEZ1bmN0aW9uLCBkZWw6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGFjdHM6IGFueVtdO1xuICAgICAgICBzd2l0Y2ggKGFuaVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDogLy/lkJHkuIrmtojlpLFcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4yLCAuNyksXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSguMywgMCwgdGhpcy5ub2RlLmhlaWdodCAqIDIpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6IC8v5ZCR5Y+z5raI5aSxXG4gICAgICAgICAgICAgICAgYWN0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIHRoaXMubm9kZS53aWR0aCAqIDIsIDApLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IC8v5ZCR5LiL5raI5aSxXG4gICAgICAgICAgICAgICAgYWN0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIDAsIHRoaXMubm9kZS5oZWlnaHQgKiAtMiksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogLy/lkJHlt6bmtojlpLFcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4yLCAuNyksXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSguMywgdGhpcy5ub2RlLndpZHRoICogLTIsIDApLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiAvL+m7mOiupO+8mue8qeWwj+a2iOWksVxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjMsIC4xKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsRnVuYyB8fCBkZWwpIHtcbiAgICAgICAgICAgIGFjdHMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRlbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QuX2RlbFNpbmdsZUl0ZW0odGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5saXN0LmRpc3BsYXlEYXRhLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0LmRpc3BsYXlEYXRhW25dLmlkID09IHRoaXMubGlzdElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmRpc3BsYXlEYXRhLnNwbGljZShuLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsRnVuYygpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0cykpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tUaGlzKCkge1xuICAgICAgICB0aGlzLmxpc3Quc2VsZWN0ZWRJZCA9IHRoaXMubGlzdElkO1xuICAgIH1cblxufVxuIl19