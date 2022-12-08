"use strict";
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