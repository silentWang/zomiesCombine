
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
     if(window && window['xxxxx']) window['xxxxx']("tbr4j");
     *  创建抖动动画
     * @param {number} duration     动画持续时长
     * @param {number} strength_x   抖动幅度： x方向
     * @param {number} strength_y   抖动幅度： y方向
     * @returns {Shake}
     */
    Shake.create = function (duration, strength_x, strength_y) {
        if (window && window['xxxxx'])
            window['xxxxx']("gdsaewdcfgs");
        var act = new Shake_1();
        act.initWithDuration(duration, strength_x, strength_y);
        return act;
    };
    Shake.prototype.BDsY_xxxx_fun = function () { console.log("hcYyZWPscm6imkmGbGsKFfP5WHR"); };
    Shake.prototype.startWithTarget = function (target) {
        if (window && window['xxxxx'])
            window['xxxxx']("3NKJwGZF7Y7RhRp3EYFdcC4bQXj");
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
        if (window && window['xxxxx'])
            window['xxxxx']("MMWiM4KiQkQzf8s");
        var rnd = Math.random();
        return rnd * (max - min) + min;
    };
    Shake.prototype.iXbQ_xxxx_fun = function () { console.log("TihWycjPNHTACN34"); };
    Shake.prototype.stop = function () {
        this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y));
        if (window && window['xxxxx'])
            window['xxxxx']("znpaXchMDKhTRrMaBAbhwEsb");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvU2hha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRCLHlCQUFpQjtJQUE3QztRQUFBLHFFQStEQztRQTVEVyxnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixpQkFBVyxHQUFVLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFVLENBQUMsQ0FBQzs7SUF5RG5DLENBQUM7Y0EvRGEsS0FBSztJQVFSLGdDQUFnQixHQUF2QixVQUF3QixRQUFlLEVBQUMsVUFBaUIsRUFBQyxVQUFpQjtRQUV2RSxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDVyxZQUFNLEdBQXBCLFVBQXFCLFFBQWUsRUFBQyxVQUFpQixFQUFDLFVBQWlCO1FBRXBFLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBSSxHQUFHLEdBQVMsSUFBSSxPQUFLLEVBQUUsQ0FBQztRQUM1QixHQUFHLENBQUMsZ0JBQWdCLENBQUUsUUFBUSxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUUsQ0FBQztRQUN2RCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDVyw2QkFBYSxHQUFyQixjQUF5QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5FLCtCQUFlLEdBQXRCLFVBQXVCLE1BQWM7UUFFakMsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzdFLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsSUFBVztRQUVyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ1csNkJBQWEsR0FBckIsY0FBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRSwyQkFBVyxHQUFsQixVQUFtQixHQUFVLEVBQUMsR0FBVTtRQUVwQyxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakUsSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNuQyxDQUFDO0lBQ1csNkJBQWEsR0FBckIsY0FBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV4RCxvQkFBSSxHQUFYO1FBRUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUUzRSxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDMUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7O0lBOURTLEtBQUs7UUFEbEIsT0FBTztPQUNNLEtBQUssQ0ErRGxCO0lBQUQsWUFBQztDQS9ERCxBQStEQyxDQS9EMkIsRUFBRSxDQUFDLGNBQWMsR0ErRDVDO0FBL0RhLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbiBcbkBjY2NsYXNzXG5leHBvcnQgIGNsYXNzIFNoYWtlIGV4dGVuZHMgY2MuQWN0aW9uSW50ZXJ2YWxcbntcbiBcbiAgICBwcml2YXRlIF9pbml0aWFsX3g6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9pbml0aWFsX3k6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zdHJlbmd0aF94Om51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc3RyZW5ndGhfeTpudW1iZXIgPSAwO1xuIFxuICAgIHB1YmxpYyBpbml0V2l0aER1cmF0aW9uKGR1cmF0aW9uOm51bWJlcixzdHJlbmd0aF94Om51bWJlcixzdHJlbmd0aF95Om51bWJlcik6Ym9vbGVhblxuICAgIHtcbiAgICAgICAgY2MuQWN0aW9uSW50ZXJ2YWwucHJvdG90eXBlWydpbml0V2l0aER1cmF0aW9uJ10uYXBwbHkodGhpcyxhcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9zdHJlbmd0aF94ID0gc3RyZW5ndGhfeDtcbiAgICAgICAgdGhpcy5fc3RyZW5ndGhfeSA9IHN0cmVuZ3RoX3k7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwidGJyNGpcIik7XG4gICAgICogIOWIm+W7uuaKluWKqOWKqOeUu1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiAgICAg5Yqo55S75oyB57ut5pe26ZW/XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmVuZ3RoX3ggICDmipbliqjluYXluqbvvJogeOaWueWQkVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlbmd0aF95ICAg5oqW5Yqo5bmF5bqm77yaIHnmlrnlkJFcbiAgICAgKiBAcmV0dXJucyB7U2hha2V9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZHVyYXRpb246bnVtYmVyLHN0cmVuZ3RoX3g6bnVtYmVyLHN0cmVuZ3RoX3k6bnVtYmVyKTpTaGFrZVxuICAgIHtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZ2RzYWV3ZGNmZ3NcIik7XG4gICAgICAgIGxldCBhY3Q6U2hha2UgPSBuZXcgU2hha2UoKTtcbiAgICAgICAgYWN0LmluaXRXaXRoRHVyYXRpb24oIGR1cmF0aW9uLHN0cmVuZ3RoX3gsc3RyZW5ndGhfeSApO1xuICAgICAgICByZXR1cm4gYWN0O1xuICAgIH1cbiAgICAgICAgcHJpdmF0ZSBCRHNZX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiaGNZeVpXUHNjbTZpbWttR2JHc0tGZlA1V0hSXCIpOyB9XG4gXG4gICAgcHVibGljIHN0YXJ0V2l0aFRhcmdldCh0YXJnZXQ6Y2MuTm9kZSk6dm9pZFxuICAgIHtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiM05LSndHWkY3WTdSaFJwM0VZRmRjQzRiUVhqXCIpO1xuICAgICAgICBjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGVbJ3N0YXJ0V2l0aFRhcmdldCddLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbF94ID0gdGFyZ2V0Lng7XG4gICAgICAgIHRoaXMuX2luaXRpYWxfeSA9IHRhcmdldC55O1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgdXBkYXRlKHRpbWU6bnVtYmVyKTp2b2lkXG4gICAge1xuICAgICAgICBsZXQgcmFuZHggPSB0aGlzLmZnUmFuZ2VSYW5kKC10aGlzLl9zdHJlbmd0aF94LHRoaXMuX3N0cmVuZ3RoX3gpO1xuICAgICAgICBsZXQgcmFuZHkgPSB0aGlzLmZnUmFuZ2VSYW5kKC10aGlzLl9zdHJlbmd0aF95LHRoaXMuX3N0cmVuZ3RoX3kpO1xuICAgICAgICB0aGlzLmdldFRhcmdldCgpLnNldFBvc2l0aW9uKHJhbmR4ICsgdGhpcy5faW5pdGlhbF94LHJhbmR5ICsgdGhpcy5faW5pdGlhbF95KTtcbiAgICB9XG4gICAgICAgIHByaXZhdGUgWkdCUl94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcInlZWlBoZHI4eldGN3dBeENSM2ZlVEJkMm16V3NKXCIpOyB9XG4gICAgXG4gICAgcHVibGljIGZnUmFuZ2VSYW5kKG1pbjpudW1iZXIsbWF4Om51bWJlcik6bnVtYmVyXG4gICAge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJNTVdpTTRLaVFrUXpmOHNcIik7XG4gICAgICAgIGxldCBybmQ6bnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmV0dXJuIHJuZCAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cbiAgICAgICAgcHJpdmF0ZSBpWGJRX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiVGloV3ljalBOSFRBQ04zNFwiKTsgfVxuIFxuICAgIHB1YmxpYyBzdG9wKCk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5nZXRUYXJnZXQoKS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLl9pbml0aWFsX3gsdGhpcy5faW5pdGlhbF95KSk7XG4gXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInpucGFYY2hNREtoVFJyTWFCQWJod0VzYlwiKTtcbiAgICAgICAgY2MuQWN0aW9uSW50ZXJ2YWwucHJvdG90eXBlWydzdG9wJ10uYXBwbHkodGhpcyk7XG4gICAgfVxufSJdfQ==