import BaseUI from "../../framwork/BaseUI";
import MsgHints from "../../framwork/MsgHints";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import BigNumber from "../../utils/BigNumber";
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
        this.GetText('lbl_coin').string = BigNumber.getLargeString(Utils.fixFloat(value))
    }

    start() {
        this.node.zIndex = 99999;
    }
    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_close":
                AudioMgr.Instance().playSFX("click");
                let coin = this._data 
                    AudioMgr.Instance().playSFX("coin");
                    Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                        if(b)
                        {
                            Data.user.coin += coin
                        }  
                    })
                this.closeUI()
                break;
            case "btn_normal":
                AudioMgr.Instance().playSFX("coin");
                Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                    if(b) Data.user.coin += this._data  
                })
                this.closeUI();
                break
            case "btn_ad":
                let func = (b)=>{
                    if (b) {
                        let coin = this._data * 2
                        AudioMgr.Instance().playSFX("coin");
                        Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                            if(b)
                            {
                                Data.user.coin += coin 
                            }  
                        })
                        this.closeUI()
                    }
                }
                AdCenter.Instance().play(func)
                break;
            case "btn_gem":
                {
                    if(Data.user.gem < 5){
                        MsgHints.show("钻石不足")
                        return
                    }
                    let coin = this._data * 3
                    AudioMgr.Instance().playSFX("coin");
                    Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                        if(b)
                        {
                            Data.user.coin += coin 
                            Data.user.gem -= 5
                        }  
                    })
                    this.closeUI()
                }
                break;
        }
    }
}
