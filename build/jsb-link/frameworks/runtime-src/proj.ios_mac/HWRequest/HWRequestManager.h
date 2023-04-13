//
//  HWRequestManager.h
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/10.
//

#import <Foundation/Foundation.h>



typedef void (^SuccessBlock)(id responseObject);
typedef void (^FailureBlock)(NSString *error);

@interface HWRequestManager : NSObject

//原生GET网络请求
+ (void)getWithURL:(NSString *)url Params:(NSDictionary *)params success:(SuccessBlock)success failure:(FailureBlock)failure;

+ (void)PostWithURL:(NSString *)url Params:(NSDictionary *)params success:(SuccessBlock)success failure:(FailureBlock)failure;
@end


