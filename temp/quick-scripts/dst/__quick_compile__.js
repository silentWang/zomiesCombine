
(function () {
var scripts = [{"deps":{"./assets/script/Loading":16,"./assets/script/framwork/ListItem":20,"./assets/script/framwork/List":44,"./assets/script/framwork/MsgHints":19,"./assets/script/framwork/BaseUI":2,"./assets/script/game/GameConst":22,"./assets/script/game/DB":6,"./assets/script/game/HallScene":18,"./assets/script/game/SoldierItem":9,"./assets/script/game/SlotItem":23,"./assets/script/game/UserModel":7,"./assets/script/game/AchievementModel":1,"./assets/script/game/prefab/BossCommingUI":27,"./assets/script/game/prefab/Bullet":21,"./assets/script/game/prefab/CoinNotEnoughUI":5,"./assets/script/game/prefab/Enemy":3,"./assets/script/game/prefab/FairyBonusUI":25,"./assets/script/game/prefab/LoseUI":26,"./assets/script/game/prefab/LuPinResult":29,"./assets/script/game/prefab/FairyItem":24,"./assets/script/game/prefab/NewPlantUI":28,"./assets/script/game/prefab/OfflineAwardUI":31,"./assets/script/game/prefab/SettingUI":11,"./assets/script/game/prefab/ShareLayer":30,"./assets/script/game/prefab/ShopItem":10,"./assets/script/game/prefab/ShopLayer":36,"./assets/script/game/prefab/SignUI":12,"./assets/script/game/prefab/VictoryUI":33,"./assets/script/game/prefab/AdLayer":13,"./assets/script/manager/Data":32,"./assets/script/manager/ConfigManager":17,"./assets/script/manager/DataManager":34,"./assets/script/manager/PoolMgr":40,"./assets/script/manager/Singleton":35,"./assets/script/manager/WxCenter":37,"./assets/script/manager/AdCenter":39,"./assets/script/utils/BigNumber":4,"./assets/script/utils/DebugTools":42,"./assets/script/utils/LongTouchComponent":38,"./assets/script/utils/NumberRoll":41,"./assets/script/utils/Shake":43,"./assets/script/utils/Utils":15,"./assets/script/utils/AudioMgr":14,"./assets/script/event/GameEvent":8},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{"../event/GameEvent":8,"../utils/Utils":15},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/Data":32,"../../utils/AudioMgr":14,"../../utils/Utils":15,"../DB":6,"../HallScene":18},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/BigNumber.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":39,"../../manager/WxCenter":37,"../../utils/AudioMgr":14,"../../manager/Data":32,"../../utils/BigNumber":4,"../../utils/Utils":15,"../DB":6,"../HallScene":18},"path":"preview-scripts/assets/script/game/prefab/CoinNotEnoughUI.js"},{"deps":{},"path":"preview-scripts/assets/script/game/DB.js"},{"deps":{"../manager/Data":32,"../event/GameEvent":8,"../utils/Utils":15,"./DB":6,"./GameConst":22,"../utils/AudioMgr":14},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{"../manager/Singleton":35},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{"../framwork/BaseUI":2,"../manager/Data":32,"../utils/Utils":15,"./DB":6,"./HallScene":18,"./prefab/Bullet":21},"path":"preview-scripts/assets/script/game/SoldierItem.js"},{"deps":{"../../framwork/BaseUI":2,"../../framwork/ListItem":20,"../../manager/AdCenter":39,"../../manager/Data":32,"../../utils/AudioMgr":14,"../../framwork/MsgHints":19,"../../utils/Utils":15,"../GameConst":22,"../HallScene":18},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":39,"../../manager/Data":32,"../../utils/AudioMgr":14,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/SettingUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":39,"../../manager/Data":32,"../../utils/AudioMgr":14,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/SignUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":39,"../../framwork/MsgHints":19,"../../manager/WxCenter":37,"../../manager/Data":32,"../../utils/AudioMgr":14,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/AdLayer.js"},{"deps":{"../manager/Singleton":35,"./Utils":15},"path":"preview-scripts/assets/script/utils/AudioMgr.js"},{"deps":{"./BigNumber":4,"./Shake":43,"../manager/PoolMgr":40,"../game/GameConst":22},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"./framwork/BaseUI":2,"./manager/Data":32,"./manager/WxCenter":37,"./manager/PoolMgr":40,"./utils/AudioMgr":14,"./utils/Utils":15},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"./Singleton":35},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{"../framwork/BaseUI":2,"../manager/WxCenter":37,"../framwork/MsgHints":19,"./DB":6,"./prefab/AdLayer":13,"../utils/Utils":15,"../manager/Data":32,"./prefab/ShareLayer":30,"../utils/AudioMgr":14,"./prefab/Enemy":3,"./prefab/LoseUI":26,"./prefab/LuPinResult":29,"./prefab/OfflineAwardUI":31,"./prefab/ShopLayer":36,"./prefab/VictoryUI":33,"./SlotItem":23,"./SoldierItem":9,"./prefab/CoinNotEnoughUI":5},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{"../manager/PoolMgr":40},"path":"preview-scripts/assets/script/framwork/MsgHints.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{"../../framwork/BaseUI":2,"../DB":6,"../../utils/AudioMgr":14,"../../utils/Utils":15,"./Enemy":3},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{"../manager/Data":32,"../framwork/BaseUI":2,"./DB":6},"path":"preview-scripts/assets/script/game/SlotItem.js"},{"deps":{"../../framwork/BaseUI":2,"../../utils/AudioMgr":14,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/FairyItem.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":39,"../../manager/Data":32,"../../manager/WxCenter":37,"../../utils/AudioMgr":14,"../../utils/Utils":15,"../DB":6},"path":"preview-scripts/assets/script/game/prefab/FairyBonusUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":39,"../../manager/Data":32,"../../utils/Utils":15,"../../utils/AudioMgr":14,"../../manager/WxCenter":37,"../HallScene":18},"path":"preview-scripts/assets/script/game/prefab/LoseUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../utils/AudioMgr":14},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{"../../manager/AdCenter":39,"../../framwork/BaseUI":2,"../../manager/Data":32,"../../utils/AudioMgr":14,"../../utils/Utils":15,"../DB":6},"path":"preview-scripts/assets/script/game/prefab/NewPlantUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/Data":32,"../../utils/Utils":15,"../../utils/AudioMgr":14},"path":"preview-scripts/assets/script/game/prefab/LuPinResult.js"},{"deps":{"../../manager/WxCenter":37,"../../framwork/BaseUI":2,"../../utils/AudioMgr":14,"../../manager/Data":32,"../../utils/Utils":15,"../../utils/BigNumber":4},"path":"preview-scripts/assets/script/game/prefab/ShareLayer.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":39,"../../utils/AudioMgr":14,"../../utils/BigNumber":4,"../../manager/Data":32,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{"../game/GameConst":22,"../game/UserModel":7,"../utils/Utils":15,"../utils/AudioMgr":14},"path":"preview-scripts/assets/script/manager/Data.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":39,"../../manager/Data":32,"../../manager/WxCenter":37,"../../utils/AudioMgr":14,"../../utils/Utils":15,"../HallScene":18},"path":"preview-scripts/assets/script/game/prefab/VictoryUI.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{"../../framwork/BaseUI":2,"../../framwork/List":44,"../../manager/Data":32,"../../manager/WxCenter":37,"../../utils/AudioMgr":14,"../../utils/Utils":15,"../GameConst":22,"../DB":6,"./ShopItem":10},"path":"preview-scripts/assets/script/game/prefab/ShopLayer.js"},{"deps":{"../framwork/MsgHints":19},"path":"preview-scripts/assets/script/manager/WxCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{"../framwork/MsgHints":19,"../utils/Utils":15,"./WxCenter":37,"./Singleton":35},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{"../framwork/BaseUI":2},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{"../game/GameConst":22,"../manager/Data":32},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"},{"deps":{"./ListItem":20},"path":"preview-scripts/assets/script/framwork/List.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    