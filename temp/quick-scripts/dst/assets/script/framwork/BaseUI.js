
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbXdvcmsvQmFzZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msd0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBOFBDO1FBN1BHLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDTCxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN4QixlQUFTLEdBQXlCLElBQUksR0FBRyxFQUFtQixDQUFDOztJQTJQekUsQ0FBQztlQTlQb0IsTUFBTTtJQUl2Qiw0QkFBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsMEJBQTBCO1FBRTFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25DLGVBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxD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Q0FBQzt3QkFDakMsSUFBSSxVQUFVLElBQUksQ0FBQyxDQUFDLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7eUJBQ1A7d0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFDRCx5QkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLFFBQWtCO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELDJCQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ25CLG1CQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLElBQVk7O1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDMUIsQ0FBQSxLQUFBLG1CQUFTLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxRQUFRLDJCQUFDLElBQUksR0FBSyxJQUFJLEdBQUU7SUFDakQsQ0FBQzs7SUE1UGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E4UDFCO0lBQUQsYUFBQztDQTlQRCxBQThQQyxDQTlQbUMsRUFBRSxDQUFDLFNBQVMsR0E4UC9DO2tCQTlQb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRXZlbnQgZnJvbSBcIi4uL2V2ZW50L0dhbWVFdmVudFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgZXZlbnRzID0gW107XG4gICAgcHVibGljIF9jcmVhdGVfdGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG1fb2JqZWN0czogTWFwPHN0cmluZywgY2MuTm9kZT4gPSBuZXcgTWFwPHN0cmluZywgY2MuTm9kZT4oKTtcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9jbG9zZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICAvLyBpZiAodGhpcy5hZGRDbGlja0V2ZW50KVxuXG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpIHtcbiAgICAgICAgICAgIFV0aWxzLmFkZENsaWNrRXZlbnQodGhpcy5ub2RlLCB0aGlzLm5vZGUsIGNjLmpzLmdldENsYXNzTmFtZSh0aGlzKSwgXCJvblVJQ2xpY2tlZFwiLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikudGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FkZENsaWNrRXZlbnQodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgfVxuXG4gICAgZml4UmVkQ29pbkZvclNob3coY29pbjogbnVtYmVyLCBmaXhlZDogbnVtYmVyID0gNCwgcmF0aW86IG51bWJlciA9IDEwMCkge1xuICAgICAgICBsZXQgdiA9IGNvaW4gLyByYXRpbztcbiAgICAgICAgaWYgKHYgPiAxLjApXG4gICAgICAgICAgICBmaXhlZCA9IDI7XG4gICAgICAgIGxldCByZXQ6IHN0cmluZyA9IHYudG9GaXhlZChmaXhlZCk7XG4gICAgICAgIGlmIChmaXhlZCA9PSA0KSB7XG4gICAgICAgICAgICBsZXQgbGVuID0gcmV0Lmxlbmd0aDtcbiAgICAgICAgICAgIGxldCB0b19sYXN0X3plcm8gPSBsZW4gLSAxO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPiBsZW4gLSAzOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX2NoYXIybnVtID0gcGFyc2VJbnQocmV0W2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyX2NoYXIybnVtID09IDApXG4gICAgICAgICAgICAgICAgICAgIHRvX2xhc3RfemVybyA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXQgPSByZXQuc3Vic3RyKDAsIHRvX2xhc3RfemVybyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBfaXNTa2lwTm9kZShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUgPT0gbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBiID0gbm9kZS5nZXRDb21wb25lbnQoQmFzZVVJKTtcbiAgICAgICAgcmV0dXJuIGIgIT0gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRJbkNoaWxkcmVuKG5vZGU6IGNjLk5vZGUsIG5hbWU6IHN0cmluZyk6IGNjLk5vZGUge1xuICAgICAgICB2YXIgeCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUobmFtZSk7XG4gICAgICAgIGlmICh4KSByZXR1cm4geDtcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5Db3VudCA9PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuX2ZpbmRJbkNoaWxkcmVuKG5vZGUuY2hpbGRyZW5baV0sIG5hbWUpO1xuICAgICAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgU2V0U3ByaXRlKG5hbWU6IHN0cmluZywgZmlsZXBhdGg6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0U3ByaXRlKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHRtcCkge1xuICAgICAgICAgICAgICAgIFV0aWxzLmxvYWRSZXMoZmlsZXBhdGgsIGNjLlNwcml0ZUZyYW1lKS50aGVuKChyZXQ6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5zcHJpdGVGcmFtZSA9IHJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIEdldEdhbWVPYmplY3QobmFtZTogc3RyaW5nLCByZWZpbmQ6IGJvb2xlYW4gPSBmYWxzZSk6IGNjLk5vZGUge1xuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICghcmVmaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV07XG4gICAgICAgICAgICBpZiAobmFtZSA9PSB0aGlzLm5vZGUubmFtZSkgcmV0dXJuIHRoaXMubm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lLmluZGV4T2YoXCIvXCIpICE9IC0xKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gY2MuZmluZChuYW1lLCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgaWYgKHRtcCkgdGhpcy5tX29iamVjdHNbbmFtZV0gPSB0bXA7XG4gICAgICAgICAgICByZXR1cm4gdG1wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuX2ZpbmRJbkNoaWxkcmVuKHRoaXMubm9kZSwgbmFtZSk7XG4gICAgICAgICAgICBpZiAodG1wKSB0aGlzLm1fb2JqZWN0c1tuYW1lXSA9IHRtcDtcbiAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBwdWJsaWMgR2V0RHJhZ29uQW1hdHVyZShuYW1lOiBzdHJpbmcpOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkge1xuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIEdldFNrZWxldG9uKG5hbWU6IHN0cmluZyk6IHNwLlNrZWxldG9uIHtcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIEdldFNwcml0ZShuYW1lOiBzdHJpbmcpOiBjYy5TcHJpdGUge1xuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRUZXh0KG5hbWU6IHN0cmluZyk6IGNjLkxhYmVsIHtcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIEdldFByb2dyZXNzQmFyKG5hbWU6IHN0cmluZyk6IGNjLlByb2dyZXNzQmFyIHtcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBHZXRCdXR0b24obmFtZTogc3RyaW5nKTogY2MuQnV0dG9uIHtcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0SW5wdXRGaWVsZChuYW1lOiBzdHJpbmcpOiBjYy5FZGl0Qm94IHtcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRQcm9ncmVzc0JhcihUZXh0SUQ6IHN0cmluZywgcDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLkdldFByb2dyZXNzQmFyKFRleHRJRCkpXG4gICAgICAgIHRoaXMuR2V0UHJvZ3Jlc3NCYXIoVGV4dElEKS5wcm9ncmVzcyA9IHA7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBTZXRUZXh0KFRleHRJRDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuR2V0VGV4dChUZXh0SUQpKVxuICAgICAgICB0aGlzLkdldFRleHQoVGV4dElEKS5zdHJpbmcgPSBjb250ZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRTbGlkZXIobmFtZTogc3RyaW5nKTogY2MuU2xpZGVyIHtcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0SW5wdXRUZXh0KFRleHRJRDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuR2V0SW5wdXRGaWVsZChUZXh0SUQpKVxuICAgICAgICAgICAgdGhpcy5HZXRJbnB1dEZpZWxkKFRleHRJRCkuc3RyaW5nID0gY29udGVudDtcbiAgICB9XG5cbiAgICBnZXRDaGlsZEJ5TmFtZShwYXRoLCBub2RlKSB7XG4gICAgICAgIHJldHVybiBjYy5maW5kKHBhdGgsIG5vZGUgfHwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBfYWRkQ2xpY2tFdmVudChub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NraXBOb2RlKG5vZGUpKSByZXR1cm47XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzU2tpcE5vZGUodG1wKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAodG1wLmdldENvbXBvbmVudChjYy5CdXR0b24pKSB7XG4gICAgICAgICAgICAgICAgVXRpbHMuYWRkQ2xpY2tFdmVudCh0bXAsIHRoaXMubm9kZSwgY2MuanMuZ2V0Q2xhc3NOYW1lKHRoaXMpLCBcIm9uVUlDbGlja2VkXCIsIHRtcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYWRkQ2xpY2tFdmVudCh0bXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2h1dEFuaW0oKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0U2NhbGUoMSwgMSk7XG4gICAgICAgICAgICAvLyB2YXIgYWN0aW9uT3V0ID0gY2MuZmFkZU91dCgwLjEpO1xuICAgICAgICAgICAgLy8gdmFyIHNjYWxlVG8gPSBjYy5zY2FsZVRvKDAuMDUsIDEpO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihzY2FsZVRvLCBhY3Rpb25PdXQpLFxuICAgICAgICAgICAgLy8gICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgKVxuICAgICAgICAgICAgLy8gKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydEFuaW0oKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDAuOCwgMC44KTtcbiAgICAgICAgICAgIHZhciBkZWxheSA9IGNjLmRlbGF5VGltZSgwLjEpO1xuICAgICAgICAgICAgdmFyIGFjdGlvbkluID0gY2MuZmFkZUluKDAuMSlcbiAgICAgICAgICAgIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjEsIDEpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zcGF3bihkZWxheS5jbG9uZSgpLCBhY3Rpb25JbiwgZGVsYXkuY2xvbmUoKSwgc2NhbGVUbykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VVSSgpIHtcbiAgICAgICAgdGhpcy5zaHV0QW5pbSgpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLnVucmVnaXN0ZXIodGhpcywgdGhpcy5ldmVudHNbaV0pO1xuICAgIH1cblxuICAgIGFzeW5jIHBsYXlTa2VBbmkoZmlsZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSwgcG9zOiBjYy5WZWMzLCByZW1vdmV0aW1lOiBudW1iZXIgPSAtMSkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICB2YXIgc2tkID0gbm9kZS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBcbiAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGZpbGUsIHNwLlNrZWxldG9uRGF0YSkgYXMgc3AuU2tlbGV0b25EYXRhO1xuICAgICAgICBza2Quc2tlbGV0b25EYXRhID0gZGF0YTtcbiAgICAgICAgc2tkLnByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xuICAgICAgICBza2Quc2V0QW5pbWF0aW9uKDAsIG5hbWUsIGZhbHNlKTtcbiAgICAgICAgaWYgKHJlbW92ZXRpbWUgIT0gLTEpIHtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShyZW1vdmV0aW1lKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH0pKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByaWdlc3Rlcih0eXBlOiBzdHJpbmcsIGNhbGxGdW5jOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHR5cGUpO1xuICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5yZWdpc3Rlcih0aGlzLCB0eXBlLCBjYWxsRnVuYyk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIodHlwZTogc3RyaW5nKSB7XG4gICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLnVucmVnaXN0ZXIodGhpcywgdHlwZSk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2godHlwZTogc3RyaW5nLCAuLi5kYXRhKSB7XG4gICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLmRpc3BhdGNoKHR5cGUsIC4uLmRhdGEpO1xuICAgIH1cblxufSJdfQ==