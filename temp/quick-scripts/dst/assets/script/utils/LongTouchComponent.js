
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
    LongTouchComponent.prototype.clear = function () {
        this._isTouching = false;
        this.unschedule(this._touchCounterCallback);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTG9uZ1RvdWNoQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUg7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUE0R0M7UUF4R0csbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFNN0IseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBTXJDLHFCQUFlLEdBQWdDLEVBQUUsQ0FBQztRQUVsRDs7V0FFRztRQUNLLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRWxDOztXQUVHO1FBQ0ssaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBa0Z6QyxDQUFDO0lBaEZHLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU1RSxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxF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LENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakgsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBdUM7WUFDakUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXZHRDtRQUhDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxzREFBc0Q7U0FDbEUsQ0FBQzs2REFDMkI7SUFNN0I7UUFKQyxRQUFRLENBQUM7WUFDTixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRSxrQkFBa0I7U0FDOUIsQ0FBQzttRUFDbUM7SUFNckM7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUNqQyxPQUFPLEVBQUUsb0NBQW9DO1NBQ2hELENBQUM7K0RBQ2dEO0lBaEJqQyxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQTRHdEM7SUFBRCx5QkFBQztDQTVHRCxBQTRHQyxDQTVHK0MsRUFBRSxDQUFDLFNBQVMsR0E0RzNEO2tCQTVHb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIOmVv+aMieebkeWQrOe7hOS7tlxyXG4gKiAxLiDlsIbmnKznu4Tku7bmjILovb3lnKjoioLngrnkuIpcclxuICogMi4g5Zyo5bGe5oCn5qOA5p+l5Zmo5LiK6K6+572u5a+55bqU55qE5Zue6LCD5LqL5Lu2XHJcbiAqIDMuIOmVv+aMieaMgui9veeahOiKgueCue+8jOmCo+S5iOWwseS8muS4gOebtOWbnuiwg+esrDLmraXkuK3orr7nva7nmoTkuovku7ZcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogYGBgXHJcbiAqICAgICAgLy8g5YGH6K6+56ys5LqM5q2l5Zue6LCD5o6l5Y+X5Ye95pWw5Li6IG9uVG91Y2goKSDpgqPkuYjlnKjov5nkuKrlh73mlbDnmoTlj4LmlbDlpoLkuIvvvJpcclxuICpcclxuICogICAgICBAcGFyYW0gdG91Y2hDb3VudGVyIOacrOasoeinpuaRuOasoeaVsFxyXG4gKiAgICAgIEBwYXJhbSBjdXN0b21FdmVudERhdGEg5Zyo5bGe5oCn5qOA5p+l5Zmo5Lit5Lyg5YWl6L+b5p2l55qEIEN1c3RvbUV2ZW50RGF0YVxyXG4gKlxyXG4gKiAgICAgIG9uVG91Y2godG91Y2hDb3VudGVyOiBudW1iZXIsIGN1c3RvbUV2ZW50RGF0YT86IGFueSkgeyB9XHJcbiAqICBgYGBcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvbmdUb3VjaENvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IFwi6Kem5pG45Zue6LCD6Ze06ZqU77yI56eS77yJ44CC5YGH5aaC5Li6MC4x77yM6YKj5LmIMeenkuWGheS8muWbnuiwgzEw5qyhICR7bG9uZ1RvdWNoRXZlbnRzfSDkuovku7bmlbDnu4RcIlxyXG4gICAgfSlcclxuICAgIHRvdWNoSW50ZXJ2YWw6IG51bWJlciA9IDAuMDI7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICByZWFkb25seTogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwOiBcIuaYr+WQpuaUr+aMgeWkmueCueinpuaOp++8iOW9k+WJjei/mOS4jeaUr+aMge+8iVwiXHJcbiAgICB9KVxyXG4gICAgZW5hYmxlTXVsdGlUb3VjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5Zue6LCD5LqL5Lu25pWw57uE77yM5q+P6Ze06ZqUICR7dG91Y2hlSW50ZXJ2YWx9cyDlm57osIPkuIDmrKFcIlxyXG4gICAgfSlcclxuICAgIGxvbmdUb3VjaEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDop6bmkbjorqHmlbDlmajvvIznlKjkuo7nu5/orqHmnKzmrKHplb/mjInnmoTlm57osIPmrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfdG91Y2hDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qCH6K6w5b2T5YmN5piv5ZCm5Zyo6Kem5pG46L+Z5Liq6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2lzVG91Y2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25Ub3VjaENhbmNlbCwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25Ub3VjaENhbmNlbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3RvdWNoQ291bnRlckNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5faXNUb3VjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgLy8g6L+Z5piv5Li65LqG5LiN5pSv5oyB5aSa54K56Kem5o6nXHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZU11bHRpVG91Y2hpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhldmVudC5nZXRMb2NhdGlvbigpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNUb3VjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1RvdWNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1RvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDnrKzkuIDmrKHop6bmkbjnq4vljbPlm57osIPkuIDmrKFcclxuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaE9uZVRvdWNoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g54S25ZCO5byA5ZCv6K6h5pe25Zmo77yM6K6h566X5ZCO57ut55qE6ZW/5oyJ55u45b2T5LqO6Kem5pG45LqG5aSa5bCR5qyhXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3RvdWNoQ291bnRlckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjaywgdGhpcy50b3VjaEludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMuX2lzVG91Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl90b3VjaENvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaENhbmNlbChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMuX2lzVG91Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl90b3VjaENvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdG91Y2hDb3VudGVyQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5wdWJsaXNoT25lVG91Y2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdG91Y2hDb3VudGVyQ2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmuefpeWHuuWOu++8muiiq+eCueWHuy/op6bmkbjkuobkuIDmrKHvvIzplb/mjInml7bvvIzkvJrov57nu63lpJrmrKHlm57osIPov5nkuKrmlrnms5VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwdWJsaXNoT25lVG91Y2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1RvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKHRoaXMudG91Y2hJbnRlcnZhbCAvIDIsIDEuMiksIGNjLnNjYWxlVG8odGhpcy50b3VjaEludGVydmFsIC8gMiwgMSkpKTtcclxuICAgICAgICB0aGlzLl90b3VjaENvdW50ZXIrKztcclxuICAgICAgICB0aGlzLmxvbmdUb3VjaEV2ZW50cy5mb3JFYWNoKChldmVudEhhbmRsZXI6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIpID0+IHtcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3RoaXMubm9kZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==