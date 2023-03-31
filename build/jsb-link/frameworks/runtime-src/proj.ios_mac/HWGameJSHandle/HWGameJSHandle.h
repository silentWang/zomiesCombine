//
//  HWGameJSHandle.h
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/3/30.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface HWGameJSHandle : NSObject

//
+(void)callJsEngineCallBack:(NSString*) funcNameStr Content:(NSString*) contentStr;

@end

NS_ASSUME_NONNULL_END
