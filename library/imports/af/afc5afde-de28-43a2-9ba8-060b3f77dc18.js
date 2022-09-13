"use strict";
cc._RF.push(module, 'afc5a/e3ihDopuoBgs/d9wY', 'DebugTools');
// script/utils/DebugTools.ts

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
var GameConst_1 = require("../game/GameConst");
var Data_1 = require("../manager/Data");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DebugTools = /** @class */ (function (_super) {
    __extends(DebugTools, _super);
    function DebugTools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugTools.prototype.start = function () {
        if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
            return;
        }
        this.addBtn("清除数据", function () {
            localStorage.setItem(GameConst_1.default.local_data_key, "");
        });
        this.addBtn("金币+很多", function () {
            Data_1.default.user.coin += 1000000000000000;
        });
        this.addBtn("钻石+很多", function () {
            Data_1.default.user.gem += 100000;
        });
        this.addBtn("1倍数", function () {
            cc.kSpeed(1);
        });
        this.addBtn("4倍数", function () {
            cc.kSpeed(4);
        });
        this.addBtn("lv++", function () {
            Data_1.default.user.lv++;
        });
    };
    DebugTools.prototype.addBtn = function (name, callback) {
        var toolbar = document.getElementsByClassName("toolbar")[0];
        if (!toolbar)
            return;
        var div = document.createElement("div");
        div.className = "item";
        div.innerHTML = "<button id='" + name + "'>" + name + "</button>";
        toolbar.appendChild(div);
        document.getElementById(name).onclick = function () {
            callback();
        };
    };
    DebugTools = __decorate([
        ccclass
    ], DebugTools);
    return DebugTools;
}(cc.Component));
exports.default = DebugTools;

cc._RF.pop();