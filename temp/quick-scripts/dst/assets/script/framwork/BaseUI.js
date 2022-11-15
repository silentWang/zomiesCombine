
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
        // if (this.addClickEvent)
        // console.log(this.node.name)
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
            // console.log("====", node.name)
            return false;
        }
        var b = node.getComponent(BaseUI_1);
        // if (b) {
        //     console.log("跳过", b.name)
        // }
        return b != null;
        // for (var i = 0; i < this.skipNode.length; ++i) {
        //     if (node == this.skipNode[i])
        //         return true;
        // }
        // return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcQmFzZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msd0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBMlBDO1FBMVBHLFlBQU0sR0FBRyxFQUFFLENBQUM7UUF5Qkwsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFjeEIsZUFBUyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQzs7SUFtTnpFLENBQUM7ZUEzUG9CLE1BQU07SUFHdkIsNkJBQVksR0FBWixVQUFhLEtBQUssRUFBRSxlQUFlO1FBQy9CLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBCQUEwQjtRQUUxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQyxlQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1B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LFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7eUJBQ1A7d0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7O0lBMVBnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMlAxQjtJQUFELGFBQUM7Q0EzUEQsQUEyUEMsQ0EzUG1DLEVBQUUsQ0FBQyxTQUFTLEdBMlAvQztrQkEzUG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9ldmVudC9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgZXZlbnRzID0gW107XHJcblxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcclxuICAgICAgICAvLyBpZiAodGhpcy5hZGRDbGlja0V2ZW50KVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pKSB7XHJcbiAgICAgICAgICAgIFV0aWxzLmFkZENsaWNrRXZlbnQodGhpcy5ub2RlLCB0aGlzLm5vZGUsIGNjLmpzLmdldENsYXNzTmFtZSh0aGlzKSwgXCJvbkJ0bkNsaWNrZWRcIiwgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9hZGRDbGlja0V2ZW50KHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmFkZENsaWNrRXZlbnQpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLm5hbWUpXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX2NyZWF0ZV90aW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByb3RlY3RlZCBfZmluZEluQ2hpbGRyZW4obm9kZTogY2MuTm9kZSwgbmFtZTogc3RyaW5nKTogY2MuTm9kZSB7XHJcbiAgICAgICAgdmFyIHggPSBub2RlLmdldENoaWxkQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgIGlmICh4KSByZXR1cm4geDtcclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbkNvdW50ID09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB0aGlzLl9maW5kSW5DaGlsZHJlbihub2RlLmNoaWxkcmVuW2ldLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtX29iamVjdHM6IE1hcDxzdHJpbmcsIGNjLk5vZGU+ID0gbmV3IE1hcDxzdHJpbmcsIGNjLk5vZGU+KCk7XHJcblxyXG4gICAgcHVibGljIEdldEdhbWVPYmplY3QobmFtZTogc3RyaW5nLCByZWZpbmQ6IGJvb2xlYW4gPSBmYWxzZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAoIXJlZmluZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChuYW1lID09IHRoaXMubm9kZS5uYW1lKSByZXR1cm4gdGhpcy5ub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihcIi9cIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IGNjLmZpbmQobmFtZSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgaWYgKHRtcCkgdGhpcy5tX29iamVjdHNbbmFtZV0gPSB0bXA7XHJcbiAgICAgICAgICAgIHJldHVybiB0bXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5fZmluZEluQ2hpbGRyZW4odGhpcy5ub2RlLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRtcCkgdGhpcy5tX29iamVjdHNbbmFtZV0gPSB0bXA7XHJcbiAgICAgICAgICAgIHJldHVybiB0bXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRTa2VsZXRvbihuYW1lOiBzdHJpbmcpOiBzcC5Ta2VsZXRvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcclxuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldERyYWdvbkFtYXR1cmUobmFtZTogc3RyaW5nKTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5IHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFNwcml0ZShuYW1lOiBzdHJpbmcpOiBjYy5TcHJpdGUge1xyXG4gICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIFNldFNwcml0ZShuYW1lOiBzdHJpbmcsIGZpbGVwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRTcHJpdGUobmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh0bXApIHtcclxuICAgICAgICAgICAgICAgIFV0aWxzLmxvYWRSZXMoZmlsZXBhdGgsIGNjLlNwcml0ZUZyYW1lKS50aGVuKChyZXQ6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAuc3ByaXRlRnJhbWUgPSByZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0VGV4dChuYW1lOiBzdHJpbmcpOiBjYy5MYWJlbCB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdmFyIHRtcCA9IHRoaXMuR2V0R2FtZU9iamVjdChuYW1lKTtcclxuICAgICAgICBpZiAodG1wKSByZXR1cm4gdG1wLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFByb2dyZXNzQmFyKG5hbWU6IHN0cmluZyk6IGNjLlByb2dyZXNzQmFyIHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0QnV0dG9uKG5hbWU6IHN0cmluZyk6IGNjLkJ1dHRvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9vYmplY3RzICYmIHRoaXMubV9vYmplY3RzLmhhcyhuYW1lKSkgcmV0dXJuIHRoaXMubV9vYmplY3RzW25hbWVdLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0SW5wdXRGaWVsZChuYW1lOiBzdHJpbmcpOiBjYy5FZGl0Qm94IHtcclxuICAgICAgICBpZiAodGhpcy5tX29iamVjdHMgJiYgdGhpcy5tX29iamVjdHMuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5tX29iamVjdHNbbmFtZV0uZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIHZhciB0bXAgPSB0aGlzLkdldEdhbWVPYmplY3QobmFtZSk7XHJcbiAgICAgICAgaWYgKHRtcCkgcmV0dXJuIHRtcC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFNsaWRlcihuYW1lOiBzdHJpbmcpOiBjYy5TbGlkZXIge1xyXG4gICAgICAgIGlmICh0aGlzLm1fb2JqZWN0cyAmJiB0aGlzLm1fb2JqZWN0cy5oYXMobmFtZSkpIHJldHVybiB0aGlzLm1fb2JqZWN0c1tuYW1lXS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcclxuICAgICAgICB2YXIgdG1wID0gdGhpcy5HZXRHYW1lT2JqZWN0KG5hbWUpO1xyXG4gICAgICAgIGlmICh0bXApIHJldHVybiB0bXAuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFRleHQoVGV4dElEOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLkdldFRleHQoVGV4dElEKSlcclxuICAgICAgICAgICAgdGhpcy5HZXRUZXh0KFRleHRJRCkuc3RyaW5nID0gY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0SW5wdXRUZXh0KFRleHRJRDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRJbnB1dEZpZWxkKFRleHRJRCkpXHJcbiAgICAgICAgICAgIHRoaXMuR2V0SW5wdXRGaWVsZChUZXh0SUQpLnN0cmluZyA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFByb2dyZXNzQmFyKFRleHRJRDogc3RyaW5nLCBwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRQcm9ncmVzc0JhcihUZXh0SUQpKVxyXG4gICAgICAgICAgICB0aGlzLkdldFByb2dyZXNzQmFyKFRleHRJRCkucHJvZ3Jlc3MgPSBwO1xyXG4gICAgfVxyXG5cclxuICAgIF9pc1NraXBOb2RlKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlID09IG5vZGUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09XCIsIG5vZGUubmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYiA9IG5vZGUuZ2V0Q29tcG9uZW50KEJhc2VVSSk7XHJcbiAgICAgICAgLy8gaWYgKGIpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLot7Pov4dcIiwgYi5uYW1lKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gYiAhPSBudWxsO1xyXG4gICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5za2lwTm9kZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIC8vICAgICBpZiAobm9kZSA9PSB0aGlzLnNraXBOb2RlW2ldKVxyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfYWRkQ2xpY2tFdmVudChub2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzU2tpcE5vZGUobm9kZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gbm9kZS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzU2tpcE5vZGUodG1wKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpIHtcclxuICAgICAgICAgICAgICAgIFV0aWxzLmFkZENsaWNrRXZlbnQodG1wLCB0aGlzLm5vZGUsIGNjLmpzLmdldENsYXNzTmFtZSh0aGlzKSwgXCJvbkJ0bkNsaWNrZWRcIiwgdG1wLmdldENvbXBvbmVudChjYy5CdXR0b24pLnRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fYWRkQ2xpY2tFdmVudCh0bXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlsZEJ5TmFtZShwYXRoLCBub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLmZpbmQocGF0aCwgbm9kZSB8fCB0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0QW5pbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgwLjgsIDAuOCk7XHJcbiAgICAgICAgICAgIHZhciBkZWxheSA9IGNjLmRlbGF5VGltZSgwLjEpO1xyXG4gICAgICAgICAgICB2YXIgYWN0aW9uSW4gPSBjYy5mYWRlSW4oMC4xKVxyXG4gICAgICAgICAgICB2YXIgc2NhbGVUbyA9IGNjLnNjYWxlVG8oMC4xLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zcGF3bihkZWxheS5jbG9uZSgpLCBhY3Rpb25JbiwgZGVsYXkuY2xvbmUoKSwgc2NhbGVUbykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaHV0QW5pbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgLy8gdmFyIGFjdGlvbk91dCA9IGNjLmZhZGVPdXQoMC4xKTtcclxuICAgICAgICAgICAgLy8gdmFyIHNjYWxlVG8gPSBjYy5zY2FsZVRvKDAuMDUsIDEpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKHNjYWxlVG8sIGFjdGlvbk91dCksXHJcbiAgICAgICAgICAgIC8vICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICApXHJcbiAgICAgICAgICAgIC8vICkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVVJKCkge1xyXG4gICAgICAgIHRoaXMuc2h1dEFuaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkudW5yZWdpc3Rlcih0aGlzLCB0aGlzLmV2ZW50c1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmlnZXN0ZXIodHlwZTogc3RyaW5nLCBjYWxsRnVuYzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHR5cGUpO1xyXG4gICAgICAgIEdhbWVFdmVudC5JbnN0YW5jZSgpLnJlZ2lzdGVyKHRoaXMsIHR5cGUsIGNhbGxGdW5jKTtcclxuICAgIH1cclxuICAgIHVucmVnaXN0ZXIodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgR2FtZUV2ZW50Lkluc3RhbmNlKCkudW5yZWdpc3Rlcih0aGlzLCB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCh0eXBlOiBzdHJpbmcsIC4uLmRhdGEpIHtcclxuICAgICAgICBHYW1lRXZlbnQuSW5zdGFuY2UoKS5kaXNwYXRjaCh0eXBlLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5U2tBbmkoZmlsZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSwgcG9zOiBjYy5WZWMzLCByZW1vdmV0aW1lOiBudW1iZXIgPSAtMSkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgIHZhciBza2QgPSBub2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gYXdhaXQgVXRpbHMubG9hZFJlcyhmaWxlLCBzcC5Ta2VsZXRvbkRhdGEpIGFzIHNwLlNrZWxldG9uRGF0YTtcclxuICAgICAgICBza2Quc2tlbGV0b25EYXRhID0gZGF0YTtcclxuICAgICAgICBza2QucHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2U7XHJcbiAgICAgICAgc2tkLnNldEFuaW1hdGlvbigwLCBuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHJlbW92ZXRpbWUgIT0gLTEpIHtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKHJlbW92ZXRpbWUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG59Il19