
(function () {
var scripts = [{"deps":{"./assets/script/manager/AdCenter":1,"./assets/script/Loading":2,"./assets/script/utils/AudioMgr":3,"./assets/script/utils/NumberUtils":4,"./assets/script/game/prefab/Bullet":5,"./assets/script/utils/Utils":6,"./assets/script/framwork/BaseUI":7,"./assets/script/event/GameEvent":8,"./assets/script/framwork/MsgToast":9,"./assets/script/game/GameConst":10,"./assets/script/game/ChickItem":11,"./assets/script/game/prefab/CoinNotEnoughUI":12,"./assets/script/game/UserModel":13,"./assets/script/game/GroundItem":14,"./assets/script/framwork/ListItem":15,"./assets/script/framwork/List":16,"./assets/script/game/AchievementModel":17,"./assets/script/game/Config":18,"./assets/script/game/prefab/CommonView":19,"./assets/script/game/HallScene":20,"./assets/script/game/prefab/DropChickView":21,"./assets/script/game/prefab/DropItem":22,"./assets/script/game/prefab/MonthView":23,"./assets/script/game/prefab/FailView":24,"./assets/script/game/prefab/OfflineAwardUI":25,"./assets/script/game/prefab/NewChickUI":26,"./assets/script/game/prefab/Enemy":27,"./assets/script/game/prefab/SettingView":28,"./assets/script/game/prefab/RecordView":29,"./assets/script/game/prefab/ShareView":30,"./assets/script/game/prefab/ShopItem":31,"./assets/script/manager/ChickData":32,"./assets/script/game/prefab/WinView":33,"./assets/script/game/prefab/SignView":34,"./assets/script/game/prefab/ShopView":35,"./assets/script/manager/DataManager":36,"./assets/script/game/prefab/BossCommingUI":37,"./assets/script/manager/PoolMgr":38,"./assets/script/manager/Singleton":39,"./assets/script/utils/DebugTools":40,"./assets/script/utils/NumberRoll":41,"./assets/script/utils/LongTouchComponent":42,"./assets/script/manager/WxCenter":43,"./assets/script/manager/ConfigManager":44,"./assets/script/utils/Native":45,"./assets/script/utils/Shake":46},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./Singleton":39,"../utils/Utils":6,"../utils/Native":45},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{"./framwork/BaseUI":7,"./manager/AdCenter":1,"./manager/ChickData":32,"./manager/PoolMgr":38,"./manager/WxCenter":43,"./utils/AudioMgr":3,"./utils/Native":45,"./utils/Utils":6},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"../manager/Singleton":39,"./Utils":6},"path":"preview-scripts/assets/script/utils/AudioMgr.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/NumberUtils.js"},{"deps":{"../../framwork/BaseUI":7,"../../utils/AudioMgr":3,"../../utils/Utils":6,"../Config":18,"./Enemy":27},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{"./Shake":46,"./NumberUtils":4,"../manager/PoolMgr":38,"../game/GameConst":10},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"../event/GameEvent":8,"../game/GameConst":10,"../utils/Utils":6},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"../manager/Singleton":39},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{"../manager/PoolMgr":38},"path":"preview-scripts/assets/script/framwork/MsgToast.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{"../framwork/BaseUI":7,"../manager/ChickData":32,"../utils/Utils":6,"./Config":18,"./HallScene":20,"./prefab/Bullet":5},"path":"preview-scripts/assets/script/game/ChickItem.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../manager/WxCenter":43,"../../utils/AudioMgr":3,"../../utils/NumberUtils":4,"../../utils/Utils":6,"../Config":18,"../HallScene":20},"path":"preview-scripts/assets/script/game/prefab/CoinNotEnoughUI.js"},{"deps":{"../event/GameEvent":8,"../manager/ChickData":32,"../utils/Utils":6,"./GameConst":10,"./Config":18,"../utils/AudioMgr":3},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{"../framwork/BaseUI":7,"../manager/ChickData":32,"./Config":18},"path":"preview-scripts/assets/script/game/GroundItem.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{"./ListItem":15},"path":"preview-scripts/assets/script/framwork/List.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{},"path":"preview-scripts/assets/script/game/Config.js"},{"deps":{"../../framwork/BaseUI":7,"../../framwork/MsgToast":9,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../manager/WxCenter":43,"../../utils/AudioMgr":3,"../../utils/Utils":6},"path":"preview-scripts/assets/script/game/prefab/CommonView.js"},{"deps":{"../framwork/BaseUI":7,"../framwork/MsgToast":9,"../manager/ChickData":32,"../manager/WxCenter":43,"../utils/AudioMgr":3,"../utils/Utils":6,"./Config":18,"./prefab/CommonView":19,"./prefab/ShareView":30,"./prefab/Enemy":27,"./prefab/FailView":24,"./prefab/OfflineAwardUI":25,"./prefab/ShopView":35,"./prefab/WinView":33,"./GroundItem":14,"./ChickItem":11,"./prefab/CoinNotEnoughUI":12},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../manager/WxCenter":43,"../../utils/AudioMgr":3,"../../utils/Utils":6,"../Config":18},"path":"preview-scripts/assets/script/game/prefab/DropChickView.js"},{"deps":{"../../framwork/BaseUI":7,"../../utils/AudioMgr":3,"../../utils/Utils":6},"path":"preview-scripts/assets/script/game/prefab/DropItem.js"},{"deps":{"../../framwork/BaseUI":7,"../../utils/AudioMgr":3,"../../utils/Native":45},"path":"preview-scripts/assets/script/game/prefab/MonthView.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../manager/WxCenter":43,"../../utils/AudioMgr":3,"../../utils/Utils":6,"../HallScene":20},"path":"preview-scripts/assets/script/game/prefab/FailView.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../utils/AudioMgr":3,"../../utils/NumberUtils":4,"../../utils/Utils":6},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../utils/AudioMgr":3,"../../utils/Utils":6,"../Config":18},"path":"preview-scripts/assets/script/game/prefab/NewChickUI.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/ChickData":32,"../../utils/AudioMgr":3,"../../utils/Utils":6,"../Config":18,"../HallScene":20},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../utils/AudioMgr":3,"../../utils/Native":45,"../../utils/Utils":6},"path":"preview-scripts/assets/script/game/prefab/SettingView.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/ChickData":32,"../../utils/AudioMgr":3,"../../utils/Utils":6},"path":"preview-scripts/assets/script/game/prefab/RecordView.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/ChickData":32,"../../manager/WxCenter":43,"../../utils/AudioMgr":3,"../../utils/NumberUtils":4,"../../utils/Utils":6},"path":"preview-scripts/assets/script/game/prefab/ShareView.js"},{"deps":{"../../framwork/BaseUI":7,"../../framwork/ListItem":15,"../../framwork/MsgToast":9,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../utils/AudioMgr":3,"../../utils/Utils":6,"../GameConst":10,"../HallScene":20},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{"../game/UserModel":13,"../utils/Utils":6,"../utils/AudioMgr":3,"../utils/Native":45},"path":"preview-scripts/assets/script/manager/ChickData.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../manager/WxCenter":43,"../../utils/AudioMgr":3,"../../utils/Utils":6,"../HallScene":20},"path":"preview-scripts/assets/script/game/prefab/WinView.js"},{"deps":{"../../framwork/BaseUI":7,"../../manager/AdCenter":1,"../../manager/ChickData":32,"../../utils/AudioMgr":3,"../../utils/Utils":6},"path":"preview-scripts/assets/script/game/prefab/SignView.js"},{"deps":{"../../framwork/BaseUI":7,"../../framwork/List":16,"../../manager/ChickData":32,"../../manager/WxCenter":43,"../../utils/AudioMgr":3,"../../utils/Utils":6,"../Config":18,"../GameConst":10,"./ShopItem":31},"path":"preview-scripts/assets/script/game/prefab/ShopView.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{"../../framwork/BaseUI":7,"../../utils/AudioMgr":3},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{"../framwork/BaseUI":7},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/WxCenter.js"},{"deps":{"./Singleton":39},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{"../event/GameEvent":8,"../framwork/MsgToast":9,"../game/GameConst":10,"../manager/ChickData":32},"path":"preview-scripts/assets/script/utils/Native.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"}];
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
    