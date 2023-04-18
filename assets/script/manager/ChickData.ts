
import UserModel from "../game/UserModel";
import Utils from "../utils/Utils";
import AudioMgr from "../utils/AudioMgr";
import GameConst from "../game/GameConst";
import Native from "../utils/Native";

export default class ChickData {
    public static user: UserModel = new UserModel();
    public static isFreeAd = false;
    
    public static save( bRemote: boolean = false) {
        ChickData.resetOneDayData();
        let obj = {}
        obj['user'] = ChickData.user.getAllData()
        obj['savedatatime'] = Utils.getServerTime()
        let strdata = JSON.stringify(obj);
        Native.saveDataToApp(strdata);
    }

    public static resetOneDayData(){
        let sdtime = ChickData.user.dayDateTime;
        if(sdtime > 0){
            let n = new Date(Utils.getServerTime()).getDate();
            let d = new Date(sdtime).getDate();
            if(n != d){
                ChickData.user.share_times = 10;
                ChickData.user.today_getcoin_times = 0;
                ChickData.user.today_getchick_times = 0;
            }
        }
    }

    public static loadData() {
        return new Promise((resolve,reject)=>{
            Native.getDataFromApp((data)=>{
                if (data) {
                    ChickData.user.setData(data['user']);
                    ChickData.user.dayDateTime = data.savedatatime
                    this.resetOneDayData();
                }
                else {
                    //没有档案重置下音乐开关
                    cc.sys.localStorage.setItem("bgmVolume", 1);
                    cc.sys.localStorage.setItem("sfxVolume", 1);
                    AudioMgr.Instance().sfxVolume = 1;
                    AudioMgr.Instance().bgmVolume = 1;
                }
                resolve(1);
            })
        })
    }

}
