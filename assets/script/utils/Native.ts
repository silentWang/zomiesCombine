import GameEvent from "../event/GameEvent";
import MsgToast from "../framwork/MsgToast";
import GameConst from "../game/GameConst";
import ChickData from "../manager/ChickData";
export enum VIP_TYPE  {
    VIP_MONTH = 'hw_vip_003',
    VIP_FOREVER = 'hw_vip_004',
    RECOVER_VIP = '3'
}
export default class Native {
    static initAppCallMethod(){
        window['HWGameDidEnterBackground'] = ()=>{
            console.log('--HWGameDidEnterBackground--')
            ChickData.save();
        }
        
    }
    static callAppMethod(methodName:string,params:any = '',callback:Function = null){
        if(cc.sys.os !== cc.sys.OS_IOS) return;
        let callfunc = 'callBackFunc_' + new Date().getTime();
        window[callfunc] = (res)=>{
            console.log(`---ios callback---${methodName}`,res)
            let rep = (!res || res == 'undefined') ? '' : res
            callback && callback(rep);
            window[callfunc] = null;
        }
        let obj = {method:callfunc,params};
        let json = JSON.stringify(obj);
        let methodstr = `${methodName}${json}`;
        console.log(`--ios callback before---:${methodName}---${methodstr}`)
        if(!jsb || !jsb.reflection || !jsb.reflection.callStaticMethod) {
            console.log('HWGameJSHandle:找不到jsb')
            return;
        }
        jsb.reflection.callStaticMethod('HWGameJSHandle',`${methodName}:`,json)
    }
    /**视频广告 */
    static playVideoAd(callback:Function,adUnitId:string){
        if(ChickData.isFreeAd){
            callback && callback(1);
            return;
        }
        this.callAppMethod('loadTopOnRewardAd',{adUnitId},(res)=>{
            if(res && res.status == 200){
                callback && callback(1);
                MsgToast.show('觀看成功');
            }
            else{
                callback && callback();
            }
        });
    }
    /**插屏广告 */
    static showInterstitialAd(adUnitId:string,callback:Function = null){
        this.callAppMethod('loadTopOnInterstitialAd',{adUnitId},(res)=>{
            callback && callback();
        });
    }
    /**banner广告 */
    static showBannerAd(adUnitId:string,callback:Function = null){
        this.callAppMethod('loadBannerAd',{adUnitId},(res)=>{
            callback && callback();
        });
    }
    
    static hideBannerAd(){
        this.callAppMethod('hideBannerAd');
    }
    
    /**月卡購買 */
    static buyMonthCard(type:string,callback:Function = null){
        this.callAppMethod('hwIAP',type,(res)=>{
            callback && callback(res)
            if(res.code != 0) return;
            if(res.type == VIP_TYPE.RECOVER_VIP || res.type == VIP_TYPE.VIP_FOREVER || res.type == VIP_TYPE.VIP_MONTH){
                ChickData.isFreeAd = true;
            }
            GameEvent.Instance().dispatch(GameConst.FREE_AD_EVENT)
        })
    }
    /**get buy info */
    static getMyMonthInfo(callback:Function = null){
        callback && callback()
        return;
        // this.callAppMethod('getVipInfo','',(res)=>{
        //     callback && callback(res)
        //     if(res.type == VIP_TYPE.RECOVER_VIP || res.type == VIP_TYPE.VIP_FOREVER || res.type == VIP_TYPE.VIP_MONTH){
        //         ChickData.isFreeAd = true;
        //     }
        //     GameEvent.Instance().dispatch(GameConst.FREE_AD_EVENT)
        // })
    }
    /**open webview */
    static openWebView(url:string){
        if(cc.sys.os !== cc.sys.OS_IOS) {
            window.location.href = url;
            return;
        }
        this.callAppMethod('hw_openH5',{url});
    }
    /**setlocal */
    static saveDataToApp(json:string){
        if(cc.sys.os === cc.sys.OS_IOS){
            this.callAppMethod('setCacheData',{userdata:json});
        }
        else{
            cc.sys.localStorage.setItem(GameConst.cache_chick_data_key,JSON.stringify({userdata:json}))
        }
    }
    /**getlocal */
    static getDataFromApp(callback:Function){
        if(cc.sys.os === cc.sys.OS_IOS){
            this.callAppMethod('getCacheData','',(res)=>{
                if(res && res.userdata){
                    callback && callback(JSON.parse(res.userdata));
                }
                else{
                    callback && callback(null);
                }
            });
        }
        else{
            let res = cc.sys.localStorage.getItem(GameConst.cache_chick_data_key)
            let userdata = null;
            if(res){
                let data = JSON.parse(res);
                if(data.userdata){
                    userdata = JSON.parse(data.userdata)
                }
            }
            callback && callback(userdata);
        }
    }
}