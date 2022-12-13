import BaseUI from "../../framwork/BaseUI";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";


const {ccclass, property} = cc._decorator;

@ccclass
export default class DropItem extends BaseUI {
    start() {
        this.node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(() => {
            this.Comming();
        })))
    }
    Comming() {
        this.node.runAction(cc.sequence(cc.callFunc(() => {
            this.node.position = cc.v3(-cc.winSize.width / 2 - 200, cc.winSize.height / 4 - 100)
        }), cc.moveTo(20, cc.winSize.width / 2 + 200, cc.winSize.height / 4 - 100)).repeatForever())
    }

    onUIClicked(event, customEventData) {
        if(window && window['xxxxx']) window['xxxxx']("FJxSBFyRFFAbj6zaXjJaQsc");
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "FairyItem":
                this.node.stopAllActions();
                this.node.position = cc.v3(-cc.winSize.width / 2 - 200, cc.winSize.height / 4 - 100);
                this.node.runAction(cc.sequence(cc.delayTime(40), cc.callFunc(() => {
                    this.Comming();
                })))
                Utils.createUI("prefab/FairyBonusUI")
                break;
        }
    }

}
