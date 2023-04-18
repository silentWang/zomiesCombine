"use strict";
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