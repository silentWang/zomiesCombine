
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
                        window['xxxxx']("aZdRiBestsdgf");
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
                window['xxxxx']("B3AEM7J75BWdr3sQ7myfaeesx");
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
        if (window && window['xxxxx'])
            window['xxxxx']("gdasghdasgadshgasge");
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
                    if (window && window['xxxxx'])
                        window['xxxxx']("ghdsghasewbxad");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("eCrirp8jJPWSSHfHs");
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
                if (window && window['xxxxx'])
                    window['xxxxx']("zaMpypzesfgds");
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(CommonView_1.default).setType(CommonView_1.EADLAYER.DOUBLE_INCOME);
                });
                break;
            case "bt_auto_merge":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(CommonView_1.default).setType(CommonView_1.EADLAYER.AUTO_COM);
                });
                if (window && window['xxxxx'])
                    window['xxxxx']("yWXK2GCrckXNNh");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9IYWxsU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1QyxrREFBNkM7QUFDN0MsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUN6Qyx3Q0FBbUM7QUFDbkMsbUNBQW1FO0FBQ25FLGtEQUFnSjtBQUNoSixnREFBNEM7QUFDNUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUV6QywwREFBcUQ7QUFDckQsOENBQXlDO0FBQ3pDLDRDQUF1QztBQUN2QywyQ0FBc0M7QUFDdEMseUNBQW9DO0FBRXBDLDREQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFMUU7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUE2K0JDO1FBMytCRyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBU25CLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFDeEIsZUFBUyxHQUFPLElBQUksQ0FBQztRQW9GckIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQXNFZCxvQkFBYyxHQUFHLEtBQUssQ0FBQztRQWtFeEIsVUFBSSxHQUFhLEVBQUUsQ0FBQztRQUU5QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLFdBQUssR0FBcUIsRUFBRSxDQUFDO1FBdUJyQyxtQkFBYSxHQUFZLEtBQUssQ0FBQyxDQUFDLFVB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Q2QsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0JBQ3ZELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDbkI7aUJBQ0o7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQzs7SUF0K0JNLG1CQUFTLEdBQUcsSUFBSSxDQUFDO0lBRnhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ087SUFzZjNCO1FBREYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUF4ZmIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTYrQjdCO0lBQUQsZ0JBQUM7Q0E3K0JELEFBNitCQyxDQTcrQnNDLGdCQUFNLEdBNitCNUM7a0JBNytCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xuaW1wb3J0IE1zZ1RvYXN0IGZyb20gXCIuLi9mcmFtd29yay9Nc2dUb2FzdFwiO1xuaW1wb3J0IENoaWNrRGF0YSBmcm9tIFwiLi4vbWFuYWdlci9DaGlja0RhdGFcIjtcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vbWFuYWdlci9XeENlbnRlclwiO1xuaW1wb3J0IEF1ZGlvTWdyIGZyb20gXCIuLi91dGlscy9BdWRpb01nclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgVXNlcl9sZXZlbCwgQ29uZmlnX2NoaWNrLCBDb25maWdfZ3JvdW5kIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgQ29tbW9uVmlldywgeyBNQVhfRE9VQkxFX0FUVF9USU1FLCBNQVhfRE9VQkxFX0lOQ09NRV9USU1FLCBNQVhfQVVUT19DT01fVElNRSwgTUFYX0RST1BfUExBTlRfVElNRSwgRUFETEFZRVIgfSBmcm9tIFwiLi9wcmVmYWIvQ29tbW9uVmlld1wiO1xuaW1wb3J0IFNoYXJlTGF5ZXIgZnJvbSBcIi4vcHJlZmFiL1NoYXJlVmlld1wiO1xuaW1wb3J0IEVuZW15IGZyb20gXCIuL3ByZWZhYi9FbmVteVwiO1xuaW1wb3J0IEZhaWxWaWV3IGZyb20gXCIuL3ByZWZhYi9GYWlsVmlld1wiO1xuaW1wb3J0IFJlY29yZFZpZXcgZnJvbSBcIi4vcHJlZmFiL1JlY29yZFZpZXdcIjtcbmltcG9ydCBPZmZsaW5lQXdhcmRVSSBmcm9tIFwiLi9wcmVmYWIvT2ZmbGluZUF3YXJkVUlcIjtcbmltcG9ydCBTaG9wVmlldyBmcm9tIFwiLi9wcmVmYWIvU2hvcFZpZXdcIjtcbmltcG9ydCBXaW5WaWV3IGZyb20gXCIuL3ByZWZhYi9XaW5WaWV3XCI7XG5pbXBvcnQgR3JvdW5kSXRlbSBmcm9tIFwiLi9Hcm91bmRJdGVtXCI7XG5pbXBvcnQgQ2hpY2tJdGVtIGZyb20gXCIuL0NoaWNrSXRlbVwiO1xuaW1wb3J0IHsgUGxhbnRJbmZvIH0gZnJvbSBcIi4vVXNlck1vZGVsXCI7XG5pbXBvcnQgQ29pbk5vdEVub3VnaFVJIGZyb20gXCIuL3ByZWZhYi9Db2luTm90RW5vdWdoVUlcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5pZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJhWURGa3Q0TXpOR0p3clIzUVoyYW1uQUZcIik7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbFNjZW5lIGV4dGVuZHMgQmFzZVVJIHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGVuZW15X3ByZTpjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgc3RhdGljIF9pbnN0YW5jZSA9IG51bGw7XG5cbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6SGFsbFNjZW5lXG4gICAge1xuICAgICAgICByZXR1cm4gSGFsbFNjZW5lLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sYXN0ZHJvcHRpbWUgPSAwO1xuICAgIHB1YmxpYyBlbmVteWxpc3Q6Y2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSB3YXZlX2luZm86YW55ID0gbnVsbDtcblxuICAgIGhpZENvbXBvc2VUaXBzKClcbiAgICB7XG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpOy8vZnhfZ3JvdW5kX21lcmdlXG4gICAgICAgIGZvcih2YXIgc2xvdCBvZiBzbG90cy5jaGlsZHJlbilcbiAgICAgICAge1xuICAgICAgICAgICAgc2xvdC5nZXRDaGlsZEJ5TmFtZShcImZ4X2dyb3VuZF9tZXJnZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dDb21wb3NldGlwcyhsdjpudW1iZXIpXG4gICAge1xuICAgICAgICBsZXQgaW5kZXhzID0gW107XG4gICAgICAgIGZvcih2YXIgaXRlbSBvZiB0aGlzLml0ZW1zKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJhc0U1dE5tQU1KNGpuNFFEZFwiKTtcbiAgICAgICAgICAgIGlmKGl0ZW0uZGF0YWNvcHkgJiYgaXRlbS5kYXRhY29weS5sdiA9PSBsdiAmJiBpdGVtLmRyb3B0eXBlID09IDAgJiYgaXRlbS5kYXRhY29weS5sdjw2MClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmRleHMucHVzaChpdGVtLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTsvL2Z4X2dyb3VuZF9tZXJnZVxuICAgICAgICBmb3IodmFyIGkgPSAwO2k8c2xvdHMuY2hpbGRyZW4ubGVuZ3RoOysraSlcbiAgICAgICAge1xuICAgICAgICAgICAgc2xvdHMuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJmeF9ncm91bmRfbWVyZ2VcIikuYWN0aXZlID0gaW5kZXhzLmluZGV4T2YoaSkgPj0wO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoZHQpXG5cdHtcbiAgICAgICAgaWYoZHQ+MSlkdD0xO1xuXHRcdHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKENoaWNrRGF0YS51c2VyLmNvaW4pK1wiXCIpO1xuICAgICAgICAvLyBpZih0aGlzLnJlY29yZGVydGltZSAhPSAwKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBsZXQgcyA9IE1hdGguZmxvb3IoKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMucmVjb3JkZXJ0aW1lKS8xMDAwKTtcbiAgICAgICAgLy8gICAgIGlmKHM+MCl0aGlzLlNldFRleHQoXCJsYmxfbHVwaW5nXCIscytcInNcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgLy8gICAgIHRoaXMuU2V0VGV4dChcImxibF9sdXBpbmdcIixcIlwiKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8veeaOkuW6j1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJOWEd6c1Jud1NjZVpDYnJmWHNqSFwiKTtcbiAgICAgICAgdGhpcy5lbmVteWxpc3Quc29ydCgoYSxiKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGIueSAtIGEueTtcbiAgICAgICAgfSlcblxuICAgICAgICBmb3IodmFyIGkgPSAwO2k8dGhpcy5lbmVteWxpc3QubGVuZ3RoOysraSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5lbmVteWxpc3RbaV0uekluZGV4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhc3Rkcm9wdGltZSArPSBkdDtcbiAgICAgICAgaWYodGhpcy5fbGFzdGRyb3B0aW1lID4gMjUgKiAoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID4gVXRpbHMuZ2V0U2VydmVyVGltZSgpPy4zOjEpKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+aZrumAmuiKseebhuaOieiQvVxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KSByZXR1cm5cbiAgICAgICAgICAgIGxldCBsdiA9IE1hdGgubWF4KDEsIENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpIC0gVXRpbHMuZ2V0UmFuZG9tSW50KDYsIDkpKTtcbiAgICAgICAgICAgIHRoaXMuYnV5Q2hpY2sobHYsIDMpXG4gICAgICAgICAgICB0aGlzLl9sYXN0ZHJvcHRpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/kuIDmrrXml7bpl7TkuI3mk43kvZzvvIzmj5DnpLrlj6/ku6XlkIjmiJBcbiAgICAgICAgaWYodGhpcy50b3VjaGVuZHRpbWUgIT0gMCAmJiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSB0aGlzLnRvdWNoZW5kdGltZSA+IDUwMDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIndlc2VQaEsyc3RpMllqWFByc0dEY2FlYnRcIik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VUaXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5Lit6Ze05pi+56S65Zu+54mHXG4gICAgcHVibGljIGFzeW5jIHNob3dJbWFnZShpbWdwYXRoOnN0cmluZylcbiAgICB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoaW1ncGF0aCxjYy5TcHJpdGVGcmFtZSkgYXMgY2MuU3ByaXRlRnJhbWU7XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJGcktrc1k2V1dtRTVEZFNlbUJpXCIpO1xuICAgICAgICBub2RlLnkgPSAyMDA7XG4gICAgICAgIG5vZGUuc2NhbGUgPSAxLjI7XG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyKSxjYy5zcGF3bihjYy5tb3ZlQnkoMC41LDAsMTAwKSxjYy5mYWRlVG8oMC41LDApKSxjYy5yZW1vdmVTZWxmKCkpKVxuICAgIH1cblxuICAgIHByaXZhdGUgYkZhaWwgPSBmYWxzZTtcbiAgICBlbmVteURpZShub2RlOmNjLk5vZGUsYkZhaWw6Ym9vbGVhbilcbiAgICB7XG4gICAgICAgIGxldCBpc1N0b3AgPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIllDNG1KQURXbjJFeHNiUGJ0XCIpO1xuICAgICAgICBpZihiRmFpbCkgdGhpcy5iRmFpbCA9IHRydWU7XG4gICAgICAgIGZvcih2YXIgaSA9IHRoaXMuZW5lbXlsaXN0Lmxlbmd0aC0xO2k+PTA7LS1pKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihub2RlID09IHRoaXMuZW5lbXlsaXN0W2ldKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuY3JlYXRlY29tcGxldGUgJiYgdGhpcy5lbmVteWxpc3QubGVuZ3RoID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYkZhaWwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIud2F2ZT49IHRoaXMud2F2ZV9pbmZvWzJdKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIud2F2ZT0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXkpO1xuICAgICAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Mb3NlVUlcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRmFpbFZpZXcpLnNldEluZm8oZW5lbXkuZ2V0Qm9zc01vbmV5KCkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLndhdmUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbWFnZShcInRleHR1cmUvZGVmZWF0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCIyZDZjYzZrSE5OSFBNSktRc1N5UHhcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIud2F2ZSsrO1xuICAgICAgICAgICAgICAgIGlzQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlID4gdGhpcy53YXZlX2luZm9bMl0pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSBub2RlLmdldENvbXBvbmVudChFbmVteSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb25leSA9IGVuZW15LmdldEJvc3NNb25leSgpO1xuXHRcdFx0XHQgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMS4yKSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvVmljdG9yeVVJXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5WaWV3KS5zZXRJbmZvKG1vbmV5KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSkpKVxuICAgICAgICAgICAgICAgICAgICBpc1N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci53YXZlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIubHYrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTmV3R3JvdW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gQ2hpY2tEYXRhLnVzZXIubHYgKyBcIl9cIiArIENoaWNrRGF0YS51c2VyLndhdmU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2F2ZV9pbmZvID0gVXNlcl9sZXZlbFtrZXldO1xuICAgICAgICAgICAgICAgICAgICBXeENlbnRlci5hbGRMZXZlbFJlcG9ydChDaGlja0RhdGEudXNlci5sdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImFaZFJpQmVzdHNkZ2ZcIik7XG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwid2luX3dhdmVcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93SW1hZ2UoXCJ0ZXh0dXJlL3N1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVNrZUFuaShcInNwaW5lOm90aGVyL3NoZW5namljaGVuZ2dvbmdcIiwgXCJlZmZlY3RcIiwgdGhpcy5ub2RlLGNjLnYzKDAsMTUwLDApLCAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpc1N0b3ApIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXlzKGlzQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlY29tcGxldGUgPSBmYWxzZTtcbiAgICBjcmVhdGVFbmVteXMoaXNDaGFuZ2U6Ym9vbGVhbiA9IGZhbHNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5iRmFpbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNyZWF0ZWNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGtleSA9IENoaWNrRGF0YS51c2VyLmx2ICsgXCJfXCIgKyBDaGlja0RhdGEudXNlci53YXZlO1xuICAgICAgICB0aGlzLndhdmVfaW5mbyA9IFVzZXJfbGV2ZWxba2V5XTtcblxuICAgICAgICAvL+mAmuWFs+WQjuWwseS4gOebtOivu+acgOWQjuS4gOWFs1xuICAgICAgICBpZighdGhpcy53YXZlX2luZm8pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSA2MCArIFwiX1wiICsgQ2hpY2tEYXRhLnVzZXIud2F2ZTtcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkFyUnpHMldNekVtTVpmamlXYThTNkthc0h6XCIpO1xuICAgICAgICAgICAgdGhpcy53YXZlX2luZm8gPSBVc2VyX2xldmVsW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZihDaGlja0RhdGEudXNlci53YXZlID09IHRoaXMud2F2ZV9pbmZvWzJdKVxuICAgICAgICB7XG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNdXNpYyhcImJnQm9zc1wiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKC44KSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0Jvc3NDb21taW5nVUlcIilcbiAgICAgICAgICAgIH0pKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKENoaWNrRGF0YS51c2VyLndhdmUgPT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiQjNBRU03Sjc1QldkcjNzUTdteWZhZWVzeFwiKTtcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU11c2ljKFwiQkdNMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Yib5bu65oCq54mpXG4gICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgIGxldCBudW0gPSAwO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTx0aGlzLndhdmVfaW5mb1s0XTsrK2kpXG4gICAgICAgICAgICBsaXN0LnB1c2godGhpcy53YXZlX2luZm9bM10pXG4gICAgICAgIFxuICAgICAgICAgICAgbnVtID0gbGlzdC5sZW5ndGg7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDtpPHRoaXMud2F2ZV9pbmZvWzZdOysraSlcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLndhdmVfaW5mb1s1XSlcblxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8bGlzdC5sZW5ndGg7KytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaWQgPSBsaXN0W2ldO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMi4yICogaSksY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lbXlfcHJlKTtcbiAgICAgICAgICAgICAgICBlLnBhcmVudCA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfb2JqXCIpO1xuICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KEVuZW15KS5zZXRJRChpZCxpPj1udW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0LnB1c2goZSk7XG4gICAgICAgICAgICAgICAgaWYoaSA9PSBsaXN0Lmxlbmd0aC0xKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pKSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy/lhbPljaHkv6Hmga9cbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiaEVYU21jRGQ1N3p3WUduREhUWnJLVFwiKTtcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2N1cl9sdlwiLENoaWNrRGF0YS51c2VyLmx2K1wiXCIpO1xuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfd2F2ZXNcIixDaGlja0RhdGEudXNlci53YXZlK1wiL1wiKyB0aGlzLndhdmVfaW5mb1syXSk7XG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9wcmVfbHZcIiwoQ2hpY2tEYXRhLnVzZXIubHYtMSkrXCJcIik7XG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9uZXhfbHZcIiwoQ2hpY2tEYXRhLnVzZXIubHYrMSkrXCJcIik7XG4gICAgICAgIGlmKGlzQ2hhbmdlKXtcbiAgICAgICAgICAgIFV0aWxzLnBsYXlCcmVhdGgodGhpcy5HZXRHYW1lT2JqZWN0KCdsYmxfd2F2ZXMnKSwxLDMsMC41LGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwYXRoOmNjLlZlYzNbXSA9IFtdO1xuXG5cdGl0ZW1fZHJhZzogQ2hpY2tJdGVtID0gbnVsbDtcblx0YXV0b2NvbWluZGV4czogbnVtYmVyW10gPSBbLTEsIC0xXTtcblxuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PENoaWNrSXRlbT4gPSBbXTtcbiAgICBpbml0Q29tcG9zZUNoaWNrcygpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBDaGlja0RhdGEudXNlci5Db21QbGFudHM7XG4gICAgICAgIFxuICAgICAgICBsZXQgbSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYobGlzdFtpXS5sdj42MClsaXN0W2ldLmx2PTYwXG4gICAgICAgICAgICBpZihtW2xpc3RbaV0uaW5kZXhdID09IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLplJnor68uLi7kv67mraNcIilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJqWUVwQ0UyNHdXWjJaR2tXXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbVtsaXN0W2ldLmluZGV4XSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbbGlzdFtpXS5pbmRleF0pXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tsaXN0W2ldLmluZGV4XS5zZXRJdGVtRGF0YShsaXN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI2c0RwaVwiKTtcbiAgICB9XG4gICAgYlBhdXNlQXV0b0NvbTogYm9vbGVhbiA9IGZhbHNlOyAvL+aYr+WQpuaaguWBnOiHquWKqOWQiOaIkFxuXHRiSW5BdXRvQ29tOiBib29sZWFuID0gZmFsc2U7ICAgICAvL+aYr+WQpuato+WcqOiHquWKqOWQiOaIkOWKqOeUu1xuXHRcblx0Z2V0SXRlbUJ5UG9zKHBvczogY2MuVmVjMik6IENoaWNrSXRlbSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0ubm9kZS5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKHBvcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpXS5ub2RlLmdldENvbXBvbmVudChDaGlja0l0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXHRzZXREcmFnUG9zKHBvcykge1xuICAgICAgICBwb3MgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcbiAgICAgICAgcG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImdkYXNnaGRhc2dhZHNoZ2FzZ2VcIik7XG4gICAgfVxuXHRcblx0YXN5bmMgc3RhcnQoKVxuXHR7XG4gICAgICAgIFd4Q2VudGVyLmFsZFJlcG9ydCgnSG9tZVNob3cnLCdzaG93Jyk7XG4gICAgICAgIHRoaXMuaGlkQ29tcG9zZVRpcHMoKTtcbiAgICAgICAgSGFsbFNjZW5lLl9pbnN0YW5jZSA9IHRoaXM7XG5cdFx0bGV0IHNsb3RzID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIik7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdGZvcih2YXIgc2xvdCBvZiBzbG90cy5jaGlsZHJlbil7XG5cdFx0XHRzbG90LmdldENvbXBvbmVudChHcm91bmRJdGVtKS5zZXRJbmRleCgrK2kpO1xuXHRcdH1cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0VmlldygpO1xuXG5cdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9Db21wb3NlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUpIHJldHVyblxuICAgICAgICAgICAgLy8g5bCP57K+54G15o6J6JC9XG4gICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5Ecm9wR2lmdFB0cy5sZW5ndGg+MClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGxldCBiPSB0aGlzLmJ1eUNoaWNrKENoaWNrRGF0YS51c2VyLkRyb3BHaWZ0UHRzWzBdLDQpO1xuICAgICAgICAgICAgICAgaWYoYilcbiAgICAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5Ecm9wR2lmdFB0cy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAvLyAg5bm/5ZGK6LSt5Lmw5oiQ5Yqf77yM5Zug5Li65rKh5pyJ56m65L2N5pyq5oiQ5Yqf5re75YqgXG4gICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImhaRjJSZmFhaE5ITWJFUTdYMmFlXCIpO1xuICAgICAgICAgICBpZihDaGlja0RhdGEudXNlci5BZEJ1eU5vdERyb3AubGVuZ3RoPjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBsZXQgYj0gdGhpcy5idXlDaGljayhDaGlja0RhdGEudXNlci5BZEJ1eU5vdERyb3BbMF0sMik7XG4gICAgICAgICAgICAgICBpZihiKVxuICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLkFkQnV5Tm90RHJvcC5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuXG5cdFx0fSkpLnJlcGVhdEZvcmV2ZXIoKSlcbiAgICAgICAgXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImNGSDZKZWtrcGFzVFlaWlhzaEh3a3kzQURkUzNUWlwiKTtcbiAgICAgICAgQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSA9IE1hdGgubWF4KDAsQ2hpY2tEYXRhLnVzZXIuYXV0b19jb21fdGltZSk7XG4gICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IE1hdGgubWF4KDAsQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lKTtcbiAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lID0gTWF0aC5tYXgoMCxDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUpO1xuICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBNYXRoLm1heCgwLENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSk7XG4gICAgICAgIHRoaXMudXBkYXRlQnV5QnV0dG9uKCk7XG5cbiAgICAgICAgIC8v56a757q/5aWW5YqxLOaaguaXtuWPque7mTblsI/ml7bnmoRcbiAgICAgICAgIGxldCBzdGltZSA9IENoaWNrRGF0YS51c2VyLnNlcnZlclRpbWU7ICAgIFxuICAgICAgICAgdmFyIHQgPSAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gc3RpbWUpIC8gMTAwMDtcbiAgICAgICAgIGlmIChzdGltZSAhPSAwICYmIHQgPiAzKjYwKSB7XG4gICAgICAgICAgICAgdmFyIHQgPSBNYXRoLm1pbig3MjAwICogMywgdCk7XG4gICAgICAgICAgICAgdmFyIG1vbmV5ID0gQ2hpY2tEYXRhLnVzZXIuZ2V0T2ZmbGluZVJld2FyZCh0LzYwKTtcbiAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSSgncHJlZmFiL09mZmxpbmVBd2FyZFVJJywgbnVsbCwgKHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgIHVpLmdldENvbXBvbmVudChPZmZsaW5lQXdhcmRVSSkuZGF0YSA9IG1vbmV5O1xuICAgICAgICAgICAgIH0pXG4gICAgICAgICB9XG5cbiAgICAgICAgZm9yKHZhciBjIG9mIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfcGF0aFwiKS5jaGlsZHJlbilcbiAgICAgICAgICAgIHRoaXMucGF0aC5wdXNoKGMucG9zaXRpb24pXG5cbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwia05leFpYUmNuaWl3NHJYanJzbnk4XCIpO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgzKSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteXMoKTtcbiAgICAgICAgfSkpKVxuXG5cdFx0Ly/mm7TmlrDlkITnp43ml7bpl7RcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYm90dG9tXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSggY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlzWDJJbiA9IENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IDA7XG4gICAgICAgICAgICBsZXQgaXNJbkRiID0gQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMDtcbiAgICAgICAgICAgIGxldCBpc0RwSW4gPSBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwO1xuXG4gICAgICAgICAgICAvL+agoemqjOaXtumXtFxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9ET1VCTEVfQVRUX1RJTUUgKiA2MCAqIDEwMDApIHtcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gTUFYX0RPVUJMRV9JTkNPTUVfVElNRSAqIDYwICogMTAwMCkge1xuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gTUFYX0FVVE9fQ09NX1RJTUUgKiA2MCAqIDEwMDApIHtcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9EUk9QX1BMQU5UX1RJTUUgKiA2MCAqIDEwMDApIHtcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJyZWF0aEFuZ3J5KGlzWDJJbik7XG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJhdHRfeDJfdGltZVwiLCBpc1gySW4gPyBVdGlscy5nZXRUaW1lU3RyQnlTKChDaGlja0RhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkgOiAn5omT6bih6KGAJyk7XG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJyZXdhcmR4Ml90aW1lXCIsIGlzSW5EYiA/IFV0aWxzLmdldFRpbWVTdHJCeVMoKENoaWNrRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkgLyAxMDAwKSA6ICflj4zlgI0nKTtcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjI3Q3M2Tnk2bnhCRHllYnpaeHlQRFB3d1FyXCIpO1xuICAgICAgICAgICAgaWYoIENoaWNrRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImF1dG9fdGltZVwiLCBVdGlscy5nZXRUaW1lU3RyQnlTKChDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSAvIDEwMDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNldFRleHQoXCJhdXRvX3RpbWVcIiwgXCLoh6rliqjlkIjmiJBcIik7XG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiNHRDZmtKeUZmY0NQWkdNM1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9kcm9wX3BsYW50XCIsaXNEcEluID8gVXRpbHMuZ2V0VGltZVN0ckJ5UygoQ2hpY2tEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSAvIDEwMDApIDogJ+aOieiQvScpO1xuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfYnRfYW5ncnlcIikuYWN0aXZlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYXR0X3gyX3RpbWVcIikuYWN0aXZlO1xuICAgICAgICAgICAgLy8gaWYoRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKTwwKVxuICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0U3ByaXRlKFwiYnRfZmFzdF9nZW5fcHJvY2Vzc19pdGVtXCIpLmZpbGxSYW5nZSA9IDA7XG4gICAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRTcHJpdGUoXCJidF9mYXN0X2dlbl9wcm9jZXNzX2l0ZW1cIikuZmlsbFJhbmdlID0gKCAoRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkvMTAwMC82MCkvTUFYX0RST1BfUExBTlRfVElNRTsvLyAobWF4X2Ryb3BfcGxhbnQgKiA2MCAtIChEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKS8xMDAwKSAvbWF4X2Ryb3BfcGxhbnQgKiA2MFxuXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgICAgICAvLyBUYXNrTGF5ZXIuY2hlY2tUYXNrKCk7Ly/ku7vliqHmo4DmtYtcbiAgICAgICAgICAgIC8vIGlmIChHYW1lTWFuYWdlci5JbnN0YW5jZSgpLmlzR3VpZGUgPT0gZmFsc2UpXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2F1dG9cIikuYWN0aXZlID0gRGF0YS51c2VyLmd1aWRlSW5kZXggPiAyO1xuICAgICAgICAgICAgLy8gRGF0YS51c2VyLmNoZWNrTmV3VG9keSgpO1xuXHRcdH0pLGNjLmRlbGF5VGltZSgxKSkucmVwZWF0Rm9yZXZlcigpKTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMFwiKS5hY3RpdmUgPSBDaGlja0RhdGEudXNlci5ndWlkZUluZGV4ID09IDA7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuR2V0R2FtZU9iamVjdChcInN1cGVybWFya2V0XCIpKVxuICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwic3VwZXJtYXJrZXRcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMywgMjApLCBjYy5yb3RhdGVUbygwLjMsIC0xMCksIGNjLnJvdGF0ZVRvKDAuMiwgMCksIGNjLmRlbGF5VGltZSgyKSkucmVwZWF0Rm9yZXZlcigpKTtcblxuXG4gICAgICAgIC8vIGlmICh0aGlzLkdldEdhbWVPYmplY3QoXCJwb3dlcm1hblwiKSlcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInBvd2VybWFuXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMykpLnJlcGVhdEZvcmV2ZXIoKSk7XG5cbiAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9pbnZpYXRlXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMykpLnJlcGVhdEZvcmV2ZXIoKSk7XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImNyckRGVFwiKTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibHVwaW5fZ2VtXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMykpLnJlcGVhdEZvcmV2ZXIoKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1JlY29yZGVyXCIpKSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuYWN0aXZlID0gd2luZG93W1widHRcIl07XG4gICAgICAgIC8vIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xuICAgICAgICAvLyAgICAgY29uc3QgcmVjb3JkZXIgPSB3aW5kb3dbXCJ0dFwiXS5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XG4gICAgICAgIC8vICAgICByZWNvcmRlci5vblN0YXJ0KHJlcyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibHVwaW5fZ2VtXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9WQ1JcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2VuZFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjUsIC45KSwgY2Muc2NhbGVUbygwLjUsIDEpKS5yZXBlYXRGb3JldmVyKCkpO1xuICAgICAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0dOW9leWxj+W8gOWni1wiKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJlY29yZGVydGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcbiAgICAgICAgLy8gICAgIH0pO1xuXG4gICAgICAgIC8vICAgICByZWNvcmRlci5vblN0b3AocmVzID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJSZWNvcmRlciA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImx1cGluX2dlbVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zY2FsZSA9IDE7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1ZDUlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9lbmRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0dOW9leWxj+e7k+adn1wiKTtcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMudmlkZW9QYXRoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCI0WTZQdE04bVJwd2s3SnNcIik7XG4gICAgICAgIC8vICAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMucmVjb3JkZXJ0aW1lIDwgMzAwMCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBNc2dIaW50cy5zaG93KFwi5b2V5bGP5pe26Ze06L+H55+tXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJlY29yZGVydGltZSA9IDBcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIH1cblxuICAgICAgICAvLyAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gMFxuICAgICAgICAvLyAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0x1UGluUmVzdWx0XCIsIG51bGwsIChub2RlOiBjYy5Ob2RlKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFJlY29yZFZpZXcpLnNldERhdGEocmVzKTtcbiAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiSlpyTldTV3dqdE1kaDdETU1oZVwiKTtcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIHRoaXMub25HYW1lU2hvdywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCB0aGlzLm9uR2FtZUhpZGUsIHRoaXMpO1xuICAgIH1cblxuICAgIGJSZWNvcmRlciA9IGZhbHNlO1xuICAgIHJlY29yZGVydGltZSA9IDA7XG4gICAgb25HYW1lSGlkZSgpIHtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLmdhbWUub2ZmKGNjLmdhbWUuRVZFTlRfU0hPVywgdGhpcy5vbkdhbWVTaG93KTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9ISURFLCB0aGlzLm9uR2FtZUhpZGUpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvbkdhbWVTaG93KCkge1xuICAgICAgICBpZiAoVXRpbHMuc2hhcmV0aW1lICE9IDAgJiYgVXRpbHMuc2hhcmVjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIFV0aWxzLnNoYXJldGltZSA+PSAyMDAwKSB7XG4gICAgICAgICAgICAgICAgVXRpbHMuc2hhcmVjYWxsYmFjayh0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIuWIhuS6q+Wksei0pVwiKTtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJDQ1J5NXlZeUZXUHkzWkNDNFpkS2lzUnhcIik7XG4gICAgICAgICAgICAgICAgVXRpbHMuc2hhcmVjYWxsYmFjayhmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFV0aWxzLnNoYXJldGltZSA9IDA7XG4gICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cblxuICAgIG9wZW5OZXdHcm91bmQoKXtcbiAgICAgICAgbGV0IGN1cm9wZW4gPSBHcm91bmRJdGVtLmdldE5lZWRPcGVuKCk7XG4gICAgICAgIGlmKGN1cm9wZW4gPCAwKSByZXR1cm47XG4gICAgICAgIGxldCBsdiA9IENvbmZpZ19ncm91bmRbY3Vyb3Blbl0ucHJpY2U7XG4gICAgICAgIGlmKGx2IDwgQ2hpY2tEYXRhLnVzZXIubHYpIHJldHVybjtcbiAgICAgICAgQ2hpY2tEYXRhLnVzZXIuc2xvdHNbY3Vyb3Blbl0gPSAxO1xuICAgICAgICBDaGlja0RhdGEuc2F2ZSgpO1xuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTtcbiAgICAgICAgbGV0IHNsb3QgPSBzbG90cy5jaGlsZHJlbltjdXJvcGVuXTtcbiAgICAgICAgaWYoc2xvdCl7XG4gICAgICAgICAgICBzbG90LmdldENvbXBvbmVudChHcm91bmRJdGVtKS5zZXRJbmRleChjdXJvcGVuKTtcbiAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLmiJDlip/op6PplIHmlrDkvY3nva5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzSW5BbmdyeSA9IGZhbHNlO1xuICAgIHB1YmxpYyBicmVhdGhBbmdyeShpc2Jvb2w6Ym9vbGVhbil7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5HZXRHYW1lT2JqZWN0KCdidG5fYW5ncnknKVxuICAgICAgICBpZighbm9kZSkgcmV0dXJuO1xuICAgICAgICBpZihpc2Jvb2wpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNJbkFuZ3J5KXtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJRZjZZaFdXVDgzeFFSZEhLUkZFQVwiKTtcbiAgICAgICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZVggPSAxO1xuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGVZID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNJbkFuZ3J5ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pc0luQW5ncnkpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc0luQW5ncnkgPSB0cnVlO1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJBN21pcmtBQmg2MnBZV1NBZjNqWkpXU0drVHhcIik7XG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxMCksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIFV0aWxzLnBsYXlCcmVhdGgobm9kZSkuc2V0VGFnKDIpO1xuICAgICAgICB9KSkucmVwZWF0KDEpKS5zZXRUYWcoMSlcbiAgICB9XG5cblx0QHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVfc29sZGllcjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBhc3luYyBpbml0VmlldygpIHtcbiAgICAgIFxuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJXcjN6N1diZmR6ZEhUaHlrNXdkU3ljZjd0RVwiKTtcbiAgICAgICAgdmFyIG5vZGVfY29tID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIik7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgKytpKSB7XG5cdFx0XHR2YXIgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlX3NvbGRpZXIpO1xuXHRcdFx0bm9kZS5wYXJlbnQgPSBub2RlX2NvbTtcblx0XHRcdG5vZGUucG9zaXRpb24gPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKS5jaGlsZHJlbltpXS5wb3NpdGlvbjsvLyBjYy52Mih4LCB5KTtcblx0XHRcdG5vZGUubmFtZSA9IFwiaXRtZVwiICsgaW5kZXg7XG5cdFx0XHR2YXIgcGxhbnQ6IENoaWNrSXRlbSA9IG5vZGUuZ2V0Q29tcG9uZW50KENoaWNrSXRlbSk7XG5cdFx0XHRwbGFudC5pbmRleCA9IGluZGV4O1xuXHRcdFx0dGhpcy5pdGVtcy5wdXNoKHBsYW50KTtcblx0XHRcdCsraW5kZXhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImVpRW03ZndZSE5oWjhBMk1CRFwiKTtcbiAgICAgICAgdmFyIG5vZGVfZHJhZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlX3NvbGRpZXIpO1xuICAgICAgICBub2RlX2RyYWcucGFyZW50ID0gbm9kZV9jb20ucGFyZW50O1xuICAgICAgICBub2RlX2RyYWcubmFtZSA9IFwiaXRlbV9kcmFnXCI7XG4gICAgICAgIG5vZGVfZHJhZy54ID0gLTEwMDA7XG5cbiAgICAgICAgdGhpcy5pdGVtX2RyYWcgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikuZ2V0Q29tcG9uZW50KENoaWNrSXRlbSk7XG4gICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXRlbV9kcmFnLmJEcmFnID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmluaXRDb21wb3NlQ2hpY2tzKCk7XG5cbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJQYXVzZUF1dG9Db20gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaaguWBnOiHquWKqOWQiOaIkFwiKVxuXG4gICAgICAgICAgICAvL+WmguaenOWcqOiHquWKqOWQiOaIkOS4re+8jOWPlua2iOW9k+WJjeWQiOaIkFxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlICYmIHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiTjU2VHJIY3JlNktkYWZaU3ljamhFUVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWPlua2iOW9k+WJjeWQiOaIkFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHBvcyA9IG5vZGVfY29tLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5UG9zKHBvcyk7XG5cbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInlSZGk2d3ROZk5FblpmQUVcIik7XG4gICAgICAgICAgICBpZihpdGVtICYmIGl0ZW0uZHJvcHR5cGUgIT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtLmRyb3B0eXBlID0gMDtcbiAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZUl0ZW0oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5kYXRhY29weSAmJiBpdGVtLmRyb3B0eXBlID09IDAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaFBvcyA9IHBvcztcbiAgICAgICAgICAgICAgICB0aGlzLmJDaG9vc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERyYWdQb3MoaXRlbS5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5pbmRleCA9IGl0ZW0uaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuc2V0SXRlbURhdGEoaXRlbS5kYXRhY29weSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBpdGVtO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29tcG9zZXRpcHMoaXRlbS5kYXRhY29weS5sdilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZjVrREpoNllicGFcIik7XG4gICAgICAgIG5vZGVfY29tLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB2YXIgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgcG9zID0gbm9kZV9jb20uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJDaG9vc2VkICYmIHBvcy5zdWIodGhpcy50b3VjaFBvcykubWFnKCkgPiAxNSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RHJhZ1Bvcyhwb3MpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMSk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKGUuZ2V0TG9jYXRpb24oKS5zdWIoY2MudjIocG9zMS54LHBvczEueSkpLm1hZygpIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU1O1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zY2FsZSA9IDAuNTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIG5vZGVfY29tLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jb21wb3NlSGFuZGxlLCB0aGlzKTtcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZDN5Q1NpYTJ0bkJQTTdQVzM2blFCNzU1XCIpO1xuICAgICAgICBub2RlX2NvbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuY29tcG9zZUhhbmRsZSwgdGhpcyk7XG4gICAgfVxuXG5cdGJDaG9vc2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdG91Y2hQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XG5cdFxuICAgIHN0YXJ0QXV0b0NvbXBvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmJQYXVzZUF1dG9Db20gfHwgdGhpcy5iSW5BdXRvQ29tKSByZXR1cm47XG4gICAgICAgIGlmIChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPCBDaGlja0RhdGEudXNlci5hdXRvX2NvbV90aW1lICYmICF0aGlzLmJJbkF1dG9Db20pIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdENvbXBvc2VDaGlja3MoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aCA7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXSB8fCAhdGhpcy5pdGVtc1tpXS5kYXRhY29weSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2opIHtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2pdIHx8ICF0aGlzLml0ZW1zW2pdLmRhdGFjb3B5KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5kYXRhY29weS5sdiA9PSB0aGlzLml0ZW1zW2pdLmRhdGFjb3B5Lmx2ICYmIHRoaXMuaXRlbXNbaV0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2pdLmRyb3B0eXBlID09IDAgJiYgdGhpcy5pdGVtc1tpXS5kYXRhY29weS5sdjw2MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gdGhpcy5pdGVtc1tpXS5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IHRoaXMuaXRlbXNbal0uaW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gdGhpcy5pdGVtc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmluZGV4ID0gdGhpcy5pdGVtc1tqXS5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLnNldEl0ZW1EYXRhKHRoaXMuaXRlbXNbal0uZGF0YWNvcHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tqXS5zZXRJdGVtRGF0YShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkJTdEREaWQ2UFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUucG9zaXRpb24gPSB0aGlzLml0ZW1zW2pdLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERyYWdQb3ModGhpcy5pdGVtc1tqXS5ub2RlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLml0ZW1zW2ldLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRwb3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLlvIDlp4voh6rliqjlkIjmiJBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYkluQXV0b0NvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xMywgY2MudjIodGFyZ2V0cG9zLngsdGFyZ2V0cG9zLnkpKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImVieHJId3dhM3N3UEVOaUJoc25BQnNwZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wRWZmKHRoaXMuaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuiHquWKqOWQiOaIkOe7k+adn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJJbkF1dG9Db20gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hlbmR0aW1lID0gMDtcbiAgICBjb21wb3NlSGFuZGxlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy50b3VjaGVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICAgIHRoaXMuaGlkQ29tcG9zZVRpcHMoKTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4yNSksY2MuZmFkZVRvKDAuMjUsMCkpKVxuXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYlBhdXNlQXV0b0NvbSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5iSW5BdXRvQ29tID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmgaLlpI3oh6rliqjlkIjmiJBcIilcbiAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwieDROXCIpO1xuICAgICAgICB9KSkpXG4gICAgICAgIHRoaXMuYkNob29zZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHBvcyA9IGUgPyBlLmdldExvY2F0aW9uKCkgOiBjYy5WZWMyLlpFUk87XG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy/liKDpmaRcbiAgICAgICAgICAgIHZhciBwb3MxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5wb3NpdGlvbjtcbiAgICAgICAgICAgIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMSk7XG4gICAgICAgICAgICBpZiAocG9zLnN1YihjYy52Mihwb3MxLngscG9zMS55KSkubWFnKCkgPCAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjJucFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnNjYWxlID0gMC41O1xuICAgICAgICAgICAgICAgIHZhciB0bXA6IG51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmRhdGFjb3B5KSB0bXArKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodG1wIDw9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZ2hkc2doYXNld2J4YWRcIik7XG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLlsI/puKHmlbDph4/ov4flsJHkuI3og73liKDpmaRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5Lmx2ID49IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLmnIDpq5jnrYnnuqflsI/puKHlsLHkuI3liKDpmaTkuoblkKfvvIFcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiN0Y4Q0d6d0ZIUUF3QWR5YkJiNHhcIik7XG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIudXBkYXRlU2VsbENoaWNrQ29pbih0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEobnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVSZWNydWl0bWVudCgpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChHYW1lU2NlbmUuSW5zdGFuY2UoKS5mcHMgPiAzMClcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZS91aS95aW5saWFuZ3plbmdqaWFcIiwgXCJlZmZlY3RcIiwgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKSwgY2MudjIoMCwgMjApLCAxKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/lkIjmiJAg56e75YqoICDkuqTmjaJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICB2YXIgaXRlbTogQ2hpY2tJdGVtID0gdGhpcy5nZXRJdGVtQnlQb3MocG9zKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBDaGlja0RhdGEudXNlci5zbG90c1tpdGVtLmluZGV4XSA9PSAwIHx8IGl0ZW0gPT0gdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gfHwgKGl0ZW0gJiYgaXRlbS5kcm9wdHlwZSAhPSAwKSkge1xuXG4gICAgICAgICAgICAgICAgLy/lj5bmtohcbiAgICAgICAgICAgICAgICBpZih0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSlcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJ5XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGF0YWNvcHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xuICAgICAgICAgICAgICAgIC8v56e75YqoXG4gICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIubW92ZUVmZih0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5pbmRleCwgaXRlbS5pbmRleCk7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiZm5lZkR5bk1CaVh4MkZcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEobnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uZGF0YWNvcHkub3BlbiA9PSB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5vcGVuICYmXG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhY29weS5sdiA9PSB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5sdiAmJiBpdGVtLmRhdGFjb3B5LmluZGV4ICE9IHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5LmluZGV4ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCAmJiBpdGVtLmRhdGFjb3B5Lmx2PDYwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29tcEVmZihpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiemY0cDdGQ1dcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XG4gICAgICAgICAgICAgICAgLy/kuqTmjaJcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5tb3ZlRWZmKHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLmluZGV4LCBpdGVtLmluZGV4KTtcblxuICAgICAgICAgICAgICAgIHZhciBfdG1wOiBQbGFudEluZm8gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0uZGF0YWNvcHkpKTtcbiAgICAgICAgICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YShfdG1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXHRcbiAgICBzaG93Q29tcEVmZihpdGVtOiBDaGlja0l0ZW0pIHtcbiAgICAgICAgbGV0IGIgPSBDaGlja0RhdGEudXNlci5jb21wb3NlQ2hpY2tzKGl0ZW0uaW5kZXgsIHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5LmluZGV4KTtcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCA9PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJmTkR6UHJOa1FSRHhTRjg1M1p3ZTdUUVd3d2tKXCIpO1xuICAgICAgICAgICAgQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCArKztcbiAgICAgICAgICAgIENoaWNrRGF0YS5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFiKSByZXR1cm47XG4gICAgICAgIGxldCBuZXh0R3VuID0gQ2hpY2tEYXRhLnVzZXIuZ2V0Q2hpY2tJbmZvKGl0ZW0uaW5kZXgpO1xuICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKG5leHRHdW4pO1xuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPSBudWxsO1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJTblpNUzUyWlJtWFFTcGVrTVwiKTtcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmF1dG9jb21pbmRleHMgPSBbLTEsIC0xXTtcblxuICAgICAgICBsZXQgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0ubm9kZS5wb3NpdGlvbik7XG4gICAgICAgIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0cG9zKTtcbiAgICAgICAgdGhpcy5wbGF5U2tlQW5pKFwic3BpbmU6b3RoZXIvZWZmZWN0X2hlY2hlbmdcIiwgXCJlZmZlY3RcIiwgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBhcmVudCwgdGFyZ2V0cG9zLmFkZChjYy52MygwLDIwLDApKSwgMSk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlQnV5QnV0dG9uKClcbiAgICB7XG4gICAgICAgIGxldCBsdiA9IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpIC0gMztcbiAgICAgICAgaWYobHY8MSlsdiA9IDE7XG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9idXlfbHZsXCIsJ0xWLicgKyBsdik7XG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9idXlfY29zdFwiLFV0aWxzLmZvcm1hdE51bWJlcihDaGlja0RhdGEudXNlci5idXlDaGlja1ByaWNlKGx2KSkpO1xuXG4gICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtsdn1fc2tlYDtcbiAgICAgICAgbGV0IGF0bGFzcGF0aCA9IGBzcGluZTpmbG93ZXIke2x2fV90ZXhgO1xuICAgICAgICBsZXQgY2hpY2sgPSB0aGlzLkdldERyYWdvbkFtYXR1cmUoJ2NoaWNrYnV5Jyk7XG4gICAgICAgIGNoaWNrLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcbiAgICAgICAgY2hpY2suZHJhZ29uQXRsYXNBc3NldCA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoYXRsYXNwYXRoLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0O1xuICAgICAgICBjaGljay5hcm1hdHVyZU5hbWUgPSAnQXJtYXR1cmUnO1xuICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XG4gICAgfVxuICAgIC8vMCBjb2luIDEgZ2VtIDIgYWQgM+aZrumAmuaOieiQvSA05bCP57K+54G15o6J6JC9XG4gICAgcHVibGljIGJ1eUNoaWNrKGx2Om51bWJlcixidXl0eXBlOm51bWJlcikge1xuICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJiaVl3UXpIRUZzNUtLSjIzXCIpO1xuICAgICAgICB2YXIgaXRlbTogQ2hpY2tJdGVtID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICBpZiAoQ2hpY2tEYXRhLnVzZXIuc2xvdHNbaV0gPT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaV0uZGF0YWNvcHkgJiYgdGhpcy5hdXRvY29taW5kZXhzWzBdICE9IGkgJiYgdGhpcy5hdXRvY29taW5kZXhzWzFdICE9IGkpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkpmQ053TUZrWnJYUDJFWm4zcGhRRVJITWh4YlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWx2KSB7XG4gICAgICAgICAgICBsdiA9IENoaWNrRGF0YS51c2VyLmdldEx2bE1heCgpIC0gMztcbiAgICAgICAgICAgIGlmKGx2PDEpbHYgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkRZXCIpO1xuICAgICAgICAgICAgaWYgKGJ1eXR5cGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2tQcmljZShsdik7XG4gICAgICAgICAgICAgICAgaWYgKENoaWNrRGF0YS51c2VyLmJ1eUNoaWNrUHJpY2UobHYpID4gQ2hpY2tEYXRhLnVzZXIuY29pbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzIDwgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y2hpY2tfdG90YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihDaGlja0RhdGEudXNlci50b2RheV9nZXRjb2luX3RpbWVzIDwgQ2hpY2tEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90b3RhbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Db2luTm90RW5vdWdoXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChDb2luTm90RW5vdWdoVUkpLnNldFZpZXdUeXBlKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1zZ1RvYXN0LnNob3coXCLph5HluIHkuI3otrNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJlVDVXWnlpSjdaOG54R1NXZGNiSlwiKTtcbiAgICAgICAgICAgICAgICBDaGlja0RhdGEudXNlci5jb2luIC09IGNvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChidXl0eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2VtID0gTWF0aC5taW4oNSwgTnVtYmVyKENvbmZpZ19jaGlja1tsdiAtIDFdWzZdKSk7XG4gICAgICAgICAgICAgICAgaWYgKGdlbSA+IENoaWNrRGF0YS51c2VyLmdlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNc2dUb2FzdC5zaG93KFwi6ZK755+z5LiN6LazXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmdlbSAtPSBnZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGJ1eXR5cGUgPT0gMil7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJ1eXR5cGUgPj0gMykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6aOe5py65o6J6JC9XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheU1YKFwiZmxvd2VyX3BvdF9sYW5kXCIpXG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9zZUhhbmRsZShudWxsKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0SXRlbURhdGEoQ2hpY2tEYXRhLnVzZXIuYnV5Q2hpY2soaXRlbS5pbmRleCwgbHYpIGFzIFBsYW50SW5mbyxidXl0eXBlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV5QnV0dG9uKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiMlpKRDV6UEpZUlpHTXo4U3g1Y1hcIik7XG4gICAgICAgICAgICBpZiAoYnV5dHlwZSA8PSAyKSB7XG4gICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIuS9jee9ruS4jeWkn+WVpu+8gVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjI1KSxjYy5mYWRlVG8oMC4yNSwwKSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICAgICAgcHJpdmF0ZSBTRWF3X3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiQ0JkbTRuYWRwQnRyZDZ3cFwiKTsgfVxuXG4gICAgcHJpdmF0ZSBjb21wb3NlVGlwKCl7XG4gICAgICAgIHRoaXMudG91Y2hlbmR0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgICBpZiAodGhpcy5iUGF1c2VBdXRvQ29tIHx8IHRoaXMuYkluQXV0b0NvbSkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuYkluQXV0b0NvbSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aCA7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXSB8fCAhdGhpcy5pdGVtc1tpXS5kYXRhY29weSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2opIHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tqXSB8fCAhdGhpcy5pdGVtc1tqXS5kYXRhY29weSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkubHYgPT0gdGhpcy5pdGVtc1tqXS5kYXRhY29weS5sdiAmJiB0aGlzLml0ZW1zW2ldLmRyb3B0eXBlID09IDAgJiYgdGhpcy5pdGVtc1tqXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkubHYgPCA2MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4MSA9IHRoaXMuaXRlbXNbaV0uaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJNaHp6M2ZrNWpDSlBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXgyID0gdGhpcy5pdGVtc1tqXS5pbmRleFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcDAgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKS5jaGlsZHJlbltpbmRleDFdLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baW5kZXgyXS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikucG9zaXRpb24gPSBwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygxLGNjLnYyKHAxLngscDEueSkpLGNjLm1vdmVUbygwLjEsY2MudjIocDAueCxwMC55KSkpLnJlcGVhdEZvcmV2ZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblx0b25VSUNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgYnRuTmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlNWChcImNsaWNrXCIpO1xuXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xuXHRcdFx0Y2FzZSBcImJ0bl9zZXR0aW5nXCI6XG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1NldHRpbmdVSVwiKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJidG5fc2lnblwiOlxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9TaWduVUlcIilcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYnRuX2J1eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnV5Q2hpY2sobnVsbCwwKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8wXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmKENoaWNrRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIENoaWNrRGF0YS51c2VyLmd1aWRlSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgQ2hpY2tEYXRhLnNhdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoQ2hpY2tEYXRhLnVzZXIuZ3VpZGVJbmRleCA9PSAxKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb3NlVGlwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImVDcmlycDhqSlBXU1NIZkhzXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJidF9mYXN0X2dlblwiOlxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9Pntcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChDb21tb25WaWV3KS5zZXRUeXBlKEVBRExBWUVSLkRST1BfUExBTlQpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImJ0bl9hbmdyeVwiOlxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9Pntcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChDb21tb25WaWV3KS5zZXRUeXBlKEVBRExBWUVSLkRPVUJMRV9BVFQpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImJ0bl9kb3VibGVfY29pblwiOlxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInphTXB5cHplc2ZnZHNcIik7XG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0FkTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xuXHRcdFx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KENvbW1vblZpZXcpLnNldFR5cGUoRUFETEFZRVIuRE9VQkxFX0lOQ09NRSlcblx0XHRcdFx0fSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYnRfYXV0b19tZXJnZVwiOlxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9Pntcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChDb21tb25WaWV3KS5zZXRUeXBlKEVBRExBWUVSLkFVVE9fQ09NKVxuXHRcdFx0XHR9KVxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcInlXWEsyR0NyY2tYTk5oXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9zaG9wXCI6XG4gICAgICAgICAgICAgICBTaG9wVmlldy5zaG93KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX2RlbGV0ZVwiOlxuICAgICAgICAgICAgICAgIGlmKHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikub3BhY2l0eSA9PSAyNTUpXG4gICAgICAgICAgICAgICAgTXNnVG9hc3Quc2hvdyhcIuaLluWKqOWIsOi/memHjOWNluWHulwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9pbnZpYXRlXCI6XG4gICAgICAgICAgICAgICAgLy8gV3hDZW50ZXIuc2hhcmVBcHBNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgV3hDZW50ZXIuYWxkUmVwb3J0KCdJbnZpdGF0aW9uQ2xpY2snLCdjbGljaycpO1xuICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL1NoYXJlTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChTaGFyZUxheWVyKS5zZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJidG5fUmVjb3JkZXJcIjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iUmVjb3JkZXIgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5byA5aeL5b2V5bGPXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJSZWNvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSB3aW5kb3dbXCJ0dFwiXS5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRlci5zdGFydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJZTlFUSzVFYkM3OEs3XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi57uT5p2f5b2V5bGPXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYlJlY29yZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSB3aW5kb3dbXCJ0dFwiXS5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRlci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn1cbiJdfQ==