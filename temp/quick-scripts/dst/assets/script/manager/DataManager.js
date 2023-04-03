
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
    DataManager.prototype.DkaH_etrecc_fun = function () { console.log("54155e15s1d5f15swdf1s"); };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixTQUFTLElBQUksQ0FBQyxNQUFXLEVBQUUsV0FBbUI7SUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBT0QsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBUXpFO0lBQUE7UUFXaUIsYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDM0IsYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFBLFVBQVU7UUFDL0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDOUIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLHlCQUFvQixHQUFXLENBQUMsQ0FBQztRQUczQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBV3JGLENBQUM7SUE1QmlCLG9CQUFRLEdBQXRCO1FBQ0ksSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxJQUFJLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBYU8scUNBQWUsR0FBdkIsY0FBMkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxpQ0FBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNiLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUM1RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTVCYyxvQkFBUSxHQUFHLElBQUksQ0FBQztJQVN6QjtRQUFMLElBQUk7aURBQTZCO0lBQzVCO1FBQUwsSUFBSTtpREFBNkI7SUFDNUI7UUFBTCxJQUFJO29EQUFnQztJQU0vQjtRQUFMLElBQUk7cURBQWlDO0lBQ2hDO1FBQUwsSUFBSTtpREFBNEU7SUFXckYsa0JBQUM7Q0EvQkQsQUErQkMsSUFBQTtrQkEvQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hpY2tEYXRhIGZyb20gJy4vQ2hpY2tEYXRhJztcclxuXHJcblxyXG5leHBvcnQgdHlwZSBCT0luZm8gPVxyXG4gICAge1xyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgbnVtOiBudW1iZXIsICAvL+WHu+eijuaVsOmHj1xyXG4gICAgICAgIGNob29zZTogbnVtYmVyLC8v6YCJ5oup562J57qnXHJcbiAgICB9XHJcblxyXG5sZXQgc2F2ZXBhcnMgPSBbXTtcclxuZnVuY3Rpb24gc2F2ZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xyXG4gICAgc2F2ZXBhcnMucHVzaChwcm9wZXJ0eUtleSk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpZ25JbmZvID0ge1xyXG4gICAgc2lnbl9pbmRleDogbnVtYmVyLC8v5b2T5YmN562+5Yiw57Si5byVXHJcbiAgICBzaWduX3RpbWU6IG51bWJlciwvL+S4iuasoeetvuWIsOaXtumXtFxyXG4gICAgc2lnbl9iZWlzdTogbnVtYmVyLC8v6aKG5Y+W5YCN5pWwXHJcbn1cclxuaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQ202ank1NkdtMmJ0ZkFiUlhUSkt5MjRcIik7XHJcbmV4cG9ydCB0eXBlIFBsYW50SW5mbyA9XHJcbiAgICB7XHJcbiAgICAgICAgb3BlbjogbnVtYmVyO1xyXG4gICAgICAgIGx2OiBudW1iZXI7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCk6IERhdGFNYW5hZ2VyIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJjNTRjblwiKTtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZSA9IG5ldyBEYXRhTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRGF0YU1hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgQHNhdmUgcHVibGljIHNpZ25kYXlzOiBudW1iZXIgPSAwOy8v562+5Yiw5qyh5pWwXHJcbiAgICBAc2F2ZSBwdWJsaWMgc2lnbnRpbWU6IG51bWJlciA9IDA7Ly/mnIDov5HkuIDmrKHnrb7liLDml7bpl7RcclxuICAgIEBzYXZlIHB1YmxpYyBzaGFyZV9jb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzaGFyZV9jb3VudF90b3RhbDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB3YXRjaF9hZF9jb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB3YXRjaF9hZF9jb3VudF90b3RhbDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgQHNhdmUgcHVibGljIHNhdmVkYXRhdGltZTogbnVtYmVyID0gMDtcclxuICAgIEBzYXZlIHB1YmxpYyBzaWduaW5mbzogU2lnbkluZm8gPSB7IHNpZ25faW5kZXg6IDAsIHNpZ25fdGltZTogMCwgc2lnbl9iZWlzdTogMCB9O1xyXG5cclxuICAgIHByaXZhdGUgRGthSF9ldHJlY2NfZnVuKCl7IGNvbnNvbGUubG9nKFwiNTQxNTVlMTVzMWQ1ZjE1c3dkZjFzXCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0QWxsU0RhdGEoKTogb2JqZWN0IHtcclxuICAgICAgICB2YXIgZGF0YSA9IHt9XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiS1I2a1dBNlI3WHB6WVFlYUJzUnA0ZjR3RG5cIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYXZlcGFycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBkYXRhW3NhdmVwYXJzW2ldXSA9IHRoaXNbc2F2ZXBhcnNbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuIl19