
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
        if (window && window['xxxxx'])
            window['xxxxx']("Y7j3rkTtcF8rbMGEj7K");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxDaGlja0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBMEM7QUFDMUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUN6QywrQ0FBMEM7QUFFMUM7SUFBQTtJQTBEQSxDQUFDO0lBdkRHLE9BQU87SUFDUSxrQkFBUSxHQUF2QixVQUF3QixJQUFJLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVhLGNBQUksR0FBbEIsVUFBb0IsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUN4QyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDekMsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3JFLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ2hDLE9BQU87UUFDUCxzQkFBc0I7UUFDdEIseUNBQXlDO1FBQ3pDLDRFQUE0RTtRQUM1RSxTQUFTO1FBQ1QsSUFBSTtJQUNSLENBQUM7SUFDVyxpQ0FBYSxHQUFyQixjQUF5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxELHlCQUFlLEdBQTdCO1FBQ0ksSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUcsWUFBWSxHQUFHLENBQUMsRUFBQztZQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQ04sU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztnQkFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7YUFDM0M7U0FDSjtJQUNMLENBQUM7SUFDVyxpQ0FBYSxHQUFyQixjQUF5QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwQyxrQkFBUSxHQUF0QjtRQUNJLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM1RSxJQUFJLFNBQVMsRUFBRTtZQUNYLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixlQUFlO1NBQ2xCO2FBQ0k7WUFDRCxhQUFhO1lBQ2IsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNsQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBdkRhLGNBQUksR0FBYyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztJQXlEcEQsZ0JBQUM7Q0ExREQsQUEwREMsSUFBQTtrQkExRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi4vZ2FtZS9Vc2VyTW9kZWxcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL2dhbWUvR2FtZUNvbnN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlja0RhdGEge1xyXG4gICAgcHVibGljIHN0YXRpYyB1c2VyOiBVc2VyTW9kZWwgPSBuZXcgVXNlck1vZGVsKCk7XHJcblxyXG4gICAgLy/mnKzlnLDlrZjmlbDmja5cclxuICAgIHByaXZhdGUgc3RhdGljIHNhdmVkYXRhKGRhdGEsIGJSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVkYXRhdGltZVwiLCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpO1xyXG4gICAgICAgIHZhciBzdHJkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEdhbWVDb25zdC5jYWNoZV9jaGlja19kYXRhX2tleSwgc3RyZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzYXZlKCBiUmVtb3RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBDaGlja0RhdGEucmVzZXRPbmVEYXlEYXRhKCk7XHJcbiAgICAgICAgbGV0IG9iaiA9IHt9XHJcbiAgICAgICAgb2JqWyd1c2VyJ10gPSBDaGlja0RhdGEudXNlci5nZXRBbGxEYXRhKClcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJZN2ozcmtUdGNGOHJiTUdFajdLXCIpO1xuICAgICAgICBDaGlja0RhdGEuc2F2ZWRhdGEob2JqLCBiUmVtb3RlKVxyXG4gICAgICAgIC8v5LiK5Lyg5pyN5Yqh5ZmoXHJcbiAgICAgICAgLy8gaWYgKHdpbmRvd1tcInd4XCJdKSB7XHJcbiAgICAgICAgLy8gICAgIHdpbmRvd1tcInd4XCJdLnNldFVzZXJDbG91ZFN0b3JhZ2Uoe1xyXG4gICAgICAgIC8vICAgICAgICAgS1ZEYXRhTGlzdDogW3sga2V5OiBcImx2XCIsIHZhbHVlOiBNYXRoLmZsb29yKHRoaXMudXNlci5sdikgKyBcIlwiIH1dXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgICAgIHByaXZhdGUgQU5ocF94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIlFmSEJFSEFpZlg4aUF6ejVkXCIpOyB9XG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzZXRPbmVEYXlEYXRhKCl7XHJcbiAgICAgICAgbGV0IHNhdmVkYXRhdGltZSA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmVkYXRhdGltZVwiKSk7XHJcbiAgICAgICAgaWYoc2F2ZWRhdGF0aW1lID4gMCl7XHJcbiAgICAgICAgICAgIGxldCBuID0gbmV3IERhdGUoVXRpbHMuZ2V0U2VydmVyVGltZSgpKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoc2F2ZWRhdGF0aW1lKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGlmKG4gIT0gZCl7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zaGFyZV90aW1lcyA9IDEwO1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90aW1lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci50b2RheV9nZXRjaGlja190aW1lcyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBLR1hNX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiRDdHXCIpOyB9XG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQjNmeFFyM1BcIik7XG4gICAgICAgIHZhciBsb2NhbGRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oR2FtZUNvbnN0LmNhY2hlX2NoaWNrX2RhdGFfa2V5KTtcclxuICAgICAgICBpZiAobG9jYWxkYXRhKSB7XHJcbiAgICAgICAgICAgIGxvY2FsZGF0YSA9IEpTT04ucGFyc2UobG9jYWxkYXRhKTtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2V0RGF0YShsb2NhbGRhdGFbJ3VzZXInXSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRPbmVEYXlEYXRhKCk7XHJcbiAgICAgICAgICAgIC8vIERhdGEuc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy/msqHmnInmoaPmoYjph43nva7kuIvpn7PkuZDlvIDlhbNcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiVFhlQXJcIik7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ21Wb2x1bWVcIiwgMSk7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNmeFZvbHVtZVwiLCAxKTtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5zZnhWb2x1bWUgPSAxO1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLmJnbVZvbHVtZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=