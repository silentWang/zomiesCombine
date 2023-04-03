//
//  HWTools.m
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import "HWTools.h"

@implementation HWTools

//字典转JSON
+(NSString *)convert2JSONWithDictionary:(NSDictionary *)dic{
    NSError *err;
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:dic options:0     error:&err];
    
    NSString *jsonString;
    if (!jsonData) {
    NSLog(@"%@",err);
    }else{
    jsonString = [[NSString alloc]initWithData:jsonData     encoding:NSUTF8StringEncoding];
    }
    NSLog(@"%@",jsonString);
    return jsonString;
}

//JSON转字典
+(NSDictionary *)convert2DictionaryWithJSONString:(NSString *)jsonString{
    NSData *jsonData = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    NSError *err;
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData
    options:NSJSONReadingMutableContainers
    error:&err];
    if(err)
    {
    NSLog(@"%@",err);
    return nil;
    }
    return dic;
}




@end
