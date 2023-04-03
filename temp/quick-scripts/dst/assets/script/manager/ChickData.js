
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
        if (window && window['xxxxx'])
            window['xxxxx']("Y7j3rkTtcF8rsdfbMGEj7K");
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
        if (window && window['xxxxx'])
            window['xxxxx']("B3fxQr3P");
        var localdata = cc.sys.localStorage.getItem(GameConst_1.default.cache_chick_data_key);
        if (localdata) {
            localdata = JSON.parse(localdata);
            ChickData.user.setData(localdata['user']);
            this.resetOneDayData();
            // Data.save();
        }
        else {
            //没有档案重置下音乐开关
            if (window && window['xxxxx'])
                window['xxxxx']("TXeAr");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxDaGlja0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBMEM7QUFDMUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUN6QywrQ0FBMEM7QUFFMUM7SUFBQTtJQTREQSxDQUFDO0lBekRHLE9BQU87SUFDUSxrQkFBUSxHQUF2QixVQUF3QixJQUFJLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLG1DQUFlLEdBQXZCLGNBQTJCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEQsY0FBSSxHQUFsQixVQUFvQixPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1FBQ3hDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN6QyxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDaEMsT0FBTztRQUNQLHNCQUFzQjtRQUN0Qix5Q0FBeUM7UUFDekMsNEVBQTRFO1FBQzVFLFNBQVM7UUFDVCxJQUFJO0lBQ1IsQ0FBQztJQUNPLGlDQUFhLEdBQXJCLGNBQXlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUMseUJBQWUsR0FBN0I7UUFDSSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBRyxZQUFZLEdBQUcsQ0FBQyxFQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pDLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDTixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2hDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQzthQUMzQztTQUNKO0lBQ0wsQ0FBQztJQUNPLGlDQUFhLEdBQXJCLGNBQXlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhDLGtCQUFRLEdBQXRCO1FBQ0ksSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLGVBQWU7U0FDbEI7YUFDSTtZQUNELGFBQWE7WUFDYixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2RCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUF6RGEsY0FBSSxHQUFjLElBQUksbUJBQVMsRUFBRSxDQUFDO0lBMkRwRCxnQkFBQztDQTVERCxBQTREQyxJQUFBO2tCQTVEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gXCIuLi9nYW1lL1VzZXJNb2RlbFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vZ2FtZS9HYW1lQ29uc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWNrRGF0YSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVzZXI6IFVzZXJNb2RlbCA9IG5ldyBVc2VyTW9kZWwoKTtcclxuXHJcbiAgICAvL+acrOWcsOWtmOaVsOaNrlxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2F2ZWRhdGEoZGF0YSwgYlJlbW90ZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWRhdGF0aW1lXCIsIFV0aWxzLmdldFNlcnZlclRpbWUoKSk7XHJcbiAgICAgICAgdmFyIHN0cmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oR2FtZUNvbnN0LmNhY2hlX2NoaWNrX2RhdGFfa2V5LCBzdHJkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIERnZHNlX2V3MzMyX2Z1bigpeyBjb25zb2xlLmxvZyhcIjUyMWdhNTZzZDFnNnNkYTUxZzVcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmUoIGJSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIENoaWNrRGF0YS5yZXNldE9uZURheURhdGEoKTtcclxuICAgICAgICBsZXQgb2JqID0ge31cclxuICAgICAgICBvYmpbJ3VzZXInXSA9IENoaWNrRGF0YS51c2VyLmdldEFsbERhdGEoKVxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlk3ajNya1R0Y0Y4cnNkZmJNR0VqN0tcIik7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmVkYXRhKG9iaiwgYlJlbW90ZSlcclxuICAgICAgICAvL+S4iuS8oOacjeWKoeWZqFxyXG4gICAgICAgIC8vIGlmICh3aW5kb3dbXCJ3eFwiXSkge1xyXG4gICAgICAgIC8vICAgICB3aW5kb3dbXCJ3eFwiXS5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcclxuICAgICAgICAvLyAgICAgICAgIEtWRGF0YUxpc3Q6IFt7IGtleTogXCJsdlwiLCB2YWx1ZTogTWF0aC5mbG9vcih0aGlzLnVzZXIubHYpICsgXCJcIiB9XVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgQU5ocF94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIlFmSEJFSEFpZlg4aUF6ejVkXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXNldE9uZURheURhdGEoKXtcclxuICAgICAgICBsZXQgc2F2ZWRhdGF0aW1lID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2F2ZWRhdGF0aW1lXCIpKTtcclxuICAgICAgICBpZihzYXZlZGF0YXRpbWUgPiAwKXtcclxuICAgICAgICAgICAgbGV0IG4gPSBuZXcgRGF0ZShVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLmdldERhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZShzYXZlZGF0YXRpbWUpLmdldERhdGUoKTtcclxuICAgICAgICAgICAgaWYobiAhPSBkKXtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNoYXJlX3RpbWVzID0gMTA7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci50b2RheV9nZXRjb2luX3RpbWVzID0gMDtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgS0dYTV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIkQ3R1wiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQjNmeFFyM1BcIik7XHJcbiAgICAgICAgdmFyIGxvY2FsZGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShHYW1lQ29uc3QuY2FjaGVfY2hpY2tfZGF0YV9rZXkpO1xyXG4gICAgICAgIGlmIChsb2NhbGRhdGEpIHtcclxuICAgICAgICAgICAgbG9jYWxkYXRhID0gSlNPTi5wYXJzZShsb2NhbGRhdGEpO1xyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5zZXREYXRhKGxvY2FsZGF0YVsndXNlciddKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldE9uZURheURhdGEoKTtcclxuICAgICAgICAgICAgLy8gRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL+ayoeacieaho+ahiOmHjee9ruS4i+mfs+S5kOW8gOWFs1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJUWGVBclwiKTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmdtVm9sdW1lXCIsIDEpO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZnhWb2x1bWVcIiwgMSk7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2Z4Vm9sdW1lID0gMTtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5iZ21Wb2x1bWUgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19