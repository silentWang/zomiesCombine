//
//  HWIAPManager.h
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/7.
//

#import <Foundation/Foundation.h>



@interface HWIAPManager : NSObject
+ (instancetype)shareInstence;
@property(nonatomic,copy)void(^payBlock)(BOOL isPaySuccess);
+(void)buyAppProductId:(NSString *)appleProductId withIAPSuccess:(void(^)(BOOL isSuccess))block;

@end


