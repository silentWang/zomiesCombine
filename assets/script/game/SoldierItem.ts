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

    setItemData(d: PlantInfo,droptype:number = -1) {// 3普通掉落 4小精灵掉落
        if(droptype != -1) this.droptype = droptype;
        if(this.droptype!=0 &&  this.droptype0endtime < Utils.getServerTime())
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
            this.GetGameObject('container').removeAllChildren();
            this.GetGameObject("lbl_lv").active = false;
            this.GetGameObject("flower1").active = false;
            return;
        }
        if (!isNull)
        {
            this.GetGameObject("lbl_lv").getComponent(cc.Label).string = "lv." + this.datacopy.lv;
            if(this.droptype==0)
            {
                this.GetGameObject("lbl_lv").active = true;
                this.GetGameObject("flower1").active = false;
                await this.produceChick();
            }
            else
            {
                this.GetGameObject("lbl_lv").active = false;
                this.GetGameObject("flower1").active = true;
                if(this.droptype == 4)
                {
                    if(this.curplayani !=  "pot1_idle")
                    {
                        this.curplayani =  "pot1_idle";
                        this.showPot('spine:pot1');
                    }
                }
                else
                {
                    if(this.curplayani !=  "pot3_idle")
                    {
                        this.curplayani =  "pot3_idle";
                        this.showPot('spine:pot3');
                    }
                }
            }
        }
    }

    private async showPot(path:string){
        this.node.opacity = 0;
        this.GetSkeleton("flower1").skeletonData = await Utils.loadRes(path,sp.SkeletonData) as sp.SkeletonData;
        this.GetSkeleton("flower1").clearTracks();
        this.GetSkeleton("flower1").setAnimation(0,"fall",false);
        this.node.opacity = 255;
        this.node.runAction(cc.sequence(cc.delayTime(0.8),cc.callFunc(()=>{
            this.GetSkeleton("flower1").setAnimation(1,"idle",true);
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

            sfid = 12

            // this.GetSkeleton("flower1").skeletonData = await Utils.loadRes(`spine:flower${sfid}`,sp.SkeletonData) as sp.SkeletonData;
            // this.GetSkeleton("flower1").setAnimation(0,"idleL",true);

            let skpath = `spine:flower${sfid}_ske`;
            let atlaspath = `spine:flower${sfid}_tex`;
            let tnode = new cc.Node('chick');
            let newArm = tnode.addComponent(dragonBones.ArmatureDisplay);
            newArm.dragonAsset = await Utils.loadRes(skpath,dragonBones.DragonBonesAsset) as dragonBones.DragonBonesAsset;
            newArm.dragonAtlasAsset = await Utils.loadRes(atlaspath,dragonBones.DragonBonesAtlasAsset) as dragonBones.DragonBonesAtlasAsset;
            newArm.armatureName = 'Armature';
            newArm.playAnimation('idleL',0);
            let container = this.GetGameObject('container');
            container.removeAllChildren();
            container.addChild(tnode);


            // let nowArm = this.GetDragonAmature("chick");
            // let skinData = (newArm.armature() as dragonBones.Armature).armatureData.defaultSkin;
            // dragonBones.CCFactory.getInstance().replaceSkin(nowArm.armature(),skinData,true);
            
            // nowArm.armatureName = "Armature";
            // nowArm.playAnimation('idleL',0);
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
        if(dt>1) dt=1;
        let chick = this.GetDragonAmature('chick')
        if(this.datacopy && this.droptype == 0 && Data.user.double_att_time>Utils.getServerTime())
        {
            // this.GetSkeleton("flower1").timeScale = 1.5;
            if(chick) chick.timeScale = 1.5;
            this.GetGameObject("kb").active = true;
        }
        else
        {
            // this.GetSkeleton("flower1").timeScale = 1;
            if(chick) chick.timeScale = 1;
            this.GetGameObject("kb").active = false;
        }
        if(this.droptype!=0 )
        {
            if(Utils.getServerTime() > this.droptype0endtime)
            {
                this.droptype = 0;
                this.updateItem();
            }
        }
        if(this.bDrag)return;
        if(!this.datacopy)return;
        if(this.droptype!=0)return;
        this.lastfire += dt;
        if(this.lastfire >= this.cd / ((Data.user.double_att_time>Utils.getServerTime())?2:1))
        {
            this.lastfire = 0;
            let target = this.getTarget();
            if(target)
            {
                this.node.runAction(cc.sequence(cc.delayTime(0.5),cc.callFunc(()=>{
                    if(this.bDrag)return;
                    if(!this.datacopy)return;

                    let b = cc.instantiate(this.bullet_pre);
                    b.position = this.node.position.add(target.x>this.node.x?cc.v3(15,35,0):cc.v3(-15,35,0));
                    b.parent = HallScene.Instance.GetGameObject("node_bullet");
                    b.getComponent(Bullet).setInfo(target,this.datacopy.lv);
                })))
                let amr = this.GetDragonAmature('chick');
                if(target.x>this.node.x)
                {
                    // this.GetSkeleton("flower1").setAnimation(0,"atkR",false);
                    // this.GetSkeleton("flower1").setAnimation(1,"idleR",true);

                    (amr.armature() as dragonBones.Armature).animation.gotoAndPlayByFrame('atkR',1,1);
                    // this.GetDragonAmature('chick').playAnimation('idleR',0);1
                    this.curplayani = "idleR";
                }
                else
                {
                    // this.GetSkeleton("flower1").setAnimation(0,"atkL",false);
                    // this.GetSkeleton("flower1").setAnimation(1,"idleL",true);
                    
                    (amr.armature() as dragonBones.Armature).animation.gotoAndPlayByFrame('atkL',1,1);
                    // this.GetDragonAmature('chick').playAnimation('atkL',1);
                    // this.GetDragonAmature('chick').playAnimation('idleL',0);
                    this.curplayani = "idleL";
                }
            }
        }
    }
}
