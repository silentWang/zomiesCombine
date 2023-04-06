
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3524d7zH9PiqxWDRneLvf8', 'Singleton');
// script/manager/Singleton.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.Instance = function () {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    };
    return Singleton;
}());
exports.default = Singleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlci9TaW5nbGV0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBT0EsQ0FBQztJQU5VLGtCQUFRLEdBQWY7UUFDSSxJQUFJLENBQU8sSUFBSyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFLLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDckM7UUFDRCxPQUFhLElBQUssQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGV0b24ge1xuICAgIHN0YXRpYyBJbnN0YW5jZTxUIGV4dGVuZHMge30+KHRoaXM6IG5ldyAoKSA9PiBUKTogVCB7XG4gICAgICAgIGlmICghKDxhbnk+dGhpcykuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICg8YW55PnRoaXMpLmluc3RhbmNlID0gbmV3IHRoaXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxhbnk+dGhpcykuaW5zdGFuY2U7XG4gICAgfVxufSJdfQ==