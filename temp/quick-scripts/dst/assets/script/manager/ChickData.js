
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxDaGlja0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBMEM7QUFDMUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUN6QywrQ0FBMEM7QUFFMUM7SUFBQTtJQXFEQSxDQUFDO0lBbERHLE9BQU87SUFDUSxrQkFBUSxHQUF2QixVQUF3QixJQUFJLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVhLGNBQUksR0FBbEIsVUFBb0IsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUN4QyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDekMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDaEMsT0FBTztRQUNQLHNCQUFzQjtRQUN0Qix5Q0FBeUM7UUFDekMsNEVBQTRFO1FBQzVFLFNBQVM7UUFDVCxJQUFJO0lBQ1IsQ0FBQztJQUVhLHlCQUFlLEdBQTdCO1FBQ0ksSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUcsWUFBWSxHQUFHLENBQUMsRUFBQztZQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQ04sU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztnQkFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7YUFDM0M7U0FDSjtJQUNMLENBQUM7SUFFYSxrQkFBUSxHQUF0QjtRQUNJLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDNUUsSUFBSSxTQUFTLEVBQUU7WUFDWCxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsZUFBZTtTQUNsQjthQUNJO1lBQ0QsYUFBYTtZQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQWxEYSxjQUFJLEdBQWMsSUFBSSxtQkFBUyxFQUFFLENBQUM7SUFvRHBELGdCQUFDO0NBckRELEFBcURDLElBQUE7a0JBckRvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL2dhbWUvVXNlck1vZGVsXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9nYW1lL0dhbWVDb25zdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpY2tEYXRhIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXNlcjogVXNlck1vZGVsID0gbmV3IFVzZXJNb2RlbCgpO1xyXG5cclxuICAgIC8v5pys5Zyw5a2Y5pWw5o2uXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzYXZlZGF0YShkYXRhLCBiUmVtb3RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlZGF0YXRpbWVcIiwgVXRpbHMuZ2V0U2VydmVyVGltZSgpKTtcclxuICAgICAgICB2YXIgc3RyZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShHYW1lQ29uc3QuY2FjaGVfY2hpY2tfZGF0YV9rZXksIHN0cmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2F2ZSggYlJlbW90ZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnJlc2V0T25lRGF5RGF0YSgpO1xyXG4gICAgICAgIGxldCBvYmogPSB7fVxyXG4gICAgICAgIG9ialsndXNlciddID0gQ2hpY2tEYXRhLnVzZXIuZ2V0QWxsRGF0YSgpXHJcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmVkYXRhKG9iaiwgYlJlbW90ZSlcclxuICAgICAgICAvL+S4iuS8oOacjeWKoeWZqFxyXG4gICAgICAgIC8vIGlmICh3aW5kb3dbXCJ3eFwiXSkge1xyXG4gICAgICAgIC8vICAgICB3aW5kb3dbXCJ3eFwiXS5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcclxuICAgICAgICAvLyAgICAgICAgIEtWRGF0YUxpc3Q6IFt7IGtleTogXCJsdlwiLCB2YWx1ZTogTWF0aC5mbG9vcih0aGlzLnVzZXIubHYpICsgXCJcIiB9XVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc2V0T25lRGF5RGF0YSgpe1xyXG4gICAgICAgIGxldCBzYXZlZGF0YXRpbWUgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZGF0YXRpbWVcIikpO1xyXG4gICAgICAgIGlmKHNhdmVkYXRhdGltZSA+IDApe1xyXG4gICAgICAgICAgICBsZXQgbiA9IG5ldyBEYXRlKFV0aWxzLmdldFNlcnZlclRpbWUoKSkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKHNhdmVkYXRhdGltZSkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBpZihuICE9IGQpe1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2hhcmVfdGltZXMgPSAxMDtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNvaW5fdGltZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdGltZXMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsZGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShHYW1lQ29uc3QuY2FjaGVfY2hpY2tfZGF0YV9rZXkpO1xyXG4gICAgICAgIGlmIChsb2NhbGRhdGEpIHtcclxuICAgICAgICAgICAgbG9jYWxkYXRhID0gSlNPTi5wYXJzZShsb2NhbGRhdGEpO1xyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5zZXREYXRhKGxvY2FsZGF0YVsndXNlciddKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldE9uZURheURhdGEoKTtcclxuICAgICAgICAgICAgLy8gRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL+ayoeacieaho+ahiOmHjee9ruS4i+mfs+S5kOW8gOWFs1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ21Wb2x1bWVcIiwgMSk7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNmeFZvbHVtZVwiLCAxKTtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5zZnhWb2x1bWUgPSAxO1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLmJnbVZvbHVtZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=