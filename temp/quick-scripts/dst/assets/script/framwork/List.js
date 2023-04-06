
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framwork/List.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '747f8Ttu9JGQrJfzFDk8XpT', 'List');
// script/framwork/List.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder;
var ListItem_1 = require("./ListItem");
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["NODE"] = 1] = "NODE";
    TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
})(TemplateType || (TemplateType = {}));
var SlideType;
(function (SlideType) {
    SlideType[SlideType["NORMAL"] = 1] = "NORMAL";
    SlideType[SlideType["ADHERING"] = 2] = "ADHERING";
    SlideType[SlideType["PAGE"] = 3] = "PAGE";
})(SlideType || (SlideType = {}));
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["SINGLE"] = 1] = "SINGLE";
    SelectedType[SelectedType["MULT"] = 2] = "MULT";
})(SelectedType || (SelectedType = {}));
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //模板类型
        _this.templateType = TemplateType.NODE;
        //模板Item（Node）
        _this.tmpNode = null;
        //模板Item（Prefab）
        _this.tmpPrefab = null;
        //滑动模式
        _this._slideMode = SlideType.NORMAL;
        //翻页作用距离
        _this.pageDistance = .3;
        //页面改变事件
        _this.pageChangeEvent = new cc.Component.EventHandler();
        //是否为虚拟列表（动态列表）
        _this._virtual = true;
        _this.lackCenter = false;
        //刷新频率
        _this._updateRate = 2;
        //分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染））
        _this.frameByFrameRenderNum = 0;
        //渲染事件（渲染器）
        _this.renderEvent = new cc.Component.EventHandler();
        //选择模式
        _this.selectedMode = SelectedType.NONE;
        //触发选择事件
        _this.selectedEvent = null; //new cc.Component.EventHandler();
        //当前选择id
        _this._selectedId = -1;
        _this._forceUpdate = false;
        _this._updateDone = true;
        _this._numItems = 0;
        _this._inited = false;
        _this._aniDelRuning = false;
        _this._doneAfterUpdate = false;
        _this.adhering = false;
        _this._adheringBarrier = false;
        _this.curPageNum = 0;
        return _this;
    }
    Object.defineProperty(List.prototype, "slideModel", {
        get: function () {
            return this._slideMode;
        },
        set: function (val) {
            this._slideMode = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "virtual", {
        get: function () {
            return this._virtual;
        },
        set: function (val) {
            if (val != null)
                this._virtual = val;
            if (!CC_DEV && this._numItems != 0) {
                this._onScrolling(null);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "updateRate", {
        get: function () {
            return this._updateRate;
        },
        set: function (val) {
            if (val >= 0 && val <= 6) {
                this._updateRate = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "selectedId", {
        get: function () {
            return this._selectedId;
        },
        set: function (val) {
            var t = this;
            if (t.selectedMode == SelectedType.SINGLE && val == t._selectedId)
                return;
            var item;
            switch (t.selectedMode) {
                case SelectedType.SINGLE: {
                    if (val == t._selectedId)
                        return;
                    item = t.getItemByListId(val);
                    if (!item && val >= 0)
                        return;
                    var listItem = void 0;
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    else //如果＜0则取消选择，把_lastSelectedId也置空吧，如果以后有特殊需求再改吧。
                        t._lastSelectedId = null;
                    t._selectedId = val;
                    if (item) {
                        listItem = item.getComponent(ListItem_1.default);
                        listItem.selected = true;
                    }
                    if (t._lastSelectedId >= 0) {
                        var lastItem = t.getItemByListId(t._lastSelectedId);
                        if (lastItem) {
                            lastItem.getComponent(ListItem_1.default).selected = false;
                        }
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val, t._lastSelectedId);
                    }
                    break;
                }
                case SelectedType.MULT: {
                    item = t.getItemByListId(val);
                    if (!item)
                        return;
                    var listItem = item.getComponent(ListItem_1.default);
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    t._selectedId = val;
                    var bool = !listItem.selected;
                    listItem.selected = bool;
                    var sub = t.multSelected.indexOf(val);
                    if (bool && sub < 0) {
                        t.multSelected.push(val);
                    }
                    else if (!bool && sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val, t._lastSelectedId, bool);
                    }
                    break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "numItems", {
        get: function () {
            return this._numItems;
        },
        set: function (val) {
            var t = this;
            if (!t.checkInited(false))
                return;
            if (val == null || val < 0) {
                cc.error('numItems set the wrong::', val);
                return;
            }
            t._numItems = val;
            t._forceUpdate = true;
            if (t._virtual) {
                t._resizeContent();
                t._onScrolling(null);
            }
            else {
                var layout = t.content.getComponent(cc.Layout);
                if (layout) {
                    layout.enabled = true;
                }
                t._delRedundantItem();
                t.firstListId = 0;
                if (t.frameByFrameRenderNum > 0) {
                    //先渲染几个出来
                    var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;
                    for (var n = 0; n < len; n++) {
                        t._createOrUpdateItem2(n);
                    }
                    if (t.frameByFrameRenderNum < t._numItems) {
                        t._updateCounter = t.frameByFrameRenderNum;
                        t._updateDone = false;
                    }
                }
                else {
                    for (var n = 0; n < val; n++) {
                        t._createOrUpdateItem2(n);
                    }
                    t.actualNumItems = val;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "scrollView", {
        get: function () {
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.onLoad = function () {
        this._init();
    };
    List.prototype.start = function () {
        this._init();
    };
    //注册事件
    List.prototype._registerEvent = function () {
        var t = this;
        t.node.on('touch-up', t._onScrollTouchUp, t);
        t.node.on('scroll-began', t._onScrollBegan, t, true);
        t.node.on('scroll-ended', t._onScrollEnded, t, true);
        t.node.on('scrolling', t._onScrolling, t, true);
    };
    //卸载事件
    List.prototype._unregisterEvent = function () {
        var t = this;
        t.node.off('touch-up', t._onScrollTouchUp, t);
        t.node.off('scroll-began', t._onScrollBegan, t, true);
        t.node.off('scroll-ended', t._onScrollEnded, t, true);
        t.node.off('scrolling', t._onScrolling, t, true);
    };
    //初始化各种..
    List.prototype.onEnable = function () {
        if (!CC_EDITOR) {
            this._registerEvent();
        }
        this._init();
    };
    List.prototype.onDisable = function () {
        if (!CC_EDITOR) {
            this._unregisterEvent();
        }
    };
    List.prototype._init = function () {
        var t = this;
        if (t._inited)
            return;
        t._scrollView = t.node.getComponent(cc.ScrollView);
        if (!t._scrollView) {
            cc.error(t.node.name + ' no assembly cc.ScrollView!');
            return;
        }
        t.content = t._scrollView.content;
        if (!t.content) {
            cc.error(t.node.name + "'s cc.ScrollView unset content!");
            return;
        }
        t._layout = t.content.getComponent(cc.Layout);
        t._align = t._layout.type; //排列模式
        t._resizeMode = t._layout.resizeMode; //自适应模式
        t._startAxis = t._layout.startAxis;
        t._topGap = t._layout.paddingTop; //顶边距
        t._rightGap = t._layout.paddingRight; //右边距
        t._bottomGap = t._layout.paddingBottom; //底边距
        t._leftGap = t._layout.paddingLeft; //左边距
        t._columnGap = t._layout.spacingX; //列距
        t._lineGap = t._layout.spacingY; //行距
        t._colLineNum; //列数或行数（非GRID模式则=1，表示单列或单行）;
        t._verticalDir = t._layout.verticalDirection; //垂直排列子节点的方向
        t._horizontalDir = t._layout.horizontalDirection; //水平排列子节点的方向
        t.setTemplateItem(t.templateType == TemplateType.PREFAB ? t.tmpPrefab.data : t.tmpNode);
        if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) //特定的滑动模式需要关闭惯性
            t._scrollView.inertia = false;
        if (!t.virtual) // lackCenter 仅支持 Virtual 模式
            t.lackCenter = false;
        t._lastDisplayData = []; //最后一次刷新的数据
        t.displayData = []; //当前数据
        t._pool = new cc.NodePool(); //这是个池子..
        t._forceUpdate = false;
        t._updateCounter = 0;
        t._updateDone = true;
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
                switch (t._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                        t._alignCalcType = 1;
                        break;
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                        t._alignCalcType = 2;
                        break;
                }
                break;
            }
            case cc.Layout.Type.VERTICAL: {
                switch (t._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                        t._alignCalcType = 3;
                        break;
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                        t._alignCalcType = 4;
                        break;
                }
                break;
            }
            case cc.Layout.Type.GRID: {
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        switch (t._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                t._alignCalcType = 3;
                                break;
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                t._alignCalcType = 4;
                                break;
                        }
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        switch (t._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                t._alignCalcType = 1;
                                break;
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                t._alignCalcType = 2;
                                break;
                        }
                        break;
                }
                break;
            }
        }
        t.content.removeAllChildren();
        t._inited = true;
    };
    /**
     * 检查是否初始化
     * @param {Boolean} printLog 是否打印错误信息
     * @returns
     */
    List.prototype.checkInited = function (printLog) {
        var pL = printLog ? printLog : true;
        if (!this._inited) {
            if (pL)
                cc.error('List initialization not completed!');
            return false;
        }
        return true;
    };
    //设置模板Item
    List.prototype.setTemplateItem = function (item) {
        if (!item)
            return;
        var t = this;
        t._itemTmp = item;
        if (t._resizeMode == cc.Layout.ResizeMode.CHILDREN)
            t._itemSize = t._layout.cellSize;
        else
            t._itemSize = cc.size(t._itemTmp.width, t._itemTmp.height);
        if (t.selectedMode == SelectedType.MULT)
            t.multSelected = [];
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL:
                t._colLineNum = 1;
                t._sizeType = false;
                break;
            case cc.Layout.Type.VERTICAL:
                t._colLineNum = 1;
                t._sizeType = true;
                break;
            case cc.Layout.Type.GRID:
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        //计算列数
                        var trimW = t.content.width - t._leftGap - t._rightGap;
                        t._colLineNum = 1;
                        while (1) {
                            if (trimW - ((t._colLineNum * t._itemSize.width) + ((t._colLineNum - 1) * t._columnGap)) < 0) {
                                t._colLineNum--;
                                break;
                            }
                            else {
                                t._colLineNum++;
                            }
                        }
                        t._sizeType = true;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        //计算行数
                        var trimH = t.content.height - t._topGap - t._bottomGap;
                        t._colLineNum = 1;
                        while (1) {
                            if (trimH - ((t._colLineNum * t._itemSize.height) + ((t._colLineNum - 1) * t._lineGap)) < 0) {
                                t._colLineNum--;
                                break;
                            }
                            else {
                                t._colLineNum++;
                            }
                        }
                        t._sizeType = false;
                        break;
                }
                break;
        }
    };
    //禁用 Layout 组件，自行计算 Content Size
    List.prototype._resizeContent = function () {
        var t = this;
        var result;
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
                if (t.customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._leftGap + fixed.val + (t._itemSize.width * (t._numItems - fixed.count)) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                else {
                    result = t._leftGap + (t._itemSize.width * t._numItems) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                break;
            }
            case cc.Layout.Type.VERTICAL: {
                if (t.customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._topGap + fixed.val + (t._itemSize.height * (t._numItems - fixed.count)) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                else {
                    result = t._topGap + (t._itemSize.height * t._numItems) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                break;
            }
            case cc.Layout.Type.GRID: {
                //网格模式不支持居中
                if (t.lackCenter)
                    t.lackCenter = false;
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        var lineNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._topGap + (t._itemSize.height * lineNum) + (t._lineGap * (lineNum - 1)) + t._bottomGap;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        var colNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._leftGap + (t._itemSize.width * colNum) + (t._columnGap * (colNum - 1)) + t._rightGap;
                        break;
                }
                break;
            }
        }
        var layout = t.content.getComponent(cc.Layout);
        if (layout)
            layout.enabled = false;
        t._allItemSize = result;
        var targetWH;
        if (t._sizeType) {
            //-0.1是为了避免content的size不会超出node.size 0.00000001这种情况
            targetWH = result < t.node.height ? (t.node.height - .1) : result;
            if (targetWH < 0)
                targetWH = 0;
            t._lackSize = t.lackCenter ? targetWH : null;
            t._allItemSizeNoBorder = t._allItemSize - t._topGap - t._bottomGap;
            t.content.height = targetWH;
        }
        else {
            //-0.1是为了避免content的size不会超出node.size 0.00000001这种情况
            targetWH = result < t.node.width ? (t.node.width - .1) : result;
            if (targetWH < 0)
                targetWH = 0;
            t._lackSize = t.lackCenter ? targetWH : null;
            t._allItemSizeNoBorder = t._allItemSize - t._leftGap - t._rightGap;
            t.content.width = targetWH;
        }
        // cc.log('_resizeContent()  numItems =', this._numItems, '，content =', this.content);
    };
    //滚动进行时...
    List.prototype._onScrolling = function (ev) {
        if (this.frameCount == null)
            this.frameCount = this._updateRate;
        if (!this._forceUpdate && (ev && ev.type != 'scroll-ended') && this.frameCount > 0) {
            this.frameCount--;
            return;
        }
        else
            this.frameCount = this._updateRate;
        if (this._aniDelRuning)
            return;
        this._calcViewPos();
        if (this._virtual) {
            this.displayData = [];
            var itemPos = void 0;
            var curId = 0;
            var endId = this._numItems - 1;
            if (this.customSize) {
                var breakFor = false;
                //如果该item的位置在可视区域内，就推入displayData
                for (; curId <= endId && !breakFor; curId++) {
                    itemPos = this._calcItemPos(curId);
                    switch (this._align) {
                        case cc.Layout.Type.HORIZONTAL:
                            if (itemPos.right >= this.viewLeft && itemPos.left <= this.viewRight) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            if (itemPos.bottom <= this.viewTop && itemPos.top >= this.viewBottom) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (this._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    if (itemPos.bottom <= this.viewTop && itemPos.top >= this.viewBottom) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    if (itemPos.right >= this.viewLeft && itemPos.left <= this.viewRight) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                            }
                            break;
                    }
                }
            }
            else {
                var ww = this._itemSize.width + this._columnGap;
                var hh = this._itemSize.height + this._lineGap;
                switch (this._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        curId = (this.viewLeft + this._leftGap) / ww;
                        endId = (this.viewRight + this._rightGap) / ww;
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        curId = (-this.viewRight - this._rightGap) / ww;
                        endId = (-this.viewLeft - this._leftGap) / ww;
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        curId = (-this.viewTop - this._topGap) / hh;
                        endId = (-this.viewBottom - this._bottomGap) / hh;
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        curId = (this.viewBottom + this._bottomGap) / hh;
                        endId = (this.viewTop + this._topGap) / hh;
                        break;
                }
                curId = Math.floor(curId) * this._colLineNum;
                endId = Math.ceil(endId) * this._colLineNum;
                endId--;
                if (curId < 0)
                    curId = 0;
                if (endId >= this._numItems)
                    endId = this._numItems - 1;
                // cc.log(curId, endId);
                for (; curId <= endId; curId++) {
                    this.displayData.push(this._calcItemPos(curId));
                }
            }
            if (this.displayData.length <= 0 || !this._numItems) { //if none, delete all.
                this._delRedundantItem();
                return;
            }
            this.firstListId = this.displayData[0].id;
            this.actualNumItems = this.displayData.length;
            var len = this._lastDisplayData.length;
            //判断数据是否与当前相同，如果相同，return。
            //因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
            if (this._forceUpdate ||
                this.actualNumItems != len ||
                this.firstListId != this._lastDisplayData[0] ||
                this.displayData[this.actualNumItems - 1].id != this._lastDisplayData[len - 1]) {
                this._lastDisplayData = [];
                if (this.frameByFrameRenderNum > 0) { //逐帧渲染
                    if (this._numItems > 0) {
                        if (!this._updateDone) {
                            this._doneAfterUpdate = true;
                        }
                        else {
                            this._updateCounter = 0;
                        }
                        this._updateDone = false;
                    }
                    else {
                        this._delRedundantItem();
                        this._updateCounter = 0;
                        this._updateDone = true;
                    }
                    // cc.log('List Display Data I::', this.displayData);
                }
                else { //直接渲染
                    // cc.log('List Display Data II::', this.displayData);
                    for (var c = 0; c < this.actualNumItems; c++) {
                        this._createOrUpdateItem(this.displayData[c]);
                    }
                    this._delRedundantItem();
                    this._forceUpdate = false;
                }
            }
            this._calcNearestItem();
        }
    };
    //计算位置 根据id
    List.prototype._calcItemPos = function (id) {
        var width, height, top, bottom, left, right, itemX, itemY;
        switch (this._align) {
            case cc.Layout.Type.HORIZONTAL:
                switch (this._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                        if (this.customSize) {
                            var fixed = this._getFixedSize(id);
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * (id - fixed.count)) + (fixed.val + (this._columnGap * fixed.count));
                            var cs = this.customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        right = left + width;
                        if (this.lackCenter && this._lackSize >= 0) {
                            var offset = (this.content.width / 2) - (this._allItemSizeNoBorder / 2);
                            left += offset;
                            right += offset;
                        }
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                        if (this.customSize) {
                            var fixed = this._getFixedSize(id);
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * (id - fixed.count)) - (fixed.val + (this._columnGap * fixed.count));
                            var cs = this.customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        left = right - width;
                        if (this.lackCenter && this._lackSize >= 0) {
                            var offset = (this.content.width / 2) - (this._allItemSizeNoBorder / 2);
                            left -= offset;
                            right -= offset;
                        }
                        return {
                            id: id,
                            right: right,
                            left: left,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                }
                break;
            case cc.Layout.Type.VERTICAL: {
                switch (this._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                        if (this.customSize) {
                            var fixed = this._getFixedSize(id);
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * (id - fixed.count)) - (fixed.val + (this._lineGap * fixed.count));
                            var cs = this.customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        bottom = top - height;
                        if (this.lackCenter && this._lackSize >= 0) {
                            var offset = (this.content.height / 2) - (this._allItemSizeNoBorder / 2);
                            top -= offset;
                            bottom -= offset;
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                    }
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                        if (this.customSize) {
                            var fixed = this._getFixedSize(id);
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * (id - fixed.count)) + (fixed.val + (this._lineGap * fixed.count));
                            var cs = this.customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        top = bottom + height;
                        if (this.lackCenter && this._lackSize >= 0) {
                            var offset = (this.content.height / 2) - (this._allItemSizeNoBorder / 2);
                            top += offset;
                            bottom += offset;
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                        break;
                    }
                }
            }
            case cc.Layout.Type.GRID: {
                var colLine = Math.floor(id / this._colLineNum);
                switch (this._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL: {
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                top = -this._topGap - ((this._itemSize.height + this._lineGap) * colLine);
                                bottom = top - this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * colLine);
                                top = bottom + this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                        }
                        itemX = this._leftGap + ((id % this._colLineNum) * (this._itemSize.width + this._columnGap));
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                itemX += (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                itemX += ((1 - this._itemTmp.anchorX) * this._itemSize.width);
                                itemX -= ((1 - this.content.anchorX) * this.content.width);
                                itemX *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: itemX,
                            y: itemY,
                        };
                    }
                    case cc.Layout.AxisDirection.VERTICAL: {
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                left = this._leftGap + ((this._itemSize.width + this._columnGap) * colLine);
                                right = left + this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                right = -this._rightGap - ((this._itemSize.width + this._columnGap) * colLine);
                                left = right - this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX += ((1 - this.content.anchorX) * this.content.width);
                                break;
                            }
                        }
                        itemY = -this._topGap - ((id % this._colLineNum) * (this._itemSize.height + this._lineGap));
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                itemY -= ((1 - this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += ((1 - this.content.anchorY) * this.content.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                itemY -= ((this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += (this.content.anchorY * this.content.height);
                                itemY *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: itemX,
                            y: itemY,
                        };
                    }
                }
                break;
            }
        }
    };
    //计算可视范围
    List.prototype._calcViewPos = function () {
        var scrollPos = this.content.getPosition();
        switch (this._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
                this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
                this.viewRight = this.viewLeft + this.node.width;
                this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
                this.viewRight += this.elasticRight;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
                this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
                this.viewLeft = this.viewRight - this.node.width;
                this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
                this.viewLeft -= this.elasticLeft;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
                this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
                this.viewBottom = this.viewTop - this.node.height;
                this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
                this.viewBottom += this.elasticBottom;
                // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
                this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
                this.viewTop = this.viewBottom + this.node.height;
                this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
                this.viewTop -= this.elasticTop;
                // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                break;
        }
    };
    //获取固定尺寸
    List.prototype._getFixedSize = function (listId) {
        if (!this.customSize)
            return null;
        if (listId == null)
            listId = this._numItems;
        var fixed = 0;
        var count = 0;
        for (var id in this.customSize) {
            if (parseInt(id) < listId) {
                fixed += this.customSize[id];
                count++;
            }
        }
        return {
            val: fixed,
            count: count,
        };
    };
    //滚动结束时..
    List.prototype._onScrollEnded = function () {
        var t = this;
        if (t.scrollToListId != null) {
            var item = t.getItemByListId(t.scrollToListId);
            t.scrollToListId = null;
            if (item) {
                item.runAction(cc.sequence(cc.scaleTo(.1, 1.06), cc.scaleTo(.1, 1)));
            }
        }
        t._onScrolling(null);
        if (t._slideMode == SlideType.ADHERING &&
            !t.adhering) {
            //cc.log(t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
    };
    //滚动结束时..
    List.prototype._onScrollBegan = function () {
        this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
    };
    //触摸抬起时..
    List.prototype._onScrollTouchUp = function () {
        var t = this;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING
        // !t.adhering
        ) {
            if (this.adhering)
                this._adheringBarrier = true;
            t.adhere();
            // }
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
    };
    //粘附
    List.prototype.adhere = function () {
        var t = this;
        if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)
            return;
        t.adhering = true;
        t._calcNearestItem();
        var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
        var timeInSecond = .7;
        t.scrollTo(t.nearestListId, timeInSecond, offset);
    };
    List.prototype._pageAdhere = function () {
        var t = this;
        if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)
            return;
        var curPos = t._sizeType ? t.viewTop : t.viewLeft;
        var dis = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
        var canSkip = Math.abs(t._beganPos - curPos) > dis;
        if (canSkip) {
            var timeInSecond = .5;
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (t._beganPos > curPos)
                        t.prePage(timeInSecond);
                    else
                        t.nextPage(timeInSecond);
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (t._beganPos < curPos)
                        t.prePage(timeInSecond);
                    else
                        t.nextPage(timeInSecond);
                    break;
            }
        }
        else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
            t.adhere();
        }
        t._beganPos = null;
    };
    //Update..
    List.prototype.update = function (dt) {
        if (dt > 1)
            dt = 1;
        if (this.frameByFrameRenderNum <= 0 || this._updateDone)
            return;
        // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);
        if (this._virtual) {
            var len = (this._updateCounter + this.frameByFrameRenderNum) > this.actualNumItems ? this.actualNumItems : (this._updateCounter + this.frameByFrameRenderNum);
            for (var n = this._updateCounter; n < len; n++) {
                var data = this.displayData[n];
                if (data)
                    this._createOrUpdateItem(data);
            }
            if (this._updateCounter >= this.actualNumItems - 1) { //最后一个
                if (this._doneAfterUpdate) {
                    this._updateCounter = 0;
                    this._updateDone = false;
                    if (!this._scrollView.isScrolling())
                        this._doneAfterUpdate = false;
                }
                else {
                    this._updateDone = true;
                    this._delRedundantItem();
                    this._forceUpdate = false;
                    this._calcNearestItem();
                }
            }
            else {
                this._updateCounter += this.frameByFrameRenderNum;
            }
        }
        else {
            if (this._updateCounter < this._numItems) {
                var len = (this._updateCounter + this.frameByFrameRenderNum) > this._numItems ? this._numItems : (this._updateCounter + this.frameByFrameRenderNum);
                for (var n = this._updateCounter; n < len; n++) {
                    this._createOrUpdateItem2(n);
                }
                this._updateCounter += this.frameByFrameRenderNum;
            }
            else {
                this._updateDone = true;
                this._calcNearestItem();
            }
        }
    };
    List.prototype._updateListItem = function (listItem) {
        if (!listItem)
            return;
        if (this.selectedMode > SelectedType.NONE) {
            switch (this.selectedMode) {
                case SelectedType.SINGLE:
                    listItem.selected = this.selectedId == listItem.listId;
                    break;
                case SelectedType.MULT:
                    listItem.selected = this.multSelected.indexOf(listItem.listId) >= 0;
                    break;
            }
        }
    };
    /**
     * 创建或更新Item（虚拟列表用）
     * @param {Object} data 数据
     */
    List.prototype._createOrUpdateItem = function (data) {
        var item = this.getItemByListId(data.id);
        var listItem;
        if (!item) { //如果不存在
            if (this._pool.size()) {
                item = this._pool.get();
                // cc.log('从池中取出::   旧id =', item._listId, '，新id =', data.id, item);
            }
            else {
                item = cc.instantiate(this._itemTmp);
                // cc.log('新建::', data.id, item);
            }
            item.setPosition(cc.v2(data.x, data.y));
            this._resetItemSize(item);
            this.content.addChild(item);
            item.setSiblingIndex(this.content.childrenCount - 1);
            listItem = item.getComponent(ListItem_1.default);
            listItem.listId = data.id;
            listItem.list = this;
            listItem._registerEvent();
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            item.setPosition(cc.v2(data.x, data.y));
            this._resetItemSize(item);
            // cc.log('ADD::', data.id, item);
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id);
            }
        }
        this._resetItemSize(item);
        this._updateListItem(listItem);
        if (this._lastDisplayData.indexOf(data.id) < 0) {
            this._lastDisplayData.push(data.id);
        }
    };
    //创建或更新Item（非虚拟列表用）
    List.prototype._createOrUpdateItem2 = function (listId) {
        var item = this.content.children[listId];
        var listItem;
        if (!item) { //如果不存在
            item = cc.instantiate(this._itemTmp);
            this.content.addChild(item);
            listItem = item.getComponent(ListItem_1.default);
            listItem.listId = listId;
            listItem.list = this;
            listItem._registerEvent();
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            listItem = item.getComponent(ListItem_1.default);
            listItem.listId = listId;
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
            }
        }
        this._updateListItem(listItem);
        if (this._lastDisplayData.indexOf(listId) < 0) {
            this._lastDisplayData.push(listId);
        }
    };
    //仅虚拟列表用
    List.prototype._resetItemSize = function (item) {
        var listItem = item.getComponent(ListItem_1.default);
        if (!this.customSize || !this.customSize[listItem.listId]) {
            item.setContentSize(this._itemSize);
            return;
        }
        var size = this.customSize[listItem.listId];
        if (this._align == cc.Layout.Type.HORIZONTAL) {
            item.width = size;
        }
        else if (this._align == cc.Layout.Type.VERTICAL) {
            item.height = size;
        }
    };
    /**
     * 更新指定的Item
     * @param {Array} args 单个listId，或者数组
     * @returns
     */
    List.prototype.updateAppointed = function (args) {
        if (!Array.isArray(args)) {
            args = [args];
        }
        var len = args.length;
        for (var n = 0; n < len; n++) {
            var listId = args[n];
            var item = this.getItemByListId(listId);
            if (item)
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
        }
    };
    /**
     * 设置多选
     * @param {Array} args 可以是单个listId，也可是个listId数组
     * @param {Boolean} bool 值，如果为null的话，则直接用args覆盖
     */
    List.prototype.setMultSelected = function (args, bool) {
        var t = this;
        if (!Array.isArray(args)) {
            args = [args];
        }
        if (bool == null) {
            t.multSelected = null;
            t.multSelected = args;
        }
        else {
            var listId = void 0, sub = void 0;
            if (bool) {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub < 0) {
                        t.multSelected.push(listId);
                    }
                }
            }
            else {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                }
            }
        }
        t._forceUpdate = true;
        t._onScrolling(null);
    };
    /**
     * 根据ListID获取Item
     * @param {Number} listId
     * @returns
     */
    List.prototype.getItemByListId = function (listId) {
        for (var n = this.content.childrenCount - 1; n >= 0; n--) {
            if (this.content.children[n].getComponent(ListItem_1.default).listId == listId)
                return this.content.children[n];
        }
        return null;
    };
    //删除显示区域以外的Item
    List.prototype._delRedundantItem = function () {
        if (this._virtual) {
            var arr = this._getOutsideItem();
            for (var n = arr.length - 1; n >= 0; n--) {
                this._pool.put(arr[n]);
            }
            // cc.log('存入::', str, '    pool.length =', this._pool.length);
        }
        else {
            while (this.content.childrenCount > this._numItems) {
                this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
            }
        }
    };
    /**
     * 获取在显示区域外的Item
     * @returns
     */
    List.prototype._getOutsideItem = function () {
        var item, isOutside;
        var result = [];
        for (var n = this.content.childrenCount - 1; n >= 0; n--) {
            item = this.content.children[n];
            isOutside = true;
            if (isOutside) {
                for (var c = this.actualNumItems - 1; c >= 0; c--) {
                    if (!this.displayData[c])
                        continue;
                    var listId = this.displayData[c].id;
                    if (item.getComponent(ListItem_1.default).listId == listId) {
                        isOutside = false;
                        break;
                    }
                }
            }
            if (isOutside) {
                result.push(item);
            }
        }
        return result;
    };
    /**
     * 动效删除Item（此方法只适用于虚拟列表，即_virtual=true）
     * 一定要在回调函数里重新设置新的numItems进行刷新，毕竟本List是靠数据驱动的。
     */
    List.prototype.aniDelItem = function (listId, callFunc, aniType) {
        var t = this;
        var item = t.getItemByListId(listId);
        var listItem;
        if (t._aniDelRuning || !t._virtual) {
            return;
        }
        if (!item) {
            callFunc(listId);
            return;
        }
        else {
            listItem = item.getComponent(ListItem_1.default);
        }
        t._aniDelRuning = true;
        var curLastId = t.displayData[t.displayData.length - 1].id;
        var resetSelectedId = listItem.selected;
        listItem.showAni(aniType, function () {
            //判断有没有下一个，如果有的话，创建粗来
            var newId;
            if (curLastId < t._numItems - 2) {
                newId = curLastId + 1;
            }
            if (newId != null) {
                var newData = t._calcItemPos(newId);
                t.displayData.push(newData);
                if (t._virtual)
                    t._createOrUpdateItem(newData);
                else
                    t._createOrUpdateItem2(newId);
            }
            else
                t._numItems--;
            if (t.selectedMode == SelectedType.SINGLE) {
                if (resetSelectedId) {
                    t._selectedId = -1;
                }
                else if (t._selectedId - 1 >= 0) {
                    t._selectedId--;
                }
            }
            else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
                var sub = t.multSelected.indexOf(listId);
                if (sub >= 0) {
                    t.multSelected.splice(sub, 1);
                }
                //多选的数据，在其后的全部减一
                for (var n = t.multSelected.length - 1; n >= 0; n--) {
                    var id = t.multSelected[n];
                    if (id >= listId)
                        t.multSelected[n]--;
                }
            }
            if (t.customSize) {
                if (t.customSize[listId])
                    delete t.customSize[listId];
                var newCustomSize = {};
                var size = void 0;
                for (var id in t.customSize) {
                    size = t.customSize[id];
                    var idNumber = parseInt(id);
                    newCustomSize[idNumber - (idNumber >= listId ? 1 : 0)] = size;
                }
                t.customSize = newCustomSize;
            }
            //后面的Item向前怼的动效
            var sec = .2333;
            var acts, haveCB;
            for (var n = newId != null ? newId : curLastId; n >= listId + 1; n--) {
                item = t.getItemByListId(n);
                if (item) {
                    var posData = t._calcItemPos(n - 1);
                    acts = [
                        cc.moveTo(sec, cc.v2(posData.x, posData.y)),
                    ];
                    if (n <= listId + 1) {
                        haveCB = true;
                        acts.push(cc.callFunc(function () {
                            t._aniDelRuning = false;
                            callFunc(listId);
                        }));
                    }
                    if (acts.length > 1)
                        item.runAction(cc.sequence(acts));
                    else
                        item.runAction(acts[0]);
                }
            }
            if (!haveCB) {
                t._aniDelRuning = false;
                callFunc(listId);
            }
        }, true);
    };
    //删除单个Item
    List.prototype._delSingleItem = function (item) {
        // cc.log('DEL::', item.getComponent(ListItem).listId, item);
        item.removeFromParent();
        if (item.destroy)
            item.destroy();
        item = null;
    };
    /**
     * 滚动到..
     * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
     * @param {Number} timeInSecond 时间
     * @param {Number} offset 索引目标位置偏移，0-1
     * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
     */
    List.prototype.scrollTo = function (listId, timeInSecond, offset, overStress) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        if (offset === void 0) { offset = null; }
        if (overStress === void 0) { overStress = false; }
        var t = this;
        if (!t.checkInited(false))
            return;
        t._scrollView.stopAutoScroll();
        if (timeInSecond == null) //默认0.5
            timeInSecond = .5;
        else if (timeInSecond < 0)
            timeInSecond = 0;
        if (listId < 0)
            listId = 0;
        else if (listId >= t._numItems)
            listId = t._numItems - 1;
        var pos = t._calcItemPos(listId); //嗯...不管virtual=true还是false，都自己算，反正结果都一样，懒得去遍历content.children了。
        var targetX, targetY;
        switch (t._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                targetX = pos.left;
                if (offset != null)
                    targetX -= t.node.width * offset;
                else
                    targetX -= t._leftGap;
                pos = cc.v2(targetX, 0);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                targetX = pos.right - t.node.width;
                if (offset != null)
                    targetX += t.node.width * offset;
                else
                    targetX += t._rightGap;
                pos = cc.v2(targetX + t.content.width, 0);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                targetY = pos.top;
                if (offset != null)
                    targetY += t.node.height * offset;
                else
                    targetY += t._topGap;
                pos = cc.v2(0, -targetY);
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                targetY = pos.bottom + t.node.height;
                if (offset != null)
                    targetY -= t.node.height * offset;
                else
                    targetY -= t._bottomGap;
                pos = cc.v2(0, -targetY + t.content.height);
                break;
        }
        var viewPos = t.content.getPosition();
        viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
        var comparePos = t._sizeType ? pos.y : pos.x;
        var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > .5;
        // cc.log(runScroll, t._scrollPos, viewPos, comparePos)
        t._scrollView.stopAutoScroll();
        if (runScroll) {
            t._scrollView.scrollToOffset(pos, timeInSecond);
            // cc.log(listId, t.content.width, t.content.getPosition(), pos);
            t.scheduleOnce(function () {
                if (!t._adheringBarrier) {
                    t.adhering = t._adheringBarrier = false;
                }
                //cc.log('2222222222', t._adheringBarrier)
                if (overStress) {
                    // t.scrollToListId = listId;
                    var item = t.getItemByListId(listId);
                    if (item) {
                        item.runAction(cc.sequence(cc.scaleTo(.1, 1.05), cc.scaleTo(.1, 1)));
                    }
                }
            }, timeInSecond + .1);
            if (timeInSecond <= 0) {
                t._onScrolling(null);
            }
        }
    };
    //计算 CustomSize（比较复杂的Item结构不建议使用此方法来计算）
    List.prototype.calcCustomSize = function (numItems) {
        var t = this;
        if (!t._itemTmp)
            return cc.error('Unset template item!');
        if (!t.renderEvent)
            return cc.error('Unset Render-Event!');
        t.customSize = {};
        var temp = cc.instantiate(t._itemTmp);
        t.content.addChild(temp);
        for (var n = 0; n < numItems; n++) {
            cc.Component.EventHandler.emitEvents([t.renderEvent], temp, n);
            if (temp.height != t._itemSize.height || temp.width != t._itemSize.width) {
                t.customSize[n] = t._sizeType ? temp.height : temp.width;
            }
        }
        if (!Object.keys(t.customSize).length)
            t.customSize = null;
        temp.removeFromParent();
        if (temp.destroy)
            temp.destroy();
        return t.customSize;
    };
    /**
     * 计算当前滚动窗最近的Item
     */
    List.prototype._calcNearestItem = function () {
        this.nearestListId = null;
        var data, item, center;
        if (this._virtual)
            this._calcViewPos();
        var breakFor = false;
        for (var n = 0; n < this.content.childrenCount && !breakFor; n += this._colLineNum) {
            data = this._virtual ? this.displayData[n] : this._calcExistItemPos(n);
            center = this._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
            switch (this._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (data.right >= this.viewLeft) {
                        this.nearestListId = data.id;
                        if (this.viewLeft > center)
                            this.nearestListId += this._colLineNum;
                        breakFor = true;
                    }
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (data.left <= this.viewRight) {
                        this.nearestListId = data.id;
                        if (this.viewRight < center)
                            this.nearestListId += this._colLineNum;
                        breakFor = true;
                    }
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (data.bottom <= this.viewTop) {
                        this.nearestListId = data.id;
                        if (this.viewTop < center)
                            this.nearestListId += this._colLineNum;
                        breakFor = true;
                    }
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (data.top >= this.viewBottom) {
                        this.nearestListId = data.id;
                        if (this.viewBottom > center)
                            this.nearestListId += this._colLineNum;
                        breakFor = true;
                    }
                    break;
            }
        }
        //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）
        data = this._virtual ? this.displayData[this.actualNumItems - 1] : this._calcExistItemPos(this._numItems - 1);
        if (data && data.id == this._numItems - 1) {
            center = this._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
            switch (this._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (this.viewRight > center)
                        this.nearestListId = data.id;
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (this.viewLeft < center)
                        this.nearestListId = data.id;
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (this.viewBottom < center)
                        this.nearestListId = data.id;
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (this.viewTop > center)
                        this.nearestListId = data.id;
                    break;
            }
        }
        // cc.log('this.nearestListId =', this.nearestListId);
    };
    //计算已存在的Item的位置
    List.prototype._calcExistItemPos = function (id) {
        var item = this.getItemByListId(id);
        if (!item)
            return null;
        var data = {
            id: id,
            x: item.x,
            y: item.y,
        };
        if (this._sizeType) {
            data.top = item.y + (item.height * (1 - item.anchorY));
            data.bottom = item.y - (item.height * item.anchorY);
        }
        else {
            data.left = item.x - (item.width * item.anchorX);
            data.right = item.x + (item.width * (1 - item.anchorX));
        }
        return data;
    };
    //跳转到第几页
    List.prototype.skipPage = function (pageNum, timeInSecond) {
        var t = this;
        if (t._slideMode != SlideType.PAGE)
            return cc.error('This function is not allowed to be called, Must SlideMode = PAGE!');
        if (pageNum < 0 || pageNum >= t._numItems)
            return;
        if (t.curPageNum == pageNum)
            return;
        t.curPageNum = pageNum;
        if (t.pageChangeEvent) {
            cc.Component.EventHandler.emitEvents([t.pageChangeEvent], pageNum);
        }
        t.scrollTo(pageNum, timeInSecond);
    };
    //上一页
    List.prototype.prePage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        this.skipPage(this.curPageNum - 1, timeInSecond);
    };
    //下一页
    List.prototype.nextPage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        this.skipPage(this.curPageNum + 1, timeInSecond);
    };
    __decorate([
        property({ type: cc.Enum(TemplateType), tooltip: CC_DEV && '模板类型', })
    ], List.prototype, "templateType", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && '模板Item',
            visible: function () { return this.templateType == TemplateType.NODE; }
        })
    ], List.prototype, "tmpNode", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            tooltip: CC_DEV && '模板Item',
            visible: function () { return this.templateType == TemplateType.PREFAB; }
        })
    ], List.prototype, "tmpPrefab", void 0);
    __decorate([
        property()
    ], List.prototype, "_slideMode", void 0);
    __decorate([
        property({
            type: cc.Enum(SlideType),
            tooltip: CC_DEV && '滑动模式'
        })
    ], List.prototype, "slideModel", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 1, .1],
            tooltip: CC_DEV && '翻页作用距离',
            slide: true,
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageDistance", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '页面改变事件',
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageChangeEvent", void 0);
    __decorate([
        property()
    ], List.prototype, "_virtual", void 0);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: CC_DEV && '是否为虚拟列表（动态列表）'
        })
    ], List.prototype, "virtual", null);
    __decorate([
        property({
            tooltip: CC_DEV && 'Item数量过少时是否居中所有Item（不支持Grid布局）',
            visible: function () { return this.virtual; }
        })
    ], List.prototype, "lackCenter", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], List.prototype, "_updateRate", void 0);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 6, 1],
            tooltip: CC_DEV && '刷新频率（值越大刷新频率越低、性能越高）',
            slide: true,
        })
    ], List.prototype, "updateRate", null);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 12, 1],
            tooltip: CC_DEV && '逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）',
            slide: true,
        })
    ], List.prototype, "frameByFrameRenderNum", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '渲染事件（渲染器）',
        })
    ], List.prototype, "renderEvent", void 0);
    __decorate([
        property({
            type: cc.Enum(SelectedType),
            tooltip: CC_DEV && '选择模式'
        })
    ], List.prototype, "selectedMode", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '触发选择事件',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], List.prototype, "selectedEvent", void 0);
    __decorate([
        property({
            serializable: false
        })
    ], List.prototype, "_numItems", void 0);
    List = __decorate([
        ccclass,
        disallowMultiple(),
        menu('自定义组件/List')
        //脚本生命周期回调的执行优先级。小于 0 的脚本将优先执行，大于 0 的脚本将最后执行。该优先级只对 onLoad, onEnable, start, update 和 lateUpdate 有效，对 onDisable 和 onDestroy 无效。
        ,
        executionOrder(-5000)
    ], List);
    return List;
}(cc.Component));
exports.default = List;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtd29ya1xcTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQWdFLEVBQUUsQ0FBQyxVQUFVLEVBQTNFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGNBQWMsb0JBQWtCLENBQUM7QUFFcEYsdUNBQWtDO0FBRWxDLElBQUssWUFHSjtBQUhELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUhJLFlBQVksS0FBWixZQUFZLFFBR2hCO0FBRUQsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YsNkNBQVUsQ0FBQTtJQUNWLGlEQUFZLENBQUE7SUFDWix5Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFFRCxJQUFLLFlBSUo7QUFKRCxXQUFLLFlBQVk7SUFDYiwrQ0FBUSxDQUFBO0lBQ1IsbURBQVUsQ0FBQTtJQUNWLCtDQUFRLENBQUE7QUFDWixDQUFDLEVBSkksWUFBWSxLQUFaLFlBQVksUUFJaEI7QUFNRDtJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTZsREM7UUE1bERHLE1BQU07UUFFRSxrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3ZELGNBQWM7UUFNZCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGdCQUFnQjtRQU1oQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLE1BQU07UUFFRSxnQkFBVSxHQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFXakQsUUFBUTtRQVFELGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLFFBQVE7UUFNQSxxQkFBZSxHQUE4QixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckYsZUFBZTtR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QUMsV0FBVyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNwQyw4RUFBOEU7Z0JBQzlFLE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyx1REFBdUQ7Z0JBQzFELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUcsSUFB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LENBQUM7UUFDbkIsK0hBQStIOztRQUM5SCxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7T0FDRCxJQUFJLENBNmxEeEI7SUFBRCxXQUFDO0NBN2xERCxBQTZsREMsQ0E3bERpQyxFQUFFLENBQUMsU0FBUyxHQTZsRDdDO2tCQTdsRG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBkaXNhbGxvd011bHRpcGxlLCBtZW51LCBleGVjdXRpb25PcmRlciB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcclxuXHJcbmVudW0gVGVtcGxhdGVUeXBlIHtcclxuICAgIE5PREUgPSAxLFxyXG4gICAgUFJFRkFCID0gMixcclxufVxyXG5cclxuZW51bSBTbGlkZVR5cGUge1xyXG4gICAgTk9STUFMID0gMSwvL+aZrumAmlxyXG4gICAgQURIRVJJTkcgPSAyLC8v57KY6ZmE5pWI5p6c77yM5rKh5pyJ5rua5Yqo5oOv5oCnXHJcbiAgICBQQUdFID0gMywvL+mhtemdou+8jOayoeaciea7muWKqOaDr+aAp1xyXG59XHJcblxyXG5lbnVtIFNlbGVjdGVkVHlwZSB7XHJcbiAgICBOT05FID0gMCxcclxuICAgIFNJTkdMRSA9IDEsLy/ljZXpgIlcclxuICAgIE1VTFQgPSAyLC8v5aSa6YCJXHJcbn1cclxuQGNjY2xhc3NcclxuQGRpc2FsbG93TXVsdGlwbGUoKVxyXG5AbWVudSgn6Ieq5a6a5LmJ57uE5Lu2L0xpc3QnKVxyXG4vL+iEmuacrOeUn+WRveWRqOacn+Wbnuiwg+eahOaJp+ihjOS8mOWFiOe6p+OAguWwj+S6jiAwIOeahOiEmuacrOWwhuS8mOWFiOaJp+ihjO+8jOWkp+S6jiAwIOeahOiEmuacrOWwhuacgOWQjuaJp+ihjOOAguivpeS8mOWFiOe6p+WPquWvuSBvbkxvYWQsIG9uRW5hYmxlLCBzdGFydCwgdXBkYXRlIOWSjCBsYXRlVXBkYXRlIOacieaViO+8jOWvuSBvbkRpc2FibGUg5ZKMIG9uRGVzdHJveSDml6DmlYjjgIJcclxuQGV4ZWN1dGlvbk9yZGVyKC01MDAwKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8v5qih5p2/57G75Z6LXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKFRlbXBsYXRlVHlwZSksIHRvb2x0aXA6IENDX0RFViAmJiAn5qih5p2/57G75Z6LJywgfSlcclxuICAgIHByaXZhdGUgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUgPSBUZW1wbGF0ZVR5cGUuTk9ERTtcclxuICAgIC8v5qih5p2/SXRlbe+8iE5vZGXvvIlcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aooeadv0l0ZW0nLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PSBUZW1wbGF0ZVR5cGUuTk9ERSB9XHJcbiAgICB9KVxyXG4gICAgdG1wTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+aooeadv0l0ZW3vvIhQcmVmYWLvvIlcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5qih5p2/SXRlbScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudGVtcGxhdGVUeXBlID09IFRlbXBsYXRlVHlwZS5QUkVGQUIgfVxyXG4gICAgfSlcclxuICAgIHRtcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIC8v5ruR5Yqo5qih5byPXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHJpdmF0ZSBfc2xpZGVNb2RlOiBTbGlkZVR5cGUgPSBTbGlkZVR5cGUuTk9STUFMO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5FbnVtKFNsaWRlVHlwZSksXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmu5HliqjmqKHlvI8nXHJcbiAgICB9KVxyXG4gICAgc2V0IHNsaWRlTW9kZWwodmFsOiBTbGlkZVR5cGUpIHtcclxuICAgICAgICB0aGlzLl9zbGlkZU1vZGUgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgc2xpZGVNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2xpZGVNb2RlO1xyXG4gICAgfVxyXG4gICAgLy/nv7vpobXkvZznlKjot53nprtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAxLCAuMV0sXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfnv7vpobXkvZznlKjot53nprsnLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLl9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBwYWdlRGlzdGFuY2U6IG51bWJlciA9IC4zO1xyXG4gICAgLy/pobXpnaLmlLnlj5jkuovku7ZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mhtemdouaUueWPmOS6i+S7ticsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSB9XHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSBwYWdlQ2hhbmdlRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgLy/mmK/lkKbkuLromZrmi5/liJfooajvvIjliqjmgIHliJfooajvvIlcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwcml2YXRlIF92aXJ0dWFsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQm9vbGVhbixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aYr+WQpuS4uuiZmuaLn+WIl+ihqO+8iOWKqOaAgeWIl+ihqO+8iSdcclxuICAgIH0pXHJcbiAgICBzZXQgdmlydHVhbCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsICE9IG51bGwpXHJcbiAgICAgICAgdGhpcy5fdmlydHVhbCA9IHZhbDtcclxuICAgICAgICBpZiAoIUNDX0RFViAmJiB0aGlzLl9udW1JdGVtcyAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uU2Nyb2xsaW5nKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB2aXJ0dWFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsO1xyXG4gICAgfVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ0l0ZW3mlbDph4/ov4flsJHml7bmmK/lkKblsYXkuK3miYDmnIlJdGVt77yI5LiN5pSv5oyBR3JpZOW4g+WxgO+8iScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudmlydHVhbCB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIGxhY2tDZW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v5Yi35paw6aKR546HXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyIH0pXHJcbiAgICBwcml2YXRlIF91cGRhdGVSYXRlOiBudW1iZXIgPSAyO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxyXG4gICAgICAgIHJhbmdlOiBbMCwgNiwgMV0sXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfliLfmlrDpopHnjofvvIjlgLzotorlpKfliLfmlrDpopHnjofotorkvY7jgIHmgKfog73otorpq5jvvIknLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHNldCB1cGRhdGVSYXRlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbCA+PSAwICYmIHZhbCA8PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJhdGUgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHVwZGF0ZVJhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVJhdGU7XHJcbiAgICB9XHJcbiAgICAvL+WIhuW4p+a4suafk++8iOavj+W4p+a4suafk+eahEl0ZW3mlbDph4/vvIg8PTDml7blhbPpl63liIbluKfmuLLmn5PvvInvvIlcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcclxuICAgICAgICByYW5nZTogWzAsIDEyLCAxXSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mAkOW4p+a4suafk+aXtu+8jOavj+W4p+a4suafk+eahEl0ZW3mlbDph4/vvIg8PTDml7blhbPpl63liIbluKfmuLLmn5PvvIknLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBmcmFtZUJ5RnJhbWVSZW5kZXJOdW06IG51bWJlciA9IDA7XHJcbiAgICAvL+a4suafk+S6i+S7tu+8iOa4suafk+WZqO+8iVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5riy5p+T5LqL5Lu277yI5riy5p+T5Zmo77yJJyxcclxuICAgIH0pXHJcbiAgICBwcml2YXRlIHJlbmRlckV2ZW50OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgIC8v6YCJ5oup5qih5byPXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkVudW0oU2VsZWN0ZWRUeXBlKSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mAieaLqeaooeW8jydcclxuICAgIH0pXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRNb2RlOiBTZWxlY3RlZFR5cGUgPSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgIC8v6Kem5Y+R6YCJ5oup5LqL5Lu2XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfop6blj5HpgInmi6nkuovku7YnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FIH1cclxuICAgIH0pXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBudWxsLy9uZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgLy/lvZPliY3pgInmi6lpZFxyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJZDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9sYXN0U2VsZWN0ZWRJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBtdWx0U2VsZWN0ZWQ6IG51bWJlcltdO1xyXG4gICAgc2V0IHNlbGVjdGVkSWQodmFsOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNJTkdMRSAmJiB2YWwgPT0gdC5fc2VsZWN0ZWRJZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueTtcclxuICAgICAgICBzd2l0Y2ggKHQuc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlNJTkdMRToge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PSB0Ll9zZWxlY3RlZElkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtICYmIHZhbCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbTogTGlzdEl0ZW07XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fc2VsZWN0ZWRJZCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX2xhc3RTZWxlY3RlZElkID0gdC5fc2VsZWN0ZWRJZDtcclxuICAgICAgICAgICAgICAgIGVsc2UgLy/lpoLmnpzvvJww5YiZ5Y+W5raI6YCJ5oup77yM5oqKX2xhc3RTZWxlY3RlZElk5Lmf572u56m65ZCn77yM5aaC5p6c5Lul5ZCO5pyJ54m55q6K6ZyA5rGC5YaN5pS55ZCn44CCXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fbGFzdFNlbGVjdGVkSWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IHZhbDtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHQuX2xhc3RTZWxlY3RlZElkID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEl0ZW06IGFueSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHQuX2xhc3RTZWxlY3RlZElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0LnNlbGVjdGVkRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3Quc2VsZWN0ZWRFdmVudF0sIGl0ZW0sIHZhbCwgdC5fbGFzdFNlbGVjdGVkSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX3NlbGVjdGVkSWQgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IHQuX3NlbGVjdGVkSWQ7XHJcbiAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2w6IGJvb2xlYW4gPSAhbGlzdEl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IGJvb2w7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViOiBudW1iZXIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9vbCAmJiBzdWIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghYm9vbCAmJiBzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnNwbGljZShzdWIsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5zZWxlY3RlZEV2ZW50XSwgaXRlbSwgdmFsLCB0Ll9sYXN0U2VsZWN0ZWRJZCwgYm9vbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBzZWxlY3RlZElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZElkO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZm9yY2VVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2FsaWduOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9ob3Jpem9udGFsRGlyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF92ZXJ0aWNhbERpcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRBeGlzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbGlnbkNhbGNUeXBlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29udGVudDogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgZmlyc3RMaXN0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhY3R1YWxOdW1JdGVtczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlRG9uZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF91cGRhdGVDb3VudGVyO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBzZXJpYWxpemFibGU6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSBfbnVtSXRlbXM6IG51bWJlciA9IDA7XHJcbiAgICBzZXQgbnVtSXRlbXModmFsOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKGZhbHNlKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPCAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKCdudW1JdGVtcyBzZXQgdGhlIHdyb25nOjonLCB2YWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX251bUl0ZW1zID0gdmFsO1xyXG4gICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHQuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgdC5fcmVzaXplQ29udGVudCgpO1xyXG4gICAgICAgICAgICB0Ll9vblNjcm9sbGluZyhudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbGF5b3V0OiBjYy5MYXlvdXQgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgICAgIGlmIChsYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgIGxheW91dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0Ll9kZWxSZWR1bmRhbnRJdGVtKCk7XHJcblxyXG4gICAgICAgICAgICB0LmZpcnN0TGlzdElkID0gMDtcclxuICAgICAgICAgICAgaWYgKHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/lhYjmuLLmn5Plh6DkuKrlh7rmnaVcclxuICAgICAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gdC5fbnVtSXRlbXMgPyB0Ll9udW1JdGVtcyA6IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMDsgbiA8IGxlbjsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtMihuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0LmZyYW1lQnlGcmFtZVJlbmRlck51bSA8IHQuX251bUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fdXBkYXRlQ291bnRlciA9IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX3VwZGF0ZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IDA7IG4gPCB2YWw7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0LmFjdHVhbE51bUl0ZW1zID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IG51bUl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9udW1JdGVtcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2luaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldztcclxuICAgIGdldCBzY3JvbGxWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxWaWV3O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfbGF5b3V0OiBjYy5MYXlvdXQ7XHJcbiAgICBwcml2YXRlIF9yZXNpemVNb2RlOiBjYy5MYXlvdXQuUmVzaXplTW9kZTtcclxuICAgIHByaXZhdGUgX3RvcEdhcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRHYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2JvdHRvbUdhcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGVmdEdhcDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbHVtbkdhcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGluZUdhcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY29sTGluZU51bTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2xhc3REaXNwbGF5RGF0YTogbnVtYmVyW107XHJcbiAgICBwdWJsaWMgZGlzcGxheURhdGE6IGFueVtdO1xyXG4gICAgcHJpdmF0ZSBfcG9vbDogY2MuTm9kZVBvb2w7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXRlbVRtcDogYW55O1xyXG4gICAgcHJpdmF0ZSBfaXRlbVNpemU6IGNjLlNpemU7XHJcbiAgICBwcml2YXRlIF9zaXplVHlwZTogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY3VzdG9tU2l6ZTogYW55O1xyXG5cclxuICAgIHByaXZhdGUgZnJhbWVDb3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYW5pRGVsUnVuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHZpZXdUb3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdmlld1JpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHZpZXdCb3R0b206IG51bWJlcjtcclxuICAgIHByaXZhdGUgdmlld0xlZnQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9kb25lQWZ0ZXJVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGVsYXN0aWNUb3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZWxhc3RpY1JpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGVsYXN0aWNCb3R0b206IG51bWJlcjtcclxuICAgIHByaXZhdGUgZWxhc3RpY0xlZnQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHNjcm9sbFRvTGlzdElkOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBhZGhlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2FkaGVyaW5nQmFycmllcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBuZWFyZXN0TGlzdElkOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGN1clBhZ2VOdW06IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9iZWdhblBvczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsUG9zOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFja1NpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FsbEl0ZW1TaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbGxJdGVtU2l6ZU5vQm9yZGVyOiBudW1iZXI7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8v5rOo5YaM5LqL5Lu2XHJcbiAgICBfcmVnaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Lm5vZGUub24oJ3RvdWNoLXVwJywgdC5fb25TY3JvbGxUb3VjaFVwLCB0KTtcclxuICAgICAgICB0Lm5vZGUub24oJ3Njcm9sbC1iZWdhbicsIHQuX29uU2Nyb2xsQmVnYW4sIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbignc2Nyb2xsLWVuZGVkJywgdC5fb25TY3JvbGxFbmRlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGxpbmcnLCB0Ll9vblNjcm9sbGluZywgdCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICAvL+WNuOi9veS6i+S7tlxyXG4gICAgX3VucmVnaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Lm5vZGUub2ZmKCd0b3VjaC11cCcsIHQuX29uU2Nyb2xsVG91Y2hVcCwgdCk7XHJcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsLWJlZ2FuJywgdC5fb25TY3JvbGxCZWdhbiwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsLWVuZGVkJywgdC5fb25TY3JvbGxFbmRlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsaW5nJywgdC5fb25TY3JvbGxpbmcsIHQsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgLy/liJ3lp4vljJblkITnp40uLlxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGlmICghQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAodC5faW5pdGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHQuX3Njcm9sbFZpZXcgPSB0Lm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xyXG4gICAgICAgIGlmICghdC5fc2Nyb2xsVmlldykge1xyXG4gICAgICAgICAgICBjYy5lcnJvcih0Lm5vZGUubmFtZSArICcgbm8gYXNzZW1ibHkgY2MuU2Nyb2xsVmlldyEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0LmNvbnRlbnQgPSB0Ll9zY3JvbGxWaWV3LmNvbnRlbnQ7XHJcbiAgICAgICAgaWYgKCF0LmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IodC5ub2RlLm5hbWUgKyBcIidzIGNjLlNjcm9sbFZpZXcgdW5zZXQgY29udGVudCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHQuX2xheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuXHJcbiAgICAgICAgdC5fYWxpZ24gPSB0Ll9sYXlvdXQudHlwZTsgLy/mjpLliJfmqKHlvI9cclxuICAgICAgICB0Ll9yZXNpemVNb2RlID0gdC5fbGF5b3V0LnJlc2l6ZU1vZGU7IC8v6Ieq6YCC5bqU5qih5byPXHJcbiAgICAgICAgdC5fc3RhcnRBeGlzID0gdC5fbGF5b3V0LnN0YXJ0QXhpcztcclxuXHJcbiAgICAgICAgdC5fdG9wR2FwID0gdC5fbGF5b3V0LnBhZGRpbmdUb3A7IC8v6aG26L656LedXHJcbiAgICAgICAgdC5fcmlnaHRHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ1JpZ2h0OyAvL+WPs+i+uei3nVxyXG4gICAgICAgIHQuX2JvdHRvbUdhcCA9IHQuX2xheW91dC5wYWRkaW5nQm90dG9tOyAvL+W6lei+uei3nVxyXG4gICAgICAgIHQuX2xlZnRHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ0xlZnQ7IC8v5bem6L656LedXHJcblxyXG4gICAgICAgIHQuX2NvbHVtbkdhcCA9IHQuX2xheW91dC5zcGFjaW5nWDsgLy/liJfot51cclxuICAgICAgICB0Ll9saW5lR2FwID0gdC5fbGF5b3V0LnNwYWNpbmdZOyAvL+ihjOi3nVxyXG5cclxuICAgICAgICB0Ll9jb2xMaW5lTnVtOyAvL+WIl+aVsOaIluihjOaVsO+8iOmdnkdSSUTmqKHlvI/liJk9Me+8jOihqOekuuWNleWIl+aIluWNleihjO+8iTtcclxuXHJcbiAgICAgICAgdC5fdmVydGljYWxEaXIgPSB0Ll9sYXlvdXQudmVydGljYWxEaXJlY3Rpb247IC8v5Z6C55u05o6S5YiX5a2Q6IqC54K555qE5pa55ZCRXHJcbiAgICAgICAgdC5faG9yaXpvbnRhbERpciA9IHQuX2xheW91dC5ob3Jpem9udGFsRGlyZWN0aW9uOyAvL+awtOW5s+aOkuWIl+WtkOiKgueCueeahOaWueWQkVxyXG5cclxuICAgICAgICB0LnNldFRlbXBsYXRlSXRlbSh0LnRlbXBsYXRlVHlwZSA9PSBUZW1wbGF0ZVR5cGUuUFJFRkFCID8gdC50bXBQcmVmYWIuZGF0YSA6IHQudG1wTm9kZSk7XHJcblxyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HIHx8IHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkgLy/nibnlrprnmoTmu5HliqjmqKHlvI/pnIDopoHlhbPpl63mg6/mgKdcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5pbmVydGlhID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0LnZpcnR1YWwpICAgICAgICAgLy8gbGFja0NlbnRlciDku4XmlK/mjIEgVmlydHVhbCDmqKHlvI9cclxuICAgICAgICAgICAgdC5sYWNrQ2VudGVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHQuX2xhc3REaXNwbGF5RGF0YSA9IFtdOyAvL+acgOWQjuS4gOasoeWIt+aWsOeahOaVsOaNrlxyXG4gICAgICAgIHQuZGlzcGxheURhdGEgPSBbXTsgLy/lvZPliY3mlbDmja5cclxuICAgICAgICB0Ll9wb29sID0gbmV3IGNjLk5vZGVQb29sKCk7IC8v6L+Z5piv5Liq5rGg5a2QLi5cclxuICAgICAgICB0Ll9mb3JjZVVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHQuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHQuX3VwZGF0ZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdC5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdC5faW5pdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l5piv5ZCm5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByaW50TG9nIOaYr+WQpuaJk+WNsOmUmeivr+S/oeaBr1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgIGNoZWNrSW5pdGVkKHByaW50TG9nOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHBMOiBib29sZWFuID0gcHJpbnRMb2cgPyBwcmludExvZyA6IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHBMKVxyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoJ0xpc3QgaW5pdGlhbGl6YXRpb24gbm90IGNvbXBsZXRlZCEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8v6K6+572u5qih5p2/SXRlbVxyXG4gICAgc2V0VGVtcGxhdGVJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIHQuX2l0ZW1UbXAgPSBpdGVtO1xyXG4gICAgICAgIGlmICh0Ll9yZXNpemVNb2RlID09IGNjLkxheW91dC5SZXNpemVNb2RlLkNISUxEUkVOKVxyXG4gICAgICAgICAgICB0Ll9pdGVtU2l6ZSA9IHQuX2xheW91dC5jZWxsU2l6ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHQuX2l0ZW1TaXplID0gY2Muc2l6ZSh0Ll9pdGVtVG1wLndpZHRoLCB0Ll9pdGVtVG1wLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmICh0LnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuTVVMVClcclxuICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gMTtcclxuICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+WIl+aVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpbVc6IG51bWJlciA9IHQuY29udGVudC53aWR0aCAtIHQuX2xlZnRHYXAgLSB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fY29sTGluZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJpbVcgLSAoKHQuX2NvbExpbmVOdW0gKiB0Ll9pdGVtU2l6ZS53aWR0aCkgKyAoKHQuX2NvbExpbmVOdW0gLSAxKSAqIHQuX2NvbHVtbkdhcCkpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fY29sTGluZU51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfooYzmlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyaW1IOiBudW1iZXIgPSB0LmNvbnRlbnQuaGVpZ2h0IC0gdC5fdG9wR2FwIC0gdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmltSCAtICgodC5fY29sTGluZU51bSAqIHQuX2l0ZW1TaXplLmhlaWdodCkgKyAoKHQuX2NvbExpbmVOdW0gLSAxKSAqIHQuX2xpbmVHYXApKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9zaXplVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy/npoHnlKggTGF5b3V0IOe7hOS7tu+8jOiHquihjOiuoeeulyBDb250ZW50IFNpemVcclxuICAgIF9yZXNpemVDb250ZW50KCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGxldCByZXN1bHQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0LmN1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHQuX2dldEZpeGVkU2l6ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll9sZWZ0R2FwICsgZml4ZWQudmFsICsgKHQuX2l0ZW1TaXplLndpZHRoICogKHQuX251bUl0ZW1zIC0gZml4ZWQuY291bnQpKSArICh0Ll9jb2x1bW5HYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqIHQuX251bUl0ZW1zKSArICh0Ll9jb2x1bW5HYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0LmN1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHQuX2dldEZpeGVkU2l6ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyBmaXhlZC52YWwgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogKHQuX251bUl0ZW1zIC0gZml4ZWQuY291bnQpKSArICh0Ll9saW5lR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogdC5fbnVtSXRlbXMpICsgKHQuX2xpbmVHYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6IHtcclxuICAgICAgICAgICAgICAgIC8v572R5qC85qih5byP5LiN5pSv5oyB5bGF5LitXHJcbiAgICAgICAgICAgICAgICBpZiAodC5sYWNrQ2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHQubGFja0NlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lTnVtOiBudW1iZXIgPSBNYXRoLmNlaWwodC5fbnVtSXRlbXMgLyB0Ll9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fdG9wR2FwICsgKHQuX2l0ZW1TaXplLmhlaWdodCAqIGxpbmVOdW0pICsgKHQuX2xpbmVHYXAgKiAobGluZU51bSAtIDEpKSArIHQuX2JvdHRvbUdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbE51bTogbnVtYmVyID0gTWF0aC5jZWlsKHQuX251bUl0ZW1zIC8gdC5fY29sTGluZU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX2xlZnRHYXAgKyAodC5faXRlbVNpemUud2lkdGggKiBjb2xOdW0pICsgKHQuX2NvbHVtbkdhcCAqIChjb2xOdW0gLSAxKSkgKyB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxheW91dDogY2MuTGF5b3V0ID0gdC5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGlmIChsYXlvdXQpXHJcbiAgICAgICAgICAgIGxheW91dC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdC5fYWxsSXRlbVNpemUgPSByZXN1bHQ7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRXSDogbnVtYmVyO1xyXG4gICAgICAgIGlmICh0Ll9zaXplVHlwZSkge1xyXG4gICAgICAgICAgICAvLy0wLjHmmK/kuLrkuobpgb/lhY1jb250ZW5055qEc2l6ZeS4jeS8mui2heWHum5vZGUuc2l6ZSAwLjAwMDAwMDAx6L+Z56eN5oOF5Ya1XHJcbiAgICAgICAgICAgIHRhcmdldFdIID0gcmVzdWx0IDwgdC5ub2RlLmhlaWdodCA/ICh0Lm5vZGUuaGVpZ2h0IC0gLjEpIDogcmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0V0ggPCAwKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0V0ggPSAwO1xyXG4gICAgICAgICAgICB0Ll9sYWNrU2l6ZSA9IHQubGFja0NlbnRlciA/IHRhcmdldFdIIDogbnVsbDtcclxuICAgICAgICAgICAgdC5fYWxsSXRlbVNpemVOb0JvcmRlciA9IHQuX2FsbEl0ZW1TaXplIC0gdC5fdG9wR2FwIC0gdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICB0LmNvbnRlbnQuaGVpZ2h0ID0gdGFyZ2V0V0g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8tMC4x5piv5Li65LqG6YG/5YWNY29udGVudOeahHNpemXkuI3kvJrotoXlh7pub2RlLnNpemUgMC4wMDAwMDAwMei/meenjeaDheWGtVxyXG4gICAgICAgICAgICB0YXJnZXRXSCA9IHJlc3VsdCA8IHQubm9kZS53aWR0aCA/ICh0Lm5vZGUud2lkdGggLSAuMSkgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRXSCA8IDApXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRXSCA9IDA7XHJcbiAgICAgICAgICAgIHQuX2xhY2tTaXplID0gdC5sYWNrQ2VudGVyID8gdGFyZ2V0V0ggOiBudWxsO1xyXG4gICAgICAgICAgICB0Ll9hbGxJdGVtU2l6ZU5vQm9yZGVyID0gdC5fYWxsSXRlbVNpemUgLSB0Ll9sZWZ0R2FwIC0gdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgIHQuY29udGVudC53aWR0aCA9IHRhcmdldFdIO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2MubG9nKCdfcmVzaXplQ29udGVudCgpICBudW1JdGVtcyA9JywgdGhpcy5fbnVtSXRlbXMsICfvvIxjb250ZW50ID0nLCB0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rua5Yqo6L+b6KGM5pe2Li4uXHJcbiAgICBfb25TY3JvbGxpbmcoZXY6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudCA9PSBudWxsKVxyXG4gICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuX3VwZGF0ZVJhdGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9mb3JjZVVwZGF0ZSAmJiAoZXYgJiYgZXYudHlwZSAhPSAnc2Nyb2xsLWVuZGVkJykgJiYgdGhpcy5mcmFtZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQtLTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYW5pRGVsUnVuaW5nKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2NhbGNWaWV3UG9zKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Qb3M6IGFueTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJJZDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgbGV0IGVuZElkOiBudW1iZXIgPSB0aGlzLl9udW1JdGVtcyAtIDE7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnJlYWtGb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c6K+laXRlbeeahOS9jee9ruWcqOWPr+inhuWMuuWfn+WGhe+8jOWwseaOqOWFpWRpc3BsYXlEYXRhXHJcbiAgICAgICAgICAgICAgICBmb3IgKDsgY3VySWQgPD0gZW5kSWQgJiYgIWJyZWFrRm9yOyBjdXJJZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBvcyA9IHRoaXMuX2NhbGNJdGVtUG9zKGN1cklkKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLnJpZ2h0ID49IHRoaXMudmlld0xlZnQgJiYgaXRlbVBvcy5sZWZ0IDw9IHRoaXMudmlld1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MuYm90dG9tIDw9IHRoaXMudmlld1RvcCAmJiBpdGVtUG9zLnRvcCA+PSB0aGlzLnZpZXdCb3R0b20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2goaXRlbVBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5ib3R0b20gPD0gdGhpcy52aWV3VG9wICYmIGl0ZW1Qb3MudG9wID49IHRoaXMudmlld0JvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MucmlnaHQgPj0gdGhpcy52aWV3TGVmdCAmJiBpdGVtUG9zLmxlZnQgPD0gdGhpcy52aWV3UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHd3OiBudW1iZXIgPSB0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcDtcclxuICAgICAgICAgICAgICAgIGxldCBoaDogbnVtYmVyID0gdGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcDtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKHRoaXMudmlld0xlZnQgKyB0aGlzLl9sZWZ0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICh0aGlzLnZpZXdSaWdodCArIHRoaXMuX3JpZ2h0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICgtdGhpcy52aWV3UmlnaHQgLSB0aGlzLl9yaWdodEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAoLXRoaXMudmlld0xlZnQgLSB0aGlzLl9sZWZ0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICgtdGhpcy52aWV3VG9wIC0gdGhpcy5fdG9wR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICgtdGhpcy52aWV3Qm90dG9tIC0gdGhpcy5fYm90dG9tR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICh0aGlzLnZpZXdCb3R0b20gKyB0aGlzLl9ib3R0b21HYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKHRoaXMudmlld1RvcCArIHRoaXMuX3RvcEdhcCkgLyBoaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJJZCA9IE1hdGguZmxvb3IoY3VySWQpICogdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgIGVuZElkID0gTWF0aC5jZWlsKGVuZElkKSAqIHRoaXMuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICBlbmRJZC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cklkIDwgMClcclxuICAgICAgICAgICAgICAgICAgICBjdXJJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kSWQgPj0gdGhpcy5fbnVtSXRlbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSB0aGlzLl9udW1JdGVtcyAtIDE7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coY3VySWQsIGVuZElkKTtcclxuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJJZCA8PSBlbmRJZDsgY3VySWQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaCh0aGlzLl9jYWxjSXRlbVBvcyhjdXJJZCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA8PSAwIHx8ICF0aGlzLl9udW1JdGVtcykgeyAvL2lmIG5vbmUsIGRlbGV0ZSBhbGwuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maXJzdExpc3RJZCA9IHRoaXMuZGlzcGxheURhdGFbMF0uaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsTnVtSXRlbXMgPSB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5fbGFzdERpc3BsYXlEYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgLy/liKTmlq3mlbDmja7mmK/lkKbkuI7lvZPliY3nm7jlkIzvvIzlpoLmnpznm7jlkIzvvIxyZXR1cm7jgIJcclxuICAgICAgICAgICAgLy/lm6BMaXN055qE5pi+56S65pWw5o2u5piv5pyJ5bqP55qE77yM5omA5Lul5Y+q6ZyA6KaB5Yik5pat5pWw57uE6ZW/5bqm5piv5ZCm55u4562J77yM5Lul5Y+K5aS044CB5bC+5Lik5Liq5YWD57Sg5piv5ZCm55u4562J5Y2z5Y+v44CCXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxOdW1JdGVtcyAhPSBsZW4gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RMaXN0SWQgIT0gdGhpcy5fbGFzdERpc3BsYXlEYXRhWzBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhW3RoaXMuYWN0dWFsTnVtSXRlbXMgLSAxXS5pZCAhPSB0aGlzLl9sYXN0RGlzcGxheURhdGFbbGVuIC0gMV1cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHsgLy/pgJDluKfmuLLmn5NcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbnVtSXRlbXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdXBkYXRlRG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9uZUFmdGVyVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKCdMaXN0IERpc3BsYXkgRGF0YSBJOjonLCB0aGlzLmRpc3BsYXlEYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v55u05o6l5riy5p+TXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKCdMaXN0IERpc3BsYXkgRGF0YSBJSTo6JywgdGhpcy5kaXNwbGF5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYzogbnVtYmVyID0gMDsgYyA8IHRoaXMuYWN0dWFsTnVtSXRlbXM7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0odGhpcy5kaXNwbGF5RGF0YVtjXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JjZVVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6h566X5L2N572uIOagueaNrmlkXHJcbiAgICBfY2FsY0l0ZW1Qb3MoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGl0ZW1YOiBudW1iZXIsIGl0ZW1ZOiBudW1iZXI7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgKyAoZml4ZWQudmFsICsgKHRoaXMuX2NvbHVtbkdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3M6IG51bWJlciA9IHRoaXMuY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0aGlzLl9sZWZ0R2FwICsgKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyICYmIHRoaXMuX2xhY2tTaXplID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vQm9yZGVyIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faXRlbVRtcC55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSAtdGhpcy5fcmlnaHRHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgLSAoZml4ZWQudmFsICsgKHRoaXMuX2NvbHVtbkdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3M6IG51bWJlciA9IHRoaXMuY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodCAtIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyICYmIHRoaXMuX2xhY2tTaXplID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vQm9yZGVyIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0IC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faXRlbVRtcC55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHRoaXMuX2dldEZpeGVkU2l6ZShpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgLSAoZml4ZWQudmFsICsgKHRoaXMuX2xpbmVHYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzOiBudW1iZXIgPSB0aGlzLmN1c3RvbVNpemVbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCAtIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlciAmJiB0aGlzLl9sYWNrU2l6ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAodGhpcy5jb250ZW50LmhlaWdodCAvIDIpIC0gKHRoaXMuX2FsbEl0ZW1TaXplTm9Cb3JkZXIgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5faXRlbVRtcC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogYm90dG9tICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIGhlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgKyAoZml4ZWQudmFsICsgKHRoaXMuX2xpbmVHYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzOiBudW1iZXIgPSB0aGlzLmN1c3RvbVNpemVbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuX2JvdHRvbUdhcCArICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gYm90dG9tICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyICYmIHRoaXMuX2xhY2tTaXplID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQuaGVpZ2h0IC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0JvcmRlciAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9pdGVtVG1wLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDoge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbExpbmU6IG51bWJlciA9IE1hdGguZmxvb3IoaWQgLyB0aGlzLl9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCAtIHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSA9IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuX2JvdHRvbUdhcCArICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBib3R0b20gKyB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IHRoaXMuX2xlZnRHYXAgKyAoKGlkICUgdGhpcy5fY29sTGluZU51bSkgKiAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICh0aGlzLmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAoKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclgpICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBpdGVtWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YID0gbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggLT0gKHRoaXMuY29udGVudC5hbmNob3JYICogdGhpcy5jb250ZW50LndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQgLSB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSAtdGhpcy5fdG9wR2FwIC0gKChpZCAlIHRoaXMuX2NvbExpbmVOdW0pICogKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZIC09ICgoMSAtIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JZKSAqIHRoaXMuY29udGVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZIC09ICgodGhpcy5faXRlbVRtcC5hbmNob3JZKSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKz0gKHRoaXMuY29udGVudC5hbmNob3JZICogdGhpcy5jb250ZW50LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBpdGVtWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgIC8v6K6h566X5Y+v6KeG6IyD5Zu0XHJcbiAgICAgX2NhbGNWaWV3UG9zKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxQb3M6IGFueSA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHNjcm9sbFBvcy54ID4gMCA/IHNjcm9sbFBvcy54IDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSAoc2Nyb2xsUG9zLnggPCAwID8gLXNjcm9sbFBvcy54IDogMCkgLSB0aGlzLmVsYXN0aWNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgPSB0aGlzLnZpZXdMZWZ0ICsgdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSB0aGlzLnZpZXdSaWdodCA+IHRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld1JpZ2h0IC0gdGhpcy5jb250ZW50LndpZHRoKSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCArPSB0aGlzLmVsYXN0aWNSaWdodDtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNMZWZ0LCB0aGlzLmVsYXN0aWNSaWdodCwgdGhpcy52aWV3TGVmdCwgdGhpcy52aWV3UmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNSaWdodCA9IHNjcm9sbFBvcy54IDwgMCA/IC1zY3JvbGxQb3MueCA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9IChzY3JvbGxQb3MueCA+IDAgPyAtc2Nyb2xsUG9zLnggOiAwKSArIHRoaXMuZWxhc3RpY1JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCA9IHRoaXMudmlld1JpZ2h0IC0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHRoaXMudmlld0xlZnQgPCAtdGhpcy5jb250ZW50LndpZHRoID8gTWF0aC5hYnModGhpcy52aWV3TGVmdCArIHRoaXMuY29udGVudC53aWR0aCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCAtPSB0aGlzLmVsYXN0aWNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY0xlZnQsIHRoaXMuZWxhc3RpY1JpZ2h0LCB0aGlzLnZpZXdMZWZ0LCB0aGlzLnZpZXdSaWdodCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1RvcCA9IHNjcm9sbFBvcy55IDwgMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgPSAoc2Nyb2xsUG9zLnkgPiAwID8gLXNjcm9sbFBvcy55IDogMCkgKyB0aGlzLmVsYXN0aWNUb3A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSB0aGlzLnZpZXdUb3AgLSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljQm90dG9tID0gdGhpcy52aWV3Qm90dG9tIDwgLXRoaXMuY29udGVudC5oZWlnaHQgPyBNYXRoLmFicyh0aGlzLnZpZXdCb3R0b20gKyB0aGlzLmNvbnRlbnQuaGVpZ2h0KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gKz0gdGhpcy5lbGFzdGljQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY1RvcCwgdGhpcy5lbGFzdGljQm90dG9tLCB0aGlzLnZpZXdUb3AsIHRoaXMudmlld0JvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHNjcm9sbFBvcy55ID4gMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSAoc2Nyb2xsUG9zLnkgPCAwID8gLXNjcm9sbFBvcy55IDogMCkgLSB0aGlzLmVsYXN0aWNCb3R0b207XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgPSB0aGlzLnZpZXdCb3R0b20gKyB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljVG9wID0gdGhpcy52aWV3VG9wID4gdGhpcy5jb250ZW50LmhlaWdodCA/IE1hdGguYWJzKHRoaXMudmlld1RvcCAtIHRoaXMuY29udGVudC5oZWlnaHQpIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCAtPSB0aGlzLmVsYXN0aWNUb3A7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5lbGFzdGljVG9wLCB0aGlzLmVsYXN0aWNCb3R0b20sIHRoaXMudmlld1RvcCwgdGhpcy52aWV3Qm90dG9tKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6I635Y+W5Zu65a6a5bC65a+4XHJcbiAgICBfZ2V0Rml4ZWRTaXplKGxpc3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN1c3RvbVNpemUpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChsaXN0SWQgPT0gbnVsbClcclxuICAgICAgICAgICAgbGlzdElkID0gdGhpcy5fbnVtSXRlbXM7XHJcbiAgICAgICAgbGV0IGZpeGVkOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmN1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlkKSA8IGxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgZml4ZWQgKz0gdGhpcy5jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsOiBmaXhlZCxcclxuICAgICAgICAgICAgY291bnQ6IGNvdW50LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5rua5Yqo57uT5p2f5pe2Li5cclxuICAgIF9vblNjcm9sbEVuZGVkKCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0LnNjcm9sbFRvTGlzdElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHQuc2Nyb2xsVG9MaXN0SWQpO1xyXG4gICAgICAgICAgICB0LnNjcm9sbFRvTGlzdElkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjEsIDEuMDYpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjEsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV3IGNjLmNhbGxGdW5jKGZ1bmN0aW9uIChydW5Ob2RlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9vblNjcm9sbGluZyhudWxsKTtcclxuXHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcgJiZcclxuICAgICAgICAgICAgIXQuYWRoZXJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy9jYy5sb2codC5hZGhlcmluZywgdC5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSwgdC5fc2Nyb2xsVmlldy5pc1Njcm9sbGluZygpKTtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xyXG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFnZUFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5rua5Yqo57uT5p2f5pe2Li5cclxuICAgIF9vblNjcm9sbEJlZ2FuKCkge1xyXG4gICAgICAgIHRoaXMuX2JlZ2FuUG9zID0gdGhpcy5fc2l6ZVR5cGUgPyB0aGlzLnZpZXdUb3AgOiB0aGlzLnZpZXdMZWZ0O1xyXG4gICAgfVxyXG4gICAgLy/op6bmkbjmiqzotbfml7YuLlxyXG4gICAgX29uU2Nyb2xsVG91Y2hVcCgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Ll9zY3JvbGxQb3MgPSBudWxsO1xyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HXHJcbiAgICAgICAgICAgIC8vICF0LmFkaGVyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkaGVyaW5nKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRoZXJpbmdCYXJyaWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XHJcbiAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlQWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/nspjpmYRcclxuICAgIGFkaGVyZSgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAodC5lbGFzdGljVG9wID4gMCB8fCB0LmVsYXN0aWNSaWdodCA+IDAgfHwgdC5lbGFzdGljQm90dG9tID4gMCB8fCB0LmVsYXN0aWNMZWZ0ID4gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHQuYWRoZXJpbmcgPSB0cnVlO1xyXG4gICAgICAgIHQuX2NhbGNOZWFyZXN0SXRlbSgpO1xyXG4gICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0Ll9zaXplVHlwZSA/IHQuX3RvcEdhcCA6IHQuX2xlZnRHYXApIC8gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCk7XHJcbiAgICAgICAgbGV0IHRpbWVJblNlY29uZDogbnVtYmVyID0gLjc7XHJcbiAgICAgICAgdC5zY3JvbGxUbyh0Lm5lYXJlc3RMaXN0SWQsIHRpbWVJblNlY29uZCwgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFnZUFkaGVyZSgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuZWxhc3RpY1RvcCA+IDAgfHwgdC5lbGFzdGljUmlnaHQgPiAwIHx8IHQuZWxhc3RpY0JvdHRvbSA+IDAgfHwgdC5lbGFzdGljTGVmdCA+IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjdXJQb3MgPSB0Ll9zaXplVHlwZSA/IHQudmlld1RvcCA6IHQudmlld0xlZnQ7XHJcbiAgICAgICAgbGV0IGRpcyA9ICh0Ll9zaXplVHlwZSA/IHQubm9kZS5oZWlnaHQgOiB0Lm5vZGUud2lkdGgpICogdC5wYWdlRGlzdGFuY2U7XHJcbiAgICAgICAgbGV0IGNhblNraXAgPSBNYXRoLmFicyh0Ll9iZWdhblBvcyAtIGN1clBvcykgPiBkaXM7XHJcbiAgICAgICAgaWYgKGNhblNraXApIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVJblNlY29uZCA9IC41O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHQuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyA+IGN1clBvcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmVQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5leHRQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPCBjdXJQb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHJlUGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0UGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0LmVsYXN0aWNUb3AgPD0gMCAmJiB0LmVsYXN0aWNSaWdodCA8PSAwICYmIHQuZWxhc3RpY0JvdHRvbSA8PSAwICYmIHQuZWxhc3RpY0xlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9iZWdhblBvcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vVXBkYXRlLi5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmKGR0PjEpZHQ9MTtcclxuICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPD0gMCB8fCB0aGlzLl91cGRhdGVEb25lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuZGlzcGxheURhdGEubGVuZ3RoLCB0aGlzLl91cGRhdGVDb3VudGVyLCB0aGlzLmRpc3BsYXlEYXRhW3RoaXMuX3VwZGF0ZUNvdW50ZXJdKTtcclxuICAgICAgICBpZiAodGhpcy5fdmlydHVhbCkge1xyXG4gICAgICAgICAgICBsZXQgbGVuOiBudW1iZXIgPSAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKSA+IHRoaXMuYWN0dWFsTnVtSXRlbXMgPyB0aGlzLmFjdHVhbE51bUl0ZW1zIDogKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHRoaXMuX3VwZGF0ZUNvdW50ZXI7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGE6IGFueSA9IHRoaXMuZGlzcGxheURhdGFbbl07XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0oZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl91cGRhdGVDb3VudGVyID49IHRoaXMuYWN0dWFsTnVtSXRlbXMgLSAxKSB7IC8v5pyA5ZCO5LiA5LiqXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZG9uZUFmdGVyVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fc2Nyb2xsVmlldy5pc1Njcm9sbGluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb25lQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVsUmVkdW5kYW50SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIgPCB0aGlzLl9udW1JdGVtcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSkgPiB0aGlzLl9udW1JdGVtcyA/IHRoaXMuX251bUl0ZW1zIDogKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLl91cGRhdGVDb3VudGVyOyBuIDwgbGVuOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciArPSB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfdXBkYXRlTGlzdEl0ZW0obGlzdEl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICAgICAgaWYgKCFsaXN0SXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZE1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlNJTkdMRTpcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRJZCA9PSBsaXN0SXRlbS5saXN0SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5NVUxUOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNlbGVjdGVkID0gdGhpcy5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SXRlbS5saXN0SWQpID49IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaIluabtOaWsEl0ZW3vvIjomZrmi5/liJfooajnlKjvvIlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBfY3JlYXRlT3JVcGRhdGVJdGVtKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZChkYXRhLmlkKTtcclxuICAgICAgICBsZXQgbGlzdEl0ZW06IExpc3RJdGVtO1xyXG4gICAgICAgIGlmICghaXRlbSkgeyAvL+WmguaenOS4jeWtmOWcqFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9vbC5zaXplKCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLl9wb29sLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCfku47msaDkuK3lj5blh7o6OiAgIOaXp2lkID0nLCBpdGVtLl9saXN0SWQsICfvvIzmlrBpZCA9JywgZGF0YS5pZCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ+aWsOW7ujo6JywgZGF0YS5pZCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihjYy52MihkYXRhLngsIGRhdGEueSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0U2libGluZ0luZGV4KHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICBsaXN0SXRlbS5saXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICBsaXN0SXRlbS5saXN0ID0gdGhpcztcclxuICAgICAgICAgICAgbGlzdEl0ZW0uX3JlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGRhdGEuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSAmJiB0aGlzLnJlbmRlckV2ZW50KSB7IC8v5by65Yi25pu05pawXHJcbiAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24oY2MudjIoZGF0YS54LCBkYXRhLnkpKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShpdGVtKTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKCdBREQ6OicsIGRhdGEuaWQsIGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShpdGVtKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVMaXN0SXRlbShsaXN0SXRlbSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3REaXNwbGF5RGF0YS5pbmRleE9mKGRhdGEuaWQpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEucHVzaChkYXRhLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIm+W7uuaIluabtOaWsEl0ZW3vvIjpnZ7omZrmi5/liJfooajnlKjvvIlcclxuICAgIF9jcmVhdGVPclVwZGF0ZUl0ZW0yKGxpc3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltsaXN0SWRdO1xyXG4gICAgICAgIGxldCBsaXN0SXRlbTogTGlzdEl0ZW07XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7IC8v5aaC5p6c5LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtVG1wKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICBsaXN0SXRlbS5saXN0ID0gdGhpcztcclxuICAgICAgICAgICAgbGlzdEl0ZW0uX3JlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlICYmIHRoaXMucmVuZGVyRXZlbnQpIHsgLy/lvLrliLbmm7TmlrBcclxuICAgICAgICAgICAgbGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtLmxpc3RJZCA9IGxpc3RJZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0obGlzdEl0ZW0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGEuaW5kZXhPZihsaXN0SWQpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEucHVzaChsaXN0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S7heiZmuaLn+WIl+ihqOeUqFxyXG4gICAgX3Jlc2V0SXRlbVNpemUoaXRlbTogYW55KSB7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtOiBMaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICBpZiAoIXRoaXMuY3VzdG9tU2l6ZSB8fCAhdGhpcy5jdXN0b21TaXplW2xpc3RJdGVtLmxpc3RJZF0pIHtcclxuICAgICAgICAgICAgaXRlbS5zZXRDb250ZW50U2l6ZSh0aGlzLl9pdGVtU2l6ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNpemU6IG51bWJlciA9IHRoaXMuY3VzdG9tU2l6ZVtsaXN0SXRlbS5saXN0SWRdO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbGlnbiA9PSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ud2lkdGggPSBzaXplO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYWxpZ24gPT0gY2MuTGF5b3V0LlR5cGUuVkVSVElDQUwpIHtcclxuICAgICAgICAgICAgaXRlbS5oZWlnaHQgPSBzaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5oyH5a6a55qESXRlbVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyDljZXkuKpsaXN0SWTvvIzmiJbogIXmlbDnu4RcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgICB1cGRhdGVBcHBvaW50ZWQoYXJnczogYW55KSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MgPSBbYXJnc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZW46IG51bWJlciA9IGFyZ3MubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IDA7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICBsZXQgbGlzdElkOiBudW1iZXIgPSBhcmdzW25dO1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5nZXRJdGVtQnlMaXN0SWQobGlzdElkKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5aSa6YCJXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzIOWPr+S7peaYr+WNleS4qmxpc3RJZO+8jOS5n+WPr+aYr+S4qmxpc3RJZOaVsOe7hFxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBib29sIOWAvO+8jOWmguaenOS4um51bGznmoTor53vvIzliJnnm7TmjqXnlKhhcmdz6KaG55uWXHJcbiAgICAgKi9cclxuICAgIHNldE11bHRTZWxlY3RlZChhcmdzOiBhbnksIGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcclxuICAgICAgICAgICAgYXJncyA9IFthcmdzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvb2wgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0Lm11bHRTZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkID0gYXJncztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbGlzdElkOiBudW1iZXIsIHN1YjogbnVtYmVyO1xyXG4gICAgICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gYXJncy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJZCA9IGFyZ3Nbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnB1c2gobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSBhcmdzLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdElkID0gYXJnc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICBzdWIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnNwbGljZShzdWIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9mb3JjZVVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdC5fb25TY3JvbGxpbmcobnVsbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog5qC55o2uTGlzdElE6I635Y+WSXRlbVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpc3RJZFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50LmNoaWxkcmVuW25dLmdldENvbXBvbmVudChMaXN0SXRlbSkubGlzdElkID09IGxpc3RJZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgLy/liKDpmaTmmL7npLrljLrln5/ku6XlpJbnmoRJdGVtXHJcbiAgICBfZGVsUmVkdW5kYW50SXRlbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdmlydHVhbCkge1xyXG4gICAgICAgICAgICBsZXQgYXJyOiBhbnlbXSA9IHRoaXMuX2dldE91dHNpZGVJdGVtKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IGFyci5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9vbC5wdXQoYXJyW25dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy5sb2coJ+WtmOWFpTo6Jywgc3RyLCAnICAgIHBvb2wubGVuZ3RoID0nLCB0aGlzLl9wb29sLmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50ID4gdGhpcy5fbnVtSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbFNpbmdsZUl0ZW0odGhpcy5jb250ZW50LmNoaWxkcmVuW3RoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blnKjmmL7npLrljLrln5/lpJbnmoRJdGVtXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBfZ2V0T3V0c2lkZUl0ZW0oKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueSwgaXNPdXRzaWRlOiBib29sZWFuO1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICBpdGVtID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW25dO1xyXG4gICAgICAgICAgICBpc091dHNpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoaXNPdXRzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjOiBudW1iZXIgPSB0aGlzLmFjdHVhbE51bUl0ZW1zIC0gMTsgYyA+PSAwOyBjLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlzcGxheURhdGFbY10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0SWQ6IG51bWJlciA9IHRoaXMuZGlzcGxheURhdGFbY10uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKS5saXN0SWQgPT0gbGlzdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3V0c2lkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzT3V0c2lkZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgXHJcbiAgICAvKiogXHJcbiAgICAgKiDliqjmlYjliKDpmaRJdGVt77yI5q2k5pa55rOV5Y+q6YCC55So5LqO6Jma5ouf5YiX6KGo77yM5Y2zX3ZpcnR1YWw9dHJ1Ze+8iVxyXG4gICAgICog5LiA5a6a6KaB5Zyo5Zue6LCD5Ye95pWw6YeM6YeN5paw6K6+572u5paw55qEbnVtSXRlbXPov5vooYzliLfmlrDvvIzmr5Xnq5/mnKxMaXN05piv6Z2g5pWw5o2u6amx5Yqo55qE44CCXHJcbiAgICAgKi9cclxuICAgIGFuaURlbEl0ZW0obGlzdElkOiBudW1iZXIsIGNhbGxGdW5jOiBGdW5jdGlvbiwgYW5pVHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHQuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCk7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtOiBMaXN0SXRlbTtcclxuICAgICAgICBpZiAodC5fYW5pRGVsUnVuaW5nIHx8ICF0Ll92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fYW5pRGVsUnVuaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgY3VyTGFzdElkOiBudW1iZXIgPSB0LmRpc3BsYXlEYXRhW3QuZGlzcGxheURhdGEubGVuZ3RoIC0gMV0uaWQ7XHJcbiAgICAgICAgbGV0IHJlc2V0U2VsZWN0ZWRJZDogYm9vbGVhbiA9IGxpc3RJdGVtLnNlbGVjdGVkO1xyXG4gICAgICAgIGxpc3RJdGVtLnNob3dBbmkoYW5pVHlwZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WIpOaWreacieayoeacieS4i+S4gOS4qu+8jOWmguaenOacieeahOivne+8jOWIm+W7uueyl+adpVxyXG4gICAgICAgICAgICBsZXQgbmV3SWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgaWYgKGN1ckxhc3RJZCA8IHQuX251bUl0ZW1zIC0gMikge1xyXG4gICAgICAgICAgICAgICAgbmV3SWQgPSBjdXJMYXN0SWQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YTogYW55ID0gdC5fY2FsY0l0ZW1Qb3MobmV3SWQpO1xyXG4gICAgICAgICAgICAgICAgdC5kaXNwbGF5RGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX3ZpcnR1YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobmV3SWQpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHQuX251bUl0ZW1zLS07XHJcbiAgICAgICAgICAgIGlmICh0LnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU0lOR0xFKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzZXRTZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0Ll9zZWxlY3RlZElkIC0gMSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5NVUxUICYmIHQubXVsdFNlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1YjogbnVtYmVyID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+WkmumAieeahOaVsOaNru+8jOWcqOWFtuWQjueahOWFqOmDqOWHj+S4gFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdC5tdWx0U2VsZWN0ZWQubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQ6IG51bWJlciA9IHQubXVsdFNlbGVjdGVkW25dO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCA+PSBsaXN0SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkW25dLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHQuY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuY3VzdG9tU2l6ZVtsaXN0SWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0LmN1c3RvbVNpemVbbGlzdElkXTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdDdXN0b21TaXplOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgICAgIGxldCBzaXplOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiB0LmN1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaXplID0gdC5jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWROdW1iZXI6IG51bWJlciA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdXN0b21TaXplW2lkTnVtYmVyIC0gKGlkTnVtYmVyID49IGxpc3RJZCA/IDEgOiAwKV0gPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdC5jdXN0b21TaXplID0gbmV3Q3VzdG9tU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WQjumdoueahEl0ZW3lkJHliY3mgLznmoTliqjmlYhcclxuICAgICAgICAgICAgbGV0IHNlYzogbnVtYmVyID0gLjIzMzM7XHJcbiAgICAgICAgICAgIGxldCBhY3RzOiBhbnlbXSwgaGF2ZUNCOiBib29sZWFuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSBuZXdJZCAhPSBudWxsID8gbmV3SWQgOiBjdXJMYXN0SWQ7IG4gPj0gbGlzdElkICsgMTsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQobik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NEYXRhOiBhbnkgPSB0Ll9jYWxjSXRlbVBvcyhuIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKHNlYywgY2MudjIocG9zRGF0YS54LCBwb3NEYXRhLnkpKSxcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDw9IGxpc3RJZCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZUNCID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0cy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEZ1bmMobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0cy5sZW5ndGggPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3RzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1bkFjdGlvbihhY3RzWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWhhdmVDQikge1xyXG4gICAgICAgICAgICAgICAgdC5fYW5pRGVsUnVuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYWxsRnVuYyhsaXN0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICAgLy/liKDpmaTljZXkuKpJdGVtXHJcbiAgICAgX2RlbFNpbmdsZUl0ZW0oaXRlbTogYW55KSB7XHJcbiAgICAgICAgLy8gY2MubG9nKCdERUw6OicsIGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKS5saXN0SWQsIGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIGlmIChpdGVtLmRlc3Ryb3kpXHJcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgIGl0ZW0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmu5rliqjliLAuLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpc3RJZCDntKLlvJXvvIjlpoLmnpw8MO+8jOWImea7muWIsOmmluS4qkl0ZW3kvY3nva7vvIzlpoLmnpw+PV9udW1JdGVtc++8jOWImea7muWIsOacgOacq0l0ZW3kvY3nva7vvIlcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lSW5TZWNvbmQg5pe26Ze0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IOe0ouW8leebruagh+S9jee9ruWBj+enu++8jDAtMVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvdmVyU3RyZXNzIOa7muWKqOWQjuaYr+WQpuW8uuiwg+ivpUl0ZW3vvIjov5nlj6rmmK/kuKrlrp7pqozlip/og73vvIlcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG8obGlzdElkOiBudW1iZXIsIHRpbWVJblNlY29uZDogbnVtYmVyID0gLjUsIG9mZnNldDogbnVtYmVyID0gbnVsbCwgb3ZlclN0cmVzczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZChmYWxzZSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0Ll9zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKCk7XHJcbiAgICAgICAgaWYgKHRpbWVJblNlY29uZCA9PSBudWxsKSAgIC8v6buY6K6kMC41XHJcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IC41O1xyXG4gICAgICAgIGVsc2UgaWYgKHRpbWVJblNlY29uZCA8IDApXHJcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IDA7XHJcbiAgICAgICAgaWYgKGxpc3RJZCA8IDApXHJcbiAgICAgICAgICAgIGxpc3RJZCA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAobGlzdElkID49IHQuX251bUl0ZW1zKVxyXG4gICAgICAgICAgICBsaXN0SWQgPSB0Ll9udW1JdGVtcyAtIDE7XHJcbiAgICAgICAgbGV0IHBvczogYW55ID0gdC5fY2FsY0l0ZW1Qb3MobGlzdElkKTsgLy/ll68uLi7kuI3nrqF2aXJ0dWFsPXRydWXov5jmmK9mYWxzZe+8jOmDveiHquW3seeul++8jOWPjeato+e7k+aenOmDveS4gOagt++8jOaHkuW+l+WOu+mBjeWOhmNvbnRlbnQuY2hpbGRyZW7kuobjgIJcclxuICAgICAgICBsZXQgdGFyZ2V0WDogbnVtYmVyLCB0YXJnZXRZOiBudW1iZXI7XHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gcG9zLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCAtPSB0Lm5vZGUud2lkdGggKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCAtPSB0Ll9sZWZ0R2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIodGFyZ2V0WCwgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgIHRhcmdldFggPSBwb3MucmlnaHQgLSB0Lm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCArPSB0Lm5vZGUud2lkdGggKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCArPSB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIHBvcyA9IGNjLnYyKHRhcmdldFggKyB0LmNvbnRlbnQud2lkdGgsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gcG9zLnRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICs9IHQubm9kZS5oZWlnaHQgKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSArPSB0Ll90b3BHYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52MigwLCAtdGFyZ2V0WSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBwb3MuYm90dG9tICsgdC5ub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZIC09IHQubm9kZS5oZWlnaHQgKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSAtPSB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52MigwLCAtdGFyZ2V0WSArIHQuY29udGVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2aWV3UG9zOiBhbnkgPSB0LmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2aWV3UG9zID0gTWF0aC5hYnModC5fc2l6ZVR5cGUgPyB2aWV3UG9zLnkgOiB2aWV3UG9zLngpO1xyXG5cclxuICAgICAgICBsZXQgY29tcGFyZVBvcyA9IHQuX3NpemVUeXBlID8gcG9zLnkgOiBwb3MueDtcclxuICAgICAgICBsZXQgcnVuU2Nyb2xsID0gTWF0aC5hYnMoKHQuX3Njcm9sbFBvcyAhPSBudWxsID8gdC5fc2Nyb2xsUG9zIDogdmlld1BvcykgLSBjb21wYXJlUG9zKSA+IC41O1xyXG4gICAgICAgIC8vIGNjLmxvZyhydW5TY3JvbGwsIHQuX3Njcm9sbFBvcywgdmlld1BvcywgY29tcGFyZVBvcylcclxuXHJcbiAgICAgICAgdC5fc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgIGlmIChydW5TY3JvbGwpIHtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChwb3MsIHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhsaXN0SWQsIHQuY29udGVudC53aWR0aCwgdC5jb250ZW50LmdldFBvc2l0aW9uKCksIHBvcyk7XHJcbiAgICAgICAgICAgIHQuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdC5fYWRoZXJpbmdCYXJyaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5hZGhlcmluZyA9IHQuX2FkaGVyaW5nQmFycmllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coJzIyMjIyMjIyMjInLCB0Ll9hZGhlcmluZ0JhcnJpZXIpXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlclN0cmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHQuc2Nyb2xsVG9MaXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZChsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMSwgMS4wNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4xLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aW1lSW5TZWNvbmQgKyAuMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGltZUluU2Vjb25kIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHQuX29uU2Nyb2xsaW5nKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/orqHnrpcgQ3VzdG9tU2l6Ze+8iOavlOi+g+WkjeadgueahEl0ZW3nu5PmnoTkuI3lu7rorq7kvb/nlKjmraTmlrnms5XmnaXorqHnrpfvvIlcclxuICAgIGNhbGNDdXN0b21TaXplKG51bUl0ZW1zOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuX2l0ZW1UbXApXHJcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVW5zZXQgdGVtcGxhdGUgaXRlbSEnKTtcclxuICAgICAgICBpZiAoIXQucmVuZGVyRXZlbnQpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVW5zZXQgUmVuZGVyLUV2ZW50IScpO1xyXG4gICAgICAgIHQuY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgIGxldCB0ZW1wOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0Ll9pdGVtVG1wKTtcclxuICAgICAgICB0LmNvbnRlbnQuYWRkQ2hpbGQodGVtcCk7XHJcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMDsgbiA8IG51bUl0ZW1zOyBuKyspIHtcclxuICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnJlbmRlckV2ZW50XSwgdGVtcCwgbik7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wLmhlaWdodCAhPSB0Ll9pdGVtU2l6ZS5oZWlnaHQgfHwgdGVtcC53aWR0aCAhPSB0Ll9pdGVtU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdC5jdXN0b21TaXplW25dID0gdC5fc2l6ZVR5cGUgPyB0ZW1wLmhlaWdodCA6IHRlbXAud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh0LmN1c3RvbVNpemUpLmxlbmd0aClcclxuICAgICAgICAgICAgdC5jdXN0b21TaXplID0gbnVsbDtcclxuICAgICAgICB0ZW1wLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICBpZiAodGVtcC5kZXN0cm95KVxyXG4gICAgICAgICAgICB0ZW1wLmRlc3Ryb3koKTtcclxuICAgICAgICByZXR1cm4gdC5jdXN0b21TaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpflvZPliY3mu5rliqjnqpfmnIDov5HnmoRJdGVtXHJcbiAgICAgKi9cclxuICAgIF9jYWxjTmVhcmVzdEl0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YTogYW55LCBpdGVtOiBhbnksIGNlbnRlcjogbnVtYmVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdmlydHVhbClcclxuICAgICAgICAgICAgdGhpcy5fY2FsY1ZpZXdQb3MoKTtcclxuXHJcbiAgICAgICAgbGV0IGJyZWFrRm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAmJiAhYnJlYWtGb3I7IG4gKz0gdGhpcy5fY29sTGluZU51bSkge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fdmlydHVhbCA/IHRoaXMuZGlzcGxheURhdGFbbl0gOiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKG4pO1xyXG4gICAgICAgICAgICBjZW50ZXIgPSB0aGlzLl9zaXplVHlwZSA/ICgoZGF0YS50b3AgKyBkYXRhLmJvdHRvbSkgLyAyKSA6IChjZW50ZXIgPSAoZGF0YS5sZWZ0ICsgZGF0YS5yaWdodCkgLyAyKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJpZ2h0ID49IHRoaXMudmlld0xlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld0xlZnQgPiBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgKz0gdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVmdCA8PSB0aGlzLnZpZXdSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3UmlnaHQgPCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgKz0gdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYm90dG9tIDw9IHRoaXMudmlld1RvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3VG9wIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkICs9IHRoaXMuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRvcCA+PSB0aGlzLnZpZXdCb3R0b20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld0JvdHRvbSA+IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdExpc3RJZCArPSB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5pyA5ZCO5LiA5LiqSXRlbeOAguOAguOAgu+8iOWTju+8jOi/meS6m+WIpOaWreecn+W/g+aBtuW/g++8jOWIpOaWreS6huWJjemdoueahOi/mOimgeWIpOaWreacgOWQjuS4gOS4quOAguOAguOAguS4gOW8gOWni+WRou+8jOWwseWPquacieS4gOS4quW4g+WxgO+8iOWNleWIl+W4g+WxgO+8ie+8jOmCo+aXtuWAmeS7o+eggeaJjeS4ieeZvuihjO+8jOWQjuadpeWwseaDs+edgOWujOWWhOWViu+8jOiJuS4u6L+Z5Z2R55yf5rex77yM546w5Zyo6L+Z6KGM5pWw6YO95LiA5Y2D5LqU5LqGPSA9fHzvvIlcclxuICAgICAgICBkYXRhID0gdGhpcy5fdmlydHVhbCA/IHRoaXMuZGlzcGxheURhdGFbdGhpcy5hY3R1YWxOdW1JdGVtcyAtIDFdIDogdGhpcy5fY2FsY0V4aXN0SXRlbVBvcyh0aGlzLl9udW1JdGVtcyAtIDEpO1xyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuaWQgPT0gdGhpcy5fbnVtSXRlbXMgLSAxKSB7XHJcbiAgICAgICAgICAgIGNlbnRlciA9IHRoaXMuX3NpemVUeXBlID8gKChkYXRhLnRvcCArIGRhdGEuYm90dG9tKSAvIDIpIDogKGNlbnRlciA9IChkYXRhLmxlZnQgKyBkYXRhLnJpZ2h0KSAvIDIpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld1JpZ2h0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3TGVmdCA8IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld0JvdHRvbSA8IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld1RvcCA+IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5sb2coJ3RoaXMubmVhcmVzdExpc3RJZCA9JywgdGhpcy5uZWFyZXN0TGlzdElkKTtcclxuICAgIH1cclxuICAgIC8v6K6h566X5bey5a2Y5Zyo55qESXRlbeeahOS9jee9rlxyXG4gICAgX2NhbGNFeGlzdEl0ZW1Qb3MoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZChpZCk7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHg6IGl0ZW0ueCxcclxuICAgICAgICAgICAgeTogaXRlbS55LFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcclxuICAgICAgICAgICAgZGF0YS50b3AgPSBpdGVtLnkgKyAoaXRlbS5oZWlnaHQgKiAoMSAtIGl0ZW0uYW5jaG9yWSkpO1xyXG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IGl0ZW0ueSAtIChpdGVtLmhlaWdodCAqIGl0ZW0uYW5jaG9yWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gaXRlbS54IC0gKGl0ZW0ud2lkdGggKiBpdGVtLmFuY2hvclgpO1xyXG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gaXRlbS54ICsgKGl0ZW0ud2lkdGggKiAoMSAtIGl0ZW0uYW5jaG9yWCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i3s+i9rOWIsOesrOWHoOmhtVxyXG4gICAgc2tpcFBhZ2UocGFnZU51bTogbnVtYmVyLCB0aW1lSW5TZWNvbmQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgIT0gU2xpZGVUeXBlLlBBR0UpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVGhpcyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCB0byBiZSBjYWxsZWQsIE11c3QgU2xpZGVNb2RlID0gUEFHRSEnKTtcclxuICAgICAgICBpZiAocGFnZU51bSA8IDAgfHwgcGFnZU51bSA+PSB0Ll9udW1JdGVtcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0LmN1clBhZ2VOdW0gPT0gcGFnZU51bSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHQuY3VyUGFnZU51bSA9IHBhZ2VOdW07XHJcbiAgICAgICAgaWYgKHQucGFnZUNoYW5nZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5wYWdlQ2hhbmdlRXZlbnRdLCBwYWdlTnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5zY3JvbGxUbyhwYWdlTnVtLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgfVxyXG4gICAgLy/kuIrkuIDpobVcclxuICAgIHByZVBhZ2UodGltZUluU2Vjb25kOiBudW1iZXIgPSAuNSkge1xyXG4gICAgICAgIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtIC0gMSwgdGltZUluU2Vjb25kKTtcclxuICAgIH1cclxuICAgIC8v5LiL5LiA6aG1XHJcbiAgICBuZXh0UGFnZSh0aW1lSW5TZWNvbmQ6IG51bWJlciA9IC41KSB7XHJcbiAgICAgICAgdGhpcy5za2lwUGFnZSh0aGlzLmN1clBhZ2VOdW0gKyAxLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=