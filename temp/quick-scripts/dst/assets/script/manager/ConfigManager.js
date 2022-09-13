
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
                //这个游戏配置放到 DB.ts里面的
                this.bInit = true;
                console.log("配置加载完成");
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
                            var datas = arr[i].split(",");
                            var item = new c();
                            for (var j = 0; j < datas.length; ++j) {
                                var value = datas[j];
                                // console.log(i,j)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxDb25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUdwQztJQUEyQyxpQ0FBUztJQUFwRDtRQUFBLHFFQVdDO1FBVlcsV0FBSyxHQUFZLEtBQUssQ0FBQyxDQUFDLFFBQVE7O0lBVTVDLENBQUM7SUFSUyxrQ0FBVSxHQUFoQjs7O2dCQUNJLElBQUksSUFBSSxDQUFDLEtBQUs7b0JBQUUsc0JBQU87Z0JBRXZCLG1CQUFtQjtnQkFFbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7Ozs7S0FDeEI7SUFDTCxvQkFBQztBQUFELENBWEEsQUFXQyxDQVgwQyxtQkFBUyxHQVduRDs7QUFFRCxJQUFJLFFBQVEsR0FBRyxVQUFPLFFBQWdCOztRQUNsQyxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUUvQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBa0I7b0JBQzFFLElBQUksR0FBRyxFQUFFO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBQ2xCLE1BQU0sRUFBRSxDQUFDO3dCQUNULE9BQU87cUJBQ1Y7b0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsRUFBQTs7S0FDTCxDQUFBO0FBRUQsSUFBSSxVQUFVLEdBQUcsVUFBTyxRQUFnQixFQUFFLENBQU07O1FBQzVDLHNCQUFPLElBQUksT0FBTyxDQUFDLFVB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QUFTLEVBQUMsT0FBTzt3Q0FDbEIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3Q0FDdEIsTUFBSztpQ0FDWjtnQ0FDRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzs2QkFDakM7NEJBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDcEI7cUJBQ0o7b0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxFQUFBOztLQUNMLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuL1NpbmdsZXRvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ01hbmFnZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG4gICAgcHJpdmF0ZSBiSW5pdDogYm9vbGVhbiA9IGZhbHNlOyAvL+aYr+WQpuWKoOi9veWujOavlVxyXG5cclxuICAgIGFzeW5jIGxvYWRDb25maWcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYkluaXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy/ov5nkuKrmuLjmiI/phY3nva7mlL7liLAgREIudHPph4zpnaLnmoRcclxuXHJcbiAgICAgICAgdGhpcy5iSW5pdCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLphY3nva7liqDovb3lrozmiJBcIilcclxuICAgIH1cclxufVxyXG5cclxudmFyIGxvYWRKc29uID0gYXN5bmMgKGZpbGVwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdHlwZSBrdiA9IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImNvbmZpZy9cIiArIGZpbGVwYXRoLCBjYy5Kc29uQXNzZXQsIChlcnIsIGNvbmY6IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUoY29uZi5qc29uKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxudmFyIHJlYWRDb25maWcgPSBhc3luYyAoZmlsZXBhdGg6IHN0cmluZywgYzogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHR5cGUga3YgPSB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJjb25maWcvXCIgKyBmaWxlcGF0aCwgY2MuVGV4dEFzc2V0LCAoZXJyLCBjb25mOiBjYy5UZXh0QXNzZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGFyciA9IGNvbmYudGV4dC5zcGxpdChcIlxcclxcblwiKTtcclxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlc3RyID0gYXJyWzFdLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlOiBBcnJheTxrdj4gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcGxhdGVzdHIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0bXAgPSB0ZW1wbGF0ZXN0cltpXS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodG1wLmxlbmd0aCA9PSAyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlLnB1c2goeyBrZXk6IHRtcFswXSwgdmFsdWU6IHRtcFsxXSB9KTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5wdXNoKHsga2V5OiBcImtleVwiICsgaSwgdmFsdWU6IFwic3RyaW5nXCIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFycltpXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFzID0gYXJyW2ldLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBjKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkYXRhcy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWU6IGFueSA9IGRhdGFzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLGopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGVtcGxhdGVbal0udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA9PSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRhYmxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50dGFibGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IHZhbHVlLmxlbmd0aDsgKyt2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW3ZdID0gTnVtYmVyKHZhbHVlW3ZdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibG51bWJlclwiOi8v5aSn5pWw5o2u5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVt0ZW1wbGF0ZVtqXS5rZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuIl19