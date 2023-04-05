//
//  HWTools.h
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface HWTools : NSObject
//字典转json
+(NSString *)convert2JSONWithDictionary:(NSDictionary *)dic;
//json转字典
+(NSDictionary *)convert2DictionaryWithJSONString:(NSString *)jsonString;
@end

NS_ASSUME_NONNULL_END
