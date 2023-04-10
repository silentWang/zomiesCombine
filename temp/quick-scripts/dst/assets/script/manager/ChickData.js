
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
var GameConst_1 = require("../game/GameConst");
var ChickData = /** @class */ (function () {
    function ChickData() {
    }
    //本地存数据
    ChickData.savedata = function (data, bRemote) {
        if (bRemote === void 0) { bRemote = false; }
        cc.sys.localStorage.setItem("savedatatime", Utils_1.default.getServerTime());
        var strdata = JSON.stringify(data);
        cc.sys.localStorage.setItem(GameConst_1.default.cache_chick_data_key, strdata);
    };
    ChickData.prototype.Dgdse_ew332_fun = function () { console.log("521ga56sd1g6sda51g5"); };
    ChickData.save = function (bRemote) {
        if (bRemote === void 0) { bRemote = false; }
        ChickData.resetOneDayData();
        var obj = {};
        obj['user'] = ChickData.user.getAllData();
        ChickData.savedata(obj, bRemote);
        //上传服务器
        // if (window["wx"]) {
        //     window["wx"].setUserCloudStorage({
        //         KVDataList: [{ key: "lv", value: Math.floor(this.user.lv) + "" }]
        //     })
        // }
    };
    ChickData.prototype.ANhp_xxxx_fun = function () { console.log("QfHBEHAifX8iAzz5d"); };
    ChickData.resetOneDayData = function () {
        var savedatatime = parseInt(cc.sys.localStorage.getItem("savedatatime"));
        if (savedatatime > 0) {
            var n = new Date(Utils_1.default.getServerTime()).getDate();
            var d = new Date(savedatatime).getDate();
            if (n != d) {
                ChickData.user.share_times = 10;
                ChickData.user.today_getcoin_times = 0;
                ChickData.user.today_getchick_times = 0;
            }
        }
    };
    ChickData.prototype.KGXM_xxxx_fun = function () { console.log("D7G"); };
    ChickData.loadData = function () {
        var localdata = cc.sys.localStorage.getItem(GameConst_1.default.cache_chick_data_key);
        if (localdata) {
            localdata = JSON.parse(localdata);
            ChickData.user.setData(localdata['user']);
            this.resetOneDayData();
            // Data.save();
        }
        else {
            //没有档案重置下音乐开关
            cc.sys.localStorage.setItem("bgmVolume", 1);
            cc.sys.localStorage.setItem("sfxVolume", 1);
            AudioMgr_1.default.Instance().sfxVolume = 1;
            AudioMgr_1.default.Instance().bgmVolume = 1;
        }
    };
    ChickData.user = new UserModel_1.default();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlci9DaGlja0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBMEM7QUFDMUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUN6QywrQ0FBMEM7QUFFMUM7SUFBQTtJQXlEQSxDQUFDO0lBdERHLE9BQU87SUFDUSxrQkFBUSxHQUF2QixVQUF3QixJQUFJLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLG1DQUFlLEdBQXZCLGNBQTJCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEQsY0FBSSxHQUFsQixVQUFvQixPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1FBQ3hDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN6QyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNoQyxPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLHlDQUF5QztRQUN6Qyw0RUFBNEU7UUFDNUUsU0FBUztRQUNULElBQUk7SUFDUixDQUFDO0lBQ08saUNBQWEsR0FBckIsY0FBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5Qyx5QkFBZSxHQUE3QjtRQUNJLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFHLFlBQVksR0FBRyxDQUFDLEVBQUM7WUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFDO2dCQUNOLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDaEMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO2FBQzNDO1NBQ0o7SUFDTCxDQUFDO0lBQ08saUNBQWEsR0FBckIsY0FBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEMsa0JBQVEsR0FBdEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLGVBQWU7U0FDbEI7YUFDSTtZQUNELGFBQWE7WUFDYixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUF0RGEsY0FBSSxHQUFjLElBQUksbUJBQVMsRUFBRSxDQUFDO0lBd0RwRCxnQkFBQztDQXpERCxBQXlEQyxJQUFBO2tCQXpEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi4vZ2FtZS9Vc2VyTW9kZWxcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL2dhbWUvR2FtZUNvbnN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWNrRGF0YSB7XG4gICAgcHVibGljIHN0YXRpYyB1c2VyOiBVc2VyTW9kZWwgPSBuZXcgVXNlck1vZGVsKCk7XG5cbiAgICAvL+acrOWcsOWtmOaVsOaNrlxuICAgIHByaXZhdGUgc3RhdGljIHNhdmVkYXRhKGRhdGEsIGJSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlZGF0YXRpbWVcIiwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKTtcbiAgICAgICAgdmFyIHN0cmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEdhbWVDb25zdC5jYWNoZV9jaGlja19kYXRhX2tleSwgc3RyZGF0YSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBEZ2RzZV9ldzMzMl9mdW4oKXsgY29uc29sZS5sb2coXCI1MjFnYTU2c2QxZzZzZGE1MWc1XCIpOyB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNhdmUoIGJSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBDaGlja0RhdGEucmVzZXRPbmVEYXlEYXRhKCk7XG4gICAgICAgIGxldCBvYmogPSB7fVxuICAgICAgICBvYmpbJ3VzZXInXSA9IENoaWNrRGF0YS51c2VyLmdldEFsbERhdGEoKVxuICAgICAgICBDaGlja0RhdGEuc2F2ZWRhdGEob2JqLCBiUmVtb3RlKVxuICAgICAgICAvL+S4iuS8oOacjeWKoeWZqFxuICAgICAgICAvLyBpZiAod2luZG93W1wid3hcIl0pIHtcbiAgICAgICAgLy8gICAgIHdpbmRvd1tcInd4XCJdLnNldFVzZXJDbG91ZFN0b3JhZ2Uoe1xuICAgICAgICAvLyAgICAgICAgIEtWRGF0YUxpc3Q6IFt7IGtleTogXCJsdlwiLCB2YWx1ZTogTWF0aC5mbG9vcih0aGlzLnVzZXIubHYpICsgXCJcIiB9XVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBwcml2YXRlIEFOaHBfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJRZkhCRUhBaWZYOGlBeno1ZFwiKTsgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZXNldE9uZURheURhdGEoKXtcbiAgICAgICAgbGV0IHNhdmVkYXRhdGltZSA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmVkYXRhdGltZVwiKSk7XG4gICAgICAgIGlmKHNhdmVkYXRhdGltZSA+IDApe1xuICAgICAgICAgICAgbGV0IG4gPSBuZXcgRGF0ZShVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLmdldERhdGUoKTtcbiAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoc2F2ZWRhdGF0aW1lKS5nZXREYXRlKCk7XG4gICAgICAgICAgICBpZihuICE9IGQpe1xuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNoYXJlX3RpbWVzID0gMTA7XG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90aW1lcyA9IDA7XG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdGltZXMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgS0dYTV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIkQ3R1wiKTsgfVxuXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRGF0YSgpIHtcbiAgICAgICAgdmFyIGxvY2FsZGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShHYW1lQ29uc3QuY2FjaGVfY2hpY2tfZGF0YV9rZXkpO1xuICAgICAgICBpZiAobG9jYWxkYXRhKSB7XG4gICAgICAgICAgICBsb2NhbGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsZGF0YSk7XG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5zZXREYXRhKGxvY2FsZGF0YVsndXNlciddKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRPbmVEYXlEYXRhKCk7XG4gICAgICAgICAgICAvLyBEYXRhLnNhdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8v5rKh5pyJ5qGj5qGI6YeN572u5LiL6Z+z5LmQ5byA5YWzXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ21Wb2x1bWVcIiwgMSk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZnhWb2x1bWVcIiwgMSk7XG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnNmeFZvbHVtZSA9IDE7XG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLmJnbVZvbHVtZSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==