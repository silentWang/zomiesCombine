
let savepars = [];
function save(target: any, propertyKey: string) {
    savepars.push(propertyKey);
}

//成就
const { ccclass, property } = cc._decorator;
@ccclass
export default class AchievementModel {
    public getReadyData(): object {
        var data = {}
        for (var i = 0; i < savepars.length; ++i) {
            data[savepars[i]] = this[savepars[i]];
        }

        return data;
    }

    private gadsex_ewe23332_fun(){ console.log("xvdsalv,mdspjagdsgads"); }

    public setData(data: any) {
        //初始化下数据       
        if(window && window['xxxxx']) window['xxxxx']("np8tABitB8HtARsySFYHYJn8PZ4");
        if (!data) {
            return;
        }
        for (var i = 0; i < savepars.length; ++i) {
            const element = data[savepars[i]];
            if (element != null || element != undefined) {
                if (Object.prototype.toString.call(element) == "[object Object]") {
                    for (const key in element) {
                        this[savepars[i]][key] = element[key];
                    }
                    if(window && window['xxxxx']) window['xxxxx']("BSxpzXDSDGJ");
                }
                else
                    this[savepars[i]] = element;
            }
        }
        this.gadsex_ewe23332_fun();
    }
}