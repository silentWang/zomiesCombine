
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
var MsgHints_1 = require("../framwork/MsgHints");
var Data_1 = require("../manager/Data");
var WxCenter_1 = require("../manager/WxCenter");
var AudioMgr_1 = require("../utils/AudioMgr");
var Utils_1 = require("../utils/Utils");
var DB_1 = require("./DB");
var AdLayer_1 = require("./prefab/AdLayer");
var ShareLayer_1 = require("./prefab/ShareLayer");
var Enemy_1 = require("./prefab/Enemy");
var LoseUI_1 = require("./prefab/LoseUI");
var LuPinResult_1 = require("./prefab/LuPinResult");
var OfflineAwardUI_1 = require("./prefab/OfflineAwardUI");
var ShopLayer_1 = require("./prefab/ShopLayer");
var VictoryUI_1 = require("./prefab/VictoryUI");
var SlotItem_1 = require("./SlotItem");
var SoldierItem_1 = require("./SoldierItem");
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
        // console.log(indexs);
        var slots = this.GetGameObject("slots"); //fx_ground_merge
        for (var i = 0; i < slots.children.length; ++i) {
            slots.children[i].getChildByName("fx_ground_merge").active = indexs.indexOf(i) >= 0;
        }
    };
    HallScene.prototype.update = function (dt) {
        if (dt > 1)
            dt = 1;
        this.SetText("lbl_coin", Utils_1.default.formatNumber(Data_1.default.user.coin) + "");
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
        if (this._lastdroptime > 25 * (Data_1.default.user.drop_plant_time > Utils_1.default.getServerTime() ? .3 : 1)) {
            //普通花盆掉落
            if (this.item_drag.datacopy)
                return;
            var lv = Math.max(1, Data_1.default.user.GetMaxLv() - Utils_1.default.getRandomInt(6, 9));
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
                if (Data_1.default.user.wave >= this.wave_info[2]) {
                    Data_1.default.user.wave = 1;
                    isStop = true;
                    var enemy_1 = node.getComponent(Enemy_1.default);
                    Utils_1.default.createUI("prefab/LoseUI").then(function (node) {
                        node.getComponent(LoseUI_1.default).setInfo(enemy_1.getBossMoney());
                    });
                }
                else {
                    Data_1.default.user.wave = 1;
                    this.showImage("texture/defeat");
                }
            }
            else {
                Data_1.default.user.wave++;
                if (Data_1.default.user.wave > this.wave_info[2]) {
                    var enemy = node.getComponent(Enemy_1.default);
                    var money_1 = enemy.getBossMoney();
                    this.node.runAction(cc.sequence(cc.delayTime(1.2), cc.callFunc(function () {
                        Utils_1.default.createUI("prefab/VictoryUI").then(function (node) {
                            node.getComponent(VictoryUI_1.default).setInfo(money_1);
                        });
                    })));
                    isStop = true;
                    Data_1.default.user.wave = 1;
                    Data_1.default.user.lv++;
                    Data_1.default.save(true);
                    var key = Data_1.default.user.lv + "_" + Data_1.default.user.wave;
                    this.wave_info = DB_1.DB_level[key];
                }
                else {
                    AudioMgr_1.default.Instance().playSFX("win_wave");
                    // this.showImage("texture/success");
                    this.playSkAni("spine:other/shengjichenggong", "effect", this.node, cc.v3(0, 150, 0), 2);
                }
            }
            if (isStop)
                return;
            this.createwave();
        }
    };
    HallScene.prototype.createwave = function () {
        var _this = this;
        this.bFail = false;
        this.createcomplete = false;
        var key = Data_1.default.user.lv + "_" + Data_1.default.user.wave;
        this.wave_info = DB_1.DB_level[key];
        //通关后就一直读最后一关
        if (!this.wave_info) {
            var key_1 = 60 + "_" + Data_1.default.user.wave;
            this.wave_info = DB_1.DB_level[key_1];
        }
        if (Data_1.default.user.wave == this.wave_info[2]) {
            AudioMgr_1.default.Instance().playBGM("bgBoss");
            this.node.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(function () {
                Utils_1.default.createUI("prefab/BossCommingUI");
            })));
        }
        else if (Data_1.default.user.wave == 1) {
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
        this.SetText("lbl_cur_lv", Data_1.default.user.lv + "");
        this.SetText("lbl_waves", Data_1.default.user.wave + "/" + this.wave_info[2]);
        this.SetText("lbl_pre_lv", (Data_1.default.user.lv - 1) + "");
        this.SetText("lbl_nex_lv", (Data_1.default.user.lv + 1) + "");
    };
    HallScene.prototype.initComposeItems = function () {
        var list = Data_1.default.user.ComPlants;
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
                return this.items[i].node.getComponent(SoldierItem_1.default);
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
            var slots, i, _i, _a, slot, t, t, money, _b, _c, c, recorder;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.hidemergetips();
                        HallScene_1._instance = this;
                        WxCenter_1.default.init();
                        slots = this.GetGameObject("slots");
                        i = 0;
                        for (_i = 0, _a = slots.children; _i < _a.length; _i++) {
                            slot = _a[_i];
                            slot.getComponent(SlotItem_1.default).setIndex(++i);
                        }
                        return [4 /*yield*/, this.initView()];
                    case 1:
                        _d.sent();
                        this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
                            _this.tryAutocom();
                            if (_this.item_drag.node.active)
                                return;
                            // 小精灵掉落
                            if (Data_1.default.user.DropGiftPts.length > 0) {
                                var b = _this.tryBuyPlant(Data_1.default.user.DropGiftPts[0], 4);
                                if (b)
                                    Data_1.default.user.DropGiftPts.shift();
                            }
                            //  广告购买成功，因为没有空位未成功添加
                            if (Data_1.default.user.AdBuyNotDrop.length > 0) {
                                var b = _this.tryBuyPlant(Data_1.default.user.AdBuyNotDrop[0], 2);
                                if (b)
                                    Data_1.default.user.AdBuyNotDrop.shift();
                            }
                        })).repeatForever());
                        Data_1.default.user.auto_com_time = Math.max(0, Data_1.default.user.auto_com_time);
                        Data_1.default.user.double_income_time = Math.max(0, Data_1.default.user.double_income_time);
                        Data_1.default.user.drop_plant_time = Math.max(0, Data_1.default.user.drop_plant_time);
                        Data_1.default.user.double_att_time = Math.max(0, Data_1.default.user.double_att_time);
                        this.updateBuyButton();
                        t = (Utils_1.default.getServerTime() - Data_1.default.user.serverTime) / 1000;
                        if (Data_1.default.user.serverTime != 0 && t > 3 * 60) {
                            t = Math.min(7200 * 3, t);
                            money = Data_1.default.user.getOfflineEarning(t / 60);
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
                            var isX2In = Data_1.default.user.double_att_time - Utils_1.default.getServerTime() > 0;
                            var isInDb = Data_1.default.user.double_income_time - Utils_1.default.getServerTime() > 0;
                            var isDpIn = Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime() > 0;
                            //校验时间
                            if (Data_1.default.user.double_att_time - Utils_1.default.getServerTime() > AdLayer_1.MAX_DOUBLE_ATT_TIME * 60 * 1000) {
                                Data_1.default.user.double_att_time = Utils_1.default.getServerTime();
                            }
                            if (Data_1.default.user.double_income_time - Utils_1.default.getServerTime() > AdLayer_1.MAX_DOUBLE_INCOME_TIME * 60 * 1000) {
                                Data_1.default.user.double_income_time = Utils_1.default.getServerTime();
                            }
                            if (Data_1.default.user.auto_com_time - Utils_1.default.getServerTime() > AdLayer_1.MAX_AUTO_COM_TIME * 60 * 1000) {
                                Data_1.default.user.auto_com_time = Utils_1.default.getServerTime();
                            }
                            if (Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime() > AdLayer_1.MAX_DROP_PLANT_TIME * 60 * 1000) {
                                Data_1.default.user.drop_plant_time = Utils_1.default.getServerTime();
                            }
                            _this.SetText("att_x2_time", isX2In ? Utils_1.default.getTimeStrByS((Data_1.default.user.double_att_time - Utils_1.default.getServerTime()) / 1000) : '狂暴');
                            _this.SetText("rewardx2_time", isInDb ? Utils_1.default.getTimeStrByS((Data_1.default.user.double_income_time - Utils_1.default.getServerTime()) / 1000) : '双倍');
                            if (Data_1.default.user.auto_com_time - Utils_1.default.getServerTime() > 0) {
                                _this.SetText("auto_time", Utils_1.default.getTimeStrByS((Data_1.default.user.auto_com_time - Utils_1.default.getServerTime()) / 1000));
                            }
                            else {
                                _this.SetText("auto_time", "自动合成");
                            }
                            _this.SetText("lbl_drop_plant", isDpIn ? Utils_1.default.getTimeStrByS((Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime()) / 1000) : '掉落');
                            _this.GetGameObject("fx_bt_angry").active = _this.GetGameObject("att_x2_time").active;
                            if (Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime() < 0)
                                _this.GetSprite("bt_fast_gen_process_item").fillRange = 0;
                            else
                                _this.GetSprite("bt_fast_gen_process_item").fillRange = ((Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime()) / 1000 / 60) / AdLayer_1.MAX_DROP_PLANT_TIME; // (max_drop_plant * 60 - (Data.user.drop_plant_time - Utils.getServerTime())/1000) /max_drop_plant * 60
                            // this.updateUI();
                            // TaskLayer.checkTask();//任务检测
                            // if (GameManager.Instance().isGuide == false)
                            //     this.GetGameObject("btn_auto").active = Data.user.guideIndex > 2;
                            // Data.user.checkNewTody();
                        }), cc.delayTime(1)).repeatForever());
                        this.GetGameObject("btn_delete").opacity = 0;
                        this.GetGameObject("guild_0").active = Data_1.default.user.guideIndex == 0;
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
                                console.log("tt录屏开始");
                                _this.recordertime = Utils_1.default.getServerTime();
                            });
                            recorder.onStop(function (res) {
                                _this.bRecorder = false;
                                _this.GetGameObject("btn_Recorder").stopAllActions();
                                _this.GetGameObject("lupin_gem").active = true;
                                _this.GetGameObject("btn_Recorder").scale = 1;
                                _this.GetGameObject("btn_VCR").active = true;
                                _this.GetGameObject("btn_end").active = false;
                                console.log("tt录屏结束");
                                console.log(res.videoPath);
                                if (Utils_1.default.getServerTime() - _this.recordertime < 3000) {
                                    MsgHints_1.default.show("录屏时间过短");
                                    _this.recordertime = 0;
                                    return;
                                }
                                _this.recordertime = 0;
                                Utils_1.default.createUI("prefab/LuPinResult", null, function (node) {
                                    node.getComponent(LuPinResult_1.default).setData(res);
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
                MsgHints_1.default.show("分享失败");
                Utils_1.default.sharecallback(false);
            }
        }
        Utils_1.default.sharetime = 0;
        Utils_1.default.sharecallback = null;
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
                    plant = node.getComponent(SoldierItem_1.default);
                    plant.index = index;
                    this.items.push(plant);
                    ++index;
                }
                node_drag = cc.instantiate(this.pre_soldier);
                node_drag.parent = node_com.parent;
                node_drag.name = "item_drag";
                node_drag.x = -1000;
                this.item_drag = this.GetGameObject("item_drag").getComponent(SoldierItem_1.default);
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
        if (Utils_1.default.getServerTime() < Data_1.default.user.auto_com_time && !this.bInAutoCom) {
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
        this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(0.5), cc.fadeTo(0.5, 0)));
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
                    MsgHints_1.default.show("植物数量过少不能删除");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }
                if (this.item_drag.datacopy.lv >= Data_1.default.user.GetMaxLv()) {
                    MsgHints_1.default.show("最高等级植物就不删除了吧！");
                    this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
                    this.item_drag.linkItem = null;
                    this.item_drag.node.active = false;
                    return;
                }
                Data_1.default.user.DropWuJiang(this.item_drag.datacopy.index);
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
            if (item == null || Data_1.default.user.slots[item.index] == 0 || item == this.item_drag.linkItem || (item && item.droptype != 0)) {
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
                Data_1.default.user.CompMove(this.item_drag.linkItem.index, item.index);
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
                Data_1.default.user.CompMove(this.item_drag.linkItem.index, item.index);
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
        var b = Data_1.default.user.ComposePlant(item.index, this.item_drag.datacopy.index);
        this.GetGameObject("guild_1").active = false;
        if (Data_1.default.user.guideIndex == 1) {
            Data_1.default.user.guideIndex++;
            Data_1.default.save();
        }
        if (!b)
            return;
        var nextGun = Data_1.default.user.getPlantInfo(item.index);
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
                        lv = Data_1.default.user.GetMaxLv() - 3;
                        if (lv < 1)
                            lv = 1;
                        this.SetText("lbl_buy_lvl", 'LV.' + lv);
                        this.SetText("lbl_buy_cost", Utils_1.default.formatNumber(Data_1.default.user.BuyPrice(lv)));
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
            if (Data_1.default.user.slots[i] == 0)
                continue;
            if (!this.items[i].datacopy && this.autocomindexs[0] != i && this.autocomindexs[1] != i) {
                item = this.items[i];
                break;
            }
        }
        if (!lv) {
            lv = Data_1.default.user.GetMaxLv() - 3;
            if (lv < 1)
                lv = 1;
        }
        if (item) {
            if (buytype == 0) {
                var cost = Data_1.default.user.BuyPrice(lv);
                if (Data_1.default.user.BuyPrice(lv) > Data_1.default.user.coin) {
                    var type_1 = 0;
                    if (Data_1.default.user.today_getchick_times < Data_1.default.user.today_getchick_total) {
                        type_1 = 1;
                    }
                    else if (Data_1.default.user.today_getcoin_times < Data_1.default.user.today_getcoin_total) {
                        type_1 = 2;
                    }
                    if (type_1 > 0) {
                        Utils_1.default.createUI("prefab/CoinNotEnough").then(function (node) {
                            node.getComponent(CoinNotEnoughUI_1.default).setType(type_1);
                        });
                    }
                    else {
                        MsgHints_1.default.show("金币不足");
                    }
                    return;
                }
                Data_1.default.user.coin -= cost;
            }
            else if (buytype == 1) {
                var gem = Math.min(5, Number(DB_1.DB_plant[lv - 1][6]));
                if (gem > Data_1.default.user.gem) {
                    MsgHints_1.default.show("钻石不足");
                    return;
                }
                Data_1.default.user.gem -= gem;
            }
            else if (buytype == 2) {
            }
            else if (buytype >= 3) {
                console.log("花盆掉落");
            }
            AudioMgr_1.default.Instance().playSFX("flower_pot_land");
            this.docomp(null);
            item.setItemData(Data_1.default.user.BuyPlant(item.index, lv), buytype);
            this.updateBuyButton();
            return true;
        }
        else {
            if (buytype <= 2) {
                MsgHints_1.default.show("位置不够啦！");
                this.GetGameObject("btn_delete").stopAllActions();
                this.GetGameObject("btn_delete").opacity = 255;
                this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(0.5), cc.fadeTo(0.5, 0)));
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
                if (Data_1.default.user.guideIndex == 0) {
                    Data_1.default.user.guideIndex++;
                    Data_1.default.save();
                }
                if (Data_1.default.user.guideIndex == 1) {
                    this.mergetip();
                }
                break;
            case "bt_fast_gen":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(AdLayer_1.default).setType(AdLayer_1.EADLAYER.DROP_PLANT);
                });
                break;
            case "btn_angry":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(AdLayer_1.default).setType(AdLayer_1.EADLAYER.DOUBLE_ATT);
                });
                break;
            case "btn_double_coin":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(AdLayer_1.default).setType(AdLayer_1.EADLAYER.DOUBLE_INCOME);
                });
                break;
            case "bt_auto_merge":
                Utils_1.default.createUI("prefab/AdLayer").then(function (node) {
                    node.getComponent(AdLayer_1.default).setType(AdLayer_1.EADLAYER.AUTO_COM);
                });
                break;
            case "btn_shop":
                ShopLayer_1.default.show();
                break;
            case "btn_delete":
                if (this.GetGameObject("btn_delete").opacity == 255)
                    MsgHints_1.default.show("拖动到这里卖出");
                break;
            case "btn_inviate":
                // WxCenter.shareAppMessage();
                Utils_1.default.createUI("prefab/ShareLayer").then(function (node) {
                    node.getComponent(ShareLayer_1.default).setData(100000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxIYWxsU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1Qyx3Q0FBbUM7QUFDbkMsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUN6Qyx3Q0FBbUM7QUFDbkMsMkJBQTBDO0FBQzFDLDRDQUEwSTtBQUMxSSxrREFBNkM7QUFDN0Msd0NBQW1DO0FBQ25DLDBDQUFxQztBQUNyQyxvREFBK0M7QUFDL0MsMERBQXFEO0FBQ3JELGdEQUEyQztBQUMzQyxnREFBMkM7QUFDM0MsdUNBQWtDO0FBQ2xDLDZDQUF3QztBQUV4Qyw0REFBdUQ7QUFHakQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUEyNUJDO1FBejVCRyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBU25CLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFDeEIsZUFBUyxHQUFPLElBQUksQ0FBQztRQWdGckIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQStEZCxvQkFBYyxHQUFHLEtBQUssQ0FBQztRQTREeEIsVUFBSSxHQUFhLEVBQUUsQ0FBQztRQUU5QixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUM5QixtQkFBYSxHQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixXQUFLLEdBQXVCLEVBQUUsQ0FBQztRQXFCdkMsbUJBQWEsR0FBWSxLQUFLLENBQUMsQ0FBQyxVQUFVO1FBQzdDLGdCQUFVLEdBQVksS0FBSyxDQUFDLENBQUssWUFBWTtRQW1MMUMsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQTRCakIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFzR2pDLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDdkIsY0FBUSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBNEN6QixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQW9VakIscUJBQWUsR0FBRyxJQUFJLENBQUM7O0lBQ25DLENBQUM7a0JBMzVCb0IsU0FBUztJQU0xQixzQkFBVyxxQkFBUTthQUFuQjtZQUVJLE9BQU8sV0FBUyxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQU1ELGlDQUFhLEdBQWI7UUFFSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsaUJBQWlCO1FBQ3pELEtBQWdCLFVBQWMsRUFBZCxLQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFDOUI7WUFESSxJQUFJLElBQUksU0FBQTtZQUVSLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxFQUFTO1FBRW5CLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFnQixVQUFVLEVBQVYsS0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLGNBQVUsRUFBVixJQUFVLEVBQzFCO1lBREksSUFBSSxJQUFJLFNBQUE7WUFFUixJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFDdkY7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7U0FDSjtRQUNELHVCQUF1QjtRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsaUJBQWlCO1FBQ3pELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsRUFDekM7WUFDSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztTQUN0RjtJQUNMLENBQUM7SUFHRCwwQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUVMLElBQUcsRUFBRSxHQUFDLENBQUM7WUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUN6QjtZQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JFLElBQUcsQ0FBQyxHQUFDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDOztZQUVHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLEtBQUs7UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO1FBRUYsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQyxFQUN6QztZQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUEsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQ3JGO1lBQ0ksUUFBUTtZQUNSLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dCQUFFLE9BQU07WUFDbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO1FBRUQsZ0JBQWdCO1FBQ2hCLElBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksZUFBSyxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUM3RTtZQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxRQUFRO0lBQ0ssNkJBQVMsR0FBdEIsVUFBdUIsT0FBYzs7Ozs7O3dCQUU3QixJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3pCLEtBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7d0JBQWUscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBdEYsR0FBNkIsV0FBVyxJQUFHLFNBQTZELENBQUEsQ0FBQzt3QkFDekcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUN4QixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7OztLQUMvRztJQUdELCtCQUFXLEdBQVgsVUFBWSxJQUFZLEVBQUMsS0FBYTtRQUVsQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBRyxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDNUIsS0FBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsRUFBQyxFQUFFLENBQUMsRUFDNUM7WUFDSSxJQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUM1QjtnQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFDcEQ7WUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQ2I7Z0JBQ0ksSUFBRyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNyQztvQkFDSSxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRSxDQUFDLENBQUM7b0JBQ2xCLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2QsSUFBSSxPQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztvQkFDckMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZO3dCQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUE7b0JBQzNELENBQUMsQ0FBQyxDQUFBO2lCQUNMO3FCQUVEO29CQUNJLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNwQzthQUNKO2lCQUVEO2dCQUNJLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pCLElBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDckM7b0JBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztvQkFDckMsSUFBSSxPQUFLLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDOUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVk7NEJBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFLLENBQUMsQ0FBQTt3QkFDL0MsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNKLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2QsY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUUsQ0FBQyxDQUFDO29CQUNsQixjQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNmLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hCLElBQUksR0FBRyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2xDO3FCQUVEO29CQUNJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO29CQUN2QyxxQ0FBcUM7b0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN6RjthQUNKO1lBQ0QsSUFBRyxNQUFNO2dCQUFFLE9BQU87WUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUdELDhCQUFVLEdBQVY7UUFBQSxpQkF5REM7UUF2REcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFFNUIsSUFBSSxHQUFHLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLGFBQWE7UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFDbEI7WUFDSSxJQUFJLEtBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBUSxDQUFDLEtBQUcsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsSUFBRyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUN0QztZQUNJLGtCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUN6RCxlQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ1A7YUFDSSxJQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFDM0I7WUFDSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QztRQUVELE1BQU07UUFDTixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFWixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFdEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dDQUV4QixDQUFDO1lBRUwsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE9BQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQzlELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxDQUFDLElBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7O1FBVlIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsRUFBRSxDQUFDO29CQUF2QixDQUFDO1NBV1I7UUFFRCxNQUFNO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRyxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBQyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFDLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQVFELG9DQUFnQixHQUFoQjtRQUNJLElBQUksSUFBSSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRS9CLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsRUFBRTtnQkFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQTtZQUM5QixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUN4QjtnQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDdkIsU0FBUzthQUNaO1lBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFJSixnQ0FBWSxHQUFaLFVBQWEsR0FBWTtRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25ELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQzthQUN2RDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVKLGtDQUFjLEdBQWQsVUFBZSxHQUFHO1FBQ1gsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNuRCxDQUFDO0lBRUUseUJBQUssR0FBWDs7Ozs7Ozt3QkFFTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQ3JCLFdBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixrQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNsQixLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDcEMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDVixXQUE4QixFQUFkLEtBQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxjQUFjLEVBQWQsSUFBYyxFQUM5Qjs0QkFEUSxJQUFJOzRCQUVYLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUMxQzt3QkFFSyxxQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDO3dCQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDckQsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzRCQUVsQixJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU07Z0NBQUUsT0FBTTs0QkFFdEMsUUFBUTs0QkFDUixJQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQ2pDO2dDQUNHLElBQUksQ0FBQyxHQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3BELElBQUcsQ0FBQztvQ0FDQSxjQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs2QkFDcEM7NEJBQ0Ysc0JBQXNCOzRCQUN0QixJQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQ2pDO2dDQUNHLElBQUksQ0FBQyxHQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3JELElBQUcsQ0FBQztvQ0FDQSxjQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs2QkFDckM7d0JBRVgsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO3dCQUVkLGNBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzlELGNBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dCQUN4RSxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUNsRSxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUNsRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7d0JBR2xCLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDOUQsSUFBSyxjQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsR0FBQyxFQUFFLEVBQUU7NEJBQ2xDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQzFCLEtBQUssR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDOUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsVUFBQyxFQUFFO2dDQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLHdCQUFjLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDOzRCQUNqRCxDQUFDLENBQUMsQ0FBQTt5QkFDTDt3QkFFRixXQUFxRCxFQUF4QyxLQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUF4QyxjQUF3QyxFQUF4QyxJQUF3Qzs0QkFBN0MsQ0FBQzs0QkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7eUJBQUE7d0JBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUN4RCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFFVixRQUFRO3dCQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDNUQsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDbkUsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUN0RSxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUVuRSxNQUFNOzRCQUNOLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxHQUFHLDZCQUFtQixHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUU7Z0NBQ3JGLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQzs2QkFDckQ7NEJBQ0QsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxnQ0FBc0IsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFO2dDQUMzRixjQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQzs2QkFDeEQ7NEJBQ0QsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsMkJBQWlCLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRTtnQ0FDakYsY0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDOzZCQUNuRDs0QkFDRCxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyw2QkFBbUIsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFO2dDQUNyRixjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7NkJBQ3JEOzRCQUVELEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDN0gsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ2xJLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFDdkQ7Z0NBQ0ksS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsZUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7NkJBQzVHO2lDQUVEO2dDQUNJLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzZCQUNyQzs0QkFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDL0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUM7NEJBR3BGLElBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxHQUFDLENBQUM7Z0NBQ2xELEtBQUksQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztnQ0FFekQsS0FBSSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFFLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQyxHQUFDLDZCQUFtQixDQUFDLENBQUEsd0dBQXdHOzRCQUV0UCxtQkFBbUI7NEJBQ25CLCtCQUErQjs0QkFDL0IsK0NBQStDOzRCQUMvQyx3RUFBd0U7NEJBQ3hFLDRCQUE0Qjt3QkFJdEMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO3dCQUVqRSx5Q0FBeUM7d0JBQ3pDLG1LQUFtSzt3QkFHbkssc0NBQXNDO3dCQUN0QyxnS0FBZ0s7d0JBRTVKLCtKQUErSjt3QkFDL0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO3dCQUk5SixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDOzRCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDakcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ1IsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOzRCQUN2RCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQ0FDaEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dDQUMvQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0NBQzdDLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDNUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQ0FDcEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7Z0NBQ25ILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQ3RCLEtBQUksQ0FBQyxZQUFZLEdBQUcsZUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDOzRCQUM5QyxDQUFDLENBQUMsQ0FBQzs0QkFFSCxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRztnQ0FDZixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQ0FDdkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQ0FDcEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dDQUM5QyxLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0NBQzdDLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDNUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dDQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dDQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FFM0IsSUFBSSxlQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUU7b0NBQ2xELGtCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29DQUN4QixLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQTtvQ0FDckIsT0FBTztpQ0FDVjtnQ0FFRCxLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQTtnQ0FDckIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsVUFBQyxJQUFhO29DQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ2hELENBQUMsQ0FBQyxDQUFBOzRCQUNOLENBQUMsQ0FBQyxDQUFDO3lCQUNOO3dCQUVELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3RELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7O0tBQ3pEO0lBSUQsOEJBQVUsR0FBVjtJQUNBLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNJLElBQUksZUFBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksZUFBSyxDQUFDLGFBQWEsRUFBRTtZQUM3QyxJQUFJLGVBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxlQUFLLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtnQkFDakQsZUFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUM1QjtpQkFDSTtnQkFDRCxrQkFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsZUFBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUM3QjtTQUNKO1FBRUQsZUFBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDcEIsZUFBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQU1LLDRCQUFRLEdBQWQ7Ozs7O2dCQUVRLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUUxQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLEtBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO29CQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBLGVBQWU7b0JBQ2hGLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDdkIsS0FBSyxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztvQkFDeEQsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixFQUFFLEtBQUssQ0FBQTtpQkFDRDtnQkFFRyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pELFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsU0FBUyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQzdCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBRXBCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBRTVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUV4QixRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLENBQXNCO29CQUM5RCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDMUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDaEQsbUJBQW1CO29CQUVuQixpQkFBaUI7b0JBQ2pCLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO3dCQUN2RCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzdELEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBRW5DLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBRTNCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt3QkFDL0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDaEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDcEI7b0JBRUQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzFCLEdBQUcsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pDLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRWxDLElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUM3Qjt3QkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3FCQUNyQjtvQkFFRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFHO3dCQUM5QyxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQzt3QkFDcEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQ3JCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDeEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBRS9CLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtxQkFDdkM7eUJBQ0k7d0JBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDOUI7Z0JBRUwsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUVULFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBc0I7b0JBQzdELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDMUIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekMsSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTt3QkFDcEQsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxJQUFJOzRCQUFFLE9BQU87d0JBQzVDLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzt3QkFFL0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMxQyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUV6QixJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDckQsSUFBSSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMzRSwrREFBK0Q7d0JBQy9ELHFEQUFxRDt3QkFDckQsSUFBSTt3QkFDSixTQUFTO3dCQUNULG9EQUFvRDt3QkFDcEQsSUFBSTtxQkFDUDtnQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRVQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs7OztLQUNsRTtJQUtELDhCQUFVLEdBQVY7UUFBQSxpQkF1Q0M7UUF0Q0csSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUNsRCxJQUFJLGVBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0NBRWYsQ0FBQztnQkFDTixJQUFJLENBQUMsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO3NDQUFXO2dCQUN4RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQUssS0FBSyxDQUFDLE1BQU0sRUFBRyxFQUFFLENBQUMsRUFBRTtvQkFFN0MsSUFBSSxDQUFDLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTt3QkFBRSxTQUFTO29CQUN4RCxJQUFJLE9BQUssVUFBVTtpREFBUztvQkFDNUIsSUFBSSxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUMsRUFBRSxFQUFFO3dCQUN0SixPQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQzVDLE9BQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFFNUMsT0FBSyxTQUFTLENBQUMsUUFBUSxHQUFHLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QyxPQUFLLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUMzQyxPQUFLLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ25ELE9BQUssU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNsQyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLE9BQUssU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDM0QsT0FBSyxjQUFjLENBQUMsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRXBDLFNBQVMsR0FBRyxPQUFLLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ2xHLFNBQVMsR0FBRyxPQUFLLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBRW5GLG1CQUFtQjt3QkFDbkIsT0FBSyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUN2QixPQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3JDLE9BQUssU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDbkcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLG9CQUFvQjs0QkFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7cUJBRVA7aUJBQ0o7OytCQWJXLFNBQVM7WUFsQnpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRyxFQUFFLENBQUM7c0NBQWxDLENBQUM7OzthQWdDVDtTQUNKO0lBQ0wsQ0FBQztJQUlELDBCQUFNLEdBQU4sVUFBTyxDQUFzQjtRQUE3QixpQkEwR0M7UUF6R0csSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUM5RSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixtQkFBbUI7UUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtnQkFDMUIsT0FBTzthQUNWO1lBQ0QsSUFBSTtZQUNKLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsZ0RBQWdEO2dCQUNoRCxJQUFJLEdBQUcsR0FBVyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7d0JBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3JDO2dCQUVELElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtvQkFDVixrQkFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbkMsT0FBTztpQkFDVjtnQkFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNwRCxrQkFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbkMsT0FBTztpQkFDVjtnQkFFRCxjQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBRS9CLDRCQUE0QjtnQkFDNUIscUNBQXFDO2dCQUNyQywrR0FBK0c7Z0JBQy9HLFNBQVM7YUFDWjtZQUVELFdBQVc7WUFDWCxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvRCxJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUvQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFFckgsSUFBSTtnQkFDSixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTtvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJO2dCQUNKLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLE9BQU87YUFDVjtZQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUU7Z0JBQ3JKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSTtnQkFDSixjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU5RCxJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7YUFDSTtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU87WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLElBQWlCO1FBQ3BCLElBQUksQ0FBQyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdDLElBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUM1QjtZQUNJLGNBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFHLENBQUM7WUFDeEIsY0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU87UUFDZixJQUFJLE9BQU8sR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekYsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUVLLG1DQUFlLEdBQXJCOzs7Ozs7d0JBRVEsRUFBRSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQyxJQUFHLEVBQUUsR0FBQyxDQUFDOzRCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBQyxlQUFLLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFcEUsTUFBTSxHQUFHLGlCQUFlLEVBQUUsU0FBTSxDQUFDO3dCQUNqQyxTQUFTLEdBQUcsaUJBQWUsRUFBRSxTQUFNLENBQUM7d0JBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzlDLEtBQUEsS0FBSyxDQUFBO3dCQUFlLHFCQUFNLGVBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFBOzt3QkFBNUUsR0FBTSxXQUFXLElBQUcsU0FBd0YsQ0FBQSxDQUFDO3dCQUM3RyxLQUFBLEtBQUssQ0FBQTt3QkFBb0IscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLEVBQUE7O3dCQUF6RixHQUFNLGdCQUFnQixJQUFHLFNBQXFHLENBQUEsQ0FBQzt3QkFDL0gsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7d0JBQ2hDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztLQUNsQztJQUNELGdDQUFnQztJQUN6QiwrQkFBVyxHQUFsQixVQUFtQixFQUFTLEVBQUMsT0FBYztRQUN2QyxJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDekIsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFFLFNBQVM7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyRixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTTthQUNUO1NBQ0o7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ0wsRUFBRSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLElBQUcsRUFBRSxHQUFDLENBQUM7Z0JBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUVELElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO2dCQUNkLElBQUksSUFBSSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN6QyxJQUFJLE1BQUksR0FBRyxDQUFDLENBQUM7b0JBQ2IsSUFBRyxjQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUM7d0JBQy9ELE1BQUksR0FBRyxDQUFDLENBQUM7cUJBQ1o7eUJBQ0ksSUFBRyxjQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUM7d0JBQ2xFLE1BQUksR0FBRyxDQUFDLENBQUM7cUJBQ1o7b0JBQ0QsSUFBRyxNQUFJLEdBQUcsQ0FBQyxFQUFDO3dCQUNSLGVBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZOzRCQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBSSxDQUFDLENBQUM7d0JBQ3JELENBQUMsQ0FBQyxDQUFDO3FCQUNOO3lCQUNHO3dCQUNBLGtCQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUN6QjtvQkFDRCxPQUFPO2lCQUNWO2dCQUNELGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQzthQUMxQjtpQkFDSSxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxhQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxHQUFHLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ3JCLGtCQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QixPQUFPO2lCQUNWO2dCQUNELGNBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQzthQUN4QjtpQkFDSSxJQUFHLE9BQU8sSUFBSSxDQUFDLEVBQUM7YUFFcEI7aUJBQ0ksSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ3RCO1lBRUQsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUU5QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQWMsRUFBQyxPQUFPLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUE7U0FDZDthQUNJO1lBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO2dCQUNkLGtCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDOUY7WUFDRCxPQUFPLEtBQUssQ0FBQTtTQUNmO0lBQ0wsQ0FBQztJQUVPLDRCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUcsRUFBRSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO29CQUFFLFNBQVM7Z0JBQ3hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUcsRUFBRSxDQUFDLEVBQUU7b0JBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO3dCQUFFLFNBQVM7b0JBQ3hELElBQUksSUFBSSxDQUFDLFVBQVU7d0JBQUUsT0FBTztvQkFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTt3QkFDeEosSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO3dCQUVoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO3dCQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUMvQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQy9ELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3dCQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO3dCQUNwSSxPQUFPO3FCQUNWO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFSixnQ0FBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLGVBQWU7UUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsUUFBUSxPQUFPLEVBQUU7WUFDdEIsS0FBSyxhQUFhO2dCQUNqQixlQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUE7Z0JBQ2xDLE1BQU07WUFDUCxLQUFLLFVBQVU7Z0JBQ2QsZUFBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQTtnQkFDL0IsTUFBTTtZQUNQLEtBQUssU0FBUztnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM3QyxJQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFDNUI7b0JBQ0ksY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdkIsY0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNmO2dCQUNELElBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUM1QjtvQkFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CO2dCQUNiLE1BQU07WUFDUCxLQUFLLGFBQWE7Z0JBQ2pCLGVBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZO29CQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDeEQsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsTUFBTTtZQUNQLEtBQUssV0FBVztnQkFDZixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBWTtvQkFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQ3hELENBQUMsQ0FBQyxDQUFBO2dCQUNGLE1BQU07WUFDUCxLQUFLLGlCQUFpQjtnQkFDckIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVk7b0JBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUMzRCxDQUFDLENBQUMsQ0FBQTtnQkFDRixNQUFNO1lBQ1AsS0FBSyxlQUFlO2dCQUNuQixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBWTtvQkFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ3RELENBQUMsQ0FBQyxDQUFBO2dCQUNVLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1osbUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEIsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxJQUFJLEdBQUc7b0JBQ2xELGtCQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN4QixNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLDhCQUE4QjtnQkFDOUIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVk7b0JBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssY0FBYztnQkFDZixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFO29CQUN6QixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDZCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzt3QkFDdkQsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFDWCxRQUFRLEVBQUUsRUFBRTt5QkFDZixDQUFDLENBQUM7cUJBQ047aUJBQ0o7cUJBQ0k7b0JBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ2QsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0JBQ3ZELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDbkI7aUJBQ0o7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQzs7SUFyNUJNLG1CQUFTLEdBQUcsSUFBSSxDQUFDO0lBRnhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ087SUFpYzNCO1FBREYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFuY2IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTI1QjdCO0lBQUQsZ0JBQUM7Q0EzNUJELEFBMjVCQyxDQTM1QnNDLGdCQUFNLEdBMjVCNUM7a0JBMzVCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2ZyYW13b3JrL0Jhc2VVSVwiO1xyXG5pbXBvcnQgTXNnSGludHMgZnJvbSBcIi4uL2ZyYW13b3JrL01zZ0hpbnRzXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi9tYW5hZ2VyL0RhdGFcIjtcclxuaW1wb3J0IFd4Q2VudGVyIGZyb20gXCIuLi9tYW5hZ2VyL1d4Q2VudGVyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi4vdXRpbHMvQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBEQl9sZXZlbCwgREJfcGxhbnQgfSBmcm9tIFwiLi9EQlwiO1xyXG5pbXBvcnQgQWRMYXllciwgeyBNQVhfRE9VQkxFX0FUVF9USU1FLCBNQVhfRE9VQkxFX0lOQ09NRV9USU1FLCBNQVhfQVVUT19DT01fVElNRSwgTUFYX0RST1BfUExBTlRfVElNRSwgRUFETEFZRVIgfSBmcm9tIFwiLi9wcmVmYWIvQWRMYXllclwiO1xyXG5pbXBvcnQgU2hhcmVMYXllciBmcm9tIFwiLi9wcmVmYWIvU2hhcmVMYXllclwiO1xyXG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4vcHJlZmFiL0VuZW15XCI7XHJcbmltcG9ydCBMb3NlVUkgZnJvbSBcIi4vcHJlZmFiL0xvc2VVSVwiO1xyXG5pbXBvcnQgTHVQaW5SZXN1bHQgZnJvbSBcIi4vcHJlZmFiL0x1UGluUmVzdWx0XCI7XHJcbmltcG9ydCBPZmZsaW5lQXdhcmRVSSBmcm9tIFwiLi9wcmVmYWIvT2ZmbGluZUF3YXJkVUlcIjtcclxuaW1wb3J0IFNob3BMYXllciBmcm9tIFwiLi9wcmVmYWIvU2hvcExheWVyXCI7XHJcbmltcG9ydCBWaWN0b3J5VUkgZnJvbSBcIi4vcHJlZmFiL1ZpY3RvcnlVSVwiO1xyXG5pbXBvcnQgU2xvdEl0ZW0gZnJvbSBcIi4vU2xvdEl0ZW1cIjtcclxuaW1wb3J0IFNvbGRpZXJJdGVtIGZyb20gXCIuL1NvbGRpZXJJdGVtXCI7XHJcbmltcG9ydCB7IFBsYW50SW5mbyB9IGZyb20gXCIuL1VzZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29pbk5vdEVub3VnaFVJIGZyb20gXCIuL3ByZWZhYi9Db2luTm90RW5vdWdoVUlcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbFNjZW5lIGV4dGVuZHMgQmFzZVVJIHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBlbmVteV9wcmU6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6SGFsbFNjZW5lXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIEhhbGxTY2VuZS5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFzdGRyb3B0aW1lID0gMDtcclxuICAgIHB1YmxpYyBlbmVteWxpc3Q6Y2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIHdhdmVfaW5mbzphbnkgPSBudWxsO1xyXG5cclxuICAgIGhpZGVtZXJnZXRpcHMoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpOy8vZnhfZ3JvdW5kX21lcmdlXHJcbiAgICAgICAgZm9yKHZhciBzbG90IG9mIHNsb3RzLmNoaWxkcmVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvdC5nZXRDaGlsZEJ5TmFtZShcImZ4X2dyb3VuZF9tZXJnZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd21lcmdldGlwcyhsdjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4cyA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaXRlbSBvZiB0aGlzLml0ZW1zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXRlbS5kYXRhY29weSAmJiBpdGVtLmRhdGFjb3B5Lmx2ID09IGx2ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCAmJiBpdGVtLmRhdGFjb3B5Lmx2PDYwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmRleHMucHVzaChpdGVtLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleHMpO1xyXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpOy8vZnhfZ3JvdW5kX21lcmdlXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpPHNsb3RzLmNoaWxkcmVuLmxlbmd0aDsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzbG90cy5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImZ4X2dyb3VuZF9tZXJnZVwiKS5hY3RpdmUgPSBpbmRleHMuaW5kZXhPZihpKSA+PTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpXHJcblx0e1xyXG4gICAgICAgIGlmKGR0PjEpZHQ9MTtcclxuXHRcdHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKERhdGEudXNlci5jb2luKStcIlwiKTtcclxuICAgICAgICBpZih0aGlzLnJlY29yZGVydGltZSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHMgPSBNYXRoLmZsb29yKChVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSB0aGlzLnJlY29yZGVydGltZSkvMTAwMCk7XHJcbiAgICAgICAgICAgIGlmKHM+MCl0aGlzLlNldFRleHQoXCJsYmxfbHVwaW5nXCIscytcInNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2x1cGluZ1wiLFwiXCIpO1xyXG5cclxuICAgICAgICAvL3nmjpLluo9cclxuICAgICAgICB0aGlzLmVuZW15bGlzdC5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpPHRoaXMuZW5lbXlsaXN0Lmxlbmd0aDsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15bGlzdFtpXS56SW5kZXggPSBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGFzdGRyb3B0aW1lICs9IGR0O1xyXG4gICAgICAgIGlmKHRoaXMuX2xhc3Rkcm9wdGltZSA+IDI1ICogKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk/LjM6MSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+aZrumAmuiKseebhuaOieiQvVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpIHJldHVyblxyXG4gICAgICAgICAgICBsZXQgbHYgPSBNYXRoLm1heCgxLCBEYXRhLnVzZXIuR2V0TWF4THYoKSAtIFV0aWxzLmdldFJhbmRvbUludCg2LCA5KSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5QnV5UGxhbnQobHYsIDMpXHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3Rkcm9wdGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+S4gOauteaXtumXtOS4jeaTjeS9nO+8jOaPkOekuuWPr+S7peWQiOaIkFxyXG4gICAgICAgIGlmKHRoaXMudG91Y2hlbmR0aW1lICE9IDAgJiYgVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gdGhpcy50b3VjaGVuZHRpbWUgPiA1MDAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXJnZXRpcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S4remXtOaYvuekuuWbvueJh1xyXG4gICAgcHVibGljIGFzeW5jIHNob3dJbWFnZShpbWdwYXRoOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGF3YWl0IFV0aWxzLmxvYWRSZXMoaW1ncGF0aCxjYy5TcHJpdGVGcmFtZSkgYXMgY2MuU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS55ID0gMjAwO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAxLjI7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDIpLGNjLnNwYXduKGNjLm1vdmVCeSgwLjUsMCwxMDApLGNjLmZhZGVUbygwLjUsMCkpLGNjLnJlbW92ZVNlbGYoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiRmFpbCA9IGZhbHNlO1xyXG4gICAgcmVtb3ZlZW5lbXkobm9kZTpjYy5Ob2RlLGJGYWlsOmJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlzU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKGJGYWlsKSB0aGlzLmJGYWlsID0gdHJ1ZTtcclxuICAgICAgICBmb3IodmFyIGkgPSB0aGlzLmVuZW15bGlzdC5sZW5ndGgtMTtpPj0wOy0taSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUgPT0gdGhpcy5lbmVteWxpc3RbaV0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jcmVhdGVjb21wbGV0ZSAmJiB0aGlzLmVuZW15bGlzdC5sZW5ndGggPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYkZhaWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKERhdGEudXNlci53YXZlPj0gdGhpcy53YXZlX2luZm9bMl0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLndhdmU9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSBub2RlLmdldENvbXBvbmVudChFbmVteSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTG9zZVVJXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoTG9zZVVJKS5zZXRJbmZvKGVuZW15LmdldEJvc3NNb25leSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLndhdmUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ltYWdlKFwidGV4dHVyZS9kZWZlYXRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIud2F2ZSsrO1xyXG4gICAgICAgICAgICAgICAgaWYoRGF0YS51c2VyLndhdmUgPiB0aGlzLndhdmVfaW5mb1syXSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSBub2RlLmdldENvbXBvbmVudChFbmVteSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vbmV5ID0gZW5lbXkuZ2V0Qm9zc01vbmV5KCk7XHJcblx0XHRcdFx0ICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEuMiksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvVmljdG9yeVVJXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFZpY3RvcnlVSSkuc2V0SW5mbyhtb25leSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIud2F2ZT0gMTtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIubHYrKztcclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnNhdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IERhdGEudXNlci5sdiArIFwiX1wiICsgRGF0YS51c2VyLndhdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXZlX2luZm8gPSBEQl9sZXZlbFtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheVNGWChcIndpbl93YXZlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93SW1hZ2UoXCJ0ZXh0dXJlL3N1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZTpvdGhlci9zaGVuZ2ppY2hlbmdnb25nXCIsIFwiZWZmZWN0XCIsIHRoaXMubm9kZSxjYy52MygwLDE1MCwwKSwgMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaXNTdG9wKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRld2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZWNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBjcmVhdGV3YXZlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJGYWlsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVjb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQga2V5ID0gRGF0YS51c2VyLmx2ICsgXCJfXCIgKyBEYXRhLnVzZXIud2F2ZTtcclxuICAgICAgICB0aGlzLndhdmVfaW5mbyA9IERCX2xldmVsW2tleV07XHJcblxyXG4gICAgICAgIC8v6YCa5YWz5ZCO5bCx5LiA55u06K+75pyA5ZCO5LiA5YWzXHJcbiAgICAgICAgaWYoIXRoaXMud2F2ZV9pbmZvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IDYwICsgXCJfXCIgKyBEYXRhLnVzZXIud2F2ZTtcclxuICAgICAgICAgICAgdGhpcy53YXZlX2luZm8gPSBEQl9sZXZlbFtrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoRGF0YS51c2VyLndhdmUgPT0gdGhpcy53YXZlX2luZm9bMl0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlCR00oXCJiZ0Jvc3NcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKC44KSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQm9zc0NvbW1pbmdVSVwiKVxyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoRGF0YS51c2VyLndhdmUgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheUJHTShcIkJHTTFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WIm+W7uuaAqueJqVxyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgbGV0IG51bSA9IDA7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTx0aGlzLndhdmVfaW5mb1s0XTsrK2kpXHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLndhdmVfaW5mb1szXSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgbnVtID0gbGlzdC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTx0aGlzLndhdmVfaW5mb1s2XTsrK2kpXHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLndhdmVfaW5mb1s1XSlcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPGxpc3QubGVuZ3RoOysraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDIuMiAqIGkpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lbXlfcHJlKTtcclxuICAgICAgICAgICAgICAgIGUucGFyZW50ID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9vYmpcIik7XHJcbiAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudChFbmVteSkuc2V0SUQoaWQsaT49bnVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0LnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgICBpZihpID09IGxpc3QubGVuZ3RoLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVjb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/lhbPljaHkv6Hmga9cclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfY3VyX2x2XCIsRGF0YS51c2VyLmx2K1wiXCIpO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF93YXZlc1wiLERhdGEudXNlci53YXZlK1wiL1wiKyB0aGlzLndhdmVfaW5mb1syXSk7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3ByZV9sdlwiLChEYXRhLnVzZXIubHYtMSkrXCJcIik7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX25leF9sdlwiLChEYXRhLnVzZXIubHYrMSkrXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdGg6Y2MuVmVjM1tdID0gW107XHJcblxyXG5cdGl0ZW1fZHJhZzogU29sZGllckl0ZW0gPSBudWxsO1xyXG5cdGF1dG9jb21pbmRleHM6IG51bWJlcltdID0gWy0xLCAtMV07XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8U29sZGllckl0ZW0+ID0gW107XHJcbiAgICBpbml0Q29tcG9zZUl0ZW1zKCkge1xyXG4gICAgICAgIHZhciBsaXN0ID0gRGF0YS51c2VyLkNvbVBsYW50cztcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbSA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKGxpc3RbaV0ubHY+NjApbGlzdFtpXS5sdj02MFxyXG4gICAgICAgICAgICBpZihtW2xpc3RbaV0uaW5kZXhdID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLplJnor68uLi7kv67mraNcIilcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1bbGlzdFtpXS5pbmRleF0gPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbbGlzdFtpXS5pbmRleF0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2xpc3RbaV0uaW5kZXhdLnNldEl0ZW1EYXRhKGxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJQYXVzZUF1dG9Db206IGJvb2xlYW4gPSBmYWxzZTsgLy/mmK/lkKbmmoLlgZzoh6rliqjlkIjmiJBcclxuXHRiSW5BdXRvQ29tOiBib29sZWFuID0gZmFsc2U7ICAgICAvL+aYr+WQpuato+WcqOiHquWKqOWQiOaIkOWKqOeUu1xyXG5cdFxyXG5cdGdldEl0ZW1CeVBvcyhwb3M6IGNjLlZlYzIpOiBTb2xkaWVySXRlbSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLm5vZGUuZ2V0Qm91bmRpbmdCb3goKS5jb250YWlucyhwb3MpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpXS5ub2RlLmdldENvbXBvbmVudChTb2xkaWVySXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cdHNldGRyYWdpdGVtcG9zKHBvcykge1xyXG4gICAgICAgIHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucG9zaXRpb24gPSBwb3M7XHJcbiAgICB9XHJcblx0XHJcblx0YXN5bmMgc3RhcnQoKVxyXG5cdHtcclxuICAgICAgICB0aGlzLmhpZGVtZXJnZXRpcHMoKTtcclxuICAgICAgICBIYWxsU2NlbmUuX2luc3RhbmNlID0gdGhpcztcclxuICAgICAgICBXeENlbnRlci5pbml0KCk7XHJcblx0XHRsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTtcclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvcih2YXIgc2xvdCBvZiBzbG90cy5jaGlsZHJlbilcclxuXHRcdHtcclxuXHRcdFx0c2xvdC5nZXRDb21wb25lbnQoU2xvdEl0ZW0pLnNldEluZGV4KCsraSk7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdFZpZXcoKTtcclxuXHJcblx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5QXV0b2NvbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlKSByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIC8vIOWwj+eyvueBteaOieiQvVxyXG4gICAgICAgICAgICBpZihEYXRhLnVzZXIuRHJvcEdpZnRQdHMubGVuZ3RoPjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgbGV0IGI9IHRoaXMudHJ5QnV5UGxhbnQoRGF0YS51c2VyLkRyb3BHaWZ0UHRzWzBdLDQpO1xyXG4gICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLkRyb3BHaWZ0UHRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAvLyAg5bm/5ZGK6LSt5Lmw5oiQ5Yqf77yM5Zug5Li65rKh5pyJ56m65L2N5pyq5oiQ5Yqf5re75YqgXHJcbiAgICAgICAgICAgaWYoRGF0YS51c2VyLkFkQnV5Tm90RHJvcC5sZW5ndGg+MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBsZXQgYj0gdGhpcy50cnlCdXlQbGFudChEYXRhLnVzZXIuQWRCdXlOb3REcm9wWzBdLDIpO1xyXG4gICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLkFkQnV5Tm90RHJvcC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cdFx0fSkpLnJlcGVhdEZvcmV2ZXIoKSlcclxuICAgICAgICBcclxuICAgICAgICBEYXRhLnVzZXIuYXV0b19jb21fdGltZSA9IE1hdGgubWF4KDAsRGF0YS51c2VyLmF1dG9fY29tX3RpbWUpO1xyXG4gICAgICAgIERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPSBNYXRoLm1heCgwLERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUpO1xyXG4gICAgICAgIERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBNYXRoLm1heCgwLERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUpO1xyXG4gICAgICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBNYXRoLm1heCgwLERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnV5QnV0dG9uKCk7XHJcblxyXG4gICAgICAgICAvL+emu+e6v+WlluWKsSzmmoLml7blj6rnu5k25bCP5pe255qEICAgICAgICAgXHJcbiAgICAgICAgIHZhciB0ID0gKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIERhdGEudXNlci5zZXJ2ZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgIGlmICggRGF0YS51c2VyLnNlcnZlclRpbWUgIT0gMCAmJiB0PjMqNjApIHtcclxuICAgICAgICAgICAgIHZhciB0ID0gTWF0aC5taW4oNzIwMCAqIDMsIHQpO1xyXG4gICAgICAgICAgICAgdmFyIG1vbmV5ID0gRGF0YS51c2VyLmdldE9mZmxpbmVFYXJuaW5nKHQvNjApO1xyXG4gICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoJ3ByZWZhYi9PZmZsaW5lQXdhcmRVSScsIG51bGwsICh1aSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIHVpLmdldENvbXBvbmVudChPZmZsaW5lQXdhcmRVSSkuZGF0YSA9IG1vbmV5O1xyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIGMgb2YgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9wYXRoXCIpLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICB0aGlzLnBhdGgucHVzaChjLnBvc2l0aW9uKVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgzKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZXdhdmUoKTtcclxuICAgICAgICB9KSkpXHJcblxyXG5cdFx0Ly/mm7TmlrDlkITnp43ml7bpl7RcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJib3R0b21cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpc1gySW4gPSBEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMDtcclxuICAgICAgICAgICAgbGV0IGlzSW5EYiA9IERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwO1xyXG4gICAgICAgICAgICBsZXQgaXNEcEluID0gRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IDA7XHJcblxyXG4gICAgICAgICAgICAvL+agoemqjOaXtumXtFxyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9ET1VCTEVfQVRUX1RJTUUgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiBNQVhfRE9VQkxFX0lOQ09NRV9USU1FICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuYXV0b19jb21fdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9BVVRPX0NPTV9USU1FICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuYXV0b19jb21fdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IE1BWF9EUk9QX1BMQU5UX1RJTUUgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImF0dF94Ml90aW1lXCIsIGlzWDJJbiA/IFV0aWxzLmdldFRpbWVTdHJCeVMoKERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkgOiAn54uC5pq0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcInJld2FyZHgyX3RpbWVcIiwgaXNJbkRiID8gVXRpbHMuZ2V0VGltZVN0ckJ5UygoRGF0YS51c2VyLmRvdWJsZV9pbmNvbWVfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkgLyAxMDAwKSA6ICflj4zlgI0nKTtcclxuICAgICAgICAgICAgaWYoIERhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwiYXV0b190aW1lXCIsIFV0aWxzLmdldFRpbWVTdHJCeVMoKERhdGEudXNlci5hdXRvX2NvbV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSAvIDEwMDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImF1dG9fdGltZVwiLCBcIuiHquWKqOWQiOaIkFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZHJvcF9wbGFudFwiLGlzRHBJbiA/IFV0aWxzLmdldFRpbWVTdHJCeVMoKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkgOiAn5o6J6JC9Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImZ4X2J0X2FuZ3J5XCIpLmFjdGl2ZSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImF0dF94Ml90aW1lXCIpLmFjdGl2ZTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZihEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpPDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldFNwcml0ZShcImJ0X2Zhc3RfZ2VuX3Byb2Nlc3NfaXRlbVwiKS5maWxsUmFuZ2UgPSAwO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldFNwcml0ZShcImJ0X2Zhc3RfZ2VuX3Byb2Nlc3NfaXRlbVwiKS5maWxsUmFuZ2UgPSAoIChEYXRhLnVzZXIuZHJvcF9wbGFudF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKS8xMDAwLzYwKS9NQVhfRFJPUF9QTEFOVF9USU1FOy8vIChtYXhfZHJvcF9wbGFudCAqIDYwIC0gKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLzEwMDApIC9tYXhfZHJvcF9wbGFudCAqIDYwXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICAgICAgICAgIC8vIFRhc2tMYXllci5jaGVja1Rhc2soKTsvL+S7u+WKoeajgOa1i1xyXG4gICAgICAgICAgICAvLyBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UoKS5pc0d1aWRlID09IGZhbHNlKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2F1dG9cIikuYWN0aXZlID0gRGF0YS51c2VyLmd1aWRlSW5kZXggPiAyO1xyXG4gICAgICAgICAgICAvLyBEYXRhLnVzZXIuY2hlY2tOZXdUb2R5KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgIFxyXG5cdFx0fSksY2MuZGVsYXlUaW1lKDEpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMFwiKS5hY3RpdmUgPSBEYXRhLnVzZXIuZ3VpZGVJbmRleCA9PSAwO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwic3VwZXJtYXJrZXRcIikpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInN1cGVybWFya2V0XCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMikpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcblxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwicG93ZXJtYW5cIikpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInBvd2VybWFuXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMykpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5faW52aWF0ZVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC4zLCAyMCksIGNjLnJvdGF0ZVRvKDAuMywgLTEwKSwgY2Mucm90YXRlVG8oMC4yLCAwKSwgY2MuZGVsYXlUaW1lKDMpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsdXBpbl9nZW1cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMywgMjApLCBjYy5yb3RhdGVUbygwLjMsIC0xMCksIGNjLnJvdGF0ZVRvKDAuMiwgMCksIGNjLmRlbGF5VGltZSgzKSkucmVwZWF0Rm9yZXZlcigpKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikpIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5hY3RpdmUgPSB3aW5kb3dbXCJ0dFwiXTtcclxuICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSB3aW5kb3dbXCJ0dFwiXS5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIHJlY29yZGVyLm9uU3RhcnQocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImx1cGluX2dlbVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9WQ1JcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjUsIC45KSwgY2Muc2NhbGVUbygwLjUsIDEpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0dOW9leWxj+W8gOWni1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlY29yZGVyLm9uU3RvcChyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iUmVjb3JkZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibHVwaW5fZ2VtXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1ZDUlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2VuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHTlvZXlsY/nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudmlkZW9QYXRoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMucmVjb3JkZXJ0aW1lIDwgMzAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLlvZXlsY/ml7bpl7Tov4fnn61cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRlcnRpbWUgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gMFxyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTHVQaW5SZXN1bHRcIiwgbnVsbCwgKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChMdVBpblJlc3VsdCkuc2V0RGF0YShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCB0aGlzLm9uR2FtZVNob3csIHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCB0aGlzLm9uR2FtZUhpZGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJSZWNvcmRlciA9IGZhbHNlO1xyXG4gICAgcmVjb3JkZXJ0aW1lID0gMDtcclxuICAgIG9uR2FtZUhpZGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmdhbWUub2ZmKGNjLmdhbWUuRVZFTlRfU0hPVywgdGhpcy5vbkdhbWVTaG93KTtcclxuICAgICAgICBjYy5nYW1lLm9mZihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMub25HYW1lSGlkZSk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lU2hvdygpIHtcclxuICAgICAgICBpZiAoVXRpbHMuc2hhcmV0aW1lICE9IDAgJiYgVXRpbHMuc2hhcmVjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gVXRpbHMuc2hhcmV0aW1lID49IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLliIbkuqvlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVdGlscy5zaGFyZXRpbWUgPSAwO1xyXG4gICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVfc29sZGllcjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIGFzeW5jIGluaXRWaWV3KCkge1xyXG4gICAgICBcclxuICAgICAgICB2YXIgbm9kZV9jb20gPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKTtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyArK2kpIHtcclxuXHRcdFx0dmFyIG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZV9zb2xkaWVyKTtcclxuXHRcdFx0bm9kZS5wYXJlbnQgPSBub2RlX2NvbTtcclxuXHRcdFx0bm9kZS5wb3NpdGlvbiA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpLmNoaWxkcmVuW2ldLnBvc2l0aW9uOy8vIGNjLnYyKHgsIHkpO1xyXG5cdFx0XHRub2RlLm5hbWUgPSBcIml0bWVcIiArIGluZGV4O1xyXG5cdFx0XHR2YXIgcGxhbnQ6IFNvbGRpZXJJdGVtID0gbm9kZS5nZXRDb21wb25lbnQoU29sZGllckl0ZW0pO1xyXG5cdFx0XHRwbGFudC5pbmRleCA9IGluZGV4O1xyXG5cdFx0XHR0aGlzLml0ZW1zLnB1c2gocGxhbnQpO1xyXG5cdFx0XHQrK2luZGV4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbm9kZV9kcmFnID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVfc29sZGllcik7XHJcbiAgICAgICAgbm9kZV9kcmFnLnBhcmVudCA9IG5vZGVfY29tLnBhcmVudDtcclxuICAgICAgICBub2RlX2RyYWcubmFtZSA9IFwiaXRlbV9kcmFnXCI7XHJcbiAgICAgICAgbm9kZV9kcmFnLnggPSAtMTAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikuZ2V0Q29tcG9uZW50KFNvbGRpZXJJdGVtKTtcclxuICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbV9kcmFnLmJEcmFnID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0Q29tcG9zZUl0ZW1zKCk7XHJcblxyXG4gICAgICAgIG5vZGVfY29tLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJQYXVzZUF1dG9Db20gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmmoLlgZzoh6rliqjlkIjmiJBcIilcclxuXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5Zyo6Ieq5Yqo5ZCI5oiQ5Lit77yM5Y+W5raI5b2T5YmN5ZCI5oiQXHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSAmJiB0aGlzLml0ZW1fZHJhZy5kYXRhY29weSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLlj5bmtojlvZPliY3lkIjmiJBcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5ID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgcG9zID0gbm9kZV9jb20uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW1CeVBvcyhwb3MpO1xyXG5cclxuICAgICAgICAgICAgaWYoaXRlbSAmJiBpdGVtLmRyb3B0eXBlICE9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZHJvcHR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaXRlbS51cGRhdGVJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uZGF0YWNvcHkgJiYgaXRlbS5kcm9wdHlwZSA9PSAwICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaFBvcyA9IHBvcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYkNob29zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRkcmFnaXRlbXBvcyhpdGVtLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuaW5kZXggPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuc2V0SXRlbURhdGEoaXRlbS5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93bWVyZ2V0aXBzKGl0ZW0uZGF0YWNvcHkubHYpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgcG9zID0gbm9kZV9jb20uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYkNob29zZWQgJiYgcG9zLnN1Yih0aGlzLnRvdWNoUG9zKS5tYWcoKSA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRkcmFnaXRlbXBvcyhwb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwb3MxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoZS5nZXRMb2NhdGlvbigpLnN1YihjYy52Mihwb3MxLngscG9zMS55KSkubWFnKCkgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnNjYWxlID0gMC41NTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmRvY29tcCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmRvY29tcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cdGJDaG9vc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB0b3VjaFBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuXHRcclxuICAgIHRyeUF1dG9jb20oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYlBhdXNlQXV0b0NvbSB8fCB0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcclxuICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIDwgRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgJiYgIXRoaXMuYkluQXV0b0NvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDb21wb3NlSXRlbXMoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXSB8fCAhdGhpcy5pdGVtc1tpXS5kYXRhY29weSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLml0ZW1zLmxlbmd0aCA7ICsraikge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2pdIHx8ICF0aGlzLml0ZW1zW2pdLmRhdGFjb3B5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iSW5BdXRvQ29tKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkubHYgPT0gdGhpcy5pdGVtc1tqXS5kYXRhY29weS5sdiAmJiB0aGlzLml0ZW1zW2ldLmRyb3B0eXBlID09IDAgJiYgdGhpcy5pdGVtc1tqXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkubHY8NjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gdGhpcy5pdGVtc1tpXS5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gdGhpcy5pdGVtc1tqXS5pbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gdGhpcy5pdGVtc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuaW5kZXggPSB0aGlzLml0ZW1zW2pdLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5zZXRJdGVtRGF0YSh0aGlzLml0ZW1zW2pdLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2pdLnNldEl0ZW1EYXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnBvc2l0aW9uID0gdGhpcy5pdGVtc1tqXS5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldGRyYWdpdGVtcG9zKHRoaXMuaXRlbXNbal0ubm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuaXRlbXNbaV0ubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0cG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuW8gOWni+iHquWKqOWQiOaIkFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJJbkF1dG9Db20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjEzLCBjYy52Mih0YXJnZXRwb3MueCx0YXJnZXRwb3MueSkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbWFuaSh0aGlzLml0ZW1zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuiHquWKqOWQiOaIkOe7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYkluQXV0b0NvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHJpdmF0ZSB0b3VjaGVuZHRpbWUgPSAwO1xyXG4gICAgZG9jb21wKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLnRvdWNoZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICB0aGlzLmhpZGVtZXJnZXRpcHMoKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNSksY2MuZmFkZVRvKDAuNSwwKSkpXHJcblxyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5iUGF1c2VBdXRvQ29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYkluQXV0b0NvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmgaLlpI3oh6rliqjlkIjmiJBcIilcclxuICAgICAgICB9KSkpXHJcbiAgICAgICAgdGhpcy5iQ2hvb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBwb3MgPSBlID8gZS5nZXRMb2NhdGlvbigpIDogY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1fZHJhZy5kYXRhY29weSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5Yig6ZmkXHJcbiAgICAgICAgICAgIHZhciBwb3MxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgcG9zMSA9IHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MxKTtcclxuICAgICAgICAgICAgaWYgKHBvcy5zdWIoY2MudjIocG9zMS54LHBvczEueSkpLm1hZygpIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkpIHRtcCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0bXAgPD0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLmpI3nianmlbDph4/ov4flsJHkuI3og73liKDpmaRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkubHYgPj0gRGF0YS51c2VyLkdldE1heEx2KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi5pyA6auY562J57qn5qSN54mp5bCx5LiN5Yig6Zmk5LqG5ZCn77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLkRyb3BXdUppYW5nKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5LmluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlUmVjcnVpdG1lbnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChHYW1lU2NlbmUuSW5zdGFuY2UoKS5mcHMgPiAzMClcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXlTa0FuaShcInNwaW5lL3VpL3lpbmxpYW5nemVuZ2ppYVwiLCBcImVmZmVjdFwiLCB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLCBjYy52MigwLCAyMCksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5ZCI5oiQIOenu+WKqCAg5Lqk5o2iXHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtOiBTb2xkaWVySXRlbSA9IHRoaXMuZ2V0SXRlbUJ5UG9zKHBvcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBudWxsIHx8IERhdGEudXNlci5zbG90c1tpdGVtLmluZGV4XSA9PSAwIHx8IGl0ZW0gPT0gdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gfHwgKGl0ZW0gJiYgaXRlbS5kcm9wdHlwZSAhPSAwKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5Y+W5raIXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGF0YWNvcHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgLy/np7vliqhcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5Db21wTW92ZSh0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5pbmRleCwgaXRlbS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5kYXRhY29weS5vcGVuID09IHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5Lm9wZW4gJiZcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGF0YWNvcHkubHYgPT0gdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkubHYgJiYgaXRlbS5kYXRhY29weS5pbmRleCAhPSB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5pbmRleCAmJiBpdGVtLmRyb3B0eXBlID09IDAgJiYgaXRlbS5kYXRhY29weS5sdjw2MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21hbmkoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIC8v5Lqk5o2iXHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuQ29tcE1vdmUodGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uaW5kZXgsIGl0ZW0uaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBfdG1wOiBQbGFudEluZm8gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0uZGF0YWNvcHkpKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEoX3RtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cdFxyXG4gICAgY29tYW5pKGl0ZW06IFNvbGRpZXJJdGVtKSB7XHJcbiAgICAgICAgbGV0IGIgPSBEYXRhLnVzZXIuQ29tcG9zZVBsYW50KGl0ZW0uaW5kZXgsIHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5LmluZGV4KTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKERhdGEudXNlci5ndWlkZUluZGV4ID09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEYXRhLnVzZXIuZ3VpZGVJbmRleCArKztcclxuICAgICAgICAgICAgRGF0YS5zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBuZXh0R3VuID0gRGF0YS51c2VyLmdldFBsYW50SW5mbyhpdGVtLmluZGV4KTtcclxuICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKG5leHRHdW4pO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmF1dG9jb21pbmRleHMgPSBbLTEsIC0xXTtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpdGVtLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0cG9zKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5U2tBbmkoXCJzcGluZTpvdGhlci9lZmZlY3RfaGVjaGVuZ1wiLCBcImVmZmVjdFwiLCB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikucGFyZW50LCB0YXJnZXRwb3MuYWRkKGNjLnYzKDAsMjAsMCkpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVCdXlCdXR0b24oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsdiA9IERhdGEudXNlci5HZXRNYXhMdigpIC0gMztcclxuICAgICAgICBpZihsdjwxKWx2ID0gMTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfYnV5X2x2bFwiLCdMVi4nICsgbHYpO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9idXlfY29zdFwiLFV0aWxzLmZvcm1hdE51bWJlcihEYXRhLnVzZXIuQnV5UHJpY2UobHYpKSk7XHJcblxyXG4gICAgICAgIGxldCBza3BhdGggPSBgc3BpbmU6Zmxvd2VyJHtsdn1fc2tlYDtcclxuICAgICAgICBsZXQgYXRsYXNwYXRoID0gYHNwaW5lOmZsb3dlciR7bHZ9X3RleGA7XHJcbiAgICAgICAgbGV0IGNoaWNrID0gdGhpcy5HZXREcmFnb25BbWF0dXJlKCdjaGlja2J1eScpO1xyXG4gICAgICAgIGNoaWNrLmRyYWdvbkFzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhza3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCkgYXMgZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldDtcclxuICAgICAgICBjaGljay5kcmFnb25BdGxhc0Fzc2V0ID0gYXdhaXQgVXRpbHMubG9hZFJlcyhhdGxhc3BhdGgsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0KSBhcyBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQ7XHJcbiAgICAgICAgY2hpY2suYXJtYXR1cmVOYW1lID0gJ0FybWF0dXJlJztcclxuICAgICAgICBjaGljay5wbGF5QW5pbWF0aW9uKCdpZGxlTCcsMCk7XHJcbiAgICB9XHJcbiAgICAvLzAgY29pbiAxIGdlbSAyIGFkIDPmma7pgJrmjonokL0gNOWwj+eyvueBteaOieiQvVxyXG4gICAgcHVibGljIHRyeUJ1eVBsYW50KGx2Om51bWJlcixidXl0eXBlOm51bWJlcikge1xyXG4gICAgICAgIHZhciBpdGVtOiBTb2xkaWVySXRlbSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuc2xvdHNbaV0gPT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXS5kYXRhY29weSAmJiB0aGlzLmF1dG9jb21pbmRleHNbMF0gIT0gaSAmJiB0aGlzLmF1dG9jb21pbmRleHNbMV0gIT0gaSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWx2KSB7XHJcbiAgICAgICAgICAgIGx2ID0gRGF0YS51c2VyLkdldE1heEx2KCkgLSAzO1xyXG4gICAgICAgICAgICBpZihsdjwxKWx2ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChidXl0eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gRGF0YS51c2VyLkJ1eVByaWNlKGx2KTtcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuQnV5UHJpY2UobHYpID4gRGF0YS51c2VyLmNvaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RpbWVzIDwgRGF0YS51c2VyLnRvZGF5X2dldGNoaWNrX3RvdGFsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoRGF0YS51c2VyLnRvZGF5X2dldGNvaW5fdGltZXMgPCBEYXRhLnVzZXIudG9kYXlfZ2V0Y29pbl90b3RhbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0NvaW5Ob3RFbm91Z2hcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoQ29pbk5vdEVub3VnaFVJKS5zZXRUeXBlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIumHkeW4geS4jei2s1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmNvaW4gLT0gY29zdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidXl0eXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBnZW0gPSBNYXRoLm1pbig1LCBOdW1iZXIoREJfcGxhbnRbbHYgLSAxXVs2XSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdlbSA+IERhdGEudXNlci5nZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi6ZK755+z5LiN6LazXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5nZW0gLT0gZ2VtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoYnV5dHlwZSA9PSAyKXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnV5dHlwZSA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiKseebhuaOieiQvVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJmbG93ZXJfcG90X2xhbmRcIilcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZG9jb21wKG51bGwpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEl0ZW1EYXRhKERhdGEudXNlci5CdXlQbGFudChpdGVtLmluZGV4LCBsdikgYXMgUGxhbnRJbmZvLGJ1eXR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1eUJ1dHRvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGJ1eXR5cGUgPD0gMikge1xyXG4gICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuS9jee9ruS4jeWkn+WVpu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLGNjLmZhZGVUbygwLjUsMCkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1lcmdldGlwKCl7XHJcbiAgICAgICAgdGhpcy50b3VjaGVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYlBhdXNlQXV0b0NvbSB8fCB0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuYkluQXV0b0NvbSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoIDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaV0gfHwgIXRoaXMuaXRlbXNbaV0uZGF0YWNvcHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2opIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbal0gfHwgIXRoaXMuaXRlbXNbal0uZGF0YWNvcHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5kYXRhY29weS5sdiA9PSB0aGlzLml0ZW1zW2pdLmRhdGFjb3B5Lmx2ICYmIHRoaXMuaXRlbXNbaV0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2pdLmRyb3B0eXBlID09IDAgJiYgdGhpcy5pdGVtc1tpXS5kYXRhY29weS5sdiA8IDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleDEgPSB0aGlzLml0ZW1zW2ldLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXgyID0gdGhpcy5pdGVtc1tqXS5pbmRleFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAwID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baW5kZXgxXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baW5kZXgyXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5wb3NpdGlvbiA9IHAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMSxjYy52MihwMS54LHAxLnkpKSxjYy5tb3ZlVG8oMC4xLGNjLnYyKHAwLngscDAueSkpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG5cdFx0XHRjYXNlIFwiYnRuX3NldHRpbmdcIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9TZXR0aW5nVUlcIilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImJ0bl9zaWduXCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2lnblVJXCIpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidG5fYnV5XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUJ1eVBsYW50KG51bGwsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8wXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYoRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnVzZXIuZ3VpZGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGEuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lcmdldGlwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidF9mYXN0X2dlblwiOlxyXG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0FkTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG5cdFx0XHRcdFx0bm9kZS5nZXRDb21wb25lbnQoQWRMYXllcikuc2V0VHlwZShFQURMQVlFUi5EUk9QX1BMQU5UKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidG5fYW5ncnlcIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuXHRcdFx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KEFkTGF5ZXIpLnNldFR5cGUoRUFETEFZRVIuRE9VQkxFX0FUVClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRuX2RvdWJsZV9jb2luXCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChBZExheWVyKS5zZXRUeXBlKEVBRExBWUVSLkRPVUJMRV9JTkNPTUUpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImJ0X2F1dG9fbWVyZ2VcIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuXHRcdFx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KEFkTGF5ZXIpLnNldFR5cGUoRUFETEFZRVIuQVVUT19DT00pXHJcblx0XHRcdFx0fSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3Nob3BcIjpcclxuICAgICAgICAgICAgICAgU2hvcExheWVyLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2RlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID09IDI1NSlcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLmi5bliqjliLDov5nph4zljZblh7pcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2ludmlhdGVcIjpcclxuICAgICAgICAgICAgICAgIC8vIFd4Q2VudGVyLnNoYXJlQXBwTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2hhcmVMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoU2hhcmVMYXllcikuc2V0RGF0YSgxMDAwMDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX1JlY29yZGVyXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iUmVjb3JkZXIgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLlvIDlp4vlvZXlsY9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iUmVjb3JkZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRlciA9IHdpbmRvd1tcInR0XCJdLmdldEdhbWVSZWNvcmRlck1hbmFnZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXIuc3RhcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIue7k+adn+W9leWxj1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYlJlY29yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZGVyID0gd2luZG93W1widHRcIl0uZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRlci5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBiRmlyc3RTdWJDb250ZXggPSB0cnVlO1xyXG59XHJcbiJdfQ==