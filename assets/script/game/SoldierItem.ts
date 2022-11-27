import BaseUI from "../framwork/BaseUI";
import Data from "../manager/Data";
import Utils from "../utils/Utils";
import { DB_plant } from "./DB";
import HallScene from "./HallScene";
import Bullet from "./prefab/Bullet";
import { PlantInfo } from "./UserModel";


const { ccclass, executeInEditMode, property } = cc._decorator;

@ccclass
export default class SoldierItem extends BaseUI {
    @property(cc.Prefab)
    bullet_pre:cc.Prefab = null;
    public index: number = -1;
    public linkItem: SoldierItem = null;
    public datacopy: PlantInfo = null;
    public bDrag: boolean = false;
    public droptype:number = 0;
    private droptype0endtime = 0;
    private curplayani = "";

    start(){
        let chick = this.GetDragonAmature('chick');
        chick.addEventListener(dragonBones.EventObject.COMPLETE,this.animComplete,this);
    }

    setItemData(d: PlantInfo,droptype:number = -1) {// 3普通掉落 4小精灵掉落
        if(droptype != -1) this.droptype = droptype;
        if(this.droptype ! = 0 &&  this.droptype0endtime < Utils.getServerTime())
        {
            this.droptype0endtime = Utils.getServerTime() + 10000;
        }
        //减少重绘制
        if (this.datacopy && d) {
            if (this.datacopy.index == d.index &&
                this.datacopy.lv == d.lv &&
                this.datacopy.open == d.open) {
                return;
            }
        }

        // console.log("setItemData",d)
        this.datacopy = d ? JSON.parse(JSON.stringify(d)) : null;
        if (this.datacopy) this.datacopy.index = this.index;
        this.updateItem();
    }

    async updateItem() {
        let isNull = this.datacopy == null;
        this.GetGameObject("level_1").active = !isNull;
        if(isNull){
            this.GetGameObject('chick').active = false;
            this.GetGameObject("lbl_lv").active = false;
            this.GetGameObject("flower1").active = false;
            return;
        }
        if (!isNull)
        {
            this.GetGameObject("lbl_lv").getComponent(cc.Label).string = "lv." + this.datacopy.lv;
            if(this.droptype == 0)
            {
                this.GetGameObject('chick').active = true;
                this.GetGameObject("lbl_lv").active = true;
                this.GetGameObject("flower1").active = false;
                await this.produceChick();
            }
            else
            {
                this.GetGameObject('chick').active = false;
                this.GetGameObject("lbl_lv").active = false;
                this.GetGameObject("flower1").active = true;
                this.showPot('spine:pot1');
            }
        }
    }
    
    private async showPot(path:string){
        this.curplayani =  "pot1_idle";
        let potAni = this.GetDragonAmature('flower1');
        potAni.playAnimation('fall',1);
        this.node.runAction(cc.sequence(cc.delayTime(0.8),cc.callFunc(()=>{
            potAni.playAnimation('idle',0);
        })));
    }

    private async produceChick(){
        let info = DB_plant[Math.min(this.datacopy.lv - 1,59)];
        this.cd = Number(info[1]);
        let nowani = this.datacopy.lv + '_idleL';
        if(this.curplayani != nowani)
        {
            this.curplayani = nowani;
            let sfid = Math.min(this.datacopy.lv,60);
            let skpath = `spine:flower${sfid}_ske`;
            let atlaspath = `spine:flower${sfid}_tex`;
            let chick = this.GetDragonAmature('chick');
            chick.dragonAsset = await Utils.loadRes(skpath,dragonBones.DragonBonesAsset) as dragonBones.DragonBonesAsset;
            chick.dragonAtlasAsset = await Utils.loadRes(atlaspath,dragonBones.DragonBonesAtlasAsset) as dragonBones.DragonBonesAtlasAsset;
            chick.armatureName = 'Armature';
            chick.playAnimation('idleL',0);
        }
    }

    private animComplete(evt:cc.Event){
        if(evt.type == dragonBones.EventObject.COMPLETE){
            let chick = this.GetDragonAmature('chick');
            if(chick.animationName == 'atkR'){
                chick.playAnimation('idleR',0);
                this.curplayani = 'idleR';
            }
            else if(chick.animationName == 'atkL'){
                chick.playAnimation('idleL',0);
                this.curplayani = 'idleL';
            }
        }
    }

    private getTarget()
    {
        let enemylist = HallScene.Instance.enemylist;
        let target = null;
        let mindis = 400;
        for(var i = 0;i<enemylist.length;++i)
        {
            if(enemylist[i].x< -cc.winSize.width/2)continue;
            let dis = enemylist[i].position.sub(this.node.position).mag();
            if(dis < mindis)
            {
                target = enemylist[i];
                mindis = dis;
            }
        }

        return target;
    }
    private cd = 0;
    
    private lastfire = 0;
    update(dt)
    {
        if(dt > 1) dt = 1;
        let chick = this.GetDragonAmature('chick');
        if(this.datacopy && this.droptype == 0 && Data.user.double_att_time > Utils.getServerTime())
        {
            if(chick) chick.timeScale = 1.5;
            this.GetGameObject("kb").active = true;
        }
        else
        {
            if(chick) chick.timeScale = 1;
            this.GetGameObject("kb").active = false;
        }
        if(this.droptype != 0)
        {
            if(Utils.getServerTime() > this.droptype0endtime)
            {
                this.droptype = 0;
                this.updateItem();
            }
        }
        if(this.bDrag) return;
        if(!this.datacopy) return;
        if(this.droptype != 0) return;
        this.lastfire += dt;
        if(this.lastfire >= this.cd / ((Data.user.double_att_time > Utils.getServerTime()) ? 2 : 1))
        {
            this.lastfire = 0;
            let target = this.getTarget();
            if(target)
            {
                this.node.runAction(cc.sequence(cc.delayTime(0.5),cc.callFunc(()=>{
                    if(this.bDrag) return;
                    if(!this.datacopy) return;
                    let b = cc.instantiate(this.bullet_pre);
                    b.position = this.node.position.add(target.x > this.node.x ? cc.v3(30,35,0):cc.v3(-30,35,0));
                    b.parent = HallScene.Instance.GetGameObject("node_bullet");
                    b.getComponent(Bullet).setInfo(target,this.datacopy.lv);
                    if(target.x > this.node.x)
                    {
                        chick.playAnimation('atkR',1);
                        this.curplayani = "atkR";
                    }
                    else
                    {
                        chick.playAnimation('atkL',1);
                        this.curplayani = "atkL";
                    }
                })))
            }
        }
    }
}
