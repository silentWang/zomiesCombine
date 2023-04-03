// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../../framwork/BaseUI";
import AudioMgr from "../../utils/AudioMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MonthView extends BaseUI {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.SetText('txtPrice','12');
    }

    // update (dt) {}

    onUIClicked(event: any, customEventData: any): void {
        super.onUIClicked(event,customEventData);
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btnBuy":
                // to do
                cc.log('cccccccc')
                break;
            case "btnRecover":
                break;
            case "btnPrivacy":
                break;
            case "btnXieyi":
                break;
        }
    }

}
