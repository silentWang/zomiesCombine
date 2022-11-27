
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
            var savedatatime = cc.sys.localStorage.getItem("savedatatime");
            ;
            if (savedatatime > 0) {
                var now = new Date().getDate();
                var d = new Date(savedatatime).getDate();
                if (now != d) {
                    localdata.share_times = 10;
                    localdata.today_getcoin_times = 0;
                    localdata.today_getchick_times = 0;
                }
            }
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
    Data.user = new UserModel_1.default();
    return Data;
}());
exports.default = Data;
window['Data'] = Data;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTBDO0FBQzFDLHdDQUFtQztBQUNuQyw4Q0FBeUM7QUFDekMsK0NBQTBDO0FBRTFDO0lBQUE7SUFnREEsQ0FBQztJQTdDaUIsU0FBSSxHQUFsQixVQUFvQixPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1FBQ3hDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRTNCLE9BQU87UUFDUCxzQkFBc0I7UUFDdEIseUNBQXlDO1FBQ3pDLDRFQUE0RTtRQUM1RSxTQUFTO1FBQ1QsSUFBSTtJQUNSLENBQUM7SUFDYSxhQUFRLEdBQXRCO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEUsSUFBSSxTQUFTLEVBQUU7WUFDWCxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQyxpQ0FBaUM7WUFDakMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQUEsQ0FBQztZQUNoRSxJQUFHLFlBQVksR0FBRyxDQUFDLEVBQUM7Z0JBQ2hCLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QyxJQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUM7b0JBQ1IsU0FBUyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQzNCLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7b0JBQ2xDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7aUJBQ3RDO2FBQ0o7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjthQUNJO1lBQ0QsYUFBYTtZQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELE9BQU87SUFDUSxhQUFRLEdBQXZCLFVBQXdCLElBQUksRUFBRSxPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1FBQ2xELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQTlDYSxTQUFJLEdBQWMsSUFBSSxtQkFBUyxFQUFFLENBQUM7SUErQ3BELFdBQUM7Q0FoREQsQUFnREMsSUFBQTtrQkFoRG9CLElBQUk7QUFrRHpCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi4vZ2FtZS9Vc2VyTW9kZWxcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL2dhbWUvR2FtZUNvbnN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXNlcjogVXNlck1vZGVsID0gbmV3IFVzZXJNb2RlbCgpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2F2ZSggYlJlbW90ZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9XHJcbiAgICAgICAgb2JqWyd1c2VyJ10gPSBEYXRhLnVzZXIuZ2V0VXBsb2FkRGF0YSgpXHJcbiAgICAgICAgRGF0YS5zYXZlZGF0YShvYmosIGJSZW1vdGUpXHJcblxyXG4gICAgICAgIC8v5LiK5Lyg5pyN5Yqh5ZmoXHJcbiAgICAgICAgLy8gaWYgKHdpbmRvd1tcInd4XCJdKSB7XHJcbiAgICAgICAgLy8gICAgIHdpbmRvd1tcInd4XCJdLnNldFVzZXJDbG91ZFN0b3JhZ2Uoe1xyXG4gICAgICAgIC8vICAgICAgICAgS1ZEYXRhTGlzdDogW3sga2V5OiBcImx2XCIsIHZhbHVlOiBNYXRoLmZsb29yKHRoaXMudXNlci5sdikgKyBcIlwiIH1dXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRGF0YSgpIHtcclxuICAgICAgICB2YXIgbG9jYWxkYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKEdhbWVDb25zdC5sb2NhbF9kYXRhX2tleSk7XHJcbiAgICAgICAgaWYgKGxvY2FsZGF0YSkge1xyXG4gICAgICAgICAgICBsb2NhbGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmnKzlnLDmlbDmja4nLCBsb2NhbGRhdGEpXHJcbiAgICAgICAgICAgIGxldCBzYXZlZGF0YXRpbWUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZGF0YXRpbWVcIik7O1xyXG4gICAgICAgICAgICBpZihzYXZlZGF0YXRpbWUgPiAwKXtcclxuICAgICAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoc2F2ZWRhdGF0aW1lKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihub3cgIT0gZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxkYXRhLnNoYXJlX3RpbWVzID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxkYXRhLnRvZGF5X2dldGNvaW5fdGltZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZGF0YS50b2RheV9nZXRjaGlja190aW1lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRGF0YS51c2VyLnNldERhdGEobG9jYWxkYXRhWyd1c2VyJ10pO1xyXG4gICAgICAgICAgICBEYXRhLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5rKh5pyJ5qGj5qGI6YeN572u5LiL6Z+z5LmQ5byA5YWzXHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnbVZvbHVtZVwiLCAxKTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Z4Vm9sdW1lXCIsIDEpO1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnNmeFZvbHVtZSA9IDE7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuYmdtVm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mnKzlnLDlrZjmlbDmja5cclxuICAgIHByaXZhdGUgc3RhdGljIHNhdmVkYXRhKGRhdGEsIGJSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVkYXRhdGltZVwiLCBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpO1xyXG4gICAgICAgIHZhciBzdHJkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEdhbWVDb25zdC5sb2NhbF9kYXRhX2tleSwgc3RyZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvd1snRGF0YSddID0gRGF0YSJdfQ==