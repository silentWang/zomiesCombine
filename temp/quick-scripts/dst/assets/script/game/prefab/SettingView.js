
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/SettingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0907ehprWVIdL52jX6uIB88', 'SettingView');
// script/game/prefab/SettingView.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../framwork/BaseUI");
var AdCenter_1 = require("../../manager/AdCenter");
var ChickData_1 = require("../../manager/ChickData");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var wx = window["wx"] || window["tt"] || window["qq"];
var SettingView = /** @class */ (function (_super) {
    __extends(SettingView, _super);
    function SettingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_music = null;
        _this.btn_music_close = null;
        _this.btn_sound = null;
        _this.btn_sound_close = null;
        _this.server_data = null;
        _this.wxButton = null;
        return _this;
    }
    SettingView.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (window && window['xxxxx'])
                    window['xxxxx']("kr");
                AdCenter_1.default.Instance().showGridAd();
                // AudioMgr.Instance().playSFX("ui_open_popup_1");
                this.btn_music = this.GetGameObject("btn_music_on");
                this.btn_music_close = this.GetGameObject("btn_music_off");
                this.btn_sound = this.GetGameObject("btn_sound_on");
                this.btn_sound_close = this.GetGameObject("btn_sound_off");
                this.btn_music.active = AudioMgr_1.default.Instance().bgmVolume == 1;
                this.btn_music_close.active = AudioMgr_1.default.Instance().bgmVolume == 0;
                this.btn_sound.active = AudioMgr_1.default.Instance().sfxVolume == 1;
                this.btn_sound_close.active = AudioMgr_1.default.Instance().sfxVolume == 0;
                return [2 /*return*/];
            });
        });
    };
    SettingView.prototype.onDestroy = function () {
        if (window && window['xxxxx'])
            window['xxxxx']("FtMxhTjtcxNbsBGGrE6ciiZ");
        AdCenter_1.default.Instance().hideGridAd();
        if (this.wxButton)
            this.wxButton.destroy();
        _super.prototype.onDestroy.call(this);
    };
    SettingView.prototype.createAuthorizeBtn = function (btnNode) {
        var _this = this;
        var btnSize = cc.size(btnNode.width, btnNode.height);
        var frameSize = cc.view.getFrameSize();
        var winSize = cc.director.getWinSize();
        // console.log("winSize: ",winSize);
        // console.log("frameSize: ",frameSize);
        //适配不同机型来创建微信授权按钮
        if (window && window['xxxxx'])
            window['xxxxx']("kZtrGFaJKDneDaFF3ab3N");
        var left = (winSize.width * 0.5 + btnNode.x - btnSize.width * 0.5) / winSize.width * frameSize.width;
        var top = (winSize.height * 0.5 - btnNode.y - btnSize.height * 0.5) / winSize.height * frameSize.height;
        var width = btnSize.width / winSize.width * frameSize.width;
        var height = btnSize.height / winSize.height * frameSize.height;
        // console.log("button pos: ",cc.v2(left,top));
        // console.log("button size: ",cc.size(width,height));
        // console.log(left,top,width,height);
        this.wxButton = wx.createFeedbackButton({
            type: 'text',
            text: '',
            style: {
                left: left,
                top: top,
                width: width,
                height: height,
                lineHeight: 20,
                backgroundColor: '',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        });
        if (window && window['xxxxx'])
            window['xxxxx']("EdsZXEewiB6hDQhA8EhmXiY");
        this.wxButton.onTap(function (uinfo) {
            _this.closeUI();
        });
    };
    SettingView.prototype.onUIClicked = function (event, customEventData) {
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_back":
                this.closeUI();
                break;
            case "btn_music_on":
            case "btn_music_off":
                this.btn_music.active = !this.btn_music.active;
                this.btn_music_close.active = !this.btn_music_close.active;
                AudioMgr_1.default.Instance().setMusicVolume(this.btn_music.active ? 1 : 0, true);
                // AudioMgr.Instance().setSFXVolume(this.btn_music.active ? 1 : 0, true);
                break;
            case "btn_sound_on":
            case "btn_sound_off":
                this.btn_sound.active = !this.btn_sound.active;
                this.btn_sound_close.active = !this.btn_sound_close.active;
                if (window && window['xxxxx'])
                    window['xxxxx']("4tRM5a6NmNMd4G");
                AudioMgr_1.default.Instance().setMXVolume(this.btn_sound.active ? 1 : 0, true);
                // AudioMgr.Instance().setSFXVolume(this.btn_music.active ? 1 : 0, true);
                break;
            case "btn_share":
                Utils_1.default.wxShare();
                break;
            case "btn_download":
                ChickData_1.default.user.setData(this.server_data['user']);
                this.closeUI();
                ChickData_1.default.save();
                cc.director.loadScene("hall");
                break;
        }
    };
    SettingView = __decorate([
        ccclass
    ], SettingView);
    return SettingView;
}(BaseUI_1.default));
exports.default = SettingView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNldHRpbmdWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFdkQ7SUFBeUMsK0JBQU07SUFBL0M7UUFBQSxxRUE4R0M7UUE1R0csZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBc0J4QixpQkFBVyxHQUFHLElBQUksQ0FBQztRQVVwQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQXdFM0IsQ0FBQztJQXRHUywyQkFBSyxHQUFYOzs7Z0JBQ0ksSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BELGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBRWpDLGtEQUFrRDtnQkFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JB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QixLQUFLLGVBQWU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7Z0JBQzNELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2hFLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckUseUVBQXlFO2dCQUN6RSxNQUFNO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLGVBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsTUFBTTtZQUNWLEtBQUssY0FBYztnQkFDZixtQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2dCQUNoRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQzdCLE1BQU07U0FFYjtJQUNMLENBQUM7SUE3R2dCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E4Ry9CO0lBQUQsa0JBQUM7Q0E5R0QsQUE4R0MsQ0E5R3dDLGdCQUFNLEdBOEc5QztrQkE5R29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCB3eCA9IHdpbmRvd1tcInd4XCJdIHx8IHdpbmRvd1tcInR0XCJdIHx8IHdpbmRvd1tcInFxXCJdXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICBidG5fbXVzaWM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuX211c2ljX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBidG5fc291bmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuX3NvdW5kX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJrclwiKTtcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5zaG93R3JpZEFkKCk7XHJcblxyXG4gICAgICAgIC8vIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcInVpX29wZW5fcG9wdXBfMVwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9tdXNpYyA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9tdXNpY19vblwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9tdXNpY19jbG9zZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9tdXNpY19vZmZcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX3NvdW5kID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3NvdW5kX29uXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX3NvdW5kX2Nsb3NlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3NvdW5kX29mZlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fbXVzaWMuYWN0aXZlID0gQXVkaW9NZ3IuSW5zdGFuY2UoKS5iZ21Wb2x1bWUgPT0gMTtcclxuICAgICAgICB0aGlzLmJ0bl9tdXNpY19jbG9zZS5hY3RpdmUgPSBBdWRpb01nci5JbnN0YW5jZSgpLmJnbVZvbHVtZSA9PSAwO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9zb3VuZC5hY3RpdmUgPSBBdWRpb01nci5JbnN0YW5jZSgpLnNmeFZvbHVtZSA9PSAxO1xyXG4gICAgICAgIHRoaXMuYnRuX3NvdW5kX2Nsb3NlLmFjdGl2ZSA9IEF1ZGlvTWdyLkluc3RhbmNlKCkuc2Z4Vm9sdW1lID09IDA7XHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJfZGF0YSA9IG51bGw7XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkZ0TXhoVGp0Y3hOYnNCR0dyRTZjaWlaXCIpO1xuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLmhpZGVHcmlkQWQoKTtcclxuICAgICAgICBpZiAodGhpcy53eEJ1dHRvbikgdGhpcy53eEJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHd4QnV0dG9uID0gbnVsbDtcclxuICAgIGNyZWF0ZUF1dGhvcml6ZUJ0bihidG5Ob2RlOiBjYy5Ob2RlKSB7IC8v5Yib5bu65b6u5L+h5Y+N6aaI5oyJ6ZKuXHJcbiAgICAgICAgbGV0IGJ0blNpemUgPSBjYy5zaXplKGJ0bk5vZGUud2lkdGgsIGJ0bk5vZGUuaGVpZ2h0KTtcclxuICAgICAgICBsZXQgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLmRpcmVjdG9yLmdldFdpblNpemUoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpblNpemU6IFwiLHdpblNpemUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJhbWVTaXplOiBcIixmcmFtZVNpemUpO1xyXG4gICAgICAgIC8v6YCC6YWN5LiN5ZCM5py65Z6L5p2l5Yib5bu65b6u5L+h5o6I5p2D5oyJ6ZKuXHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwia1p0ckdGYUpLRG5lRGFGRjNhYjNOXCIpO1xuICAgICAgICBsZXQgbGVmdCA9ICh3aW5TaXplLndpZHRoICogMC41ICsgYnRuTm9kZS54IC0gYnRuU2l6ZS53aWR0aCAqIDAuNSkgLyB3aW5TaXplLndpZHRoICogZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgIGxldCB0b3AgPSAod2luU2l6ZS5oZWlnaHQgKiAwLjUgLSBidG5Ob2RlLnkgLSBidG5TaXplLmhlaWdodCAqIDAuNSkgLyB3aW5TaXplLmhlaWdodCAqIGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gYnRuU2l6ZS53aWR0aCAvIHdpblNpemUud2lkdGggKiBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGJ0blNpemUuaGVpZ2h0IC8gd2luU2l6ZS5oZWlnaHQgKiBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYnV0dG9uIHBvczogXCIsY2MudjIobGVmdCx0b3ApKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJ1dHRvbiBzaXplOiBcIixjYy5zaXplKHdpZHRoLGhlaWdodCkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlZnQsdG9wLHdpZHRoLGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy53eEJ1dHRvbiA9IHd4LmNyZWF0ZUZlZWRiYWNrQnV0dG9uKHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkVkc1pYRWV3aUI2aERRaEE4RWhtWGlZXCIpO1xuICAgICAgICB0aGlzLnd4QnV0dG9uLm9uVGFwKCh1aW5mbykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2JhY2tcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9tdXNpY19vblwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX211c2ljX29mZlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fbXVzaWMuYWN0aXZlID0gIXRoaXMuYnRuX211c2ljLmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX211c2ljX2Nsb3NlLmFjdGl2ZSA9ICF0aGlzLmJ0bl9tdXNpY19jbG9zZS5hY3RpdmU7XHJcbiAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnNldE11c2ljVm9sdW1lKHRoaXMuYnRuX211c2ljLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0U0ZYVm9sdW1lKHRoaXMuYnRuX211c2ljLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NvdW5kX29uXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc291bmRfb2ZmXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9zb3VuZC5hY3RpdmUgPSAhdGhpcy5idG5fc291bmQuYWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fc291bmRfY2xvc2UuYWN0aXZlID0gIXRoaXMuYnRuX3NvdW5kX2Nsb3NlLmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjR0Uk01YTZObU5NZDRHXCIpO1xuICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0TVhWb2x1bWUodGhpcy5idG5fc291bmQuYWN0aXZlID8gMSA6IDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gQXVkaW9NZ3IuSW5zdGFuY2UoKS5zZXRTRlhWb2x1bWUodGhpcy5idG5fbXVzaWMuYWN0aXZlID8gMSA6IDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2hhcmVcIjpcclxuICAgICAgICAgICAgICAgIFV0aWxzLnd4U2hhcmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Rvd25sb2FkXCI6XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5zZXREYXRhKHRoaXMuc2VydmVyX2RhdGFbJ3VzZXInXSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhhbGxcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19