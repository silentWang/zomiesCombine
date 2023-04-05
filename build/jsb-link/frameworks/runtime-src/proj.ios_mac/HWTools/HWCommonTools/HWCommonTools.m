//
//  HWCommonTools.m
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import "HWCommonTools.h"

@implementation HWCommonTools
/// 当前控制器
+ (UIViewController *)currentController{
    UIWindow *window = [[UIApplication sharedApplication].windows firstObject];
       if (!window) {
           return nil;
       }
       UIView *tempView;
       for (UIView *subview in window.subviews) {
           if ([[subview.classForCoder description] isEqualToString:@"UILayoutContainerView"]) {
               tempView = subview;
               break;
           }
       }
       if (!tempView) {
           tempView = [window.subviews lastObject];
       }
       
       id nextResponder = [tempView nextResponder];
       while (![nextResponder isKindOfClass:[UIViewController class]] || [nextResponder isKindOfClass:[UINavigationController class]] || [nextResponder isKindOfClass:[UITabBarController class]]) {
           tempView =  [tempView.subviews firstObject];
           
           if (!tempView) {
               return nil;
           }
           nextResponder = [tempView nextResponder];
       }
       return  (UIViewController *)nextResponder;
}
/// 获取ppdelegate的代理window上最上层控制器
+ (UIViewController *)getDelegateWindowTopViewController{
    UIViewController *resultVC;
    resultVC = [self _topViewController:[[UIApplication sharedApplication].delegate.window rootViewController]];
    while (resultVC.presentedViewController) {
        resultVC = [self _topViewController:resultVC.presentedViewController];
    }
    return resultVC;
}
+ (UIViewController *)_topViewController:(UIViewController *)vc {
    if ([vc isKindOfClass:[UINavigationController class]]) {
        return [self _topViewController:[(UINavigationController *)vc topViewController]];
    } else if ([vc isKindOfClass:[UITabBarController class]]) {
        return [self _topViewController:[(UITabBarController *)vc selectedViewController]];
    } else {
        return vc;
    }
    return nil;
}
/// 获取view的控制器
+ (UIViewController *)getViewControllerForView:(UIView *)view{
    for (UIView* next = [view superview]; next; next = next.superview) {
        UIResponder* nextResponder = [next nextResponder];
        if ([nextResponder isKindOfClass:[UIViewController class]]) {
            return (UIViewController*)nextResponder;
        }
    }
    return nil;
}
//限制一定时间内重复调用方法: 整个app里 同一个name 的block里面的方法 limit秒时间内不可以执行
+ (BOOL)executeBlock:(void(^)(void))block name:(NSString *)name limit:(NSTimeInterval)limit {

  if (!block) {
      return NO;
  }
  
  //查看上次执行这个函数 到现在的时间间隔有没有达到时间间隔限制
  NSMutableDictionary *dictionary = [self _dictionary];
  NSDate *last = [dictionary objectForKey:name];
  NSTimeInterval timeInterval = [last timeIntervalSinceNow];
  
  // 如果时间间隔小于limit,这个函数不执行
  if (timeInterval < 0 && fabs(timeInterval) < limit) {
      return NO;
  }
  
  // 执行
  block();
  [dictionary setObject:[NSDate date] forKey:name];
  return YES;
}

//移除限制
+ (void)resetLimitForName:(NSString *)name {
  [[self _dictionary] removeObjectForKey:name];
}

+ (NSMutableDictionary *)_dictionary {
    static NSMutableDictionary *dictionary = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        dictionary = [[NSMutableDictionary alloc] init];
    });
    return dictionary;
}
@end
