//
//  HWSimpleHUD.h
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import <UIKit/UIKit.h>


@interface HWSimpleHUD : UIView
+ (id)showHUDAddedTo:(UIView *)view
             message:(NSString *)message
            duration:(NSTimeInterval)duration;

+ (void)showHUDLoadingAddedTo:(UIView *)view;
+ (void)hideAllHUDLoadingForView:(UIView *)view;
@end

#define __HWToast(msg,v)         [HWSimpleHUD showHUDAddedTo:v message:msg duration:2.f];
#define __HWLoading(v)           [HWSimpleHUD showHUDLoadingAddedTo:v];
#define __HWLoadingCancel(v)     [HWSimpleHUD hideAllHUDLoadingForView:v];
