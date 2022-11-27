// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../../framwork/BaseUI";
import AdCenter from "../../manager/AdCenter";
import Data from "../../manager/Data";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import { DB_plant } from "../DB";
import HallScene from "../HallScene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CoinNotEnoughUI extends BaseUI {

    @property(cc.Label)
    lbl_times: cc.Label = null;
    @property(cc.Label)
    lbl_chickname:cc.Label = null;

    // LIFE-CYCLE CALLBACKS:
    private type:number;

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    public async setType(type:number){
        this.type = type;
        this.GetGameObject('getChick').active = type == 1;
        this.GetGameObject('getCoin').active = type == 2;
        let str = '';
        if(type == 1){
            str = `${Data.user.today_getchick_times}/${Data.user.today_getchick_total}`;
            let lv = Data.user.GetMaxLv() - 3 > 0 ? Data.user.GetMaxLv() - 3 : 1;
            let skpath = `spine:flower${lv}_ske`;
            let atlaspath = `spine:flower${lv}_tex`;
            let chick = this.GetDragonAmature('chick');
            chick.dragonAsset = await Utils.loadRes(skpath,dragonBones.DragonBonesAsset) as dragonBones.DragonBonesAsset;
            chick.dragonAtlasAsset = await Utils.loadRes(atlaspath,dragonBones.DragonBonesAtlasAsset) as dragonBones.DragonBonesAtlasAsset;
            chick.armatureName = 'Armature';
            chick.playAnimation('idleL',0);
            this.lbl_chickname.string = `“${DB_plant[lv - 1][7]}”`;
        }
        else if(type == 2){
            str = `${Data.user.today_getcoin_times}/${Data.user.today_getcoin_total}`;
        }
        this.lbl_times.string = `当日次数${str}`
    }

    private addValue(){
        let type = this.type;
        if(type == 1){
            Data.user.today_getchick_times++;
            HallScene.Instance.tryBuyPlant(0,2);
            Data.save();
            this.closeUI();
        }
        else if(type == 2){
            Data.user.today_getcoin_times++;
            let coin = 10000;
            AudioMgr.Instance().playSFX("coin");
            Utils.flyAnim(0,this.node,"icon_coin",Utils.getRandomInt(5,10),100,(b)=>{
                if(b) Data.user.coin += coin 
                Data.save();
            })
            this.closeUI();
        }
    }

    onBtnClicked(event, customEventData) {
        var btnName = event.target.name;
        AudioMgr.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
            case "btn_normal":
                this.closeUI();
                break;
            case "btn_ad":
                AdCenter.Instance().play((b)=>{
                    if(b) this.addValue();
                });
                break;
        }
    }
}
