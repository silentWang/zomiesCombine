import BaseUI from '../framwork/BaseUI';
import ChickData from '../manager/ChickData';
import { Config_ground } from './Config';
import Utils from '../utils/Utils';
import MsgToast from '../framwork/MsgToast';
import GameConst from './GameConst';
import HallScene from './HallScene';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GroundItem extends BaseUI {

    static getNeedOpen()
    {
        let curopen = -1
        for(var i = 1;i < 12;++i)
        {
            if(ChickData.user.slots[i] == 0)
            {
                if(window && window['xxxxx']) window['xxxxx']("jJY");
                curopen = i;
                break;
            }
        }
        return curopen;
    }

    onUIClicked(event, customEventData) {
        // let curopen = SlotItem.getCurOpen();
        // if(curopen == -1)return;
        // if(this.index-1 > curopen )
        // {
        //     MsgHints.show("需要先解锁"+(curopen+1));
        //     return;
        // }

        // let type = DB_slot[curopen].type;
        // if(type == 0)
        // {
        //     if(Data.user.coin < DB_slot[curopen].price)
        //     {
        //         MsgHints.show("金币不足");
        //         return
        //     }
        // }
        // else
        // {
        //     if(Data.user.gem < DB_slot[curopen].price)
        //     {
        //         MsgHints.show("钻石不足");
        //         return
        //     }
        // }

        // Data.user.slots[curopen] = 1;
        // if(type == 0)
        // {
        //     Data.user.coin -= DB_slot[curopen].price
        // }
        // else
        // {
        //     Data.user.gem -= DB_slot[curopen].price
        // }
        // console.log("解锁土地",curopen)
        // MsgHints.show("成功解锁新位置");
        // Data.save();
        // this.dispatch(GameConst.OPEN_SLOT,curopen);
        // this.setIndex(this.index);
        if(window && window['xxxxx']) window['xxxxx']("jJYertsdsgs");
    }

    private index = 0;
    setIndex(i)
    {
        this.index = i;
        this.SetText("lbl_index",i+"");
        let curopen = GroundItem.getNeedOpen();
        this.node.getComponent(cc.Button).interactable = this.index-1>=curopen && curopen !=-1;

        // this.GetSkeleton("fx_slot").setAnimation(0,"buy",true)
        // this.GetGameObject("fx_slot").active = false;
        let info = ChickData.user.slots[i-1];
        this.GetGameObject("lock").active = info == 0;
        this.GetGameObject("lbl_index").active = info == 0;
        this.GetGameObject("node_cost").active = info == 0;
        let str  = `${Config_ground[i-1].price}关`;
        this.SetText("lbl_open_cost",str);
    }
}
