
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MonthView = /** @class */ (function (_super) {
    __extends(MonthView, _super);
    function MonthView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MonthView.prototype.start = function () {
        this.SetText('txtPrice', '12');
    };
    MonthView.prototype.setSelect = function (type) {
        var isAD = type == 0;
        var imgsel = this.GetGameObject('imgSelected');
        var pos = imgsel.position;
        imgsel.position = cc.v3(isAD ? -147 : 147, pos.y, pos.z);
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
                cc.log('cccccccc');
                break;
            case "btnRecover":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvTW9udGhWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdEQUEyQztBQUMzQyxpREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQU07SUFBN0M7O0lBMkNBLENBQUM7SUExQ0csd0JBQXdCO0lBRXhCLGVBQWU7SUFHZix5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLDZCQUFTLEdBQWpCLFVBQWtCLElBQVc7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLCtCQUFXLEdBQVgsVUFBWSxLQUFVLEVBQUUsZUFBb0I7UUFDeEMsaUJBQU0sV0FBVyxZQUFDLEtBQUssRUFBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsUUFBUTtnQkFDUixFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBekNnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMkM3QjtJQUFELGdCQUFDO0NBM0NELEFBMkNDLENBM0NzQyxnQkFBTSxHQTJDNUM7a0JBM0NvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoVmlldyBleHRlbmRzIEJhc2VVSSB7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5TZXRUZXh0KCd0eHRQcmljZScsJzEyJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTZWxlY3QodHlwZTpudW1iZXIpe1xuICAgICAgICBsZXQgaXNBRCA9IHR5cGUgPT0gMDtcbiAgICAgICAgbGV0IGltZ3NlbCA9IHRoaXMuR2V0R2FtZU9iamVjdCgnaW1nU2VsZWN0ZWQnKTtcbiAgICAgICAgbGV0IHBvcyA9IGltZ3NlbC5wb3NpdGlvbjtcbiAgICAgICAgaW1nc2VsLnBvc2l0aW9uID0gY2MudjMoaXNBRCA/IC0xNDcgOiAxNDcscG9zLnkscG9zLnopO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgICBvblVJQ2xpY2tlZChldmVudDogYW55LCBjdXN0b21FdmVudERhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBzdXBlci5vblVJQ2xpY2tlZChldmVudCxjdXN0b21FdmVudERhdGEpO1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5BXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3QoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuQlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0KDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0bkJ1eVwiOlxuICAgICAgICAgICAgICAgIC8vIHRvIGRvXG4gICAgICAgICAgICAgICAgY2MubG9nKCdjY2NjY2NjYycpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuUmVjb3ZlclwiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0blByaXZhY3lcIjpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5YaWV5aVwiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=