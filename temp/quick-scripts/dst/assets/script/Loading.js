
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af4a3CKKPZAwr4aagW/gTcl', 'Loading');
// script/Loading.ts

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
var BaseUI_1 = require("./framwork/BaseUI");
var AdCenter_1 = require("./manager/AdCenter");
var ChickData_1 = require("./manager/ChickData");
var PoolMgr_1 = require("./manager/PoolMgr");
var WxCenter_1 = require("./manager/WxCenter");
var AudioMgr_1 = require("./utils/AudioMgr");
var Utils_1 = require("./utils/Utils");
var wx = window["wx"] || window["tt"];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img_shouquan = null;
        _this.loading_bar = null;
        _this.progress = 0;
        return _this;
    }
    Loading.prototype.onUIClicked = function (event, customEventData) {
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_rstart":
                {
                    cc.director.loadScene("loading");
                }
                break;
        }
    };
    Loading.prototype.start = function () {
        WxCenter_1.default.init();
        WxCenter_1.default.aldReport('LoadingShow', 'show');
        AdCenter_1.default.Instance().showInterstitialAd();
    };
    Loading.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var descs, index;
            var _this = this;
            return __generator(this, function (_a) {
                // cc.debug.setDisplayStats(false);
                cc.game.setFrameRate(60);
                _super.prototype.onLoad.call(this);
                if (wx) {
                    wx.setPreferredFramesPerSecond(60);
                    wx.setKeepScreenOn({ keepScreenOn: true });
                }
                PoolMgr_1.default.Instance().loadPrefabs();
                this.startLGAction();
                descs = ["初次加载时间可能会较长，请耐心等待...."];
                index = 0;
                this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
                    _this.SetText("desp", descs[index]);
                    index++;
                    if (index > descs.length - 1)
                        index = 0;
                })).repeatForever());
                this.GetGameObject("btn_rstart").active = false;
                return [2 /*return*/];
            });
        });
    };
    Loading.prototype.startLGAction = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function () { return __awaiter(_this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                ChickData_1.default.loadData();
                p = 0;
                this.node.runAction(cc.sequence(cc.delayTime(0.01), cc.callFunc(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                p += 0.018;
                                this.SetProgressBar("ProgressBar", p);
                                if (!(p >= 1)) return [3 /*break*/, 2];
                                this.node.stopAllActions();
                                return [4 /*yield*/, Utils_1.default.loadBundler("spine")];
                            case 1:
                                _a.sent();
                                Utils_1.default.loadBundler("sounds").then(function () {
                                    AudioMgr_1.default.Instance().loadSounds();
                                });
                                cc.director.loadScene("hall");
                                p = 1;
                                _a.label = 2;
                            case 2:
                                this.GetGameObject('plane').x = p * 600 - 320;
                                this.SetText('lbl_progress', (~~(p * 100)) + '%');
                                return [2 /*return*/];
                        }
                    });
                }); })).repeatForever());
                return [2 /*return*/];
            });
        }); })));
    };
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "img_shouquan", void 0);
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "loading_bar", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(BaseUI_1.default));
exports.default = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUN2QywrQ0FBMEM7QUFDMUMsaURBQTRDO0FBQzVDLDZDQUF3QztBQUN4QywrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBRXhDLHVDQUFrQztBQUVsQyxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFNO0lBQTNDO1FBQUEscUVBdUVDO1FBcEVHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBK0Q1QixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQUV6QixDQUFDO0lBL0RHLDZCQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsZUFBZTtRQUM5QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUVoQyxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssWUFBWTtnQkFDYjtvQkFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtpQkFDbkM7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDSSxrQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLGtCQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVLLHdCQUFNLEdBQVo7Ozs7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QUUsQ0FBQyxJQUFJLENBQUM7aURBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVTtJQU5YLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F1RTNCO0lBQUQsY0FBQztDQXZFRCxBQXVFQyxDQXZFb0MsZ0JBQU0sR0F1RTFDO2tCQXZFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFBvb2xNZ3IgZnJvbSBcIi4vbWFuYWdlci9Qb29sTWdyXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgeyBOYXRpdmUgfSBmcm9tIFwiLi91dGlscy9OYXRpdmVcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5jb25zdCB3eCA9IHdpbmRvd1tcInd4XCJdIHx8IHdpbmRvd1tcInR0XCJdO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpbWdfc2hvdXF1YW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9hZGluZ19iYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9yc3RhcnRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb2FkaW5nXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBXeENlbnRlci5pbml0KCk7XHJcbiAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdMb2FkaW5nU2hvdycsJ3Nob3cnKTtcclxuICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnNob3dJbnRlcnN0aXRpYWxBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xyXG4gICAgICAgIGNjLmdhbWUuc2V0RnJhbWVSYXRlKDYwKTtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgICAgICBpZih3eCkge1xyXG4gICAgICAgICAgICB3eC5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQoNjApO1xyXG4gICAgICAgICAgICB3eC5zZXRLZWVwU2NyZWVuT24oeyBrZWVwU2NyZWVuT246IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBvb2xNZ3IuSW5zdGFuY2UoKS5sb2FkUHJlZmFicygpXHJcbiAgICAgICAgdGhpcy5zdGFydExHQWN0aW9uKCk7XHJcbiAgICAgICAgbGV0IGRlc2NzID0gW1wi5Yid5qyh5Yqg6L295pe26Ze05Y+v6IO95Lya6L6D6ZW/77yM6K+36ICQ5b+D562J5b6FLi4uLlwiXTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDIpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImRlc3BcIiwgZGVzY3NbaW5kZXhdKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gZGVzY3MubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9KSkucmVwZWF0Rm9yZXZlcigpKVxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9yc3RhcnRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRMR0FjdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSguNSksIGNjLmNhbGxGdW5jKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLmxvYWREYXRhKClcclxuICAgICAgICAgICAgdmFyIHA6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMDEpLCBjYy5jYWxsRnVuYyhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwICs9IDAuMDE4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRQcm9ncmVzc0JhcihcIlByb2dyZXNzQmFyXCIsIHApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHAgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IFV0aWxzLmxvYWRCdW5kbGVyKFwic3BpbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMubG9hZEJ1bmRsZXIoXCJzb3VuZHNcIikudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLmxvYWRTb3VuZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdwbGFuZScpLnggPSBwKjYwMCAtIDMyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2V0VGV4dCgnbGJsX3Byb2dyZXNzJywofn4ocCoxMDApKSArICclJyk7XHJcbiAgICAgICAgICAgIH0pKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIH0pKSlcclxuICAgIH1cclxuXHJcbiAgICBwcm9ncmVzczogbnVtYmVyID0gMDtcclxuXHJcbn1cclxuIl19