let moduleMap = {
'src/assets/script/k-cocos/k-cocos.js' () { return require('src/assets/script/k-cocos/k-cocos.js') },
'assets/internal/index.js' () { return require('assets/internal/index.js') },
'assets/resources/index.js' () { return require('assets/resources/index.js') },
'src/scripts/sounds/index.js' () { return require('src/scripts/sounds/index.js') },
'src/scripts/spine/index.js' () { return require('src/scripts/spine/index.js') },
'assets/main/index.js' () { return require('assets/main/index.js') },
// tail
};

window.__cocos_require__ = function (moduleName) {
    let func = moduleMap[moduleName];
    if (!func) {
        throw new Error(`cannot find module ${moduleName}`);
    }
    return func();
};