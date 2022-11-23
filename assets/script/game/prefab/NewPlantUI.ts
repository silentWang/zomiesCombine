import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import { DB_plant } from "../DB";


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewPlantUI extends BaseUI {

    private coin = 0;
    async start () {
        let lv = Data.user.GetMaxLv()
        let coin = Data.user.BuyPrice(Math.max(1,lv-3));
        this.SetText('lbl_name',DB_plant[lv - 1][7] + '');
        this.SetText("lbl_lv","等级 "+lv);
        AudioMgr.Instance().playSFX("unlock_plant")
        this.coin = coin;
        this.SetText("lbl_coin",Utils.formatNumber(coin));
        let skpath = `spine:flower${lv}_ske`;
        let atlaspath = `spine:flower${lv}_tex`;
        let armature = this.GetDragonAmature("chick");
        armature.dragonAsset = await Utils.loadRes(skpath,dragonBones.DragonBonesAsset) as dragonBones.DragonBonesAsset;
        armature.dragonAtlasAsset = await Utils.loadRes(atlaspath,dragonBones.DragonBonesAtlasAsset) as dragonBones.DragonBonesAtlasAsset;
        armature.armatureName = "Armature";
        armature.playAnimation('idleL',0);
        AdCenter.Instance().showGridAd();
    }

    onDestroy()
    {
        AdCenter.Instance().hideGridAd();
        super.onDestroy();
    }

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_get":
                {
                    let coin = this.coin
                    AudioMgr.Instance().playSFX("coin");
                    Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                        if(b)
                        {
                            Data.user.coin += coin;
                        }  
                    })
                    this.closeUI();
                }
                break;
        }
    }
}
