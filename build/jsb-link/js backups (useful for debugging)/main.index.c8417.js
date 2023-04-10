window.__require = function t(e, i, n) {
function o(a, c) {
if (!i[a]) {
if (!e[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var u = i[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return o(e[a][1][t] || t);
}, u, u.exports, t, e, i, n);
}
return i[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) o(n[a]);
return o;
}({
AchievementModel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "34e81wFdk5IIr+RjfNcuORv", "AchievementModel");
var n = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = [], r = cc._decorator, a = r.ccclass, c = (r.property, function() {
function t() {}
t.prototype.getReadyData = function() {
for (var t = {}, e = 0; e < o.length; ++e) t[o[e]] = this[o[e]];
return t;
};
t.prototype.gadsex_ewe23332_fun = function() {
console.log("xvdsalv,mdspjagdsgads");
};
t.prototype.setData = function(t) {
if (t) {
for (var e = 0; e < o.length; ++e) {
var i = t[o[e]];
if (null != i || null != i) if ("[object Object]" == Object.prototype.toString.call(i)) for (var n in i) this[o[e]][n] = i[n]; else this[o[e]] = i;
}
this.gadsex_ewe23332_fun();
}
};
return n([ a ], t);
}());
i.default = c;
cc._RF.pop();
}, {} ],
AdCenter: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "04f46M4nKZHVpGCqJxlR4+3", "AdCenter");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("./Singleton"), a = t("../utils/Utils"), c = t("../utils/Native"), s = (window.tt, 
function(t) {
o(e, t);
function e() {
var e = t.call(this) || this;
e._lastPlayTime = 0;
return e;
}
e.prototype.play = function(t, e) {
void 0 === e && (e = "b64242a9655d0f");
if (a.default.getServerTime() - this._lastPlayTime < 1e3) console.log("点击过于频繁"); else {
this._lastPlayTime = a.default.getServerTime();
cc.sys.os === cc.sys.OS_IOS ? c.Native.playVideoAd(t, e) : t && t(1);
}
};
e.prototype.showGridAd = function() {
c.Native.showBannerAd("b64242ab164d72");
};
e.prototype.hideGridAd = function() {
c.Native.hideBannerAd();
};
e.prototype.showInterstitialAd = function(t) {
void 0 === t && (t = "b64242a8c01cdc");
c.Native.showInterstitialAd(t);
};
return e;
}(r.default));
i.default = s;
cc._RF.pop();
}, {
"../utils/Native": "Native",
"../utils/Utils": "Utils",
"./Singleton": "Singleton"
} ],
AudioMgr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c4310qOOsJLaZuNAeTaQNgO", "AudioMgr");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("../manager/Singleton"), s = t("./Utils"), l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bgmVolume = 1;
e.sfxVolume = 1;
e.bgm_url = "";
e.bgmAudioID = -1;
e.audioId = -1;
e.lastplaytime = {};
e.soundcd = {
huangshulang: 1500,
huli: 1500,
hit: 300,
merge_success: 100,
skill_freeze: 300,
skill_slow: 300
};
return e;
}
e.prototype.loadSounds = function() {
var t = this, e = cc.sys.localStorage.getItem("bgmVolume"), i = cc.sys.localStorage.getItem("sfxVolume");
this.bgmVolume = 0 == e ? Number(e) : 1;
this.sfxVolume = 0 == i ? Number(i) : 1;
console.log("loadSounds", this.bgmVolume, this.sfxVolume);
cc.log(this.bgmVolume, this.sfxVolume);
cc.loader.loadResDir("sounds", function() {
t.playMusic("BGM1");
});
};
e.prototype.playMusic = function(t) {
return r(this, void 0, void 0, function() {
var e;
return a(this, function(i) {
switch (i.label) {
case 0:
if (this.bgm_url == t) return [ 3, 2 ];
this.bgm_url = t;
return [ 4, s.default.loadRes("sounds:" + t, cc.AudioClip) ];

case 1:
e = i.sent();
this.bgmAudioID >= 0 && cc.audioEngine.stop(this.bgmAudioID);
this.bgmVolume > 0 && (this.bgmAudioID = cc.audioEngine.play(e, !0, this.bgmVolume));
i.label = 2;

case 2:
return [ 2 ];
}
});
});
};
e.prototype.setMXVolume = function(t, e) {
void 0 === e && (e = !1);
if (this.sfxVolume != t || e) {
cc.sys.localStorage.setItem("sfxVolume", t);
this.sfxVolume = t;
}
};
e.prototype.stopMX = function(t) {
return cc.audioEngine.stop(t);
};
e.prototype.playMX = function(t) {
return r(this, void 0, void 0, function() {
var e, i;
return a(this, function(n) {
switch (n.label) {
case 0:
this.lastplaytime[t] || (this.lastplaytime[t] = 0);
e = this.soundcd[t] || 0;
if (new Date().getTime() - this.lastplaytime[t] < e) return [ 2 ];
this.lastplaytime[t] = new Date().getTime();
return [ 4, s.default.loadRes("sounds:" + t, cc.AudioClip) ];

case 1:
if ((i = n.sent()) && this.sfxVolume > 0) {
this.audioId = cc.audioEngine.play(i, !1, this.sfxVolume);
return [ 2, this.audioId ];
}
return [ 2 ];
}
});
});
};
e.prototype.setMusicVolume = function(t, e) {
void 0 === e && (e = !1);
if (this.bgmVolume != t || e) {
cc.sys.localStorage.setItem("bgmVolume", t);
this.bgmVolume = t;
cc.audioEngine.setVolume(this.bgmAudioID, t);
}
this.bgmAudioID >= 0 ? t > 0 ? cc.audioEngine.resume(this.bgmAudioID) : cc.audioEngine.pause(this.bgmAudioID) : this.playMusic(this.bgm_url);
};
e.prototype.resumMusic = function() {
this.bgmAudioID >= 0 && cc.audioEngine.resume(this.bgmAudioID);
};
e.prototype.pauseMusic = function() {
this.bgmAudioID >= 0 && cc.audioEngine.pause(this.bgmAudioID);
};
return e;
}(c.default);
i.default = l;
cc._RF.pop();
}, {
"../manager/Singleton": "Singleton",
"./Utils": "Utils"
} ],
BaseUI: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "da6ddR8mzFCtI19mMwKxBRP", "BaseUI");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, s = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
var n = Array(t), o = 0;
for (e = 0; e < i; e++) for (var r = arguments[e], a = 0, c = r.length; a < c; a++, 
o++) n[o] = r[a];
return n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var l = t("../event/GameEvent"), u = t("../utils/Utils"), h = cc._decorator, d = h.ccclass, f = (h.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.events = [];
e._create_time = 0;
e.m_objects = new Map();
return e;
}
i = e;
e.prototype.onUIClicked = function(t) {
switch (t.target.name) {
case "btn_close":
this.closeUI();
}
};
e.prototype.onLoad = function() {
this.events = [];
this.node.getComponent(cc.Button) && u.default.addClickEvent(this.node, this.node, cc.js.getClassName(this), "onUIClicked", this.node.getComponent(cc.Button).target);
this._addClickEvent(this.node);
this._create_time = u.default.getServerTime();
};
e.prototype.fixRedCoinForShow = function(t, e, i) {
void 0 === e && (e = 4);
void 0 === i && (i = 100);
var n = t / i;
n > 1 && (e = 2);
var o = n.toFixed(e);
if (4 == e) {
for (var r = o.length, a = r - 1, c = r - 1; c > r - 3; c--) 0 == parseInt(o[c]) && (a = c);
o = o.substr(0, a);
}
return o;
};
e.prototype._isSkipNode = function(t) {
return this.node != t && null != t.getComponent(i);
};
e.prototype._findInChildren = function(t, e) {
var i = t.getChildByName(e);
if (i) return i;
if (0 == t.childrenCount) return null;
for (var n = 0; n < t.childrenCount; ++n) {
var o = this._findInChildren(t.children[n], e);
if (o) return o;
}
return null;
};
e.prototype.SetSprite = function(t, e) {
return a(this, void 0, void 0, function() {
var i = this;
return c(this, function() {
return [ 2, new Promise(function(n) {
var o = i.GetSprite(t);
o && u.default.loadRes(e, cc.SpriteFrame).then(function(t) {
if (cc.isValid(i.node)) {
o.spriteFrame = t;
n(null);
}
});
}) ];
});
});
};
e.prototype.GetGameObject = function(t, e) {
void 0 === e && (e = !1);
if (!cc.isValid(this.node)) return null;
if (!e) {
if (this.m_objects && this.m_objects.has(t)) return this.m_objects[t];
if (t == this.node.name) return this.node;
}
if (-1 != t.indexOf("/")) {
(i = cc.find(t, this.node)) && (this.m_objects[t] = i);
return i;
}
var i;
(i = this._findInChildren(this.node, t)) && (this.m_objects[t] = i);
return i;
};
e.prototype.GetDragonAmature = function(t) {
if (this.m_objects && this.m_objects.has(t)) return this.m_objects[t].getComponent(sp.Skeleton);
var e = this.GetGameObject(t);
return e ? e.getComponent(dragonBones.ArmatureDisplay) : null;
};
e.prototype.GetSkeleton = function(t) {
if (this.m_objects && this.m_objects.has(t)) return this.m_objects[t].getComponent(sp.Skeleton);
var e = this.GetGameObject(t);
return e ? e.getComponent(sp.Skeleton) : null;
};
e.prototype.GetSprite = function(t) {
if (this.m_objects && this.m_objects.has(t)) return this.m_objects[t].getComponent(cc.Sprite);
var e = this.GetGameObject(t);
return e ? e.getComponent(cc.Sprite) : null;
};
e.prototype.GetText = function(t) {
if (this.m_objects && this.m_objects.has(t)) return this.m_objects[t].getComponent(cc.Label);
var e = this.GetGameObject(t);
return e ? e.getComponent(cc.Label) : null;
};
e.prototype.GetProgressBar = function(t) {
if (this.m_objects && this.m_objects.has(t)) return this.m_objects[t].getComponent(cc.ProgressBar);
var e = this.GetGameObject(t);
return e ? e.getComponent(cc.ProgressBar) : null;
};
e.prototype.GetButton = function(t) {
if (this.m_objects && this.m_objects.has(t)) return this.m_objects[t].getComponent(cc.Button);
var e = this.GetGameObject(t);
return e ? e.getComponent(cc.Button) : null;
};
e.prototype.GetInputField = function(t) {
if (this.m_objects && this.m_objects.has(t)) return this.m_objects[t].getComponent(cc.EditBox);
var e = this.GetGameObject(t);
return e ? e.getComponent(cc.EditBox) : null;
};
e.prototype.SetProgressBar = function(t, e) {
this.GetProgressBar(t) && (this.GetProgressBar(t).progress = e);
};
e.prototype.SetText = function(t, e) {
this.GetText(t) && (this.GetText(t).string = e);
};
e.prototype.GetSlider = function(t) {
if (this.m_objects && this.m_objects.has(t)) return this.m_objects[t].getComponent(cc.Slider);
var e = this.GetGameObject(t);
return e ? e.getComponent(cc.Slider) : null;
};
e.prototype.SetInputText = function(t, e) {
this.GetInputField(t) && (this.GetInputField(t).string = e);
};
e.prototype.getChildByName = function(t, e) {
return cc.find(t, e || this.node);
};
e.prototype._addClickEvent = function(t) {
if (!this._isSkipNode(t)) for (var e = 0; e < t.childrenCount; ++e) {
var i = t.children[e];
if (!this._isSkipNode(i)) {
i.getComponent(cc.Button) && u.default.addClickEvent(i, this.node, cc.js.getClassName(this), "onUIClicked", i.getComponent(cc.Button).target);
this._addClickEvent(i);
}
}
};
e.prototype.shutAnim = function() {
if (this.node) {
this.node.active = !1;
this.node.parent = null;
this.node.destroy();
}
};
e.prototype.startAnim = function() {
if (this.node) {
this.node.opacity = 0;
this.node.active = !0;
this.node.setScale(.8, .8);
var t = cc.delayTime(.1), e = cc.fadeIn(.1), i = cc.scaleTo(.1, 1);
this.node.runAction(cc.spawn(t.clone(), e, t.clone(), i));
}
};
e.prototype.closeUI = function() {
this.shutAnim();
};
e.prototype.onDestroy = function() {
for (var t = 0; t < this.events.length; ++t) l.default.Instance().unregister(this, this.events[t]);
};
e.prototype.playSkeAni = function(t, e, i, n, o) {
void 0 === o && (o = -1);
return a(this, void 0, void 0, function() {
var r, a, s;
return c(this, function(c) {
switch (c.label) {
case 0:
(r = new cc.Node()).parent = i;
r.position = n;
a = r.addComponent(sp.Skeleton);
return [ 4, u.default.loadRes(t, sp.SkeletonData) ];

case 1:
s = c.sent();
a.skeletonData = s;
a.premultipliedAlpha = !1;
a.setAnimation(0, e, !1);
-1 != o && r.runAction(cc.sequence(cc.delayTime(o), cc.callFunc(function() {
r.parent = null;
})));
return [ 2, r ];
}
});
});
};
e.prototype.rigester = function(t, e) {
this.events.push(t);
l.default.Instance().register(this, t, e);
};
e.prototype.unregister = function(t) {
l.default.Instance().unregister(this, t);
};
e.prototype.dispatch = function(t) {
for (var e, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
(e = l.default.Instance()).dispatch.apply(e, s([ t ], i));
};
var i;
return i = r([ d ], e);
}(cc.Component));
i.default = f;
cc._RF.pop();
}, {
"../event/GameEvent": "GameEvent",
"../utils/Utils": "Utils"
} ],
BossCommingUI: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d79a1IGYc5Ds7RQV9hCY0sd", "BossCommingUI");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../utils/AudioMgr"), s = cc._decorator, l = s.ccclass, u = (s.property, 
function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
var t = this;
c.default.Instance().playMX("Arlam");
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
t.closeUI();
})));
};
return r([ l ], e);
}(a.default));
i.default = u;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../utils/AudioMgr": "AudioMgr"
} ],
Bullet: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7b304r11c5BdrPI27Yo4iN5", "Bullet");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../framwork/BaseUI"), l = t("../../utils/AudioMgr"), u = t("../../utils/Utils"), h = t("../Config"), d = t("./Enemy"), f = cc._decorator, p = f.ccclass, _ = (f.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.target = null;
e.sped = 700;
e.plantlv = 0;
e.skillType = 0;
return e;
}
e.prototype.start = function() {};
e.prototype.update = function(t) {
t > 1 && (t = 1);
if (this.target) {
var e = this.target.position.add(cc.v3(0, 80, 0)).sub(this.node.position);
if (e.mag() < this.sped * t * 2) {
this.target.getComponent(d.default).hit(this.plantlv, this.skillType);
this.node.destroy();
this.node.removeFromParent(!0);
return;
}
var i = e.normalize().mul(this.sped * t);
this.node.position = this.node.position.add(i);
this.node.angle = 180 - 180 * cc.v2(e.x, e.y).signAngle(cc.v2(1, 0)) / Math.PI;
} else this.node.removeFromParent(!0);
};
e.prototype.pGDA_xxxx_fun = function() {
console.log("Zkp");
};
e.prototype.getBulletType = function() {
var t = h.Config_chick[this.plantlv - 1], e = String(t[3]).split("|"), i = Number(e[0]), n = Number(e[1]);
if (u.default.getRandom(0, 100) < n) return i;
};
e.prototype.setInfo = function(t, e) {
return a(this, void 0, void 0, function() {
var i, n;
return c(this, function() {
e = Math.min(e, 60);
this.plantlv = e;
this.target = t;
this.skillType = this.getBulletType();
1 == this.skillType ? l.default.Instance().playMX("skill5") : 2 == this.skillType ? l.default.Instance().playMX("skill3") : 3 == this.skillType ? l.default.Instance().playMX("skill2") : l.default.Instance().playMX("skill1");
this.resetBullet();
i = !(i = h.Config_chick[e - 1][8]) || i > 5 ? 1 : i;
n = this.GetDragonAmature("bsp" + i);
this.GetGameObject("bsp" + i).active = !0;
n.armatureName = "Armature";
n.playAnimation("bullet" + i, 0);
return [ 2 ];
});
});
};
e.prototype.pESGDSEX_xxxx_fun = function() {
console.log("Zkpetsdgvse");
};
e.prototype.resetBullet = function() {
this.GetGameObject("bsp1").active = !1;
this.GetGameObject("bsp2").active = !1;
this.GetGameObject("bsp3").active = !1;
this.GetGameObject("bsp4").active = !1;
this.GetGameObject("bsp5").active = !1;
};
return r([ p ], e);
}(s.default));
i.default = _;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils",
"../Config": "Config",
"./Enemy": "Enemy"
} ],
ChickData: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "10f921qnC9M4LHQ67bEgyQe", "ChickData");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../game/UserModel"), o = t("../utils/Utils"), r = t("../utils/AudioMgr"), a = t("../game/GameConst"), c = function() {
function t() {}
t.savedata = function(t, e) {
void 0 === e && (e = !1);
cc.sys.localStorage.setItem("savedatatime", o.default.getServerTime());
var i = JSON.stringify(t);
cc.sys.localStorage.setItem(a.default.cache_chick_data_key, i);
};
t.prototype.Dgdse_ew332_fun = function() {
console.log("521ga56sd1g6sda51g5");
};
t.save = function(e) {
void 0 === e && (e = !1);
t.resetOneDayData();
var i = {};
i.user = t.user.getAllData();
t.savedata(i, e);
};
t.prototype.ANhp_xxxx_fun = function() {
console.log("QfHBEHAifX8iAzz5d");
};
t.resetOneDayData = function() {
var e = parseInt(cc.sys.localStorage.getItem("savedatatime"));
if (e > 0 && new Date(o.default.getServerTime()).getDate() != new Date(e).getDate()) {
t.user.share_times = 10;
t.user.today_getcoin_times = 0;
t.user.today_getchick_times = 0;
}
};
t.prototype.KGXM_xxxx_fun = function() {
console.log("D7G");
};
t.loadData = function() {
var e = cc.sys.localStorage.getItem(a.default.cache_chick_data_key);
if (e) {
e = JSON.parse(e);
t.user.setData(e.user);
this.resetOneDayData();
} else {
cc.sys.localStorage.setItem("bgmVolume", 1);
cc.sys.localStorage.setItem("sfxVolume", 1);
r.default.Instance().sfxVolume = 1;
r.default.Instance().bgmVolume = 1;
}
};
t.user = new n.default();
return t;
}();
i.default = c;
cc._RF.pop();
}, {
"../game/GameConst": "GameConst",
"../game/UserModel": "UserModel",
"../utils/AudioMgr": "AudioMgr",
"../utils/Utils": "Utils"
} ],
ChickItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "355f4XZe/RBRJ8+tAFgopFf", "ChickItem");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../framwork/BaseUI"), l = t("../manager/ChickData"), u = t("../utils/Utils"), h = t("./Config"), d = t("./HallScene"), f = t("./prefab/Bullet"), p = cc._decorator, _ = p.ccclass, m = (p.executeInEditMode, 
p.property), y = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bullet_pre = null;
e.index = -1;
e.linkItem = null;
e.datacopy = null;
e.bDrag = !1;
e.droptype = 0;
e.droptype0endtime = 0;
e.curplayani = "";
e.cd = 0;
e.lastfire = 0;
return e;
}
e.prototype.start = function() {
this.GetDragonAmature("chick").addEventListener(dragonBones.EventObject.COMPLETE, this.animComplete, this);
};
e.prototype.setItemData = function(t, e) {
void 0 === e && (e = -1);
-1 != e && (this.droptype = e);
0 != this.droptype && this.droptype0endtime < u.default.getServerTime() && (this.droptype0endtime = u.default.getServerTime() + 1e4);
if (!this.datacopy || !t || this.datacopy.index != t.index || this.datacopy.lv != t.lv || this.datacopy.open != t.open) {
this.datacopy = t ? JSON.parse(JSON.stringify(t)) : null;
this.datacopy && (this.datacopy.index = this.index);
this.updateItem();
}
};
e.prototype.updateItem = function() {
return a(this, void 0, void 0, function() {
var t;
return c(this, function(e) {
switch (e.label) {
case 0:
t = null == this.datacopy;
this.GetGameObject("level_1").active = !t;
if (t) {
this.GetGameObject("chick").active = !1;
this.GetGameObject("lbl_lv").active = !1;
this.GetGameObject("flower1").active = !1;
return [ 2 ];
}
if (t) return [ 3, 3 ];
this.GetGameObject("lbl_lv").getComponent(cc.Label).string = "lv." + this.datacopy.lv;
if (0 != this.droptype) return [ 3, 2 ];
this.GetGameObject("chick").active = !0;
this.GetGameObject("lbl_lv").active = !0;
this.GetGameObject("flower1").active = !1;
return [ 4, this.produceChick() ];

case 1:
e.sent();
return [ 3, 3 ];

case 2:
this.GetGameObject("chick").active = !1;
this.GetGameObject("lbl_lv").active = !1;
this.GetGameObject("flower1").active = !0;
this.showPot("spine:pot1");
e.label = 3;

case 3:
return [ 2 ];
}
});
});
};
e.prototype.showPot = function() {
return a(this, void 0, void 0, function() {
var t;
return c(this, function() {
this.curplayani = "pot1_idle";
(t = this.GetDragonAmature("flower1")).playAnimation("fall", 1);
this.node.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
t.playAnimation("idle", 0);
})));
return [ 2 ];
});
});
};
e.prototype.produceChick = function() {
return a(this, void 0, void 0, function() {
var t, e, i, n, o, r, a, s;
return c(this, function(c) {
switch (c.label) {
case 0:
t = h.Config_chick[Math.min(this.datacopy.lv - 1, 59)];
this.cd = Number(t[1]);
e = this.datacopy.lv + "_idleL";
if (this.curplayani == e) return [ 3, 3 ];
this.curplayani = e;
i = Math.min(this.datacopy.lv, 60);
n = "spine:flower" + i + "_ske";
o = "spine:flower" + i + "_tex";
r = this.GetDragonAmature("chick");
a = r;
return [ 4, u.default.loadRes(n, dragonBones.DragonBonesAsset) ];

case 1:
a.dragonAsset = c.sent();
s = r;
return [ 4, u.default.loadRes(o, dragonBones.DragonBonesAtlasAsset) ];

case 2:
s.dragonAtlasAsset = c.sent();
r.armatureName = "Armature";
r.playAnimation("idleL", 0);
c.label = 3;

case 3:
return [ 2 ];
}
});
});
};
e.prototype.animComplete = function(t) {
if (t.type == dragonBones.EventObject.COMPLETE) {
var e = this.GetDragonAmature("chick");
if ("atkR" == e.animationName) {
e.playAnimation("idleR", 0);
this.curplayani = "idleR";
} else if ("atkL" == e.animationName) {
e.playAnimation("idleL", 0);
this.curplayani = "idleL";
}
}
};
e.prototype.getTarget = function() {
for (var t = d.default.Instance.enemylist, e = null, i = 600, n = 0; n < t.length; ++n) if (!(t[n].x < -cc.winSize.width / 2)) {
var o = t[n].position.sub(this.node.position).mag();
if (o < i) {
e = t[n];
i = o;
}
}
return e;
};
e.prototype.update = function(t) {
var e = this;
t > 1 && (t = 1);
var i = this.GetDragonAmature("chick");
if (this.datacopy && 0 == this.droptype && l.default.user.double_att_time > u.default.getServerTime()) {
i && (i.timeScale = 1.5);
this.GetGameObject("kb").active = !0;
} else {
i && (i.timeScale = 1);
this.GetGameObject("kb").active = !1;
}
if (0 != this.droptype && u.default.getServerTime() > this.droptype0endtime) {
this.droptype = 0;
this.updateItem();
}
if (!this.bDrag && this.datacopy && 0 == this.droptype) {
this.lastfire += t;
if (this.lastfire >= this.cd / (l.default.user.double_att_time > u.default.getServerTime() ? 2 : 1)) {
this.lastfire = 0;
var n = this.getTarget();
n && this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
if (!e.bDrag && e.datacopy) {
var t = cc.instantiate(e.bullet_pre);
t.position = e.node.position.add(n.x > e.node.x ? cc.v3(30, 35, 0) : cc.v3(-30, 35, 0));
t.parent = d.default.Instance.GetGameObject("node_bullet");
t.getComponent(f.default).setInfo(n, e.datacopy.lv);
if (n.x > e.node.x) {
i.playAnimation("atkR", 1);
e.curplayani = "atkR";
} else {
i.playAnimation("atkL", 1);
e.curplayani = "atkL";
}
}
})));
}
}
};
r([ m(cc.Prefab) ], e.prototype, "bullet_pre", void 0);
return r([ _ ], e);
}(s.default);
i.default = y;
cc._RF.pop();
}, {
"../framwork/BaseUI": "BaseUI",
"../manager/ChickData": "ChickData",
"../utils/Utils": "Utils",
"./Config": "Config",
"./HallScene": "HallScene",
"./prefab/Bullet": "Bullet"
} ],
CoinNotEnoughUI: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e5b6f4QML1AbaLoQd7JYOMJ", "CoinNotEnoughUI");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../framwork/BaseUI"), l = t("../../manager/AdCenter"), u = t("../../manager/ChickData"), h = t("../../manager/WxCenter"), d = t("../../utils/AudioMgr"), f = t("../../utils/NumberUtils"), p = t("../../utils/Utils"), _ = t("../Config"), m = t("../HallScene"), y = cc._decorator, g = y.ccclass, v = y.property, b = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbl_times = null;
e.lbl_chickname = null;
return e;
}
e.prototype.start = function() {
l.default.Instance().showGridAd();
p.default.playBreath(this.GetGameObject("btn_ad"));
};
e.prototype.setViewType = function(t) {
return a(this, void 0, void 0, function() {
var e, i, n, o, r, a, s, l;
return c(this, function(c) {
switch (c.label) {
case 0:
this.type = t;
this.GetGameObject("getChick").active = 1 == t;
this.GetGameObject("getCoin").active = 2 == t;
e = "";
if (1 != t) return [ 3, 3 ];
e = u.default.user.today_getchick_times + "/" + u.default.user.today_getchick_total;
s = u.default.user.getLvlMax() - 3 > 0 ? u.default.user.getLvlMax() - 3 : 1;
i = "spine:flower" + s + "_ske";
n = "spine:flower" + s + "_tex";
o = this.GetDragonAmature("chick");
r = o;
return [ 4, p.default.loadRes(i, dragonBones.DragonBonesAsset) ];

case 1:
r.dragonAsset = c.sent();
a = o;
return [ 4, p.default.loadRes(n, dragonBones.DragonBonesAtlasAsset) ];

case 2:
a.dragonAtlasAsset = c.sent();
o.armatureName = "Armature";
o.playAnimation("idleL", 0);
this.lbl_chickname.string = "“" + _.Config_chick[s - 1][7] + "”";
this.SetText("lbl_effect", "x1");
return [ 3, 4 ];

case 3:
if (2 == t) {
e = u.default.user.today_getcoin_times + "/" + u.default.user.today_getcoin_total;
s = u.default.user.getLvlMax() - 1 > 0 ? u.default.user.getLvlMax() - 1 : 1;
l = .5 * u.default.user.buyChickPrice(s);
this.SetText("lbl_effect", "+" + f.default.getLargeString(p.default.fixFloat(l)));
}
c.label = 4;

case 4:
h.default.aldReport("LackShow", "show");
this.lbl_times.string = "当日次数" + e;
return [ 2 ];
}
});
});
};
e.prototype.addCoin = function() {
var t = this.type;
if (1 == t) {
u.default.user.today_getchick_times++;
var e = u.default.user.getLvlMax() - 3 > 0 ? u.default.user.getLvlMax() - 3 : 1;
m.default.Instance.buyChick(e, 2);
u.default.save();
this.closeUI();
} else if (2 == t) {
u.default.user.today_getcoin_times++;
var i = .5 * u.default.user.buyChickPrice(u.default.user.getLvlMax());
d.default.Instance().playMX("coin");
p.default.flyAnim(0, this.node, "icon_coin", p.default.getRandomInt(5, 10), 100, function(t) {
t && (u.default.user.coin += i);
u.default.save();
});
this.closeUI();
}
};
e.prototype.onUIClicked = function(t) {
var e = this, i = t.target.name;
d.default.Instance().playMX("click");
switch (i) {
case "btn_close":
case "btn_normal":
this.closeUI();
break;

case "btn_ad":
h.default.aldReport("LackClick", "click");
l.default.Instance().play(function(t) {
t && e.addCoin();
});
}
};
e.prototype.onDestroy = function() {
l.default.Instance().hideGridAd();
t.prototype.onDestroy.call(this);
};
r([ v(cc.Label) ], e.prototype, "lbl_times", void 0);
r([ v(cc.Label) ], e.prototype, "lbl_chickname", void 0);
return r([ g ], e);
}(s.default);
i.default = b;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../manager/WxCenter": "WxCenter",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/NumberUtils": "NumberUtils",
"../../utils/Utils": "Utils",
"../Config": "Config",
"../HallScene": "HallScene"
} ],
CommonView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "039ebY1Zw9E6qK2t7IVVW/N", "CommonView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.EADLAYER = i.MAX_DOUBLE_ATT_TIME = i.MAX_DROP_PLANT_TIME = i.MAX_DOUBLE_INCOME_TIME = i.MAX_AUTO_COM_TIME = void 0;
var a, c = t("../../framwork/BaseUI"), s = t("../../framwork/MsgToast"), l = t("../../manager/AdCenter"), u = t("../../manager/ChickData"), h = t("../../manager/WxCenter"), d = t("../../utils/AudioMgr"), f = t("../../utils/Utils"), p = cc._decorator, _ = p.ccclass;
p.property;
(function(t) {
t[t.DOUBLE_ATT = 0] = "DOUBLE_ATT";
t[t.DOUBLE_INCOME = 1] = "DOUBLE_INCOME";
t[t.AUTO_COM = 2] = "AUTO_COM";
t[t.DROP_PLANT = 3] = "DROP_PLANT";
})(a || (a = {}));
i.EADLAYER = a;
i.MAX_AUTO_COM_TIME = 4;
i.MAX_DOUBLE_INCOME_TIME = 4;
i.MAX_DROP_PLANT_TIME = 20;
i.MAX_DOUBLE_ATT_TIME = 1;
var m = function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
l.default.Instance().showGridAd();
f.default.playBreath(this.GetGameObject("btn_ad"));
};
e.prototype.onDestroy = function() {
l.default.Instance().hideGridAd();
t.prototype.onDestroy.call(this);
};
e.prototype.update = function(t) {
t > 1 && (t = 1);
var e = this.getEMTime(), i = e.end_time;
e.max;
if (i > f.default.getServerTime()) {
var n = i - f.default.getServerTime();
this.SetText("lbl_time", f.default.getTimeStrByS(n / 1e3));
} else this.SetText("lbl_time", "");
};
e.prototype.MTZa_xxxx_fun = function() {
console.log("t87Fj7Bpwx");
};
e.prototype.getEMTime = function() {
var t = 0, e = 0;
if (this.type == a.AUTO_COM) {
t = u.default.user.auto_com_time;
e = i.MAX_AUTO_COM_TIME;
} else if (this.type == a.DOUBLE_ATT) {
t = u.default.user.double_att_time;
e = i.MAX_DOUBLE_ATT_TIME;
} else if (this.type == a.DOUBLE_INCOME) {
t = u.default.user.double_income_time;
e = i.MAX_DOUBLE_INCOME_TIME;
} else if (this.type == a.DROP_PLANT) {
t = u.default.user.drop_plant_time;
e = i.MAX_DROP_PLANT_TIME;
}
return {
end_time: t,
max: e
};
};
e.prototype.setType = function(t) {
this.type = t;
this.GetGameObject("icon_fast").active = t == a.DROP_PLANT;
this.GetGameObject("icon_auto_merge").active = t == a.AUTO_COM;
this.GetGameObject("icon_income").active = t == a.DOUBLE_INCOME;
this.GetGameObject("icon_angre").active = t == a.DOUBLE_ATT;
if (this.type == a.AUTO_COM) {
this.SetText("lbl_effect", "+" + i.MAX_AUTO_COM_TIME + "分钟");
h.default.aldReport("AutoShow", "show");
} else if (this.type == a.DOUBLE_ATT) {
this.SetText("lbl_effect", "+" + 60 * i.MAX_DOUBLE_ATT_TIME + "秒");
this.SetText("lbl_d", "进入打鸡血状态  持续" + 60 * i.MAX_DOUBLE_ATT_TIME + "秒");
h.default.aldReport("RageShow", "show");
} else if (this.type == a.DOUBLE_INCOME) {
this.SetText("lbl_effect", "+" + i.MAX_DOUBLE_INCOME_TIME + "分钟");
h.default.aldReport("DoubleShow", "show");
} else if (this.type == a.DROP_PLANT) {
this.SetText("lbl_effect", "+" + i.MAX_DROP_PLANT_TIME + "分钟");
h.default.aldReport("DropShow", "show");
}
var e = this.getEMTime();
e.end_time;
e.max, f.default.getServerTime();
};
e.prototype.addCoin = function(t) {
void 0 === t && (t = 1);
var e = !1;
if (this.type == a.AUTO_COM) {
h.default.aldReport("AutoClick", "click");
u.default.user.auto_com_time = f.default.getServerTime();
u.default.user.auto_com_time += 12e4 * t;
e = !0;
} else if (this.type == a.DOUBLE_ATT) {
h.default.aldReport("RageClick", "click");
u.default.user.double_att_time = f.default.getServerTime();
u.default.user.double_att_time += 3e4 * t;
e = !0;
} else if (this.type == a.DOUBLE_INCOME) {
h.default.aldReport("DoubleClick", "click");
u.default.user.double_income_time = f.default.getServerTime();
u.default.user.double_income_time += 12e4 * t;
e = !0;
} else if (this.type == a.DROP_PLANT) {
2 == t && h.default.aldReport("DropClick", "click");
u.default.user.drop_plant_time = f.default.getServerTime();
u.default.user.drop_plant_time += 6e5 * t;
e = !0;
}
u.default.save();
if (e) {
this.closeUI();
s.default.show("使用成功");
}
};
e.prototype.onUIClicked = function(t) {
var e = this, i = t.target.name;
d.default.Instance().playMX("click");
switch (i) {
case "btn_close":
this.closeUI();
break;

case "btn_ad":
l.default.Instance().play(function(t) {
t && e.addCoin(2);
});
break;

case "btn_normal":
this.addCoin(1);
this.GetGameObject("btn_normal").active = !1;
}
};
return r([ _ ], e);
}(c.default);
i.default = m;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../framwork/MsgToast": "MsgToast",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../manager/WxCenter": "WxCenter",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils"
} ],
ConfigManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9780cLuR0VKypQXZeycd6Qq", "ConfigManager");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bInit = !1;
return e;
}
e.prototype.loadConfig = function() {
return r(this, void 0, void 0, function() {
return a(this, function() {
if (this.bInit) return [ 2 ];
this.bInit = !0;
return [ 2 ];
});
});
};
return e;
}(t("./Singleton").default);
i.default = c;
cc._RF.pop();
}, {
"./Singleton": "Singleton"
} ],
Config: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6d0f6G7p/tJapBTg/sNsgza", "Config");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Config_shopsort = i.Config_dropAwwards = i.Config_ground = i.Config_animals = i.User_level = i.Config_chick = void 0;
i.Config_chick = [ [ 1, 1, 10, "1|10", 4, 100, 0, "翅鸡仔1级", "1", "#FEDE55", "01" ], [ 2, .96, 16, "2|10", 9, 1548, 0, "翅鸡仔2级", "2", "#F2AA1A", "07" ], [ 3, .92, 25, "3|5", 19, 6969, 0, "翅鸡仔3级", "3", "#B4E253", "15" ], [ 4, .88, 42, "1|11", 41, 18539, 0, "翅鸡仔4级", "4", "#F4C712", "32" ], [ 5, .84, 75, "2|11", 86, 49314, 0, "翅鸡仔5级", "5", "#FEE056", "05" ], [ 6, .81, 140, "3|5.5", 181, 131176, 0, "翅鸡仔6级", "1", "#ECBE4B", "04" ], [ 7, .78, 293, "1|12", 380, 348928, 0, "翅鸡仔7级", "2", "#99E448", "14" ], [ 8, .75, 601, "2|12", 798, 928149, 0, "翅鸡仔8级", "3", "#D4E5EC", "16" ], [ 9, .72, 1214, "3|6", 1676, 2468878, 0, "翅鸡仔9级", "4", "#1971D6", "06" ], [ 10, .69, 2536, "1|13", 3520, 6567217, 0, "翅鸡仔10级", "5", "#E9E178", "24" ], [ 11, .67, 5307, "2|13", 7392, 17468797, 6, "翅鸡仔11级", "1", "#5B7D15", "17" ], [ 12, .65, 11615, "3|6.5", 15523, 46467e3, 8, "翅鸡仔12级", "2", "#FDE054", "22" ], [ 13, .63, 24392, "1|14", 32598, 123602221, 10, "翅鸡仔13级", "3", "#E2B845", "08" ], [ 14, .61, 51224, "2|14", 68455, 328781909, 13, "翅鸡仔14级", "4", "#E66823", "33" ], [ 15, .6, 107572, "3|7", 143756, 874559877, 17, "翅鸡仔15级", "5", "#AF452D", "11" ], [ 16, .59, 225903, "1|15", 301888, 2326329273, 22, "翅鸡仔16级", "1", "#C4A261", "23" ], [ 17, .58, 474396, "2|15", 633965, 6188035867, 30, "翅鸡仔17级", "2", "#FAEB2E", "29" ], [ 18, .57, 996232, "3|7.5", 1331326, 16460175406, 40, "翅鸡仔18级", "3", "#BCEC7F", "28" ], [ 19, .56, 2092088, "1|16", 2795784, 43784066580, 50, "翅鸡仔19级", "4", "#FEFDFF", "39" ], [ 20, .55, 4393386, "2|16", 5871147, 116465617103, 60, "翅鸡仔20级", "5", "#FDDB2C", "50" ], [ 21, .54, 9226110, "3|8", 12329408, 309798541495, 80, "翅鸡仔21级", "1", "#9A7601", "19" ], [ 22, .53, 19374831, "1|17", 25891758, 824064120378, 100, "翅鸡仔22级", "2", "#CB2E26", "27" ], [ 23, .52, 40687144, "2|17", 54372692, 2192010560204, 130, "翅鸡仔23级", "3", "#96A6B3", "10" ], [ 24, .51, 85443003, "3|8.5", 114182653, 5830748090144, 160, "翅鸡仔24级", "4", "#FCCB16", "30" ], [ 25, .51, 179430308, "1|17.5", 239783571, 0xe1b2784ca28, 200, "翅鸡仔25级", "5", "#E3FF79", "21" ], [ 26, .51, 376803646, "2|17.5", 503545498, 41256041186627, 240, "翅鸡仔26级", "1", "#FCFAC3", "03" ], [ 27, .51, 791287659, "3|8.5", 1057445546, 0x63cf1577dacd, 290, "翅鸡仔27级", "2", "#FC687A", "13" ], [ 28, .51, 1661704084, "1|18", 2220635646, 291911245020100, 340, "翅鸡仔28级", "3", "#9B671B", "12" ], [ 29, .51, 3489578577, "2|18", 4663334858, 776483911753466, 400, "翅鸡仔29级", "4", "#4F5C70", "02" ], [ 30, .51, 7328115014, "3|9", 9793003202, 0x7568366f8db5c, 460, "翅鸡仔30级", "5", "#B9291F", "45" ], [ 31, .51, 15389041529, "1|18.5", 20565306723, 5494089566002820, 530, "翅鸡仔31级", "1", "#82FFB6", "54" ], [ 32, .51, 32316987211, "2|18.5", 43187144119, 0x33eb9bcf79cc70, 600, "翅鸡仔32级", "2", "#70A632", "31" ], [ 33, .51, 67865673145, "3|9", 90693002651, 0x8a1badd0d87600, 680, "翅鸡仔33级", "3", "#B5E13C", "09" ], [ 34, .51, 142517913605, "1|19", 190455305567, 0x16f5e1b2668bce0, 760, "翅鸡仔34级", "4", "#A15C54", "25" ], [ 35, .51, 299287618570, "2|19", 399956141690, 0x3d132a4610c6300, 850, "翅鸡仔35级", "5", "#FCDB50", "35" ], [ 36, .51, 628503998998, "3|9.5", 839907897549, 73165091198923e4, 940, "翅鸡仔36级", "1", "#9CBCC0", "37" ], [ 37, .51, 1319858397895, "1|19.5", 1763806584855, 19461914258914e5, 1040, "翅鸡仔37级", "2", "#4089FF", "47" ], [ 38, .51, 2771702635582, "2|19.5", 3703993828196, 51768691928711e5, 1140, "翅鸡仔38级", "3", "#FCDE8E", "49" ], [ 39, .51, 5820575534722, "3|9.5", 7778387039211, 137704720530371e5, 1250, "翅鸡仔39级", "4", "#FEBF89", "52" ], [ 40, .51, 0xb1df0020b44, "1|20", 0xedb32cadd09, 366294556610786e5, 1360, "翅鸡仔40级", "5", "#F9F2EC", "44" ], [ 41, .51, 25668738108123, "2|20", 34302686842924, 97434352058469e6, 1480, "翅鸡仔41级", "1", "#FAC335", "42" ], [ 42, .51, 53904350027060, "3|10", 72035642370142, 259175376475527e6, 1600, "翅鸡仔42级", "2", "#28D9F9", "51" ], [ 43, .51, 0x66f43a3be3ba, "1|20.5", 0x89956ba30194, 689406501424901e6, 1730, "翅鸡仔43级", "3", "#3CCEF3", "53" ], [ 44, .51, 0xd83413e42b06, "2|20.5", 317677182852330, 183382129379023e7, 1860, "翅鸡仔44级", "4", "#FADC80", "18" ], [ 45, .51, 499208185600602, "3|10", 667122083989893, 487796464148203e7, 2e3, "翅鸡仔45级", "5", "#68DFE0", "26" ], [ 46, .51, 0x3b97505ccf0ec, "1|21", 0x4fa299328ed92, 129753859463422e8, 2140, "翅鸡仔46级", "1", "#FDE570", "55" ], [ 47, .51, 0x7d2428c2e605a, "2|21", 0xa73bdb509261c, 345145266172703e8, 2290, "翅鸡仔47级", "2", "#60EC00", "46" ], [ 48, .51, 4623167006847160, "3|10.5", 6178217619830380, 918086408019389e8, 2440, "翅鸡仔48级", "3", "#F7FDFD", "38" ], [ 49, .51, 9708650714379030, "1|21.5", 0x2e18049bcebf18, 244210984533157e9, 2600, "翅鸡仔49级", "4", "#E8C6AA", "56" ], [ 50, .51, 0x486eededdd9ea0, "2|21.5", 0x60cc09ad989160, 649601218858199e9, 2760, "翅鸡仔50级", "5", "#674B88", "40" ], [ 51, .51, 0x981c26d9eafff0, "3|10.5", 0xcb461452f39750, 172793924216281e10, 2930, "翅鸡仔51级", "1", "#A2FD5D", "58" ], [ 52, .51, 89911814265864200, "1|22", 0x1aadff77aff8a20, 459631838415307e10, 3100, "翅鸡仔52级", "2", "#43AAF2", "43" ], [ 53, .51, 0x29ece11bbe5f400, "2|22", 0x3806fee1be57180, 122262069018472e11, 3280, "翅鸡仔53级", "3", "#656D7E", "57" ], [ 54, .51, 0x580b0bed762e4c0, "3|11", 0x75a84a73a950480, 325217103589135e11, 3460, "翅鸡仔54级", "4", "#F6ECED", "48" ], [ 55, .51, 0xb8e3ff72ab61700, "1|22.5", 0xf7149c5949f5c80, 865077495547099e11, 3650, "翅鸡仔55级", "5", "#44DEFE", "60" ], [ 56, .51, 174861395502395e4, "2|22.5", 233677856136497e4, 230110613815528e12, 3840, "翅鸡仔56级", "1", "#FDADBE", "59" ], [ 57, .51, 36720893055503e5, "3|11", 490723497886643e4, 612094232749305e12, 4040, "翅鸡仔57级", "2", "#FFFEF4", "20" ], [ 58, .51, 771138754165564e4, "1|23", 103051934556195e5, 162817065911315e13, 4240, "翅鸡仔58级", "3", "#DE3A40", "36" ], [ 59, .51, 161939138374768e5, "2|23", 21640906256801e6, 433093395324098e13, 4350, "翅鸡仔59级", "4", "#28B7FE", "41" ], [ 60, .51, 340072190587014e5, "3|11.5", 45445903139282e6, 11520284315621e15, 4460, "翅鸡仔60级", "5", "#D54AF2", "34" ] ];
i.User_level = {
"1_1": [ 1, 1, 3, 1, 5, 2, 1 ],
"1_2": [ 1, 2, 3, 1, 7, 2, 1 ],
"1_3": [ 1, 3, 3, 101, 1, 2, 0 ],
"2_1": [ 2, 1, 4, 2, 5, 3, 1 ],
"2_2": [ 2, 2, 4, 2, 7, 3, 1 ],
"2_3": [ 2, 3, 4, 2, 9, 3, 1 ],
"2_4": [ 2, 4, 4, 102, 1, 3, 0 ],
"3_1": [ 3, 1, 5, 3, 5, 4, 1 ],
"3_2": [ 3, 2, 5, 3, 7, 4, 1 ],
"3_3": [ 3, 3, 5, 3, 9, 4, 1 ],
"3_4": [ 3, 4, 5, 3, 11, 4, 1 ],
"3_5": [ 3, 5, 5, 103, 1, 4, 0 ],
"4_1": [ 4, 1, 5, 4, 5, 5, 1 ],
"4_2": [ 4, 2, 5, 4, 7, 5, 1 ],
"4_3": [ 4, 3, 5, 4, 9, 5, 1 ],
"4_4": [ 4, 4, 5, 4, 11, 5, 1 ],
"4_5": [ 4, 5, 5, 104, 1, 5, 0 ],
"5_1": [ 5, 1, 5, 5, 5, 6, 1 ],
"5_2": [ 5, 2, 5, 5, 7, 6, 1 ],
"5_3": [ 5, 3, 5, 5, 9, 6, 1 ],
"5_4": [ 5, 4, 5, 5, 11, 6, 1 ],
"5_5": [ 5, 5, 5, 105, 1, 6, 0 ],
"6_1": [ 6, 1, 5, 6, 5, 7, 1 ],
"6_2": [ 6, 2, 5, 6, 7, 7, 1 ],
"6_3": [ 6, 3, 5, 6, 9, 7, 1 ],
"6_4": [ 6, 4, 5, 6, 11, 7, 1 ],
"6_5": [ 6, 5, 5, 106, 1, 7, 0 ],
"7_1": [ 7, 1, 5, 7, 5, 8, 1 ],
"7_2": [ 7, 2, 5, 7, 7, 8, 1 ],
"7_3": [ 7, 3, 5, 7, 9, 8, 1 ],
"7_4": [ 7, 4, 5, 7, 11, 8, 1 ],
"7_5": [ 7, 5, 5, 107, 1, 8, 0 ],
"8_1": [ 8, 1, 5, 8, 5, 9, 1 ],
"8_2": [ 8, 2, 5, 8, 7, 9, 1 ],
"8_3": [ 8, 3, 5, 8, 9, 9, 1 ],
"8_4": [ 8, 4, 5, 8, 11, 9, 1 ],
"8_5": [ 8, 5, 5, 108, 1, 9, 0 ],
"9_1": [ 9, 1, 5, 9, 5, 10, 1 ],
"9_2": [ 9, 2, 5, 9, 7, 10, 1 ],
"9_3": [ 9, 3, 5, 9, 9, 10, 1 ],
"9_4": [ 9, 4, 5, 9, 11, 10, 1 ],
"9_5": [ 9, 5, 5, 109, 1, 10, 0 ],
"10_1": [ 10, 1, 5, 10, 5, 11, 1 ],
"10_2": [ 10, 2, 5, 10, 7, 11, 1 ],
"10_3": [ 10, 3, 5, 10, 9, 11, 1 ],
"10_4": [ 10, 4, 5, 10, 11, 11, 1 ],
"10_5": [ 10, 5, 5, 110, 1, 11, 0 ],
"11_1": [ 11, 1, 5, 11, 5, 12, 1 ],
"11_2": [ 11, 2, 5, 11, 7, 12, 1 ],
"11_3": [ 11, 3, 5, 11, 9, 12, 1 ],
"11_4": [ 11, 4, 5, 11, 11, 12, 1 ],
"11_5": [ 11, 5, 5, 111, 1, 12, 0 ],
"12_1": [ 12, 1, 5, 12, 5, 13, 1 ],
"12_2": [ 12, 2, 5, 12, 7, 13, 1 ],
"12_3": [ 12, 3, 5, 12, 9, 13, 1 ],
"12_4": [ 12, 4, 5, 12, 11, 13, 1 ],
"12_5": [ 12, 5, 5, 112, 1, 13, 0 ],
"13_1": [ 13, 1, 5, 13, 5, 14, 1 ],
"13_2": [ 13, 2, 5, 13, 7, 14, 1 ],
"13_3": [ 13, 3, 5, 13, 9, 14, 1 ],
"13_4": [ 13, 4, 5, 13, 11, 14, 1 ],
"13_5": [ 13, 5, 5, 113, 1, 14, 0 ],
"14_1": [ 14, 1, 5, 14, 5, 15, 1 ],
"14_2": [ 14, 2, 5, 14, 7, 15, 1 ],
"14_3": [ 14, 3, 5, 14, 9, 15, 1 ],
"14_4": [ 14, 4, 5, 14, 11, 15, 1 ],
"14_5": [ 14, 5, 5, 114, 1, 15, 0 ],
"15_1": [ 15, 1, 5, 15, 5, 16, 1 ],
"15_2": [ 15, 2, 5, 15, 7, 16, 1 ],
"15_3": [ 15, 3, 5, 15, 9, 16, 1 ],
"15_4": [ 15, 4, 5, 15, 11, 16, 1 ],
"15_5": [ 15, 5, 5, 115, 1, 16, 0 ],
"16_1": [ 16, 1, 5, 16, 5, 17, 1 ],
"16_2": [ 16, 2, 5, 16, 7, 17, 1 ],
"16_3": [ 16, 3, 5, 16, 9, 17, 1 ],
"16_4": [ 16, 4, 5, 16, 11, 17, 1 ],
"16_5": [ 16, 5, 5, 116, 1, 17, 0 ],
"17_1": [ 17, 1, 5, 17, 5, 18, 1 ],
"17_2": [ 17, 2, 5, 17, 7, 18, 1 ],
"17_3": [ 17, 3, 5, 17, 9, 18, 1 ],
"17_4": [ 17, 4, 5, 17, 11, 18, 1 ],
"17_5": [ 17, 5, 5, 117, 1, 18, 0 ],
"18_1": [ 18, 1, 5, 18, 5, 19, 1 ],
"18_2": [ 18, 2, 5, 18, 7, 19, 1 ],
"18_3": [ 18, 3, 5, 18, 9, 19, 1 ],
"18_4": [ 18, 4, 5, 18, 11, 19, 1 ],
"18_5": [ 18, 5, 5, 118, 1, 19, 0 ],
"19_1": [ 19, 1, 5, 19, 5, 20, 1 ],
"19_2": [ 19, 2, 5, 19, 7, 20, 1 ],
"19_3": [ 19, 3, 5, 19, 9, 20, 1 ],
"19_4": [ 19, 4, 5, 19, 11, 20, 1 ],
"19_5": [ 19, 5, 5, 119, 1, 20, 0 ],
"20_1": [ 20, 1, 5, 20, 5, 21, 1 ],
"20_2": [ 20, 2, 5, 20, 7, 21, 1 ],
"20_3": [ 20, 3, 5, 20, 9, 21, 1 ],
"20_4": [ 20, 4, 5, 20, 11, 21, 1 ],
"20_5": [ 20, 5, 5, 120, 1, 21, 0 ],
"21_1": [ 21, 1, 5, 21, 5, 22, 1 ],
"21_2": [ 21, 2, 5, 21, 7, 22, 1 ],
"21_3": [ 21, 3, 5, 21, 9, 22, 1 ],
"21_4": [ 21, 4, 5, 21, 11, 22, 1 ],
"21_5": [ 21, 5, 5, 121, 1, 22, 0 ],
"22_1": [ 22, 1, 5, 22, 5, 23, 1 ],
"22_2": [ 22, 2, 5, 22, 7, 23, 1 ],
"22_3": [ 22, 3, 5, 22, 9, 23, 1 ],
"22_4": [ 22, 4, 5, 22, 11, 23, 1 ],
"22_5": [ 22, 5, 5, 122, 1, 23, 0 ],
"23_1": [ 23, 1, 5, 23, 5, 24, 1 ],
"23_2": [ 23, 2, 5, 23, 7, 24, 1 ],
"23_3": [ 23, 3, 5, 23, 9, 24, 1 ],
"23_4": [ 23, 4, 5, 23, 11, 24, 1 ],
"23_5": [ 23, 5, 5, 123, 1, 24, 0 ],
"24_1": [ 24, 1, 5, 24, 5, 25, 1 ],
"24_2": [ 24, 2, 5, 24, 7, 25, 1 ],
"24_3": [ 24, 3, 5, 24, 9, 25, 1 ],
"24_4": [ 24, 4, 5, 24, 11, 25, 1 ],
"24_5": [ 24, 5, 5, 124, 1, 25, 0 ],
"25_1": [ 25, 1, 5, 25, 5, 26, 1 ],
"25_2": [ 25, 2, 5, 25, 7, 26, 1 ],
"25_3": [ 25, 3, 5, 25, 9, 26, 1 ],
"25_4": [ 25, 4, 5, 25, 11, 26, 1 ],
"25_5": [ 25, 5, 5, 125, 1, 26, 0 ],
"26_1": [ 26, 1, 5, 26, 5, 27, 1 ],
"26_2": [ 26, 2, 5, 26, 7, 27, 1 ],
"26_3": [ 26, 3, 5, 26, 9, 27, 1 ],
"26_4": [ 26, 4, 5, 26, 11, 27, 1 ],
"26_5": [ 26, 5, 5, 126, 1, 27, 0 ],
"27_1": [ 27, 1, 5, 27, 5, 28, 1 ],
"27_2": [ 27, 2, 5, 27, 7, 28, 1 ],
"27_3": [ 27, 3, 5, 27, 9, 28, 1 ],
"27_4": [ 27, 4, 5, 27, 11, 28, 1 ],
"27_5": [ 27, 5, 5, 127, 1, 28, 0 ],
"28_1": [ 28, 1, 5, 28, 5, 29, 1 ],
"28_2": [ 28, 2, 5, 28, 7, 29, 1 ],
"28_3": [ 28, 3, 5, 28, 9, 29, 1 ],
"28_4": [ 28, 4, 5, 28, 11, 29, 1 ],
"28_5": [ 28, 5, 5, 128, 1, 29, 0 ],
"29_1": [ 29, 1, 5, 29, 5, 30, 1 ],
"29_2": [ 29, 2, 5, 29, 7, 30, 1 ],
"29_3": [ 29, 3, 5, 29, 9, 30, 1 ],
"29_4": [ 29, 4, 5, 29, 11, 30, 1 ],
"29_5": [ 29, 5, 5, 129, 1, 30, 0 ],
"30_1": [ 30, 1, 5, 30, 5, 31, 1 ],
"30_2": [ 30, 2, 5, 30, 7, 31, 1 ],
"30_3": [ 30, 3, 5, 30, 9, 31, 1 ],
"30_4": [ 30, 4, 5, 30, 11, 31, 1 ],
"30_5": [ 30, 5, 5, 130, 1, 31, 0 ],
"31_1": [ 31, 1, 5, 31, 5, 32, 1 ],
"31_2": [ 31, 2, 5, 31, 7, 32, 1 ],
"31_3": [ 31, 3, 5, 31, 9, 32, 1 ],
"31_4": [ 31, 4, 5, 31, 11, 32, 1 ],
"31_5": [ 31, 5, 5, 131, 1, 32, 0 ],
"32_1": [ 32, 1, 5, 32, 5, 33, 1 ],
"32_2": [ 32, 2, 5, 32, 7, 33, 1 ],
"32_3": [ 32, 3, 5, 32, 9, 33, 1 ],
"32_4": [ 32, 4, 5, 32, 11, 33, 1 ],
"32_5": [ 32, 5, 5, 132, 1, 33, 0 ],
"33_1": [ 33, 1, 5, 33, 5, 34, 1 ],
"33_2": [ 33, 2, 5, 33, 7, 34, 1 ],
"33_3": [ 33, 3, 5, 33, 9, 34, 1 ],
"33_4": [ 33, 4, 5, 33, 11, 34, 1 ],
"33_5": [ 33, 5, 5, 133, 1, 34, 0 ],
"34_1": [ 34, 1, 5, 34, 5, 35, 1 ],
"34_2": [ 34, 2, 5, 34, 7, 35, 1 ],
"34_3": [ 34, 3, 5, 34, 9, 35, 1 ],
"34_4": [ 34, 4, 5, 34, 11, 35, 1 ],
"34_5": [ 34, 5, 5, 134, 1, 35, 0 ],
"35_1": [ 35, 1, 5, 35, 5, 36, 1 ],
"35_2": [ 35, 2, 5, 35, 7, 36, 1 ],
"35_3": [ 35, 3, 5, 35, 9, 36, 1 ],
"35_4": [ 35, 4, 5, 35, 11, 36, 1 ],
"35_5": [ 35, 5, 5, 135, 1, 36, 0 ],
"36_1": [ 36, 1, 5, 36, 5, 37, 1 ],
"36_2": [ 36, 2, 5, 36, 7, 37, 1 ],
"36_3": [ 36, 3, 5, 36, 9, 37, 1 ],
"36_4": [ 36, 4, 5, 36, 11, 37, 1 ],
"36_5": [ 36, 5, 5, 136, 1, 37, 0 ],
"37_1": [ 37, 1, 5, 37, 5, 38, 1 ],
"37_2": [ 37, 2, 5, 37, 7, 38, 1 ],
"37_3": [ 37, 3, 5, 37, 9, 38, 1 ],
"37_4": [ 37, 4, 5, 37, 11, 38, 1 ],
"37_5": [ 37, 5, 5, 137, 1, 38, 0 ],
"38_1": [ 38, 1, 5, 38, 5, 39, 1 ],
"38_2": [ 38, 2, 5, 38, 7, 39, 1 ],
"38_3": [ 38, 3, 5, 38, 9, 39, 1 ],
"38_4": [ 38, 4, 5, 38, 11, 39, 1 ],
"38_5": [ 38, 5, 5, 138, 1, 39, 0 ],
"39_1": [ 39, 1, 5, 39, 5, 40, 1 ],
"39_2": [ 39, 2, 5, 39, 7, 40, 1 ],
"39_3": [ 39, 3, 5, 39, 9, 40, 1 ],
"39_4": [ 39, 4, 5, 39, 11, 40, 1 ],
"39_5": [ 39, 5, 5, 139, 1, 40, 0 ],
"40_1": [ 40, 1, 5, 40, 5, 41, 1 ],
"40_2": [ 40, 2, 5, 40, 7, 41, 1 ],
"40_3": [ 40, 3, 5, 40, 9, 41, 1 ],
"40_4": [ 40, 4, 5, 40, 11, 41, 1 ],
"40_5": [ 40, 5, 5, 140, 1, 41, 0 ],
"41_1": [ 41, 1, 5, 41, 5, 42, 1 ],
"41_2": [ 41, 2, 5, 41, 7, 42, 1 ],
"41_3": [ 41, 3, 5, 41, 9, 42, 1 ],
"41_4": [ 41, 4, 5, 41, 11, 42, 1 ],
"41_5": [ 41, 5, 5, 141, 1, 42, 0 ],
"42_1": [ 42, 1, 5, 42, 5, 43, 1 ],
"42_2": [ 42, 2, 5, 42, 7, 43, 1 ],
"42_3": [ 42, 3, 5, 42, 9, 43, 1 ],
"42_4": [ 42, 4, 5, 42, 11, 43, 1 ],
"42_5": [ 42, 5, 5, 142, 1, 43, 0 ],
"43_1": [ 43, 1, 5, 43, 5, 44, 1 ],
"43_2": [ 43, 2, 5, 43, 7, 44, 1 ],
"43_3": [ 43, 3, 5, 43, 9, 44, 1 ],
"43_4": [ 43, 4, 5, 43, 11, 44, 1 ],
"43_5": [ 43, 5, 5, 143, 1, 44, 0 ],
"44_1": [ 44, 1, 5, 44, 5, 45, 1 ],
"44_2": [ 44, 2, 5, 44, 7, 45, 1 ],
"44_3": [ 44, 3, 5, 44, 9, 45, 1 ],
"44_4": [ 44, 4, 5, 44, 11, 45, 1 ],
"44_5": [ 44, 5, 5, 144, 1, 45, 0 ],
"45_1": [ 45, 1, 5, 45, 5, 46, 1 ],
"45_2": [ 45, 2, 5, 45, 7, 46, 1 ],
"45_3": [ 45, 3, 5, 45, 9, 46, 1 ],
"45_4": [ 45, 4, 5, 45, 11, 46, 1 ],
"45_5": [ 45, 5, 5, 145, 1, 46, 0 ],
"46_1": [ 46, 1, 5, 46, 5, 47, 1 ],
"46_2": [ 46, 2, 5, 46, 7, 47, 1 ],
"46_3": [ 46, 3, 5, 46, 9, 47, 1 ],
"46_4": [ 46, 4, 5, 46, 11, 47, 1 ],
"46_5": [ 46, 5, 5, 146, 1, 47, 0 ],
"47_1": [ 47, 1, 5, 47, 5, 48, 1 ],
"47_2": [ 47, 2, 5, 47, 7, 48, 1 ],
"47_3": [ 47, 3, 5, 47, 9, 48, 1 ],
"47_4": [ 47, 4, 5, 47, 11, 48, 1 ],
"47_5": [ 47, 5, 5, 147, 1, 48, 0 ],
"48_1": [ 48, 1, 5, 48, 5, 49, 1 ],
"48_2": [ 48, 2, 5, 48, 7, 49, 1 ],
"48_3": [ 48, 3, 5, 48, 9, 49, 1 ],
"48_4": [ 48, 4, 5, 48, 11, 49, 1 ],
"48_5": [ 48, 5, 5, 148, 1, 49, 0 ],
"49_1": [ 49, 1, 5, 49, 5, 50, 1 ],
"49_2": [ 49, 2, 5, 49, 7, 50, 1 ],
"49_3": [ 49, 3, 5, 49, 9, 50, 1 ],
"49_4": [ 49, 4, 5, 49, 11, 50, 1 ],
"49_5": [ 49, 5, 5, 149, 1, 50, 0 ],
"50_1": [ 50, 1, 5, 50, 5, 51, 1 ],
"50_2": [ 50, 2, 5, 50, 7, 51, 1 ],
"50_3": [ 50, 3, 5, 50, 9, 51, 1 ],
"50_4": [ 50, 4, 5, 50, 11, 51, 1 ],
"50_5": [ 50, 5, 5, 150, 1, 51, 0 ],
"51_1": [ 51, 1, 5, 51, 5, 52, 1 ],
"51_2": [ 51, 2, 5, 51, 7, 52, 1 ],
"51_3": [ 51, 3, 5, 51, 9, 52, 1 ],
"51_4": [ 51, 4, 5, 51, 11, 52, 1 ],
"51_5": [ 51, 5, 5, 151, 1, 52, 0 ],
"52_1": [ 52, 1, 5, 52, 5, 53, 1 ],
"52_2": [ 52, 2, 5, 52, 7, 53, 1 ],
"52_3": [ 52, 3, 5, 52, 9, 53, 1 ],
"52_4": [ 52, 4, 5, 52, 11, 53, 1 ],
"52_5": [ 52, 5, 5, 152, 1, 53, 0 ],
"53_1": [ 53, 1, 5, 53, 5, 54, 1 ],
"53_2": [ 53, 2, 5, 53, 7, 54, 1 ],
"53_3": [ 53, 3, 5, 53, 9, 54, 1 ],
"53_4": [ 53, 4, 5, 53, 11, 54, 1 ],
"53_5": [ 53, 5, 5, 153, 1, 54, 0 ],
"54_1": [ 54, 1, 5, 54, 5, 55, 1 ],
"54_2": [ 54, 2, 5, 54, 7, 55, 1 ],
"54_3": [ 54, 3, 5, 54, 9, 55, 1 ],
"54_4": [ 54, 4, 5, 54, 11, 55, 1 ],
"54_5": [ 54, 5, 5, 154, 1, 55, 0 ],
"55_1": [ 55, 1, 5, 55, 5, 56, 1 ],
"55_2": [ 55, 2, 5, 55, 7, 56, 1 ],
"55_3": [ 55, 3, 5, 55, 9, 56, 1 ],
"55_4": [ 55, 4, 5, 55, 11, 56, 1 ],
"55_5": [ 55, 5, 5, 155, 1, 56, 0 ],
"56_1": [ 56, 1, 5, 56, 5, 57, 1 ],
"56_2": [ 56, 2, 5, 56, 7, 57, 1 ],
"56_3": [ 56, 3, 5, 56, 9, 57, 1 ],
"56_4": [ 56, 4, 5, 56, 11, 57, 1 ],
"56_5": [ 56, 5, 5, 156, 1, 57, 0 ],
"57_1": [ 57, 1, 5, 57, 5, 58, 1 ],
"57_2": [ 57, 2, 5, 57, 7, 58, 1 ],
"57_3": [ 57, 3, 5, 57, 9, 58, 1 ],
"57_4": [ 57, 4, 5, 57, 11, 58, 1 ],
"57_5": [ 57, 5, 5, 157, 1, 58, 0 ],
"58_1": [ 58, 1, 5, 58, 5, 59, 1 ],
"58_2": [ 58, 2, 5, 58, 7, 59, 1 ],
"58_3": [ 58, 3, 5, 58, 9, 59, 1 ],
"58_4": [ 58, 4, 5, 58, 11, 59, 1 ],
"58_5": [ 58, 5, 5, 158, 1, 59, 0 ],
"59_1": [ 59, 1, 5, 59, 5, 60, 1 ],
"59_2": [ 59, 2, 5, 59, 7, 60, 1 ],
"59_3": [ 59, 3, 5, 59, 9, 60, 1 ],
"59_4": [ 59, 4, 5, 59, 11, 60, 1 ],
"59_5": [ 59, 5, 5, 159, 1, 60, 0 ],
"60_1": [ 60, 1, 5, 60, 5, 60, 1 ],
"60_2": [ 60, 2, 5, 60, 7, 60, 1 ],
"60_3": [ 60, 3, 5, 60, 9, 60, 1 ],
"60_4": [ 60, 4, 5, 60, 11, 60, 1 ],
"60_5": [ 60, 5, 5, 160, 1, 60, 0 ]
};
i.Config_animals = {
1: [ 1, 57, .862529, 137, "", "" ],
2: [ 2, 163, .90565545, 170, "", "" ],
3: [ 3, 413, .9509382225, 432, "", "" ],
4: [ 4, 705, .998485133625, 736, "", "" ],
5: [ 5, 1166, 1.04840939081, 1218, "", "" ],
6: [ 6, 1636, 1.10082985969, 1709, "", "" ],
7: [ 7, 2470, 1.15587135329, 2580, "", "" ],
8: [ 8, 3657, 1.21366492019, 3820, "", "" ],
9: [ 9, 8104, 1.27434816625, 8467, "", "" ],
10: [ 10, 17947, 1.33806557522, 18751, "", "" ],
11: [ 11, 39752, 1.40496885378, 41533, "", "" ],
12: [ 12, 88056, 1.47521729581, 92e3, "", "" ],
13: [ 13, 195038, 1.54897816091, 203774, "", "" ],
14: [ 14, 419648, 1.57995772459, 438444, "", "" ],
15: [ 15, 902906, 1.61155687837, 943347, "", "" ],
16: [ 16, 1942629, 1.64378801629, 2029640, "", "" ],
17: [ 17, 4179527, 1.67666377692, 4366728, "", "" ],
18: [ 18, 8991989, 1.71019705254, 9394740, "", "" ],
19: [ 19, 19345313, 1.74440099316, 20211789, "\t", "" ],
20: [ 20, 41618614, 1.77928901264, 43482712, "", "" ],
21: [ 21, 89534672, 1.81487479372, 93544930, "", "" ],
22: [ 22, 192613493, 1.85117228909, 201240651, "", "" ],
23: [ 23, 414356456, 1.88819573453, 432915482, "", "" ],
24: [ 24, 891360763, 1.92595964995, 931284812, "", "dog" ],
25: [ 25, 1917454133, 1.92595964995, 2003336903, "", "" ],
26: [ 26, 4124664141, 1.92595964995, 4309407848, "", "" ],
27: [ 27, 8872467162, 1.92595964995, 9269864966, "", "" ],
28: [ 28, 19085013790, 1.92595964995, 19939831558, "", "" ],
29: [ 29, 41051864668, 1.92595964995, 42890577687, "", "" ],
30: [ 30, 88301015025, 1.92595964995, 92256017488, "", "" ],
31: [ 31, 189140774188, 1.92595964995, 197612389464, "", "" ],
32: [ 32, 405139538313, 1.92595964995, 423285738234, "", "" ],
33: [ 33, 867808891065, 1.92595964995, 906678051296, "", "" ],
34: [ 34, 1858846644666, 1.92595964995, 1942104385880, "", "" ],
35: [ 35, 3981649512877, 1.92595964995, 4159987594558, "", "" ],
36: [ 36, 8528693256581, 1.92595964995, 8910693427544, "", "" ],
37: [ 37, 18268460955598, 1.92595964995, 19086705321800, "", "" ],
38: [ 38, 39131043366891, 1.92595964995, 40883722799296, "", "" ],
39: [ 39, 83818694891880, 1.92595964995, 87572934236092, "", "" ],
40: [ 40, 0xa34a54bb25a9, 1.92595964995, 0xaa9aa84a668d, "", "" ],
41: [ 41, 384573918429912, 1.92595964995, 401798984236404, "", "" ],
42: [ 42, 823757333276871, 1.92595964995, 860653424234377, "", "" ],
43: [ 43, 0x644caecd74b8a, 1.92595964995, 0x68cabdcf69e0e, "", "" ],
44: [ 44, 0xd6d774610bef8, 1.92595964995, 0xe076e15351e50, "", "" ],
45: [ 45, 8095761273815170, 1.92595964995, 8458370421269710, "", "" ],
46: [ 46, 0x3d9ba848430264, 1.92595964995, 0x405e11e4035194, "", "" ],
47: [ 47, 0x83f6e3da45ce40, 1.92595964995, 0x89e00693ec7c20, "", "" ],
48: [ 48, 79563905479159900, 1.92595964995, 83127572805574900, "", "" ],
49: [ 49, 17042588553636e4, 1.92595964995, 0x27897f455ddb080, "", "" ],
50: [ 50, 0x510ed1598190980, 1.92595964995, 0x54b03f34d6dd240, "", "" ],
51: [ 51, 78194191268605e4, 1.92595964995, 0xb56716bf848ed80, "", "" ],
52: [ 52, 167491957697352e4, 1.92595964995, 174993922482624e4, "", "" ],
53: [ 53, 358767773387728e4, 1.92595964995, 37483698195778e5, "", "" ],
54: [ 54, 768480570596512e4, 1.92595964995, 802900815353564e4, "", "" ],
55: [ 55, 164608538221773e5, 1.92595964995, 171981354648733e5, "", "" ],
56: [ 56, 352591488871038e5, 1.92595964995, 368384061657587e5, "", "" ],
57: [ 57, 755250969161763e5, 1.92595964995, 789078660070551e5, "", "" ],
58: [ 58, 16177475759445e7, 1.92595964995, 169020648987112e6, "", "" ],
59: [ 59, 346521530767311e6, 1.92595964995, 362042230130394e6, "", "" ],
60: [ 60, 74224911890358e7, 1.92595964995, 775494456939304e6, "", "" ],
101: [ 101, 1567, .575019333672, 1637, "", "" ],
102: [ 102, 2351, .6037703, 2456, "", "" ],
103: [ 103, 4231, .633958815, 4421, "", "" ],
104: [ 104, 7680, .66565675575, 8024, "", "" ],
105: [ 105, 14576, .698939593538, 15229, "", "" ],
106: [ 106, 29152, .733886573468, 30458, "", "" ],
107: [ 107, 61754, .770580902192, 64520, "", "" ],
108: [ 108, 137144, .809109946794, 143287, "", "" ],
109: [ 109, 303912, .84956544383, 317524, "", "" ],
110: [ 110, 673026, .892043716478, 703171, "", "" ],
111: [ 111, 1490720, .93664590286, 1557490, "", "" ],
112: [ 112, 3302124, .983478197546, 3450026, "", "" ],
113: [ 113, 7313952, 1.03265210727, 7641543, "", "" ],
114: [ 114, 15736814, 1.05330514905, 16441666, "", "" ],
115: [ 115, 33859002, 1.07437125293, 35375547, "", "" ],
116: [ 116, 72848617, 1.09585867786, 76111506, "", "" ],
117: [ 117, 156732268, 1.11777585128, 163752306, "", "" ],
118: [ 118, 337199614, 1.14013136802, 352302785, "", "" ],
119: [ 119, 725449247, 1.16293399544, 757942119, "", "" ],
120: [ 120, 1553912289, 1.23411485973, 1623512021, "", "" ],
121: [ 121, 3357550213, 1.20991652847, 3507934887, "", "" ],
122: [ 122, 7223005995, 1.23411485973, 7546524433, "", "" ],
123: [ 123, 15538367121, 1.25879715703, 16234330585, "", "" ],
124: [ 124, 33426028646, 1.28397309997, 34923180469, "", "dog" ],
125: [ 125, 71904529998, 1.28397309997, 75125133896, "", "" ],
126: [ 126, 154674905317, 1.28397309997, 161602794327, "", "" ],
127: [ 127, 332717518589, 1.28397309997, 347619936247, "", "" ],
128: [ 128, 715688017161, 1.28397309997, 747743683449, "", "" ],
129: [ 129, 1539444925073, 1.28397309997, 1608396663267, "", "" ],
130: [ 130, 3311288063449, 1.28397309997, 3459600655811, "", "" ],
131: [ 131, 7092779031898, 1.28397309997, 7410464604736, "", "" ],
132: [ 132, 0xdd1556f5871, 1.28397309997, 0xe6fc55a3a73, "", "" ],
133: [ 133, 32542833414490, 1.28397309997, 34000426923126, "", "" ],
134: [ 134, 69706749174357, 1.28397309997, 72828914469877, "", "" ],
135: [ 135, 0x87cc602e67cd, 1.28397309997, 0x8de178db4984, "", "" ],
136: [ 136, 319825997120177, 1.28397309997, 334151003531189, "", "" ],
137: [ 137, 685067285831420, 1.28397309997, 715751449563808, "", "" ],
138: [ 138, 0x5369af9bbcb94, 1.28397309997, 0x57261e18b8926, "", "" ],
139: [ 139, 0xb2ab9868b99ec, 1.28397309997, 0xbaac45963b7ac, "", "" ],
140: [ 140, 6732736667155810, 1.28397309997, 7034295942477690, "", "" ],
141: [ 141, 0x333c4c3c6aa994, 1.28397309997, 0x3587c6dabd7000, "", "" ],
142: [ 142, 0x6dbf1c21280dc4, 1.28397309997, 0x72a97d66f91a14, "", "" ],
143: [ 143, 0xeb13b9b1846308, 1.28397309997, 0xf59b2cde1ab210, "", "" ],
144: [ 144, 0x1f788f8c368e370, 1.28397309997, 0x20e16a01b3c4080, "", "" ],
145: [ 145, 0x43692730f1c9180, 1.28397309997, 0x466e19d9a981980, "", "" ],
146: [ 146, 0x9064d26959df380, 1.28397309997, 0x96dc79ee646d580, "", "" ],
147: [ 147, 139292551608459e4, 1.28397309997, 145531464995002e4, "", "" ],
148: [ 148, 298364645545319e4, 1.28397309997, 311728398019293e4, "", "" ],
149: [ 149, 639097070758074e4, 1.28397309997, 667722228557326e4, "", "" ],
150: [ 150, 136894592556379e5, 1.28397309997, 143026101356979e5, "", "" ],
151: [ 151, 293228217255765e5, 1.28397309997, 30636190910665e6, "", "" ],
152: [ 152, 628094841361848e5, 1.28397309997, 656227209306444e5, "", "" ],
153: [ 153, 134537915019708e6, 1.28397309997, 14056386823344e7, "", "" ],
154: [ 154, 288180213972214e6, 1.28397309997, 301087805756029e6, "", "" ],
155: [ 155, 617282018328482e6, 1.28397309997, 644930079929414e6, "", "" ],
156: [ 156, 132221808325961e7, 1.28397309997, 13814402312088e8, "", "" ],
157: [ 157, 283219113434208e7, 1.28397309997, 295904497524926e7, "", "" ],
158: [ 158, 606655340976074e7, 1.28397309997, 633827433698391e7, "", "" ],
159: [ 159, 129945574037075e8, 1.28397309997, 135765836298195e8, "", "" ],
160: [ 160, 278343419587415e8, 1.28397309997, 290810421350735e8, "", "" ]
};
i.Config_ground = [ {
id: 1,
type: 0,
price: 0
}, {
id: 2,
type: 0,
price: 0
}, {
id: 3,
type: 0,
price: 0
}, {
id: 4,
type: 0,
price: 2
}, {
id: 5,
type: 0,
price: 4
}, {
id: 6,
type: 0,
price: 6
}, {
id: 7,
type: 0,
price: 8
}, {
id: 8,
type: 0,
price: 10
}, {
id: 9,
type: 0,
price: 12
}, {
id: 10,
type: 0,
price: 15
}, {
id: 11,
type: 0,
price: 18
}, {
id: 12,
type: 0,
price: 20
} ];
i.Config_dropAwwards = {
1: [ 1, 1 ],
2: [ 2, 1 ],
3: [ 3, 1 ],
4: [ 4, 2 ],
5: [ 5, 3 ],
6: [ 6, 3 ],
7: [ 7, 3 ],
8: [ 8, 4 ],
9: [ 9, 4 ],
10: [ 10, 4 ],
11: [ 11, 5 ],
12: [ 12, 5 ],
13: [ 13, 6 ],
14: [ 14, 6 ],
15: [ 15, 7 ],
16: [ 16, 7 ],
17: [ 17, 8 ],
18: [ 18, 9 ],
19: [ 19, 10 ],
20: [ 20, 11 ],
21: [ 21, 12 ],
22: [ 22, 13 ],
23: [ 23, 14 ],
24: [ 24, 15 ],
25: [ 25, 16 ],
26: [ 26, 16 ],
27: [ 27, 17 ],
28: [ 28, 18 ],
29: [ 29, 19 ],
30: [ 30, 20 ],
31: [ 31, 21 ],
32: [ 32, 22 ],
33: [ 33, 23 ],
34: [ 34, 24 ],
35: [ 35, 25 ],
36: [ 36, 26 ],
37: [ 37, 27 ],
38: [ 38, 28 ],
39: [ 39, 29 ],
40: [ 40, 30 ],
41: [ 41, 31 ],
42: [ 42, 32 ],
43: [ 43, 33 ],
44: [ 44, 34 ],
45: [ 45, 35 ],
46: [ 46, 36 ],
47: [ 47, 37 ],
48: [ 48, 38 ],
49: [ 49, 39 ],
50: [ 50, 40 ],
51: [ 51, 41 ],
52: [ 52, 42 ],
53: [ 53, 43 ],
54: [ 54, 44 ],
55: [ 55, 45 ],
56: [ 56, 46 ],
57: [ 57, 47 ],
58: [ 58, 48 ],
59: [ 59, 49 ],
60: [ 60, 50 ]
};
i.Config_shopsort = {
1: [ 1, "M", "", "", "", "", "", "", "", "" ],
2: [ 2, "U", "M", "", "", "", "", "", "", "" ],
3: [ 3, "U", "U", "M", "", "", "", "", "", "" ],
4: [ 4, "U", "U", "M", "M", "", "", "", "", "" ],
5: [ 5, "U", "U", "M", "M", "M", "", "", "", "" ],
6: [ 6, "U", "U", "M", "M", "M", "M", "", "", "" ],
7: [ 7, "U", "U", "AD", "M", "M", "M", "M", "", "" ],
8: [ 8, "U", "U", "AD", "M", "M", "M", "M", "M", "" ],
9: [ 9, "U", "U", "AD", "M", "M", "M", "M", "M", "M" ],
10: [ 10, "U", "U", "AD", "M", "M", "M", "M", "M", "M" ],
11: [ 11, "U", "U", "AD", "M", "M", "M", "M", "M", "M" ],
12: [ 12, "U", "U", "M", "AD", "M", "M", "M", "M", "M" ],
13: [ 13, "U", "U", "G", "M", "AD", "M", "M", "M", "M" ],
14: [ 14, "U", "U", "G", "G", "M", "AD", "M", "M", "M" ],
15: [ 15, "U", "U", "G", "G", "M", "AD", "M", "M", "M" ],
16: [ 16, "U", "U", "G", "G", "M", "AD", "M", "M", "M" ],
17: [ 17, "U", "U", "G", "G", "M", "AD", "M", "M", "M" ],
18: [ 18, "U", "U", "G", "G", "M", "AD", "M", "M", "M" ],
19: [ 19, "U", "U", "G", "G", "M", "AD", "M", "M", "M" ],
20: [ 20, "U", "U", "G", "G", "M", "AD", "M", "M", "M" ],
21: [ 21, "U", "U", "G", "G", "M", "AD", "M", "M", "M" ],
22: [ 22, "U", "U", "G", "G", "M", "AD", "M", "M", "M" ],
23: [ 23, "U", "U", "G", "G", "M", "M", "AD", "M", "M" ],
24: [ 24, "U", "U", "G", "G", "M", "M", "AD", "M", "M" ],
25: [ 25, "U", "U", "G", "G", "M", "M", "AD", "M", "M" ],
26: [ 26, "U", "U", "G", "G", "M", "M", "AD", "M", "M" ],
27: [ 27, "U", "U", "G", "G", "M", "M", "AD", "M", "M" ],
28: [ 28, "U", "U", "G", "G", "M", "M", "AD", "M", "M" ],
29: [ 29, "U", "U", "G", "G", "M", "M", "AD", "M", "M" ],
30: [ 30, "U", "U", "G", "G", "M", "M", "AD", "M", "M" ],
31: [ 31, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
32: [ 32, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
33: [ 33, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
34: [ 34, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
35: [ 35, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
36: [ 36, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
37: [ 37, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
38: [ 38, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
39: [ 39, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
40: [ 40, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
41: [ 41, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
42: [ 42, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
43: [ 43, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
44: [ 44, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
45: [ 45, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
46: [ 46, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
47: [ 47, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
48: [ 48, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
49: [ 49, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
50: [ 50, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
51: [ 51, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
52: [ 52, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
53: [ 53, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
54: [ 54, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
55: [ 55, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
56: [ 56, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
57: [ 57, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
58: [ 58, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
59: [ 59, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ],
60: [ 60, "U", "U", "G", "G", "M", "M", "M", "AD", "M" ]
};
cc._RF.pop();
}, {} ],
DataManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8fa84j3BbNPpL1hUWIcuqxq", "DataManager");
var n = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = [];
function r(t, e) {
o.push(e);
}
var a = function() {
function t() {
this.signdays = 0;
this.signtime = 0;
this.share_count = 0;
this.share_count_total = 0;
this.watch_ad_count = 0;
this.watch_ad_count_total = 0;
this.savedatatime = 0;
this.signinfo = {
sign_index: 0,
sign_time: 0,
sign_beisu: 0
};
}
t.Instance = function() {
null == t.instance && (t.instance = new t());
return t.instance;
};
t.prototype.getAllSData = function() {
for (var t = {}, e = 0; e < o.length; ++e) t[o[e]] = this[o[e]];
return t;
};
t.instance = null;
n([ r ], t.prototype, "signdays", void 0);
n([ r ], t.prototype, "signtime", void 0);
n([ r ], t.prototype, "share_count", void 0);
n([ r ], t.prototype, "savedatatime", void 0);
n([ r ], t.prototype, "signinfo", void 0);
return t;
}();
i.default = a;
cc._RF.pop();
}, {} ],
DebugTools: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "afc5a/e3ihDopuoBgs/d9wY", "DebugTools");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {};
return r([ c ], e);
}(cc.Component));
i.default = s;
cc._RF.pop();
}, {} ],
DropChickView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c0f634S9eFEnaf/sMGhqJY3", "DropChickView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../manager/AdCenter"), s = t("../../manager/ChickData"), l = t("../../manager/WxCenter"), u = t("../../utils/AudioMgr"), h = t("../../utils/Utils"), d = t("../Config"), f = cc._decorator, p = f.ccclass, _ = (f.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.superPot = [];
return e;
}
e.prototype.start = function() {
c.default.Instance().showGridAd();
h.default.playBreath(this.GetGameObject("btn_ad"));
l.default.aldReport("AirdropShow", "show");
};
e.prototype.onDestroy = function() {
c.default.Instance().hideGridAd();
t.prototype.onDestroy.call(this);
};
e.prototype.getBigPot = function(t) {
void 0 === t && (t = !1);
for (var e = s.default.user.getLvlMax(), i = d.Config_dropAwwards[e + ""][1], n = t ? 8 : 4, o = [], r = 0; r < n; r++) o.push(i);
return o;
};
e.prototype.MTZesda_xxxx_fun = function() {
console.log("t87gdsFj7Bpwesx");
};
e.prototype.onUIClicked = function(t) {
var e = this, i = t.target.name;
u.default.Instance().playMX("click");
switch (i) {
case "btn_close":
this.closeUI();
break;

case "btn_normal":
l.default.aldReport("AirdropClick", "click");
var n = this.getBigPot();
s.default.user.DropGiftPts = s.default.user.DropGiftPts.concat(n);
this.closeUI();
break;

case "btn_ad":
l.default.aldReport("AirdropClick", "click");
c.default.Instance().play(function(t) {
if (t) {
var i = e.getBigPot(!0);
s.default.user.DropGiftPts = s.default.user.DropGiftPts.concat(i);
e.closeUI();
}
});
}
};
return r([ p ], e);
}(a.default));
i.default = _;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../manager/WxCenter": "WxCenter",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils",
"../Config": "Config"
} ],
DropItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "03261H2ZItEobjIpVqJKX/g", "DropItem");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../utils/AudioMgr"), s = t("../../utils/Utils"), l = cc._decorator, u = l.ccclass, h = (l.property, 
function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
var t = this;
this.node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(function() {
t.Comming();
})));
};
e.prototype.Comming = function() {
var t = this;
this.node.runAction(cc.sequence(cc.callFunc(function() {
t.node.position = cc.v3(-cc.winSize.width / 2 - 200, cc.winSize.height / 4 - 100);
}), cc.moveTo(20, cc.winSize.width / 2 + 200, cc.winSize.height / 4 - 100)).repeatForever());
};
e.prototype.onUIClicked = function(t) {
var e = this, i = t.target.name;
c.default.Instance().playMX("click");
switch (i) {
case "FairyItem":
this.node.stopAllActions();
this.node.position = cc.v3(-cc.winSize.width / 2 - 200, cc.winSize.height / 4 - 100);
this.node.runAction(cc.sequence(cc.delayTime(40), cc.callFunc(function() {
e.Comming();
})));
s.default.createUI("prefab/FairyBonusUI");
}
};
return r([ u ], e);
}(a.default));
i.default = h;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils"
} ],
Enemy: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7abb6Nw6whC5Ira83PINgLj", "Enemy");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../framwork/BaseUI"), l = t("../../manager/ChickData"), u = t("../../utils/AudioMgr"), h = t("../../utils/Utils"), d = t("../Config"), f = t("../HallScene"), p = cc._decorator, _ = p.ccclass, m = p.property, y = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.getcoin_pre = null;
e.maxhp = 0;
e.hp = 0;
e.money = 0;
e.type = 0;
e.bfrozen = !1;
e.pathindex = 1;
e.sped = 1;
e.base_speed = 50;
e.redendtime = 0;
e.purpleendtime = 0;
return e;
}
i = e;
e.prototype.getBossMoney = function() {
if (2 == this.type) {
l.default.user.double_income_time > h.default.getServerTime() && (this.money *= 2);
return (this.maxhp - this.hp) / this.maxhp * this.money;
}
return 0;
};
e.prototype.setID = function(t, e) {
return a(this, void 0, void 0, function() {
var i, n, o, r, a, s;
return c(this, function(c) {
switch (c.label) {
case 0:
this.type = e ? 1 : 0;
i = d.Config_animals[t + ""];
if (t > 100) {
t -= 100;
this.type = 2;
}
t > 52 && (t = h.default.getRandomInt(1, 52));
this.GetGameObject("sp").scale = 2 == this.type ? 1 : .74;
this.sped = i[2] * this.base_speed;
this.maxhp = i[1];
this.hp = this.maxhp;
this.money = Math.floor(i[3] * h.default.getRandom(.8, 1.2));
this.node.position = f.default.Instance.path[0];
this.node.scale = 0 == this.type ? .8 : 1;
u.default.Instance().playMX("chuxian");
n = "spine:enemy" + t + "_ske";
o = "spine:enemy" + t + "_tex";
r = this.GetDragonAmature("sp");
a = r;
return [ 4, h.default.loadRes(n, dragonBones.DragonBonesAsset) ];

case 1:
a.dragonAsset = c.sent();
s = r;
return [ 4, h.default.loadRes(o, dragonBones.DragonBonesAtlasAsset) ];

case 2:
s.dragonAtlasAsset = c.sent();
r.armatureName = "Armature";
r.playAnimation("run", 0);
this.GetGameObject("New ProgressBar").opacity = 0;
return [ 2 ];
}
});
});
};
e.prototype.hit = function(t, e) {
var i = this;
if (!(this.hp <= 0)) {
var n = d.Config_chick[t - 1], o = Number(n[2]), r = !1, a = !1;
if (1 == e) {
this.slowdown();
a = !0;
} else if (2 == e) {
o *= 2;
r = !0;
a = !0;
} else if (3 == e) {
a = !0;
this.frozen();
}
this.hp -= o;
this.hp = Math.max(this.hp, 0);
this.SetProgressBar("New ProgressBar", this.hp / this.maxhp);
this.GetGameObject("New ProgressBar").stopAllActions();
this.GetGameObject("New ProgressBar").opacity = 255;
this.GetGameObject("New ProgressBar").runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.2, 0)));
a || u.default.Instance().playMX("hit");
r ? this.showBJ(o, h.default.getRandom(0, 1) > .5) : this.showHurt(o, h.default.getRandom(0, 1) > .5);
if (this.hp <= 0) {
f.default.Instance.enemyDie(this.node, !1);
this.GetGameObject("sp").runAction(cc.sequence(cc.delayTime(.5), cc.fadeTo(.2, 0), cc.callFunc(function() {
i.node.removeFromParent(!0);
})));
l.default.user.double_income_time > h.default.getServerTime() && (this.money *= 2);
if (2 != this.type) {
var c = cc.instantiate(this.getcoin_pre);
c.parent = this.node.parent;
c.getChildByName("lbl_add_coin").getComponent(cc.Label).string = h.default.formatNumber(this.money);
c.position = this.node.position.add(cc.v3(0, 50, 0));
c.zIndex = 1e3;
c.scale = .5;
l.default.user.coin += this.money;
c.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, 1.3), cc.moveBy(.2, 0, 80)), cc.delayTime(.8), cc.spawn(cc.moveBy(.5, 50), cc.fadeTo(.5, 50)), cc.removeSelf()));
}
this.playSkeAni("spine:other/zhuoshao", "effect", this.node, cc.v3(0, 75, 0), 1).then(function(t) {
t.scale = 2;
});
} else {
this.playSkeAni("spine:other/jizhong", "animation", this.node, cc.v3(0, 75, 0), 1);
this.redendtime = h.default.getServerTime() + 300;
}
}
};
e.prototype.slowdown = function() {
var t = this;
u.default.Instance().playMX("skill_slow");
this.GetDragonAmature("sp").timeScale = .5;
this.GetGameObject("jiansu").active = !0;
this.GetGameObject("sp").stopAllActions();
this.GetGameObject("sp").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
t.GetGameObject("sp").color = cc.Color.WHITE;
t.GetDragonAmature("sp").timeScale = 1;
t.GetGameObject("jiansu").active = !1;
})));
};
e.prototype.frozen = function() {
var t = this;
u.default.Instance().playMX("skill_freeze");
this.bfrozen = !0;
this.GetGameObject("fx_stun").stopAllActions();
this.GetGameObject("fx_stun").active = !0;
this.purpleendtime = h.default.getServerTime() + 1e3;
this.GetGameObject("fx_stun").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
t.GetGameObject("fx_stun").active = !1;
t.bfrozen = !1;
})));
};
e.prototype.update = function(t) {
t > 1 && (t = 1);
this.redendtime > h.default.getServerTime() ? this.GetGameObject("sp").color = cc.Color.RED.fromHEX("#7C82DE") : this.purpleendtime > h.default.getServerTime() ? this.GetGameObject("sp").color = cc.Color.RED.fromHEX("#ED7373") : this.GetGameObject("sp").color = cc.Color.WHITE;
if (!this.bfrozen && f.default.Instance.path[this.pathindex]) {
var e = f.default.Instance.path[this.pathindex].sub(this.node.position);
if (e.mag() < this.sped * t) {
this.node.position = f.default.Instance.path[this.pathindex];
this.pathindex++;
3 == this.pathindex && (this.GetGameObject("sp").scaleX = -.74);
if (this.pathindex >= f.default.Instance.path.length) {
f.default.Instance.enemyDie(this.node, !0);
this.node.removeFromParent(!0);
}
} else {
var n = e.normalize().mul(i.mul * this.sped * t);
this.node.position = this.node.position.add(n);
}
}
};
e.prototype.showHurt = function(t, e) {
void 0 === e && (e = !1);
var i, n = cc.instantiate(this.GetGameObject("fs_hurt"));
n.parent = this.node;
e && (n.x *= -1);
n.getComponent(cc.Label).string = h.default.formatCoin(t);
n.active = !0;
i = e ? [ cc.v2(-10, 50), cc.v2(-40, 60), cc.v2(-60, 20) ] : [ cc.v2(10, 50), cc.v2(40, 60), cc.v2(60, 20) ];
var o = cc.bezierBy(1, i);
n.runAction(cc.sequence(cc.spawn(cc.scaleTo(1, .6), o), cc.removeSelf()));
};
e.prototype.showBJ = function(t, e) {
void 0 === e && (e = !1);
u.default.Instance().playMX("skill_crit");
var i, n, o = cc.instantiate(this.GetGameObject("wl_baoji"));
o.parent = this.node;
e && (o.x *= -1);
o.getComponent(cc.Label).string = h.default.formatCoin(t);
o.active = !0;
o.scale = .2;
if (e) {
i = [ cc.v2(-5, 20), cc.v2(-8, 30), cc.v2(-10, 30) ];
n = [ cc.v2(-5, -20), cc.v2(-8, -30), cc.v2(-10, -30) ];
} else {
i = [ cc.v2(5, 20), cc.v2(8, 30), cc.v2(10, 30) ];
n = [ cc.v2(5, -20), cc.v2(8, -30), cc.v2(10, -30) ];
}
var r = cc.bezierBy(.2, i), a = cc.bezierBy(.5, n);
o.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, 1), r), cc.delayTime(.5), cc.spawn(cc.scaleTo(.5, .2), a, cc.fadeOut(.5)), cc.removeSelf()));
};
var i;
e.mul = 1;
r([ m(cc.Prefab) ], e.prototype, "getcoin_pre", void 0);
return i = r([ _ ], e);
}(s.default);
i.default = y;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/ChickData": "ChickData",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils",
"../Config": "Config",
"../HallScene": "HallScene"
} ],
FailView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6d834jVHjpP748RznizFhuk", "FailView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../manager/AdCenter"), s = t("../../manager/ChickData"), l = t("../../manager/WxCenter"), u = t("../../utils/AudioMgr"), h = t("../../utils/Utils"), d = t("../HallScene"), f = cc._decorator, p = f.ccclass, _ = (f.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.coin = 0;
return e;
}
e.prototype.start = function() {
this.GetGameObject("lbl_coin").opacity = 0;
this.GetGameObject("lbl_coin").runAction(cc.sequence(cc.delayTime(.5), cc.fadeTo(1, 255)));
u.default.Instance().playMX("fail");
h.default.playBreath(this.GetGameObject("btn_get"));
l.default.aldReport("FailShow", "show");
};
e.prototype.setInfo = function(t) {
this.coin = t;
this.aTobAnim(1.8 * t);
this.SetText("btn_normal", "领取" + h.default.formatNumber(t) + "金币");
};
e.prototype.FcMb_xxxx_fun = function() {
console.log("CcXaFhTmA53RKRMHjJpQNE2kd");
};
e.prototype.aTobAnim = function(t) {
var e = this, i = Math.ceil(t / 60), n = 0;
this.SetText("lbl_coin", h.default.formatNumber(0));
var o = function() {
if ((n += i) >= t) {
n = t;
e.unschedule(o);
}
e.SetText("lbl_coin", h.default.formatNumber(n));
};
this.schedule(o, 0, 61);
};
e.prototype.closeUI = function() {
this.shutAnim();
d.default.Instance.createEnemys();
};
e.prototype.getCoinReward = function() {
var t = this.coin;
u.default.Instance().playMX("coin");
h.default.flyAnim(0, this.node, "icon_coin", h.default.getRandomInt(5, 10), 100, function(e) {
e && (s.default.user.coin += t);
});
};
e.prototype.onUIClicked = function(t) {
var e = this, i = t.target.name;
u.default.Instance().playMX("click");
switch (i) {
case "btn_close":
this.getCoinReward();
this.closeUI();
break;

case "btn_get":
l.default.aldReport("FailClick", "click");
c.default.Instance().play(function() {
e.getCoinReward();
e.closeUI();
});
break;

case "btn_normal":
this.getCoinReward();
this.closeUI();
}
};
return r([ p ], e);
}(a.default));
i.default = _;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../manager/WxCenter": "WxCenter",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils",
"../HallScene": "HallScene"
} ],
GameConst: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "278a8hJybJP3aVcSqpkGbLn", "GameConst");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GAME_NAME = i.share_urls = i.share_titles = void 0;
var n = function() {
function t() {}
t.cache_chick_data_key = "local_all_chick_data_key";
t.BUY_CHICK = "BUY_CHICK";
t.NEW_CHICK = "NEW_CHICK";
t.OPEN_GROUND = "OPEN_GROUND";
return t;
}();
i.default = n;
i.share_titles = [];
i.share_urls = [];
i.GAME_NAME = "PVSZ";
cc._RF.pop();
}, {} ],
GameEvent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7698aOBsGFKDogqTQs289dG", "GameEvent");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.eventHash = {};
e.ower = null;
e.type = null;
e.callback = null;
return e;
}
e.prototype.register = function(t, e, i) {
var n = {};
n.ower = t;
n.type = e;
n.callback = i;
this.eventHash.hasOwnProperty(e) || (this.eventHash[e] = []);
this.eventHash[e].push(n);
};
e.prototype.dispatch = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
var n = this.eventHash[t];
if (n && n.length > 0) for (var o in n) {
var r = n[o];
r.callback && r.callback.apply(r, e);
}
};
e.prototype.unregister = function(t, e) {
var i = this.eventHash[e];
i && i.length > 0 && i.forEach(function(n, o) {
n.ower === t && n.type === e && i.splice(o, 1);
});
};
return e;
}(t("../manager/Singleton").default);
i.default = r;
cc._RF.pop();
}, {
"../manager/Singleton": "Singleton"
} ],
GroundItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "698053mR6RLi5RtkgJOjimr", "GroundItem");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../framwork/BaseUI"), c = t("../manager/ChickData"), s = t("./Config"), l = cc._decorator, u = l.ccclass, h = (l.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.index = 0;
return e;
}
i = e;
e.getNeedOpen = function() {
for (var t = -1, e = 1; e < 12; ++e) if (0 == c.default.user.slots[e]) {
t = e;
break;
}
return t;
};
e.prototype.onUIClicked = function() {};
e.prototype.setIndex = function(t) {
this.index = t;
this.SetText("lbl_index", t + "");
var e = i.getNeedOpen();
this.node.getComponent(cc.Button).interactable = this.index - 1 >= e && -1 != e;
var n = c.default.user.slots[t - 1];
this.GetGameObject("lock").active = 0 == n;
this.GetGameObject("lbl_index").active = 0 == n;
this.GetGameObject("node_cost").active = 0 == n;
var o = s.Config_ground[t - 1].price + "关";
this.SetText("lbl_open_cost", o);
};
var i;
return i = r([ u ], e);
}(a.default));
i.default = h;
cc._RF.pop();
}, {
"../framwork/BaseUI": "BaseUI",
"../manager/ChickData": "ChickData",
"./Config": "Config"
} ],
HallScene: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b649a1nCtpCaLao7q4JfaAs", "HallScene");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../framwork/BaseUI"), l = t("../framwork/MsgToast"), u = t("../manager/ChickData"), h = t("../manager/WxCenter"), d = t("../utils/AudioMgr"), f = t("../utils/Utils"), p = t("./Config"), _ = t("./prefab/CommonView"), m = t("./prefab/ShareView"), y = t("./prefab/Enemy"), g = t("./prefab/FailView"), v = t("./prefab/OfflineAwardUI"), b = t("./prefab/ShopView"), w = t("./prefab/WinView"), I = t("./GroundItem"), C = t("./ChickItem"), O = t("./prefab/CoinNotEnoughUI"), A = cc._decorator, M = A.ccclass, G = A.property, T = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.enemy_pre = null;
e._lastdroptime = 0;
e.enemylist = [];
e.wave_info = null;
e.bFail = !1;
e.createcomplete = !1;
e.path = [];
e.item_drag = null;
e.autocomindexs = [ -1, -1 ];
e.items = [];
e.bPauseAutoCom = !1;
e.bInAutoCom = !1;
e.bRecorder = !1;
e.recordertime = 0;
e.isInAngry = !1;
e.pre_soldier = null;
e.bChoosed = !1;
e.touchPos = cc.Vec2.ZERO;
e.touchendtime = 0;
return e;
}
i = e;
Object.defineProperty(e, "Instance", {
get: function() {
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.hidComposeTips = function() {
for (var t = 0, e = this.GetGameObject("slots").children; t < e.length; t++) e[t].getChildByName("fx_ground_merge").active = !1;
};
e.prototype.showComposetips = function(t) {
for (var e = [], i = 0, n = this.items; i < n.length; i++) {
var o = n[i];
o.datacopy && o.datacopy.lv == t && 0 == o.droptype && o.datacopy.lv < 60 && e.push(o.index);
}
for (var r = this.GetGameObject("slots"), a = 0; a < r.children.length; ++a) r.children[a].getChildByName("fx_ground_merge").active = e.indexOf(a) >= 0;
};
e.prototype.update = function(t) {
t > 1 && (t = 1);
this.SetText("lbl_coin", f.default.formatNumber(u.default.user.coin) + "");
this.enemylist.sort(function(t, e) {
return e.y - t.y;
});
for (var e = 0; e < this.enemylist.length; ++e) this.enemylist[e].zIndex = e;
this._lastdroptime += t;
if (this._lastdroptime > 25 * (u.default.user.drop_plant_time > f.default.getServerTime() ? .3 : 1)) {
if (this.item_drag.datacopy) return;
var i = Math.max(1, u.default.user.getLvlMax() - f.default.getRandomInt(6, 9));
this.buyChick(i, 3);
this._lastdroptime = 0;
}
0 != this.touchendtime && f.default.getServerTime() - this.touchendtime > 5e3 && this.composeTip();
};
e.prototype.showImage = function(t) {
return a(this, void 0, void 0, function() {
var e, i;
return c(this, function(n) {
switch (n.label) {
case 0:
e = new cc.Node();
i = e.addComponent(cc.Sprite);
return [ 4, f.default.loadRes(t, cc.SpriteFrame) ];

case 1:
i.spriteFrame = n.sent();
e.parent = this.node;
e.y = 200;
e.scale = 1.2;
e.runAction(cc.sequence(cc.delayTime(2), cc.spawn(cc.moveBy(.5, 0, 100), cc.fadeTo(.5, 0)), cc.removeSelf()));
return [ 2 ];
}
});
});
};
e.prototype.enemyDie = function(t, e) {
var i = !1, n = !1;
e && (this.bFail = !0);
for (var o = this.enemylist.length - 1; o >= 0; --o) if (t == this.enemylist[o]) {
this.enemylist.splice(o, 1);
break;
}
if (this.createcomplete && 0 == this.enemylist.length) {
if (this.bFail) if (u.default.user.wave >= this.wave_info[2]) {
u.default.user.wave = 1;
i = !0;
var r = t.getComponent(y.default);
f.default.createUI("prefab/LoseUI").then(function(t) {
t.getComponent(g.default).setInfo(r.getBossMoney());
});
} else {
u.default.user.wave = 1;
this.showImage("texture/defeat");
} else {
u.default.user.wave++;
n = !0;
if (u.default.user.wave > this.wave_info[2]) {
var a = t.getComponent(y.default).getBossMoney();
this.node.runAction(cc.sequence(cc.delayTime(1.2), cc.callFunc(function() {
f.default.createUI("prefab/VictoryUI").then(function(t) {
t.getComponent(w.default).setInfo(a);
});
})));
i = !0;
u.default.user.wave = 1;
u.default.user.lv++;
this.openNewGround();
u.default.save(!0);
var c = u.default.user.lv + "_" + u.default.user.wave;
this.wave_info = p.User_level[c];
h.default.aldLevelReport(u.default.user.lv);
} else {
d.default.Instance().playMX("win_wave");
this.playSkeAni("spine:other/shengjichenggong", "effect", this.node, cc.v3(0, 150, 0), 2);
}
}
if (i) return;
this.createEnemys(n);
}
};
e.prototype.createEnemys = function(t) {
var e = this;
void 0 === t && (t = !1);
this.bFail = !1;
this.createcomplete = !1;
var i = u.default.user.lv + "_" + u.default.user.wave;
this.wave_info = p.User_level[i];
if (!this.wave_info) {
var n = "60_" + u.default.user.wave;
this.wave_info = p.User_level[n];
}
if (u.default.user.wave == this.wave_info[2]) {
d.default.Instance().playMusic("bgBoss");
this.node.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
f.default.createUI("prefab/BossCommingUI");
})));
} else 1 == u.default.user.wave && d.default.Instance().playMusic("BGM1");
for (var o, r = [], a = 0; a < this.wave_info[4]; ++a) r.push(this.wave_info[3]);
o = r.length;
for (a = 0; a < this.wave_info[6]; ++a) r.push(this.wave_info[5]);
var c = function(t) {
var i = r[t];
s.node.runAction(cc.sequence(cc.delayTime(2.2 * t), cc.callFunc(function() {
var n = cc.instantiate(e.enemy_pre);
n.parent = e.GetGameObject("node_obj");
n.getComponent(y.default).setID(i, t >= o);
e.enemylist.push(n);
t == r.length - 1 && (e.createcomplete = !0);
})));
}, s = this;
for (a = 0; a < r.length; ++a) c(a);
this.SetText("lbl_cur_lv", u.default.user.lv + "");
this.SetText("lbl_waves", u.default.user.wave + "/" + this.wave_info[2]);
this.SetText("lbl_pre_lv", u.default.user.lv - 1 + "");
this.SetText("lbl_nex_lv", u.default.user.lv + 1 + "");
t && f.default.playBreath(this.GetGameObject("lbl_waves"), 1, 3, .5, !1);
};
e.prototype.initComposeChicks = function() {
for (var t = u.default.user.ComPlants, e = {}, i = t.length - 1; i >= 0; i--) {
t[i].lv > 60 && (t[i].lv = 60);
if (1 != e[t[i].index]) e[t[i].index] = 1; else {
t.splice(i, 1);
console.warn("错误...修正");
}
}
for (i = t.length - 1; i >= 0; i--) this.items[t[i].index] && this.items[t[i].index].setItemData(t[i]);
};
e.prototype.getItemByPos = function(t) {
for (var e = 0; e < this.items.length; ++e) if (this.items[e].node.getBoundingBox().contains(t)) return this.items[e].node.getComponent(C.default);
return null;
};
e.prototype.setDragPos = function(t) {
t = this.GetGameObject("node_com").convertToWorldSpaceAR(t);
t = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(t);
this.GetGameObject("item_drag").position = t;
};
e.prototype.start = function() {
return a(this, void 0, void 0, function() {
var t, e, n, o, r, a, s, l, d, p, m = this;
return c(this, function(c) {
switch (c.label) {
case 0:
h.default.aldReport("HomeShow", "show");
this.hidComposeTips();
i._instance = this;
t = this.GetGameObject("slots");
e = 0;
for (n = 0, o = t.children; n < o.length; n++) o[n].getComponent(I.default).setIndex(++e);
return [ 4, this.initView() ];

case 1:
c.sent();
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
m.startAutoCompose();
if (!m.item_drag.node.active) {
u.default.user.DropGiftPts.length > 0 && m.buyChick(u.default.user.DropGiftPts[0], 4) && u.default.user.DropGiftPts.shift();
u.default.user.AdBuyNotDrop.length > 0 && m.buyChick(u.default.user.AdBuyNotDrop[0], 2) && u.default.user.AdBuyNotDrop.shift();
}
})).repeatForever());
u.default.user.auto_com_time = Math.max(0, u.default.user.auto_com_time);
u.default.user.double_income_time = Math.max(0, u.default.user.double_income_time);
u.default.user.drop_plant_time = Math.max(0, u.default.user.drop_plant_time);
u.default.user.double_att_time = Math.max(0, u.default.user.double_att_time);
this.updateBuyButton();
r = u.default.user.serverTime;
a = (f.default.getServerTime() - r) / 1e3;
if (0 != r && a > 180) {
a = Math.min(21600, a);
s = u.default.user.getOfflineReward(a / 60);
f.default.createUI("prefab/OfflineAwardUI", null, function(t) {
t.getComponent(v.default).data = s;
});
}
for (l = 0, d = this.GetGameObject("node_path").children; l < d.length; l++) {
p = d[l];
this.path.push(p.position);
}
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
m.createEnemys();
})));
this.GetGameObject("bottom").runAction(cc.sequence(cc.callFunc(function() {
var t = u.default.user.double_att_time - f.default.getServerTime() > 0, e = u.default.user.double_income_time - f.default.getServerTime() > 0, i = u.default.user.drop_plant_time - f.default.getServerTime() > 0;
u.default.user.double_att_time - f.default.getServerTime() > 6e4 * _.MAX_DOUBLE_ATT_TIME && (u.default.user.double_att_time = f.default.getServerTime());
u.default.user.double_income_time - f.default.getServerTime() > 6e4 * _.MAX_DOUBLE_INCOME_TIME && (u.default.user.double_income_time = f.default.getServerTime());
u.default.user.auto_com_time - f.default.getServerTime() > 6e4 * _.MAX_AUTO_COM_TIME && (u.default.user.auto_com_time = f.default.getServerTime());
u.default.user.drop_plant_time - f.default.getServerTime() > 6e4 * _.MAX_DROP_PLANT_TIME && (u.default.user.drop_plant_time = f.default.getServerTime());
m.breathAngry(t);
m.SetText("att_x2_time", t ? f.default.getTimeStrByS((u.default.user.double_att_time - f.default.getServerTime()) / 1e3) : "打鸡血");
m.SetText("rewardx2_time", e ? f.default.getTimeStrByS((u.default.user.double_income_time - f.default.getServerTime()) / 1e3) : "双倍");
u.default.user.auto_com_time - f.default.getServerTime() > 0 ? m.SetText("auto_time", f.default.getTimeStrByS((u.default.user.auto_com_time - f.default.getServerTime()) / 1e3)) : m.SetText("auto_time", "自动合成");
m.SetText("lbl_drop_plant", i ? f.default.getTimeStrByS((u.default.user.drop_plant_time - f.default.getServerTime()) / 1e3) : "掉落");
m.GetGameObject("fx_bt_angry").active = m.GetGameObject("att_x2_time").active;
}), cc.delayTime(1)).repeatForever());
this.GetGameObject("btn_delete").opacity = 0;
this.GetGameObject("guild_0").active = 0 == u.default.user.guideIndex;
this.GetGameObject("lupin_gem").runAction(cc.sequence(cc.rotateTo(.3, 20), cc.rotateTo(.3, -10), cc.rotateTo(.2, 0), cc.delayTime(3)).repeatForever());
cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
return [ 2 ];
}
});
});
};
e.prototype.onGameHide = function() {};
e.prototype.onDestroy = function() {
cc.game.off(cc.game.EVENT_SHOW, this.onGameShow);
cc.game.off(cc.game.EVENT_HIDE, this.onGameHide);
t.prototype.onDestroy.call(this);
};
e.prototype.onGameShow = function() {
if (0 != f.default.sharetime && f.default.sharecallback) if (f.default.getServerTime() - f.default.sharetime >= 2e3) f.default.sharecallback(!0); else {
l.default.show("分享失败");
f.default.sharecallback(!1);
}
f.default.sharetime = 0;
f.default.sharecallback = null;
};
e.prototype.openNewGround = function() {
var t = I.default.getNeedOpen();
if (!(t < 0 || p.Config_ground[t].price < u.default.user.lv)) {
u.default.user.slots[t] = 1;
u.default.save();
var e = this.GetGameObject("slots").children[t];
if (e) {
e.getComponent(I.default).setIndex(t);
l.default.show("成功解锁新位置");
}
}
};
e.prototype.breathAngry = function(t) {
var e = this.GetGameObject("btn_angry");
if (e) if (t) {
if (this.isInAngry) {
e.stopAllActions();
e.scaleX = 1;
e.scaleY = 1;
}
this.isInAngry = !1;
} else if (!this.isInAngry) {
this.isInAngry = !0;
e.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(function() {
f.default.playBreath(e).setTag(2);
})).repeat(1)).setTag(1);
}
};
e.prototype.initView = function() {
return a(this, void 0, void 0, function() {
var t, e, i, n, o, r, a = this;
return c(this, function() {
t = this.GetGameObject("node_com");
e = 0;
for (i = 0; i < 12; ++i) {
(n = cc.instantiate(this.pre_soldier)).parent = t;
n.position = this.GetGameObject("slots").children[i].position;
n.name = "itme" + e;
(o = n.getComponent(C.default)).index = e;
this.items.push(o);
++e;
}
(r = cc.instantiate(this.pre_soldier)).parent = t.parent;
r.name = "item_drag";
r.x = -1e3;
this.item_drag = this.GetGameObject("item_drag").getComponent(C.default);
this.item_drag.node.active = !1;
this.item_drag.bDrag = !0;
this.initComposeChicks();
t.on(cc.Node.EventType.TOUCH_START, function(e) {
a.bPauseAutoCom = !0;
a.GetGameObject("node_com").stopAllActions();
if (a.item_drag.node.active && a.item_drag.datacopy) {
a.item_drag.node.stopAllActions();
a.item_drag.linkItem.setItemData(a.item_drag.datacopy);
a.item_drag.node.active = !1;
a.autocomindexs[0] = -1;
a.autocomindexs[1] = -1;
a.item_drag.linkItem = null;
a.GetGameObject("node_com").stopAllActions();
cc.log("取消当前合成");
}
a.item_drag.datacopy = null;
var i = e.getLocation();
i = t.convertToNodeSpaceAR(i);
var n = a.getItemByPos(i);
if (n && 0 != n.droptype) {
n.droptype = 0;
n.updateItem();
}
if (n && n.datacopy && 0 == n.droptype) {
a.touchPos = i;
a.bChoosed = !0;
a.setDragPos(n.node.position);
a.item_drag.index = n.index;
a.item_drag.setItemData(n.datacopy);
a.item_drag.linkItem = n;
a.showComposetips(n.datacopy.lv);
} else {
a.item_drag.node.active = !1;
a.autocomindexs[0] = -1;
a.autocomindexs[1] = -1;
}
}, this);
t.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var i = e.getLocation();
i = t.convertToNodeSpaceAR(i);
if (a.bChoosed && i.sub(a.touchPos).mag() > 15) {
if (null == a.item_drag.datacopy) return;
a.GetGameObject("btn_delete").opacity = 255;
a.item_drag.node.active = !0;
a.item_drag.linkItem.setItemData(null);
a.setDragPos(i);
var n = a.GetGameObject("btn_delete").position;
n = a.GetGameObject("btn_delete").parent.convertToWorldSpaceAR(n);
}
}, this);
t.on(cc.Node.EventType.TOUCH_END, this.composeHandle, this);
t.on(cc.Node.EventType.TOUCH_CANCEL, this.composeHandle, this);
return [ 2 ];
});
});
};
e.prototype.startAutoCompose = function() {
var t = this;
if (!this.bPauseAutoCom && !this.bInAutoCom && f.default.getServerTime() < u.default.user.auto_com_time && !this.bInAutoCom) {
this.initComposeChicks();
for (var e, i = function(i) {
if (!n.items[i] || !n.items[i].datacopy) return "continue";
for (var o = i + 1; o < n.items.length; ++o) if (n.items[o] && n.items[o].datacopy) {
if (n.bInAutoCom) return {
value: void 0
};
if (n.items[i].datacopy.lv == n.items[o].datacopy.lv && 0 == n.items[i].droptype && 0 == n.items[o].droptype && n.items[i].datacopy.lv < 60) {
n.autocomindexs[0] = n.items[i].index;
n.autocomindexs[1] = n.items[o].index;
n.item_drag.linkItem = n.items[o];
n.item_drag.index = n.items[o].index;
n.item_drag.setItemData(n.items[o].datacopy);
n.item_drag.node.active = !0;
n.items[o].setItemData(null);
n.item_drag.node.position = n.items[o].node.position;
n.setDragPos(n.items[o].node);
e = n.GetGameObject("node_com").convertToWorldSpaceAR(n.items[i].node.position);
e = n.GetGameObject("item_drag").parent.convertToNodeSpaceAR(e);
n.bInAutoCom = !0;
n.item_drag.node.stopAllActions();
n.item_drag.node.runAction(cc.sequence(cc.moveTo(.13, cc.v2(e.x, e.y)), cc.callFunc(function() {
t.showCompEff(t.items[i]);
t.bInAutoCom = !1;
})));
return {
value: void 0
};
}
}
}, n = this, o = 0; o < this.items.length; ++o) {
var r = i(o);
if ("object" == typeof r) return r.value;
}
}
};
e.prototype.composeHandle = function(t) {
var e = this;
this.touchendtime = f.default.getServerTime();
this.hidComposeTips();
this.GetGameObject("btn_delete").stopAllActions();
this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(.25), cc.fadeTo(.25, 0)));
this.GetGameObject("node_com").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.bPauseAutoCom = !1;
e.bInAutoCom = !1;
})));
this.bChoosed = !1;
var i = t ? t.getLocation() : cc.Vec2.ZERO;
if (this.item_drag.node.active) {
if (!this.item_drag.datacopy) return;
var n = this.GetGameObject("btn_delete").position;
n = this.GetGameObject("btn_delete").parent.convertToWorldSpaceAR(n);
if (i.sub(cc.v2(n.x, n.y)).mag() < 100) {
this.item_drag.node.active = !1;
this.autocomindexs[0] = -1;
this.autocomindexs[1] = -1;
for (var o = 0, r = 0; r < this.items.length; ++r) this.items[r].datacopy && o++;
if (o <= 2) {
l.default.show("小鸡数量过少不能删除");
this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
this.item_drag.linkItem = null;
this.item_drag.node.active = !1;
return;
}
if (this.item_drag.datacopy.lv >= u.default.user.getLvlMax()) {
l.default.show("最高等级小鸡就不删除了吧！");
this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
this.item_drag.linkItem = null;
this.item_drag.node.active = !1;
return;
}
u.default.user.updateSellChickCoin(this.item_drag.datacopy.index);
this.item_drag.linkItem.setItemData(null);
this.item_drag.linkItem = null;
}
i = this.GetGameObject("node_com").convertToNodeSpaceAR(i);
var a = this.getItemByPos(i);
if (null == a || 0 == u.default.user.slots[a.index] || a == this.item_drag.linkItem || a && 0 != a.droptype) {
this.item_drag.linkItem && this.item_drag.linkItem.setItemData(this.item_drag.datacopy);
this.item_drag.linkItem = null;
this.item_drag.node.stopAllActions();
this.item_drag.node.active = !1;
this.autocomindexs[0] = -1;
this.autocomindexs[1] = -1;
return;
}
if (!a.datacopy) {
this.item_drag.node.active = !1;
this.autocomindexs[0] = -1;
this.autocomindexs[1] = -1;
u.default.user.moveEff(this.item_drag.linkItem.index, a.index);
a.setItemData(this.item_drag.datacopy);
this.item_drag.linkItem.setItemData(null);
this.item_drag.linkItem = null;
return;
}
if (a.datacopy.open == this.item_drag.datacopy.open && a.datacopy.lv == this.item_drag.datacopy.lv && a.datacopy.index != this.item_drag.datacopy.index && 0 == a.droptype && a.datacopy.lv < 60) this.showCompEff(a); else {
this.item_drag.node.active = !1;
this.autocomindexs[0] = -1;
this.autocomindexs[1] = -1;
u.default.user.moveEff(this.item_drag.linkItem.index, a.index);
var c = JSON.parse(JSON.stringify(a.datacopy));
a.setItemData(this.item_drag.datacopy);
this.item_drag.linkItem.setItemData(c);
}
} else {
if (!t) return;
this.item_drag.linkItem = null;
}
};
e.prototype.showCompEff = function(t) {
var e = u.default.user.composeChicks(t.index, this.item_drag.datacopy.index);
this.GetGameObject("guild_1").active = !1;
if (1 == u.default.user.guideIndex) {
u.default.user.guideIndex++;
u.default.save();
}
if (e) {
var i = u.default.user.getChickInfo(t.index);
t.setItemData(i);
this.GetGameObject("item_drag").active = !1;
this.item_drag.datacopy = null;
this.item_drag.linkItem = null;
this.autocomindexs = [ -1, -1 ];
var n = this.GetGameObject("node_com").convertToWorldSpaceAR(t.node.position);
n = this.GetGameObject("item_drag").parent.convertToNodeSpaceAR(n);
this.playSkeAni("spine:other/effect_hecheng", "effect", this.GetGameObject("item_drag").parent, n.add(cc.v3(0, 20, 0)), 1);
}
};
e.prototype.updateBuyButton = function() {
return a(this, void 0, void 0, function() {
var t, e, i, n, o, r;
return c(this, function(a) {
switch (a.label) {
case 0:
(t = u.default.user.getLvlMax() - 3) < 1 && (t = 1);
this.SetText("lbl_buy_lvl", "LV." + t);
this.SetText("lbl_buy_cost", f.default.formatNumber(u.default.user.buyChickPrice(t)));
e = "spine:flower" + t + "_ske";
i = "spine:flower" + t + "_tex";
n = this.GetDragonAmature("chickbuy");
o = n;
return [ 4, f.default.loadRes(e, dragonBones.DragonBonesAsset) ];

case 1:
o.dragonAsset = a.sent();
r = n;
return [ 4, f.default.loadRes(i, dragonBones.DragonBonesAtlasAsset) ];

case 2:
r.dragonAtlasAsset = a.sent();
n.armatureName = "Armature";
n.playAnimation("idleL", 0);
return [ 2 ];
}
});
});
};
e.prototype.buyChick = function(t, e) {
for (var i = null, n = 0; n < 12; ++n) if (0 != u.default.user.slots[n] && !this.items[n].datacopy && this.autocomindexs[0] != n && this.autocomindexs[1] != n) {
i = this.items[n];
break;
}
t || (t = u.default.user.getLvlMax() - 3) < 1 && (t = 1);
if (i) {
if (0 == e) {
var o = u.default.user.buyChickPrice(t);
if (u.default.user.buyChickPrice(t) > u.default.user.coin) {
var r = 0;
u.default.user.today_getchick_times < u.default.user.today_getchick_total ? r = 1 : u.default.user.today_getcoin_times < u.default.user.today_getcoin_total && (r = 2);
r > 0 ? f.default.createUI("prefab/CoinNotEnough").then(function(t) {
t.getComponent(O.default).setViewType(r);
}) : l.default.show("金币不足");
return;
}
u.default.user.coin -= o;
} else if (1 == e) {
var a = Math.min(5, Number(p.Config_chick[t - 1][6]));
if (a > u.default.user.gem) return;
u.default.user.gem -= a;
}
d.default.Instance().playMX("flower_pot_land");
this.composeHandle(null);
i.setItemData(u.default.user.buyChick(i.index, t), e);
this.updateBuyButton();
return !0;
}
if (e <= 2) {
l.default.show("位置不够啦！");
this.GetGameObject("btn_delete").stopAllActions();
this.GetGameObject("btn_delete").opacity = 255;
this.GetGameObject("btn_delete").runAction(cc.sequence(cc.delayTime(.25), cc.fadeTo(.25, 0)));
}
return !1;
};
e.prototype.SEaw_xxxx_fun = function() {
console.log("CBdm4nadpBtrd6wp");
};
e.prototype.composeTip = function() {
this.touchendtime = f.default.getServerTime();
if (!this.bPauseAutoCom && !this.bInAutoCom && !this.bInAutoCom) for (var t = 0; t < this.items.length; ++t) if (this.items[t] && this.items[t].datacopy) for (var e = t + 1; e < this.items.length; ++e) if (this.items[e] && this.items[e].datacopy) {
if (this.bInAutoCom) return;
if (this.items[t].datacopy.lv == this.items[e].datacopy.lv && 0 == this.items[t].droptype && 0 == this.items[e].droptype && this.items[t].datacopy.lv < 60) {
var i = this.items[t].index, n = this.items[e].index;
this.GetGameObject("guild_1").active = !0;
this.GetGameObject("guild_1").zIndex = cc.macro.MAX_ZINDEX;
this.GetGameObject("guild_1").stopAllActions();
var o = this.GetGameObject("slots").children[i].position, r = this.GetGameObject("slots").children[n].position;
this.GetGameObject("guild_1").position = o;
this.GetGameObject("guild_1").runAction(cc.sequence(cc.moveTo(1, cc.v2(r.x, r.y)), cc.moveTo(.1, cc.v2(o.x, o.y))).repeatForever());
return;
}
}
};
e.prototype.onUIClicked = function(t) {
var e = t.target.name;
d.default.Instance().playMX("click");
switch (e) {
case "btn_setting":
f.default.createUI("prefab/SettingUI");
break;

case "btn_sign":
f.default.createUI("prefab/SignUI");
break;

case "btn_buy":
this.buyChick(null, 0);
this.GetGameObject("guild_0").active = !1;
if (0 == u.default.user.guideIndex) {
u.default.user.guideIndex++;
u.default.save();
}
1 == u.default.user.guideIndex && this.composeTip();
break;

case "bt_fast_gen":
f.default.createUI("prefab/AdLayer").then(function(t) {
t.getComponent(_.default).setType(_.EADLAYER.DROP_PLANT);
});
break;

case "btn_angry":
f.default.createUI("prefab/AdLayer").then(function(t) {
t.getComponent(_.default).setType(_.EADLAYER.DOUBLE_ATT);
});
break;

case "btn_double_coin":
f.default.createUI("prefab/AdLayer").then(function(t) {
t.getComponent(_.default).setType(_.EADLAYER.DOUBLE_INCOME);
});
break;

case "bt_auto_merge":
f.default.createUI("prefab/AdLayer").then(function(t) {
t.getComponent(_.default).setType(_.EADLAYER.AUTO_COM);
});
break;

case "btn_shop":
b.default.show();
break;

case "btn_delete":
255 == this.GetGameObject("btn_delete").opacity && l.default.show("拖动到这里卖出");
break;

case "btn_inviate":
h.default.aldReport("InvitationClick", "click");
f.default.createUI("prefab/ShareLayer").then(function(t) {
t.getComponent(m.default).setData();
});
break;

case "btnFreeAd":
f.default.createUI("prefab/MonthCardUI");
break;

case "btn_Recorder":
if (0 == this.bRecorder) {
cc.log("开始录屏");
this.bRecorder = !0;
window.tt && window.tt.getGameRecorderManager().start({
duration: 30
});
} else {
cc.log("结束录屏");
this.bRecorder = !1;
window.tt && window.tt.getGameRecorderManager().stop();
}
}
};
var i;
e._instance = null;
r([ G(cc.Prefab) ], e.prototype, "enemy_pre", void 0);
r([ G(cc.Prefab) ], e.prototype, "pre_soldier", void 0);
return i = r([ M ], e);
}(s.default);
i.default = T;
cc._RF.pop();
}, {
"../framwork/BaseUI": "BaseUI",
"../framwork/MsgToast": "MsgToast",
"../manager/ChickData": "ChickData",
"../manager/WxCenter": "WxCenter",
"../utils/AudioMgr": "AudioMgr",
"../utils/Utils": "Utils",
"./ChickItem": "ChickItem",
"./Config": "Config",
"./GroundItem": "GroundItem",
"./prefab/CoinNotEnoughUI": "CoinNotEnoughUI",
"./prefab/CommonView": "CommonView",
"./prefab/Enemy": "Enemy",
"./prefab/FailView": "FailView",
"./prefab/OfflineAwardUI": "OfflineAwardUI",
"./prefab/ShareView": "ShareView",
"./prefab/ShopView": "ShopView",
"./prefab/WinView": "WinView"
} ],
ListItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "66c9a84a69BcLUb4nTwbgy6", "ListItem");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a, c = cc._decorator, s = c.ccclass, l = c.property, u = c.disallowMultiple, h = c.menu, d = c.executionOrder;
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.TOGGLE = 1] = "TOGGLE";
t[t.SWITCH = 2] = "SWITCH";
})(a || (a = {}));
var f = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.icon = null;
e.title = null;
e.selectedMode = a.NONE;
e.selectedFlag = null;
e.selectedSpriteFrame = null;
e._unselectedSpriteFrame = null;
e._selected = !1;
e._eventReg = !1;
return e;
}
Object.defineProperty(e.prototype, "selected", {
get: function() {
return this._selected;
},
set: function(t) {
this._selected = t;
if (this.selectedFlag) switch (this.selectedMode) {
case a.TOGGLE:
this.selectedFlag.active = t;
break;

case a.SWITCH:
var e = this.selectedFlag.getComponent(cc.Sprite);
e && (e.spriteFrame = t ? this.selectedSpriteFrame : this._unselectedSpriteFrame);
}
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
this._btnCom = this.node.getComponent(cc.Button);
this._btnCom || (this.selectedMode, a.NONE);
if (this.selectedMode == a.SWITCH) {
var t = this.selectedFlag.getComponent(cc.Sprite);
this._unselectedSpriteFrame = t.spriteFrame;
}
};
e.prototype._registerEvent = function() {
if (this._btnCom && this.list.selectedMode > 0 && !this._eventReg) {
var t = new cc.Component.EventHandler();
t.target = this.node;
t.component = "ListItem";
t.handler = "onClickThis";
this._btnCom.clickEvents.unshift(t);
this._eventReg = !0;
}
};
e.prototype.showAni = function(t, e, i) {
var n, o = this;
switch (t) {
case 0:
n = [ cc.scaleTo(.2, .7), cc.moveBy(.3, 0, 2 * this.node.height) ];
break;

case 1:
n = [ cc.scaleTo(.2, .7), cc.moveBy(.3, 2 * this.node.width, 0) ];
break;

case 2:
n = [ cc.scaleTo(.2, .7), cc.moveBy(.3, 0, -2 * this.node.height) ];
break;

case 3:
n = [ cc.scaleTo(.2, .7), cc.moveBy(.3, -2 * this.node.width, 0) ];
break;

default:
n = [ cc.scaleTo(.3, .1) ];
}
(e || i) && n.push(cc.callFunc(function() {
if (i) {
o.list._delSingleItem(o.node);
for (var t = o.list.displayData.length - 1; t >= 0; t--) if (o.list.displayData[t].id == o.listId) {
o.list.displayData.splice(t, 1);
break;
}
}
e();
}));
this.node.runAction(cc.sequence(n));
};
e.prototype.onClickThis = function() {
this.list.selectedId = this.listId;
};
r([ l({
type: cc.Sprite,
tooltip: !1
}) ], e.prototype, "icon", void 0);
r([ l({
type: cc.Node,
tooltip: !1
}) ], e.prototype, "title", void 0);
r([ l({
type: cc.Enum(a),
tooltip: !1
}) ], e.prototype, "selectedMode", void 0);
r([ l({
type: cc.Node,
tooltip: !1,
visible: function() {
return this.selectedMode > a.NONE;
}
}) ], e.prototype, "selectedFlag", void 0);
r([ l({
type: cc.SpriteFrame,
tooltip: !1,
visible: function() {
return this.selectedMode == a.SWITCH;
}
}) ], e.prototype, "selectedSpriteFrame", void 0);
return r([ s, u(), h("自定义组件/List Item"), d(-5001) ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {} ],
List: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "747f8Ttu9JGQrJfzFDk8XpT", "List");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a, c, s, l = cc._decorator, u = l.ccclass, h = l.property, d = l.disallowMultiple, f = l.menu, p = l.executionOrder, _ = t("./ListItem");
(function(t) {
t[t.NODE = 1] = "NODE";
t[t.PREFAB = 2] = "PREFAB";
})(a || (a = {}));
(function(t) {
t[t.NORMAL = 1] = "NORMAL";
t[t.ADHERING = 2] = "ADHERING";
t[t.PAGE = 3] = "PAGE";
})(c || (c = {}));
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.SINGLE = 1] = "SINGLE";
t[t.MULT = 2] = "MULT";
})(s || (s = {}));
var m = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateType = a.NODE;
e.tmpNode = null;
e.tmpPrefab = null;
e._slideMode = c.NORMAL;
e.pageDistance = .3;
e.pageChangeEvent = new cc.Component.EventHandler();
e._virtual = !0;
e.lackCenter = !1;
e._updateRate = 2;
e.frameByFrameRenderNum = 0;
e.renderEvent = new cc.Component.EventHandler();
e.selectedMode = s.NONE;
e.selectedEvent = null;
e._selectedId = -1;
e._forceUpdate = !1;
e._updateDone = !0;
e._numItems = 0;
e._inited = !1;
e._aniDelRuning = !1;
e._doneAfterUpdate = !1;
e.adhering = !1;
e._adheringBarrier = !1;
e.curPageNum = 0;
return e;
}
Object.defineProperty(e.prototype, "slideModel", {
get: function() {
return this._slideMode;
},
set: function(t) {
this._slideMode = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "virtual", {
get: function() {
return this._virtual;
},
set: function(t) {
null != t && (this._virtual = t);
0 != this._numItems && this._onScrolling(null);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "updateRate", {
get: function() {
return this._updateRate;
},
set: function(t) {
t >= 0 && t <= 6 && (this._updateRate = t);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "selectedId", {
get: function() {
return this._selectedId;
},
set: function(t) {
var e = this;
if (e.selectedMode != s.SINGLE || t != e._selectedId) {
var i;
switch (e.selectedMode) {
case s.SINGLE:
if (t == e._selectedId) return;
if (!(i = e.getItemByListId(t)) && t >= 0) return;
var n = void 0;
e._selectedId >= 0 ? e._lastSelectedId = e._selectedId : e._lastSelectedId = null;
e._selectedId = t;
i && ((n = i.getComponent(_.default)).selected = !0);
if (e._lastSelectedId >= 0) {
var o = e.getItemByListId(e._lastSelectedId);
o && (o.getComponent(_.default).selected = !1);
}
e.selectedEvent && cc.Component.EventHandler.emitEvents([ e.selectedEvent ], i, t, e._lastSelectedId);
break;

case s.MULT:
if (!(i = e.getItemByListId(t))) return;
n = i.getComponent(_.default);
e._selectedId >= 0 && (e._lastSelectedId = e._selectedId);
e._selectedId = t;
var r = !n.selected;
n.selected = r;
var a = e.multSelected.indexOf(t);
r && a < 0 ? e.multSelected.push(t) : !r && a >= 0 && e.multSelected.splice(a, 1);
e.selectedEvent && cc.Component.EventHandler.emitEvents([ e.selectedEvent ], i, t, e._lastSelectedId, r);
}
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "numItems", {
get: function() {
return this._numItems;
},
set: function(t) {
var e = this;
if (e.checkInited(!1)) if (null == t || t < 0) cc.error("numItems set the wrong::", t); else {
e._numItems = t;
e._forceUpdate = !0;
if (e._virtual) {
e._resizeContent();
e._onScrolling(null);
} else {
var i = e.content.getComponent(cc.Layout);
i && (i.enabled = !0);
e._delRedundantItem();
e.firstListId = 0;
if (e.frameByFrameRenderNum > 0) {
for (var n = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum, o = 0; o < n; o++) e._createOrUpdateItem2(o);
if (e.frameByFrameRenderNum < e._numItems) {
e._updateCounter = e.frameByFrameRenderNum;
e._updateDone = !1;
}
} else {
for (o = 0; o < t; o++) e._createOrUpdateItem2(o);
e.actualNumItems = t;
}
}
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "scrollView", {
get: function() {
return this._scrollView;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
this._init();
};
e.prototype.start = function() {
this._init();
};
e.prototype._registerEvent = function() {
var t = this;
t.node.on("touch-up", t._onScrollTouchUp, t);
t.node.on("scroll-began", t._onScrollBegan, t, !0);
t.node.on("scroll-ended", t._onScrollEnded, t, !0);
t.node.on("scrolling", t._onScrolling, t, !0);
};
e.prototype._unregisterEvent = function() {
var t = this;
t.node.off("touch-up", t._onScrollTouchUp, t);
t.node.off("scroll-began", t._onScrollBegan, t, !0);
t.node.off("scroll-ended", t._onScrollEnded, t, !0);
t.node.off("scrolling", t._onScrolling, t, !0);
};
e.prototype.onEnable = function() {
this._registerEvent();
this._init();
};
e.prototype.onDisable = function() {
this._unregisterEvent();
};
e.prototype._init = function() {
var t = this;
if (!t._inited) {
t._scrollView = t.node.getComponent(cc.ScrollView);
if (t._scrollView) {
t.content = t._scrollView.content;
if (t.content) {
t._layout = t.content.getComponent(cc.Layout);
t._align = t._layout.type;
t._resizeMode = t._layout.resizeMode;
t._startAxis = t._layout.startAxis;
t._topGap = t._layout.paddingTop;
t._rightGap = t._layout.paddingRight;
t._bottomGap = t._layout.paddingBottom;
t._leftGap = t._layout.paddingLeft;
t._columnGap = t._layout.spacingX;
t._lineGap = t._layout.spacingY;
t._colLineNum;
t._verticalDir = t._layout.verticalDirection;
t._horizontalDir = t._layout.horizontalDirection;
t.setTemplateItem(t.templateType == a.PREFAB ? t.tmpPrefab.data : t.tmpNode);
t._slideMode != c.ADHERING && t._slideMode != c.PAGE || (t._scrollView.inertia = !1);
t.virtual || (t.lackCenter = !1);
t._lastDisplayData = [];
t.displayData = [];
t._pool = new cc.NodePool();
t._forceUpdate = !1;
t._updateCounter = 0;
t._updateDone = !0;
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
switch (t._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
t._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
t._alignCalcType = 2;
}
break;

case cc.Layout.Type.VERTICAL:
switch (t._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
t._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
t._alignCalcType = 4;
}
break;

case cc.Layout.Type.GRID:
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (t._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
t._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
t._alignCalcType = 4;
}
break;

case cc.Layout.AxisDirection.VERTICAL:
switch (t._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
t._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
t._alignCalcType = 2;
}
}
}
t.content.removeAllChildren();
t._inited = !0;
} else cc.error(t.node.name + "'s cc.ScrollView unset content!");
} else cc.error(t.node.name + " no assembly cc.ScrollView!");
}
};
e.prototype.checkInited = function(t) {
var e = t || !0;
if (!this._inited) {
e && cc.error("List initialization not completed!");
return !1;
}
return !0;
};
e.prototype.setTemplateItem = function(t) {
if (t) {
var e = this;
e._itemTmp = t;
e._resizeMode == cc.Layout.ResizeMode.CHILDREN ? e._itemSize = e._layout.cellSize : e._itemSize = cc.size(e._itemTmp.width, e._itemTmp.height);
e.selectedMode == s.MULT && (e.multSelected = []);
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
e._colLineNum = 1;
e._sizeType = !1;
break;

case cc.Layout.Type.VERTICAL:
e._colLineNum = 1;
e._sizeType = !0;
break;

case cc.Layout.Type.GRID:
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var i = e.content.width - e._leftGap - e._rightGap;
e._colLineNum = 1;
for (;;) {
if (i - (e._colLineNum * e._itemSize.width + (e._colLineNum - 1) * e._columnGap) < 0) {
e._colLineNum--;
break;
}
e._colLineNum++;
}
e._sizeType = !0;
break;

case cc.Layout.AxisDirection.VERTICAL:
var n = e.content.height - e._topGap - e._bottomGap;
e._colLineNum = 1;
for (;;) {
if (n - (e._colLineNum * e._itemSize.height + (e._colLineNum - 1) * e._lineGap) < 0) {
e._colLineNum--;
break;
}
e._colLineNum++;
}
e._sizeType = !1;
}
}
}
};
e.prototype._resizeContent = function() {
var t, e = this;
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
if (e.customSize) {
var i = e._getFixedSize(null);
t = e._leftGap + i.val + e._itemSize.width * (e._numItems - i.count) + e._columnGap * (e._numItems - 1) + e._rightGap;
} else t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
break;

case cc.Layout.Type.VERTICAL:
if (e.customSize) {
i = e._getFixedSize(null);
t = e._topGap + i.val + e._itemSize.height * (e._numItems - i.count) + e._lineGap * (e._numItems - 1) + e._bottomGap;
} else t = e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
break;

case cc.Layout.Type.GRID:
e.lackCenter && (e.lackCenter = !1);
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var n = Math.ceil(e._numItems / e._colLineNum);
t = e._topGap + e._itemSize.height * n + e._lineGap * (n - 1) + e._bottomGap;
break;

case cc.Layout.AxisDirection.VERTICAL:
var o = Math.ceil(e._numItems / e._colLineNum);
t = e._leftGap + e._itemSize.width * o + e._columnGap * (o - 1) + e._rightGap;
}
}
var r, a = e.content.getComponent(cc.Layout);
a && (a.enabled = !1);
e._allItemSize = t;
if (e._sizeType) {
(r = t < e.node.height ? e.node.height - .1 : t) < 0 && (r = 0);
e._lackSize = e.lackCenter ? r : null;
e._allItemSizeNoBorder = e._allItemSize - e._topGap - e._bottomGap;
e.content.height = r;
} else {
(r = t < e.node.width ? e.node.width - .1 : t) < 0 && (r = 0);
e._lackSize = e.lackCenter ? r : null;
e._allItemSizeNoBorder = e._allItemSize - e._leftGap - e._rightGap;
e.content.width = r;
}
};
e.prototype._onScrolling = function(t) {
null == this.frameCount && (this.frameCount = this._updateRate);
if (!this._forceUpdate && t && "scroll-ended" != t.type && this.frameCount > 0) this.frameCount--; else {
this.frameCount = this._updateRate;
if (!this._aniDelRuning) {
this._calcViewPos();
if (this._virtual) {
this.displayData = [];
var e = void 0, i = 0, n = this._numItems - 1;
if (this.customSize) for (var o = !1; i <= n && !o; i++) {
e = this._calcItemPos(i);
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
e.right >= this.viewLeft && e.left <= this.viewRight ? this.displayData.push(e) : 0 != i && this.displayData.length > 0 && (o = !0);
break;

case cc.Layout.Type.VERTICAL:
e.bottom <= this.viewTop && e.top >= this.viewBottom ? this.displayData.push(e) : 0 != i && this.displayData.length > 0 && (o = !0);
break;

case cc.Layout.Type.GRID:
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
e.bottom <= this.viewTop && e.top >= this.viewBottom ? this.displayData.push(e) : 0 != i && this.displayData.length > 0 && (o = !0);
break;

case cc.Layout.AxisDirection.VERTICAL:
e.right >= this.viewLeft && e.left <= this.viewRight ? this.displayData.push(e) : 0 != i && this.displayData.length > 0 && (o = !0);
}
}
} else {
var r = this._itemSize.width + this._columnGap, a = this._itemSize.height + this._lineGap;
switch (this._alignCalcType) {
case 1:
i = (this.viewLeft + this._leftGap) / r;
n = (this.viewRight + this._rightGap) / r;
break;

case 2:
i = (-this.viewRight - this._rightGap) / r;
n = (-this.viewLeft - this._leftGap) / r;
break;

case 3:
i = (-this.viewTop - this._topGap) / a;
n = (-this.viewBottom - this._bottomGap) / a;
break;

case 4:
i = (this.viewBottom + this._bottomGap) / a;
n = (this.viewTop + this._topGap) / a;
}
i = Math.floor(i) * this._colLineNum;
n = Math.ceil(n) * this._colLineNum;
i < 0 && (i = 0);
--n >= this._numItems && (n = this._numItems - 1);
for (;i <= n; i++) this.displayData.push(this._calcItemPos(i));
}
if (this.displayData.length <= 0 || !this._numItems) {
this._delRedundantItem();
return;
}
this.firstListId = this.displayData[0].id;
this.actualNumItems = this.displayData.length;
var c = this._lastDisplayData.length;
if (this._forceUpdate || this.actualNumItems != c || this.firstListId != this._lastDisplayData[0] || this.displayData[this.actualNumItems - 1].id != this._lastDisplayData[c - 1]) {
this._lastDisplayData = [];
if (this.frameByFrameRenderNum > 0) if (this._numItems > 0) {
this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0;
this._updateDone = !1;
} else {
this._delRedundantItem();
this._updateCounter = 0;
this._updateDone = !0;
} else {
for (var s = 0; s < this.actualNumItems; s++) this._createOrUpdateItem(this.displayData[s]);
this._delRedundantItem();
this._forceUpdate = !1;
}
}
this._calcNearestItem();
}
}
}
};
e.prototype._calcItemPos = function(t) {
var e, i, n, o, r, a, c, s;
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
if (this.customSize) {
var l = this._getFixedSize(t);
r = this._leftGap + (this._itemSize.width + this._columnGap) * (t - l.count) + (l.val + this._columnGap * l.count);
e = (u = this.customSize[t]) > 0 ? u : this._itemSize.width;
} else {
r = this._leftGap + (this._itemSize.width + this._columnGap) * t;
e = this._itemSize.width;
}
a = r + e;
if (this.lackCenter && this._lackSize >= 0) {
r += h = this.content.width / 2 - this._allItemSizeNoBorder / 2;
a += h;
}
return {
id: t,
left: r,
right: a,
x: r + this._itemTmp.anchorX * e,
y: this._itemTmp.y
};

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
if (this.customSize) {
l = this._getFixedSize(t);
a = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - l.count) - (l.val + this._columnGap * l.count);
e = (u = this.customSize[t]) > 0 ? u : this._itemSize.width;
} else {
a = -this._rightGap - (this._itemSize.width + this._columnGap) * t;
e = this._itemSize.width;
}
r = a - e;
if (this.lackCenter && this._lackSize >= 0) {
r -= h = this.content.width / 2 - this._allItemSizeNoBorder / 2;
a -= h;
}
return {
id: t,
right: a,
left: r,
x: r + this._itemTmp.anchorX * e,
y: this._itemTmp.y
};
}
break;

case cc.Layout.Type.VERTICAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
if (this.customSize) {
l = this._getFixedSize(t);
n = -this._topGap - (this._itemSize.height + this._lineGap) * (t - l.count) - (l.val + this._lineGap * l.count);
i = (u = this.customSize[t]) > 0 ? u : this._itemSize.height;
} else {
n = -this._topGap - (this._itemSize.height + this._lineGap) * t;
i = this._itemSize.height;
}
o = n - i;
if (this.lackCenter && this._lackSize >= 0) {
n -= h = this.content.height / 2 - this._allItemSizeNoBorder / 2;
o -= h;
}
return {
id: t,
top: n,
bottom: o,
x: this._itemTmp.x,
y: o + this._itemTmp.anchorY * i
};

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
if (this.customSize) {
var u;
l = this._getFixedSize(t);
o = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - l.count) + (l.val + this._lineGap * l.count);
i = (u = this.customSize[t]) > 0 ? u : this._itemSize.height;
} else {
o = this._bottomGap + (this._itemSize.height + this._lineGap) * t;
i = this._itemSize.height;
}
n = o + i;
if (this.lackCenter && this._lackSize >= 0) {
var h;
n += h = this.content.height / 2 - this._allItemSizeNoBorder / 2;
o += h;
}
return {
id: t,
top: n,
bottom: o,
x: this._itemTmp.x,
y: o + this._itemTmp.anchorY * i
};
}

case cc.Layout.Type.GRID:
var d = Math.floor(t / this._colLineNum);
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
s = (o = (n = -this._topGap - (this._itemSize.height + this._lineGap) * d) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
n = (o = this._bottomGap + (this._itemSize.height + this._lineGap) * d) + this._itemSize.height;
s = o + this._itemTmp.anchorY * this._itemSize.height;
}
c = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap);
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
c += this._itemTmp.anchorX * this._itemSize.width;
c -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
c += (1 - this._itemTmp.anchorX) * this._itemSize.width;
c -= (1 - this.content.anchorX) * this.content.width;
c *= -1;
}
return {
id: t,
top: n,
bottom: o,
x: c,
y: s
};

case cc.Layout.AxisDirection.VERTICAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
a = (r = this._leftGap + (this._itemSize.width + this._columnGap) * d) + this._itemSize.width;
c = r + this._itemTmp.anchorX * this._itemSize.width;
c -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
c = (r = (a = -this._rightGap - (this._itemSize.width + this._columnGap) * d) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width;
c += (1 - this.content.anchorX) * this.content.width;
}
s = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap);
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
s -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
s += (1 - this.content.anchorY) * this.content.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
s -= this._itemTmp.anchorY * this._itemSize.height;
s += this.content.anchorY * this.content.height;
s *= -1;
}
return {
id: t,
left: r,
right: a,
x: c,
y: s
};
}
}
};
e.prototype._calcViewPos = function() {
var t = this.content.getPosition();
switch (this._alignCalcType) {
case 1:
this.elasticLeft = t.x > 0 ? t.x : 0;
this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft;
this.viewRight = this.viewLeft + this.node.width;
this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
this.viewRight += this.elasticRight;
break;

case 2:
this.elasticRight = t.x < 0 ? -t.x : 0;
this.viewRight = (t.x > 0 ? -t.x : 0) + this.elasticRight;
this.viewLeft = this.viewRight - this.node.width;
this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
this.viewLeft -= this.elasticLeft;
break;

case 3:
this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0;
this.viewTop = (t.y > 0 ? -t.y : 0) + this.elasticTop;
this.viewBottom = this.viewTop - this.node.height;
this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
this.viewBottom += this.elasticBottom;
break;

case 4:
this.elasticBottom = t.y > 0 ? Math.abs(t.y) : 0;
this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom;
this.viewTop = this.viewBottom + this.node.height;
this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
this.viewTop -= this.elasticTop;
}
};
e.prototype._getFixedSize = function(t) {
if (!this.customSize) return null;
null == t && (t = this._numItems);
var e = 0, i = 0;
for (var n in this.customSize) if (parseInt(n) < t) {
e += this.customSize[n];
i++;
}
return {
val: e,
count: i
};
};
e.prototype._onScrollEnded = function() {
var t = this;
if (null != t.scrollToListId) {
var e = t.getItemByListId(t.scrollToListId);
t.scrollToListId = null;
e && e.runAction(cc.sequence(cc.scaleTo(.1, 1.06), cc.scaleTo(.1, 1)));
}
t._onScrolling(null);
t._slideMode != c.ADHERING || t.adhering ? t._slideMode == c.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere()) : t.adhere();
};
e.prototype._onScrollBegan = function() {
this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
};
e.prototype._onScrollTouchUp = function() {
var t = this;
t._scrollPos = null;
if (t._slideMode == c.ADHERING) {
this.adhering && (this._adheringBarrier = !0);
t.adhere();
} else t._slideMode == c.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere());
};
e.prototype.adhere = function() {
var t = this;
if (!(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
t.adhering = !0;
t._calcNearestItem();
var e = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
t.scrollTo(t.nearestListId, .7, e);
}
};
e.prototype._pageAdhere = function() {
var t = this;
if (!(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
var e = t._sizeType ? t.viewTop : t.viewLeft, i = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
if (Math.abs(t._beganPos - e) > i) switch (t._alignCalcType) {
case 1:
case 4:
t._beganPos > e ? t.prePage(.5) : t.nextPage(.5);
break;

case 2:
case 3:
t._beganPos < e ? t.prePage(.5) : t.nextPage(.5);
} else t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
t._beganPos = null;
}
};
e.prototype.update = function(t) {
t > 1 && (t = 1);
if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
for (var e = this._updateCounter + this.frameByFrameRenderNum > this.actualNumItems ? this.actualNumItems : this._updateCounter + this.frameByFrameRenderNum, i = this._updateCounter; i < e; i++) {
var n = this.displayData[i];
n && this._createOrUpdateItem(n);
}
if (this._updateCounter >= this.actualNumItems - 1) if (this._doneAfterUpdate) {
this._updateCounter = 0;
this._updateDone = !1;
this._scrollView.isScrolling() || (this._doneAfterUpdate = !1);
} else {
this._updateDone = !0;
this._delRedundantItem();
this._forceUpdate = !1;
this._calcNearestItem();
} else this._updateCounter += this.frameByFrameRenderNum;
} else if (this._updateCounter < this._numItems) {
for (e = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, 
i = this._updateCounter; i < e; i++) this._createOrUpdateItem2(i);
this._updateCounter += this.frameByFrameRenderNum;
} else {
this._updateDone = !0;
this._calcNearestItem();
}
};
e.prototype._updateListItem = function(t) {
if (t && this.selectedMode > s.NONE) switch (this.selectedMode) {
case s.SINGLE:
t.selected = this.selectedId == t.listId;
break;

case s.MULT:
t.selected = this.multSelected.indexOf(t.listId) >= 0;
}
};
e.prototype._createOrUpdateItem = function(t) {
var e, i = this.getItemByListId(t.id);
if (i) {
if (this._forceUpdate && this.renderEvent) {
i.setPosition(cc.v2(t.x, t.y));
this._resetItemSize(i);
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], i, t.id);
}
} else {
(i = this._pool.size() ? this._pool.get() : cc.instantiate(this._itemTmp)).setPosition(cc.v2(t.x, t.y));
this._resetItemSize(i);
this.content.addChild(i);
i.setSiblingIndex(this.content.childrenCount - 1);
(e = i.getComponent(_.default)).listId = t.id;
e.list = this;
e._registerEvent();
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], i, t.id);
}
this._resetItemSize(i);
this._updateListItem(e);
this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id);
};
e.prototype._createOrUpdateItem2 = function(t) {
var e, i = this.content.children[t];
if (i) {
if (this._forceUpdate && this.renderEvent) {
(e = i.getComponent(_.default)).listId = t;
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], i, t);
}
} else {
i = cc.instantiate(this._itemTmp);
this.content.addChild(i);
(e = i.getComponent(_.default)).listId = t;
e.list = this;
e._registerEvent();
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], i, t);
}
this._updateListItem(e);
this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t);
};
e.prototype._resetItemSize = function(t) {
var e = t.getComponent(_.default);
if (this.customSize && this.customSize[e.listId]) {
var i = this.customSize[e.listId];
this._align == cc.Layout.Type.HORIZONTAL ? t.width = i : this._align == cc.Layout.Type.VERTICAL && (t.height = i);
} else t.setContentSize(this._itemSize);
};
e.prototype.updateAppointed = function(t) {
Array.isArray(t) || (t = [ t ]);
for (var e = t.length, i = 0; i < e; i++) {
var n = t[i], o = this.getItemByListId(n);
o && cc.Component.EventHandler.emitEvents([ this.renderEvent ], o, n);
}
};
e.prototype.setMultSelected = function(t, e) {
var i = this;
Array.isArray(t) || (t = [ t ]);
if (null == e) {
i.multSelected = null;
i.multSelected = t;
} else {
var n = void 0, o = void 0;
if (e) for (var r = t.length - 1; r >= 0; r--) {
n = t[r];
(o = i.multSelected.indexOf(n)) < 0 && i.multSelected.push(n);
} else for (r = t.length - 1; r >= 0; r--) {
n = t[r];
(o = i.multSelected.indexOf(n)) >= 0 && i.multSelected.splice(o, 1);
}
}
i._forceUpdate = !0;
i._onScrolling(null);
};
e.prototype.getItemByListId = function(t) {
for (var e = this.content.childrenCount - 1; e >= 0; e--) if (this.content.children[e].getComponent(_.default).listId == t) return this.content.children[e];
return null;
};
e.prototype._delRedundantItem = function() {
if (this._virtual) for (var t = this._getOutsideItem(), e = t.length - 1; e >= 0; e--) this._pool.put(t[e]); else for (;this.content.childrenCount > this._numItems; ) this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
};
e.prototype._getOutsideItem = function() {
for (var t, e, i = [], n = this.content.childrenCount - 1; n >= 0; n--) {
t = this.content.children[n];
if (e = !0) for (var o = this.actualNumItems - 1; o >= 0; o--) if (this.displayData[o]) {
var r = this.displayData[o].id;
if (t.getComponent(_.default).listId == r) {
e = !1;
break;
}
}
e && i.push(t);
}
return i;
};
e.prototype.aniDelItem = function(t, e, i) {
var n, o = this, r = o.getItemByListId(t);
if (!o._aniDelRuning && o._virtual) if (r) {
n = r.getComponent(_.default);
o._aniDelRuning = !0;
var a = o.displayData[o.displayData.length - 1].id, c = n.selected;
n.showAni(i, function() {
var i, n, l;
a < o._numItems - 2 && (i = a + 1);
if (null != i) {
var u = o._calcItemPos(i);
o.displayData.push(u);
o._virtual ? o._createOrUpdateItem(u) : o._createOrUpdateItem2(i);
} else o._numItems--;
if (o.selectedMode == s.SINGLE) c ? o._selectedId = -1 : o._selectedId - 1 >= 0 && o._selectedId--; else if (o.selectedMode == s.MULT && o.multSelected.length) {
var h = o.multSelected.indexOf(t);
h >= 0 && o.multSelected.splice(h, 1);
for (var d = o.multSelected.length - 1; d >= 0; d--) (_ = o.multSelected[d]) >= t && o.multSelected[d]--;
}
if (o.customSize) {
o.customSize[t] && delete o.customSize[t];
var f = {}, p = void 0;
for (var _ in o.customSize) {
p = o.customSize[_];
var m = parseInt(_);
f[m - (m >= t ? 1 : 0)] = p;
}
o.customSize = f;
}
for (d = null != i ? i : a; d >= t + 1; d--) if (r = o.getItemByListId(d)) {
var y = o._calcItemPos(d - 1);
n = [ cc.moveTo(.2333, cc.v2(y.x, y.y)) ];
if (d <= t + 1) {
l = !0;
n.push(cc.callFunc(function() {
o._aniDelRuning = !1;
e(t);
}));
}
n.length > 1 ? r.runAction(cc.sequence(n)) : r.runAction(n[0]);
}
if (!l) {
o._aniDelRuning = !1;
e(t);
}
}, !0);
} else e(t);
};
e.prototype._delSingleItem = function(t) {
t.removeFromParent();
t.destroy && t.destroy();
t = null;
};
e.prototype.scrollTo = function(t, e, i, n) {
void 0 === e && (e = .5);
void 0 === i && (i = null);
void 0 === n && (n = !1);
var o = this;
if (o.checkInited(!1)) {
o._scrollView.stopAutoScroll();
null == e ? e = .5 : e < 0 && (e = 0);
t < 0 ? t = 0 : t >= o._numItems && (t = o._numItems - 1);
var r, a, c = o._calcItemPos(t);
switch (o._alignCalcType) {
case 1:
r = c.left;
r -= null != i ? o.node.width * i : o._leftGap;
c = cc.v2(r, 0);
break;

case 2:
r = c.right - o.node.width;
r += null != i ? o.node.width * i : o._rightGap;
c = cc.v2(r + o.content.width, 0);
break;

case 3:
a = c.top;
a += null != i ? o.node.height * i : o._topGap;
c = cc.v2(0, -a);
break;

case 4:
a = c.bottom + o.node.height;
a -= null != i ? o.node.height * i : o._bottomGap;
c = cc.v2(0, -a + o.content.height);
}
var s = o.content.getPosition();
s = Math.abs(o._sizeType ? s.y : s.x);
var l = o._sizeType ? c.y : c.x, u = Math.abs((null != o._scrollPos ? o._scrollPos : s) - l) > .5;
o._scrollView.stopAutoScroll();
if (u) {
o._scrollView.scrollToOffset(c, e);
o.scheduleOnce(function() {
o._adheringBarrier || (o.adhering = o._adheringBarrier = !1);
if (n) {
var e = o.getItemByListId(t);
e && e.runAction(cc.sequence(cc.scaleTo(.1, 1.05), cc.scaleTo(.1, 1)));
}
}, e + .1);
e <= 0 && o._onScrolling(null);
}
}
};
e.prototype.calcCustomSize = function(t) {
var e = this;
if (!e._itemTmp) return cc.error("Unset template item!");
if (!e.renderEvent) return cc.error("Unset Render-Event!");
e.customSize = {};
var i = cc.instantiate(e._itemTmp);
e.content.addChild(i);
for (var n = 0; n < t; n++) {
cc.Component.EventHandler.emitEvents([ e.renderEvent ], i, n);
i.height == e._itemSize.height && i.width == e._itemSize.width || (e.customSize[n] = e._sizeType ? i.height : i.width);
}
Object.keys(e.customSize).length || (e.customSize = null);
i.removeFromParent();
i.destroy && i.destroy();
return e.customSize;
};
e.prototype._calcNearestItem = function() {
this.nearestListId = null;
var t, e;
this._virtual && this._calcViewPos();
for (var i = !1, n = 0; n < this.content.childrenCount && !i; n += this._colLineNum) {
t = this._virtual ? this.displayData[n] : this._calcExistItemPos(n);
e = this._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;
switch (this._alignCalcType) {
case 1:
if (t.right >= this.viewLeft) {
this.nearestListId = t.id;
this.viewLeft > e && (this.nearestListId += this._colLineNum);
i = !0;
}
break;

case 2:
if (t.left <= this.viewRight) {
this.nearestListId = t.id;
this.viewRight < e && (this.nearestListId += this._colLineNum);
i = !0;
}
break;

case 3:
if (t.bottom <= this.viewTop) {
this.nearestListId = t.id;
this.viewTop < e && (this.nearestListId += this._colLineNum);
i = !0;
}
break;

case 4:
if (t.top >= this.viewBottom) {
this.nearestListId = t.id;
this.viewBottom > e && (this.nearestListId += this._colLineNum);
i = !0;
}
}
}
if ((t = this._virtual ? this.displayData[this.actualNumItems - 1] : this._calcExistItemPos(this._numItems - 1)) && t.id == this._numItems - 1) {
e = this._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;
switch (this._alignCalcType) {
case 1:
this.viewRight > e && (this.nearestListId = t.id);
break;

case 2:
this.viewLeft < e && (this.nearestListId = t.id);
break;

case 3:
this.viewBottom < e && (this.nearestListId = t.id);
break;

case 4:
this.viewTop > e && (this.nearestListId = t.id);
}
}
};
e.prototype._calcExistItemPos = function(t) {
var e = this.getItemByListId(t);
if (!e) return null;
var i = {
id: t,
x: e.x,
y: e.y
};
if (this._sizeType) {
i.top = e.y + e.height * (1 - e.anchorY);
i.bottom = e.y - e.height * e.anchorY;
} else {
i.left = e.x - e.width * e.anchorX;
i.right = e.x + e.width * (1 - e.anchorX);
}
return i;
};
e.prototype.skipPage = function(t, e) {
var i = this;
if (i._slideMode != c.PAGE) return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
if (!(t < 0 || t >= i._numItems) && i.curPageNum != t) {
i.curPageNum = t;
i.pageChangeEvent && cc.Component.EventHandler.emitEvents([ i.pageChangeEvent ], t);
i.scrollTo(t, e);
}
};
e.prototype.prePage = function(t) {
void 0 === t && (t = .5);
this.skipPage(this.curPageNum - 1, t);
};
e.prototype.nextPage = function(t) {
void 0 === t && (t = .5);
this.skipPage(this.curPageNum + 1, t);
};
r([ h({
type: cc.Enum(a),
tooltip: !1
}) ], e.prototype, "templateType", void 0);
r([ h({
type: cc.Node,
tooltip: !1,
visible: function() {
return this.templateType == a.NODE;
}
}) ], e.prototype, "tmpNode", void 0);
r([ h({
type: cc.Prefab,
tooltip: !1,
visible: function() {
return this.templateType == a.PREFAB;
}
}) ], e.prototype, "tmpPrefab", void 0);
r([ h() ], e.prototype, "_slideMode", void 0);
r([ h({
type: cc.Enum(c),
tooltip: !1
}) ], e.prototype, "slideModel", null);
r([ h({
type: cc.Float,
range: [ 0, 1, .1 ],
tooltip: !1,
slide: !0,
visible: function() {
return this._slideMode == c.PAGE;
}
}) ], e.prototype, "pageDistance", void 0);
r([ h({
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
return this._slideMode == c.PAGE;
}
}) ], e.prototype, "pageChangeEvent", void 0);
r([ h() ], e.prototype, "_virtual", void 0);
r([ h({
type: cc.Boolean,
tooltip: !1
}) ], e.prototype, "virtual", null);
r([ h({
tooltip: !1,
visible: function() {
return this.virtual;
}
}) ], e.prototype, "lackCenter", void 0);
r([ h({
type: cc.Integer
}) ], e.prototype, "_updateRate", void 0);
r([ h({
type: cc.Integer,
range: [ 0, 6, 1 ],
tooltip: !1,
slide: !0
}) ], e.prototype, "updateRate", null);
r([ h({
type: cc.Integer,
range: [ 0, 12, 1 ],
tooltip: !1,
slide: !0
}) ], e.prototype, "frameByFrameRenderNum", void 0);
r([ h({
type: cc.Component.EventHandler,
tooltip: !1
}) ], e.prototype, "renderEvent", void 0);
r([ h({
type: cc.Enum(s),
tooltip: !1
}) ], e.prototype, "selectedMode", void 0);
r([ h({
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
return this.selectedMode > s.NONE;
}
}) ], e.prototype, "selectedEvent", void 0);
r([ h({
serializable: !1
}) ], e.prototype, "_numItems", void 0);
return r([ u, d(), f("自定义组件/List"), p(-5e3) ], e);
}(cc.Component);
i.default = m;
cc._RF.pop();
}, {
"./ListItem": "ListItem"
} ],
Loading: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "af4a3CKKPZAwr4aagW/gTcl", "Loading");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./framwork/BaseUI"), l = t("./manager/AdCenter"), u = t("./manager/ChickData"), h = t("./manager/PoolMgr"), d = t("./manager/WxCenter"), f = t("./utils/AudioMgr"), p = t("./utils/Native"), _ = t("./utils/Utils"), m = window.wx || window.tt, y = cc._decorator, g = y.ccclass, v = y.property, b = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.img_shouquan = null;
e.loading_bar = null;
e.progress = 0;
return e;
}
e.prototype.onUIClicked = function(t) {
switch (t.target.name) {
case "btn_rstart":
cc.director.loadScene("loading");
}
};
e.prototype.start = function() {
d.default.init();
d.default.aldReport("LoadingShow", "show");
l.default.Instance().showInterstitialAd();
};
e.prototype.onLoad = function() {
return a(this, void 0, void 0, function() {
var e, i, n = this;
return c(this, function() {
cc.game.setFrameRate(60);
t.prototype.onLoad.call(this);
if (m) {
m.setPreferredFramesPerSecond(60);
m.setKeepScreenOn({
keepScreenOn: !0
});
}
h.default.Instance().loadPrefabs();
this.startLGAction();
e = [ "初次加载时间可能会较长，请耐心等待...." ];
i = 0;
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
n.SetText("desp", e[i]);
++i > e.length - 1 && (i = 0);
})).repeatForever());
p.Native.getAppVersion();
this.GetGameObject("btn_rstart").active = !1;
return [ 2 ];
});
});
};
e.prototype.startLGAction = function() {
var t = this;
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
return a(t, void 0, void 0, function() {
var t, e = this;
return c(this, function() {
u.default.loadData();
t = 0;
this.node.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
return a(e, void 0, void 0, function() {
return c(this, function(e) {
switch (e.label) {
case 0:
t += .018;
this.SetProgressBar("ProgressBar", t);
if (!(t >= 1)) return [ 3, 2 ];
this.node.stopAllActions();
return [ 4, _.default.loadBundler("spine") ];

case 1:
e.sent();
_.default.loadBundler("sounds").then(function() {
f.default.Instance().loadSounds();
});
cc.director.loadScene("hall");
t = 1;
e.label = 2;

case 2:
this.GetGameObject("plane").x = 600 * t - 320;
this.SetText("lbl_progress", ~~(100 * t) + "%");
return [ 2 ];
}
});
});
})).repeatForever());
return [ 2 ];
});
});
})));
};
r([ v(cc.Node) ], e.prototype, "img_shouquan", void 0);
r([ v(cc.Node) ], e.prototype, "loading_bar", void 0);
return r([ g ], e);
}(s.default);
i.default = b;
cc._RF.pop();
}, {
"./framwork/BaseUI": "BaseUI",
"./manager/AdCenter": "AdCenter",
"./manager/ChickData": "ChickData",
"./manager/PoolMgr": "PoolMgr",
"./manager/WxCenter": "WxCenter",
"./utils/AudioMgr": "AudioMgr",
"./utils/Native": "Native",
"./utils/Utils": "Utils"
} ],
LongTouchComponent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e00b9OAUdVJhbS0BUI7M5px", "LongTouchComponent");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.touchInterval = .02;
e.enableMultiTouching = !1;
e.longTouchEvents = [];
e._touchCounter = 0;
e._isTouching = !1;
return e;
}
e.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
};
e.prototype.onDisable = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
this.unschedule(this._touchCounterCallback);
};
e.prototype.rCbi_xxxx_fun = function() {
console.log("wD85EfrNKA");
};
e.prototype.clear = function() {
this._isTouching = !1;
this.unschedule(this._touchCounterCallback);
};
e.prototype.Ktrs_xxxx_fun = function() {
console.log("sSz82KaN");
};
e.prototype._onTouchStart = function(t) {
var e = this;
if (!this.enableMultiTouching) {
if (this._isTouching) return;
this.node.getBoundingBoxToWorld().contains(t.getLocation()) ? this._isTouching = !0 : this._isTouching = !1;
if (this._isTouching) {
this.publishOneTouch();
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
if (e._isTouching) {
e.unschedule(e._touchCounterCallback);
e.schedule(e._touchCounterCallback, e.touchInterval);
}
})));
}
}
};
e.prototype._onTouchEnd = function() {
this._isTouching = !1;
this._touchCounter = 0;
this.unschedule(this._touchCounterCallback);
};
e.prototype.DkaH_xxxx_fun = function() {
console.log("2k58F7Qw4KCk8Qxr7stcAsTFBfJHZ5Cz");
};
e.prototype._onTouchCancel = function() {
this._isTouching = !1;
this._touchCounter = 0;
this.unschedule(this._touchCounterCallback);
};
e.prototype._touchCounterCallback = function() {
this._isTouching ? this.publishOneTouch() : this.unschedule(this._touchCounterCallback);
};
e.prototype.publishOneTouch = function() {
var t = this;
if (this._isTouching) {
this.node.runAction(cc.sequence(cc.scaleTo(this.touchInterval / 2, 1.2), cc.scaleTo(this.touchInterval / 2, 1)));
this._touchCounter++;
this.longTouchEvents.forEach(function(e) {
e.emit([ t.node ]);
});
}
};
r([ s({
tooltip: "触摸回调间隔（秒）。假如为0.1，那么1秒内会回调10次 ${longTouchEvents} 事件数组"
}) ], e.prototype, "touchInterval", void 0);
r([ s({
readonly: !0,
tooltip: "是否支持多点触控（当前还不支持）"
}) ], e.prototype, "enableMultiTouching", void 0);
r([ s({
type: [ cc.Component.EventHandler ],
tooltip: "回调事件数组，每间隔 ${toucheInterval}s 回调一次"
}) ], e.prototype, "longTouchEvents", void 0);
return r([ c ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
MonthView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "36af0tplMxLZoBu1ziKdOSd", "MonthView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../utils/AudioMgr"), s = cc._decorator, l = s.ccclass, u = (s.property, 
function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.SetText("txtPrice", "12");
};
e.prototype.setSelect = function(t) {
var e = 0 == t, i = this.GetGameObject("imgSelected"), n = i.position;
i.position = cc.v3(e ? -147 : 147, n.y, n.z);
};
e.prototype.onUIClicked = function(e, i) {
t.prototype.onUIClicked.call(this, e, i);
var n = e.target.name;
c.default.Instance().playMX("click");
switch (n) {
case "btnA":
this.setSelect(0);
break;

case "btnB":
this.setSelect(1);
break;

case "btnBuy":
cc.log("cccccccc");
}
};
return r([ l ], e);
}(a.default));
i.default = u;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../utils/AudioMgr": "AudioMgr"
} ],
MsgToast: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9114dC92g5BGrnJuc5h3P6G", "MsgToast");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../manager/PoolMgr"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
i = e;
e.show = function(t) {
if ("" != t) if (null != i._prefab) {
if (0 != a.default.Instance().pools.msg_hints.size()) {
var e = a.default.Instance().get("msg_hints");
e.scaleY = 0;
e.parent = cc.find("Canvas");
e.zIndex = cc.macro.MAX_ZINDEX;
e.getChildByName("label").getComponent(cc.Label).string = t;
e.getComponent(cc.Animation).play("msghints", 0);
e.getComponent(cc.Animation).on("finished", function() {
a.default.Instance().put("msg_hints", e);
});
}
} else cc.loader.loadRes("prefab/common/msg_hints", function(e, n) {
if (!e) {
i._prefab = n;
a.default.Instance().initPool("msg_hints", i._prefab, 20);
i.show(t);
}
});
};
var i;
e._prefab = null;
return i = r([ s ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"../manager/PoolMgr": "PoolMgr"
} ],
Native: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b37b9TahItL06rtAJjikj0a", "Native");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Native = void 0;
var n = function() {
function t() {}
t.callAppMethod = function(t, e, i) {
void 0 === e && (e = "");
void 0 === i && (i = null);
if (cc.sys.os === cc.sys.OS_IOS) {
var n = "callBackFunc_" + new Date().getTime();
window[n] = function(e) {
console.log("---ios callback---" + t, e);
i && i(e);
window[n] = null;
};
var o = {
method: n,
params: e
}, r = JSON.stringify(o), a = "" + t + r;
console.log("----HWGameJSHandle:" + t + "---" + a);
jsb && jsb.reflection && jsb.reflection.callStaticMethod ? jsb.reflection.callStaticMethod("HWGameJSHandle", t + ":", r) : console.log("HWGameJSHandle:找不到jsb");
}
};
t.getAppVersion = function() {
this.callAppMethod("getAppVersion", {
x: 1,
y: "25222"
}, function(t) {
console.log("getAppVersion ios 回调", t);
});
};
t.playVideoAd = function(t, e) {
this.callAppMethod("loadTopOnRewardAd", {
adUnitId: e
}, function() {
t && t();
});
};
t.showInterstitialAd = function(t, e) {
void 0 === e && (e = null);
this.callAppMethod("loadTopOnInterstitialAd", {
adUnitId: t
}, function() {
e && e();
});
};
t.showBannerAd = function(t, e) {
void 0 === e && (e = null);
this.callAppMethod("loadBannerAd", {
adUnitId: t
}, function() {
e && e();
});
};
t.hideBannerAd = function() {
this.callAppMethod("hideBannerAd");
};
return t;
}();
i.Native = n;
cc._RF.pop();
}, {} ],
NewChickUI: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "03d56pGmRJDcJ6Q4cidnntP", "NewChickUI");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../framwork/BaseUI"), l = t("../../manager/AdCenter"), u = t("../../manager/ChickData"), h = t("../../utils/AudioMgr"), d = t("../../utils/Utils"), f = t("../Config"), p = cc._decorator, _ = p.ccclass, m = (p.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.coin = 0;
return e;
}
e.prototype.start = function() {
return a(this, void 0, void 0, function() {
var t, e, i, n, o, r, a;
return c(this, function(c) {
switch (c.label) {
case 0:
t = u.default.user.getLvlMax();
e = u.default.user.buyChickPrice(Math.max(1, t - 3));
this.SetText("lbl_name", f.Config_chick[t - 1][7] + "");
this.SetText("lbl_lv", "等级 " + t);
h.default.Instance().playMX("unlock_plant");
this.coin = e;
this.SetText("lbl_coin", d.default.formatNumber(e));
i = "spine:flower" + t + "_ske";
n = "spine:flower" + t + "_tex";
o = this.GetDragonAmature("chick");
r = o;
return [ 4, d.default.loadRes(i, dragonBones.DragonBonesAsset) ];

case 1:
r.dragonAsset = c.sent();
a = o;
return [ 4, d.default.loadRes(n, dragonBones.DragonBonesAtlasAsset) ];

case 2:
a.dragonAtlasAsset = c.sent();
o.armatureName = "Armature";
o.playAnimation("idleL", 0);
l.default.Instance().showGridAd();
return [ 2 ];
}
});
});
};
e.prototype.onDestroy = function() {
l.default.Instance().hideGridAd();
t.prototype.onDestroy.call(this);
};
e.prototype.onUIClicked = function(t) {
var e = t.target.name;
h.default.Instance().playMX("click");
switch (e) {
case "btn_get":
var i = this.coin;
h.default.Instance().playMX("coin");
d.default.flyAnim(0, this.node, "icon_coin", d.default.getRandomInt(5, 10), 100, function(t) {
t && (u.default.user.coin += i);
});
this.closeUI();
}
};
return r([ _ ], e);
}(s.default));
i.default = m;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils",
"../Config": "Config"
} ],
NumberRoll: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7afd2vdphtCjKWi+cfBvmoW", "NumberRoll");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../framwork/BaseUI"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._cur = 0;
e._target = 0;
e._offset = 0;
return e;
}
e.prototype.start = function() {
this.label = this.node.getComponent(cc.Label);
};
Object.defineProperty(e.prototype, "vaule", {
set: function(t) {
this._target = t;
this._offset = Math.floor((this._target - this._cur) / Math.min(30, Math.abs(this._target - this._cur)));
},
enumerable: !1,
configurable: !0
});
e.prototype.update = function(t) {
t > 1 && (t = 1);
if (1 / t < cc.game.getFrameRate() / 2) this.label.string = this._target + ""; else {
if (this._cur != this._target) {
this._cur += this._offset;
this._offset > 0 && this._cur > this._target && (this._cur = this._target);
this._offset < 0 && this._cur < this._target && (this._cur = this._target);
}
this.label.string = this._cur + "";
}
};
return r([ s ], e);
}(a.default));
i.default = l;
cc._RF.pop();
}, {
"../framwork/BaseUI": "BaseUI"
} ],
NumberUtils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2b93d/BF/pCnZs/FDa4ntIv", "NumberUtils");
var n = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = cc._decorator, r = o.ccclass, a = (o.property, function() {
function t() {}
e = t;
t.getN = function(t) {
for (var i = 0; i < e.aLetters.length; ) {
if (e.aLetters[i] == t) return Math.pow(10, e.aLetters[i + 1]);
i += 2;
}
return 0;
};
t.addSeparators = function(t, e) {
void 0 === e && (e = ",");
var i = "-" == t.charAt(0);
i && (t = t.substr(1));
for (var n = "", o = 0, r = t.length - 1; r > 0; ) {
n = t.charAt(r) + n;
++o % 3 == 0 && (n = e + n);
r -= 1;
}
n = t.charAt(0) + n;
i && (n = "-" + n);
return n;
};
t.getLargeString = function(t, i, n) {
void 0 === i && (i = "K");
void 0 === n && (n = !0);
if (0 == t) return t + "";
for (var o = NaN, r = Math.round(t / Math.abs(t)), a = t = Math.abs(t), c = 0, s = 0, l = 0, u = 0; u < e.aLetters.length; ) {
if (e.aLetters[u] == i) {
s = u;
break;
}
u += 2;
}
if (t < Math.pow(10, e.aLetters[s + 1])) c = -1; else {
o = Math.pow(10, e.aLetters[s + 1]);
c = s / 2;
for (;a / 1e3 >= o; ) {
a /= 1e3;
c++;
}
for (;a / 1e3 >= 1e3; ) a /= 1e3;
}
if (-1 == c) return e.addSeparators(Math.round((t - .5) * r).toString());
a / 1e3 < 10 ? l = 2 : a / 1e3 < 100 && (l = 1);
a /= Math.pow(10, 3 - l);
a = parseInt(a);
a /= Math.pow(10, l);
return n ? (a * r).toFixed(2) + "" + e.aLetters[2 * c] : (a * r).toString() + "" + e.aLetters[2 * c];
};
t.getStringOfNumber = function(t, e, i, n) {
void 0 === e && (e = !1);
void 0 === i && (i = !1);
void 0 === n && (n = !1);
var o = 1;
n && (o = 10);
var r = Math.round(t);
if (Math.round(t) >= 1e6 && r < 1e9 && e) return (Math.round(r / 1e3 / o) / (1e3 / o)).toString() + " M";
if (r >= 1e9 && r < 1e12) return (Math.round(r / 1e6 / o) / (1e3 / o)).toString() + " B";
if (r >= 1e12 && r < 1e15) return (Math.round(r / 1e9 / o) / (1e3 / o)).toString() + " T";
if (r >= 1e15 && r < 1e18) return (Math.round(r / 1e12 / o) / (1e3 / o)).toString() + " q";
if (r >= 1e18 && r < 1e21) return (Math.round(r / 1e15 / o) / (1e3 / o)).toString() + " Qq";
if (r >= 1e21 && r < 1e24) return (Math.round(r / 1e18 / o) / (1e3 / o)).toString() + " s";
if (r >= 1e24 && r < 1e27) return (Math.round(r / 1e21 / o) / (1e3 / o)).toString() + " Ss";
if (r >= 1e27 && r < 1e30) return (Math.round(r / 1e24 / o) / (1e3 / o)).toString() + " O";
if (r >= 1e30 && r < 1e33) return (Math.round(r / 1e27 / o) / (1e3 / o)).toString() + " N";
if (r >= 1e33 && r < 1e26) return (Math.round(r / 1e30 / o) / (1e3 / o)).toString() + " d";
if (r >= 1e26 && r < 1e29) return (Math.round(r / 1e33 / o) / (1e3 / o)).toString() + " U";
if (r >= 1e29 && r < 1e32) return (Math.round(r / 1e26 / o) / (1e3 / o)).toString() + " Dd";
var a = " ";
i && (a = ",");
for (var c = "", s = String(Math.round(t)), l = String(Math.round(t)).length - 1; l >= 0; ) {
3 == (c = s.charAt(l) + c).length && 0 != l && (c = a + c);
7 == c.length && 0 != l && (c = a + c);
l -= 1;
}
return c;
};
t.convertToLargeString = function(t) {
return e.getStringOfNumber(t);
};
var e;
t.aLetters = [ "K", 3, "M", 6, "B", 9, "T", 12, "aa", 15, "bb", 18, "cc", 21, "dd", 24, "ee", 27, "ff", 30, "gg", 33, "hh", 36, "ii", 39, "jj", 42, "kk", 45, "ll", 48, "mm", 51, "nn", 54, "oo", 57, "pp", 60, "qq", 63, "rr", 66, "ss", 69, "tt", 72, "uu", 75, "vv", 78, "ww", 81, "xx", 84, "yy", 87, "zz", 90, "aaa", 93, "bbb", 96, "ccc", 99, "ddd", 102, "eee", 105, "fff", 108, "ggg", 111, "hhh", 114, "iii", 117, "jjj", 120, "kkk", 123, "lll", 126, "mmm", 129, "nnn", 132, "ooo", 135, "ppp", 138, "qqq", 141, "rrr", 144, "sss", 147, "ttt", 150, "uuu", 153, "vvv", 156, "www", 159, "xxx", 162, "yyy", 165, "zzz" ];
return e = n([ r ], t);
}());
i.default = a;
cc._RF.pop();
}, {} ],
OfflineAwardUI: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "47509lvN65A3YtUxhS8R3fU", "OfflineAwardUI");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../manager/AdCenter"), s = t("../../manager/ChickData"), l = t("../../utils/AudioMgr"), u = t("../../utils/NumberUtils"), h = t("../../utils/Utils"), d = cc._decorator, f = d.ccclass, p = (d.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._data = 0;
return e;
}
Object.defineProperty(e.prototype, "data", {
get: function() {
return this._data;
},
set: function(t) {
this._data = t;
this.GetText("lbl_coin").string = u.default.getLargeString(h.default.fixFloat(t));
},
enumerable: !1,
configurable: !0
});
e.prototype.start = function() {
this.node.zIndex = 99999;
h.default.playBreath(this.GetGameObject("btn_ad"));
};
e.prototype.onUIClicked = function(t) {
var e = this;
switch (t.target.name) {
case "btn_close":
var i = this._data;
l.default.Instance().playMX("coin");
h.default.flyAnim(0, this.node, "icon_coin", h.default.getRandomInt(5, 10), 100, function(t) {
if (t) {
s.default.user.coin += i;
s.default.save();
}
});
this.closeUI();
break;

case "btn_normal":
l.default.Instance().playMX("coin");
h.default.flyAnim(0, this.node, "icon_coin", h.default.getRandomInt(5, 10), 100, function(t) {
t && (s.default.user.coin += e._data);
});
s.default.save();
this.closeUI();
break;

case "btn_ad":
c.default.Instance().play(function(t) {
if (t) {
var i = 2 * e._data;
l.default.Instance().playMX("coin");
h.default.flyAnim(0, e.node, "icon_coin", h.default.getRandomInt(5, 10), 100, function(t) {
if (t) {
s.default.user.coin += i;
s.default.save();
}
});
e.closeUI();
}
});
break;

case "btn_buyfree":
console.log("dddddd");
}
};
return r([ f ], e);
}(a.default));
i.default = p;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/NumberUtils": "NumberUtils",
"../../utils/Utils": "Utils"
} ],
PoolMgr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "96c22QZQoJEzrsdfStlsM1E", "PoolMgr");
var n = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = cc._decorator, r = o.ccclass, a = (o.property, function() {
function t() {
this.pools = {};
this.prefabs = {};
this.pre_bullets = [];
}
e = t;
t.Instance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
t.prototype.loadPrefabs = function() {
var t = this;
cc.loader.loadRes("prefab/Coin", cc.Prefab, function(e, i) {
e ? console.log(e) : t.initPool("Coin", i, 11);
});
cc.loader.loadRes("prefab/Gem", cc.Prefab, function(e, i) {
e ? console.log(e) : t.initPool("Gem", i, 11);
});
};
t.prototype.initPool = function(t, e, i) {
this.prefabs[t] = e;
this.pools[t] = new cc.NodePool();
for (var n = 0; n < i; ++n) this.pools[t].put(cc.instantiate(e));
};
t.prototype.get = function(t) {
if (null == this.pools[t]) {
cc.error("没有" + t);
return null;
}
if (this.pools[t].size() > 0) {
var e = this.pools[t].get(), i = e.getChildByName("spine");
i && (i.getComponent(sp.Skeleton).paused = !1);
return e;
}
return cc.instantiate(this.prefabs[t]);
};
t.prototype.put = function(t, e) {
this.pools[t].put(e);
};
var e;
t._instance = null;
return e = n([ r ], t);
}());
i.default = a;
cc._RF.pop();
}, {} ],
RecordView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d9bb0ZnB1xJR6Vp3tiTtekw", "RecordView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../manager/ChickData"), s = t("../../utils/AudioMgr"), l = t("../../utils/Utils"), u = cc._decorator, h = u.ccclass, d = (u.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.res = null;
return e;
}
e.prototype.start = function() {
var t = this;
this.GetButton("btn_share").interactable = !1;
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
t.GetButton("btn_share").interactable = !0;
})));
};
e.prototype.setData = function(t) {
this.res = t;
};
e.prototype.onUIClicked = function(e, i) {
t.prototype.onUIClicked.call(this, e, i);
s.default.Instance().playMX("click");
switch (e.target.name) {
case "btn_share":
window.tt.shareAppMessage({
channel: "video",
title: "",
imageUrl: "",
query: "",
extra: {
videoPath: this.res.videoPath
},
success: function() {
s.default.Instance().playMX("gem");
l.default.flyAnim(1, cc.find("Canvas"), "icon_gem", l.default.getRandomInt(2, 3), 85, function(t) {
t && (c.default.user.gem += 2);
});
},
fail: function() {}
});
this.closeUI();
break;

case "btn_save":
window.tt.saveVideoToPhotosAlbum({
filePath: this.res.videoPath,
success: function() {
window.tt.showToast({
title: "保存成功"
});
s.default.Instance().playMX("gem");
l.default.flyAnim(1, cc.find("Canvas"), "icon_gem", l.default.getRandomInt(2, 3), 85, function(t) {
t && (c.default.user.gem += 2);
});
},
fail: function() {
window.tt.showToast({
title: "保存失败"
});
}
});
this.closeUI();
break;

case "btn_close":
this.closeUI();
}
};
return r([ h ], e);
}(a.default));
i.default = d;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/ChickData": "ChickData",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils"
} ],
SettingView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0907ehprWVIdL52jX6uIB88", "SettingView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../framwork/BaseUI"), l = t("../../manager/AdCenter"), u = t("../../manager/ChickData"), h = t("../../utils/AudioMgr"), d = t("../../utils/Utils"), f = cc._decorator, p = f.ccclass, _ = (f.property, 
window.wx || window.tt || window.qq), m = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btn_music = null;
e.btn_music_close = null;
e.btn_sound = null;
e.btn_sound_close = null;
e.server_data = null;
e.wxButton = null;
return e;
}
e.prototype.start = function() {
return a(this, void 0, void 0, function() {
return c(this, function() {
l.default.Instance().showGridAd();
this.btn_music = this.GetGameObject("btn_music_on");
this.btn_music_close = this.GetGameObject("btn_music_off");
this.btn_sound = this.GetGameObject("btn_sound_on");
this.btn_sound_close = this.GetGameObject("btn_sound_off");
this.btn_music.active = 1 == h.default.Instance().bgmVolume;
this.btn_music_close.active = 0 == h.default.Instance().bgmVolume;
this.btn_sound.active = 1 == h.default.Instance().sfxVolume;
this.btn_sound_close.active = 0 == h.default.Instance().sfxVolume;
return [ 2 ];
});
});
};
e.prototype.onDestroy = function() {
l.default.Instance().hideGridAd();
this.wxButton && this.wxButton.destroy();
t.prototype.onDestroy.call(this);
};
e.prototype.createAuthorizeBtn = function(t) {
var e = this, i = cc.size(t.width, t.height), n = cc.view.getFrameSize(), o = cc.director.getWinSize(), r = (.5 * o.width + t.x - .5 * i.width) / o.width * n.width, a = (.5 * o.height - t.y - .5 * i.height) / o.height * n.height, c = i.width / o.width * n.width, s = i.height / o.height * n.height;
this.wxButton = _.createFeedbackButton({
type: "text",
text: "",
style: {
left: r,
top: a,
width: c,
height: s,
lineHeight: 20,
backgroundColor: "",
color: "#ffffff",
textAlign: "center",
fontSize: 16,
borderRadius: 4
}
});
this.wxButton.onTap(function() {
e.closeUI();
});
};
e.prototype.onUIClicked = function(t) {
var e = t.target.name;
h.default.Instance().playMX("click");
switch (e) {
case "btn_back":
this.closeUI();
break;

case "btn_music_on":
case "btn_music_off":
this.btn_music.active = !this.btn_music.active;
this.btn_music_close.active = !this.btn_music_close.active;
h.default.Instance().setMusicVolume(this.btn_music.active ? 1 : 0, !0);
break;

case "btn_sound_on":
case "btn_sound_off":
this.btn_sound.active = !this.btn_sound.active;
this.btn_sound_close.active = !this.btn_sound_close.active;
h.default.Instance().setMXVolume(this.btn_sound.active ? 1 : 0, !0);
break;

case "btn_share":
d.default.wxShare();
break;

case "btn_download":
u.default.user.setData(this.server_data.user);
this.closeUI();
u.default.save();
cc.director.loadScene("hall");
}
};
return r([ p ], e);
}(s.default);
i.default = m;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils"
} ],
Shake: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "776856yN0hDUJ9tpRE0AmLJ", "Shake");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Shake = void 0;
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._initial_x = 0;
e._initial_y = 0;
e._strength_x = 0;
e._strength_y = 0;
return e;
}
i = e;
e.prototype.initWithDuration = function(t, e, i) {
cc.ActionInterval.prototype.initWithDuration.apply(this, arguments);
this._strength_x = e;
this._strength_y = i;
return !0;
};
e.create = function(t, e, n) {
var o = new i();
o.initWithDuration(t, e, n);
return o;
};
e.prototype.startWithTarget = function(t) {
cc.ActionInterval.prototype.startWithTarget.apply(this, arguments);
this._initial_x = t.x;
this._initial_y = t.y;
};
e.prototype.update = function() {
var t = this.fgRangeRand(-this._strength_x, this._strength_x), e = this.fgRangeRand(-this._strength_y, this._strength_y);
this.getTarget().setPosition(t + this._initial_x, e + this._initial_y);
};
e.prototype.ZGBR_xxxx_fun = function() {
console.log("yYZPhdr8zWF7wAxCR3feTBd2mzWsJ");
};
e.prototype.fgRangeRand = function(t, e) {
return Math.random() * (e - t) + t;
};
e.prototype.iXbQ_xxxx_fun = function() {
console.log("TihWycjPNHTACN34");
};
e.prototype.stop = function() {
this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y));
cc.ActionInterval.prototype.stop.apply(this);
};
var i;
return i = r([ c ], e);
}(cc.ActionInterval));
i.Shake = s;
cc._RF.pop();
}, {} ],
ShareView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c8f4ajWW8lPPa5lWwAGP7lm", "ShareView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../manager/ChickData"), s = t("../../manager/WxCenter"), l = t("../../utils/AudioMgr"), u = t("../../utils/NumberUtils"), h = t("../../utils/Utils"), d = cc._decorator, f = d.ccclass, p = (d.property, 
function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
h.default.playBreath(this.GetGameObject("btn_share"));
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
};
e.prototype.setData = function() {
var t = c.default.user.getLvlMax() - 1 > 0 ? c.default.user.getLvlMax() - 1 : 1;
this.coinVal = .5 * c.default.user.buyChickPrice(t);
var e = u.default.getLargeString(h.default.fixFloat(this.coinVal)), i = c.default.user.share_times;
this.SetText("lbl_coin", e);
this.SetText("lbl_times", "还可分享" + i + "次");
};
e.prototype.onUIClicked = function(t) {
var e = this, i = t.target.name;
l.default.Instance().playMX("click");
switch (i) {
case "btn_close":
this.closeUI();
break;

case "btn_share":
s.default.shareAppMessage(function() {
if (c.default.user.share_times > 0) {
c.default.user.share_times--;
l.default.Instance().playMX("coin");
h.default.flyAnim(0, e.node, "icon_coin", h.default.getRandomInt(5, 10), 100, function(t) {
t && (c.default.user.coin += e.coinVal);
c.default.save();
});
}
e.closeUI();
});
}
};
return r([ f ], e);
}(a.default));
i.default = p;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/ChickData": "ChickData",
"../../manager/WxCenter": "WxCenter",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/NumberUtils": "NumberUtils",
"../../utils/Utils": "Utils"
} ],
ShopItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e6b02e+8pRDZ6todV8KUlNR", "ShopItem");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, l = t("../../framwork/BaseUI"), u = t("../../framwork/ListItem"), h = t("../../framwork/MsgToast"), d = t("../../manager/AdCenter"), f = t("../../manager/ChickData"), p = t("../../utils/AudioMgr"), _ = t("../../utils/Utils"), m = t("../GameConst"), y = t("../HallScene"), g = cc._decorator, v = g.ccclass;
g.property;
(function(t) {
t[t.CAN_BUY = 1] = "CAN_BUY";
t[t.CAN_AD_BUY = 2] = "CAN_AD_BUY";
t[t.ONLY_CHECK = 4] = "ONLY_CHECK";
t[t.GEM_BUY = 16] = "GEM_BUY";
})(s || (s = {}));
var b = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cost_coin = 0;
e.gun = null;
return e;
}
e.prototype.ShowBuyAd = function(t) {
var e = f.default.user.getLvlMax();
return !(e < 8) && e - 4 == t;
};
e.prototype.OnlyForCheck = function(t) {
var e = f.default.user.getLvlMax();
return e - 2 <= t && t <= e;
};
e.prototype.BuyDiamond = function(t) {
return f.default.user.getLvlMax() - 1 == t;
};
e.prototype.getBuyCoinType = function(t) {
var e = f.default.user.getLvlMax(), i = 0;
t[0] <= e - 2 && (i |= s.CAN_BUY);
this.ShowBuyAd(t[0]) && (i |= s.CAN_AD_BUY);
this.BuyDiamond(t[0]) && (i |= s.GEM_BUY);
this.OnlyForCheck(t[0]) && (i |= s.ONLY_CHECK);
return i;
};
e.prototype.setShopItemData = function(t) {
return a(this, void 0, void 0, function() {
var e, i, n, o, r, a, l, u, h, d, p, m;
return c(this, function(c) {
switch (c.label) {
case 0:
e = null;
i = !1;
n = this.getBuyCoinType(t);
this.gun = t;
this.GetGameObject("show").active = !1;
this.GetGameObject("hide").active = !1;
this.GetGameObject("btn_yellow").active = !1;
this.GetGameObject("btn_free").active = !1;
this.GetGameObject("btn_gray").active = !1;
if (0 != (n & s.GEM_BUY) && t[6] > 0) {
this.GetGameObject("show").active = !0;
e = this.GetGameObject("show");
} else if (0 != (n & s.CAN_AD_BUY)) {
this.GetGameObject("show").active = !0;
this.GetGameObject("btn_free").active = !0;
e = this.GetGameObject("show");
} else if (0 != (n & s.CAN_BUY)) {
this.GetGameObject("show").active = !0;
this.GetGameObject("btn_yellow").active = !0;
e = this.GetGameObject("show");
} else if (0 != (n & s.ONLY_CHECK)) {
this.GetGameObject("show").active = !0;
this.GetGameObject("btn_gray").active = !0;
e = this.GetGameObject("show");
} else {
this.GetGameObject("hide").active = !0;
e = this.GetGameObject("hide");
i = !0;
}
this._findInChildren(e, "lbl_lv").getComponent(cc.Label).string = "" + t[0];
this._findInChildren(e, "New Label").getComponent(cc.Label).string = "到" + (t[0] + 2) + "级解锁";
o = t[3].split("|");
r = o[0];
a = o[1];
l = "";
i && (a = "?");
1 == r ? l = "技能:" + a + "%的几率触发减速目标1秒" : 2 == r ? l = "技能:" + a + "%几率对目标造成双倍伤害" : 3 == r && (l = "技能:" + a + "%几率冰冻目标1秒");
this._findInChildren(e, "lbl_name").getComponent(cc.Label).string = i ? "未知萌鸡" : t[7];
this._findInChildren(e, "lbl_desc").getComponent(cc.Label).string = i ? "技能:未知" : l;
this._findInChildren(e, "lbl_cd").getComponent(cc.Label).string = i ? "?" : t[1] + "";
this._findInChildren(e, "lbl_power").getComponent(cc.Label).string = i ? "?" : _.default.formatNumber(t[2]) + "";
if (i) return [ 3, 3 ];
u = "spine:flower" + t[0] + "_ske";
h = "spine:flower" + t[0] + "_tex";
d = this.GetDragonAmature("shopChick");
p = d;
return [ 4, _.default.loadRes(u, dragonBones.DragonBonesAsset) ];

case 1:
p.dragonAsset = c.sent();
m = d;
return [ 4, _.default.loadRes(h, dragonBones.DragonBonesAtlasAsset) ];

case 2:
m.dragonAtlasAsset = c.sent();
d.armatureName = "Armature";
d.playAnimation("idleL", 0);
c.label = 3;

case 3:
this.cost_coin = f.default.user.buyChickPrice(t[0]);
this.SetText("lbl_buy_coin", _.default.formatNumber(this.cost_coin));
this.GetButton("btn_yellow").interactable = f.default.user.coin >= this.cost_coin;
return [ 2 ];
}
});
});
};
e.prototype.onUIClicked = function(e, i) {
var n = this;
t.prototype.onUIClicked.call(this, e, i);
var o = e.target.name;
p.default.Instance().playMX("click");
switch (o) {
case "btn_free":
d.default.Instance().play(function(t) {
if (t && y.default.Instance.buyChick(n.gun[0], 2)) {
h.default.show("购买成功");
n.dispatch(m.default.BUY_CHICK, n.gun, n.node.getComponent(u.default).listId);
}
});
break;

case "btn_yellow":
if (f.default.user.coin < this.cost_coin) {
h.default.show("金币不足");
return;
}
if (y.default.Instance.buyChick(this.gun[0], 0)) {
h.default.show("购买成功");
this.dispatch(m.default.BUY_CHICK, this.gun, this.node.getComponent(u.default).listId);
}
}
};
return r([ v ], e);
}(l.default);
i.default = b;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../framwork/ListItem": "ListItem",
"../../framwork/MsgToast": "MsgToast",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils",
"../GameConst": "GameConst",
"../HallScene": "HallScene"
} ],
ShopView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d2798exgyFBwbE/jvMs82x9", "ShopView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../framwork/List"), s = t("../../manager/ChickData"), l = t("../../manager/WxCenter"), u = t("../../utils/AudioMgr"), h = t("../../utils/Utils"), d = t("../Config"), f = t("../GameConst"), p = t("./ShopItem"), _ = cc._decorator, m = _.ccclass, y = (_.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.list = null;
return e;
}
i = e;
e.show = function() {
if (i._instance) {
i._instance.active = !0;
i._instance.getComponent(i).reLoad();
} else h.default.createUI("prefab/ShopLayer");
};
e.prototype.start = function() {
var t = this;
l.default.aldReport("ShopShow", "show");
i._instance = this.node;
this.list = d.Config_chick;
this.reLoad();
this.rigester(f.default.BUY_CHICK, function(e, i) {
t.GetGameObject("ScrollView").getComponent(c.default).updateAppointed(i);
});
this.rigester(f.default.NEW_CHICK, function() {
t.reLoad();
});
};
e.prototype.reLoad = function() {
this.list = d.Config_chick;
var t = this.GetGameObject("ScrollView").getComponent(c.default);
t.numItems = this.list.length;
var e = Math.max(0, s.default.user.getLvlMax() - 5);
t.scrollTo(e, .2);
};
e.prototype.onUIClicked = function() {
u.default.Instance().playMX("click");
this.node.active = !1;
};
e.prototype.onListRender = function(t, e) {
t.getComponent(p.default).setShopItemData(this.list[e]);
};
var i;
e._instance = null;
return i = r([ m ], e);
}(a.default));
i.default = y;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../framwork/List": "List",
"../../manager/ChickData": "ChickData",
"../../manager/WxCenter": "WxCenter",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils",
"../Config": "Config",
"../GameConst": "GameConst",
"./ShopItem": "ShopItem"
} ],
SignView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1aca7eivGtO/Z+kbVBIQ4KP", "SignView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../manager/AdCenter"), s = t("../../manager/ChickData"), l = t("../../utils/AudioMgr"), u = t("../../utils/Utils"), h = cc._decorator, d = h.ccclass, f = (h.property, 
function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
i = e;
e.redPoint = function() {
return 0 == s.default.user.signinfo.sign_time || !i.checkIsToday(s.default.user.signinfo.sign_time) || 1 == s.default.user.signinfo.sign_beisu;
};
e.checkIsShow = function() {
0 != s.default.user.signinfo.sign_index && (i.checkIsToday(s.default.user.signinfo.sign_time) || u.default.createUI("prefab/SignLayer"));
};
e.prototype.getSignInfo = function(t) {
var e = s.default.user.getLvlMax() - 3;
e < 1 && (e = 1);
return [ {
type: 0,
value: 4 * s.default.user.buyChickPrice(e)
}, {
type: 1,
value: 2
}, {
type: 0,
value: 8 * s.default.user.buyChickPrice(e)
}, {
type: 0,
value: 12 * s.default.user.buyChickPrice(e)
}, {
type: 1,
value: 5
}, {
type: 1,
value: 8
}, {
type: 1,
value: 10
} ][t];
};
e.checkIsToday = function(t) {
var e = new Date(t), i = new Date(u.default.getServerTime()), n = !1;
e.getFullYear() == i.getFullYear() && e.getMonth() == i.getMonth() && e.getDate() == i.getDate() && (n = !0);
return n;
};
e.prototype.start = function() {
this.updateUI();
c.default.Instance().showGridAd();
};
e.prototype.onDestroy = function() {
c.default.Instance().hideGridAd();
t.prototype.onDestroy.call(this);
};
e.prototype.updateUI = function() {
var t = this.GetGameObject("item_days"), e = !1;
0 != s.default.user.signinfo.sign_time && i.checkIsToday(s.default.user.signinfo.sign_time) && (e = !0);
var n = s.default.user.signinfo.sign_index % 7;
0 == n && e && (n = 7);
for (var o = 0; o < 7; ++o) {
var r = t.children[o];
r.getChildByName("sevenday_checked").active = o < n;
var a = this.getSignInfo(o);
0 == a.type ? r.getComponentInChildren(cc.Label).string = u.default.formatNumber(a.value) + "" : r.getComponentInChildren(cc.Label).string = a.value + "";
}
this.GetGameObject("btn_3times").active = !1;
this.GetGameObject("btn_2times").active = !1;
this.GetGameObject("btn_sign").active = !1;
if (e) if (1 == s.default.user.signinfo.sign_beisu) this.GetGameObject("btn_2times").active = !0; else if (2 == s.default.user.signinfo.sign_beisu) {
this.GetGameObject("btn_2times").active = !0;
this.GetButton("btn_2times").interactable = !1;
} else {
this.GetGameObject("btn_3times").active = !0;
this.GetButton("btn_3times").interactable = !1;
} else {
this.GetGameObject("btn_sign").active = !0;
this.GetGameObject("btn_3times").active = !0;
}
};
e.prototype.dYdY_xxxx_fun = function() {
console.log("NfG6eQEeaws8mNaF5dTXx6a3x6h8fr");
};
e.prototype.getTodaySign = function() {
var t = !1;
0 != s.default.user.signinfo.sign_time && i.checkIsToday(s.default.user.signinfo.sign_time) && (t = !0);
var e = s.default.user.signinfo.sign_index;
t && e--;
return this.getSignInfo(e % 7);
};
e.prototype.flayAnim = function(t) {
var e = this.getTodaySign();
if (0 == e.type) {
l.default.Instance().playMX("coin");
u.default.flyAnim(0, this.node, "icon_coin", 5, 200, function(i) {
i && (s.default.user.coin += e.value * t);
});
} else {
l.default.Instance().playMX("gem");
u.default.flyAnim(1, this.node, "icon_gem", 5, 200, function(i) {
i && (s.default.user.gem += e.value * t);
});
}
};
e.prototype.onUIClicked = function(t) {
var e = this, n = t.target.name;
l.default.Instance().playMX("click");
switch (n) {
case "btn_close":
this.closeUI();
break;

case "btn_2times":
c.default.Instance().play(function(t) {
if (t) {
s.default.user.signinfo.sign_beisu = 2;
e.flayAnim(2);
i.checkIsToday(s.default.user.signinfo.sign_time) || s.default.user.signinfo.sign_index++;
s.default.user.signinfo.sign_time = u.default.getServerTime();
e.updateUI();
}
});
break;

case "btn_3times":
c.default.Instance().play(function(t) {
if (t) {
s.default.user.signinfo.sign_beisu = 3;
e.flayAnim(3);
i.checkIsToday(s.default.user.signinfo.sign_time) || s.default.user.signinfo.sign_index++;
s.default.user.signinfo.sign_time = u.default.getServerTime();
e.updateUI();
}
});
break;

case "btn_sign":
s.default.user.signinfo.sign_beisu = 1;
this.flayAnim(1);
i.checkIsToday(s.default.user.signinfo.sign_time) || s.default.user.signinfo.sign_index++;
s.default.user.signinfo.sign_time = u.default.getServerTime();
this.updateUI();
}
};
var i;
return i = r([ d ], e);
}(a.default));
i.default = f;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils"
} ],
Singleton: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b3524d7zH9PiqxWDRneLvf8", "Singleton");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.Instance = function() {
this.instance || (this.instance = new this());
return this.instance;
};
return t;
}();
i.default = n;
cc._RF.pop();
}, {} ],
UserModel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e5755yzM1lE0roEui3wv0BT", "UserModel");
var n = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../event/GameEvent"), r = t("../manager/ChickData"), a = t("../utils/Utils"), c = t("./GameConst"), s = t("./Config"), l = t("../utils/AudioMgr"), u = [];
function h(t, e) {
u.push(e);
}
var d = cc._decorator, f = d.ccclass, p = (d.property, function() {
function t() {
this.last_date = 0;
this.signinfo = {
sign_index: 0,
sign_time: 0,
sign_beisu: 0
};
this.nickName = "";
this.avatarUrl = "";
this.openid = "";
this.nickname = "";
this.headimg = "";
this.auto_com_time = 0;
this.double_att_time = 0;
this.double_income_time = 0;
this.drop_plant_time = 0;
this.today_getchick_times = 0;
this.today_getchick_total = 5;
this.today_getcoin_times = 0;
this.today_getcoin_total = 5;
this.share_times = 10;
this.slots = [ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
this.lv = 1;
this.wave = 1;
this.DropGiftPts = [];
this.AdBuyNotDrop = [];
this._coin = 1e3;
this._gem = 200;
this._serverTime = 0;
this.guideIndex = 0;
this.plantBuyTimes = {};
this.todayComTimes = 0;
this.ComPlants = [ {
open: 1,
index: 0,
lv: 1
} ];
}
t.prototype.T = function() {
for (var t = this.getLvlMax(), e = s.Config_shopsort[t + ""], i = 1; i <= 8; ++i) if ("AD" == e[i]) return t - i;
return t - 4;
};
t.prototype.getOfflineReward = function(t) {
for (var e = null, i = [ 50, 30, 20, 15, 10, 5, 3, 2 ], n = Math.max(1, this.T()), o = this.getLvlMax(), r = Math.max(1, n - 10); r <= n; ++r) {
var a = this.buyChickPrice(r);
(!e || a > e) && (e = a);
}
var c = e / 3e3;
c < 1 && (c = 1);
var s = Math.floor(t / 60), l = t % 60 / 60, u = 0;
for (r = 0; r <= s; ++r) {
var h = i[r] || 1;
u += r == s ? 60 * c * h * 100 * l / 100 : 60 * c * h;
}
for (var d = 0, f = 0, p = this.ComPlants; f < p.length; f++) {
var _ = p[f], m = _.lv;
_.lv > 0 && (d += 1e4 * u / (1e4 * Math.pow(2.1, Math.max(0, o - m))));
}
return d;
};
Object.defineProperty(t.prototype, "coin", {
get: function() {
return Math.floor(100 * this._coin) / 100;
},
set: function(t) {
this._coin = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "gem", {
get: function() {
return this._gem;
},
set: function(t) {
this._gem = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "serverTime", {
get: function() {
return this._serverTime;
},
set: function(t) {
this._serverTime = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.getChickInfo = function(t) {
for (var e = 0; e < this.ComPlants.length; ++e) if (this.ComPlants[e].index == t) return this.ComPlants[e];
return null;
};
t.prototype.getLvlMax = function() {
for (var t = 0, e = 0; e < this.ComPlants.length; ++e) this.ComPlants[e].lv > t && (t = this.ComPlants[e].lv);
return t;
};
t.prototype.buyChickPrice = function(t) {
var e = Number(s.Config_chick[t - 1][5]), i = this.plantBuyTimes[t] || 0;
return 1 == t ? 1e4 * e * Math.pow(1.07, i) / 1e4 : 1e4 * e * Math.pow(1.175, i) / 1e4;
};
t.prototype.moveEff = function(t, e) {
var i = this.getChickInfo(t), n = this.getChickInfo(e);
if (i && n) {
i.index = e;
n.index = t;
} else {
i && (i.index = e);
n && (n.index = t);
}
};
t.prototype.dsdse_dsexcxc_fun = function() {
console.log("dsfgajisdoe3924-5=34=4--");
};
t.prototype.composeChicks = function(t, e) {
var i = this.ComPlants.find(function(e) {
return e.index == t;
});
if (!i) return !1;
var n = this.ComPlants.find(function(t) {
return t.index == e;
});
if (!n) return !1;
if (i.lv != n.lv) {
console.error("err");
return !1;
}
for (var r = this.getLvlMax(), s = this.getChickInfo(t), u = s.lv, h = 0; h < this.ComPlants.length; ++h) if (this.ComPlants[h].index == t) {
this.ComPlants.splice(h, 1);
break;
}
for (h = 0; h < this.ComPlants.length; ++h) if (this.ComPlants[h].index == e) {
this.ComPlants.splice(h, 1);
break;
}
this.ComPlants.push({
open: s.open,
index: t,
lv: u + 1
});
this.todayComTimes++;
var d = this.getLvlMax();
if (d > r && d < 60) {
a.default.createUI("prefab/NewPlantUI");
o.default.Instance().dispatch(c.default.NEW_CHICK, d);
}
l.default.Instance().playMX("merge_success");
return !0;
};
t.prototype.buyChick = function(t, e) {
this.plantBuyTimes[e] || (this.plantBuyTimes[e] = 0);
this.plantBuyTimes[e]++;
if (!this.ComPlants.find(function(t) {
t.index;
})) {
var i = {
open: 1,
index: t,
lv: e
};
this.ComPlants.push(i);
r.default.save();
return i;
}
console.error("索引错误");
};
t.prototype.updateSellChickCoin = function(t) {
for (var e = 0; e < this.ComPlants.length; ++e) if (this.ComPlants[e].index == t) {
var i = this.buyChickPrice(this.ComPlants[e].lv);
r.default.user.coin += Math.floor(i);
cc.log("卖了换钱：" + i);
this.ComPlants.splice(e, 1);
break;
}
};
t.prototype.getAllData = function() {
var t = {};
this.serverTime = a.default.getServerTime();
for (var e = 0; e < u.length; ++e) t[u[e]] = this[u[e]];
return t;
};
t.prototype.setData = function(t) {
if (t) {
for (var e = 0; e < u.length; ++e) {
var i = t[u[e]];
if (null != i || null != i) if ("[object Object]" == Object.prototype.toString.call(i)) for (var n in i) this[u[e]][n] = i[n]; else this[u[e]] = i;
}
this.dsdse_dsexcxc_fun();
}
};
n([ h ], t.prototype, "last_date", void 0);
n([ h ], t.prototype, "signinfo", void 0);
n([ h ], t.prototype, "nickName", void 0);
n([ h ], t.prototype, "avatarUrl", void 0);
n([ h ], t.prototype, "openid", void 0);
n([ h ], t.prototype, "nickname", void 0);
n([ h ], t.prototype, "headimg", void 0);
n([ h ], t.prototype, "auto_com_time", void 0);
n([ h ], t.prototype, "double_att_time", void 0);
n([ h ], t.prototype, "double_income_time", void 0);
n([ h ], t.prototype, "drop_plant_time", void 0);
n([ h ], t.prototype, "today_getchick_times", void 0);
n([ h ], t.prototype, "today_getchick_total", void 0);
n([ h ], t.prototype, "today_getcoin_times", void 0);
n([ h ], t.prototype, "today_getcoin_total", void 0);
n([ h ], t.prototype, "share_times", void 0);
n([ h ], t.prototype, "slots", void 0);
n([ h ], t.prototype, "lv", void 0);
n([ h ], t.prototype, "wave", void 0);
n([ h ], t.prototype, "DropGiftPts", void 0);
n([ h ], t.prototype, "AdBuyNotDrop", void 0);
n([ h ], t.prototype, "_coin", void 0);
n([ h ], t.prototype, "_gem", void 0);
n([ h ], t.prototype, "_serverTime", void 0);
n([ h ], t.prototype, "guideIndex", void 0);
n([ h ], t.prototype, "plantBuyTimes", void 0);
n([ h ], t.prototype, "todayComTimes", void 0);
n([ h ], t.prototype, "ComPlants", void 0);
return n([ f ], t);
}());
i.default = p;
cc._RF.pop();
}, {
"../event/GameEvent": "GameEvent",
"../manager/ChickData": "ChickData",
"../utils/AudioMgr": "AudioMgr",
"../utils/Utils": "Utils",
"./Config": "Config",
"./GameConst": "GameConst"
} ],
Utils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ff748PS7+hEIIiRCFvCwbSy", "Utils");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./Shake"), o = t("./NumberUtils"), r = t("../manager/PoolMgr"), a = t("../game/GameConst"), c = window.wx, s = function() {
function t() {}
t.createUI = function(t, e, i) {
void 0 === e && (e = null);
void 0 === i && (i = null);
return new Promise(function(n, o) {
cc.loader.loadRes(t, cc.Prefab, function(r, a) {
if (r) {
console.error(r);
o();
} else {
null == e && (e = cc.find("Canvas"));
var c = t.lastIndexOf("/"), s = t.substr(c + 1, t.length - c);
if (!e.getComponentInChildren(s)) {
var l = cc.instantiate(a);
l.opacity = 0;
l.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
l.opacity = 255;
})));
l.parent = e;
i && i(l);
n(l);
}
}
});
});
};
t.getRandomInt = function(t, e) {
return Math.floor(Math.random() * (e - t)) + t;
};
t.getRandom = function(t, e) {
return Math.random() * (e - t) + t;
};
t.getPowNum = function(t) {
return Math.pow(10, t);
};
t.formatNumber = function(t, e) {
void 0 === e && (e = 1);
t = Math.floor(t);
return o.default.getLargeString(t);
};
t.setServerTime = function(e) {
t.timeOffset = e - new Date().getTime();
cc.log("timeOffset:", t.timeOffset);
};
t.seedRandomInt = function(e, i) {
return t.getRandomInt(e, i);
};
t.getServerTime = function() {
return new Date().getTime() + t.timeOffset;
};
t.Shake = function(t, e, i) {
var o = cc.find("Canvas/Main Camera");
o.x = 0;
o.y = 0;
o.stopAllActions();
o.runAction(n.Shake.create(t, e, i));
};
t.wxShare = function(e) {
void 0 === e && (e = null);
var i = t.getRandomInt(0, a.share_urls.length), n = a.share_urls[i], o = a.share_titles[i];
t.sharetime = t.getServerTime();
if (window.tt) c.shareAppMessage({
title: o,
imageUrl: n,
success: function() {
e && e(!0);
},
fail: function() {}
}); else {
t.sharecallback = e;
cc.sys.platform == cc.sys.WECHAT_GAME && c.shareAppMessage({
title: o,
imageUrl: n
});
}
};
t.addClickEvent = function(t, e, i, n, o) {
var r = new cc.Component.EventHandler();
r.target = e;
r.component = i;
r.handler = n;
o && (r.customEventData = o);
var a = t.getComponent(cc.Button).clickEvents;
a.length > 0 ? cc.warn("按钮已经存在绑定，跳过自动绑定", t.name) : a.push(r);
};
t.getTimeStrByS = function(t) {
(t = Math.floor(t)) < 0 && (t = 0);
var e = Math.floor(t / 3600 / 24);
t -= 86400 * e;
var i = Math.floor(t / 3600);
t -= 3600 * i;
var n, o = Math.floor(t / 60);
n = o > 9 ? "" + o : "0" + o;
var r;
r = (t -= 60 * o) > 9 ? "" + t : "0" + t;
return e > 0 ? e + "天" + i + "时" + o + "分" : i > 0 ? (i > 9 ? "" + i : "0" + i) + ":" + n : n + ":" + r;
};
t.prototype.cGESDEXDAY_xxxx_fun = function() {
console.log("dssdgewsdgfaIOJOGAkomgDGFMSO");
};
t.loadBundler = function(t) {
return new Promise(function(e) {
cc.assetManager.loadBundle(t, function(t, i) {
console.log(i);
e(null);
});
});
};
t.prototype.tSWD_xxxx_fun = function() {
console.log("36dY");
};
t.formatCoin = function(t) {
t = Math.floor(t);
return o.default.getLargeString(t);
};
t.weight = function(t) {
for (var e = 0, i = 0; i < t.length; ++i) e += t[i];
if (e <= 0) return -1;
var n = Math.round(Math.random() * Number.MAX_VALUE) % e;
for (i = 0; i < t.length; ++i) {
if (n < t[i]) return i;
n -= t[i];
}
return -1;
};
t.loadRes = function(t, e, i) {
void 0 === i && (i = null);
return new Promise(function(n, o) {
var r = "resources", a = t.split(":");
if (2 == a.length) {
r = a[0];
t = a[1];
}
var c = cc.assetManager.getBundle(r).get(t, e);
if (c) {
i && i(null, c);
n(c);
} else cc.assetManager.getBundle(r).load(t, e, function(e, r) {
if (e) {
cc.error(t, e);
i(e, null);
o(null);
} else {
i && i(null, r);
n(r);
}
});
});
};
t.flyAnim = function(e, i, n, o, a, c) {
var s = function(t) {
return 0 == t ? r.default.Instance().get("Coin") : null;
}, l = [];
if (i && i.parent) {
var u = i.parent.convertToWorldSpaceAR(i.position), h = function(t, e, i, n) {
for (var o = [], r = Math.PI / 180 * Math.round(360 / n), a = 0; a < n; a++) {
var c = e + t * Math.sin(r * a), s = i + t * Math.cos(r * a);
o.unshift(cc.v2(c, s));
}
return o;
}(a, (u = cc.find("Canvas").convertToNodeSpaceAR(u)).x, u.y, o);
if (!h) {
c(1);
return;
}
for (var d = 0; d < h.length; d++) {
var f = s(e);
if (!f) {
c(1);
return;
}
f.parent = cc.find("Canvas");
var p = cc.v2(h[d].x + t.getRandomInt(0, 50), h[d].y + t.getRandomInt(0, 50));
f.setPosition(u);
l.push({
gold: f,
randPos: p
});
}
}
var _ = !1, m = cc.find("Canvas").getComponent("HallScene").GetGameObject(n), y = m.parent.convertToWorldSpaceAR(m.position);
y = cc.find("Canvas").convertToNodeSpaceAR(y);
var g = m;
for (d = 0; d < l.length; d++) {
var v = l[d].randPos, b = l[d].gold;
l[d].gold.id = d;
var w = cc.sequence(cc.moveTo(.2, v), cc.delayTime(.03 * d), cc.moveTo(.5, cc.v2(y.x, y.y)), cc.callFunc(function(t) {
if (!_) {
g.stopAllActions();
g.setScale(1);
_ = !0;
var e = cc.sequence(cc.scaleTo(.1, 2, 2), cc.scaleTo(.1, 1, 1), cc.callFunc(function() {
_ = !1;
}));
g.runAction(e);
}
c(t.id == l.length - 1);
r.default.Instance().put(t.name, t);
}));
b.runAction(w);
}
};
t.fixFloat = function(t, e) {
void 0 === e && (e = 2);
var i = 100 * e;
return Math.floor(t * i) / i;
};
t.playBreath = function(t, e, i, n, o) {
var r = this;
void 0 === e && (e = 1);
void 0 === i && (i = 1.12);
void 0 === n && (n = .8);
void 0 === o && (o = !0);
t.stopAllActions();
t.setScale(e);
var a = cc.sequence(cc.scaleTo(n, i, i), cc.scaleTo(n, e, e), cc.callFunc(function() {
o && r.playBreath(t);
}));
return t.runAction(a);
};
t.timeOffset = 0;
t.sharetime = 0;
t.sharecallback = null;
return t;
}();
i.default = s;
cc._RF.pop();
}, {
"../game/GameConst": "GameConst",
"../manager/PoolMgr": "PoolMgr",
"./NumberUtils": "NumberUtils",
"./Shake": "Shake"
} ],
WinView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ffa08746MdNVbqeCZZG4PO8", "WinView");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var o, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
return r > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../framwork/BaseUI"), c = t("../../manager/AdCenter"), s = t("../../manager/ChickData"), l = t("../../manager/WxCenter"), u = t("../../utils/AudioMgr"), h = t("../../utils/Utils"), d = t("../HallScene"), f = cc._decorator, p = f.ccclass, _ = (f.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.coin = 0;
return e;
}
e.prototype.start = function() {
u.default.Instance().playMX("win_stage");
this.GetSkeleton("fx_victory").setAnimation(0, "start", !1);
this.GetSkeleton("fx_victory").setAnimation(1, "idle", !0);
h.default.playBreath(this.GetGameObject("btn_get"));
l.default.aldReport("PassShow", "show");
};
e.prototype.setInfo = function(t) {
this.coin = t;
this.aTobAnim(2 * t);
this.SetText("btn_normal", "领取" + h.default.formatNumber(t) + "金币");
};
e.prototype.aTobAnim = function(t) {
var e = this, i = Math.ceil(t / 60), n = 0;
this.SetText("lbl_coin", h.default.formatNumber(0));
var o = function() {
if ((n += i) >= t) {
n = t;
e.unschedule(o);
}
e.SetText("lbl_coin", h.default.formatNumber(n));
};
this.schedule(o, 0, 61);
};
e.prototype.closeUI = function() {
this.shutAnim();
d.default.Instance.createEnemys();
};
e.prototype.getCoinReward = function(t) {
void 0 === t && (t = !1);
var e = t ? this.coin * h.default.getRandom(1.2, 2) : this.coin;
u.default.Instance().playMX("coin");
h.default.flyAnim(0, this.node, "icon_coin", h.default.getRandomInt(5, 10), 100, function(t) {
t && (s.default.user.coin += e);
});
};
e.prototype.onUIClicked = function(t) {
var e = this, i = t.target.name;
u.default.Instance().playMX("click");
switch (i) {
case "btn_close":
this.getCoinReward();
this.closeUI();
break;

case "btn_get":
l.default.aldReport("PassClick", "click");
c.default.Instance().play(function() {
e.getCoinReward();
e.closeUI();
});
break;

case "btn_normal":
this.getCoinReward();
this.closeUI();
}
};
return r([ p ], e);
}(a.default));
i.default = _;
cc._RF.pop();
}, {
"../../framwork/BaseUI": "BaseUI",
"../../manager/AdCenter": "AdCenter",
"../../manager/ChickData": "ChickData",
"../../manager/WxCenter": "WxCenter",
"../../utils/AudioMgr": "AudioMgr",
"../../utils/Utils": "Utils",
"../HallScene": "HallScene"
} ],
WxCenter: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "51ec5mQNrhCjJFzoCadnNBY", "WxCenter");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.init = function() {
this.wx = window && window.wx;
if (this.wx) {
this.wx.onShareAppMessage(function() {
return {
title: "欢迎加入吃鸡小分队"
};
});
this.showRewardedVideoAd(null, 1, !0);
}
};
t.isWxEnv = function() {
return window && window.wx;
};
t.shareAppMessage = function(t) {
void 0 === t && (t = null);
if (this.wx) {
this.wx.shareAppMessage({
title: "欢迎加入吃鸡小分队"
});
if (t) {
t.keys = new Date().getTime();
this.wx.onShow(function() {
new Date().getTime() - t.keys >= 3e3 && t();
t = null;
});
}
}
};
t.showBanner = function() {
if (this.wx) {
var t = this.wx;
if (!this.bannerAd) {
this.bannerAd = t.createBannerAd({
adUnitId: "xxxx",
style: {
left: 10,
top: 76,
width: 320,
adIntervals: 30
}
});
this.bannerAd.onError(function(t) {
console.log(t);
});
}
this.bannerAd.show();
}
};
t.hideBanner = function() {
this.bannerAd && this.bannerAd.hide();
};
t.showInterstitialAd = function() {
var t = this.wx;
if (t) {
var e = null;
t.createInterstitialAd && (e = t.createInterstitialAd({
adUnitId: "adunit-c64814b155af73e6"
}));
setTimeout(function() {
if (e) {
e.show().then().catch(function(t) {
console.error("插屏 广告失败:", t);
});
e.onClose(function() {
console.log("插屏 广告关闭");
});
e.onLoad(function() {
console.log("插屏 广告加载成功");
});
}
}, 3500);
}
};
t.showRewardedVideoAd = function(t, e, i) {
var n = this;
void 0 === i && (i = !1);
if (this.wx) {
var o, r = this.wx;
o = 2 == e ? "adunit-cad7de3569109b38" : "adunit-e482dfb01207d492";
this.videoCallback = t;
i || r.showLoading({
title: "视频加载中...",
mask: !0
});
setTimeout(function() {
r.hideLoading();
}, 3e3);
var a = r.createRewardedVideoAd({
adUnitId: o
});
if (i) {
a.onClose(function(t) {
r.hideLoading();
(t && t.isEnded || void 0 === t) && n.videoCallback && n.videoCallback(!0);
});
a.onError(function(t) {
console.log(t);
r.hideLoading();
r.showToast("视频获取失败");
});
} else a.show().then(function() {
a.load().then(function() {
return a.show();
}).catch(function(t) {
console.log(t);
r.hideLoading();
r.showToast("视频获取失败");
});
});
}
};
t.videoAdErrHandle = function(t) {
console.log("视频加载失败");
console.log(t);
return {
1e3: "后端接口调用失败",
1001: "参数错误",
1002: "广告单元无效",
1003: "内部错误",
1004: "无合适的广告",
1005: "广告组件审核中",
1006: "广告组件被驳回",
1007: "广告组件被封禁",
1008: "广告单元已关闭"
}[t.errCode] || "视频加载错误,重新加载页面试试吧";
};
t.aldReport = function(t, e) {
void 0 === e && (e = "show");
this.wx && this.wx.aldStage && this.wx.aldSendEvent(t, {
action: e
});
};
t.aldLevelReport = function(t) {
if (this.wx && this.wx.aldStage) {
this.wx.aldLevel.onSetLevel({
levelId: t + "",
levelName: "等级" + t
});
console.log("csdfge2q903423-2-3");
}
};
t.videoCallback = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {} ]
}, {}, [ "Loading", "GameEvent", "BaseUI", "List", "ListItem", "MsgToast", "AchievementModel", "ChickItem", "Config", "GameConst", "GroundItem", "HallScene", "UserModel", "BossCommingUI", "Bullet", "CoinNotEnoughUI", "CommonView", "DropChickView", "DropItem", "Enemy", "FailView", "MonthView", "NewChickUI", "OfflineAwardUI", "RecordView", "SettingView", "ShareView", "ShopItem", "ShopView", "SignView", "WinView", "AdCenter", "ChickData", "ConfigManager", "DataManager", "PoolMgr", "Singleton", "WxCenter", "AudioMgr", "DebugTools", "LongTouchComponent", "Native", "NumberRoll", "NumberUtils", "Shake", "Utils" ]);