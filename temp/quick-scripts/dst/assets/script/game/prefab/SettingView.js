
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
        this.wxButton.onTap(function (uinfo) {
            _this.closeUI();
        });
    };
    SettingView.prototype.onBtnClicked = function (event, customEventData) {
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_back":
                this.closeUI();
                break;
            case "btn_music_on":
            case "btn_music_off":
                this.btn_music.active = !this.btn_music.active;
                this.btn_music_close.active = !this.btn_music_close.active;
                AudioMgr_1.default.Instance().setBGMVolume(this.btn_music.active ? 1 : 0, true);
                // AudioMgr.Instance().setSFXVolume(this.btn_music.active ? 1 : 0, true);
                break;
            case "btn_sound_on":
            case "btn_sound_off":
                this.btn_sound.active = !this.btn_sound.active;
                this.btn_sound_close.active = !this.btn_sound_close.active;
                AudioMgr_1.default.Instance().setSFXVolume(this.btn_sound.active ? 1 : 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNldHRpbmdWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFdkQ7SUFBeUMsK0JBQU07SUFBL0M7UUFBQSxxRUF5R0M7UUF2R0csZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBcUJ4QixpQkFBVyxHQUFHLElBQUksQ0FBQztRQVNwQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQXFFM0IsQ0FBQztJQWpHUywyQkFBSyxHQUFYOzs7Z0JBQ0ksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFFakMsa0RBQWtEO2dCQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElB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QUFDO2dCQUNoQixNQUFNO1lBQ1YsS0FBSyxjQUFjO2dCQUNmLG1CQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDN0IsTUFBTTtTQUViO0lBQ0wsQ0FBQztJQXhHZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXlHL0I7SUFBRCxrQkFBQztDQXpHRCxBQXlHQyxDQXpHd0MsZ0JBQU0sR0F5RzlDO2tCQXpHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IHd4ID0gd2luZG93W1wid3hcIl0gfHwgd2luZG93W1widHRcIl0gfHwgd2luZG93W1wicXFcIl1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIGJ0bl9tdXNpYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG5fbXVzaWNfY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGJ0bl9zb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG5fc291bmRfY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xyXG5cclxuICAgICAgICAvLyBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJ1aV9vcGVuX3BvcHVwXzFcIik7XHJcbiAgICAgICAgdGhpcy5idG5fbXVzaWMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fbXVzaWNfb25cIik7XHJcbiAgICAgICAgdGhpcy5idG5fbXVzaWNfY2xvc2UgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fbXVzaWNfb2ZmXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9zb3VuZCA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9zb3VuZF9vblwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9zb3VuZF9jbG9zZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9zb3VuZF9vZmZcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX211c2ljLmFjdGl2ZSA9IEF1ZGlvTWdyLkluc3RhbmNlKCkuYmdtVm9sdW1lID09IDE7XHJcbiAgICAgICAgdGhpcy5idG5fbXVzaWNfY2xvc2UuYWN0aXZlID0gQXVkaW9NZ3IuSW5zdGFuY2UoKS5iZ21Wb2x1bWUgPT0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fc291bmQuYWN0aXZlID0gQXVkaW9NZ3IuSW5zdGFuY2UoKS5zZnhWb2x1bWUgPT0gMTtcclxuICAgICAgICB0aGlzLmJ0bl9zb3VuZF9jbG9zZS5hY3RpdmUgPSBBdWRpb01nci5JbnN0YW5jZSgpLnNmeFZvbHVtZSA9PSAwO1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VydmVyX2RhdGEgPSBudWxsO1xyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLmhpZGVHcmlkQWQoKTtcclxuICAgICAgICBpZiAodGhpcy53eEJ1dHRvbikgdGhpcy53eEJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHd4QnV0dG9uID0gbnVsbDtcclxuICAgIGNyZWF0ZUF1dGhvcml6ZUJ0bihidG5Ob2RlOiBjYy5Ob2RlKSB7IC8v5Yib5bu65b6u5L+h5Y+N6aaI5oyJ6ZKuXHJcbiAgICAgICAgbGV0IGJ0blNpemUgPSBjYy5zaXplKGJ0bk5vZGUud2lkdGgsIGJ0bk5vZGUuaGVpZ2h0KTtcclxuICAgICAgICBsZXQgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLmRpcmVjdG9yLmdldFdpblNpemUoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpblNpemU6IFwiLHdpblNpemUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJhbWVTaXplOiBcIixmcmFtZVNpemUpO1xyXG4gICAgICAgIC8v6YCC6YWN5LiN5ZCM5py65Z6L5p2l5Yib5bu65b6u5L+h5o6I5p2D5oyJ6ZKuXHJcbiAgICAgICAgbGV0IGxlZnQgPSAod2luU2l6ZS53aWR0aCAqIDAuNSArIGJ0bk5vZGUueCAtIGJ0blNpemUud2lkdGggKiAwLjUpIC8gd2luU2l6ZS53aWR0aCAqIGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgdG9wID0gKHdpblNpemUuaGVpZ2h0ICogMC41IC0gYnRuTm9kZS55IC0gYnRuU2l6ZS5oZWlnaHQgKiAwLjUpIC8gd2luU2l6ZS5oZWlnaHQgKiBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGJ0blNpemUud2lkdGggLyB3aW5TaXplLndpZHRoICogZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBidG5TaXplLmhlaWdodCAvIHdpblNpemUuaGVpZ2h0ICogZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJ1dHRvbiBwb3M6IFwiLGNjLnYyKGxlZnQsdG9wKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJidXR0b24gc2l6ZTogXCIsY2Muc2l6ZSh3aWR0aCxoZWlnaHQpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZWZ0LHRvcCx3aWR0aCxoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMud3hCdXR0b24gPSB3eC5jcmVhdGVGZWVkYmFja0J1dHRvbih7XHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnd4QnV0dG9uLm9uVGFwKCh1aW5mbykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX211c2ljX29uXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbXVzaWNfb2ZmXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9tdXNpYy5hY3RpdmUgPSAhdGhpcy5idG5fbXVzaWMuYWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fbXVzaWNfY2xvc2UuYWN0aXZlID0gIXRoaXMuYnRuX211c2ljX2Nsb3NlLmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0QkdNVm9sdW1lKHRoaXMuYnRuX211c2ljLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0U0ZYVm9sdW1lKHRoaXMuYnRuX211c2ljLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NvdW5kX29uXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc291bmRfb2ZmXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9zb3VuZC5hY3RpdmUgPSAhdGhpcy5idG5fc291bmQuYWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fc291bmRfY2xvc2UuYWN0aXZlID0gIXRoaXMuYnRuX3NvdW5kX2Nsb3NlLmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0U0ZYVm9sdW1lKHRoaXMuYnRuX3NvdW5kLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0U0ZYVm9sdW1lKHRoaXMuYnRuX211c2ljLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NoYXJlXCI6XHJcbiAgICAgICAgICAgICAgICBVdGlscy53eFNoYXJlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9kb3dubG9hZFwiOlxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2V0RGF0YSh0aGlzLnNlcnZlcl9kYXRhWyd1c2VyJ10pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==