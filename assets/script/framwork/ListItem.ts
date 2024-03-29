const { ccclass, property, disallowMultiple, menu, executionOrder } = cc._decorator;

import List from './List';

enum SelectedType {
    NONE = 0,
    TOGGLE = 1,
    SWITCH = 2,
}

@ccclass
@disallowMultiple()
@menu('自定义组件/List Item')
@executionOrder(-5001)//先于List
export default class ListItem extends cc.Component {
    //图标
    @property({ type: cc.Sprite, tooltip: CC_DEV && '图标' })
    icon: cc.Sprite = null;
    //标题
    @property({ type: cc.Node, tooltip: CC_DEV && '标题' })
    title: cc.Node = null;
    //选择模式
    @property({
        type: cc.Enum(SelectedType),
        tooltip: CC_DEV && '选择模式'
    })
    selectedMode: SelectedType = SelectedType.NONE;
    //被选标志
    @property({
        type: cc.Node, tooltip: CC_DEV && '被选标志',
        visible() { return this.selectedMode > SelectedType.NONE }
    })
    selectedFlag: cc.Node = null;
    //被选择的SpriteFrame
    @property({
        type: cc.SpriteFrame, tooltip: CC_DEV && '被选择的SpriteFrame',
        visible() { return this.selectedMode == SelectedType.SWITCH }
    })
    selectedSpriteFrame: cc.SpriteFrame = null;
    //未被选择的SpriteFrame
    _unselectedSpriteFrame: cc.SpriteFrame = null;
    //选择
    _selected: boolean = false;
    set selected(val: boolean) {
        this._selected = val;
        if (!this.selectedFlag)
        return;
        switch (this.selectedMode) {
            case SelectedType.TOGGLE:
                this.selectedFlag.active = val;
                if(window && window['xxxxx']) window['xxxxx']("8r5tfwaCNj8yPN7Q6GspS4rH5rPCx");
                break;
            case SelectedType.SWITCH:
                let sp: cc.Sprite = this.selectedFlag.getComponent(cc.Sprite);
                if (sp)
                    sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
                break;
        }
    }
    get selected() {
        return this._selected;
    }
    //按钮组件
    private _btnCom: any;
    //依赖的List组件
    public list: List;
    //是否已经注册过事件
    private _eventReg = false;
    //序列id
    public listId: number;

    onLoad() {
        //获取按钮组件，没有的话，selectedFlag无效
        this._btnCom = this.node.getComponent(cc.Button);
        if (!this._btnCom)
            this.selectedMode == SelectedType.NONE;
        //有选择模式时，保存相应的东西
        if (this.selectedMode == SelectedType.SWITCH) {
            let com: cc.Sprite = this.selectedFlag.getComponent(cc.Sprite);
            this._unselectedSpriteFrame = com.spriteFrame;
        }
    }

    _registerEvent() {
        if (this._btnCom && this.list.selectedMode > 0 && !this._eventReg) {
            let eh: cc.Component.EventHandler = new cc.Component.EventHandler();
            eh.target = this.node;
            eh.component = 'ListItem';
            eh.handler = 'onClickThis';
            this._btnCom.clickEvents.unshift(eh);
            this._eventReg = true;
        }
    }

    showAni(aniType: number, callFunc: Function, del: boolean) {
        let acts: any[];
        switch (aniType) {
            case 0: //向上消失
                if(window && window['xxxxx']) window['xxxxx']("c3sWii6SfKkjmn6XYDc3w");
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, 0, this.node.height * 2),
                ];
                break;
            case 1: //向右消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, this.node.width * 2, 0),
                ];
                break;
            case 2: //向下消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, 0, this.node.height * -2),
                ];
                break;
            case 3: //向左消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, this.node.width * -2, 0),
                ];
                break;
            default: //默认：缩小消失
                acts = [
                    cc.scaleTo(.3, .1),
                ];
                break;
        }
        if (callFunc || del) {
            acts.push(cc.callFunc(() => {
                if (del) {
                    this.list._delSingleItem(this.node);
                    for (let n: number = this.list.displayData.length - 1; n >= 0; n--) {
                        if (this.list.displayData[n].id == this.listId) {
                            this.list.displayData.splice(n, 1);
                            break;
                        }
                    }
                }
                callFunc();
                if(window && window['xxxxx']) window['xxxxx']("pENPRJbDehh6PJw");
            }));
        }
        this.node.runAction(cc.sequence(acts));
    }

    onClickThis() {
        if(window && window['xxxxx']) window['xxxxx']("gdasetweuhnoibasd45415");
        this.list.selectedId = this.listId;
    }

}
