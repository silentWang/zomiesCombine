
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxDb25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUdwQztJQUEyQyxpQ0FBUztJQUFwRDtRQUFBLHFFQU9DO1FBTlcsV0FBSyxHQUFZLEtBQUssQ0FBQyxDQUFDLFFBQVE7O0lBTTVDLENBQUM7SUFKUyxrQ0FBVSxHQUFoQjs7O2dCQUNJLElBQUksSUFBSSxDQUFDLEtBQUs7b0JBQUUsc0JBQU87Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOzs7O0tBQ3JCO0lBQ0wsb0JBQUM7QUFBRCxDQVBBLEFBT0MsQ0FQMEMsbUJBQVMsR0FPbkQ7O0FBR0QsSUFBSSxRQUFRLEdBQUcsVUFBTyxRQUFnQjs7UUFDbEMsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFFL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQWtCO29CQUMxRSxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNsQixNQUFNLEVBQUUsQ0FBQzt3QkFDVCxPQUFPO3FCQUNWO29CQUNELElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7d0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7b0JBQzVFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLEVBQUE7O0tBQ0wsQ0FBQTtBQUVELElBQUksVUFBVSxHQUFHLFVBQU8sUUFBZ0IsRUFBRSxD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LEdBQUcsQ0FBQyxDQUFDO3dDQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTs0Q0FDbkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5Q0FDL0I7d0NBQ0QsTUFBTTtvQ0FDVixLQUFLLFNBQVMsRUFBQyxPQUFPO3dDQUNsQixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dDQUN0QixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDOzRDQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO3dDQUNsRixNQUFLO2lDQUNaO2dDQUNELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDOzZCQUNqQzs0QkFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNwQjtxQkFDSjtvQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLEVBQUE7O0tBQ0wsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4vU2luZ2xldG9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgICBwcml2YXRlIGJJbml0OiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm5Yqg6L295a6M5q+VXHJcblxyXG4gICAgYXN5bmMgbG9hZENvbmZpZygpIHtcclxuICAgICAgICBpZiAodGhpcy5iSW5pdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYkluaXQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxudmFyIGxvYWRKc29uID0gYXN5bmMgKGZpbGVwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdHlwZSBrdiA9IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImNvbmZpZy9cIiArIGZpbGVwYXRoLCBjYy5Kc29uQXNzZXQsIChlcnIsIGNvbmY6IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIkVuVHc1TjdhRDJjRlBUaktFaEJDZUpDRVppXCIpO1xyXG4gICAgICAgICAgICByZXNvbHZlKGNvbmYuanNvbik7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbnZhciByZWFkQ29uZmlnID0gYXN5bmMgKGZpbGVwYXRoOiBzdHJpbmcsIGM6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0eXBlIGt2ID0geyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiY29uZmlnL1wiICsgZmlsZXBhdGgsIGNjLlRleHRBc3NldCwgKGVyciwgY29uZjogY2MuVGV4dEFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIjU2WXdXeW5OWDRBdG5ZNE1TaEUzakZwd2hiNWpEXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGFyciA9IGNvbmYudGV4dC5zcGxpdChcIlxcclxcblwiKTtcclxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlc3RyID0gYXJyWzFdLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlOiBBcnJheTxrdj4gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcGxhdGVzdHIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0bXAgPSB0ZW1wbGF0ZXN0cltpXS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodG1wLmxlbmd0aCA9PSAyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlLnB1c2goeyBrZXk6IHRtcFswXSwgdmFsdWU6IHRtcFsxXSB9KTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5wdXNoKHsga2V5OiBcImtleVwiICsgaSwgdmFsdWU6IFwic3RyaW5nXCIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFycltpXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93ICYmIHdpbmRvd1sneHh4eHgnXSkgd2luZG93Wyd4eHh4eCddKFwia0hySlhpajJicGViNm1DcEhNblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSBhcnJbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IGMoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRhdGFzLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZTogYW55ID0gZGF0YXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGVtcGxhdGVbal0udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA9PSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRhYmxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50dGFibGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IHZhbHVlLmxlbmd0aDsgKyt2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW3ZdID0gTnVtYmVyKHZhbHVlW3ZdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibG51bWJlclwiOi8v5aSn5pWw5o2u5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcImlZdFlhTnpXTkhpWDR6UlBuVGNrTmRFOFlDV3pjYTVhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVt0ZW1wbGF0ZVtqXS5rZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuIl19