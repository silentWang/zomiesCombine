
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
require('./assets/script/framwork/MsgToast');
require('./assets/script/game/AchievementModel');
require('./assets/script/game/ChickItem');
require('./assets/script/game/Config');
require('./assets/script/game/GameConst');
require('./assets/script/game/GroundItem');
require('./assets/script/game/HallScene');
require('./assets/script/game/UserModel');
require('./assets/script/game/prefab/BossCommingUI');
require('./assets/script/game/prefab/Bullet');
require('./assets/script/game/prefab/CoinNotEnoughUI');
require('./assets/script/game/prefab/CommonView');
require('./assets/script/game/prefab/DropChickView');
require('./assets/script/game/prefab/DropItem');
require('./assets/script/game/prefab/Enemy');
require('./assets/script/game/prefab/FailView');
require('./assets/script/game/prefab/NewChickUI');
require('./assets/script/game/prefab/OfflineAwardUI');
require('./assets/script/game/prefab/RecordView');
require('./assets/script/game/prefab/SettingView');
require('./assets/script/game/prefab/ShareView');
require('./assets/script/game/prefab/ShopItem');
require('./assets/script/game/prefab/ShopView');
require('./assets/script/game/prefab/SignView');
require('./assets/script/game/prefab/WinView');
require('./assets/script/manager/AdCenter');
require('./assets/script/manager/ChickData');
require('./assets/script/manager/ConfigManager');
require('./assets/script/manager/DataManager');
require('./assets/script/manager/PoolMgr');
require('./assets/script/manager/Singleton');
require('./assets/script/manager/WxCenter');
require('./assets/script/utils/AudioMgr');
require('./assets/script/utils/DebugTools');
require('./assets/script/utils/LongTouchComponent');
require('./assets/script/utils/NumberRoll');
require('./assets/script/utils/NumberUtils');
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