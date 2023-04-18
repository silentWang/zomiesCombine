
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
                var key = this._selectType == 0 ? Native_1.VIP_TYPE.VIP_FOREVER : Native_1.VIP_TYPE.VIP_MONTH;
                Native_1.default.buyMonthCard(key);
                break;
            case "btnRecover":
                Native_1.default.buyMonthCard(Native_1.VIP_TYPE.RECOVER_VIP);
                break;
            case "btnPrivacy":
                Native_1.default.openWebView('https://www.huadcx.com/privacy.html');
                break;
            case "btnXieyi":
                Native_1.default.openWebView('https://www.huadcx.com/privacy.html');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXE1vbnRoVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnREFBMkM7QUFDM0MsaURBQTRDO0FBQzVDLDZDQUFzRDtBQUVoRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBTTtJQUE3QztRQUNJLHdCQUF3QjtRQUQ1QixxRUErQ0M7UUE1Q0csZUFBZTtRQUVQLGlCQUFXLEdBQUcsQ0FBQyxDQUFBOztJQTBDM0IsQ0FBQztJQXpDRyx5QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUVPLDZCQUFTLEdBQWpCLFVBQWtCLElBQVc7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLCtCQUFXLEdBQVgsVUFBWSxLQUFVLEVBQUUsZUFBb0I7UUFDeEMsaUJBQU0sV0FBVyxZQUFDLEtBQUssRUFBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsUUFBUTtnQkFDUixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGlCQUFRLENBQUMsU0FBUyxDQUFDO2dCQUM1RSxnQkFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixnQkFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLGdCQUFNLENBQUMsV0FBVyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7Z0JBQ3pELE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsZ0JBQU0sQ0FBQyxXQUFXLENBQUMscUNBQXFDLENBQUMsQ0FBQTtnQkFDekQsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQTdDZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQStDN0I7SUFBRCxnQkFBQztDQS9DRCxBQStDQyxDQS9Dc0MsZ0JBQU0sR0ErQzVDO2tCQS9Db0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uLy4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBOYXRpdmUsIHsgVklQX1RZUEUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvTmF0aXZlXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoVmlldyBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfc2VsZWN0VHlwZSA9IDBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNlbGVjdCh0eXBlOm51bWJlcil7XHJcbiAgICAgICAgbGV0IGlzQUQgPSB0eXBlID09IDA7XHJcbiAgICAgICAgbGV0IGltZ3NlbCA9IHRoaXMuR2V0R2FtZU9iamVjdCgnaW1nU2VsZWN0ZWQnKTtcclxuICAgICAgICBsZXQgcG9zID0gaW1nc2VsLnBvc2l0aW9uO1xyXG4gICAgICAgIGltZ3NlbC5wb3NpdGlvbiA9IGNjLnYzKGlzQUQgPyAtMTQ3IDogMTQ3LHBvcy55LHBvcy56KTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RUeXBlID0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIG9uVUlDbGlja2VkKGV2ZW50OiBhbnksIGN1c3RvbUV2ZW50RGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25VSUNsaWNrZWQoZXZlbnQsY3VzdG9tRXZlbnREYXRhKTtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5BXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdCgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuQlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3QoMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bkJ1eVwiOlxyXG4gICAgICAgICAgICAgICAgLy8gdG8gZG9cclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLl9zZWxlY3RUeXBlID09IDAgPyBWSVBfVFlQRS5WSVBfRk9SRVZFUiA6IFZJUF9UWVBFLlZJUF9NT05USDtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZS5idXlNb250aENhcmQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuUmVjb3ZlclwiOlxyXG4gICAgICAgICAgICAgICAgTmF0aXZlLmJ1eU1vbnRoQ2FyZChWSVBfVFlQRS5SRUNPVkVSX1ZJUCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0blByaXZhY3lcIjpcclxuICAgICAgICAgICAgICAgIE5hdGl2ZS5vcGVuV2ViVmlldygnaHR0cHM6Ly93d3cuaHVhZGN4LmNvbS9wcml2YWN5Lmh0bWwnKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5YaWV5aVwiOlxyXG4gICAgICAgICAgICAgICAgTmF0aXZlLm9wZW5XZWJWaWV3KCdodHRwczovL3d3dy5odWFkY3guY29tL3ByaXZhY3kuaHRtbCcpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==