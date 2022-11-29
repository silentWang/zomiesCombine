
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/ShareLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53527tK6PBOjJFaec8hdOsT', 'ShareLayer');
// script/game/prefab/ShareLayer.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../framwork/BaseUI");
var Data_1 = require("../../manager/Data");
var WxCenter_1 = require("../../manager/WxCenter");
var AudioMgr_1 = require("../../utils/AudioMgr");
var BigNumber_1 = require("../../utils/BigNumber");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.start = function () {
        Utils_1.default.playBreath(this.GetGameObject('btn_share'));
    };
    NewClass.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    NewClass.prototype.setData = function () {
        var lv = Data_1.default.user.GetMaxLv() - 1 > 0 ? Data_1.default.user.GetMaxLv() - 1 : 1;
        this.coinVal = 0.5 * Data_1.default.user.BuyPrice(lv);
        var coin = BigNumber_1.default.getLargeString(Utils_1.default.fixFloat(this.coinVal));
        var times = Data_1.default.user.share_times;
        this.SetText("lbl_coin", coin);
        this.SetText("lbl_times", "\u8FD8\u53EF\u5206\u4EAB" + times + "\u6B21");
    };
    NewClass.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_share":
                WxCenter_1.default.shareAppMessage(function () {
                    if (Data_1.default.user.share_times > 0) {
                        Data_1.default.user.share_times--;
                        AudioMgr_1.default.Instance().playSFX("coin");
                        Utils_1.default.flyAnim(0, _this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                            if (b)
                                Data_1.default.user.coin += _this.coinVal;
                            Data_1.default.save();
                        });
                    }
                    _this.closeUI();
                });
                break;
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(BaseUI_1.default));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNoYXJlTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsZ0RBQTJDO0FBQzNDLDJDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLG1EQUE4QztBQUM5QywyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQU07SUFBNUM7O0lBNkNBLENBQUM7SUF6Q0csd0JBQUssR0FBTDtRQUVJLGVBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBRUksaUJBQU0sU0FBUyxXQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDSSxJQUFJLEVBQUUsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLEdBQUcsbUJBQVMsQ0FBQyxjQUFjLENBQUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBQyw2QkFBTyxLQUFLLFdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLGVBQWU7UUFBbkMsaUJBcUJDO1FBcEJHLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLGtCQUFRLENBQUMsZUFBZSxDQUFDO29CQUNyQixJQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBQzt3QkFDekIsY0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDeEIsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3BDLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxVQUFDLENBQUM7NEJBQ2pFLElBQUcsQ0FBQztnQ0FBRSxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNyQyxjQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2hCLENBQUMsQ0FBQyxDQUFBO3FCQUNMO29CQUNELEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtTQUNUO0lBQ1QsQ0FBQztJQTVDZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZDNUI7SUFBRCxlQUFDO0NBN0NELEFBNkNDLENBN0NxQyxnQkFBTSxHQTZDM0M7a0JBN0NvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiLi4vLi4vdXRpbHMvQmlnTnVtYmVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgcHJpdmF0ZSBjb2luVmFsOm51bWJlcjtcclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX3NoYXJlJykpXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKCl7XHJcbiAgICAgICAgbGV0IGx2ID0gRGF0YS51c2VyLkdldE1heEx2KCkgLSAxID4gMCA/IERhdGEudXNlci5HZXRNYXhMdigpIC0gMSA6IDE7XHJcbiAgICAgICAgdGhpcy5jb2luVmFsID0gMC41KkRhdGEudXNlci5CdXlQcmljZShsdik7XHJcbiAgICAgICAgbGV0IGNvaW4gPSBCaWdOdW1iZXIuZ2V0TGFyZ2VTdHJpbmcoVXRpbHMuZml4RmxvYXQodGhpcy5jb2luVmFsKSk7XHJcbiAgICAgICAgbGV0IHRpbWVzID0gRGF0YS51c2VyLnNoYXJlX3RpbWVzO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsY29pbilcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfdGltZXNcIixg6L+Y5Y+v5YiG5LqrJHt0aW1lc33mrKFgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2hhcmVcIjpcclxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLnNoYXJlQXBwTWVzc2FnZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKERhdGEudXNlci5zaGFyZV90aW1lcyA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIuc2hhcmVfdGltZXMtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY29pblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiKSBEYXRhLnVzZXIuY29pbiArPSB0aGlzLmNvaW5WYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19