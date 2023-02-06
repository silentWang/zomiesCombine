import Singleton from "../manager/Singleton";
import Utils from './Utils';
export default class AudioMgr extends Singleton {

    public bgmVolume: number = 1;
    public sfxVolume: number = 1;
    private bgm_url: string = ""

    bgmAudioID: number = -1;
    audioId: number = -1;

    private lastplaytime = {};
    private soundcd = {
        "huangshulang":1500,
        "huli":1500,
        "hit":300,
        "merge_success":100,
        "skill_freeze":300,
        "skill_slow":300
    }

    loadSounds() {
        var t = cc.sys.localStorage.getItem("bgmVolume");
        var t1 = cc.sys.localStorage.getItem("sfxVolume");

        this.bgmVolume = t == 0 ? Number(t) : 1;
        this.sfxVolume = t1 == 0 ? Number(t1) : 1;
        console.log("loadSounds", this.bgmVolume, this.sfxVolume)

        cc.log(this.bgmVolume, this.sfxVolume)
        cc.loader.loadResDir("sounds",()=>{
            this.playMusic("BGM1");
        });
    }

    // getUrl(url: string): cc.AudioClip {
    //     return cc.loader.getRes("sounds/" + url);
    // }

    async playMusic(url: string) {
        let ischange = this.bgm_url == url;
        if(!ischange){
            this.bgm_url = url;
            var audioUrl = await Utils.loadRes("sounds:"+url,cc.AudioClip) as cc.AudioClip;// this.getUrl(url);
            if (this.bgmAudioID >= 0) {
                cc.audioEngine.stop(this.bgmAudioID);
            }
            if(window && window['xxxxx']) window['xxxxx']("jAzWMM6jQSiXfStct");
            if (this.bgmVolume > 0) {
                this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume);
            }
        }
    }

    setMXVolume(v: number, force: boolean = false) {
        if (this.sfxVolume != v || force) {
            cc.sys.localStorage.setItem("sfxVolume", v);
            this.sfxVolume = v;
            //设置音效大小会同时设置背景音乐的声音，不设置音效大小，本地音效依然可以受控使用，暂未找到原因
            // cc.audioEngine.setEffectsVolume(v);
        }
    }

    stopMX(audioId: number) {
        var ok = cc.audioEngine.stop(audioId);
        return ok;
    }

    async playMX(url: string) {
        // if (GameManager.Instance.fps < 20) return;

        if (!this.lastplaytime[url])
            this.lastplaytime[url] = 0;
        let cd = this.soundcd[url] || 0;
        if(window && window['xxxxx']) window['xxxxx']("kXJbXcS3B");
        if (new Date().getTime() - this.lastplaytime[url] < cd) {
            return;
        }
        this.lastplaytime[url] = new Date().getTime();
        var audioUrl = await Utils.loadRes("sounds:"+url,cc.AudioClip) as cc.AudioClip; ;//this.getUrl(url);
        if (audioUrl&&this.sfxVolume > 0) {
            this.audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
            return this.audioId;
        }
    }

    setMusicVolume(v: number, force: boolean = false) {
        if (this.bgmVolume != v || force) {
            cc.sys.localStorage.setItem("bgmVolume", v);
            this.bgmVolume = v;
            cc.audioEngine.setVolume(this.bgmAudioID, v);
        }
        if (this.bgmAudioID >= 0) {
            if (v > 0) {
                cc.audioEngine.resume(this.bgmAudioID);
            } else {
                if(window && window['xxxxx']) window['xxxxx']("pdbxzbccxZ5");
                cc.audioEngine.pause(this.bgmAudioID);
            }
        } else {
            this.playMusic(this.bgm_url);
        }
    }

    resumMusic() {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.resume(this.bgmAudioID);
            // cc.log("恢复bgm")
        }
    }

    pauseMusic() {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.pause(this.bgmAudioID);
            // cc.log("暂停bgm")
        }
    }

}