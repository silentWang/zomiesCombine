
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcU2hha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRCLHlCQUFpQjtJQUE3QztRQUFBLHFFQThEQztRQTNEVyxnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixpQkFBVyxHQUFVLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFVLENBQUMsQ0FBQzs7SUF3RG5DLENBQUM7Y0E5RGEsS0FBSztJQVFSLGdDQUFnQixHQUF2QixVQUF3QixRQUFlLEVBQUMsVUFBaUIsRUFBQyxVQUFpQjtRQUV2RSxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDVyxZQUFNLEdBQXBCLFVBQXFCLFFBQWUsRUFBQyxVQUFpQixFQUFDLFVBQWlCO1FBRXBFLElBQUksR0FBRyxHQUFTLElBQUksT0FBSyxFQUFFLENBQUM7UUFDNUIsR0FBRyxDQUFDLGdCQUFnQixDQUFFLFFBQVEsRUFBQyxVQUFVLEVBQUMsVUFBVSxDQUFFLENBQUM7UUFDdkQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ1csNkJBQWEsR0FBckIsY0FBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuRSwrQkFBZSxHQUF0QixVQUF1QixNQUFjO1FBRWpDLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUM3RSxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLElBQVc7UUFFckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNXLDZCQUFhLEdBQXJCLGNBQXlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckUsMkJBQVcsR0FBbEIsVUFBbUIsR0FBVSxFQUFDLEdBQVU7UUFFcEMsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbkMsQ0FBQztJQUNXLDZCQUFhLEdBQXJCLGNBQXlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEQsb0JBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFM0UsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOztJQTdEUyxLQUFLO1FBRGxCLE9BQU87T0FDTSxLQUFLLENBOERsQjtJQUFELFlBQUM7Q0E5REQsQUE4REMsQ0E5RDJCLEVBQUUsQ0FBQyxjQUFjLEdBOEQ1QztBQTlEYSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuIFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgIGNsYXNzIFNoYWtlIGV4dGVuZHMgY2MuQWN0aW9uSW50ZXJ2YWxcclxue1xyXG4gXHJcbiAgICBwcml2YXRlIF9pbml0aWFsX3g6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2luaXRpYWxfeTpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc3RyZW5ndGhfeDpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc3RyZW5ndGhfeTpudW1iZXIgPSAwO1xyXG4gXHJcbiAgICBwdWJsaWMgaW5pdFdpdGhEdXJhdGlvbihkdXJhdGlvbjpudW1iZXIsc3RyZW5ndGhfeDpudW1iZXIsc3RyZW5ndGhfeTpudW1iZXIpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGVbJ2luaXRXaXRoRHVyYXRpb24nXS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5fc3RyZW5ndGhfeCA9IHN0cmVuZ3RoX3g7XHJcbiAgICAgICAgdGhpcy5fc3RyZW5ndGhfeSA9IHN0cmVuZ3RoX3k7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ0YnI0alwiKTtcclxuICAgICAqICDliJvlu7rmipbliqjliqjnlLtcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiAgICAg5Yqo55S75oyB57ut5pe26ZW/XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhfeCAgIOaKluWKqOW5heW6pu+8miB45pa55ZCRXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhfeSAgIOaKluWKqOW5heW6pu+8miB55pa55ZCRXHJcbiAgICAgKiBAcmV0dXJucyB7U2hha2V9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGR1cmF0aW9uOm51bWJlcixzdHJlbmd0aF94Om51bWJlcixzdHJlbmd0aF95Om51bWJlcik6U2hha2VcclxuICAgIHtcclxuICAgICAgICBsZXQgYWN0OlNoYWtlID0gbmV3IFNoYWtlKCk7XHJcbiAgICAgICAgYWN0LmluaXRXaXRoRHVyYXRpb24oIGR1cmF0aW9uLHN0cmVuZ3RoX3gsc3RyZW5ndGhfeSApO1xyXG4gICAgICAgIHJldHVybiBhY3Q7XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBCRHNZX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiaGNZeVpXUHNjbTZpbWttR2JHc0tGZlA1V0hSXCIpOyB9XHJcbiBcclxuICAgIHB1YmxpYyBzdGFydFdpdGhUYXJnZXQodGFyZ2V0OmNjLk5vZGUpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIzTktKd0daRjdZN1JoUnAzRVlGZGNDNGJRWGpcIik7XHJcbiAgICAgICAgY2MuQWN0aW9uSW50ZXJ2YWwucHJvdG90eXBlWydzdGFydFdpdGhUYXJnZXQnXS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbF94ID0gdGFyZ2V0Lng7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbF95ID0gdGFyZ2V0Lnk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyB1cGRhdGUodGltZTpudW1iZXIpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmFuZHggPSB0aGlzLmZnUmFuZ2VSYW5kKC10aGlzLl9zdHJlbmd0aF94LHRoaXMuX3N0cmVuZ3RoX3gpO1xyXG4gICAgICAgIGxldCByYW5keSA9IHRoaXMuZmdSYW5nZVJhbmQoLXRoaXMuX3N0cmVuZ3RoX3ksdGhpcy5fc3RyZW5ndGhfeSk7XHJcbiAgICAgICAgdGhpcy5nZXRUYXJnZXQoKS5zZXRQb3NpdGlvbihyYW5keCArIHRoaXMuX2luaXRpYWxfeCxyYW5keSArIHRoaXMuX2luaXRpYWxfeSk7XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBaR0JSX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwieVlaUGhkcjh6V0Y3d0F4Q1IzZmVUQmQybXpXc0pcIik7IH1cclxuICAgIFxyXG4gICAgcHVibGljIGZnUmFuZ2VSYW5kKG1pbjpudW1iZXIsbWF4Om51bWJlcik6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiTU1XaU00S2lRa1F6ZjhzXCIpO1xyXG4gICAgICAgIGxldCBybmQ6bnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICByZXR1cm4gcm5kICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBpWGJRX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiVGloV3ljalBOSFRBQ04zNFwiKTsgfVxyXG4gXHJcbiAgICBwdWJsaWMgc3RvcCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdldFRhcmdldCgpLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHRoaXMuX2luaXRpYWxfeCx0aGlzLl9pbml0aWFsX3kpKTtcclxuIFxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInpucGFYY2hNREtoVFJyTWFCQWJod0VzYlwiKTtcclxuICAgICAgICBjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGVbJ3N0b3AnXS5hcHBseSh0aGlzKTtcclxuICAgIH1cclxufSJdfQ==