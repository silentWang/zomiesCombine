"use strict";
cc._RF.push(module, 'da6ddR8mzFCtI19mMwKxBRP', 'BaseUI');
// script/framwork/BaseUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../event/GameEvent");
var Utils_1 = require("../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseUI = /** @class */ (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = [];
        _this._create_time = 0;
        _this.m_objects = new Map();
        return _this;
    }
    BaseUI_1 = BaseUI;
    BaseUI.prototype.onUIClicked = function (event, customEventData) {
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
        }
    };
    BaseUI.prototype.onLoad = function () {
        if (window && window['xxxxx'])
            window['xxxxx']("hytky");
        this.events = [];
        // if (this.addClickEvent)
        if (this.node.getComponent(cc.Button)) {
            Utils_1.default.addClickEvent(this.node, this.node, cc.js.getClassName(this), "onUIClicked", this.node.getComponent(cc.Button).target);
        }
        this._addClickEvent(this.node);
        this._create_time = Utils_1.default.getServerTime();
    };
    BaseUI.prototype.fixRedCoinForShow = function (coin, fixed, ratio) {
        if (fixed === void 0) { fixed = 4; }
        if (ratio === void 0) { ratio = 100; }
        var v = coin / ratio;
        if (window && window['xxxxx'])
            window['xxxxx']("38M2cpmiQt3iPJKfDreBRxz7");
        if (v > 1.0)
            fixed = 2;
        var ret = v.toFixed(fixed);
        if (fixed == 4) {
            var len = ret.length;
            var to_last_zero = len - 1;
            for (var i = len - 1; i > len - 3; i--) {
                var cur_char2num = parseInt(ret[i]);
                if (cur_char2num == 0)
                    to_last_zero = i;
            }
            ret = ret.substr(0, to_last_zero);
        }
        return ret;
    };
    BaseUI.prototype._isSkipNode = function (node) {
        if (this.node == node) {
            return false;
        }
        var b = node.getComponent(BaseUI_1);
        return b != null;
    };
    BaseUI.prototype._findInChildren = function (node, name) {
        var x = node.getChildByName(name);
        if (x)
            return x;
        if (node.childrenCount == 0)
            return null;
        if (window && window['xxxxx'])
            window['xxxxx']("F87GZjJZ8XBz42k");
        for (var i = 0; i < node.childrenCount; ++i) {
            var tmp = this._findInChildren(node.children[i], name);
            if (tmp)
                return tmp;
        }
        return null;
    };
    BaseUI.prototype.SetSprite = function (name, filepath) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var tmp = _this.GetSprite(name);
                        if (window && window['xxxxx'])
                            window['xxxxx']("Eie2t6anbQ5PpEjyieJhzbJY3Wcp3");
                        if (tmp) {
                            Utils_1.default.loadRes(filepath, cc.SpriteFrame).then(function (ret) {
                                if (cc.isValid(_this.node)) {
                                    tmp.spriteFrame = ret;
                                    resolve(null);
                                }
                            });
                        }
                    })];
            });
        });
    };
    BaseUI.prototype.GetGameObject = function (name, refind) {
        if (refind === void 0) { refind = false; }
        if (!cc.isValid(this.node))
            return null;
        if (!refind) {
            if (this.m_objects && this.m_objects.has(name))
                return this.m_objects[name];
            if (name == this.node.name)
                return this.node;
        }
        if (name.indexOf("/") != -1) {
            var tmp = cc.find(name, this.node);
            if (tmp)
                this.m_objects[name] = tmp;
            return tmp;
        }
        else {
            if (window && window['xxxxx'])
                window['xxxxx']("zCrKcX6GbZ87FXAawMkQYPM4YbYwc");
            var tmp = this._findInChildren(this.node, name);
            if (tmp)
                this.m_objects[name] = tmp;
            return tmp;
        }
    };
    BaseUI.prototype.GetDragonAmature = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(sp.Skeleton);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(dragonBones.ArmatureDisplay);
        return null;
    };
    BaseUI.prototype.GetSkeleton = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(sp.Skeleton);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(sp.Skeleton);
        return null;
    };
    BaseUI.prototype.GetSprite = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(cc.Sprite);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(cc.Sprite);
        return null;
    };
    BaseUI.prototype.WSjC_xxxx_fun = function () { console.log("J8Epi3J8bZiycPRpHwde4d2tpy"); };
    BaseUI.prototype.GetText = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(cc.Label);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(cc.Label);
        return null;
    };
    BaseUI.prototype.GetProgressBar = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(cc.ProgressBar);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(cc.ProgressBar);
        return null;
    };
    BaseUI.prototype.GetButton = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(cc.Button);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(cc.Button);
        return null;
    };
    BaseUI.prototype.GetInputField = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(cc.EditBox);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(cc.EditBox);
        return null;
    };
    BaseUI.prototype.SetProgressBar = function (TextID, p) {
        if (window && window['xxxxx'])
            window['xxxxx']("EPBT");
        if (this.GetProgressBar(TextID))
            this.GetProgressBar(TextID).progress = p;
    };
    BaseUI.prototype.SetText = function (TextID, content) {
        if (this.GetText(TextID))
            this.GetText(TextID).string = content;
    };
    BaseUI.prototype.GetSlider = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(cc.Slider);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(cc.Slider);
        return null;
    };
    BaseUI.prototype.SetInputText = function (TextID, content) {
        if (window && window['xxxxx'])
            window['xxxxx']("rASNS7BPtHWH8kMh84scjs7ffRp");
        if (this.GetInputField(TextID))
            this.GetInputField(TextID).string = content;
    };
    BaseUI.prototype.getChildByName = function (path, node) {
        return cc.find(path, node || this.node);
    };
    BaseUI.prototype._addClickEvent = function (node) {
        if (this._isSkipNode(node))
            return;
        if (window && window['xxxxx'])
            window['xxxxx']("Wmb6i7TfHXZEkPmPTPX8RpmaA2rGG");
        for (var i = 0; i < node.childrenCount; ++i) {
            var tmp = node.children[i];
            if (this._isSkipNode(tmp))
                continue;
            if (tmp.getComponent(cc.Button)) {
                Utils_1.default.addClickEvent(tmp, this.node, cc.js.getClassName(this), "onUIClicked", tmp.getComponent(cc.Button).target);
            }
            this._addClickEvent(tmp);
        }
    };
    BaseUI.prototype.shutAnim = function () {
        if (this.node) {
            this.node.active = false;
            this.node.parent = null;
            this.node.destroy();
            // this.node.destroy();
            // this.node.setScale(1, 1);
            // var actionOut = cc.fadeOut(0.1);
            // var scaleTo = cc.scaleTo(0.05, 1);
            // this.node.runAction(cc.sequence(cc.spawn(scaleTo, actionOut),
            //     cc.callFunc(() => {
            //         this.node.active = false;
            //         this.node.parent = null;
            //         this.node.destroy();
            //     }
            //     )
            // ));
        }
    };
    BaseUI.prototype.startAnim = function () {
        if (this.node) {
            this.node.opacity = 0;
            this.node.active = true;
            this.node.setScale(0.8, 0.8);
            var delay = cc.delayTime(0.1);
            var actionIn = cc.fadeIn(0.1);
            var scaleTo = cc.scaleTo(0.1, 1);
            this.node.runAction(cc.spawn(delay.clone(), actionIn, delay.clone(), scaleTo));
            if (window && window['xxxxx'])
                window['xxxxx']("WfRKBsXaAJym2fzYB6FDAfWwrREkzHS");
        }
    };
    BaseUI.prototype.closeUI = function () {
        this.shutAnim();
    };
    BaseUI.prototype.onDestroy = function () {
        for (var i = 0; i < this.events.length; ++i)
            GameEvent_1.default.Instance().unregister(this, this.events[i]);
    };
    BaseUI.prototype.playSkeAni = function (file, name, parent, pos, removetime) {
        if (removetime === void 0) { removetime = -1; }
        return __awaiter(this, void 0, void 0, function () {
            var node, skd, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        node = new cc.Node();
                        node.parent = parent;
                        node.position = pos;
                        skd = node.addComponent(sp.Skeleton);
                        return [4 /*yield*/, Utils_1.default.loadRes(file, sp.SkeletonData)];
                    case 1:
                        data = _a.sent();
                        skd.skeletonData = data;
                        if (window && window['xxxxx'])
                            window['xxxxx']("566iBxDZkQwfR7EE");
                        skd.premultipliedAlpha = false;
                        skd.setAnimation(0, name, false);
                        if (removetime != -1) {
                            node.runAction(cc.sequence(cc.delayTime(removetime), cc.callFunc(function () {
                                node.parent = null;
                                if (window && window['xxxxx'])
                                    window['xxxxx']("xC57YeWebNsPAddjnWdF2kSRip");
                            })));
                        }
                        return [2 /*return*/, node];
                }
            });
        });
    };
    BaseUI.prototype.rigester = function (type, callFunc) {
        this.events.push(type);
        GameEvent_1.default.Instance().register(this, type, callFunc);
    };
    BaseUI.prototype.unregister = function (type) {
        GameEvent_1.default.Instance().unregister(this, type);
    };
    BaseUI.prototype.dispatch = function (type) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        (_a = GameEvent_1.default.Instance()).dispatch.apply(_a, __spreadArrays([type], data));
    };
    var BaseUI_1;
    BaseUI = BaseUI_1 = __decorate([
        ccclass
    ], BaseUI);
    return BaseUI;
}(cc.Component));
exports.default = BaseUI;

cc._RF.pop();