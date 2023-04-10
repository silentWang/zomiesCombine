
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvU2hha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRCLHlCQUFpQjtJQUE3QztRQUFBLHFFQXlEQztRQXREVyxnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixpQkFBVyxHQUFVLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFVLENBQUMsQ0FBQzs7SUFtRG5DLENBQUM7Y0F6RGEsS0FBSztJQVFSLGdDQUFnQixHQUF2QixVQUF3QixRQUFlLEVBQUMsVUFBaUIsRUFBQyxVQUFpQjtRQUV2RSxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNXLFlBQU0sR0FBcEIsVUFBcUIsUUFBZSxFQUFDLFVBQWlCLEVBQUMsVUFBaUI7UUFFcEUsSUFBSSxHQUFHLEdBQVMsSUFBSSxPQUFLLEVBQUUsQ0FBQztRQUM1QixHQUFHLENBQUMsZ0JBQWdCLENBQUUsUUFBUSxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUUsQ0FBQztRQUN2RCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTSwrQkFBZSxHQUF0QixVQUF1QixNQUFjO1FBRWpDLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsSUFBVztRQUVyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ1csNkJBQWEsR0FBckIsY0FBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRSwyQkFBVyxHQUFsQixVQUFtQixHQUFVLEVBQUMsR0FBVTtRQUVwQyxJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFDVyw2QkFBYSxHQUFyQixjQUF5QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhELG9CQUFJLEdBQVg7UUFFSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRTNFLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOztJQXhEUyxLQUFLO1FBRGxCLE9BQU87T0FDTSxLQUFLLENBeURsQjtJQUFELFlBQUM7Q0F6REQsQUF5REMsQ0F6RDJCLEVBQUUsQ0FBQyxjQUFjLEdBeUQ1QztBQXpEYSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG4gXG5AY2NjbGFzc1xuZXhwb3J0ICBjbGFzcyBTaGFrZSBleHRlbmRzIGNjLkFjdGlvbkludGVydmFsXG57XG4gXG4gICAgcHJpdmF0ZSBfaW5pdGlhbF94Om51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbF95Om51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc3RyZW5ndGhfeDpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3N0cmVuZ3RoX3k6bnVtYmVyID0gMDtcbiBcbiAgICBwdWJsaWMgaW5pdFdpdGhEdXJhdGlvbihkdXJhdGlvbjpudW1iZXIsc3RyZW5ndGhfeDpudW1iZXIsc3RyZW5ndGhfeTpudW1iZXIpOmJvb2xlYW5cbiAgICB7XG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnaW5pdFdpdGhEdXJhdGlvbiddLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fc3RyZW5ndGhfeCA9IHN0cmVuZ3RoX3g7XG4gICAgICAgIHRoaXMuX3N0cmVuZ3RoX3kgPSBzdHJlbmd0aF95O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogIOWIm+W7uuaKluWKqOWKqOeUu1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiAgICAg5Yqo55S75oyB57ut5pe26ZW/XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmVuZ3RoX3ggICDmipbliqjluYXluqbvvJogeOaWueWQkVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlbmd0aF95ICAg5oqW5Yqo5bmF5bqm77yaIHnmlrnlkJFcbiAgICAgKiBAcmV0dXJucyB7U2hha2V9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZHVyYXRpb246bnVtYmVyLHN0cmVuZ3RoX3g6bnVtYmVyLHN0cmVuZ3RoX3k6bnVtYmVyKTpTaGFrZVxuICAgIHtcbiAgICAgICAgbGV0IGFjdDpTaGFrZSA9IG5ldyBTaGFrZSgpO1xuICAgICAgICBhY3QuaW5pdFdpdGhEdXJhdGlvbiggZHVyYXRpb24sc3RyZW5ndGhfeCxzdHJlbmd0aF95ICk7XG4gICAgICAgIHJldHVybiBhY3Q7XG4gICAgfVxuIFxuICAgIHB1YmxpYyBzdGFydFdpdGhUYXJnZXQodGFyZ2V0OmNjLk5vZGUpOnZvaWRcbiAgICB7XG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnc3RhcnRXaXRoVGFyZ2V0J10uYXBwbHkodGhpcyxhcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9pbml0aWFsX3ggPSB0YXJnZXQueDtcbiAgICAgICAgdGhpcy5faW5pdGlhbF95ID0gdGFyZ2V0Lnk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyB1cGRhdGUodGltZTpudW1iZXIpOnZvaWRcbiAgICB7XG4gICAgICAgIGxldCByYW5keCA9IHRoaXMuZmdSYW5nZVJhbmQoLXRoaXMuX3N0cmVuZ3RoX3gsdGhpcy5fc3RyZW5ndGhfeCk7XG4gICAgICAgIGxldCByYW5keSA9IHRoaXMuZmdSYW5nZVJhbmQoLXRoaXMuX3N0cmVuZ3RoX3ksdGhpcy5fc3RyZW5ndGhfeSk7XG4gICAgICAgIHRoaXMuZ2V0VGFyZ2V0KCkuc2V0UG9zaXRpb24ocmFuZHggKyB0aGlzLl9pbml0aWFsX3gscmFuZHkgKyB0aGlzLl9pbml0aWFsX3kpO1xuICAgIH1cbiAgICAgICAgcHJpdmF0ZSBaR0JSX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwieVlaUGhkcjh6V0Y3d0F4Q1IzZmVUQmQybXpXc0pcIik7IH1cbiAgICBcbiAgICBwdWJsaWMgZmdSYW5nZVJhbmQobWluOm51bWJlcixtYXg6bnVtYmVyKTpudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBybmQ6bnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmV0dXJuIHJuZCAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cbiAgICAgICAgcHJpdmF0ZSBpWGJRX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiVGloV3ljalBOSFRBQ04zNFwiKTsgfVxuIFxuICAgIHB1YmxpYyBzdG9wKCk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5nZXRUYXJnZXQoKS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLl9pbml0aWFsX3gsdGhpcy5faW5pdGlhbF95KSk7XG4gXG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnc3RvcCddLmFwcGx5KHRoaXMpO1xuICAgIH1cbn0iXX0=