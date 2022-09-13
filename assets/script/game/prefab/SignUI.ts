import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SignUI extends BaseUI {
    static reddot() {
        if (Data.user.signinfo.sign_time != 0) {
            if (SignUI.checkIsTody(Data.user.signinfo.sign_time)) {
                if (Data.user.signinfo.sign_beisu == 1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        return true;
    }

    static checkShow() {
        //新用户
        if (Data.user.signinfo.sign_index == 0) {
            return;
        }

        //已经签到
        if (SignUI.checkIsTody(Data.user.signinfo.sign_time)) {
            return;
        }
        Utils.createUI("prefab/SignLayer");
    }

    //这里配置签到奖励
    getSignValue(index: number) {
        let lv = Data.user.GetMaxLv() - 3;
        if (lv < 1) lv = 1;
        let list = [
            //修改类型需要相应修改界面图标
            { type: 0, value: Data.user.BuyPrice(lv) * 4},
            { type: 1, value: 2 },
            { type: 0, value: Data.user.BuyPrice(lv) * 8 },
            { type: 0, value: Data.user.BuyPrice(lv) * 12 },
            { type: 1, value: 5 },
            { type: 1, value: 8 },
            { type: 1, value: 10 },
        ]
        return list[index];
    }

    static checkIsTody(time): boolean {
        var date = new Date(time);
        var dateNow = new Date(Utils.getServerTime());
        let bNewDay = false;

        if (date.getFullYear() == dateNow.getFullYear() &&
            date.getMonth() == dateNow.getMonth() &&
            date.getDate() == dateNow.getDate()
        ) {
            bNewDay = true;
        }
        return bNewDay;
    }

    start() {
        this.updateUI();
        AdCenter.Instance().showGridAd();
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }

    updateUI() {
        let item_days = this.GetGameObject("item_days");

        let bSignTody = false;
        if (Data.user.signinfo.sign_time != 0) {
            if (SignUI.checkIsTody(Data.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }

        let sign_index = Data.user.signinfo.sign_index % 7;

        if (sign_index == 0 && bSignTody)
            sign_index = 7;

        for (var i = 0; i < 7; ++i) {
            let node: cc.Node = item_days.children[i];
            node.getChildByName("sevenday_checked").active = i < sign_index;

            let tmp = this.getSignValue(i);

            if (tmp.type == 0) {
                node.getComponentInChildren(cc.Label).string = Utils.formatNumber(tmp.value) + "";
            }
            else {
                node.getComponentInChildren(cc.Label).string = tmp.value + "";
            }
        }


        this.GetGameObject("btn_3times").active = false;
        this.GetGameObject("btn_2times").active = false;
        this.GetGameObject("btn_sign").active = false;

        if (bSignTody) {
            if (Data.user.signinfo.sign_beisu == 1) {
                this.GetGameObject("btn_2times").active = true;
            }
            else if (Data.user.signinfo.sign_beisu == 2) {
                this.GetGameObject("btn_2times").active = true;
                // this.GetGameObject("btn_2times").children[0].active = true;
                this.GetButton("btn_2times").interactable = false;
            }
            else {
                this.GetGameObject("btn_3times").active = true;
                // this.GetGameObject("btn_3times").children[0].active = true;
                this.GetButton("btn_3times").interactable = false;
            }
        }
        else {
            this.GetGameObject("btn_sign").active = true;
            this.GetGameObject("btn_3times").active = true;
        }
        console.log(Data.user.signinfo)
    }

    private getTodySign() {
        let bSignTody = false;
        if (Data.user.signinfo.sign_time != 0) {
            if (SignUI.checkIsTody(Data.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }

        let index = Data.user.signinfo.sign_index;
        if (bSignTody)
            index--;
        return this.getSignValue(index % 7);
    }

    flayAnim(beishu: number) {
        let tmp = this.getTodySign();
        if (tmp.type == 0) {

            AudioMgr.Instance().playSFX("coin");
            Utils.flyAnim(0, this.node, "icon_coin", 5, 200, (b) => {
                if (b) {
                    Data.user.coin += tmp.value * beishu;
                }
            })
        }
        else {

            AudioMgr.Instance().playSFX("gem");
            Utils.flyAnim(1, this.node, "icon_gem", 5, 200, (b) => {
                if (b) {
                    Data.user.gem += tmp.value * beishu;
                }
            })
        }
    }

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_2times":
                AdCenter.Instance().play(0, (b) => {
                    if (b) {
                        Data.user.signinfo.sign_beisu = 2;
                        this.flayAnim(2);
                        if (!SignUI.checkIsTody(Data.user.signinfo.sign_time)) {
                            Data.user.signinfo.sign_index++;
                        }
                        Data.user.signinfo.sign_time = Utils.getServerTime();
                        this.updateUI();
                    }
                })
                break;
            case "btn_3times":
                AdCenter.Instance().play(0, (b) => {
                    if (b) {
                        Data.user.signinfo.sign_beisu = 3;
                        this.flayAnim(3);
                        if (!SignUI.checkIsTody(Data.user.signinfo.sign_time)) {
                            Data.user.signinfo.sign_index++;
                        }
                        Data.user.signinfo.sign_time = Utils.getServerTime();
                        this.updateUI();
                    }
                })
                break;
            case "btn_sign":
                Data.user.signinfo.sign_beisu = 1;
                this.flayAnim(1);
                if (!SignUI.checkIsTody(Data.user.signinfo.sign_time)) {
                    Data.user.signinfo.sign_index++;
                }
                Data.user.signinfo.sign_time = Utils.getServerTime();
                this.updateUI();
                break;
        }
    }
}

