
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudFxcR2FtZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUU3QztJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQTBDQztRQXhDRyxlQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsVUFBSSxHQUFRLElBQUksQ0FBQztRQUNqQixVQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBb0M5QixDQUFDO0lBbENHLDRCQUFRLEdBQVIsVUFBUyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDbkIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUFBLENBQUM7SUFHRiw0QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ2xCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLE9BQWQsS0FBSyxFQUFhLElBQUksRUFBRSxDQUFDO2FBQy9DO1NBQ0o7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLDhCQUFVLEdBQVYsVUFBVyxJQUFJLEVBQUUsSUFBSTtRQUNqQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztnQkFDeEIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzNCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUFBLENBQUM7SUFDTixDQUFDO0lBQUEsQ0FBQztJQUNOLGdCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsQ0ExQ3NDLG1CQUFTLEdBMEMvQzs7QUFBQSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi4vbWFuYWdlci9TaW5nbGV0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVFdmVudCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcblxyXG4gICAgZXZlbnRIYXNoID0ge307XHJcblxyXG4gICAgb3dlcjogYW55ID0gbnVsbDtcclxuICAgIHR5cGU6IGFueSA9IG51bGw7XHJcbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHJlZ2lzdGVyKG93ZXIsIHR5cGUsIGNiKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0ge307XHJcbiAgICAgICAgZXZlbnRbXCJvd2VyXCJdID0gb3dlcjtcclxuICAgICAgICBldmVudFtcInR5cGVcIl0gPSB0eXBlO1xyXG4gICAgICAgIGV2ZW50W1wiY2FsbGJhY2tcIl0gPSBjYjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50SGFzaC5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFzaFt0eXBlXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEhhc2hbdHlwZV0ucHVzaChldmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgZGlzcGF0Y2godHlwZSwgLi4uZGF0YSkge1xyXG4gICAgICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50SGFzaFt0eXBlXTtcclxuICAgICAgICBpZiAoZXZlbnRzICYmIGV2ZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBldmVudHNbaV07XHJcbiAgICAgICAgICAgICAgICBldmVudC5jYWxsYmFjayAmJiAoZXZlbnQuY2FsbGJhY2soLi4uZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1bnJlZ2lzdGVyKG93ZXIsIHR5cGUpIHtcclxuICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudEhhc2hbdHlwZV07XHJcbiAgICAgICAgaWYgKGV2ZW50cyAmJiBldmVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQub3dlciA9PT0gb3dlciAmJiBldmVudC50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59OyJdfQ==