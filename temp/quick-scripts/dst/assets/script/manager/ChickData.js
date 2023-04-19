
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
    Object.defineProperty(ChickData, "isFreeAd", {
        get: function () {
            return this._isFreeAd;
        },
        set: function (value) {
            this._isFreeAd = value;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    ChickData.save = function (bRemote) {
        if (bRemote === void 0) { bRemote = false; }
        ChickData.resetOneDayData();
        var obj = {};
        obj['user'] = ChickData.user.getAllData();
        obj['savedatatime'] = Utils_1.default.getServerTime();
        obj['isFreeAd'] = this._isFreeAd ? 1 : 0;
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
                    _this._isFreeAd = data.isFreeAd == 1;
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
    ChickData._isFreeAd = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxDaGlja0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBMEM7QUFDMUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUV6QywwQ0FBcUM7QUFFckM7SUFBQTtJQXVEQSxDQUFDO0lBcERHLHNCQUFrQixxQkFBUTthQUkxQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDO2FBTkQsVUFBMkIsS0FBYTtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtZQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDZixDQUFDOzs7T0FBQTtJQUthLGNBQUksR0FBbEIsVUFBb0IsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUN4QyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDekMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUMzQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxnQkFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRWEseUJBQWUsR0FBN0I7UUFDSSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDVixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQ04sU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztnQkFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7YUFDM0M7U0FDSjtJQUNMLENBQUM7SUFFYSxrQkFBUSxHQUF0QjtRQUFBLGlCQW1CQztRQWxCRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDOUIsZ0JBQU0sQ0FBQyxjQUFjLENBQUMsVUFBQyxJQUFJO2dCQUN2QixJQUFJLElBQUksRUFBRTtvQkFDTixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDckMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQTtvQkFDOUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQTtvQkFDbkMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUMxQjtxQkFDSTtvQkFDRCxhQUFhO29CQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFDbEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2lCQUNyQztnQkFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXBEYSxjQUFJLEdBQWMsSUFBSSxtQkFBUyxFQUFFLENBQUM7SUFDbEMsbUJBQVMsR0FBRyxLQUFLLENBQUM7SUFxRHBDLGdCQUFDO0NBdkRELEFBdURDLElBQUE7a0JBdkRvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL2dhbWUvVXNlck1vZGVsXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9nYW1lL0dhbWVDb25zdFwiO1xyXG5pbXBvcnQgTmF0aXZlIGZyb20gXCIuLi91dGlscy9OYXRpdmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWNrRGF0YSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVzZXI6IFVzZXJNb2RlbCA9IG5ldyBVc2VyTW9kZWwoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgX2lzRnJlZUFkID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBpc0ZyZWVBZCh2YWx1ZTpib29sZWFuKXtcclxuICAgICAgICB0aGlzLl9pc0ZyZWVBZCA9IHZhbHVlXHJcbiAgICAgICAgdGhpcy5zYXZlKClcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlzRnJlZUFkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRnJlZUFkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgc2F2ZSggYlJlbW90ZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnJlc2V0T25lRGF5RGF0YSgpO1xyXG4gICAgICAgIGxldCBvYmogPSB7fVxyXG4gICAgICAgIG9ialsndXNlciddID0gQ2hpY2tEYXRhLnVzZXIuZ2V0QWxsRGF0YSgpXHJcbiAgICAgICAgb2JqWydzYXZlZGF0YXRpbWUnXSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKVxyXG4gICAgICAgIG9ialsnaXNGcmVlQWQnXSA9IHRoaXMuX2lzRnJlZUFkID8gMSA6IDBcclxuICAgICAgICBsZXQgc3RyZGF0YSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICAgICAgTmF0aXZlLnNhdmVEYXRhVG9BcHAoc3RyZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXNldE9uZURheURhdGEoKXtcclxuICAgICAgICBsZXQgc2R0aW1lID0gQ2hpY2tEYXRhLnVzZXIuZGF5RGF0ZVRpbWU7XHJcbiAgICAgICAgaWYoc2R0aW1lID4gMCl7XHJcbiAgICAgICAgICAgIGxldCBuID0gbmV3IERhdGUoVXRpbHMuZ2V0U2VydmVyVGltZSgpKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoc2R0aW1lKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGlmKG4gIT0gZCl7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaGFyZV90aW1lcyA9IDEwO1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90aW1lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci50b2RheV9nZXRjaGlja190aW1lcyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICBOYXRpdmUuZ2V0RGF0YUZyb21BcHAoKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNldERhdGEoZGF0YVsndXNlciddKTtcclxuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5kYXlEYXRlVGltZSA9IGRhdGEuc2F2ZWRhdGF0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNGcmVlQWQgPSBkYXRhLmlzRnJlZUFkID09IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0T25lRGF5RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/msqHmnInmoaPmoYjph43nva7kuIvpn7PkuZDlvIDlhbNcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ21Wb2x1bWVcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Z4Vm9sdW1lXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2Z4Vm9sdW1lID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLmJnbVZvbHVtZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKDEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==