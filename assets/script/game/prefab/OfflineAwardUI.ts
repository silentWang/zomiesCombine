import BaseUI from "../../framwork/BaseUI";
import MsgToast from "../../framwork/MsgToast";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
import AudioMgr from "../../utils/AudioMgr";
import NumberUtils from "../../utils/NumberUtils";
import Utils from "../../utils/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class OfflineAwardUI extends BaseUI {

    private _data: number = 0;
    public get data(): number {
        return this._data;
    }
    public set data(value: number) {
        this._data = value;
        if(window && window['xxxxx']) window['xxxxx']("hkmAP");
        this.GetText('lbl_coin').string = NumberUtils.getLargeString(Utils.fixFloat(value))
    }

    start() {
        this.node.zIndex = 99999;
        Utils.playBreath(this.GetGameObject('btn_ad'))
    }

    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_close":
                // AudioMgr.Instance().playMX("click");
                let coin = this._data 
                AudioMgr.Instance().playMX("coin");
                Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                    if(b)
                    {
                        ChickData.user.coin += coin
                        ChickData.save();
                    }
                })
                this.closeUI()
                break;
            case "btn_normal":
                if(window && window['xxxxx']) window['xxxxx']("YGPC");
                AudioMgr.Instance().playMX("coin");
                Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                    if(b) ChickData.user.coin += this._data  
                })
                ChickData.save();
                this.closeUI();
                break
            case "btn_ad":
                let func = (b)=>{
                    if (b) {
                        let coin = this._data * 2
                        AudioMgr.Instance().playMX("coin");
                        Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                            if(b)
                            {
                                ChickData.user.coin += coin 
                                ChickData.save();
                            }  
                        })
                        this.closeUI()
                    }
                }
                AdCenter.Instance().play(func,1)
                break;
        }
    }
}
