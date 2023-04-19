import BaseUI from "../../framwork/BaseUI";
import MsgToast from "../../framwork/MsgToast";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
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
export default class CommonView extends BaseUI {

    private type: EADLAYER;
    start()
    {
        AdCenter.Instance().showGridAd();
        Utils.playBreath(this.GetGameObject('btn_ad'))
        this.addFreeAdEvent()
        this.handleFreeAd();
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }

    update(dt)
    {
        if(dt > 1) dt = 1;
        let {end_time,max} = this.getEMTime();
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

    private getEMTime(){
        let end_time = 0;
        let max = 0;
        if (this.type == EADLAYER.AUTO_COM) {
            end_time = ChickData.user.auto_com_time;
            max = MAX_AUTO_COM_TIME;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            end_time = ChickData.user.double_att_time;
            max = MAX_DOUBLE_ATT_TIME;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            end_time = ChickData.user.double_income_time;
            max = MAX_DOUBLE_INCOME_TIME;
        }
        else if(this.type == EADLAYER.DROP_PLANT)
        {
            end_time = ChickData.user.drop_plant_time;
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
            this.SetText("lbl_effect", "+" + MAX_AUTO_COM_TIME + "分钟");
            WxCenter.aldReport('AutoShow','show');
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            this.SetText("lbl_effect", "+" + MAX_DOUBLE_ATT_TIME*60 + "秒");
            this.SetText('lbl_d',`进入打鸡血状态  持续${MAX_DOUBLE_ATT_TIME*60}秒`)
            WxCenter.aldReport('RageShow','show');
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            this.SetText("lbl_effect", "+" + MAX_DOUBLE_INCOME_TIME + "分钟");
            WxCenter.aldReport('DoubleShow','show');
        }
        else if(this.type == EADLAYER.DROP_PLANT)
        {
            this.SetText("lbl_effect", "+" + MAX_DROP_PLANT_TIME + "分钟");
            WxCenter.aldReport('DropShow','show');
        }
        let {end_time,max} = this.getEMTime();
        let isRunning = end_time > Utils.getServerTime();
        // this.GetGameObject('btn_ad').active = !isRunning;
        // this.GetGameObject('btn_normal').active = !isRunning;
    }

    private addCoin(double:number = 1)
    {
        let isUse = false;
        if (this.type == EADLAYER.AUTO_COM) {
            WxCenter.aldReport('AutoClick','click');
            // if (ChickData.user.auto_com_time - Utils.getServerTime() > (MAX_AUTO_COM_TIME - AUTO_COM_TIME) * 60 * 1000) {
            //     MsgToast.show("最大累积时间" + MAX_AUTO_COM_TIME + "分钟");
            //     return;
            // }
            // if (ChickData.user.auto_com_time < Utils.getServerTime())
            ChickData.user.auto_com_time = Utils.getServerTime();
            ChickData.user.auto_com_time += AUTO_COM_TIME * 60 * 1000 * double;
            isUse = true;
        }
        else if (this.type == EADLAYER.DOUBLE_ATT) {
            WxCenter.aldReport('RageClick','click');
            // if (ChickData.user.double_att_time - Utils.getServerTime() > (MAX_DOUBLE_ATT_TIME - DOUBLE_ATT_TIME) * 60 * 1000) {
                // MsgToast.show("最大累积时间" + MAX_DOUBLE_ATT_TIME + "分钟");
                // return;
            // }
            // if (ChickData.user.double_att_time < Utils.getServerTime())
            ChickData.user.double_att_time = Utils.getServerTime();
            ChickData.user.double_att_time += DOUBLE_ATT_TIME * 60 * 1000 * double;
            isUse = true;
        }
        else if (this.type == EADLAYER.DOUBLE_INCOME) {
            WxCenter.aldReport('DoubleClick','click');
            // if (ChickData.user.double_income_time - Utils.getServerTime() > (MAX_DOUBLE_INCOME_TIME - DOUBLE_INCOME_TIME) * 60 * 1000) {
                // MsgToast.show("最大累积时间" + MAX_DOUBLE_INCOME_TIME + "分钟");
                // return;
            // }
            // if (ChickData.user.double_income_time < Utils.getServerTime())
            ChickData.user.double_income_time = Utils.getServerTime();
            ChickData.user.double_income_time += DOUBLE_INCOME_TIME * 60 * 1000 * double;
            isUse = true;
        }
        else if (this.type == EADLAYER.DROP_PLANT) {
            if(double == 2) {
                WxCenter.aldReport('DropClick','click');
            }
            // if (ChickData.user.drop_plant_time - Utils.getServerTime() > (MAX_DROP_PLANT_TIME - DROP_PLANT_TIME) * 60 * 1000) {
            //     MsgToast.show("最大累积时间" + MAX_DROP_PLANT_TIME + "分钟");
            //     return;
            // }
            // if (ChickData.user.drop_plant_time < Utils.getServerTime())
            ChickData.user.drop_plant_time = Utils.getServerTime();
            ChickData.user.drop_plant_time += DROP_PLANT_TIME * 60 * 1000 * double;
            isUse = true;
        }
        ChickData.save();
        if(isUse) {
            this.closeUI();
            MsgToast.show('使用成功');
        }
    }

    protected handleFreeAd(){
        let isfree = ChickData.isFreeAd;
        this.GetGameObject('icon_video').active = !isfree
        this.GetGameObject('btn_buyfree').active = !isfree
        if(isfree){
            let pos = this.GetGameObject('ad_label').getPosition()
            this.GetGameObject('ad_label').setPosition(new cc.Vec2(0,pos.y))
        }
    }

    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
                // this.addCoin(1);
                this.closeUI();
                break;
            case "btn_ad":
                AdCenter.Instance().play((b)=>{
                    if(b) this.addCoin(2);
                });
                break;
            case "btn_normal":
                this.addCoin(1);
                this.GetGameObject('btn_normal').active = false;
                break;
            case "btn_buyfree":
                Utils.createUI("prefab/MonthCardUI")
                break;
        }
    }
}



export { EADLAYER }
