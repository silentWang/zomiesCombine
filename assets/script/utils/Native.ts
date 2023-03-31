export class Native {
    static callAppMethod(methodName:string,params:any = '',callback:Function = null){
        if(cc.sys.os !== cc.sys.OS_IOS) return;
        let callfunc = 'callBackFunc_' + new Date().getTime();
        window[callfunc] = (res)=>{
            callback && callback(res);
            window[callfunc] = null;
        }
        let obj = {method:callfunc,params};
        let json = JSON.stringify(obj);
        let methodstr = `${methodName}${json}`;
        console.log(`----HWGameJSHandle:${methodName}---${methodstr}`)
        if(!jsb || !jsb.reflection || !jsb.reflection.callStaticMethod) {
            console.log('HWGameJSHandle:找不到jsb')
            return;
        }
        jsb.reflection.callStaticMethod('HWGameJSHandle',`${methodName}:`,json)
    }

    static getAppVersion(){
        this.callAppMethod('getAppVersion',{x:1,y:'25222'},(res)=>{
            console.log('getAppVersion ios 回调',res)
        });
    }

}