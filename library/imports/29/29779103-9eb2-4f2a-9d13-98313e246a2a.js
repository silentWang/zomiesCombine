"use strict";
cc._RF.push(module, '29779EDnrJPKp0TmDE+JGoq', 'BigNumber');
// script/utils/BigNumber.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BigNumber = /** @class */ (function () {
    function BigNumber() {
    }
    BigNumber_1 = BigNumber;
    BigNumber.getN = function (param1) {
        var _loc_2 = 0;
        while (_loc_2 < BigNumber_1.aLetters.length) {
            if (BigNumber_1.aLetters[_loc_2] == param1) {
                return Math.pow(10, BigNumber_1.aLetters[(_loc_2 + 1)]);
            }
            _loc_2 = _loc_2 + 2;
        }
        return 0;
    }; // end function
    BigNumber.getLargeString = function (param1, param2, param3) {
        if (param2 === void 0) { param2 = "K"; }
        if (param3 === void 0) { param3 = true; }
        if (param1 == 0)
            return param1 + '';
        //  if(param1<999)
        //      return param1+'';
        var _loc_8 = null;
        var _loc_11 = NaN;
        var _loc_4 = Math.round(param1 / Math.abs(param1));
        param1 = Math.abs(param1);
        var _loc_5 = param1;
        var _loc_6 = 0;
        var _loc_7 = 0;
        var _loc_9 = 0;
        var _loc_10 = 0;
        while (_loc_10 < BigNumber_1.aLetters.length) {
            if (BigNumber_1.aLetters[_loc_10] == param2) {
                _loc_7 = _loc_10;
                break;
            }
            _loc_10 = _loc_10 + 2;
        }
        if (param1 < Math.pow(10, BigNumber_1.aLetters[(_loc_7 + 1)])) {
            _loc_6 = -1;
        }
        else {
            _loc_11 = Math.pow(10, BigNumber_1.aLetters[(_loc_7 + 1)]);
            _loc_6 = _loc_7 / 2;
            while (_loc_5 / 1000 >= _loc_11) {
                _loc_5 = _loc_5 / 1000;
                _loc_6++;
            }
            while (_loc_5 / 1000 >= 1000) {
                _loc_5 = _loc_5 / 1000;
            }
        }
        if (_loc_6 == -1) {
            return BigNumber_1.addSeparators(Math.round((param1 - 0.5) * _loc_4).toString());
        }
        if (_loc_5 / 1000 < 10) {
            _loc_9 = 2;
        }
        else if (_loc_5 / 1000 < 100) {
            _loc_9 = 1;
        }
        _loc_5 = _loc_5 / Math.pow(10, 3 - _loc_9);
        _loc_5 = parseInt(_loc_5);
        _loc_5 = _loc_5 / Math.pow(10, _loc_9);
        if (param3)
            return (_loc_5 * _loc_4).toFixed(2) + "" + BigNumber_1.aLetters[_loc_6 * 2];
        else
            return (_loc_5 * _loc_4).toString() + "" + BigNumber_1.aLetters[_loc_6 * 2];
    }; // end function
    BigNumber.addSeparators = function (param1, param2) {
        if (param2 === void 0) { param2 = ","; }
        var _loc_3 = param1.charAt(0) == "-";
        if (_loc_3) {
            param1 = param1.substr(1);
        }
        var _loc_4 = "";
        var _loc_5 = "";
        var _loc_6 = 0;
        var _loc_7 = param1.length - 1;
        while (_loc_7 > 0) {
            _loc_4 = param1.charAt(_loc_7) + _loc_4;
            _loc_6++;
            if (_loc_6 % 3 == 0) {
                _loc_4 = param2 + _loc_4;
            }
            _loc_7 = _loc_7 - 1;
        }
        _loc_4 = param1.charAt(0) + _loc_4;
        if (_loc_3) {
            _loc_4 = "-" + _loc_4;
        }
        return _loc_4;
    }; // end function
    BigNumber.convertToLargeString = function (param1) {
        return BigNumber_1.getStringOfNumber(param1);
    }; // end function
    BigNumber.getStringOfNumber = function (param1, param2, param3, param4) {
        if (param2 === void 0) { param2 = false; }
        if (param3 === void 0) { param3 = false; }
        if (param4 === void 0) { param4 = false; }
        var _loc_5 = 1;
        if (param4) {
            _loc_5 = 10;
        }
        var _loc_6 = Math.round(param1);
        if (Math.round(param1) >= 1000000 && _loc_6 < 1000000000 && param2) {
            return (Math.round(_loc_6 / 1000 / _loc_5) / (1000 / _loc_5)).toString() + " M";
        }
        if (_loc_6 >= 1000000000 && _loc_6 < 1000000000000) {
            return (Math.round(_loc_6 / 1000000 / _loc_5) / (1000 / _loc_5)).toString() + " B";
        }
        if (_loc_6 >= 1000000000000 && _loc_6 < 1000000000000000) {
            return (Math.round(_loc_6 / 1000000000 / _loc_5) / (1000 / _loc_5)).toString() + " T";
        }
        if (_loc_6 >= 1000000000000000 && _loc_6 < 1000000000000000000) {
            return (Math.round(_loc_6 / 1000000000000 / _loc_5) / (1000 / _loc_5)).toString() + " q";
        }
        if (_loc_6 >= 1000000000000000000 && _loc_6 < 1000000000000000000000) {
            return (Math.round(_loc_6 / 1000000000000000 / _loc_5) / (1000 / _loc_5)).toString() + " Qq";
        }
        if (_loc_6 >= 1000000000000000000000 && _loc_6 < 999999999999999980000000) {
            return (Math.round(_loc_6 / 1000000000000000000 / _loc_5) / (1000 / _loc_5)).toString() + " s";
        }
        if (_loc_6 >= 999999999999999980000000 && _loc_6 < 1000000000000000000000000000) {
            return (Math.round(_loc_6 / 1000000000000000000000 / _loc_5) / (1000 / _loc_5)).toString() + " Ss";
        }
        if (_loc_6 >= 1000000000000000000000000000 && _loc_6 < 1000000000000000000000000000000) {
            return (Math.round(_loc_6 / 999999999999999980000000 / _loc_5) / (1000 / _loc_5)).toString() + " O";
        }
        if (_loc_6 >= 1000000000000000000000000000000 && _loc_6 < 999999999999999950000000000000000) {
            return (Math.round(_loc_6 / 1000000000000000000000000000 / _loc_5) / (1000 / _loc_5)).toString() + " N";
        }
        if (_loc_6 >= 999999999999999950000000000000000 && _loc_6 < 100000000000000000000000000) {
            return (Math.round(_loc_6 / 1000000000000000000000000000000 / _loc_5) / (1000 / _loc_5)).toString() + " d";
        }
        if (_loc_6 >= 100000000000000000000000000 && _loc_6 < 99999999999999991000000000000) {
            return (Math.round(_loc_6 / 999999999999999950000000000000000 / _loc_5) / (1000 / _loc_5)).toString() + " U";
        }
        if (_loc_6 >= 99999999999999991000000000000 && _loc_6 < 100000000000000010000000000000000) {
            return (Math.round(_loc_6 / 100000000000000000000000000 / _loc_5) / (1000 / _loc_5)).toString() + " Dd";
        }
        var _loc_7 = " ";
        if (param3) {
            _loc_7 = ",";
        }
        var _loc_8 = "";
        var _loc_9 = String(Math.round(param1));
        var _loc_10 = String(Math.round(param1)).length - 1;
        while (_loc_10 >= 0) {
            _loc_8 = _loc_9.charAt(_loc_10) + _loc_8;
            if (_loc_8.length == 3 && _loc_10 != 0) {
                _loc_8 = _loc_7 + _loc_8;
            }
            if (_loc_8.length == 7 && _loc_10 != 0) {
                _loc_8 = _loc_7 + _loc_8;
            }
            _loc_10 = _loc_10 - 1;
        }
        return _loc_8;
    }; // end function
    var BigNumber_1;
    BigNumber.aLetters = ["K", 3, "M", 6, "B", 9, "T", 12, "aa", 15, "bb", 18, "cc", 21, "dd", 24, "ee", 27, "ff", 30, "gg", 33, "hh", 36, "ii", 39, "jj", 42, 'kk', 45, 'll', 48, 'mm', 51, 'nn', 54, 'oo', 57, 'pp', 60, 'qq', 63, 'rr', 66, 'ss', 69, 'tt', 72, 'uu', 75, 'vv', 78, 'ww', 81, 'xx', 84, 'yy', 87, 'zz', 90, 'aaa', 93, 'bbb', 96, 'ccc', 99, 'ddd', 102, 'eee', 105, 'fff', 108, 'ggg', 111, 'hhh', 114, 'iii', 117, 'jjj', 120, 'kkk', 123, 'lll', 126, 'mmm', 129, 'nnn', 132, 'ooo', 135, 'ppp', 138, 'qqq', 141, 'rrr', 144, 'sss', 147, 'ttt', 150, 'uuu', 153, 'vvv', 156, 'www', 159, 'xxx', 162, 'yyy', 165, 'zzz'];
    BigNumber = BigNumber_1 = __decorate([
        ccclass
    ], BigNumber);
    return BigNumber;
}());
exports.default = BigNumber;

cc._RF.pop();