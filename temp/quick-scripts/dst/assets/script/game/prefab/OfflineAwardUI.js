
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXE9mZmxpbmVBd2FyZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUUzQyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1Qyx1REFBa0Q7QUFDbEQsMkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFNO0lBQWxEO1FBQUEscUVBK0RDO1FBN0RXLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBNkQ5QixDQUFDO0lBNURHLHNCQUFXLGdDQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcscUJBQVcsQ0FBQyxjQUFjLENBQUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ3ZGLENBQUM7OztPQUpBO0lBTUQsOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixlQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxlQUFlO1FBQWxDLGlCQThDQztRQTdDRyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssV0FBVztnQkFDWix1Q0FBdUM7Z0JBQ3ZDLElBQUksTUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7Z0JBQ3JCLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBQyxDQUFDO29CQUNqRSxJQUFHLENBQUMsRUFDSjt3QkFDSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBSSxDQUFBO3dCQUMzQixtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNwQjtnQkFDTCxDQUFDLENBQUMsQ0FBQTtnQkFDRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2QsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkMsZUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsZUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLFVBQUMsQ0FBQztvQkFDakUsSUFBRyxDQUFDO3dCQUFFLG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFBO2dCQUMzQyxDQUFDLENBQUMsQ0FBQTtnQkFDRixtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsTUFBSztZQUNULEtBQUssUUFBUTtnQkFDVCxJQUFJLElBQUksR0FBRyxVQUFDLENBQUM7b0JBQ1QsSUFBSSxDQUFDLEVBQUU7d0JBQ0gsSUFBSSxNQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7d0JBQ3pCLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNuQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxLQUFJLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBQyxDQUFDOzRCQUNqRSxJQUFHLENBQUMsRUFDSjtnQ0FDSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBSSxDQUFBO2dDQUMzQixtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDOzZCQUNwQjt3QkFDTCxDQUFDLENBQUMsQ0FBQTt3QkFDRixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7cUJBQ2pCO2dCQUNMLENBQUMsQ0FBQTtnQkFDRCxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDOUIsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxRQUFRO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ3JCLE1BQU07U0FDYjtJQUNMLENBQUM7SUE5RGdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErRGxDO0lBQUQscUJBQUM7Q0EvREQsQUErREMsQ0EvRDJDLGdCQUFNLEdBK0RqRDtrQkEvRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi8uLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xyXG5pbXBvcnQgQWRDZW50ZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQWRDZW50ZXJcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgTnVtYmVyVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL051bWJlclV0aWxzXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2ZmbGluZUF3YXJkVUkgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIHByaXZhdGUgX2RhdGE6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuR2V0VGV4dCgnbGJsX2NvaW4nKS5zdHJpbmcgPSBOdW1iZXJVdGlscy5nZXRMYXJnZVN0cmluZyhVdGlscy5maXhGbG9hdCh2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDk5OTk5O1xyXG4gICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYWQnKSlcclxuICAgIH1cclxuXHJcbiAgICBvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9jbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgLy8gQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2luID0gdGhpcy5fZGF0YSBcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY29pblwiKTtcclxuICAgICAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5jb2luICs9IGNvaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX25vcm1hbFwiOlxyXG4gICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjb2luXCIpO1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYikgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSB0aGlzLl9kYXRhICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2FkXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgZnVuYyA9IChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2luID0gdGhpcy5fZGF0YSAqIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjb2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5mbHlBbmltKDAsdGhpcy5ub2RlLFwiaWNvbl9jb2luXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDUsMTApLDEwMCwoYik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiArPSBjb2luIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoZnVuYylcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2J1eWZyZWVcIjpcclxuICAgICAgICAgICAgICAgIC8vIHRvIGRvXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGRkZGRkJylcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=