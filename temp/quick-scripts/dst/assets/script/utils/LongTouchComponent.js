
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvTG9uZ1RvdWNoQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUg7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUErR0M7UUEzR0csbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFNN0IseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBTXJDLHFCQUFlLEdBQWdDLEVBQUUsQ0FBQztRQUVsRDs7V0FFRztRQUNLLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRWxDOztXQUVHO1FBQ0ssaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBcUZ6QyxDQUFDO0lBbkZHLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU1RSxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFF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Y2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2Mg6ZW/5oyJ55uR5ZCs57uE5Lu2XG4gKiAxLiDlsIbmnKznu4Tku7bmjILovb3lnKjoioLngrnkuIpcbiAqIDIuIOWcqOWxnuaAp+ajgOafpeWZqOS4iuiuvue9ruWvueW6lOeahOWbnuiwg+S6i+S7tlxuICogMy4g6ZW/5oyJ5oyC6L2955qE6IqC54K577yM6YKj5LmI5bCx5Lya5LiA55u05Zue6LCD56ysMuatpeS4reiuvue9rueahOS6i+S7tlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgXG4gKiAgICAgIC8vIOWBh+iuvuesrOS6jOatpeWbnuiwg+aOpeWPl+WHveaVsOS4uiBvblRvdWNoKCkg6YKj5LmI5Zyo6L+Z5Liq5Ye95pWw55qE5Y+C5pWw5aaC5LiL77yaXG4gKlxuICogICAgICBAcGFyYW0gdG91Y2hDb3VudGVyIOacrOasoeinpuaRuOasoeaVsFxuICogICAgICBAcGFyYW0gY3VzdG9tRXZlbnREYXRhIOWcqOWxnuaAp+ajgOafpeWZqOS4reS8oOWFpei/m+adpeeahCBDdXN0b21FdmVudERhdGFcbiAqXG4gKiAgICAgIG9uVG91Y2godG91Y2hDb3VudGVyOiBudW1iZXIsIGN1c3RvbUV2ZW50RGF0YT86IGFueSkgeyB9XG4gKiAgYGBgXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb25nVG91Y2hDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6IFwi6Kem5pG45Zue6LCD6Ze06ZqU77yI56eS77yJ44CC5YGH5aaC5Li6MC4x77yM6YKj5LmIMeenkuWGheS8muWbnuiwgzEw5qyhICR7bG9uZ1RvdWNoRXZlbnRzfSDkuovku7bmlbDnu4RcIlxuICAgIH0pXG4gICAgdG91Y2hJbnRlcnZhbDogbnVtYmVyID0gMC4wMjtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICB0b29sdGlwOiBcIuaYr+WQpuaUr+aMgeWkmueCueinpuaOp++8iOW9k+WJjei/mOS4jeaUr+aMge+8iVwiXG4gICAgfSlcbiAgICBlbmFibGVNdWx0aVRvdWNoaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0sXG4gICAgICAgIHRvb2x0aXA6IFwi5Zue6LCD5LqL5Lu25pWw57uE77yM5q+P6Ze06ZqUICR7dG91Y2hlSW50ZXJ2YWx9cyDlm57osIPkuIDmrKFcIlxuICAgIH0pXG4gICAgbG9uZ1RvdWNoRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIOinpuaRuOiuoeaVsOWZqO+8jOeUqOS6jue7n+iuoeacrOasoemVv+aMieeahOWbnuiwg+asoeaVsFxuICAgICAqL1xuICAgIHByaXZhdGUgX3RvdWNoQ291bnRlcjogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIOagh+iusOW9k+WJjeaYr+WQpuWcqOinpuaRuOi/meS4quiKgueCuVxuICAgICAqL1xuICAgIHByaXZhdGUgX2lzVG91Y2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoQ2FuY2VsLCB0aGlzKTtcblxuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25Ub3VjaENhbmNlbCwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjayk7XG4gICAgfVxuICAgIHByaXZhdGUgckNiaV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIndEODVFZnJOS0FcIik7IH1cblxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5faXNUb3VjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdG91Y2hDb3VudGVyQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwcml2YXRlIEt0cnNfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJzU3o4MkthTlwiKTsgfVxuXG4gICAgcHJpdmF0ZSBfb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIC8vIOi/meaYr+S4uuS6huS4jeaUr+aMgeWkmueCueinpuaOp1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlTXVsdGlUb3VjaGluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMoZXZlbnQuZ2V0TG9jYXRpb24oKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1RvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNUb3VjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5faXNUb3VjaGluZykge1xuICAgICAgICAgICAgICAgIC8vIOesrOS4gOasoeinpuaRuOeri+WNs+Wbnuiwg+S4gOasoVxuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaE9uZVRvdWNoKCk7XG5cbiAgICAgICAgICAgICAgICAvLyDnhLblkI7lvIDlkK/orqHml7blmajvvIzorqHnrpflkI7nu63nmoTplb/mjInnm7jlvZPkuo7op6bmkbjkuoblpJrlsJHmrKFcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1RvdWNoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdG91Y2hDb3VudGVyQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjaywgdGhpcy50b3VjaEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5faXNUb3VjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl90b3VjaENvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdG91Y2hDb3VudGVyQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwcml2YXRlIERrYUhfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCIyazU4RjdRdzRLQ2s4UXhyN3N0Y0FzVEZCZkpIWjVDelwiKTsgfVxuXG4gICAgcHJpdmF0ZSBfb25Ub3VjaENhbmNlbChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICB0aGlzLl9pc1RvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RvdWNoQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl90b3VjaENvdW50ZXJDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG91Y2hDb3VudGVyQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1RvdWNoaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnB1Ymxpc2hPbmVUb3VjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3RvdWNoQ291bnRlckNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAmuefpeWHuuWOu++8muiiq+eCueWHuy/op6bmkbjkuobkuIDmrKHvvIzplb/mjInml7bvvIzkvJrov57nu63lpJrmrKHlm57osIPov5nkuKrmlrnms5VcbiAgICAgKi9cbiAgICBwcml2YXRlIHB1Ymxpc2hPbmVUb3VjaCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1RvdWNoaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKHRoaXMudG91Y2hJbnRlcnZhbCAvIDIsIDEuMiksIGNjLnNjYWxlVG8odGhpcy50b3VjaEludGVydmFsIC8gMiwgMSkpKTtcbiAgICAgICAgdGhpcy5fdG91Y2hDb3VudGVyKys7XG4gICAgICAgIHRoaXMubG9uZ1RvdWNoRXZlbnRzLmZvckVhY2goKGV2ZW50SGFuZGxlcjogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3RoaXMubm9kZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=