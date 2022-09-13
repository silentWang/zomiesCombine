
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/GameConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '278a8hJybJP3aVcSqpkGbLn', 'GameConst');
// script/game/GameConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.share_urls = exports.share_titles = exports.GAME_NAME = void 0;
var GameConst = /** @class */ (function () {
    function GameConst() {
    }
    GameConst.local_data_key = "local_data_key";
    GameConst.OPEN_SLOT = "OPEN_SLOT";
    GameConst.NEW_PLANT = "NEW_PLANT";
    GameConst.BUY_PLANT = "BUY_PLANT";
    return GameConst;
}());
exports.default = GameConst;
exports.GAME_NAME = "PVSZ";
exports.share_titles = ["警告⚠️僵尸潮正在来袭，请配置防御!", "有一天，花朵王国里来了一群僵尸...", "花园保卫战即将打响，快去帮助花朵们抵御入侵！"];
exports.share_urls = ['https://cjj-app.oss-cn-beijing.aliyuncs.com/pvsz/pvsz0.png',
    'https://cjj-app.oss-cn-beijing.aliyuncs.com/pvsz/pvsz1.png', 'https://cjj-app.oss-cn-beijing.aliyuncs.com/pvsz/pvsz2.png'];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxHYW1lQ29uc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQU1BLENBQUM7SUFKaUIsd0JBQWMsR0FBVSxnQkFBZ0IsQ0FBQTtJQUN4QyxtQkFBUyxHQUFHLFdBQVcsQ0FBQTtJQUN2QixtQkFBUyxHQUFHLFdBQVcsQ0FBQTtJQUN2QixtQkFBUyxHQUFDLFdBQVcsQ0FBQTtJQUN2QyxnQkFBQztDQU5ELEFBTUMsSUFBQTtrQkFOb0IsU0FBUztBQVFqQixRQUFBLFNBQVMsR0FBRyxNQUFNLENBQUE7QUFFbEIsUUFBQSxZQUFZLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFBO0FBQ3JGLFFBQUEsVUFBVSxHQUFHLENBQUMsNERBQTREO0lBQ3ZGLDREQUE0RCxFQUFDLDREQUE0RCxDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnN0IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvY2FsX2RhdGFfa2V5OnN0cmluZyA9IFwibG9jYWxfZGF0YV9rZXlcIlxyXG4gICAgcHVibGljIHN0YXRpYyBPUEVOX1NMT1QgPSBcIk9QRU5fU0xPVFwiXHJcbiAgICBwdWJsaWMgc3RhdGljIE5FV19QTEFOVCA9IFwiTkVXX1BMQU5UXCJcclxuICAgIHB1YmxpYyBzdGF0aWMgQlVZX1BMQU5UPVwiQlVZX1BMQU5UXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfTkFNRSA9IFwiUFZTWlwiXHJcblxyXG5leHBvcnQgY29uc3Qgc2hhcmVfdGl0bGVzID0gW1wi6K2m5ZGK4pqg77iP5YO15bC45r2u5q2j5Zyo5p2l6KKt77yM6K+36YWN572u6Ziy5b6hIVwiLCBcIuacieS4gOWkqe+8jOiKseacteeOi+WbvemHjOadpeS6huS4gOe+pOWDteWwuC4uLlwiLCBcIuiKseWbreS/neWNq+aImOWNs+WwhuaJk+WTje+8jOW/q+WOu+W4ruWKqeiKseacteS7rOaKteW+oeWFpeS+te+8gVwiXVxyXG5leHBvcnQgY29uc3Qgc2hhcmVfdXJscyA9IFsnaHR0cHM6Ly9jamotYXBwLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9wdnN6L3B2c3owLnBuZycsXHJcbidodHRwczovL2Nqai1hcHAub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3B2c3ovcHZzejEucG5nJywnaHR0cHM6Ly9jamotYXBwLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9wdnN6L3B2c3oyLnBuZyddXHJcbiJdfQ==