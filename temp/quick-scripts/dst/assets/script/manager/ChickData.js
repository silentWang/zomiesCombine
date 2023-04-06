
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxDaGlja0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBMEM7QUFDMUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUN6QywrQ0FBMEM7QUFFMUM7SUFBQTtJQXlEQSxDQUFDO0lBdERHLE9BQU87SUFDUSxrQkFBUSxHQUF2QixVQUF3QixJQUFJLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLG1DQUFlLEdBQXZCLGNBQTJCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEQsY0FBSSxHQUFsQixVQUFvQixPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1FBQ3hDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN6QyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNoQyxPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLHlDQUF5QztRQUN6Qyw0RUFBNEU7UUFDNUUsU0FBUztRQUNULElBQUk7SUFDUixDQUFDO0lBQ08saUNBQWEsR0FBckIsY0FBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5Qyx5QkFBZSxHQUE3QjtRQUNJLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFHLFlBQVksR0FBRyxDQUFDLEVBQUM7WUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFDO2dCQUNOLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDaEMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO2FBQzNDO1NBQ0o7SUFDTCxDQUFDO0lBQ08saUNBQWEsR0FBckIsY0FBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEMsa0JBQVEsR0FBdEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLGVBQWU7U0FDbEI7YUFDSTtZQUNELGFBQWE7WUFDYixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUF0RGEsY0FBSSxHQUFjLElBQUksbUJBQVMsRUFBRSxDQUFDO0lBd0RwRCxnQkFBQztDQXpERCxBQXlEQyxJQUFBO2tCQXpEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gXCIuLi9nYW1lL1VzZXJNb2RlbFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vZ2FtZS9HYW1lQ29uc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWNrRGF0YSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVzZXI6IFVzZXJNb2RlbCA9IG5ldyBVc2VyTW9kZWwoKTtcclxuXHJcbiAgICAvL+acrOWcsOWtmOaVsOaNrlxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2F2ZWRhdGEoZGF0YSwgYlJlbW90ZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWRhdGF0aW1lXCIsIFV0aWxzLmdldFNlcnZlclRpbWUoKSk7XHJcbiAgICAgICAgdmFyIHN0cmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oR2FtZUNvbnN0LmNhY2hlX2NoaWNrX2RhdGFfa2V5LCBzdHJkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIERnZHNlX2V3MzMyX2Z1bigpeyBjb25zb2xlLmxvZyhcIjUyMWdhNTZzZDFnNnNkYTUxZzVcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmUoIGJSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIENoaWNrRGF0YS5yZXNldE9uZURheURhdGEoKTtcclxuICAgICAgICBsZXQgb2JqID0ge31cclxuICAgICAgICBvYmpbJ3VzZXInXSA9IENoaWNrRGF0YS51c2VyLmdldEFsbERhdGEoKVxyXG4gICAgICAgIENoaWNrRGF0YS5zYXZlZGF0YShvYmosIGJSZW1vdGUpXHJcbiAgICAgICAgLy/kuIrkvKDmnI3liqHlmahcclxuICAgICAgICAvLyBpZiAod2luZG93W1wid3hcIl0pIHtcclxuICAgICAgICAvLyAgICAgd2luZG93W1wid3hcIl0uc2V0VXNlckNsb3VkU3RvcmFnZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBLVkRhdGFMaXN0OiBbeyBrZXk6IFwibHZcIiwgdmFsdWU6IE1hdGguZmxvb3IodGhpcy51c2VyLmx2KSArIFwiXCIgfV1cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEFOaHBfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJRZkhCRUhBaWZYOGlBeno1ZFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzZXRPbmVEYXlEYXRhKCl7XHJcbiAgICAgICAgbGV0IHNhdmVkYXRhdGltZSA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmVkYXRhdGltZVwiKSk7XHJcbiAgICAgICAgaWYoc2F2ZWRhdGF0aW1lID4gMCl7XHJcbiAgICAgICAgICAgIGxldCBuID0gbmV3IERhdGUoVXRpbHMuZ2V0U2VydmVyVGltZSgpKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoc2F2ZWRhdGF0aW1lKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGlmKG4gIT0gZCl7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaGFyZV90aW1lcyA9IDEwO1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90aW1lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci50b2RheV9nZXRjaGlja190aW1lcyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEtHWE1feHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJEN0dcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWREYXRhKCkge1xyXG4gICAgICAgIHZhciBsb2NhbGRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oR2FtZUNvbnN0LmNhY2hlX2NoaWNrX2RhdGFfa2V5KTtcclxuICAgICAgICBpZiAobG9jYWxkYXRhKSB7XHJcbiAgICAgICAgICAgIGxvY2FsZGF0YSA9IEpTT04ucGFyc2UobG9jYWxkYXRhKTtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2V0RGF0YShsb2NhbGRhdGFbJ3VzZXInXSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRPbmVEYXlEYXRhKCk7XHJcbiAgICAgICAgICAgIC8vIERhdGEuc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy/msqHmnInmoaPmoYjph43nva7kuIvpn7PkuZDlvIDlhbNcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmdtVm9sdW1lXCIsIDEpO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZnhWb2x1bWVcIiwgMSk7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2Z4Vm9sdW1lID0gMTtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5iZ21Wb2x1bWUgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19