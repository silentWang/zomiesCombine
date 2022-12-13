import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import ChickData from "../../manager/ChickData";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import { Config_chick } from "../Config";


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewChickUI extends BaseUI {

    private coin = 0;
    async start () {
        let lv = ChickData.user.getLvlMax()
        let coin = ChickData.user.buyChickPrice(Math.max(1,lv-3));
        this.SetText('lbl_name',Config_chick[lv - 1][7] + '');
        this.SetText("lbl_lv","等级 "+lv);
        AudioMgr.Instance().playMX("unlock_plant")
        if(window && window['xxxxx']) window['xxxxx']("6bMHQBCbYCJGQ7BywC35NNZC7wAn");
        this.coin = coin;
        this.SetText("lbl_coin",Utils.formatNumber(coin));
        let skpath = `spine:flower${lv}_ske`;
        let atlaspath = `spine:flower${lv}_tex`;
        let armature = this.GetDragonAmature("chick");
        armature.dragonAsset = await Utils.loadRes(skpath,dragonBones.DragonBonesAsset) as dragonBones.DragonBonesAsset;
        armature.dragonAtlasAsset = await Utils.loadRes(atlaspath,dragonBones.DragonBonesAtlasAsset) as dragonBones.DragonBonesAtlasAsset;
        armature.armatureName = "Armature";
        if(window && window['xxxxx']) window['xxxxx']("8DhnaiYYTn7j5YTf");
        armature.playAnimation('idleL',0);
        AdCenter.Instance().showGridAd();
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }

    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playMX("click");
        switch (btnName) {
            case "btn_get":
                {
                    let coin = this.coin
                    AudioMgr.Instance().playMX("coin");
                    Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                        if(b)
                        {
                            ChickData.user.coin += coin;
                        }  
                    })
                    this.closeUI();
                    if(window && window['xxxxx']) window['xxxxx']("DrCwzHYNxBCX7SdzaaZh5255");
                }
                break;
        }
    }
}
