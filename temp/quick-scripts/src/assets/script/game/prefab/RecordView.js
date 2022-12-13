"use strict";
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