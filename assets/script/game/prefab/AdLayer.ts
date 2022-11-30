import BaseUI from "../../framwork/BaseUI";
import MsgHints from "../../framwork/MsgHints";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import WxCenter from "../../manager/WxCenter";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";

const { ccclass, property } = cc._decorator;


enum EADLAYER {
    DOUBLE_ATT,
    DOUBLE_INCOME,
    AUTO_COM,
    DROP_PLANT
}

const AUTO_COM_TIME = 2;
const DOUBLE_INCOME_TIME = 2;
const DROP_PLANT_TIME = 10;
const DOUBLE_ATT_TIME = 0.5;

export const MAX_AUTO_COM_TIME = 4;
export const MAX_DOUBLE_INCOME_TIME = 4;
export const MAX_DROP_PLANT_TIME = 20;
export const MAX_DOUBLE_ATT_TIME = 1;

@ccclass
export default class AdLayer extends BaseUI {

    private type: EADLAYER;
    start()
    {
        AdCenter.Instance().showGridAd();
        Utils.playBreath(this.GetGameObject('btn_ad'))
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }

    update(dt)
    {
        if(dt > 1) dt = 1;
        let {end_time,max} = this.getEndAndMaxTime();
        if(end_time > Utils.getServerTime())
        {
            let nLeft = end_time - Utils.getServerTime();
            // this.SetProgressBar("New ProgressBar",(nLeft/1000/60)/max);
            this.SetText("lbl_time",Utils.getTimeStrByS(nLeft/1000));
        }
        else
        {
            // this.SetProgressBar("New ProgressBar",0);
            this.SetText("lbl_time","");
        }
    }

    private getEndAndMaxTime(){
        let end_time = 0;
        let max = 0;
        if (this.type == EADLAYER.AUTO_COM) {
            end_time = Data.user.auto_com_time;
            max = MAX_AUTO_COM_TIME;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            end_time = Data.user.double_att_time;
            max = MAX_DOUBLE_ATT_TIME;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            end_time = Data.user.double_income_time;
            max = MAX_DOUBLE_INCOME_TIME;
        }
        else if(this.type == EADLAYER.DROP_PLANT)
        {
            end_time = Data.user.drop_plant_time;
            max = MAX_DROP_PLANT_TIME;
        }
        return {end_time,max}
    }

    setType(e: EADLAYER) {
        this.type = e;
        this.GetGameObject("icon_fast").active = e == EADLAYER.DROP_PLANT;
        this.GetGameObject("icon_auto_merge").active = e == EADLAYER.AUTO_COM;
        this.GetGameObject("icon_income").active = e == EADLAYER.DOUBLE_INCOME;
        this.GetGameObject("icon_angre").active = e == EADLAYER.DOUBLE_ATT;

        if (this.type == EADLAYER.AUTO_COM) {
            this.SetText("lbl_effect", "+" + AUTO_COM_TIME + "分钟");
            WxCenter.aldReport('AutoShow','show');
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            this.SetText("lbl_effect", "+" + DOUBLE_ATT_TIME*60 + "秒");
            this.SetText('lbl_d',`进入狂暴状态  持续${DOUBLE_ATT_TIME*60}秒`)
            WxCenter.aldReport('RageShow','show');
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            this.SetText("lbl_effect", "+" + DOUBLE_INCOME_TIME + "分钟");
            WxCenter.aldReport('DoubleShow','show');
        }
        else if(this.type == EADLAYER.DROP_PLANT)
        {
            this.SetText("lbl_effect", "+" + DROP_PLANT_TIME + "分钟");
            WxCenter.aldReport('DropShow','show');
        }
        let {end_time,max} = this.getEndAndMaxTime();
        let isRunning = end_time > Utils.getServerTime();
        // this.GetGameObject('btn_ad').active = !isRunning;
        this.GetGameObject('btn_normal').active = !isRunning;
    }

    private addvalue(double:number = 1)
    {
        let isUse = false;
        if (this.type == EADLAYER.AUTO_COM) {
            WxCenter.aldReport('AutoClick','click');
            if (Data.user.auto_com_time - Utils.getServerTime() > (MAX_AUTO_COM_TIME - AUTO_COM_TIME) * 60 * 1000) {
                MsgHints.show("最大累积时间" + MAX_AUTO_COM_TIME + "分钟");
                return;
            }
            if (Data.user.auto_com_time < Utils.getServerTime())
                Data.user.auto_com_time = Utils.getServerTime();
            Data.user.auto_com_time += AUTO_COM_TIME * 60 * 1000 * double;
            isUse = true;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            WxCenter.aldReport('RageClick','click');
            if (Data.user.double_att_time - Utils.getServerTime() > (MAX_DOUBLE_ATT_TIME - DOUBLE_ATT_TIME) * 60 * 1000) {
                MsgHints.show("最大累积时间" + MAX_DOUBLE_ATT_TIME + "分钟");
                return;
            }
            if (Data.user.double_att_time < Utils.getServerTime())
                Data.user.double_att_time = Utils.getServerTime();
            Data.user.double_att_time += DOUBLE_ATT_TIME * 60 * 1000 * double;
            isUse = true;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            WxCenter.aldReport('DoubleClick','click');
            if (Data.user.double_income_time - Utils.getServerTime() > (MAX_DOUBLE_INCOME_TIME - DOUBLE_INCOME_TIME) * 60 * 1000) {
                MsgHints.show("最大累积时间" + MAX_DOUBLE_INCOME_TIME + "分钟");
                return;
            }
            if (Data.user.double_income_time < Utils.getServerTime())
                Data.user.double_income_time = Utils.getServerTime();
            Data.user.double_income_time += DOUBLE_INCOME_TIME * 60 * 1000 * double;
            isUse = true;
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            if(double == 2) {
                WxCenter.aldReport('DropClick','click');
            }
            if (Data.user.drop_plant_time - Utils.getServerTime() > (MAX_DROP_PLANT_TIME - DROP_PLANT_TIME) * 60 * 1000) {
                MsgHints.show("最大累积时间" + MAX_DROP_PLANT_TIME + "分钟");
                return;
            }
            if (Data.user.drop_plant_time < Utils.getServerTime())
                Data.user.drop_plant_time = Utils.getServerTime();
            Data.user.drop_plant_time += DROP_PLANT_TIME * 60 * 1000 * double;
            isUse = true;
        }
        Data.save();
        if(isUse) {
            this.closeUI();
            MsgHints.show('使用成功');
        }
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
        }
    }
}



export { EADLAYER }
