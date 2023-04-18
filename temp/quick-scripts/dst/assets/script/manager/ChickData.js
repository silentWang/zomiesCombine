
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/ChickData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10f921qnC9M4LHQ67bEgyQe', 'ChickData');
// script/manager/ChickData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../game/UserModel");
var Utils_1 = require("../utils/Utils");
var AudioMgr_1 = require("../utils/AudioMgr");
var Native_1 = require("../utils/Native");
var ChickData = /** @class */ (function () {
    function ChickData() {
    }
    ChickData.save = function (bRemote) {
        if (bRemote === void 0) { bRemote = false; }
        ChickData.resetOneDayData();
        var obj = {};
        obj['user'] = ChickData.user.getAllData();
        obj['savedatatime'] = Utils_1.default.getServerTime();
        var strdata = JSON.stringify(obj);
        Native_1.default.saveDataToApp(strdata);
    };
    ChickData.resetOneDayData = function () {
        var sdtime = ChickData.user.dayDateTime;
        if (sdtime > 0) {
            var n = new Date(Utils_1.default.getServerTime()).getDate();
            var d = new Date(sdtime).getDate();
            if (n != d) {
                ChickData.user.share_times = 10;
                ChickData.user.today_getcoin_times = 0;
                ChickData.user.today_getchick_times = 0;
            }
        }
    };
    ChickData.loadData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Native_1.default.getDataFromApp(function (data) {
                if (data) {
                    ChickData.user.setData(data['user']);
                    ChickData.user.dayDateTime = data.savedatatime;
                    _this.resetOneDayData();
                }
                else {
                    //没有档案重置下音乐开关
                    cc.sys.localStorage.setItem("bgmVolume", 1);
                    cc.sys.localStorage.setItem("sfxVolume", 1);
                    AudioMgr_1.default.Instance().sfxVolume = 1;
                    AudioMgr_1.default.Instance().bgmVolume = 1;
                }
                resolve(1);
            });
        });
    };
    ChickData.user = new UserModel_1.default();
    ChickData.isFreeAd = false;
    return ChickData;
}());
exports.default = ChickData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxDaGlja0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBMEM7QUFDMUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUV6QywwQ0FBcUM7QUFFckM7SUFBQTtJQThDQSxDQUFDO0lBMUNpQixjQUFJLEdBQWxCLFVBQW9CLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7UUFDeEMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3pDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDM0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxnQkFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRWEseUJBQWUsR0FBN0I7UUFDSSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDVixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQ04sU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztnQkFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7YUFDM0M7U0FDSjtJQUNMLENBQUM7SUFFYSxrQkFBUSxHQUF0QjtRQUFBLGlCQWtCQztRQWpCRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDOUIsZ0JBQU0sQ0FBQyxjQUFjLENBQUMsVUFBQyxJQUFJO2dCQUN2QixJQUFJLElBQUksRUFBRTtvQkFDTixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDckMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQTtvQkFDOUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUMxQjtxQkFDSTtvQkFDRCxhQUFhO29CQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFDbEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2lCQUNyQztnQkFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTNDYSxjQUFJLEdBQWMsSUFBSSxtQkFBUyxFQUFFLENBQUM7SUFDbEMsa0JBQVEsR0FBRyxLQUFLLENBQUM7SUE0Q25DLGdCQUFDO0NBOUNELEFBOENDLElBQUE7a0JBOUNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL2dhbWUvVXNlck1vZGVsXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9nYW1lL0dhbWVDb25zdFwiO1xyXG5pbXBvcnQgTmF0aXZlIGZyb20gXCIuLi91dGlscy9OYXRpdmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWNrRGF0YSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVzZXI6IFVzZXJNb2RlbCA9IG5ldyBVc2VyTW9kZWwoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNGcmVlQWQgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBzYXZlKCBiUmVtb3RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBDaGlja0RhdGEucmVzZXRPbmVEYXlEYXRhKCk7XHJcbiAgICAgICAgbGV0IG9iaiA9IHt9XHJcbiAgICAgICAgb2JqWyd1c2VyJ10gPSBDaGlja0RhdGEudXNlci5nZXRBbGxEYXRhKClcclxuICAgICAgICBvYmpbJ3NhdmVkYXRhdGltZSddID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpXHJcbiAgICAgICAgbGV0IHN0cmRhdGEgPSBKU09OLnN0cmluZ2lmeShvYmopO1xyXG4gICAgICAgIE5hdGl2ZS5zYXZlRGF0YVRvQXBwKHN0cmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzZXRPbmVEYXlEYXRhKCl7XHJcbiAgICAgICAgbGV0IHNkdGltZSA9IENoaWNrRGF0YS51c2VyLmRheURhdGVUaW1lO1xyXG4gICAgICAgIGlmKHNkdGltZSA+IDApe1xyXG4gICAgICAgICAgICBsZXQgbiA9IG5ldyBEYXRlKFV0aWxzLmdldFNlcnZlclRpbWUoKSkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKHNkdGltZSkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBpZihuICE9IGQpe1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2hhcmVfdGltZXMgPSAxMDtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNvaW5fdGltZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdGltZXMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgTmF0aXZlLmdldERhdGFGcm9tQXBwKChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zZXREYXRhKGRhdGFbJ3VzZXInXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZGF5RGF0ZVRpbWUgPSBkYXRhLnNhdmVkYXRhdGltZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRPbmVEYXlEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ayoeacieaho+ahiOmHjee9ruS4i+mfs+S5kOW8gOWFs1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnbVZvbHVtZVwiLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZnhWb2x1bWVcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5zZnhWb2x1bWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuYmdtVm9sdW1lID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoMSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuIl19