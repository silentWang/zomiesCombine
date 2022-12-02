
import UserModel from "../game/UserModel";
import Utils from "../utils/Utils";
import AudioMgr from "../utils/AudioMgr";
import GameConst from "../game/GameConst";

export default class Data {
    public static user: UserModel = new UserModel();

    public static save( bRemote: boolean = false) {
        Data.resetOneDayData();
        let obj = {}
        obj['user'] = Data.user.getUploadData()
        Data.savedata(obj, bRemote)
        //上传服务器
        // if (window["wx"]) {
        //     window["wx"].setUserCloudStorage({
        //         KVDataList: [{ key: "lv", value: Math.floor(this.user.lv) + "" }]
        //     })
        // }
    }
    public static loadData() {
        var localdata = cc.sys.localStorage.getItem(GameConst.local_data_key);
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
            AudioMgr.Instance().sfxVolume = 1;
            AudioMgr.Instance().bgmVolume = 1;
        }
    }

    //本地存数据
    private static savedata(data, bRemote: boolean = false) {
        cc.sys.localStorage.setItem("savedatatime", Utils.getServerTime());
        var strdata = JSON.stringify(data);
        cc.sys.localStorage.setItem(GameConst.local_data_key, strdata);
    }

    public static resetOneDayData(){
        let savedatatime = parseInt(cc.sys.localStorage.getItem("savedatatime"));
        if(savedatatime > 0){
            let n = new Date(Utils.getServerTime()).getDate();
            let d = new Date(savedatatime).getDate();
            console.log('ccccccc',n)
            console.log('ddddddd',d)
            if(n != d){
                Data.user.share_times = 10;
                Data.user.today_getcoin_times = 0;
                Data.user.today_getchick_times = 0;
            }
        }
    }

}
