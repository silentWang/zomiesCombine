"use strict";
cc._RF.push(module, 'a80eb23B/dO9568DxP6flX0', 'SettingUI');
// script/game/prefab/SettingUI.ts

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
var Data_1 = require("../../manager/Data");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var wx = window["wx"] || window["tt"] || window["qq"];
var SettingUI = /** @class */ (function (_super) {
    __extends(SettingUI, _super);
    function SettingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_music = null;
        _this.btn_music_close = null;
        _this.btn_sound = null;
        _this.btn_sound_close = null;
        _this.server_data = null;
        _this.wxButton = null;
        return _this;
    }
    SettingUI.prototype.start = function () {
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
    SettingUI.prototype.onDestroy = function () {
        AdCenter_1.default.Instance().hideGridAd();
        if (this.wxButton)
            this.wxButton.destroy();
        _super.prototype.onDestroy.call(this);
    };
    SettingUI.prototype.createAuthorizeBtn = function (btnNode) {
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
    SettingUI.prototype.onBtnClicked = function (event, customEventData) {
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
                Data_1.default.user.setData(this.server_data['user']);
                this.closeUI();
                Data_1.default.save();
                cc.director.loadScene("hall");
                break;
        }
    };
    SettingUI = __decorate([
        ccclass
    ], SettingUI);
    return SettingUI;
}(BaseUI_1.default));
exports.default = SettingUI;

cc._RF.pop();