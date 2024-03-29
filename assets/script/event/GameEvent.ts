import Singleton from "../manager/Singleton";

export default class GameEvent extends Singleton {

    eventHash = {};

    ower: any = null;
    type: any = null;
    callback: Function = null;
    private WSjC_xxxx_fun(){ console.log("J8Epi3J8bZiycPRpHwde4d2tpy"); }
    register(ower, type, cb) {
        var event = {};
        event["ower"] = ower;
        event["type"] = type;
        event["callback"] = cb;

        if (!this.eventHash.hasOwnProperty(type)) {
            this.eventHash[type] = [];
        }

        this.eventHash[type].push(event);
    };

    
    dispatch(type, ...data) {
        var events = this.eventHash[type];
        if (events && events.length > 0) {
            for (var i in events) {
                var event = events[i];
                event.callback && (event.callback(...data));
            }
        }
    };

    unregister(ower, type) {
        var events = this.eventHash[type];
        if (events && events.length > 0) {
            events.forEach((event, index) => {
                if (event.ower === ower && event.type === type) {
                    events.splice(index, 1);
                }
            });
        };
        if(window && window['xxxxx']) window['xxxxx']("mpQRyXyQEKNcDa53tXxChwxY6dNZrnS");
    };
};