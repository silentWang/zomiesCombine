"use strict";
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