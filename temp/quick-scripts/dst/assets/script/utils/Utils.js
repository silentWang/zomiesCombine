
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
    Utils.prototype.cnAY_xxxx_fun = function () { console.log("JR7cfYHJnZNHmQc3GXajPiMrB"); };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMsNkNBQXdDO0FBQ3hDLDhDQUF5QztBQUN6QywrQ0FBNkQ7QUFFN0QsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXZCO0lBQUE7SUFnVkEsQ0FBQztJQS9VVSxjQUFRLEdBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxNQUFzQixFQUFFLFFBQXlCO1FBQWpELHVCQUFBLEVBQUEsYUFBc0I7UUFBRSx5QkFBQSxFQUFBLGVBQXlCO1FBQy9FLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUM1QyxJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNsQixNQUFNLEVBQUUsQ0FBQztvQkFDVCxPQUFPO2lCQUNWO2dCQUVELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDaEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQzdCO2dCQUVELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxNQUFNLENBQUMs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dCI6WyJpbXBvcnQgeyBTaGFrZSB9IGZyb20gXCIuL1NoYWtlXCI7XHJcbmltcG9ydCBOdW1iZXJVdGlscyBmcm9tIFwiLi9OdW1iZXJVdGlsc1wiO1xyXG5pbXBvcnQgUG9vbE1nciBmcm9tIFwiLi4vbWFuYWdlci9Qb29sTWdyXCI7XHJcbmltcG9ydCB7IHNoYXJlX3RpdGxlcywgc2hhcmVfdXJscyB9IGZyb20gXCIuLi9nYW1lL0dhbWVDb25zdFwiO1xyXG5cclxuY29uc3Qgd3ggPSB3aW5kb3dbXCJ3eFwiXSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcclxuICAgIHN0YXRpYyBjcmVhdGVVSShmaWxlcGF0aDogc3RyaW5nLCBwYXJlbnQ6IGNjLk5vZGUgPSBudWxsLCBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoZmlsZXBhdGgsIGNjLlByZWZhYiwgKGVyciwgcmV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJiY0Q2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZmlsZXBhdGgubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBmaWxlcGF0aC5zdWJzdHIoaW5kZXggKyAxLCBmaWxlcGF0aC5sZW5ndGggLSBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmdldENvbXBvbmVudEluQ2hpbGRyZW4obmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumHjeWkjVVJ6Lez6L+HXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocmV0KTtcclxuICAgICAgICAgICAgICAgIHRtcC5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIHRtcC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMDEpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICB0bXAucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh0bXApO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0bXApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21JbnQobG93ZXIsIHVwcGVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIpKSArIGxvd2VyO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbShsb3dlciwgdXBwZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIpICsgbG93ZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UG93TnVtKHApIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMTAsIHApO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXROdW1iZXIobnVtOiBudW1iZXIsIGFmdGVyZG90OiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiSFg3dFM2XCIpO1xyXG4gICAgICAgIG51bSA9IE1hdGguZmxvb3IobnVtKTtcclxuICAgICAgICByZXR1cm4gTnVtYmVyVXRpbHMuZ2V0TGFyZ2VTdHJpbmcobnVtKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2VydmVyVGltZSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICBVdGlscy50aW1lT2Zmc2V0ID0gdGltZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGNjLmxvZyhcInRpbWVPZmZzZXQ6XCIsIFV0aWxzLnRpbWVPZmZzZXQpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNlZWRSYW5kb21JbnQobG93ZXIsIHVwcGVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuZ2V0UmFuZG9tSW50KGxvd2VyLCB1cHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0aW1lT2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTZXJ2ZXJUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIFV0aWxzLnRpbWVPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTaGFrZShkdXJhdGlvbjogbnVtYmVyLCBzdHJlbmd0aF94OiBudW1iZXIsIHN0cmVuZ3RoX3k6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpO1xyXG4gICAgICAgIGNhbWVyYS54ID0gMDtcclxuICAgICAgICBjYW1lcmEueSA9IDA7XHJcbiAgICAgICAgY2FtZXJhLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2FtZXJhLnJ1bkFjdGlvbihTaGFrZS5jcmVhdGUoZHVyYXRpb24sIHN0cmVuZ3RoX3gsIHN0cmVuZ3RoX3kpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNoYXJldGltZTpudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBzaGFyZWNhbGxiYWNrID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgd3hTaGFyZShjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiV3NzRXlRY3A3SFJyd1wiKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBVdGlscy5nZXRSYW5kb21JbnQoMCwgc2hhcmVfdXJscy5sZW5ndGgpXHJcbiAgICAgICAgdmFyIHNoYXJlSW1nVXJsID0gc2hhcmVfdXJsc1tpbmRleF1cclxuICAgICAgICB2YXIgc2hhcmVUaXRsZSA9IHNoYXJlX3RpdGxlc1tpbmRleF07XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFV0aWxzLnNoYXJldGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzaGFyZVRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHNoYXJlSW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJSck5KU25HRVhidFpTaHAzNDdpN0ZONjcyOHJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWIhuS6q+Wksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIllcIik7XHJcbiAgICAgICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNoYXJlVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHNoYXJlSW1nVXJsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkQ2xpY2tFdmVudChub2RlLCB0YXJnZXQsIGNvbXBvbmVudCwgaGFuZGxlciwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICBldmVudEhhbmRsZXIuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIGV2ZW50SGFuZGxlci5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICBpZiAoY3VzdG9tRXZlbnREYXRhKSBldmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gY3VzdG9tRXZlbnREYXRhO1xyXG5cclxuICAgICAgICB2YXIgY2xpY2tFdmVudHMgPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzO1xyXG4gICAgICAgIGlmIChjbGlja0V2ZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICghQ0NfRURJVE9SKVxyXG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuaMiemSruW3sue7j+WtmOWcqOe7keWumu+8jOi3s+i/h+iHquWKqOe7keWumlwiLCBub2RlLm5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUubmFtZSx0YXJnZXQubmFtZSxjb21wb25lbnQpXHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiNG13ZEVXV2pucmRQbndNeXdCTndwRDhuQ2FEXCIpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRzLnB1c2goZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuICAgICAgICBwcml2YXRlIGNuQVlfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJKUjdjZllISm5aTkhtUWMzR1hhalBpTXJCXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRUaW1lU3RyQnlTKHNlY29uZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQpO1xyXG4gICAgICAgIGlmIChzZWNvbmQgPCAwKSBzZWNvbmQgPSAwO1xyXG4gICAgICAgIHZhciBkID0gTWF0aC5mbG9vcihzZWNvbmQgLyAzNjAwIC8gMjQpO1xyXG4gICAgICAgIHNlY29uZCAtPSBkICogMzYwMCAqIDI0O1xyXG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcihzZWNvbmQgLyAzNjAwKTtcclxuICAgICAgICBzZWNvbmQgLT0gaCAqIDM2MDA7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKHNlY29uZCAvIDYwKTtcclxuICAgICAgICBzZWNvbmQgLT0gbSAqIDYwO1xyXG4gICAgICAgIHZhciBmcm9udCA9IFwiMDBcIjtcclxuICAgICAgICBpZiAoaCA+IDkpIHtcclxuICAgICAgICAgICAgZnJvbnQgPSBcIlwiICsgaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmcm9udCA9IFwiMFwiICsgaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1pZCA9IFwiMDBcIjtcclxuICAgICAgICBpZiAobSA+IDkpIHtcclxuICAgICAgICAgICAgbWlkID0gXCJcIiArIG07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWlkID0gXCIwXCIgKyBtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYmFjayA9IFwiMDBcIjtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJLWllwMnBNM3lmcmRwS3RBQlNkSGl0bWIzNnduUFwiKTtcclxuICAgICAgICBpZiAoc2Vjb25kID4gOSkge1xyXG4gICAgICAgICAgICBiYWNrID0gXCJcIiArIHNlY29uZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWNrID0gXCIwXCIgKyBzZWNvbmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGQgKyBcIuWkqVwiICsgaCArIFwi5pe2XCIgKyBtICsgXCLliIZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIktoZlwiKTtcclxuICAgICAgICAgICAgdmFyIGxvbmdUaW1lID0gaCA+IDA7XHJcbiAgICAgICAgICAgIGlmIChsb25nVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb250ICsgXCI6XCIgKyBtaWQgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pZCArIFwiOlwiICsgYmFjayA7Ly8rICfnp5InO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkQnVuZGxlcihuYW1lOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShuYW1lLChlcnIscmV0KT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmV0KVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgICAgIHByaXZhdGUgdFNXRF94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIjM2ZFlcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdENvaW4obnVtOiBudW1iZXIpIHtcclxuICAgICAgICBudW0gPSBNYXRoLmZsb29yKG51bSk7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlclV0aWxzLmdldExhcmdlU3RyaW5nKG51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB3ZWlnaHQodjogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkJ0NFwiKTtcclxuICAgICAgICB2YXIgbVRvdGFsV2VpZ2h0ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHYubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbVRvdGFsV2VpZ2h0ICs9IHZbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtVG90YWxXZWlnaHQgPD0gMCkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHZhciByYW5kbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9WQUxVRSkgJSBtVG90YWxXZWlnaHQ7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChyYW5kbnVtIDwgdltpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5kbnVtIC09IHZbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRSZXMocGF0aDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsY2FsbGJhY2s6YW55PW51bGwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnVuZGVsID0gXCJyZXNvdXJjZXNcIjtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiTUh6cG5wQ1RRS0ZuRVgyRkNDQkdtQXBNRWV4WEpcIik7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBwYXRoLnNwbGl0KFwiOlwiKVxyXG4gICAgICAgICAgICBpZihhcnIubGVuZ3RoID09IDIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1bmRlbCA9IGFyclswXTtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBhcnJbMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCByZXQgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGJ1bmRlbCkuZ2V0KHBhdGgsdHlwZSk7XHJcbiAgICAgICAgICAgIGlmKHJldClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCxyZXQpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGJ1bmRlbCkubG9hZChwYXRoLHR5cGUsKGVycixyZXQpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IocGF0aCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwscmV0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIyc3RNRlJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZmx5QW5pbSh0eXBlOm51bWJlciAsIHN0YXJ0Tm9kZTogY2MuTm9kZSwgdGFyZ2V0Tm9kZU5hbWU6IHN0cmluZywgY291bnQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBnZXRQb2ludCA9IChyLCBveCwgb3ksIGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBwb2ludCA9IFtdOyAvL+e7k+aenFxyXG4gICAgICAgICAgICB2YXIgcmFkaWFucyA9IChNYXRoLlBJIC8gMTgwKSAqIE1hdGgucm91bmQoMzYwIC8gY291bnQpLCAvL+W8p+W6plxyXG4gICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBveCArIHIgKiBNYXRoLnNpbihyYWRpYW5zICogaSksXHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IG95ICsgciAqIE1hdGguY29zKHJhZGlhbnMgKiBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb2ludC51bnNoaWZ0KGNjLnYyKHgsIHkpKTsgLy/kuLrkv53mjIHmlbDmja7pobrml7bpkohcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcG9pbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJmR2RKR1RrRlF0WkpURkY1cGhXekgzc1h3MlhcIik7XHJcbiAgICAgICAgbGV0IGNyZWF0ZU5vZGUgPSAodHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih0eXBlID09IDApIHJldHVybiBQb29sTWdyLkluc3RhbmNlKCkuZ2V0KFwiQ29pblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbm9kZUFycmF5ID0gW107XHJcbiAgICAgICAgaWYoc3RhcnROb2RlLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHN0YXJ0Tm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHN0YXJ0Tm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gY2MuZmluZChcIkNhbnZhc1wiKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydCk7XHJcbiAgICAgICAgICAgIHZhciBhcnJheSA9IGdldFBvaW50KHJhZGl1cywgc3RhcnQueCwgc3RhcnQueSwgY291bnQpO1xyXG4gICAgICAgICAgICBpZighYXJyYXkpIHJldHVybjtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdvbGQgPSBjcmVhdGVOb2RlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIWdvbGQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGdvbGQucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRQb3MgPSBjYy52MihhcnJheVtpXS54ICsgVXRpbHMuZ2V0UmFuZG9tSW50KDAsIDUwKSwgYXJyYXlbaV0ueSArIFV0aWxzLmdldFJhbmRvbUludCgwLCA1MCkpO1xyXG4gICAgICAgICAgICAgICAgZ29sZC5zZXRQb3NpdGlvbihzdGFydCk7XHJcbiAgICAgICAgICAgICAgICBub2RlQXJyYXkucHVzaCh7IGdvbGQsIHJhbmRQb3MgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIm16a1pqXCIpO1xyXG4gICAgICAgIHZhciBub3RQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNyY05vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIkhhbGxTY2VuZVwiKS5HZXRHYW1lT2JqZWN0KHRhcmdldE5vZGVOYW1lKTsgOy8vSGFsbFNjZW5lLkluc3RhbmNlLkdldEdhbWVPYmplY3QodGFyZ2V0Tm9kZU5hbWUpO1xyXG4gICAgICAgIGxldCBkc3RQb3MgPSBzcmNOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc3JjTm9kZS5wb3NpdGlvbik7IFxyXG4gICAgICAgIGRzdFBvcyA9IGNjLmZpbmQoXCJDYW52YXNcIikgLmNvbnZlcnRUb05vZGVTcGFjZUFSKGRzdFBvcylcclxuICAgICAgICB2YXIgdGFyZ2V0R29sZE5vZGUgPSBzcmNOb2RlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBub2RlQXJyYXlbaV0ucmFuZFBvcztcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBub2RlQXJyYXlbaV0uZ29sZDtcclxuICAgICAgICAgICAgbm9kZUFycmF5W2ldLmdvbGQuaWQgPSBpO1xyXG4gICAgICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCBwb3MpLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKGkgKiAwLjAzKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIGNjLnYyKGRzdFBvcy54LGRzdFBvcy55KSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbm90UGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRHb2xkTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRHb2xkTm9kZS5zZXRTY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90UGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAyLCAyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJRM2szV3gyRUJoWVJLclJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90UGxheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEdvbGROb2RlLnJ1bkFjdGlvbihzZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhub2RlLmlkID09IG5vZGVBcnJheS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBQb29sTWdyLkluc3RhbmNlKCkucHV0KG5vZGUubmFtZSwgbm9kZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKHNlcSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5a6a54K55pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpeEZsb2F0KHZhbDogbnVtYmVyLCBjb3VudDogbnVtYmVyID0gMikge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlR4Q1hHaXB4WEJpY0Qyd1lNQXh4V1wiKTtcclxuICAgICAgICB2YXIgYSA9IGNvdW50ICogMTAwXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsICogYSkgLyBhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxheUJyZWF0aCh0YXJnZXQ6Y2MuTm9kZSxzc2NhbGUgPSAxLHRzY2FsZSA9IDEuMTIsZHVyYXRpb24gPSAwLjgsbG9vcDpib29sZWFuID0gdHJ1ZSl7XHJcbiAgICAgICAgdGFyZ2V0LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGFyZ2V0LnNldFNjYWxlKHNzY2FsZSk7XHJcbiAgICAgICAgbGV0IHNlcSA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKGR1cmF0aW9uLCB0c2NhbGUsIHRzY2FsZSksXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oZHVyYXRpb24sIHNzY2FsZSwgc3NjYWxlKSxcclxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYobG9vcCkgdGhpcy5wbGF5QnJlYXRoKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldC5ydW5BY3Rpb24oc2VxKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuIl19