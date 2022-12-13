
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framwork/BaseUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcQmFzZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msd0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBNlFDO1FBNVFHLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDTCxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN4QixlQUFTLEdBQXlCLElBQUksR0FBRyxFQUFtQixDQUFDOztJQTBRekUsQ0FBQztlQTdRb0IsTUFBTTtJQUl2Qiw0QkFBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQiwwQkFBMEI7UUFFMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkMsZUFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENB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LEFBNlFDLENBN1FtQyxFQUFFLENBQUMsU0FBUyxHQTZRL0M7a0JBN1FvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZXZlbnQvR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGV2ZW50cyA9IFtdO1xyXG4gICAgcHVibGljIF9jcmVhdGVfdGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbV9vYmplY3RzOiBNYXA8c3RyaW5nLCBjYy5Ob2RlPiA9IG5ldyBNYXA8c3RyaW5nLCBjYy5Ob2RlPigpO1xyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJoeXRreVwiKTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmFkZENsaWNrRXZlbnQpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpIHtcclxuICAgICAgICAgICAgVXRpbHMuYWRkQ2xpY2tFdmVudCh0aGlzLm5vZGUsIHRoaXMubm9kZSwgY2MuanMuZ2V0Q2xhc3NOYW1lKHRoaXMpLCBcIm9uVUlDbGlja2VkXCIsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS50YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYWRkQ2xpY2tFdmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpeFJlZENvaW5Gb3JTaG93KGNvaW46IG51bWJlciwgZml4ZWQ6IG51bWJlciA9IDQsIHJhdGlvOiBudW1iZXIgPSAxMDApIHtcclxuICAgICAgICBsZXQgdiA9IGNvaW4gLyByYXRpbztcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIzOE0yY3BtaVF0M2lQSktmRHJlQlJ4ejdcIik7XHJcbiAgICAgICAgaWYgKHYgPiAxLjApXHJcbiAgICAgICAgICAgIGZpeGVkID0gMjtcclxuICAgICAgICBsZXQgcmV0OiBzdHJpbmcgPSB2LnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIGlmIChmaXhlZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSByZXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgdG9fbGFzdF96ZXJvID0gbGVuIC0gMTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPiBsZW4gLSAzOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJfY2hhcjJudW0gPSBwYXJzZUludChyZXRbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cl9jaGFyMm51bSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvX2xhc3RfemVybyA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0ID0gcmV0LnN1YnN0cigwLCB0b19sYXN0X3plcm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIF9pc1NraXBOb2RlKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlID09IG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYiA9IG5vZGUuZ2V0Q29tcG9uZW50KEJhc2VVSSk7XHJcbiAgICAgICAgcmV0dXJuIGIgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2ZpbmRJbkNoaWxkcmVuKG5vZGU6IGNjLk5vZGUsIG5hbWU6IHN0cmluZyk6IGNjLk5vZGUge1xyXG4gICAgICAgIHZhciB4ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShuYW1lKTtcclxuICAgICAgICBpZiAoeCkgcmV0dXJuIHg7XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5Db3VudCA9PSAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJGODdHWmpKWjhYQno0MmtcIik7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUuY2hpbGRyZW5baV0sIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgU2V0U3ByaXRlKG5hbWU6IHN0cmluZywgZmlsZXBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB0aGlzLkdldFNwcml0ZShuYW1lKTtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiRWllMnQ2YW5iUTVQcEVqeWllSmh6YkpZM1djcDNcIik7XHJcbiAgICAgICAgICAgIGlmICh0bXApIHtcclxuICAgICAgICAgICAgICAgIFV0aWxzLmxvYWRSZXMoZmlsZXBhdGgsIGNjLlNwcml0ZUZyYW1lKS50aGVuKChyZXQ6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAuc3ByaXRlRnJhbWUgPSByZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0R2FtZU9iamVjdChuYW1lOiBzdHJpbmcsIHJlZmluZDogYm9vbGVhbiA9IGZhbHNlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICghcmVmaW5kKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT0gdGhpcy5ub2RlLm5hbWUpIHJldHVybiB0aGlzLm5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZS5pbmRleE9mKFwiL1wiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gY2MuZmluZChuYW1lLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBpZiAodG1wKSB0aGlzLm1fb2JqZWN0c1tuYW1lXSA9IHRtcDtcclxuICAgICAgICAgICAgcmV0dXJuIHRtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInpDcktjWDZHYlo4N0ZYQWF3TWtRWVBNNFliWXdjXCIpO1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5fZmluZEluQ2hpbGRyZW4odGhpcy5ub2RlLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRtcCkgdGhpcy5tX29iamVjdHNbbmFtZV0gPSB0bXA7XHJcbiAgICAgICAgICAgIHJldHVybiB0bXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIEdldERyYWdvbkFtYXR1cmUobmFtZTogc3RyaW5nKTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5IHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFNrZWxldG9uKG5hbWU6IHN0cmluZyk6IHNwLlNrZWxldG9uIHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0U3ByaXRlKG5hbWU6IHN0cmluZyk6IGNjLlNwcml0ZSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgICAgICBwcml2YXRlIFdTakNfeHh4eF9mdW4oKXsgY29uc29sZS5sb2coXCJKOEVwaTNKOGJaaXljUFJwSHdkZTRkMnRweVwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUZXh0KG5hbWU6IHN0cmluZyk6IGNjLkxhYmVsIHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0UHJvZ3Jlc3NCYXIobmFtZTogc3RyaW5nKTogY2MuUHJvZ3Jlc3NCYXIge1xyXG4gICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgR2V0QnV0dG9uKG5hbWU6IHN0cmluZyk6IGNjLkJ1dHRvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0SW5wdXRGaWVsZChuYW1lOiBzdHJpbmcpOiBjYy5FZGl0Qm94IHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFByb2dyZXNzQmFyKFRleHRJRDogc3RyaW5nLCBwOiBudW1iZXIpIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJFUEJUXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLkdldFByb2dyZXNzQmFyKFRleHRJRCkpXHJcbiAgICAgICAgdGhpcy5HZXRQcm9ncmVzc0JhcihUZXh0SUQpLnByb2dyZXNzID0gcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIFNldFRleHQoVGV4dElEOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLkdldFRleHQoVGV4dElEKSlcclxuICAgICAgICB0aGlzLkdldFRleHQoVGV4dElEKS5zdHJpbmcgPSBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRTbGlkZXIobmFtZTogc3RyaW5nKTogY2MuU2xpZGVyIHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XHJcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcclxuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRJbnB1dFRleHQoVGV4dElEOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInJBU05TN0JQdEhXSDhrTWg4NHNjanM3ZmZScFwiKTtcclxuICAgICAgICBpZiAodGhpcy5HZXRJbnB1dEZpZWxkKFRleHRJRCkpXHJcbiAgICAgICAgICAgIHRoaXMuR2V0SW5wdXRGaWVsZChUZXh0SUQpLnN0cmluZyA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldENoaWxkQnlOYW1lKHBhdGgsIG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gY2MuZmluZChwYXRoLCBub2RlIHx8IHRoaXMubm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2FkZENsaWNrRXZlbnQobm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1NraXBOb2RlKG5vZGUpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIldtYjZpN1RmSFhaRWtQbVBUUFg4UnBtYUEyckdHXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IG5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1NraXBOb2RlKHRtcCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLmdldENvbXBvbmVudChjYy5CdXR0b24pKSB7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5hZGRDbGlja0V2ZW50KHRtcCwgdGhpcy5ub2RlLCBjYy5qcy5nZXRDbGFzc05hbWUodGhpcyksIFwib25VSUNsaWNrZWRcIiwgdG1wLmdldENvbXBvbmVudChjYy5CdXR0b24pLnRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fYWRkQ2xpY2tFdmVudCh0bXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaHV0QW5pbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgLy8gdmFyIGFjdGlvbk91dCA9IGNjLmZhZGVPdXQoMC4xKTtcclxuICAgICAgICAgICAgLy8gdmFyIHNjYWxlVG8gPSBjYy5zY2FsZVRvKDAuMDUsIDEpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKHNjYWxlVG8sIGFjdGlvbk91dCksXHJcbiAgICAgICAgICAgIC8vICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICApXHJcbiAgICAgICAgICAgIC8vICkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydEFuaW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMC44LCAwLjgpO1xyXG4gICAgICAgICAgICB2YXIgZGVsYXkgPSBjYy5kZWxheVRpbWUoMC4xKTtcclxuICAgICAgICAgICAgdmFyIGFjdGlvbkluID0gY2MuZmFkZUluKDAuMSlcclxuICAgICAgICAgICAgdmFyIHNjYWxlVG8gPSBjYy5zY2FsZVRvKDAuMSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc3Bhd24oZGVsYXkuY2xvbmUoKSwgYWN0aW9uSW4sIGRlbGF5LmNsb25lKCksIHNjYWxlVG8pKTtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiV2ZSS0JzWGFBSnltMmZ6WUI2RkRBZld3clJFa3pIU1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VVSSgpIHtcclxuICAgICAgICB0aGlzLnNodXRBbmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLnVucmVnaXN0ZXIodGhpcywgdGhpcy5ldmVudHNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlTa2VBbmkoZmlsZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSwgcG9zOiBjYy5WZWMzLCByZW1vdmV0aW1lOiBudW1iZXIgPSAtMSkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgIHZhciBza2QgPSBub2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGZpbGUsIHNwLlNrZWxldG9uRGF0YSkgYXMgc3AuU2tlbGV0b25EYXRhO1xyXG4gICAgICAgIHNrZC5za2VsZXRvbkRhdGEgPSBkYXRhO1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjU2NmlCeERaa1F3ZlI3RUVcIik7XHJcbiAgICAgICAgc2tkLnByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xyXG4gICAgICAgIHNrZC5zZXRBbmltYXRpb24oMCwgbmFtZSwgZmFsc2UpO1xyXG4gICAgICAgIGlmIChyZW1vdmV0aW1lICE9IC0xKSB7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShyZW1vdmV0aW1lKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwieEM1N1llV2ViTnNQQWRkam5XZEYya1NSaXBcIik7XHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gICAgcmlnZXN0ZXIodHlwZTogc3RyaW5nLCBjYWxsRnVuYzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHR5cGUpO1xyXG4gICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLnJlZ2lzdGVyKHRoaXMsIHR5cGUsIGNhbGxGdW5jKTtcclxuICAgIH1cclxuICAgIHVucmVnaXN0ZXIodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkudW5yZWdpc3Rlcih0aGlzLCB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCh0eXBlOiBzdHJpbmcsIC4uLmRhdGEpIHtcclxuICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaCh0eXBlLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbn0iXX0=