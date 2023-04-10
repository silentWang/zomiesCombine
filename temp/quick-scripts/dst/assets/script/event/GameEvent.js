
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZXZlbnQvR2FtZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUU3QztJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQXlDQztRQXZDRyxlQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsVUFBSSxHQUFRLElBQUksQ0FBQztRQUNqQixVQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBbUM5QixDQUFDO0lBbENHLDRCQUFRLEdBQVIsVUFBUyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDbkIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUFBLENBQUM7SUFHRiw0QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ2xCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLE9BQWQsS0FBSyxFQUFhLElBQUksRUFBRSxDQUFDO2FBQy9DO1NBQ0o7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLDhCQUFVLEdBQVYsVUFBVyxJQUFJLEVBQUUsSUFBSTtRQUNqQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztnQkFDeEIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzNCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUFBLENBQUM7SUFDTixDQUFDO0lBQUEsQ0FBQztJQUNOLGdCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsQ0F6Q3NDLG1CQUFTLEdBeUMvQzs7QUFBQSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi4vbWFuYWdlci9TaW5nbGV0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUV2ZW50IGV4dGVuZHMgU2luZ2xldG9uIHtcblxuICAgIGV2ZW50SGFzaCA9IHt9O1xuXG4gICAgb3dlcjogYW55ID0gbnVsbDtcbiAgICB0eXBlOiBhbnkgPSBudWxsO1xuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcmVnaXN0ZXIob3dlciwgdHlwZSwgY2IpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0ge307XG4gICAgICAgIGV2ZW50W1wib3dlclwiXSA9IG93ZXI7XG4gICAgICAgIGV2ZW50W1widHlwZVwiXSA9IHR5cGU7XG4gICAgICAgIGV2ZW50W1wiY2FsbGJhY2tcIl0gPSBjYjtcblxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRIYXNoLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFzaFt0eXBlXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudEhhc2hbdHlwZV0ucHVzaChldmVudCk7XG4gICAgfTtcblxuICAgIFxuICAgIGRpc3BhdGNoKHR5cGUsIC4uLmRhdGEpIHtcbiAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRIYXNoW3R5cGVdO1xuICAgICAgICBpZiAoZXZlbnRzICYmIGV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGV2ZW50cykge1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcbiAgICAgICAgICAgICAgICBldmVudC5jYWxsYmFjayAmJiAoZXZlbnQuY2FsbGJhY2soLi4uZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVucmVnaXN0ZXIob3dlciwgdHlwZSkge1xuICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudEhhc2hbdHlwZV07XG4gICAgICAgIGlmIChldmVudHMgJiYgZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQub3dlciA9PT0gb3dlciAmJiBldmVudC50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG59OyJdfQ==