
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
        if (this.GetInputField(TextID))
            this.GetInputField(TextID).string = content;
    };
    BaseUI.prototype.getChildByName = function (path, node) {
        return cc.find(path, node || this.node);
    };
    BaseUI.prototype._addClickEvent = function (node) {
        if (this._isSkipNode(node))
            return;
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
                        skd.premultipliedAlpha = false;
                        skd.setAnimation(0, name, false);
                        if (removetime != -1) {
                            node.runAction(cc.sequence(cc.delayTime(removetime), cc.callFunc(function () {
                                node.parent = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcQmFzZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msd0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBOFBDO1FBN1BHLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDTCxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN4QixlQUFTLEdBQXlCLElBQUksR0FBRyxFQUFtQixDQUFDOztJQTJQekUsQ0FBQztlQTlQb0IsTUFBTTtJQUl2Qiw0QkFBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsMEJBQTBCO1FBRTFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25DLGVBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsTUFB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QUMsQ0FBQzt3QkFDakMsSUFBSSxVQUFVLElBQUksQ0FBQyxDQUFDLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7eUJBQ1A7d0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFDRCx5QkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLFFBQWtCO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELDJCQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ25CLG1CQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLElBQVk7O1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDMUIsQ0FBQSxLQUFBLG1CQUFTLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxRQUFRLDJCQUFDLElBQUksR0FBSyxJQUFJLEdBQUU7SUFDakQsQ0FBQzs7SUE1UGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E4UDFCO0lBQUQsYUFBQztDQTlQRCxBQThQQyxDQTlQbUMsRUFBRSxDQUFDLFNBQVMsR0E4UC9DO2tCQTlQb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRXZlbnQgZnJvbSBcIi4uL2V2ZW50L0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBldmVudHMgPSBbXTtcclxuICAgIHB1YmxpYyBfY3JlYXRlX3RpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1fb2JqZWN0czogTWFwPHN0cmluZywgY2MuTm9kZT4gPSBuZXcgTWFwPHN0cmluZywgY2MuTm9kZT4oKTtcclxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcclxuICAgICAgICAvLyBpZiAodGhpcy5hZGRDbGlja0V2ZW50KVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pKSB7XHJcbiAgICAgICAgICAgIFV0aWxzLmFkZENsaWNrRXZlbnQodGhpcy5ub2RlLCB0aGlzLm5vZGUsIGNjLmpzLmdldENsYXNzTmFtZSh0aGlzKSwgXCJvblVJQ2xpY2tlZFwiLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikudGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZENsaWNrRXZlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXhSZWRDb2luRm9yU2hvdyhjb2luOiBudW1iZXIsIGZpeGVkOiBudW1iZXIgPSA0LCByYXRpbzogbnVtYmVyID0gMTAwKSB7XHJcbiAgICAgICAgbGV0IHYgPSBjb2luIC8gcmF0aW87XHJcbiAgICAgICAgaWYgKHYgPiAxLjApXHJcbiAgICAgICAgICAgIGZpeGVkID0gMjtcclxuICAgICAgICBsZXQgcmV0OiBzdHJpbmcgPSB2LnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIGlmIChmaXhlZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSByZXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgdG9fbGFzdF96ZXJvID0gbGVuIC0gMTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPiBsZW4gLSAzOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJfY2hhcjJudW0gPSBwYXJzZUludChyZXRbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cl9jaGFyMm51bSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvX2xhc3RfemVybyA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0ID0gcmV0LnN1YnN0cigwLCB0b19sYXN0X3plcm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIF9pc1NraXBOb2RlKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlID09IG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYiA9IG5vZGUuZ2V0Q29tcG9uZW50KEJhc2VVSSk7XHJcbiAgICAgICAgcmV0dXJuIGIgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2ZpbmRJbkNoaWxkcmVuKG5vZGU6IGNjLk5vZGUsIG5hbWU6IHN0cmluZyk6IGNjLk5vZGUge1xyXG4gICAgICAgIHZhciB4ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShuYW1lKTtcclxuICAgICAgICBpZiAoeCkgcmV0dXJuIHg7XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5Db3VudCA9PSAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLmNoaWxkcmVuW2ldLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIFNldFNwcml0ZShuYW1lOiBzdHJpbmcsIGZpbGVwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRTcHJpdGUobmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh0bXApIHtcclxuICAgICAgICAgICAgICAgIFV0aWxzLmxvYWRSZXMoZmlsZXBhdGgsIGNjLlNwcml0ZUZyYW1lKS50aGVuKChyZXQ6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAuc3ByaXRlRnJhbWUgPSByZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0R2FtZU9iamVjdChuYW1lOiBzdHJpbmcsIHJlZmluZDogYm9vbGVhbiA9IGZhbHNlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICghcmVmaW5kKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT0gdGhpcy5ub2RlLm5hbWUpIHJldHVybiB0aGlzLm5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZS5pbmRleE9mKFwiL1wiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gY2MuZmluZChuYW1lLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBpZiAodG1wKSB0aGlzLm1fb2JqZWN0c1tuYW1lXSA9IHRtcDtcclxuICAgICAgICAgICAgcmV0dXJuIHRtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB0aGlzLl9maW5kSW5DaGlsZHJlbih0aGlzLm5vZGUsIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodG1wKSB0aGlzLm1fb2JqZWN0c1tuYW1lXSA9IHRtcDtcclxuICAgICAgICAgICAgcmV0dXJuIHRtcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgR2V0RHJhZ29uQW1hdHVyZShuYW1lOiBzdHJpbmcpOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkge1xyXG4gICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0U2tlbGV0b24obmFtZTogc3RyaW5nKTogc3AuU2tlbGV0b24ge1xyXG4gICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRTcHJpdGUobmFtZTogc3RyaW5nKTogY2MuU3ByaXRlIHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcclxuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUZXh0KG5hbWU6IHN0cmluZyk6IGNjLkxhYmVsIHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0UHJvZ3Jlc3NCYXIobmFtZTogc3RyaW5nKTogY2MuUHJvZ3Jlc3NCYXIge1xyXG4gICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgR2V0QnV0dG9uKG5hbWU6IHN0cmluZyk6IGNjLkJ1dHRvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0SW5wdXRGaWVsZChuYW1lOiBzdHJpbmcpOiBjYy5FZGl0Qm94IHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFByb2dyZXNzQmFyKFRleHRJRDogc3RyaW5nLCBwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRQcm9ncmVzc0JhcihUZXh0SUQpKVxyXG4gICAgICAgIHRoaXMuR2V0UHJvZ3Jlc3NCYXIoVGV4dElEKS5wcm9ncmVzcyA9IHA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBTZXRUZXh0KFRleHRJRDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRUZXh0KFRleHRJRCkpXHJcbiAgICAgICAgdGhpcy5HZXRUZXh0KFRleHRJRCkuc3RyaW5nID0gY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0U2xpZGVyKG5hbWU6IHN0cmluZyk6IGNjLlNsaWRlciB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0SW5wdXRUZXh0KFRleHRJRDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRJbnB1dEZpZWxkKFRleHRJRCkpXHJcbiAgICAgICAgICAgIHRoaXMuR2V0SW5wdXRGaWVsZChUZXh0SUQpLnN0cmluZyA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRCeU5hbWUocGF0aCwgbm9kZSkge1xyXG4gICAgICAgIHJldHVybiBjYy5maW5kKHBhdGgsIG5vZGUgfHwgdGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBfYWRkQ2xpY2tFdmVudChub2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzU2tpcE5vZGUobm9kZSkpIHJldHVybjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSBub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNTa2lwTm9kZSh0bXApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSkge1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuYWRkQ2xpY2tFdmVudCh0bXAsIHRoaXMubm9kZSwgY2MuanMuZ2V0Q2xhc3NOYW1lKHRoaXMpLCBcIm9uVUlDbGlja2VkXCIsIHRtcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS50YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENsaWNrRXZlbnQodG1wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2h1dEFuaW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBhY3Rpb25PdXQgPSBjYy5mYWRlT3V0KDAuMSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjA1LCAxKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihzY2FsZVRvLCBhY3Rpb25PdXQpLFxyXG4gICAgICAgICAgICAvLyAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgKVxyXG4gICAgICAgICAgICAvLyApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRBbmltKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDAuOCwgMC44KTtcclxuICAgICAgICAgICAgdmFyIGRlbGF5ID0gY2MuZGVsYXlUaW1lKDAuMSk7XHJcbiAgICAgICAgICAgIHZhciBhY3Rpb25JbiA9IGNjLmZhZGVJbigwLjEpXHJcbiAgICAgICAgICAgIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjEsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNwYXduKGRlbGF5LmNsb25lKCksIGFjdGlvbkluLCBkZWxheS5jbG9uZSgpLCBzY2FsZVRvKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVUkoKSB7XHJcbiAgICAgICAgdGhpcy5zaHV0QW5pbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS51bnJlZ2lzdGVyKHRoaXMsIHRoaXMuZXZlbnRzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5U2tlQW5pKGZpbGU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwYXJlbnQ6IGNjLk5vZGUsIHBvczogY2MuVmVjMywgcmVtb3ZldGltZTogbnVtYmVyID0gLTEpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICB2YXIgc2tkID0gbm9kZS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBkYXRhID0gYXdhaXQgVXRpbHMubG9hZFJlcyhmaWxlLCBzcC5Ta2VsZXRvbkRhdGEpIGFzIHNwLlNrZWxldG9uRGF0YTtcclxuICAgICAgICBza2Quc2tlbGV0b25EYXRhID0gZGF0YTtcclxuICAgICAgICBza2QucHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2U7XHJcbiAgICAgICAgc2tkLnNldEFuaW1hdGlvbigwLCBuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHJlbW92ZXRpbWUgIT0gLTEpIHtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKHJlbW92ZXRpbWUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gICAgcmlnZXN0ZXIodHlwZTogc3RyaW5nLCBjYWxsRnVuYzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHR5cGUpO1xyXG4gICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLnJlZ2lzdGVyKHRoaXMsIHR5cGUsIGNhbGxGdW5jKTtcclxuICAgIH1cclxuICAgIHVucmVnaXN0ZXIodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkudW5yZWdpc3Rlcih0aGlzLCB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCh0eXBlOiBzdHJpbmcsIC4uLmRhdGEpIHtcclxuICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaCh0eXBlLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbn0iXX0=