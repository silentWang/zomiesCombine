
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMsNkNBQXdDO0FBQ3hDLDhDQUF5QztBQUN6QywrQ0FBNkQ7QUFFN0QsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXZCO0lBQUE7SUF1VkEsQ0FBQztJQXRWVSxjQUFRLEdBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxNQUFzQixFQUFFLFFBQXlCO1FBQWpELHVCQUFBLEVBQUEsYUFBc0I7UUFBRSx5QkFBQSxFQUFBLGVBQXlCO1FBQy9FLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUM1QyxJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNsQixNQUFNLEVBQUUsQ0FBQztvQkFDVCxPQUFPO2lCQUNWO2dCQUVELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDaEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQzdCO2dCQUVELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxNQUFNLENBQUMs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R0FBVyxDQUFDLENBQUM7SUFhdkIsZUFBUyxHQUFVLENBQUMsQ0FBQztJQUNyQixtQkFBYSxHQUFHLElBQUksQ0FBQztJQThRdkMsWUFBQztDQXZWRCxBQXVWQyxJQUFBO2tCQXZWb0IsS0FBSztBQXVWekIsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWtlIH0gZnJvbSBcIi4vU2hha2VcIjtcclxuaW1wb3J0IE51bWJlclV0aWxzIGZyb20gXCIuL051bWJlclV0aWxzXCI7XHJcbmltcG9ydCBQb29sTWdyIGZyb20gXCIuLi9tYW5hZ2VyL1Bvb2xNZ3JcIjtcclxuaW1wb3J0IHsgc2hhcmVfdGl0bGVzLCBzaGFyZV91cmxzIH0gZnJvbSBcIi4uL2dhbWUvR2FtZUNvbnN0XCI7XHJcblxyXG5jb25zdCB3eCA9IHdpbmRvd1tcInd4XCJdIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xyXG4gICAgc3RhdGljIGNyZWF0ZVVJKGZpbGVwYXRoOiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSA9IG51bGwsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhmaWxlcGF0aCwgY2MuUHJlZmFiLCAoZXJyLCByZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImJjRDZcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBmaWxlcGF0aC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGZpbGVwYXRoLnN1YnN0cihpbmRleCArIDEsIGZpbGVwYXRoLmxlbmd0aCAtIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6YeN5aSNVUnot7Pov4dcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0bXA6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXQpO1xyXG4gICAgICAgICAgICAgICAgdG1wLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdG1wLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4wMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0bXAub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgICAgIHRtcC5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHRtcCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRtcCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUludChsb3dlciwgdXBwZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlcikpICsgbG93ZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tKGxvd2VyLCB1cHBlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlcikgKyBsb3dlcjtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQb3dOdW0ocCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdygxMCwgcCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdE51bWJlcihudW06IG51bWJlciwgYWZ0ZXJkb3Q6IG51bWJlciA9IDEpIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJIWDd0UzZcIik7XHJcbiAgICAgICAgbnVtID0gTWF0aC5mbG9vcihudW0pO1xyXG4gICAgICAgIHJldHVybiBOdW1iZXJVdGlscy5nZXRMYXJnZVN0cmluZyhudW0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTZXJ2ZXJUaW1lKHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIFV0aWxzLnRpbWVPZmZzZXQgPSB0aW1lIC0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgY2MubG9nKFwidGltZU9mZnNldDpcIiwgVXRpbHMudGltZU9mZnNldClcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VlZFJhbmRvbUludChsb3dlciwgdXBwZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5nZXRSYW5kb21JbnQobG93ZXIsIHVwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRpbWVPZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNlcnZlclRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgVXRpbHMudGltZU9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNoYWtlKGR1cmF0aW9uOiBudW1iZXIsIHN0cmVuZ3RoX3g6IG51bWJlciwgc3RyZW5ndGhfeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGNhbWVyYSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik7XHJcbiAgICAgICAgY2FtZXJhLnggPSAwO1xyXG4gICAgICAgIGNhbWVyYS55ID0gMDtcclxuICAgICAgICBjYW1lcmEuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYW1lcmEucnVuQWN0aW9uKFNoYWtlLmNyZWF0ZShkdXJhdGlvbiwgc3RyZW5ndGhfeCwgc3RyZW5ndGhfeSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hhcmV0aW1lOm51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNoYXJlY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyB3eFNoYXJlKGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJXc3NFeVFjcDdIUnJ3XCIpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IFV0aWxzLmdldFJhbmRvbUludCgwLCBzaGFyZV91cmxzLmxlbmd0aClcclxuICAgICAgICB2YXIgc2hhcmVJbWdVcmwgPSBzaGFyZV91cmxzW2luZGV4XVxyXG4gICAgICAgIHZhciBzaGFyZVRpdGxlID0gc2hhcmVfdGl0bGVzW2luZGV4XTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgVXRpbHMuc2hhcmV0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xyXG4gICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHNoYXJlVGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogc2hhcmVJbWdVcmwsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlJyTkpTbkdFWGJ0WlNocDM0N2k3Rk42NzI4clwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5YiG5Lqr5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiWVwiKTtcclxuICAgICAgICAgICAgVXRpbHMuc2hhcmVjYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogc2hhcmVUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogc2hhcmVJbWdVcmxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhZGRDbGlja0V2ZW50KG5vZGUsIHRhcmdldCwgY29tcG9uZW50LCBoYW5kbGVyLCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgZXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBldmVudEhhbmRsZXIudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIGV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIGlmIChjdXN0b21FdmVudERhdGEpIGV2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBjdXN0b21FdmVudERhdGE7XHJcblxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50cyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHM7XHJcbiAgICAgICAgaWYgKGNsaWNrRXZlbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKCFDQ19FRElUT1IpXHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5oyJ6ZKu5bey57uP5a2Y5Zyo57uR5a6a77yM6Lez6L+H6Ieq5Yqo57uR5a6aXCIsIG5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZS5uYW1lLHRhcmdldC5uYW1lLGNvbXBvbmVudClcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI0bXdkRVdXam5yZFBud015d0JOd3BEOG5DYURcIik7XHJcbiAgICAgICAgY2xpY2tFdmVudHMucHVzaChldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjc2RuZXNBWV94eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcImRzc2RnZXdzZGdmYUlPSk9HQWtvbWdER0ZNU09cIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFRpbWVTdHJCeVMoc2Vjb25kOiBudW1iZXIpIHtcclxuICAgICAgICBzZWNvbmQgPSBNYXRoLmZsb29yKHNlY29uZCk7XHJcbiAgICAgICAgaWYgKHNlY29uZCA8IDApIHNlY29uZCA9IDA7XHJcbiAgICAgICAgdmFyIGQgPSBNYXRoLmZsb29yKHNlY29uZCAvIDM2MDAgLyAyNCk7XHJcbiAgICAgICAgc2Vjb25kIC09IGQgKiAzNjAwICogMjQ7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKHNlY29uZCAvIDM2MDApO1xyXG4gICAgICAgIHNlY29uZCAtPSBoICogMzYwMDtcclxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3Ioc2Vjb25kIC8gNjApO1xyXG4gICAgICAgIHNlY29uZCAtPSBtICogNjA7XHJcbiAgICAgICAgdmFyIGZyb250ID0gXCIwMFwiO1xyXG4gICAgICAgIGlmIChoID4gOSkge1xyXG4gICAgICAgICAgICBmcm9udCA9IFwiXCIgKyBoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZyb250ID0gXCIwXCIgKyBoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWlkID0gXCIwMFwiO1xyXG4gICAgICAgIGlmIChtID4gOSkge1xyXG4gICAgICAgICAgICBtaWQgPSBcIlwiICsgbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtaWQgPSBcIjBcIiArIG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiYWNrID0gXCIwMFwiO1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIktaWXAycE0zeWZyZHBLdEFCU2RIaXRtYjM2d25QXCIpO1xyXG4gICAgICAgIGlmIChzZWNvbmQgPiA5KSB7XHJcbiAgICAgICAgICAgIGJhY2sgPSBcIlwiICsgc2Vjb25kO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhY2sgPSBcIjBcIiArIHNlY29uZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZCArIFwi5aSpXCIgKyBoICsgXCLml7ZcIiArIG0gKyBcIuWIhlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiS2hmXCIpO1xyXG4gICAgICAgICAgICB2YXIgbG9uZ1RpbWUgPSBoID4gMDtcclxuICAgICAgICAgICAgaWYgKGxvbmdUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbnQgKyBcIjpcIiArIG1pZCA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWlkICsgXCI6XCIgKyBiYWNrIDsvLysgJ+enkic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjR0VTREVYREFZX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiZHNzZGdld3NkZ2ZhSU9KT0dBa29tZ0RHRk1TT1wiKTsgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRCdW5kbGVyKG5hbWU6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKG5hbWUsKGVycixyZXQpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXQpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSB0U1dEX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiMzZkWVwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0Q29pbihudW06IG51bWJlcikge1xyXG4gICAgICAgIG51bSA9IE1hdGguZmxvb3IobnVtKTtcclxuICAgICAgICByZXR1cm4gTnVtYmVyVXRpbHMuZ2V0TGFyZ2VTdHJpbmcobnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHdlaWdodCh2OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQnQ0XCIpO1xyXG4gICAgICAgIHZhciBtVG90YWxXZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBtVG90YWxXZWlnaHQgKz0gdltpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1Ub3RhbFdlaWdodCA8PSAwKSByZXR1cm4gLTE7XHJcbiAgICAgICAgdmFyIHJhbmRudW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1ZBTFVFKSAlIG1Ub3RhbFdlaWdodDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHYubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHJhbmRudW0gPCB2W2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJhbmRudW0gLT0gdltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFJlcyhwYXRoOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCxjYWxsYmFjazphbnk9bnVsbCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidW5kZWwgPSBcInJlc291cmNlc1wiO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJNSHpwbnBDVFFLRm5FWDJGQ0NCR21BcE1FZXhYSlwiKTtcclxuICAgICAgICAgICAgbGV0IGFyciA9IHBhdGguc3BsaXQoXCI6XCIpXHJcbiAgICAgICAgICAgIGlmKGFyci5sZW5ndGggPT0gMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVuZGVsID0gYXJyWzBdO1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGFyclsxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHJldCA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYnVuZGVsKS5nZXQocGF0aCx0eXBlKTtcclxuICAgICAgICAgICAgaWYocmV0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLHJldCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYnVuZGVsKS5sb2FkKHBhdGgsdHlwZSwoZXJyLHJldCk9PntcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihwYXRoLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycixudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCxyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjJzdE1GUlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmbHlBbmltKHR5cGU6bnVtYmVyICwgc3RhcnROb2RlOiBjYy5Ob2RlLCB0YXJnZXROb2RlTmFtZTogc3RyaW5nLCBjb3VudDogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGdldFBvaW50ID0gKHIsIG94LCBveSwgY291bnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvaW50ID0gW107IC8v57uT5p6cXHJcbiAgICAgICAgICAgIHZhciByYWRpYW5zID0gKE1hdGguUEkgLyAxODApICogTWF0aC5yb3VuZCgzNjAgLyBjb3VudCksIC8v5byn5bqmXHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IG94ICsgciAqIE1hdGguc2luKHJhZGlhbnMgKiBpKSxcclxuICAgICAgICAgICAgICAgICAgICB5ID0gb3kgKyByICogTWF0aC5jb3MocmFkaWFucyAqIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvaW50LnVuc2hpZnQoY2MudjIoeCwgeSkpOyAvL+S4uuS/neaMgeaVsOaNrumhuuaXtumSiFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwb2ludDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImZHZEpHVGtGUXRaSlRGRjVwaFd6SDNzWHcyWFwiKTtcclxuICAgICAgICBsZXQgY3JlYXRlTm9kZSA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gMCkgcmV0dXJuIFBvb2xNZ3IuSW5zdGFuY2UoKS5nZXQoXCJDb2luXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBub2RlQXJyYXkgPSBbXTtcclxuICAgICAgICBpZihzdGFydE5vZGUgJiYgc3RhcnROb2RlLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHN0YXJ0Tm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHN0YXJ0Tm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gY2MuZmluZChcIkNhbnZhc1wiKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydCk7XHJcbiAgICAgICAgICAgIHZhciBhcnJheSA9IGdldFBvaW50KHJhZGl1cywgc3RhcnQueCwgc3RhcnQueSwgY291bnQpO1xyXG4gICAgICAgICAgICBpZighYXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdvbGQgPSBjcmVhdGVOb2RlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIWdvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygxKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdvbGQucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRQb3MgPSBjYy52MihhcnJheVtpXS54ICsgVXRpbHMuZ2V0UmFuZG9tSW50KDAsIDUwKSwgYXJyYXlbaV0ueSArIFV0aWxzLmdldFJhbmRvbUludCgwLCA1MCkpO1xyXG4gICAgICAgICAgICAgICAgZ29sZC5zZXRQb3NpdGlvbihzdGFydCk7XHJcbiAgICAgICAgICAgICAgICBub2RlQXJyYXkucHVzaCh7IGdvbGQsIHJhbmRQb3MgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIm16a1pqXCIpO1xyXG4gICAgICAgIHZhciBub3RQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNyY05vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIkhhbGxTY2VuZVwiKS5HZXRHYW1lT2JqZWN0KHRhcmdldE5vZGVOYW1lKTsgOy8vSGFsbFNjZW5lLkluc3RhbmNlLkdldEdhbWVPYmplY3QodGFyZ2V0Tm9kZU5hbWUpO1xyXG4gICAgICAgIGxldCBkc3RQb3MgPSBzcmNOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc3JjTm9kZS5wb3NpdGlvbik7IFxyXG4gICAgICAgIGRzdFBvcyA9IGNjLmZpbmQoXCJDYW52YXNcIikgLmNvbnZlcnRUb05vZGVTcGFjZUFSKGRzdFBvcylcclxuICAgICAgICB2YXIgdGFyZ2V0R29sZE5vZGUgPSBzcmNOb2RlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBub2RlQXJyYXlbaV0ucmFuZFBvcztcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBub2RlQXJyYXlbaV0uZ29sZDtcclxuICAgICAgICAgICAgbm9kZUFycmF5W2ldLmdvbGQuaWQgPSBpO1xyXG4gICAgICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCBwb3MpLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKGkgKiAwLjAzKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIGNjLnYyKGRzdFBvcy54LGRzdFBvcy55KSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbm90UGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRHb2xkTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRHb2xkTm9kZS5zZXRTY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90UGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAyLCAyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJRM2szV3gyRUJoWVJLclJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90UGxheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEdvbGROb2RlLnJ1bkFjdGlvbihzZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhub2RlLmlkID09IG5vZGVBcnJheS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBQb29sTWdyLkluc3RhbmNlKCkucHV0KG5vZGUubmFtZSwgbm9kZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKHNlcSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5a6a54K55pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpeEZsb2F0KHZhbDogbnVtYmVyLCBjb3VudDogbnVtYmVyID0gMikge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlR4Q1hHaXB4WEJpY0Qyd1lNQXh4V1wiKTtcclxuICAgICAgICB2YXIgYSA9IGNvdW50ICogMTAwXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsICogYSkgLyBhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxheUJyZWF0aCh0YXJnZXQ6Y2MuTm9kZSxzc2NhbGUgPSAxLHRzY2FsZSA9IDEuMTIsZHVyYXRpb24gPSAwLjgsbG9vcDpib29sZWFuID0gdHJ1ZSl7XHJcbiAgICAgICAgdGFyZ2V0LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGFyZ2V0LnNldFNjYWxlKHNzY2FsZSk7XHJcbiAgICAgICAgbGV0IHNlcSA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKGR1cmF0aW9uLCB0c2NhbGUsIHRzY2FsZSksXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oZHVyYXRpb24sIHNzY2FsZSwgc3NjYWxlKSxcclxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYobG9vcCkgdGhpcy5wbGF5QnJlYXRoKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldC5ydW5BY3Rpb24oc2VxKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuIl19