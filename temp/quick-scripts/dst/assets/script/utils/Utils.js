
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
var NumberUtils_1 = require("./NumberUtils");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("bcD6");
                var index = filepath.lastIndexOf("/");
                var name = filepath.substr(index + 1, filepath.length - index);
                if (parent.getComponentInChildren(name)) {
                    // console.log("重复UI跳过")
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
    Utils.getRandomInt = function (lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    };
    ;
    Utils.getRandom = function (lower, upper) {
        return Math.random() * (upper - lower) + lower;
    };
    ;
    Utils.getPowNum = function (p) {
        return Math.pow(10, p);
    };
    ;
    Utils.formatNumber = function (num, afterdot) {
        if (afterdot === void 0) { afterdot = 1; }
        if (window && window['xxxxx'])
            window['xxxxx']("HX7tS6");
        num = Math.floor(num);
        return NumberUtils_1.default.getLargeString(num);
    };
    ;
    Utils.setServerTime = function (time) {
        Utils.timeOffset = time - new Date().getTime();
        cc.log("timeOffset:", Utils.timeOffset);
    };
    Utils.seedRandomInt = function (lower, upper) {
        return Utils.getRandomInt(lower, upper);
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
    Utils.wxShare = function (callback) {
        if (callback === void 0) { callback = null; }
        if (window && window['xxxxx'])
            window['xxxxx']("WssEyQcp7HRrw");
        var index = Utils.getRandomInt(0, GameConst_1.share_urls.length);
        var shareImgUrl = GameConst_1.share_urls[index];
        var shareTitle = GameConst_1.share_titles[index];
        Utils.sharetime = Utils.getServerTime();
        if (window["tt"]) {
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImgUrl,
                success: function () {
                    if (window && window['xxxxx'])
                        window['xxxxx']("RrNJSnGEXbtZShp347i7FN6728r");
                    if (callback)
                        callback(true);
                },
                fail: function (e) {
                    // console.log("分享失败");
                    // callback(false);
                }
            });
        }
        else {
            if (window && window['xxxxx'])
                window['xxxxx']("Y");
            Utils.sharecallback = callback;
            if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                wx.shareAppMessage({
                    title: shareTitle,
                    imageUrl: shareImgUrl
                });
            }
        }
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
        if (window && window['xxxxx'])
            window['xxxxx']("4mwdEWWjnrdPnwMywBNwpD8nCaD");
        clickEvents.push(eventHandler);
    };
    Utils.prototype.csdnesAY_xxxx_fun = function () { console.log("dssdgewsdgfaIOJOGAkomgDGFMSO"); };
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
        if (window && window['xxxxx'])
            window['xxxxx']("KZYp2pM3yfrdpKtABSdHitmb36wnP");
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
            if (window && window['xxxxx'])
                window['xxxxx']("Khf");
            var longTime = h > 0;
            if (longTime) {
                return front + ":" + mid;
            }
            else {
                return mid + ":" + back; //+ '秒';
            }
        }
    };
    Utils.prototype.cGESDEXDAY_xxxx_fun = function () { console.log("dssdgewsdgfaIOJOGAkomgDGFMSO"); };
    Utils.loadBundler = function (name) {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadBundle(name, function (err, ret) {
                console.log(ret);
                resolve(null);
            });
        });
    };
    Utils.prototype.tSWD_xxxx_fun = function () { console.log("36dY"); };
    Utils.formatCoin = function (num) {
        num = Math.floor(num);
        return NumberUtils_1.default.getLargeString(num);
    };
    Utils.weight = function (v) {
        if (window && window['xxxxx'])
            window['xxxxx']("Bt4");
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
    Utils.loadRes = function (path, type, callback) {
        if (callback === void 0) { callback = null; }
        return new Promise(function (resolve, reject) {
            var bundel = "resources";
            if (window && window['xxxxx'])
                window['xxxxx']("MHzpnpCTQKFnEX2FCCBGmApMEexXJ");
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
            cc.assetManager.getBundle(bundel).load(path, type, function (err, ret) {
                if (err) {
                    cc.error(path, err);
                    callback(err, null);
                    reject(null);
                }
                else {
                    if (callback)
                        callback(null, ret);
                    if (window && window['xxxxx'])
                        window['xxxxx']("2stMFR");
                    resolve(ret);
                }
            });
        });
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
        if (window && window['xxxxx'])
            window['xxxxx']("fGdJGTkFQtZJTFF5phWzH3sXw2X");
        var createNode = function (type) {
            if (type == 0)
                return PoolMgr_1.default.Instance().get("Coin");
            return null;
        };
        var nodeArray = [];
        if (startNode && startNode.parent) {
            var start = startNode.parent.convertToWorldSpaceAR(startNode.position);
            start = cc.find("Canvas").convertToNodeSpaceAR(start);
            var array = getPoint(radius, start.x, start.y, count);
            if (!array) {
                callback(1);
                return;
            }
            for (var i = 0; i < array.length; i++) {
                var gold = createNode(type);
                if (!gold) {
                    callback(1);
                    return;
                }
                gold.parent = cc.find("Canvas");
                var randPos = cc.v2(array[i].x + Utils.getRandomInt(0, 50), array[i].y + Utils.getRandomInt(0, 50));
                gold.setPosition(start);
                nodeArray.push({ gold: gold, randPos: randPos });
            }
        }
        if (window && window['xxxxx'])
            window['xxxxx']("mzkZj");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("Q3k3Wx2EBhYRKrR");
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
    //定点数
    Utils.fixFloat = function (val, count) {
        if (count === void 0) { count = 2; }
        if (window && window['xxxxx'])
            window['xxxxx']("TxCXGipxXBicD2wYMAxxW");
        var a = count * 100;
        return Math.floor(val * a) / a;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMsNkNBQXdDO0FBQ3hDLDhDQUF5QztBQUN6QywrQ0FBNkQ7QUFFN0QsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXZCO0lBQUE7SUF1VkEsQ0FBQztJQXRWVSxjQUFRLEdBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxNQUFzQixFQUFFLFFBQXlCO1FBQWpELHVCQUFBLEVBQUEsYUFBc0I7UUFBRSx5QkFBQSxFQUFBLGVBQXlCO1FBQy9FLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUM1QyxJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNsQixNQUFNLEVBQUUsQ0FBQztvQkFDVCxPQUFPO2lCQUNWO2dCQUVELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDaEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQzdCO2dCQUVELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxNQUFNLENBQUMsc0JB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VyxDQUFDLENBQUM7SUFhdkIsZUFBUyxHQUFVLENBQUMsQ0FBQztJQUNyQixtQkFBYSxHQUFHLElBQUksQ0FBQztJQThRdkMsWUFBQztDQXZWRCxBQXVWQyxJQUFBO2tCQXZWb0IsS0FBSztBQXVWekIsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWtlIH0gZnJvbSBcIi4vU2hha2VcIjtcbmltcG9ydCBOdW1iZXJVdGlscyBmcm9tIFwiLi9OdW1iZXJVdGlsc1wiO1xuaW1wb3J0IFBvb2xNZ3IgZnJvbSBcIi4uL21hbmFnZXIvUG9vbE1nclwiO1xuaW1wb3J0IHsgc2hhcmVfdGl0bGVzLCBzaGFyZV91cmxzIH0gZnJvbSBcIi4uL2dhbWUvR2FtZUNvbnN0XCI7XG5cbmNvbnN0IHd4ID0gd2luZG93W1wid3hcIl0gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbiAgICBzdGF0aWMgY3JlYXRlVUkoZmlsZXBhdGg6IHN0cmluZywgcGFyZW50OiBjYy5Ob2RlID0gbnVsbCwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoZmlsZXBhdGgsIGNjLlByZWZhYiwgKGVyciwgcmV0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImJjRDZcIik7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZmlsZXBhdGgubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gZmlsZXBhdGguc3Vic3RyKGluZGV4ICsgMSwgZmlsZXBhdGgubGVuZ3RoIC0gaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumHjeWkjVVJ6Lez6L+HXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdG1wOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocmV0KTtcbiAgICAgICAgICAgICAgICB0bXAub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgdG1wLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4wMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG1wLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgfSkpKVxuICAgICAgICAgICAgICAgIHRtcC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh0bXApO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodG1wKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21JbnQobG93ZXIsIHVwcGVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh1cHBlciAtIGxvd2VyKSkgKyBsb3dlcjtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb20obG93ZXIsIHVwcGVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlcikgKyBsb3dlcjtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRQb3dOdW0ocCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coMTAsIHApO1xuICAgIH07XG4gICAgXG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXROdW1iZXIobnVtOiBudW1iZXIsIGFmdGVyZG90OiBudW1iZXIgPSAxKSB7XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkhYN3RTNlwiKTtcbiAgICAgICAgbnVtID0gTWF0aC5mbG9vcihudW0pO1xuICAgICAgICByZXR1cm4gTnVtYmVyVXRpbHMuZ2V0TGFyZ2VTdHJpbmcobnVtKTtcbiAgICB9O1xuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2VydmVyVGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgVXRpbHMudGltZU9mZnNldCA9IHRpbWUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY2MubG9nKFwidGltZU9mZnNldDpcIiwgVXRpbHMudGltZU9mZnNldClcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBzZWVkUmFuZG9tSW50KGxvd2VyLCB1cHBlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBVdGlscy5nZXRSYW5kb21JbnQobG93ZXIsIHVwcGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRpbWVPZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHN0YXRpYyBnZXRTZXJ2ZXJUaW1lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBVdGlscy50aW1lT2Zmc2V0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU2hha2UoZHVyYXRpb246IG51bWJlciwgc3RyZW5ndGhfeDogbnVtYmVyLCBzdHJlbmd0aF95OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNhbWVyYSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik7XG4gICAgICAgIGNhbWVyYS54ID0gMDtcbiAgICAgICAgY2FtZXJhLnkgPSAwO1xuICAgICAgICBjYW1lcmEuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgY2FtZXJhLnJ1bkFjdGlvbihTaGFrZS5jcmVhdGUoZHVyYXRpb24sIHN0cmVuZ3RoX3gsIHN0cmVuZ3RoX3kpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNoYXJldGltZTpudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgc2hhcmVjYWxsYmFjayA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyB3eFNoYXJlKGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiV3NzRXlRY3A3SFJyd1wiKTtcbiAgICAgICAgbGV0IGluZGV4ID0gVXRpbHMuZ2V0UmFuZG9tSW50KDAsIHNoYXJlX3VybHMubGVuZ3RoKVxuICAgICAgICB2YXIgc2hhcmVJbWdVcmwgPSBzaGFyZV91cmxzW2luZGV4XVxuICAgICAgICB2YXIgc2hhcmVUaXRsZSA9IHNoYXJlX3RpdGxlc1tpbmRleF07XG5cbiAgICAgICAgXG4gICAgICAgIFV0aWxzLnNoYXJldGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XG4gICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzaGFyZVRpdGxlLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBzaGFyZUltZ1VybCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJSck5KU25HRVhidFpTaHAzNDdpN0ZONjcyOHJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLliIbkuqvlpLHotKVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiWVwiKTtcbiAgICAgICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNoYXJlVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBzaGFyZUltZ1VybFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFkZENsaWNrRXZlbnQobm9kZSwgdGFyZ2V0LCBjb21wb25lbnQsIGhhbmRsZXIsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgZXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgZXZlbnRIYW5kbGVyLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgZXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgZXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICBpZiAoY3VzdG9tRXZlbnREYXRhKSBldmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gY3VzdG9tRXZlbnREYXRhO1xuXG4gICAgICAgIHZhciBjbGlja0V2ZW50cyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHM7XG4gICAgICAgIGlmIChjbGlja0V2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUNDX0VESVRPUilcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5oyJ6ZKu5bey57uP5a2Y5Zyo57uR5a6a77yM6Lez6L+H6Ieq5Yqo57uR5a6aXCIsIG5vZGUubmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZS5uYW1lLHRhcmdldC5uYW1lLGNvbXBvbmVudClcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiNG13ZEVXV2pucmRQbndNeXdCTndwRDhuQ2FEXCIpO1xuICAgICAgICBjbGlja0V2ZW50cy5wdXNoKGV2ZW50SGFuZGxlcik7XG4gICAgfVxuICAgIHByaXZhdGUgY3NkbmVzQVlfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJkc3NkZ2V3c2RnZmFJT0pPR0Frb21nREdGTVNPXCIpOyB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFRpbWVTdHJCeVMoc2Vjb25kOiBudW1iZXIpIHtcbiAgICAgICAgc2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQpO1xuICAgICAgICBpZiAoc2Vjb25kIDwgMCkgc2Vjb25kID0gMDtcbiAgICAgICAgdmFyIGQgPSBNYXRoLmZsb29yKHNlY29uZCAvIDM2MDAgLyAyNCk7XG4gICAgICAgIHNlY29uZCAtPSBkICogMzYwMCAqIDI0O1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3Ioc2Vjb25kIC8gMzYwMCk7XG4gICAgICAgIHNlY29uZCAtPSBoICogMzYwMDtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKHNlY29uZCAvIDYwKTtcbiAgICAgICAgc2Vjb25kIC09IG0gKiA2MDtcbiAgICAgICAgdmFyIGZyb250ID0gXCIwMFwiO1xuICAgICAgICBpZiAoaCA+IDkpIHtcbiAgICAgICAgICAgIGZyb250ID0gXCJcIiArIGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9udCA9IFwiMFwiICsgaDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWlkID0gXCIwMFwiO1xuICAgICAgICBpZiAobSA+IDkpIHtcbiAgICAgICAgICAgIG1pZCA9IFwiXCIgKyBtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWlkID0gXCIwXCIgKyBtO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiYWNrID0gXCIwMFwiO1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJLWllwMnBNM3lmcmRwS3RBQlNkSGl0bWIzNnduUFwiKTtcbiAgICAgICAgaWYgKHNlY29uZCA+IDkpIHtcbiAgICAgICAgICAgIGJhY2sgPSBcIlwiICsgc2Vjb25kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFjayA9IFwiMFwiICsgc2Vjb25kO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZCArIFwi5aSpXCIgKyBoICsgXCLml7ZcIiArIG0gKyBcIuWIhlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiS2hmXCIpO1xuICAgICAgICAgICAgdmFyIGxvbmdUaW1lID0gaCA+IDA7XG4gICAgICAgICAgICBpZiAobG9uZ1RpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbnQgKyBcIjpcIiArIG1pZCA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaWQgKyBcIjpcIiArIGJhY2sgOy8vKyAn56eSJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY0dFU0RFWERBWV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcImRzc2RnZXdzZGdmYUlPSk9HQWtvbWdER0ZNU09cIik7IH1cbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRCdW5kbGVyKG5hbWU6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKG5hbWUsKGVycixyZXQpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmV0KVxuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICAgICAgcHJpdmF0ZSB0U1dEX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiMzZkWVwiKTsgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXRDb2luKG51bTogbnVtYmVyKSB7XG4gICAgICAgIG51bSA9IE1hdGguZmxvb3IobnVtKTtcbiAgICAgICAgcmV0dXJuIE51bWJlclV0aWxzLmdldExhcmdlU3RyaW5nKG51bSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB3ZWlnaHQodjogbnVtYmVyW10pOiBudW1iZXIge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJCdDRcIik7XG4gICAgICAgIHZhciBtVG90YWxXZWlnaHQgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHYubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIG1Ub3RhbFdlaWdodCArPSB2W2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtVG90YWxXZWlnaHQgPD0gMCkgcmV0dXJuIC0xO1xuICAgICAgICB2YXIgcmFuZG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIE51bWJlci5NQVhfVkFMVUUpICUgbVRvdGFsV2VpZ2h0O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHYubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChyYW5kbnVtIDwgdltpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZG51bSAtPSB2W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHN0YXRpYyBsb2FkUmVzKHBhdGg6IHN0cmluZywgdHlwZTogdHlwZW9mIGNjLkFzc2V0LGNhbGxiYWNrOmFueT1udWxsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgYnVuZGVsID0gXCJyZXNvdXJjZXNcIjtcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIk1IenBucENUUUtGbkVYMkZDQ0JHbUFwTUVleFhKXCIpO1xuICAgICAgICAgICAgbGV0IGFyciA9IHBhdGguc3BsaXQoXCI6XCIpXG4gICAgICAgICAgICBpZihhcnIubGVuZ3RoID09IDIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVuZGVsID0gYXJyWzBdO1xuICAgICAgICAgICAgICAgIHBhdGggPSBhcnJbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZXQgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGJ1bmRlbCkuZ2V0KHBhdGgsdHlwZSk7XG4gICAgICAgICAgICBpZihyZXQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwscmV0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGJ1bmRlbCkubG9hZChwYXRoLHR5cGUsKGVycixyZXQpPT57XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihwYXRoLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCxyZXQpO1xuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIyc3RNRlJcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZseUFuaW0odHlwZTpudW1iZXIgLCBzdGFydE5vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGVOYW1lOiBzdHJpbmcsIGNvdW50OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IGdldFBvaW50ID0gKHIsIG94LCBveSwgY291bnQpID0+IHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IFtdOyAvL+e7k+aenFxuICAgICAgICAgICAgdmFyIHJhZGlhbnMgPSAoTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnJvdW5kKDM2MCAvIGNvdW50KSwgLy/lvKfluqZcbiAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB4ID0gb3ggKyByICogTWF0aC5zaW4ocmFkaWFucyAqIGkpLFxuICAgICAgICAgICAgICAgICAgICB5ID0gb3kgKyByICogTWF0aC5jb3MocmFkaWFucyAqIGkpO1xuXG4gICAgICAgICAgICAgICAgcG9pbnQudW5zaGlmdChjYy52Mih4LCB5KSk7IC8v5Li65L+d5oyB5pWw5o2u6aG65pe26ZKIXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJmR2RKR1RrRlF0WkpURkY1cGhXekgzc1h3MlhcIik7XG4gICAgICAgIGxldCBjcmVhdGVOb2RlID0gKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gMCkgcmV0dXJuIFBvb2xNZ3IuSW5zdGFuY2UoKS5nZXQoXCJDb2luXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbm9kZUFycmF5ID0gW107XG4gICAgICAgIGlmKHN0YXJ0Tm9kZSAmJiBzdGFydE5vZGUucGFyZW50KXtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHN0YXJ0Tm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHN0YXJ0Tm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICBzdGFydCA9IGNjLmZpbmQoXCJDYW52YXNcIikuY29udmVydFRvTm9kZVNwYWNlQVIoc3RhcnQpO1xuICAgICAgICAgICAgdmFyIGFycmF5ID0gZ2V0UG9pbnQocmFkaXVzLCBzdGFydC54LCBzdGFydC55LCBjb3VudCk7XG4gICAgICAgICAgICBpZighYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygxKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZ29sZCA9IGNyZWF0ZU5vZGUodHlwZSk7XG4gICAgICAgICAgICAgICAgaWYoIWdvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soMSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnb2xkLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIilcbiAgICAgICAgICAgICAgICB2YXIgcmFuZFBvcyA9IGNjLnYyKGFycmF5W2ldLnggKyBVdGlscy5nZXRSYW5kb21JbnQoMCwgNTApLCBhcnJheVtpXS55ICsgVXRpbHMuZ2V0UmFuZG9tSW50KDAsIDUwKSk7XG4gICAgICAgICAgICAgICAgZ29sZC5zZXRQb3NpdGlvbihzdGFydCk7XG4gICAgICAgICAgICAgICAgbm9kZUFycmF5LnB1c2goeyBnb2xkLCByYW5kUG9zIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwibXprWmpcIik7XG4gICAgICAgIHZhciBub3RQbGF5ID0gZmFsc2U7XG4gICAgICAgIGxldCBzcmNOb2RlID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoXCJIYWxsU2NlbmVcIikuR2V0R2FtZU9iamVjdCh0YXJnZXROb2RlTmFtZSk7IDsvL0hhbGxTY2VuZS5JbnN0YW5jZS5HZXRHYW1lT2JqZWN0KHRhcmdldE5vZGVOYW1lKTtcbiAgICAgICAgbGV0IGRzdFBvcyA9IHNyY05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzcmNOb2RlLnBvc2l0aW9uKTsgXG4gICAgICAgIGRzdFBvcyA9IGNjLmZpbmQoXCJDYW52YXNcIikgLmNvbnZlcnRUb05vZGVTcGFjZUFSKGRzdFBvcylcbiAgICAgICAgdmFyIHRhcmdldEdvbGROb2RlID0gc3JjTm9kZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBub2RlQXJyYXlbaV0ucmFuZFBvcztcbiAgICAgICAgICAgIHZhciBub2RlID0gbm9kZUFycmF5W2ldLmdvbGQ7XG4gICAgICAgICAgICBub2RlQXJyYXlbaV0uZ29sZC5pZCA9IGk7XG4gICAgICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMiwgcG9zKSxcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoaSAqIDAuMDMpLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIGNjLnYyKGRzdFBvcy54LGRzdFBvcy55KSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub3RQbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRHb2xkTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0R29sZE5vZGUuc2V0U2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RQbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMiwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiUTNrM1d4MkVCaFlSS3JSXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RQbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0R29sZE5vZGUucnVuQWN0aW9uKHNlcSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobm9kZS5pZCA9PSBub2RlQXJyYXkubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIFBvb2xNZ3IuSW5zdGFuY2UoKS5wdXQobm9kZS5uYW1lLCBub2RlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oc2VxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5a6a54K55pWwXG4gICAgcHVibGljIHN0YXRpYyBmaXhGbG9hdCh2YWw6IG51bWJlciwgY291bnQ6IG51bWJlciA9IDIpIHtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiVHhDWEdpcHhYQmljRDJ3WU1BeHhXXCIpO1xuICAgICAgICB2YXIgYSA9IGNvdW50ICogMTAwXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbCAqIGEpIC8gYTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHBsYXlCcmVhdGgodGFyZ2V0OmNjLk5vZGUsc3NjYWxlID0gMSx0c2NhbGUgPSAxLjEyLGR1cmF0aW9uID0gMC44LGxvb3A6Ym9vbGVhbiA9IHRydWUpe1xuICAgICAgICB0YXJnZXQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGFyZ2V0LnNldFNjYWxlKHNzY2FsZSk7XG4gICAgICAgIGxldCBzZXEgPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oZHVyYXRpb24sIHRzY2FsZSwgdHNjYWxlKSxcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oZHVyYXRpb24sIHNzY2FsZSwgc3NjYWxlKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihsb29wKSB0aGlzLnBsYXlCcmVhdGgodGFyZ2V0KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGFyZ2V0LnJ1bkFjdGlvbihzZXEpO1xuICAgIH1cblxufTtcblxuXG4iXX0=