import GameEvent from "../event/GameEvent";
import GameConst from "../game/GameConst";
import Utils from '../utils/Utils';

const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseUI extends cc.Component {
    events = [];
    public _create_time: number = 0;
    private m_objects: Map<string, cc.Node> = new Map<string, cc.Node>();
    onUIClicked(event, customEventData) {
        var btnName = event.target.name;
        switch (btnName) {
            case "btn_close":
                this.closeUI();
                break;
        }
    }

    onLoad() {
        this.events = [];
        if (this.node.getComponent(cc.Button)) {
            Utils.addClickEvent(this.node, this.node, cc.js.getClassName(this), "onUIClicked", this.node.getComponent(cc.Button).target);
        }

        this._addClickEvent(this.node);
        this._create_time = Utils.getServerTime();
        this.node.zIndex = 2000
    }

    fixRedCoinForShow(coin: number, fixed: number = 4, ratio: number = 100) {
        let v = coin / ratio;
        if (v > 1.0)
            fixed = 2;
        let ret: string = v.toFixed(fixed);
        if (fixed == 4) {
            let len = ret.length;
            let to_last_zero = len - 1;
            for (let i = len - 1; i > len - 3; i--) {
                let cur_char2num = parseInt(ret[i]);
                if (cur_char2num == 0)
                    to_last_zero = i;
            }
            ret = ret.substr(0, to_last_zero);
        }
        return ret;
    }

    _isSkipNode(node: cc.Node): boolean {
        if (this.node == node) {
            return false;
        }
        let b = node.getComponent(BaseUI);
        return b != null;
    }

    protected _findInChildren(node: cc.Node, name: string): cc.Node {
        var x = node.getChildByName(name);
        if (x) return x;
        if (node.childrenCount == 0) return null;
        for (var i = 0; i < node.childrenCount; ++i) {
            var tmp = this._findInChildren(node.children[i], name);
            if (tmp) return tmp;
        }
        return null;
    }

    public async SetSprite(name: string, filepath: string) {
        return new Promise((resolve, reject) => {
            var tmp = this.GetSprite(name);
            if (tmp) {
                Utils.loadRes(filepath, cc.SpriteFrame).then((ret: cc.SpriteFrame) => {
                    if (cc.isValid(this.node)) {
                        tmp.spriteFrame = ret;
                        resolve(null)
                    }
                })
            }
        })
    }

    public GetGameObject(name: string, refind: boolean = false): cc.Node {
        if (!cc.isValid(this.node)) return null;
        if (!refind) {
            if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name];
            if (name == this.node.name) return this.node;
        }

        if (name.indexOf("/") != -1) {
            var tmp = cc.find(name, this.node);
            if (tmp) this.m_objects[name] = tmp;
            return tmp;
        }
        else {
            var tmp = this._findInChildren(this.node, name);
            if (tmp) this.m_objects[name] = tmp;
            return tmp;
        }
    }

    
    public GetDragonAmature(name: string): dragonBones.ArmatureDisplay {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(sp.Skeleton);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(dragonBones.ArmatureDisplay);
        return null;
    }

    public GetSkeleton(name: string): sp.Skeleton {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(sp.Skeleton);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(sp.Skeleton);
        return null;
    }

    public GetSprite(name: string): cc.Sprite {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.Sprite);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.Sprite);
        return null;
    }

    public GetText(name: string): cc.Label {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.Label);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.Label);
        return null;
    }

    public GetProgressBar(name: string): cc.ProgressBar {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.ProgressBar);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.ProgressBar);
        return null;
    }
    
    public GetButton(name: string): cc.Button {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.Button);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.Button);
        return null;
    }

    public GetInputField(name: string): cc.EditBox {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.EditBox);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.EditBox);
        return null;
    }

    public SetProgressBar(TextID: string, p: number) {
        if (this.GetProgressBar(TextID))
        this.GetProgressBar(TextID).progress = p;
    }
    
    public SetText(TextID: string, content: string) {
        if (this.GetText(TextID))
        this.GetText(TextID).string = content;
    }

    public GetSlider(name: string): cc.Slider {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.Slider);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.Slider);
        return null;
    }

    public SetInputText(TextID: string, content: string) {
        if (this.GetInputField(TextID))
            this.GetInputField(TextID).string = content;
    }

    getChildByName(path, node) {
        return cc.find(path, node || this.node);
    }

    _addClickEvent(node) {
        if (this._isSkipNode(node)) return;
        for (var i = 0; i < node.childrenCount; ++i) {
            var tmp = node.children[i];
            if (this._isSkipNode(tmp)) continue;
            if (tmp.getComponent(cc.Button)) {
                Utils.addClickEvent(tmp, this.node, cc.js.getClassName(this), "onUIClicked", tmp.getComponent(cc.Button).target);
            }
            this._addClickEvent(tmp);
        }
    }

    shutAnim() {
        if (this.node) {
            this.node.active = false;
            this.node.parent = null;
            this.node.destroy();
            // this.node.destroy();
            // this.node.setScale(1, 1);
            // var actionOut = cc.fadeOut(0.1);
            // var scaleTo = cc.scaleTo(0.05, 1);
            // this.node.runAction(cc.sequence(cc.spawn(scaleTo, actionOut),
            //     cc.callFunc(() => {
            //         this.node.active = false;
            //         this.node.parent = null;
            //         this.node.destroy();
            //     }
            //     )
            // ));
        }
    }

    startAnim() {
        if (this.node) {
            this.node.opacity = 0;
            this.node.active = true;
            this.node.setScale(0.8, 0.8);
            var delay = cc.delayTime(0.1);
            var actionIn = cc.fadeIn(0.1)
            var scaleTo = cc.scaleTo(0.1, 1);
            this.node.runAction(cc.spawn(delay.clone(), actionIn, delay.clone(), scaleTo));
        }
    }

    closeUI() {
        this.shutAnim();
    }

    onDestroy() {
        for (var i = 0; i < this.events.length; ++i)
            GameEvent.Instance().unregister(this, this.events[i]);
    }

    async playSkeAni(file: string, name: string, parent: cc.Node, pos: cc.Vec3, removetime: number = -1) {
        var node = new cc.Node();
        node.parent = parent;
        node.position = pos;
        var skd = node.addComponent(sp.Skeleton);
        
        var data = await Utils.loadRes(file, sp.SkeletonData) as sp.SkeletonData;
        skd.skeletonData = data;
        skd.premultipliedAlpha = false;
        skd.setAnimation(0, name, false);
        if (removetime != -1) {
            node.runAction(cc.sequence(cc.delayTime(removetime), cc.callFunc(() => {
                node.parent = null;
            })))
        }

        return node;
    }

    protected addFreeAdEvent(){
        this.rigester(GameConst.FREE_AD_EVENT,this.handleFreeAd)
    }

    protected handleFreeAd(){

    }

    rigester(type: string, callFunc: Function) {
        this.events.push(type);
        GameEvent.Instance().register(this, type, callFunc);
    }
    unregister(type: string) {
        GameEvent.Instance().unregister(this, type);
    }

    dispatch(type: string, ...data) {
        GameEvent.Instance().dispatch(type, ...data);
    }

}