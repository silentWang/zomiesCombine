
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixTQUFTLElBQUksQ0FBQyxNQUFXLEVBQUUsV0FBbUI7SUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBY0Q7SUFBQTtRQVVpQixhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUEsTUFBTTtRQUMzQixhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUEsVUFBVTtRQUMvQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUM5QixzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBRzNCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGFBQVEsR0FBYSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFVckYsQ0FBQztJQTFCaUIsb0JBQVEsR0FBdEI7UUFDSSxJQUFJLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBY00sbUNBQWEsR0FBcEI7UUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTFCYyxvQkFBUSxHQUFHLElBQUksQ0FBQztJQVF6QjtRQUFMLElBQUk7aURBQTZCO0lBQzVCO1FBQUwsSUFBSTtpREFBNkI7SUFDNUI7UUFBTCxJQUFJO29EQUFnQztJQU0vQjtRQUFMLElBQUk7cURBQWlDO0lBQ2hDO1FBQUwsSUFBSTtpREFBNEU7SUFVckYsa0JBQUM7Q0E3QkQsQUE2QkMsSUFBQTtrQkE3Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hpY2tEYXRhIGZyb20gJy4vQ2hpY2tEYXRhJztcclxuXHJcblxyXG5leHBvcnQgdHlwZSBCT0luZm8gPVxyXG4gICAge1xyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgbnVtOiBudW1iZXIsICAvL+WHu+eijuaVsOmHj1xyXG4gICAgICAgIGNob29zZTogbnVtYmVyLC8v6YCJ5oup562J57qnXHJcbiAgICB9XHJcblxyXG5sZXQgc2F2ZXBhcnMgPSBbXTtcclxuZnVuY3Rpb24gc2F2ZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xyXG4gICAgc2F2ZXBhcnMucHVzaChwcm9wZXJ0eUtleSk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpZ25JbmZvID0ge1xyXG4gICAgc2lnbl9pbmRleDogbnVtYmVyLC8v5b2T5YmN562+5Yiw57Si5byVXHJcbiAgICBzaWduX3RpbWU6IG51bWJlciwvL+S4iuasoeetvuWIsOaXtumXtFxyXG4gICAgc2lnbl9iZWlzdTogbnVtYmVyLC8v6aKG5Y+W5YCN5pWwXHJcbn1cclxuZXhwb3J0IHR5cGUgUGxhbnRJbmZvID1cclxuICAgIHtcclxuICAgICAgICBvcGVuOiBudW1iZXI7XHJcbiAgICAgICAgbHY6IG51bWJlcjtcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogRGF0YU1hbmFnZXIge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlID0gbmV3IERhdGFNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBEYXRhTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgc2lnbmRheXM6IG51bWJlciA9IDA7Ly/nrb7liLDmrKHmlbBcclxuICAgIEBzYXZlIHB1YmxpYyBzaWdudGltZTogbnVtYmVyID0gMDsvL+acgOi/keS4gOasoeetvuWIsOaXtumXtFxyXG4gICAgQHNhdmUgcHVibGljIHNoYXJlX2NvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHNoYXJlX2NvdW50X3RvdGFsOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHdhdGNoX2FkX2NvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHdhdGNoX2FkX2NvdW50X3RvdGFsOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBAc2F2ZSBwdWJsaWMgc2F2ZWRhdGF0aW1lOiBudW1iZXIgPSAwO1xyXG4gICAgQHNhdmUgcHVibGljIHNpZ25pbmZvOiBTaWduSW5mbyA9IHsgc2lnbl9pbmRleDogMCwgc2lnbl90aW1lOiAwLCBzaWduX2JlaXN1OiAwIH07XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRVcGxvYWREYXRhKCk6IG9iamVjdCB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7fVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZGF0YVtzYXZlcGFyc1tpXV0gPSB0aGlzW3NhdmVwYXJzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==