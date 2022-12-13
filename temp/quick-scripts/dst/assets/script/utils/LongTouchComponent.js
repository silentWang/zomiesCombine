
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/LongTouchComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e00b9OAUdVJhbS0BUI7M5px', 'LongTouchComponent');
// script/utils/LongTouchComponent.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * @classdesc 长按监听组件
 * 1. 将本组件挂载在节点上
 * 2. 在属性检查器上设置对应的回调事件
 * 3. 长按挂载的节点，那么就会一直回调第2步中设置的事件
 *
 * @example
 *
 * ```
 *      // 假设第二步回调接受函数为 onTouch() 那么在这个函数的参数如下：
 *
 *      @param touchCounter 本次触摸次数
 *      @param customEventData 在属性检查器中传入进来的 CustomEventData
 *
 *      onTouch(touchCounter: number, customEventData?: any) { }
 *  ```
 */
var LongTouchComponent = /** @class */ (function (_super) {
    __extends(LongTouchComponent, _super);
    function LongTouchComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchInterval = 0.02;
        _this.enableMultiTouching = false;
        _this.longTouchEvents = [];
        /**
         * 触摸计数器，用于统计本次长按的回调次数
         */
        _this._touchCounter = 0;
        /**
         if(window && window['xxxxx']) window['xxxxx']("TErd6za4rZ4CCkdjK");
         * 标记当前是否在触摸这个节点
         */
        _this._isTouching = false;
        return _this;
    }
    LongTouchComponent.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
    };
    LongTouchComponent.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
        this.unschedule(this._touchCounterCallback);
    };
    LongTouchComponent.prototype.rCbi_xxxx_fun = function () { console.log("wD85EfrNKA"); };
    LongTouchComponent.prototype.clear = function () {
        this._isTouching = false;
        this.unschedule(this._touchCounterCallback);
    };
    LongTouchComponent.prototype.Ktrs_xxxx_fun = function () { console.log("sSz82KaN"); };
    LongTouchComponent.prototype._onTouchStart = function (event) {
        var _this = this;
        // 这是为了不支持多点触控
        if (!this.enableMultiTouching) {
            if (this._isTouching) {
                return;
            }
            if (this.node.getBoundingBoxToWorld().contains(event.getLocation())) {
                this._isTouching = true;
            }
            else {
                if (window && window['xxxxx'])
                    window['xxxxx']("bJh5Y2aSGKWtNNbj4NMFF");
                this._isTouching = false;
            }
            if (this._isTouching) {
                // 第一次触摸立即回调一次
                this.publishOneTouch();
                // 然后开启计时器，计算后续的长按相当于触摸了多少次
                this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
                    if (_this._isTouching) {
                        if (window && window['xxxxx'])
                            window['xxxxx']("AkTsrr4h37GDzFimN3Y");
                        _this.unschedule(_this._touchCounterCallback);
                        _this.schedule(_this._touchCounterCallback, _this.touchInterval);
                    }
                })));
            }
        }
    };
    LongTouchComponent.prototype._onTouchEnd = function (event) {
        this._isTouching = false;
        this._touchCounter = 0;
        this.unschedule(this._touchCounterCallback);
    };
    LongTouchComponent.prototype.DkaH_xxxx_fun = function () { console.log("2k58F7Qw4KCk8Qxr7stcAsTFBfJHZ5Cz"); };
    LongTouchComponent.prototype._onTouchCancel = function (event) {
        this._isTouching = false;
        this._touchCounter = 0;
        this.unschedule(this._touchCounterCallback);
    };
    LongTouchComponent.prototype._touchCounterCallback = function () {
        if (this._isTouching) {
            this.publishOneTouch();
        }
        else {
            if (window && window['xxxxx'])
                window['xxxxx']("BZd66WiexQjE37JS22WYyKwkKxZD8");
            this.unschedule(this._touchCounterCallback);
        }
    };
    /**
     * 通知出去：被点击/触摸了一次，长按时，会连续多次回调这个方法
     */
    LongTouchComponent.prototype.publishOneTouch = function () {
        var _this = this;
        if (!this._isTouching) {
            return;
        }
        this.node.runAction(cc.sequence(cc.scaleTo(this.touchInterval / 2, 1.2), cc.scaleTo(this.touchInterval / 2, 1)));
        this._touchCounter++;
        this.longTouchEvents.forEach(function (eventHandler) {
            eventHandler.emit([_this.node]);
        });
    };
    __decorate([
        property({
            tooltip: "触摸回调间隔（秒）。假如为0.1，那么1秒内会回调10次 ${longTouchEvents} 事件数组"
        })
    ], LongTouchComponent.prototype, "touchInterval", void 0);
    __decorate([
        property({
            readonly: true,
            tooltip: "是否支持多点触控（当前还不支持）"
        })
    ], LongTouchComponent.prototype, "enableMultiTouching", void 0);
    __decorate([
        property({
            type: [cc.Component.EventHandler],
            tooltip: "回调事件数组，每间隔 ${toucheInterval}s 回调一次"
        })
    ], LongTouchComponent.prototype, "longTouchEvents", void 0);
    LongTouchComponent = __decorate([
        ccclass
    ], LongTouchComponent);
    return LongTouchComponent;
}(cc.Component));
exports.default = LongTouchComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTG9uZ1RvdWNoQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUg7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUFtSEM7UUEvR0csbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFNN0IseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBTXJDLHFCQUFlLEdBQWdDLEVBQUUsQ0FBQztRQUVsRDs7V0FFRztRQUNLLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRWxDOzs7V0FHRztRQUNLLGlCQUFXLEdBQVksS0FBSyxDQUFDOztJQXdGekMsQ0FBQztJQXRGRyxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFNUUsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEs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QUM5QixDQUFDO21FQUNtQztJQU1yQztRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxvQ0FBb0M7U0FDaEQsQ0FBQzsrREFDZ0Q7SUFoQmpDLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBbUh0QztJQUFELHlCQUFDO0NBbkhELEFBbUhDLENBbkgrQyxFQUFFLENBQUMsU0FBUyxHQW1IM0Q7a0JBbkhvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2Mg6ZW/5oyJ55uR5ZCs57uE5Lu2XHJcbiAqIDEuIOWwhuacrOe7hOS7tuaMgui9veWcqOiKgueCueS4ilxyXG4gKiAyLiDlnKjlsZ7mgKfmo4Dmn6XlmajkuIrorr7nva7lr7nlupTnmoTlm57osIPkuovku7ZcclxuICogMy4g6ZW/5oyJ5oyC6L2955qE6IqC54K577yM6YKj5LmI5bCx5Lya5LiA55u05Zue6LCD56ysMuatpeS4reiuvue9rueahOS6i+S7tlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBgYGBcclxuICogICAgICAvLyDlgYforr7nrKzkuozmraXlm57osIPmjqXlj5flh73mlbDkuLogb25Ub3VjaCgpIOmCo+S5iOWcqOi/meS4quWHveaVsOeahOWPguaVsOWmguS4i++8mlxyXG4gKlxyXG4gKiAgICAgIEBwYXJhbSB0b3VjaENvdW50ZXIg5pys5qyh6Kem5pG45qyh5pWwXHJcbiAqICAgICAgQHBhcmFtIGN1c3RvbUV2ZW50RGF0YSDlnKjlsZ7mgKfmo4Dmn6XlmajkuK3kvKDlhaXov5vmnaXnmoQgQ3VzdG9tRXZlbnREYXRhXHJcbiAqXHJcbiAqICAgICAgb25Ub3VjaCh0b3VjaENvdW50ZXI6IG51bWJlciwgY3VzdG9tRXZlbnREYXRhPzogYW55KSB7IH1cclxuICogIGBgYFxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9uZ1RvdWNoQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogXCLop6bmkbjlm57osIPpl7TpmpTvvIjnp5LvvInjgILlgYflpoLkuLowLjHvvIzpgqPkuYgx56eS5YaF5Lya5Zue6LCDMTDmrKEgJHtsb25nVG91Y2hFdmVudHN9IOS6i+S7tuaVsOe7hFwiXHJcbiAgICB9KVxyXG4gICAgdG91Y2hJbnRlcnZhbDogbnVtYmVyID0gMC4wMjtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5piv5ZCm5pSv5oyB5aSa54K56Kem5o6n77yI5b2T5YmN6L+Y5LiN5pSv5oyB77yJXCJcclxuICAgIH0pXHJcbiAgICBlbmFibGVNdWx0aVRvdWNoaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0sXHJcbiAgICAgICAgdG9vbHRpcDogXCLlm57osIPkuovku7bmlbDnu4TvvIzmr4/pl7TpmpQgJHt0b3VjaGVJbnRlcnZhbH1zIOWbnuiwg+S4gOasoVwiXHJcbiAgICB9KVxyXG4gICAgbG9uZ1RvdWNoRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOinpuaRuOiuoeaVsOWZqO+8jOeUqOS6jue7n+iuoeacrOasoemVv+aMieeahOWbnuiwg+asoeaVsFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF90b3VjaENvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiVEVyZDZ6YTRyWjRDQ2tkaktcIik7XHJcbiAgICAgKiDmoIforrDlvZPliY3mmK/lkKblnKjop6bmkbjov5nkuKroioLngrlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaXNUb3VjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoQ2FuY2VsLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoQ2FuY2VsLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdG91Y2hDb3VudGVyQ2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgICAgIHByaXZhdGUgckNiaV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIndEODVFZnJOS0FcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5faXNUb3VjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBLdHJzX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwic1N6ODJLYU5cIik7IH1cclxuXHJcbiAgICBwcml2YXRlIF9vblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICAvLyDov5nmmK/kuLrkuobkuI3mlK/mjIHlpJrngrnop6bmjqdcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlTXVsdGlUb3VjaGluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNUb3VjaGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKGV2ZW50LmdldExvY2F0aW9uKCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1RvdWNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImJKaDVZMmFTR0tXdE5OYmo0Tk1GRlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzVG91Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgIC8vIOesrOS4gOasoeinpuaRuOeri+WNs+Wbnuiwg+S4gOasoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdWJsaXNoT25lVG91Y2goKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDnhLblkI7lvIDlkK/orqHml7blmajvvIzorqHnrpflkI7nu63nmoTplb/mjInnm7jlvZPkuo7op6bmkbjkuoblpJrlsJHmrKFcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNUb3VjaGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJBa1RzcnI0aDM3R0R6RmltTjNZXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdG91Y2hDb3VudGVyQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuX3RvdWNoQ291bnRlckNhbGxiYWNrLCB0aGlzLnRvdWNoSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5faXNUb3VjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3RvdWNoQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3RvdWNoQ291bnRlckNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgICAgICBwcml2YXRlIERrYUhfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCIyazU4RjdRdzRLQ2s4UXhyN3N0Y0FzVEZCZkpIWjVDelwiKTsgfVxyXG5cclxuICAgIHByaXZhdGUgX29uVG91Y2hDYW5jZWwoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLl9pc1RvdWNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fdG91Y2hDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdG91Y2hDb3VudGVyQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3RvdWNoQ291bnRlckNhbGxiYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1RvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVibGlzaE9uZVRvdWNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQlpkNjZXaWV4UWpFMzdKUzIyV1l5S3drS3haRDhcIik7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa55+l5Ye65Y6777ya6KKr54K55Ye7L+inpuaRuOS6huS4gOasoe+8jOmVv+aMieaXtu+8jOS8mui/nue7reWkmuasoeWbnuiwg+i/meS4quaWueazlVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHB1Ymxpc2hPbmVUb3VjaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzVG91Y2hpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8odGhpcy50b3VjaEludGVydmFsIC8gMiwgMS4yKSwgY2Muc2NhbGVUbyh0aGlzLnRvdWNoSW50ZXJ2YWwgLyAyLCAxKSkpO1xyXG4gICAgICAgIHRoaXMuX3RvdWNoQ291bnRlcisrO1xyXG4gICAgICAgIHRoaXMubG9uZ1RvdWNoRXZlbnRzLmZvckVhY2goKGV2ZW50SGFuZGxlcjogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcikgPT4ge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbdGhpcy5ub2RlXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19