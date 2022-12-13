
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
                    if (window && window['xxxxx'])
                        window['xxxxx']("8r5tfwaCNj8yPN7Q6GspS4rH5rPCx");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("c3sWii6SfKkjmn6XYDc3w");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("pENPRJbDehh6PJw");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcTGlzdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFnRSxFQUFFLENBQUMsVUFBVSxFQUEzRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxjQUFjLG9CQUFrQixDQUFDO0FBSXBGLElBQUssWUFJSjtBQUpELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0lBQ1YsbURBQVUsQ0FBQTtBQUNkLENBQUMsRUFKSSxZQUFZLEtBQVosWUFBWSxRQUloQjtBQU1EO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0lDO1FBdklHLElBQUk7UUFFSixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLElBQUk7UUFFSixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLE1BQU07UUFLTixrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQy9DLE1BQU07UUFLTixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixpQkFBaUI7UUFLakIseUJBQW1CLEdBQW1CLElBQUksQ0FBQztRQUMzQyxrQkFBa0I7UUFDbEIsNEJBQXNCLEdBQW1CLElBQUksQ0FBQztRQUM5QyxJQUFJO1FBQ0osZUFBUyxHQUFZLEtBQUssQ0FBQztRQXdCM0IsV0FBVztRQUNILGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBbUY5QixDQUFDO0lBM0dHLHNCQUFJLDhCQUFRO2FBZ0JaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFsQkQsVUFBYSxHQUFZO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtnQkFDdEIsT0FBTztZQUNQLFFBQVEsSUFBSSxDQUFDLFlB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Q04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxpQkFBaUI7WUFDMUQsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7U0FDaEUsQ0FBQzt5REFDeUM7SUF4QjFCLFFBQVE7UUFKNUIsT0FBTztRQUNQLGdCQUFnQixFQUFFO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2QixjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxRQUFRO09BQ1QsUUFBUSxDQXdJNUI7SUFBRCxlQUFDO0NBeElELEFBd0lDLENBeElxQyxFQUFFLENBQUMsU0FBUyxHQXdJakQ7a0JBeElvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZGlzYWxsb3dNdWx0aXBsZSwgbWVudSwgZXhlY3V0aW9uT3JkZXIgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xyXG5cclxuZW51bSBTZWxlY3RlZFR5cGUge1xyXG4gICAgTk9ORSA9IDAsXHJcbiAgICBUT0dHTEUgPSAxLFxyXG4gICAgU1dJVENIID0gMixcclxufVxyXG5cclxuQGNjY2xhc3NcclxuQGRpc2FsbG93TXVsdGlwbGUoKVxyXG5AbWVudSgn6Ieq5a6a5LmJ57uE5Lu2L0xpc3QgSXRlbScpXHJcbkBleGVjdXRpb25PcmRlcigtNTAwMSkvL+WFiOS6jkxpc3RcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy/lm77moIdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZSwgdG9vbHRpcDogQ0NfREVWICYmICflm77moIcnIH0pXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgLy/moIfpophcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IENDX0RFViAmJiAn5qCH6aKYJyB9KVxyXG4gICAgdGl0bGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy/pgInmi6nmqKHlvI9cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRW51bShTZWxlY3RlZFR5cGUpLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6YCJ5oup5qih5byPJ1xyXG4gICAgfSlcclxuICAgIHNlbGVjdGVkTW9kZTogU2VsZWN0ZWRUeXBlID0gU2VsZWN0ZWRUeXBlLk5PTkU7XHJcbiAgICAvL+iiq+mAieagh+W/l1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+iiq+mAieagh+W/lycsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlID4gU2VsZWN0ZWRUeXBlLk5PTkUgfVxyXG4gICAgfSlcclxuICAgIHNlbGVjdGVkRmxhZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+iiq+mAieaLqeeahFNwcml0ZUZyYW1lXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+iiq+mAieaLqeeahFNwcml0ZUZyYW1lJyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNXSVRDSCB9XHJcbiAgICB9KVxyXG4gICAgc2VsZWN0ZWRTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgLy/mnKrooqvpgInmi6nnmoRTcHJpdGVGcmFtZVxyXG4gICAgX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgLy/pgInmi6lcclxuICAgIF9zZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2V0IHNlbGVjdGVkKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsO1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZEZsYWcpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZE1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuVE9HR0xFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuYWN0aXZlID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiOHI1dGZ3YUNOajh5UE43UTZHc3BTNHJINXJQQ3hcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuU1dJVENIOlxyXG4gICAgICAgICAgICAgICAgbGV0IHNwOiBjYy5TcHJpdGUgPSB0aGlzLnNlbGVjdGVkRmxhZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcClcclxuICAgICAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHZhbCA/IHRoaXMuc2VsZWN0ZWRTcHJpdGVGcmFtZSA6IHRoaXMuX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBzZWxlY3RlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICAvL+aMiemSrue7hOS7tlxyXG4gICAgcHJpdmF0ZSBfYnRuQ29tOiBhbnk7XHJcbiAgICAvL+S+nei1lueahExpc3Tnu4Tku7ZcclxuICAgIHB1YmxpYyBsaXN0OiBMaXN0O1xyXG4gICAgLy/mmK/lkKblt7Lnu4/ms6jlhozov4fkuovku7ZcclxuICAgIHByaXZhdGUgX2V2ZW50UmVnID0gZmFsc2U7XHJcbiAgICAvL+W6j+WIl2lkXHJcbiAgICBwdWJsaWMgbGlzdElkOiBudW1iZXI7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8v6I635Y+W5oyJ6ZKu57uE5Lu277yM5rKh5pyJ55qE6K+d77yMc2VsZWN0ZWRGbGFn5peg5pWIXHJcbiAgICAgICAgdGhpcy5fYnRuQ29tID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIGlmICghdGhpcy5fYnRuQ29tKVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgICAgICAvL+aciemAieaLqeaooeW8j+aXtu+8jOS/neWtmOebuOW6lOeahOS4nOilv1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU1dJVENIKSB7XHJcbiAgICAgICAgICAgIGxldCBjb206IGNjLlNwcml0ZSA9IHRoaXMuc2VsZWN0ZWRGbGFnLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB0aGlzLl91bnNlbGVjdGVkU3ByaXRlRnJhbWUgPSBjb20uc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9yZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9idG5Db20gJiYgdGhpcy5saXN0LnNlbGVjdGVkTW9kZSA+IDAgJiYgIXRoaXMuX2V2ZW50UmVnKSB7XHJcbiAgICAgICAgICAgIGxldCBlaDogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGVoLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgZWguY29tcG9uZW50ID0gJ0xpc3RJdGVtJztcclxuICAgICAgICAgICAgZWguaGFuZGxlciA9ICdvbkNsaWNrVGhpcyc7XHJcbiAgICAgICAgICAgIHRoaXMuX2J0bkNvbS5jbGlja0V2ZW50cy51bnNoaWZ0KGVoKTtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRSZWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93QW5pKGFuaVR5cGU6IG51bWJlciwgY2FsbEZ1bmM6IEZ1bmN0aW9uLCBkZWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYWN0czogYW55W107XHJcbiAgICAgICAgc3dpdGNoIChhbmlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy/lkJHkuIrmtojlpLFcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImMzc1dpaTZTZktram1uNlhZRGMzd1wiKTtcclxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSguMywgMCwgdGhpcy5ub2RlLmhlaWdodCAqIDIpLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IC8v5ZCR5Y+z5raI5aSxXHJcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIHRoaXMubm9kZS53aWR0aCAqIDIsIDApLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8v5ZCR5LiL5raI5aSxXHJcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIDAsIHRoaXMubm9kZS5oZWlnaHQgKiAtMiksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzogLy/lkJHlt6bmtojlpLFcclxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSguMywgdGhpcy5ub2RlLndpZHRoICogLTIsIDApLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvL+m7mOiupO+8mue8qeWwj+a2iOWksVxyXG4gICAgICAgICAgICAgICAgYWN0cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4zLCAuMSksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsRnVuYyB8fCBkZWwpIHtcclxuICAgICAgICAgICAgYWN0cy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QuX2RlbFNpbmdsZUl0ZW0odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLmxpc3QuZGlzcGxheURhdGEubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5kaXNwbGF5RGF0YVtuXS5pZCA9PSB0aGlzLmxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmRpc3BsYXlEYXRhLnNwbGljZShuLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInBFTlBSSmJEZWhoNlBKd1wiKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrVGhpcygpIHtcclxuICAgICAgICB0aGlzLmxpc3Quc2VsZWN0ZWRJZCA9IHRoaXMubGlzdElkO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=