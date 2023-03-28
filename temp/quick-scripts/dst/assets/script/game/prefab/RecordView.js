
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
        if (window && window['xxxxx'])
            window['xxxxx']("Q8imyNHc3ZTJrHQKGknCbXx6R");
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
                            if (window && window['xxxxx'])
                                window['xxxxx']("hmSmM8fMipthDFrMc3t54BDD");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("nGfdA8P5nfid3hFWxDKKatRw");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("Pb8pGAmdENni");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9wcmVmYWIvUmVjb3JkVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUE2RUM7UUFwRUcsU0FBRyxHQUFRLElBQUksQ0FBQzs7SUFvRXBCLENBQUM7SUEzRUcsMEJBQUssR0FBTDtRQUFBLGlCQU1DO1FBSkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzFELEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUixDQUFDO0lBR0QsNEJBQU8sR0FBUCxVQUFRLEdBQUc7UUFDUCxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxLQUFlLEVBQUUsZUFBZTtRQUN4QyxpQkFBTSxXQUFXLFlBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFB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QUFDO0NBN0VELEFBNkVDLENBN0V1QyxnQkFBTSxHQTZFN0M7a0JBN0VvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vLi4vZnJhbXdvcmsvQmFzZVVJXCI7XG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi8uLi91dGlscy9BdWRpb01nclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvcmRWaWV3IGV4dGVuZHMgQmFzZVVJIHtcblxuICAgIHN0YXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuR2V0QnV0dG9uKFwiYnRuX3NoYXJlXCIpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICB0aGlzLkdldEJ1dHRvbihcImJ0bl9zaGFyZVwiKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB9KSkpXG4gICAgfVxuICAgIHJlczogYW55ID0gbnVsbDtcblxuICAgIHNldERhdGEocmVzKSB7XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlE4aW15TkhjM1pUSnJIUUtHa25DYlh4NlJcIik7XG4gICAgICAgIHRoaXMucmVzID0gcmVzO1xuICAgIH1cblxuICAgIG9uVUlDbGlja2VkKGV2ZW50OiBjYy5FdmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIHN1cGVyLm9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2hhcmVcIjpcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJ0dFwiXS5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiAndmlkZW8nLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgICAgICAgICBleHRyYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9QYXRoOiB0aGlzLnJlcy52aWRlb1BhdGgvLyDlj6/nlKjlvZXlsY/lvpfliLDnmoTop4bpopHlnLDlnYBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfliIbkuqvop4bpopHmiJDlip8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiZ2VtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgxLCBjYy5maW5kKFwiQ2FudmFzXCIpLFwiaWNvbl9nZW1cIixVdGlscy5nZXRSYW5kb21JbnQoMiwzKSw4NSwoYik9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJobVNtTThmTWlwdGhERnJNYzN0NTRCRERcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ2VtICs9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZhaWwoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WIhuS6q+inhumikeWksei0pScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2F2ZVwiOlxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIm5HZmRBOFA1bmZpZDNoRld4REtLYXRSd1wiKTtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJ0dFwiXS5zYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHRoaXMucmVzLnZpZGVvUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcInR0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lrZjmiJDlip8nXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJnZW1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5mbHlBbmltKDEsIGNjLmZpbmQoXCJDYW52YXNcIiksXCJpY29uX2dlbVwiLFV0aWxzLmdldFJhbmRvbUludCgyLDMpLDg1LChiKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmdlbSArPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlBiOHBHQW1kRU5uaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcInR0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lrZjlpLHotKUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2Nsb3NlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19