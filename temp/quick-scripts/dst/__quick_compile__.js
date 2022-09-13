
(function () {
var scripts = [{"deps":{"./assets/script/game/AchievementModel":1,"./assets/script/utils/BigNumber":5,"./assets/script/game/DB":6,"./assets/script/framwork/ListItem":15,"./assets/script/game/GameConst":23,"./assets/script/manager/DataManager":32,"./assets/script/manager/PoolMgr":34,"./assets/script/utils/LongTouchComponent":36,"./assets/script/manager/Singleton":38,"./assets/script/utils/Shake":40,"./assets/script/framwork/BaseUI":3,"./assets/script/game/SoldierItem":4,"./assets/script/Loading":13,"./assets/script/game/UserModel":7,"./assets/script/game/prefab/Enemy":2,"./assets/script/utils/Utils":12,"./assets/script/game/HallScene":14,"./assets/script/utils/AudioMgr":16,"./assets/script/event/GameEvent":17,"./assets/script/game/prefab/SignUI":8,"./assets/script/game/prefab/SettingUI":9,"./assets/script/game/prefab/AdLayer":10,"./assets/script/game/prefab/ShopItem":11,"./assets/script/manager/ConfigManager":18,"./assets/script/framwork/MsgHints":20,"./assets/script/game/SlotItem":21,"./assets/script/manager/Data":33,"./assets/script/utils/NumberRoll":39,"./assets/script/utils/DebugTools":37,"./assets/script/manager/AdCenter":35,"./assets/script/game/prefab/BossCommingUI":19,"./assets/script/game/prefab/Bullet":22,"./assets/script/game/prefab/FairyItem":24,"./assets/script/game/prefab/FairyBonusUI":25,"./assets/script/game/prefab/LoseUI":26,"./assets/script/game/prefab/LuPinResult":27,"./assets/script/game/prefab/NewPlantUI":28,"./assets/script/game/prefab/OfflineAwardUI":29,"./assets/script/game/prefab/ShopLayer":30,"./assets/script/game/prefab/VictoryUI":31,"./assets/script/framwork/List":41},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{"../../framwork/BaseUI":3,"../../manager/Data":33,"../../utils/AudioMgr":16,"../DB":6,"../../utils/Utils":12,"../HallScene":14},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{"../event/GameEvent":17,"../utils/Utils":12},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"../manager/Data":33,"../utils/Utils":12,"./DB":6,"../framwork/BaseUI":3,"./HallScene":14,"./prefab/Bullet":22},"path":"preview-scripts/assets/script/game/SoldierItem.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/BigNumber.js"},{"deps":{},"path":"preview-scripts/assets/script/game/DB.js"},{"deps":{"../event/GameEvent":17,"../manager/Data":33,"./GameConst":23,"../utils/Utils":12,"./DB":6,"../utils/AudioMgr":16},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{"../../framwork/BaseUI":3,"../../manager/AdCenter":35,"../../manager/Data":33,"../../utils/AudioMgr":16,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/SignUI.js"},{"deps":{"../../framwork/BaseUI":3,"../../manager/AdCenter":35,"../../manager/Data":33,"../../utils/AudioMgr":16,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/SettingUI.js"},{"deps":{"../../framwork/BaseUI":3,"../../framwork/MsgHints":20,"../../manager/AdCenter":35,"../../manager/Data":33,"../../utils/Utils":12,"../../utils/AudioMgr":16},"path":"preview-scripts/assets/script/game/prefab/AdLayer.js"},{"deps":{"../../framwork/BaseUI":3,"../../framwork/ListItem":15,"../../framwork/MsgHints":20,"../../manager/Data":33,"../../manager/AdCenter":35,"../../utils/AudioMgr":16,"../../utils/Utils":12,"../GameConst":23,"../HallScene":14},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{"./Shake":40,"../manager/PoolMgr":34,"./BigNumber":5,"../game/GameConst":23},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"./framwork/BaseUI":3,"./manager/PoolMgr":34,"./manager/Data":33,"./utils/AudioMgr":16,"./utils/Utils":12},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"../framwork/BaseUI":3,"../utils/AudioMgr":16,"../manager/Data":33,"../framwork/MsgHints":20,"./prefab/AdLayer":10,"../utils/Utils":12,"./prefab/LoseUI":26,"./prefab/Enemy":2,"./prefab/LuPinResult":27,"./DB":6,"./prefab/ShopLayer":30,"./prefab/OfflineAwardUI":29,"./prefab/VictoryUI":31,"./SlotItem":21,"./SoldierItem":4},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{"../manager/Singleton":38,"./Utils":12},"path":"preview-scripts/assets/script/utils/AudioMgr.js"},{"deps":{"../manager/Singleton":38},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{"./Singleton":38},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{"../../utils/AudioMgr":16,"../../framwork/BaseUI":3},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{"../manager/PoolMgr":34},"path":"preview-scripts/assets/script/framwork/MsgHints.js"},{"deps":{"../framwork/BaseUI":3,"./DB":6,"../manager/Data":33,"../framwork/MsgHints":20,"./GameConst":23,"../utils/Utils":12},"path":"preview-scripts/assets/script/game/SlotItem.js"},{"deps":{"../../framwork/BaseUI":3,"./Enemy":2,"../../utils/Utils":12,"../DB":6},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{"../../framwork/BaseUI":3,"../../utils/Utils":12,"../../utils/AudioMgr":16},"path":"preview-scripts/assets/script/game/prefab/FairyItem.js"},{"deps":{"../../framwork/BaseUI":3,"../../framwork/MsgHints":20,"../../manager/AdCenter":35,"../../utils/AudioMgr":16,"../DB":6,"../../manager/Data":33},"path":"preview-scripts/assets/script/game/prefab/FairyBonusUI.js"},{"deps":{"../../framwork/BaseUI":3,"../../manager/Data":33,"../../utils/AudioMgr":16,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/LoseUI.js"},{"deps":{"../../framwork/BaseUI":3,"../../manager/Data":33,"../../utils/AudioMgr":16,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/LuPinResult.js"},{"deps":{"../../framwork/BaseUI":3,"../../manager/AdCenter":35,"../../manager/Data":33,"../../utils/AudioMgr":16,"../../utils/Utils":12,"../DB":6},"path":"preview-scripts/assets/script/game/prefab/NewPlantUI.js"},{"deps":{"../../framwork/BaseUI":3,"../../framwork/MsgHints":20,"../../manager/AdCenter":35,"../../manager/Data":33,"../../utils/AudioMgr":16,"../../utils/BigNumber":5,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{"../../framwork/BaseUI":3,"../../framwork/List":41,"../../manager/Data":33,"../../utils/Utils":12,"../DB":6,"../../utils/AudioMgr":16,"../GameConst":23,"./ShopItem":11},"path":"preview-scripts/assets/script/game/prefab/ShopLayer.js"},{"deps":{"../../framwork/BaseUI":3,"../../manager/AdCenter":35,"../../manager/Data":33,"../../utils/AudioMgr":16,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/VictoryUI.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{"../game/UserModel":7,"../utils/AudioMgr":16,"../utils/Utils":12,"../game/GameConst":23},"path":"preview-scripts/assets/script/manager/Data.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{"../framwork/MsgHints":20,"./Singleton":38,"../utils/Utils":12},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{"../manager/Data":33,"../game/GameConst":23},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{"../framwork/BaseUI":3},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"},{"deps":{"./ListItem":15},"path":"preview-scripts/assets/script/framwork/List.js"}];
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
    