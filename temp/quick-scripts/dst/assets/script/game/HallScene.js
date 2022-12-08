
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/HallScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b649a1nCtpCaLao7q4JfaAs', 'HallScene');
// script/game/HallScene.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framwork/BaseUI");
var MsgToast_1 = require("../framwork/MsgToast");
var ChickData_1 = require("../manager/ChickData");
var WxCenter_1 = require("../manager/WxCenter");
var AudioMgr_1 = require("../utils/AudioMgr");
var Utils_1 = require("../utils/Utils");
var Config_1 = require("./Config");
var CommonView_1 = require("./prefab/CommonView");
var ShareView_1 = require("./prefab/ShareView");
var Enemy_1 = require("./prefab/Enemy");
var FailView_1 = require("./prefab/FailView");
var RecordView_1 = require("./prefab/RecordView");
var OfflineAwardUI_1 = require("./prefab/OfflineAwardUI");
var ShopView_1 = require("./prefab/ShopView");
var WinView_1 = require("./prefab/WinView");
var GroundItem_1 = require("./GroundItem");
var ChickItem_1 = require("./ChickItem");
var CoinNotEnoughUI_1 = require("./prefab/CoinNotEnoughUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HallScene = /** @class */ (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemy_pre = null;
        _this._lastdroptime = 0;
        _this.enemylist = [];
        _this.wave_info = null;
        _this.bFail = false;
        _this.createcomplete = false;
        _this.path = [];
        _this.item_drag = null;
        _this.autocomindexs = [-1, -1];
        _this.items = [];
        _this.bPauseAutoCom = false; //是否暂停自动合成
        _this.bInAutoCom = false; //是否正在自动合成动画
        _this.bRecorder = false;
        _this.recordertime = 0;
        _this.isInAngry = false;
        _this.pre_soldier = null;
        _this.bChoosed = false;
        _this.touchPos = cc.Vec2.ZERO;
        _this.touchendtime = 0;
        _this.bFirstSubContex = true;
        return _this;
    }
    HallScene_1 = HallScene;
    Object.defineProperty(HallScene, "Instance", {
        get: function () {
            return HallScene_1._instance;
        },
        enumerable: false,
        configurable: true
    });
    HallScene.prototype.hidemergetips = function () {
        var slots = this.GetGameObject("slots"); //fx_ground_merge
        for (var _i = 0, _a = slots.children; _i < _a.length; _i++) {
            var slot = _a[_i];
            slot.getChildByName("fx_ground_merge").active = false;
        }
    };
    HallScene.prototype.showmergetips = function (lv) {
        var indexs = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.datacopy && item.datacopy.lv == lv && item.droptype == 0 && item.datacopy.lv < 60) {
                indexs.push(item.index);
            }
        }
        var slots = this.GetGameObject("slots"); //fx_ground_merge
        for (var i = 0; i < slots.children.length; ++i) {
            slots.children[i].getChildByName("fx_ground_merge").active = indexs.indexOf(i) >= 0;
        }
    };
    HallScene.prototype.update = function (dt) {
        if (dt > 1)
            dt = 1;
        this.SetText("lbl_coin", Utils_1.default.formatNumber(ChickData_1.default.user.coin) + "");
        if (this.recordertime != 0) {
            var s = Math.floor((Utils_1.default.getServerTime() - this.recordertime) / 1000);
            if (s > 0)
                this.SetText("lbl_luping", s + "s");
        }
        else
            this.SetText("lbl_luping", "");
        //y排序
        this.enemylist.sort(function (a, b) {
            return b.y - a.y;
        });
        for (var i = 0; i < this.enemylist.length; ++i) {
            this.enemylist[i].zIndex = i;
        }
        this._lastdroptime += dt;
        if (this._lastdroptime > 25 * (ChickData_1.default.user.drop_plant_time > Utils_1.default.getServerTime() ? .3 : 1)) {
            //普通花盆掉落
            if (this.item_drag.datacopy)
                return;
            var lv = Math.max(1, ChickData_1.default.user.GetMaxLv() - Utils_1.default.getRandomInt(6, 9));
            this.tryBuyPlant(lv, 3);
            this._lastdroptime = 0;
        }
        //一段时间不操作，提示可以合成
        if (this.touchendtime != 0 && Utils_1.default.getServerTime() - this.touchendtime > 5000) {
            this.mergetip();
        }
    };
    //中间显示图片
    HallScene.prototype.showImage = function (imgpath) {
        return __awaiter(this, void 0, void 0, function () {
            var node, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        node = new cc.Node();
                        _a = node.addComponent(cc.Sprite);
                        return [4 /*yield*/, Utils_1.default.loadRes(imgpath, cc.SpriteFrame)];
                    case 1:
                        _a.spriteFrame = (_b.sent());
                        node.parent = this.node;
                        node.y = 200;
                        node.scale = 1.2;
                        node.runAction(cc.sequence(cc.delayTime(2), cc.spawn(cc.moveBy(0.5, 0, 100), cc.fadeTo(0.5, 0)), cc.removeSelf()));
                        return [2 /*return*/];
                }
            });
        });
    };
    HallScene.prototype.removeenemy = function (node, bFail) {
        var isStop = false;
        var isChange = false;
        if (bFail)
            this.bFail = true;
        for (var i = this.enemylist.length - 1; i >= 0; --i) {
            if (node == this.enemylist[i]) {
                this.enemylist.splice(i, 1);
                break;
            }
        }
        if (this.createcomplete && this.enemylist.length == 0) {
            if (this.bFail) {
                if (ChickData_1.default.user.wave >= this.wave_info[2]) {
                    ChickData_1.default.user.wave = 1;
                    isStop = true;
                    var enemy_1 = node.getComponent(Enemy_1.default);
                    Utils_1.default.createUI("prefab/LoseUI").then(function (node) {
                        node.getComponent(FailView_1.default).setInfo(enemy_1.getBossMoney());
                    });
                }
                else {
                    ChickData_1.default.user.wave = 1;
                    this.showImage("texture/defeat");
                }
            }
            else {
                ChickData_1.default.user.wave++;
                isChange = true;
                if (ChickData_1.default.user.wave > this.wave_info[2]) {
                    var enemy = node.getComponent(Enemy_1.default);
                    var money_1 = enemy.getBossMoney();
                    this.node.runAction(cc.sequence(cc.delayTime(1.2), cc.callFunc(function () {
                        Utils_1.default.createUI("prefab/VictoryUI").then(function (node) {
                            node.getComponent(WinView_1.default).setInfo(money_1);
                        });
                    })));
                    isStop = true;
                    ChickData_1.default.user.wave = 1;
                    ChickData_1.default.user.lv++;
                    this.openNewSlot();
                    ChickData_1.default.save(true);
                    var key = ChickData_1.default.user.lv + "_" + ChickData_1.default.user.wave;
                    this.wave_info = Config_1.User_level[key];
                    WxCenter_1.default.aldLevelReport(ChickData_1.default.user.lv);
                }
                else {
                    AudioMgr_1.default.Instance().playSFX("win_wave");
                    // this.showImage("texture/success");
                    this.playSkAni("spine:other/shengjichenggong", "effect", this.node, cc.v3(0, 150, 0), 2);
                }
            }
            if (isStop)
                return;
            this.createwave(isChange);
        }
    };
    HallScene.prototype.createwave = function (isChange) {
        var _this = this;
        if (isChange === void 0) { isChange = false; }
        this.bFail = false;
        this.createcomplete = false;
        var key = ChickData_1.default.user.lv + "_" + ChickData_1.default.user.wave;
        this.wave_info = Config_1.User_level[key];
        //通关后就一直读最后一关
        if (!this.wave_info) {
            var key_1 = 60 + "_" + ChickData_1.default.user.wave;
            this.wave_info = Config_1.User_level[key_1];
        }
        if (ChickData_1.default.user.wave == this.wave_info[2]) {
            AudioMgr_1.default.Instance().playBGM("bgBoss");
            this.node.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(function () {
                Utils_1.default.createUI("prefab/BossCommingUI");
            })));
        }
        else if (ChickData_1.default.user.wave == 1) {
            AudioMgr_1.default.Instance().playBGM("BGM1");
        }
        //创建怪物
        var list = [];
        var num = 0;
        for (var i = 0; i < this.wave_info[4]; ++i)
            list.push(this.wave_info[3]);
        num = list.length;
        for (var i = 0; i < this.wave_info[6]; ++i)
            list.push(this.wave_info[5]);
        var _loop_1 = function (i) {
            var id = list[i];
            this_1.node.runAction(cc.sequence(cc.delayTime(2.2 * i), cc.callFunc(function () {
                var e = cc.instantiate(_this.enemy_pre);
                e.parent = _this.GetGameObject("node_obj");
                e.getComponent(Enemy_1.default).setID(id, i >= num);
                _this.enemylist.push(e);
                if (i == list.length - 1)
                    _this.createcomplete = true;
            })));
        };
        var this_1 = this;
        for (var i = 0; i < list.length; ++i) {
            _loop_1(i);
        }
        //关卡信息
        this.SetText("lbl_cur_lv", ChickData_1.default.user.lv + "");
        this.SetText("lbl_waves", ChickData_1.default.user.wave + "/" + this.wave_info[2]);
        this.SetText("lbl_pre_lv", (ChickData_1.default.user.lv - 1) + "");
        this.SetText("lbl_nex_lv", (ChickData_1.default.user.lv + 1) + "");
        if (isChange) {
            Utils_1.default.playBreath(this.GetGameObject('lbl_waves'), 1, 3, 0.5, false);
        }
    };
    HallScene.prototype.initComposeItems = function () {
        var list = ChickData_1.default.user.ComPlants;
        var m = {};
        for (var i = list.length - 1; i >= 0; i--) {
            if (list[i].lv > 60)
                list[i].lv = 60;
            if (m[list[i].index] == 1) {
                list.splice(i, 1);
                console.warn("错误...修正");
                continue;
            }
            m[list[i].index] = 1;
        }
        for (var i = list.length - 1; i >= 0; i--) {
            if (this.items[list[i].index])
                this.items[list[i].index].setItemData(list[i]);
        }
    };
    HallScene.prototype.getItemByPos = function (pos) {
        for (var i = 0; i < this.items.length; ++i) {
            if (this.items[i].node.getBoundingBox().contains(pos)) {
                return this.items[i].node.getComponent(ChickItem_1.default);
            }
        }
        return null;
    };
    HallScene.prototype.setdragitempos = function (pos) {
        pos = this.GetGameObject("node_com").convertToWorldSpaceAR(pos);
        pos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(pos);
        this.GetGameObject("item_drag").position = pos;
    };
    HallScene.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var slots, i, _i, _a, slot, stime, t, t, money, _b, _c, c, recorder;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        WxCenter_1.default.aldReport('HomeShow', 'show');
                        this.hidemergetips();
                        HallScene_1._instance = this;
                        WxCenter_1.default.init();
                        slots = this.GetGameObject("slots");
                        i = 0;
                        for (_i = 0, _a = slots.children; _i < _a.length; _i++) {
                            slot = _a[_i];
                            slot.getComponent(GroundItem_1.default).setIndex(++i);
                        }
                        return [4 /*yield*/, this.initView()];
                    case 1:
                        _d.sent();
                        this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
                            _this.tryAutocom();
                            if (_this.item_drag.node.active)
                                return;
                            // 小精灵掉落
                            if (ChickData_1.default.user.DropGiftPts.length > 0) {
                                var b = _this.tryBuyPlant(ChickData_1.default.user.DropGiftPts[0], 4);
                                if (b)
                                    ChickData_1.default.user.DropGiftPts.shift();
                            }
                            //  广告购买成功，因为没有空位未成功添加
                            if (ChickData_1.default.user.AdBuyNotDrop.length > 0) {
                                var b = _this.tryBuyPlant(ChickData_1.default.user.AdBuyNotDrop[0], 2);
                                if (b)
                                    ChickData_1.default.user.AdBuyNotDrop.shift();
                            }
                        })).repeatForever());
                        ChickData_1.default.user.auto_com_time = Math.max(0, ChickData_1.default.user.auto_com_time);
                        ChickData_1.default.user.double_income_time = Math.max(0, ChickData_1.default.user.double_income_time);
                        ChickData_1.default.user.drop_plant_time = Math.max(0, ChickData_1.default.user.drop_plant_time);
                        ChickData_1.default.user.double_att_time = Math.max(0, ChickData_1.default.user.double_att_time);
                        this.updateBuyButton();
                        stime = ChickData_1.default.user.serverTime;
                        t = (Utils_1.default.getServerTime() - stime) / 1000;
                        if (stime != 0 && t > 3 * 60) {
                            t = Math.min(7200 * 3, t);
                            money = ChickData_1.default.user.getOfflineEarning(t / 60);
                            Utils_1.default.createUI('prefab/OfflineAwardUI', null, function (ui) {
                                ui.getComponent(OfflineAwardUI_1.default).data = money;
                            });
                        }
                        for (_b = 0, _c = this.GetGameObject("node_path").children; _b < _c.length; _b++) {
                            c = _c[_b];
                            this.path.push(c.position);
                        }
                        this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
                            _this.createwave();
                        })));
                        //更新各种时间
                        this.GetGameObject("bottom").runAction(cc.sequence(cc.callFunc(function () {
                            var isX2In = ChickData_1.default.user.double_att_time - Utils_1.default.getServerTime() > 0;
                            var isInDb = ChickData_1.default.user.double_income_time - Utils_1.default.getServerTime() > 0;
                            var isDpIn = ChickData_1.default.user.drop_plant_time - Utils_1.default.getServerTime() > 0;
                            //校验时间
                            if (ChickData_1.default.user.double_att_time - Utils_1.default.getServerTime() > CommonView_1.MAX_DOUBLE_ATT_TIME * 60 * 1000) {
                                ChickData_1.default.user.double_att_time = Utils_1.default.getServerTime();
                            }
                            if (ChickData_1.default.user.double_income_time - Utils_1.default.getServerTime() > CommonView_1.MAX_DOUBLE_INCOME_TIME * 60 * 1000) {
                                ChickData_1.default.user.double_income_time = Utils_1.default.getServerTime();
                            }
                            if (ChickData_1.default.user.auto_com_time - Utils_1.default.getServerTime() > CommonView_1.MAX_AUTO_COM_TIME * 60 * 1000) {
                                ChickData_1.default.user.auto_com_time = Utils_1.default.getServerTime();
                            }
                            if (ChickData_1.default.user.drop_plant_time - Utils_1.default.getServerTime() > CommonView_1.MAX_DROP_PLANT_TIME * 60 * 1000) {
                                ChickData_1.default.user.drop_plant_time = Utils_1.default.getServerTime();
                            }
                            _this.breathAngry(isX2In);
                            _this.SetText("att_x2_time", isX2In ? Utils_1.default.getTimeStrByS((ChickData_1.default.user.double_att_time - Utils_1.default.getServerTime()) / 1000) : '打鸡血');
                            _this.SetText("rewardx2_time", isInDb ? Utils_1.default.getTimeStrByS((ChickData_1.default.user.double_income_time - Utils_1.default.getServerTime()) / 1000) : '双倍');
                            if (ChickData_1.default.user.auto_com_time - Utils_1.default.getServerTime() > 0) {
                                _this.SetText("auto_time", Utils_1.default.getTimeStrByS((ChickData_1.default.user.auto_com_time - Utils_1.default.getServerTime()) / 1000));
                            }
                            else {
                                _this.SetText("auto_time", "自动合成");
                            }
                            _this.SetText("lbl_drop_plant", isDpIn ? Utils_1.default.getTimeStrByS((ChickData_1.default.user.drop_plant_time - Utils_1.default.getServerTime()) / 1000) : '掉落');
                            _this.GetGameObject("fx_bt_angry").active = _this.GetGameObject("att_x2_time").active;
                            // if(Data.user.drop_plant_time - Utils.getServerTime()<0)
                            //     this.GetSprite("bt_fast_gen_process_item").fillRange = 0;
                            // else
                            //     this.GetSprite("bt_fast_gen_process_item").fillRange = ( (Data.user.drop_plant_time - Utils.getServerTime())/1000/60)/MAX_DROP_PLANT_TIME;// (max_drop_plant * 60 - (Data.user.drop_plant_time - Utils.getServerTime())/1000) /max_drop_plant * 60
                            // this.updateUI();
                            // TaskLayer.checkTask();//任务检测
                            // if (GameManager.Instance().isGuide == false)
                            //     this.GetGameObject("btn_auto").active = Data.user.guideIndex > 2;
                            // Data.user.checkNewTody();
                        }), cc.delayTime(1)).repeatForever());
                        this.GetGameObject("btn_delete").opacity = 0;
                        this.GetGameObject("guild_0").active = ChickData_1.default.user.guideIndex == 0;
                        // if (this.GetGameObject("supermarket"))
                        //     this.GetGameObject("supermarket").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(2)).repeatForever());
                        // if (this.GetGameObject("powerman"))
                        //     this.GetGameObject("powerman").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(3)).repeatForever());
                        // this.GetGameObject("btn_inviate").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(3)).repeatForever());
                        this.GetGameObject("lupin_gem").runAction(cc.sequence(cc.rotateTo(0.3, 20), cc.rotateTo(0.3, -10), cc.rotateTo(0.2, 0), cc.delayTime(3)).repeatForever());
                        if (this.GetGameObject("btn_Recorder"))
                            this.GetGameObject("btn_Recorder").active = window["tt"];
                        if (window["tt"]) {
                            recorder = window["tt"].getGameRecorderManager();
                            recorder.onStart(function (res) {
                                _this.GetGameObject("lupin_gem").active = false;
                                _this.GetGameObject("btn_VCR").active = false;
                                _this.GetGameObject("btn_end").active = true;
                                _this.GetGameObject("btn_Recorder").stopAllActions();
                                _this.GetGameObject("btn_Recorder").runAction(cc.sequence(cc.scaleTo(0.5, .9), cc.scaleTo(0.5, 1)).repeatForever());
                                //console.log("tt录屏开始");
                                _this.recordertime = Utils_1.default.getServerTime();
                            });
                            recorder.onStop(function (res) {
                                _this.bRecorder = false;
                                _this.GetGameObject("btn_Recorder").stopAllActions();
                                _this.GetGameObject("lupin_gem").active = true;
                                _this.GetGameObject("btn_Recorder").scale = 1;
                                _this.GetGameObject("btn_VCR").active = true;
                                _this.GetGameObject("btn_end").active = false;
                                // console.log("tt录屏结束");
                                // console.log(res.videoPath);
                                if (Utils_1.default.getServerTime() - _this.recordertime < 3000) {
                                    // MsgHints.show("录屏时间过短");
                                    _this.recordertime = 0;
                                    return;
                                }
                                _this.recordertime = 0;
                                Utils_1.default.createUI("prefab/LuPinResult", null, function (node) {
                                    node.getComponent(RecordView_1.default).setData(res);
                                });
                            });
                        }
                        cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
                        cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    HallScene.prototype.onGameHide = function () {
    };
    HallScene.prototype.onDestroy = function () {
        cc.game.off(cc.game.EVENT_SHOW, this.onGameShow);
        cc.game.off(cc.game.EVENT_HIDE, this.onGameHide);
        _super.prototype.onDestroy.call(this);
    };
    HallScene.prototype.onGameShow = function () {
        if (Utils_1.default.sharetime != 0 && Utils_1.default.sharecallback) {
            if (Utils_1.default.getServerTime() - Utils_1.default.sharetime >= 2000) {
                Utils_1.default.sharecallback(true);
            }
            else {
                MsgToast_1.default.show("分享失败");
                Utils_1.default.sharecallback(false);
            }
        }
        Utils_1.default.sharetime = 0;
        Utils_1.default.sharecallback = null;
    };
    HallScene.prototype.openNewSlot = function () {
        var curopen = GroundItem_1.default.getCurOpen();
        if (curopen < 0)
            return;
        var lv = Config_1.Config_ground[curopen].price;
        if (lv < ChickData_1.default.user.lv)
            return;
        ChickData_1.default.user.slots[curopen] = 1;
        ChickData_1.default.save();
        var slots = this.GetGameObject("slots");
        var slot = slots.children[curopen];
        if (slot) {
            slot.getComponent(GroundItem_1.default).setIndex(curopen);
            MsgToast_1.default.show("成功解锁新位置");
        }
    };
    HallScene.prototype.breathAngry = function (isbool) {
        var node = this.GetGameObject('btn_angry');
        if (!node)
            return;
        if (isbool) {
            if (this.isInAngry) {
                node.stopAllActions();
                node.scaleX = 1;
                node.scaleY = 1;
            }
            this.isInAngry = false;
            return;
        }
        if (this.isInAngry)
            return;
        this.isInAngry = true;
        node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(function () {
            Utils_1.default.playBreath(node).setTag(2);
        })).repeat(1)).setTag(1);
    };
    HallScene.prototype.initView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var node_com, index, i, node, plant, node_drag;
            var _this = this;
            return __generator(this, function (_a) {
                node_com = this.GetGameObject("node_com");
                index = 0;
                for (i = 0; i < 12; ++i) {
                    node = cc.instantiate(this.pre_soldier);
                    node.parent = node_com;
                    node.position = this.GetGameObject("slots").children[i].position; // cc.v2(x, y);
                    node.name = "itme" + index;
                    plant = node.getComponent(ChickItem_1.default);
                    plant.index = index;
                    this.items.push(plant);
                    ++index;
                }
                node_drag = cc.instantiate(this.pre_soldier);
                node_drag.parent = node_com.parent;
                node_drag.name = "item_drag";
                node_drag.x = -1000;
                this.item_drag = this.GetGameObject("item_drag").getComponent(ChickItem_1.default);
                this.item_drag.node.active = false;
                this.item_drag.bDrag = true;
                this.initComposeItems();
                node_com.on(cc.Node.EventType.TOUCH_START, function (e) {
                    _this.bPauseAutoCom = true;
                    _this.GetGameObject("node_com").stopAllActions();
                    // cc.log("暂停自动合成")
                    //如果在自动合成中，取消当前合成
                    if (_this.item_drag.node.active && _this.item_drag.datacopy) {
                        _this.item_drag.node.stopAllActions();
                        _this.item_drag.linkItem.setItemData(_this.item_drag.datacopy);
                        _this.item_drag.node.active = false;
                        _this.autocomindexs[0] = -1;
                        _this.autocomindexs[1] = -1;
                        _this.item_drag.linkItem = null;
                        _this.GetGameObject("node_com").stopAllActions();
                        cc.log("取消当前合成");
                    }
                    _this.item_drag.datacopy = null;
                    var pos = e.getLocation();
                    pos = node_com.convertToNodeSpaceAR(pos);
                    var item = _this.getItemByPos(pos);
                    if (item && item.droptype != 0) {
                        item.droptype = 0;
                        item.updateItem();
                    }
                    if (item && item.datacopy && item.droptype == 0) {
                        _this.touchPos = pos;
                        _this.bChoosed = true;
                        _this.setdragitempos(item.node.position);
                        _this.item_drag.index = item.index;
                        _this.item_drag.setItemData(item.datacopy);
                        _this.item_drag.linkItem = item;
                        _this.showmergetips(item.datacopy.lv);
                    }
                    else {
                        _this.item_drag.node.active = false;
                        _this.autocomindexs[0] = -1;
                        _this.autocomindexs[1] = -1;
                    }
                }, this);
                node_com.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
                    var pos = e.getLocation();
                    pos = node_com.convertToNodeSpaceAR(pos);
                    if (_this.bChoosed && pos.sub(_this.touchPos).mag() > 15) {
                        if (_this.item_drag.datacopy == null)
                            return;
                        _this.GetGameObject("btn_delete").opacity = 255;
                        _this.item_drag.node.active = true;
                        _this.item_drag.linkItem.setItemData(null);
                        _this.setdragitempos(pos);
                        var pos1 = _this.GetGameObject("btn_delete").position;
                        pos1 = _this.GetGameObject("btn_delete").parent.convertToWorldSpaceAR(pos1);
                        // if (e.getLocation().sub(cc.v2(pos1.x,pos1.y)).mag() < 100) {
                        //     this.GetGameObject("btn_delete").scale = 0.55;
                        // }
                        // else {
                        //     this.GetGameObject("btn_delete").scale = 0.5;
                        // }
                    }
                }, this);
                node_com.on(cc.Node.EventType.TOUCH_END, this.docomp, this);
                node_com.on(cc.Node.EventType.TOUCH_CANCEL, this.docomp, this);
                return [2 /*return*/];
            });
        });
    };
    HallScene.prototype.tryAutocom = function () {
        var _this = this;
        if (this.bPauseAutoCom || this.bInAutoCom)
            return;
        if (Utils_1.default.getServerTime() < ChickData_1.default.user.auto_com_time && !this.bInAutoCom) {
            this.initComposeItems();
            var _loop_2 = function (i) {
                if (!this_2.items[i] || !this_2.items[i].datacopy)
                    return "continue";
                for (var j = i + 1; j < this_2.items.length; ++j) {
                    if (!this_2.items[j] || !this_2.items[j].datacopy)
                        continue;
                    if (this_2.bInAutoCom)
                        return { value: void 0 };
                    if (this_2.items[i].datacopy.lv == this_2.items[j].datacopy.lv && this_2.items[i].droptype == 0 && this_2.items[j].droptype == 0 && this_2.items[i].datacopy.lv < 60) {
                        this_2.autocomindexs[0] = this_2.items[i].index;
                        this_2.autocomindexs[1] = this_2.items[j].index;
                        this_2.item_drag.linkItem = this_2.items[j];
                        this_2.item_drag.index = this_2.items[j].index;
                        this_2.item_drag.setItemData(this_2.items[j].datacopy);
                        this_2.item_drag.node.active = true;
                        this_2.items[j].setItemData(null);
                        this_2.item_drag.node.position = this_2.items[j].node.position;
                        this_2.setdragitempos(this_2.items[j].node);
                        targetpos = this_2.GetGameObject("node_com").convertToWorldSpaceAR(this_2.items[i].node.position);
                        targetpos = this_2.GetGameObject("item_drag").parent.convertToNodeSpaceAR(targetpos);
                        // cc.log("开始自动合成")
                        this_2.bInAutoCom = true;
                        this_2.item_drag.node.stopAllActions();
                        this_2.item_drag.node.runAction(cc.sequence(cc.moveTo(0.13, cc.v2(targetpos.x, targetpos.y)), cc.callFunc(function () {
                            _this.comani(_this.items[i]);
                            // cc.log("自动合成结束");
                            _this.bInAutoCom = false;
                        })));
                        return { value: void 0 };
                    }
                }
            };
            var this_2 = this, targetpos;
            for (var i = 0; i < this.items.length; ++i) {
                var state_1 = _loop_2(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
    };
    HallScene.prototype.docomp = function (e) {
        var _this = this;
        this.touchendtime = Utils_1.default.getServerTime();
        this.hidemergetips();
        this.GetGameObject("btn_delete").stopAllActions();
        this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(0.25), cc.fadeTo(0.25, 0)));
        this.GetGameObject("node_com").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            _this.bPauseAutoCom = false;
            _this.bInAutoCom = false;
            // cc.log("恢复自动合成")
        })));
        this.bChoosed = false;
        var pos = e ? e.getLocation() : cc.Vec2.ZERO;
        if (this.item_drag.node.active) {
            if (!this.item_drag.datacopy) {
                return;
            }
            //删除
            var pos1 = this.GetGameObject("btn_delete").position;
            pos1 = this.GetGameObject("btn_delete").parent.convertToWorldSpaceAR(pos1);
            if (pos.sub(cc.v2(pos1.x, pos1.y)).mag() < 100) {
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                // this.GetGameObject("btn_delete").scale = 0.5;
                var tmp = 0;
                for (var i = 0; i < this.items.length; ++i) {
                    if (this.items[i].datacopy)
                        tmp++;
                }
                if (tmp <= 2) {
                    MsgToast_1.default.show("植物数量过少不能删除");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }
                if (this.item_drag.datacopy.lv >= ChickData_1.default.user.GetMaxLv()) {
                    MsgToast_1.default.show("最高等级植物就不删除了吧！");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }
                ChickData_1.default.user.DropWuJiang(this.item_drag.datacopy.index);
                this.item_drag.linkItem.setItemData(null);
                this.item_drag.linkItem = null;
                // this.updateRecruitment();
                // if (GameScene.Instance().fps > 30)
                //     this.playSkAni("spine/ui/yinliangzengjia", "effect", this.GetGameObject("btn_delete"), cc.v2(0, 20), 1);
                // return
            }
            //合成 移动  交换
            pos = this.GetGameObject("node_com").convertToNodeSpaceAR(pos);
            var item = this.getItemByPos(pos);
            if (item == null || ChickData_1.default.user.slots[item.index] == 0 || item == this.item_drag.linkItem || (item && item.droptype != 0)) {
                //取消
                if (this.item_drag.linkItem)
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                this.item_drag.linkItem = null;
                this.item_drag.node.stopAllActions();
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                return;
            }
            if (!item.datacopy) {
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                //移动
                ChickData_1.default.user.CompMove(this.item_drag.linkItem.index, item.index);
                item.setItemData(this.item_drag.datacopy);
                this.item_drag.linkItem.setItemData(null);
                this.item_drag.linkItem = null;
                return;
            }
            if (item.datacopy.open == this.item_drag.datacopy.open &&
                item.datacopy.lv == this.item_drag.datacopy.lv && item.datacopy.index != this.item_drag.datacopy.index && item.droptype == 0 && item.datacopy.lv < 60) {
                this.comani(item);
            }
            else {
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                //交换
                ChickData_1.default.user.CompMove(this.item_drag.linkItem.index, item.index);
                var _tmp = JSON.parse(JSON.stringify(item.datacopy));
                item.setItemData(this.item_drag.datacopy);
                this.item_drag.linkItem.setItemData(_tmp);
            }
        }
        else {
            if (!e)
                return;
            this.item_drag.linkItem = null;
        }
    };
    HallScene.prototype.comani = function (item) {
        var b = ChickData_1.default.user.ComposePlant(item.index, this.item_drag.datacopy.index);
        this.GetGameObject("guild_1").active = false;
        if (ChickData_1.default.user.guideIndex == 1) {
            ChickData_1.default.user.guideIndex++;
            ChickData_1.default.save();
        }
        if (!b)
            return;
        var nextGun = ChickData_1.default.user.getPlantInfo(item.index);
        item.setItemData(nextGun);
        this.GetGameObject("item_drag").active = false;
        this.item_drag.datacopy = null;
        this.item_drag.linkItem = null;
        this.autocomindexs = [-1, -1];
        var targetpos = this.GetGameObject("node_com").convertToWorldSpaceAR(item.node.position);
        targetpos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(targetpos);
        this.playSkAni("spine:other/effect_hecheng", "effect", this.GetGameObject("item_drag").parent, targetpos.add(cc.v3(0, 20, 0)), 1);
    };
    HallScene.prototype.updateBuyButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lv, skpath, atlaspath, chick, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        lv = ChickData_1.default.user.GetMaxLv() - 3;
                        if (lv < 1)
                            lv = 1;
                        this.SetText("lbl_buy_lvl", 'LV.' + lv);
                        this.SetText("lbl_buy_cost", Utils_1.default.formatNumber(ChickData_1.default.user.BuyPrice(lv)));
                        skpath = "spine:flower" + lv + "_ske";
                        atlaspath = "spine:flower" + lv + "_tex";
                        chick = this.GetDragonAmature('chickbuy');
                        _a = chick;
                        return [4 /*yield*/, Utils_1.default.loadRes(skpath, dragonBones.DragonBonesAsset)];
                    case 1:
                        _a.dragonAsset = (_c.sent());
                        _b = chick;
                        return [4 /*yield*/, Utils_1.default.loadRes(atlaspath, dragonBones.DragonBonesAtlasAsset)];
                    case 2:
                        _b.dragonAtlasAsset = (_c.sent());
                        chick.armatureName = 'Armature';
                        chick.playAnimation('idleL', 0);
                        return [2 /*return*/];
                }
            });
        });
    };
    //0 coin 1 gem 2 ad 3普通掉落 4小精灵掉落
    HallScene.prototype.tryBuyPlant = function (lv, buytype) {
        var item = null;
        for (var i = 0; i < 12; ++i) {
            if (ChickData_1.default.user.slots[i] == 0)
                continue;
            if (!this.items[i].datacopy && this.autocomindexs[0] != i && this.autocomindexs[1] != i) {
                item = this.items[i];
                break;
            }
        }
        if (!lv) {
            lv = ChickData_1.default.user.GetMaxLv() - 3;
            if (lv < 1)
                lv = 1;
        }
        if (item) {
            if (buytype == 0) {
                var cost = ChickData_1.default.user.BuyPrice(lv);
                if (ChickData_1.default.user.BuyPrice(lv) > ChickData_1.default.user.coin) {
                    var type_1 = 0;
                    if (ChickData_1.default.user.today_getchick_times < ChickData_1.default.user.today_getchick_total) {
                        type_1 = 1;
                    }
                    else if (ChickData_1.default.user.today_getcoin_times < ChickData_1.default.user.today_getcoin_total) {
                        type_1 = 2;
                    }
                    if (type_1 > 0) {
                        Utils_1.default.createUI("prefab/CoinNotEnough").then(function (node) {
                            node.getComponent(CoinNotEnoughUI_1.default).setType(type_1);
                        });
                    }
                    else {
                        MsgToast_1.default.show("金币不足");
                    }
                    return;
                }
                ChickData_1.default.user.coin -= cost;
            }
            else if (buytype == 1) {
                var gem = Math.min(5, Number(Config_1.Config_chick[lv - 1][6]));
                if (gem > ChickData_1.default.user.gem) {
                    // MsgToast.show("钻石不足");
                    return;
                }
                ChickData_1.default.user.gem -= gem;
            }
            else if (buytype == 2) {
            }
            else if (buytype >= 3) {
                // console.log("飞机掉落")
            }
            AudioMgr_1.default.Instance().playSFX("flower_pot_land");
            this.docomp(null);
            item.setItemData(ChickData_1.default.user.BuyPlant(item.index, lv), buytype);
            this.updateBuyButton();
            return true;
        }
        else {
            if (buytype <= 2) {
                MsgToast_1.default.show("位置不够啦！");
                this.GetGameObject("btn_delete").stopAllActions();
                this.GetGameObject("btn_delete").opacity = 255;
                this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(0.25), cc.fadeTo(0.25, 0)));
            }
            return false;
        }
    };
    HallScene.prototype.mergetip = function () {
        this.touchendtime = Utils_1.default.getServerTime();
        if (this.bPauseAutoCom || this.bInAutoCom)
            return;
        if (!this.bInAutoCom) {
            for (var i = 0; i < this.items.length; ++i) {
                if (!this.items[i] || !this.items[i].datacopy)
                    continue;
                for (var j = i + 1; j < this.items.length; ++j) {
                    if (!this.items[j] || !this.items[j].datacopy)
                        continue;
                    if (this.bInAutoCom)
                        return;
                    if (this.items[i].datacopy.lv == this.items[j].datacopy.lv && this.items[i].droptype == 0 && this.items[j].droptype == 0 && this.items[i].datacopy.lv < 60) {
                        var index1 = this.items[i].index;
                        var index2 = this.items[j].index;
                        this.GetGameObject("guild_1").active = true;
                        this.GetGameObject("guild_1").zIndex = cc.macro.MAX_ZINDEX;
                        this.GetGameObject("guild_1").stopAllActions();
                        var p0 = this.GetGameObject("slots").children[index1].position;
                        var p1 = this.GetGameObject("slots").children[index2].position;
                        this.GetGameObject("guild_1").position = p0;
                        this.GetGameObject("guild_1").runAction(cc.sequence(cc.moveTo(1, cc.v2(p1.x, p1.y)), cc.moveTo(0.1, cc.v2(p0.x, p0.y))).repeatForever());
                        return;
                    }
                }
            }
        }
    };
    HallScene.prototype.onBtnClicked = function (event, customEventData) {
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playSFX("click");
        switch (btnName) {
            case "btn_setting":
                Utils_1.default.createUI("prefab/SettingUI");
                break;
            case "btn_sign":
                Utils_1.default.createUI("prefab/SignUI");
                break;
            case "btn_buy":
                this.tryBuyPlant(null, 0);
                this.GetGameObject("guild_0").active = false;
                if (ChickData_1.default.user.guideIndex == 0) {
                    ChickData_1.default.user.guideIndex++;
                    ChickData_1.default.save();
                }
                if (ChickData_1.default.user.guideIndex == 1) {
                    this.mergetip();
                }
                break;
            case "bt_fast_gen":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(CommonView_1.default).setType(CommonView_1.EADLAYER.DROP_PLANT);
                });
                break;
            case "btn_angry":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(CommonView_1.default).setType(CommonView_1.EADLAYER.DOUBLE_ATT);
                });
                break;
            case "btn_double_coin":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(CommonView_1.default).setType(CommonView_1.EADLAYER.DOUBLE_INCOME);
                });
                break;
            case "bt_auto_merge":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(CommonView_1.default).setType(CommonView_1.EADLAYER.AUTO_COM);
                });
                break;
            case "btn_shop":
                ShopView_1.default.show();
                break;
            case "btn_delete":
                if (this.GetGameObject("btn_delete").opacity == 255)
                    MsgToast_1.default.show("拖动到这里卖出");
                break;
            case "btn_inviate":
                // WxCenter.shareAppMessage();
                WxCenter_1.default.aldReport('InvitationClick', 'click');
                Utils_1.default.createUI("prefab/ShareLayer").then(function (node) {
                    node.getComponent(ShareView_1.default).setData();
                });
                break;
            case "btn_Recorder":
                if (this.bRecorder == false) {
                    cc.log("开始录屏");
                    this.bRecorder = true;
                    if (window["tt"]) {
                        var recorder = window["tt"].getGameRecorderManager();
                        recorder.start({
                            duration: 30
                        });
                    }
                }
                else {
                    cc.log("结束录屏");
                    this.bRecorder = false;
                    if (window["tt"]) {
                        var recorder = window["tt"].getGameRecorderManager();
                        recorder.stop();
                    }
                }
                break;
        }
    };
    var HallScene_1;
    HallScene._instance = null;
    __decorate([
        property(cc.Prefab)
    ], HallScene.prototype, "enemy_pre", void 0);
    __decorate([
        property(cc.Prefab)
    ], HallScene.prototype, "pre_soldier", void 0);
    HallScene = HallScene_1 = __decorate([
        ccclass
    ], HallScene);
    return HallScene;
}(BaseUI_1.default));
exports.default = HallScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxIYWxsU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1QyxrREFBNkM7QUFDN0MsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUN6Qyx3Q0FBbUM7QUFDbkMsbUNBQW1FO0FBQ25FLGtEQUFnSjtBQUNoSixnREFBNEM7QUFDNUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUN6QyxrREFBNkM7QUFDN0MsMERBQXFEO0FBQ3JELDhDQUF5QztBQUN6Qyw0Q0FBdUM7QUFDdkMsMkNBQXNDO0FBQ3RDLHlDQUFvQztBQUVwQyw0REFBdUQ7QUFHakQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUF5N0JDO1FBdjdCRyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBU25CLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFDeEIsZUFBUyxHQUFPLElBQUksQ0FBQztRQStFckIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQW1FZCxvQkFBYyxHQUFHLEtBQUssQ0FBQztRQStEeEIsVUFBSSxHQUFhLEVBQUUsQ0FBQztRQUU5QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLFdBQUssR0FBcUIsRUFBRSxDQUFDO1FBcUJyQyxtQkFBYSxHQUFZLEtBQUssQ0FBQyxDQUFDLFVBQVU7UUFDN0MsZ0JBQVUsR0FBWSxLQUFLLENBQUMsQ0FBSyxZQUFZO1FBeUsxQyxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xC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Q0FBQyxRQUFRO3dCQUFFLFNBQVM7b0JBQ3hELElBQUksT0FBSyxVQUFVO2lEQUFTO29CQUM1QixJQUFJLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUU7d0JBQ3RKLE9BQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDNUMsT0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUU1QyxPQUFLLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLE9BQUssU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQzNDLE9BQUssU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDbkQsT0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ2xDLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsT0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUMzRCxPQUFLLGNBQWMsQ0FBQyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFcEMsU0FBUyxHQUFHLE9BQUssYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDbEcsU0FBUyxHQUFHLE9BQUssYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFbkYsbUJBQW1CO3dCQUNuQixPQUFLLFVBQVUsR0FBRyxJQUFJLENBQUM7d0JBQ3ZCLE9BQUssU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDckMsT0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNuRyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDM0Isb0JBQW9COzRCQUNwQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOztxQkFFUDtpQkFDSjs7K0JBYlcsU0FBUztZQWxCekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFHLEVBQUUsQ0FBQztzQ0FBbEMsQ0FBQzs7O2FBZ0NUO1NBQ0o7SUFDTCxDQUFDO0lBSUQsMEJBQU0sR0FBTixVQUFPLENBQXNCO1FBQTdCLGlCQTBHQztRQXpHRyxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRTdGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzlFLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLG1CQUFtQjtRQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUMxQixPQUFPO2FBQ1Y7WUFDRCxJQUFJO1lBQ0osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDckQsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixnREFBZ0Q7Z0JBQ2hELElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztnQkFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUN4QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTt3QkFBRSxHQUFHLEVBQUUsQ0FBQztpQkFDckM7Z0JBRUQsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO29CQUNWLGtCQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNuQyxPQUFPO2lCQUNWO2dCQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUN6RCxrQkFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbkMsT0FBTztpQkFDVjtnQkFFRCxtQkFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUUvQiw0QkFBNEI7Z0JBQzVCLHFDQUFxQztnQkFDckMsK0dBQStHO2dCQUMvRyxTQUFTO2FBQ1o7WUFFRCxXQUFXO1lBQ1gsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0QsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU3QyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBRTFILElBQUk7Z0JBQ0osSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVE7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSTtnQkFDSixtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDL0IsT0FBTzthQUNWO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJO2dCQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBRTtnQkFDckosSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtpQkFDSTtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJO2dCQUNKLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVuRSxJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7YUFDSTtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU87WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLElBQWU7UUFDbEIsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdDLElBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFDakM7WUFDSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUcsQ0FBQztZQUM3QixtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPO1FBQ2YsSUFBSSxPQUFPLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RixTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBRUssbUNBQWUsR0FBckI7Ozs7Ozt3QkFFUSxFQUFFLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QyxJQUFHLEVBQUUsR0FBQyxDQUFDOzRCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRXpFLE1BQU0sR0FBRyxpQkFBZSxFQUFFLFNBQU0sQ0FBQzt3QkFDakMsU0FBUyxHQUFHLGlCQUFlLEVBQUUsU0FBTSxDQUFDO3dCQUNwQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUM5QyxLQUFBLEtBQUssQ0FBQTt3QkFBZSxxQkFBTSxlQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBQTs7d0JBQTVFLEdBQU0sV0FBVyxJQUFHLFNBQXdGLENBQUEsQ0FBQzt3QkFDN0csS0FBQSxLQUFLLENBQUE7d0JBQW9CLHFCQUFNLGVBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFBOzt3QkFBekYsR0FBTSxnQkFBZ0IsSUFBRyxTQUFxRyxDQUFBLENBQUM7d0JBQy9ILEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO3dCQUNoQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7S0FDbEM7SUFDRCxnQ0FBZ0M7SUFDekIsK0JBQVcsR0FBbEIsVUFBbUIsRUFBUyxFQUFDLE9BQWM7UUFDdkMsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDekIsSUFBSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBRSxTQUFTO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDckYsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNMLEVBQUUsR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBRyxFQUFFLEdBQUMsQ0FBQztnQkFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ25ELElBQUksTUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDYixJQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFDO3dCQUN6RSxNQUFJLEdBQUcsQ0FBQyxDQUFDO3FCQUNaO3lCQUNJLElBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUM7d0JBQzVFLE1BQUksR0FBRyxDQUFDLENBQUM7cUJBQ1o7b0JBQ0QsSUFBRyxNQUFJLEdBQUcsQ0FBQyxFQUFDO3dCQUNSLGVBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZOzRCQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBSSxDQUFDLENBQUM7d0JBQ3JELENBQUMsQ0FBQyxDQUFDO3FCQUNOO3lCQUNHO3dCQUNBLGtCQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUN6QjtvQkFDRCxPQUFPO2lCQUNWO2dCQUNELG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7YUFDL0I7aUJBQ0ksSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO2dCQUNuQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMscUJBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLEdBQUcsR0FBRyxtQkFBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQzFCLHlCQUF5QjtvQkFDekIsT0FBTztpQkFDVjtnQkFDRCxtQkFBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDO2FBQzdCO2lCQUNJLElBQUcsT0FBTyxJQUFJLENBQUMsRUFBQzthQUVwQjtpQkFDSSxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLHNCQUFzQjthQUN6QjtZQUVELGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFFOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQTtTQUNkO2FBQ0k7WUFDRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQ2Qsa0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNoRztZQUNELE9BQU8sS0FBSyxDQUFBO1NBQ2Y7SUFDTCxDQUFDO0lBRU8sNEJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRyxFQUFFLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7b0JBQUUsU0FBUztnQkFDeEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRyxFQUFFLENBQUMsRUFBRTtvQkFFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7d0JBQUUsU0FBUztvQkFDeEQsSUFBSSxJQUFJLENBQUMsVUFBVTt3QkFBRSxPQUFPO29CQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUN4SixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDakMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7d0JBRWhDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7d0JBQzNELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQy9DLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDL0QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUMvRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7d0JBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7d0JBQ3BJLE9BQU87cUJBQ1Y7aUJBQ0o7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVKLGdDQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsZUFBZTtRQUM1QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxRQUFRLE9BQU8sRUFBRTtZQUN0QixLQUFLLGFBQWE7Z0JBQ2pCLGVBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtnQkFDbEMsTUFBTTtZQUNQLEtBQUssVUFBVTtnQkFDZCxlQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFBO2dCQUMvQixNQUFNO1lBQ1AsS0FBSyxTQUFTO2dCQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzdDLElBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFDakM7b0JBQ0ksbUJBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzVCLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3BCO2dCQUNELElBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFDakM7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQjtnQkFDYixNQUFNO1lBQ1AsS0FBSyxhQUFhO2dCQUNqQixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBWTtvQkFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLHFCQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQzNELENBQUMsQ0FBQyxDQUFBO2dCQUNGLE1BQU07WUFDUCxLQUFLLFdBQVc7Z0JBQ2YsZUFBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVk7b0JBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUMzRCxDQUFDLENBQUMsQ0FBQTtnQkFDRixNQUFNO1lBQ1AsS0FBSyxpQkFBaUI7Z0JBQ3JCLGVBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZO29CQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDOUQsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsTUFBTTtZQUNQLEtBQUssZUFBZTtnQkFDbkIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVk7b0JBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUN6RCxDQUFDLENBQUMsQ0FBQTtnQkFDVSxNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNaLGtCQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2YsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxJQUFJLEdBQUc7b0JBQ2xELGtCQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN4QixNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLDhCQUE4QjtnQkFDOUIsa0JBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlDLGVBQUssQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZO29CQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssY0FBYztnQkFDZixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFO29CQUN6QixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDZCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzt3QkFDdkQsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFDWCxRQUFRLEVBQUUsRUFBRTt5QkFDZixDQUFDLENBQUM7cUJBQ047aUJBQ0o7cUJBQ0k7b0JBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ2QsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0JBQ3ZELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDbkI7aUJBQ0o7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQzs7SUFuN0JNLG1CQUFTLEdBQUcsSUFBSSxDQUFDO0lBRnhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ087SUE4ZDNCO1FBREYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFoZWIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXk3QjdCO0lBQUQsZ0JBQUM7Q0F6N0JELEFBeTdCQyxDQXo3QnNDLGdCQUFNLEdBeTdCNUM7a0JBejdCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgVXNlcl9sZXZlbCwgQ29uZmlnX2NoaWNrLCBDb25maWdfZ3JvdW5kIH0gZnJvbSBcIi4vQ29uZmlnXCI7XHJcbmltcG9ydCBDb21tb25WaWV3LCB7IE1BWF9ET1VCTEVfQVRUX1RJTUUsIE1BWF9ET1VCTEVfSU5DT01FX1RJTUUsIE1BWF9BVVRPX0NPTV9USU1FLCBNQVhfRFJPUF9QTEFOVF9USU1FLCBFQURMQVlFUiB9IGZyb20gXCIuL3ByZWZhYi9Db21tb25WaWV3XCI7XHJcbmltcG9ydCBTaGFyZUxheWVyIGZyb20gXCIuL3ByZWZhYi9TaGFyZVZpZXdcIjtcclxuaW1wb3J0IEVuZW15IGZyb20gXCIuL3ByZWZhYi9FbmVteVwiO1xyXG5pbXBvcnQgRmFpbFZpZXcgZnJvbSBcIi4vcHJlZmFiL0ZhaWxWaWV3XCI7XHJcbmltcG9ydCBSZWNvcmRWaWV3IGZyb20gXCIuL3ByZWZhYi9SZWNvcmRWaWV3XCI7XHJcbmltcG9ydCBPZmZsaW5lQXdhcmRVSSBmcm9tIFwiLi9wcmVmYWIvT2ZmbGluZUF3YXJkVUlcIjtcclxuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL3ByZWZhYi9TaG9wVmlld1wiO1xyXG5pbXBvcnQgV2luVmlldyBmcm9tIFwiLi9wcmVmYWIvV2luVmlld1wiO1xyXG5pbXBvcnQgR3JvdW5kSXRlbSBmcm9tIFwiLi9Hcm91bmRJdGVtXCI7XHJcbmltcG9ydCBDaGlja0l0ZW0gZnJvbSBcIi4vQ2hpY2tJdGVtXCI7XHJcbmltcG9ydCB7IFBsYW50SW5mbyB9IGZyb20gXCIuL1VzZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29pbk5vdEVub3VnaFVJIGZyb20gXCIuL3ByZWZhYi9Db2luTm90RW5vdWdoVUlcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbFNjZW5lIGV4dGVuZHMgQmFzZVVJIHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBlbmVteV9wcmU6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6SGFsbFNjZW5lXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIEhhbGxTY2VuZS5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFzdGRyb3B0aW1lID0gMDtcclxuICAgIHB1YmxpYyBlbmVteWxpc3Q6Y2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIHdhdmVfaW5mbzphbnkgPSBudWxsO1xyXG5cclxuICAgIGhpZGVtZXJnZXRpcHMoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpOy8vZnhfZ3JvdW5kX21lcmdlXHJcbiAgICAgICAgZm9yKHZhciBzbG90IG9mIHNsb3RzLmNoaWxkcmVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvdC5nZXRDaGlsZEJ5TmFtZShcImZ4X2dyb3VuZF9tZXJnZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd21lcmdldGlwcyhsdjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4cyA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaXRlbSBvZiB0aGlzLml0ZW1zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXRlbS5kYXRhY29weSAmJiBpdGVtLmRhdGFjb3B5Lmx2ID09IGx2ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCAmJiBpdGVtLmRhdGFjb3B5Lmx2PDYwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmRleHMucHVzaChpdGVtLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTsvL2Z4X2dyb3VuZF9tZXJnZVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aTxzbG90cy5jaGlsZHJlbi5sZW5ndGg7KytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvdHMuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJmeF9ncm91bmRfbWVyZ2VcIikuYWN0aXZlID0gaW5kZXhzLmluZGV4T2YoaSkgPj0wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlKGR0KVxyXG5cdHtcclxuICAgICAgICBpZihkdD4xKWR0PTE7XHJcblx0XHR0aGlzLlNldFRleHQoXCJsYmxfY29pblwiLFV0aWxzLmZvcm1hdE51bWJlcihDaGlja0RhdGEudXNlci5jb2luKStcIlwiKTtcclxuICAgICAgICBpZih0aGlzLnJlY29yZGVydGltZSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHMgPSBNYXRoLmZsb29yKChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSB0aGlzLnJlY29yZGVydGltZSkvMTAwMCk7XHJcbiAgICAgICAgICAgIGlmKHM+MCl0aGlzLlNldFRleHQoXCJsYmxfbHVwaW5nXCIscytcInNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2x1cGluZ1wiLFwiXCIpO1xyXG5cclxuICAgICAgICAvL3nmjpLluo9cclxuICAgICAgICB0aGlzLmVuZW15bGlzdC5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpPHRoaXMuZW5lbXlsaXN0Lmxlbmd0aDsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15bGlzdFtpXS56SW5kZXggPSBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGFzdGRyb3B0aW1lICs9IGR0O1xyXG4gICAgICAgIGlmKHRoaXMuX2xhc3Rkcm9wdGltZSA+IDI1ICogKENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKT8uMzoxKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5pmu6YCa6Iqx55uG5o6J6JC9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSkgcmV0dXJuXHJcbiAgICAgICAgICAgIGxldCBsdiA9IE1hdGgubWF4KDEsIENoaWNrRGF0YS51c2VyLkdldE1heEx2KCkgLSBVdGlscy5nZXRSYW5kb21JbnQoNiwgOSkpO1xyXG4gICAgICAgICAgICB0aGlzLnRyeUJ1eVBsYW50KGx2LCAzKVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0ZHJvcHRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/kuIDmrrXml7bpl7TkuI3mk43kvZzvvIzmj5DnpLrlj6/ku6XlkIjmiJBcclxuICAgICAgICBpZih0aGlzLnRvdWNoZW5kdGltZSAhPSAwICYmIFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMudG91Y2hlbmR0aW1lID4gNTAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVyZ2V0aXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuK3pl7TmmL7npLrlm77niYdcclxuICAgIHB1YmxpYyBhc3luYyBzaG93SW1hZ2UoaW1ncGF0aDpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGltZ3BhdGgsY2MuU3ByaXRlRnJhbWUpIGFzIGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUueSA9IDIwMDtcclxuICAgICAgICBub2RlLnNjYWxlID0gMS4yO1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyKSxjYy5zcGF3bihjYy5tb3ZlQnkoMC41LDAsMTAwKSxjYy5mYWRlVG8oMC41LDApKSxjYy5yZW1vdmVTZWxmKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYkZhaWwgPSBmYWxzZTtcclxuICAgIHJlbW92ZWVuZW15KG5vZGU6Y2MuTm9kZSxiRmFpbDpib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpc1N0b3AgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICBpZihiRmFpbCkgdGhpcy5iRmFpbCA9IHRydWU7XHJcbiAgICAgICAgZm9yKHZhciBpID0gdGhpcy5lbmVteWxpc3QubGVuZ3RoLTE7aT49MDstLWkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihub2RlID09IHRoaXMuZW5lbXlsaXN0W2ldKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15bGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY3JlYXRlY29tcGxldGUgJiYgdGhpcy5lbmVteWxpc3QubGVuZ3RoID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmJGYWlsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlPj0gdGhpcy53YXZlX2luZm9bMl0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIud2F2ZT0gMTtcclxuICAgICAgICAgICAgICAgICAgICBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteSA9IG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15KTtcclxuICAgICAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Mb3NlVUlcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChGYWlsVmlldykuc2V0SW5mbyhlbmVteS5nZXRCb3NzTW9uZXkoKSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLndhdmUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ltYWdlKFwidGV4dHVyZS9kZWZlYXRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci53YXZlKys7XHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlID4gdGhpcy53YXZlX2luZm9bMl0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb25leSA9IGVuZW15LmdldEJvc3NNb25leSgpO1xyXG5cdFx0XHRcdCAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjIpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1ZpY3RvcnlVSVwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5WaWV3KS5zZXRJbmZvKG1vbmV5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgICAgICAgICBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLndhdmUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmx2Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTmV3U2xvdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBDaGlja0RhdGEudXNlci5sdiArIFwiX1wiICsgQ2hpY2tEYXRhLnVzZXIud2F2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhdmVfaW5mbyA9IFVzZXJfbGV2ZWxba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBXeENlbnRlci5hbGRMZXZlbFJlcG9ydChDaGlja0RhdGEudXNlci5sdik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwid2luX3dhdmVcIilcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dJbWFnZShcInRleHR1cmUvc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTa0FuaShcInNwaW5lOm90aGVyL3NoZW5namljaGVuZ2dvbmdcIiwgXCJlZmZlY3RcIiwgdGhpcy5ub2RlLGNjLnYzKDAsMTUwLDApLCAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpc1N0b3ApIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGV3YXZlKGlzQ2hhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVjb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgY3JlYXRld2F2ZShpc0NoYW5nZTpib29sZWFuID0gZmFsc2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5iRmFpbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGtleSA9IENoaWNrRGF0YS51c2VyLmx2ICsgXCJfXCIgKyBDaGlja0RhdGEudXNlci53YXZlO1xyXG4gICAgICAgIHRoaXMud2F2ZV9pbmZvID0gVXNlcl9sZXZlbFtrZXldO1xyXG5cclxuICAgICAgICAvL+mAmuWFs+WQjuWwseS4gOebtOivu+acgOWQjuS4gOWFs1xyXG4gICAgICAgIGlmKCF0aGlzLndhdmVfaW5mbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSA2MCArIFwiX1wiICsgQ2hpY2tEYXRhLnVzZXIud2F2ZTtcclxuICAgICAgICAgICAgdGhpcy53YXZlX2luZm8gPSBVc2VyX2xldmVsW2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlID09IHRoaXMud2F2ZV9pbmZvWzJdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5QkdNKFwiYmdCb3NzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSguOCksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0Jvc3NDb21taW5nVUlcIilcclxuICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKENoaWNrRGF0YS51c2VyLndhdmUgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheUJHTShcIkJHTTFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WIm+W7uuaAqueJqVxyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgbGV0IG51bSA9IDA7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTx0aGlzLndhdmVfaW5mb1s0XTsrK2kpXHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLndhdmVfaW5mb1szXSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgbnVtID0gbGlzdC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTx0aGlzLndhdmVfaW5mb1s2XTsrK2kpXHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLndhdmVfaW5mb1s1XSlcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPGxpc3QubGVuZ3RoOysraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDIuMiAqIGkpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lbXlfcHJlKTtcclxuICAgICAgICAgICAgICAgIGUucGFyZW50ID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9vYmpcIik7XHJcbiAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudChFbmVteSkuc2V0SUQoaWQsaT49bnVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0LnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgICBpZihpID09IGxpc3QubGVuZ3RoLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVjb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/lhbPljaHkv6Hmga9cclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfY3VyX2x2XCIsQ2hpY2tEYXRhLnVzZXIubHYrXCJcIik7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3dhdmVzXCIsQ2hpY2tEYXRhLnVzZXIud2F2ZStcIi9cIisgdGhpcy53YXZlX2luZm9bMl0pO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9wcmVfbHZcIiwoQ2hpY2tEYXRhLnVzZXIubHYtMSkrXCJcIik7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX25leF9sdlwiLChDaGlja0RhdGEudXNlci5sdisxKStcIlwiKTtcclxuICAgICAgICBpZihpc0NoYW5nZSl7XHJcbiAgICAgICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdsYmxfd2F2ZXMnKSwxLDMsMC41LGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdGg6Y2MuVmVjM1tdID0gW107XHJcblxyXG5cdGl0ZW1fZHJhZzogQ2hpY2tJdGVtID0gbnVsbDtcclxuXHRhdXRvY29taW5kZXhzOiBudW1iZXJbXSA9IFstMSwgLTFdO1xyXG5cclxuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PENoaWNrSXRlbT4gPSBbXTtcclxuICAgIGluaXRDb21wb3NlSXRlbXMoKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBDaGlja0RhdGEudXNlci5Db21QbGFudHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG0gPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZihsaXN0W2ldLmx2PjYwKWxpc3RbaV0ubHY9NjBcclxuICAgICAgICAgICAgaWYobVtsaXN0W2ldLmluZGV4XSA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi6ZSZ6K+vLi4u5L+u5q2jXCIpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtW2xpc3RbaV0uaW5kZXhdID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2xpc3RbaV0uaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tsaXN0W2ldLmluZGV4XS5zZXRJdGVtRGF0YShsaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBiUGF1c2VBdXRvQ29tOiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm5pqC5YGc6Ieq5Yqo5ZCI5oiQXHJcblx0YkluQXV0b0NvbTogYm9vbGVhbiA9IGZhbHNlOyAgICAgLy/mmK/lkKbmraPlnKjoh6rliqjlkIjmiJDliqjnlLtcclxuXHRcclxuXHRnZXRJdGVtQnlQb3MocG9zOiBjYy5WZWMyKTogQ2hpY2tJdGVtIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0ubm9kZS5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKHBvcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2ldLm5vZGUuZ2V0Q29tcG9uZW50KENoaWNrSXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cdHNldGRyYWdpdGVtcG9zKHBvcykge1xyXG4gICAgICAgIHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucG9zaXRpb24gPSBwb3M7XHJcbiAgICB9XHJcblx0XHJcblx0YXN5bmMgc3RhcnQoKVxyXG5cdHtcclxuICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0hvbWVTaG93Jywnc2hvdycpO1xyXG4gICAgICAgIHRoaXMuaGlkZW1lcmdldGlwcygpO1xyXG4gICAgICAgIEhhbGxTY2VuZS5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIFd4Q2VudGVyLmluaXQoKTtcclxuXHRcdGxldCBzbG90cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpO1xyXG5cdFx0bGV0IGkgPSAwO1xyXG5cdFx0Zm9yKHZhciBzbG90IG9mIHNsb3RzLmNoaWxkcmVuKXtcclxuXHRcdFx0c2xvdC5nZXRDb21wb25lbnQoR3JvdW5kSXRlbSkuc2V0SW5kZXgoKytpKTtcclxuXHRcdH1cclxuICAgICAgICBhd2FpdCB0aGlzLmluaXRWaWV3KCk7XHJcblxyXG5cdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyeUF1dG9jb20oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlKSByZXR1cm5cclxuICAgICAgICAgICAgLy8g5bCP57K+54G15o6J6JC9XHJcbiAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGxldCBiPSB0aGlzLnRyeUJ1eVBsYW50KENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzWzBdLDQpO1xyXG4gICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuRHJvcEdpZnRQdHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC8vICDlub/lkYrotK3kubDmiJDlip/vvIzlm6DkuLrmsqHmnInnqbrkvY3mnKrmiJDlip/mt7vliqBcclxuICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5BZEJ1eU5vdERyb3AubGVuZ3RoPjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgbGV0IGI9IHRoaXMudHJ5QnV5UGxhbnQoQ2hpY2tEYXRhLnVzZXIuQWRCdXlOb3REcm9wWzBdLDIpO1xyXG4gICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuQWRCdXlOb3REcm9wLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblx0XHR9KSkucmVwZWF0Rm9yZXZlcigpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBNYXRoLm1heCgwLENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUpO1xyXG4gICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IE1hdGgubWF4KDAsQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lKTtcclxuICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBNYXRoLm1heCgwLENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSk7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID0gTWF0aC5tYXgoMCxDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnV5QnV0dG9uKCk7XHJcblxyXG4gICAgICAgICAvL+emu+e6v+WlluWKsSzmmoLml7blj6rnu5k25bCP5pe255qEXHJcbiAgICAgICAgIGxldCBzdGltZSA9IENoaWNrRGF0YS51c2VyLnNlcnZlclRpbWU7ICAgIFxyXG4gICAgICAgICB2YXIgdCA9IChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSBzdGltZSkgLyAxMDAwO1xyXG4gICAgICAgICBpZiAoc3RpbWUgIT0gMCAmJiB0ID4gMyo2MCkge1xyXG4gICAgICAgICAgICAgdmFyIHQgPSBNYXRoLm1pbig3MjAwICogMywgdCk7XHJcbiAgICAgICAgICAgICB2YXIgbW9uZXkgPSBDaGlja0RhdGEudXNlci5nZXRPZmZsaW5lRWFybmluZyh0LzYwKTtcclxuICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKCdwcmVmYWIvT2ZmbGluZUF3YXJkVUknLCBudWxsLCAodWkpID0+IHtcclxuICAgICAgICAgICAgICAgICB1aS5nZXRDb21wb25lbnQoT2ZmbGluZUF3YXJkVUkpLmRhdGEgPSBtb25leTtcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBjIG9mIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfcGF0aFwiKS5jaGlsZHJlbilcclxuICAgICAgICAgICAgdGhpcy5wYXRoLnB1c2goYy5wb3NpdGlvbilcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMyksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGV3YXZlKCk7XHJcbiAgICAgICAgfSkpKVxyXG5cclxuXHRcdC8v5pu05paw5ZCE56eN5pe26Ze0XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYm90dG9tXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSggY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXNYMkluID0gQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMDtcclxuICAgICAgICAgICAgbGV0IGlzSW5EYiA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IDA7XHJcbiAgICAgICAgICAgIGxldCBpc0RwSW4gPSBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwO1xyXG5cclxuICAgICAgICAgICAgLy/moKHpqozml7bpl7RcclxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9ET1VCTEVfQVRUX1RJTUUgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gTUFYX0RPVUJMRV9JTkNPTUVfVElNRSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gTUFYX0FVVE9fQ09NX1RJTUUgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9EUk9QX1BMQU5UX1RJTUUgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJyZWF0aEFuZ3J5KGlzWDJJbik7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImF0dF94Ml90aW1lXCIsIGlzWDJJbiA/IFV0aWxzLmdldFRpbWVTdHJCeVMoKENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkgLyAxMDAwKSA6ICfmiZPpuKHooYAnKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwicmV3YXJkeDJfdGltZVwiLCBpc0luRGIgPyBVdGlscy5nZXRUaW1lU3RyQnlTKChDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkgOiAn5Y+M5YCNJyk7XHJcbiAgICAgICAgICAgIGlmKCBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwiYXV0b190aW1lXCIsIFV0aWxzLmdldFRpbWVTdHJCeVMoKENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwiYXV0b190aW1lXCIsIFwi6Ieq5Yqo5ZCI5oiQXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9kcm9wX3BsYW50XCIsaXNEcEluID8gVXRpbHMuZ2V0VGltZVN0ckJ5UygoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSAvIDEwMDApIDogJ+aOieiQvScpO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9idF9hbmdyeVwiKS5hY3RpdmUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJhdHRfeDJfdGltZVwiKS5hY3RpdmU7XHJcbiAgICAgICAgICAgIC8vIGlmKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk8MClcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0U3ByaXRlKFwiYnRfZmFzdF9nZW5fcHJvY2Vzc19pdGVtXCIpLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0U3ByaXRlKFwiYnRfZmFzdF9nZW5fcHJvY2Vzc19pdGVtXCIpLmZpbGxSYW5nZSA9ICggKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLzEwMDAvNjApL01BWF9EUk9QX1BMQU5UX1RJTUU7Ly8gKG1heF9kcm9wX3BsYW50ICogNjAgLSAoRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkvMTAwMCkgL21heF9kcm9wX3BsYW50ICogNjBcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgLy8gVGFza0xheWVyLmNoZWNrVGFzaygpOy8v5Lu75Yqh5qOA5rWLXHJcbiAgICAgICAgICAgIC8vIGlmIChHYW1lTWFuYWdlci5JbnN0YW5jZSgpLmlzR3VpZGUgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fYXV0b1wiKS5hY3RpdmUgPSBEYXRhLnVzZXIuZ3VpZGVJbmRleCA+IDI7XHJcbiAgICAgICAgICAgIC8vIERhdGEudXNlci5jaGVja05ld1RvZHkoKTtcclxuXHRcdH0pLGNjLmRlbGF5VGltZSgxKSkucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzBcIikuYWN0aXZlID0gQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCA9PSAwO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwic3VwZXJtYXJrZXRcIikpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInN1cGVybWFya2V0XCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMikpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcblxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwicG93ZXJtYW5cIikpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInBvd2VybWFuXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMykpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5faW52aWF0ZVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC4zLCAyMCksIGNjLnJvdGF0ZVRvKDAuMywgLTEwKSwgY2Mucm90YXRlVG8oMC4yLCAwKSwgY2MuZGVsYXlUaW1lKDMpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImx1cGluX2dlbVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC4zLCAyMCksIGNjLnJvdGF0ZVRvKDAuMywgLTEwKSwgY2Mucm90YXRlVG8oMC4yLCAwKSwgY2MuZGVsYXlUaW1lKDMpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikpIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5hY3RpdmUgPSB3aW5kb3dbXCJ0dFwiXTtcclxuICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSB3aW5kb3dbXCJ0dFwiXS5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIHJlY29yZGVyLm9uU3RhcnQocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImx1cGluX2dlbVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9WQ1JcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjUsIC45KSwgY2Muc2NhbGVUbygwLjUsIDEpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInR05b2V5bGP5byA5aeLXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRlcnRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVjb3JkZXIub25TdG9wKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJSZWNvcmRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1JlY29yZGVyXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsdXBpbl9nZW1cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fVkNSXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0dOW9leWxj+e7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy52aWRlb1BhdGgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gdGhpcy5yZWNvcmRlcnRpbWUgPCAzMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTXNnSGludHMuc2hvdyhcIuW9leWxj+aXtumXtOi/h+efrVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZGVydGltZSA9IDBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRlcnRpbWUgPSAwXHJcbiAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9MdVBpblJlc3VsdFwiLCBudWxsLCAobm9kZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFJlY29yZFZpZXcpLnNldERhdGEocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgdGhpcy5vbkdhbWVTaG93LCB0aGlzKTtcclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgdGhpcy5vbkdhbWVIaWRlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBiUmVjb3JkZXIgPSBmYWxzZTtcclxuICAgIHJlY29yZGVydGltZSA9IDA7XHJcbiAgICBvbkdhbWVIaWRlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5nYW1lLm9mZihjYy5nYW1lLkVWRU5UX1NIT1csIHRoaXMub25HYW1lU2hvdyk7XHJcbiAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9ISURFLCB0aGlzLm9uR2FtZUhpZGUpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2FtZVNob3coKSB7XHJcbiAgICAgICAgaWYgKFV0aWxzLnNoYXJldGltZSAhPSAwICYmIFV0aWxzLnNoYXJlY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIFV0aWxzLnNoYXJldGltZSA+PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5YiG5Lqr5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuc2hhcmVjYWxsYmFjayhmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVXRpbHMuc2hhcmV0aW1lID0gMDtcclxuICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTmV3U2xvdCgpe1xyXG4gICAgICAgIGxldCBjdXJvcGVuID0gR3JvdW5kSXRlbS5nZXRDdXJPcGVuKCk7XHJcbiAgICAgICAgaWYoY3Vyb3BlbiA8IDApIHJldHVybjtcclxuICAgICAgICBsZXQgbHYgPSBDb25maWdfZ3JvdW5kW2N1cm9wZW5dLnByaWNlO1xyXG4gICAgICAgIGlmKGx2IDwgQ2hpY2tEYXRhLnVzZXIubHYpIHJldHVybjtcclxuICAgICAgICBDaGlja0RhdGEudXNlci5zbG90c1tjdXJvcGVuXSA9IDE7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTtcclxuICAgICAgICBsZXQgc2xvdCA9IHNsb3RzLmNoaWxkcmVuW2N1cm9wZW5dO1xyXG4gICAgICAgIGlmKHNsb3Qpe1xyXG4gICAgICAgICAgICBzbG90LmdldENvbXBvbmVudChHcm91bmRJdGVtKS5zZXRJbmRleChjdXJvcGVuKTtcclxuICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIuaIkOWKn+ino+mUgeaWsOS9jee9rlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0luQW5ncnkgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBicmVhdGhBbmdyeShpc2Jvb2w6Ym9vbGVhbil7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9hbmdyeScpXHJcbiAgICAgICAgaWYoIW5vZGUpIHJldHVybjtcclxuICAgICAgICBpZihpc2Jvb2wpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5pc0luQW5ncnkpe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZVkgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNJbkFuZ3J5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pc0luQW5ncnkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzSW5BbmdyeSA9IHRydWU7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEwKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICBVdGlscy5wbGF5QnJlYXRoKG5vZGUpLnNldFRhZygyKTtcclxuICAgICAgICB9KSkucmVwZWF0KDEpKS5zZXRUYWcoMSlcclxuICAgIH1cclxuXHJcblx0QHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZV9zb2xkaWVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgYXN5bmMgaW5pdFZpZXcoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIHZhciBub2RlX2NvbSA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7ICsraSkge1xyXG5cdFx0XHR2YXIgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlX3NvbGRpZXIpO1xyXG5cdFx0XHRub2RlLnBhcmVudCA9IG5vZGVfY29tO1xyXG5cdFx0XHRub2RlLnBvc2l0aW9uID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baV0ucG9zaXRpb247Ly8gY2MudjIoeCwgeSk7XHJcblx0XHRcdG5vZGUubmFtZSA9IFwiaXRtZVwiICsgaW5kZXg7XHJcblx0XHRcdHZhciBwbGFudDogQ2hpY2tJdGVtID0gbm9kZS5nZXRDb21wb25lbnQoQ2hpY2tJdGVtKTtcclxuXHRcdFx0cGxhbnQuaW5kZXggPSBpbmRleDtcclxuXHRcdFx0dGhpcy5pdGVtcy5wdXNoKHBsYW50KTtcclxuXHRcdFx0KytpbmRleFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5vZGVfZHJhZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlX3NvbGRpZXIpO1xyXG4gICAgICAgIG5vZGVfZHJhZy5wYXJlbnQgPSBub2RlX2NvbS5wYXJlbnQ7XHJcbiAgICAgICAgbm9kZV9kcmFnLm5hbWUgPSBcIml0ZW1fZHJhZ1wiO1xyXG4gICAgICAgIG5vZGVfZHJhZy54ID0gLTEwMDA7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbV9kcmFnID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLmdldENvbXBvbmVudChDaGlja0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcuYkRyYWcgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRDb21wb3NlSXRlbXMoKTtcclxuXHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYlBhdXNlQXV0b0NvbSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaaguWBnOiHquWKqOWQiOaIkFwiKVxyXG5cclxuICAgICAgICAgICAgLy/lpoLmnpzlnKjoh6rliqjlkIjmiJDkuK3vvIzlj5bmtojlvZPliY3lkIjmiJBcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlICYmIHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWPlua2iOW9k+WJjeWQiOaIkFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBwb3MgPSBub2RlX2NvbS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5UG9zKHBvcyk7XHJcblxyXG4gICAgICAgICAgICBpZihpdGVtICYmIGl0ZW0uZHJvcHR5cGUgIT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kcm9wdHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZUl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5kYXRhY29weSAmJiBpdGVtLmRyb3B0eXBlID09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoUG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iQ2hvb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldGRyYWdpdGVtcG9zKGl0ZW0ubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5pbmRleCA9IGl0ZW0uaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5zZXRJdGVtRGF0YShpdGVtLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gaXRlbTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dtZXJnZXRpcHMoaXRlbS5kYXRhY29weS5sdilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBwb3MgPSBub2RlX2NvbS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iQ2hvb3NlZCAmJiBwb3Muc3ViKHRoaXMudG91Y2hQb3MpLm1hZygpID4gMTUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLm9wYWNpdHkgPSAyNTU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldGRyYWdpdGVtcG9zKHBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgcG9zMSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MxKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChlLmdldExvY2F0aW9uKCkuc3ViKGNjLnYyKHBvczEueCxwb3MxLnkpKS5tYWcoKSA8IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuZG9jb21wLCB0aGlzKTtcclxuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuZG9jb21wLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblx0YkNob29zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRvdWNoUG9zOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cdFxyXG4gICAgdHJ5QXV0b2NvbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5iUGF1c2VBdXRvQ29tIHx8IHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPCBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lICYmICF0aGlzLmJJbkF1dG9Db20pIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q29tcG9zZUl0ZW1zKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoIDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaV0gfHwgIXRoaXMuaXRlbXNbaV0uZGF0YWNvcHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2opIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tqXSB8fCAhdGhpcy5pdGVtc1tqXS5kYXRhY29weSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2ID09IHRoaXMuaXRlbXNbal0uZGF0YWNvcHkubHYgJiYgdGhpcy5pdGVtc1tpXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbal0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2PDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IHRoaXMuaXRlbXNbaV0uaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IHRoaXMuaXRlbXNbal0uaW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IHRoaXMuaXRlbXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmluZGV4ID0gdGhpcy5pdGVtc1tqXS5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuc2V0SXRlbURhdGEodGhpcy5pdGVtc1tqXS5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tqXS5zZXRJdGVtRGF0YShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5wb3NpdGlvbiA9IHRoaXMuaXRlbXNbal0ubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRkcmFnaXRlbXBvcyh0aGlzLml0ZW1zW2pdLm5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLml0ZW1zW2ldLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldHBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLlvIDlp4voh6rliqjlkIjmiJBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iSW5BdXRvQ29tID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xMywgY2MudjIodGFyZ2V0cG9zLngsdGFyZ2V0cG9zLnkpKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21hbmkodGhpcy5pdGVtc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLoh6rliqjlkIjmiJDnu5PmnZ9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJJbkF1dG9Db20gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHByaXZhdGUgdG91Y2hlbmR0aW1lID0gMDtcclxuICAgIGRvY29tcChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaGVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlbWVyZ2V0aXBzKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjI1KSxjYy5mYWRlVG8oMC4yNSwwKSkpXHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5iUGF1c2VBdXRvQ29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYkluQXV0b0NvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmgaLlpI3oh6rliqjlkIjmiJBcIilcclxuICAgICAgICB9KSkpXHJcbiAgICAgICAgdGhpcy5iQ2hvb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBwb3MgPSBlID8gZS5nZXRMb2NhdGlvbigpIDogY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1fZHJhZy5kYXRhY29weSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5Yig6ZmkXHJcbiAgICAgICAgICAgIHZhciBwb3MxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgcG9zMSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MxKTtcclxuICAgICAgICAgICAgaWYgKHBvcy5zdWIoY2MudjIocG9zMS54LHBvczEueSkpLm1hZygpIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkpIHRtcCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0bXAgPD0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLmpI3nianmlbDph4/ov4flsJHkuI3og73liKDpmaRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkubHYgPj0gQ2hpY2tEYXRhLnVzZXIuR2V0TWF4THYoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLmnIDpq5jnrYnnuqfmpI3nianlsLHkuI3liKDpmaTkuoblkKfvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5Ecm9wV3VKaWFuZyh0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YShudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVJlY3J1aXRtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2FtZVNjZW5lLkluc3RhbmNlKCkuZnBzID4gMzApXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZS91aS95aW5saWFuZ3plbmdqaWFcIiwgXCJlZmZlY3RcIiwgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKSwgY2MudjIoMCwgMjApLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WQiOaIkCDnp7vliqggIOS6pOaNolxyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbTogQ2hpY2tJdGVtID0gdGhpcy5nZXRJdGVtQnlQb3MocG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgQ2hpY2tEYXRhLnVzZXIuc2xvdHNbaXRlbS5pbmRleF0gPT0gMCB8fCBpdGVtID09IHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtIHx8IChpdGVtICYmIGl0ZW0uZHJvcHR5cGUgIT0gMCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pdGVtX2RyYWcubGlua0l0ZW0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLmRhdGFjb3B5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIC8v56e75YqoXHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5Db21wTW92ZSh0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5pbmRleCwgaXRlbS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5kYXRhY29weS5vcGVuID09IHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5Lm9wZW4gJiZcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGF0YWNvcHkubHYgPT0gdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkubHYgJiYgaXRlbS5kYXRhY29weS5pbmRleCAhPSB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCAmJiBpdGVtLmRyb3B0eXBlID09IDAgJiYgaXRlbS5kYXRhY29weS5sdjw2MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21hbmkoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIC8v5Lqk5o2iXHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5Db21wTW92ZSh0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5pbmRleCwgaXRlbS5pbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIF90bXA6IFBsYW50SW5mbyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbS5kYXRhY29weSkpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YShfdG1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0XHJcbiAgICBjb21hbmkoaXRlbTogQ2hpY2tJdGVtKSB7XHJcbiAgICAgICAgbGV0IGIgPSBDaGlja0RhdGEudXNlci5Db21wb3NlUGxhbnQoaXRlbS5pbmRleCwgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkuaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCArKztcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFiKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5leHRHdW4gPSBDaGlja0RhdGEudXNlci5nZXRQbGFudEluZm8oaXRlbS5pbmRleCk7XHJcbiAgICAgICAgaXRlbS5zZXRJdGVtRGF0YShuZXh0R3VuKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzID0gWy0xLCAtMV07XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXRwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaXRlbS5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICB0YXJnZXRwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldHBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVNrQW5pKFwic3BpbmU6b3RoZXIvZWZmZWN0X2hlY2hlbmdcIiwgXCJlZmZlY3RcIiwgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBhcmVudCwgdGFyZ2V0cG9zLmFkZChjYy52MygwLDIwLDApKSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQnV5QnV0dG9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5HZXRNYXhMdigpIC0gMztcclxuICAgICAgICBpZihsdjwxKWx2ID0gMTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfYnV5X2x2bFwiLCdMVi4nICsgbHYpO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9idXlfY29zdFwiLFV0aWxzLmZvcm1hdE51bWJlcihDaGlja0RhdGEudXNlci5CdXlQcmljZShsdikpKTtcclxuXHJcbiAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTpmbG93ZXIke2x2fV9za2VgO1xyXG4gICAgICAgIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtsdn1fdGV4YDtcclxuICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrYnV5Jyk7XHJcbiAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgIGNoaWNrLmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcclxuICAgICAgICBjaGljay5hcm1hdHVyZU5hbWUgPSAnQXJtYXR1cmUnO1xyXG4gICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgIH1cclxuICAgIC8vMCBjb2luIDEgZ2VtIDIgYWQgM+aZrumAmuaOieiQvSA05bCP57K+54G15o6J6JC9XHJcbiAgICBwdWJsaWMgdHJ5QnV5UGxhbnQobHY6bnVtYmVyLGJ1eXR5cGU6bnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGl0ZW06IENoaWNrSXRlbSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zbG90c1tpXSA9PSAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2ldLmRhdGFjb3B5ICYmIHRoaXMuYXV0b2NvbWluZGV4c1swXSAhPSBpICYmIHRoaXMuYXV0b2NvbWluZGV4c1sxXSAhPSBpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbHYpIHtcclxuICAgICAgICAgICAgbHYgPSBDaGlja0RhdGEudXNlci5HZXRNYXhMdigpIC0gMztcclxuICAgICAgICAgICAgaWYobHY8MSlsdiA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoYnV5dHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29zdCA9IENoaWNrRGF0YS51c2VyLkJ1eVByaWNlKGx2KTtcclxuICAgICAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5CdXlQcmljZShsdikgPiBDaGlja0RhdGEudXNlci5jb2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzIDwgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdG90YWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihDaGlja0RhdGEudXNlci50b2RheV9nZXRjb2luX3RpbWVzIDwgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90b3RhbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0NvaW5Ob3RFbm91Z2hcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoQ29pbk5vdEVub3VnaFVJKS5zZXRUeXBlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIumHkeW4geS4jei2s1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuY29pbiAtPSBjb3N0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ1eXR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdlbSA9IE1hdGgubWluKDUsIE51bWJlcihDb25maWdfY2hpY2tbbHYgLSAxXVs2XSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdlbSA+IENoaWNrRGF0YS51c2VyLmdlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1zZ1RvYXN0LnNob3coXCLpkrvnn7PkuI3otrNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ2VtIC09IGdlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGJ1eXR5cGUgPT0gMil7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ1eXR5cGUgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLpo57mnLrmjonokL1cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiZmxvd2VyX3BvdF9sYW5kXCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRvY29tcChudWxsKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRJdGVtRGF0YShDaGlja0RhdGEudXNlci5CdXlQbGFudChpdGVtLmluZGV4LCBsdikgYXMgUGxhbnRJbmZvLGJ1eXR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1eUJ1dHRvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGJ1eXR5cGUgPD0gMikge1xyXG4gICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIuS9jee9ruS4jeWkn+WVpu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjI1KSxjYy5mYWRlVG8oMC4yNSwwKSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVyZ2V0aXAoKXtcclxuICAgICAgICB0aGlzLnRvdWNoZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICBpZiAodGhpcy5iUGF1c2VBdXRvQ29tIHx8IHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5iSW5BdXRvQ29tKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXSB8fCAhdGhpcy5pdGVtc1tpXS5kYXRhY29weSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLml0ZW1zLmxlbmd0aCA7ICsraikge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tqXSB8fCAhdGhpcy5pdGVtc1tqXS5kYXRhY29weSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2ID09IHRoaXMuaXRlbXNbal0uZGF0YWNvcHkubHYgJiYgdGhpcy5pdGVtc1tpXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbal0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2IDwgNjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4MSA9IHRoaXMuaXRlbXNbaV0uaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleDIgPSB0aGlzLml0ZW1zW2pdLmluZGV4XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcDAgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKS5jaGlsZHJlbltpbmRleDFdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcDEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKS5jaGlsZHJlbltpbmRleDJdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnBvc2l0aW9uID0gcDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygxLGNjLnYyKHAxLngscDEueSkpLGNjLm1vdmVUbygwLjEsY2MudjIocDAueCxwMC55KSkpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdG9uQnRuQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcblx0XHRcdGNhc2UgXCJidG5fc2V0dGluZ1wiOlxyXG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1NldHRpbmdVSVwiKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRuX3NpZ25cIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9TaWduVUlcIilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImJ0bl9idXlcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5QnV5UGxhbnQobnVsbCwwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzBcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5ndWlkZUluZGV4ID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5ndWlkZUluZGV4ID09IDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXJnZXRpcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRfZmFzdF9nZW5cIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuXHRcdFx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KENvbW1vblZpZXcpLnNldFR5cGUoRUFETEFZRVIuRFJPUF9QTEFOVClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRuX2FuZ3J5XCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChDb21tb25WaWV3KS5zZXRUeXBlKEVBRExBWUVSLkRPVUJMRV9BVFQpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImJ0bl9kb3VibGVfY29pblwiOlxyXG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0FkTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG5cdFx0XHRcdFx0bm9kZS5nZXRDb21wb25lbnQoQ29tbW9uVmlldykuc2V0VHlwZShFQURMQVlFUi5ET1VCTEVfSU5DT01FKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidF9hdXRvX21lcmdlXCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChDb21tb25WaWV3KS5zZXRUeXBlKEVBRExBWUVSLkFVVE9fQ09NKVxyXG5cdFx0XHRcdH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9zaG9wXCI6XHJcbiAgICAgICAgICAgICAgIFNob3BWaWV3LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2RlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID09IDI1NSlcclxuICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLmi5bliqjliLDov5nph4zljZblh7pcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2ludmlhdGVcIjpcclxuICAgICAgICAgICAgICAgIC8vIFd4Q2VudGVyLnNoYXJlQXBwTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdJbnZpdGF0aW9uQ2xpY2snLCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2hhcmVMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoU2hhcmVMYXllcikuc2V0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX1JlY29yZGVyXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iUmVjb3JkZXIgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLlvIDlp4vlvZXlsY9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iUmVjb3JkZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRlciA9IHdpbmRvd1tcInR0XCJdLmdldEdhbWVSZWNvcmRlck1hbmFnZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXIuc3RhcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIue7k+adn+W9leWxj1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYlJlY29yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZGVyID0gd2luZG93W1widHRcIl0uZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRlci5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBiRmlyc3RTdWJDb250ZXggPSB0cnVlO1xyXG59XHJcbiJdfQ==