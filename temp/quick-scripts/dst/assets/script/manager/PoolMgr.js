
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/PoolMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96c22QZQoJEzrsdfStlsM1E', 'PoolMgr');
// script/manager/PoolMgr.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PoolMgr = /** @class */ (function () {
    function PoolMgr() {
        this.pools = {};
        this.prefabs = {};
        this.pre_bullets = [];
    }
    PoolMgr_1 = PoolMgr;
    PoolMgr.Instance = function () {
        if (PoolMgr_1._instance == null)
            PoolMgr_1._instance = new PoolMgr_1();
        return PoolMgr_1._instance;
    };
    PoolMgr.prototype.loadPrefabs = function () {
        var _this = this;
        cc.loader.loadRes("prefab/Coin", cc.Prefab, function (err, ret) {
            if (err) {
                console.log(err);
                return;
            }
            if (window && window['xxxxx'])
                window['xxxxx']("f7P");
            _this.initPool("Coin", ret, 11);
        });
        cc.loader.loadRes("prefab/Gem", cc.Prefab, function (err, ret) {
            if (err) {
                console.log(err);
                return;
            }
            _this.initPool("Gem", ret, 11);
        });
    };
    PoolMgr.prototype.initPool = function (key, prefab, count) {
        this.prefabs[key] = prefab;
        this.pools[key] = new cc.NodePool();
        for (var i = 0; i < count; ++i) {
            this.pools[key].put(cc.instantiate(prefab));
        }
    };
    PoolMgr.prototype.get = function (key) {
        if (this.pools[key] == null) {
            cc.error("没有" + key);
            return null;
        }
        if (this.pools[key].size() > 0) {
            var node = this.pools[key].get();
            var spine = node.getChildByName("spine");
            if (spine) {
                spine.getComponent(sp.Skeleton).paused = false;
            }
            return node;
        }
        else
            return cc.instantiate(this.prefabs[key]);
    };
    PoolMgr.prototype.put = function (key, node) {
        this.pools[key].put(node);
        // var spine = node.getChildByName("spine");
        // if (spine) {
        //     spine.getComponent(sp.Skeleton).paused = true;
        // }
    };
    var PoolMgr_1;
    PoolMgr._instance = null;
    PoolMgr = PoolMgr_1 = __decorate([
        ccclass
    ], PoolMgr);
    return PoolMgr;
}());
exports.default = PoolMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxQb29sTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBQTtRQUVJLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUVsQixnQkFBVyxHQUFnQixFQUFFLENBQUM7SUE0RGxDLENBQUM7Z0JBakVvQixPQUFPO0lBUVYsZ0JBQVEsR0FBdEI7UUFDSSxJQUFJLFNBQU8sQ0FBQyxTQUFTLElBQUksSUFBSTtZQUN6QixTQUFPLENBQUMsU0FBUyxHQUFHLElBQUksU0FBTyxFQUFFLENBQUE7UUFDckMsT0FBTyxTQUFPLENBQUMsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBVyxHQUFYO1FBQUEsaUJBaUJDO1FBaEJHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDakQsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsT0FBTzthQUNWO1lBQ0QsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNoRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMEJBQVEsR0FBUixVQUFTLEdBQVEsRUFBRSxNQUFpQixFQUFFLEtBQWE7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksR0FBUTtRQUNSLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDbEQ7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmOztZQUVHLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxHQUFRLEVBQUUsSUFBYTtRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQiw0Q0FBNEM7UUFDNUMsZUFBZTtRQUNmLHFEQUFxRDtRQUNyRCxJQUFJO0lBQ1IsQ0FBQzs7SUF6RGMsaUJBQVMsR0FBWSxJQUFJLENBQUM7SUFQeEIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWlFM0I7SUFBRCxjQUFDO0NBakVELEFBaUVDLElBQUE7a0JBakVvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbE1nciB7XHJcblxyXG4gICAgcG9vbHM6IGFueSA9IHt9O1xyXG4gICAgcHJlZmFiczogYW55ID0ge307XHJcblxyXG4gICAgcHJlX2J1bGxldHM6IGNjLlByZWZhYltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQb29sTWdyID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogUG9vbE1nciB7XHJcbiAgICAgICAgaWYgKFBvb2xNZ3IuX2luc3RhbmNlID09IG51bGwpXHJcbiAgICAgICAgICAgIFBvb2xNZ3IuX2luc3RhbmNlID0gbmV3IFBvb2xNZ3IoKVxyXG4gICAgICAgIHJldHVybiBQb29sTWdyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJlZmFicygpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInByZWZhYi9Db2luXCIsIGNjLlByZWZhYiwgKGVyciwgcmV0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZjdQXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRQb29sKFwiQ29pblwiLCByZXQsIDExKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwcmVmYWIvR2VtXCIsIGNjLlByZWZhYiwgKGVyciwgcmV0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbml0UG9vbChcIkdlbVwiLCByZXQsIDExKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UG9vbChrZXk6IGFueSwgcHJlZmFiOiBjYy5QcmVmYWIsIGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByZWZhYnNba2V5XSA9IHByZWZhYjtcclxuICAgICAgICB0aGlzLnBvb2xzW2tleV0gPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5wb29sc1trZXldLnB1dChjYy5pbnN0YW50aWF0ZShwcmVmYWIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGtleTogYW55KTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbHNba2V5XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5rKh5pyJXCIgKyBrZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbHNba2V5XS5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5wb29sc1trZXldLmdldCgpO1xyXG4gICAgICAgICAgICB2YXIgc3BpbmUgPSBub2RlLmdldENoaWxkQnlOYW1lKFwic3BpbmVcIik7XHJcbiAgICAgICAgICAgIGlmIChzcGluZSkge1xyXG4gICAgICAgICAgICAgICAgc3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJzW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dChrZXk6IGFueSwgbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMucG9vbHNba2V5XS5wdXQobm9kZSk7XHJcbiAgICAgICAgLy8gdmFyIHNwaW5lID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpO1xyXG4gICAgICAgIC8vIGlmIChzcGluZSkge1xyXG4gICAgICAgIC8vICAgICBzcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19