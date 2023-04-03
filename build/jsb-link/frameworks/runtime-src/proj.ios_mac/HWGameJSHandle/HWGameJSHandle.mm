//
//  HWGameJSHandle.m
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/3/30.
//

#import "HWGameJSHandle.h"
#import "cocos2d.h"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"


@implementation HWGameJSHandle

//单例
+ (HWGameJSHandle *)shareInstance {
    static dispatch_once_t onceToken;
    static HWGameJSHandle *_instance = nil;
    dispatch_once(&onceToken, ^{
        if(_instance == nil) {
            _instance = [[HWGameJSHandle alloc] init];
        }
    });
    return _instance;
}

+(void)getAppVersion:(NSString *)par{
    NSLog(@"sssssssssss");
}

//topOn 激励视频广告
+(void)loadTopOnRewardAd:(NSString *)json{
    
}

//topOn 插屏广告
+(void)loadTopOnInterstitialAd:(NSString *)json{
    
}




+(void)callJsEngineCallBack:(NSString*) funcNameStr Content:(NSString*) contentStr
{
    std::string funcName = [funcNameStr UTF8String];
    std::string param002 = [contentStr UTF8String];
    std::string jsCallStr = cocos2d::StringUtils::format("%s(%s);",funcName.c_str(),param002.c_str());
    NSLog(@"jsCallStr = %s", jsCallStr.c_str());
    se::ScriptEngine::getInstance()->evalString(jsCallStr.c_str());
}



@end
