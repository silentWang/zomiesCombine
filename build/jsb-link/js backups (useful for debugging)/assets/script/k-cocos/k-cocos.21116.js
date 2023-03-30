(function() {
"use strict";
var e = window.cc;
e.log("k-cocos v0.1");
e.director._kSpeed = 1;
var t = e.Director.prototype.calculateDeltaTime;
e.director.calculateDeltaTime = function(e) {
t.call(this, e);
this._deltaTime *= this._kSpeed;
};
e.kSpeed = function(t) {
e.director._kSpeed = t;
};
e.kGetSpeed = function() {
return e.director._kSpeed;
};
e.kMultTouch = function(t) {
if (e.internal && e.internal.inputManager) e.internal.inputManager._maxTouches = t; else {
_cc && _cc.inputManager && (_cc.inputManager._maxTouches = t);
CC_QQPLAY && BK && BK.inputManager && (BK.inputManager._maxTouches = t);
}
};
e.kSimpleMove = e.Class({
name: "cc_kSimpleMove",
extends: e.Component,
properties: {
speed_x: 0,
speed_y: 0,
accelerate_x: 0,
accelerate_y: 0,
hasAim: !1,
aimPos_x: 0,
aimPos_y: 0
},
editor: {
executionOrder: 9999
},
getMoveSpeed: function() {
return new e.Vec2(this.speed_x, this.speed_y);
},
setMoveSpeed: function(e, t) {
if (e && "object" == typeof e) {
this.speed_x = e.x || 0;
this.speed_y = e.y || 0;
} else {
this.speed_x = e || 0;
this.speed_y = t || 0;
}
},
getAccelerate: function() {
return new e.Vec2(this.accelerate_x, this.accelerate_y);
},
setAccelerate: function(e, t) {
if (e && "object" == typeof e) {
this.accelerate_x = e.x || 0;
this.accelerate_y = e.y || 0;
} else {
this.accelerate_x = e || 0;
this.accelerate_y = t || 0;
}
},
setDestination: function(e, t, i) {
this.aimPos_x = e.x || 0;
this.aimPos_y = e.y || 0;
t = t || 0;
i = i || 0;
var s = this.aimPos_x - this.node.x, n = this.aimPos_y - this.node.y, a = Math.sqrt(s * s + n * n), r = s / a, h = n / a;
this.setMoveSpeed(t * r, t * h);
this.setAccelerate(i * r, i * h);
this.hasAim = !0;
},
update: function(e) {
this.speed_x += this.accelerate_x;
this.speed_y += this.accelerate_y;
if (this.hasAim) {
var t = this.aimPos_x > this.node.x ? 1 : -1, i = this.aimPos_y > this.node.y ? 1 : -1;
this.node.x += this.speed_x * e;
this.node.y += this.speed_y * e;
var s = this.aimPos_x > this.node.x ? 1 : -1, n = this.aimPos_y > this.node.y ? 1 : -1;
if (t * s < 0 || i * n < 0) {
this.hasAim = !1;
this.node.x = this.aimPos_x;
this.node.y = this.aimPos_y;
this.setAccelerate(0, 0);
this.setMoveSpeed(0, 0);
}
} else {
this.node.x += this.speed_x * e;
this.node.y += this.speed_y * e;
}
}
});
e.kNode = function(t) {
t.kTag = 0;
t.kInfo = "init";
t._kState = "init";
Object.defineProperties(t, {
kState: {
get() {
return this._kState;
},
set(e) {
var t = this._kState;
this._kState = e;
this.kStateCb && this.kStateCb(e, t);
}
},
kComponents: {
get() {
return this._components;
},
set(t) {
e.error("can not set kComponents, please use addComponent()");
}
},
kFirstChild: {
get() {
return this.children[0];
},
set(t) {
e.error("can not set kFirstChild, please use addChild()");
}
},
kSecondChild: {
get() {
return this.children[1];
},
set(t) {
e.error("can not set kSecondChild, please use addChild()");
}
},
kThirdChild: {
get() {
return this.children[2];
},
set(t) {
e.error("can not set kThirdChild, please use addChild()");
}
},
kLastChild: {
get() {
return this.children[this.childrenCount - 1];
},
set(t) {
e.error("can not set kFirstChild, please use addChild()");
}
}
});
t.kHitTest = function(e) {
this._hitTest = e;
};
return t;
};
})();