
(function () {
var scripts = [{"deps":{"./assets/script/game/AchievementModel":1,"./assets/script/utils/BigNumber":4,"./assets/script/game/DB":5,"./assets/script/framwork/ListItem":18,"./assets/script/game/GameConst":21,"./assets/script/manager/DataManager":30,"./assets/script/manager/Singleton":33,"./assets/script/utils/LongTouchComponent":34,"./assets/script/manager/PoolMgr":35,"./assets/script/manager/WxCenter":36,"./assets/script/utils/Shake":41,"./assets/script/game/SoldierItem":2,"./assets/script/Loading":14,"./assets/script/game/UserModel":6,"./assets/script/framwork/MsgHints":7,"./assets/script/game/prefab/Enemy":3,"./assets/script/utils/Utils":12,"./assets/script/game/HallScene":13,"./assets/script/utils/AudioMgr":15,"./assets/script/event/GameEvent":16,"./assets/script/game/prefab/SettingUI":8,"./assets/script/game/prefab/SignUI":9,"./assets/script/game/prefab/ShopItem":10,"./assets/script/manager/ConfigManager":17,"./assets/script/game/prefab/AdLayer":11,"./assets/script/game/SlotItem":19,"./assets/script/manager/Data":32,"./assets/script/utils/DebugTools":37,"./assets/script/utils/NumberRoll":38,"./assets/script/framwork/BaseUI":39,"./assets/script/manager/AdCenter":40,"./assets/script/game/prefab/BossCommingUI":20,"./assets/script/game/prefab/Bullet":22,"./assets/script/game/prefab/FairyItem":23,"./assets/script/game/prefab/LoseUI":24,"./assets/script/game/prefab/LuPinResult":25,"./assets/script/game/prefab/FairyBonusUI":26,"./assets/script/game/prefab/OfflineAwardUI":27,"./assets/script/game/prefab/ShopLayer":28,"./assets/script/game/prefab/NewPlantUI":29,"./assets/script/game/prefab/VictoryUI":31,"./assets/script/framwork/List":42},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{"../manager/Data":32,"../framwork/BaseUI":39,"../utils/Utils":12,"./HallScene":13,"./prefab/Bullet":22,"./DB":5},"path":"preview-scripts/assets/script/game/SoldierItem.js"},{"deps":{"../../manager/Data":32,"../../utils/AudioMgr":15,"../../utils/Utils":12,"../../framwork/BaseUI":39,"../HallScene":13,"../DB":5},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/BigNumber.js"},{"deps":{},"path":"preview-scripts/assets/script/game/DB.js"},{"deps":{"../event/GameEvent":16,"../utils/Utils":12,"./GameConst":21,"./DB":5,"../utils/AudioMgr":15,"../manager/Data":32},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{"../manager/PoolMgr":35},"path":"preview-scripts/assets/script/framwork/MsgHints.js"},{"deps":{"../../framwork/BaseUI":39,"../../manager/AdCenter":40,"../../manager/Data":32,"../../utils/AudioMgr":15,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/SettingUI.js"},{"deps":{"../../framwork/BaseUI":39,"../../manager/AdCenter":40,"../../manager/Data":32,"../../utils/AudioMgr":15,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/SignUI.js"},{"deps":{"../../framwork/BaseUI":39,"../../framwork/MsgHints":7,"../../framwork/ListItem":18,"../../manager/AdCenter":40,"../../manager/Data":32,"../../utils/AudioMgr":15,"../../utils/Utils":12,"../GameConst":21,"../HallScene":13},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{"../../framwork/BaseUI":39,"../../framwork/MsgHints":7,"../../manager/AdCenter":40,"../../utils/AudioMgr":15,"../../utils/Utils":12,"../../manager/Data":32},"path":"preview-scripts/assets/script/game/prefab/AdLayer.js"},{"deps":{"./Shake":41,"../manager/PoolMgr":35,"../game/GameConst":21,"./BigNumber":4},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"../framwork/BaseUI":39,"../manager/Data":32,"../manager/WxCenter":36,"../framwork/MsgHints":7,"../utils/AudioMgr":15,"../utils/Utils":12,"./DB":5,"./prefab/Enemy":3,"./prefab/AdLayer":11,"./prefab/LoseUI":24,"./prefab/LuPinResult":25,"./prefab/OfflineAwardUI":27,"./prefab/ShopLayer":28,"./prefab/VictoryUI":31,"./SlotItem":19,"./SoldierItem":2},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{"./manager/Data":32,"./framwork/BaseUI":39,"./utils/Utils":12,"./manager/PoolMgr":35,"./utils/AudioMgr":15},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"../manager/Singleton":33,"./Utils":12},"path":"preview-scripts/assets/script/utils/AudioMgr.js"},{"deps":{"../manager/Singleton":33},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{"./Singleton":33},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{"../manager/Data":32,"./DB":5,"../framwork/BaseUI":39,"../framwork/MsgHints":7,"../utils/Utils":12,"./GameConst":21},"path":"preview-scripts/assets/script/game/SlotItem.js"},{"deps":{"../../framwork/BaseUI":39,"../../utils/AudioMgr":15},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{"../../framwork/BaseUI":39,"../DB":5,"../../utils/Utils":12,"./Enemy":3},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{"../../framwork/BaseUI":39,"../../utils/AudioMgr":15,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/FairyItem.js"},{"deps":{"../../framwork/BaseUI":39,"../../manager/Data":32,"../../utils/AudioMgr":15,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/LoseUI.js"},{"deps":{"../../framwork/BaseUI":39,"../../manager/Data":32,"../../utils/AudioMgr":15,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/LuPinResult.js"},{"deps":{"../../framwork/BaseUI":39,"../../framwork/MsgHints":7,"../../manager/AdCenter":40,"../../manager/Data":32,"../../utils/AudioMgr":15,"../DB":5},"path":"preview-scripts/assets/script/game/prefab/FairyBonusUI.js"},{"deps":{"../../manager/AdCenter":40,"../../framwork/BaseUI":39,"../../manager/Data":32,"../../utils/AudioMgr":15,"../../framwork/MsgHints":7,"../../utils/BigNumber":4,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{"../../framwork/BaseUI":39,"../../framwork/List":42,"../../manager/Data":32,"../../utils/AudioMgr":15,"../../utils/Utils":12,"../DB":5,"../GameConst":21,"./ShopItem":10},"path":"preview-scripts/assets/script/game/prefab/ShopLayer.js"},{"deps":{"../../framwork/BaseUI":39,"../../manager/AdCenter":40,"../../manager/Data":32,"../../utils/AudioMgr":15,"../../utils/Utils":12,"../DB":5},"path":"preview-scripts/assets/script/game/prefab/NewPlantUI.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{"../../framwork/BaseUI":39,"../../manager/AdCenter":40,"../../utils/AudioMgr":15,"../../utils/Utils":12,"../../manager/Data":32},"path":"preview-scripts/assets/script/game/prefab/VictoryUI.js"},{"deps":{"../utils/Utils":12,"../game/UserModel":6,"../utils/AudioMgr":15,"../game/GameConst":21},"path":"preview-scripts/assets/script/manager/Data.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/WxCenter.js"},{"deps":{"../manager/Data":32,"../game/GameConst":21},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{"../framwork/BaseUI":39},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{"../event/GameEvent":16,"../utils/Utils":12},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"./Singleton":33,"../framwork/MsgHints":7,"../utils/Utils":12},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"},{"deps":{"./ListItem":18},"path":"preview-scripts/assets/script/framwork/List.js"}];
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
    