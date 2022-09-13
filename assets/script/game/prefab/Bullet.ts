import BaseUI from "../../framwork/BaseUI";
import Utils from "../../utils/Utils";
import { DB_plant } from "../DB";
import Enemy from "./Enemy";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends BaseUI {

    start()
    {
        this.GetGameObject("trail2").opacity = 0;
        this.GetGameObject("trail2").runAction(cc.fadeTo(0.4,255));
        this.node.scale = 1.2;
    }
    update (dt) {
        if(dt>1)dt=1;
        if( this.target)
        {
            let d = this.target.position.add(cc.v3(0,80,0)) .sub(this.node.position);
            if(d.mag() < this.sped * dt *2)
            {
                this.target.getComponent(Enemy).hit(this.plantlv);
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

    private target:cc.Node = null;
    private sped:number = 700;
    private plantlv = 0;
    async setInfo(target:cc.Node,plantlv:number)
    {
        plantlv = Math.min(plantlv,60)
        this.plantlv = plantlv;
        this.target = target;
        this.GetSprite("sp").spriteFrame = await Utils.loadRes("texture/bullets/"+(plantlv-1),cc.SpriteFrame) as cc.SpriteFrame;
        // console.log(DB_plant[plantlv-1][9])
        this.GetGameObject("trail2").color = cc.Color.RED.fromHEX(String(DB_plant[plantlv-1][9]))
        this.GetGameObject("trail2").height =  this.GetGameObject("sp").height;
        // this.GetGameObject("streak").getComponent(cc.MotionStreak).stroke = this.GetGameObject("sp").height;
        // this.GetGameObject("streak").getComponent(cc.MotionStreak).color = cc.Color.RED.fromHEX(String(DB_plant[plantlv-1][9]))
    }
}
