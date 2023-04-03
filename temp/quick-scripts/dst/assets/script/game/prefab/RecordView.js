
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/prefab/RecordView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9bb0ZnB1xJR6Vp3tiTtekw', 'RecordView');
// script/game/prefab/RecordView.ts

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
var ChickData_1 = require("../../manager/ChickData");
var AudioMgr_1 = require("../../utils/AudioMgr");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RecordView = /** @class */ (function (_super) {
    __extends(RecordView, _super);
    function RecordView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.res = null;
        return _this;
    }
    RecordView.prototype.start = function () {
        var _this = this;
        this.GetButton("btn_share").interactable = false;
        this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
            _this.GetButton("btn_share").interactable = true;
        })));
    };
    RecordView.prototype.setData = function (res) {
        this.res = res;
    };
    RecordView.prototype.onUIClicked = function (event, customEventData) {
        _super.prototype.onUIClicked.call(this, event, customEventData);
        AudioMgr_1.default.Instance().playMX("click");
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_share":
                window["tt"].shareAppMessage({
                    channel: 'video',
                    title: '',
                    imageUrl: '',
                    query: '',
                    extra: {
                        videoPath: this.res.videoPath // 可用录屏得到的视频地址
                    },
                    success: function () {
                        // console.log('分享视频成功');
                        AudioMgr_1.default.Instance().playMX("gem");
                        Utils_1.default.flyAnim(1, cc.find("Canvas"), "icon_gem", Utils_1.default.getRandomInt(2, 3), 85, function (b) {
                            if (b)
                                ChickData_1.default.user.gem += 2;
                        });
                    },
                    fail: function (e) {
                        // console.log('分享视频失败');
                    }
                });
                this.closeUI();
                break;
            case "btn_save":
                window["tt"].saveVideoToPhotosAlbum({
                    filePath: this.res.videoPath,
                    success: function (res) {
                        window["tt"].showToast({
                            title: '保存成功'
                        });
                        AudioMgr_1.default.Instance().playMX("gem");
                        Utils_1.default.flyAnim(1, cc.find("Canvas"), "icon_gem", Utils_1.default.getRandomInt(2, 3), 85, function (b) {
                            if (b)
                                ChickData_1.default.user.gem += 2;
                        });
                    },
                    fail: function (res) {
                        window["tt"].showToast({
                            title: '保存失败'
                        });
                    }
                });
                this.closeUI();
                break;
            case "btn_close":
                this.closeUI();
                break;
        }
    };
    RecordView = __decorate([
        ccclass
    ], RecordView);
    return RecordView;
}(BaseUI_1.default));
exports.default = RecordView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxwcmVmYWJcXFJlY29yZFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHFEQUFnRDtBQUNoRCxpREFBNEM7QUFDNUMsMkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBeUVDO1FBaEVHLFNBQUcsR0FBUSxJQUFJLENBQUM7O0lBZ0VwQixDQUFDO0lBdkVHLDBCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUpHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUMxRCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQztJQUdELDRCQUFPLEdBQVAsVUFBUSxHQUFHO1FBQ1AsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxLQUFlLEVBQUUsZUFBZTtRQUN4QyxpQkFBTSxXQUFXLFlBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxXQUFXO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxPQUFPO29CQUNoQixLQUFLLEVBQUUsRUFBRTtvQkFDVCxRQUFRLEVBQUUsRUFBRTtvQkFDWixLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUU7d0JBQ0gsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFBLGNBQWM7cUJBQzlDO29CQUNELE9BQU87d0JBQ0gseUJBQXlCO3dCQUN6QixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbEMsZUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxVQUFVLEVBQUMsZUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLFVBQUMsQ0FBQzs0QkFDdkUsSUFBRyxDQUFDO2dDQUNBLG1CQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLENBQUMsQ0FBQyxDQUFBO29CQUVOLENBQUM7b0JBQ0QsSUFBSSxZQUFDLENBQUM7d0JBQ0YseUJBQXlCO29CQUM3QixDQUFDO2lCQUNKLENBQUMsQ0FBQTtnQkFFRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLENBQUM7b0JBQ2hDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVM7b0JBQzVCLE9BQU8sWUFBQyxHQUFHO3dCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQ25CLEtBQUssRUFBRSxNQUFNO3lCQUNoQixDQUFDLENBQUE7d0JBQ0Ysa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xDLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsVUFBVSxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxVQUFDLENBQUM7NEJBQ3ZFLElBQUcsQ0FBQztnQ0FDQSxtQkFBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO3dCQUNoQyxDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDO29CQUNELElBQUksWUFBQyxHQUFHO3dCQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQ25CLEtBQUssRUFBRSxNQUFNO3lCQUNoQixDQUFDLENBQUE7b0JBQ04sQ0FBQztpQkFDSixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07U0FDYjtJQUNMLENBQUM7SUF0RWdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F5RTlCO0lBQUQsaUJBQUM7Q0F6RUQsQUF5RUMsQ0F6RXVDLGdCQUFNLEdBeUU3QztrQkF6RW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi8uLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZFZpZXcgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLkdldEJ1dHRvbihcImJ0bl9zaGFyZVwiKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuR2V0QnV0dG9uKFwiYnRuX3NoYXJlXCIpLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSkpKVxyXG4gICAgfVxyXG4gICAgcmVzOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIHNldERhdGEocmVzKSB7XHJcbiAgICAgICAgdGhpcy5yZXMgPSByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25VSUNsaWNrZWQoZXZlbnQ6IGNjLkV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBzdXBlci5vblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2hhcmVcIjpcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInR0XCJdLnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogJ3ZpZGVvJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBleHRyYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1BhdGg6IHRoaXMucmVzLnZpZGVvUGF0aC8vIOWPr+eUqOW9leWxj+W+l+WIsOeahOinhumikeWcsOWdgFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WIhuS6q+inhumikeaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImdlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgxLCBjYy5maW5kKFwiQ2FudmFzXCIpLFwiaWNvbl9nZW1cIixVdGlscy5nZXRSYW5kb21JbnQoMiwzKSw4NSwoYik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ2VtICs9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfliIbkuqvop4bpopHlpLHotKUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NhdmVcIjpcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInR0XCJdLnNhdmVWaWRlb1RvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiB0aGlzLnJlcy52aWRlb1BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93W1widHRcIl0uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImdlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgxLCBjYy5maW5kKFwiQ2FudmFzXCIpLFwiaWNvbl9nZW1cIixVdGlscy5nZXRSYW5kb21JbnQoMiwzKSw4NSwoYik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ2VtICs9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbXCJ0dFwiXS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lrZjlpLHotKUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==