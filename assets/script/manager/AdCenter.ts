import Singleton from "./Singleton";
// import MsgToast from "../framwork/MsgToast";

import Utils from '../utils/Utils';
// import WxCenter from "./WxCenter";
import { Native } from "../utils/Native";
const tt = window["tt"];

// const { ccclass, property } = cc._decorator;
export default class AdCenter extends Singleton {

    constructor() {
        super();
    }

    private _lastPlayTime: number = 0;
    public play(callback: Function, adunitId:string = 'b64242a9655d0f') {
        if (Utils.getServerTime() - this._lastPlayTime < 1000) {
            console.log("点击过于频繁")
            return;
        }
        this._lastPlayTime = Utils.getServerTime();
        if(cc.sys.os === cc.sys.OS_IOS){
            Native.playVideoAd(callback,adunitId);
        }
        else{
            callback && callback(1)
        }
    }

    public showGridAd() 
    {
        Native.showBannerAd('b64242ab164d72')
    }

    public hideGridAd() {
        Native.hideBannerAd()
    }

    public showInterstitialAd(adunit:string = 'b64242a8c01cdc'){
        Native.showInterstitialAd(adunit)
    }

}