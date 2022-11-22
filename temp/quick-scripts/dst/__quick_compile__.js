
(function () {
var scripts = [{"deps":{"./assets/script/Loading":16,"./assets/script/framwork/MsgHints":18,"./assets/script/framwork/BaseUI":2,"./assets/script/framwork/List":43,"./assets/script/framwork/ListItem":20,"./assets/script/game/DB":5,"./assets/script/game/GameConst":23,"./assets/script/game/HallScene":15,"./assets/script/game/SlotItem":21,"./assets/script/game/UserModel":8,"./assets/script/game/SoldierItem":6,"./assets/script/game/AchievementModel":1,"./assets/script/game/prefab/BossCommingUI":19,"./assets/script/game/prefab/Bullet":26,"./assets/script/game/prefab/Enemy":3,"./assets/script/game/prefab/FairyBonusUI":22,"./assets/script/game/prefab/LoseUI":25,"./assets/script/game/prefab/FairyItem":24,"./assets/script/game/prefab/NewPlantUI":27,"./assets/script/game/prefab/LuPinResult":28,"./assets/script/game/prefab/ShareLayer":29,"./assets/script/game/prefab/OfflineAwardUI":30,"./assets/script/game/prefab/ShopItem":10,"./assets/script/game/prefab/ShopLayer":32,"./assets/script/game/prefab/SettingUI":11,"./assets/script/game/prefab/SignUI":9,"./assets/script/game/prefab/VictoryUI":33,"./assets/script/game/prefab/AdLayer":12,"./assets/script/manager/ConfigManager":35,"./assets/script/manager/Data":17,"./assets/script/manager/DataManager":36,"./assets/script/manager/PoolMgr":31,"./assets/script/manager/Singleton":34,"./assets/script/manager/WxCenter":37,"./assets/script/manager/AdCenter":40,"./assets/script/utils/BigNumber":4,"./assets/script/utils/DebugTools":38,"./assets/script/utils/LongTouchComponent":41,"./assets/script/utils/Shake":42,"./assets/script/utils/NumberRoll":39,"./assets/script/utils/Utils":13,"./assets/script/utils/AudioMgr":14,"./assets/script/event/GameEvent":7},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{"../utils/Utils":13,"../event/GameEvent":7},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"../../manager/Data":17,"../../framwork/BaseUI":2,"../../utils/AudioMgr":14,"../../utils/Utils":13,"../HallScene":15,"../DB":5},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/BigNumber.js"},{"deps":{},"path":"preview-scripts/assets/script/game/DB.js"},{"deps":{"./DB":5,"./HallScene":15,"../manager/Data":17,"./prefab/Bullet":26,"../utils/Utils":13,"../framwork/BaseUI":2},"path":"preview-scripts/assets/script/game/SoldierItem.js"},{"deps":{"../manager/Singleton":34},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{"../event/GameEvent":7,"../manager/Data":17,"../utils/Utils":13,"./DB":5,"./GameConst":23,"../utils/AudioMgr":14},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/Data":17,"../../manager/AdCenter":40,"../../utils/AudioMgr":14,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/prefab/SignUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../framwork/MsgHints":18,"../../utils/AudioMgr":14,"../../framwork/ListItem":20,"../../manager/AdCenter":40,"../../manager/Data":17,"../../utils/Utils":13,"../GameConst":23,"../HallScene":15},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{"../../framwork/BaseUI":2,"../../utils/AudioMgr":14,"../../manager/AdCenter":40,"../../manager/Data":17,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/prefab/SettingUI.js"},{"deps":{"../../utils/Utils":13,"../../utils/AudioMgr":14,"../../manager/AdCenter":40,"../../manager/Data":17,"../../framwork/MsgHints":18,"../../framwork/BaseUI":2},"path":"preview-scripts/assets/script/game/prefab/AdLayer.js"},{"deps":{"./Shake":42,"./BigNumber":4,"../manager/PoolMgr":31,"../game/GameConst":23},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"../manager/Singleton":34,"./Utils":13},"path":"preview-scripts/assets/script/utils/AudioMgr.js"},{"deps":{"./DB":5,"./SlotItem":21,"./SoldierItem":6,"../manager/WxCenter":37,"../manager/Data":17,"../framwork/BaseUI":2,"../framwork/MsgHints":18,"../utils/Utils":13,"../utils/AudioMgr":14,"./prefab/ShareLayer":29,"./prefab/LoseUI":25,"./prefab/LuPinResult":28,"./prefab/Enemy":3,"./prefab/OfflineAwardUI":30,"./prefab/ShopLayer":32,"./prefab/VictoryUI":33,"./prefab/AdLayer":12},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{"./manager/PoolMgr":31,"./manager/Data":17,"./framwork/BaseUI":2,"./utils/Utils":13,"./utils/AudioMgr":14},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"../game/UserModel":8,"../utils/Utils":13,"../utils/AudioMgr":14,"../game/GameConst":23},"path":"preview-scripts/assets/script/manager/Data.js"},{"deps":{"../manager/PoolMgr":31},"path":"preview-scripts/assets/script/framwork/MsgHints.js"},{"deps":{"../../framwork/BaseUI":2,"../../utils/AudioMgr":14},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{"../framwork/BaseUI":2,"../manager/Data":17,"./DB":5,"../utils/Utils":13,"../framwork/MsgHints":18,"./GameConst":23},"path":"preview-scripts/assets/script/game/SlotItem.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":40,"../../manager/Data":17,"../../utils/AudioMgr":14,"../DB":5},"path":"preview-scripts/assets/script/game/prefab/FairyBonusUI.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{"../../framwork/BaseUI":2,"../../utils/AudioMgr":14,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/prefab/FairyItem.js"},{"deps":{"../HallScene":15,"../../utils/AudioMgr":14,"../../utils/Utils":13,"../../manager/Data":17,"../../manager/AdCenter":40,"../../framwork/BaseUI":2},"path":"preview-scripts/assets/script/game/prefab/LoseUI.js"},{"deps":{"../../utils/Utils":13,"../DB":5,"../../framwork/BaseUI":2,"./Enemy":3},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/Data":17,"../../manager/AdCenter":40,"../DB":5,"../../utils/AudioMgr":14,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/prefab/NewPlantUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/Data":17,"../../utils/AudioMgr":14,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/prefab/LuPinResult.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/Data":17,"../../manager/WxCenter":37,"../../utils/AudioMgr":14,"../../utils/BigNumber":4,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/prefab/ShareLayer.js"},{"deps":{"../../framwork/BaseUI":2,"../../framwork/MsgHints":18,"../../manager/AdCenter":40,"../../utils/AudioMgr":14,"../../manager/Data":17,"../../utils/Utils":13,"../../utils/BigNumber":4},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{"../../framwork/BaseUI":2,"../../framwork/List":43,"../../manager/Data":17,"../../utils/AudioMgr":14,"../../utils/Utils":13,"../DB":5,"../GameConst":23,"./ShopItem":10},"path":"preview-scripts/assets/script/game/prefab/ShopLayer.js"},{"deps":{"../HallScene":15,"../../framwork/BaseUI":2,"../../utils/AudioMgr":14,"../../utils/Utils":13,"../../manager/Data":17,"../../manager/AdCenter":40},"path":"preview-scripts/assets/script/game/prefab/VictoryUI.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{"./Singleton":34},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{"../framwork/MsgHints":18},"path":"preview-scripts/assets/script/manager/WxCenter.js"},{"deps":{"../game/GameConst":23,"../manager/Data":17},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{"../framwork/BaseUI":2},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{"./Singleton":34,"../framwork/MsgHints":18,"../utils/Utils":13,"./WxCenter":37},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"},{"deps":{"./ListItem":20},"path":"preview-scripts/assets/script/framwork/List.js"}];
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
    