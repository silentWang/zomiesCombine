
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("jAzWMM6jQSiXfStct");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("kXJbXcS3B");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("pdbxzbccxZ5");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvQXVkaW9NZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLGlDQUE0QjtBQUM1QjtJQUFzQyw0QkFBUztJQUEvQztRQUFBLHFFQW9IQztRQWxIVSxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBTyxHQUFXLEVBQUUsQ0FBQTtRQUU1QixnQkFBVSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQztRQUViLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQU8sR0FBRztZQUNkLGNBQWMsRUFBQyxJQUFJO1lBQ25CLE1BQU0sRUFBQyxJQUFJO1lBQ1gsS0FBSyxFQUFDLEdBQUc7WUFDVCxlQUFlLEVBQUMsR0FBRztZQUNuQixjQUFjLEVBQUMsR0FBRztZQUNsQixZQUFZLEVBQUMsR0FBRztTQUNuQixDQUFBOztJQW1HTCxDQUFDO0lBakdHLDZCQUFVLEdBQVY7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxD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Q0FBQyxDQUFDO2FBQ3pDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxrQkFBa0I7U0FDckI7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLGtCQUFrQjtTQUNyQjtJQUNMLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FwSEEsQUFvSEMsQ0FwSHFDLG1CQUFTLEdBb0g5QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uL21hbmFnZXIvU2luZ2xldG9uXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9VdGlscyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01nciBleHRlbmRzIFNpbmdsZXRvbiB7XG5cbiAgICBwdWJsaWMgYmdtVm9sdW1lOiBudW1iZXIgPSAxO1xuICAgIHB1YmxpYyBzZnhWb2x1bWU6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBiZ21fdXJsOiBzdHJpbmcgPSBcIlwiXG5cbiAgICBiZ21BdWRpb0lEOiBudW1iZXIgPSAtMTtcbiAgICBhdWRpb0lkOiBudW1iZXIgPSAtMTtcblxuICAgIHByaXZhdGUgbGFzdHBsYXl0aW1lID0ge307XG4gICAgcHJpdmF0ZSBzb3VuZGNkID0ge1xuICAgICAgICBcImh1YW5nc2h1bGFuZ1wiOjE1MDAsXG4gICAgICAgIFwiaHVsaVwiOjE1MDAsXG4gICAgICAgIFwiaGl0XCI6MzAwLFxuICAgICAgICBcIm1lcmdlX3N1Y2Nlc3NcIjoxMDAsXG4gICAgICAgIFwic2tpbGxfZnJlZXplXCI6MzAwLFxuICAgICAgICBcInNraWxsX3Nsb3dcIjozMDBcbiAgICB9XG5cbiAgICBsb2FkU291bmRzKCkge1xuICAgICAgICB2YXIgdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJnbVZvbHVtZVwiKTtcbiAgICAgICAgdmFyIHQxID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Z4Vm9sdW1lXCIpO1xuXG4gICAgICAgIHRoaXMuYmdtVm9sdW1lID0gdCA9PSAwID8gTnVtYmVyKHQpIDogMTtcbiAgICAgICAgdGhpcy5zZnhWb2x1bWUgPSB0MSA9PSAwID8gTnVtYmVyKHQxKSA6IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZFNvdW5kc1wiLCB0aGlzLmJnbVZvbHVtZSwgdGhpcy5zZnhWb2x1bWUpXG5cbiAgICAgICAgY2MubG9nKHRoaXMuYmdtVm9sdW1lLCB0aGlzLnNmeFZvbHVtZSlcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJzb3VuZHNcIiwoKT0+e1xuICAgICAgICAgICAgdGhpcy5wbGF5TXVzaWMoXCJCR00xXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBnZXRVcmwodXJsOiBzdHJpbmcpOiBjYy5BdWRpb0NsaXAge1xuICAgIC8vICAgICByZXR1cm4gY2MubG9hZGVyLmdldFJlcyhcInNvdW5kcy9cIiArIHVybCk7XG4gICAgLy8gfVxuXG4gICAgYXN5bmMgcGxheU11c2ljKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBpc2NoYW5nZSA9IHRoaXMuYmdtX3VybCA9PSB1cmw7XG4gICAgICAgIGlmKCFpc2NoYW5nZSl7XG4gICAgICAgICAgICB0aGlzLmJnbV91cmwgPSB1cmw7XG4gICAgICAgICAgICB2YXIgYXVkaW9VcmwgPSBhd2FpdCBVdGlscy5sb2FkUmVzKFwic291bmRzOlwiK3VybCxjYy5BdWRpb0NsaXApIGFzIGNjLkF1ZGlvQ2xpcDsvLyB0aGlzLmdldFVybCh1cmwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmJnbUF1ZGlvSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiakF6V01NNmpRU2lYZlN0Y3RcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5iZ21Wb2x1bWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZ21BdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb1VybCwgdHJ1ZSwgdGhpcy5iZ21Wb2x1bWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TVhWb2x1bWUodjogbnVtYmVyLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnNmeFZvbHVtZSAhPSB2IHx8IGZvcmNlKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZnhWb2x1bWVcIiwgdik7XG4gICAgICAgICAgICB0aGlzLnNmeFZvbHVtZSA9IHY7XG4gICAgICAgICAgICAvL+iuvue9rumfs+aViOWkp+Wwj+S8muWQjOaXtuiuvue9ruiDjOaZr+mfs+S5kOeahOWjsOmfs++8jOS4jeiuvue9rumfs+aViOWkp+Wwj++8jOacrOWcsOmfs+aViOS+neeEtuWPr+S7peWPl+aOp+S9v+eUqO+8jOaaguacquaJvuWIsOWOn+WboFxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3BNWChhdWRpb0lkOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIG9rID0gY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lkKTtcbiAgICAgICAgcmV0dXJuIG9rO1xuICAgIH1cblxuICAgIGFzeW5jIHBsYXlNWCh1cmw6IHN0cmluZykge1xuICAgICAgICAvLyBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UuZnBzIDwgMjApIHJldHVybjtcblxuICAgICAgICBpZiAoIXRoaXMubGFzdHBsYXl0aW1lW3VybF0pXG4gICAgICAgICAgICB0aGlzLmxhc3RwbGF5dGltZVt1cmxdID0gMDtcbiAgICAgICAgbGV0IGNkID0gdGhpcy5zb3VuZGNkW3VybF0gfHwgMDtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwia1hKYlhjUzNCXCIpO1xuICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmxhc3RwbGF5dGltZVt1cmxdIDwgY2QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RwbGF5dGltZVt1cmxdID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBhdWRpb1VybCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoXCJzb3VuZHM6XCIrdXJsLGNjLkF1ZGlvQ2xpcCkgYXMgY2MuQXVkaW9DbGlwOyA7Ly90aGlzLmdldFVybCh1cmwpO1xuICAgICAgICBpZiAoYXVkaW9VcmwmJnRoaXMuc2Z4Vm9sdW1lID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb1VybCwgZmFsc2UsIHRoaXMuc2Z4Vm9sdW1lKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1ZGlvSWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNdXNpY1ZvbHVtZSh2OiBudW1iZXIsIGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtVm9sdW1lICE9IHYgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnbVZvbHVtZVwiLCB2KTtcbiAgICAgICAgICAgIHRoaXMuYmdtVm9sdW1lID0gdjtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUF1ZGlvSUQsIHYpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJnbUF1ZGlvSUQgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHYgPiAwKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuYmdtQXVkaW9JRCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInBkYnh6YmNjeFo1XCIpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuYmdtQXVkaW9JRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlNdXNpYyh0aGlzLmJnbV91cmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdW1NdXNpYygpIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5iZ21BdWRpb0lEKTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaBouWkjWJnbVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2VNdXNpYygpIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmJnbUF1ZGlvSUQpO1xuICAgICAgICAgICAgLy8gY2MubG9nKFwi5pqC5YGcYmdtXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=