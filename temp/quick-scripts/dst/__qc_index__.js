
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/Loading');
require('./assets/script/event/GameEvent');
require('./assets/script/framwork/BaseUI');
require('./assets/script/framwork/List');
require('./assets/script/framwork/ListItem');
require('./assets/script/framwork/MsgHints');
require('./assets/script/game/AchievementModel');
require('./assets/script/game/DB');
require('./assets/script/game/GameConst');
require('./assets/script/game/HallScene');
require('./assets/script/game/SlotItem');
require('./assets/script/game/SoldierItem');
require('./assets/script/game/UserModel');
require('./assets/script/game/prefab/AdLayer');
require('./assets/script/game/prefab/BossCommingUI');
require('./assets/script/game/prefab/Bullet');
require('./assets/script/game/prefab/CoinNotEnoughUI');
require('./assets/script/game/prefab/Enemy');
require('./assets/script/game/prefab/FairyBonusUI');
require('./assets/script/game/prefab/FairyItem');
require('./assets/script/game/prefab/LoseUI');
require('./assets/script/game/prefab/LuPinResult');
require('./assets/script/game/prefab/NewPlantUI');
require('./assets/script/game/prefab/OfflineAwardUI');
require('./assets/script/game/prefab/SettingUI');
require('./assets/script/game/prefab/ShareLayer');
require('./assets/script/game/prefab/ShopItem');
require('./assets/script/game/prefab/ShopLayer');
require('./assets/script/game/prefab/SignUI');
require('./assets/script/game/prefab/VictoryUI');
require('./assets/script/manager/AdCenter');
require('./assets/script/manager/ConfigManager');
require('./assets/script/manager/Data');
require('./assets/script/manager/DataManager');
require('./assets/script/manager/PoolMgr');
require('./assets/script/manager/Singleton');
require('./assets/script/manager/WxCenter');
require('./assets/script/utils/AudioMgr');
require('./assets/script/utils/BigNumber');
require('./assets/script/utils/DebugTools');
require('./assets/script/utils/LongTouchComponent');
require('./assets/script/utils/NumberRoll');
require('./assets/script/utils/Shake');
require('./assets/script/utils/Utils');

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