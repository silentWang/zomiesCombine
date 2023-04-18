// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../../framwork/BaseUI";
import AudioMgr from "../../utils/AudioMgr";
import Native, { VIP_TYPE } from "../../utils/Native";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MonthView extends BaseUI {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    
    private _selectType = 0
    start () {
    }

    private setSelect(type:number){
        let isAD = type == 0;
        let imgsel = this.GetGameObject('imgSelected');
        let pos = imgsel.position;
        imgsel.position = cc.v3(isAD ? -147 : 147,pos.y,pos.z);
        this._selectType = type;
    }

    // update (dt) {}

    onUIClicked(event: any, customEventData: any): void {
        super.onUIClicked(event,customEventData);
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btnA":
                this.setSelect(0);
                break;
            case "btnB":
                this.setSelect(1);
                break;
            case "btnBuy":
                // to do
                let key = this._selectType == 0 ? VIP_TYPE.VIP_FOREVER : VIP_TYPE.VIP_MONTH;
                Native.buyMonthCard(key);
                break;
            case "btnRecover":
                Native.buyMonthCard(VIP_TYPE.RECOVER_VIP);
                break;
            case "btnPrivacy":
                Native.openWebView('https://www.huadcx.com/privacy.html')
                break;
            case "btnXieyi":
                Native.openWebView('https://www.huadcx.com/privacy.html')
                break;
        }
    }

}
