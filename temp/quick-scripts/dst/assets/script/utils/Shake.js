
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
    Shake.prototype.ZGBR_xxxx_fun = function () { console.log("yYZPhdr8zWF7wAxCR3feTBd2mzWsJ"); };
    Shake.prototype.fgRangeRand = function (min, max) {
        var rnd = Math.random();
        return rnd * (max - min) + min;
    };
    Shake.prototype.iXbQ_xxxx_fun = function () { console.log("TihWycjPNHTACN34"); };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcU2hha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRCLHlCQUFpQjtJQUE3QztRQUFBLHFFQXlEQztRQXREVyxnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixpQkFBVyxHQUFVLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFVLENBQUMsQ0FBQzs7SUFtRG5DLENBQUM7Y0F6RGEsS0FBSztJQVFSLGdDQUFnQixHQUF2QixVQUF3QixRQUFlLEVBQUMsVUFBaUIsRUFBQyxVQUFpQjtRQUV2RSxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNXLFlBQU0sR0FBcEIsVUFBcUIsUUFBZSxFQUFDLFVBQWlCLEVBQUMsVUFBaUI7UUFFcEUsSUFBSSxHQUFHLEdBQVMsSUFBSSxPQUFLLEVBQUUsQ0FBQztRQUM1QixHQUFHLENBQUMsZ0JBQWdCLENBQUUsUUFBUSxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUUsQ0FBQztRQUN2RCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTSwrQkFBZSxHQUF0QixVQUF1QixNQUFjO1FBRWpDLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsSUFBVztRQUVyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ1csNkJBQWEsR0FBckIsY0FBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRSwyQkFBVyxHQUFsQixVQUFtQixHQUFVLEVBQUMsR0FBVTtRQUVwQyxJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFDVyw2QkFBYSxHQUFyQixjQUF5QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhELG9CQUFJLEdBQVg7UUFFSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRTNFLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOztJQXhEUyxLQUFLO1FBRGxCLE9BQU87T0FDTSxLQUFLLENBeURsQjtJQUFELFlBQUM7Q0F6REQsQUF5REMsQ0F6RDJCLEVBQUUsQ0FBQyxjQUFjLEdBeUQ1QztBQXpEYSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuIFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgIGNsYXNzIFNoYWtlIGV4dGVuZHMgY2MuQWN0aW9uSW50ZXJ2YWxcclxue1xyXG4gXHJcbiAgICBwcml2YXRlIF9pbml0aWFsX3g6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2luaXRpYWxfeTpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc3RyZW5ndGhfeDpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc3RyZW5ndGhfeTpudW1iZXIgPSAwO1xyXG4gXHJcbiAgICBwdWJsaWMgaW5pdFdpdGhEdXJhdGlvbihkdXJhdGlvbjpudW1iZXIsc3RyZW5ndGhfeDpudW1iZXIsc3RyZW5ndGhfeTpudW1iZXIpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGVbJ2luaXRXaXRoRHVyYXRpb24nXS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5fc3RyZW5ndGhfeCA9IHN0cmVuZ3RoX3g7XHJcbiAgICAgICAgdGhpcy5fc3RyZW5ndGhfeSA9IHN0cmVuZ3RoX3k7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDliJvlu7rmipbliqjliqjnlLtcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiAgICAg5Yqo55S75oyB57ut5pe26ZW/XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhfeCAgIOaKluWKqOW5heW6pu+8miB45pa55ZCRXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhfeSAgIOaKluWKqOW5heW6pu+8miB55pa55ZCRXHJcbiAgICAgKiBAcmV0dXJucyB7U2hha2V9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGR1cmF0aW9uOm51bWJlcixzdHJlbmd0aF94Om51bWJlcixzdHJlbmd0aF95Om51bWJlcik6U2hha2VcclxuICAgIHtcclxuICAgICAgICBsZXQgYWN0OlNoYWtlID0gbmV3IFNoYWtlKCk7XHJcbiAgICAgICAgYWN0LmluaXRXaXRoRHVyYXRpb24oIGR1cmF0aW9uLHN0cmVuZ3RoX3gsc3RyZW5ndGhfeSApO1xyXG4gICAgICAgIHJldHVybiBhY3Q7XHJcbiAgICB9XHJcbiBcclxuICAgIHB1YmxpYyBzdGFydFdpdGhUYXJnZXQodGFyZ2V0OmNjLk5vZGUpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGVbJ3N0YXJ0V2l0aFRhcmdldCddLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLl9pbml0aWFsX3ggPSB0YXJnZXQueDtcclxuICAgICAgICB0aGlzLl9pbml0aWFsX3kgPSB0YXJnZXQueTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lOm51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByYW5keCA9IHRoaXMuZmdSYW5nZVJhbmQoLXRoaXMuX3N0cmVuZ3RoX3gsdGhpcy5fc3RyZW5ndGhfeCk7XHJcbiAgICAgICAgbGV0IHJhbmR5ID0gdGhpcy5mZ1JhbmdlUmFuZCgtdGhpcy5fc3RyZW5ndGhfeSx0aGlzLl9zdHJlbmd0aF95KTtcclxuICAgICAgICB0aGlzLmdldFRhcmdldCgpLnNldFBvc2l0aW9uKHJhbmR4ICsgdGhpcy5faW5pdGlhbF94LHJhbmR5ICsgdGhpcy5faW5pdGlhbF95KTtcclxuICAgIH1cclxuICAgICAgICBwcml2YXRlIFpHQlJfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJ5WVpQaGRyOHpXRjd3QXhDUjNmZVRCZDJteldzSlwiKTsgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZmdSYW5nZVJhbmQobWluOm51bWJlcixtYXg6bnVtYmVyKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgcm5kOm51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgcmV0dXJuIHJuZCAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgfVxyXG4gICAgICAgIHByaXZhdGUgaVhiUV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIlRpaFd5Y2pQTkhUQUNOMzRcIik7IH1cclxuIFxyXG4gICAgcHVibGljIHN0b3AoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nZXRUYXJnZXQoKS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLl9pbml0aWFsX3gsdGhpcy5faW5pdGlhbF95KSk7XHJcbiBcclxuICAgICAgICBjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGVbJ3N0b3AnXS5hcHBseSh0aGlzKTtcclxuICAgIH1cclxufSJdfQ==