
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLDJDQUFzQztBQUdoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUV2RDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQThHQztRQTVHRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFzQnhCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBVXBCLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBd0UzQixDQUFDO0lBdEdTLDJCQUFLLEdBQVg7OztnQkFDSSxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEQsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFFakMsa0RBQWtEO2dCQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFM0Qs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QUssZUFBZTtnQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztnQkFDM0QsSUFBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDaEUsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyRSx5RUFBeUU7Z0JBQ3pFLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osZUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixNQUFNO1lBQ1YsS0FBSyxjQUFjO2dCQUNmLG1CQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDN0IsTUFBTTtTQUViO0lBQ0wsQ0FBQztJQTdHZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQThHL0I7SUFBRCxrQkFBQztDQTlHRCxBQThHQyxDQTlHd0MsZ0JBQU0sR0E4RzlDO2tCQTlHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmNvbnN0IHd4ID0gd2luZG93W1wid3hcIl0gfHwgd2luZG93W1widHRcIl0gfHwgd2luZG93W1wicXFcIl1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nVmlldyBleHRlbmRzIEJhc2VVSSB7XG5cbiAgICBidG5fbXVzaWM6IGNjLk5vZGUgPSBudWxsO1xuICAgIGJ0bl9tdXNpY19jbG9zZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBidG5fc291bmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIGJ0bl9zb3VuZF9jbG9zZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBhc3luYyBzdGFydCgpIHtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwia3JcIik7XG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0dyaWRBZCgpO1xuXG4gICAgICAgIC8vIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcInVpX29wZW5fcG9wdXBfMVwiKTtcbiAgICAgICAgdGhpcy5idG5fbXVzaWMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fbXVzaWNfb25cIik7XG4gICAgICAgIHRoaXMuYnRuX211c2ljX2Nsb3NlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX211c2ljX29mZlwiKTtcblxuICAgICAgICB0aGlzLmJ0bl9zb3VuZCA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9zb3VuZF9vblwiKTtcbiAgICAgICAgdGhpcy5idG5fc291bmRfY2xvc2UgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fc291bmRfb2ZmXCIpO1xuXG4gICAgICAgIHRoaXMuYnRuX211c2ljLmFjdGl2ZSA9IEF1ZGlvTWdyLkluc3RhbmNlKCkuYmdtVm9sdW1lID09IDE7XG4gICAgICAgIHRoaXMuYnRuX211c2ljX2Nsb3NlLmFjdGl2ZSA9IEF1ZGlvTWdyLkluc3RhbmNlKCkuYmdtVm9sdW1lID09IDA7XG5cbiAgICAgICAgdGhpcy5idG5fc291bmQuYWN0aXZlID0gQXVkaW9NZ3IuSW5zdGFuY2UoKS5zZnhWb2x1bWUgPT0gMTtcbiAgICAgICAgdGhpcy5idG5fc291bmRfY2xvc2UuYWN0aXZlID0gQXVkaW9NZ3IuSW5zdGFuY2UoKS5zZnhWb2x1bWUgPT0gMDtcblxuICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgc2VydmVyX2RhdGEgPSBudWxsO1xuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiRnRNeGhUanRjeE5ic0JHR3JFNmNpaVpcIik7XG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuaGlkZUdyaWRBZCgpO1xuICAgICAgICBpZiAodGhpcy53eEJ1dHRvbikgdGhpcy53eEJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3eEJ1dHRvbiA9IG51bGw7XG4gICAgY3JlYXRlQXV0aG9yaXplQnRuKGJ0bk5vZGU6IGNjLk5vZGUpIHsgLy/liJvlu7rlvq7kv6Hlj43ppojmjInpkq5cbiAgICAgICAgbGV0IGJ0blNpemUgPSBjYy5zaXplKGJ0bk5vZGUud2lkdGgsIGJ0bk5vZGUuaGVpZ2h0KTtcbiAgICAgICAgbGV0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGxldCB3aW5TaXplID0gY2MuZGlyZWN0b3IuZ2V0V2luU2l6ZSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpblNpemU6IFwiLHdpblNpemUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZyYW1lU2l6ZTogXCIsZnJhbWVTaXplKTtcbiAgICAgICAgLy/pgILphY3kuI3lkIzmnLrlnovmnaXliJvlu7rlvq7kv6HmjojmnYPmjInpkq5cbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwia1p0ckdGYUpLRG5lRGFGRjNhYjNOXCIpO1xuICAgICAgICBsZXQgbGVmdCA9ICh3aW5TaXplLndpZHRoICogMC41ICsgYnRuTm9kZS54IC0gYnRuU2l6ZS53aWR0aCAqIDAuNSkgLyB3aW5TaXplLndpZHRoICogZnJhbWVTaXplLndpZHRoO1xuICAgICAgICBsZXQgdG9wID0gKHdpblNpemUuaGVpZ2h0ICogMC41IC0gYnRuTm9kZS55IC0gYnRuU2l6ZS5oZWlnaHQgKiAwLjUpIC8gd2luU2l6ZS5oZWlnaHQgKiBmcmFtZVNpemUuaGVpZ2h0O1xuICAgICAgICBsZXQgd2lkdGggPSBidG5TaXplLndpZHRoIC8gd2luU2l6ZS53aWR0aCAqIGZyYW1lU2l6ZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IGJ0blNpemUuaGVpZ2h0IC8gd2luU2l6ZS5oZWlnaHQgKiBmcmFtZVNpemUuaGVpZ2h0O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJ1dHRvbiBwb3M6IFwiLGNjLnYyKGxlZnQsdG9wKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYnV0dG9uIHNpemU6IFwiLGNjLnNpemUod2lkdGgsaGVpZ2h0KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlZnQsdG9wLHdpZHRoLGhlaWdodCk7XG4gICAgICAgIHRoaXMud3hCdXR0b24gPSB3eC5jcmVhdGVGZWVkYmFja0J1dHRvbih7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiRWRzWlhFZXdpQjZoRFFoQThFaG1YaVlcIik7XG4gICAgICAgIHRoaXMud3hCdXR0b24ub25UYXAoKHVpbmZvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYmFja1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX211c2ljX29uXCI6XG4gICAgICAgICAgICBjYXNlIFwiYnRuX211c2ljX29mZlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX211c2ljLmFjdGl2ZSA9ICF0aGlzLmJ0bl9tdXNpYy5hY3RpdmU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5fbXVzaWNfY2xvc2UuYWN0aXZlID0gIXRoaXMuYnRuX211c2ljX2Nsb3NlLmFjdGl2ZTtcbiAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnNldE11c2ljVm9sdW1lKHRoaXMuYnRuX211c2ljLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBBdWRpb01nci5JbnN0YW5jZSgpLnNldFNGWFZvbHVtZSh0aGlzLmJ0bl9tdXNpYy5hY3RpdmUgPyAxIDogMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NvdW5kX29uXCI6XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NvdW5kX29mZlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX3NvdW5kLmFjdGl2ZSA9ICF0aGlzLmJ0bl9zb3VuZC5hY3RpdmU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5fc291bmRfY2xvc2UuYWN0aXZlID0gIXRoaXMuYnRuX3NvdW5kX2Nsb3NlLmFjdGl2ZTtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI0dFJNNWE2Tm1OTWQ0R1wiKTtcbiAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnNldE1YVm9sdW1lKHRoaXMuYnRuX3NvdW5kLmFjdGl2ZSA/IDEgOiAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBBdWRpb01nci5JbnN0YW5jZSgpLnNldFNGWFZvbHVtZSh0aGlzLmJ0bl9tdXNpYy5hY3RpdmUgPyAxIDogMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NoYXJlXCI6XG4gICAgICAgICAgICAgICAgVXRpbHMud3hTaGFyZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9kb3dubG9hZFwiOlxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNldERhdGEodGhpcy5zZXJ2ZXJfZGF0YVsndXNlciddKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xuICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFsbFwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=