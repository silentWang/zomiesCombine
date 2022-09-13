"use strict";
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
            Data.user.setData(localdata['user']);
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

cc._RF.pop();