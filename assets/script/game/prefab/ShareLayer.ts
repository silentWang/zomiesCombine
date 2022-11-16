// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../../framwork/BaseUI";
import Data from "../../manager/Data";
import WxCenter from "../../manager/WxCenter";
import AudioMgr from "../../utils/AudioMgr";
import BigNumber from "../../utils/BigNumber";
import Utils from "../../utils/Utils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends BaseUI {

    // LIFE-CYCLE CALLBACKS:
    private coinVal:number;
    start()
    {
    }

    onDestroy()
    {
        super.onDestroy();
    }

    setData(value:number){
        this.coinVal = value;
        let coin = BigNumber.getLargeString(Utils.fixFloat(value));
        let times = Data.user.share_times;
        this.SetText("lbl_coin",coin)
        this.SetText("lbl_times",`还可分享${times}次`);
    }

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_share":
                WxCenter.shareAppMessage(()=>{
                    if(Data.user.share_times > 0){
                        Data.user.share_times--;
                        AudioMgr.Instance().playSFX("coin");
                        Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                            if(b) Data.user.coin += this.coinVal;
                            Data.save();
                        })
                    }
                    this.closeUI();
                });
                break;
            }
    }
}
