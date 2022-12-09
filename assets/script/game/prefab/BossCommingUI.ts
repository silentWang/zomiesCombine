import BaseUI from "../../framwork/BaseUI";
import AudioMgr from "../../utils/AudioMgr";


const {ccclass, property} = cc._decorator;

@ccclass
export default class BossCommingUI extends BaseUI {
    start () {
        AudioMgr.Instance().playMX("Arlam");
        this.node.runAction(cc.sequence(cc.delayTime(3),cc.callFunc(()=>{
            this.closeUI();
        })))
    }

}
