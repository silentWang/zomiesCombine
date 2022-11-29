
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
        target.runAction(seq);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLDhDQUF5QztBQUN6QywrQ0FBNkQ7QUFFN0QsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXZCO0lBQUE7SUFzVkEsQ0FBQztJQXJWVSxjQUFRLEdBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxNQUFzQixFQUFFLFFBQXlCO1FBQWpELHVCQUFBLEVBQUEsYUFBc0I7UUFBRSx5QkFBQSxFQUFBLGVBQXlCO1FBQy9FLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUM1QyxJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNsQixNQUFNLEVBQUUsQ0FBQztvQkFDVCxPQUFPO2lCQUNWO2dCQUVELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDaEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQzdCO2dCQUVELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDckIsT0FBTTtpQkFDVDtn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QUEsRUFBQSxXQUFtQjtRQUMvRixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUNqQixFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQ3BDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFDcEMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLElBQUcsSUFBSTtnQkFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFDRixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUF6UmEsZ0JBQVUsR0FBVyxDQUFDLENBQUM7SUFnQ3ZCLGVBQVMsR0FBVSxDQUFDLENBQUM7SUFDckIsbUJBQWEsR0FBRyxJQUFJLENBQUM7SUEwUHZDLFlBQUM7Q0F0VkQsQUFzVkMsSUFBQTtrQkF0Vm9CLEtBQUs7QUFzVnpCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFrZSB9IGZyb20gXCIuL1NoYWtlXCI7XHJcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSBcIi4vQmlnTnVtYmVyXCI7XHJcbmltcG9ydCBQb29sTWdyIGZyb20gXCIuLi9tYW5hZ2VyL1Bvb2xNZ3JcIjtcclxuaW1wb3J0IHsgc2hhcmVfdGl0bGVzLCBzaGFyZV91cmxzIH0gZnJvbSBcIi4uL2dhbWUvR2FtZUNvbnN0XCI7XHJcblxyXG5jb25zdCB3eCA9IHdpbmRvd1tcInd4XCJdIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xyXG4gICAgc3RhdGljIGNyZWF0ZVVJKGZpbGVwYXRoOiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSA9IG51bGwsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhmaWxlcGF0aCwgY2MuUHJlZmFiLCAoZXJyLCByZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGZpbGVwYXRoLmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gZmlsZXBhdGguc3Vic3RyKGluZGV4ICsgMSwgZmlsZXBhdGgubGVuZ3RoIC0gaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLph43lpI1VSei3s+i/h1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRtcDogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJldCk7XHJcbiAgICAgICAgICAgICAgICB0bXAub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0bXAucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjAxKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcC5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgICAgICAgICAgdG1wLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodG1wKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodG1wKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb20obG93ZXIsIHVwcGVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqICh1cHBlciAtIGxvd2VyKSArIGxvd2VyO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUludChsb3dlciwgdXBwZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlcikpICsgbG93ZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VlZFJhbmRvbUludChsb3dlciwgdXBwZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5nZXRSYW5kb21JbnQobG93ZXIsIHVwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdE51bWJlcihudW06IG51bWJlciwgYWZ0ZXJkb3Q6IG51bWJlciA9IDEpIHtcclxuICAgICAgICBudW0gPSBNYXRoLmZsb29yKG51bSk7XHJcbiAgICAgICAgcmV0dXJuIEJpZ051bWJlci5nZXRMYXJnZVN0cmluZyhudW0pO1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UG93TnVtKHApIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMTAsIHApO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFNlcnZlclRpbWUodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgVXRpbHMudGltZU9mZnNldCA9IHRpbWUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBjYy5sb2coXCJ0aW1lT2Zmc2V0OlwiLCBVdGlscy50aW1lT2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdGltZU9mZnNldDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2VydmVyVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBVdGlscy50aW1lT2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hha2UoZHVyYXRpb246IG51bWJlciwgc3RyZW5ndGhfeDogbnVtYmVyLCBzdHJlbmd0aF95OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY2FtZXJhID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKTtcclxuICAgICAgICBjYW1lcmEueCA9IDA7XHJcbiAgICAgICAgY2FtZXJhLnkgPSAwO1xyXG4gICAgICAgIGNhbWVyYS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGNhbWVyYS5ydW5BY3Rpb24oU2hha2UuY3JlYXRlKGR1cmF0aW9uLCBzdHJlbmd0aF94LCBzdHJlbmd0aF95KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhZGRDbGlja0V2ZW50KG5vZGUsIHRhcmdldCwgY29tcG9uZW50LCBoYW5kbGVyLCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgZXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBldmVudEhhbmRsZXIudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIGV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIGlmIChjdXN0b21FdmVudERhdGEpIGV2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBjdXN0b21FdmVudERhdGE7XHJcblxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50cyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHM7XHJcbiAgICAgICAgaWYgKGNsaWNrRXZlbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKCFDQ19FRElUT1IpXHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5oyJ6ZKu5bey57uP5a2Y5Zyo57uR5a6a77yM6Lez6L+H6Ieq5Yqo57uR5a6aXCIsIG5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZS5uYW1lLHRhcmdldC5uYW1lLGNvbXBvbmVudClcclxuICAgICAgICBjbGlja0V2ZW50cy5wdXNoKGV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNoYXJldGltZTpudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBzaGFyZWNhbGxiYWNrID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgd3hTaGFyZShjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gVXRpbHMuZ2V0UmFuZG9tSW50KDAsIHNoYXJlX3VybHMubGVuZ3RoKVxyXG4gICAgICAgIHZhciBzaGFyZUltZ1VybCA9IHNoYXJlX3VybHNbaW5kZXhdXHJcbiAgICAgICAgdmFyIHNoYXJlVGl0bGUgPSBzaGFyZV90aXRsZXNbaW5kZXhdO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBVdGlscy5zaGFyZXRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogc2hhcmVUaXRsZSxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBzaGFyZUltZ1VybCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuS6q+Wksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNoYXJlVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHNoYXJlSW1nVXJsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRUaW1lU3RyQnlTKHNlY29uZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQpO1xyXG4gICAgICAgIGlmIChzZWNvbmQgPCAwKSBzZWNvbmQgPSAwO1xyXG4gICAgICAgIHZhciBkID0gTWF0aC5mbG9vcihzZWNvbmQgLyAzNjAwIC8gMjQpO1xyXG4gICAgICAgIHNlY29uZCAtPSBkICogMzYwMCAqIDI0O1xyXG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcihzZWNvbmQgLyAzNjAwKTtcclxuICAgICAgICBzZWNvbmQgLT0gaCAqIDM2MDA7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKHNlY29uZCAvIDYwKTtcclxuICAgICAgICBzZWNvbmQgLT0gbSAqIDYwO1xyXG4gICAgICAgIHZhciBmcm9udCA9IFwiMDBcIjtcclxuICAgICAgICBpZiAoaCA+IDkpIHtcclxuICAgICAgICAgICAgZnJvbnQgPSBcIlwiICsgaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmcm9udCA9IFwiMFwiICsgaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1pZCA9IFwiMDBcIjtcclxuICAgICAgICBpZiAobSA+IDkpIHtcclxuICAgICAgICAgICAgbWlkID0gXCJcIiArIG07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWlkID0gXCIwXCIgKyBtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYmFjayA9IFwiMDBcIjtcclxuICAgICAgICBpZiAoc2Vjb25kID4gOSkge1xyXG4gICAgICAgICAgICBiYWNrID0gXCJcIiArIHNlY29uZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWNrID0gXCIwXCIgKyBzZWNvbmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGQgKyBcIuWkqVwiICsgaCArIFwi5pe2XCIgKyBtICsgXCLliIZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBsb25nVGltZSA9IGggPiAwO1xyXG4gICAgICAgICAgICBpZiAobG9uZ1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcm9udCArIFwiOlwiICsgbWlkIDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtaWQgKyBcIjpcIiArIGJhY2sgOy8vKyAn56eSJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdENvaW4obnVtOiBudW1iZXIpIHtcclxuICAgICAgICBudW0gPSBNYXRoLmZsb29yKG51bSk7XHJcbiAgICAgICAgcmV0dXJuIEJpZ051bWJlci5nZXRMYXJnZVN0cmluZyhudW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgbG9hZFJlcyhwYXRoOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCkge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIHR5cGUsIChlcnIsIHJldCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNjLmVycm9yKHBhdGgsIGVycik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkQnVuZGxlcihuYW1lOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShuYW1lLChlcnIscmV0KT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmV0KVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFJlcyhwYXRoOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCxjYWxsYmFjazphbnk9bnVsbCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidW5kZWwgPSBcInJlc291cmNlc1wiO1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gcGF0aC5zcGxpdChcIjpcIilcclxuICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA9PSAyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidW5kZWwgPSBhcnJbMF07XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gYXJyWzFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcmV0ID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShidW5kZWwpLmdldChwYXRoLHR5cGUpO1xyXG4gICAgICAgICAgICBpZihyZXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwscmV0KTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYnVuZGVsLHBhdGgpO1xyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGJ1bmRlbCkubG9hZChwYXRoLHR5cGUsKGVycixyZXQpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IocGF0aCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwscmV0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB3ZWlnaHQodjogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBtVG90YWxXZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBtVG90YWxXZWlnaHQgKz0gdltpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1Ub3RhbFdlaWdodCA8PSAwKSByZXR1cm4gLTE7XHJcbiAgICAgICAgdmFyIHJhbmRudW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1ZBTFVFKSAlIG1Ub3RhbFdlaWdodDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHYubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHJhbmRudW0gPCB2W2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJhbmRudW0gLT0gdltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v5a6a54K55pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpeEZsb2F0KHZhbDogbnVtYmVyLCBjb3VudDogbnVtYmVyID0gMikge1xyXG4gICAgICAgIHZhciBhID0gY291bnQgKiAxMDBcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwgKiBhKSAvIGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmbHlBbmltKHR5cGU6bnVtYmVyICwgc3RhcnROb2RlOiBjYy5Ob2RlLCB0YXJnZXROb2RlTmFtZTogc3RyaW5nLCBjb3VudDogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGdldFBvaW50ID0gKHIsIG94LCBveSwgY291bnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvaW50ID0gW107IC8v57uT5p6cXHJcbiAgICAgICAgICAgIHZhciByYWRpYW5zID0gKE1hdGguUEkgLyAxODApICogTWF0aC5yb3VuZCgzNjAgLyBjb3VudCksIC8v5byn5bqmXHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IG94ICsgciAqIE1hdGguc2luKHJhZGlhbnMgKiBpKSxcclxuICAgICAgICAgICAgICAgICAgICB5ID0gb3kgKyByICogTWF0aC5jb3MocmFkaWFucyAqIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvaW50LnVuc2hpZnQoY2MudjIoeCwgeSkpOyAvL+S4uuS/neaMgeaVsOaNrumhuuaXtumSiFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwb2ludDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjcmVhdGVOb2RlID0gKHR5cGUpID0+IHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAwKSByZXR1cm4gUG9vbE1nci5JbnN0YW5jZSgpLmdldChcIkNvaW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5vZGVBcnJheSA9IFtdO1xyXG4gICAgICAgIGlmKHN0YXJ0Tm9kZS5wYXJlbnQpe1xyXG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBzdGFydE5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzdGFydE5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBzdGFydCA9IGNjLmZpbmQoXCJDYW52YXNcIikuY29udmVydFRvTm9kZVNwYWNlQVIoc3RhcnQpO1xyXG4gICAgICAgICAgICB2YXIgYXJyYXkgPSBnZXRQb2ludChyYWRpdXMsIHN0YXJ0LngsIHN0YXJ0LnksIGNvdW50KTtcclxuICAgICAgICAgICAgaWYoIWFycmF5KSByZXR1cm47XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBnb2xkID0gY3JlYXRlTm9kZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIGlmKCFnb2xkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBnb2xkLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgICAgICAgIHZhciByYW5kUG9zID0gY2MudjIoYXJyYXlbaV0ueCArIFV0aWxzLmdldFJhbmRvbUludCgwLCA1MCksIGFycmF5W2ldLnkgKyBVdGlscy5nZXRSYW5kb21JbnQoMCwgNTApKTtcclxuICAgICAgICAgICAgICAgIGdvbGQuc2V0UG9zaXRpb24oc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgbm9kZUFycmF5LnB1c2goeyBnb2xkLCByYW5kUG9zIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbm90UGxheSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzcmNOb2RlID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoXCJIYWxsU2NlbmVcIikuR2V0R2FtZU9iamVjdCh0YXJnZXROb2RlTmFtZSk7IDsvL0hhbGxTY2VuZS5JbnN0YW5jZS5HZXRHYW1lT2JqZWN0KHRhcmdldE5vZGVOYW1lKTtcclxuICAgICAgICBsZXQgZHN0UG9zID0gc3JjTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHNyY05vZGUucG9zaXRpb24pOyBcclxuICAgICAgICBkc3RQb3MgPSBjYy5maW5kKFwiQ2FudmFzXCIpIC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihkc3RQb3MpXHJcbiAgICAgICAgdmFyIHRhcmdldEdvbGROb2RlID0gc3JjTm9kZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gbm9kZUFycmF5W2ldLnJhbmRQb3M7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gbm9kZUFycmF5W2ldLmdvbGQ7XHJcbiAgICAgICAgICAgIG5vZGVBcnJheVtpXS5nb2xkLmlkID0gaTtcclxuICAgICAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMiwgcG9zKSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZShpICogMC4wMyksXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCBjYy52Mihkc3RQb3MueCxkc3RQb3MueSkpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vdFBsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0R29sZE5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0R29sZE5vZGUuc2V0U2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdFBsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMiwgMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90UGxheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEdvbGROb2RlLnJ1bkFjdGlvbihzZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhub2RlLmlkID09IG5vZGVBcnJheS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBQb29sTWdyLkluc3RhbmNlKCkucHV0KG5vZGUubmFtZSwgbm9kZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKHNlcSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxheUJyZWF0aCh0YXJnZXQ6Y2MuTm9kZSxzc2NhbGUgPSAxLHRzY2FsZSA9IDEuMTIsZHVyYXRpb24gPSAwLjgsbG9vcDpib29sZWFuID0gdHJ1ZSl7XHJcbiAgICAgICAgdGFyZ2V0LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGFyZ2V0LnNldFNjYWxlKHNzY2FsZSk7XHJcbiAgICAgICAgbGV0IHNlcSA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKGR1cmF0aW9uLCB0c2NhbGUsIHRzY2FsZSksXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oZHVyYXRpb24sIHNzY2FsZSwgc3NjYWxlKSxcclxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYobG9vcCkgdGhpcy5wbGF5QnJlYXRoKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGFyZ2V0LnJ1bkFjdGlvbihzZXEpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG4iXX0=