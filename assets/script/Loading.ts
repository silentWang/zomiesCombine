import BaseUI from "./framwork/BaseUI";
import AdCenter from "./manager/AdCenter";
import ChickData from "./manager/ChickData";
import PoolMgr from "./manager/PoolMgr";
import WxCenter from "./manager/WxCenter";
import AudioMgr from "./utils/AudioMgr";
import { Native } from "./utils/Native";
import Utils from "./utils/Utils";

const wx = window["wx"] || window["tt"];
const { ccclass, property } = cc._decorator;

@ccclass
export default class Loading extends BaseUI {

    @property(cc.Node)
    img_shouquan: cc.Node = null;

    @property(cc.Node)
    loading_bar: cc.Node = null;

    onUIClicked(event, customEventData) {
        var btnName = event.target.name;

        switch (btnName) {
            case "btn_rstart":
                {
                    cc.director.loadScene("loading")
                }
                break;
        }
    }

    start(){
        WxCenter.init();
        WxCenter.aldReport('LoadingShow','show');
        AdCenter.Instance().showInterstitialAd();
    }

    async onLoad() {
        cc.debug.setDisplayStats(false);
        cc.game.setFrameRate(60);

        super.onLoad();
        if(wx) {
            wx.setPreferredFramesPerSecond(60);
            wx.setKeepScreenOn({ keepScreenOn: true });
        }
        if(window && window['xxxxx']) window['xxxxx']("gdasgasewekb");
        PoolMgr.Instance().loadPrefabs()
        this.startLGAction();
        let descs = ["初次加载时间可能会较长，请耐心等待...."];
        let index = 0;
        this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(() => {
            this.SetText("desp", descs[index]);
            index++;
            if (index > descs.length - 1)
                index = 0;
        })).repeatForever())
        
        Native.getAppVersion();

        this.GetGameObject("btn_rstart").active = false;
    }

    startLGAction() {
        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(async () => {
            ChickData.loadData()
            var p: number = 0;
            this.node.runAction(cc.sequence(cc.delayTime(0.01), cc.callFunc(async () => {
                p += 0.018;
                this.SetProgressBar("ProgressBar", p);
                if (p >= 1) {
                    this.node.stopAllActions();
                    await Utils.loadBundler("spine");
                    Utils.loadBundler("sounds").then(()=>{
                        AudioMgr.Instance().loadSounds();
                    });
                    cc.director.loadScene("hall");
                    p = 1;
                    if(window && window['xxxxx']) window['xxxxx']("g354165ghads16gas");
                }
                this.GetGameObject('plane').x = p*600 - 320;
                this.SetText('lbl_progress',(~~(p*100)) + '%');
            })).repeatForever());
        })))
        if(window && window['xxxxx']) window['xxxxx']("gdsagdsewwcxs");
    }

    progress: number = 0;

}
