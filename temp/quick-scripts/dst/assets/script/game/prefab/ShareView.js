
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
var NumberUtils_1 = require("../../utils/NumberUtils");
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
        var lv = ChickData_1.default.user.getLvlMax() - 1 > 0 ? ChickData_1.default.user.getLvlMax() - 1 : 1;
        this.coinVal = 0.5 * ChickData_1.default.user.buyChickPrice(lv);
        var coin = NumberUtils_1.default.getLargeString(Utils_1.default.fixFloat(this.coinVal));
        var times = ChickData_1.default.user.share_times;
        this.SetText("lbl_coin", coin);
        this.SetText("lbl_times", "\u8FD8\u53EF\u5206\u4EAB" + times + "\u6B21");
    };
    ShareView.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
            case "btn_share":
                WxCenter_1.default.shareAppMessage(function () {
                    if (ChickData_1.default.user.share_times > 0) {
                        ChickData_1.default.user.share_times--;
                        AudioMgr_1.default.Instance().playMX("coin");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvU2hhcmVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdEQUEyQztBQUMzQyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1Qyx1REFBa0Q7QUFDbEQsMkNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFNO0lBQTdDOztJQTZDQSxDQUFDO0lBekNHLHlCQUFLLEdBQUw7UUFFSSxlQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUVJLGlCQUFNLFNBQVMsV0FBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0ksSUFBSSxFQUFFLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxHQUFHLHFCQUFXLENBQUMsY0FBYyxDQUFDLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxLQUFLLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDLDZCQUFPLEtBQUssV0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsZUFBZTtRQUFsQyxpQkFxQkM7UUFwQkcsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osa0JBQVEsQ0FBQyxlQUFlLENBQUM7b0JBQ3JCLElBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBQzt3QkFDOUIsbUJBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQzdCLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNuQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxLQUFJLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBQyxDQUFDOzRCQUNqRSxJQUFHLENBQUM7Z0NBQUUsbUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUM7NEJBQzFDLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3JCLENBQUMsQ0FBQyxDQUFBO3FCQUNMO29CQUNELEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtTQUNUO0lBQ1QsQ0FBQztJQTVDZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTZDN0I7SUFBRCxnQkFBQztDQTdDRCxBQTZDQyxDQTdDc0MsZ0JBQU0sR0E2QzVDO2tCQTdDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvV3hDZW50ZXJcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBOdW1iZXJVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvTnVtYmVyVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZVZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgcHJpdmF0ZSBjb2luVmFsOm51bWJlcjtcbiAgICBzdGFydCgpXG4gICAge1xuICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX3NoYXJlJykpXG4gICAgfVxuXG4gICAgb25EZXN0cm95KClcbiAgICB7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIHNldERhdGEoKXtcbiAgICAgICAgbGV0IGx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAxID4gMCA/IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpIC0gMSA6IDE7XG4gICAgICAgIHRoaXMuY29pblZhbCA9IDAuNSpDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKGx2KTtcbiAgICAgICAgbGV0IGNvaW4gPSBOdW1iZXJVdGlscy5nZXRMYXJnZVN0cmluZyhVdGlscy5maXhGbG9hdCh0aGlzLmNvaW5WYWwpKTtcbiAgICAgICAgbGV0IHRpbWVzID0gQ2hpY2tEYXRhLnVzZXIuc2hhcmVfdGltZXM7XG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsY29pbilcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3RpbWVzXCIsYOi/mOWPr+WIhuS6qyR7dGltZXN95qyhYCk7XG4gICAgfVxuXG4gICAgb25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2hhcmVcIjpcbiAgICAgICAgICAgICAgICBXeENlbnRlci5zaGFyZUFwcE1lc3NhZ2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuc2hhcmVfdGltZXMgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLnNoYXJlX3RpbWVzLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNvaW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5mbHlBbmltKDAsdGhpcy5ub2RlLFwiaWNvbl9jb2luXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDUsMTApLDEwMCwoYik9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiKSBDaGlja0RhdGEudXNlci5jb2luICs9IHRoaXMuY29pblZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICB9XG59XG4iXX0=