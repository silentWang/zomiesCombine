import BaseUI from "../../framwork/BaseUI";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import { Config_chick } from "../Config";
import Enemy from "./Enemy";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends BaseUI {

    private target:cc.Node = null;
    private sped:number = 700;
    private plantlv = 0;
    private skillType = 0;

    start()
    {
        // let bt = this.GetGameObject("trail2");
        // if(bt){
        //     bt.opacity = 0;
        //     bt.runAction(cc.fadeTo(0.4,255));
        // }
        // this.node.scale = 1.2;
    }
    
    update (dt) {
        if(dt > 1) dt = 1;
        if( this.target)
        {
            let d = this.target.position.add(cc.v3(0,80,0)) .sub(this.node.position);
            if(d.mag() < this.sped * dt *2)
            {
                this.target.getComponent(Enemy).hit(this.plantlv,this.skillType);
                // this.node.position = this.target.position.add(cc.v3(0,80,0))
                this.node.destroy();
                this.node.removeFromParent(true);
                return;
            }
            let v = d.normalize().mul(this.sped * dt);
            this.node.position =this.node.position.add(v);
            this.node.angle = 180-cc.v2(d.x,d.y).signAngle(cc.v2(1,0)) * 180 / Math.PI;
        }
        else
        {
            this.node.removeFromParent(true);
        }

    }

    private getBulletType(){
        let info = Config_chick[this.plantlv - 1];
        let skill = String(info[3]).split("|");
        let skilltype = Number(skill[0]);
        let skillvalue = Number(skill[1]);
        if(Utils.getRandom(0,100) < skillvalue) return skilltype;
    }

    async setInfo(target:cc.Node,plantlv:number)
    {
        plantlv = Math.min(plantlv,60)
        this.plantlv = plantlv;
        this.target = target;
        this.skillType = this.getBulletType();
        if(this.skillType == 1){
            AudioMgr.Instance().playMX('skill5');
        }
        else if(this.skillType == 2){
            AudioMgr.Instance().playMX('skill3');
        }
        else if(this.skillType == 3){
            AudioMgr.Instance().playMX('skill2');
        }
        else {
            AudioMgr.Instance().playMX('skill1');
        }


        this.resetBullet();
        let idx = Config_chick[plantlv - 1][8];
        idx = (!idx || idx > 5) ? 1 : idx;
        // let skpath = `spine:other/bullet${idx}_ske`;
        // let atlaspath = `spine:other/bullet${idx}_tex`;
        let bullet = this.GetDragonAmature('bsp'+idx);
        this.GetGameObject('bsp'+idx).active = true;
        bullet.armatureName = 'Armature';
        bullet.playAnimation('bullet' + idx,0);
        // bullet.dragonAsset = await Utils.loadRes(skpath,dragonBones.DragonBonesAsset) as dragonBones.DragonBonesAsset;
        // bullet.dragonAtlasAsset = await Utils.loadRes(atlaspath,dragonBones.DragonBonesAtlasAsset) as dragonBones.DragonBonesAtlasAsset;

        // 原逻辑
        // this.GetSprite("sp").spriteFrame = await Utils.loadRes("texture/bullets/"+(plantlv-1),cc.SpriteFrame) as cc.SpriteFrame;
        // let bt = this.GetGameObject("trail2");
        // if(bt){
        //     bt.color = cc.Color.RED.fromHEX(String(DB_plant[plantlv-1][9]))
        //     bt.height =  this.GetGameObject("sp").height;
        // }
        // this.GetGameObject("streak").getComponent(cc.MotionStreak).stroke = this.GetGameObject("sp").height;
        // this.GetGameObject("streak").getComponent(cc.MotionStreak).color = cc.Color.RED.fromHEX(String(DB_plant[plantlv-1][9]))
    }

    private resetBullet(){
        this.GetGameObject('bsp1').active = false;
        this.GetGameObject('bsp2').active = false;
        this.GetGameObject('bsp3').active = false;
        this.GetGameObject('bsp4').active = false;
        this.GetGameObject('bsp5').active = false;
    }

}
