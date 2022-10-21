
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
var Enemy_1 = require("./prefab/Enemy");
var LoseUI_1 = require("./prefab/LoseUI");
var LuPinResult_1 = require("./prefab/LuPinResult");
var OfflineAwardUI_1 = require("./prefab/OfflineAwardUI");
var ShopLayer_1 = require("./prefab/ShopLayer");
var VictoryUI_1 = require("./prefab/VictoryUI");
var SlotItem_1 = require("./SlotItem");
var SoldierItem_1 = require("./SoldierItem");
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
        this.SetText("lbl_gem", Utils_1.default.formatNumber(Data_1.default.user.gem) + "");
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
                            if (Data_1.default.user.double_att_time - Utils_1.default.getServerTime() > AdLayer_1.max_auto_double_att * 60 * 1000) {
                                Data_1.default.user.double_att_time = Utils_1.default.getServerTime();
                            }
                            if (Data_1.default.user.double_income_time - Utils_1.default.getServerTime() > AdLayer_1.max_auto_double_income * 60 * 1000) {
                                Data_1.default.user.double_income_time = Utils_1.default.getServerTime();
                            }
                            if (Data_1.default.user.auto_com_time - Utils_1.default.getServerTime() > AdLayer_1.max_auto_com * 60 * 1000) {
                                Data_1.default.user.auto_com_time = Utils_1.default.getServerTime();
                            }
                            if (Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime() > AdLayer_1.max_drop_plant * 60 * 1000) {
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
                                _this.GetSprite("bt_fast_gen_process_item").fillRange = ((Data_1.default.user.drop_plant_time - Utils_1.default.getServerTime()) / 1000 / 60) / AdLayer_1.max_drop_plant; // (max_drop_plant * 60 - (Data.user.drop_plant_time - Utils.getServerTime())/1000) /max_drop_plant * 60
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
                        if (e.getLocation().sub(cc.v2(pos1.x, pos1.y)).mag() < 100) {
                            _this.GetGameObject("btn_delete").scale = 0.55;
                        }
                        else {
                            _this.GetGameObject("btn_delete").scale = 0.5;
                        }
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
        this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(2), cc.fadeTo(1, 0)));
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
                this.GetGameObject("btn_delete").scale = 0.5;
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
        var lv = Data_1.default.user.GetMaxLv() - 3;
        if (lv < 1)
            lv = 1;
        this.SetText("lbl_buy_lvl", 'LV.' + lv);
        this.SetText("lbl_buy_cost", Utils_1.default.formatNumber(Data_1.default.user.BuyPrice(lv)));
        this.SetSprite("icon_buy", "texture/plants/" + (lv - 1));
    };
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
                    MsgHints_1.default.show("金币不足");
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
            else {
            }
            if (buytype >= 3) {
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
                this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(2), cc.fadeTo(1, 0)));
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
                WxCenter_1.default.shareAppMessage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxIYWxsU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1Qyx3Q0FBbUM7QUFDbkMsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUN6Qyx3Q0FBbUM7QUFDbkMsMkJBQTBDO0FBQzFDLDRDQUFnSTtBQUNoSSx3Q0FBbUM7QUFDbkMsMENBQXFDO0FBQ3JDLG9EQUErQztBQUMvQywwREFBcUQ7QUFDckQsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUMzQyx1Q0FBa0M7QUFDbEMsNkNBQXdDO0FBSWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFNO0lBQTdDO1FBQUEscUVBODVCQztRQTU1QkcsZUFBUyxHQUFhLElBQUksQ0FBQztRQVNuQixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNuQixlQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGVBQVMsR0FBTyxJQUFJLENBQUM7UUFtRnJCLFdBQUssR0FBRyxLQUFLLENBQUM7UUEyRGQsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUE4RHhCLFVBQUksR0FBYSxFQUFFLENBQUM7UUFFOUIsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFDOUIsbUJBQWEsR0FBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEIsV0FBSyxHQUF1QixFQUFFLENBQUM7UUFxQnZDLG1CQUFhLEdBQVksS0FBSyxDQUFDLENBQUMsVUFBVTtRQUM3QyxnQkFBVSxHQUFZLEtBQUssQ0FBQyxDQUFLLFlBQVk7UUEyTTFDLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUE0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QyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO3dCQUN2RCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ25CO2lCQUNKO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7O0lBeDVCTSxtQkFBUyxHQUFHLElBQUksQ0FBQztJQUZ4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNPO0lBMGQzQjtRQURGLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNhO0lBNWRiLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E4NUI3QjtJQUFELGdCQUFDO0NBOTVCRCxBQTg1QkMsQ0E5NUJzQyxnQkFBTSxHQTg1QjVDO2tCQTk1Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi9mcmFtd29yay9CYXNlVUlcIjtcclxuaW1wb3J0IE1zZ0hpbnRzIGZyb20gXCIuLi9mcmFtd29yay9Nc2dIaW50c1wiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vbWFuYWdlci9EYXRhXCI7XHJcbmltcG9ydCBXeENlbnRlciBmcm9tIFwiLi4vbWFuYWdlci9XeENlbnRlclwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4uL3V0aWxzL0F1ZGlvTWdyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgREJfbGV2ZWwsIERCX3BsYW50IH0gZnJvbSBcIi4vREJcIjtcclxuaW1wb3J0IEFkTGF5ZXIsIHsgbWF4X2F1dG9fZG91YmxlX2F0dCwgbWF4X2F1dG9fZG91YmxlX2luY29tZSwgbWF4X2F1dG9fY29tLCBtYXhfZHJvcF9wbGFudCwgRUFETEFZRVIgfSBmcm9tIFwiLi9wcmVmYWIvQWRMYXllclwiO1xyXG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4vcHJlZmFiL0VuZW15XCI7XHJcbmltcG9ydCBMb3NlVUkgZnJvbSBcIi4vcHJlZmFiL0xvc2VVSVwiO1xyXG5pbXBvcnQgTHVQaW5SZXN1bHQgZnJvbSBcIi4vcHJlZmFiL0x1UGluUmVzdWx0XCI7XHJcbmltcG9ydCBPZmZsaW5lQXdhcmRVSSBmcm9tIFwiLi9wcmVmYWIvT2ZmbGluZUF3YXJkVUlcIjtcclxuaW1wb3J0IFNob3BMYXllciBmcm9tIFwiLi9wcmVmYWIvU2hvcExheWVyXCI7XHJcbmltcG9ydCBWaWN0b3J5VUkgZnJvbSBcIi4vcHJlZmFiL1ZpY3RvcnlVSVwiO1xyXG5pbXBvcnQgU2xvdEl0ZW0gZnJvbSBcIi4vU2xvdEl0ZW1cIjtcclxuaW1wb3J0IFNvbGRpZXJJdGVtIGZyb20gXCIuL1NvbGRpZXJJdGVtXCI7XHJcbmltcG9ydCB7IFBsYW50SW5mbyB9IGZyb20gXCIuL1VzZXJNb2RlbFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsU2NlbmUgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGVuZW15X3ByZTpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBfaW5zdGFuY2UgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTpIYWxsU2NlbmVcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gSGFsbFNjZW5lLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sYXN0ZHJvcHRpbWUgPSAwO1xyXG4gICAgcHVibGljIGVuZW15bGlzdDpjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgd2F2ZV9pbmZvOmFueSA9IG51bGw7XHJcblxyXG5cclxuICAgIGhpZGVtZXJnZXRpcHMoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpOy8vZnhfZ3JvdW5kX21lcmdlXHJcbiAgICAgICAgZm9yKHZhciBzbG90IG9mIHNsb3RzLmNoaWxkcmVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvdC5nZXRDaGlsZEJ5TmFtZShcImZ4X2dyb3VuZF9tZXJnZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd21lcmdldGlwcyhsdjpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4cyA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaXRlbSBvZiB0aGlzLml0ZW1zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXRlbS5kYXRhY29weSAmJiBpdGVtLmRhdGFjb3B5Lmx2ID09IGx2ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCAmJiBpdGVtLmRhdGFjb3B5Lmx2PDYwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmRleHMucHVzaChpdGVtLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleHMpO1xyXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpOy8vZnhfZ3JvdW5kX21lcmdlXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpPHNsb3RzLmNoaWxkcmVuLmxlbmd0aDsrK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzbG90cy5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImZ4X2dyb3VuZF9tZXJnZVwiKS5hY3RpdmUgPSBpbmRleHMuaW5kZXhPZihpKSA+PTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpXHJcblx0e1xyXG4gICAgICAgIGlmKGR0PjEpZHQ9MTtcclxuXHRcdHRoaXMuU2V0VGV4dChcImxibF9jb2luXCIsVXRpbHMuZm9ybWF0TnVtYmVyKERhdGEudXNlci5jb2luKStcIlwiKTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfZ2VtXCIsVXRpbHMuZm9ybWF0TnVtYmVyKERhdGEudXNlci5nZW0pK1wiXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucmVjb3JkZXJ0aW1lICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcyA9IE1hdGguZmxvb3IoKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMucmVjb3JkZXJ0aW1lKS8xMDAwKTtcclxuICAgICAgICAgICAgaWYocz4wKXRoaXMuU2V0VGV4dChcImxibF9sdXBpbmdcIixzK1wic1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfbHVwaW5nXCIsXCJcIik7XHJcblxyXG4gICAgICAgIC8veeaOkuW6j1xyXG4gICAgICAgIHRoaXMuZW5lbXlsaXN0LnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgcmV0dXJuIGIueSAtIGEueTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwO2k8dGhpcy5lbmVteWxpc3QubGVuZ3RoOysraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0W2ldLnpJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sYXN0ZHJvcHRpbWUgKz0gZHQ7XHJcbiAgICAgICAgaWYodGhpcy5fbGFzdGRyb3B0aW1lID4gMjUgKiAoRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA+IFV0aWxzLmdldFNlcnZlclRpbWUoKT8uMzoxKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5pmu6YCa6Iqx55uG5o6J6JC9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSkgcmV0dXJuXHJcbiAgICAgICAgICAgIGxldCBsdiA9IE1hdGgubWF4KDEsIERhdGEudXNlci5HZXRNYXhMdigpIC0gVXRpbHMuZ2V0UmFuZG9tSW50KDYsIDkpKTtcclxuICAgICAgICAgICAgdGhpcy50cnlCdXlQbGFudChsdiwgMylcclxuICAgICAgICAgICAgdGhpcy5fbGFzdGRyb3B0aW1lID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5LiA5q615pe26Ze05LiN5pON5L2c77yM5o+Q56S65Y+v5Lul5ZCI5oiQXHJcbiAgICAgICAgaWYodGhpcy50b3VjaGVuZHRpbWUgIT0gMCAmJiBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgLSB0aGlzLnRvdWNoZW5kdGltZSA+IDUwMDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1lcmdldGlwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Lit6Ze05pi+56S65Zu+54mHXHJcbiAgICBwdWJsaWMgYXN5bmMgc2hvd0ltYWdlKGltZ3BhdGg6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gYXdhaXQgVXRpbHMubG9hZFJlcyhpbWdwYXRoLGNjLlNwcml0ZUZyYW1lKSBhcyBjYy5TcHJpdGVGcmFtZTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnkgPSAyMDA7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDEuMjtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMiksY2Muc3Bhd24oY2MubW92ZUJ5KDAuNSwwLDEwMCksY2MuZmFkZVRvKDAuNSwwKSksY2MucmVtb3ZlU2VsZigpKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJGYWlsID0gZmFsc2U7XHJcbiAgICByZW1vdmVlbmVteShub2RlOmNjLk5vZGUsYkZhaWw6Ym9vbGVhbilcclxuICAgIHtcclxuICAgICAgICBpZihiRmFpbCl0aGlzLmJGYWlsID0gdHJ1ZTtcclxuICAgICAgICBmb3IodmFyIGkgPSB0aGlzLmVuZW15bGlzdC5sZW5ndGgtMTtpPj0wOy0taSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUgPT0gdGhpcy5lbmVteWxpc3RbaV0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlsaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jcmVhdGVjb21wbGV0ZSAmJiB0aGlzLmVuZW15bGlzdC5sZW5ndGggPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYkZhaWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKERhdGEudXNlci53YXZlPj0gdGhpcy53YXZlX2luZm9bMl0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLndhdmU9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0xvc2VVSVwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KExvc2VVSSkuc2V0SW5mbyhlbmVteS5nZXRCb3NzTW9uZXkoKSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGEudXNlci53YXZlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbWFnZShcInRleHR1cmUvZGVmZWF0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLndhdmUrKztcclxuICAgICAgICAgICAgICAgIGlmKERhdGEudXNlci53YXZlPiB0aGlzLndhdmVfaW5mb1syXSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSBub2RlLmdldENvbXBvbmVudChFbmVteSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vbmV5ID0gZW5lbXkuZ2V0Qm9zc01vbmV5KCk7XHJcblx0XHRcdFx0ICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEuMiksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvVmljdG9yeVVJXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFZpY3RvcnlVSSkuc2V0SW5mbyhtb25leSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLndhdmU9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLmx2Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS5zYXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBEYXRhLnVzZXIubHYgKyBcIl9cIiArIERhdGEudXNlci53YXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2F2ZV9pbmZvID0gREJfbGV2ZWxba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJ3aW5fd2F2ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0ltYWdlKFwidGV4dHVyZS9zdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVNrQW5pKFwic3BpbmU6b3RoZXIvc2hlbmdqaWNoZW5nZ29uZ1wiLCBcImVmZmVjdFwiLCB0aGlzLm5vZGUsY2MudjMoMCwxNTAsMCksIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRld2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZWNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBjcmVhdGV3YXZlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJGYWlsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVjb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQga2V5ID0gRGF0YS51c2VyLmx2ICsgXCJfXCIgKyBEYXRhLnVzZXIud2F2ZTtcclxuICAgICAgICB0aGlzLndhdmVfaW5mbyA9IERCX2xldmVsW2tleV07XHJcblxyXG4gICAgICAgIC8v6YCa5YWz5ZCO5bCx5LiA55u06K+75pyA5ZCO5LiA5YWzXHJcbiAgICAgICAgaWYoIXRoaXMud2F2ZV9pbmZvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IDYwICsgXCJfXCIgKyBEYXRhLnVzZXIud2F2ZTtcclxuICAgICAgICAgICAgdGhpcy53YXZlX2luZm8gPSBEQl9sZXZlbFtrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoRGF0YS51c2VyLndhdmU9PSB0aGlzLndhdmVfaW5mb1syXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWdyLkluc3RhbmNlKCkucGxheUJHTShcImJnQm9zc1wiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoLjgpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICBVdGlscy5jcmVhdGVVSShcInByZWZhYi9Cb3NzQ29tbWluZ1VJXCIpXHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihEYXRhLnVzZXIud2F2ZSA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5QkdNKFwiQkdNMVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yib5bu65oCq54mpXHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPHRoaXMud2F2ZV9pbmZvWzRdOysraSlcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHRoaXMud2F2ZV9pbmZvWzNdKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBudW0gPSBsaXN0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPHRoaXMud2F2ZV9pbmZvWzZdOysraSlcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHRoaXMud2F2ZV9pbmZvWzVdKVxyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8bGlzdC5sZW5ndGg7KytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMi4yICogaSksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgIGxldCBlID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVteV9wcmUpO1xyXG4gICAgICAgICAgICAgICAgZS5wYXJlbnQgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX29ialwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KEVuZW15KS5zZXRJRChpZCxpPj1udW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteWxpc3QucHVzaChlKTtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gbGlzdC5sZW5ndGgtMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL+WFs+WNoeS/oeaBr1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9jdXJfbHZcIixEYXRhLnVzZXIubHYrXCJcIik7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX3dhdmVzXCIsRGF0YS51c2VyLndhdmUrXCIvXCIrIHRoaXMud2F2ZV9pbmZvWzJdKTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfcHJlX2x2XCIsKERhdGEudXNlci5sdi0xKStcIlwiKTtcclxuICAgICAgICB0aGlzLlNldFRleHQoXCJsYmxfbmV4X2x2XCIsKERhdGEudXNlci5sdisxKStcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF0aDpjYy5WZWMzW10gPSBbXTtcclxuXHJcblx0aXRlbV9kcmFnOiBTb2xkaWVySXRlbSA9IG51bGw7XHJcblx0YXV0b2NvbWluZGV4czogbnVtYmVyW10gPSBbLTEsIC0xXTtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxTb2xkaWVySXRlbT4gPSBbXTtcclxuICAgIGluaXRDb21wb3NlSXRlbXMoKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBEYXRhLnVzZXIuQ29tUGxhbnRzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYobGlzdFtpXS5sdj42MClsaXN0W2ldLmx2PTYwXHJcbiAgICAgICAgICAgIGlmKG1bbGlzdFtpXS5pbmRleF0gPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumUmeivry4uLuS/ruato1wiKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbVtsaXN0W2ldLmluZGV4XSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tsaXN0W2ldLmluZGV4XSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbbGlzdFtpXS5pbmRleF0uc2V0SXRlbURhdGEobGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYlBhdXNlQXV0b0NvbTogYm9vbGVhbiA9IGZhbHNlOyAvL+aYr+WQpuaaguWBnOiHquWKqOWQiOaIkFxyXG5cdGJJbkF1dG9Db206IGJvb2xlYW4gPSBmYWxzZTsgICAgIC8v5piv5ZCm5q2j5Zyo6Ieq5Yqo5ZCI5oiQ5Yqo55S7XHJcblx0XHJcblx0Z2V0SXRlbUJ5UG9zKHBvczogY2MuVmVjMik6IFNvbGRpZXJJdGVtIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0ubm9kZS5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKHBvcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2ldLm5vZGUuZ2V0Q29tcG9uZW50KFNvbGRpZXJJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0c2V0ZHJhZ2l0ZW1wb3MocG9zKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgcG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wb3NpdGlvbiA9IHBvcztcclxuICAgIH1cclxuXHRcclxuXHRhc3luYyBzdGFydCgpXHJcblx0e1xyXG4gICAgICAgIHRoaXMuaGlkZW1lcmdldGlwcygpO1xyXG4gICAgICAgIEhhbGxTY2VuZS5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIFd4Q2VudGVyLmluaXQoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHdpbmRvd1tcInd4XCJdKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBvYmogPSB3aW5kb3dbXCJ3eFwiXS5nZXRMYXVuY2hPcHRpb25zU3luYyh7fSlcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ+WQr+WKqOWwj+eoi+W6j+eahOi3r+W+hDonLCBvYmoucGF0aClcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ+WQr+WKqOWwj+eoi+W6j+eahOWcuuaZr+WAvDonLCBvYmouc2NlbmUpXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCflkK/liqjlsI/nqIvluo/nmoQgcXVlcnkg5Y+C5pWwOicsIG9iai5xdWVyeSlcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ+adpea6kOS/oeaBrzonLCBvYmouc2hhcmVUaWNrZXQpXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCfmnaXmupDkv6Hmga/lj4LmlbBhcHBJZDonLCBvYmoucmVmZXJyZXJJbmZvLmFwcElkKVxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygn5p2l5rqQ5L+h5oGv5Lyg6L+H5p2l55qE5pWw5o2uOicsIG9iai5yZWZlcnJlckluZm8uZXh0cmFEYXRhKVxyXG5cclxuICAgICAgICAvLyAgICAgd2luZG93W1wid3hcIl0ub25TaGFyZU1lc3NhZ2VUb0ZyaWVuZCgoZXJyTXNnKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImVyck1zZ1wiLCBlcnJNc2cpXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyTXNnLnN1Y2Nlc3MpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBBdWRpb01nci5JbnN0YW5jZSgpLnBsYXlTRlgoXCJnZW1cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgVXRpbHMuZmx5QW5pbSgxLHRoaXMubm9kZSxcImljb25fZ2VtXCIsVXRpbHMuZ2V0UmFuZG9tSW50KDIsNCksODUsKGIpPT57XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKGIpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIERhdGEudXNlci5nZW0gKz0gR2FtZUNvbnN0LklOVklURV9GUklFTkRfQUREX0dFTTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcblx0XHRsZXQgc2xvdHMgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJzbG90c1wiKTtcclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvcih2YXIgc2xvdCBvZiBzbG90cy5jaGlsZHJlbilcclxuXHRcdHtcclxuXHRcdFx0c2xvdC5nZXRDb21wb25lbnQoU2xvdEl0ZW0pLnNldEluZGV4KCsraSk7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdFZpZXcoKTtcclxuXHJcblx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5QXV0b2NvbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlKSByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIC8vIOWwj+eyvueBteaOieiQvVxyXG4gICAgICAgICAgICBpZihEYXRhLnVzZXIuRHJvcEdpZnRQdHMubGVuZ3RoPjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgbGV0IGI9IHRoaXMudHJ5QnV5UGxhbnQoRGF0YS51c2VyLkRyb3BHaWZ0UHRzWzBdLDQpO1xyXG4gICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLkRyb3BHaWZ0UHRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAvLyAg5bm/5ZGK6LSt5Lmw5oiQ5Yqf77yM5Zug5Li65rKh5pyJ56m65L2N5pyq5oiQ5Yqf5re75YqgXHJcbiAgICAgICAgICAgaWYoRGF0YS51c2VyLkFkQnV5Tm90RHJvcC5sZW5ndGg+MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBsZXQgYj0gdGhpcy50cnlCdXlQbGFudChEYXRhLnVzZXIuQWRCdXlOb3REcm9wWzBdLDIpO1xyXG4gICAgICAgICAgICAgICBpZihiKVxyXG4gICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLkFkQnV5Tm90RHJvcC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cdFx0fSkpLnJlcGVhdEZvcmV2ZXIoKSlcclxuICAgICAgICBcclxuICAgICAgICBEYXRhLnVzZXIuYXV0b19jb21fdGltZSA9IE1hdGgubWF4KDAsRGF0YS51c2VyLmF1dG9fY29tX3RpbWUpO1xyXG4gICAgICAgIERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgPSBNYXRoLm1heCgwLERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUpO1xyXG4gICAgICAgIERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgPSBNYXRoLm1heCgwLERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUpO1xyXG4gICAgICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBNYXRoLm1heCgwLERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnV5QnV0dG9uKCk7XHJcblxyXG4gICAgICAgICAvL+emu+e6v+WlluWKsSzmmoLml7blj6rnu5k25bCP5pe255qEICAgICAgICAgXHJcbiAgICAgICAgIHZhciB0ID0gKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIERhdGEudXNlci5zZXJ2ZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgIGlmICggRGF0YS51c2VyLnNlcnZlclRpbWUgIT0gMCAmJiB0PjMqNjApIHtcclxuICAgICAgICAgICAgIHZhciB0ID0gTWF0aC5taW4oNzIwMCAqIDMsIHQpO1xyXG4gICAgICAgICAgICAgdmFyIG1vbmV5ID0gRGF0YS51c2VyLmdldE9mZmxpbmVFYXJuaW5nKHQvNjApO1xyXG4gICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoJ3ByZWZhYi9PZmZsaW5lQXdhcmRVSScsIG51bGwsICh1aSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIHVpLmdldENvbXBvbmVudChPZmZsaW5lQXdhcmRVSSkuZGF0YSA9IG1vbmV5O1xyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIGMgb2YgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9wYXRoXCIpLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICB0aGlzLnBhdGgucHVzaChjLnBvc2l0aW9uKVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgzKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZXdhdmUoKTtcclxuICAgICAgICB9KSkpXHJcblxyXG5cdFx0Ly/mm7TmlrDlkITnp43ml7bpl7RcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJib3R0b21cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpc1gySW4gPSBEYXRhLnVzZXIuZG91YmxlX2F0dF90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpID4gMDtcclxuICAgICAgICAgICAgbGV0IGlzSW5EYiA9IERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwO1xyXG4gICAgICAgICAgICBsZXQgaXNEcEluID0gRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IDA7XHJcblxyXG4gICAgICAgICAgICAvL+agoemqjOaXtumXtFxyXG4gICAgICAgICAgICBpZiAoRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IG1heF9hdXRvX2RvdWJsZV9hdHQgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5kb3VibGVfYXR0X3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kb3VibGVfaW5jb21lX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiBtYXhfYXV0b19kb3VibGVfaW5jb21lICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuYXV0b19jb21fdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSA+IG1heF9hdXRvX2NvbSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiBtYXhfZHJvcF9wbGFudCAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwiYXR0X3gyX3RpbWVcIiwgaXNYMkluID8gVXRpbHMuZ2V0VGltZVN0ckJ5UygoRGF0YS51c2VyLmRvdWJsZV9hdHRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkgLyAxMDAwKSA6ICfni4LmmrQnKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwicmV3YXJkeDJfdGltZVwiLCBpc0luRGIgPyBVdGlscy5nZXRUaW1lU3RyQnlTKChEYXRhLnVzZXIuZG91YmxlX2luY29tZV90aW1lIC0gVXRpbHMuZ2V0U2VydmVyVGltZSgpKSAvIDEwMDApIDogJ+WPjOWAjScpO1xyXG4gICAgICAgICAgICBpZiggRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkgPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldFRleHQoXCJhdXRvX3RpbWVcIiwgVXRpbHMuZ2V0VGltZVN0ckJ5UygoRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpIC8gMTAwMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRUZXh0KFwiYXV0b190aW1lXCIsIFwi6Ieq5Yqo5ZCI5oiQXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9kcm9wX3BsYW50XCIsaXNEcEluID8gVXRpbHMuZ2V0VGltZVN0ckJ5UygoRGF0YS51c2VyLmRyb3BfcGxhbnRfdGltZSAtIFV0aWxzLmdldFNlcnZlclRpbWUoKSkgLyAxMDAwKSA6ICfmjonokL0nKTtcclxuICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZnhfYnRfYW5ncnlcIikuYWN0aXZlID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYXR0X3gyX3RpbWVcIikuYWN0aXZlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk8MClcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0U3ByaXRlKFwiYnRfZmFzdF9nZW5fcHJvY2Vzc19pdGVtXCIpLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0U3ByaXRlKFwiYnRfZmFzdF9nZW5fcHJvY2Vzc19pdGVtXCIpLmZpbGxSYW5nZSA9ICggKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLzEwMDAvNjApL21heF9kcm9wX3BsYW50Oy8vIChtYXhfZHJvcF9wbGFudCAqIDYwIC0gKERhdGEudXNlci5kcm9wX3BsYW50X3RpbWUgLSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCkpLzEwMDApIC9tYXhfZHJvcF9wbGFudCAqIDYwXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICAgICAgICAgIC8vIFRhc2tMYXllci5jaGVja1Rhc2soKTsvL+S7u+WKoeajgOa1i1xyXG4gICAgICAgICAgICAvLyBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UoKS5pc0d1aWRlID09IGZhbHNlKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2F1dG9cIikuYWN0aXZlID0gRGF0YS51c2VyLmd1aWRlSW5kZXggPiAyO1xyXG4gICAgICAgICAgICAvLyBEYXRhLnVzZXIuY2hlY2tOZXdUb2R5KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgIFxyXG5cdFx0fSksY2MuZGVsYXlUaW1lKDEpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMFwiKS5hY3RpdmUgPSBEYXRhLnVzZXIuZ3VpZGVJbmRleCA9PSAwO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwic3VwZXJtYXJrZXRcIikpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInN1cGVybWFya2V0XCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMikpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcblxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5HZXRHYW1lT2JqZWN0KFwicG93ZXJtYW5cIikpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2V0R2FtZU9iamVjdChcInBvd2VybWFuXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjMsIDIwKSwgY2Mucm90YXRlVG8oMC4zLCAtMTApLCBjYy5yb3RhdGVUbygwLjIsIDApLCBjYy5kZWxheVRpbWUoMykpLnJlcGVhdEZvcmV2ZXIoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5faW52aWF0ZVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC4zLCAyMCksIGNjLnJvdGF0ZVRvKDAuMywgLTEwKSwgY2Mucm90YXRlVG8oMC4yLCAwKSwgY2MuZGVsYXlUaW1lKDMpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJsdXBpbl9nZW1cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMywgMjApLCBjYy5yb3RhdGVUbygwLjMsIC0xMCksIGNjLnJvdGF0ZVRvKDAuMiwgMCksIGNjLmRlbGF5VGltZSgzKSkucmVwZWF0Rm9yZXZlcigpKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikpIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5hY3RpdmUgPSB3aW5kb3dbXCJ0dFwiXTtcclxuICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSB3aW5kb3dbXCJ0dFwiXS5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIHJlY29yZGVyLm9uU3RhcnQocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImx1cGluX2dlbVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9WQ1JcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjUsIC45KSwgY2Muc2NhbGVUbygwLjUsIDEpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0dOW9leWxj+W8gOWni1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gVXRpbHMuZ2V0U2VydmVyVGltZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlY29yZGVyLm9uU3RvcChyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iUmVjb3JkZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9SZWNvcmRlclwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibHVwaW5fZ2VtXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fUmVjb3JkZXJcIikuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX1ZDUlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2VuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHTlvZXlsY/nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudmlkZW9QYXRoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxzLmdldFNlcnZlclRpbWUoKSAtIHRoaXMucmVjb3JkZXJ0aW1lIDwgMzAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLlvZXlsY/ml7bpl7Tov4fnn61cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRlcnRpbWUgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkZXJ0aW1lID0gMFxyXG4gICAgICAgICAgICAgICAgVXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvTHVQaW5SZXN1bHRcIiwgbnVsbCwgKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChMdVBpblJlc3VsdCkuc2V0RGF0YShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCB0aGlzLm9uR2FtZVNob3csIHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCB0aGlzLm9uR2FtZUhpZGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJSZWNvcmRlciA9IGZhbHNlO1xyXG4gICAgcmVjb3JkZXJ0aW1lID0gMDtcclxuICAgIG9uR2FtZUhpZGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmdhbWUub2ZmKGNjLmdhbWUuRVZFTlRfU0hPVywgdGhpcy5vbkdhbWVTaG93KTtcclxuICAgICAgICBjYy5nYW1lLm9mZihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMub25HYW1lSGlkZSk7XHJcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lU2hvdygpIHtcclxuICAgICAgICBpZiAoVXRpbHMuc2hhcmV0aW1lICE9IDAgJiYgVXRpbHMuc2hhcmVjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIC0gVXRpbHMuc2hhcmV0aW1lID49IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLliIbkuqvlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5zaGFyZWNhbGxiYWNrKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVdGlscy5zaGFyZXRpbWUgPSAwO1xyXG4gICAgICAgIFV0aWxzLnNoYXJlY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVfc29sZGllcjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIGFzeW5jIGluaXRWaWV3KCkge1xyXG4gICAgICBcclxuICAgICAgICB2YXIgbm9kZV9jb20gPSB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKTtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyArK2kpIHtcclxuXHRcdFx0dmFyIG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZV9zb2xkaWVyKTtcclxuXHRcdFx0bm9kZS5wYXJlbnQgPSBub2RlX2NvbTtcclxuXHRcdFx0bm9kZS5wb3NpdGlvbiA9IHRoaXMuR2V0R2FtZU9iamVjdChcInNsb3RzXCIpLmNoaWxkcmVuW2ldLnBvc2l0aW9uOy8vIGNjLnYyKHgsIHkpO1xyXG5cdFx0XHRub2RlLm5hbWUgPSBcIml0bWVcIiArIGluZGV4O1xyXG5cdFx0XHR2YXIgcGxhbnQ6IFNvbGRpZXJJdGVtID0gbm9kZS5nZXRDb21wb25lbnQoU29sZGllckl0ZW0pO1xyXG5cdFx0XHRwbGFudC5pbmRleCA9IGluZGV4O1xyXG5cdFx0XHR0aGlzLml0ZW1zLnB1c2gocGxhbnQpO1xyXG5cdFx0XHQrK2luZGV4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbm9kZV9kcmFnID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVfc29sZGllcik7XHJcbiAgICAgICAgbm9kZV9kcmFnLnBhcmVudCA9IG5vZGVfY29tLnBhcmVudDtcclxuICAgICAgICBub2RlX2RyYWcubmFtZSA9IFwiaXRlbV9kcmFnXCI7XHJcbiAgICAgICAgbm9kZV9kcmFnLnggPSAtMTAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJpdGVtX2RyYWdcIikuZ2V0Q29tcG9uZW50KFNvbGRpZXJJdGVtKTtcclxuICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbV9kcmFnLmJEcmFnID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0Q29tcG9zZUl0ZW1zKCk7XHJcblxyXG4gICAgICAgIG5vZGVfY29tLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJQYXVzZUF1dG9Db20gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJub2RlX2NvbVwiKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCLmmoLlgZzoh6rliqjlkIjmiJBcIilcclxuXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5Zyo6Ieq5Yqo5ZCI5oiQ5Lit77yM5Y+W5raI5b2T5YmN5ZCI5oiQXHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSAmJiB0aGlzLml0ZW1fZHJhZy5kYXRhY29weSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcIm5vZGVfY29tXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLlj5bmtojlvZPliY3lkIjmiJBcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5ID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgcG9zID0gbm9kZV9jb20uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW1CeVBvcyhwb3MpO1xyXG5cclxuICAgICAgICAgICAgaWYoaXRlbSAmJiBpdGVtLmRyb3B0eXBlICE9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZHJvcHR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaXRlbS51cGRhdGVJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uZGF0YWNvcHkgJiYgaXRlbS5kcm9wdHlwZSA9PSAwICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaFBvcyA9IHBvcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYkNob29zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRkcmFnaXRlbXBvcyhpdGVtLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuaW5kZXggPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuc2V0SXRlbURhdGEoaXRlbS5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93bWVyZ2V0aXBzKGl0ZW0uZGF0YWNvcHkubHYpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgcG9zID0gbm9kZV9jb20uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYkNob29zZWQgJiYgcG9zLnN1Yih0aGlzLnRvdWNoUG9zKS5tYWcoKSA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLnNldEl0ZW1EYXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRkcmFnaXRlbXBvcyhwb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwb3MxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5nZXRMb2NhdGlvbigpLnN1YihjYy52Mihwb3MxLngscG9zMS55KSkubWFnKCkgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnNjYWxlID0gMC41NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmRvY29tcCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV9jb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmRvY29tcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cdGJDaG9vc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB0b3VjaFBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuXHRcclxuICAgIHRyeUF1dG9jb20oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYlBhdXNlQXV0b0NvbSB8fCB0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcclxuICAgICAgICBpZiAoVXRpbHMuZ2V0U2VydmVyVGltZSgpIDwgRGF0YS51c2VyLmF1dG9fY29tX3RpbWUgJiYgIXRoaXMuYkluQXV0b0NvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDb21wb3NlSXRlbXMoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXSB8fCAhdGhpcy5pdGVtc1tpXS5kYXRhY29weSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLml0ZW1zLmxlbmd0aCA7ICsraikge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2pdIHx8ICF0aGlzLml0ZW1zW2pdLmRhdGFjb3B5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iSW5BdXRvQ29tKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkubHYgPT0gdGhpcy5pdGVtc1tqXS5kYXRhY29weS5sdiAmJiB0aGlzLml0ZW1zW2ldLmRyb3B0eXBlID09IDAgJiYgdGhpcy5pdGVtc1tqXS5kcm9wdHlwZSA9PSAwICYmIHRoaXMuaXRlbXNbaV0uZGF0YWNvcHkubHY8NjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzBdID0gdGhpcy5pdGVtc1tpXS5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gdGhpcy5pdGVtc1tqXS5pbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gdGhpcy5pdGVtc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcuaW5kZXggPSB0aGlzLml0ZW1zW2pdLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5zZXRJdGVtRGF0YSh0aGlzLml0ZW1zW2pdLmRhdGFjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2pdLnNldEl0ZW1EYXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnBvc2l0aW9uID0gdGhpcy5pdGVtc1tqXS5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldGRyYWdpdGVtcG9zKHRoaXMuaXRlbXNbal0ubm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuaXRlbXNbaV0ubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHBvcyA9IHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0cG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuW8gOWni+iHquWKqOWQiOaIkFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJJbkF1dG9Db20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjEzLCBjYy52Mih0YXJnZXRwb3MueCx0YXJnZXRwb3MueSkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbWFuaSh0aGlzLml0ZW1zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIuiHquWKqOWQiOaIkOe7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYkluQXV0b0NvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHJpdmF0ZSB0b3VjaGVuZHRpbWUgPSAwO1xyXG4gICAgZG9jb21wKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLnRvdWNoZW5kdGltZSA9IFV0aWxzLmdldFNlcnZlclRpbWUoKTtcclxuICAgICAgICB0aGlzLmhpZGVtZXJnZXRpcHMoKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDIpLGNjLmZhZGVUbygxLDApKSlcclxuXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJQYXVzZUF1dG9Db20gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iSW5BdXRvQ29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIuaBouWkjeiHquWKqOWQiOaIkFwiKVxyXG4gICAgICAgIH0pKSlcclxuICAgICAgICB0aGlzLmJDaG9vc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHBvcyA9IGUgPyBlLmdldExvY2F0aW9uKCkgOiBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/liKDpmaRcclxuICAgICAgICAgICAgdmFyIHBvczEgPSB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBwb3MxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczEpO1xyXG4gICAgICAgICAgICBpZiAocG9zLnN1YihjYy52Mihwb3MxLngscG9zMS55KSkubWFnKCkgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiYnRuX2RlbGV0ZVwiKS5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgICAgIHZhciB0bXA6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5kYXRhY29weSkgdG1wKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRtcCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIuakjeeJqeaVsOmHj+i/h+WwkeS4jeiDveWIoOmZpFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5sdiA+PSBEYXRhLnVzZXIuR2V0TWF4THYoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLmnIDpq5jnrYnnuqfmpI3nianlsLHkuI3liKDpmaTkuoblkKfvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuRHJvcFd1SmlhbmcodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVSZWNydWl0bWVudCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKEdhbWVTY2VuZS5JbnN0YW5jZSgpLmZwcyA+IDMwKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheVNrQW5pKFwic3BpbmUvdWkveWlubGlhbmd6ZW5namlhXCIsIFwiZWZmZWN0XCIsIHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIiksIGNjLnYyKDAsIDIwKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lkIjmiJAg56e75YqoICDkuqTmjaJcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgdmFyIGl0ZW06IFNvbGRpZXJJdGVtID0gdGhpcy5nZXRJdGVtQnlQb3MocG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgRGF0YS51c2VyLnNsb3RzW2l0ZW0uaW5kZXhdID09IDAgfHwgaXRlbSA9PSB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSB8fCAoaXRlbSAmJiBpdGVtLmRyb3B0eXBlICE9IDApKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXRlbS5kYXRhY29weSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1swXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29taW5kZXhzWzFdID0gLTE7XHJcbiAgICAgICAgICAgICAgICAvL+enu+WKqFxyXG4gICAgICAgICAgICAgICAgRGF0YS51c2VyLkNvbXBNb3ZlKHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtLmluZGV4LCBpdGVtLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0SXRlbURhdGEodGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0uc2V0SXRlbURhdGEobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRhdGFjb3B5Lm9wZW4gPT0gdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkub3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhY29weS5sdiA9PSB0aGlzLml0ZW1fZHJhZy5kYXRhY29weS5sdiAmJiBpdGVtLmRhdGFjb3B5LmluZGV4ICE9IHRoaXMuaXRlbV9kcmFnLmRhdGFjb3B5LmluZGV4ICYmIGl0ZW0uZHJvcHR5cGUgPT0gMCAmJiBpdGVtLmRhdGFjb3B5Lmx2PDYwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWFuaShpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21pbmRleHNbMF0gPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbWluZGV4c1sxXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgLy/kuqTmjaJcclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5Db21wTW92ZSh0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5pbmRleCwgaXRlbS5pbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIF90bXA6IFBsYW50SW5mbyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbS5kYXRhY29weSkpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRJdGVtRGF0YSh0aGlzLml0ZW1fZHJhZy5kYXRhY29weSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fZHJhZy5saW5rSXRlbS5zZXRJdGVtRGF0YShfdG1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbV9kcmFnLmxpbmtJdGVtID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0XHJcbiAgICBjb21hbmkoaXRlbTogU29sZGllckl0ZW0pIHtcclxuICAgICAgICBsZXQgYiA9IERhdGEudXNlci5Db21wb3NlUGxhbnQoaXRlbS5pbmRleCwgdGhpcy5pdGVtX2RyYWcuZGF0YWNvcHkuaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYoRGF0YS51c2VyLmd1aWRlSW5kZXggPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERhdGEudXNlci5ndWlkZUluZGV4ICsrO1xyXG4gICAgICAgICAgICBEYXRhLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFiKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5leHRHdW4gPSBEYXRhLnVzZXIuZ2V0UGxhbnRJbmZvKGl0ZW0uaW5kZXgpO1xyXG4gICAgICAgIGl0ZW0uc2V0SXRlbURhdGEobmV4dEd1bik7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1fZHJhZy5kYXRhY29weSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pdGVtX2RyYWcubGlua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0b2NvbWluZGV4cyA9IFstMSwgLTFdO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwibm9kZV9jb21cIikuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0ubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgdGFyZ2V0cG9zID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwiaXRlbV9kcmFnXCIpLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRwb3MpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTa0FuaShcInNwaW5lOm90aGVyL2VmZmVjdF9oZWNoZW5nXCIsIFwiZWZmZWN0XCIsIHRoaXMuR2V0R2FtZU9iamVjdChcIml0ZW1fZHJhZ1wiKS5wYXJlbnQsIHRhcmdldHBvcy5hZGQoY2MudjMoMCwyMCwwKSksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJ1eUJ1dHRvbigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGx2ID0gRGF0YS51c2VyLkdldE1heEx2KCkgLSAzO1xyXG4gICAgICAgIGlmKGx2PDEpbHYgPSAxO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dChcImxibF9idXlfbHZsXCIsJ0xWLicgKyBsdik7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KFwibGJsX2J1eV9jb3N0XCIsVXRpbHMuZm9ybWF0TnVtYmVyKERhdGEudXNlci5CdXlQcmljZShsdikpKTtcclxuICAgICAgICB0aGlzLlNldFNwcml0ZShcImljb25fYnV5XCIsXCJ0ZXh0dXJlL3BsYW50cy9cIisobHYtMSkpO1xyXG4gICAgfVxyXG5cclxuICAgICBwdWJsaWMgdHJ5QnV5UGxhbnQobHY6bnVtYmVyLGJ1eXR5cGU6bnVtYmVyKSB7Ly8wIGNvaW4gMSBnZW0gMiBhZCAz5pmu6YCa5o6J6JC9IDTlsI/nsr7ngbXmjonokL1cclxuXHJcbiAgICAgICAgdmFyIGl0ZW06IFNvbGRpZXJJdGVtID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKERhdGEudXNlci5zbG90c1tpXSA9PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpXS5kYXRhY29weSAmJiB0aGlzLmF1dG9jb21pbmRleHNbMF0gIT0gaSAmJiB0aGlzLmF1dG9jb21pbmRleHNbMV0gIT0gaSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWx2KSB7XHJcbiAgICAgICAgICAgIGx2ID0gRGF0YS51c2VyLkdldE1heEx2KCkgLSAzO1xyXG4gICAgICAgICAgICBpZihsdjwxKWx2ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChidXl0eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gRGF0YS51c2VyLkJ1eVByaWNlKGx2KTtcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhLnVzZXIuQnV5UHJpY2UobHYpID4gRGF0YS51c2VyLmNvaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi6YeR5biB5LiN6LazXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERhdGEudXNlci5jb2luIC09IGNvc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnV5dHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2VtID0gTWF0aC5taW4oNSwgTnVtYmVyKERCX3BsYW50W2x2IC0gMV1bNl0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChnZW0gPiBEYXRhLnVzZXIuZ2VtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnSGludHMuc2hvdyhcIumSu+efs+S4jei2s1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEYXRhLnVzZXIuZ2VtIC09IGdlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1eXR5cGUgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLoirHnm4bmjonokL1cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiZmxvd2VyX3BvdF9sYW5kXCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRvY29tcChudWxsKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRJdGVtRGF0YShEYXRhLnVzZXIuQnV5UGxhbnQoaXRlbS5pbmRleCwgbHYpIGFzIFBsYW50SW5mbyxidXl0eXBlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXlCdXR0b24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChidXl0eXBlIDw9IDIpIHtcclxuICAgICAgICAgICAgICAgIE1zZ0hpbnRzLnNob3coXCLkvY3nva7kuI3lpJ/llabvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJidG5fZGVsZXRlXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMiksY2MuZmFkZVRvKDEsMCkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1lcmdldGlwKCl7XHJcbiAgICAgICAgdGhpcy50b3VjaGVuZHRpbWUgPSBVdGlscy5nZXRTZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYlBhdXNlQXV0b0NvbSB8fCB0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuYkluQXV0b0NvbSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoIDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaV0gfHwgIXRoaXMuaXRlbXNbaV0uZGF0YWNvcHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5pdGVtcy5sZW5ndGggOyArK2opIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbal0gfHwgIXRoaXMuaXRlbXNbal0uZGF0YWNvcHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJJbkF1dG9Db20pIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5kYXRhY29weS5sdiA9PSB0aGlzLml0ZW1zW2pdLmRhdGFjb3B5Lmx2ICYmIHRoaXMuaXRlbXNbaV0uZHJvcHR5cGUgPT0gMCAmJiB0aGlzLml0ZW1zW2pdLmRyb3B0eXBlID09IDAgJiYgdGhpcy5pdGVtc1tpXS5kYXRhY29weS5sdiA8IDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleDEgPSB0aGlzLml0ZW1zW2ldLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXgyID0gdGhpcy5pdGVtc1tqXS5pbmRleFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2FtZU9iamVjdChcImd1aWxkXzFcIikuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAwID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baW5kZXgxXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAxID0gdGhpcy5HZXRHYW1lT2JqZWN0KFwic2xvdHNcIikuY2hpbGRyZW5baW5kZXgyXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHYW1lT2JqZWN0KFwiZ3VpbGRfMVwiKS5wb3NpdGlvbiA9IHAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8xXCIpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMSxjYy52MihwMS54LHAxLnkpKSxjYy5tb3ZlVG8oMC4xLGNjLnYyKHAwLngscDAueSkpKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRvbkJ0bkNsaWNrZWQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBidG5OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgQXVkaW9NZ3IuSW5zdGFuY2UoKS5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYnRuTmFtZSkge1xyXG5cdFx0XHRjYXNlIFwiYnRuX3NldHRpbmdcIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9TZXR0aW5nVUlcIilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImJ0bl9zaWduXCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvU2lnblVJXCIpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidG5fYnV5XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUJ1eVBsYW50KG51bGwsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdhbWVPYmplY3QoXCJndWlsZF8wXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYoRGF0YS51c2VyLmd1aWRlSW5kZXg9PTApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS51c2VyLmd1aWRlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKERhdGEudXNlci5ndWlkZUluZGV4ID09IDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXJnZXRpcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRfZmFzdF9nZW5cIjpcclxuXHRcdFx0XHRVdGlscy5jcmVhdGVVSShcInByZWZhYi9BZExheWVyXCIpLnRoZW4oKG5vZGU6Y2MuTm9kZSk9PntcclxuXHRcdFx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KEFkTGF5ZXIpLnNldFR5cGUoRUFETEFZRVIuRFJPUF9QTEFOVClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYnRuX2FuZ3J5XCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChBZExheWVyKS5zZXRUeXBlKEVBRExBWUVSLkRPVUJMRV9BVFQpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImJ0bl9kb3VibGVfY29pblwiOlxyXG5cdFx0XHRcdFV0aWxzLmNyZWF0ZVVJKFwicHJlZmFiL0FkTGF5ZXJcIikudGhlbigobm9kZTpjYy5Ob2RlKT0+e1xyXG5cdFx0XHRcdFx0bm9kZS5nZXRDb21wb25lbnQoQWRMYXllcikuc2V0VHlwZShFQURMQVlFUi5ET1VCTEVfSU5DT01FKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJidF9hdXRvX21lcmdlXCI6XHJcblx0XHRcdFx0VXRpbHMuY3JlYXRlVUkoXCJwcmVmYWIvQWRMYXllclwiKS50aGVuKChub2RlOmNjLk5vZGUpPT57XHJcblx0XHRcdFx0XHRub2RlLmdldENvbXBvbmVudChBZExheWVyKS5zZXRUeXBlKEVBRExBWUVSLkFVVE9fQ09NKVxyXG5cdFx0XHRcdH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9zaG9wXCI6XHJcbiAgICAgICAgICAgICAgIFNob3BMYXllci5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9kZWxldGVcIjpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuR2V0R2FtZU9iamVjdChcImJ0bl9kZWxldGVcIikub3BhY2l0eSA9PSAyNTUpXHJcbiAgICAgICAgICAgICAgICBNc2dIaW50cy5zaG93KFwi5ouW5Yqo5Yiw6L+Z6YeM5Y2W5Ye6XCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bl9pbnZpYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBXeENlbnRlci5zaGFyZUFwcE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuX1JlY29yZGVyXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iUmVjb3JkZXIgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLlvIDlp4vlvZXlsY9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iUmVjb3JkZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRlciA9IHdpbmRvd1tcInR0XCJdLmdldEdhbWVSZWNvcmRlck1hbmFnZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXIuc3RhcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIue7k+adn+W9leWxj1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYlJlY29yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZGVyID0gd2luZG93W1widHRcIl0uZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRlci5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBiRmlyc3RTdWJDb250ZXggPSB0cnVlO1xyXG59XHJcbiJdfQ==