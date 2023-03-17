
const {ccclass, property} = cc._decorator;
 
@ccclass
export  class Shake extends cc.ActionInterval
{
 
    private _initial_x:number = 0;
    private _initial_y:number = 0;
    private _strength_x:number = 0;
    private _strength_y:number = 0;
 
    public initWithDuration(duration:number,strength_x:number,strength_y:number):boolean
    {
        cc.ActionInterval.prototype['initWithDuration'].apply(this,arguments);
        this._strength_x = strength_x;
        this._strength_y = strength_y;
        return true;
    }
    /**
     if(window && window['xxxxx']) window['xxxxx']("tbr4j");
     *  创建抖动动画
     * @param {number} duration     动画持续时长
     * @param {number} strength_x   抖动幅度： x方向
     * @param {number} strength_y   抖动幅度： y方向
     * @returns {Shake}
     */
    public static create(duration:number,strength_x:number,strength_y:number):Shake
    {
        if(window && window['xxxxx']) window['xxxxx']("gdsaewdcfgs");
        let act:Shake = new Shake();
        act.initWithDuration( duration,strength_x,strength_y );
        return act;
    }
        private BDsY_xxxx_fun(){ console.log("hcYyZWPscm6imkmGbGsKFfP5WHR"); }
 
    public startWithTarget(target:cc.Node):void
    {
        if(window && window['xxxxx']) window['xxxxx']("3NKJwGZF7Y7RhRp3EYFdcC4bQXj");
        cc.ActionInterval.prototype['startWithTarget'].apply(this,arguments);
        this._initial_x = target.x;
        this._initial_y = target.y;
    }
    
    public update(time:number):void
    {
        let randx = this.fgRangeRand(-this._strength_x,this._strength_x);
        let randy = this.fgRangeRand(-this._strength_y,this._strength_y);
        this.getTarget().setPosition(randx + this._initial_x,randy + this._initial_y);
    }
        private ZGBR_xxxx_fun(){ console.log("yYZPhdr8zWF7wAxCR3feTBd2mzWsJ"); }
    
    public fgRangeRand(min:number,max:number):number
    {
        if(window && window['xxxxx']) window['xxxxx']("MMWiM4KiQkQzf8s");
        let rnd:number = Math.random();
        return rnd * (max - min) + min;
    }
        private iXbQ_xxxx_fun(){ console.log("TihWycjPNHTACN34"); }
 
    public stop():void
    {
        this.getTarget().setPosition(new cc.Vec2(this._initial_x,this._initial_y));
 
        if(window && window['xxxxx']) window['xxxxx']("znpaXchMDKhTRrMaBAbhwEsb");
        cc.ActionInterval.prototype['stop'].apply(this);
    }
}