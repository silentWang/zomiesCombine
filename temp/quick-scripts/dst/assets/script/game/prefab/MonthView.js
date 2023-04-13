
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/MonthView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36af0tplMxLZoBu1ziKdOSd', 'MonthView');
// script/game/prefab/MonthView.ts

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
var AudioMgr_1 = require("../../utils/AudioMgr");
var Native_1 = require("../../utils/Native");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MonthView = /** @class */ (function (_super) {
    __extends(MonthView, _super);
    function MonthView() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this._selectType = 0;
        return _this;
    }
    MonthView.prototype.start = function () {
        this.SetText('txtPrice', '12');
    };
    MonthView.prototype.setSelect = function (type) {
        var isAD = type == 0;
        var imgsel = this.GetGameObject('imgSelected');
        var pos = imgsel.position;
        imgsel.position = cc.v3(isAD ? -147 : 147, pos.y, pos.z);
        this._selectType = type;
    };
    // update (dt) {}
    MonthView.prototype.onUIClicked = function (event, customEventData) {
        _super.prototype.onUIClicked.call(this, event, customEventData);
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btnA":
                this.setSelect(0);
                break;
            case "btnB":
                this.setSelect(1);
                break;
            case "btnBuy":
                // to do
                var key = this._selectType == 0 ? 'hw_vip_001' : 'hw_vip_002';
                Native_1.Native.buyMonthCard(key, function (res) {
                    console.log(res);
                });
                break;
            case "btnRecover":
                Native_1.Native.buyMonthCard('3', function (res) {
                    console.log(res);
                });
                break;
            case "btnPrivacy":
                break;
            case "btnXieyi":
                break;
        }
    };
    MonthView = __decorate([
        ccclass
    ], MonthView);
    return MonthView;
}(BaseUI_1.default));
exports.default = MonthView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXE1vbnRoVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnREFBMkM7QUFDM0MsaURBQTRDO0FBQzVDLDZDQUE0QztBQUV0QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBTTtJQUE3QztRQUNJLHdCQUF3QjtRQUQ1QixxRUFrREM7UUEvQ0csZUFBZTtRQUVQLGlCQUFXLEdBQUcsQ0FBQyxDQUFBOztJQTZDM0IsQ0FBQztJQTVDRyx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLDZCQUFTLEdBQWpCLFVBQWtCLElBQVc7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLCtCQUFXLEdBQVgsVUFBWSxLQUFVLEVBQUUsZUFBb0I7UUFDeEMsaUJBQU0sV0FBVyxZQUFDLEtBQUssRUFBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsUUFBUTtnQkFDUixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQzlELGVBQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLFVBQUMsR0FBRztvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDcEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixlQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxVQUFDLEdBQUc7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ3BCLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBaERnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBa0Q3QjtJQUFELGdCQUFDO0NBbERELEFBa0RDLENBbERzQyxnQkFBTSxHQWtENUM7a0JBbERvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IHsgTmF0aXZlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL05hdGl2ZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aFZpZXcgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3NlbGVjdFR5cGUgPSAwXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KCd0eHRQcmljZScsJzEyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTZWxlY3QodHlwZTpudW1iZXIpe1xyXG4gICAgICAgIGxldCBpc0FEID0gdHlwZSA9PSAwO1xyXG4gICAgICAgIGxldCBpbWdzZWwgPSB0aGlzLkdldEdhbWVPYmplY3QoJ2ltZ1NlbGVjdGVkJyk7XHJcbiAgICAgICAgbGV0IHBvcyA9IGltZ3NlbC5wb3NpdGlvbjtcclxuICAgICAgICBpbWdzZWwucG9zaXRpb24gPSBjYy52Myhpc0FEID8gLTE0NyA6IDE0Nyxwb3MueSxwb3Mueik7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0VHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBvblVJQ2xpY2tlZChldmVudDogYW55LCBjdXN0b21FdmVudERhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uVUlDbGlja2VkKGV2ZW50LGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuQVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3QoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bkJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0KDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5CdXlcIjpcclxuICAgICAgICAgICAgICAgIC8vIHRvIGRvXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5fc2VsZWN0VHlwZSA9PSAwID8gJ2h3X3ZpcF8wMDEnIDogJ2h3X3ZpcF8wMDInO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlLmJ1eU1vbnRoQ2FyZChrZXksKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuUmVjb3ZlclwiOlxyXG4gICAgICAgICAgICAgICAgTmF0aXZlLmJ1eU1vbnRoQ2FyZCgnMycsKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuUHJpdmFjeVwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5YaWV5aVwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=