
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fa84j3BbNPpL1hUWIcuqxq', 'DataManager');
// script/manager/DataManager.ts

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
var DataManager = /** @class */ (function () {
    function DataManager() {
        this.signdays = 0; //签到次数
        this.signtime = 0; //最近一次签到时间
        this.share_count = 0;
        this.share_count_total = 0;
        this.watch_ad_count = 0;
        this.watch_ad_count_total = 0;
        this.savedatatime = 0;
        this.signinfo = { sign_index: 0, sign_time: 0, sign_beisu: 0 };
    }
    DataManager.Instance = function () {
        if (DataManager.instance == null) {
            DataManager.instance = new DataManager();
        }
        return DataManager.instance;
    };
    DataManager.prototype.getAllSData = function () {
        var data = {};
        for (var i = 0; i < savepars.length; ++i) {
            data[savepars[i]] = this[savepars[i]];
        }
        return data;
    };
    DataManager.instance = null;
    __decorate([
        save
    ], DataManager.prototype, "signdays", void 0);
    __decorate([
        save
    ], DataManager.prototype, "signtime", void 0);
    __decorate([
        save
    ], DataManager.prototype, "share_count", void 0);
    __decorate([
        save
    ], DataManager.prototype, "savedatatime", void 0);
    __decorate([
        save
    ], DataManager.prototype, "signinfo", void 0);
    return DataManager;
}());
exports.default = DataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlci9EYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixTQUFTLElBQUksQ0FBQyxNQUFXLEVBQUUsV0FBbUI7SUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBY0Q7SUFBQTtRQVVpQixhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUEsTUFBTTtRQUMzQixhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUEsVUFBVTtRQUMvQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUM5QixzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBRzNCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGFBQVEsR0FBYSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFTckYsQ0FBQztJQXpCaUIsb0JBQVEsR0FBdEI7UUFDSSxJQUFJLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBYU0saUNBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXpCYyxvQkFBUSxHQUFHLElBQUksQ0FBQztJQVF6QjtRQUFMLElBQUk7aURBQTZCO0lBQzVCO1FBQUwsSUFBSTtpREFBNkI7SUFDNUI7UUFBTCxJQUFJO29EQUFnQztJQU0vQjtRQUFMLElBQUk7cURBQWlDO0lBQ2hDO1FBQUwsSUFBSTtpREFBNEU7SUFTckYsa0JBQUM7Q0E1QkQsQUE0QkMsSUFBQTtrQkE1Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hpY2tEYXRhIGZyb20gJy4vQ2hpY2tEYXRhJztcblxuXG5leHBvcnQgdHlwZSBCT0luZm8gPVxuICAgIHtcbiAgICAgICAgaWQ6IG51bWJlcixcbiAgICAgICAgbnVtOiBudW1iZXIsICAvL+WHu+eijuaVsOmHj1xuICAgICAgICBjaG9vc2U6IG51bWJlciwvL+mAieaLqeetiee6p1xuICAgIH1cblxubGV0IHNhdmVwYXJzID0gW107XG5mdW5jdGlvbiBzYXZlKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG4gICAgc2F2ZXBhcnMucHVzaChwcm9wZXJ0eUtleSk7XG59XG5cbmV4cG9ydCB0eXBlIFNpZ25JbmZvID0ge1xuICAgIHNpZ25faW5kZXg6IG51bWJlciwvL+W9k+WJjeetvuWIsOe0ouW8lVxuICAgIHNpZ25fdGltZTogbnVtYmVyLC8v5LiK5qyh562+5Yiw5pe26Ze0XG4gICAgc2lnbl9iZWlzdTogbnVtYmVyLC8v6aKG5Y+W5YCN5pWwXG59XG5leHBvcnQgdHlwZSBQbGFudEluZm8gPVxuICAgIHtcbiAgICAgICAgb3BlbjogbnVtYmVyO1xuICAgICAgICBsdjogbnVtYmVyO1xuICAgICAgICBpbmRleDogbnVtYmVyO1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogRGF0YU1hbmFnZXIge1xuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgRGF0YU1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRGF0YU1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgQHNhdmUgcHVibGljIHNpZ25kYXlzOiBudW1iZXIgPSAwOy8v562+5Yiw5qyh5pWwXG4gICAgQHNhdmUgcHVibGljIHNpZ250aW1lOiBudW1iZXIgPSAwOy8v5pyA6L+R5LiA5qyh562+5Yiw5pe26Ze0XG4gICAgQHNhdmUgcHVibGljIHNoYXJlX2NvdW50OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzaGFyZV9jb3VudF90b3RhbDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgd2F0Y2hfYWRfY291bnQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHdhdGNoX2FkX2NvdW50X3RvdGFsOiBudW1iZXIgPSAwO1xuXG5cbiAgICBAc2F2ZSBwdWJsaWMgc2F2ZWRhdGF0aW1lOiBudW1iZXIgPSAwO1xuICAgIEBzYXZlIHB1YmxpYyBzaWduaW5mbzogU2lnbkluZm8gPSB7IHNpZ25faW5kZXg6IDAsIHNpZ25fdGltZTogMCwgc2lnbl9iZWlzdTogMCB9O1xuXG4gICAgcHVibGljIGdldEFsbFNEYXRhKCk6IG9iamVjdCB7XG4gICAgICAgIHZhciBkYXRhID0ge31cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYXZlcGFycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgZGF0YVtzYXZlcGFyc1tpXV0gPSB0aGlzW3NhdmVwYXJzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cbiJdfQ==