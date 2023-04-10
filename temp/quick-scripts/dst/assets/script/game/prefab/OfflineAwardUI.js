
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/OfflineAwardUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47509lvN65A3YtUxhS8R3fU', 'OfflineAwardUI');
// script/game/prefab/OfflineAwardUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../framwork/BaseUI");
var AdCenter_1 = require("../../manager/AdCenter");
var ChickData_1 = require("../../manager/ChickData");
var AudioMgr_1 = require("../../utils/AudioMgr");
var NumberUtils_1 = require("../../utils/NumberUtils");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OfflineAwardUI = /** @class */ (function (_super) {
    __extends(OfflineAwardUI, _super);
    function OfflineAwardUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = 0;
        return _this;
    }
    Object.defineProperty(OfflineAwardUI.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
            this.GetText('lbl_coin').string = NumberUtils_1.default.getLargeString(Utils_1.default.fixFloat(value));
        },
        enumerable: false,
        configurable: true
    });
    OfflineAwardUI.prototype.start = function () {
        this.node.zIndex = 99999;
        Utils_1.default.playBreath(this.GetGameObject('btn_ad'));
    };
    OfflineAwardUI.prototype.onUIClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_close":
                // AudioMgr.Instance().playMX("click");
                var coin_1 = this._data;
                AudioMgr_1.default.Instance().playMX("coin");
                Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                    if (b) {
                        ChickData_1.default.user.coin += coin_1;
                        ChickData_1.default.save();
                    }
                });
                this.closeUI();
                break;
            case "btn_normal":
                AudioMgr_1.default.Instance().playMX("coin");
                Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                    if (b)
                        ChickData_1.default.user.coin += _this._data;
                });
                ChickData_1.default.save();
                this.closeUI();
                break;
            case "btn_ad":
                var func = function (b) {
                    if (b) {
                        var coin_2 = _this._data * 2;
                        AudioMgr_1.default.Instance().playMX("coin");
                        Utils_1.default.flyAnim(0, _this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                            if (b) {
                                ChickData_1.default.user.coin += coin_2;
                                ChickData_1.default.save();
                            }
                        });
                        _this.closeUI();
                    }
                };
                AdCenter_1.default.Instance().play(func);
                break;
            case "btn_buyfree":
                // to do
                console.log('dddddd');
                break;
        }
    };
    OfflineAwardUI = __decorate([
        ccclass
    ], OfflineAwardUI);
    return OfflineAwardUI;
}(BaseUI_1.default));
exports.default = OfflineAwardUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvT2ZmbGluZUF3YXJkVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBRTNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQU07SUFBbEQ7UUFBQSxxRUErREM7UUE3RFcsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUE2RDlCLENBQUM7SUE1REcsc0JBQVcsZ0NBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLGNBQWMsQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDdkYsQ0FBQzs7O09BSkE7SUFNRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGVBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFBbEMsaUJBOENDO1FBN0NHLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxXQUFXO2dCQUNaLHVDQUF1QztnQkFDdkMsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtnQkFDckIsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxVQUFDLENBQUM7b0JBQ2pFLElBQUcsQ0FBQyxFQUNKO3dCQUNJLG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFJLENBQUE7d0JBQzNCLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ3BCO2dCQUNMLENBQUMsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFDZCxNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBQyxDQUFDO29CQUNqRSxJQUFHLENBQUM7d0JBQUUsbUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUE7Z0JBQzNDLENBQUMsQ0FBQyxDQUFBO2dCQUNGLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFLO1lBQ1QsS0FBSyxRQUFRO2dCQUNULElBQUksSUFBSSxHQUFHLFVBQUMsQ0FBQztvQkFDVCxJQUFJLENBQUMsRUFBRTt3QkFDSCxJQUFJLE1BQUksR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTt3QkFDekIsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ25DLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxVQUFDLENBQUM7NEJBQ2pFLElBQUcsQ0FBQyxFQUNKO2dDQUNJLG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFJLENBQUE7Z0NBQzNCLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7NkJBQ3BCO3dCQUNMLENBQUMsQ0FBQyxDQUFBO3dCQUNGLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtxQkFDakI7Z0JBQ0wsQ0FBQyxDQUFBO2dCQUNELGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUM5QixNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLFFBQVE7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDckIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQTlEZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQStEbEM7SUFBRCxxQkFBQztDQS9ERCxBQStEQyxDQS9EMkMsZ0JBQU0sR0ErRGpEO2tCQS9Eb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi8uLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xuaW1wb3J0IE51bWJlclV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9OdW1iZXJVdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZmZsaW5lQXdhcmRVSSBleHRlbmRzIEJhc2VVSSB7XG5cbiAgICBwcml2YXRlIF9kYXRhOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG4gICAgcHVibGljIHNldCBkYXRhKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLkdldFRleHQoJ2xibF9jb2luJykuc3RyaW5nID0gTnVtYmVyVXRpbHMuZ2V0TGFyZ2VTdHJpbmcoVXRpbHMuZml4RmxvYXQodmFsdWUpKVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gOTk5OTk7XG4gICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYWQnKSlcbiAgICB9XG5cbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9jbG9zZVwiOlxuICAgICAgICAgICAgICAgIC8vIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XG4gICAgICAgICAgICAgICAgbGV0IGNvaW4gPSB0aGlzLl9kYXRhIFxuICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcbiAgICAgICAgICAgICAgICBVdGlscy5mbHlBbmltKDAsdGhpcy5ub2RlLFwiaWNvbl9jb2luXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDUsMTApLDEwMCwoYik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoYilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSBjb2luXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9ub3JtYWxcIjpcbiAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNvaW5cIik7XG4gICAgICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGIpIENoaWNrRGF0YS51c2VyLmNvaW4gKz0gdGhpcy5fZGF0YSAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2FkXCI6XG4gICAgICAgICAgICAgICAgbGV0IGZ1bmMgPSAoYik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2luID0gdGhpcy5fZGF0YSAqIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5jb2luICs9IGNvaW4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoZnVuYylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fYnV5ZnJlZVwiOlxuICAgICAgICAgICAgICAgIC8vIHRvIGRvXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RkZGRkZCcpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=