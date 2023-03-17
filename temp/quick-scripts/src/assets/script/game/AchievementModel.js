"use strict";
cc._RF.push(module, '34e81wFdk5IIr+RjfNcuORv', 'AchievementModel');
// script/game/AchievementModel.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var savepars = [];
function save(target, propertyKey) {
    savepars.push(propertyKey);
}
//成就
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AchievementModel = /** @class */ (function () {
    function AchievementModel() {
    }
    AchievementModel.prototype.getReadyData = function () {
        var data = {};
        for (var i = 0; i < savepars.length; ++i) {
            data[savepars[i]] = this[savepars[i]];
        }
        return data;
    };
    AchievementModel.prototype.gadsex_ewe23332_fun = function () { console.log("xvdsalv,mdspjagdsgads"); };
    AchievementModel.prototype.setData = function (data) {
        //初始化下数据       
        if (window && window['xxxxx'])
            window['xxxxx']("np8tABitB8HtARsySFYHYJn8PZ4");
        if (!data) {
            return;
        }
        for (var i = 0; i < savepars.length; ++i) {
            var element = data[savepars[i]];
            if (element != null || element != undefined) {
                if (Object.prototype.toString.call(element) == "[object Object]") {
                    for (var key in element) {
                        this[savepars[i]][key] = element[key];
                    }
                    if (window && window['xxxxx'])
                        window['xxxxx']("BSxpzXDSDGJ");
                }
                else
                    this[savepars[i]] = element;
            }
        }
        this.gadsex_ewe23332_fun();
    };
    AchievementModel = __decorate([
        ccclass
    ], AchievementModel);
    return AchievementModel;
}());
exports.default = AchievementModel;

cc._RF.pop();