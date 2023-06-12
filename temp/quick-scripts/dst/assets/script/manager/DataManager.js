
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixTQUFTLElBQUksQ0FBQyxNQUFXLEVBQUUsV0FBbUI7SUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBT0QsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBUXpFO0lBQUE7UUFXaUIsYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDM0IsYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFBLFVBQVU7UUFDL0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDOUIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLHlCQUFvQixHQUFXLENBQUMsQ0FBQztRQUczQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBV3JGLENBQUM7SUE1QmlCLG9CQUFRLEdBQXRCO1FBQ0ksSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxJQUFJLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBY00saUNBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFDYixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDNUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUE1QmMsb0JBQVEsR0FBRyxJQUFJLENBQUM7SUFTekI7UUFBTCxJQUFJO2lEQUE2QjtJQUM1QjtRQUFMLElBQUk7aURBQTZCO0lBQzVCO1FBQUwsSUFBSTtvREFBZ0M7SUFNL0I7UUFBTCxJQUFJO3FEQUFpQztJQUNoQztRQUFMLElBQUk7aURBQTRFO0lBV3JGLGtCQUFDO0NBL0JELEFBK0JDLElBQUE7a0JBL0JvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoaWNrRGF0YSBmcm9tICcuL0NoaWNrRGF0YSc7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgQk9JbmZvID1cclxuICAgIHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIG51bTogbnVtYmVyLCAgLy/lh7vnoo7mlbDph49cclxuICAgICAgICBjaG9vc2U6IG51bWJlciwvL+mAieaLqeetiee6p1xyXG4gICAgfVxyXG5cclxubGV0IHNhdmVwYXJzID0gW107XHJcbmZ1bmN0aW9uIHNhdmUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIHNhdmVwYXJzLnB1c2gocHJvcGVydHlLZXkpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTaWduSW5mbyA9IHtcclxuICAgIHNpZ25faW5kZXg6IG51bWJlciwvL+W9k+WJjeetvuWIsOe0ouW8lVxyXG4gICAgc2lnbl90aW1lOiBudW1iZXIsLy/kuIrmrKHnrb7liLDml7bpl7RcclxuICAgIHNpZ25fYmVpc3U6IG51bWJlciwvL+mihuWPluWAjeaVsFxyXG59XHJcbmlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkNtNmp5NTZHbTJidGZBYlJYVEpLeTI0XCIpO1xyXG5leHBvcnQgdHlwZSBQbGFudEluZm8gPVxyXG4gICAge1xyXG4gICAgICAgIG9wZW46IG51bWJlcjtcclxuICAgICAgICBsdjogbnVtYmVyO1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBEYXRhTWFuYWdlciB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYzU0Y25cIik7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgRGF0YU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERhdGFNYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBzaWduZGF5czogbnVtYmVyID0gMDsvL+etvuWIsOasoeaVsFxyXG4gICAgQHNhdmUgcHVibGljIHNpZ250aW1lOiBudW1iZXIgPSAwOy8v5pyA6L+R5LiA5qyh562+5Yiw5pe26Ze0XHJcbiAgICBAc2F2ZSBwdWJsaWMgc2hhcmVfY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2hhcmVfY291bnRfdG90YWw6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgd2F0Y2hfYWRfY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgd2F0Y2hfYWRfY291bnRfdG90YWw6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIEBzYXZlIHB1YmxpYyBzYXZlZGF0YXRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBAc2F2ZSBwdWJsaWMgc2lnbmluZm86IFNpZ25JbmZvID0geyBzaWduX2luZGV4OiAwLCBzaWduX3RpbWU6IDAsIHNpZ25fYmVpc3U6IDAgfTtcclxuXHJcblxyXG4gICAgcHVibGljIGdldEFsbFNEYXRhKCk6IG9iamVjdCB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7fVxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIktSNmtXQTZSN1hwellRZWFCc1JwNGY0d0RuXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZGF0YVtzYXZlcGFyc1tpXV0gPSB0aGlzW3NhdmVwYXJzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==