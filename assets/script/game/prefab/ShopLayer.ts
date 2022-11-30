import BaseUI from "../../framwork/BaseUI";
import List from "../../framwork/List";
import Data from "../../manager/Data";
import WxCenter from "../../manager/WxCenter";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import { DB_plant } from "../DB";
import GameConst from "../GameConst";
import ShopItem from "./ShopItem";



const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopLayer extends BaseUI{


    private static _instance:cc.Node = null;
    static show()
    {
        if(!ShopLayer._instance)
        {
            Utils.createUI("prefab/ShopLayer")
        }
        else
        {
            ShopLayer._instance.active = true;
            ShopLayer._instance.getComponent(ShopLayer).reLoad();
        }
    }

    list = null;
    start () {
        WxCenter.aldReport('ShopShow','show');
        ShopLayer._instance = this.node;
        this.list = DB_plant
        this.reLoad();
        this.rigester(GameConst.BUY_PLANT,(gun:any,listid:number)=>{
            this.GetGameObject("ScrollView").getComponent(List).updateAppointed(listid);
        })

        this.rigester(GameConst.NEW_PLANT,()=>{
            this.reLoad();
        })
    }

    reLoad()
    {
        this.list = DB_plant;
        this.GetGameObject("ScrollView").getComponent(List).numItems = this.list.length;
        var index = Math.max(0,Data.user.GetMaxLv() - 5);
        this.GetGameObject("ScrollView").getComponent(List).scrollTo(index,0.2);
    }

    onBtnClicked(event,c)
    {
        AudioMgr.Instance().playSFX("click");
        this.node.active = false;
    }
    
    onListRender(item: cc.Node, idx: number) {
        item.getComponent(ShopItem).setItemData(this.list[idx]);
    }
}
