
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLDJDQUFzQztBQUdoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUV2RDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQXdHQztRQXRHRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFxQnhCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBUXBCLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBcUUzQixDQUFDO0lBaEdTLDJCQUFLLEdBQVg7OztnQkFDSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUVqQyxrREFBa0Q7Z0JBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUUzRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxD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Z0JBQ2hCLE1BQU07WUFDVixLQUFLLGNBQWM7Z0JBQ2YsbUJBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtnQkFDaEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUM3QixNQUFNO1NBRWI7SUFDTCxDQUFDO0lBdkdnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBd0cvQjtJQUFELGtCQUFDO0NBeEdELEFBd0dDLENBeEd3QyxnQkFBTSxHQXdHOUM7a0JBeEdvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3Qgd3ggPSB3aW5kb3dbXCJ3eFwiXSB8fCB3aW5kb3dbXCJ0dFwiXSB8fCB3aW5kb3dbXCJxcVwiXVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgQmFzZVVJIHtcblxuICAgIGJ0bl9tdXNpYzogY2MuTm9kZSA9IG51bGw7XG4gICAgYnRuX211c2ljX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGJ0bl9zb3VuZDogY2MuTm9kZSA9IG51bGw7XG4gICAgYnRuX3NvdW5kX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGFzeW5jIHN0YXJ0KCkge1xuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcblxuICAgICAgICAvLyBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJ1aV9vcGVuX3BvcHVwXzFcIik7XG4gICAgICAgIHRoaXMuYnRuX211c2ljID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX211c2ljX29uXCIpO1xuICAgICAgICB0aGlzLmJ0bl9tdXNpY19jbG9zZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9tdXNpY19vZmZcIik7XG5cbiAgICAgICAgdGhpcy5idG5fc291bmQgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fc291bmRfb25cIik7XG4gICAgICAgIHRoaXMuYnRuX3NvdW5kX2Nsb3NlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3NvdW5kX29mZlwiKTtcblxuICAgICAgICB0aGlzLmJ0bl9tdXNpYy5hY3RpdmUgPSBBdWRpb01nci5JbnN0YW5jZSgpLmJnbVZvbHVtZSA9PSAxO1xuICAgICAgICB0aGlzLmJ0bl9tdXNpY19jbG9zZS5hY3RpdmUgPSBBdWRpb01nci5JbnN0YW5jZSgpLmJnbVZvbHVtZSA9PSAwO1xuXG4gICAgICAgIHRoaXMuYnRuX3NvdW5kLmFjdGl2ZSA9IEF1ZGlvTWdyLkluc3RhbmNlKCkuc2Z4Vm9sdW1lID09IDE7XG4gICAgICAgIHRoaXMuYnRuX3NvdW5kX2Nsb3NlLmFjdGl2ZSA9IEF1ZGlvTWdyLkluc3RhbmNlKCkuc2Z4Vm9sdW1lID09IDA7XG5cbiAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlcnZlcl9kYXRhID0gbnVsbDtcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XG4gICAgICAgIGlmICh0aGlzLnd4QnV0dG9uKSB0aGlzLnd4QnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHd4QnV0dG9uID0gbnVsbDtcbiAgICBjcmVhdGVBdXRob3JpemVCdG4oYnRuTm9kZTogY2MuTm9kZSkgeyAvL+WIm+W7uuW+ruS/oeWPjemmiOaMiemSrlxuICAgICAgICBsZXQgYnRuU2l6ZSA9IGNjLnNpemUoYnRuTm9kZS53aWR0aCwgYnRuTm9kZS5oZWlnaHQpO1xuICAgICAgICBsZXQgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgbGV0IHdpblNpemUgPSBjYy5kaXJlY3Rvci5nZXRXaW5TaXplKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2luU2l6ZTogXCIsd2luU2l6ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJhbWVTaXplOiBcIixmcmFtZVNpemUpO1xuICAgICAgICAvL+mAgumFjeS4jeWQjOacuuWei+adpeWIm+W7uuW+ruS/oeaOiOadg+aMiemSrlxuICAgICAgICBsZXQgbGVmdCA9ICh3aW5TaXplLndpZHRoICogMC41ICsgYnRuTm9kZS54IC0gYnRuU2l6ZS53aWR0aCAqIDAuNSkgLyB3aW5TaXplLndpZHRoICogZnJhbWVTaXplLndpZHRoO1xuICAgICAgICBsZXQgdG9wID0gKHdpblNpemUuaGVpZ2h0ICogMC41IC0gYnRuTm9kZS55IC0gYnRuU2l6ZS5oZWlnaHQgKiAwLjUpIC8gd2luU2l6ZS5oZWlnaHQgKiBmcmFtZVNpemUuaGVpZ2h0O1xuICAgICAgICBsZXQgd2lkdGggPSBidG5TaXplLndpZHRoIC8gd2luU2l6ZS53aWR0aCAqIGZyYW1lU2l6ZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IGJ0blNpemUuaGVpZ2h0IC8gd2luU2l6ZS5oZWlnaHQgKiBmcmFtZVNpemUuaGVpZ2h0O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJ1dHRvbiBwb3M6IFwiLGNjLnYyKGxlZnQsdG9wKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYnV0dG9uIHNpemU6IFwiLGNjLnNpemUod2lkdGgsaGVpZ2h0KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlZnQsdG9wLHdpZHRoLGhlaWdodCk7XG4gICAgICAgIHRoaXMud3hCdXR0b24gPSB3eC5jcmVhdGVGZWVkYmFja0J1dHRvbih7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy53eEJ1dHRvbi5vblRhcCgodWluZm8pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9iYWNrXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbXVzaWNfb25cIjpcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbXVzaWNfb2ZmXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5idG5fbXVzaWMuYWN0aXZlID0gIXRoaXMuYnRuX211c2ljLmFjdGl2ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9tdXNpY19jbG9zZS5hY3RpdmUgPSAhdGhpcy5idG5fbXVzaWNfY2xvc2UuYWN0aXZlO1xuICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0TXVzaWNWb2x1bWUodGhpcy5idG5fbXVzaWMuYWN0aXZlID8gMSA6IDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0U0ZYVm9sdW1lKHRoaXMuYnRuX211c2ljLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc291bmRfb25cIjpcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc291bmRfb2ZmXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5idG5fc291bmQuYWN0aXZlID0gIXRoaXMuYnRuX3NvdW5kLmFjdGl2ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9zb3VuZF9jbG9zZS5hY3RpdmUgPSAhdGhpcy5idG5fc291bmRfY2xvc2UuYWN0aXZlO1xuICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0TVhWb2x1bWUodGhpcy5idG5fc291bmQuYWN0aXZlID8gMSA6IDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0U0ZYVm9sdW1lKHRoaXMuYnRuX211c2ljLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2hhcmVcIjpcbiAgICAgICAgICAgICAgICBVdGlscy53eFNoYXJlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Rvd25sb2FkXCI6XG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2V0RGF0YSh0aGlzLnNlcnZlcl9kYXRhWyd1c2VyJ10pXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==