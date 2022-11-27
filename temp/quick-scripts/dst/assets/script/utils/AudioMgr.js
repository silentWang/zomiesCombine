
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcQXVkaW9NZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLGlDQUE0QjtBQUM1QjtJQUFzQyw0QkFBUztJQUEvQztRQUFBLHFFQThHQztRQTVHVSxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QixhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFnQnJCLHNDQUFzQztRQUN0QyxnREFBZ0Q7UUFDaEQsSUFBSTtRQUVJLGFBQU8sR0FBVyxNQUFNLENBQUE7UUFpQnhCLHFCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLFdBQUssR0FBRztZQUNaLGNBQWMsRUFBQyxJQUFJO1lBQ25CLE1BQU0sRUFBQyxJQUFJO1lBQ1gsS0FBSyxFQUFDLEdBQUc7WUFDVCxlQUFlLEVBQUMsR0FBRztZQUNuQixjQUFjLEVBQUMsR0FBRztZQUNsQixZQUFZLEVBQUMsR0FBRztTQUNuQixDQUFBOztJQTJETCxDQUFDO0lBdEdHLDZCQUFVLEdBQVY7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsSUFBSSxDQUFD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LENBQUM7WUFDbkIsZ0RBQWdEO1lBQ2hELHNDQUFzQztTQUN6QztJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0E5R0EsQUE4R0MsQ0E5R3FDLG1CQUFTLEdBOEc5QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uL21hbmFnZXIvU2luZ2xldG9uXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuL1V0aWxzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NZ3IgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG5cclxuICAgIHB1YmxpYyBiZ21Wb2x1bWU6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgc2Z4Vm9sdW1lOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGJnbUF1ZGlvSUQ6IG51bWJlciA9IC0xO1xyXG4gICAgYXVkaW9JZDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgbG9hZFNvdW5kcygpIHtcclxuICAgICAgICB2YXIgdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJnbVZvbHVtZVwiKTtcclxuICAgICAgICB2YXIgdDEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZnhWb2x1bWVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYmdtVm9sdW1lID0gdCA9PSAwID8gTnVtYmVyKHQpIDogMTtcclxuICAgICAgICB0aGlzLnNmeFZvbHVtZSA9IHQxID09IDAgPyBOdW1iZXIodDEpIDogMTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRTb3VuZHNcIiwgdGhpcy5iZ21Wb2x1bWUsIHRoaXMuc2Z4Vm9sdW1lKVxyXG5cclxuICAgICAgICBjYy5sb2codGhpcy5iZ21Wb2x1bWUsIHRoaXMuc2Z4Vm9sdW1lKVxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwic291bmRzXCIsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5QkdNKFwiQkdNMVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRVcmwodXJsOiBzdHJpbmcpOiBjYy5BdWRpb0NsaXAge1xyXG4gICAgLy8gICAgIHJldHVybiBjYy5sb2FkZXIuZ2V0UmVzKFwic291bmRzL1wiICsgdXJsKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIGJnbV91cmw6IHN0cmluZyA9IFwiQkdNMVwiXHJcbiAgICBhc3luYyBwbGF5QkdNKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5iZ21fdXJsID0gdXJsO1xyXG4gICAgICAgIHZhciBhdWRpb1VybCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoXCJzb3VuZHM6XCIrdXJsLGNjLkF1ZGlvQ2xpcCkgYXMgY2MuQXVkaW9DbGlwOy8vIHRoaXMuZ2V0VXJsKHVybCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5iZ21BdWRpb0lEKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtVm9sdW1lID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJnbUF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvVXJsLCB0cnVlLCB0aGlzLmJnbVZvbHVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BTRlgoYXVkaW9JZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIG9rID0gY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lkKTtcclxuICAgICAgICByZXR1cm4gb2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsYXN0cGxheXNmeHRpbWUgPSB7fTtcclxuICAgIHByaXZhdGUgc2Z4Y2QgPSB7XHJcbiAgICAgICAgXCJodWFuZ3NodWxhbmdcIjoxNTAwLFxyXG4gICAgICAgIFwiaHVsaVwiOjE1MDAsXHJcbiAgICAgICAgXCJoaXRcIjozMDAsXHJcbiAgICAgICAgXCJtZXJnZV9zdWNjZXNzXCI6MTAwLFxyXG4gICAgICAgIFwic2tpbGxfZnJlZXplXCI6MzAwLFxyXG4gICAgICAgIFwic2tpbGxfc2xvd1wiOjMwMFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlTRlgodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UuZnBzIDwgMjApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RwbGF5c2Z4dGltZVt1cmxdKVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RwbGF5c2Z4dGltZVt1cmxdID0gMDtcclxuICAgICAgICBsZXQgY2QgPSB0aGlzLnNmeGNkW3VybF0gfHwgMDtcclxuICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmxhc3RwbGF5c2Z4dGltZVt1cmxdIDwgY2QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RwbGF5c2Z4dGltZVt1cmxdID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIHZhciBhdWRpb1VybCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoXCJzb3VuZHM6XCIrdXJsLGNjLkF1ZGlvQ2xpcCkgYXMgY2MuQXVkaW9DbGlwOyA7Ly90aGlzLmdldFVybCh1cmwpO1xyXG4gICAgICAgIGlmIChhdWRpb1VybCYmdGhpcy5zZnhWb2x1bWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW9VcmwsIGZhbHNlLCB0aGlzLnNmeFZvbHVtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1ZGlvSWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlQkdNKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJnbUF1ZGlvSUQgPj0gMCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmJnbUF1ZGlvSUQpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmmoLlgZxiZ21cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdW1CR00oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLmJnbUF1ZGlvSUQpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmgaLlpI1iZ21cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QkdNVm9sdW1lKHY6IG51bWJlciwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmJnbVZvbHVtZSAhPSB2IHx8IGZvcmNlKSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnbVZvbHVtZVwiLCB2KTtcclxuICAgICAgICAgICAgdGhpcy5iZ21Wb2x1bWUgPSB2O1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5iZ21BdWRpb0lELCB2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh2ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuYmdtQXVkaW9JRCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmJnbUF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5QkdNKHRoaXMuYmdtX3VybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNGWFZvbHVtZSh2OiBudW1iZXIsIGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5zZnhWb2x1bWUgIT0gdiB8fCBmb3JjZSkge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZnhWb2x1bWVcIiwgdik7XHJcbiAgICAgICAgICAgIHRoaXMuc2Z4Vm9sdW1lID0gdjtcclxuICAgICAgICAgICAgLy/orr7nva7pn7PmlYjlpKflsI/kvJrlkIzml7borr7nva7og4zmma/pn7PkuZDnmoTlo7Dpn7PvvIzkuI3orr7nva7pn7PmlYjlpKflsI/vvIzmnKzlnLDpn7PmlYjkvp3nhLblj6/ku6Xlj5fmjqfkvb/nlKjvvIzmmoLmnKrmib7liLDljp/lm6BcclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=