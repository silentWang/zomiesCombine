import { Shake } from "./Shake";
import BigNumber from "./BigNumber";
import PoolMgr from "../manager/PoolMgr";
import { share_titles, share_urls } from "../game/GameConst";

const wx = window["wx"] 

export default class Utils {
    static createUI(filepath: string, parent: cc.Node = null, callback: Function = null) {
        return new Promise((resolve, reject) => {
            cc.loader.loadRes(filepath, cc.Prefab, (err, ret) => {
                if (err) {
                    console.error(err)
                    reject();
                    return;
                }

                if (parent == null) {
                    parent = cc.find("Canvas")
                }

                let index = filepath.lastIndexOf("/");
                let name = filepath.substr(index + 1, filepath.length - index);
                if (parent.getComponentInChildren(name)) {
                    console.log("重复UI跳过")
                    return
                }
                var tmp: cc.Node = cc.instantiate(ret);
                tmp.opacity = 0;
                tmp.runAction(cc.sequence(cc.delayTime(0.01), cc.callFunc(() => {
                    tmp.opacity = 255;
                })))
                tmp.parent = parent;
                if (callback) callback(tmp);
                resolve(tmp);
            })
        })
    }



    public static getRandom(lower, upper): number {
        return Math.random() * (upper - lower) + lower;
    };

    public static getRandomInt(lower, upper): number {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    };

    public static seedRandomInt(lower, upper): number {
        return Utils.getRandomInt(lower, upper);
    }

    public static formatNumber(num: number, afterdot: number = 1) {
        num = Math.floor(num);
        return BigNumber.getLargeString(num);
    };
    public static getPowNum(p) {
        return Math.pow(10, p);
    };

    public static setServerTime(time: number) {
        Utils.timeOffset = time - new Date().getTime();
        cc.log("timeOffset:", Utils.timeOffset)
    }

    public static timeOffset: number = 0;
    public static getServerTime() {
        return new Date().getTime() + Utils.timeOffset;
    }

    public static Shake(duration: number, strength_x: number, strength_y: number) {
        let camera = cc.find("Canvas/Main Camera");
        camera.x = 0;
        camera.y = 0;
        camera.stopAllActions();
        camera.runAction(Shake.create(duration, strength_x, strength_y));
    }

    public static addClickEvent(node, target, component, handler, customEventData) {
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = target;
        eventHandler.component = component;
        eventHandler.handler = handler;
        if (customEventData) eventHandler.customEventData = customEventData;

        var clickEvents = node.getComponent(cc.Button).clickEvents;
        if (clickEvents.length > 0) {
            if (!CC_EDITOR)
                cc.warn("按钮已经存在绑定，跳过自动绑定", node.name);
            return;
        }
        // console.log(node.name,target.name,component)
        clickEvents.push(eventHandler);
    }



    public static sharetime:number = 0;
    public static sharecallback = null;
    public static wxShare(callback: Function = null) {
        let index = Utils.getRandomInt(0, share_urls.length)
        var shareImgUrl = share_urls[index]
        var shareTitle = share_titles[index];

        
        Utils.sharetime = Utils.getServerTime();
        if (window["tt"]) {
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImgUrl,
                success() {
                    if (callback) callback(true);
                },
                fail(e) {
                    console.log("分享失败");
                    // callback(false);
                }
            });
        }
        else {
            
            Utils.sharecallback = callback;
            if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                wx.shareAppMessage({
                    title: shareTitle,
                    imageUrl: shareImgUrl
                })
            }
        }
    }



    public static getTimeStrByS(second: number) {
        second = Math.floor(second);
        if (second < 0) second = 0;
        var d = Math.floor(second / 3600 / 24);
        second -= d * 3600 * 24;
        var h = Math.floor(second / 3600);
        second -= h * 3600;
        var m = Math.floor(second / 60);
        second -= m * 60;
        var front = "00";
        if (h > 9) {
            front = "" + h;
        } else {
            front = "0" + h;
        }
        var mid = "00";
        if (m > 9) {
            mid = "" + m;
        } else {
            mid = "0" + m;
        }
        var back = "00";
        if (second > 9) {
            back = "" + second;
        } else {
            back = "0" + second;
        }

        if (d > 0) {
            return d + "天" + h + "时" + m + "分";
        }
        else {
            var longTime = h > 0;
            if (longTime) {
                return front + ":" + mid ;
            } else {
                return mid + ":" + back ;//+ '秒';
            }
        }
    }

    public static formatCoin(num: number) {
        num = Math.floor(num);
        return BigNumber.getLargeString(num);
    }

    // public static loadRes(path: string, type: typeof cc.Asset) {
    //     return new Promise((resolve, reject) => {
    //         cc.loader.loadRes(path, type, (err, ret) => {
    //             if (err) {
    //                 cc.error(path, err);
    //                 reject(null);
    //             }
    //             else {
    //                 resolve(ret);
    //             }
    //         })
    //     })
    // }

    public static loadBundler(name:string)
    {
        return new Promise((resolve,reject)=>{
            cc.assetManager.loadBundle(name,(err,ret)=>{
                console.log(ret)
                resolve(null);
            })
        })
    }


    
    public static loadRes(path: string, type: typeof cc.Asset,callback:any=null) {
        return new Promise((resolve, reject) => {
            let bundel = "resources";
            let arr = path.split(":")
            if(arr.length == 2)
            {
                bundel = arr[0];
                path = arr[1];
            }

            let ret = cc.assetManager.getBundle(bundel).get(path,type);
            if(ret)
            {
                if(callback)
                    callback(null,ret);
                resolve(ret);
                return;
            }

            // console.log(bundel,path);
            cc.assetManager.getBundle(bundel).load(path,type,(err,ret)=>{
                if (err) {
                    cc.error(path, err);
                    callback(err,null);
                    reject(null);
                }
                else {
                    if(callback)
                        callback(null,ret);
                    resolve(ret);
                }
            });
        })
    }

    public static weight(v: number[]): number {
        var mTotalWeight = 0;
        for (var i = 0; i < v.length; ++i) {
            mTotalWeight += v[i];
        }
        if (mTotalWeight <= 0) return -1;
        var randnum = Math.round(Math.random() * Number.MAX_VALUE) % mTotalWeight;
        for (var i = 0; i < v.length; ++i) {
            if (randnum < v[i]) {
                return i;
            }
            else {
                randnum -= v[i];
            }
        }
        return -1;
    }


    //定点数
    public static fixFloat(val: number, count: number = 2) {
        var a = count * 100
        return Math.floor(val * a) / a;
    }

    public static flyAnim(type:number , startNode: cc.Node, targetNodeName: string, count: number, radius: number, callback: Function) {
        let getPoint = (r, ox, oy, count) => {
            var point = []; //结果
            var radians = (Math.PI / 180) * Math.round(360 / count), //弧度
                i = 0;
            for (; i < count; i++) {
                var x = ox + r * Math.sin(radians * i),
                    y = oy + r * Math.cos(radians * i);

                point.unshift(cc.v2(x, y)); //为保持数据顺时针
            }
            return point;
        }

        let createNode = (type) => {
            if(type == 0)
            return PoolMgr.Instance().get("Coin");
            if(type == 1)
            return PoolMgr.Instance().get("Gem");
        }

        let start = startNode.parent.convertToWorldSpaceAR(startNode.position);
        start = cc.find("Canvas").convertToNodeSpaceAR(start);
        var array = getPoint(radius, start.x, start.y, count);

        var nodeArray = new Array();
        for (var i = 0; i < array.length; i++) {
            var gold = createNode(type);
            if(!gold)return;
            gold.parent = cc.find("Canvas")
            var randPos = cc.v2(array[i].x + Utils.getRandomInt(0, 50), array[i].y + Utils.getRandomInt(0, 50));
            gold.setPosition(start);
            nodeArray.push({ gold, randPos });
        }

        var notPlay = false;
        let srcNode = cc.find("Canvas").getComponent("HallScene") .GetGameObject(targetNodeName); ;//HallScene.Instance.GetGameObject(targetNodeName);
        let dstPos = srcNode.parent.convertToWorldSpaceAR(srcNode.position); 
        dstPos = cc.find("Canvas") .convertToNodeSpaceAR(dstPos)
      
        var targetGoldNode = srcNode;
        for (var i = 0; i < nodeArray.length; i++) {
            var pos = nodeArray[i].randPos;
            var node = nodeArray[i].gold;
            nodeArray[i].gold.id = i;
            var seq = cc.sequence(
                cc.moveTo(0.2, pos),
                cc.delayTime(i * 0.03),
                cc.moveTo(0.5, cc.v2(dstPos.x,dstPos.y)),
                cc.callFunc((node) => {
                    if (!notPlay) {
                        targetGoldNode.stopAllActions();
                        targetGoldNode.setScale(1);
                        notPlay = true;
                        var seq = cc.sequence(
                            cc.scaleTo(0.1, 2, 2),
                            cc.scaleTo(0.1, 1, 1),
                            cc.callFunc(() => {
                                notPlay = false;
                            }),
                        );
                        targetGoldNode.runAction(seq);
                    }
                    callback(node.id == nodeArray.length - 1);
                    PoolMgr.Instance().put(node.name, node)
                })
            );
            node.runAction(seq);
        }
    }

};


