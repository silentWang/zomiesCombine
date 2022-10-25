
(function () {
var scripts = [{"deps":{"./assets/script/game/AchievementModel":1,"./assets/script/utils/LongTouchComponent":2,"./assets/script/game/DB":6,"./assets/script/utils/BigNumber":8,"./assets/script/framwork/ListItem":16,"./assets/script/game/GameConst":19,"./assets/script/manager/DataManager":30,"./assets/script/manager/PoolMgr":32,"./assets/script/manager/Singleton":36,"./assets/script/manager/WxCenter":39,"./assets/script/utils/Shake":40,"./assets/script/Loading":3,"./assets/script/game/SoldierItem":5,"./assets/script/game/UserModel":7,"./assets/script/game/prefab/ShopItem":4,"./assets/script/utils/Utils":13,"./assets/script/game/HallScene":14,"./assets/script/utils/AudioMgr":15,"./assets/script/game/prefab/SettingUI":9,"./assets/script/game/prefab/AdLayer":10,"./assets/script/manager/Data":17,"./assets/script/game/prefab/SignUI":11,"./assets/script/game/prefab/Enemy":12,"./assets/script/event/GameEvent":18,"./assets/script/framwork/MsgHints":20,"./assets/script/game/SlotItem":23,"./assets/script/utils/NumberRoll":33,"./assets/script/manager/ConfigManager":34,"./assets/script/manager/AdCenter":37,"./assets/script/utils/DebugTools":38,"./assets/script/game/prefab/Bullet":21,"./assets/script/game/prefab/FairyItem":22,"./assets/script/framwork/BaseUI":41,"./assets/script/game/prefab/NewPlantUI":24,"./assets/script/game/prefab/LuPinResult":25,"./assets/script/game/prefab/BossCommingUI":26,"./assets/script/game/prefab/VictoryUI":27,"./assets/script/game/prefab/LoseUI":28,"./assets/script/game/prefab/FairyBonusUI":29,"./assets/script/game/prefab/OfflineAwardUI":31,"./assets/script/game/prefab/ShopLayer":35,"./assets/script/framwork/List":42},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{"./manager/Data":17,"./utils/AudioMgr":15,"./manager/PoolMgr":32,"./framwork/BaseUI":41,"./utils/Utils":13},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"../../framwork/ListItem":16,"../../framwork/BaseUI":41,"../../manager/Data":17,"../../framwork/MsgHints":20,"../../utils/AudioMgr":15,"../../utils/Utils":13,"../../manager/AdCenter":37,"../GameConst":19,"../HallScene":14},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{"../manager/Data":17,"../framwork/BaseUI":41,"./DB":6,"./prefab/Bullet":21,"../utils/Utils":13,"./HallScene":14},"path":"preview-scripts/assets/script/game/SoldierItem.js"},{"deps":{},"path":"preview-scripts/assets/script/game/DB.js"},{"deps":{"../manager/Data":17,"./GameConst":19,"../event/GameEvent":18,"../utils/Utils":13,"./DB":6,"../utils/AudioMgr":15},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/BigNumber.js"},{"deps":{"../../framwork/BaseUI":41,"../../utils/AudioMgr":15,"../../utils/Utils":13,"../../manager/AdCenter":37,"../../manager/Data":17},"path":"preview-scripts/assets/script/game/prefab/SettingUI.js"},{"deps":{"../../framwork/MsgHints":20,"../../framwork/BaseUI":41,"../../manager/AdCenter":37,"../../manager/Data":17,"../../utils/Utils":13,"../../utils/AudioMgr":15},"path":"preview-scripts/assets/script/game/prefab/AdLayer.js"},{"deps":{"../../manager/Data":17,"../../framwork/BaseUI":41,"../../utils/AudioMgr":15,"../../manager/AdCenter":37,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/prefab/SignUI.js"},{"deps":{"../../framwork/BaseUI":41,"../../manager/Data":17,"../../utils/AudioMgr":15,"../DB":6,"../../utils/Utils":13,"../HallScene":14},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{"./Shake":40,"../manager/PoolMgr":32,"./BigNumber":8,"../game/GameConst":19},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"../framwork/BaseUI":41,"../manager/Data":17,"../framwork/MsgHints":20,"../manager/WxCenter":39,"../utils/AudioMgr":15,"./DB":6,"../utils/Utils":13,"./prefab/AdLayer":10,"./prefab/Enemy":12,"./prefab/LoseUI":28,"./prefab/LuPinResult":25,"./prefab/OfflineAwardUI":31,"./prefab/VictoryUI":27,"./prefab/ShopLayer":35,"./SlotItem":23,"./SoldierItem":5},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{"../manager/Singleton":36,"./Utils":13},"path":"preview-scripts/assets/script/utils/AudioMgr.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{"../game/UserModel":7,"../utils/Utils":13,"../utils/AudioMgr":15,"../game/GameConst":19},"path":"preview-scripts/assets/script/manager/Data.js"},{"deps":{"../manager/Singleton":36},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{"../manager/PoolMgr":32},"path":"preview-scripts/assets/script/framwork/MsgHints.js"},{"deps":{"../../framwork/BaseUI":41,"../../utils/Utils":13,"./Enemy":12,"../DB":6},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{"../../utils/AudioMgr":15,"../../framwork/BaseUI":41,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/prefab/FairyItem.js"},{"deps":{"../framwork/BaseUI":41,"../manager/Data":17,"./DB":6,"../framwork/MsgHints":20,"../utils/Utils":13,"./GameConst":19},"path":"preview-scripts/assets/script/game/SlotItem.js"},{"deps":{"../../manager/AdCenter":37,"../../framwork/BaseUI":41,"../../manager/Data":17,"../../utils/Utils":13,"../../utils/AudioMgr":15,"../DB":6},"path":"preview-scripts/assets/script/game/prefab/NewPlantUI.js"},{"deps":{"../../framwork/BaseUI":41,"../../manager/Data":17,"../../utils/Utils":13,"../../utils/AudioMgr":15},"path":"preview-scripts/assets/script/game/prefab/LuPinResult.js"},{"deps":{"../../utils/AudioMgr":15,"../../framwork/BaseUI":41},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{"../../framwork/BaseUI":41,"../../manager/AdCenter":37,"../../utils/AudioMgr":15,"../../utils/Utils":13,"../../manager/Data":17},"path":"preview-scripts/assets/script/game/prefab/VictoryUI.js"},{"deps":{"../../manager/Data":17,"../../utils/Utils":13,"../../utils/AudioMgr":15,"../../framwork/BaseUI":41},"path":"preview-scripts/assets/script/game/prefab/LoseUI.js"},{"deps":{"../../framwork/BaseUI":41,"../../manager/Data":17,"../../framwork/MsgHints":20,"../../manager/AdCenter":37,"../DB":6,"../../utils/AudioMgr":15},"path":"preview-scripts/assets/script/game/prefab/FairyBonusUI.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{"../../framwork/BaseUI":41,"../../framwork/MsgHints":20,"../../utils/AudioMgr":15,"../../manager/AdCenter":37,"../../utils/BigNumber":8,"../../manager/Data":17,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{"../framwork/BaseUI":41},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{"./Singleton":36},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{"../../framwork/List":42,"../../framwork/BaseUI":41,"../../manager/Data":17,"../DB":6,"../../utils/AudioMgr":15,"../../utils/Utils":13,"../GameConst":19,"./ShopItem":4},"path":"preview-scripts/assets/script/game/prefab/ShopLayer.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{"../framwork/MsgHints":20,"./Singleton":36,"../utils/Utils":13},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{"../game/GameConst":19,"../manager/Data":17},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/WxCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"},{"deps":{"../event/GameEvent":18,"../utils/Utils":13},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"./ListItem":16},"path":"preview-scripts/assets/script/framwork/List.js"}];
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
    