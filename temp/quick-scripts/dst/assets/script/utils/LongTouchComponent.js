
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
                this._isTouching = false;
            }
            if (this._isTouching) {
                // 第一次触摸立即回调一次
                this.publishOneTouch();
                // 然后开启计时器，计算后续的长按相当于触摸了多少次
                this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
                    if (_this._isTouching) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTG9uZ1RvdWNoQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUg7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUErR0M7UUEzR0csbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFNN0IseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBTXJDLHFCQUFlLEdBQWdDLEVBQUUsQ0FBQztRQUVsRDs7V0FFRztRQUNLLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRWxDOztXQUVHO1FBQ0ssaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBcUZ6QyxDQUFDO0lBbkZHLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU1RSxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxF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b3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2Mg6ZW/5oyJ55uR5ZCs57uE5Lu2XHJcbiAqIDEuIOWwhuacrOe7hOS7tuaMgui9veWcqOiKgueCueS4ilxyXG4gKiAyLiDlnKjlsZ7mgKfmo4Dmn6XlmajkuIrorr7nva7lr7nlupTnmoTlm57osIPkuovku7ZcclxuICogMy4g6ZW/5oyJ5oyC6L2955qE6IqC54K577yM6YKj5LmI5bCx5Lya5LiA55u05Zue6LCD56ysMuatpeS4reiuvue9rueahOS6i+S7tlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBgYGBcclxuICogICAgICAvLyDlgYforr7nrKzkuozmraXlm57osIPmjqXlj5flh73mlbDkuLogb25Ub3VjaCgpIOmCo+S5iOWcqOi/meS4quWHveaVsOeahOWPguaVsOWmguS4i++8mlxyXG4gKlxyXG4gKiAgICAgIEBwYXJhbSB0b3VjaENvdW50ZXIg5pys5qyh6Kem5pG45qyh5pWwXHJcbiAqICAgICAgQHBhcmFtIGN1c3RvbUV2ZW50RGF0YSDlnKjlsZ7mgKfmo4Dmn6XlmajkuK3kvKDlhaXov5vmnaXnmoQgQ3VzdG9tRXZlbnREYXRhXHJcbiAqXHJcbiAqICAgICAgb25Ub3VjaCh0b3VjaENvdW50ZXI6IG51bWJlciwgY3VzdG9tRXZlbnREYXRhPzogYW55KSB7IH1cclxuICogIGBgYFxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9uZ1RvdWNoQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogXCLop6bmkbjlm57osIPpl7TpmpTvvIjnp5LvvInjgILlgYflpoLkuLowLjHvvIzpgqPkuYgx56eS5YaF5Lya5Zue6LCDMTDmrKEgJHtsb25nVG91Y2hFdmVudHN9IOS6i+S7tuaVsOe7hFwiXHJcbiAgICB9KVxyXG4gICAgdG91Y2hJbnRlcnZhbDogbnVtYmVyID0gMC4wMjtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5piv5ZCm5pSv5oyB5aSa54K56Kem5o6n77yI5b2T5YmN6L+Y5LiN5pSv5oyB77yJXCJcclxuICAgIH0pXHJcbiAgICBlbmFibGVNdWx0aVRvdWNoaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0sXHJcbiAgICAgICAgdG9vbHRpcDogXCLlm57osIPkuovku7bmlbDnu4TvvIzmr4/pl7TpmpQgJHt0b3VjaGVJbnRlcnZhbH1zIOWbnuiwg+S4gOasoVwiXHJcbiAgICB9KVxyXG4gICAgbG9uZ1RvdWNoRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOinpuaRuOiuoeaVsOWZqO+8jOeUqOS6jue7n+iuoeacrOasoemVv+aMieeahOWbnuiwg+asoeaVsFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF90b3VjaENvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIforrDlvZPliY3mmK/lkKblnKjop6bmkbjov5nkuKroioLngrlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaXNUb3VjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoQ2FuY2VsLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoQ2FuY2VsLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdG91Y2hDb3VudGVyQ2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByQ2JpX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwid0Q4NUVmck5LQVwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9pc1RvdWNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3RvdWNoQ291bnRlckNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgS3Ryc194eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcInNTejgyS2FOXCIpOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgLy8g6L+Z5piv5Li65LqG5LiN5pSv5oyB5aSa54K56Kem5o6nXHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZU11bHRpVG91Y2hpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhldmVudC5nZXRMb2NhdGlvbigpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNUb3VjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1RvdWNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1RvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDnrKzkuIDmrKHop6bmkbjnq4vljbPlm57osIPkuIDmrKFcclxuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaE9uZVRvdWNoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g54S25ZCO5byA5ZCv6K6h5pe25Zmo77yM6K6h566X5ZCO57ut55qE6ZW/5oyJ55u45b2T5LqO6Kem5pG45LqG5aSa5bCR5qyhXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3RvdWNoQ291bnRlckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjaywgdGhpcy50b3VjaEludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMuX2lzVG91Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl90b3VjaENvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIERrYUhfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCIyazU4RjdRdzRLQ2s4UXhyN3N0Y0FzVEZCZkpIWjVDelwiKTsgfVxyXG5cclxuICAgIHByaXZhdGUgX29uVG91Y2hDYW5jZWwoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLl9pc1RvdWNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fdG91Y2hDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdG91Y2hDb3VudGVyQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3RvdWNoQ291bnRlckNhbGxiYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1RvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVibGlzaE9uZVRvdWNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3RvdWNoQ291bnRlckNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrnn6Xlh7rljrvvvJrooqvngrnlh7sv6Kem5pG45LqG5LiA5qyh77yM6ZW/5oyJ5pe277yM5Lya6L+e57ut5aSa5qyh5Zue6LCD6L+Z5Liq5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHVibGlzaE9uZVRvdWNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNUb3VjaGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbyh0aGlzLnRvdWNoSW50ZXJ2YWwgLyAyLCAxLjIpLCBjYy5zY2FsZVRvKHRoaXMudG91Y2hJbnRlcnZhbCAvIDIsIDEpKSk7XHJcbiAgICAgICAgdGhpcy5fdG91Y2hDb3VudGVyKys7XHJcbiAgICAgICAgdGhpcy5sb25nVG91Y2hFdmVudHMuZm9yRWFjaCgoZXZlbnRIYW5kbGVyOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt0aGlzLm5vZGVdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=