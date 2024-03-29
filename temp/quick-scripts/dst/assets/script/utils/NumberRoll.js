
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/NumberRoll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7afd2vdphtCjKWi+cfBvmoW', 'NumberRoll');
// script/utils/NumberRoll.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumberRoll = /** @class */ (function (_super) {
    __extends(NumberRoll, _super);
    function NumberRoll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cur = 0;
        _this._target = 0;
        _this._offset = 0;
        return _this;
    }
    NumberRoll.prototype.start = function () {
        this.label = this.node.getComponent(cc.Label);
    };
    Object.defineProperty(NumberRoll.prototype, "vaule", {
        set: function (n) {
            this._target = n;
            this._offset = Math.floor((this._target - this._cur) / Math.min(30, Math.abs(this._target - this._cur)));
        },
        enumerable: false,
        configurable: true
    });
    NumberRoll.prototype.update = function (dt) {
        if (dt > 1)
            dt = 1;
        if (1 / dt < cc.game.getFrameRate() / 2) {
            this.label.string = this._target + "";
            return;
        }
        if (this._cur != this._target) {
            this._cur += this._offset;
            if (this._offset > 0 && this._cur > this._target) {
                if (window && window['xxxxx'])
                    window['xxxxx']("54");
                this._cur = this._target;
            }
            if (this._offset < 0 && this._cur < this._target) {
                this._cur = this._target;
            }
        }
        if (window && window['xxxxx'])
            window['xxxxx']("nRwMMMnQE");
        this.label.string = this._cur + "";
    };
    NumberRoll = __decorate([
        ccclass
    ], NumberRoll);
    return NumberRoll;
}(BaseUI_1.default));
exports.default = NumberRoll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcTnVtYmVyUm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUFzQ0M7UUEvQlcsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBNEJoQyxDQUFDO0lBbkNHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBTUQsc0JBQVcsNkJBQUs7YUFBaEIsVUFBaUIsQ0FBUztZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RyxDQUFDOzs7T0FBQTtJQUVELDJCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBRyxFQUFFLEdBQUMsQ0FBQztZQUFDLEVBQUUsR0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRTFCLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM5QyxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO2FBQzNCO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQTthQUMzQjtTQUNKO1FBRUQsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBckNnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBc0M5QjtJQUFELGlCQUFDO0NBdENELEFBc0NDLENBdEN1QyxnQkFBTSxHQXNDN0M7a0JBdENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi9mcmFtd29yay9CYXNlVUknO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclJvbGwgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIHByaXZhdGUgbGFiZWw6IGNjLkxhYmVsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2N1cjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3RhcmdldDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2V0IHZhdWxlKG46IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3RhcmdldCA9IG47XHJcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gTWF0aC5mbG9vcigodGhpcy5fdGFyZ2V0IC0gdGhpcy5fY3VyKSAvIE1hdGgubWluKDMwLCBNYXRoLmFicyh0aGlzLl90YXJnZXQgLSB0aGlzLl9jdXIpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZihkdD4xKWR0PTE7XHJcbiAgICAgICAgaWYgKDEgLyBkdCA8IGNjLmdhbWUuZ2V0RnJhbWVSYXRlKCkgLyAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy5fdGFyZ2V0ICsgXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1ciAhPSB0aGlzLl90YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyICs9IHRoaXMuX29mZnNldDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzZXQgPiAwICYmIHRoaXMuX2N1ciA+IHRoaXMuX3RhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiNTRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXIgPSB0aGlzLl90YXJnZXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fb2Zmc2V0IDwgMCAmJiB0aGlzLl9jdXIgPCB0aGlzLl90YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1ciA9IHRoaXMuX3RhcmdldFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJuUndNTU1uUUVcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLl9jdXIgKyBcIlwiO1xyXG4gICAgfVxyXG59Il19