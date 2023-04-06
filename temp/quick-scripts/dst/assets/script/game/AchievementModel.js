
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/AchievementModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34e81wFdk5IIr+RjfNcuORv', 'AchievementModel');
// script/game/AchievementModel.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var savepars = [];
function save(target, propertyKey) {
    savepars.push(propertyKey);
}
//成就
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AchievementModel = /** @class */ (function () {
    function AchievementModel() {
    }
    AchievementModel.prototype.getReadyData = function () {
        var data = {};
        for (var i = 0; i < savepars.length; ++i) {
            data[savepars[i]] = this[savepars[i]];
        }
        return data;
    };
    AchievementModel.prototype.gadsex_ewe23332_fun = function () { console.log("xvdsalv,mdspjagdsgads"); };
    AchievementModel.prototype.setData = function (data) {
        //初始化下数据       
        if (!data) {
            return;
        }
        for (var i = 0; i < savepars.length; ++i) {
            var element = data[savepars[i]];
            if (element != null || element != undefined) {
                if (Object.prototype.toString.call(element) == "[object Object]") {
                    for (var key in element) {
                        this[savepars[i]][key] = element[key];
                    }
                }
                else
                    this[savepars[i]] = element;
            }
        }
        this.gadsex_ewe23332_fun();
    };
    AchievementModel = __decorate([
        ccclass
    ], AchievementModel);
    return AchievementModel;
}());
exports.default = AchievementModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9BY2hpZXZlbWVudE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFNBQVMsSUFBSSxDQUFDLE1BQVcsRUFBRSxXQUFtQjtJQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFRCxJQUFJO0FBQ0UsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBQTtJQStCQSxDQUFDO0lBOUJVLHVDQUFZLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyw4Q0FBbUIsR0FBM0IsY0FBK0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUvRCxrQ0FBTyxHQUFkLFVBQWUsSUFBUztRQUNwQixlQUFlO1FBQ2YsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU87U0FDVjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3RDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtnQkFDekMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQWlCLEVBQUU7b0JBQzlELEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO3dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN6QztpQkFDSjs7b0JBRUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNuQztTQUNKO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQTlCZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0ErQnBDO0lBQUQsdUJBQUM7Q0EvQkQsQUErQkMsSUFBQTtrQkEvQm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxubGV0IHNhdmVwYXJzID0gW107XG5mdW5jdGlvbiBzYXZlKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG4gICAgc2F2ZXBhcnMucHVzaChwcm9wZXJ0eUtleSk7XG59XG5cbi8v5oiQ5bCxXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjaGlldmVtZW50TW9kZWwge1xuICAgIHB1YmxpYyBnZXRSZWFkeURhdGEoKTogb2JqZWN0IHtcbiAgICAgICAgdmFyIGRhdGEgPSB7fVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNhdmVwYXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBkYXRhW3NhdmVwYXJzW2ldXSA9IHRoaXNbc2F2ZXBhcnNbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnYWRzZXhfZXdlMjMzMzJfZnVuKCl7IGNvbnNvbGUubG9nKFwieHZkc2FsdixtZHNwamFnZHNnYWRzXCIpOyB9XG5cbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBhbnkpIHtcbiAgICAgICAgLy/liJ3lp4vljJbkuIvmlbDmja4gICAgICAgXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW3NhdmVwYXJzW2ldXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwgfHwgZWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsZW1lbnQpID09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tzYXZlcGFyc1tpXV1ba2V5XSA9IGVsZW1lbnRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc2F2ZXBhcnNbaV1dID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhZHNleF9ld2UyMzMzMl9mdW4oKTtcbiAgICB9XG59Il19