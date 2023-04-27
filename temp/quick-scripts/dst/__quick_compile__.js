
(function () {
var scripts = [{"deps":{"./assets/script/Loading":1,"./assets/script/game/prefab/CoinNotEnoughUI":2,"./assets/script/event/GameEvent":3,"./assets/script/framwork/ListItem":4,"./assets/script/framwork/MsgToast":5,"./assets/script/manager/ChickData":6,"./assets/script/utils/DebugTools":7,"./assets/script/game/GroundItem":8,"./assets/script/game/AchievementModel":9,"./assets/script/game/UserModel":10,"./assets/script/game/prefab/Bullet":11,"./assets/script/game/GameConst":12,"./assets/script/game/Config":13,"./assets/script/framwork/BaseUI":14,"./assets/script/framwork/List":15,"./assets/script/game/prefab/CommonView":16,"./assets/script/game/HallScene":17,"./assets/script/game/ChickItem":18,"./assets/script/game/prefab/DropChickView":19,"./assets/script/game/prefab/FailView":20,"./assets/script/game/prefab/DropItem":21,"./assets/script/game/prefab/RecordView":22,"./assets/script/game/prefab/Enemy":23,"./assets/script/game/prefab/MonthView":24,"./assets/script/game/prefab/SettingView":25,"./assets/script/game/prefab/ShareView":26,"./assets/script/game/prefab/OfflineAwardUI":27,"./assets/script/game/prefab/NewChickUI":28,"./assets/script/game/prefab/ShopItem":29,"./assets/script/game/prefab/SignView":30,"./assets/script/game/prefab/ShopView":31,"./assets/script/manager/PoolMgr":32,"./assets/script/manager/Singleton":33,"./assets/script/manager/DataManager":34,"./assets/script/manager/ConfigManager":35,"./assets/script/game/prefab/BossCommingUI":36,"./assets/script/game/prefab/WinView":37,"./assets/script/manager/WxCenter":38,"./assets/script/utils/Native":39,"./assets/script/utils/NumberRoll":40,"./assets/script/utils/LongTouchComponent":41,"./assets/script/manager/AdCenter":42,"./assets/script/utils/NumberUtils":43,"./assets/script/utils/Shake":44,"./assets/script/utils/Utils":45,"./assets/script/utils/AudioMgr":46},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./framwork/BaseUI":14,"./manager/AdCenter":42,"./manager/ChickData":6,"./manager/PoolMgr":32,"./manager/WxCenter":38,"./utils/AudioMgr":46,"./utils/Native":39,"./utils/Utils":45},"path":"preview-scripts/assets/script/Loading.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../manager/WxCenter":38,"../../utils/AudioMgr":46,"../../utils/NumberUtils":43,"../../utils/Utils":45,"../Config":13,"../HallScene":17},"path":"preview-scripts/assets/script/game/prefab/CoinNotEnoughUI.js"},{"deps":{"../manager/Singleton":33},"path":"preview-scripts/assets/script/event/GameEvent.js"},{"deps":{},"path":"preview-scripts/assets/script/framwork/ListItem.js"},{"deps":{"../manager/PoolMgr":32},"path":"preview-scripts/assets/script/framwork/MsgToast.js"},{"deps":{"../game/UserModel":10,"../utils/Utils":45,"../utils/AudioMgr":46,"../utils/Native":39},"path":"preview-scripts/assets/script/manager/ChickData.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/DebugTools.js"},{"deps":{"../framwork/BaseUI":14,"../manager/ChickData":6,"./Config":13},"path":"preview-scripts/assets/script/game/GroundItem.js"},{"deps":{},"path":"preview-scripts/assets/script/game/AchievementModel.js"},{"deps":{"../event/GameEvent":3,"../manager/ChickData":6,"../utils/Utils":45,"./GameConst":12,"./Config":13,"../utils/AudioMgr":46},"path":"preview-scripts/assets/script/game/UserModel.js"},{"deps":{"../../framwork/BaseUI":14,"../../utils/AudioMgr":46,"../../utils/Utils":45,"../Config":13,"./Enemy":23},"path":"preview-scripts/assets/script/game/prefab/Bullet.js"},{"deps":{},"path":"preview-scripts/assets/script/game/GameConst.js"},{"deps":{},"path":"preview-scripts/assets/script/game/Config.js"},{"deps":{"../event/GameEvent":3,"../game/GameConst":12,"../utils/Utils":45},"path":"preview-scripts/assets/script/framwork/BaseUI.js"},{"deps":{"./ListItem":4},"path":"preview-scripts/assets/script/framwork/List.js"},{"deps":{"../../framwork/BaseUI":14,"../../framwork/MsgToast":5,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../manager/WxCenter":38,"../../utils/AudioMgr":46,"../../utils/Utils":45},"path":"preview-scripts/assets/script/game/prefab/CommonView.js"},{"deps":{"../framwork/BaseUI":14,"../framwork/MsgToast":5,"../manager/ChickData":6,"../manager/WxCenter":38,"../utils/AudioMgr":46,"../utils/Utils":45,"./Config":13,"./prefab/CommonView":16,"./prefab/ShareView":26,"./prefab/Enemy":23,"./prefab/FailView":20,"./prefab/OfflineAwardUI":27,"./prefab/ShopView":31,"./prefab/WinView":37,"./GroundItem":8,"./ChickItem":18,"./prefab/CoinNotEnoughUI":2},"path":"preview-scripts/assets/script/game/HallScene.js"},{"deps":{"../framwork/BaseUI":14,"../manager/ChickData":6,"../utils/Utils":45,"./Config":13,"./HallScene":17,"./prefab/Bullet":11},"path":"preview-scripts/assets/script/game/ChickItem.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../manager/WxCenter":38,"../../utils/AudioMgr":46,"../../utils/Utils":45,"../Config":13},"path":"preview-scripts/assets/script/game/prefab/DropChickView.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../manager/WxCenter":38,"../../utils/AudioMgr":46,"../../utils/Utils":45,"../HallScene":17},"path":"preview-scripts/assets/script/game/prefab/FailView.js"},{"deps":{"../../framwork/BaseUI":14,"../../utils/AudioMgr":46,"../../utils/Utils":45},"path":"preview-scripts/assets/script/game/prefab/DropItem.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/ChickData":6,"../../utils/AudioMgr":46,"../../utils/Utils":45},"path":"preview-scripts/assets/script/game/prefab/RecordView.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/ChickData":6,"../../utils/AudioMgr":46,"../../utils/Utils":45,"../Config":13,"../HallScene":17},"path":"preview-scripts/assets/script/game/prefab/Enemy.js"},{"deps":{"../../framwork/BaseUI":14,"../../utils/AudioMgr":46,"../../utils/Native":39},"path":"preview-scripts/assets/script/game/prefab/MonthView.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../utils/AudioMgr":46,"../../utils/Native":39,"../../utils/Utils":45},"path":"preview-scripts/assets/script/game/prefab/SettingView.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/ChickData":6,"../../manager/WxCenter":38,"../../utils/AudioMgr":46,"../../utils/NumberUtils":43,"../../utils/Utils":45},"path":"preview-scripts/assets/script/game/prefab/ShareView.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../utils/AudioMgr":46,"../../utils/NumberUtils":43,"../../utils/Utils":45},"path":"preview-scripts/assets/script/game/prefab/OfflineAwardUI.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../utils/AudioMgr":46,"../../utils/Utils":45,"../Config":13},"path":"preview-scripts/assets/script/game/prefab/NewChickUI.js"},{"deps":{"../../framwork/BaseUI":14,"../../framwork/ListItem":4,"../../framwork/MsgToast":5,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../utils/AudioMgr":46,"../../utils/Utils":45,"../GameConst":12,"../HallScene":17},"path":"preview-scripts/assets/script/game/prefab/ShopItem.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../utils/AudioMgr":46,"../../utils/Utils":45},"path":"preview-scripts/assets/script/game/prefab/SignView.js"},{"deps":{"../../framwork/BaseUI":14,"../../framwork/List":15,"../../manager/ChickData":6,"../../manager/WxCenter":38,"../../utils/AudioMgr":46,"../../utils/Utils":45,"../Config":13,"../GameConst":12,"./ShopItem":29},"path":"preview-scripts/assets/script/game/prefab/ShopView.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/PoolMgr.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/Singleton.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/DataManager.js"},{"deps":{"./Singleton":33},"path":"preview-scripts/assets/script/manager/ConfigManager.js"},{"deps":{"../../framwork/BaseUI":14,"../../utils/AudioMgr":46},"path":"preview-scripts/assets/script/game/prefab/BossCommingUI.js"},{"deps":{"../../framwork/BaseUI":14,"../../manager/AdCenter":42,"../../manager/ChickData":6,"../../manager/WxCenter":38,"../../utils/AudioMgr":46,"../../utils/Utils":45,"../HallScene":17},"path":"preview-scripts/assets/script/game/prefab/WinView.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/WxCenter.js"},{"deps":{"../event/GameEvent":3,"../framwork/MsgToast":5,"../game/GameConst":12,"../manager/ChickData":6},"path":"preview-scripts/assets/script/utils/Native.js"},{"deps":{"../framwork/BaseUI":14},"path":"preview-scripts/assets/script/utils/NumberRoll.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/LongTouchComponent.js"},{"deps":{"./Singleton":33,"../utils/Utils":45,"../utils/Native":39},"path":"preview-scripts/assets/script/manager/AdCenter.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/NumberUtils.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/Shake.js"},{"deps":{"./Shake":44,"./NumberUtils":43,"../manager/PoolMgr":32,"../game/GameConst":12},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"../manager/Singleton":33,"./Utils":45},"path":"preview-scripts/assets/script/utils/AudioMgr.js"}];
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
    