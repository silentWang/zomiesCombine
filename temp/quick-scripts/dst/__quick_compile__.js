
(function () {
var scripts = [{"deps":{"./assets/script/game/AchievementModel":1,"./assets/script/utils/BigNumber":3,"./assets/script/game/DB":5,"./assets/script/framwork/ListItem":18,"./assets/script/game/GameConst":19,"./assets/script/manager/DataManager":31,"./assets/script/manager/Singleton":33,"./assets/script/manager/PoolMgr":34,"./assets/script/utils/Shake":40,"./assets/script/utils/LongTouchComponent":41,"./assets/script/game/UserModel":2,"./assets/script/Loading":15,"./assets/script/event/GameEvent":6,"./assets/script/game/prefab/Enemy":4,"./assets/script/utils/AudioMgr":11,"./assets/script/utils/Utils":12,"./assets/script/game/HallScene":13,"./assets/script/framwork/MsgHints":14,"./assets/script/game/prefab/SettingUI":7,"./assets/script/game/prefab/SignUI":8,"./assets/script/manager/ConfigManager":16,"./assets/script/game/prefab/ShopItem":9,"./assets/script/game/prefab/AdLayer":10,"./assets/script/game/SlotItem":20,"./assets/script/manager/Data":29,"./assets/script/utils/NumberRoll":35,"./assets/script/manager/AdCenter":36,"./assets/script/manager/WxCenter":37,"./assets/script/utils/DebugTools":38,"./assets/script/game/SoldierItem":39,"./assets/script/game/prefab/FairyItem":17,"./assets/script/game/prefab/Bullet":21,"./assets/script/framwork/BaseUI":42,"./assets/script/game/prefab/BossCommingUI":22,"./assets/script/game/prefab/FairyBonusUI":23,"./assets/script/game/prefab/NewPlantUI":24,"./assets/script/game/prefab/LoseUI":25,"./assets/script/game/prefab/LuPinResult":26,"./assets/script/game/prefab/VictoryUI":27,"./assets/script/game/prefab/OfflineAwardUI":28,"./assets/script/game/prefab/ShareLayer":30,"./assets/script/game/prefab/ShopLayer":32,"./assets/script/framwork/List":43},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{"../event/GameEvent":6,"./DB":5,"../utils/Utils":12,"./GameConst":19,"../manager/Data":29,"../utils/AudioMgr":11},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/BigNumber.js"},{"deps":{"../../framwork/BaseUI":42,"../../manager/Data":29,"../../utils/AudioMgr":11,"../DB":5,"../../utils/Utils":12,"../HallScene":13},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{},"path":"preview-scripts/assets/script/game/DB.js"},{"deps":{"../manager/Singleton":33},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{"../../manager/Data":29,"../../utils/AudioMgr":11,"../../manager/AdCenter":36,"../../framwork/BaseUI":42,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/SettingUI.js"},{"deps":{"../../manager/Data":29,"../../manager/AdCenter":36,"../../utils/Utils":12,"../../utils/AudioMgr":11,"../../framwork/BaseUI":42},"path":"preview-scripts/assets/script/game/prefab/SignUI.js"},{"deps":{"../../framwork/BaseUI":42,"../../manager/AdCenter":36,"../../manager/Data":29,"../../framwork/ListItem":18,"../../framwork/MsgHints":14,"../../utils/AudioMgr":11,"../GameConst":19,"../../utils/Utils":12,"../HallScene":13},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{"../../framwork/MsgHints":14,"../../manager/AdCenter":36,"../../framwork/BaseUI":42,"../../manager/Data":29,"../../utils/AudioMgr":11,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/AdLayer.js"},{"deps":{"../manager/Singleton":33,"./Utils":12},"path":"preview-scripts/assets/script/utils/AudioMgr.js"},{"deps":{"./Shake":40,"../manager/PoolMgr":34,"../game/GameConst":19,"./BigNumber":3},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"../framwork/BaseUI":42,"../framwork/MsgHints":14,"../manager/Data":29,"../manager/WxCenter":37,"../utils/Utils":12,"../utils/AudioMgr":11,"./prefab/AdLayer":10,"./prefab/ShareLayer":30,"./DB":5,"./prefab/Enemy":4,"./prefab/LoseUI":25,"./prefab/LuPinResult":26,"./prefab/OfflineAwardUI":28,"./prefab/ShopLayer":32,"./prefab/VictoryUI":27,"./SlotItem":20,"./SoldierItem":39},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{"../manager/PoolMgr":34},"path":"preview-scripts/assets/script/framwork/MsgHints.js"},{"deps":{"./framwork/BaseUI":42,"./manager/Data":29,"./utils/AudioMgr":11,"./manager/PoolMgr":34,"./utils/Utils":12},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"./Singleton":33},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{"../../framwork/BaseUI":42,"../../utils/Utils":12,"../../utils/AudioMgr":11},"path":"preview-scripts/assets/script/game/prefab/FairyItem.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{"../framwork/BaseUI":42,"../manager/Data":29,"../framwork/MsgHints":14,"../utils/Utils":12,"./DB":5,"./GameConst":19},"path":"preview-scripts/assets/script/game/SlotItem.js"},{"deps":{"../../framwork/BaseUI":42,"../../utils/Utils":12,"../DB":5,"./Enemy":4},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{"../../utils/AudioMgr":11,"../../framwork/BaseUI":42},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{"../../framwork/BaseUI":42,"../../manager/Data":29,"../../manager/AdCenter":36,"../../utils/AudioMgr":11,"../DB":5},"path":"preview-scripts/assets/script/game/prefab/FairyBonusUI.js"},{"deps":{"../../framwork/BaseUI":42,"../../manager/AdCenter":36,"../../utils/Utils":12,"../DB":5,"../../manager/Data":29,"../../utils/AudioMgr":11},"path":"preview-scripts/assets/script/game/prefab/NewPlantUI.js"},{"deps":{"../../framwork/BaseUI":42,"../../manager/AdCenter":36,"../../manager/Data":29,"../../utils/AudioMgr":11,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/LoseUI.js"},{"deps":{"../../framwork/BaseUI":42,"../../utils/AudioMgr":11,"../../manager/Data":29,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/LuPinResult.js"},{"deps":{"../../framwork/BaseUI":42,"../../manager/AdCenter":36,"../../utils/AudioMgr":11,"../../utils/Utils":12,"../../manager/Data":29},"path":"preview-scripts/assets/script/game/prefab/VictoryUI.js"},{"deps":{"../../framwork/MsgHints":14,"../../framwork/BaseUI":42,"../../manager/Data":29,"../../utils/AudioMgr":11,"../../utils/BigNumber":3,"../../manager/AdCenter":36,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{"../game/UserModel":2,"../utils/Utils":12,"../utils/AudioMgr":11,"../game/GameConst":19},"path":"preview-scripts/assets/script/manager/Data.js"},{"deps":{"../../framwork/BaseUI":42,"../../manager/Data":29,"../../manager/WxCenter":37,"../../utils/BigNumber":3,"../../utils/AudioMgr":11,"../../utils/Utils":12},"path":"preview-scripts/assets/script/game/prefab/ShareLayer.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{"../../framwork/BaseUI":42,"../../manager/Data":29,"../../framwork/List":43,"../../utils/AudioMgr":11,"../../utils/Utils":12,"../DB":5,"./ShopItem":9,"../GameConst":19},"path":"preview-scripts/assets/script/game/prefab/ShopLayer.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{"../framwork/BaseUI":42},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{"./Singleton":33,"../framwork/MsgHints":14,"../utils/Utils":12,"./WxCenter":37},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{"../framwork/MsgHints":14},"path":"preview-scripts/assets/script/manager/WxCenter.js"},{"deps":{"../manager/Data":29,"../game/GameConst":19},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{"../manager/Data":29,"../framwork/BaseUI":42,"../utils/Utils":12,"./HallScene":13,"./DB":5,"./prefab/Bullet":21},"path":"preview-scripts/assets/script/game/SoldierItem.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{"../event/GameEvent":6,"../utils/Utils":12},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"./ListItem":18},"path":"preview-scripts/assets/script/framwork/List.js"}];
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
    