
import UserModel from "../game/UserModel";
import Utils from "../utils/Utils";
import AudioMgr from "../utils/AudioMgr";
import GameConst from "../game/GameConst";

export default class ChickData {
    public static user: UserModel = new UserModel();

    //本地存数据
    private static savedata(data, bRemote: boolean = false) {
        cc.sys.localStorage.setItem("savedatatime", Utils.getServerTime());
        var strdata = JSON.stringify(data);
        cc.sys.localStorage.setItem(GameConst.cache_chick_data_key, strdata);
    }

    public static save( bRemote: boolean = false) {
        ChickData.resetOneDayData();
        let obj = {}
        obj['user'] = ChickData.user.getAllData()
        ChickData.savedata(obj, bRemote)
        //上传服务器
        // if (window["wx"]) {
        //     window["wx"].setUserCloudStorage({
        //         KVDataList: [{ key: "lv", value: Math.floor(this.user.lv) + "" }]
        //     })
        // }
    }

    public static resetOneDayData(){
        let savedatatime = parseInt(cc.sys.localStorage.getItem("savedatatime"));
        if(savedatatime > 0){
            let n = new Date(Utils.getServerTime()).getDate();
            let d = new Date(savedatatime).getDate();
            if(n != d){
                ChickData.user.share_times = 10;
                ChickData.user.today_getcoin_times = 0;
                ChickData.user.today_getchick_times = 0;
            }
        }
    }

    public static loadData() {
        var localdata = cc.sys.localStorage.getItem(GameConst.cache_chick_data_key);
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
            AudioMgr.Instance().sfxVolume = 1;
            AudioMgr.Instance().bgmVolume = 1;
        }
    }

}
