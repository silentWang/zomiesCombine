
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
if (window && window['xxxxx'])
    window['xxxxx']("aYDFkt4MzNGJwrR3QZ2amnAF");
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
            if (window && window['xxxxx'])
                window['xxxxx']("asE5tNmAMJ4jn4QDd");
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
        if (window && window['xxxxx'])
            window['xxxxx']("NXGzsRnwSceZCbrfXsjH");
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
            if (window && window['xxxxx'])
                window['xxxxx']("wesePhK2sti2YjXPrsGDcaebt");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("FrKksY6WWmE5DdSemBi");
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
        if (window && window['xxxxx'])
            window['xxxxx']("YC4mJADWn2ExsbPbt");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("2d6cc6kHNNHPMJKQsSyPx");
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
                    if (window && window['xxxxx'])
                        window['xxxxx']("aZdRiB");
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
            if (window && window['xxxxx'])
                window['xxxxx']("ArRzG2WMzEmMZfjiWa8S6KasHz");
            this.wave_info = Config_1.User_level[key_1];
        }
        if (ChickData_1.default.user.wave == this.wave_info[2]) {
            AudioMgr_1.default.Instance().playMusic("bgBoss");
            this.node.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(function () {
                Utils_1.default.createUI("prefab/BossCommingUI");
            })));
        }
        else if (ChickData_1.default.user.wave == 1) {
            if (window && window['xxxxx'])
                window['xxxxx']("B3AEM7J75BWdr3sQ7myfae");
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
        if (window && window['xxxxx'])
            window['xxxxx']("hEXSmcDd57zwYGnDHTZrKT");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("jYEpCE24wWZ2ZGkW");
            }
            m[list[i].index] = 1;
        }
        for (var i = list.length - 1; i >= 0; i--) {
            if (this.items[list[i].index])
                this.items[list[i].index].setItemData(list[i]);
        }
        if (window && window['xxxxx'])
            window['xxxxx']("6sDpi");
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
                            if (window && window['xxxxx'])
                                window['xxxxx']("hZF2RfaahNHMbEQ7X2ae");
                            if (ChickData_1.default.user.AdBuyNotDrop.length > 0) {
                                var b = _this.buyChick(ChickData_1.default.user.AdBuyNotDrop[0], 2);
                                if (b)
                                    ChickData_1.default.user.AdBuyNotDrop.shift();
                            }
                        })).repeatForever());
                        if (window && window['xxxxx'])
                            window['xxxxx']("cFH6JekkpasTYZZXshHwky3ADdS3TZ");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("kNexZXRcniiw4rXjrsny8");
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
                            if (window && window['xxxxx'])
                                window['xxxxx']("27Cs6Ny6nxBDyebzZxyPDPwwQr");
                            if (ChickData_1.default.user.auto_com_time - Utils_1.default.getServerTime() > 0) {
                                _this.SetText("auto_time", Utils_1.default.getTimeStrByS((ChickData_1.default.user.auto_com_time - Utils_1.default.getServerTime()) / 1000));
                            }
                            else {
                                _this.SetText("auto_time", "自动合成");
                                if (window && window['xxxxx'])
                                    window['xxxxx']("4tCfkJyFfcCPZGM3");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("crrDFT");
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
                        //         if(window && window['xxxxx']) window['xxxxx']("4Y6PtM8mRpwk7Js");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("JZrNWSWwjtMdh7DMMhe");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("CCRy5yYyFWPy3ZCC4ZdKisRx");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("Qf6YhWWT83xQRdHKRFEA");
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
        if (window && window['xxxxx'])
            window['xxxxx']("A7mirkABh62pYWSAf3jZJWSGkTx");
        node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(function () {
            Utils_1.default.playBreath(node).setTag(2);
        })).repeat(1)).setTag(1);
    };
    HallScene.prototype.initView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var node_com, index, i, node, plant, node_drag;
            var _this = this;
            return __generator(this, function (_a) {
                if (window && window['xxxxx'])
                    window['xxxxx']("Wr3z7WbfdzdHThyk5wdSycf7tE");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("eiEm7fwYHNhZ8A2MBD");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("N56TrHcre6KdafZSycjhEQ");
                        _this.autocomindexs[1] = -1;
                        _this.item_drag.linkItem = null;
                        _this.GetGameObject("node_com").stopAllActions();
                        cc.log("取消当前合成");
                    }
                    _this.item_drag.datacopy = null;
                    var pos = e.getLocation();
                    pos = node_com.convertToNodeSpaceAR(pos);
                    var item = _this.getItemByPos(pos);
                    if (window && window['xxxxx'])
                        window['xxxxx']("yRdi6wtNfNEnZfAE");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("f5kDJh6Ybpa");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("d3yCSia2tnBPM7PW36nQB755");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("BStDDid6P");
                        this_2.item_drag.node.position = this_2.items[j].node.position;
                        this_2.setDragPos(this_2.items[j].node);
                        targetpos = this_2.GetGameObject("node_com").convertToWorldSpaceAR(this_2.items[i].node.position);
                        targetpos = this_2.GetGameObject("item_drag").parent.convertToNodeSpaceAR(targetpos);
                        // cc.log("开始自动合成")
                        this_2.bInAutoCom = true;
                        this_2.item_drag.node.stopAllActions();
                        this_2.item_drag.node.runAction(cc.sequence(cc.moveTo(0.13, cc.v2(targetpos.x, targetpos.y)), cc.callFunc(function () {
                            if (window && window['xxxxx'])
                                window['xxxxx']("ebxrHwwa3swPENiBhsnABspf");
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
            if (window && window['xxxxx'])
                window['xxxxx']("x4N");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("2np");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("7F8CGzwFHQAwAdybBb4x");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("y");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("fnefDynMBiXx2F");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("zf4p7FCW");
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
            if (window && window['xxxxx'])
                window['xxxxx']("fNDzPrNkQRDxSF853Zwe7TQWwwkJ");
            ChickData_1.default.user.guideIndex++;
            ChickData_1.default.save();
        }
        if (!b)
            return;
        var nextGun = ChickData_1.default.user.getChickInfo(item.index);
        item.setItemData(nextGun);
        this.GetGameObject("item_drag").active = false;
        this.item_drag.datacopy = null;
        if (window && window['xxxxx'])
            window['xxxxx']("SnZMS52ZRmXQSpekM");
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
        if (window && window['xxxxx'])
            window['xxxxx']("biYwQzHEFs5KKJ23");
        var item = null;
        for (var i = 0; i < 12; ++i) {
            if (ChickData_1.default.user.slots[i] == 0)
                continue;
            if (!this.items[i].datacopy && this.autocomindexs[0] != i && this.autocomindexs[1] != i) {
                item = this.items[i];
                break;
            }
            if (window && window['xxxxx'])
                window['xxxxx']("JfCNwMFkZrXP2EZn3phQERHMhxb");
        }
        if (!lv) {
            lv = ChickData_1.default.user.getLvlMax() - 3;
            if (lv < 1)
                lv = 1;
        }
        if (item) {
            if (window && window['xxxxx'])
                window['xxxxx']("DY");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("eT5WZyiJ7Z8nxGSWdcbJ");
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
            if (window && window['xxxxx'])
                window['xxxxx']("2ZJD5zPJYRZGMz8Sx5cX");
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
                        if (window && window['xxxxx'])
                            window['xxxxx']("Mhzz3fk5jCJP");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("eCrirp8jJPWSSHfHs");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("zaMpypz");
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(CommonView_1.default).setType(CommonView_1.EADLAYER.DOUBLE_INCOME);
                });
                break;
            case "bt_auto_merge":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(CommonView_1.default).setType(CommonView_1.EADLAYER.AUTO_COM);
                });
                break;
                if (window && window['xxxxx'])
                    window['xxxxx']("yWXK2GCrckXNNh");
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
                    if (window && window['xxxxx'])
                        window['xxxxx']("YNQTK5EbC78K7");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxIYWxsU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1QyxrREFBNkM7QUFDN0MsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUN6Qyx3Q0FBbUM7QUFDbkMsbUNBQW1FO0FBQ25FLGtEQUFnSjtBQUNoSixnREFBNEM7QUFDNUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUV6QywwREFBcUQ7QUFDckQsOENBQXlDO0FBQ3pDLDRDQUF1QztBQUN2QywyQ0FBc0M7QUFDdEMseUNBQW9DO0FBRXBDLDREQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFMUU7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUF5K0JDO1FBditCRyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBU25CLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFDeEIsZUFBUyxHQUFPLElBQUksQ0FBQztRQW9GckIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQXNFZCxvQkFBYyxHQUFHLEtBQUssQ0FBQztRQWtFeEIsVUFBSSxHQUFhLEVBQUUsQ0FBQztRQUU5QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLFdBQUssR0FBcUIsRUFBRSxDQUFDO1FBdUJyQyxtQkFBYSxHQUFZLEtBQUssQ0FBQyxDQUFD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USxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ087SUFxZjNCO1FBREYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUF2ZmIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXkrQjdCO0lBQUQsZ0JBQUM7Q0F6K0JELEFBeStCQyxDQXorQnNDLGdCQUFNLEdBeStCNUM7a0JBeitCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgTXNnVG9hc3QgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ1RvYXN0XCI7XHJcbmltcG9ydCBDaGlja0RhdGEgZnJvbSBcIi4uL21hbmFnZXIvQ2hpY2tEYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgVXNlcl9sZXZlbCwgQ29uZmlnX2NoaWNrLCBDb25maWdfZ3JvdW5kIH0gZnJvbSBcIi4vQ29uZmlnXCI7XHJcbmltcG9ydCBDb21tb25WaWV3LCB7IE1BWF9ET1VCTEVfQVRUX1RJTUUsIE1BWF9ET1VCTEVfSU5DT01FX1RJTUUsIE1BWF9BVVRPX0NPTV9USU1FLCBNQVhfRFJPUF9QTEFOVF9USU1FLCBFQURMQVlFUiB9IGZyb20gXCIuL3ByZWZhYi9Db21tb25WaWV3XCI7XHJcbmltcG9ydCBTaGFyZUxheWVyIGZyb20gXCIuL3ByZWZhYi9TaGFyZVZpZXdcIjtcclxuaW1wb3J0IEVuZW15IGZyb20gXCIuL3ByZWZhYi9FbmVteVwiO1xyXG5pbXBvcnQgRmFpbFZpZXcgZnJvbSBcIi4vcHJlZmFiL0ZhaWxWaWV3XCI7XHJcbmltcG9ydCBSZWNvcmRWaWV3IGZyb20gXCIuL3ByZWZhYi9SZWNvcmRWaWV3XCI7XHJcbmltcG9ydCBPZmZsaW5lQXdhcmRVSSBmcm9tIFwiLi9wcmVmYWIvT2ZmbGluZUF3YXJkVUlcIjtcclxuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL3ByZWZhYi9TaG9wVmlld1wiO1xyXG5pbXBvcnQgV2luVmlldyBmcm9tIFwiLi9wcmVmYWIvV2luVmlld1wiO1xyXG5pbXBvcnQgR3JvdW5kSXRlbSBmcm9tIFwiLi9Hcm91bmRJdGVtXCI7XHJcbmltcG9ydCBDaGlja0l0ZW0gZnJvbSBcIi4vQ2hpY2tJdGVtXCI7XHJcbmltcG9ydCB7IFBsYW50SW5mbyB9IGZyb20gXCIuL1VzZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29pbk5vdEVub3VnaFVJIGZyb20gXCIuL3ByZWZhYi9Db2luTm90RW5vdWdoVUlcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYVlERmt0NE16TkdKd3JSM1FaMmFtbkFGXCIpO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsU2NlbmUgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGVuZW15X3ByZTpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBfaW5zdGFuY2UgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTpIYWxsU2NlbmVcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gSGFsbFNjZW5lLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sYXN0ZHJvcHRpbWUgPSAwO1xyXG4gICAgcHVibGljIGVuZW15bGlzdDpjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgd2F2ZV9pbmZvOmFueSA9IG51bGw7XHJcblxyXG4gICAgaGlkQ29tcG9zZVRpcHMoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpOy8vZnhfZ3JvdW5kX21lcmdlXHJcbiAgICAgICAgZm9yKHZhciBzbG90IG9mIHNsb3RzLmNoaWxkcmVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvdC5nZXRDaGlsZEJ5TmFtZShcImZ4X2dyb3VuZF9tZXJnZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbXBvc2V0aXBzKGx2Om51bWJlcilcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXhzID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpdGVtIG9mIHRoaXMuaXRlbXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJhc0U1dE5tQU1KNGpuNFFEZFwiKTtcclxuICAgICAgICAgICAgaWYoaXRlbS5kYXRhY29weSAmJiBpdGVtLmRhdGFjb3B5Lmx2ID09IGx2ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCAmJiBpdGVtLmRhdGFjb3B5Lmx2PDYwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmRleHMucHVzaChpdGVtLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTsvL2Z4X2dyb3VuZF9tZXJnZVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aTxzbG90cy5jaGlsZHJlbi5sZW5ndGg7KytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvdHMuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJmeF9ncm91bmRfbWVyZ2VcIikuYWN0aXZlID0gaW5kZXhzLmluZGV4T2YoaSkgPj0wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlKGR0KVxyXG5cdHtcclxuICAgICAgICBpZihkdD4xKWR0PTE7XHJcblx0XHR0aGlzLlNldFRleHQoXCJsYmxfY29pblwiLFV0aWxzLmZvcm1hdE51bWJlcihDaGlja0RhdGEudXNlci5jb2luKStcIlwiKTtcclxuICAgICAgICAvLyBpZih0aGlzLnJlY29yZGVydGltZSAhPSAwKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgbGV0IHMgPSBNYXRoLmZsb29yKChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSB0aGlzLnJlY29yZGVydGltZSkvMTAwMCk7XHJcbiAgICAgICAgLy8gICAgIGlmKHM+MCl0aGlzLlNldFRleHQoXCJsYmxfbHVwaW5nXCIscytcInNcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuU2V0VGV4dChcImxibF9sdXBpbmdcIixcIlwiKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8veeaOkuW6j1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIk5YR3pzUm53U2NlWkNicmZYc2pIXCIpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlsaXN0LnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgcmV0dXJuIGIueSAtIGEueTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwO2k8dGhpcy5lbmVteWxpc3QubGVuZ3RoOysraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0W2ldLnpJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sYXN0ZHJvcHRpbWUgKz0gZHQ7XHJcbiAgICAgICAgaWYodGhpcy5fbGFzdGRyb3B0aW1lID4gMjUgKiAoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpPy4zOjEpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/mma7pgJroirHnm4bmjonokL1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KSByZXR1cm5cclxuICAgICAgICAgICAgbGV0IGx2ID0gTWF0aC5tYXgoMSwgQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSBVdGlscy5nZXRSYW5kb21JbnQoNiwgOSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1eUNoaWNrKGx2LCAzKVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0ZHJvcHRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/kuIDmrrXml7bpl7TkuI3mk43kvZzvvIzmj5DnpLrlj6/ku6XlkIjmiJBcclxuICAgICAgICBpZih0aGlzLnRvdWNoZW5kdGltZSAhPSAwICYmIFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMudG91Y2hlbmR0aW1lID4gNTAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIndlc2VQaEsyc3RpMllqWFByc0dEY2FlYnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZVRpcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S4remXtOaYvuekuuWbvueJh1xyXG4gICAgcHVibGljIGFzeW5jIHNob3dJbWFnZShpbWdwYXRoOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoaW1ncGF0aCxjYy5TcHJpdGVGcmFtZSkgYXMgY2MuU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiRnJLa3NZNldXbUU1RGRTZW1CaVwiKTtcclxuICAgICAgICBub2RlLnkgPSAyMDA7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDEuMjtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMiksY2Muc3Bhd24oY2MubW92ZUJ5KDAuNSwwLDEwMCksY2MuZmFkZVRvKDAuNSwwKSksY2MucmVtb3ZlU2VsZigpKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJGYWlsID0gZmFsc2U7XHJcbiAgICBlbmVteURpZShub2RlOmNjLk5vZGUsYkZhaWw6Ym9vbGVhbilcclxuICAgIHtcclxuICAgICAgICBsZXQgaXNTdG9wID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiWUM0bUpBRFduMkV4c2JQYnRcIik7XHJcbiAgICAgICAgaWYoYkZhaWwpIHRoaXMuYkZhaWwgPSB0cnVlO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IHRoaXMuZW5lbXlsaXN0Lmxlbmd0aC0xO2k+PTA7LS1pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYobm9kZSA9PSB0aGlzLmVuZW15bGlzdFtpXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteWxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmNyZWF0ZWNvbXBsZXRlICYmIHRoaXMuZW5lbXlsaXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5iRmFpbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIud2F2ZT49IHRoaXMud2F2ZV9pbmZvWzJdKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLndhdmU9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSBub2RlLmdldENvbXBvbmVudChFbmVteSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTG9zZVVJXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRmFpbFZpZXcpLnNldEluZm8oZW5lbXkuZ2V0Qm9zc01vbmV5KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci53YXZlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbWFnZShcInRleHR1cmUvZGVmZWF0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiMmQ2Y2M2a0hOTkhQTUpLUXNTeVB4XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIud2F2ZSsrO1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIud2F2ZSA+IHRoaXMud2F2ZV9pbmZvWzJdKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteSA9IG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9uZXkgPSBlbmVteS5nZXRCb3NzTW9uZXkoKTtcclxuXHRcdFx0XHQgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMS4yKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9WaWN0b3J5VUlcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoV2luVmlldykuc2V0SW5mbyhtb25leSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci53YXZlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5sdisrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk5ld0dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBDaGlja0RhdGEudXNlci5sdiArIFwiX1wiICsgQ2hpY2tEYXRhLnVzZXIud2F2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhdmVfaW5mbyA9IFVzZXJfbGV2ZWxba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBXeENlbnRlci5hbGRMZXZlbFJlcG9ydChDaGlja0RhdGEudXNlci5sdik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYVpkUmlCXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwid2luX3dhdmVcIilcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dJbWFnZShcInRleHR1cmUvc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTa2VBbmkoXCJzcGluZTpvdGhlci9zaGVuZ2ppY2hlbmdnb25nXCIsIFwiZWZmZWN0XCIsIHRoaXMubm9kZSxjYy52MygwLDE1MCwwKSwgMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaXNTdG9wKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXlzKGlzQ2hhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVjb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgY3JlYXRlRW5lbXlzKGlzQ2hhbmdlOmJvb2xlYW4gPSBmYWxzZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJGYWlsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVjb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQga2V5ID0gQ2hpY2tEYXRhLnVzZXIubHYgKyBcIl9cIiArIENoaWNrRGF0YS51c2VyLndhdmU7XHJcbiAgICAgICAgdGhpcy53YXZlX2luZm8gPSBVc2VyX2xldmVsW2tleV07XHJcblxyXG4gICAgICAgIC8v6YCa5YWz5ZCO5bCx5LiA55u06K+75pyA5ZCO5LiA5YWzXHJcbiAgICAgICAgaWYoIXRoaXMud2F2ZV9pbmZvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IDYwICsgXCJfXCIgKyBDaGlja0RhdGEudXNlci53YXZlO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJBclJ6RzJXTXpFbU1aZmppV2E4UzZLYXNIelwiKTtcclxuICAgICAgICAgICAgdGhpcy53YXZlX2luZm8gPSBVc2VyX2xldmVsW2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlID09IHRoaXMud2F2ZV9pbmZvWzJdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TXVzaWMoXCJiZ0Jvc3NcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKC44KSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQm9zc0NvbW1pbmdVSVwiKVxyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoQ2hpY2tEYXRhLnVzZXIud2F2ZSA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQjNBRU03Sjc1QldkcjNzUTdteWZhZVwiKTtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5TXVzaWMoXCJCR00xXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/liJvlu7rmgKrnialcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy53YXZlX2luZm9bNF07KytpKVxyXG4gICAgICAgICAgICBsaXN0LnB1c2godGhpcy53YXZlX2luZm9bM10pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIG51bSA9IGxpc3QubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy53YXZlX2luZm9bNl07KytpKVxyXG4gICAgICAgICAgICBsaXN0LnB1c2godGhpcy53YXZlX2luZm9bNV0pXHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxsaXN0Lmxlbmd0aDsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyLjIgKiBpKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZW15X3ByZSk7XHJcbiAgICAgICAgICAgICAgICBlLnBhcmVudCA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfb2JqXCIpO1xyXG4gICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoRW5lbXkpLnNldElEKGlkLGk+PW51bSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15bGlzdC5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoaSA9PSBsaXN0Lmxlbmd0aC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5YWz5Y2h5L+h5oGvXHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiaEVYU21jRGQ1N3p3WUduREhUWnJLVFwiKTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfY3VyX2x2XCIsQ2hpY2tEYXRhLnVzZXIubHYrXCJcIik7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3dhdmVzXCIsQ2hpY2tEYXRhLnVzZXIud2F2ZStcIi9cIisgdGhpcy53YXZlX2luZm9bMl0pO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9wcmVfbHZcIiwoQ2hpY2tEYXRhLnVzZXIubHYtMSkrXCJcIik7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX25leF9sdlwiLChDaGlja0RhdGEudXNlci5sdisxKStcIlwiKTtcclxuICAgICAgICBpZihpc0NoYW5nZSl7XHJcbiAgICAgICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdsYmxfd2F2ZXMnKSwxLDMsMC41LGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdGg6Y2MuVmVjM1tdID0gW107XHJcblxyXG5cdGl0ZW1fZHJhZzogQ2hpY2tJdGVtID0gbnVsbDtcclxuXHRhdXRvY29taW5kZXhzOiBudW1iZXJbXSA9IFstMSwgLTFdO1xyXG5cclxuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PENoaWNrSXRlbT4gPSBbXTtcclxuICAgIGluaXRDb21wb3NlQ2hpY2tzKCkge1xyXG4gICAgICAgIHZhciBsaXN0ID0gQ2hpY2tEYXRhLnVzZXIuQ29tUGxhbnRzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYobGlzdFtpXS5sdj42MClsaXN0W2ldLmx2PTYwXHJcbiAgICAgICAgICAgIGlmKG1bbGlzdFtpXS5pbmRleF0gPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumUmeivry4uLuS/ruato1wiKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJqWUVwQ0UyNHdXWjJaR2tXXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1bbGlzdFtpXS5pbmRleF0gPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbbGlzdFtpXS5pbmRleF0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2xpc3RbaV0uaW5kZXhdLnNldEl0ZW1EYXRhKGxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI2c0RwaVwiKTtcclxuICAgIH1cclxuICAgIGJQYXVzZUF1dG9Db206IGJvb2xlYW4gPSBmYWxzZTsgLy/mmK/lkKbmmoLlgZzoh6rliqjlkIjmiJBcclxuXHRiSW5BdXRvQ29tOiBib29sZWFuID0gZmFsc2U7ICAgICAvL+aYr+WQpuato+WcqOiHquWKqOWQiOaIkOWKqOeUu1xyXG5cdFxyXG5cdGdldEl0ZW1CeVBvcyhwb3M6IGNjLlZlYzIpOiBDaGlja0l0ZW0ge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMocG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaV0ubm9kZS5nZXRDb21wb25lbnQoQ2hpY2tJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0c2V0RHJhZ1Bvcyhwb3MpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgICAgICBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgfVxyXG5cdFxyXG5cdGFzeW5jIHN0YXJ0KClcclxuXHR7XHJcbiAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdIb21lU2hvdycsJ3Nob3cnKTtcclxuICAgICAgICB0aGlzLmhpZENvbXBvc2VUaXBzKCk7XHJcbiAgICAgICAgSGFsbFNjZW5lLl9pbnN0YW5jZSA9IHRoaXM7XHJcblx0XHRsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTtcclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvcih2YXIgc2xvdCBvZiBzbG90cy5jaGlsZHJlbil7XHJcblx0XHRcdHNsb3QuZ2V0Q29tcG9uZW50KEdyb3VuZEl0ZW0pLnNldEluZGV4KCsraSk7XHJcblx0XHR9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0VmlldygpO1xyXG5cclxuXHRcdHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9Db21wb3NlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSkgcmV0dXJuXHJcbiAgICAgICAgICAgIC8vIOWwj+eyvueBteaOieiQvVxyXG4gICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5Ecm9wR2lmdFB0cy5sZW5ndGg+MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBsZXQgYj0gdGhpcy5idXlDaGljayhDaGlja0RhdGEudXNlci5Ecm9wR2lmdFB0c1swXSw0KTtcclxuICAgICAgICAgICAgICAgaWYoYilcclxuICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAvLyAg5bm/5ZGK6LSt5Lmw5oiQ5Yqf77yM5Zug5Li65rKh5pyJ56m65L2N5pyq5oiQ5Yqf5re75YqgXHJcbiAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiaFpGMlJmYWFoTkhNYkVRN1gyYWVcIik7XHJcbiAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuQWRCdXlOb3REcm9wLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGxldCBiPSB0aGlzLmJ1eUNoaWNrKENoaWNrRGF0YS51c2VyLkFkQnV5Tm90RHJvcFswXSwyKTtcclxuICAgICAgICAgICAgICAgaWYoYilcclxuICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLkFkQnV5Tm90RHJvcC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cdFx0fSkpLnJlcGVhdEZvcmV2ZXIoKSlcclxuICAgICAgICBcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJjRkg2SmVra3Bhc1RZWlpYc2hId2t5M0FEZFMzVFpcIik7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSA9IE1hdGgubWF4KDAsQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSk7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID0gTWF0aC5tYXgoMCxDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUpO1xyXG4gICAgICAgIENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA9IE1hdGgubWF4KDAsQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lKTtcclxuICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBNYXRoLm1heCgwLENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdXlCdXR0b24oKTtcclxuXHJcbiAgICAgICAgIC8v56a757q/5aWW5YqxLOaaguaXtuWPque7mTblsI/ml7bnmoRcclxuICAgICAgICAgbGV0IHN0aW1lID0gQ2hpY2tEYXRhLnVzZXIuc2VydmVyVGltZTsgICAgXHJcbiAgICAgICAgIHZhciB0ID0gKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHN0aW1lKSAvIDEwMDA7XHJcbiAgICAgICAgIGlmIChzdGltZSAhPSAwICYmIHQgPiAzKjYwKSB7XHJcbiAgICAgICAgICAgICB2YXIgdCA9IE1hdGgubWluKDcyMDAgKiAzLCB0KTtcclxuICAgICAgICAgICAgIHZhciBtb25leSA9IENoaWNrRGF0YS51c2VyLmdldE9mZmxpbmVSZXdhcmQodC82MCk7XHJcbiAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSSgncHJlZmFiL09mZmxpbmVBd2FyZFVJJywgbnVsbCwgKHVpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgdWkuZ2V0Q29tcG9uZW50KE9mZmxpbmVBd2FyZFVJKS5kYXRhID0gbW9uZXk7XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgYyBvZiB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX3BhdGhcIikuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIHRoaXMucGF0aC5wdXNoKGMucG9zaXRpb24pXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImtOZXhaWFJjbmlpdzRyWGpyc255OFwiKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgzKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVuZW15cygpO1xyXG4gICAgICAgIH0pKSlcclxuXHJcblx0XHQvL+abtOaWsOWQhOenjeaXtumXtFxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJvdHRvbVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzWDJJbiA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IDA7XHJcbiAgICAgICAgICAgIGxldCBpc0luRGIgPSBDaGlja0RhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwO1xyXG4gICAgICAgICAgICBsZXQgaXNEcEluID0gQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMDtcclxuXHJcbiAgICAgICAgICAgIC8v5qCh6aqM5pe26Ze0XHJcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiBNQVhfRE9VQkxFX0FUVF9USU1FICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9ET1VCTEVfSU5DT01FX1RJTUUgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9BVVRPX0NPTV9USU1FICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiBNQVhfRFJPUF9QTEFOVF9USU1FICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5icmVhdGhBbmdyeShpc1gySW4pO1xyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJhdHRfeDJfdGltZVwiLCBpc1gySW4gPyBVdGlscy5nZXRUaW1lU3RyQnlTKChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkgOiAn5omT6bih6KGAJyk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcInJld2FyZHgyX3RpbWVcIiwgaXNJbkRiID8gVXRpbHMuZ2V0VGltZVN0ckJ5UygoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSAvIDEwMDApIDogJ+WPjOWAjScpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIyN0NzNk55Nm54QkR5ZWJ6Wnh5UERQd3dRclwiKTtcclxuICAgICAgICAgICAgaWYoIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldFRleHQoXCJhdXRvX3RpbWVcIiwgVXRpbHMuZ2V0VGltZVN0ckJ5UygoQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkgLyAxMDAwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldFRleHQoXCJhdXRvX3RpbWVcIiwgXCLoh6rliqjlkIjmiJBcIik7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI0dENma0p5RmZjQ1BaR00zXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9kcm9wX3BsYW50XCIsaXNEcEluID8gVXRpbHMuZ2V0VGltZVN0ckJ5UygoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSAvIDEwMDApIDogJ+aOieiQvScpO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJmeF9idF9hbmdyeVwiKS5hY3RpdmUgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJhdHRfeDJfdGltZVwiKS5hY3RpdmU7XHJcbiAgICAgICAgICAgIC8vIGlmKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk8MClcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0U3ByaXRlKFwiYnRfZmFzdF9nZW5fcHJvY2Vzc19pdGVtXCIpLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0U3ByaXRlKFwiYnRfZmFzdF9nZW5fcHJvY2Vzc19pdGVtXCIpLmZpbGxSYW5nZSA9ICggKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLzEwMDAvNjApL01BWF9EUk9QX1BMQU5UX1RJTUU7Ly8gKG1heF9kcm9wX3BsYW50ICogNjAgLSAoRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkvMTAwMCkgL21heF9kcm9wX3BsYW50ICogNjBcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgLy8gVGFza0xheWVyLmNoZWNrVGFzaygpOy8v5Lu75Yqh5qOA5rWLXHJcbiAgICAgICAgICAgIC8vIGlmIChHYW1lTWFuYWdlci5JbnN0YW5jZSgpLmlzR3VpZGUgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fYXV0b1wiKS5hY3RpdmUgPSBEYXRhLnVzZXIuZ3VpZGVJbmRleCA+IDI7XHJcbiAgICAgICAgICAgIC8vIERhdGEudXNlci5jaGVja05ld1RvZHkoKTtcclxuXHRcdH0pLGNjLmRlbGF5VGltZSgxKSkucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzBcIikuYWN0aXZlID0gQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCA9PSAwO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwic3VwZXJtYXJrZXRcIikpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInN1cGVybWFya2V0XCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMikpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcblxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwicG93ZXJtYW5cIikpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInBvd2VybWFuXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMykpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5faW52aWF0ZVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC4zLCAyMCksIGNjLnJvdGF0ZVRvKDAuMywgLTEwKSwgY2Mucm90YXRlVG8oMC4yLCAwKSwgY2MuZGVsYXlUaW1lKDMpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImNyckRGVFwiKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsdXBpbl9nZW1cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMywgMjApLCBjYy5yb3RhdGVUbygwLjMsIC0xMCksIGNjLnJvdGF0ZVRvKDAuMiwgMCksIGNjLmRlbGF5VGltZSgzKSkucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1JlY29yZGVyXCIpKSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuYWN0aXZlID0gd2luZG93W1widHRcIl07XHJcbiAgICAgICAgLy8gaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlY29yZGVyID0gd2luZG93W1widHRcIl0uZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgIC8vICAgICByZWNvcmRlci5vblN0YXJ0KHJlcyA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsdXBpbl9nZW1cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fVkNSXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2VuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1JlY29yZGVyXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC41LCAuOSksIGNjLnNjYWxlVG8oMC41LCAxKSkucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0dOW9leWxj+W8gOWni1wiKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gICAgIHJlY29yZGVyLm9uU3RvcChyZXMgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iUmVjb3JkZXIgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibHVwaW5fZ2VtXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuc2NhbGUgPSAxO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1ZDUlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2VuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidHTlvZXlsY/nu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMudmlkZW9QYXRoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiNFk2UHRNOG1ScHdrN0pzXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMucmVjb3JkZXJ0aW1lIDwgMzAwMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIE1zZ0hpbnRzLnNob3coXCLlvZXlsY/ml7bpl7Tov4fnn61cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yZWNvcmRlcnRpbWUgPSAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gMFxyXG4gICAgICAgIC8vICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTHVQaW5SZXN1bHRcIiwgbnVsbCwgKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChSZWNvcmRWaWV3KS5zZXREYXRhKHJlcyk7XHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiSlpyTldTV3dqdE1kaDdETU1oZVwiKTtcclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgdGhpcy5vbkdhbWVTaG93LCB0aGlzKTtcclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgdGhpcy5vbkdhbWVIaWRlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBiUmVjb3JkZXIgPSBmYWxzZTtcclxuICAgIHJlY29yZGVydGltZSA9IDA7XHJcbiAgICBvbkdhbWVIaWRlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5nYW1lLm9mZihjYy5nYW1lLkVWRU5UX1NIT1csIHRoaXMub25HYW1lU2hvdyk7XHJcbiAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9ISURFLCB0aGlzLm9uR2FtZUhpZGUpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2FtZVNob3coKSB7XHJcbiAgICAgICAgaWYgKFV0aWxzLnNoYXJldGltZSAhPSAwICYmIFV0aWxzLnNoYXJlY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIFV0aWxzLnNoYXJldGltZSA+PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5YiG5Lqr5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQ0NSeTV5WXlGV1B5M1pDQzRaZEtpc1J4XCIpO1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuc2hhcmVjYWxsYmFjayhmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVXRpbHMuc2hhcmV0aW1lID0gMDtcclxuICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTmV3R3JvdW5kKCl7XHJcbiAgICAgICAgbGV0IGN1cm9wZW4gPSBHcm91bmRJdGVtLmdldE5lZWRPcGVuKCk7XHJcbiAgICAgICAgaWYoY3Vyb3BlbiA8IDApIHJldHVybjtcclxuICAgICAgICBsZXQgbHYgPSBDb25maWdfZ3JvdW5kW2N1cm9wZW5dLnByaWNlO1xyXG4gICAgICAgIGlmKGx2IDwgQ2hpY2tEYXRhLnVzZXIubHYpIHJldHVybjtcclxuICAgICAgICBDaGlja0RhdGEudXNlci5zbG90c1tjdXJvcGVuXSA9IDE7XHJcbiAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTtcclxuICAgICAgICBsZXQgc2xvdCA9IHNsb3RzLmNoaWxkcmVuW2N1cm9wZW5dO1xyXG4gICAgICAgIGlmKHNsb3Qpe1xyXG4gICAgICAgICAgICBzbG90LmdldENvbXBvbmVudChHcm91bmRJdGVtKS5zZXRJbmRleChjdXJvcGVuKTtcclxuICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIuaIkOWKn+ino+mUgeaWsOS9jee9rlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0luQW5ncnkgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBicmVhdGhBbmdyeShpc2Jvb2w6Ym9vbGVhbil7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLkdldEdhbWVPYmplY3QoJ2J0bl9hbmdyeScpXHJcbiAgICAgICAgaWYoIW5vZGUpIHJldHVybjtcclxuICAgICAgICBpZihpc2Jvb2wpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5pc0luQW5ncnkpe1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiUWY2WWhXV1Q4M3hRUmRIS1JGRUFcIik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlWSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc0luQW5ncnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmlzSW5BbmdyeSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNJbkFuZ3J5ID0gdHJ1ZTtcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJBN21pcmtBQmg2MnBZV1NBZjNqWkpXU0drVHhcIik7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEwKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICBVdGlscy5wbGF5QnJlYXRoKG5vZGUpLnNldFRhZygyKTtcclxuICAgICAgICB9KSkucmVwZWF0KDEpKS5zZXRUYWcoMSlcclxuICAgIH1cclxuXHJcblx0QHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZV9zb2xkaWVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgYXN5bmMgaW5pdFZpZXcoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIldyM3o3V2JmZHpkSFRoeWs1d2RTeWNmN3RFXCIpO1xyXG4gICAgICAgIHZhciBub2RlX2NvbSA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7ICsraSkge1xyXG5cdFx0XHR2YXIgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlX3NvbGRpZXIpO1xyXG5cdFx0XHRub2RlLnBhcmVudCA9IG5vZGVfY29tO1xyXG5cdFx0XHRub2RlLnBvc2l0aW9uID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baV0ucG9zaXRpb247Ly8gY2MudjIoeCwgeSk7XHJcblx0XHRcdG5vZGUubmFtZSA9IFwiaXRtZVwiICsgaW5kZXg7XHJcblx0XHRcdHZhciBwbGFudDogQ2hpY2tJdGVtID0gbm9kZS5nZXRDb21wb25lbnQoQ2hpY2tJdGVtKTtcclxuXHRcdFx0cGxhbnQuaW5kZXggPSBpbmRleDtcclxuXHRcdFx0dGhpcy5pdGVtcy5wdXNoKHBsYW50KTtcclxuXHRcdFx0KytpbmRleFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZWlFbTdmd1lITmhaOEEyTUJEXCIpO1xyXG4gICAgICAgIHZhciBub2RlX2RyYWcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZV9zb2xkaWVyKTtcclxuICAgICAgICBub2RlX2RyYWcucGFyZW50ID0gbm9kZV9jb20ucGFyZW50O1xyXG4gICAgICAgIG5vZGVfZHJhZy5uYW1lID0gXCJpdGVtX2RyYWdcIjtcclxuICAgICAgICBub2RlX2RyYWcueCA9IC0xMDAwO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1fZHJhZyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5nZXRDb21wb25lbnQoQ2hpY2tJdGVtKTtcclxuICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbV9kcmFnLmJEcmFnID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0Q29tcG9zZUNoaWNrcygpO1xyXG5cclxuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5iUGF1c2VBdXRvQ29tID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKFwi5pqC5YGc6Ieq5Yqo5ZCI5oiQXCIpXHJcblxyXG4gICAgICAgICAgICAvL+WmguaenOWcqOiHquWKqOWQiOaIkOS4re+8jOWPlua2iOW9k+WJjeWQiOaIkFxyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgJiYgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJONTZUckhjcmU2S2RhZlpTeWNqaEVRXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWPlua2iOW9k+WJjeWQiOaIkFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBwb3MgPSBub2RlX2NvbS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5UG9zKHBvcyk7XHJcblxyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ5UmRpNnd0TmZORW5aZkFFXCIpO1xyXG4gICAgICAgICAgICBpZihpdGVtICYmIGl0ZW0uZHJvcHR5cGUgIT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kcm9wdHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZUl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5kYXRhY29weSAmJiBpdGVtLmRyb3B0eXBlID09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoUG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iQ2hvb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERyYWdQb3MoaXRlbS5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmluZGV4ID0gaXRlbS5pbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLnNldEl0ZW1EYXRhKGl0ZW0uZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBpdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbXBvc2V0aXBzKGl0ZW0uZGF0YWNvcHkubHYpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZjVrREpoNllicGFcIik7XHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgcG9zID0gbm9kZV9jb20uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYkNob29zZWQgJiYgcG9zLnN1Yih0aGlzLnRvdWNoUG9zKS5tYWcoKSA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREcmFnUG9zKHBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgcG9zMSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MxKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChlLmdldExvY2F0aW9uKCkuc3ViKGNjLnYyKHBvczEueCxwb3MxLnkpKS5tYWcoKSA8IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY29tcG9zZUhhbmRsZSwgdGhpcyk7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZDN5Q1NpYTJ0bkJQTTdQVzM2blFCNzU1XCIpO1xyXG4gICAgICAgIG5vZGVfY29tLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5jb21wb3NlSGFuZGxlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblx0YkNob29zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRvdWNoUG9zOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cdFxyXG4gICAgc3RhcnRBdXRvQ29tcG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5iUGF1c2VBdXRvQ29tIHx8IHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPCBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lICYmICF0aGlzLmJJbkF1dG9Db20pIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q29tcG9zZUNoaWNrcygpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aCA7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2ldIHx8ICF0aGlzLml0ZW1zW2ldLmRhdGFjb3B5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuaXRlbXMubGVuZ3RoIDsgKytqKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbal0gfHwgIXRoaXMuaXRlbXNbal0uZGF0YWNvcHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5kYXRhY29weS5sdiA9PSB0aGlzLml0ZW1zW2pdLmRhdGFjb3B5Lmx2ICYmIHRoaXMuaXRlbXNbaV0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2pdLmRyb3B0eXBlID09IDAgJiYgdGhpcy5pdGVtc1tpXS5kYXRhY29weS5sdjw2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSB0aGlzLml0ZW1zW2ldLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSB0aGlzLml0ZW1zW2pdLmluZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSB0aGlzLml0ZW1zW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5pbmRleCA9IHRoaXMuaXRlbXNbal0uaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLnNldEl0ZW1EYXRhKHRoaXMuaXRlbXNbal0uZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbal0uc2V0SXRlbURhdGEobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkJTdEREaWQ2UFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5wb3NpdGlvbiA9IHRoaXMuaXRlbXNbal0ubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREcmFnUG9zKHRoaXMuaXRlbXNbal0ubm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuaXRlbXNbaV0ubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0cG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuW8gOWni+iHquWKqOWQiOaIkFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJJbkF1dG9Db20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjEzLCBjYy52Mih0YXJnZXRwb3MueCx0YXJnZXRwb3MueSkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJlYnhySHd3YTNzd1BFTmlCaHNuQUJzcGZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wRWZmKHRoaXMuaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi6Ieq5Yqo5ZCI5oiQ57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iSW5BdXRvQ29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoZW5kdGltZSA9IDA7XHJcbiAgICBjb21wb3NlSGFuZGxlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLnRvdWNoZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICB0aGlzLmhpZENvbXBvc2VUaXBzKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjI1KSxjYy5mYWRlVG8oMC4yNSwwKSkpXHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5iUGF1c2VBdXRvQ29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYkluQXV0b0NvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmgaLlpI3oh6rliqjlkIjmiJBcIilcclxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ4NE5cIik7XHJcbiAgICAgICAgfSkpKVxyXG4gICAgICAgIHRoaXMuYkNob29zZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgcG9zID0gZSA/IGUuZ2V0TG9jYXRpb24oKSA6IGNjLlZlYzIuWkVSTztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WIoOmZpFxyXG4gICAgICAgICAgICB2YXIgcG9zMSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucG9zaXRpb247XHJcbiAgICAgICAgICAgIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMSk7XHJcbiAgICAgICAgICAgIGlmIChwb3Muc3ViKGNjLnYyKHBvczEueCxwb3MxLnkpKS5tYWcoKSA8IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjJucFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnNjYWxlID0gMC41O1xyXG4gICAgICAgICAgICAgICAgdmFyIHRtcDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmRhdGFjb3B5KSB0bXArKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodG1wIDw9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5bCP6bih5pWw6YeP6L+H5bCR5LiN6IO95Yig6ZmkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5Lmx2ID49IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIuacgOmrmOetiee6p+Wwj+m4oeWwseS4jeWIoOmZpOS6huWQp++8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjdGOENHendGSFFBd0FkeWJCYjR4XCIpO1xyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudXBkYXRlU2VsbENoaWNrQ29pbih0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YShudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVJlY3J1aXRtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2FtZVNjZW5lLkluc3RhbmNlKCkuZnBzID4gMzApXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZS91aS95aW5saWFuZ3plbmdqaWFcIiwgXCJlZmZlY3RcIiwgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKSwgY2MudjIoMCwgMjApLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WQiOaIkCDnp7vliqggIOS6pOaNolxyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbTogQ2hpY2tJdGVtID0gdGhpcy5nZXRJdGVtQnlQb3MocG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgQ2hpY2tEYXRhLnVzZXIuc2xvdHNbaXRlbS5pbmRleF0gPT0gMCB8fCBpdGVtID09IHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtIHx8IChpdGVtICYmIGl0ZW0uZHJvcHR5cGUgIT0gMCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pdGVtX2RyYWcubGlua0l0ZW0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ5XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXRlbS5kYXRhY29weSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XHJcbiAgICAgICAgICAgICAgICAvL+enu+WKqFxyXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIubW92ZUVmZih0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5pbmRleCwgaXRlbS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImZuZWZEeW5NQmlYeDJGXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRhdGFjb3B5Lm9wZW4gPT0gdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkub3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhY29weS5sdiA9PSB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5sdiAmJiBpdGVtLmRhdGFjb3B5LmluZGV4ICE9IHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5LmluZGV4ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCAmJiBpdGVtLmRhdGFjb3B5Lmx2PDYwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wRWZmKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInpmNHA3RkNXXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIC8v5Lqk5o2iXHJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5tb3ZlRWZmKHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLmluZGV4LCBpdGVtLmluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgX3RtcDogUGxhbnRJbmZvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtLmRhdGFjb3B5KSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKF90bXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHRcclxuICAgIHNob3dDb21wRWZmKGl0ZW06IENoaWNrSXRlbSkge1xyXG4gICAgICAgIGxldCBiID0gQ2hpY2tEYXRhLnVzZXIuY29tcG9zZUNoaWNrcyhpdGVtLmluZGV4LCB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZihDaGlja0RhdGEudXNlci5ndWlkZUluZGV4ID09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJmTkR6UHJOa1FSRHhTRjg1M1p3ZTdUUVd3d2tKXCIpO1xyXG4gICAgICAgICAgICBDaGlja0RhdGEudXNlci5ndWlkZUluZGV4ICsrO1xyXG4gICAgICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWIpIHJldHVybjtcclxuICAgICAgICBsZXQgbmV4dEd1biA9IENoaWNrRGF0YS51c2VyLmdldENoaWNrSW5mbyhpdGVtLmluZGV4KTtcclxuICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKG5leHRHdW4pO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPSBudWxsO1xyXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIlNuWk1TNTJaUm1YUVNwZWtNXCIpO1xyXG4gICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmF1dG9jb21pbmRleHMgPSBbLTEsIC0xXTtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpdGVtLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0cG9zKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5U2tlQW5pKFwic3BpbmU6b3RoZXIvZWZmZWN0X2hlY2hlbmdcIiwgXCJlZmZlY3RcIiwgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBhcmVudCwgdGFyZ2V0cG9zLmFkZChjYy52MygwLDIwLDApKSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQnV5QnV0dG9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbHYgPSBDaGlja0RhdGEudXNlci5nZXRMdmxNYXgoKSAtIDM7XHJcbiAgICAgICAgaWYobHY8MSlsdiA9IDE7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2J1eV9sdmxcIiwnTFYuJyArIGx2KTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfYnV5X2Nvc3RcIixVdGlscy5mb3JtYXROdW1iZXIoQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdikpKTtcclxuXHJcbiAgICAgICAgbGV0IHNrcGF0aCA9IGBzcGluZTpmbG93ZXIke2x2fV9za2VgO1xyXG4gICAgICAgIGxldCBhdGxhc3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtsdn1fdGV4YDtcclxuICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrYnV5Jyk7XHJcbiAgICAgICAgY2hpY2suZHJhZ29uQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKHNrcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0O1xyXG4gICAgICAgIGNoaWNrLmRyYWdvbkF0bGFzQXNzZXQgPSBhd2FpdCBVdGlscy5sb2FkUmVzKGF0bGFzcGF0aCxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIGFzIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldDtcclxuICAgICAgICBjaGljay5hcm1hdHVyZU5hbWUgPSAnQXJtYXR1cmUnO1xyXG4gICAgICAgIGNoaWNrLnBsYXlBbmltYXRpb24oJ2lkbGVMJywwKTtcclxuICAgIH1cclxuICAgIC8vMCBjb2luIDEgZ2VtIDIgYWQgM+aZrumAmuaOieiQvSA05bCP57K+54G15o6J6JC9XHJcbiAgICBwdWJsaWMgYnV5Q2hpY2sobHY6bnVtYmVyLGJ1eXR5cGU6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiYmlZd1F6SEVGczVLS0oyM1wiKTtcclxuICAgICAgICB2YXIgaXRlbTogQ2hpY2tJdGVtID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLnNsb3RzW2ldID09IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaV0uZGF0YWNvcHkgJiYgdGhpcy5hdXRvY29taW5kZXhzWzBdICE9IGkgJiYgdGhpcy5hdXRvY29taW5kZXhzWzFdICE9IGkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiSmZDTndNRmtaclhQMkVabjNwaFFFUkhNaHhiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWx2KSB7XHJcbiAgICAgICAgICAgIGx2ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0THZsTWF4KCkgLSAzO1xyXG4gICAgICAgICAgICBpZihsdjwxKWx2ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkRZXCIpO1xyXG4gICAgICAgICAgICBpZiAoYnV5dHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29zdCA9IENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpID4gQ2hpY2tEYXRhLnVzZXIuY29pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci50b2RheV9nZXRjaGlja190aW1lcyA8IENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RvdGFsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90aW1lcyA8IENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNvaW5fdG90YWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Db2luTm90RW5vdWdoXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KENvaW5Ob3RFbm91Z2hVSSkuc2V0Vmlld1R5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi6YeR5biB5LiN6LazXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJlVDVXWnlpSjdaOG54R1NXZGNiSlwiKTtcclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmNvaW4gLT0gY29zdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidXl0eXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBnZW0gPSBNYXRoLm1pbig1LCBOdW1iZXIoQ29uZmlnX2NoaWNrW2x2IC0gMV1bNl0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChnZW0gPiBDaGlja0RhdGEudXNlci5nZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNc2dUb2FzdC5zaG93KFwi6ZK755+z5LiN6LazXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmdlbSAtPSBnZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihidXl0eXBlID09IDIpe1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidXl0eXBlID49IDMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6aOe5py65o6J6JC9XCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiZmxvd2VyX3BvdF9sYW5kXCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VIYW5kbGUobnVsbCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0SXRlbURhdGEoQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2soaXRlbS5pbmRleCwgbHYpIGFzIFBsYW50SW5mbyxidXl0eXBlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXlCdXR0b24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjJaSkQ1elBKWVJaR016OFN4NWNYXCIpO1xyXG4gICAgICAgICAgICBpZiAoYnV5dHlwZSA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5L2N572u5LiN5aSf5ZWm77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMjUpLGNjLmZhZGVUbygwLjI1LDApKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBTRWF3X3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiQ0JkbTRuYWRwQnRyZDZ3cFwiKTsgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9zZVRpcCgpe1xyXG4gICAgICAgIHRoaXMudG91Y2hlbmR0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmJQYXVzZUF1dG9Db20gfHwgdGhpcy5iSW5BdXRvQ29tKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmJJbkF1dG9Db20pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aCA7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2ldIHx8ICF0aGlzLml0ZW1zW2ldLmRhdGFjb3B5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuaXRlbXMubGVuZ3RoIDsgKytqKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2pdIHx8ICF0aGlzLml0ZW1zW2pdLmRhdGFjb3B5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iSW5BdXRvQ29tKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkubHYgPT0gdGhpcy5pdGVtc1tqXS5kYXRhY29weS5sdiAmJiB0aGlzLml0ZW1zW2ldLmRyb3B0eXBlID09IDAgJiYgdGhpcy5pdGVtc1tqXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkubHYgPCA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXgxID0gdGhpcy5pdGVtc1tpXS5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiTWh6ejNmazVqQ0pQXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXgyID0gdGhpcy5pdGVtc1tqXS5pbmRleFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAwID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baW5kZXgxXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baW5kZXgyXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5wb3NpdGlvbiA9IHAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMSxjYy52MihwMS54LHAxLnkpKSxjYy5tb3ZlVG8oMC4xLGNjLnYyKHAwLngscDAueSkpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRvblVJQ2xpY2tlZChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGJ0bk5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGJ0bk5hbWUpIHtcclxuXHRcdFx0Y2FzZSBcImJ0bl9zZXR0aW5nXCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2V0dGluZ1VJXCIpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidG5fc2lnblwiOlxyXG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1NpZ25VSVwiKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRuX2J1eVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlDaGljayhudWxsLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5ndWlkZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2VUaXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRicmVhaztcclxuICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZUNyaXJwOGpKUFdTU0hmSHNcIik7XHJcblx0XHRcdGNhc2UgXCJidF9mYXN0X2dlblwiOlxyXG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0FkTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG5cdFx0XHRcdFx0bm9kZS5nZXRDb21wb25lbnQoQ29tbW9uVmlldykuc2V0VHlwZShFQURMQVlFUi5EUk9QX1BMQU5UKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidG5fYW5ncnlcIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuXHRcdFx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KENvbW1vblZpZXcpLnNldFR5cGUoRUFETEFZRVIuRE9VQkxFX0FUVClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRuX2RvdWJsZV9jb2luXCI6XHJcbiAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ6YU1weXB6XCIpO1xyXG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0FkTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG5cdFx0XHRcdFx0bm9kZS5nZXRDb21wb25lbnQoQ29tbW9uVmlldykuc2V0VHlwZShFQURMQVlFUi5ET1VCTEVfSU5DT01FKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidF9hdXRvX21lcmdlXCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChDb21tb25WaWV3KS5zZXRUeXBlKEVBRExBWUVSLkFVVE9fQ09NKVxyXG5cdFx0XHRcdH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwieVdYSzJHQ3Jja1hOTmhcIik7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5fc2hvcFwiOlxyXG4gICAgICAgICAgICAgICBTaG9wVmlldy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9kZWxldGVcIjpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikub3BhY2l0eSA9PSAyNTUpXHJcbiAgICAgICAgICAgICAgICBNc2dUb2FzdC5zaG93KFwi5ouW5Yqo5Yiw6L+Z6YeM5Y2W5Ye6XCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9pbnZpYXRlXCI6XHJcbiAgICAgICAgICAgICAgICAvLyBXeENlbnRlci5zaGFyZUFwcE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnSW52aXRhdGlvbkNsaWNrJywnY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1NoYXJlTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFNoYXJlTGF5ZXIpLnNldERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9SZWNvcmRlclwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYlJlY29yZGVyID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5byA5aeL5b2V5bGPXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYlJlY29yZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSB3aW5kb3dbXCJ0dFwiXS5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGVyLnN0YXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiWU5RVEs1RWJDNzhLN1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIue7k+adn+W9leWxj1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYlJlY29yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZGVyID0gd2luZG93W1widHRcIl0uZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRlci5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==