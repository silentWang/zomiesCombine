
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
        _this.saveTime = 0;
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
    HallScene.prototype.hidComposeTips = function () {
        var slots = this.GetGameObject("slots"); //fx_ground_merge
        for (var _i = 0, _a = slots.children; _i < _a.length; _i++) {
            var slot = _a[_i];
            slot.getChildByName("fx_ground_merge").active = false;
        }
    };
    HallScene.prototype.showComposetips = function (lv) {
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
        // if(this.recordertime != 0)
        // {
        //     let s = Math.floor((Utils.getServerTime() - this.recordertime)/1000);
        //     if(s>0)this.SetText("lbl_luping",s+"s");
        // }
        // else{
        //     this.SetText("lbl_luping","");
        // }
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
            var lv = Math.max(1, ChickData_1.default.user.getLvlMax() - Utils_1.default.getRandomInt(6, 9));
            this.buyChick(lv, 3);
            this._lastdroptime = 0;
        }
        //一段时间不操作，提示可以合成
        if (this.touchendtime != 0 && Utils_1.default.getServerTime() - this.touchendtime > 5000) {
            this.composeTip();
        }
        this.saveTime++;
        if (this.saveTime >= 900) {
            this.saveTime = 0;
            ChickData_1.default.save();
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
    HallScene.prototype.enemyDie = function (node, bFail) {
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
                    this.openNewGround();
                    ChickData_1.default.save(true);
                    this.saveTime = 0;
                    var key = ChickData_1.default.user.lv + "_" + ChickData_1.default.user.wave;
                    this.wave_info = Config_1.User_level[key];
                    WxCenter_1.default.aldLevelReport(ChickData_1.default.user.lv);
                }
                else {
                    AudioMgr_1.default.Instance().playMX("win_wave");
                    // this.showImage("texture/success");
                    this.playSkeAni("spine:other/shengjichenggong", "effect", this.node, cc.v3(0, 150, 0), 2);
                }
            }
            if (isStop)
                return;
            this.createEnemys(isChange);
        }
    };
    HallScene.prototype.createEnemys = function (isChange) {
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
            AudioMgr_1.default.Instance().playMusic("bgBoss");
            this.node.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(function () {
                Utils_1.default.createUI("prefab/BossCommingUI");
            })));
        }
        else if (ChickData_1.default.user.wave == 1) {
            AudioMgr_1.default.Instance().playMusic("BGM1");
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
    HallScene.prototype.initComposeChicks = function () {
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
    HallScene.prototype.setDragPos = function (pos) {
        pos = this.GetGameObject("node_com").convertToWorldSpaceAR(pos);
        pos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(pos);
        this.GetGameObject("item_drag").position = pos;
    };
    HallScene.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var slots, i, _i, _a, slot, stime, t, t, money, _b, _c, c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        WxCenter_1.default.aldReport('HomeShow', 'show');
                        this.hidComposeTips();
                        HallScene_1._instance = this;
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
                            _this.startAutoCompose();
                            if (_this.item_drag.node.active)
                                return;
                            // 小精灵掉落
                            if (ChickData_1.default.user.DropGiftPts.length > 0) {
                                var b = _this.buyChick(ChickData_1.default.user.DropGiftPts[0], 4);
                                if (b)
                                    ChickData_1.default.user.DropGiftPts.shift();
                            }
                            //  广告购买成功，因为没有空位未成功添加
                            if (ChickData_1.default.user.AdBuyNotDrop.length > 0) {
                                var b = _this.buyChick(ChickData_1.default.user.AdBuyNotDrop[0], 2);
                                if (b)
                                    ChickData_1.default.user.AdBuyNotDrop.shift();
                            }
                        })).repeatForever());
                        ChickData_1.default.user.auto_com_time = Math.max(0, ChickData_1.default.user.auto_com_time);
                        ChickData_1.default.user.double_income_time = Math.max(0, ChickData_1.default.user.double_income_time);
                        ChickData_1.default.user.drop_plant_time = Math.max(0, ChickData_1.default.user.drop_plant_time);
                        ChickData_1.default.user.double_att_time = Math.max(0, ChickData_1.default.user.double_att_time);
                        this.GetGameObject('btnFreeAd').active = !ChickData_1.default.isFreeAd;
                        this.updateBuyButton();
                        stime = ChickData_1.default.user.serverTime;
                        t = (Utils_1.default.getServerTime() - stime) / 1000;
                        if (stime != 0 && t > 3 * 60) {
                            t = Math.min(7200 * 3, t);
                            money = ChickData_1.default.user.getOfflineReward(t / 60);
                            Utils_1.default.createUI('prefab/OfflineAwardUI', null, function (ui) {
                                ui.getComponent(OfflineAwardUI_1.default).data = money;
                            });
                        }
                        for (_b = 0, _c = this.GetGameObject("node_path").children; _b < _c.length; _b++) {
                            c = _c[_b];
                            this.path.push(c.position);
                        }
                        this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
                            _this.createEnemys();
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
                            _this.SetText("att_x2_time", isX2In ? Utils_1.default.getTimeStrByS((ChickData_1.default.user.double_att_time - Utils_1.default.getServerTime()) / 1000) : '打鷄血');
                            _this.SetText("rewardx2_time", isInDb ? Utils_1.default.getTimeStrByS((ChickData_1.default.user.double_income_time - Utils_1.default.getServerTime()) / 1000) : '雙倍');
                            if (ChickData_1.default.user.auto_com_time - Utils_1.default.getServerTime() > 0) {
                                _this.SetText("auto_time", Utils_1.default.getTimeStrByS((ChickData_1.default.user.auto_com_time - Utils_1.default.getServerTime()) / 1000));
                            }
                            else {
                                _this.SetText("auto_time", "自動合成");
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
                        // if (this.GetGameObject("btn_Recorder")) this.GetGameObject("btn_Recorder").active = window["tt"];
                        // if (window["tt"]) {
                        //     const recorder = window["tt"].getGameRecorderManager();
                        //     recorder.onStart(res => {
                        //         this.GetGameObject("lupin_gem").active = false;
                        //         this.GetGameObject("btn_VCR").active = false;
                        //         this.GetGameObject("btn_end").active = true;
                        //         this.GetGameObject("btn_Recorder").stopAllActions();
                        //         this.GetGameObject("btn_Recorder").runAction(cc.sequence(cc.scaleTo(0.5, .9), cc.scaleTo(0.5, 1)).repeatForever());
                        //         //console.log("tt录屏开始");
                        //         this.recordertime = Utils.getServerTime();
                        //     });
                        //     recorder.onStop(res => {
                        //         this.bRecorder = false;
                        //         this.GetGameObject("btn_Recorder").stopAllActions();
                        //         this.GetGameObject("lupin_gem").active = true;
                        //         this.GetGameObject("btn_Recorder").scale = 1;
                        //         this.GetGameObject("btn_VCR").active = true;
                        //         this.GetGameObject("btn_end").active = false;
                        //         // console.log("tt录屏结束");
                        //         // console.log(res.videoPath);
                        //         if (Utils.getServerTime() - this.recordertime < 3000) {
                        //             // MsgHints.show("录屏时间过短");
                        //             this.recordertime = 0
                        //             return;
                        //         }
                        //         this.recordertime = 0
                        //         Utils.createUI("prefab/LuPinResult", null, (node: cc.Node) => {
                        //             node.getComponent(RecordView).setData(res);
                        //         })
                        //     });
                        // }
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
                MsgToast_1.default.show("分享失敗");
                Utils_1.default.sharecallback(false);
            }
        }
        Utils_1.default.sharetime = 0;
        Utils_1.default.sharecallback = null;
    };
    HallScene.prototype.openNewGround = function () {
        var curopen = GroundItem_1.default.getNeedOpen();
        if (curopen < 0)
            return;
        var lv = Config_1.Config_ground[curopen].price;
        if (lv < ChickData_1.default.user.lv)
            return;
        ChickData_1.default.user.slots[curopen] = 1;
        ChickData_1.default.save();
        this.saveTime = 0;
        var slots = this.GetGameObject("slots");
        var slot = slots.children[curopen];
        if (slot) {
            slot.getComponent(GroundItem_1.default).setIndex(curopen);
            MsgToast_1.default.show("成功解鎖新位置");
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
                this.initComposeChicks();
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
                        _this.setDragPos(item.node.position);
                        _this.item_drag.index = item.index;
                        _this.item_drag.setItemData(item.datacopy);
                        _this.item_drag.linkItem = item;
                        _this.showComposetips(item.datacopy.lv);
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
                        _this.setDragPos(pos);
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
                node_com.on(cc.Node.EventType.TOUCH_END, this.composeHandle, this);
                node_com.on(cc.Node.EventType.TOUCH_CANCEL, this.composeHandle, this);
                return [2 /*return*/];
            });
        });
    };
    HallScene.prototype.startAutoCompose = function () {
        var _this = this;
        if (this.bPauseAutoCom || this.bInAutoCom)
            return;
        if (Utils_1.default.getServerTime() < ChickData_1.default.user.auto_com_time && !this.bInAutoCom) {
            this.initComposeChicks();
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
                        this_2.setDragPos(this_2.items[j].node);
                        targetpos = this_2.GetGameObject("node_com").convertToWorldSpaceAR(this_2.items[i].node.position);
                        targetpos = this_2.GetGameObject("item_drag").parent.convertToNodeSpaceAR(targetpos);
                        // cc.log("开始自动合成")
                        this_2.bInAutoCom = true;
                        this_2.item_drag.node.stopAllActions();
                        this_2.item_drag.node.runAction(cc.sequence(cc.moveTo(0.13, cc.v2(targetpos.x, targetpos.y)), cc.callFunc(function () {
                            _this.showCompEff(_this.items[i]);
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
    HallScene.prototype.composeHandle = function (e) {
        var _this = this;
        this.touchendtime = Utils_1.default.getServerTime();
        this.hidComposeTips();
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
                if (tmp <= 0) {
                    MsgToast_1.default.show("小鷄數量過少不能刪除");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }
                if (this.item_drag.datacopy.lv >= ChickData_1.default.user.getLvlMax()) {
                    MsgToast_1.default.show("最高等級的小鷄就不刪除了吧");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }
                ChickData_1.default.user.updateSellChickCoin(this.item_drag.datacopy.index);
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
                ChickData_1.default.user.moveEff(this.item_drag.linkItem.index, item.index);
                item.setItemData(this.item_drag.datacopy);
                this.item_drag.linkItem.setItemData(null);
                this.item_drag.linkItem = null;
                return;
            }
            if (item.datacopy.open == this.item_drag.datacopy.open &&
                item.datacopy.lv == this.item_drag.datacopy.lv && item.datacopy.index != this.item_drag.datacopy.index && item.droptype == 0 && item.datacopy.lv < 60) {
                this.showCompEff(item);
            }
            else {
                this.item_drag.node.active = false;
                this.autocomindexs[0] = -1;
                this.autocomindexs[1] = -1;
                //交换
                ChickData_1.default.user.moveEff(this.item_drag.linkItem.index, item.index);
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
    HallScene.prototype.showCompEff = function (item) {
        var b = ChickData_1.default.user.composeChicks(item.index, this.item_drag.datacopy.index);
        this.GetGameObject("guild_1").active = false;
        if (ChickData_1.default.user.guideIndex == 1) {
            ChickData_1.default.user.guideIndex++;
            ChickData_1.default.save();
            this.saveTime = 0;
        }
        if (!b)
            return;
        var nextGun = ChickData_1.default.user.getChickInfo(item.index);
        item.setItemData(nextGun);
        this.GetGameObject("item_drag").active = false;
        this.item_drag.datacopy = null;
        this.item_drag.linkItem = null;
        this.autocomindexs = [-1, -1];
        var targetpos = this.GetGameObject("node_com").convertToWorldSpaceAR(item.node.position);
        targetpos = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(targetpos);
        this.playSkeAni("spine:other/effect_hecheng", "effect", this.GetGameObject("item_drag").parent, targetpos.add(cc.v3(0, 20, 0)), 1);
    };
    HallScene.prototype.updateBuyButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lv, skpath, atlaspath, chick, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        lv = ChickData_1.default.user.getLvlMax() - 3;
                        if (lv < 1)
                            lv = 1;
                        this.SetText("lbl_buy_lvl", 'LV.' + lv);
                        this.SetText("lbl_buy_cost", Utils_1.default.formatNumber(ChickData_1.default.user.buyChickPrice(lv)));
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
    HallScene.prototype.buyChick = function (lv, buytype) {
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
            lv = ChickData_1.default.user.getLvlMax() - 3;
            if (lv < 1)
                lv = 1;
        }
        if (item) {
            if (buytype == 0) {
                var cost = ChickData_1.default.user.buyChickPrice(lv);
                if (ChickData_1.default.user.buyChickPrice(lv) > ChickData_1.default.user.coin) {
                    var type_1 = 0;
                    if (ChickData_1.default.user.today_getchick_times < ChickData_1.default.user.today_getchick_total) {
                        type_1 = 1;
                    }
                    else if (ChickData_1.default.user.today_getcoin_times < ChickData_1.default.user.today_getcoin_total) {
                        type_1 = 2;
                    }
                    if (type_1 > 0) {
                        Utils_1.default.createUI("prefab/CoinNotEnough").then(function (node) {
                            node.getComponent(CoinNotEnoughUI_1.default).setViewType(type_1);
                        });
                    }
                    else {
                        MsgToast_1.default.show("金幣不足");
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
            AudioMgr_1.default.Instance().playMX("flower_pot_land");
            this.composeHandle(null);
            item.setItemData(ChickData_1.default.user.buyChick(item.index, lv), buytype);
            this.updateBuyButton();
            return true;
        }
        else {
            if (buytype <= 2) {
                MsgToast_1.default.show("位置不夠啦！");
                this.GetGameObject("btn_delete").stopAllActions();
                this.GetGameObject("btn_delete").opacity = 255;
                this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(0.25), cc.fadeTo(0.25, 0)));
            }
            return false;
        }
    };
    HallScene.prototype.composeTip = function () {
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
    HallScene.prototype.onUIClicked = function (event, customEventData) {
        var btnName = event.target.name;
        AudioMgr_1.default.Instance().playMX("click");
        switch (btnName) {
            case "btn_setting":
                Utils_1.default.createUI("prefab/SettingUI");
                break;
            case "btn_sign":
                Utils_1.default.createUI("prefab/SignUI");
                break;
            case "btn_buy":
                this.buyChick(null, 0);
                this.GetGameObject("guild_0").active = false;
                if (ChickData_1.default.user.guideIndex == 0) {
                    ChickData_1.default.user.guideIndex++;
                    ChickData_1.default.save();
                    this.saveTime = 0;
                }
                if (ChickData_1.default.user.guideIndex == 1) {
                    this.composeTip();
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
                    MsgToast_1.default.show("拖動到這裏賣出");
                break;
            case "btn_inviate":
                // WxCenter.shareAppMessage();
                WxCenter_1.default.aldReport('InvitationClick', 'click');
                Utils_1.default.createUI("prefab/ShareLayer").then(function (node) {
                    node.getComponent(ShareView_1.default).setData();
                });
                break;
            case 'btnFreeAd':
                Utils_1.default.createUI("prefab/MonthCardUI");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxIYWxsU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1QyxrREFBNkM7QUFDN0MsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUN6Qyx3Q0FBbUM7QUFDbkMsbUNBQW1FO0FBQ25FLGtEQUFnSjtBQUNoSixnREFBNEM7QUFDNUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUV6QywwREFBcUQ7QUFDckQsOENBQXlDO0FBQ3pDLDRDQUF1QztBQUN2QywyQ0FBc0M7QUFDdEMseUNBQW9DO0FBRXBDLDREQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQW04QkM7UUFqOEJHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFTbkIsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbkIsZUFBUyxHQUFhLEVBQUUsQ0FBQztRQUN4QixlQUFTLEdBQU8sSUFBSSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFxRmIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQW9FZCxvQkFBYyxHQUFHLEtBQUssQ0FBQztRQStEeEIsVUFBSSxHQUFhLEVBQUUsQ0FBQztRQUU5QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLFdBQUssR0FBcUIsRUFBRSxDQUFDO1FBcUJyQyxtQkFBYSxHQUFZLEtBQUssQ0FBQyxDQUFDLFVBQVU7UUFDN0MsZ0JBQVUsR0FBWSxLQUFLLENBQUMsQ0FBSyxZQUFZO1FBc0sxQyxlQUFTLEdBQUcsS0FB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LENBQUMsQ0FBQztvQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ2QsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0JBQ3ZELFFBQVEsQ0FBQyxLQUFLLENBQUM7NEJBQ1gsUUFBUSxFQUFFLEVBQUU7eUJBQ2YsQ0FBQyxDQUFDO3FCQUNOO2lCQUNKO3FCQUNJO29CQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNkLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO3dCQUN2RCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ25CO2lCQUNKO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7O0lBNTdCTSxtQkFBUyxHQUFHLElBQUksQ0FBQztJQUZ4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNPO0lBb2UzQjtRQURGLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNhO0lBdGViLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FtOEI3QjtJQUFELGdCQUFDO0NBbjhCRCxBQW04QkMsQ0FuOEJzQyxnQkFBTSxHQW04QjVDO2tCQW44Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xyXG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xyXG5pbXBvcnQgV3hDZW50ZXIgZnJvbSBcIi4uL21hbmFnZXIvV3hDZW50ZXJcIjtcclxuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi91dGlscy9BdWRpb01nclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IFVzZXJfbGV2ZWwsIENvbmZpZ19jaGljaywgQ29uZmlnX2dyb3VuZCB9IGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5pbXBvcnQgQ29tbW9uVmlldywgeyBNQVhfRE9VQkxFX0FUVF9USU1FLCBNQVhfRE9VQkxFX0lOQ09NRV9USU1FLCBNQVhfQVVUT19DT01fVElNRSwgTUFYX0RST1BfUExBTlRfVElNRSwgRUFETEFZRVIgfSBmcm9tIFwiLi9wcmVmYWIvQ29tbW9uVmlld1wiO1xyXG5pbXBvcnQgU2hhcmVMYXllciBmcm9tIFwiLi9wcmVmYWIvU2hhcmVWaWV3XCI7XHJcbmltcG9ydCBFbmVteSBmcm9tIFwiLi9wcmVmYWIvRW5lbXlcIjtcclxuaW1wb3J0IEZhaWxWaWV3IGZyb20gXCIuL3ByZWZhYi9GYWlsVmlld1wiO1xyXG5pbXBvcnQgUmVjb3JkVmlldyBmcm9tIFwiLi9wcmVmYWIvUmVjb3JkVmlld1wiO1xyXG5pbXBvcnQgT2ZmbGluZUF3YXJkVUkgZnJvbSBcIi4vcHJlZmFiL09mZmxpbmVBd2FyZFVJXCI7XHJcbmltcG9ydCBTaG9wVmlldyBmcm9tIFwiLi9wcmVmYWIvU2hvcFZpZXdcIjtcclxuaW1wb3J0IFdpblZpZXcgZnJvbSBcIi4vcHJlZmFiL1dpblZpZXdcIjtcclxuaW1wb3J0IEdyb3VuZEl0ZW0gZnJvbSBcIi4vR3JvdW5kSXRlbVwiO1xyXG5pbXBvcnQgQ2hpY2tJdGVtIGZyb20gXCIuL0NoaWNrSXRlbVwiO1xyXG5pbXBvcnQgeyBQbGFudEluZm8gfSBmcm9tIFwiLi9Vc2VyTW9kZWxcIjtcclxuaW1wb3J0IENvaW5Ob3RFbm91Z2hVSSBmcm9tIFwiLi9wcmVmYWIvQ29pbk5vdEVub3VnaFVJXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxTY2VuZSBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZW5lbXlfcHJlOmNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIF9pbnN0YW5jZSA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpOkhhbGxTY2VuZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBIYWxsU2NlbmUuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xhc3Rkcm9wdGltZSA9IDA7XHJcbiAgICBwdWJsaWMgZW5lbXlsaXN0OmNjLk5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB3YXZlX2luZm86YW55ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2F2ZVRpbWUgPSAwO1xyXG5cclxuICAgIGhpZENvbXBvc2VUaXBzKClcclxuICAgIHtcclxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTsvL2Z4X2dyb3VuZF9tZXJnZVxyXG4gICAgICAgIGZvcih2YXIgc2xvdCBvZiBzbG90cy5jaGlsZHJlbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNsb3QuZ2V0Q2hpbGRCeU5hbWUoXCJmeF9ncm91bmRfbWVyZ2VcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb21wb3NldGlwcyhsdjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4cyA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaXRlbSBvZiB0aGlzLml0ZW1zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXRlbS5kYXRhY29weSAmJiBpdGVtLmRhdGFjb3B5Lmx2ID09IGx2ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCAmJiBpdGVtLmRhdGFjb3B5Lmx2PDYwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmRleHMucHVzaChpdGVtLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTsvL2Z4X2dyb3VuZF9tZXJnZVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aTxzbG90cy5jaGlsZHJlbi5sZW5ndGg7KytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvdHMuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJmeF9ncm91bmRfbWVyZ2VcIikuYWN0aXZlID0gaW5kZXhzLmluZGV4T2YoaSkgPj0wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlKGR0KVxyXG5cdHtcclxuICAgICAgICBpZihkdD4xKWR0PTE7XHJcblx0XHR0aGlzLlNldFRleHQoXCJsYmxfY29pblwiLFV0aWxzLmZvcm1hdE51bWJlcihDaGlja0RhdGEudXNlci5jb2luKStcIlwiKTtcclxuICAgICAgICAvLyBpZih0aGlzLnJlY29yZGVydGltZSAhPSAwKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgbGV0IHMgPSBNYXRoLmZsb29yKChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSB0aGlzLnJlY29yZGVydGltZSkvMTAwMCk7XHJcbiAgICAgICAgLy8gICAgIGlmKHM+MCl0aGlzLlNldFRleHQoXCJsYmxfbHVwaW5nXCIscytcInNcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuU2V0VGV4dChcImxibF9sdXBpbmdcIixcIlwiKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8veeaOkuW6j1xyXG4gICAgICAgIHRoaXMuZW5lbXlsaXN0LnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgcmV0dXJuIGIueSAtIGEueTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwO2k8dGhpcy5lbmVteWxpc3QubGVuZ3RoOysraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0W2ldLnpJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sYXN0ZHJvcHRpbWUgKz0gZHQ7XHJcbiAgICAgICAgaWYodGhpcy5fbGFzdGRyb3B0aW1lID4gMjUgKiAoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpPy4zOjEpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/mma7pgJroirHnm4bmjonokL1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KSByZXR1cm5cclxuICAgICAgICAgICAgbGV0IGx2ID0gTWF0aC5tYXgoMSwgQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSBVdGlscy5nZXRSYW5kb21JbnQoNiwgOSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1eUNoaWNrKGx2LCAzKVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0ZHJvcHRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/kuIDmrrXml7bpl7TkuI3mk43kvZzvvIzmj5DnpLrlj6/ku6XlkIjmiJBcclxuICAgICAgICBpZih0aGlzLnRvdWNoZW5kdGltZSAhPSAwICYmIFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMudG91Y2hlbmR0aW1lID4gNTAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZVRpcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVUaW1lKys7XHJcbiAgICAgICAgaWYodGhpcy5zYXZlVGltZSA+PSA5MDApe1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVUaW1lID0gMDtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuK3pl7TmmL7npLrlm77niYdcclxuICAgIHB1YmxpYyBhc3luYyBzaG93SW1hZ2UoaW1ncGF0aDpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGltZ3BhdGgsY2MuU3ByaXRlRnJhbWUpIGFzIGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUueSA9IDIwMDtcclxuICAgICAgICBub2RlLnNjYWxlID0gMS4yO1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyKSxjYy5zcGF3bihjYy5tb3ZlQnkoMC41LDAsMTAwKSxjYy5mYWRlVG8oMC41LDApKSxjYy5yZW1vdmVTZWxmKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYkZhaWwgPSBmYWxzZTtcclxuICAgIGVuZW15RGllKG5vZGU6Y2MuTm9kZSxiRmFpbDpib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpc1N0b3AgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICBpZihiRmFpbCkgdGhpcy5iRmFpbCA9IHRydWU7XHJcbiAgICAgICAgZm9yKHZhciBpID0gdGhpcy5lbmVteWxpc3QubGVuZ3RoLTE7aT49MDstLWkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihub2RlID09IHRoaXMuZW5lbXlsaXN0W2ldKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15bGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY3JlYXRlY29tcGxldGUgJiYgdGhpcy5lbmVteWxpc3QubGVuZ3RoID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmJGYWlsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlPj0gdGhpcy53YXZlX2luZm9bMl0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIud2F2ZT0gMTtcclxuICAgICAgICAgICAgICAgICAgICBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteSA9IG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15KTtcclxuICAgICAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Mb3NlVUlcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChGYWlsVmlldykuc2V0SW5mbyhlbmVteS5nZXRCb3NzTW9uZXkoKSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLndhdmUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ltYWdlKFwidGV4dHVyZS9kZWZlYXRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci53YXZlKys7XHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlID4gdGhpcy53YXZlX2luZm9bMl0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb25leSA9IGVuZW15LmdldEJvc3NNb25leSgpO1xyXG5cdFx0XHRcdCAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjIpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1ZpY3RvcnlVSVwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5WaWV3KS5zZXRJbmZvKG1vbmV5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgICAgICAgICBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLndhdmUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmx2Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTmV3R3JvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlVGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IENoaWNrRGF0YS51c2VyLmx2ICsgXCJfXCIgKyBDaGlja0RhdGEudXNlci53YXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2F2ZV9pbmZvID0gVXNlcl9sZXZlbFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZExldmVsUmVwb3J0KENoaWNrRGF0YS51c2VyLmx2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcIndpbl93YXZlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93SW1hZ2UoXCJ0ZXh0dXJlL3N1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U2tlQW5pKFwic3BpbmU6b3RoZXIvc2hlbmdqaWNoZW5nZ29uZ1wiLCBcImVmZmVjdFwiLCB0aGlzLm5vZGUsY2MudjMoMCwxNTAsMCksIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGlzU3RvcCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVuZW15cyhpc0NoYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlY29tcGxldGUgPSBmYWxzZTtcclxuICAgIGNyZWF0ZUVuZW15cyhpc0NoYW5nZTpib29sZWFuID0gZmFsc2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5iRmFpbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGtleSA9IENoaWNrRGF0YS51c2VyLmx2ICsgXCJfXCIgKyBDaGlja0RhdGEudXNlci53YXZlO1xyXG4gICAgICAgIHRoaXMud2F2ZV9pbmZvID0gVXNlcl9sZXZlbFtrZXldO1xyXG5cclxuICAgICAgICAvL+mAmuWFs+WQjuWwseS4gOebtOivu+acgOWQjuS4gOWFs1xyXG4gICAgICAgIGlmKCF0aGlzLndhdmVfaW5mbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSA2MCArIFwiX1wiICsgQ2hpY2tEYXRhLnVzZXIud2F2ZTtcclxuICAgICAgICAgICAgdGhpcy53YXZlX2luZm8gPSBVc2VyX2xldmVsW2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlID09IHRoaXMud2F2ZV9pbmZvWzJdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TXVzaWMoXCJiZ0Jvc3NcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKC44KSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQm9zc0NvbW1pbmdVSVwiKVxyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoQ2hpY2tEYXRhLnVzZXIud2F2ZSA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TXVzaWMoXCJCR00xXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/liJvlu7rmgKrnialcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy53YXZlX2luZm9bNF07KytpKVxyXG4gICAgICAgICAgICBsaXN0LnB1c2godGhpcy53YXZlX2luZm9bM10pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIG51bSA9IGxpc3QubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy53YXZlX2luZm9bNl07KytpKVxyXG4gICAgICAgICAgICBsaXN0LnB1c2godGhpcy53YXZlX2luZm9bNV0pXHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxsaXN0Lmxlbmd0aDsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyLjIgKiBpKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZW15X3ByZSk7XHJcbiAgICAgICAgICAgICAgICBlLnBhcmVudCA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfb2JqXCIpO1xyXG4gICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoRW5lbXkpLnNldElEKGlkLGk+PW51bSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15bGlzdC5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoaSA9PSBsaXN0Lmxlbmd0aC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5YWz5Y2h5L+h5oGvXHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2N1cl9sdlwiLENoaWNrRGF0YS51c2VyLmx2K1wiXCIpO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF93YXZlc1wiLENoaWNrRGF0YS51c2VyLndhdmUrXCIvXCIrIHRoaXMud2F2ZV9pbmZvWzJdKTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfcHJlX2x2XCIsKENoaWNrRGF0YS51c2VyLmx2LTEpK1wiXCIpO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9uZXhfbHZcIiwoQ2hpY2tEYXRhLnVzZXIubHYrMSkrXCJcIik7XHJcbiAgICAgICAgaWYoaXNDaGFuZ2Upe1xyXG4gICAgICAgICAgICBVdGlscy5wbGF5QnJlYXRoKHRoaXMuR2V0R2FtZU9iamVjdCgnbGJsX3dhdmVzJyksMSwzLDAuNSxmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXRoOmNjLlZlYzNbXSA9IFtdO1xyXG5cclxuXHRpdGVtX2RyYWc6IENoaWNrSXRlbSA9IG51bGw7XHJcblx0YXV0b2NvbWluZGV4czogbnVtYmVyW10gPSBbLTEsIC0xXTtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxDaGlja0l0ZW0+ID0gW107XHJcbiAgICBpbml0Q29tcG9zZUNoaWNrcygpIHtcclxuICAgICAgICB2YXIgbGlzdCA9IENoaWNrRGF0YS51c2VyLkNvbVBsYW50cztcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbSA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKGxpc3RbaV0ubHY+NjApbGlzdFtpXS5sdj02MFxyXG4gICAgICAgICAgICBpZihtW2xpc3RbaV0uaW5kZXhdID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLplJnor68uLi7kv67mraNcIilcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1bbGlzdFtpXS5pbmRleF0gPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbbGlzdFtpXS5pbmRleF0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2xpc3RbaV0uaW5kZXhdLnNldEl0ZW1EYXRhKGxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJQYXVzZUF1dG9Db206IGJvb2xlYW4gPSBmYWxzZTsgLy/mmK/lkKbmmoLlgZzoh6rliqjlkIjmiJBcclxuXHRiSW5BdXRvQ29tOiBib29sZWFuID0gZmFsc2U7ICAgICAvL+aYr+WQpuato+WcqOiHquWKqOWQiOaIkOWKqOeUu1xyXG5cdFxyXG5cdGdldEl0ZW1CeVBvcyhwb3M6IGNjLlZlYzIpOiBDaGlja0l0ZW0ge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMocG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaV0ubm9kZS5nZXRDb21wb25lbnQoQ2hpY2tJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0c2V0RHJhZ1Bvcyhwb3MpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgICAgICBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgfVxyXG5cdFxyXG5cdGFzeW5jIHN0YXJ0KClcclxuXHR7XHJcbiAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdIb21lU2hvdycsJ3Nob3cnKTtcclxuICAgICAgICB0aGlzLmhpZENvbXBvc2VUaXBzKCk7XHJcbiAgICAgICAgSGFsbFNjZW5lLl9pbnN0YW5jZSA9IHRoaXM7XHJcblx0XHRsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTtcclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvcih2YXIgc2xvdCBvZiBzbG90cy5jaGlsZHJlbil7XHJcblx0XHRcdHNsb3QuZ2V0Q29tcG9uZW50KEdyb3VuZEl0ZW0pLnNldEluZGV4KCsraSk7XHJcblx0XHR9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0VmlldygpO1xyXG5cclxuXHRcdHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9Db21wb3NlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSkgcmV0dXJuXHJcbiAgICAgICAgICAgIC8vIOWwj+eyvueBteaOieiQvVxyXG4gICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5Ecm9wR2lmdFB0cy5sZW5ndGg+MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBsZXQgYj0gdGhpcy5idXlDaGljayhDaGlja0RhdGEudXNlci5Ecm9wR2lmdFB0c1swXSw0KTtcclxuICAgICAgICAgICAgICAgaWYoYilcclxuICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAvLyAg5bm/5ZGK6LSt5Lmw5oiQ5Yqf77yM5Zug5Li65rKh5pyJ56m65L2N5pyq5oiQ5Yqf5re75YqgXHJcbiAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuQWRCdXlOb3REcm9wLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGxldCBiPSB0aGlzLmJ1eUNoaWNrKENoaWNrRGF0YS51c2VyLkFkQnV5Tm90RHJvcFswXSwyKTtcclxuICAgICAgICAgICAgICAgaWYoYilcclxuICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLkFkQnV5Tm90RHJvcC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cdFx0fSkpLnJlcGVhdEZvcmV2ZXIoKSlcclxuICAgICAgICBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lID0gTWF0aC5tYXgoMCxDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lKTtcclxuICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPSBNYXRoLm1heCgwLENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSk7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID0gTWF0aC5tYXgoMCxDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUpO1xyXG4gICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSA9IE1hdGgubWF4KDAsQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bkZyZWVBZCcpLmFjdGl2ZSA9ICFDaGlja0RhdGEuaXNGcmVlQWRcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ1eUJ1dHRvbigpO1xyXG5cclxuICAgICAgICAgLy/nprvnur/lpZblirEs5pqC5pe25Y+q57uZNuWwj+aXtueahFxyXG4gICAgICAgICBsZXQgc3RpbWUgPSBDaGlja0RhdGEudXNlci5zZXJ2ZXJUaW1lOyAgICBcclxuICAgICAgICAgdmFyIHQgPSAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gc3RpbWUpIC8gMTAwMDtcclxuICAgICAgICAgaWYgKHN0aW1lICE9IDAgJiYgdCA+IDMqNjApIHtcclxuICAgICAgICAgICAgIHZhciB0ID0gTWF0aC5taW4oNzIwMCAqIDMsIHQpO1xyXG4gICAgICAgICAgICAgdmFyIG1vbmV5ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0T2ZmbGluZVJld2FyZCh0LzYwKTtcclxuICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKCdwcmVmYWIvT2ZmbGluZUF3YXJkVUknLCBudWxsLCAodWkpID0+IHtcclxuICAgICAgICAgICAgICAgICB1aS5nZXRDb21wb25lbnQoT2ZmbGluZUF3YXJkVUkpLmRhdGEgPSBtb25leTtcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBjIG9mIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfcGF0aFwiKS5jaGlsZHJlbilcclxuICAgICAgICAgICAgdGhpcy5wYXRoLnB1c2goYy5wb3NpdGlvbilcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgzKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVuZW15cygpO1xyXG4gICAgICAgIH0pKSlcclxuXHJcblx0XHQvL+abtOaWsOWQhOenjeaXtumXtFxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJvdHRvbVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzWDJJbiA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IDA7XHJcbiAgICAgICAgICAgIGxldCBpc0luRGIgPSBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwO1xyXG4gICAgICAgICAgICBsZXQgaXNEcEluID0gQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMDtcclxuXHJcbiAgICAgICAgICAgIC8v5qCh6aqM5pe26Ze0XHJcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiBNQVhfRE9VQkxFX0FUVF9USU1FICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9BVVRPX0NPTV9USU1FICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiBNQVhfRFJPUF9QTEFOVF9USU1FICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5icmVhdGhBbmdyeShpc1gySW4pO1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJhdHRfeDJfdGltZVwiLCBpc1gySW4gPyBVdGlscy5nZXRUaW1lU3RyQnlTKChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkgOiAn5omT6beE6KGAJyk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcInJld2FyZHgyX3RpbWVcIiwgaXNJbkRiID8gVXRpbHMuZ2V0VGltZVN0ckJ5UygoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSAvIDEwMDApIDogJ+mbmeWAjScpO1xyXG4gICAgICAgICAgICBpZiggQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImF1dG9fdGltZVwiLCBVdGlscy5nZXRUaW1lU3RyQnlTKChDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSAvIDEwMDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImF1dG9fdGltZVwiLCBcIuiHquWLleWQiOaIkFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZHJvcF9wbGFudFwiLGlzRHBJbiA/IFV0aWxzLmdldFRpbWVTdHJCeVMoKENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkgLyAxMDAwKSA6ICfmjonokL0nKTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfYnRfYW5ncnlcIikuYWN0aXZlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYXR0X3gyX3RpbWVcIikuYWN0aXZlO1xyXG4gICAgICAgICAgICAvLyBpZihEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpPDApXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkdldFNwcml0ZShcImJ0X2Zhc3RfZ2VuX3Byb2Nlc3NfaXRlbVwiKS5maWxsUmFuZ2UgPSAwO1xyXG4gICAgICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkdldFNwcml0ZShcImJ0X2Zhc3RfZ2VuX3Byb2Nlc3NfaXRlbVwiKS5maWxsUmFuZ2UgPSAoIChEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKS8xMDAwLzYwKS9NQVhfRFJPUF9QTEFOVF9USU1FOy8vIChtYXhfZHJvcF9wbGFudCAqIDYwIC0gKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLzEwMDApIC9tYXhfZHJvcF9wbGFudCAqIDYwXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICAgICAgICAgIC8vIFRhc2tMYXllci5jaGVja1Rhc2soKTsvL+S7u+WKoeajgOa1i1xyXG4gICAgICAgICAgICAvLyBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UoKS5pc0d1aWRlID09IGZhbHNlKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2F1dG9cIikuYWN0aXZlID0gRGF0YS51c2VyLmd1aWRlSW5kZXggPiAyO1xyXG4gICAgICAgICAgICAvLyBEYXRhLnVzZXIuY2hlY2tOZXdUb2R5KCk7XHJcblx0XHR9KSxjYy5kZWxheVRpbWUoMSkpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8wXCIpLmFjdGl2ZSA9IENoaWNrRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMDtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuR2V0R2FtZU9iamVjdChcInN1cGVybWFya2V0XCIpKVxyXG4gICAgICAgIC8vICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzdXBlcm1hcmtldFwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC4zLCAyMCksIGNjLnJvdGF0ZVRvKDAuMywgLTEwKSwgY2Mucm90YXRlVG8oMC4yLCAwKSwgY2MuZGVsYXlUaW1lKDIpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuR2V0R2FtZU9iamVjdChcInBvd2VybWFuXCIpKVxyXG4gICAgICAgIC8vICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJwb3dlcm1hblwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC4zLCAyMCksIGNjLnJvdGF0ZVRvKDAuMywgLTEwKSwgY2Mucm90YXRlVG8oMC4yLCAwKSwgY2MuZGVsYXlUaW1lKDMpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2ludmlhdGVcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMywgMjApLCBjYy5yb3RhdGVUbygwLjMsIC0xMCksIGNjLnJvdGF0ZVRvKDAuMiwgMCksIGNjLmRlbGF5VGltZSgzKSkucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsdXBpbl9nZW1cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMywgMjApLCBjYy5yb3RhdGVUbygwLjMsIC0xMCksIGNjLnJvdGF0ZVRvKDAuMiwgMCksIGNjLmRlbGF5VGltZSgzKSkucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1JlY29yZGVyXCIpKSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuYWN0aXZlID0gd2luZG93W1widHRcIl07XHJcbiAgICAgICAgLy8gaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlY29yZGVyID0gd2luZG93W1widHRcIl0uZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgIC8vICAgICByZWNvcmRlci5vblN0YXJ0KHJlcyA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsdXBpbl9nZW1cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fVkNSXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2VuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1JlY29yZGVyXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC41LCAuOSksIGNjLnNjYWxlVG8oMC41LCAxKSkucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0dOW9leWxj+W8gOWni1wiKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gICAgIHJlY29yZGVyLm9uU3RvcChyZXMgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iUmVjb3JkZXIgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibHVwaW5fZ2VtXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuc2NhbGUgPSAxO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1ZDUlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2VuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidHTlvZXlsY/nu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMudmlkZW9QYXRoKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSB0aGlzLnJlY29yZGVydGltZSA8IDMwMDApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBNc2dIaW50cy5zaG93KFwi5b2V5bGP5pe26Ze06L+H55+tXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gMFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJlY29yZGVydGltZSA9IDBcclxuICAgICAgICAvLyAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0x1UGluUmVzdWx0XCIsIG51bGwsIChub2RlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoUmVjb3JkVmlldykuc2V0RGF0YShyZXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCB0aGlzLm9uR2FtZVNob3csIHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCB0aGlzLm9uR2FtZUhpZGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJSZWNvcmRlciA9IGZhbHNlO1xyXG4gICAgcmVjb3JkZXJ0aW1lID0gMDtcclxuICAgIG9uR2FtZUhpZGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmdhbWUub2ZmKGNjLmdhbWUuRVZFTlRfU0hPVywgdGhpcy5vbkdhbWVTaG93KTtcclxuICAgICAgICBjYy5nYW1lLm9mZihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMub25HYW1lSGlkZSk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lU2hvdygpIHtcclxuICAgICAgICBpZiAoVXRpbHMuc2hhcmV0aW1lICE9IDAgJiYgVXRpbHMuc2hhcmVjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gVXRpbHMuc2hhcmV0aW1lID49IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLliIbkuqvlpLHmlZdcIik7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVdGlscy5zaGFyZXRpbWUgPSAwO1xyXG4gICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5OZXdHcm91bmQoKXtcclxuICAgICAgICBsZXQgY3Vyb3BlbiA9IEdyb3VuZEl0ZW0uZ2V0TmVlZE9wZW4oKTtcclxuICAgICAgICBpZihjdXJvcGVuIDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsdiA9IENvbmZpZ19ncm91bmRbY3Vyb3Blbl0ucHJpY2U7XHJcbiAgICAgICAgaWYobHYgPCBDaGlja0RhdGEudXNlci5sdikgcmV0dXJuO1xyXG4gICAgICAgIENoaWNrRGF0YS51c2VyLnNsb3RzW2N1cm9wZW5dID0gMTtcclxuICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVRpbWUgPSAwO1xyXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpO1xyXG4gICAgICAgIGxldCBzbG90ID0gc2xvdHMuY2hpbGRyZW5bY3Vyb3Blbl07XHJcbiAgICAgICAgaWYoc2xvdCl7XHJcbiAgICAgICAgICAgIHNsb3QuZ2V0Q29tcG9uZW50KEdyb3VuZEl0ZW0pLnNldEluZGV4KGN1cm9wZW4pO1xyXG4gICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5oiQ5Yqf6Kej6Y6W5paw5L2N572uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzSW5BbmdyeSA9IGZhbHNlO1xyXG4gICAgcHVibGljIGJyZWF0aEFuZ3J5KGlzYm9vbDpib29sZWFuKXtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FuZ3J5JylcclxuICAgICAgICBpZighbm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmKGlzYm9vbCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzSW5BbmdyeSl7XHJcbiAgICAgICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlWSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc0luQW5ncnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmlzSW5BbmdyeSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNJbkFuZ3J5ID0gdHJ1ZTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMTApLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIFV0aWxzLnBsYXlCcmVhdGgobm9kZSkuc2V0VGFnKDIpO1xyXG4gICAgICAgIH0pKS5yZXBlYXQoMSkpLnNldFRhZygxKVxyXG4gICAgfVxyXG5cclxuXHRAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlX3NvbGRpZXI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBhc3luYyBpbml0VmlldygpIHtcclxuICAgICAgXHJcbiAgICAgICAgdmFyIG5vZGVfY29tID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIik7XHJcblxyXG4gICAgICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgKytpKSB7XHJcblx0XHRcdHZhciBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVfc29sZGllcik7XHJcblx0XHRcdG5vZGUucGFyZW50ID0gbm9kZV9jb207XHJcblx0XHRcdG5vZGUucG9zaXRpb24gPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKS5jaGlsZHJlbltpXS5wb3NpdGlvbjsvLyBjYy52Mih4LCB5KTtcclxuXHRcdFx0bm9kZS5uYW1lID0gXCJpdG1lXCIgKyBpbmRleDtcclxuXHRcdFx0dmFyIHBsYW50OiBDaGlja0l0ZW0gPSBub2RlLmdldENvbXBvbmVudChDaGlja0l0ZW0pO1xyXG5cdFx0XHRwbGFudC5pbmRleCA9IGluZGV4O1xyXG5cdFx0XHR0aGlzLml0ZW1zLnB1c2gocGxhbnQpO1xyXG5cdFx0XHQrK2luZGV4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbm9kZV9kcmFnID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVfc29sZGllcik7XHJcbiAgICAgICAgbm9kZV9kcmFnLnBhcmVudCA9IG5vZGVfY29tLnBhcmVudDtcclxuICAgICAgICBub2RlX2RyYWcubmFtZSA9IFwiaXRlbV9kcmFnXCI7XHJcbiAgICAgICAgbm9kZV9kcmFnLnggPSAtMTAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikuZ2V0Q29tcG9uZW50KENoaWNrSXRlbSk7XHJcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLml0ZW1fZHJhZy5iRHJhZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdENvbXBvc2VDaGlja3MoKTtcclxuXHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYlBhdXNlQXV0b0NvbSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaaguWBnOiHquWKqOWQiOaIkFwiKVxyXG5cclxuICAgICAgICAgICAgLy/lpoLmnpzlnKjoh6rliqjlkIjmiJDkuK3vvIzlj5bmtojlvZPliY3lkIjmiJBcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlICYmIHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWPlua2iOW9k+WJjeWQiOaIkFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBwb3MgPSBub2RlX2NvbS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5UG9zKHBvcyk7XHJcblxyXG4gICAgICAgICAgICBpZihpdGVtICYmIGl0ZW0uZHJvcHR5cGUgIT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kcm9wdHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZUl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5kYXRhY29weSAmJiBpdGVtLmRyb3B0eXBlID09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoUG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iQ2hvb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERyYWdQb3MoaXRlbS5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmluZGV4ID0gaXRlbS5pbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLnNldEl0ZW1EYXRhKGl0ZW0uZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBpdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbXBvc2V0aXBzKGl0ZW0uZGF0YWNvcHkubHYpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgcG9zID0gbm9kZV9jb20uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYkNob29zZWQgJiYgcG9zLnN1Yih0aGlzLnRvdWNoUG9zKS5tYWcoKSA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREcmFnUG9zKHBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgcG9zMSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MxKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChlLmdldExvY2F0aW9uKCkuc3ViKGNjLnYyKHBvczEueCxwb3MxLnkpKS5tYWcoKSA8IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY29tcG9zZUhhbmRsZSwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmNvbXBvc2VIYW5kbGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHRiQ2hvb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdG91Y2hQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblx0XHJcbiAgICBzdGFydEF1dG9Db21wb3NlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJQYXVzZUF1dG9Db20gfHwgdGhpcy5iSW5BdXRvQ29tKSByZXR1cm47XHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSA8IENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgJiYgIXRoaXMuYkluQXV0b0NvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDb21wb3NlQ2hpY2tzKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoIDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaV0gfHwgIXRoaXMuaXRlbXNbaV0uZGF0YWNvcHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2opIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tqXSB8fCAhdGhpcy5pdGVtc1tqXS5kYXRhY29weSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2ID09IHRoaXMuaXRlbXNbal0uZGF0YWNvcHkubHYgJiYgdGhpcy5pdGVtc1tpXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbal0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2PDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IHRoaXMuaXRlbXNbaV0uaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IHRoaXMuaXRlbXNbal0uaW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IHRoaXMuaXRlbXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmluZGV4ID0gdGhpcy5pdGVtc1tqXS5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuc2V0SXRlbURhdGEodGhpcy5pdGVtc1tqXS5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tqXS5zZXRJdGVtRGF0YShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5wb3NpdGlvbiA9IHRoaXMuaXRlbXNbal0ubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREcmFnUG9zKHRoaXMuaXRlbXNbal0ubm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuaXRlbXNbaV0ubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0cG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuW8gOWni+iHquWKqOWQiOaIkFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJJbkF1dG9Db20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjEzLCBjYy52Mih0YXJnZXRwb3MueCx0YXJnZXRwb3MueSkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wRWZmKHRoaXMuaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi6Ieq5Yqo5ZCI5oiQ57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iSW5BdXRvQ29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoZW5kdGltZSA9IDA7XHJcbiAgICBjb21wb3NlSGFuZGxlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLnRvdWNoZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICB0aGlzLmhpZENvbXBvc2VUaXBzKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjI1KSxjYy5mYWRlVG8oMC4yNSwwKSkpXHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5iUGF1c2VBdXRvQ29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYkluQXV0b0NvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmgaLlpI3oh6rliqjlkIjmiJBcIilcclxuICAgICAgICB9KSkpXHJcbiAgICAgICAgdGhpcy5iQ2hvb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBwb3MgPSBlID8gZS5nZXRMb2NhdGlvbigpIDogY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1fZHJhZy5kYXRhY29weSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5Yig6ZmkXHJcbiAgICAgICAgICAgIHZhciBwb3MxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgcG9zMSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MxKTtcclxuICAgICAgICAgICAgaWYgKHBvcy5zdWIoY2MudjIocG9zMS54LHBvczEueSkpLm1hZygpIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkpIHRtcCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0bXAgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLlsI/pt4Tmlbjph4/pgY7lsJHkuI3og73liKrpmaRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkubHYgPj0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5pyA6auY562J57Sa55qE5bCP6beE5bCx5LiN5Yiq6Zmk5LqG5ZCnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudXBkYXRlU2VsbENoaWNrQ29pbih0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YShudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVJlY3J1aXRtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2FtZVNjZW5lLkluc3RhbmNlKCkuZnBzID4gMzApXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZS91aS95aW5saWFuZ3plbmdqaWFcIiwgXCJlZmZlY3RcIiwgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKSwgY2MudjIoMCwgMjApLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WQiOaIkCDnp7vliqggIOS6pOaNolxyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbTogQ2hpY2tJdGVtID0gdGhpcy5nZXRJdGVtQnlQb3MocG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgQ2hpY2tEYXRhLnVzZXIuc2xvdHNbaXRlbS5pbmRleF0gPT0gMCB8fCBpdGVtID09IHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtIHx8IChpdGVtICYmIGl0ZW0uZHJvcHR5cGUgIT0gMCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pdGVtX2RyYWcubGlua0l0ZW0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLmRhdGFjb3B5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIC8v56e75YqoXHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5tb3ZlRWZmKHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLmluZGV4LCBpdGVtLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRhdGFjb3B5Lm9wZW4gPT0gdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkub3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhY29weS5sdiA9PSB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5sdiAmJiBpdGVtLmRhdGFjb3B5LmluZGV4ICE9IHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5LmluZGV4ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCAmJiBpdGVtLmRhdGFjb3B5Lmx2PDYwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wRWZmKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XHJcbiAgICAgICAgICAgICAgICAvL+S6pOaNolxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIubW92ZUVmZih0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5pbmRleCwgaXRlbS5pbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIF90bXA6IFBsYW50SW5mbyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbS5kYXRhY29weSkpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YShfdG1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0XHJcbiAgICBzaG93Q29tcEVmZihpdGVtOiBDaGlja0l0ZW0pIHtcclxuICAgICAgICBsZXQgYiA9IENoaWNrRGF0YS51c2VyLmNvbXBvc2VDaGlja3MoaXRlbS5pbmRleCwgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkuaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCArKztcclxuICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlVGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBuZXh0R3VuID0gQ2hpY2tEYXRhLnVzZXIuZ2V0Q2hpY2tJbmZvKGl0ZW0uaW5kZXgpO1xyXG4gICAgICAgIGl0ZW0uc2V0SXRlbURhdGEobmV4dEd1bik7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1fZHJhZy5kYXRhY29weSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0b2NvbWluZGV4cyA9IFstMSwgLTFdO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0ubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRwb3MpO1xyXG4gICAgICAgIHRoaXMucGxheVNrZUFuaShcInNwaW5lOm90aGVyL2VmZmVjdF9oZWNoZW5nXCIsIFwiZWZmZWN0XCIsIHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQsIHRhcmdldHBvcy5hZGQoY2MudjMoMCwyMCwwKSksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUJ1eUJ1dHRvbigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzO1xyXG4gICAgICAgIGlmKGx2PDEpbHYgPSAxO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9idXlfbHZsXCIsJ0xWLicgKyBsdik7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2J1eV9jb3N0XCIsVXRpbHMuZm9ybWF0TnVtYmVyKENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpKSk7XHJcblxyXG4gICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtsdn1fc2tlYDtcclxuICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7bHZ9X3RleGA7XHJcbiAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGlja2J1eScpO1xyXG4gICAgICAgIGNoaWNrLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcclxuICAgICAgICBjaGljay5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgY2hpY2suYXJtYXR1cmVOYW1lID0gJ0FybWF0dXJlJztcclxuICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XHJcbiAgICB9XHJcbiAgICAvLzAgY29pbiAxIGdlbSAyIGFkIDPmma7pgJrmjonokL0gNOWwj+eyvueBteaOieiQvVxyXG4gICAgcHVibGljIGJ1eUNoaWNrKGx2Om51bWJlcixidXl0eXBlOm51bWJlcikge1xyXG4gICAgICAgIHZhciBpdGVtOiBDaGlja0l0ZW0gPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2xvdHNbaV0gPT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXS5kYXRhY29weSAmJiB0aGlzLmF1dG9jb21pbmRleHNbMF0gIT0gaSAmJiB0aGlzLmF1dG9jb21pbmRleHNbMV0gIT0gaSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWx2KSB7XHJcbiAgICAgICAgICAgIGx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzO1xyXG4gICAgICAgICAgICBpZihsdjwxKWx2ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChidXl0eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdik7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdikgPiBDaGlja0RhdGEudXNlci5jb2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzIDwgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdG90YWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihDaGlja0RhdGEudXNlci50b2RheV9nZXRjb2luX3RpbWVzIDwgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90b3RhbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0NvaW5Ob3RFbm91Z2hcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoQ29pbk5vdEVub3VnaFVJKS5zZXRWaWV3VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLph5HluaPkuI3otrNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gLT0gY29zdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidXl0eXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBnZW0gPSBNYXRoLm1pbig1LCBOdW1iZXIoQ29uZmlnX2NoaWNrW2x2IC0gMV1bNl0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChnZW0gPiBDaGlja0RhdGEudXNlci5nZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNc2dUb2FzdC5zaG93KFwi6ZK755+z5LiN6LazXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmdlbSAtPSBnZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihidXl0eXBlID09IDIpe1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidXl0eXBlID49IDMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6aOe5py65o6J6JC9XCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiZmxvd2VyX3BvdF9sYW5kXCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VIYW5kbGUobnVsbCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0SXRlbURhdGEoQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2soaXRlbS5pbmRleCwgbHYpIGFzIFBsYW50SW5mbyxidXl0eXBlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXlCdXR0b24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChidXl0eXBlIDw9IDIpIHtcclxuICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLkvY3nva7kuI3lpKDllabvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4yNSksY2MuZmFkZVRvKDAuMjUsMCkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvc2VUaXAoKXtcclxuICAgICAgICB0aGlzLnRvdWNoZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICBpZiAodGhpcy5iUGF1c2VBdXRvQ29tIHx8IHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5iSW5BdXRvQ29tKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXSB8fCAhdGhpcy5pdGVtc1tpXS5kYXRhY29weSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLml0ZW1zLmxlbmd0aCA7ICsraikge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tqXSB8fCAhdGhpcy5pdGVtc1tqXS5kYXRhY29weSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2ID09IHRoaXMuaXRlbXNbal0uZGF0YWNvcHkubHYgJiYgdGhpcy5pdGVtc1tpXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbal0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2IDwgNjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4MSA9IHRoaXMuaXRlbXNbaV0uaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleDIgPSB0aGlzLml0ZW1zW2pdLmluZGV4XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcDAgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKS5jaGlsZHJlbltpbmRleDFdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcDEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKS5jaGlsZHJlbltpbmRleDJdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnBvc2l0aW9uID0gcDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygxLGNjLnYyKHAxLngscDEueSkpLGNjLm1vdmVUbygwLjEsY2MudjIocDAueCxwMC55KSkpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiY2xpY2tcIik7XHJcbiAgICAgICAgc3dpdGNoIChidG5OYW1lKSB7XHJcblx0XHRcdGNhc2UgXCJidG5fc2V0dGluZ1wiOlxyXG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1NldHRpbmdVSVwiKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRuX3NpZ25cIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9TaWduVUlcIilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImJ0bl9idXlcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5Q2hpY2sobnVsbCwwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzBcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5ndWlkZUluZGV4ID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlVGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5ndWlkZUluZGV4ID09IDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb3NlVGlwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidF9mYXN0X2dlblwiOlxyXG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0FkTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG5cdFx0XHRcdFx0bm9kZS5nZXRDb21wb25lbnQoQ29tbW9uVmlldykuc2V0VHlwZShFQURMQVlFUi5EUk9QX1BMQU5UKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidG5fYW5ncnlcIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuXHRcdFx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KENvbW1vblZpZXcpLnNldFR5cGUoRUFETEFZRVIuRE9VQkxFX0FUVClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRuX2RvdWJsZV9jb2luXCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChDb21tb25WaWV3KS5zZXRUeXBlKEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImJ0X2F1dG9fbWVyZ2VcIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuXHRcdFx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KENvbW1vblZpZXcpLnNldFR5cGUoRUFETEFZRVIuQVVUT19DT00pXHJcblx0XHRcdFx0fSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3Nob3BcIjpcclxuICAgICAgICAgICAgICAgU2hvcFZpZXcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fZGVsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLm9wYWNpdHkgPT0gMjU1KVxyXG4gICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIuaLluWLleWIsOmAmeijj+izo+WHulwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5faW52aWF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgLy8gV3hDZW50ZXIuc2hhcmVBcHBNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0ludml0YXRpb25DbGljaycsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9TaGFyZUxheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChTaGFyZUxheWVyKS5zZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0bkZyZWVBZCc6XHJcbiAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Nb250aENhcmRVSVwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fUmVjb3JkZXJcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJSZWNvcmRlciA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuW8gOWni+W9leWxj1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJSZWNvcmRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZGVyID0gd2luZG93W1widHRcIl0uZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRlci5zdGFydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi57uT5p2f5b2V5bGPXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iUmVjb3JkZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSB3aW5kb3dbXCJ0dFwiXS5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuIl19