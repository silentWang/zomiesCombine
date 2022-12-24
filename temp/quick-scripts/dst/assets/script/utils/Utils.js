
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMsNkNBQXdDO0FBQ3hDLDhDQUF5QztBQUN6QywrQ0FBNkQ7QUFFN0QsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXZCO0lBQUE7SUFzVkEsQ0FBQztJQXJWVSxjQUFRLEdBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxNQUFzQixFQUFFLFFBQXlCO1FBQWpELHVCQUFBLEVBQUEsYUFBc0I7UUFBRSx5QkFBQSxFQUFBLGVBQXlCO1FBQy9FLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUM1QyxJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNsQixNQUFNLEVBQUUsQ0FBQztvQkFDVCxPQUFPO2lCQUNWO2dCQUVELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDaEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQzdCO2dCQUVELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxNQUFNLENBQUMs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QyxZQUFDO0NBdFZELEFBc1ZDLElBQUE7a0JBdFZvQixLQUFLO0FBc1Z6QixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hha2UgfSBmcm9tIFwiLi9TaGFrZVwiO1xyXG5pbXBvcnQgTnVtYmVyVXRpbHMgZnJvbSBcIi4vTnVtYmVyVXRpbHNcIjtcclxuaW1wb3J0IFBvb2xNZ3IgZnJvbSBcIi4uL21hbmFnZXIvUG9vbE1nclwiO1xyXG5pbXBvcnQgeyBzaGFyZV90aXRsZXMsIHNoYXJlX3VybHMgfSBmcm9tIFwiLi4vZ2FtZS9HYW1lQ29uc3RcIjtcclxuXHJcbmNvbnN0IHd4ID0gd2luZG93W1wid3hcIl0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XHJcbiAgICBzdGF0aWMgY3JlYXRlVUkoZmlsZXBhdGg6IHN0cmluZywgcGFyZW50OiBjYy5Ob2RlID0gbnVsbCwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGZpbGVwYXRoLCBjYy5QcmVmYWIsIChlcnIsIHJldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYmNENlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGZpbGVwYXRoLmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gZmlsZXBhdGguc3Vic3RyKGluZGV4ICsgMSwgZmlsZXBhdGgubGVuZ3RoIC0gaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLph43lpI1VSei3s+i/h1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRtcDogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJldCk7XHJcbiAgICAgICAgICAgICAgICB0bXAub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0bXAucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjAxKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcC5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgICAgICAgICAgdG1wLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodG1wKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodG1wKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tSW50KGxvd2VyLCB1cHBlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh1cHBlciAtIGxvd2VyKSkgKyBsb3dlcjtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb20obG93ZXIsIHVwcGVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqICh1cHBlciAtIGxvd2VyKSArIGxvd2VyO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFBvd051bShwKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDEwLCBwKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0TnVtYmVyKG51bTogbnVtYmVyLCBhZnRlcmRvdDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkhYN3RTNlwiKTtcclxuICAgICAgICBudW0gPSBNYXRoLmZsb29yKG51bSk7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlclV0aWxzLmdldExhcmdlU3RyaW5nKG51bSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFNlcnZlclRpbWUodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgVXRpbHMudGltZU9mZnNldCA9IHRpbWUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBjYy5sb2coXCJ0aW1lT2Zmc2V0OlwiLCBVdGlscy50aW1lT2Zmc2V0KVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZWVkUmFuZG9tSW50KGxvd2VyLCB1cHBlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLmdldFJhbmRvbUludChsb3dlciwgdXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdGltZU9mZnNldDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2VydmVyVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBVdGlscy50aW1lT2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hha2UoZHVyYXRpb246IG51bWJlciwgc3RyZW5ndGhfeDogbnVtYmVyLCBzdHJlbmd0aF95OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY2FtZXJhID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKTtcclxuICAgICAgICBjYW1lcmEueCA9IDA7XHJcbiAgICAgICAgY2FtZXJhLnkgPSAwO1xyXG4gICAgICAgIGNhbWVyYS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGNhbWVyYS5ydW5BY3Rpb24oU2hha2UuY3JlYXRlKGR1cmF0aW9uLCBzdHJlbmd0aF94LCBzdHJlbmd0aF95KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaGFyZXRpbWU6bnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2hhcmVjYWxsYmFjayA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIHd4U2hhcmUoY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIldzc0V5UWNwN0hScndcIik7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gVXRpbHMuZ2V0UmFuZG9tSW50KDAsIHNoYXJlX3VybHMubGVuZ3RoKVxyXG4gICAgICAgIHZhciBzaGFyZUltZ1VybCA9IHNoYXJlX3VybHNbaW5kZXhdXHJcbiAgICAgICAgdmFyIHNoYXJlVGl0bGUgPSBzaGFyZV90aXRsZXNbaW5kZXhdO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBVdGlscy5zaGFyZXRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogc2hhcmVUaXRsZSxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBzaGFyZUltZ1VybCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiUnJOSlNuR0VYYnRaU2hwMzQ3aTdGTjY3MjhyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLliIbkuqvlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJZXCIpO1xyXG4gICAgICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzaGFyZVRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBzaGFyZUltZ1VybFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZENsaWNrRXZlbnQobm9kZSwgdGFyZ2V0LCBjb21wb25lbnQsIGhhbmRsZXIsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBldmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGV2ZW50SGFuZGxlci50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICBldmVudEhhbmRsZXIuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgaWYgKGN1c3RvbUV2ZW50RGF0YSkgZXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGN1c3RvbUV2ZW50RGF0YTtcclxuXHJcbiAgICAgICAgdmFyIGNsaWNrRXZlbnRzID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cztcclxuICAgICAgICBpZiAoY2xpY2tFdmVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIUNDX0VESVRPUilcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLmjInpkq7lt7Lnu4/lrZjlnKjnu5HlrprvvIzot7Pov4foh6rliqjnu5HlrppcIiwgbm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlLm5hbWUsdGFyZ2V0Lm5hbWUsY29tcG9uZW50KVxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjRtd2RFV1dqbnJkUG53TXl3Qk53cEQ4bkNhRFwiKTtcclxuICAgICAgICBjbGlja0V2ZW50cy5wdXNoKGV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBjbkFZX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiSlI3Y2ZZSEpuWk5IbVFjM0dYYWpQaU1yQlwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VGltZVN0ckJ5UyhzZWNvbmQ6IG51bWJlcikge1xyXG4gICAgICAgIHNlY29uZCA9IE1hdGguZmxvb3Ioc2Vjb25kKTtcclxuICAgICAgICBpZiAoc2Vjb25kIDwgMCkgc2Vjb25kID0gMDtcclxuICAgICAgICB2YXIgZCA9IE1hdGguZmxvb3Ioc2Vjb25kIC8gMzYwMCAvIDI0KTtcclxuICAgICAgICBzZWNvbmQgLT0gZCAqIDM2MDAgKiAyNDtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3Ioc2Vjb25kIC8gMzYwMCk7XHJcbiAgICAgICAgc2Vjb25kIC09IGggKiAzNjAwO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmQgLyA2MCk7XHJcbiAgICAgICAgc2Vjb25kIC09IG0gKiA2MDtcclxuICAgICAgICB2YXIgZnJvbnQgPSBcIjAwXCI7XHJcbiAgICAgICAgaWYgKGggPiA5KSB7XHJcbiAgICAgICAgICAgIGZyb250ID0gXCJcIiArIGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZnJvbnQgPSBcIjBcIiArIGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtaWQgPSBcIjAwXCI7XHJcbiAgICAgICAgaWYgKG0gPiA5KSB7XHJcbiAgICAgICAgICAgIG1pZCA9IFwiXCIgKyBtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1pZCA9IFwiMFwiICsgbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJhY2sgPSBcIjAwXCI7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiS1pZcDJwTTN5ZnJkcEt0QUJTZEhpdG1iMzZ3blBcIik7XHJcbiAgICAgICAgaWYgKHNlY29uZCA+IDkpIHtcclxuICAgICAgICAgICAgYmFjayA9IFwiXCIgKyBzZWNvbmQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFjayA9IFwiMFwiICsgc2Vjb25kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGQgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkICsgXCLlpKlcIiArIGggKyBcIuaXtlwiICsgbSArIFwi5YiGXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJLaGZcIik7XHJcbiAgICAgICAgICAgIHZhciBsb25nVGltZSA9IGggPiAwO1xyXG4gICAgICAgICAgICBpZiAobG9uZ1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcm9udCArIFwiOlwiICsgbWlkIDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtaWQgKyBcIjpcIiArIGJhY2sgOy8vKyAn56eSJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEJ1bmRsZXIobmFtZTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUobmFtZSwoZXJyLHJldCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJldClcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgICBwcml2YXRlIHRTV0RfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCIzNmRZXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXRDb2luKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgbnVtID0gTWF0aC5mbG9vcihudW0pO1xyXG4gICAgICAgIHJldHVybiBOdW1iZXJVdGlscy5nZXRMYXJnZVN0cmluZyhudW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgd2VpZ2h0KHY6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJCdDRcIik7XHJcbiAgICAgICAgdmFyIG1Ub3RhbFdlaWdodCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIG1Ub3RhbFdlaWdodCArPSB2W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobVRvdGFsV2VpZ2h0IDw9IDApIHJldHVybiAtMTtcclxuICAgICAgICB2YXIgcmFuZG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIE51bWJlci5NQVhfVkFMVUUpICUgbVRvdGFsV2VpZ2h0O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAocmFuZG51bSA8IHZbaV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFuZG51bSAtPSB2W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkUmVzKHBhdGg6IHN0cmluZywgdHlwZTogdHlwZW9mIGNjLkFzc2V0LGNhbGxiYWNrOmFueT1udWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ1bmRlbCA9IFwicmVzb3VyY2VzXCI7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIk1IenBucENUUUtGbkVYMkZDQ0JHbUFwTUVleFhKXCIpO1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gcGF0aC5zcGxpdChcIjpcIilcclxuICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA9PSAyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidW5kZWwgPSBhcnJbMF07XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gYXJyWzFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcmV0ID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShidW5kZWwpLmdldChwYXRoLHR5cGUpO1xyXG4gICAgICAgICAgICBpZihyZXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwscmV0KTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShidW5kZWwpLmxvYWQocGF0aCx0eXBlLChlcnIscmV0KT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKHBhdGgsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiMnN0TUZSXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZseUFuaW0odHlwZTpudW1iZXIgLCBzdGFydE5vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGVOYW1lOiBzdHJpbmcsIGNvdW50OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgZ2V0UG9pbnQgPSAociwgb3gsIG95LCBjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcG9pbnQgPSBbXTsgLy/nu5PmnpxcclxuICAgICAgICAgICAgdmFyIHJhZGlhbnMgPSAoTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnJvdW5kKDM2MCAvIGNvdW50KSwgLy/lvKfluqZcclxuICAgICAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gb3ggKyByICogTWF0aC5zaW4ocmFkaWFucyAqIGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHkgPSBveSArIHIgKiBNYXRoLmNvcyhyYWRpYW5zICogaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9pbnQudW5zaGlmdChjYy52Mih4LCB5KSk7IC8v5Li65L+d5oyB5pWw5o2u6aG65pe26ZKIXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZkdkSkdUa0ZRdFpKVEZGNXBoV3pIM3NYdzJYXCIpO1xyXG4gICAgICAgIGxldCBjcmVhdGVOb2RlID0gKHR5cGUpID0+IHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAwKSByZXR1cm4gUG9vbE1nci5JbnN0YW5jZSgpLmdldChcIkNvaW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5vZGVBcnJheSA9IFtdO1xyXG4gICAgICAgIGlmKHN0YXJ0Tm9kZSAmJiBzdGFydE5vZGUucGFyZW50KXtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3RhcnROb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc3RhcnROb2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgc3RhcnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHN0YXJ0KTtcclxuICAgICAgICAgICAgdmFyIGFycmF5ID0gZ2V0UG9pbnQocmFkaXVzLCBzdGFydC54LCBzdGFydC55LCBjb3VudCk7XHJcbiAgICAgICAgICAgIGlmKCFhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soMSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ29sZCA9IGNyZWF0ZU5vZGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZighZ29sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKDEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ29sZC5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZFBvcyA9IGNjLnYyKGFycmF5W2ldLnggKyBVdGlscy5nZXRSYW5kb21JbnQoMCwgNTApLCBhcnJheVtpXS55ICsgVXRpbHMuZ2V0UmFuZG9tSW50KDAsIDUwKSk7XHJcbiAgICAgICAgICAgICAgICBnb2xkLnNldFBvc2l0aW9uKHN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIG5vZGVBcnJheS5wdXNoKHsgZ29sZCwgcmFuZFBvcyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwibXprWmpcIik7XHJcbiAgICAgICAgdmFyIG5vdFBsYXkgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc3JjTm9kZSA9IGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KFwiSGFsbFNjZW5lXCIpLkdldEdhbWVPYmplY3QodGFyZ2V0Tm9kZU5hbWUpOyA7Ly9IYWxsU2NlbmUuSW5zdGFuY2UuR2V0R2FtZU9iamVjdCh0YXJnZXROb2RlTmFtZSk7XHJcbiAgICAgICAgbGV0IGRzdFBvcyA9IHNyY05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzcmNOb2RlLnBvc2l0aW9uKTsgXHJcbiAgICAgICAgZHN0UG9zID0gY2MuZmluZChcIkNhbnZhc1wiKSAuY29udmVydFRvTm9kZVNwYWNlQVIoZHN0UG9zKVxyXG4gICAgICAgIHZhciB0YXJnZXRHb2xkTm9kZSA9IHNyY05vZGU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IG5vZGVBcnJheVtpXS5yYW5kUG9zO1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5vZGVBcnJheVtpXS5nb2xkO1xyXG4gICAgICAgICAgICBub2RlQXJyYXlbaV0uZ29sZC5pZCA9IGk7XHJcbiAgICAgICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjIsIHBvcyksXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoaSAqIDAuMDMpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSwgY2MudjIoZHN0UG9zLngsZHN0UG9zLnkpKSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub3RQbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEdvbGROb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEdvbGROb2RlLnNldFNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RQbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDIsIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlEzazNXeDJFQmhZUktyUlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0R29sZE5vZGUucnVuQWN0aW9uKHNlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUuaWQgPT0gbm9kZUFycmF5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBvb2xNZ3IuSW5zdGFuY2UoKS5wdXQobm9kZS5uYW1lLCBub2RlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lrprngrnmlbBcclxuICAgIHB1YmxpYyBzdGF0aWMgZml4RmxvYXQodmFsOiBudW1iZXIsIGNvdW50OiBudW1iZXIgPSAyKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiVHhDWEdpcHhYQmljRDJ3WU1BeHhXXCIpO1xyXG4gICAgICAgIHZhciBhID0gY291bnQgKiAxMDBcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwgKiBhKSAvIGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5QnJlYXRoKHRhcmdldDpjYy5Ob2RlLHNzY2FsZSA9IDEsdHNjYWxlID0gMS4xMixkdXJhdGlvbiA9IDAuOCxsb29wOmJvb2xlYW4gPSB0cnVlKXtcclxuICAgICAgICB0YXJnZXQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0YXJnZXQuc2V0U2NhbGUoc3NjYWxlKTtcclxuICAgICAgICBsZXQgc2VxID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oZHVyYXRpb24sIHRzY2FsZSwgdHNjYWxlKSxcclxuICAgICAgICAgICAgY2Muc2NhbGVUbyhkdXJhdGlvbiwgc3NjYWxlLCBzc2NhbGUpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihsb29wKSB0aGlzLnBsYXlCcmVhdGgodGFyZ2V0KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0LnJ1bkFjdGlvbihzZXEpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG4iXX0=