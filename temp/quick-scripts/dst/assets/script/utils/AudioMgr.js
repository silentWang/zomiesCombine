
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
        _this.bgm_url = "";
        _this.bgmAudioID = -1;
        _this.audioId = -1;
        _this.lastplaytime = {};
        _this.soundcd = {
            "huangshulang": 1500,
            "huli": 1500,
            "hit": 300,
            "merge_success": 100,
            "skill_freeze": 300,
            "skill_slow": 300
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
            _this.playMusic("BGM1");
        });
    };
    // getUrl(url: string): cc.AudioClip {
    //     return cc.loader.getRes("sounds/" + url);
    // }
    AudioMgr.prototype.playMusic = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ischange, audioUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ischange = this.bgm_url == url;
                        if (!!ischange) return [3 /*break*/, 2];
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
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AudioMgr.prototype.setMXVolume = function (v, force) {
        if (force === void 0) { force = false; }
        if (this.sfxVolume != v || force) {
            cc.sys.localStorage.setItem("sfxVolume", v);
            this.sfxVolume = v;
            //设置音效大小会同时设置背景音乐的声音，不设置音效大小，本地音效依然可以受控使用，暂未找到原因
            // cc.audioEngine.setEffectsVolume(v);
        }
    };
    AudioMgr.prototype.stopMX = function (audioId) {
        var ok = cc.audioEngine.stop(audioId);
        return ok;
    };
    AudioMgr.prototype.playMX = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var cd, audioUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // if (GameManager.Instance.fps < 20) return;
                        if (!this.lastplaytime[url])
                            this.lastplaytime[url] = 0;
                        cd = this.soundcd[url] || 0;
                        if (new Date().getTime() - this.lastplaytime[url] < cd) {
                            return [2 /*return*/];
                        }
                        this.lastplaytime[url] = new Date().getTime();
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
    AudioMgr.prototype.setMusicVolume = function (v, force) {
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
            this.playMusic(this.bgm_url);
        }
    };
    AudioMgr.prototype.resumMusic = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.resume(this.bgmAudioID);
            // cc.log("恢复bgm")
        }
    };
    AudioMgr.prototype.pauseMusic = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.pause(this.bgmAudioID);
            // cc.log("暂停bgm")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcQXVkaW9NZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLGlDQUE0QjtBQUM1QjtJQUFzQyw0QkFBUztJQUEvQztRQUFBLHFFQWlIQztRQS9HVSxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBTyxHQUFXLEVBQUUsQ0FBQTtRQUU1QixnQkFBVSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQztRQUViLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQU8sR0FBRztZQUNkLGNBQWMsRUFBQyxJQUFJO1lBQ25CLE1BQU0sRUFBQyxJQUFJO1lBQ1gsS0FBSyxFQUFDLEdBQUc7WUFDVCxlQUFlLEVBQUMsR0FBRztZQUNuQixjQUFjLEVBQUMsR0FBRztZQUNsQixZQUFZLEVBQUMsR0FBRztTQUNuQixDQUFBOztJQWdHTCxDQUFDO0lBOUZHLDZCQUFVLEdBQVY7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FB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LElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QyxrQkFBa0I7U0FDckI7SUFDTCxDQUFDO0lBRUwsZUFBQztBQUFELENBakhBLEFBaUhDLENBakhxQyxtQkFBUyxHQWlIOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuLi9tYW5hZ2VyL1NpbmdsZXRvblwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9VdGlscyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWdyIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuXHJcbiAgICBwdWJsaWMgYmdtVm9sdW1lOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHNmeFZvbHVtZTogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgYmdtX3VybDogc3RyaW5nID0gXCJcIlxyXG5cclxuICAgIGJnbUF1ZGlvSUQ6IG51bWJlciA9IC0xO1xyXG4gICAgYXVkaW9JZDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgcHJpdmF0ZSBsYXN0cGxheXRpbWUgPSB7fTtcclxuICAgIHByaXZhdGUgc291bmRjZCA9IHtcclxuICAgICAgICBcImh1YW5nc2h1bGFuZ1wiOjE1MDAsXHJcbiAgICAgICAgXCJodWxpXCI6MTUwMCxcclxuICAgICAgICBcImhpdFwiOjMwMCxcclxuICAgICAgICBcIm1lcmdlX3N1Y2Nlc3NcIjoxMDAsXHJcbiAgICAgICAgXCJza2lsbF9mcmVlemVcIjozMDAsXHJcbiAgICAgICAgXCJza2lsbF9zbG93XCI6MzAwXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNvdW5kcygpIHtcclxuICAgICAgICB2YXIgdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJnbVZvbHVtZVwiKTtcclxuICAgICAgICB2YXIgdDEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZnhWb2x1bWVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYmdtVm9sdW1lID0gdCA9PSAwID8gTnVtYmVyKHQpIDogMTtcclxuICAgICAgICB0aGlzLnNmeFZvbHVtZSA9IHQxID09IDAgPyBOdW1iZXIodDEpIDogMTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRTb3VuZHNcIiwgdGhpcy5iZ21Wb2x1bWUsIHRoaXMuc2Z4Vm9sdW1lKVxyXG5cclxuICAgICAgICBjYy5sb2codGhpcy5iZ21Wb2x1bWUsIHRoaXMuc2Z4Vm9sdW1lKVxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwic291bmRzXCIsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5TXVzaWMoXCJCR00xXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldFVybCh1cmw6IHN0cmluZyk6IGNjLkF1ZGlvQ2xpcCB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGNjLmxvYWRlci5nZXRSZXMoXCJzb3VuZHMvXCIgKyB1cmwpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGFzeW5jIHBsYXlNdXNpYyh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBpc2NoYW5nZSA9IHRoaXMuYmdtX3VybCA9PSB1cmw7XHJcbiAgICAgICAgaWYoIWlzY2hhbmdlKXtcclxuICAgICAgICAgICAgdGhpcy5iZ21fdXJsID0gdXJsO1xyXG4gICAgICAgICAgICB2YXIgYXVkaW9VcmwgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwic291bmRzOlwiK3VybCxjYy5BdWRpb0NsaXApIGFzIGNjLkF1ZGlvQ2xpcDsvLyB0aGlzLmdldFVybCh1cmwpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lEID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5iZ21BdWRpb0lEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5iZ21Wb2x1bWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnbUF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvVXJsLCB0cnVlLCB0aGlzLmJnbVZvbHVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TVhWb2x1bWUodjogbnVtYmVyLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Z4Vm9sdW1lICE9IHYgfHwgZm9yY2UpIHtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Z4Vm9sdW1lXCIsIHYpO1xyXG4gICAgICAgICAgICB0aGlzLnNmeFZvbHVtZSA9IHY7XHJcbiAgICAgICAgICAgIC8v6K6+572u6Z+z5pWI5aSn5bCP5Lya5ZCM5pe26K6+572u6IOM5pmv6Z+z5LmQ55qE5aOw6Z+z77yM5LiN6K6+572u6Z+z5pWI5aSn5bCP77yM5pys5Zyw6Z+z5pWI5L6d54S25Y+v5Lul5Y+X5o6n5L2/55So77yM5pqC5pyq5om+5Yiw5Y6f5ZugXHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BNWChhdWRpb0lkOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgb2sgPSBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSWQpO1xyXG4gICAgICAgIHJldHVybiBvaztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5TVgodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UuZnBzIDwgMjApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RwbGF5dGltZVt1cmxdKVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RwbGF5dGltZVt1cmxdID0gMDtcclxuICAgICAgICBsZXQgY2QgPSB0aGlzLnNvdW5kY2RbdXJsXSB8fCAwO1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMubGFzdHBsYXl0aW1lW3VybF0gPCBjZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdHBsYXl0aW1lW3VybF0gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgYXVkaW9VcmwgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwic291bmRzOlwiK3VybCxjYy5BdWRpb0NsaXApIGFzIGNjLkF1ZGlvQ2xpcDsgOy8vdGhpcy5nZXRVcmwodXJsKTtcclxuICAgICAgICBpZiAoYXVkaW9VcmwmJnRoaXMuc2Z4Vm9sdW1lID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvVXJsLCBmYWxzZSwgdGhpcy5zZnhWb2x1bWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdWRpb0lkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRNdXNpY1ZvbHVtZSh2OiBudW1iZXIsIGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5iZ21Wb2x1bWUgIT0gdiB8fCBmb3JjZSkge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ21Wb2x1bWVcIiwgdik7XHJcbiAgICAgICAgICAgIHRoaXMuYmdtVm9sdW1lID0gdjtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHRoaXMuYmdtQXVkaW9JRCwgdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJnbUF1ZGlvSUQgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodiA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLmJnbUF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5iZ21BdWRpb0lEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuYmdtX3VybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtTXVzaWMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLmJnbUF1ZGlvSUQpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmgaLlpI1iZ21cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VNdXNpYygpIHtcclxuICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lEID49IDApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5iZ21BdWRpb0lEKTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKFwi5pqC5YGcYmdtXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==