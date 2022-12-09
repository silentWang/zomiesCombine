import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";


const { ccclass, property } = cc._decorator;

const wx = window["wx"] || window["tt"] || window["qq"]
@ccclass
export default class SettingView extends BaseUI {

    btn_music: cc.Node = null;
    btn_music_close: cc.Node = null;

    btn_sound: cc.Node = null;
    btn_sound_close: cc.Node = null;

    async start() {
        AdCenter.Instance().showGridAd();

        // AudioMgr.Instance().playSFX("ui_open_popup_1");
        this.btn_music = this.GetGameObject("btn_music_on");
        this.btn_music_close = this.GetGameObject("btn_music_off");

        this.btn_sound = this.GetGameObject("btn_sound_on");
        this.btn_sound_close = this.GetGameObject("btn_sound_off");

        this.btn_music.active = AudioMgr.Instance().bgmVolume == 1;
        this.btn_music_close.active = AudioMgr.Instance().bgmVolume == 0;

        this.btn_sound.active = AudioMgr.Instance().sfxVolume == 1;
        this.btn_sound_close.active = AudioMgr.Instance().sfxVolume == 0;

       
    }

    private server_data = null;

    onDestroy() {
        
        AdCenter.Instance().hideGridAd();
        if (this.wxButton) this.wxButton.destroy();
        super.onDestroy();
    }

    public wxButton = null;
    createAuthorizeBtn(btnNode: cc.Node) { //创建微信反馈按钮
        let btnSize = cc.size(btnNode.width, btnNode.height);
        let frameSize = cc.view.getFrameSize();
        let winSize = cc.director.getWinSize();
        // console.log("winSize: ",winSize);
        // console.log("frameSize: ",frameSize);
        //适配不同机型来创建微信授权按钮
        let left = (winSize.width * 0.5 + btnNode.x - btnSize.width * 0.5) / winSize.width * frameSize.width;
        let top = (winSize.height * 0.5 - btnNode.y - btnSize.height * 0.5) / winSize.height * frameSize.height;
        let width = btnSize.width / winSize.width * frameSize.width;
        let height = btnSize.height / winSize.height * frameSize.height;
        // console.log("button pos: ",cc.v2(left,top));
        // console.log("button size: ",cc.size(width,height));
        // console.log(left,top,width,height);
        this.wxButton = wx.createFeedbackButton({
            type: 'text',
            text: '',
            style: {
                left: left,
                top: top,
                width: width,
                height: height,
                lineHeight: 20,
                backgroundColor: '',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        });
        this.wxButton.onTap((uinfo) => {
            this.closeUI();
        });
    }

    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btn_back":
                this.closeUI()
                break;
            case "btn_music_on":
            case "btn_music_off":
                this.btn_music.active = !this.btn_music.active;
                this.btn_music_close.active = !this.btn_music_close.active;
                AudioMgr.Instance().setMusicVolume(this.btn_music.active ? 1 : 0, true);
                // AudioMgr.Instance().setSFXVolume(this.btn_music.active ? 1 : 0, true);
                break;
            case "btn_sound_on":
            case "btn_sound_off":
                this.btn_sound.active = !this.btn_sound.active;
                this.btn_sound_close.active = !this.btn_sound_close.active;
                AudioMgr.Instance().setMXVolume(this.btn_sound.active ? 1 : 0, true);
                // AudioMgr.Instance().setSFXVolume(this.btn_music.active ? 1 : 0, true);
                break;
            case "btn_share":
                Utils.wxShare();
                break;
            case "btn_download":
                ChickData.user.setData(this.server_data['user'])
                this.closeUI();
                ChickData.save();
                cc.director.loadScene("hall")
                break;

        }
    }
}
