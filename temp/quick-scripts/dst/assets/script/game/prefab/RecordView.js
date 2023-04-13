
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvUmVjb3JkVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUF5RUM7UUFoRUcsU0FBRyxHQUFRLElBQUksQ0FBQzs7SUFnRXBCLENBQUM7SUF2RUcsMEJBQUssR0FBTDtRQUFBLGlCQU1DO1FBSkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzFELEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUixDQUFDO0lBR0QsNEJBQU8sR0FBUCxVQUFRLEdBQUc7UUFDUCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLEtBQWUsRUFBRSxlQUFlO1FBQ3hDLGlCQUFNLFdBQVcsWUFBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDMUMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFdBQVc7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQztvQkFDekIsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO29CQUNaLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRTt3QkFDSCxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUEsY0FBYztxQkFDOUM7b0JBQ0QsT0FBTzt3QkFDSCx5QkFBeUI7d0JBQ3pCLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNsQyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVUsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsVUFBQyxDQUFDOzRCQUN2RSxJQUFHLENBQUM7Z0NBQ0EsbUJBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQyxDQUFDLENBQUE7b0JBRU4sQ0FBQztvQkFDRCxJQUFJLFlBQUMsQ0FBQzt3QkFDRix5QkFBeUI7b0JBQzdCLENBQUM7aUJBQ0osQ0FBQyxDQUFBO2dCQUVGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDaEMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUztvQkFDNUIsT0FBTyxZQUFDLEdBQUc7d0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDbkIsS0FBSyxFQUFFLE1BQU07eUJBQ2hCLENBQUMsQ0FBQTt3QkFDRixrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbEMsZUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxVQUFVLEVBQUMsZUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLFVBQUMsQ0FBQzs0QkFDdkUsSUFBRyxDQUFDO2dDQUNBLG1CQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLENBQUMsQ0FBQyxDQUFBO29CQUNOLENBQUM7b0JBQ0QsSUFBSSxZQUFDLEdBQUc7d0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDbkIsS0FBSyxFQUFFLE1BQU07eUJBQ2hCLENBQUMsQ0FBQTtvQkFDTixDQUFDO2lCQUNKLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQXRFZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXlFOUI7SUFBRCxpQkFBQztDQXpFRCxBQXlFQyxDQXpFdUMsZ0JBQU0sR0F5RTdDO2tCQXpFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uLy4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vLi4vdXRpbHMvQXVkaW9NZ3JcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkVmlldyBleHRlbmRzIEJhc2VVSSB7XG5cbiAgICBzdGFydCgpXG4gICAge1xuICAgICAgICB0aGlzLkdldEJ1dHRvbihcImJ0bl9zaGFyZVwiKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgdGhpcy5HZXRCdXR0b24oXCJidG5fc2hhcmVcIikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfSkpKVxuICAgIH1cbiAgICByZXM6IGFueSA9IG51bGw7XG5cbiAgICBzZXREYXRhKHJlcykge1xuICAgICAgICB0aGlzLnJlcyA9IHJlcztcbiAgICB9XG5cbiAgICBvblVJQ2xpY2tlZChldmVudDogY2MuRXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICBzdXBlci5vblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKTtcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3NoYXJlXCI6XG4gICAgICAgICAgICAgICAgd2luZG93W1widHRcIl0uc2hhcmVBcHBNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogJ3ZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogJycsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUGF0aDogdGhpcy5yZXMudmlkZW9QYXRoLy8g5Y+v55So5b2V5bGP5b6X5Yiw55qE6KeG6aKR5Zyw5Z2AXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5YiG5Lqr6KeG6aKR5oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImdlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMSwgY2MuZmluZChcIkNhbnZhc1wiKSxcImljb25fZ2VtXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDIsMyksODUsKGIpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ2VtICs9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZhaWwoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WIhuS6q+inhumikeWksei0pScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2F2ZVwiOlxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInR0XCJdLnNhdmVWaWRlb1RvUGhvdG9zQWxidW0oe1xuICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGhpcy5yZXMudmlkZW9QYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93W1widHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImdlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmZseUFuaW0oMSwgY2MuZmluZChcIkNhbnZhc1wiKSxcImljb25fZ2VtXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDIsMyksODUsKGIpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ2VtICs9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93W1widHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOWksei0pSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fY2xvc2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iXX0=