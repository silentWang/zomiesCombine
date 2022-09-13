
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
    DataManager.prototype.getUploadData = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixTQUFTLElBQUksQ0FBQyxNQUFXLEVBQUUsV0FBbUI7SUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBY0Q7SUFBQTtRQVVpQixhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUEsTUFBTTtRQUMzQixhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUEsVUFBVTtRQUMvQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUM5QixzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBRzNCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGFBQVEsR0FBYSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFVckYsQ0FBQztJQTFCaUIsb0JBQVEsR0FBdEI7UUFDSSxJQUFJLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBY00sbUNBQWEsR0FBcEI7UUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTFCYyxvQkFBUSxHQUFHLElBQUksQ0FBQztJQVF6QjtRQUFMLElBQUk7aURBQTZCO0lBQzVCO1FBQUwsSUFBSTtpREFBNkI7SUFDNUI7UUFBTCxJQUFJO29EQUFnQztJQU0vQjtRQUFMLElBQUk7cURBQWlDO0lBQ2hDO1FBQUwsSUFBSTtpREFBNEU7SUFVckYsa0JBQUM7Q0E3QkQsQUE2QkMsSUFBQTtrQkE3Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEJPSW5mbyA9XHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICBudW06IG51bWJlciwgIC8v5Ye756KO5pWw6YePXHJcbiAgICAgICAgY2hvb3NlOiBudW1iZXIsLy/pgInmi6nnrYnnuqdcclxuICAgIH1cclxuXHJcbmxldCBzYXZlcGFycyA9IFtdO1xyXG5mdW5jdGlvbiBzYXZlKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XHJcbiAgICBzYXZlcGFycy5wdXNoKHByb3BlcnR5S2V5KTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2lnbkluZm8gPSB7XHJcbiAgICBzaWduX2luZGV4OiBudW1iZXIsLy/lvZPliY3nrb7liLDntKLlvJVcclxuICAgIHNpZ25fdGltZTogbnVtYmVyLC8v5LiK5qyh562+5Yiw5pe26Ze0XHJcbiAgICBzaWduX2JlaXN1OiBudW1iZXIsLy/pooblj5blgI3mlbBcclxufVxyXG5leHBvcnQgdHlwZSBQbGFudEluZm8gPVxyXG4gICAge1xyXG4gICAgICAgIG9wZW46IG51bWJlcjtcclxuICAgICAgICBsdjogbnVtYmVyO1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBEYXRhTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgRGF0YU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERhdGFNYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBzaWduZGF5czogbnVtYmVyID0gMDsvL+etvuWIsOasoeaVsFxyXG4gICAgQHNhdmUgcHVibGljIHNpZ250aW1lOiBudW1iZXIgPSAwOy8v5pyA6L+R5LiA5qyh562+5Yiw5pe26Ze0XHJcbiAgICBAc2F2ZSBwdWJsaWMgc2hhcmVfY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2hhcmVfY291bnRfdG90YWw6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgd2F0Y2hfYWRfY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgd2F0Y2hfYWRfY291bnRfdG90YWw6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBzYXZlZGF0YXRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgc2lnbmluZm86IFNpZ25JbmZvID0geyBzaWduX2luZGV4OiAwLCBzaWduX3RpbWU6IDAsIHNpZ25fYmVpc3U6IDAgfTtcclxuXHJcblxyXG4gICAgcHVibGljIGdldFVwbG9hZERhdGEoKTogb2JqZWN0IHtcclxuICAgICAgICB2YXIgZGF0YSA9IHt9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYXZlcGFycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBkYXRhW3NhdmVwYXJzW2ldXSA9IHRoaXNbc2F2ZXBhcnNbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuIl19