"use strict";
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