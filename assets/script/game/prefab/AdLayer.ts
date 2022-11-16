import BaseUI from "../../framwork/BaseUI";
import MsgHints from "../../framwork/MsgHints";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";

const { ccclass, property } = cc._decorator;


enum EADLAYER {
    DOUBLE_ATT,
    DOUBLE_INCOME,
    AUTO_COM,
    DROP_PLANT
}

const add_time_auto_com = 2;
const add_time_double_income = 10;
const add_time_drop_plant = 10;
const add_time_double_att = 1;

const auto_com_gem = 4;
const double_income_gem = 4;
const double_att_gem = 4;
const double_drop_plant_gem = 4;

export const max_auto_com = 10;
export const max_auto_double_income = 60;
export const max_auto_double_att = 6;
export const max_drop_plant = 60;

@ccclass
export default class AdLayer extends BaseUI {


    start()
    {
        AdCenter.Instance().showGridAd();
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }

    update(dt)
    {
        if(dt>1)dt=1;
        let {end_time,max} = this.getEndAndMaxTime();
        if(end_time>Utils.getServerTime())
        {
            let nLeft = end_time - Utils.getServerTime();
            this.SetProgressBar("New ProgressBar",(nLeft/1000/60)/max);
            this.SetText("lbl_time",Utils.getTimeStrByS(nLeft/1000));
        }
        else
        {
            this.SetProgressBar("New ProgressBar",0);
            this.SetText("lbl_time","");
        }
    }

    private getEndAndMaxTime(){
        let end_time = 0;
        let max = 0;
        if (this.type == EADLAYER.AUTO_COM) {
            end_time = Data.user.auto_com_time;
            max = max_auto_com;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            end_time = Data.user.double_att_time;
            max = max_auto_double_att;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            end_time = Data.user.double_income_time;
            max = max_auto_double_income;
        }
        else if(this.type == EADLAYER.DROP_PLANT)
        {
            end_time = Data.user.drop_plant_time;
            max = max_drop_plant;
        }
        return {end_time,max}
    }

    private type: EADLAYER;
    setType(e: EADLAYER) {
        this.type = e;
        this.GetGameObject("icon_fast").active = e == EADLAYER.DROP_PLANT;
        this.GetGameObject("icon_auto_merge").active = e == EADLAYER.AUTO_COM;
        this.GetGameObject("icon_income").active = e == EADLAYER.DOUBLE_INCOME;
        this.GetGameObject("icon_angre").active = e == EADLAYER.DOUBLE_ATT;

        // let btntype = AD_SHARE.攻击x2
        // if (e == EADLAYER.AUTO_COM)
        //     btntype = AD_SHARE.自动合成
        // else if (e == EADLAYER.DOUBLE_INCOME)
        //     btntype = AD_SHARE.收益x2
        // this.getComponentInChildren(AdOrShare).changeType(btntype);

        if (this.type == EADLAYER.AUTO_COM) {
            this.SetText("lbl_effect", "+" + add_time_auto_com + "分钟");
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {

            this.SetText("lbl_effect", "+" + add_time_double_att + "分钟");
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            // this.SetText("lbl_effect", "增加" + add_time_double_income + "分钟双倍收益时间");
            this.SetText("lbl_effect", "+" + add_time_double_income + "分钟");
        }
        else if(this.type == EADLAYER.DROP_PLANT)
        {
            this.SetText("lbl_effect", "+" + add_time_drop_plant + "分钟");
        }

        let {end_time,max} = this.getEndAndMaxTime();
        this.GetGameObject('btn_normal').active = end_time <= Utils.getServerTime()

        // var b: boolean = true;
        // if (this.type == EADLAYER.AUTO_COM && Data.user.auto_com_time == 0)
        //     b = false;
        // if (this.type == EADLAYER.DOUBLE_ATT && Data.user.double_att_time == 0)
        //     b = false;
        // if (this.type == EADLAYER.DOUBLE_INCOME && Data.user.double_income_time == 0)
        //     b = false;
        // this.GetGameObject("btn_play").active = b;
    }

    private addvalue(gem:number = 1)
    {
        // if(gem>0)
        // {
        //     if(gem > Data.user.gem)
        //     {
        //         MsgHints.show("钻石不足");
        //         return;
        //     }
        //     else  Data.user.gem -= gem;
        // }
        if (this.type == EADLAYER.AUTO_COM) {
            if (Data.user.auto_com_time - Utils.getServerTime() > (max_auto_com - add_time_auto_com) * 60 * 1000) {
                MsgHints.show("最大累积时间" + max_auto_com + "分钟");
                return;
            }
            if (Data.user.auto_com_time < Utils.getServerTime())
                Data.user.auto_com_time = Utils.getServerTime();
            Data.user.auto_com_time += add_time_auto_com * 60 * 1000 * gem;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            if (Data.user.double_att_time - Utils.getServerTime() > (max_auto_double_att - add_time_double_att) * 60 * 1000) {
                MsgHints.show("最大累积时间" + max_auto_double_att + "分钟");
                return;
            }
            if (Data.user.double_att_time < Utils.getServerTime())
                Data.user.double_att_time = Utils.getServerTime();
            Data.user.double_att_time += add_time_double_att * 60 * 1000 * gem;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            if (Data.user.double_income_time - Utils.getServerTime() > (max_auto_double_income - add_time_double_income) * 60 * 1000) {
                MsgHints.show("最大累积时间" + max_auto_double_income + "分钟");
                return;
            }
            if (Data.user.double_income_time < Utils.getServerTime())
                Data.user.double_income_time = Utils.getServerTime();
            Data.user.double_income_time += add_time_double_income * 60 * 1000 * gem;
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            if (Data.user.drop_plant_time - Utils.getServerTime() > (max_drop_plant - add_time_drop_plant) * 60 * 1000) {
                MsgHints.show("最大累积时间" + max_drop_plant + "分钟");
                return;
            }
            if (Data.user.drop_plant_time < Utils.getServerTime())
                Data.user.drop_plant_time = Utils.getServerTime();
            Data.user.drop_plant_time += add_time_drop_plant * 60 * 1000 * gem;
        }
        Data.save();
    }

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_ad":
                AdCenter.Instance().play((b)=>{
                    if(b) this.addvalue(2);
                });
                break;
            case "btn_normal":
                this.addvalue(1);
                this.GetGameObject('btn_normal').active = false;
                break;
            // case "btn_gem":
            //     let gem = 0;
            //     if (this.type == EADLAYER.AUTO_COM) {
            //         gem = auto_com_gem
            //     }
            //     else if (this.type == EADLAYER.DOUBLE_ATT) {
            //         gem = double_att_gem
            //     }
            //     else if (this.type == EADLAYER.DOUBLE_INCOME) {
            //         gem = double_income_gem                   
            //     }
            //     else if (this.type == EADLAYER.DROP_PLANT) {
            //         gem = double_drop_plant_gem                 
            //     }
            //     this.addvalue(gem);
            //     break;
            }
    }
}



export { EADLAYER }
