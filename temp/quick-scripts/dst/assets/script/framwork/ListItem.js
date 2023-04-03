
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
        if (window && window['xxxxx'])
            window['xxxxx']("gdasetweuhnoibasd45415");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcTGlzdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFnRSxFQUFFLENBQUMsVUFBVSxFQUEzRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxjQUFjLG9CQUFrQixDQUFDO0FBSXBGLElBQUssWUFJSjtBQUpELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0lBQ1YsbURBQVUsQ0FBQTtBQUNkLENBQUMsRUFKSSxZQUFZLEtBQVosWUFBWSxRQUloQjtBQU1EO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUlDO1FBeElHLElBQUk7UUFFSixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLElBQUk7UUFFSixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLE1BQU07UUFLTixrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQy9DLE1BQU07UUFLTixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixpQkFBaUI7UUFLakIseUJBQW1CLEdBQW1CLElBQUksQ0FBQztRQUMzQyxrQkFBa0I7UUFDbEIsNEJBQXNCLEdBQW1CLElBQUksQ0FBQztRQUM5QyxJQUFJO1FBQ0osZUFBUyxHQUFZLEtBQUssQ0FBQztRQXdCM0IsV0FBVztRQUNILGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBb0Y5QixDQUFDO0lBNUdHLHNCQUFJLDhCQUFRO2FBZ0JaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFsQkQsVUFBYSxHQUFZO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtnQkFDdEIsT0FBTztZQUNQLFFBQVEsSUFBSSxDQUFDLFlB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SSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQztTQUM3RCxDQUFDO2tEQUMyQjtJQU03QjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksaUJBQWlCO1lBQzFELE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDO1NBQ2hFLENBQUM7eURBQ3lDO0lBeEIxQixRQUFRO1FBSjVCLE9BQU87UUFDUCxnQkFBZ0IsRUFBRTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDdkIsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsUUFBUTtPQUNULFFBQVEsQ0F5STVCO0lBQUQsZUFBQztDQXpJRCxBQXlJQyxDQXpJcUMsRUFBRSxDQUFDLFNBQVMsR0F5SWpEO2tCQXpJb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGRpc2FsbG93TXVsdGlwbGUsIG1lbnUsIGV4ZWN1dGlvbk9yZGVyIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcclxuXHJcbmVudW0gU2VsZWN0ZWRUeXBlIHtcclxuICAgIE5PTkUgPSAwLFxyXG4gICAgVE9HR0xFID0gMSxcclxuICAgIFNXSVRDSCA9IDIsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBkaXNhbGxvd011bHRpcGxlKClcclxuQG1lbnUoJ+iHquWumuS5iee7hOS7ti9MaXN0IEl0ZW0nKVxyXG5AZXhlY3V0aW9uT3JkZXIoLTUwMDEpLy/lhYjkuo5MaXN0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8v5Zu+5qCHXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGUsIHRvb2x0aXA6IENDX0RFViAmJiAn5Zu+5qCHJyB9KVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIC8v5qCH6aKYXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+agh+mimCcgfSlcclxuICAgIHRpdGxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8v6YCJ5oup5qih5byPXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkVudW0oU2VsZWN0ZWRUeXBlKSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mAieaLqeaooeW8jydcclxuICAgIH0pXHJcbiAgICBzZWxlY3RlZE1vZGU6IFNlbGVjdGVkVHlwZSA9IFNlbGVjdGVkVHlwZS5OT05FO1xyXG4gICAgLy/ooqvpgInmoIflv5dcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogQ0NfREVWICYmICfooqvpgInmoIflv5cnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FIH1cclxuICAgIH0pXHJcbiAgICBzZWxlY3RlZEZsYWc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy/ooqvpgInmi6nnmoRTcHJpdGVGcmFtZVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdG9vbHRpcDogQ0NfREVWICYmICfooqvpgInmi6nnmoRTcHJpdGVGcmFtZScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5TV0lUQ0ggfVxyXG4gICAgfSlcclxuICAgIHNlbGVjdGVkU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIC8v5pyq6KKr6YCJ5oup55qEU3ByaXRlRnJhbWVcclxuICAgIF91bnNlbGVjdGVkU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIC8v6YCJ5oupXHJcbiAgICBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNldCBzZWxlY3RlZCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbDtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRGbGFnKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlRPR0dMRTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnLmFjdGl2ZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjhyNXRmd2FDTmo4eVBON1E2R3NwUzRySDVyUEN4XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlNXSVRDSDpcclxuICAgICAgICAgICAgICAgIGxldCBzcDogY2MuU3ByaXRlID0gdGhpcy5zZWxlY3RlZEZsYWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ApXHJcbiAgICAgICAgICAgICAgICAgICAgc3Auc3ByaXRlRnJhbWUgPSB2YWwgPyB0aGlzLnNlbGVjdGVkU3ByaXRlRnJhbWUgOiB0aGlzLl91bnNlbGVjdGVkU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgc2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgLy/mjInpkq7nu4Tku7ZcclxuICAgIHByaXZhdGUgX2J0bkNvbTogYW55O1xyXG4gICAgLy/kvp3otZbnmoRMaXN057uE5Lu2XHJcbiAgICBwdWJsaWMgbGlzdDogTGlzdDtcclxuICAgIC8v5piv5ZCm5bey57uP5rOo5YaM6L+H5LqL5Lu2XHJcbiAgICBwcml2YXRlIF9ldmVudFJlZyA9IGZhbHNlO1xyXG4gICAgLy/luo/liJdpZFxyXG4gICAgcHVibGljIGxpc3RJZDogbnVtYmVyO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvL+iOt+WPluaMiemSrue7hOS7tu+8jOayoeacieeahOivne+8jHNlbGVjdGVkRmxhZ+aXoOaViFxyXG4gICAgICAgIHRoaXMuX2J0bkNvbSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2J0bkNvbSlcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLk5PTkU7XHJcbiAgICAgICAgLy/mnInpgInmi6nmqKHlvI/ml7bvvIzkv53lrZjnm7jlupTnmoTkuJzopb9cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNXSVRDSCkge1xyXG4gICAgICAgICAgICBsZXQgY29tOiBjYy5TcHJpdGUgPSB0aGlzLnNlbGVjdGVkRmxhZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgdGhpcy5fdW5zZWxlY3RlZFNwcml0ZUZyYW1lID0gY29tLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfcmVnaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fYnRuQ29tICYmIHRoaXMubGlzdC5zZWxlY3RlZE1vZGUgPiAwICYmICF0aGlzLl9ldmVudFJlZykge1xyXG4gICAgICAgICAgICBsZXQgZWg6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgICAgICBlaC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGVoLmNvbXBvbmVudCA9ICdMaXN0SXRlbSc7XHJcbiAgICAgICAgICAgIGVoLmhhbmRsZXIgPSAnb25DbGlja1RoaXMnO1xyXG4gICAgICAgICAgICB0aGlzLl9idG5Db20uY2xpY2tFdmVudHMudW5zaGlmdChlaCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50UmVnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FuaShhbmlUeXBlOiBudW1iZXIsIGNhbGxGdW5jOiBGdW5jdGlvbiwgZGVsOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGFjdHM6IGFueVtdO1xyXG4gICAgICAgIHN3aXRjaCAoYW5pVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8v5ZCR5LiK5raI5aSxXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJjM3NXaWk2U2ZLa2ptbjZYWURjM3dcIik7XHJcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIDAsIHRoaXMubm9kZS5oZWlnaHQgKiAyKSxcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiAvL+WQkeWPs+a2iOWksVxyXG4gICAgICAgICAgICAgICAgYWN0cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4yLCAuNyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZUJ5KC4zLCB0aGlzLm5vZGUud2lkdGggKiAyLCAwKSxcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiAvL+WQkeS4i+a2iOWksVxyXG4gICAgICAgICAgICAgICAgYWN0cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4yLCAuNyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZUJ5KC4zLCAwLCB0aGlzLm5vZGUuaGVpZ2h0ICogLTIpLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6IC8v5ZCR5bem5raI5aSxXHJcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIHRoaXMubm9kZS53aWR0aCAqIC0yLCAwKSxcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogLy/pu5jorqTvvJrnvKnlsI/mtojlpLFcclxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMywgLjEpLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbEZ1bmMgfHwgZGVsKSB7XHJcbiAgICAgICAgICAgIGFjdHMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Ll9kZWxTaW5nbGVJdGVtKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5saXN0LmRpc3BsYXlEYXRhLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3QuZGlzcGxheURhdGFbbl0uaWQgPT0gdGhpcy5saXN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5kaXNwbGF5RGF0YS5zcGxpY2UobiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbGxGdW5jKCk7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJwRU5QUkpiRGVoaDZQSndcIik7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3RzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja1RoaXMoKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZ2Rhc2V0d2V1aG5vaWJhc2Q0NTQxNVwiKTtcclxuICAgICAgICB0aGlzLmxpc3Quc2VsZWN0ZWRJZCA9IHRoaXMubGlzdElkO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=