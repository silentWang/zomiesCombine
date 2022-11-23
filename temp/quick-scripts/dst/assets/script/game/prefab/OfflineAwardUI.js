
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
var Data_1 = require("../../manager/Data");
var AudioMgr_1 = require("../../utils/AudioMgr");
var BigNumber_1 = require("../../utils/BigNumber");
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
            this.GetText('lbl_coin').string = BigNumber_1.default.getLargeString(Utils_1.default.fixFloat(value));
        },
        enumerable: false,
        configurable: true
    });
    OfflineAwardUI.prototype.start = function () {
        this.node.zIndex = 99999;
    };
    OfflineAwardUI.prototype.onBtnClicked = function (event, customEventData) {
        var _this = this;
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_close":
                AudioMgr_1.default.Instance().playSFX("click");
                var coin_1 = this._data;
                AudioMgr_1.default.Instance().playSFX("coin");
                Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                    if (b) {
                        Data_1.default.user.coin += coin_1;
                    }
                });
                this.closeUI();
                break;
            case "btn_normal":
                AudioMgr_1.default.Instance().playSFX("coin");
                Utils_1.default.flyAnim(0, this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                    if (b)
                        Data_1.default.user.coin += _this._data;
                });
                this.closeUI();
                break;
            case "btn_ad":
                var func = function (b) {
                    if (b) {
                        var coin_2 = _this._data * 2;
                        AudioMgr_1.default.Instance().playSFX("coin");
                        Utils_1.default.flyAnim(0, _this.node, "icon_coin", Utils_1.default.getRandomInt(5, 10), 100, function (b) {
                            if (b) {
                                Data_1.default.user.coin += coin_2;
                            }
                        });
                        _this.closeUI();
                    }
                };
                AdCenter_1.default.Instance().play(func);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXE9mZmxpbmVBd2FyZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUUzQyxtREFBOEM7QUFDOUMsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUM1QyxtREFBOEM7QUFDOUMsMkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFNO0lBQWxEO1FBQUEscUVBc0RDO1FBcERXLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBb0Q5QixDQUFDO0lBbkRHLHNCQUFXLGdDQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsbUJBQVMsQ0FBQyxjQUFjLENBQUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ3JGLENBQUM7OztPQUpBO0lBTUQsOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QscUNBQVksR0FBWixVQUFhLEtBQUssRUFBRSxlQUFlO1FBQW5DLGlCQXVDQztRQXRDRyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssV0FBVztnQkFDWixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckMsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtnQkFDakIsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxVQUFDLENBQUM7b0JBQ2pFLElBQUcsQ0FBQyxFQUNKO3dCQUNJLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQUksQ0FBQTtxQkFDekI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNkLE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2Isa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxVQUFDLENBQUM7b0JBQ2pFLElBQUcsQ0FBQzt3QkFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFBO2dCQUN0QyxDQUFDLENBQUMsQ0FBQTtnQkFDRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsTUFBSztZQUNULEtBQUssUUFBUTtnQkFDVCxJQUFJLElBQUksR0FBRyxVQUFDLENBQUM7b0JBQ1QsSUFBSSxDQUFDLEVBQUU7d0JBQ0gsSUFBSSxNQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7d0JBQ3pCLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNwQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxLQUFJLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBQyxDQUFDOzRCQUNqRSxJQUFHLENBQUMsRUFDSjtnQ0FDSSxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFJLENBQUE7NkJBQ3pCO3dCQUNMLENBQUMsQ0FBQyxDQUFBO3dCQUNGLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtxQkFDakI7Z0JBQ0wsQ0FBQyxDQUFBO2dCQUNELGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUM5QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBckRnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBc0RsQztJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdEQyQyxnQkFBTSxHQXNEakQ7a0JBdERvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBNc2dIaW50cyBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvTXNnSGludHNcIjtcclxuaW1wb3J0IEFkQ2VudGVyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0FkQ2VudGVyXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCIuLi8uLi91dGlscy9CaWdOdW1iZXJcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZmZsaW5lQXdhcmRVSSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBkYXRhKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5HZXRUZXh0KCdsYmxfY29pbicpLnN0cmluZyA9IEJpZ051bWJlci5nZXRMYXJnZVN0cmluZyhVdGlscy5maXhGbG9hdCh2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDk5OTk5O1xyXG4gICAgfVxyXG4gICAgb25CdG5DbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2luID0gdGhpcy5fZGF0YSBcclxuICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjb2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMCx0aGlzLm5vZGUsXCJpY29uX2NvaW5cIixVdGlscy5nZXRSYW5kb21JbnQoNSwxMCksMTAwLChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIuY29pbiArPSBjb2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fbm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjb2luXCIpO1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYikgRGF0YS51c2VyLmNvaW4gKz0gdGhpcy5fZGF0YSAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2FkXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgZnVuYyA9IChiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2luID0gdGhpcy5fZGF0YSAqIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY29pblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgwLHRoaXMubm9kZSxcImljb25fY29pblwiLFV0aWxzLmdldFJhbmRvbUludCg1LDEwKSwxMDAsKGIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGEudXNlci5jb2luICs9IGNvaW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBBZENlbnRlci5JbnN0YW5jZSgpLnBsYXkoZnVuYylcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=