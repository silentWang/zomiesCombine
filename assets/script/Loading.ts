import BaseUI from "./framwork/BaseUI";
import Data from "./manager/Data";
import PoolMgr from "./manager/PoolMgr";
import AudioMgr from "./utils/AudioMgr";
import Utils from "./utils/Utils";

const wx = window["wx"] || window["tt"];
const { ccclass, property } = cc._decorator;

@ccclass
export default class Loading extends BaseUI {

    @property(cc.Node)
    img_shouquan: cc.Node = null;

    @property(cc.Node)
    loading_bar: cc.Node = null;

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;

        switch (btnName) {
            case "btn_rstart":
                {
                    cc.director.loadScene("loading")
                }
                break;
        }
    }

    async onLoad() {
        cc.debug.setDisplayStats(false);
        cc.game.setFrameRate(60);

        let savedatatime = cc.sys.localStorage.getItem("savedatatime");
        if (savedatatime) {
            savedatatime = Number(savedatatime);
        }

        super.onLoad();
        if(wx)
        {
            wx.setPreferredFramesPerSecond(60);
            wx.setKeepScreenOn({ keepScreenOn: true });
        }
        
        PoolMgr.Instance().loadPrefabs()

        this.startLoginAction();

        let descs = ["初次加载时间可能会较长，请耐心等待...."];
        let index = 0;
        this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(() => {
            this.SetText("desp", descs[index]);
            index++;
            if (index > descs.length - 1)
                index = 0;
        })).repeatForever())

        this.GetGameObject("btn_rstart").active = false;

    }

    startLoginAction() {
        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(async () => {
            Data.loadData()
            var p: number = 0;
            this.node.runAction(cc.sequence(cc.delayTime(0.01), cc.callFunc(async () => {
                p += 0.018;
                this.SetProgressBar("ProgressBar", p);
                if (p >= 1) {
                    this.node.stopAllActions();

                    await Utils.loadBundler("spine");
                    await Utils.loadBundler("sounds");
                    
                    AudioMgr.Instance().loadSounds();

                    cc.director.loadScene("hall");
                }
            })).repeatForever());
        })))
    }

    progress: number = 0;

}
