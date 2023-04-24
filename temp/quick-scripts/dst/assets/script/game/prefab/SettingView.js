
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
var Native_1 = require("../../utils/Native");
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
            case "btnPrivacy":
                Native_1.default.openWebView('https://www.huadcx.com/privacy.html');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNldHRpbmdWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1Qyw2Q0FBd0M7QUFDeEMsMkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXZEO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBMkdDO1FBekdHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQXFCeEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFRcEIsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUF3RTNCLENBQUM7SUFuR1MsMkJBQUssR0FBWDs7O2dCQUNJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBRWpDLGtEQUFrRDtnQkFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRTNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFD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QyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsTUFBTTtZQUNWLEtBQUssY0FBYztnQkFDZixtQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2dCQUNoRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQzdCLE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsZ0JBQU0sQ0FBQyxXQUFXLENBQUMscUNBQXFDLENBQUMsQ0FBQTtnQkFDekQsTUFBTTtTQUViO0lBQ0wsQ0FBQztJQTFHZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTJHL0I7SUFBRCxrQkFBQztDQTNHRCxBQTJHQyxDQTNHd0MsZ0JBQU0sR0EyRzlDO2tCQTNHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgTmF0aXZlIGZyb20gXCIuLi8uLi91dGlscy9OYXRpdmVcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCB3eCA9IHdpbmRvd1tcInd4XCJdIHx8IHdpbmRvd1tcInR0XCJdIHx8IHdpbmRvd1tcInFxXCJdXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICBidG5fbXVzaWM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuX211c2ljX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBidG5fc291bmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuX3NvdW5kX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dHcmlkQWQoKTtcclxuXHJcbiAgICAgICAgLy8gQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwidWlfb3Blbl9wb3B1cF8xXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX211c2ljID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX211c2ljX29uXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX211c2ljX2Nsb3NlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX211c2ljX29mZlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fc291bmQgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fc291bmRfb25cIik7XHJcbiAgICAgICAgdGhpcy5idG5fc291bmRfY2xvc2UgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fc291bmRfb2ZmXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9tdXNpYy5hY3RpdmUgPSBBdWRpb01nci5JbnN0YW5jZSgpLmJnbVZvbHVtZSA9PSAxO1xyXG4gICAgICAgIHRoaXMuYnRuX211c2ljX2Nsb3NlLmFjdGl2ZSA9IEF1ZGlvTWdyLkluc3RhbmNlKCkuYmdtVm9sdW1lID09IDA7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX3NvdW5kLmFjdGl2ZSA9IEF1ZGlvTWdyLkluc3RhbmNlKCkuc2Z4Vm9sdW1lID09IDE7XHJcbiAgICAgICAgdGhpcy5idG5fc291bmRfY2xvc2UuYWN0aXZlID0gQXVkaW9NZ3IuSW5zdGFuY2UoKS5zZnhWb2x1bWUgPT0gMDtcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlcnZlcl9kYXRhID0gbnVsbDtcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5oaWRlR3JpZEFkKCk7XHJcbiAgICAgICAgaWYgKHRoaXMud3hCdXR0b24pIHRoaXMud3hCdXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3eEJ1dHRvbiA9IG51bGw7XHJcbiAgICBjcmVhdGVBdXRob3JpemVCdG4oYnRuTm9kZTogY2MuTm9kZSkgeyAvL+WIm+W7uuW+ruS/oeWPjemmiOaMiemSrlxyXG4gICAgICAgIGxldCBidG5TaXplID0gY2Muc2l6ZShidG5Ob2RlLndpZHRoLCBidG5Ob2RlLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgbGV0IHdpblNpemUgPSBjYy5kaXJlY3Rvci5nZXRXaW5TaXplKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aW5TaXplOiBcIix3aW5TaXplKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZyYW1lU2l6ZTogXCIsZnJhbWVTaXplKTtcclxuICAgICAgICAvL+mAgumFjeS4jeWQjOacuuWei+adpeWIm+W7uuW+ruS/oeaOiOadg+aMiemSrlxyXG4gICAgICAgIGxldCBsZWZ0ID0gKHdpblNpemUud2lkdGggKiAwLjUgKyBidG5Ob2RlLnggLSBidG5TaXplLndpZHRoICogMC41KSAvIHdpblNpemUud2lkdGggKiBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgbGV0IHRvcCA9ICh3aW5TaXplLmhlaWdodCAqIDAuNSAtIGJ0bk5vZGUueSAtIGJ0blNpemUuaGVpZ2h0ICogMC41KSAvIHdpblNpemUuaGVpZ2h0ICogZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICBsZXQgd2lkdGggPSBidG5TaXplLndpZHRoIC8gd2luU2l6ZS53aWR0aCAqIGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gYnRuU2l6ZS5oZWlnaHQgLyB3aW5TaXplLmhlaWdodCAqIGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJidXR0b24gcG9zOiBcIixjYy52MihsZWZ0LHRvcCkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYnV0dG9uIHNpemU6IFwiLGNjLnNpemUod2lkdGgsaGVpZ2h0KSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGVmdCx0b3Asd2lkdGgsaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnd4QnV0dG9uID0gd3guY3JlYXRlRmVlZGJhY2tCdXR0b24oe1xyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJycsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy53eEJ1dHRvbi5vblRhcCgodWluZm8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9iYWNrXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbXVzaWNfb25cIjpcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9tdXNpY19vZmZcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX211c2ljLmFjdGl2ZSA9ICF0aGlzLmJ0bl9tdXNpYy5hY3RpdmU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9tdXNpY19jbG9zZS5hY3RpdmUgPSAhdGhpcy5idG5fbXVzaWNfY2xvc2UuYWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5zZXRNdXNpY1ZvbHVtZSh0aGlzLmJ0bl9tdXNpYy5hY3RpdmUgPyAxIDogMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBBdWRpb01nci5JbnN0YW5jZSgpLnNldFNGWFZvbHVtZSh0aGlzLmJ0bl9tdXNpYy5hY3RpdmUgPyAxIDogMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9zb3VuZF9vblwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NvdW5kX29mZlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fc291bmQuYWN0aXZlID0gIXRoaXMuYnRuX3NvdW5kLmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX3NvdW5kX2Nsb3NlLmFjdGl2ZSA9ICF0aGlzLmJ0bl9zb3VuZF9jbG9zZS5hY3RpdmU7XHJcbiAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnNldE1YVm9sdW1lKHRoaXMuYnRuX3NvdW5kLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIEF1ZGlvTWdyLkluc3RhbmNlKCkuc2V0U0ZYVm9sdW1lKHRoaXMuYnRuX211c2ljLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NoYXJlXCI6XHJcbiAgICAgICAgICAgICAgICBVdGlscy53eFNoYXJlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9kb3dubG9hZFwiOlxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2V0RGF0YSh0aGlzLnNlcnZlcl9kYXRhWyd1c2VyJ10pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0blByaXZhY3lcIjpcclxuICAgICAgICAgICAgICAgIE5hdGl2ZS5vcGVuV2ViVmlldygnaHR0cHM6Ly93d3cuaHVhZGN4LmNvbS9wcml2YWN5Lmh0bWwnKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=