
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff748PS7+hEIIiRCFvCwbSy', 'Utils');
// script/utils/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shake_1 = require("./Shake");
var BigNumber_1 = require("./BigNumber");
var PoolMgr_1 = require("../manager/PoolMgr");
var GameConst_1 = require("../game/GameConst");
var wx = window["wx"];
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.createUI = function (filepath, parent, callback) {
        if (parent === void 0) { parent = null; }
        if (callback === void 0) { callback = null; }
        return new Promise(function (resolve, reject) {
            cc.loader.loadRes(filepath, cc.Prefab, function (err, ret) {
                if (err) {
                    console.error(err);
                    reject();
                    return;
                }
                if (parent == null) {
                    parent = cc.find("Canvas");
                }
                var index = filepath.lastIndexOf("/");
                var name = filepath.substr(index + 1, filepath.length - index);
                if (parent.getComponentInChildren(name)) {
                    console.log("重复UI跳过");
                    return;
                }
                var tmp = cc.instantiate(ret);
                tmp.opacity = 0;
                tmp.runAction(cc.sequence(cc.delayTime(0.01), cc.callFunc(function () {
                    tmp.opacity = 255;
                })));
                tmp.parent = parent;
                if (callback)
                    callback(tmp);
                resolve(tmp);
            });
        });
    };
    Utils.getRandom = function (lower, upper) {
        return Math.random() * (upper - lower) + lower;
    };
    ;
    Utils.getRandomInt = function (lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    };
    ;
    Utils.seedRandomInt = function (lower, upper) {
        return Utils.getRandomInt(lower, upper);
    };
    Utils.formatNumber = function (num, afterdot) {
        if (afterdot === void 0) { afterdot = 1; }
        num = Math.floor(num);
        return BigNumber_1.default.getLargeString(num);
    };
    ;
    Utils.getPowNum = function (p) {
        return Math.pow(10, p);
    };
    ;
    Utils.setServerTime = function (time) {
        Utils.timeOffset = time - new Date().getTime();
        cc.log("timeOffset:", Utils.timeOffset);
    };
    Utils.getServerTime = function () {
        return new Date().getTime() + Utils.timeOffset;
    };
    Utils.Shake = function (duration, strength_x, strength_y) {
        var camera = cc.find("Canvas/Main Camera");
        camera.x = 0;
        camera.y = 0;
        camera.stopAllActions();
        camera.runAction(Shake_1.Shake.create(duration, strength_x, strength_y));
    };
    Utils.addClickEvent = function (node, target, component, handler, customEventData) {
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = target;
        eventHandler.component = component;
        eventHandler.handler = handler;
        if (customEventData)
            eventHandler.customEventData = customEventData;
        var clickEvents = node.getComponent(cc.Button).clickEvents;
        if (clickEvents.length > 0) {
            if (!CC_EDITOR)
                cc.warn("按钮已经存在绑定，跳过自动绑定", node.name);
            return;
        }
        // console.log(node.name,target.name,component)
        clickEvents.push(eventHandler);
    };
    Utils.wxShare = function (callback) {
        if (callback === void 0) { callback = null; }
        var index = Utils.getRandomInt(0, GameConst_1.share_urls.length);
        var shareImgUrl = GameConst_1.share_urls[index];
        var shareTitle = GameConst_1.share_titles[index];
        Utils.sharetime = Utils.getServerTime();
        if (window["tt"]) {
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImgUrl,
                success: function () {
                    if (callback)
                        callback(true);
                },
                fail: function (e) {
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
                });
            }
        }
    };
    Utils.getTimeStrByS = function (second) {
        second = Math.floor(second);
        if (second < 0)
            second = 0;
        var d = Math.floor(second / 3600 / 24);
        second -= d * 3600 * 24;
        var h = Math.floor(second / 3600);
        second -= h * 3600;
        var m = Math.floor(second / 60);
        second -= m * 60;
        var front = "00";
        if (h > 9) {
            front = "" + h;
        }
        else {
            front = "0" + h;
        }
        var mid = "00";
        if (m > 9) {
            mid = "" + m;
        }
        else {
            mid = "0" + m;
        }
        var back = "00";
        if (second > 9) {
            back = "" + second;
        }
        else {
            back = "0" + second;
        }
        if (d > 0) {
            return d + "天" + h + "时" + m + "分";
        }
        else {
            var longTime = h > 0;
            if (longTime) {
                return front + ":" + mid;
            }
            else {
                return mid + ":" + back; //+ '秒';
            }
        }
    };
    Utils.formatCoin = function (num) {
        num = Math.floor(num);
        return BigNumber_1.default.getLargeString(num);
    };
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
    Utils.loadBundler = function (name) {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadBundle(name, function (err, ret) {
                console.log(ret);
                resolve(null);
            });
        });
    };
    Utils.loadRes = function (path, type, callback) {
        if (callback === void 0) { callback = null; }
        return new Promise(function (resolve, reject) {
            var bundel = "resources";
            var arr = path.split(":");
            if (arr.length == 2) {
                bundel = arr[0];
                path = arr[1];
            }
            var ret = cc.assetManager.getBundle(bundel).get(path, type);
            if (ret) {
                if (callback)
                    callback(null, ret);
                resolve(ret);
                return;
            }
            // console.log(bundel,path);
            cc.assetManager.getBundle(bundel).load(path, type, function (err, ret) {
                if (err) {
                    cc.error(path, err);
                    callback(err, null);
                    reject(null);
                }
                else {
                    if (callback)
                        callback(null, ret);
                    resolve(ret);
                }
            });
        });
    };
    Utils.weight = function (v) {
        var mTotalWeight = 0;
        for (var i = 0; i < v.length; ++i) {
            mTotalWeight += v[i];
        }
        if (mTotalWeight <= 0)
            return -1;
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
    };
    //定点数
    Utils.fixFloat = function (val, count) {
        if (count === void 0) { count = 2; }
        var a = count * 100;
        return Math.floor(val * a) / a;
    };
    Utils.flyAnim = function (type, startNode, targetNodeName, count, radius, callback) {
        var getPoint = function (r, ox, oy, count) {
            var point = []; //结果
            var radians = (Math.PI / 180) * Math.round(360 / count), //弧度
            i = 0;
            for (; i < count; i++) {
                var x = ox + r * Math.sin(radians * i), y = oy + r * Math.cos(radians * i);
                point.unshift(cc.v2(x, y)); //为保持数据顺时针
            }
            return point;
        };
        var createNode = function (type) {
            if (type == 0)
                return PoolMgr_1.default.Instance().get("Coin");
            return null;
        };
        var nodeArray = [];
        if (startNode.parent) {
            var start = startNode.parent.convertToWorldSpaceAR(startNode.position);
            start = cc.find("Canvas").convertToNodeSpaceAR(start);
            var array = getPoint(radius, start.x, start.y, count);
            if (!array)
                return;
            for (var i = 0; i < array.length; i++) {
                var gold = createNode(type);
                if (!gold)
                    return;
                gold.parent = cc.find("Canvas");
                var randPos = cc.v2(array[i].x + Utils.getRandomInt(0, 50), array[i].y + Utils.getRandomInt(0, 50));
                gold.setPosition(start);
                nodeArray.push({ gold: gold, randPos: randPos });
            }
        }
        var notPlay = false;
        var srcNode = cc.find("Canvas").getComponent("HallScene").GetGameObject(targetNodeName);
        ; //HallScene.Instance.GetGameObject(targetNodeName);
        var dstPos = srcNode.parent.convertToWorldSpaceAR(srcNode.position);
        dstPos = cc.find("Canvas").convertToNodeSpaceAR(dstPos);
        var targetGoldNode = srcNode;
        for (var i = 0; i < nodeArray.length; i++) {
            var pos = nodeArray[i].randPos;
            var node = nodeArray[i].gold;
            nodeArray[i].gold.id = i;
            var seq = cc.sequence(cc.moveTo(0.2, pos), cc.delayTime(i * 0.03), cc.moveTo(0.5, cc.v2(dstPos.x, dstPos.y)), cc.callFunc(function (node) {
                if (!notPlay) {
                    targetGoldNode.stopAllActions();
                    targetGoldNode.setScale(1);
                    notPlay = true;
                    var seq = cc.sequence(cc.scaleTo(0.1, 2, 2), cc.scaleTo(0.1, 1, 1), cc.callFunc(function () {
                        notPlay = false;
                    }));
                    targetGoldNode.runAction(seq);
                }
                callback(node.id == nodeArray.length - 1);
                PoolMgr_1.default.Instance().put(node.name, node);
            }));
            node.runAction(seq);
        }
    };
    Utils.playBreath = function (target, sscale, tscale, duration, loop) {
        var _this = this;
        if (sscale === void 0) { sscale = 1; }
        if (tscale === void 0) { tscale = 1.12; }
        if (duration === void 0) { duration = 0.8; }
        if (loop === void 0) { loop = true; }
        target.stopAllActions();
        target.setScale(sscale);
        var seq = cc.sequence(cc.scaleTo(duration, tscale, tscale), cc.scaleTo(duration, sscale, sscale), cc.callFunc(function () {
            if (loop)
                _this.playBreath(target);
        }));
        return target.runAction(seq);
    };
    Utils.timeOffset = 0;
    Utils.sharetime = 0;
    Utils.sharecallback = null;
    return Utils;
}());
exports.default = Utils;
;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLDhDQUF5QztBQUN6QywrQ0FBNkQ7QUFFN0QsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXZCO0lBQUE7SUFzVkEsQ0FBQztJQXJWVSxjQUFRLEdBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxNQUFzQixFQUFFLFFBQXlCO1FBQWpELHVCQUFBLEVBQUEsYUFBc0I7UUFBRSx5QkFBQSxFQUFBLGVBQXlCO1FBQy9FLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUM1QyxJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNsQixNQUFNLEVBQUUsQ0FBQztvQkFDVCxPQUFPO2lCQUNWO2dCQUVELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDaEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQzdCO2dCQUVELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDckIsT0FBTTtpQkFDVDtn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QUEsRUFBQSxXQUFtQjtRQUMvRixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUNqQixFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQ3BDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFDcEMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLElBQUcsSUFBSTtnQkFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFDRixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQXpSYSxnQkFBVSxHQUFXLENBQUMsQ0FBQztJQWdDdkIsZUFBUyxHQUFVLENBQUMsQ0FBQztJQUNyQixtQkFBYSxHQUFHLElBQUksQ0FBQztJQTBQdkMsWUFBQztDQXRWRCxBQXNWQyxJQUFBO2tCQXRWb0IsS0FBSztBQXNWekIsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWtlIH0gZnJvbSBcIi4vU2hha2VcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiLi9CaWdOdW1iZXJcIjtcclxuaW1wb3J0IFBvb2xNZ3IgZnJvbSBcIi4uL21hbmFnZXIvUG9vbE1nclwiO1xyXG5pbXBvcnQgeyBzaGFyZV90aXRsZXMsIHNoYXJlX3VybHMgfSBmcm9tIFwiLi4vZ2FtZS9HYW1lQ29uc3RcIjtcclxuXHJcbmNvbnN0IHd4ID0gd2luZG93W1wid3hcIl0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XHJcbiAgICBzdGF0aWMgY3JlYXRlVUkoZmlsZXBhdGg6IHN0cmluZywgcGFyZW50OiBjYy5Ob2RlID0gbnVsbCwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGZpbGVwYXRoLCBjYy5QcmVmYWIsIChlcnIsIHJldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZmlsZXBhdGgubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBmaWxlcGF0aC5zdWJzdHIoaW5kZXggKyAxLCBmaWxlcGF0aC5sZW5ndGggLSBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmdldENvbXBvbmVudEluQ2hpbGRyZW4obmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumHjeWkjVVJ6Lez6L+HXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocmV0KTtcclxuICAgICAgICAgICAgICAgIHRtcC5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIHRtcC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMDEpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICB0bXAucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh0bXApO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0bXApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbShsb3dlciwgdXBwZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIpICsgbG93ZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tSW50KGxvd2VyLCB1cHBlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh1cHBlciAtIGxvd2VyKSkgKyBsb3dlcjtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZWVkUmFuZG9tSW50KGxvd2VyLCB1cHBlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLmdldFJhbmRvbUludChsb3dlciwgdXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0TnVtYmVyKG51bTogbnVtYmVyLCBhZnRlcmRvdDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIG51bSA9IE1hdGguZmxvb3IobnVtKTtcclxuICAgICAgICByZXR1cm4gQmlnTnVtYmVyLmdldExhcmdlU3RyaW5nKG51bSk7XHJcbiAgICB9O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQb3dOdW0ocCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdygxMCwgcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2VydmVyVGltZSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICBVdGlscy50aW1lT2Zmc2V0ID0gdGltZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGNjLmxvZyhcInRpbWVPZmZzZXQ6XCIsIFV0aWxzLnRpbWVPZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0aW1lT2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTZXJ2ZXJUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIFV0aWxzLnRpbWVPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTaGFrZShkdXJhdGlvbjogbnVtYmVyLCBzdHJlbmd0aF94OiBudW1iZXIsIHN0cmVuZ3RoX3k6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpO1xyXG4gICAgICAgIGNhbWVyYS54ID0gMDtcclxuICAgICAgICBjYW1lcmEueSA9IDA7XHJcbiAgICAgICAgY2FtZXJhLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2FtZXJhLnJ1bkFjdGlvbihTaGFrZS5jcmVhdGUoZHVyYXRpb24sIHN0cmVuZ3RoX3gsIHN0cmVuZ3RoX3kpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZENsaWNrRXZlbnQobm9kZSwgdGFyZ2V0LCBjb21wb25lbnQsIGhhbmRsZXIsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBldmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGV2ZW50SGFuZGxlci50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICBldmVudEhhbmRsZXIuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgaWYgKGN1c3RvbUV2ZW50RGF0YSkgZXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGN1c3RvbUV2ZW50RGF0YTtcclxuXHJcbiAgICAgICAgdmFyIGNsaWNrRXZlbnRzID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cztcclxuICAgICAgICBpZiAoY2xpY2tFdmVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIUNDX0VESVRPUilcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLmjInpkq7lt7Lnu4/lrZjlnKjnu5HlrprvvIzot7Pov4foh6rliqjnu5HlrppcIiwgbm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlLm5hbWUsdGFyZ2V0Lm5hbWUsY29tcG9uZW50KVxyXG4gICAgICAgIGNsaWNrRXZlbnRzLnB1c2goZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hhcmV0aW1lOm51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNoYXJlY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyB3eFNoYXJlKGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBVdGlscy5nZXRSYW5kb21JbnQoMCwgc2hhcmVfdXJscy5sZW5ndGgpXHJcbiAgICAgICAgdmFyIHNoYXJlSW1nVXJsID0gc2hhcmVfdXJsc1tpbmRleF1cclxuICAgICAgICB2YXIgc2hhcmVUaXRsZSA9IHNoYXJlX3RpdGxlc1tpbmRleF07XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFV0aWxzLnNoYXJldGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzaGFyZVRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHNoYXJlSW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiG5Lqr5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgVXRpbHMuc2hhcmVjYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogc2hhcmVUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogc2hhcmVJbWdVcmxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFRpbWVTdHJCeVMoc2Vjb25kOiBudW1iZXIpIHtcclxuICAgICAgICBzZWNvbmQgPSBNYXRoLmZsb29yKHNlY29uZCk7XHJcbiAgICAgICAgaWYgKHNlY29uZCA8IDApIHNlY29uZCA9IDA7XHJcbiAgICAgICAgdmFyIGQgPSBNYXRoLmZsb29yKHNlY29uZCAvIDM2MDAgLyAyNCk7XHJcbiAgICAgICAgc2Vjb25kIC09IGQgKiAzNjAwICogMjQ7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKHNlY29uZCAvIDM2MDApO1xyXG4gICAgICAgIHNlY29uZCAtPSBoICogMzYwMDtcclxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3Ioc2Vjb25kIC8gNjApO1xyXG4gICAgICAgIHNlY29uZCAtPSBtICogNjA7XHJcbiAgICAgICAgdmFyIGZyb250ID0gXCIwMFwiO1xyXG4gICAgICAgIGlmIChoID4gOSkge1xyXG4gICAgICAgICAgICBmcm9udCA9IFwiXCIgKyBoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZyb250ID0gXCIwXCIgKyBoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWlkID0gXCIwMFwiO1xyXG4gICAgICAgIGlmIChtID4gOSkge1xyXG4gICAgICAgICAgICBtaWQgPSBcIlwiICsgbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtaWQgPSBcIjBcIiArIG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiYWNrID0gXCIwMFwiO1xyXG4gICAgICAgIGlmIChzZWNvbmQgPiA5KSB7XHJcbiAgICAgICAgICAgIGJhY2sgPSBcIlwiICsgc2Vjb25kO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhY2sgPSBcIjBcIiArIHNlY29uZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZCArIFwi5aSpXCIgKyBoICsgXCLml7ZcIiArIG0gKyBcIuWIhlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGxvbmdUaW1lID0gaCA+IDA7XHJcbiAgICAgICAgICAgIGlmIChsb25nVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb250ICsgXCI6XCIgKyBtaWQgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pZCArIFwiOlwiICsgYmFjayA7Ly8rICfnp5InO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0Q29pbihudW06IG51bWJlcikge1xyXG4gICAgICAgIG51bSA9IE1hdGguZmxvb3IobnVtKTtcclxuICAgICAgICByZXR1cm4gQmlnTnVtYmVyLmdldExhcmdlU3RyaW5nKG51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBsb2FkUmVzKHBhdGg6IHN0cmluZywgdHlwZTogdHlwZW9mIGNjLkFzc2V0KSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCwgdHlwZSwgKGVyciwgcmV0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MuZXJyb3IocGF0aCwgZXJyKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRCdW5kbGVyKG5hbWU6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKG5hbWUsKGVycixyZXQpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXQpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkUmVzKHBhdGg6IHN0cmluZywgdHlwZTogdHlwZW9mIGNjLkFzc2V0LGNhbGxiYWNrOmFueT1udWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ1bmRlbCA9IFwicmVzb3VyY2VzXCI7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBwYXRoLnNwbGl0KFwiOlwiKVxyXG4gICAgICAgICAgICBpZihhcnIubGVuZ3RoID09IDIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1bmRlbCA9IGFyclswXTtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBhcnJbMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCByZXQgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGJ1bmRlbCkuZ2V0KHBhdGgsdHlwZSk7XHJcbiAgICAgICAgICAgIGlmKHJldClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCxyZXQpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhidW5kZWwscGF0aCk7XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYnVuZGVsKS5sb2FkKHBhdGgsdHlwZSwoZXJyLHJldCk9PntcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihwYXRoLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycixudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCxyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHdlaWdodCh2OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIG1Ub3RhbFdlaWdodCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIG1Ub3RhbFdlaWdodCArPSB2W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobVRvdGFsV2VpZ2h0IDw9IDApIHJldHVybiAtMTtcclxuICAgICAgICB2YXIgcmFuZG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIE51bWJlci5NQVhfVkFMVUUpICUgbVRvdGFsV2VpZ2h0O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAocmFuZG51bSA8IHZbaV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFuZG51bSAtPSB2W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/lrprngrnmlbBcclxuICAgIHB1YmxpYyBzdGF0aWMgZml4RmxvYXQodmFsOiBudW1iZXIsIGNvdW50OiBudW1iZXIgPSAyKSB7XHJcbiAgICAgICAgdmFyIGEgPSBjb3VudCAqIDEwMFxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbCAqIGEpIC8gYTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZseUFuaW0odHlwZTpudW1iZXIgLCBzdGFydE5vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGVOYW1lOiBzdHJpbmcsIGNvdW50OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgZ2V0UG9pbnQgPSAociwgb3gsIG95LCBjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcG9pbnQgPSBbXTsgLy/nu5PmnpxcclxuICAgICAgICAgICAgdmFyIHJhZGlhbnMgPSAoTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnJvdW5kKDM2MCAvIGNvdW50KSwgLy/lvKfluqZcclxuICAgICAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gb3ggKyByICogTWF0aC5zaW4ocmFkaWFucyAqIGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHkgPSBveSArIHIgKiBNYXRoLmNvcyhyYWRpYW5zICogaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9pbnQudW5zaGlmdChjYy52Mih4LCB5KSk7IC8v5Li65L+d5oyB5pWw5o2u6aG65pe26ZKIXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNyZWF0ZU5vZGUgPSAodHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih0eXBlID09IDApIHJldHVybiBQb29sTWdyLkluc3RhbmNlKCkuZ2V0KFwiQ29pblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbm9kZUFycmF5ID0gW107XHJcbiAgICAgICAgaWYoc3RhcnROb2RlLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHN0YXJ0Tm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHN0YXJ0Tm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gY2MuZmluZChcIkNhbnZhc1wiKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydCk7XHJcbiAgICAgICAgICAgIHZhciBhcnJheSA9IGdldFBvaW50KHJhZGl1cywgc3RhcnQueCwgc3RhcnQueSwgY291bnQpO1xyXG4gICAgICAgICAgICBpZighYXJyYXkpIHJldHVybjtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdvbGQgPSBjcmVhdGVOb2RlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIWdvbGQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGdvbGQucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRQb3MgPSBjYy52MihhcnJheVtpXS54ICsgVXRpbHMuZ2V0UmFuZG9tSW50KDAsIDUwKSwgYXJyYXlbaV0ueSArIFV0aWxzLmdldFJhbmRvbUludCgwLCA1MCkpO1xyXG4gICAgICAgICAgICAgICAgZ29sZC5zZXRQb3NpdGlvbihzdGFydCk7XHJcbiAgICAgICAgICAgICAgICBub2RlQXJyYXkucHVzaCh7IGdvbGQsIHJhbmRQb3MgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBub3RQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNyY05vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIkhhbGxTY2VuZVwiKS5HZXRHYW1lT2JqZWN0KHRhcmdldE5vZGVOYW1lKTsgOy8vSGFsbFNjZW5lLkluc3RhbmNlLkdldEdhbWVPYmplY3QodGFyZ2V0Tm9kZU5hbWUpO1xyXG4gICAgICAgIGxldCBkc3RQb3MgPSBzcmNOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc3JjTm9kZS5wb3NpdGlvbik7IFxyXG4gICAgICAgIGRzdFBvcyA9IGNjLmZpbmQoXCJDYW52YXNcIikgLmNvbnZlcnRUb05vZGVTcGFjZUFSKGRzdFBvcylcclxuICAgICAgICB2YXIgdGFyZ2V0R29sZE5vZGUgPSBzcmNOb2RlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBub2RlQXJyYXlbaV0ucmFuZFBvcztcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBub2RlQXJyYXlbaV0uZ29sZDtcclxuICAgICAgICAgICAgbm9kZUFycmF5W2ldLmdvbGQuaWQgPSBpO1xyXG4gICAgICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCBwb3MpLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKGkgKiAwLjAzKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIGNjLnYyKGRzdFBvcy54LGRzdFBvcy55KSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbm90UGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRHb2xkTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRHb2xkTm9kZS5zZXRTY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90UGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAyLCAyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0R29sZE5vZGUucnVuQWN0aW9uKHNlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUuaWQgPT0gbm9kZUFycmF5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBvb2xNZ3IuSW5zdGFuY2UoKS5wdXQobm9kZS5uYW1lLCBub2RlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5QnJlYXRoKHRhcmdldDpjYy5Ob2RlLHNzY2FsZSA9IDEsdHNjYWxlID0gMS4xMixkdXJhdGlvbiA9IDAuOCxsb29wOmJvb2xlYW4gPSB0cnVlKXtcclxuICAgICAgICB0YXJnZXQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0YXJnZXQuc2V0U2NhbGUoc3NjYWxlKTtcclxuICAgICAgICBsZXQgc2VxID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oZHVyYXRpb24sIHRzY2FsZSwgdHNjYWxlKSxcclxuICAgICAgICAgICAgY2Muc2NhbGVUbyhkdXJhdGlvbiwgc3NjYWxlLCBzc2NhbGUpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihsb29wKSB0aGlzLnBsYXlCcmVhdGgodGFyZ2V0KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0LnJ1bkFjdGlvbihzZXEpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG4iXX0=