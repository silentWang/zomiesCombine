
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
var Data_1 = require("./manager/Data");
var PoolMgr_1 = require("./manager/PoolMgr");
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
    Loading.prototype.onBtnClicked = function (event, customEventData) {
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_rstart":
                {
                    cc.director.loadScene("loading");
                }
                break;
        }
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
                this.startLoginAction();
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
    Loading.prototype.startLoginAction = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function () { return __awaiter(_this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                Data_1.default.loadData();
                p = 0;
                this.node.runAction(cc.sequence(cc.delayTime(0.01), cc.callFunc(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                p += 0.018;
                                this.SetProgressBar("ProgressBar", p);
                                if (!(p >= 1)) return [3 /*break*/, 3];
                                this.node.stopAllActions();
                                return [4 /*yield*/, Utils_1.default.loadBundler("spine")];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, Utils_1.default.loadBundler("sounds")];
                            case 2:
                                _a.sent();
                                AudioMgr_1.default.Instance().loadSounds();
                                cc.director.loadScene("hall");
                                p = 1;
                                _a.label = 3;
                            case 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUN2Qyx1Q0FBa0M7QUFDbEMsNkNBQXdDO0FBQ3hDLDZDQUF3QztBQUN4Qyx1Q0FBa0M7QUFFbEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBTTtJQUEzQztRQUFBLHFFQW9FQztRQWpFRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQTRENUIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUFFekIsQ0FBQztJQTVERyw4QkFBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLGVBQWU7UUFDL0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFaEMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFlBQVk7Z0JBQ2I7b0JBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7aUJBQ25DO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFFSyx3QkFBTSxHQUFaOzs7OztnQkFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRXpCLGlCQUFNLE1BQU0sV0FBRSxDQUFDO2dCQUNmLElBQUcsRUFBRSxFQUNMO29CQUNJLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxFQUFF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a0JBcEVvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBQb29sTWdyIGZyb20gXCIuL21hbmFnZXIvUG9vbE1nclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5jb25zdCB3eCA9IHdpbmRvd1tcInd4XCJdIHx8IHdpbmRvd1tcInR0XCJdO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpbWdfc2hvdXF1YW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9hZGluZ19iYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uQnRuQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fcnN0YXJ0XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9hZGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xyXG4gICAgICAgIGNjLmdhbWUuc2V0RnJhbWVSYXRlKDYwKTtcclxuXHJcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XHJcbiAgICAgICAgaWYod3gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3eC5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQoNjApO1xyXG4gICAgICAgICAgICB3eC5zZXRLZWVwU2NyZWVuT24oeyBrZWVwU2NyZWVuT246IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFBvb2xNZ3IuSW5zdGFuY2UoKS5sb2FkUHJlZmFicygpXHJcbiAgICAgICAgdGhpcy5zdGFydExvZ2luQWN0aW9uKCk7XHJcbiAgICAgICAgbGV0IGRlc2NzID0gW1wi5Yid5qyh5Yqg6L295pe26Ze05Y+v6IO95Lya6L6D6ZW/77yM6K+36ICQ5b+D562J5b6FLi4uLlwiXTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDIpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImRlc3BcIiwgZGVzY3NbaW5kZXhdKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gZGVzY3MubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9KSkucmVwZWF0Rm9yZXZlcigpKVxyXG5cclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fcnN0YXJ0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0TG9naW5BY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoLjUpLCBjYy5jYWxsRnVuYyhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIERhdGEubG9hZERhdGEoKVxyXG4gICAgICAgICAgICB2YXIgcDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4wMSksIGNjLmNhbGxGdW5jKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHAgKz0gMC4wMTg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldFByb2dyZXNzQmFyKFwiUHJvZ3Jlc3NCYXJcIiwgcCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgVXRpbHMubG9hZEJ1bmRsZXIoXCJzcGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBVdGlscy5sb2FkQnVuZGxlcihcInNvdW5kc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLmxvYWRTb3VuZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KCdwbGFuZScpLnggPSBwKjYwMCAtIDMyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2V0VGV4dCgnbGJsX3Byb2dyZXNzJywofn4ocCoxMDApKSArICclJyk7XHJcbiAgICAgICAgICAgIH0pKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIH0pKSlcclxuICAgIH1cclxuXHJcbiAgICBwcm9ncmVzczogbnVtYmVyID0gMDtcclxuXHJcbn1cclxuIl19