
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
if (window && window['xxxxx'])
    window['xxxxx']("Cm6jy56Gm2btfAbRXTJKy24");
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
        if (window && window['xxxxx'])
            window['xxxxx']("c54cn");
        if (DataManager.instance == null) {
            DataManager.instance = new DataManager();
        }
        return DataManager.instance;
    };
    DataManager.prototype.getAllSData = function () {
        var data = {};
        if (window && window['xxxxx'])
            window['xxxxx']("KR6kWA6R7XpzYQeaBsRp4f4wDn");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixTQUFTLElBQUksQ0FBQyxNQUFXLEVBQUUsV0FBbUI7SUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBT0QsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBUXpFO0lBQUE7UUFXaUIsYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDM0IsYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFBLFVBQVU7UUFDL0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDOUIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLHlCQUFvQixHQUFXLENBQUMsQ0FBQztRQUczQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBV3JGLENBQUM7SUE1QmlCLG9CQUFRLEdBQXRCO1FBQ0ksSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxJQUFJLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBY00saUNBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFDYixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDNUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUE1QmMsb0JBQVEsR0FBRyxJQUFJLENBQUM7SUFTekI7UUFBTCxJQUFJO2lEQUE2QjtJQUM1QjtRQUFMLElBQUk7aURBQTZCO0lBQzVCO1FBQUwsSUFBSTtvREFBZ0M7SUFNL0I7UUFBTCxJQUFJO3FEQUFpQztJQUNoQztRQUFMLElBQUk7aURBQTRFO0lBV3JGLGtCQUFDO0NBL0JELEFBK0JDLElBQUE7a0JBL0JvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoaWNrRGF0YSBmcm9tICcuL0NoaWNrRGF0YSc7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgQk9JbmZvID1cclxuICAgIHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIG51bTogbnVtYmVyLCAgLy/lh7vnoo7mlbDph49cclxuICAgICAgICBjaG9vc2U6IG51bWJlciwvL+mAieaLqeetiee6p1xyXG4gICAgfVxyXG5cclxubGV0IHNhdmVwYXJzID0gW107XHJcbmZ1bmN0aW9uIHNhdmUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIHNhdmVwYXJzLnB1c2gocHJvcGVydHlLZXkpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTaWduSW5mbyA9IHtcclxuICAgIHNpZ25faW5kZXg6IG51bWJlciwvL+W9k+WJjeetvuWIsOe0ouW8lVxyXG4gICAgc2lnbl90aW1lOiBudW1iZXIsLy/kuIrmrKHnrb7liLDml7bpl7RcclxuICAgIHNpZ25fYmVpc3U6IG51bWJlciwvL+mihuWPluWAjeaVsFxyXG59XHJcbmlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkNtNmp5NTZHbTJidGZBYlJYVEpLeTI0XCIpO1xuZXhwb3J0IHR5cGUgUGxhbnRJbmZvID1cclxuICAgIHtcclxuICAgICAgICBvcGVuOiBudW1iZXI7XHJcbiAgICAgICAgbHY6IG51bWJlcjtcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogRGF0YU1hbmFnZXIge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImM1NGNuXCIpO1xuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZSA9IG5ldyBEYXRhTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRGF0YU1hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgQHNhdmUgcHVibGljIHNpZ25kYXlzOiBudW1iZXIgPSAwOy8v562+5Yiw5qyh5pWwXHJcbiAgICBAc2F2ZSBwdWJsaWMgc2lnbnRpbWU6IG51bWJlciA9IDA7Ly/mnIDov5HkuIDmrKHnrb7liLDml7bpl7RcclxuICAgIEBzYXZlIHB1YmxpYyBzaGFyZV9jb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzaGFyZV9jb3VudF90b3RhbDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB3YXRjaF9hZF9jb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB3YXRjaF9hZF9jb3VudF90b3RhbDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgQHNhdmUgcHVibGljIHNhdmVkYXRhdGltZTogbnVtYmVyID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBzaWduaW5mbzogU2lnbkluZm8gPSB7IHNpZ25faW5kZXg6IDAsIHNpZ25fdGltZTogMCwgc2lnbl9iZWlzdTogMCB9O1xyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsU0RhdGEoKTogb2JqZWN0IHtcclxuICAgICAgICB2YXIgZGF0YSA9IHt9XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiS1I2a1dBNlI3WHB6WVFlYUJzUnA0ZjR3RG5cIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZGF0YVtzYXZlcGFyc1tpXV0gPSB0aGlzW3NhdmVwYXJzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==