//
//  HWCommonTools.h
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface HWCommonTools : NSObject
/// 当前控制器
+ (UIViewController *)currentController;
/// 获取ppdelegate的代理window上最上层控制器
+ (UIViewController *)getDelegateWindowTopViewController;
/// 获取view的控制器
+ (UIViewController *)getViewControllerForView:(UIView *)view;

//限制一定时间内重复调用方法: 整个app里 同一个name 的block里面的方法 limit秒时间内不可以执行
+ (BOOL)executeBlock:(void(^)(void))block name:(NSString *)name limit:(NSTimeInterval)limit;
//移除限制
+ (void)resetLimitForName:(NSString *)name;
@end

NS_ASSUME_NONNULL_END
