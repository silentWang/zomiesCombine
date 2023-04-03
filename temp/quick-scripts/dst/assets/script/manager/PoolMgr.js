
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxQb29sTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBQTtRQUVJLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUVsQixnQkFBVyxHQUFnQixFQUFFLENBQUM7SUEyRGxDLENBQUM7Z0JBaEVvQixPQUFPO0lBUVYsZ0JBQVEsR0FBdEI7UUFDSSxJQUFJLFNBQU8sQ0FBQyxTQUFTLElBQUksSUFBSTtZQUN6QixTQUFPLENBQUMsU0FBUyxHQUFHLElBQUksU0FBTyxFQUFFLENBQUE7UUFDckMsT0FBTyxTQUFPLENBQUMsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBVyxHQUFYO1FBQUEsaUJBZ0JDO1FBZkcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNqRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ2hELElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87YUFDVjtZQUNELEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQkFBUSxHQUFSLFVBQVMsR0FBUSxFQUFFLE1BQWlCLEVBQUUsS0FBYTtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxHQUFRO1FBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNsRDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7O1lBRUcsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVEsRUFBRSxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLDRDQUE0QztRQUM1QyxlQUFlO1FBQ2YscURBQXFEO1FBQ3JELElBQUk7SUFDUixDQUFDOztJQXhEYyxpQkFBUyxHQUFZLElBQUksQ0FBQztJQVB4QixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBZ0UzQjtJQUFELGNBQUM7Q0FoRUQsQUFnRUMsSUFBQTtrQkFoRW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb29sTWdyIHtcclxuXHJcbiAgICBwb29sczogYW55ID0ge307XHJcbiAgICBwcmVmYWJzOiBhbnkgPSB7fTtcclxuXHJcbiAgICBwcmVfYnVsbGV0czogY2MuUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBvb2xNZ3IgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBQb29sTWdyIHtcclxuICAgICAgICBpZiAoUG9vbE1nci5faW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgUG9vbE1nci5faW5zdGFuY2UgPSBuZXcgUG9vbE1ncigpXHJcbiAgICAgICAgcmV0dXJuIFBvb2xNZ3IuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcmVmYWJzKCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicHJlZmFiL0NvaW5cIiwgY2MuUHJlZmFiLCAoZXJyLCByZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluaXRQb29sKFwiQ29pblwiLCByZXQsIDExKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwcmVmYWIvR2VtXCIsIGNjLlByZWZhYiwgKGVyciwgcmV0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbml0UG9vbChcIkdlbVwiLCByZXQsIDExKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UG9vbChrZXk6IGFueSwgcHJlZmFiOiBjYy5QcmVmYWIsIGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByZWZhYnNba2V5XSA9IHByZWZhYjtcclxuICAgICAgICB0aGlzLnBvb2xzW2tleV0gPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5wb29sc1trZXldLnB1dChjYy5pbnN0YW50aWF0ZShwcmVmYWIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGtleTogYW55KTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbHNba2V5XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5rKh5pyJXCIgKyBrZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbHNba2V5XS5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5wb29sc1trZXldLmdldCgpO1xyXG4gICAgICAgICAgICB2YXIgc3BpbmUgPSBub2RlLmdldENoaWxkQnlOYW1lKFwic3BpbmVcIik7XHJcbiAgICAgICAgICAgIGlmIChzcGluZSkge1xyXG4gICAgICAgICAgICAgICAgc3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJzW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dChrZXk6IGFueSwgbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMucG9vbHNba2V5XS5wdXQobm9kZSk7XHJcbiAgICAgICAgLy8gdmFyIHNwaW5lID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpO1xyXG4gICAgICAgIC8vIGlmIChzcGluZSkge1xyXG4gICAgICAgIC8vICAgICBzcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19