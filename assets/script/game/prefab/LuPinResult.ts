import BaseUI from "../../framwork/BaseUI";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class LuPinResult extends BaseUI {

    start()
    {
        this.GetButton("btn_share").interactable = false;
        this.node.runAction(cc.sequence(cc.delayTime(0.5),cc.callFunc(()=>{
            this.GetButton("btn_share").interactable = true;
        })))
    }
    res: any = null;
    setData(res) {
        this.res = res;
    }

    onBtnClicked(event: cc.Event, customEventData) {
        super.onBtnClicked(event, customEventData);
        AudioMgr.Instance().playSFX("click");
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_share":
                window["tt"].shareAppMessage({
                    channel: 'video',
                    title: '',
                    imageUrl: '',
                    query: '',
                    extra: {
                        videoPath: this.res.videoPath// 可用录屏得到的视频地址
                    },
                    success() {
                        console.log('分享视频成功');
                        AudioMgr.Instance().playSFX("gem");
                        Utils.flyAnim(1, cc.find("Canvas"),"icon_gem",Utils.getRandomInt(2,3),85,(b)=>{
                            if(b)
                                Data.user.gem += 2;
                        })
                        
                    },
                    fail(e) {
                        console.log('分享视频失败');
                    }
                })
                
                this.closeUI();
                break;
            case "btn_save":
                window["tt"].saveVideoToPhotosAlbum({
                    filePath: this.res.videoPath,
                    success(res) {
                        window["tt"].showToast({
                            title: '保存成功'
                        })
                        AudioMgr.Instance().playSFX("gem");
                        Utils.flyAnim(1, cc.find("Canvas"),"icon_gem",Utils.getRandomInt(2,3),85,(b)=>{
                            if(b)
                                Data.user.gem += 2;
                        })
                    },
                    fail(res) {
                        window["tt"].showToast({
                            title: '保存失败'
                        })
                    }
                });
                this.closeUI();
                break;
            case "btn_close":
                this.closeUI();
                break;
        }
    }


}
