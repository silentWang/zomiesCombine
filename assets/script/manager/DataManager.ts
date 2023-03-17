import ChickData from './ChickData';


export type BOInfo =
    {
        id: number,
        num: number,  //击碎数量
        choose: number,//选择等级
    }

let savepars = [];
function save(target: any, propertyKey: string) {
    savepars.push(propertyKey);
}

export type SignInfo = {
    sign_index: number,//当前签到索引
    sign_time: number,//上次签到时间
    sign_beisu: number,//领取倍数
}
if(window && window['xxxxx']) window['xxxxx']("Cm6jy56Gm2btfAbRXTJKy24");
export type PlantInfo =
    {
        open: number;
        lv: number;
        index: number;
    }

export default class DataManager {

    private static instance = null;
    public static Instance(): DataManager {
        if(window && window['xxxxx']) window['xxxxx']("c54cn");
        if (DataManager.instance == null) {
            DataManager.instance = new DataManager();
        }
        return DataManager.instance;
    }

    @save public signdays: number = 0;//签到次数
    @save public signtime: number = 0;//最近一次签到时间
    @save public share_count: number = 0;
    public share_count_total: number = 0;
    public watch_ad_count: number = 0;
    public watch_ad_count_total: number = 0;


    @save public savedatatime: number = 0;
    @save public signinfo: SignInfo = { sign_index: 0, sign_time: 0, sign_beisu: 0 };

    private DkaH_etrecc_fun(){ console.log("54155e15s1d5f15swdf1s"); }
    public getAllSData(): object {
        var data = {}
        if(window && window['xxxxx']) window['xxxxx']("KR6kWA6R7XpzYQeaBsRp4f4wDn");
        for (var i = 0; i < savepars.length; ++i) {
            data[savepars[i]] = this[savepars[i]];
        }
        return data;
    }
}

