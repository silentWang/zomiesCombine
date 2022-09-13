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
// 奖励内容的格式： 目标值,奖励内容名称,奖励数量  
var achievement = [
    { star: 15, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 30, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 45, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 60, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 75, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 90, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 105, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 120, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 135, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 150, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 165, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 180, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 195, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 210, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 225, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 240, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 255, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 270, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 285, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 300, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 315, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 330, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 345, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 360, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 375, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 390, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 405, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 420, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 435, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 450, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 465, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 480, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 495, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 510, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 525, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 540, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 555, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 570, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 585, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 600, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 615, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 630, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 645, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 660, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 675, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 690, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 705, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 720, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 735, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 750, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 765, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 780, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 795, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 810, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 825, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 840, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 855, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 870, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 885, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 900, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 915, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 930, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 945, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 960, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 975, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 990, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1005, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1020, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1035, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1050, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1065, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1080, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1095, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1110, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1125, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1140, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1155, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1170, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1185, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1200, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1215, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1230, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1245, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1260, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1275, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1290, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1305, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1320, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1335, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1350, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1365, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1380, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1395, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1410, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1425, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1440, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1455, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1470, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1485, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1500, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1515, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1530, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1545, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1560, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1575, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1590, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1605, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1620, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1635, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1650, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1665, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1680, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1695, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1710, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1725, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1740, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1755, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1770, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1785, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1800, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1815, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1830, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1845, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1860, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1875, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1890, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1905, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1920, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1935, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1950, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1965, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1980, coin: 120, bomb: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 1995, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
    { star: 2010, coin: 100, hammer: 1, beforesame: 1, beforelineline: 1, life_unlimited: 1, beforebombbomb: 1 },
];
// 过关奖励
var level = [
    { lv: 20, coin: 20 },
    { lv: 40, coin: 30 },
    { lv: 60, coin: 40 },
    { lv: 80, coin: 50 },
    { lv: 100, coin: 60 },
    { lv: 120, coin: 70 },
    { lv: 140, coin: 80 },
    { lv: 160, coin: 90 },
    { lv: 180, coin: 100 },
    { lv: 200, coin: 100 },
];
// 看视频次数奖励
var ad = [
    { num: 10, bomb: 1 },
    { num: 20, bomb: 1 },
    { num: 30, bomb: 1 },
    { num: 40, bomb: 1 },
    { num: 50, bomb: 2 },
];
// 道具使用奖励
var magicused = [
    { num: 10, same: 1 },
    { num: 20, same: 1 },
    { num: 30, same: 1 },
    { num: 40, same: 1 },
    { num: 50, same: 2 },
];
// 过关后的宝箱奖励内容
var succ_box = [
    { lv: 6, hammer: 1 },
    { lv: 8, coin_big: 800 },
    { lv: 14, beforelineline: 1 },
    { lv: 19, beforebombbomb: 1 },
    { lv: 24, beforesame: 1 },
    { lv: 29, bomb: 1 },
    { lv: 50, coin_little: 1000 },
    { lv: 75, beforebombbomb: 1 },
    { lv: 100, life_unlimited: 1 },
    { lv: 125, beforelineline: 1 },
    { lv: 150, life_unlimited: 1 },
    { lv: 175, beforesame: 1 },
    { lv: 200, life_unlimited: 1 },
    { lv: 225, beforebombbomb: 1 },
    { lv: 250, life_unlimited: 1 },
    { lv: 275, beforelineline: 1 },
    { lv: 300, life_unlimited: 1 },
];
// 副本过关后的宝箱奖励内容
var succ_box_002 = [
    { lv: 5, coin_little: 100 },
    { lv: 10, bomb: 3 },
    { lv: 15, coin_big: 200 },
    { lv: 20, same: 3 },
    { lv: 25, giftbag1: 1 },
];
//成就
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AchievementModel = /** @class */ (function () {
    function AchievementModel() {
    }
    AchievementModel.prototype.getUploadData = function () {
        var data = {};
        for (var i = 0; i < savepars.length; ++i) {
            data[savepars[i]] = this[savepars[i]];
        }
        return data;
    };
    AchievementModel.prototype.setData = function (data) {
        //初始化下数据       
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
                }
                else
                    this[savepars[i]] = element;
            }
        }
    };
    AchievementModel = __decorate([
        ccclass
    ], AchievementModel);
    return AchievementModel;
}());
exports.default = AchievementModel;

cc._RF.pop();