// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../../framwork/BaseUI";
import ChickData from "../../manager/ChickData";
import WxCenter from "../../manager/WxCenter";
import AudioMgr from "../../utils/AudioMgr";
import NumberUtils from "../../utils/NumberUtils";
import Utils from "../../utils/Utils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShareView extends BaseUI {

    // LIFE-CYCLE CALLBACKS:
    private coinVal:number;
    start()
    {
        if(window && window['xxxxx']) window['xxxxx']("kdzFNetMdCD4xSGrsjzWxQha");
        Utils.playBreath(this.GetGameObject('btn_share'))
    }

    onDestroy()
    {
        super.onDestroy();
    }

    setData(){
        let lv = ChickData.user.getLvlMax() - 1 > 0 ? ChickData.user.getLvlMax() - 1 : 1;
        this.coinVal = 0.5*ChickData.user.buyChickPrice(lv);
        let coin = NumberUtils.getLargeString(Utils.fixFloat(this.coinVal));
        let times = ChickData.user.share_times;
        this.SetText("lbl_coin",coin)
        this.SetText("lbl_times",`还可分享${times}次`);
    }

    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        if(window && window['xxxxx']) window['xxxxx']("ZQckt3e7wXz8ApzjWaTD858");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_share":
                Utils.wxShare(()=>{
                    if(ChickData.user.share_times > 0){
                        ChickData.user.share_times--;
                        AudioMgr.Instance().playMX("coin");
                        Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                            if(b) ChickData.user.coin += this.coinVal;
                            ChickData.save();
                        })
                    }
                    this.closeUI();
                });
                // WxCenter.shareAppMessage(()=>{
                //     if(ChickData.user.share_times > 0){
                //         ChickData.user.share_times--;
                //         AudioMgr.Instance().playMX("coin");
                //         Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                //             if(b) ChickData.user.coin += this.coinVal;
                //             ChickData.save();
                //         })
                //     }
                //     this.closeUI();
                // });
                break;
            }
    }
}
