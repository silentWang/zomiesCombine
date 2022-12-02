
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/Data.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33e40/I8TNAE6QREhbIVC7x', 'Data');
// script/manager/Data.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../game/UserModel");
var Utils_1 = require("../utils/Utils");
var AudioMgr_1 = require("../utils/AudioMgr");
var GameConst_1 = require("../game/GameConst");
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.save = function (bRemote) {
        if (bRemote === void 0) { bRemote = false; }
        Data.resetOneDayData();
        var obj = {};
        obj['user'] = Data.user.getUploadData();
        Data.savedata(obj, bRemote);
        //上传服务器
        // if (window["wx"]) {
        //     window["wx"].setUserCloudStorage({
        //         KVDataList: [{ key: "lv", value: Math.floor(this.user.lv) + "" }]
        //     })
        // }
    };
    Data.loadData = function () {
        var localdata = cc.sys.localStorage.getItem(GameConst_1.default.local_data_key);
        if (localdata) {
            localdata = JSON.parse(localdata);
            // console.log('本地数据', localdata)
            this.resetOneDayData();
            Data.user.setData(localdata['user']);
            Data.save();
        }
        else {
            //没有档案重置下音乐开关
            cc.sys.localStorage.setItem("bgmVolume", 1);
            cc.sys.localStorage.setItem("sfxVolume", 1);
            AudioMgr_1.default.Instance().sfxVolume = 1;
            AudioMgr_1.default.Instance().bgmVolume = 1;
        }
    };
    //本地存数据
    Data.savedata = function (data, bRemote) {
        if (bRemote === void 0) { bRemote = false; }
        cc.sys.localStorage.setItem("savedatatime", Utils_1.default.getServerTime());
        var strdata = JSON.stringify(data);
        cc.sys.localStorage.setItem(GameConst_1.default.local_data_key, strdata);
    };
    Data.resetOneDayData = function () {
        var savedatatime = parseInt(cc.sys.localStorage.getItem("savedatatime"));
        if (savedatatime > 0) {
            var n = new Date(Utils_1.default.getServerTime()).getDate();
            var d = new Date(savedatatime).getDate();
            console.log('ccccccc', n);
            console.log('ddddddd', d);
            if (n != d) {
                Data.user.share_times = 10;
                Data.user.today_getcoin_times = 0;
                Data.user.today_getchick_times = 0;
            }
        }
    };
    Data.user = new UserModel_1.default();
    return Data;
}());
exports.default = Data;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTBDO0FBQzFDLHdDQUFtQztBQUNuQyw4Q0FBeUM7QUFDekMsK0NBQTBDO0FBRTFDO0lBQUE7SUF1REEsQ0FBQztJQXBEaUIsU0FBSSxHQUFsQixVQUFvQixPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMzQixPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLHlDQUF5QztRQUN6Qyw0RUFBNEU7UUFDNUUsU0FBUztRQUNULElBQUk7SUFDUixDQUFDO0lBQ2EsYUFBUSxHQUF0QjtRQUNJLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjthQUNJO1lBQ0QsYUFBYTtZQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELE9BQU87SUFDUSxhQUFRLEdBQXZCLFVBQXdCLElBQUksRUFBRSxPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1FBQ2xELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVhLG9CQUFlLEdBQTdCO1FBQ0ksSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUcsWUFBWSxHQUFHLENBQUMsRUFBQztZQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQTtZQUN4QixJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7YUFDdEM7U0FDSjtJQUNMLENBQUM7SUFwRGEsU0FBSSxHQUFjLElBQUksbUJBQVMsRUFBRSxDQUFDO0lBc0RwRCxXQUFDO0NBdkRELEFBdURDLElBQUE7a0JBdkRvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL2dhbWUvVXNlck1vZGVsXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9nYW1lL0dhbWVDb25zdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVzZXI6IFVzZXJNb2RlbCA9IG5ldyBVc2VyTW9kZWwoKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmUoIGJSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIERhdGEucmVzZXRPbmVEYXlEYXRhKCk7XHJcbiAgICAgICAgbGV0IG9iaiA9IHt9XHJcbiAgICAgICAgb2JqWyd1c2VyJ10gPSBEYXRhLnVzZXIuZ2V0VXBsb2FkRGF0YSgpXHJcbiAgICAgICAgRGF0YS5zYXZlZGF0YShvYmosIGJSZW1vdGUpXHJcbiAgICAgICAgLy/kuIrkvKDmnI3liqHlmahcclxuICAgICAgICAvLyBpZiAod2luZG93W1wid3hcIl0pIHtcclxuICAgICAgICAvLyAgICAgd2luZG93W1wid3hcIl0uc2V0VXNlckNsb3VkU3RvcmFnZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBLVkRhdGFMaXN0OiBbeyBrZXk6IFwibHZcIiwgdmFsdWU6IE1hdGguZmxvb3IodGhpcy51c2VyLmx2KSArIFwiXCIgfV1cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWREYXRhKCkge1xyXG4gICAgICAgIHZhciBsb2NhbGRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oR2FtZUNvbnN0LmxvY2FsX2RhdGFfa2V5KTtcclxuICAgICAgICBpZiAobG9jYWxkYXRhKSB7XHJcbiAgICAgICAgICAgIGxvY2FsZGF0YSA9IEpTT04ucGFyc2UobG9jYWxkYXRhKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+acrOWcsOaVsOaNricsIGxvY2FsZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5yZXNldE9uZURheURhdGEoKTtcclxuICAgICAgICAgICAgRGF0YS51c2VyLnNldERhdGEobG9jYWxkYXRhWyd1c2VyJ10pO1xyXG4gICAgICAgICAgICBEYXRhLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5rKh5pyJ5qGj5qGI6YeN572u5LiL6Z+z5LmQ5byA5YWzXHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnbVZvbHVtZVwiLCAxKTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Z4Vm9sdW1lXCIsIDEpO1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnNmeFZvbHVtZSA9IDE7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuYmdtVm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mnKzlnLDlrZjmlbDmja5cclxuICAgIHByaXZhdGUgc3RhdGljIHNhdmVkYXRhKGRhdGEsIGJSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVkYXRhdGltZVwiLCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpO1xyXG4gICAgICAgIHZhciBzdHJkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEdhbWVDb25zdC5sb2NhbF9kYXRhX2tleSwgc3RyZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXNldE9uZURheURhdGEoKXtcclxuICAgICAgICBsZXQgc2F2ZWRhdGF0aW1lID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2F2ZWRhdGF0aW1lXCIpKTtcclxuICAgICAgICBpZihzYXZlZGF0YXRpbWUgPiAwKXtcclxuICAgICAgICAgICAgbGV0IG4gPSBuZXcgRGF0ZShVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLmdldERhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZShzYXZlZGF0YXRpbWUpLmdldERhdGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NjY2NjY2MnLG4pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZGRkZGRkJyxkKVxyXG4gICAgICAgICAgICBpZihuICE9IGQpe1xyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLnNoYXJlX3RpbWVzID0gMTA7XHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90aW1lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdGltZXMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=