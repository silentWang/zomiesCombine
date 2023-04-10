
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlci9Qb29sTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBQTtRQUVJLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUVsQixnQkFBVyxHQUFnQixFQUFFLENBQUM7SUEyRGxDLENBQUM7Z0JBaEVvQixPQUFPO0lBUVYsZ0JBQVEsR0FBdEI7UUFDSSxJQUFJLFNBQU8sQ0FBQyxTQUFTLElBQUksSUFBSTtZQUN6QixTQUFPLENBQUMsU0FBUyxHQUFHLElBQUksU0FBTyxFQUFFLENBQUE7UUFDckMsT0FBTyxTQUFPLENBQUMsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBVyxHQUFYO1FBQUEsaUJBZ0JDO1FBZkcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNqRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ2hELElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87YUFDVjtZQUNELEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQkFBUSxHQUFSLFVBQVMsR0FBUSxFQUFFLE1BQWlCLEVBQUUsS0FBYTtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxHQUFRO1FBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNsRDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7O1lBRUcsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVEsRUFBRSxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLDRDQUE0QztRQUM1QyxlQUFlO1FBQ2YscURBQXFEO1FBQ3JELElBQUk7SUFDUixDQUFDOztJQXhEYyxpQkFBUyxHQUFZLElBQUksQ0FBQztJQVB4QixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBZ0UzQjtJQUFELGNBQUM7Q0FoRUQsQUFnRUMsSUFBQTtrQkFoRW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvb2xNZ3Ige1xuXG4gICAgcG9vbHM6IGFueSA9IHt9O1xuICAgIHByZWZhYnM6IGFueSA9IHt9O1xuXG4gICAgcHJlX2J1bGxldHM6IGNjLlByZWZhYltdID0gW107XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBvb2xNZ3IgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogUG9vbE1nciB7XG4gICAgICAgIGlmIChQb29sTWdyLl9pbnN0YW5jZSA9PSBudWxsKVxuICAgICAgICAgICAgUG9vbE1nci5faW5zdGFuY2UgPSBuZXcgUG9vbE1ncigpXG4gICAgICAgIHJldHVybiBQb29sTWdyLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBsb2FkUHJlZmFicygpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwcmVmYWIvQ29pblwiLCBjYy5QcmVmYWIsIChlcnIsIHJldCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0UG9vbChcIkNvaW5cIiwgcmV0LCAxMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicHJlZmFiL0dlbVwiLCBjYy5QcmVmYWIsIChlcnIsIHJldCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0UG9vbChcIkdlbVwiLCByZXQsIDExKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFBvb2woa2V5OiBhbnksIHByZWZhYjogY2MuUHJlZmFiLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHJlZmFic1trZXldID0gcHJlZmFiO1xuICAgICAgICB0aGlzLnBvb2xzW2tleV0gPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2xzW2tleV0ucHV0KGNjLmluc3RhbnRpYXRlKHByZWZhYikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0KGtleTogYW55KTogY2MuTm9kZSB7XG4gICAgICAgIGlmICh0aGlzLnBvb2xzW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLmsqHmnIlcIiArIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb29sc1trZXldLnNpemUoKSA+IDApIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5wb29sc1trZXldLmdldCgpO1xuICAgICAgICAgICAgdmFyIHNwaW5lID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpO1xuICAgICAgICAgICAgaWYgKHNwaW5lKSB7XG4gICAgICAgICAgICAgICAgc3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYnNba2V5XSk7XG4gICAgfVxuXG4gICAgcHV0KGtleTogYW55LCBub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMucG9vbHNba2V5XS5wdXQobm9kZSk7XG4gICAgICAgIC8vIHZhciBzcGluZSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKTtcbiAgICAgICAgLy8gaWYgKHNwaW5lKSB7XG4gICAgICAgIC8vICAgICBzcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cblxuIl19