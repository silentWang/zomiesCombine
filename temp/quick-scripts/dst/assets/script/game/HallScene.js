
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
                MsgToast_1.default.show("分享失败");
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
                if (tmp <= 2) {
                    MsgToast_1.default.show("小鸡数量过少不能删除");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }
                if (this.item_drag.datacopy.lv >= ChickData_1.default.user.getLvlMax()) {
                    MsgToast_1.default.show("最高等级小鸡就不删除了吧！");
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
            AudioMgr_1.default.Instance().playMX("flower_pot_land");
            this.composeHandle(null);
            item.setItemData(ChickData_1.default.user.buyChick(item.index, lv), buytype);
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
    HallScene.prototype.SEaw_xxxx_fun = function () { console.log("CBdm4nadpBtrd6wp"); };
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
                    MsgToast_1.default.show("拖动到这里卖出");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9IYWxsU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1QyxrREFBNkM7QUFDN0MsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUN6Qyx3Q0FBbUM7QUFDbkMsbUNBQW1FO0FBQ25FLGtEQUFnSjtBQUNoSixnREFBNEM7QUFDNUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUV6QywwREFBcUQ7QUFDckQsOENBQXlDO0FBQ3pDLDRDQUF1QztBQUN2QywyQ0FBc0M7QUFDdEMseUNBQW9DO0FBRXBDLDREQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQTA3QkM7UUF4N0JHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFTbkIsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbkIsZUFBUyxHQUFhLEVBQUUsQ0FBQztRQUN4QixlQUFTLEdBQU8sSUFBSSxDQUFDO1FBZ0ZyQixXQUFLLEdBQUcsS0FBSyxDQUFDO1FBbUVkLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBK0R4QixVQUFJLEdBQWEsRUFBRSxDQUFDO1FBRTlCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFDNUIsbUJBQWEsR0FBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEIsV0FBSyxHQUFxQixFQUFFLENBQUM7UUFxQnJDLG1CQUFhLEdBQVksS0FBSyxDQUFDLENBQUMsVUFBVTtRQUM3QyxnQkFBVSxHQUFZLEtBQUssQ0FBQyxDQUFLLFlBQVk7UUFxSzFDLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQVksR0FBRyxDQUFD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QyxJQUFJLENBQUMsRUFBRTt3QkFDZCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzt3QkFDdkQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNuQjtpQkFDSjtnQkFDRCxNQUFNO1NBQ2I7SUFDTCxDQUFDOztJQW43Qk0sbUJBQVMsR0FBRyxJQUFJLENBQUM7SUFGeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDTztJQTJkM0I7UUFERixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDYTtJQTdkYixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMDdCN0I7SUFBRCxnQkFBQztDQTE3QkQsQUEwN0JDLENBMTdCc0MsZ0JBQU0sR0EwN0I1QztrQkExN0JvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vZnJhbXdvcmsvQmFzZVVJXCI7XG5pbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XG5pbXBvcnQgQ2hpY2tEYXRhIGZyb20gXCIuLi9tYW5hZ2VyL0NoaWNrRGF0YVwiO1xuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uL3V0aWxzL0F1ZGlvTWdyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgeyBVc2VyX2xldmVsLCBDb25maWdfY2hpY2ssIENvbmZpZ19ncm91bmQgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBDb21tb25WaWV3LCB7IE1BWF9ET1VCTEVfQVRUX1RJTUUsIE1BWF9ET1VCTEVfSU5DT01FX1RJTUUsIE1BWF9BVVRPX0NPTV9USU1FLCBNQVhfRFJPUF9QTEFOVF9USU1FLCBFQURMQVlFUiB9IGZyb20gXCIuL3ByZWZhYi9Db21tb25WaWV3XCI7XG5pbXBvcnQgU2hhcmVMYXllciBmcm9tIFwiLi9wcmVmYWIvU2hhcmVWaWV3XCI7XG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4vcHJlZmFiL0VuZW15XCI7XG5pbXBvcnQgRmFpbFZpZXcgZnJvbSBcIi4vcHJlZmFiL0ZhaWxWaWV3XCI7XG5pbXBvcnQgUmVjb3JkVmlldyBmcm9tIFwiLi9wcmVmYWIvUmVjb3JkVmlld1wiO1xuaW1wb3J0IE9mZmxpbmVBd2FyZFVJIGZyb20gXCIuL3ByZWZhYi9PZmZsaW5lQXdhcmRVSVwiO1xuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL3ByZWZhYi9TaG9wVmlld1wiO1xuaW1wb3J0IFdpblZpZXcgZnJvbSBcIi4vcHJlZmFiL1dpblZpZXdcIjtcbmltcG9ydCBHcm91bmRJdGVtIGZyb20gXCIuL0dyb3VuZEl0ZW1cIjtcbmltcG9ydCBDaGlja0l0ZW0gZnJvbSBcIi4vQ2hpY2tJdGVtXCI7XG5pbXBvcnQgeyBQbGFudEluZm8gfSBmcm9tIFwiLi9Vc2VyTW9kZWxcIjtcbmltcG9ydCBDb2luTm90RW5vdWdoVUkgZnJvbSBcIi4vcHJlZmFiL0NvaW5Ob3RFbm91Z2hVSVwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsU2NlbmUgZXh0ZW5kcyBCYXNlVUkge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZW5lbXlfcHJlOmNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcblxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTpIYWxsU2NlbmVcbiAgICB7XG4gICAgICAgIHJldHVybiBIYWxsU2NlbmUuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xhc3Rkcm9wdGltZSA9IDA7XG4gICAgcHVibGljIGVuZW15bGlzdDpjYy5Ob2RlW10gPSBbXTtcbiAgICBwcml2YXRlIHdhdmVfaW5mbzphbnkgPSBudWxsO1xuXG4gICAgaGlkQ29tcG9zZVRpcHMoKVxuICAgIHtcbiAgICAgICAgbGV0IHNsb3RzID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIik7Ly9meF9ncm91bmRfbWVyZ2VcbiAgICAgICAgZm9yKHZhciBzbG90IG9mIHNsb3RzLmNoaWxkcmVuKVxuICAgICAgICB7XG4gICAgICAgICAgICBzbG90LmdldENoaWxkQnlOYW1lKFwiZnhfZ3JvdW5kX21lcmdlXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0NvbXBvc2V0aXBzKGx2Om51bWJlcilcbiAgICB7XG4gICAgICAgIGxldCBpbmRleHMgPSBbXTtcbiAgICAgICAgZm9yKHZhciBpdGVtIG9mIHRoaXMuaXRlbXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGl0ZW0uZGF0YWNvcHkgJiYgaXRlbS5kYXRhY29weS5sdiA9PSBsdiAmJiBpdGVtLmRyb3B0eXBlID09IDAgJiYgaXRlbS5kYXRhY29weS5sdjw2MClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmRleHMucHVzaChpdGVtLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTsvL2Z4X2dyb3VuZF9tZXJnZVxuICAgICAgICBmb3IodmFyIGkgPSAwO2k8c2xvdHMuY2hpbGRyZW4ubGVuZ3RoOysraSlcbiAgICAgICAge1xuICAgICAgICAgICAgc2xvdHMuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJmeF9ncm91bmRfbWVyZ2VcIikuYWN0aXZlID0gaW5kZXhzLmluZGV4T2YoaSkgPj0wO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoZHQpXG5cdHtcbiAgICAgICAgaWYoZHQ+MSlkdD0xO1xuXHRcdHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKENoaWNrRGF0YS51c2VyLmNvaW4pK1wiXCIpO1xuICAgICAgICAvLyBpZih0aGlzLnJlY29yZGVydGltZSAhPSAwKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBsZXQgcyA9IE1hdGguZmxvb3IoKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMucmVjb3JkZXJ0aW1lKS8xMDAwKTtcbiAgICAgICAgLy8gICAgIGlmKHM+MCl0aGlzLlNldFRleHQoXCJsYmxfbHVwaW5nXCIscytcInNcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgLy8gICAgIHRoaXMuU2V0VGV4dChcImxibF9sdXBpbmdcIixcIlwiKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8veeaOkuW6j1xuICAgICAgICB0aGlzLmVuZW15bGlzdC5zb3J0KChhLGIpPT57XG4gICAgICAgICAgICByZXR1cm4gYi55IC0gYS55O1xuICAgICAgICB9KVxuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aTx0aGlzLmVuZW15bGlzdC5sZW5ndGg7KytpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmVuZW15bGlzdFtpXS56SW5kZXggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdGRyb3B0aW1lICs9IGR0O1xuICAgICAgICBpZih0aGlzLl9sYXN0ZHJvcHRpbWUgPiAyNSAqIChDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk/LjM6MSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5pmu6YCa6Iqx55uG5o6J6JC9XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpIHJldHVyblxuICAgICAgICAgICAgbGV0IGx2ID0gTWF0aC5tYXgoMSwgQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSBVdGlscy5nZXRSYW5kb21JbnQoNiwgOSkpO1xuICAgICAgICAgICAgdGhpcy5idXlDaGljayhsdiwgMylcbiAgICAgICAgICAgIHRoaXMuX2xhc3Rkcm9wdGltZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvL+S4gOauteaXtumXtOS4jeaTjeS9nO+8jOaPkOekuuWPr+S7peWQiOaIkFxuICAgICAgICBpZih0aGlzLnRvdWNoZW5kdGltZSAhPSAwICYmIFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMudG91Y2hlbmR0aW1lID4gNTAwMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb21wb3NlVGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+S4remXtOaYvuekuuWbvueJh1xuICAgIHB1YmxpYyBhc3luYyBzaG93SW1hZ2UoaW1ncGF0aDpzdHJpbmcpXG4gICAge1xuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGltZ3BhdGgsY2MuU3ByaXRlRnJhbWUpIGFzIGNjLlNwcml0ZUZyYW1lO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgbm9kZS55ID0gMjAwO1xuICAgICAgICBub2RlLnNjYWxlID0gMS4yO1xuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMiksY2Muc3Bhd24oY2MubW92ZUJ5KDAuNSwwLDEwMCksY2MuZmFkZVRvKDAuNSwwKSksY2MucmVtb3ZlU2VsZigpKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGJGYWlsID0gZmFsc2U7XG4gICAgZW5lbXlEaWUobm9kZTpjYy5Ob2RlLGJGYWlsOmJvb2xlYW4pXG4gICAge1xuICAgICAgICBsZXQgaXNTdG9wID0gZmFsc2U7XG4gICAgICAgIGxldCBpc0NoYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZihiRmFpbCkgdGhpcy5iRmFpbCA9IHRydWU7XG4gICAgICAgIGZvcih2YXIgaSA9IHRoaXMuZW5lbXlsaXN0Lmxlbmd0aC0xO2k+PTA7LS1pKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihub2RlID09IHRoaXMuZW5lbXlsaXN0W2ldKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuY3JlYXRlY29tcGxldGUgJiYgdGhpcy5lbmVteWxpc3QubGVuZ3RoID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYkZhaWwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIud2F2ZT49IHRoaXMud2F2ZV9pbmZvWzJdKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIud2F2ZT0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXkpO1xuICAgICAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Mb3NlVUlcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRmFpbFZpZXcpLnNldEluZm8oZW5lbXkuZ2V0Qm9zc01vbmV5KCkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLndhdmUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbWFnZShcInRleHR1cmUvZGVmZWF0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci53YXZlKys7XG4gICAgICAgICAgICAgICAgaXNDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLndhdmUgPiB0aGlzLndhdmVfaW5mb1syXSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteSA9IG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vbmV5ID0gZW5lbXkuZ2V0Qm9zc01vbmV5KCk7XG5cdFx0XHRcdCAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjIpLGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9WaWN0b3J5VUlcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFdpblZpZXcpLnNldEluZm8obW9uZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KSkpXG4gICAgICAgICAgICAgICAgICAgIGlzU3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLndhdmUgPSAxO1xuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5sdisrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5OZXdHcm91bmQoKTtcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBDaGlja0RhdGEudXNlci5sdiArIFwiX1wiICsgQ2hpY2tEYXRhLnVzZXIud2F2ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXZlX2luZm8gPSBVc2VyX2xldmVsW2tleV07XG4gICAgICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZExldmVsUmVwb3J0KENoaWNrRGF0YS51c2VyLmx2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJ3aW5fd2F2ZVwiKVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dJbWFnZShcInRleHR1cmUvc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U2tlQW5pKFwic3BpbmU6b3RoZXIvc2hlbmdqaWNoZW5nZ29uZ1wiLCBcImVmZmVjdFwiLCB0aGlzLm5vZGUsY2MudjMoMCwxNTAsMCksIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGlzU3RvcCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteXMoaXNDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVjb21wbGV0ZSA9IGZhbHNlO1xuICAgIGNyZWF0ZUVuZW15cyhpc0NoYW5nZTpib29sZWFuID0gZmFsc2UpXG4gICAge1xuICAgICAgICB0aGlzLmJGYWlsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3JlYXRlY29tcGxldGUgPSBmYWxzZTtcblxuICAgICAgICBsZXQga2V5ID0gQ2hpY2tEYXRhLnVzZXIubHYgKyBcIl9cIiArIENoaWNrRGF0YS51c2VyLndhdmU7XG4gICAgICAgIHRoaXMud2F2ZV9pbmZvID0gVXNlcl9sZXZlbFtrZXldO1xuXG4gICAgICAgIC8v6YCa5YWz5ZCO5bCx5LiA55u06K+75pyA5ZCO5LiA5YWzXG4gICAgICAgIGlmKCF0aGlzLndhdmVfaW5mbylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGtleSA9IDYwICsgXCJfXCIgKyBDaGlja0RhdGEudXNlci53YXZlO1xuICAgICAgICAgICAgdGhpcy53YXZlX2luZm8gPSBVc2VyX2xldmVsW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlID09IHRoaXMud2F2ZV9pbmZvWzJdKVxuICAgICAgICB7XG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNdXNpYyhcImJnQm9zc1wiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKC44KSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0Jvc3NDb21taW5nVUlcIilcbiAgICAgICAgICAgIH0pKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKENoaWNrRGF0YS51c2VyLndhdmUgPT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TXVzaWMoXCJCR00xXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/liJvlu7rmgKrnialcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgbGV0IG51bSA9IDA7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDtpPHRoaXMud2F2ZV9pbmZvWzRdOysraSlcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLndhdmVfaW5mb1szXSlcbiAgICAgICAgXG4gICAgICAgICAgICBudW0gPSBsaXN0Lmxlbmd0aDtcblxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy53YXZlX2luZm9bNl07KytpKVxuICAgICAgICAgICAgbGlzdC5wdXNoKHRoaXMud2F2ZV9pbmZvWzVdKVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxsaXN0Lmxlbmd0aDsrK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpZCA9IGxpc3RbaV07XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyLjIgKiBpKSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBlID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVteV9wcmUpO1xuICAgICAgICAgICAgICAgIGUucGFyZW50ID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9vYmpcIik7XG4gICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoRW5lbXkpLnNldElEKGlkLGk+PW51bSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteWxpc3QucHVzaChlKTtcbiAgICAgICAgICAgICAgICBpZihpID09IGxpc3QubGVuZ3RoLTEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfSkpKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL+WFs+WNoeS/oeaBr1xuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfY3VyX2x2XCIsQ2hpY2tEYXRhLnVzZXIubHYrXCJcIik7XG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF93YXZlc1wiLENoaWNrRGF0YS51c2VyLndhdmUrXCIvXCIrIHRoaXMud2F2ZV9pbmZvWzJdKTtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3ByZV9sdlwiLChDaGlja0RhdGEudXNlci5sdi0xKStcIlwiKTtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX25leF9sdlwiLChDaGlja0RhdGEudXNlci5sdisxKStcIlwiKTtcbiAgICAgICAgaWYoaXNDaGFuZ2Upe1xuICAgICAgICAgICAgVXRpbHMucGxheUJyZWF0aCh0aGlzLkdldEdhbWVPYmplY3QoJ2xibF93YXZlcycpLDEsMywwLjUsZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBhdGg6Y2MuVmVjM1tdID0gW107XG5cblx0aXRlbV9kcmFnOiBDaGlja0l0ZW0gPSBudWxsO1xuXHRhdXRvY29taW5kZXhzOiBudW1iZXJbXSA9IFstMSwgLTFdO1xuXG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8Q2hpY2tJdGVtPiA9IFtdO1xuICAgIGluaXRDb21wb3NlQ2hpY2tzKCkge1xuICAgICAgICB2YXIgbGlzdCA9IENoaWNrRGF0YS51c2VyLkNvbVBsYW50cztcbiAgICAgICAgXG4gICAgICAgIGxldCBtID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZihsaXN0W2ldLmx2PjYwKWxpc3RbaV0ubHY9NjBcbiAgICAgICAgICAgIGlmKG1bbGlzdFtpXS5pbmRleF0gPT0gMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumUmeivry4uLuS/ruato1wiKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbVtsaXN0W2ldLmluZGV4XSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbbGlzdFtpXS5pbmRleF0pXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tsaXN0W2ldLmluZGV4XS5zZXRJdGVtRGF0YShsaXN0W2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBiUGF1c2VBdXRvQ29tOiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm5pqC5YGc6Ieq5Yqo5ZCI5oiQXG5cdGJJbkF1dG9Db206IGJvb2xlYW4gPSBmYWxzZTsgICAgIC8v5piv5ZCm5q2j5Zyo6Ieq5Yqo5ZCI5oiQ5Yqo55S7XG5cdFxuXHRnZXRJdGVtQnlQb3MocG9zOiBjYy5WZWMyKTogQ2hpY2tJdGVtIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMocG9zKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2ldLm5vZGUuZ2V0Q29tcG9uZW50KENoaWNrSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cdHNldERyYWdQb3MocG9zKSB7XG4gICAgICAgIHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpO1xuICAgICAgICBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wb3NpdGlvbiA9IHBvcztcbiAgICB9XG5cdFxuXHRhc3luYyBzdGFydCgpXG5cdHtcbiAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdIb21lU2hvdycsJ3Nob3cnKTtcbiAgICAgICAgdGhpcy5oaWRDb21wb3NlVGlwcygpO1xuICAgICAgICBIYWxsU2NlbmUuX2luc3RhbmNlID0gdGhpcztcblx0XHRsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTtcblx0XHRsZXQgaSA9IDA7XG5cdFx0Zm9yKHZhciBzbG90IG9mIHNsb3RzLmNoaWxkcmVuKXtcblx0XHRcdHNsb3QuZ2V0Q29tcG9uZW50KEdyb3VuZEl0ZW0pLnNldEluZGV4KCsraSk7XG5cdFx0fVxuICAgICAgICBhd2FpdCB0aGlzLmluaXRWaWV3KCk7XG5cblx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b0NvbXBvc2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSkgcmV0dXJuXG4gICAgICAgICAgICAvLyDlsI/nsr7ngbXmjonokL1cbiAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzLmxlbmd0aD4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgbGV0IGI9IHRoaXMuYnV5Q2hpY2soQ2hpY2tEYXRhLnVzZXIuRHJvcEdpZnRQdHNbMF0sNCk7XG4gICAgICAgICAgICAgICBpZihiKVxuICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIC8vICDlub/lkYrotK3kubDmiJDlip/vvIzlm6DkuLrmsqHmnInnqbrkvY3mnKrmiJDlip/mt7vliqBcbiAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuQWRCdXlOb3REcm9wLmxlbmd0aD4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgbGV0IGI9IHRoaXMuYnV5Q2hpY2soQ2hpY2tEYXRhLnVzZXIuQWRCdXlOb3REcm9wWzBdLDIpO1xuICAgICAgICAgICAgICAgaWYoYilcbiAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5BZEJ1eU5vdERyb3Auc2hpZnQoKTtcbiAgICAgICAgICAgIH1cblxuXHRcdH0pKS5yZXBlYXRGb3JldmVyKCkpXG4gICAgICAgIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBNYXRoLm1heCgwLENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUpO1xuICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPSBNYXRoLm1heCgwLENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSk7XG4gICAgICAgIENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA9IE1hdGgubWF4KDAsQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lKTtcbiAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lID0gTWF0aC5tYXgoMCxDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1eUJ1dHRvbigpO1xuXG4gICAgICAgICAvL+emu+e6v+WlluWKsSzmmoLml7blj6rnu5k25bCP5pe255qEXG4gICAgICAgICBsZXQgc3RpbWUgPSBDaGlja0RhdGEudXNlci5zZXJ2ZXJUaW1lOyAgICBcbiAgICAgICAgIHZhciB0ID0gKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHN0aW1lKSAvIDEwMDA7XG4gICAgICAgICBpZiAoc3RpbWUgIT0gMCAmJiB0ID4gMyo2MCkge1xuICAgICAgICAgICAgIHZhciB0ID0gTWF0aC5taW4oNzIwMCAqIDMsIHQpO1xuICAgICAgICAgICAgIHZhciBtb25leSA9IENoaWNrRGF0YS51c2VyLmdldE9mZmxpbmVSZXdhcmQodC82MCk7XG4gICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoJ3ByZWZhYi9PZmZsaW5lQXdhcmRVSScsIG51bGwsICh1aSkgPT4ge1xuICAgICAgICAgICAgICAgICB1aS5nZXRDb21wb25lbnQoT2ZmbGluZUF3YXJkVUkpLmRhdGEgPSBtb25leTtcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgfVxuXG4gICAgICAgIGZvcih2YXIgYyBvZiB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX3BhdGhcIikuY2hpbGRyZW4pXG4gICAgICAgICAgICB0aGlzLnBhdGgucHVzaChjLnBvc2l0aW9uKVxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgzKSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteXMoKTtcbiAgICAgICAgfSkpKVxuXG5cdFx0Ly/mm7TmlrDlkITnp43ml7bpl7RcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYm90dG9tXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSggY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlzWDJJbiA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IDA7XG4gICAgICAgICAgICBsZXQgaXNJbkRiID0gQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMDtcbiAgICAgICAgICAgIGxldCBpc0RwSW4gPSBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwO1xuXG4gICAgICAgICAgICAvL+agoemqjOaXtumXtFxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9ET1VCTEVfQVRUX1RJTUUgKiA2MCAqIDEwMDApIHtcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gTUFYX0RPVUJMRV9JTkNPTUVfVElNRSAqIDYwICogMTAwMCkge1xuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gTUFYX0FVVE9fQ09NX1RJTUUgKiA2MCAqIDEwMDApIHtcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9EUk9QX1BMQU5UX1RJTUUgKiA2MCAqIDEwMDApIHtcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJyZWF0aEFuZ3J5KGlzWDJJbik7XG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJhdHRfeDJfdGltZVwiLCBpc1gySW4gPyBVdGlscy5nZXRUaW1lU3RyQnlTKChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkgOiAn5omT6bih6KGAJyk7XG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJyZXdhcmR4Ml90aW1lXCIsIGlzSW5EYiA/IFV0aWxzLmdldFRpbWVTdHJCeVMoKENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkgLyAxMDAwKSA6ICflj4zlgI0nKTtcbiAgICAgICAgICAgIGlmKCBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNldFRleHQoXCJhdXRvX3RpbWVcIiwgVXRpbHMuZ2V0VGltZVN0ckJ5UygoQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkgLyAxMDAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwiYXV0b190aW1lXCIsIFwi6Ieq5Yqo5ZCI5oiQXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2Ryb3BfcGxhbnRcIixpc0RwSW4gPyBVdGlscy5nZXRUaW1lU3RyQnlTKChDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkgOiAn5o6J6JC9Jyk7XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9idF9hbmdyeVwiKS5hY3RpdmUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJhdHRfeDJfdGltZVwiKS5hY3RpdmU7XG4gICAgICAgICAgICAvLyBpZihEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpPDApXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRTcHJpdGUoXCJidF9mYXN0X2dlbl9wcm9jZXNzX2l0ZW1cIikuZmlsbFJhbmdlID0gMDtcbiAgICAgICAgICAgIC8vIGVsc2VcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkdldFNwcml0ZShcImJ0X2Zhc3RfZ2VuX3Byb2Nlc3NfaXRlbVwiKS5maWxsUmFuZ2UgPSAoIChEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKS8xMDAwLzYwKS9NQVhfRFJPUF9QTEFOVF9USU1FOy8vIChtYXhfZHJvcF9wbGFudCAqIDYwIC0gKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLzEwMDApIC9tYXhfZHJvcF9wbGFudCAqIDYwXG5cbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgICAgIC8vIFRhc2tMYXllci5jaGVja1Rhc2soKTsvL+S7u+WKoeajgOa1i1xuICAgICAgICAgICAgLy8gaWYgKEdhbWVNYW5hZ2VyLkluc3RhbmNlKCkuaXNHdWlkZSA9PSBmYWxzZSlcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fYXV0b1wiKS5hY3RpdmUgPSBEYXRhLnVzZXIuZ3VpZGVJbmRleCA+IDI7XG4gICAgICAgICAgICAvLyBEYXRhLnVzZXIuY2hlY2tOZXdUb2R5KCk7XG5cdFx0fSksY2MuZGVsYXlUaW1lKDEpKS5yZXBlYXRGb3JldmVyKCkpO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8wXCIpLmFjdGl2ZSA9IENoaWNrRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMDtcblxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwic3VwZXJtYXJrZXRcIikpXG4gICAgICAgIC8vICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJzdXBlcm1hcmtldFwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC4zLCAyMCksIGNjLnJvdGF0ZVRvKDAuMywgLTEwKSwgY2Mucm90YXRlVG8oMC4yLCAwKSwgY2MuZGVsYXlUaW1lKDIpKS5yZXBlYXRGb3JldmVyKCkpO1xuXG5cbiAgICAgICAgLy8gaWYgKHRoaXMuR2V0R2FtZU9iamVjdChcInBvd2VybWFuXCIpKVxuICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwicG93ZXJtYW5cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMywgMjApLCBjYy5yb3RhdGVUbygwLjMsIC0xMCksIGNjLnJvdGF0ZVRvKDAuMiwgMCksIGNjLmRlbGF5VGltZSgzKSkucmVwZWF0Rm9yZXZlcigpKTtcblxuICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2ludmlhdGVcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMywgMjApLCBjYy5yb3RhdGVUbygwLjMsIC0xMCksIGNjLnJvdGF0ZVRvKDAuMiwgMCksIGNjLmRlbGF5VGltZSgzKSkucmVwZWF0Rm9yZXZlcigpKTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibHVwaW5fZ2VtXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMykpLnJlcGVhdEZvcmV2ZXIoKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1JlY29yZGVyXCIpKSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuYWN0aXZlID0gd2luZG93W1widHRcIl07XG4gICAgICAgIC8vIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xuICAgICAgICAvLyAgICAgY29uc3QgcmVjb3JkZXIgPSB3aW5kb3dbXCJ0dFwiXS5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XG4gICAgICAgIC8vICAgICByZWNvcmRlci5vblN0YXJ0KHJlcyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibHVwaW5fZ2VtXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9WQ1JcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2VuZFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjUsIC45KSwgY2Muc2NhbGVUbygwLjUsIDEpKS5yZXBlYXRGb3JldmVyKCkpO1xuICAgICAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0dOW9leWxj+W8gOWni1wiKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJlY29yZGVydGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgLy8gICAgIH0pO1xuXG4gICAgICAgIC8vICAgICByZWNvcmRlci5vblN0b3AocmVzID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJSZWNvcmRlciA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImx1cGluX2dlbVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zY2FsZSA9IDE7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1ZDUlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9lbmRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0dOW9leWxj+e7k+adn1wiKTtcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMudmlkZW9QYXRoKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gdGhpcy5yZWNvcmRlcnRpbWUgPCAzMDAwKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIE1zZ0hpbnRzLnNob3coXCLlvZXlsY/ml7bpl7Tov4fnn61cIik7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gMFxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICAgICAgfVxuXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yZWNvcmRlcnRpbWUgPSAwXG4gICAgICAgIC8vICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTHVQaW5SZXN1bHRcIiwgbnVsbCwgKG5vZGU6IGNjLk5vZGUpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoUmVjb3JkVmlldykuc2V0RGF0YShyZXMpO1xuICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgdGhpcy5vbkdhbWVTaG93LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMub25HYW1lSGlkZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgYlJlY29yZGVyID0gZmFsc2U7XG4gICAgcmVjb3JkZXJ0aW1lID0gMDtcbiAgICBvbkdhbWVIaWRlKCkge1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9TSE9XLCB0aGlzLm9uR2FtZVNob3cpO1xuICAgICAgICBjYy5nYW1lLm9mZihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMub25HYW1lSGlkZSk7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uR2FtZVNob3coKSB7XG4gICAgICAgIGlmIChVdGlscy5zaGFyZXRpbWUgIT0gMCAmJiBVdGlscy5zaGFyZWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gVXRpbHMuc2hhcmV0aW1lID49IDIwMDApIHtcbiAgICAgICAgICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrKHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5YiG5Lqr5aSx6LSlXCIpO1xuICAgICAgICAgICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2soZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBVdGlscy5zaGFyZXRpbWUgPSAwO1xuICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG5cbiAgICBvcGVuTmV3R3JvdW5kKCl7XG4gICAgICAgIGxldCBjdXJvcGVuID0gR3JvdW5kSXRlbS5nZXROZWVkT3BlbigpO1xuICAgICAgICBpZihjdXJvcGVuIDwgMCkgcmV0dXJuO1xuICAgICAgICBsZXQgbHYgPSBDb25maWdfZ3JvdW5kW2N1cm9wZW5dLnByaWNlO1xuICAgICAgICBpZihsdiA8IENoaWNrRGF0YS51c2VyLmx2KSByZXR1cm47XG4gICAgICAgIENoaWNrRGF0YS51c2VyLnNsb3RzW2N1cm9wZW5dID0gMTtcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcbiAgICAgICAgbGV0IHNsb3RzID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIik7XG4gICAgICAgIGxldCBzbG90ID0gc2xvdHMuY2hpbGRyZW5bY3Vyb3Blbl07XG4gICAgICAgIGlmKHNsb3Qpe1xuICAgICAgICAgICAgc2xvdC5nZXRDb21wb25lbnQoR3JvdW5kSXRlbSkuc2V0SW5kZXgoY3Vyb3Blbik7XG4gICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5oiQ5Yqf6Kej6ZSB5paw5L2N572uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0luQW5ncnkgPSBmYWxzZTtcbiAgICBwdWJsaWMgYnJlYXRoQW5ncnkoaXNib29sOmJvb2xlYW4pe1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuR2V0R2FtZU9iamVjdCgnYnRuX2FuZ3J5JylcbiAgICAgICAgaWYoIW5vZGUpIHJldHVybjtcbiAgICAgICAgaWYoaXNib29sKSB7XG4gICAgICAgICAgICBpZih0aGlzLmlzSW5BbmdyeSl7XG4gICAgICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGVYID0gMTtcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlWSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzSW5BbmdyeSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaXNJbkFuZ3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNJbkFuZ3J5ID0gdHJ1ZTtcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEwKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgVXRpbHMucGxheUJyZWF0aChub2RlKS5zZXRUYWcoMik7XG4gICAgICAgIH0pKS5yZXBlYXQoMSkpLnNldFRhZygxKVxuICAgIH1cblxuXHRAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZV9zb2xkaWVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIGFzeW5jIGluaXRWaWV3KCkge1xuICAgICAgXG4gICAgICAgIHZhciBub2RlX2NvbSA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7ICsraSkge1xuXHRcdFx0dmFyIG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZV9zb2xkaWVyKTtcblx0XHRcdG5vZGUucGFyZW50ID0gbm9kZV9jb207XG5cdFx0XHRub2RlLnBvc2l0aW9uID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baV0ucG9zaXRpb247Ly8gY2MudjIoeCwgeSk7XG5cdFx0XHRub2RlLm5hbWUgPSBcIml0bWVcIiArIGluZGV4O1xuXHRcdFx0dmFyIHBsYW50OiBDaGlja0l0ZW0gPSBub2RlLmdldENvbXBvbmVudChDaGlja0l0ZW0pO1xuXHRcdFx0cGxhbnQuaW5kZXggPSBpbmRleDtcblx0XHRcdHRoaXMuaXRlbXMucHVzaChwbGFudCk7XG5cdFx0XHQrK2luZGV4XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbm9kZV9kcmFnID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVfc29sZGllcik7XG4gICAgICAgIG5vZGVfZHJhZy5wYXJlbnQgPSBub2RlX2NvbS5wYXJlbnQ7XG4gICAgICAgIG5vZGVfZHJhZy5uYW1lID0gXCJpdGVtX2RyYWdcIjtcbiAgICAgICAgbm9kZV9kcmFnLnggPSAtMTAwMDtcblxuICAgICAgICB0aGlzLml0ZW1fZHJhZyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5nZXRDb21wb25lbnQoQ2hpY2tJdGVtKTtcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcuYkRyYWcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaW5pdENvbXBvc2VDaGlja3MoKTtcblxuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYlBhdXNlQXV0b0NvbSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgLy8gY2MubG9nKFwi5pqC5YGc6Ieq5Yqo5ZCI5oiQXCIpXG5cbiAgICAgICAgICAgIC8v5aaC5p6c5Zyo6Ieq5Yqo5ZCI5oiQ5Lit77yM5Y+W5raI5b2T5YmN5ZCI5oiQXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgJiYgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWPlua2iOW9k+WJjeWQiOaIkFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHBvcyA9IG5vZGVfY29tLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5UG9zKHBvcyk7XG5cbiAgICAgICAgICAgIGlmKGl0ZW0gJiYgaXRlbS5kcm9wdHlwZSAhPSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGl0ZW0uZHJvcHR5cGUgPSAwO1xuICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlSXRlbSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLmRhdGFjb3B5ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoUG9zID0gcG9zO1xuICAgICAgICAgICAgICAgIHRoaXMuYkNob29zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RHJhZ1BvcyhpdGVtLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmluZGV4ID0gaXRlbS5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5zZXRJdGVtRGF0YShpdGVtLmRhdGFjb3B5KTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IGl0ZW07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wb3NldGlwcyhpdGVtLmRhdGFjb3B5Lmx2KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgdmFyIHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHBvcyA9IG5vZGVfY29tLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5iQ2hvb3NlZCAmJiBwb3Muc3ViKHRoaXMudG91Y2hQb3MpLm1hZygpID4gMTUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikub3BhY2l0eSA9IDI1NTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YShudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERyYWdQb3MocG9zKTtcblxuICAgICAgICAgICAgICAgIHZhciBwb3MxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBwb3MxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczEpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChlLmdldExvY2F0aW9uKCkuc3ViKGNjLnYyKHBvczEueCxwb3MxLnkpKS5tYWcoKSA8IDEwMCkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnNjYWxlID0gMC41NTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY29tcG9zZUhhbmRsZSwgdGhpcyk7XG4gICAgICAgIG5vZGVfY29tLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5jb21wb3NlSGFuZGxlLCB0aGlzKTtcbiAgICB9XG5cblx0YkNob29zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0b3VjaFBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcblx0XG4gICAgc3RhcnRBdXRvQ29tcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYlBhdXNlQXV0b0NvbSB8fCB0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcbiAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSA8IENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgJiYgIXRoaXMuYkluQXV0b0NvbSkge1xuICAgICAgICAgICAgdGhpcy5pbml0Q29tcG9zZUNoaWNrcygpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoIDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2ldIHx8ICF0aGlzLml0ZW1zW2ldLmRhdGFjb3B5KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLml0ZW1zLmxlbmd0aCA7ICsraikge1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbal0gfHwgIXRoaXMuaXRlbXNbal0uZGF0YWNvcHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iSW5BdXRvQ29tKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2ID09IHRoaXMuaXRlbXNbal0uZGF0YWNvcHkubHYgJiYgdGhpcy5pdGVtc1tpXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbal0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2PDYwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSB0aGlzLml0ZW1zW2ldLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gdGhpcy5pdGVtc1tqXS5pbmRleDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSB0aGlzLml0ZW1zW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuaW5kZXggPSB0aGlzLml0ZW1zW2pdLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuc2V0SXRlbURhdGEodGhpcy5pdGVtc1tqXS5kYXRhY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2pdLnNldEl0ZW1EYXRhKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5wb3NpdGlvbiA9IHRoaXMuaXRlbXNbal0ubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RHJhZ1Bvcyh0aGlzLml0ZW1zW2pdLm5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuaXRlbXNbaV0ubm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldHBvcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuW8gOWni+iHquWKqOWQiOaIkFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iSW5BdXRvQ29tID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjEzLCBjYy52Mih0YXJnZXRwb3MueCx0YXJnZXRwb3MueSkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29tcEVmZih0aGlzLml0ZW1zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLoh6rliqjlkIjmiJDnu5PmnZ9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iSW5BdXRvQ29tID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoZW5kdGltZSA9IDA7XG4gICAgY29tcG9zZUhhbmRsZShlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIHRoaXMudG91Y2hlbmR0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICB0aGlzLmhpZENvbXBvc2VUaXBzKCk7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMjUpLGNjLmZhZGVUbygwLjI1LDApKSlcblxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJQYXVzZUF1dG9Db20gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYkluQXV0b0NvbSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gY2MubG9nKFwi5oGi5aSN6Ieq5Yqo5ZCI5oiQXCIpXG4gICAgICAgIH0pKSlcbiAgICAgICAgdGhpcy5iQ2hvb3NlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgcG9zID0gZSA/IGUuZ2V0TG9jYXRpb24oKSA6IGNjLlZlYzIuWkVSTztcblxuICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+WIoOmZpFxuICAgICAgICAgICAgdmFyIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBvc2l0aW9uO1xuICAgICAgICAgICAgcG9zMSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MxKTtcbiAgICAgICAgICAgIGlmIChwb3Muc3ViKGNjLnYyKHBvczEueCxwb3MxLnkpKS5tYWcoKSA8IDEwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zY2FsZSA9IDAuNTtcbiAgICAgICAgICAgICAgICB2YXIgdG1wOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5kYXRhY29weSkgdG1wKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRtcCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLlsI/puKHmlbDph4/ov4flsJHkuI3og73liKDpmaRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5Lmx2ID49IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLmnIDpq5jnrYnnuqflsI/puKHlsLHkuI3liKDpmaTkuoblkKfvvIFcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudXBkYXRlU2VsbENoaWNrQ29pbih0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEobnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVSZWNydWl0bWVudCgpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChHYW1lU2NlbmUuSW5zdGFuY2UoKS5mcHMgPiAzMClcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZS91aS95aW5saWFuZ3plbmdqaWFcIiwgXCJlZmZlY3RcIiwgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKSwgY2MudjIoMCwgMjApLCAxKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/lkIjmiJAg56e75YqoICDkuqTmjaJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICB2YXIgaXRlbTogQ2hpY2tJdGVtID0gdGhpcy5nZXRJdGVtQnlQb3MocG9zKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBDaGlja0RhdGEudXNlci5zbG90c1tpdGVtLmluZGV4XSA9PSAwIHx8IGl0ZW0gPT0gdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gfHwgKGl0ZW0gJiYgaXRlbS5kcm9wdHlwZSAhPSAwKSkge1xuXG4gICAgICAgICAgICAgICAgLy/lj5bmtohcbiAgICAgICAgICAgICAgICBpZih0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSlcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpdGVtLmRhdGFjb3B5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcbiAgICAgICAgICAgICAgICAvL+enu+WKqFxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLm1vdmVFZmYodGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uaW5kZXgsIGl0ZW0uaW5kZXgpO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmRhdGFjb3B5Lm9wZW4gPT0gdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkub3BlbiAmJlxuICAgICAgICAgICAgICAgIGl0ZW0uZGF0YWNvcHkubHYgPT0gdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkubHYgJiYgaXRlbS5kYXRhY29weS5pbmRleCAhPSB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCAmJiBpdGVtLmRyb3B0eXBlID09IDAgJiYgaXRlbS5kYXRhY29weS5sdjw2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbXBFZmYoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xuICAgICAgICAgICAgICAgIC8v5Lqk5o2iXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIubW92ZUVmZih0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5pbmRleCwgaXRlbS5pbmRleCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3RtcDogUGxhbnRJbmZvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtLmRhdGFjb3B5KSk7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEoX3RtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblx0XG4gICAgc2hvd0NvbXBFZmYoaXRlbTogQ2hpY2tJdGVtKSB7XG4gICAgICAgIGxldCBiID0gQ2hpY2tEYXRhLnVzZXIuY29tcG9zZUNoaWNrcyhpdGVtLmluZGV4LCB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCk7XG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmKENoaWNrRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCArKztcbiAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFiKSByZXR1cm47XG4gICAgICAgIGxldCBuZXh0R3VuID0gQ2hpY2tEYXRhLnVzZXIuZ2V0Q2hpY2tJbmZvKGl0ZW0uaW5kZXgpO1xuICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKG5leHRHdW4pO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XG4gICAgICAgIHRoaXMuYXV0b2NvbWluZGV4cyA9IFstMSwgLTFdO1xuXG4gICAgICAgIGxldCB0YXJnZXRwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaXRlbS5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRwb3MpO1xuICAgICAgICB0aGlzLnBsYXlTa2VBbmkoXCJzcGluZTpvdGhlci9lZmZlY3RfaGVjaGVuZ1wiLCBcImVmZmVjdFwiLCB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucGFyZW50LCB0YXJnZXRwb3MuYWRkKGNjLnYzKDAsMjAsMCkpLCAxKTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVCdXlCdXR0b24oKVxuICAgIHtcbiAgICAgICAgbGV0IGx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzO1xuICAgICAgICBpZihsdjwxKWx2ID0gMTtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2J1eV9sdmxcIiwnTFYuJyArIGx2KTtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2J1eV9jb3N0XCIsVXRpbHMuZm9ybWF0TnVtYmVyKENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpKSk7XG5cbiAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTpmbG93ZXIke2x2fV9za2VgO1xuICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7bHZ9X3RleGA7XG4gICAgICAgIGxldCBjaGljayA9IHRoaXMuR2V0RHJhZ29uQW1hdHVyZSgnY2hpY2tidXknKTtcbiAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xuICAgICAgICBjaGljay5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XG4gICAgICAgIGNoaWNrLmFybWF0dXJlTmFtZSA9ICdBcm1hdHVyZSc7XG4gICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcbiAgICB9XG4gICAgLy8wIGNvaW4gMSBnZW0gMiBhZCAz5pmu6YCa5o6J6JC9IDTlsI/nsr7ngbXmjonokL1cbiAgICBwdWJsaWMgYnV5Q2hpY2sobHY6bnVtYmVyLGJ1eXR5cGU6bnVtYmVyKSB7XG4gICAgICAgIHZhciBpdGVtOiBDaGlja0l0ZW0gPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5zbG90c1tpXSA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXS5kYXRhY29weSAmJiB0aGlzLmF1dG9jb21pbmRleHNbMF0gIT0gaSAmJiB0aGlzLmF1dG9jb21pbmRleHNbMV0gIT0gaSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghbHYpIHtcbiAgICAgICAgICAgIGx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzO1xuICAgICAgICAgICAgaWYobHY8MSlsdiA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGJ1eXR5cGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdik7XG4gICAgICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpID4gQ2hpY2tEYXRhLnVzZXIuY29pbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzIDwgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdG90YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihDaGlja0RhdGEudXNlci50b2RheV9nZXRjb2luX3RpbWVzIDwgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90b3RhbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Db2luTm90RW5vdWdoXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChDb2luTm90RW5vdWdoVUkpLnNldFZpZXdUeXBlKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLph5HluIHkuI3otrNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5jb2luIC09IGNvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChidXl0eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2VtID0gTWF0aC5taW4oNSwgTnVtYmVyKENvbmZpZ19jaGlja1tsdiAtIDFdWzZdKSk7XG4gICAgICAgICAgICAgICAgaWYgKGdlbSA+IENoaWNrRGF0YS51c2VyLmdlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNc2dUb2FzdC5zaG93KFwi6ZK755+z5LiN6LazXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmdlbSAtPSBnZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGJ1eXR5cGUgPT0gMil7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJ1eXR5cGUgPj0gMykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6aOe5py65o6J6JC9XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiZmxvd2VyX3BvdF9sYW5kXCIpXG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9zZUhhbmRsZShudWxsKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0SXRlbURhdGEoQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2soaXRlbS5pbmRleCwgbHYpIGFzIFBsYW50SW5mbyxidXl0eXBlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV5QnV0dG9uKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGJ1eXR5cGUgPD0gMikge1xuICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLkvY3nva7kuI3lpJ/llabvvIFcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4yNSksY2MuZmFkZVRvKDAuMjUsMCkpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIHByaXZhdGUgU0Vhd194eHh4X2Z1bigpeyBjb25zb2xlLmxvZyhcIkNCZG00bmFkcEJ0cmQ2d3BcIik7IH1cblxuICAgIHByaXZhdGUgY29tcG9zZVRpcCgpe1xuICAgICAgICB0aGlzLnRvdWNoZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuYlBhdXNlQXV0b0NvbSB8fCB0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmJJbkF1dG9Db20pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaV0gfHwgIXRoaXMuaXRlbXNbaV0uZGF0YWNvcHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuaXRlbXMubGVuZ3RoIDsgKytqKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbal0gfHwgIXRoaXMuaXRlbXNbal0uZGF0YWNvcHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iSW5BdXRvQ29tKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2ID09IHRoaXMuaXRlbXNbal0uZGF0YWNvcHkubHYgJiYgdGhpcy5pdGVtc1tpXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbal0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2ldLmRhdGFjb3B5Lmx2IDwgNjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleDEgPSB0aGlzLml0ZW1zW2ldLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4MiA9IHRoaXMuaXRlbXNbal0uaW5kZXhcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAwID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baW5kZXgxXS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwMSA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpLmNoaWxkcmVuW2luZGV4Ml0ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnBvc2l0aW9uID0gcDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMSxjYy52MihwMS54LHAxLnkpKSxjYy5tb3ZlVG8oMC4xLGNjLnYyKHAwLngscDAueSkpKS5yZXBlYXRGb3JldmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cdG9uVUlDbGlja2VkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TVgoXCJjbGlja1wiKTtcblxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcblx0XHRcdGNhc2UgXCJidG5fc2V0dGluZ1wiOlxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9TZXR0aW5nVUlcIilcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYnRuX3NpZ25cIjpcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2lnblVJXCIpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImJ0bl9idXlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eUNoaWNrKG51bGwsMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5ndWlkZUluZGV4ID09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5ndWlkZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9zZVRpcCgpO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYnRfZmFzdF9nZW5cIjpcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XG5cdFx0XHRcdFx0bm9kZS5nZXRDb21wb25lbnQoQ29tbW9uVmlldykuc2V0VHlwZShFQURMQVlFUi5EUk9QX1BMQU5UKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJidG5fYW5ncnlcIjpcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XG5cdFx0XHRcdFx0bm9kZS5nZXRDb21wb25lbnQoQ29tbW9uVmlldykuc2V0VHlwZShFQURMQVlFUi5ET1VCTEVfQVRUKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJidG5fZG91YmxlX2NvaW5cIjpcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XG5cdFx0XHRcdFx0bm9kZS5nZXRDb21wb25lbnQoQ29tbW9uVmlldykuc2V0VHlwZShFQURMQVlFUi5ET1VCTEVfSU5DT01FKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJidF9hdXRvX21lcmdlXCI6XG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0FkTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xuXHRcdFx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KENvbW1vblZpZXcpLnNldFR5cGUoRUFETEFZRVIuQVVUT19DT00pXG5cdFx0XHRcdH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3Nob3BcIjpcbiAgICAgICAgICAgICAgIFNob3BWaWV3LnNob3coKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fZGVsZXRlXCI6XG4gICAgICAgICAgICAgICAgaWYodGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID09IDI1NSlcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5ouW5Yqo5Yiw6L+Z6YeM5Y2W5Ye6XCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2ludmlhdGVcIjpcbiAgICAgICAgICAgICAgICAvLyBXeENlbnRlci5zaGFyZUFwcE1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICBXeENlbnRlci5hbGRSZXBvcnQoJ0ludml0YXRpb25DbGljaycsJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2hhcmVMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFNoYXJlTGF5ZXIpLnNldERhdGEoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYnRuRnJlZUFkJzpcbiAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Nb250aENhcmRVSVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9SZWNvcmRlclwiOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJSZWNvcmRlciA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLlvIDlp4vlvZXlsY9cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYlJlY29yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRlciA9IHdpbmRvd1tcInR0XCJdLmdldEdhbWVSZWNvcmRlck1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGVyLnN0YXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLnu5PmnZ/lvZXlsY9cIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iUmVjb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRlciA9IHdpbmRvd1tcInR0XCJdLmdldEdhbWVSZWNvcmRlck1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufVxuIl19