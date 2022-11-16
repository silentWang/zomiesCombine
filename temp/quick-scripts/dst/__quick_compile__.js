
(function () {
var scripts = [{"deps":{"./assets/script/framwork/MsgHints":17,"./assets/script/framwork/ListItem":24,"./assets/script/framwork/List":43,"./assets/script/framwork/BaseUI":2,"./assets/script/game/DB":5,"./assets/script/game/SoldierItem":42,"./assets/script/game/SlotItem":16,"./assets/script/game/HallScene":10,"./assets/script/game/GameConst":28,"./assets/script/game/UserModel":40,"./assets/script/game/AchievementModel":13,"./assets/script/event/GameEvent":14,"./assets/script/game/prefab/AdLayer":3,"./assets/script/game/prefab/Enemy":7,"./assets/script/game/prefab/Bullet":20,"./assets/script/game/prefab/FairyBonusUI":19,"./assets/script/game/prefab/FairyItem":31,"./assets/script/game/prefab/NewPlantUI":21,"./assets/script/game/prefab/LuPinResult":18,"./assets/script/game/prefab/OfflineAwardUI":23,"./assets/script/game/prefab/SettingUI":6,"./assets/script/game/prefab/LoseUI":22,"./assets/script/game/prefab/ShareLayer":25,"./assets/script/game/prefab/ShopItem":12,"./assets/script/game/prefab/VictoryUI":33,"./assets/script/game/prefab/SignUI":8,"./assets/script/game/prefab/ShopLayer":30,"./assets/script/game/prefab/BossCommingUI":37,"./assets/script/manager/AdCenter":15,"./assets/script/manager/PoolMgr":35,"./assets/script/manager/DataManager":29,"./assets/script/manager/Data":27,"./assets/script/manager/WxCenter":34,"./assets/script/manager/Singleton":26,"./assets/script/manager/ConfigManager":36,"./assets/script/utils/AudioMgr":11,"./assets/script/utils/DebugTools":32,"./assets/script/utils/LongTouchComponent":39,"./assets/script/utils/Utils":4,"./assets/script/utils/Shake":38,"./assets/script/utils/NumberRoll":41,"./assets/script/utils/BigNumber":9,"./assets/script/Loading":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./framwork/BaseUI":2,"./manager/PoolMgr":35,"./utils/Utils":4,"./utils/AudioMgr":11,"./manager/Data":27},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"../event/GameEvent":14,"../utils/Utils":4},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":15,"../../framwork/MsgHints":17,"../../utils/AudioMgr":11,"../../manager/Data":27,"../../utils/Utils":4},"path":"preview-scripts/assets/script/game/prefab/AdLayer.js"},{"deps":{"./Shake":38,"./BigNumber":9,"../game/GameConst":28,"../manager/PoolMgr":35},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{},"path":"preview-scripts/assets/script/game/DB.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":15,"../../manager/Data":27,"../../utils/Utils":4,"../../utils/AudioMgr":11},"path":"preview-scripts/assets/script/game/prefab/SettingUI.js"},{"deps":{"../../manager/Data":27,"../../utils/AudioMgr":11,"../../utils/Utils":4,"../../framwork/BaseUI":2,"../DB":5,"../HallScene":10},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{"../../utils/AudioMgr":11,"../../framwork/BaseUI":2,"../../manager/AdCenter":15,"../../manager/Data":27,"../../utils/Utils":4},"path":"preview-scripts/assets/script/game/prefab/SignUI.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/BigNumber.js"},{"deps":{"../framwork/BaseUI":2,"../framwork/MsgHints":17,"../manager/Data":27,"../manager/WxCenter":34,"../utils/AudioMgr":11,"./prefab/AdLayer":3,"../utils/Utils":4,"./prefab/ShareLayer":25,"./DB":5,"./prefab/Enemy":7,"./prefab/LoseUI":22,"./prefab/LuPinResult":18,"./prefab/VictoryUI":33,"./prefab/OfflineAwardUI":23,"./SlotItem":16,"./prefab/ShopLayer":30,"./SoldierItem":42},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{"../manager/Singleton":26,"./Utils":4},"path":"preview-scripts/assets/script/utils/AudioMgr.js"},{"deps":{"../../framwork/BaseUI":2,"../../framwork/ListItem":24,"../../framwork/MsgHints":17,"../../manager/AdCenter":15,"../../manager/Data":27,"../GameConst":28,"../../utils/Utils":4,"../../utils/AudioMgr":11,"../HallScene":10},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{"../manager/Singleton":26},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{"./Singleton":26,"../utils/Utils":4,"../framwork/MsgHints":17,"./WxCenter":34},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{"./GameConst":28,"./DB":5,"../framwork/MsgHints":17,"../framwork/BaseUI":2,"../manager/Data":27,"../utils/Utils":4},"path":"preview-scripts/assets/script/game/SlotItem.js"},{"deps":{"../manager/PoolMgr":35},"path":"preview-scripts/assets/script/framwork/MsgHints.js"},{"deps":{"../../framwork/BaseUI":2,"../../utils/Utils":4,"../../utils/AudioMgr":11,"../../manager/Data":27},"path":"preview-scripts/assets/script/game/prefab/LuPinResult.js"},{"deps":{"../DB":5,"../../utils/AudioMgr":11,"../../framwork/BaseUI":2,"../../manager/AdCenter":15,"../../manager/Data":27},"path":"preview-scripts/assets/script/game/prefab/FairyBonusUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../utils/Utils":4,"./Enemy":7,"../DB":5},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/Data":27,"../../utils/AudioMgr":11,"../../manager/AdCenter":15,"../../utils/Utils":4,"../DB":5},"path":"preview-scripts/assets/script/game/prefab/NewPlantUI.js"},{"deps":{"../../framwork/BaseUI":2,"../../manager/AdCenter":15,"../../utils/AudioMgr":11,"../../manager/Data":27,"../../utils/Utils":4},"path":"preview-scripts/assets/script/game/prefab/LoseUI.js"},{"deps":{"../../framwork/MsgHints":17,"../../manager/AdCenter":15,"../../framwork/BaseUI":2,"../../manager/Data":27,"../../utils/AudioMgr":11,"../../utils/BigNumber":9,"../../utils/Utils":4},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{"../../manager/Data":27,"../../framwork/BaseUI":2,"../../manager/WxCenter":34,"../../utils/AudioMgr":11,"../../utils/BigNumber":9,"../../utils/Utils":4},"path":"preview-scripts/assets/script/game/prefab/ShareLayer.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{"../game/UserModel":40,"../utils/Utils":4,"../utils/AudioMgr":11,"../game/GameConst":28},"path":"preview-scripts/assets/script/manager/Data.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{"../../framwork/BaseUI":2,"../../framwork/List":43,"../../manager/Data":27,"../../utils/Utils":4,"../../utils/AudioMgr":11,"../DB":5,"./ShopItem":12,"../GameConst":28},"path":"preview-scripts/assets/script/game/prefab/ShopLayer.js"},{"deps":{"../../framwork/BaseUI":2,"../../utils/Utils":4,"../../utils/AudioMgr":11},"path":"preview-scripts/assets/script/game/prefab/FairyItem.js"},{"deps":{"../game/GameConst":28,"../manager/Data":27},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{"../../manager/AdCenter":15,"../../framwork/BaseUI":2,"../../manager/Data":27,"../../utils/AudioMgr":11,"../../utils/Utils":4},"path":"preview-scripts/assets/script/game/prefab/VictoryUI.js"},{"deps":{"../framwork/MsgHints":17},"path":"preview-scripts/assets/script/manager/WxCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{"./Singleton":26},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{"../../framwork/BaseUI":2,"../../utils/AudioMgr":11},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{"../event/GameEvent":14,"./GameConst":28,"../manager/Data":27,"../utils/Utils":4,"./DB":5,"../utils/AudioMgr":11},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{"../framwork/BaseUI":2},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{"../framwork/BaseUI":2,"../manager/Data":27,"../utils/Utils":4,"./DB":5,"./HallScene":10,"./prefab/Bullet":20},"path":"preview-scripts/assets/script/game/SoldierItem.js"},{"deps":{"./ListItem":24},"path":"preview-scripts/assets/script/framwork/List.js"}];
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
    