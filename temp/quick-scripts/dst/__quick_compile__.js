
(function () {
var scripts = [{"deps":{"./assets/script/event/GameEvent":9,"./assets/script/framwork/List":44,"./assets/script/framwork/MsgToast":18,"./assets/script/framwork/ListItem":19,"./assets/script/framwork/BaseUI":8,"./assets/script/game/ChickItem":7,"./assets/script/game/Config":6,"./assets/script/game/GameConst":23,"./assets/script/game/GroundItem":20,"./assets/script/game/HallScene":43,"./assets/script/game/UserModel":2,"./assets/script/game/AchievementModel":22,"./assets/script/game/prefab/Bullet":3,"./assets/script/game/prefab/CoinNotEnoughUI":17,"./assets/script/game/prefab/CommonView":11,"./assets/script/game/prefab/DropChickView":21,"./assets/script/game/prefab/DropItem":24,"./assets/script/game/prefab/Enemy":1,"./assets/script/game/prefab/FailView":25,"./assets/script/game/prefab/NewChickUI":26,"./assets/script/game/prefab/OfflineAwardUI":28,"./assets/script/game/prefab/RecordView":27,"./assets/script/game/prefab/SettingView":10,"./assets/script/game/prefab/ShareView":33,"./assets/script/game/prefab/ShopItem":12,"./assets/script/game/prefab/ShopView":31,"./assets/script/game/prefab/SignView":13,"./assets/script/game/prefab/WinView":29,"./assets/script/game/prefab/BossCommingUI":35,"./assets/script/manager/ChickData":30,"./assets/script/manager/ConfigManager":4,"./assets/script/manager/DataManager":32,"./assets/script/manager/PoolMgr":37,"./assets/script/manager/Singleton":34,"./assets/script/manager/WxCenter":36,"./assets/script/manager/AdCenter":41,"./assets/script/utils/DebugTools":38,"./assets/script/utils/LongTouchComponent":40,"./assets/script/utils/NumberRoll":39,"./assets/script/utils/NumberUtils":5,"./assets/script/utils/Shake":42,"./assets/script/utils/Utils":15,"./assets/script/utils/AudioMgr":14,"./assets/script/Loading":16},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../manager/ChickData":30,"../../framwork/BaseUI":8,"../Config":6,"../../utils/AudioMgr":14,"../../utils/Utils":15,"../HallScene":43},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{"../manager/ChickData":30,"../event/GameEvent":9,"./GameConst":23,"../utils/Utils":15,"../utils/AudioMgr":14,"./Config":6},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{"../../utils/AudioMgr":14,"../../utils/Utils":15,"../../framwork/BaseUI":8,"../Config":6,"./Enemy":1},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{"./Singleton":34},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/NumberUtils.js"},{"deps":{},"path":"preview-scripts/assets/script/game/Config.js"},{"deps":{"../framwork/BaseUI":8,"./Config":6,"../manager/ChickData":30,"../utils/Utils":15,"./HallScene":43,"./prefab/Bullet":3},"path":"preview-scripts/assets/script/game/ChickItem.js"},{"deps":{"../event/GameEvent":9,"../utils/Utils":15},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"../manager/Singleton":34},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{"../../framwork/BaseUI":8,"../../manager/AdCenter":41,"../../manager/ChickData":30,"../../utils/AudioMgr":14,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/SettingView.js"},{"deps":{"../../framwork/MsgToast":18,"../../framwork/BaseUI":8,"../../manager/WxCenter":36,"../../manager/ChickData":30,"../../manager/AdCenter":41,"../../utils/Utils":15,"../../utils/AudioMgr":14},"path":"preview-scripts/assets/script/game/prefab/CommonView.js"},{"deps":{"../../framwork/BaseUI":8,"../../framwork/ListItem":19,"../../framwork/MsgToast":18,"../../manager/AdCenter":41,"../../manager/ChickData":30,"../../utils/Utils":15,"../../utils/AudioMgr":14,"../HallScene":43,"../GameConst":23},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{"../../framwork/BaseUI":8,"../../manager/ChickData":30,"../../manager/AdCenter":41,"../../utils/Utils":15,"../../utils/AudioMgr":14},"path":"preview-scripts/assets/script/game/prefab/SignView.js"},{"deps":{"../manager/Singleton":34,"./Utils":15},"path":"preview-scripts/assets/script/utils/AudioMgr.js"},{"deps":{"./NumberUtils":5,"../manager/PoolMgr":37,"../game/GameConst":23,"./Shake":42},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"./framwork/BaseUI":8,"./manager/AdCenter":41,"./manager/PoolMgr":37,"./manager/WxCenter":36,"./manager/ChickData":30,"./utils/AudioMgr":14,"./utils/Utils":15},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"../../framwork/BaseUI":8,"../../manager/ChickData":30,"../../manager/WxCenter":36,"../../utils/AudioMgr":14,"../../utils/NumberUtils":5,"../../utils/Utils":15,"../../manager/AdCenter":41,"../Config":6,"../HallScene":43},"path":"preview-scripts/assets/script/game/prefab/CoinNotEnoughUI.js"},{"deps":{"../manager/PoolMgr":37},"path":"preview-scripts/assets/script/framwork/MsgToast.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{"../framwork/BaseUI":8,"./Config":6,"../manager/ChickData":30},"path":"preview-scripts/assets/script/game/GroundItem.js"},{"deps":{"../../manager/AdCenter":41,"../../framwork/BaseUI":8,"../../manager/WxCenter":36,"../../manager/ChickData":30,"../../utils/AudioMgr":14,"../../utils/Utils":15,"../Config":6},"path":"preview-scripts/assets/script/game/prefab/DropChickView.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{"../../framwork/BaseUI":8,"../../utils/AudioMgr":14,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/DropItem.js"},{"deps":{"../../framwork/BaseUI":8,"../../manager/ChickData":30,"../../manager/WxCenter":36,"../../utils/AudioMgr":14,"../../manager/AdCenter":41,"../../utils/Utils":15,"../HallScene":43},"path":"preview-scripts/assets/script/game/prefab/FailView.js"},{"deps":{"../../framwork/BaseUI":8,"../../manager/ChickData":30,"../../manager/AdCenter":41,"../../utils/AudioMgr":14,"../../utils/Utils":15,"../Config":6},"path":"preview-scripts/assets/script/game/prefab/NewChickUI.js"},{"deps":{"../../framwork/BaseUI":8,"../../manager/ChickData":30,"../../utils/AudioMgr":14,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/RecordView.js"},{"deps":{"../../framwork/BaseUI":8,"../../manager/AdCenter":41,"../../manager/ChickData":30,"../../utils/AudioMgr":14,"../../utils/NumberUtils":5,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{"../../framwork/BaseUI":8,"../../manager/AdCenter":41,"../../manager/ChickData":30,"../../manager/WxCenter":36,"../../utils/AudioMgr":14,"../HallScene":43,"../../utils/Utils":15},"path":"preview-scripts/assets/script/game/prefab/WinView.js"},{"deps":{"../game/UserModel":2,"../utils/Utils":15,"../utils/AudioMgr":14,"../game/GameConst":23},"path":"preview-scripts/assets/script/manager/ChickData.js"},{"deps":{"../../framwork/List":44,"../../framwork/BaseUI":8,"../../manager/ChickData":30,"../../manager/WxCenter":36,"../../utils/AudioMgr":14,"../../utils/Utils":15,"../GameConst":23,"./ShopItem":12,"../Config":6},"path":"preview-scripts/assets/script/game/prefab/ShopView.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{"../../manager/ChickData":30,"../../utils/Utils":15,"../../utils/NumberUtils":5,"../../framwork/BaseUI":8,"../../utils/AudioMgr":14},"path":"preview-scripts/assets/script/game/prefab/ShareView.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{"../../framwork/BaseUI":8,"../../utils/AudioMgr":14},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/WxCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{"../framwork/BaseUI":8},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{"./Singleton":34,"./WxCenter":36,"../utils/Utils":15,"../framwork/MsgToast":18},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"},{"deps":{"../framwork/BaseUI":8,"../framwork/MsgToast":18,"../manager/ChickData":30,"../manager/WxCenter":36,"../utils/AudioMgr":14,"../utils/Utils":15,"./prefab/CommonView":11,"./Config":6,"./prefab/ShareView":33,"./prefab/Enemy":1,"./prefab/RecordView":27,"./prefab/OfflineAwardUI":28,"./prefab/WinView":29,"./GroundItem":20,"./prefab/FailView":25,"./prefab/ShopView":31,"./ChickItem":7,"./prefab/CoinNotEnoughUI":17},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{"./ListItem":19},"path":"preview-scripts/assets/script/framwork/List.js"}];
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
    