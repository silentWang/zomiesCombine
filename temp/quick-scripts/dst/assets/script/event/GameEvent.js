
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event/GameEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7698aOBsGFKDogqTQs289dG', 'GameEvent');
// script/event/GameEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("../manager/Singleton");
var GameEvent = /** @class */ (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eventHash = {};
        _this.ower = null;
        _this.type = null;
        _this.callback = null;
        return _this;
    }
    GameEvent.prototype.WSjC_xxxx_fun = function () { console.log("J8Epi3J8bZiycPRpHwde4d2tpy"); };
    GameEvent.prototype.register = function (ower, type, cb) {
        var event = {};
        event["ower"] = ower;
        event["type"] = type;
        event["callback"] = cb;
        if (!this.eventHash.hasOwnProperty(type)) {
            this.eventHash[type] = [];
        }
        this.eventHash[type].push(event);
    };
    ;
    GameEvent.prototype.dispatch = function (type) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var events = this.eventHash[type];
        if (events && events.length > 0) {
            for (var i in events) {
                var event = events[i];
                event.callback && (event.callback.apply(event, data));
            }
        }
    };
    ;
    GameEvent.prototype.unregister = function (ower, type) {
        var events = this.eventHash[type];
        if (events && events.length > 0) {
            events.forEach(function (event, index) {
                if (event.ower === ower && event.type === type) {
                    events.splice(index, 1);
                }
            });
        }
        ;
        if (window && window['xxxxx'])
            window['xxxxx']("mpQRyXyQEKNcDa53tXxChwxY6dNZrnS");
    };
    ;
    return GameEvent;
}(Singleton_1.default));
exports.default = GameEvent;
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZXZlbnQvR2FtZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUU3QztJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQTJDQztRQXpDRyxlQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsVUFBSSxHQUFRLElBQUksQ0FBQztRQUNqQixVQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBcUM5QixDQUFDO0lBcENXLGlDQUFhLEdBQXJCLGNBQXlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsNEJBQVEsR0FBUixVQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNuQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQUEsQ0FBQztJQUdGLDRCQUFRLEdBQVIsVUFBUyxJQUFJO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDbEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDbEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsT0FBZCxLQUFLLEVBQWEsSUFBSSxFQUFFLENBQUM7YUFDL0M7U0FDSjtJQUNMLENBQUM7SUFBQSxDQUFDO0lBRUYsOEJBQVUsR0FBVixVQUFXLElBQUksRUFBRSxJQUFJO1FBQ2pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO2dCQUN4QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDM0I7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztRQUNGLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBQUEsQ0FBQztJQUNOLGdCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsQ0EzQ3NDLG1CQUFTLEdBMkMvQzs7QUFBQSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi4vbWFuYWdlci9TaW5nbGV0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUV2ZW50IGV4dGVuZHMgU2luZ2xldG9uIHtcblxuICAgIGV2ZW50SGFzaCA9IHt9O1xuXG4gICAgb3dlcjogYW55ID0gbnVsbDtcbiAgICB0eXBlOiBhbnkgPSBudWxsO1xuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBXU2pDX3h4eHhfZnVuKCl7IGNvbnNvbGUubG9nKFwiSjhFcGkzSjhiWml5Y1BScEh3ZGU0ZDJ0cHlcIik7IH1cbiAgICByZWdpc3Rlcihvd2VyLCB0eXBlLCBjYikge1xuICAgICAgICB2YXIgZXZlbnQgPSB7fTtcbiAgICAgICAgZXZlbnRbXCJvd2VyXCJdID0gb3dlcjtcbiAgICAgICAgZXZlbnRbXCJ0eXBlXCJdID0gdHlwZTtcbiAgICAgICAgZXZlbnRbXCJjYWxsYmFja1wiXSA9IGNiO1xuXG4gICAgICAgIGlmICghdGhpcy5ldmVudEhhc2guaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYXNoW3R5cGVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50SGFzaFt0eXBlXS5wdXNoKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgXG4gICAgZGlzcGF0Y2godHlwZSwgLi4uZGF0YSkge1xuICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudEhhc2hbdHlwZV07XG4gICAgICAgIGlmIChldmVudHMgJiYgZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgICAgICAgICAgICAgIGV2ZW50LmNhbGxiYWNrICYmIChldmVudC5jYWxsYmFjayguLi5kYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5yZWdpc3Rlcihvd2VyLCB0eXBlKSB7XG4gICAgICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50SGFzaFt0eXBlXTtcbiAgICAgICAgaWYgKGV2ZW50cyAmJiBldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5vd2VyID09PSBvd2VyICYmIGV2ZW50LnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmKHdpbmRvdyAmJiB3aW5kb3dbJ3h4eHh4J10pIHdpbmRvd1sneHh4eHgnXShcIm1wUVJ5WHlRRUtOY0RhNTN0WHhDaHd4WTZkTlpyblNcIik7XG4gICAgfTtcbn07Il19