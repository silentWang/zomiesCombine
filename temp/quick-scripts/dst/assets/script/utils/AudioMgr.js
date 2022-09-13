
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/AudioMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4310qOOsJLaZuNAeTaQNgO', 'AudioMgr');
// script/utils/AudioMgr.ts

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
var Singleton_1 = require("../manager/Singleton");
var Utils_1 = require("./Utils");
var AudioMgr = /** @class */ (function (_super) {
    __extends(AudioMgr, _super);
    function AudioMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgmVolume = 1;
        _this.sfxVolume = 1;
        _this.bgmAudioID = -1;
        _this.audioId = -1;
        // getUrl(url: string): cc.AudioClip {
        //     return cc.loader.getRes("sounds/" + url);
        // }
        _this.bgm_url = "BGM1";
        _this.lastplaysfxtime = {};
        _this.sfxcd = {
            "zb1": 1500,
            "zb2": 1500,
            "hit": 300,
            "merge_success": 100,
            "skill_freeze": 300,
            "skill_slow": 300,
        };
        return _this;
    }
    AudioMgr.prototype.loadSounds = function () {
        var _this = this;
        var t = cc.sys.localStorage.getItem("bgmVolume");
        var t1 = cc.sys.localStorage.getItem("sfxVolume");
        this.bgmVolume = t == 0 ? Number(t) : 1;
        this.sfxVolume = t1 == 0 ? Number(t1) : 1;
        console.log("loadSounds", this.bgmVolume, this.sfxVolume);
        cc.log(this.bgmVolume, this.sfxVolume);
        cc.loader.loadResDir("sounds", function () {
            _this.playBGM("BGM1");
        });
    };
    AudioMgr.prototype.playBGM = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var audioUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.bgm_url = url;
                        return [4 /*yield*/, Utils_1.default.loadRes("sounds:" + url, cc.AudioClip)];
                    case 1:
                        audioUrl = _a.sent();
                        if (this.bgmAudioID >= 0) {
                            cc.audioEngine.stop(this.bgmAudioID);
                        }
                        if (this.bgmVolume > 0) {
                            this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioMgr.prototype.stopSFX = function (audioId) {
        var ok = cc.audioEngine.stop(audioId);
        return ok;
    };
    AudioMgr.prototype.playSFX = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var cd, audioUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // if (GameManager.Instance.fps < 20) return;
                        if (!this.lastplaysfxtime[url])
                            this.lastplaysfxtime[url] = 0;
                        cd = this.sfxcd[url] || 0;
                        if (new Date().getTime() - this.lastplaysfxtime[url] < cd) {
                            return [2 /*return*/];
                        }
                        this.lastplaysfxtime[url] = new Date().getTime();
                        return [4 /*yield*/, Utils_1.default.loadRes("sounds:" + url, cc.AudioClip)];
                    case 1:
                        audioUrl = _a.sent();
                        ; //this.getUrl(url);
                        if (audioUrl && this.sfxVolume > 0) {
                            this.audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
                            return [2 /*return*/, this.audioId];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioMgr.prototype.pauseBGM = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.pause(this.bgmAudioID);
            // cc.log("暂停bgm")
        }
    };
    AudioMgr.prototype.resumBGM = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.resume(this.bgmAudioID);
            // cc.log("恢复bgm")
        }
    };
    AudioMgr.prototype.setBGMVolume = function (v, force) {
        if (force === void 0) { force = false; }
        if (this.bgmVolume != v || force) {
            cc.sys.localStorage.setItem("bgmVolume", v);
            this.bgmVolume = v;
            cc.audioEngine.setVolume(this.bgmAudioID, v);
        }
        if (this.bgmAudioID >= 0) {
            if (v > 0) {
                cc.audioEngine.resume(this.bgmAudioID);
            }
            else {
                cc.audioEngine.pause(this.bgmAudioID);
            }
        }
        else {
            this.playBGM(this.bgm_url);
        }
    };
    AudioMgr.prototype.setSFXVolume = function (v, force) {
        if (force === void 0) { force = false; }
        if (this.sfxVolume != v || force) {
            cc.sys.localStorage.setItem("sfxVolume", v);
            this.sfxVolume = v;
            //设置音效大小会同时设置背景音乐的声音，不设置音效大小，本地音效依然可以受控使用，暂未找到原因
            // cc.audioEngine.setEffectsVolume(v);
        }
    };
    return AudioMgr;
}(Singleton_1.default));
exports.default = AudioMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcQXVkaW9NZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLGlDQUE0QjtBQUM1QjtJQUFzQyw0QkFBUztJQUEvQztRQUFBLHFFQThHQztRQTVHVSxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QixhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFnQnJCLHNDQUFzQztRQUN0QyxnREFBZ0Q7UUFDaEQsSUFBSTtRQUVJLGFBQU8sR0FBVyxNQUFNLENBQUE7UUFpQnhCLHFCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLFdBQUssR0FBRztZQUNaLEtBQUssRUFBQyxJQUFJO1lBQ1YsS0FBSyxFQUFDLElBQUk7WUFDVixLQUFLLEVBQUMsR0FBRztZQUNULGVBQWUsRUFBQyxHQUFHO1lBQ25CLGNBQWMsRUFBQyxHQUFHO1lBQ2xCLFlBQVksRUFBQyxHQUFHO1NBQ25CLENBQUE7O0lBMkRMLENBQUM7SUF0R0csNkJBQVUsR0FBVjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxJQUFJLENBQUMs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Q0FBQztZQUNuQixnREFBZ0Q7WUFDaEQsc0NBQXNDO1NBQ3pDO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQTlHQSxBQThHQyxDQTlHcUMsbUJBQVMsR0E4RzlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi4vbWFuYWdlci9TaW5nbGV0b25cIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4vVXRpbHMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01nciBleHRlbmRzIFNpbmdsZXRvbiB7XHJcblxyXG4gICAgcHVibGljIGJnbVZvbHVtZTogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBzZnhWb2x1bWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgYmdtQXVkaW9JRDogbnVtYmVyID0gLTE7XHJcbiAgICBhdWRpb0lkOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBsb2FkU291bmRzKCkge1xyXG4gICAgICAgIHZhciB0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmdtVm9sdW1lXCIpO1xyXG4gICAgICAgIHZhciB0MSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNmeFZvbHVtZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZ21Wb2x1bWUgPSB0ID09IDAgPyBOdW1iZXIodCkgOiAxO1xyXG4gICAgICAgIHRoaXMuc2Z4Vm9sdW1lID0gdDEgPT0gMCA/IE51bWJlcih0MSkgOiAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZFNvdW5kc1wiLCB0aGlzLmJnbVZvbHVtZSwgdGhpcy5zZnhWb2x1bWUpXHJcblxyXG4gICAgICAgIGNjLmxvZyh0aGlzLmJnbVZvbHVtZSwgdGhpcy5zZnhWb2x1bWUpXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJzb3VuZHNcIiwoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlCR00oXCJCR00xXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldFVybCh1cmw6IHN0cmluZyk6IGNjLkF1ZGlvQ2xpcCB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGNjLmxvYWRlci5nZXRSZXMoXCJzb3VuZHMvXCIgKyB1cmwpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgYmdtX3VybDogc3RyaW5nID0gXCJCR00xXCJcclxuICAgIGFzeW5jIHBsYXlCR00odXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJnbV91cmwgPSB1cmw7XHJcbiAgICAgICAgdmFyIGF1ZGlvVXJsID0gYXdhaXQgVXRpbHMubG9hZFJlcyhcInNvdW5kczpcIit1cmwsY2MuQXVkaW9DbGlwKSBhcyBjYy5BdWRpb0NsaXA7Ly8gdGhpcy5nZXRVcmwodXJsKTtcclxuICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lEID49IDApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmJnbUF1ZGlvSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5iZ21Wb2x1bWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmdtQXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW9VcmwsIHRydWUsIHRoaXMuYmdtVm9sdW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFNGWChhdWRpb0lkOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgb2sgPSBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSWQpO1xyXG4gICAgICAgIHJldHVybiBvaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxhc3RwbGF5c2Z4dGltZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBzZnhjZCA9IHtcclxuICAgICAgICBcInpiMVwiOjE1MDAsXHJcbiAgICAgICAgXCJ6YjJcIjoxNTAwLFxyXG4gICAgICAgIFwiaGl0XCI6MzAwLFxyXG4gICAgICAgIFwibWVyZ2Vfc3VjY2Vzc1wiOjEwMCxcclxuICAgICAgICBcInNraWxsX2ZyZWV6ZVwiOjMwMCxcclxuICAgICAgICBcInNraWxsX3Nsb3dcIjozMDAsXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVNGWCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGlmIChHYW1lTWFuYWdlci5JbnN0YW5jZS5mcHMgPCAyMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubGFzdHBsYXlzZnh0aW1lW3VybF0pXHJcbiAgICAgICAgICAgIHRoaXMubGFzdHBsYXlzZnh0aW1lW3VybF0gPSAwO1xyXG4gICAgICAgIGxldCBjZCA9IHRoaXMuc2Z4Y2RbdXJsXSB8fCAwO1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMubGFzdHBsYXlzZnh0aW1lW3VybF0gPCBjZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdHBsYXlzZnh0aW1lW3VybF0gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgdmFyIGF1ZGlvVXJsID0gYXdhaXQgVXRpbHMubG9hZFJlcyhcInNvdW5kczpcIit1cmwsY2MuQXVkaW9DbGlwKSBhcyBjYy5BdWRpb0NsaXA7IDsvL3RoaXMuZ2V0VXJsKHVybCk7XHJcbiAgICAgICAgaWYgKGF1ZGlvVXJsJiZ0aGlzLnNmeFZvbHVtZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb1VybCwgZmFsc2UsIHRoaXMuc2Z4Vm9sdW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXVkaW9JZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VCR00oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuYmdtQXVkaW9JRCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaaguWBnGJnbVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXN1bUJHTSgpIHtcclxuICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lEID49IDApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuYmdtQXVkaW9JRCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaBouWkjWJnbVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRCR01Wb2x1bWUodjogbnVtYmVyLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtVm9sdW1lICE9IHYgfHwgZm9yY2UpIHtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmdtVm9sdW1lXCIsIHYpO1xyXG4gICAgICAgICAgICB0aGlzLmJnbVZvbHVtZSA9IHY7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUF1ZGlvSUQsIHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lEID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5iZ21BdWRpb0lEKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuYmdtQXVkaW9JRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlCR00odGhpcy5iZ21fdXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U0ZYVm9sdW1lKHY6IG51bWJlciwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNmeFZvbHVtZSAhPSB2IHx8IGZvcmNlKSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNmeFZvbHVtZVwiLCB2KTtcclxuICAgICAgICAgICAgdGhpcy5zZnhWb2x1bWUgPSB2O1xyXG4gICAgICAgICAgICAvL+iuvue9rumfs+aViOWkp+Wwj+S8muWQjOaXtuiuvue9ruiDjOaZr+mfs+S5kOeahOWjsOmfs++8jOS4jeiuvue9rumfs+aViOWkp+Wwj++8jOacrOWcsOmfs+aViOS+neeEtuWPr+S7peWPl+aOp+S9v+eUqO+8jOaaguacquaJvuWIsOWOn+WboFxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==