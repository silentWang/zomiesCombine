import GameEvent from "../event/GameEvent";
import ChickData from "../manager/ChickData";
import Utils from '../utils/Utils';
import GameConst from './GameConst';
import { Config_chick, Config_shopsort } from './Config';
import AudioMgr from '../utils/AudioMgr';
let savepars = [];
function save(target: any, propertyKey: string) {
    savepars.push(propertyKey);
}

export type PlantInfo =
    {
        open: number;
        lv: number;
        index: number;
    }

    export type SignInfo = {
        sign_index: number,//当前签到索引
        sign_time: number,//上次签到时间
        sign_beisu: number,//领取倍数
    }
    
//用户数据模型
const { ccclass, property } = cc._decorator;
@ccclass
export default class UserModel {

    @save public last_date:number = 0;
    @save public signinfo: SignInfo = { sign_index: 0, sign_time: 0, sign_beisu: 0 };
    @save public nickName: string = "";
    @save public avatarUrl: string = "";
    @save public openid: string = "";
    @save public nickname: string = "";
    @save public headimg: string = "";

    @save public auto_com_time:number = 0;
    @save public double_att_time:number = 0;
    @save public double_income_time:number = 0;
    @save public drop_plant_time:number = 0;

    @save public today_getchick_times = 0;
    @save public today_getchick_total = 5;
    
    @save public today_getcoin_times = 0;
    @save public today_getcoin_total = 5;

    @save public share_times:number = 10;

    @save public slots = [1,1,1,0,0,0,0,0,0,0,0,0];
    @save public lv = 1;
    @save public wave = 1;

    T() {
	// "20": [20, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
        let lv = this.getLvlMax();
        var t = Config_shopsort[lv+""]
        for (var n = 1; n <= 8; ++n)
             if ("AD" == t[n]) 
                return lv - n;

        return lv - 4;
    }

    public getOfflineReward(t)//分钟
    {
        if(window && window['xxxxx']) window['xxxxx']("DWaZHYw2S8W7KyKnZR5Z");
        var n = null;
        var o = [ 50, 30, 20, 15, 10, 5, 3, 2 ]
        var a = Math.max(1, this.T());
        var r = this.getLvlMax()

        for (var s = Math.max(1, a - 10); s <= a; ++s) {
            var c = this.buyChickPrice(s);
            if(!n || c > n)
                n = c
        }
        var l = n/3e3;
        if(l<1)
        {
            l = 1;
        }
        var u = Math.floor(t / 60), d = t % 60 / 60;
        var p = 0;
        for (s = 0; s <= u; ++s) {
            var h = o[s] || 1, f = void 0;
            f = s == u ? l*(60 * h)*(100 * d)/(100) : l*(60 * h), 
            p = p+f;
            if(window && window['xxxxx']) window['xxxxx']("fee");
        }
        var m = 0;
        for(var plant of this.ComPlants)
        {
            let e = plant.lv;
            if(plant.lv>0)
            {
                var temp = p*(1e4)/(1e4 * Math.pow(2.1, Math.max(0, r - e)));
                m = m + temp;
            }
        }
        return m
    }

    @save DropGiftPts = [];//购买花盆
    @save AdBuyNotDrop = [];//广告购买成功，因为没有空位未成功添加

    @save
    private _coin: number = 1000;
    public get coin(): number {
        return Math.floor(this._coin * 100) / 100;
    }
    public set coin(value: number) {
        if(window && window['xxxxx']) window['xxxxx']("sMjwR7cSDzEihyCMGMQnKJEBxWCapx");
        this._coin = value;
    }
    @save
    private _gem: number = 200;
    public get gem(): number {
        return this._gem;
    }
    public set gem(value: number) {
        this._gem = value;
    }
    @save
    private _serverTime: number = 0;
    public get serverTime(): number {
        return this._serverTime;
    }
    public set serverTime(value: number) {
        this._serverTime = value;
    }

    @save public guideIndex = 0;
    @save public plantBuyTimes = {};
    @save public todayComTimes = 0;
    @save public ComPlants: PlantInfo[] = [{ open: 1, index: 0, lv: 1 }];

    public getChickInfo(index: number): PlantInfo {
        if(window && window['xxxxx']) window['xxxxx']("acBD");
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == index) {
                return this.ComPlants[i];
            }
        }
        return null;
    }

    public getLvlMax(){
        let max = 0;
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].lv > max) {
                max = this.ComPlants[i].lv 
            }
        }
        return max;
    }

    //购买花费
    public buyChickPrice(lv: number): number {
        var t:number = Number(Config_chick[lv-1][5]);
        var n = this.plantBuyTimes[lv] || 0;
        return 1 == lv ? t * (1e4 * Math.pow(1.07, n)) / (1e4) : t * (1e4 * Math.pow(1.175, n)) / (1e4);
    }

    public moveEff(i0: number, i1: number) {
        if(window && window['xxxxx']) window['xxxxx']("nEjzhWxaWNcn44n");
        var it0: PlantInfo = this.getChickInfo(i0);
        var it1: PlantInfo = this.getChickInfo(i1);
        if (it0 && it1) {
            it0.index = i1;
            it1.index = i0;
        }
        else {
            if (it0) {
                it0.index = i1;
            }
            if (it1) {
                it1.index = i0;
            }
        }
    }

    //合成
    public composeChicks(i0: number, i1: number) {
        if(window && window['xxxxx']) window['xxxxx']("P6yxB");
        let tmp1 = this.ComPlants.find((wj) => {
            return wj.index == i0;
        })
        if (!tmp1) return false;
        let tmp2 = this.ComPlants.find((wj) => {
            return wj.index == i1;
        })

        if (!tmp2) return false;
        if (tmp1.lv != tmp2.lv) {
            if(window && window['xxxxx']) window['xxxxx']("ZkcBEYcQQaWfrX");
            console.error("err")
            return false
        }

        let tmplv = this.getLvlMax();
        var tmpPre: PlantInfo = this.getChickInfo(i0);
        var lv = tmpPre.lv;
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == i0) {
                this.ComPlants.splice(i, 1);
                // cc.log("删除", i0);
                break;
            }
        }

        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == i1) {
                this.ComPlants.splice(i, 1);
                // cc.log("删除", i1);
                break;
            }
        }

        // cc.log("创建", i0);
        if(window && window['xxxxx']) window['xxxxx']("35wrxJNDira3yfdsK2CsM7r3zncF");
        this.ComPlants.push({ open: tmpPre.open, index: i0, lv: lv + 1 });
        this.todayComTimes++;

        let tmplv2 = this.getLvlMax();
        if(tmplv2 > tmplv && tmplv2 < 60)
        {
            Utils.createUI("prefab/NewPlantUI")
            GameEvent.Instance().dispatch(GameConst.NEW_CHICK,tmplv2);
        }
        AudioMgr.Instance().playMX("merge_success")
        return true
    }

    //购买
    public buyChick(index: number, lv: number) {
        if(window && window['xxxxx']) window['xxxxx']("3J");
        if(!this.plantBuyTimes[lv])this.plantBuyTimes[lv]=0;
        this.plantBuyTimes[lv]++;
        if(this.ComPlants.find((p)=>{
            p.index == index
        }))
        {
            console.error("索引错误")
            return;
        }
        var tmp = { open: 1, index: index, lv: lv };
        this.ComPlants.push(tmp);
        ChickData.save();
        return tmp;
    }

    //摧毁
    public updateSellChickCoin(index: number) {
        for (var i = 0; i < this.ComPlants.length; ++i) {
            if (this.ComPlants[i].index == index) {
                var tmp = this.buyChickPrice(this.ComPlants[i].lv)
                if(window && window['xxxxx']) window['xxxxx']("5hA83Fa");
                ChickData.user.coin += Math.floor(tmp);
                // this.changeGameCoin(Math.floor(tmp))
                cc.log("卖了换钱：" + tmp)
                this.ComPlants.splice(i, 1);
                break;
            }
        }
    }
  
    public getAllData(): object {
        var data = {}
        if(window && window['xxxxx']) window['xxxxx']("Am6rxXkBJZ5RZtn6ka83bBfe8X");
        this.serverTime = Utils.getServerTime();
        for (var i = 0; i < savepars.length; ++i) {
            data[savepars[i]] = this[savepars[i]];
        }
        return data;
    }
    public setData(data: any) {
        //初始化下数据       
        if (!data) {
            return;
        }
        for (var i = 0; i < savepars.length; ++i) {
            const element = data[savepars[i]];
            if (element != null || element != undefined) {
                if (Object.prototype.toString.call(element) == "[object Object]") {
                    for (const key in element) {
                        this[savepars[i]][key] = element[key];
                    }
                }
                else
                    this[savepars[i]] = element;
            }
        }
        if(window && window['xxxxx']) window['xxxxx']("nEjzhWxaWNcn44ntewsd");
    }
}