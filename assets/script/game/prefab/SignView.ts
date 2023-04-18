import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SignView extends BaseUI {
    static redPoint() {
        if (ChickData.user.signinfo.sign_time != 0) {
            if (SignView.checkIsToday(ChickData.user.signinfo.sign_time)) {
                if (ChickData.user.signinfo.sign_beisu == 1) {
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

    static checkIsShow() {
        //新用户
        if (ChickData.user.signinfo.sign_index == 0) {
            return;
        }

        //已经签到
        if (SignView.checkIsToday(ChickData.user.signinfo.sign_time)) {
            return;
        }
        Utils.createUI("prefab/SignLayer");
    }

    //这里配置签到奖励
    getSignInfo(index: number) {
        let lv = ChickData.user.getLvlMax() - 3;
        if (lv < 1) lv = 1;
        let list = [
            //修改类型需要相应修改界面图标
            { type: 0, value: ChickData.user.buyChickPrice(lv) * 4},
            { type: 1, value: 2 },
            { type: 0, value: ChickData.user.buyChickPrice(lv) * 8 },
            { type: 0, value: ChickData.user.buyChickPrice(lv) * 12 },
            { type: 1, value: 5 },
            { type: 1, value: 8 },
            { type: 1, value: 10 },
        ]
        return list[index];
    }

    static checkIsToday(time): boolean {
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
        this.addFreeAdEvent()
        this.handleFreeAd();
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }

    updateUI() {
        let item_days = this.GetGameObject("item_days");

        let bSignTody = false;
        if (ChickData.user.signinfo.sign_time != 0) {
            if (SignView.checkIsToday(ChickData.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }

        let sign_index = ChickData.user.signinfo.sign_index % 7;

        if (sign_index == 0 && bSignTody)
            sign_index = 7;

        for (var i = 0; i < 7; ++i) {
            let node: cc.Node = item_days.children[i];
            node.getChildByName("sevenday_checked").active = i < sign_index;

            let tmp = this.getSignInfo(i);

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
            if (ChickData.user.signinfo.sign_beisu == 1) {
                this.GetGameObject("btn_2times").active = true;
            }
            else if (ChickData.user.signinfo.sign_beisu == 2) {
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
    }

    private getTodaySign() {
        let bSignTody = false;
        if (ChickData.user.signinfo.sign_time != 0) {
            if (SignView.checkIsToday(ChickData.user.signinfo.sign_time)) {
                bSignTody = true;
            }
        }

        let index = ChickData.user.signinfo.sign_index;
        if (bSignTody)
            index--;
        return this.getSignInfo(index % 7);
    }

    flayAnim(beishu: number) {
        let tmp = this.getTodaySign();
        if (tmp.type == 0) {
            AudioMgr.Instance().playMX("coin");
            Utils.flyAnim(0, this.node, "icon_coin", 5, 200, (b) => {
                if (b) {
                    ChickData.user.coin += tmp.value * beishu;
                }
            })
        }
        else {
            AudioMgr.Instance().playMX("gem");
            Utils.flyAnim(1, this.node, "icon_gem", 5, 200, (b) => {
                if (b) {
                    ChickData.user.gem += tmp.value * beishu;
                }
            })
        }
    }

    protected handleFreeAd(){
        let isfree = ChickData.isFreeAd;
        this.GetGameObject('icon_video1').active = !isfree
        let pos1 = this.GetGameObject('ad_label1').getPosition()
        this.GetGameObject('ad_label1').setPosition(new cc.Vec2(0,pos1.y))
        this.GetGameObject('icon_video2').active = !isfree
        let pos2 = this.GetGameObject('ad_label2').getPosition()
        this.GetGameObject('ad_label2').setPosition(new cc.Vec2(0,pos2.y))
    }

    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_2times":
                AdCenter.Instance().play((b) => {
                    if (b) {
                        ChickData.user.signinfo.sign_beisu = 2;
                        this.flayAnim(2);
                        if (!SignView.checkIsToday(ChickData.user.signinfo.sign_time)) {
                            ChickData.user.signinfo.sign_index++;
                        }
                        ChickData.user.signinfo.sign_time = Utils.getServerTime();
                        this.updateUI();
                    }
                })
                break;
            case "btn_3times":
                AdCenter.Instance().play((b) => {
                    if (b) {
                        ChickData.user.signinfo.sign_beisu = 3;
                        this.flayAnim(3);
                        if (!SignView.checkIsToday(ChickData.user.signinfo.sign_time)) {
                            ChickData.user.signinfo.sign_index++;
                        }
                        ChickData.user.signinfo.sign_time = Utils.getServerTime();
                        this.updateUI();
                    }
                })
                break;
            case "btn_sign":
                ChickData.user.signinfo.sign_beisu = 1;
                this.flayAnim(1);
                if (!SignView.checkIsToday(ChickData.user.signinfo.sign_time)) {
                    ChickData.user.signinfo.sign_index++;
                }
                ChickData.user.signinfo.sign_time = Utils.getServerTime();
                this.updateUI();
                break;
        }
    }
}

