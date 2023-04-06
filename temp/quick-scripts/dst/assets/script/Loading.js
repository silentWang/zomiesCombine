
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
var Native_1 = require("./utils/Native");
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
                cc.debug.setDisplayStats(false);
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
                Native_1.Native.getAppVersion();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUN2QywrQ0FBMEM7QUFDMUMsaURBQTRDO0FBQzVDLDZDQUF3QztBQUN4QywrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBQ3hDLHlDQUF3QztBQUN4Qyx1Q0FBa0M7QUFFbEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBTTtJQUEzQztRQUFBLHFFQTBFQztRQXZFRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQWtFNUIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUFFekIsQ0FBQztJQWxFRyw2QkFBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFaEMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFlBQVk7Z0JBQ2I7b0JBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7aUJBQ25DO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksa0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixrQkFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFSyx3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QyxhQUFhLEVBQUUsQ0FBQyxDQUFDOzs7YUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNSLENBQUM7SUFuRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNVO0lBTlgsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBFM0I7SUFBRCxjQUFDO0NBMUVELEFBMEVDLENBMUVvQyxnQkFBTSxHQTBFMUM7a0JBMUVvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xyXG5pbXBvcnQgUG9vbE1nciBmcm9tIFwiLi9tYW5hZ2VyL1Bvb2xNZ3JcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuL21hbmFnZXIvV3hDZW50ZXJcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZSB9IGZyb20gXCIuL3V0aWxzL05hdGl2ZVwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHd4ID0gd2luZG93W1wid3hcIl0gfHwgd2luZG93W1widHRcIl07XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGltZ19zaG91cXVhbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2FkaW5nX2JhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3JzdGFydFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxvYWRpbmdcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIFd4Q2VudGVyLmluaXQoKTtcclxuICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0xvYWRpbmdTaG93Jywnc2hvdycpO1xyXG4gICAgICAgIEFkQ2VudGVyLkluc3RhbmNlKCkuc2hvd0ludGVyc3RpdGlhbEFkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgY2MuZ2FtZS5zZXRGcmFtZVJhdGUoNjApO1xyXG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xyXG4gICAgICAgIGlmKHd4KSB7XHJcbiAgICAgICAgICAgIHd4LnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZCg2MCk7XHJcbiAgICAgICAgICAgIHd4LnNldEtlZXBTY3JlZW5Pbih7IGtlZXBTY3JlZW5PbjogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUG9vbE1nci5JbnN0YW5jZSgpLmxvYWRQcmVmYWJzKClcclxuICAgICAgICB0aGlzLnN0YXJ0TEdBY3Rpb24oKTtcclxuICAgICAgICBsZXQgZGVzY3MgPSBbXCLliJ3mrKHliqDovb3ml7bpl7Tlj6/og73kvJrovoPplb/vvIzor7fogJDlv4PnrYnlvoUuLi4uXCJdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMiksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwiZGVzcFwiLCBkZXNjc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiBkZXNjcy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIH0pKS5yZXBlYXRGb3JldmVyKCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgTmF0aXZlLmdldEFwcFZlcnNpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX3JzdGFydFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydExHQWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKC41KSwgY2MuY2FsbEZ1bmMoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBDaGlja0RhdGEubG9hZERhdGEoKVxyXG4gICAgICAgICAgICB2YXIgcDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4wMSksIGNjLmNhbGxGdW5jKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHAgKz0gMC4wMTg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldFByb2dyZXNzQmFyKFwiUHJvZ3Jlc3NCYXJcIiwgcCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgVXRpbHMubG9hZEJ1bmRsZXIoXCJzcGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBVdGlscy5sb2FkQnVuZGxlcihcInNvdW5kc1wiKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkubG9hZFNvdW5kcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhhbGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ3BsYW5lJykueCA9IHAqNjAwIC0gMzIwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRUZXh0KCdsYmxfcHJvZ3Jlc3MnLCh+fihwKjEwMCkpICsgJyUnKTtcclxuICAgICAgICAgICAgfSkpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcbiAgICAgICAgfSkpKVxyXG4gICAgfVxyXG5cclxuICAgIHByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG5cclxufVxyXG4iXX0=