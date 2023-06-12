import BaseUI from "../../framwork/BaseUI";
import List from "../../framwork/List";
import ChickData from "../../manager/ChickData";
import AudioMgr from "../../utils/AudioMgr";
import Utils from "../../utils/Utils";
import { Config_chick } from "../Config";
import GameConst from "../GameConst";
import ShopItem from "./ShopItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopView extends BaseUI{


    private static _instance:cc.Node = null;
    static show()
    {
        if(!ShopView._instance)
        {
            if(window && window['xxxxx']) window['xxxxx']("r6nwcchDZ6swy");
            Utils.createUI("prefab/ShopLayer")
        }
        else
        {
            ShopView._instance.active = true;
            ShopView._instance.getComponent(ShopView).reLoad();
        }
    }

    list = null;
    start () {
        ShopView._instance = this.node;
        this.list = Config_chick
        this.reLoad();
        this.rigester(GameConst.BUY_CHICK,(gun:any,listid:number)=>{
            this.GetGameObject("ScrollView").getComponent(List).updateAppointed(listid);
        })

        this.rigester(GameConst.NEW_CHICK,()=>{
            this.reLoad();
        })
    }

    reLoad()
    {
        this.list = Config_chick;
        let sview = this.GetGameObject("ScrollView");
        let list = sview.getComponent(List);
        list.numItems = this.list.length;
        var index = Math.max(0,ChickData.user.getLvlMax() - 5);
        list.scrollTo(index,0.2);
    }

    onUIClicked(event,c)
    {
        if(window && window['xxxxx']) window['xxxxx']("3RbyFrh");
        AudioMgr.Instance().playMX("click");
        this.node.active = false;
    }
    
    onListRender(item: cc.Node, idx: number) {
        item.getComponent(ShopItem).setShopItemData(this.list[idx]);
    }
}
