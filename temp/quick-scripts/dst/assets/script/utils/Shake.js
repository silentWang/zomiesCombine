
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/Shake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '776856yN0hDUJ9tpRE0AmLJ', 'Shake');
// script/utils/Shake.ts

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
exports.Shake = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initial_x = 0;
        _this._initial_y = 0;
        _this._strength_x = 0;
        _this._strength_y = 0;
        return _this;
    }
    Shake_1 = Shake;
    Shake.prototype.initWithDuration = function (duration, strength_x, strength_y) {
        cc.ActionInterval.prototype['initWithDuration'].apply(this, arguments);
        this._strength_x = strength_x;
        this._strength_y = strength_y;
        return true;
    };
    /**
     *  创建抖动动画
     * @param {number} duration     动画持续时长
     * @param {number} strength_x   抖动幅度： x方向
     * @param {number} strength_y   抖动幅度： y方向
     * @returns {Shake}
     */
    Shake.create = function (duration, strength_x, strength_y) {
        var act = new Shake_1();
        act.initWithDuration(duration, strength_x, strength_y);
        return act;
    };
    Shake.prototype.startWithTarget = function (target) {
        cc.ActionInterval.prototype['startWithTarget'].apply(this, arguments);
        this._initial_x = target.x;
        this._initial_y = target.y;
    };
    Shake.prototype.update = function (time) {
        var randx = this.fgRangeRand(-this._strength_x, this._strength_x);
        var randy = this.fgRangeRand(-this._strength_y, this._strength_y);
        this.getTarget().setPosition(randx + this._initial_x, randy + this._initial_y);
    };
    Shake.prototype.fgRangeRand = function (min, max) {
        var rnd = Math.random();
        return rnd * (max - min) + min;
    };
    Shake.prototype.stop = function () {
        this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y));
        cc.ActionInterval.prototype['stop'].apply(this);
    };
    var Shake_1;
    Shake = Shake_1 = __decorate([
        ccclass
    ], Shake);
    return Shake;
}(cc.ActionInterval));
exports.Shake = Shake;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcU2hha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRCLHlCQUFpQjtJQUE3QztRQUFBLHFFQXVEQztRQXBEVyxnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixpQkFBVyxHQUFVLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFVLENBQUMsQ0FBQzs7SUFpRG5DLENBQUM7Y0F2RGEsS0FBSztJQVFSLGdDQUFnQixHQUF2QixVQUF3QixRQUFlLEVBQUMsVUFBaUIsRUFBQyxVQUFpQjtRQUV2RSxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNXLFlBQU0sR0FBcEIsVUFBcUIsUUFBZSxFQUFDLFVBQWlCLEVBQUMsVUFBaUI7UUFFcEUsSUFBSSxHQUFHLEdBQVMsSUFBSSxPQUFLLEVBQUUsQ0FBQztRQUM1QixHQUFHLENBQUMsZ0JBQWdCLENBQUUsUUFBUSxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUUsQ0FBQztRQUN2RCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTSwrQkFBZSxHQUF0QixVQUF1QixNQUFjO1FBRWpDLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsSUFBVztRQUVyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sMkJBQVcsR0FBbEIsVUFBbUIsR0FBVSxFQUFDLEdBQVU7UUFFcEMsSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNuQyxDQUFDO0lBRU0sb0JBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFM0UsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7O0lBdERTLEtBQUs7UUFEbEIsT0FBTztPQUNNLEtBQUssQ0F1RGxCO0lBQUQsWUFBQztDQXZERCxBQXVEQyxDQXZEMkIsRUFBRSxDQUFDLGNBQWMsR0F1RDVDO0FBdkRhLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG4gXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCAgY2xhc3MgU2hha2UgZXh0ZW5kcyBjYy5BY3Rpb25JbnRlcnZhbFxyXG57XHJcbiBcclxuICAgIHByaXZhdGUgX2luaXRpYWxfeDpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfaW5pdGlhbF95Om51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9zdHJlbmd0aF94Om51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9zdHJlbmd0aF95Om51bWJlciA9IDA7XHJcbiBcclxuICAgIHB1YmxpYyBpbml0V2l0aER1cmF0aW9uKGR1cmF0aW9uOm51bWJlcixzdHJlbmd0aF94Om51bWJlcixzdHJlbmd0aF95Om51bWJlcik6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnaW5pdFdpdGhEdXJhdGlvbiddLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLl9zdHJlbmd0aF94ID0gc3RyZW5ndGhfeDtcclxuICAgICAgICB0aGlzLl9zdHJlbmd0aF95ID0gc3RyZW5ndGhfeTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWIm+W7uuaKluWKqOWKqOeUu1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uICAgICDliqjnlLvmjIHnu63ml7bplb9cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlbmd0aF94ICAg5oqW5Yqo5bmF5bqm77yaIHjmlrnlkJFcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlbmd0aF95ICAg5oqW5Yqo5bmF5bqm77yaIHnmlrnlkJFcclxuICAgICAqIEByZXR1cm5zIHtTaGFrZX1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZHVyYXRpb246bnVtYmVyLHN0cmVuZ3RoX3g6bnVtYmVyLHN0cmVuZ3RoX3k6bnVtYmVyKTpTaGFrZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhY3Q6U2hha2UgPSBuZXcgU2hha2UoKTtcclxuICAgICAgICBhY3QuaW5pdFdpdGhEdXJhdGlvbiggZHVyYXRpb24sc3RyZW5ndGhfeCxzdHJlbmd0aF95ICk7XHJcbiAgICAgICAgcmV0dXJuIGFjdDtcclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIHN0YXJ0V2l0aFRhcmdldCh0YXJnZXQ6Y2MuTm9kZSk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnc3RhcnRXaXRoVGFyZ2V0J10uYXBwbHkodGhpcyxhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxfeCA9IHRhcmdldC54O1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxfeSA9IHRhcmdldC55O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgdXBkYXRlKHRpbWU6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhbmR4ID0gdGhpcy5mZ1JhbmdlUmFuZCgtdGhpcy5fc3RyZW5ndGhfeCx0aGlzLl9zdHJlbmd0aF94KTtcclxuICAgICAgICBsZXQgcmFuZHkgPSB0aGlzLmZnUmFuZ2VSYW5kKC10aGlzLl9zdHJlbmd0aF95LHRoaXMuX3N0cmVuZ3RoX3kpO1xyXG4gICAgICAgIHRoaXMuZ2V0VGFyZ2V0KCkuc2V0UG9zaXRpb24ocmFuZHggKyB0aGlzLl9pbml0aWFsX3gscmFuZHkgKyB0aGlzLl9pbml0aWFsX3kpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZmdSYW5nZVJhbmQobWluOm51bWJlcixtYXg6bnVtYmVyKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgcm5kOm51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgcmV0dXJuIHJuZCAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgc3RvcCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdldFRhcmdldCgpLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHRoaXMuX2luaXRpYWxfeCx0aGlzLl9pbml0aWFsX3kpKTtcclxuIFxyXG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnc3RvcCddLmFwcGx5KHRoaXMpO1xyXG4gICAgfVxyXG59Il19