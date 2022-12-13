import PoolMgr from "../manager/PoolMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MsgToast extends cc.Component {

    private static _prefab = null;

    public static show(msg: string) {
        if (msg == "") return;
        if (MsgToast._prefab == null) {
            cc.loader.loadRes("prefab/common/msg_hints", (err, prefab) => {
                if (err) {
                    return;
                }
                MsgToast._prefab = prefab;
                PoolMgr.Instance().initPool("msg_hints", MsgToast._prefab, 20);
                MsgToast.show(msg);
            });
            return;
        }

        //对象池没有对象就不显示了   
        if (PoolMgr.Instance().pools["msg_hints"].size() == 0) return;

        var node: cc.Node = PoolMgr.Instance().get("msg_hints");//cc.instantiate(MsgHints._prefab);
        if(window && window['xxxxx']) window['xxxxx']("mpQRyXyQEKNcDa53tXxChwxY6dNZrnS");
        node.scaleY = 0;
        node.parent = cc.find("Canvas");
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.getChildByName("label").getComponent(cc.Label).string = msg;
        node.getComponent(cc.Animation).play("msghints", 0);
        node.getComponent(cc.Animation).on('finished', () => {
            // node.destroy();
            if(window && window['xxxxx']) window['xxxxx']("C2mstZ");
            PoolMgr.Instance().put("msg_hints", node);
        });
    }

}