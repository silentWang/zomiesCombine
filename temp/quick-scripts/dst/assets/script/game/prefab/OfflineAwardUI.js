
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
            if (window && window['xxxxx'])
                window['xxxxx']("hkmAP");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("YGPC");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("bNcyjzSnzsMfJs35C");
                AdCenter_1.default.Instance().play(func, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvT2ZmbGluZUF3YXJkVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBRTNDLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQU07SUFBbEQ7UUFBQSxxRUE4REM7UUE1RFcsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUE0RDlCLENBQUM7SUEzREcsc0JBQVcsZ0NBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLGNBQWMsQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDdkYsQ0FBQzs7O09BTEE7SUFPRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGVBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFBbEMsaUJBNENDO1FBM0NHLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxXQUFXO2dCQUNaLHVDQUF1QztnQkFDdkMsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtnQkFDckIsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxVQUFDLENBQUM7b0JBQ2pFLElBQUcsQ0FBQyxFQUNKO3dCQUNJLG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFJLENBQUE7d0JBQzNCLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ3BCO2dCQUNMLENBQUMsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFDZCxNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RCxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkMsZUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsZUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLFVBQUMsQ0FBQztvQkFDakUsSUFBRyxDQUFDO3dCQUFFLG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFBO2dCQUMzQyxDQUFDLENBQUMsQ0FBQTtnQkFDRixtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsTUFBSztZQUNULEtBQUssUUFBUTtnQkFDVCxJQUFJLElBQUksR0FBRyxVQUFDLENBQUM7b0JBQ1QsSUFBSSxDQUFDLEVBQUU7d0JBQ0gsSUFBSSxNQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7d0JBQ3pCLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNuQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxLQUFJLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBQyxDQUFDOzRCQUNqRSxJQUFHLENBQUMsRUFDSjtnQ0FDSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBSSxDQUFBO2dDQUMzQixtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDOzZCQUNwQjt3QkFDTCxDQUFDLENBQUMsQ0FBQTt3QkFDRixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7cUJBQ2pCO2dCQUNMLENBQUMsQ0FBQTtnQkFDRCxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNuRSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2hDLE1BQU07U0FDYjtJQUNMLENBQUM7SUE3RGdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E4RGxDO0lBQUQscUJBQUM7Q0E5REQsQUE4REMsQ0E5RDJDLGdCQUFNLEdBOERqRDtrQkE5RG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcbmltcG9ydCBNc2dUb2FzdCBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnVG9hc3RcIjtcbmltcG9ydCBBZENlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9BZENlbnRlclwiO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBOdW1iZXJVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvTnVtYmVyVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2ZmbGluZUF3YXJkVUkgZXh0ZW5kcyBCYXNlVUkge1xuXG4gICAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiaGttQVBcIik7XG4gICAgICAgIHRoaXMuR2V0VGV4dCgnbGJsX2NvaW4nKS5zdHJpbmcgPSBOdW1iZXJVdGlscy5nZXRMYXJnZVN0cmluZyhVdGlscy5maXhGbG9hdCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSA5OTk5OTtcbiAgICAgICAgVXRpbHMucGxheUJyZWF0aCh0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9hZCcpKVxuICAgIH1cblxuICAgIG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XG4gICAgICAgICAgICAgICAgLy8gQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgY29pbiA9IHRoaXMuX2RhdGEgXG4gICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjb2luXCIpO1xuICAgICAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihiKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5jb2luICs9IGNvaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIllHUENcIik7XG4gICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjb2luXCIpO1xuICAgICAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihiKSBDaGlja0RhdGEudXNlci5jb2luICs9IHRoaXMuX2RhdGEgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9hZFwiOlxuICAgICAgICAgICAgICAgIGxldCBmdW5jID0gKGIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29pbiA9IHRoaXMuX2RhdGEgKiAyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNvaW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5mbHlBbmltKDAsdGhpcy5ub2RlLFwiaWNvbl9jb2luXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDUsMTApLDEwMCwoYik9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSBjb2luIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYk5jeWp6U256c01mSnMzNUNcIik7XG4gICAgICAgICAgICAgICAgQWRDZW50ZXIuSW5zdGFuY2UoKS5wbGF5KGZ1bmMsMSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==