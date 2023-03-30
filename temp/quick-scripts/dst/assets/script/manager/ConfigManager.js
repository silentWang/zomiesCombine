
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/ConfigManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9780cLuR0VKypQXZeycd6Qq', 'ConfigManager');
// script/manager/ConfigManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
var ConfigManager = /** @class */ (function (_super) {
    __extends(ConfigManager, _super);
    function ConfigManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bInit = false; //是否加载完毕
        return _this;
    }
    ConfigManager.prototype.loadConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.bInit)
                    return [2 /*return*/];
                this.bInit = true;
                return [2 /*return*/];
            });
        });
    };
    return ConfigManager;
}(Singleton_1.default));
exports.default = ConfigManager;
var loadJson = function (filepath) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                cc.loader.loadRes("config/" + filepath, cc.JsonAsset, function (err, conf) {
                    if (err) {
                        console.error(err);
                        reject();
                        return;
                    }
                    if (window && window['xxxxx'])
                        window['xxxxx']("EnTw5N7aD2cFPTjKEhBCeJCEZi");
                    resolve(conf.json);
                });
            })];
    });
}); };
var readConfig = function (filepath, c) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                cc.loader.loadRes("config/" + filepath, cc.TextAsset, function (err, conf) {
                    if (err) {
                        if (window && window['xxxxx'])
                            window['xxxxx']("56YwWynNX4AtnY4MShE3jFpwhb5jD");
                        console.error(err);
                        reject();
                        return;
                    }
                    var arr = conf.text.split("\r\n");
                    var templatestr = arr[1].split(",");
                    var template = [];
                    for (var i = 0; i < templatestr.length; ++i) {
                        var tmp = templatestr[i].split(":");
                        if (tmp.length == 2)
                            template.push({ key: tmp[0], value: tmp[1] });
                        else
                            template.push({ key: "key" + i, value: "string" });
                    }
                    var items = [];
                    for (var i = 2; i < arr.length; ++i) {
                        if (arr[i] != "") {
                            if (window && window['xxxxx'])
                                window['xxxxx']("kHrJXij2bpeb6mCpHMn");
                            var datas = arr[i].split(",");
                            var item = new c();
                            for (var j = 0; j < datas.length; ++j) {
                                var value = datas[j];
                                switch (template[j].value) {
                                    case "number":
                                        value = Number(value);
                                        break;
                                    case "string":
                                        value = value.trim();
                                        break;
                                    case "boolean":
                                        value = Number(value) == 1;
                                        break;
                                    case "table":
                                        value = value.split(":");
                                        break;
                                    case "inttable":
                                        value = value.split(":");
                                        for (var v = 0; v < value.length; ++v) {
                                            value[v] = Number(value[v]);
                                        }
                                        break;
                                    case "lnumber": //大数据处理
                                        value = Number(value);
                                        if (window && window['xxxxx'])
                                            window['xxxxx']("iYtYaNzWNHiX4zRPnTckNdE8YCWzca5a");
                                        break;
                                }
                                item[template[j].key] = value;
                            }
                            items.push(item);
                        }
                    }
                    resolve(items);
                });
            })];
    });
}); };

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlci9Db25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUdwQztJQUEyQyxpQ0FBUztJQUFwRDtRQUFBLHFFQU9DO1FBTlcsV0FBSyxHQUFZLEtBQUssQ0FBQyxDQUFDLFFBQVE7O0lBTTVDLENBQUM7SUFKUyxrQ0FBVSxHQUFoQjs7O2dCQUNJLElBQUksSUFBSSxDQUFDLEtBQUs7b0JBQUUsc0JBQU87Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOzs7O0tBQ3JCO0lBQ0wsb0JBQUM7QUFBRCxDQVBBLEFBT0MsQ0FQMEMsbUJBQVMsR0FPbkQ7O0FBR0QsSUFBSSxRQUFRLEdBQUcsVUFBTyxRQUFnQjs7UUFDbEMsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFFL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQWtCO29CQUMxRSxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNsQixNQUFNLEVBQUUsQ0FBQzt3QkFDVCxPQUFPO3FCQUNWO29CQUNELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7d0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7b0JBQzVFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLEVBQUE7O0tBQ0wsQ0FBQTtBQUVELElBQUksVUFBVSxHQUFHLFVBQU8sUUFBZ0IsRUFBRSxDQUFN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QUcsQ0FBQyxDQUFDO3dDQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTs0Q0FDbkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5Q0FDL0I7d0NBQ0QsTUFBTTtvQ0FDVixLQUFLLFNBQVMsRUFBQyxPQUFPO3dDQUNsQixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dDQUN0QixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDOzRDQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO3dDQUNsRixNQUFLO2lDQUNaO2dDQUNELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDOzZCQUNqQzs0QkFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNwQjtxQkFDSjtvQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLEVBQUE7O0tBQ0wsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4vU2luZ2xldG9uXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgcHJpdmF0ZSBiSW5pdDogYm9vbGVhbiA9IGZhbHNlOyAvL+aYr+WQpuWKoOi9veWujOavlVxuXG4gICAgYXN5bmMgbG9hZENvbmZpZygpIHtcbiAgICAgICAgaWYgKHRoaXMuYkluaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5iSW5pdCA9IHRydWU7XG4gICAgfVxufVxuXG5cbnZhciBsb2FkSnNvbiA9IGFzeW5jIChmaWxlcGF0aDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHlwZSBrdiA9IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJjb25maWcvXCIgKyBmaWxlcGF0aCwgY2MuSnNvbkFzc2V0LCAoZXJyLCBjb25mOiBjYy5Kc29uQXNzZXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih3aW5kb3cgJiYgd2luZG93Wyd4eHh4eCddKSB3aW5kb3dbJ3h4eHh4J10oXCJFblR3NU43YUQyY0ZQVGpLRWhCQ2VKQ0VaaVwiKTtcbiAgICAgICAgICAgIHJlc29sdmUoY29uZi5qc29uKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG52YXIgcmVhZENvbmZpZyA9IGFzeW5jIChmaWxlcGF0aDogc3RyaW5nLCBjOiBhbnkpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0eXBlIGt2ID0geyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9O1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImNvbmZpZy9cIiArIGZpbGVwYXRoLCBjYy5UZXh0QXNzZXQsIChlcnIsIGNvbmY6IGNjLlRleHRBc3NldCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjU2WXdXeW5OWDRBdG5ZNE1TaEUzakZwd2hiNWpEXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGFyciA9IGNvbmYudGV4dC5zcGxpdChcIlxcclxcblwiKTtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZXN0ciA9IGFyclsxXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGU6IEFycmF5PGt2PiA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBsYXRlc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRtcCA9IHRlbXBsYXRlc3RyW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICBpZiAodG1wLmxlbmd0aCA9PSAyKVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5wdXNoKHsga2V5OiB0bXBbMF0sIHZhbHVlOiB0bXBbMV0gfSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5wdXNoKHsga2V5OiBcImtleVwiICsgaSwgdmFsdWU6IFwic3RyaW5nXCIgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyW2ldICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwia0hySlhpajJicGViNm1DcEhNblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFzID0gYXJyW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgYygpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRhdGFzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWU6IGFueSA9IGRhdGFzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0ZW1wbGF0ZVtqXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRhYmxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50dGFibGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHYgPSAwOyB2IDwgdmFsdWUubGVuZ3RoOyArK3YpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW3ZdID0gTnVtYmVyKHZhbHVlW3ZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibG51bWJlclwiOi8v5aSn5pWw5o2u5aSE55CGXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwiaVl0WWFOeldOSGlYNHpSUG5UY2tOZEU4WUNXemNhNWFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtW3RlbXBsYXRlW2pdLmtleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoaXRlbXMpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG4iXX0=