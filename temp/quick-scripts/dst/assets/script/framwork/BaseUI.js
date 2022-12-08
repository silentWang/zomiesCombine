
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
    BaseUI.prototype.onBtnClicked = function (event, customEventData) {
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
            Utils_1.default.addClickEvent(this.node, this.node, cc.js.getClassName(this), "onBtnClicked", this.node.getComponent(cc.Button).target);
        }
        this._addClickEvent(this.node);
        this._create_time = Utils_1.default.getServerTime();
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
    BaseUI.prototype.GetSkeleton = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(sp.Skeleton);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(sp.Skeleton);
        return null;
    };
    BaseUI.prototype.GetDragonAmature = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(sp.Skeleton);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(dragonBones.ArmatureDisplay);
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
    BaseUI.prototype.GetSlider = function (name) {
        if (this.m_objects && this.m_objects.has(name))
            return this.m_objects[name].getComponent(cc.Slider);
        var tmp = this.GetGameObject(name);
        if (tmp)
            return tmp.getComponent(cc.Slider);
        return null;
    };
    BaseUI.prototype.SetText = function (TextID, content) {
        if (this.GetText(TextID))
            this.GetText(TextID).string = content;
    };
    BaseUI.prototype.SetInputText = function (TextID, content) {
        if (this.GetInputField(TextID))
            this.GetInputField(TextID).string = content;
    };
    BaseUI.prototype.SetProgressBar = function (TextID, p) {
        if (this.GetProgressBar(TextID))
            this.GetProgressBar(TextID).progress = p;
    };
    BaseUI.prototype._isSkipNode = function (node) {
        if (this.node == node) {
            return false;
        }
        var b = node.getComponent(BaseUI_1);
        return b != null;
    };
    BaseUI.prototype._addClickEvent = function (node) {
        if (this._isSkipNode(node))
            return;
        for (var i = 0; i < node.childrenCount; ++i) {
            var tmp = node.children[i];
            if (this._isSkipNode(tmp))
                continue;
            if (tmp.getComponent(cc.Button)) {
                Utils_1.default.addClickEvent(tmp, this.node, cc.js.getClassName(this), "onBtnClicked", tmp.getComponent(cc.Button).target);
            }
            this._addClickEvent(tmp);
        }
    };
    BaseUI.prototype.getChildByName = function (path, node) {
        return cc.find(path, node || this.node);
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
    BaseUI.prototype.closeUI = function () {
        this.shutAnim();
    };
    BaseUI.prototype.onDestroy = function () {
        for (var i = 0; i < this.events.length; ++i)
            GameEvent_1.default.Instance().unregister(this, this.events[i]);
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
    BaseUI.prototype.playSkAni = function (file, name, parent, pos, removetime) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcQmFzZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msd0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBK09DO1FBOU9HLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFzQkwsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFjeEIsZUFBUyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQzs7SUEwTXpFLENBQUM7ZUEvT29CLE1BQU07SUFHdkIsNkJBQVksR0FBWixVQUFhLEtBQUssRUFBRSxlQUFlO1FBQy9CLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBCQUEwQjtRQUUxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQyxlQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1B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O3lCQUNQO3dCQUVELHNCQUFPLElBQUksRUFBQzs7OztLQUNmOztJQTlPZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStPMUI7SUFBRCxhQUFDO0NBL09ELEFBK09DLENBL09tQyxFQUFFLENBQUMsU0FBUyxHQStPL0M7a0JBL09vQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZXZlbnQvR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGV2ZW50cyA9IFtdO1xyXG5cclxuICAgIG9uQnRuQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9jbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYWRkQ2xpY2tFdmVudClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSkge1xyXG4gICAgICAgICAgICBVdGlscy5hZGRDbGlja0V2ZW50KHRoaXMubm9kZSwgdGhpcy5ub2RlLCBjYy5qcy5nZXRDbGFzc05hbWUodGhpcyksIFwib25CdG5DbGlja2VkXCIsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS50YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYWRkQ2xpY2tFdmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIF9jcmVhdGVfdGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2ZpbmRJbkNoaWxkcmVuKG5vZGU6IGNjLk5vZGUsIG5hbWU6IHN0cmluZyk6IGNjLk5vZGUge1xyXG4gICAgICAgIHZhciB4ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShuYW1lKTtcclxuICAgICAgICBpZiAoeCkgcmV0dXJuIHg7XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5Db3VudCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5fZmluZEluQ2hpbGRyZW4obm9kZS5jaGlsZHJlbltpXSwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh0bXApIHJldHVybiB0bXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbV9vYmplY3RzOiBNYXA8c3RyaW5nLCBjYy5Ob2RlPiA9IG5ldyBNYXA8c3RyaW5nLCBjYy5Ob2RlPigpO1xyXG5cclxuICAgIHB1YmxpYyBHZXRHYW1lT2JqZWN0KG5hbWU6IHN0cmluZywgcmVmaW5kOiBib29sZWFuID0gZmFsc2UpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKCFyZWZpbmQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PSB0aGlzLm5vZGUubmFtZSkgcmV0dXJuIHRoaXMubm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lLmluZGV4T2YoXCIvXCIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSBjYy5maW5kKG5hbWUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIGlmICh0bXApIHRoaXMubV9vYmplY3RzW25hbWVdID0gdG1wO1xyXG4gICAgICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuX2ZpbmRJbkNoaWxkcmVuKHRoaXMubm9kZSwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh0bXApIHRoaXMubV9vYmplY3RzW25hbWVdID0gdG1wO1xyXG4gICAgICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0U2tlbGV0b24obmFtZTogc3RyaW5nKTogc3AuU2tlbGV0b24ge1xyXG4gICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXREcmFnb25BbWF0dXJlKG5hbWU6IHN0cmluZyk6IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcclxuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRTcHJpdGUobmFtZTogc3RyaW5nKTogY2MuU3ByaXRlIHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcclxuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBTZXRTcHJpdGUobmFtZTogc3RyaW5nLCBmaWxlcGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0U3ByaXRlKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodG1wKSB7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5sb2FkUmVzKGZpbGVwYXRoLCBjYy5TcHJpdGVGcmFtZSkudGhlbigocmV0OiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnNwcml0ZUZyYW1lID0gcmV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFRleHQobmFtZTogc3RyaW5nKTogY2MuTGFiZWwge1xyXG4gICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRQcm9ncmVzc0JhcihuYW1lOiBzdHJpbmcpOiBjYy5Qcm9ncmVzc0JhciB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcclxuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEJ1dHRvbihuYW1lOiBzdHJpbmcpOiBjYy5CdXR0b24ge1xyXG4gICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldElucHV0RmllbGQobmFtZTogc3RyaW5nKTogY2MuRWRpdEJveCB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRTbGlkZXIobmFtZTogc3RyaW5nKTogY2MuU2xpZGVyIHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XHJcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcclxuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRUZXh0KFRleHRJRDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRUZXh0KFRleHRJRCkpXHJcbiAgICAgICAgICAgIHRoaXMuR2V0VGV4dChUZXh0SUQpLnN0cmluZyA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldElucHV0VGV4dChUZXh0SUQ6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0SW5wdXRGaWVsZChUZXh0SUQpKVxyXG4gICAgICAgICAgICB0aGlzLkdldElucHV0RmllbGQoVGV4dElEKS5zdHJpbmcgPSBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRQcm9ncmVzc0JhcihUZXh0SUQ6IHN0cmluZywgcDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0UHJvZ3Jlc3NCYXIoVGV4dElEKSlcclxuICAgICAgICAgICAgdGhpcy5HZXRQcm9ncmVzc0JhcihUZXh0SUQpLnByb2dyZXNzID0gcDtcclxuICAgIH1cclxuXHJcbiAgICBfaXNTa2lwTm9kZShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSA9PSBub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGIgPSBub2RlLmdldENvbXBvbmVudChCYXNlVUkpO1xyXG4gICAgICAgIHJldHVybiBiICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX2FkZENsaWNrRXZlbnQobm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1NraXBOb2RlKG5vZGUpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IG5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1NraXBOb2RlKHRtcCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLmdldENvbXBvbmVudChjYy5CdXR0b24pKSB7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5hZGRDbGlja0V2ZW50KHRtcCwgdGhpcy5ub2RlLCBjYy5qcy5nZXRDbGFzc05hbWUodGhpcyksIFwib25CdG5DbGlja2VkXCIsIHRtcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS50YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENsaWNrRXZlbnQodG1wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRCeU5hbWUocGF0aCwgbm9kZSkge1xyXG4gICAgICAgIHJldHVybiBjYy5maW5kKHBhdGgsIG5vZGUgfHwgdGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEFuaW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMC44LCAwLjgpO1xyXG4gICAgICAgICAgICB2YXIgZGVsYXkgPSBjYy5kZWxheVRpbWUoMC4xKTtcclxuICAgICAgICAgICAgdmFyIGFjdGlvbkluID0gY2MuZmFkZUluKDAuMSlcclxuICAgICAgICAgICAgdmFyIHNjYWxlVG8gPSBjYy5zY2FsZVRvKDAuMSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc3Bhd24oZGVsYXkuY2xvbmUoKSwgYWN0aW9uSW4sIGRlbGF5LmNsb25lKCksIHNjYWxlVG8pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2h1dEFuaW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBhY3Rpb25PdXQgPSBjYy5mYWRlT3V0KDAuMSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjA1LCAxKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihzY2FsZVRvLCBhY3Rpb25PdXQpLFxyXG4gICAgICAgICAgICAvLyAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgKVxyXG4gICAgICAgICAgICAvLyApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VVSSgpIHtcclxuICAgICAgICB0aGlzLnNodXRBbmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLnVucmVnaXN0ZXIodGhpcywgdGhpcy5ldmVudHNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJpZ2VzdGVyKHR5cGU6IHN0cmluZywgY2FsbEZ1bmM6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMucHVzaCh0eXBlKTtcclxuICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5yZWdpc3Rlcih0aGlzLCB0eXBlLCBjYWxsRnVuYyk7XHJcbiAgICB9XHJcbiAgICB1bnJlZ2lzdGVyKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLnVucmVnaXN0ZXIodGhpcywgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2godHlwZTogc3RyaW5nLCAuLi5kYXRhKSB7XHJcbiAgICAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkuZGlzcGF0Y2godHlwZSwgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVNrQW5pKGZpbGU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwYXJlbnQ6IGNjLk5vZGUsIHBvczogY2MuVmVjMywgcmVtb3ZldGltZTogbnVtYmVyID0gLTEpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICB2YXIgc2tkID0gbm9kZS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoZmlsZSwgc3AuU2tlbGV0b25EYXRhKSBhcyBzcC5Ta2VsZXRvbkRhdGE7XHJcbiAgICAgICAgc2tkLnNrZWxldG9uRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgc2tkLnByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xyXG4gICAgICAgIHNrZC5zZXRBbmltYXRpb24oMCwgbmFtZSwgZmFsc2UpO1xyXG4gICAgICAgIGlmIChyZW1vdmV0aW1lICE9IC0xKSB7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShyZW1vdmV0aW1lKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxufSJdfQ==