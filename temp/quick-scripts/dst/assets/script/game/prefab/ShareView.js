
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/ShareView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8f4ajWW8lPPa5lWwAGP7lm', 'ShareView');
// script/game/prefab/ShareView.ts

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
var ChickData_1 = require("../../manager/ChickData");
var WxCenter_1 = require("../../manager/WxCenter");
var AudioMgr_1 = require("../../utils/AudioMgr");
var BigNumber_1 = require("../../utils/BigNumber");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShareView = /** @class */ (function (_super) {
    __extends(ShareView, _super);
    function ShareView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShareView.prototype.start = function () {
        Utils_1.default.playBreath(this.GetGameObject('btn_share'));
    };
    ShareView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    ShareView.prototype.setData = function () {
        var lv = ChickData_1.default.user.GetMaxLv() - 1 > 0 ? ChickData_1.default.user.GetMaxLv() - 1 : 1;
        this.coinVal = 0.5 * ChickData_1.default.user.BuyPrice(lv);
        var coin = BigNumber_1.default.getLargeString(Utils_1.default.fixFloat(this.coinVal));
        var times = ChickData_1.default.user.share_times;
        this.SetText("lbl_coin", coin);
        this.SetText("lbl_times", "\u8FD8\u53EF\u5206\u4EAB" + times + "\u6B21");
    };
    ShareView.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_share":
                WxCenter_1.default.shareAppMessage(function () {
                    if (ChickData_1.default.user.share_times > 0) {
                        ChickData_1.default.user.share_times--;
                        AudioMgr_1.default.Instance().playSFX("coin");
                        Utils_1.default.flyAnim(0, _this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                            if (b)
                                ChickData_1.default.user.coin += _this.coinVal;
                            ChickData_1.default.save();
                        });
                    }
                    _this.closeUI();
                });
                break;
        }
    };
    ShareView = __decorate([
        ccclass
    ], ShareView);
    return ShareView;
}(BaseUI_1.default));
exports.default = ShareView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFNoYXJlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnREFBMkM7QUFDM0MscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsbURBQThDO0FBQzlDLDJDQUFzQztBQUVoQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBTTtJQUE3Qzs7SUE2Q0EsQ0FBQztJQXpDRyx5QkFBSyxHQUFMO1FBRUksZUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFFSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNJLElBQUksRUFBRSxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFDLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksR0FBRyxtQkFBUyxDQUFDLGNBQWMsQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksS0FBSyxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBQyw2QkFBTyxLQUFLLFdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLGVBQWU7UUFBbkMsaUJBcUJDO1FBcEJHLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLGtCQUFRLENBQUMsZUFBZSxDQUFDO29CQUNyQixJQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUM7d0JBQzlCLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUM3QixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDcEMsZUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsS0FBSSxDQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsZUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLFVBQUMsQ0FBQzs0QkFDakUsSUFBRyxDQUFDO2dDQUFFLG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDOzRCQUMxQyxtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNyQixDQUFDLENBQUMsQ0FBQTtxQkFDTDtvQkFDRCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07U0FDVDtJQUNULENBQUM7SUE1Q2dCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E2QzdCO0lBQUQsZ0JBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3NDLGdCQUFNLEdBNkM1QztrQkE3Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiLi4vLi4vdXRpbHMvQmlnTnVtYmVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmVWaWV3IGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHByaXZhdGUgY29pblZhbDpudW1iZXI7XHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcbiAgICAgICAgVXRpbHMucGxheUJyZWF0aCh0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9zaGFyZScpKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YSgpe1xyXG4gICAgICAgIGxldCBsdiA9IENoaWNrRGF0YS51c2VyLkdldE1heEx2KCkgLSAxID4gMCA/IENoaWNrRGF0YS51c2VyLkdldE1heEx2KCkgLSAxIDogMTtcclxuICAgICAgICB0aGlzLmNvaW5WYWwgPSAwLjUqQ2hpY2tEYXRhLnVzZXIuQnV5UHJpY2UobHYpO1xyXG4gICAgICAgIGxldCBjb2luID0gQmlnTnVtYmVyLmdldExhcmdlU3RyaW5nKFV0aWxzLmZpeEZsb2F0KHRoaXMuY29pblZhbCkpO1xyXG4gICAgICAgIGxldCB0aW1lcyA9IENoaWNrRGF0YS51c2VyLnNoYXJlX3RpbWVzO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsY29pbilcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfdGltZXNcIixg6L+Y5Y+v5YiG5LqrJHt0aW1lc33mrKFgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2hhcmVcIjpcclxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLnNoYXJlQXBwTWVzc2FnZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLnNoYXJlX3RpbWVzID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNoYXJlX3RpbWVzLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcImNvaW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYikgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSB0aGlzLmNvaW5WYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=