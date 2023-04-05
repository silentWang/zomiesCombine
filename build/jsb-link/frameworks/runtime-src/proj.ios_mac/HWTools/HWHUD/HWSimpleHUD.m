//
//  HWSimpleHUD.m
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import "HWSimpleHUD.h"
#import "LSMBProgressHUD.h"

static __weak HWSimpleHUD *kHud;

@implementation HWSimpleHUD

+ (id)showHUDAddedTo:(UIView *)view
             message:(NSString *)message
            duration:(NSTimeInterval)duration{
    if (kHud) {
        [kHud hide];
    }
    
    
    if (message.length >0 && [message isKindOfClass:[NSString class]]) {
        return nil;
    }
    HWSimpleHUD *hud = [[HWSimpleHUD alloc] initWithMessage:message];
    kHud = hud;
    if (!view) {
        view = kAppDelegate.window;
    }
    [view addSubview:kHud];
    [kHud mas_makeConstraints:^(MASConstraintMaker *make) {
        make.center.equalTo(view);
        make.left.greaterThanOrEqualTo(view).offset(15);
        make.right.lessThanOrEqualTo(view).offset(-15);
    }];
    [kHud performSelector:@selector(hide) withObject:nil afterDelay:duration inModes:@[NSRunLoopCommonModes]];
//    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(click)];
//    [hud add]
    return kHud;
}

- (instancetype)initWithMessage:(NSString *)message
{
    self = [super init];
    if (self) {
        
        UILabel *label = [[UILabel alloc] init];
        label.text = message;
        label.font = [UIFont systemFontOfSize:16];
        label.numberOfLines = 0;
        label.textColor = ColorWithHex(0xffffff);
        [self addSubview:label];
        
        [label mas_makeConstraints:^(MASConstraintMaker *make) {
            make.edges.equalTo(self).insets(UIEdgeInsetsMake(20, 15, 20, 15));
        }];
        
        self.backgroundColor = ColorWithHexA(0x000000, 0.75);
        self.layer.cornerRadius = 8;
        self.layer.masksToBounds = YES;
    }
    return self;
}

- (void)hide{
    [UIView animateWithDuration:.2 animations:^{
        self.alpha = 0;
    } completion:^(BOOL finished) {
        [self removeFromSuperview];
    }];
}

+ (void)showHUDLoadingAddedTo:(UIView *)view{
    UIView *spView = view?:[UIApplication sharedApplication].keyWindow;
    if ([LSMBProgressHUD HUDForView:spView]) {
        [self hideAllHUDLoadingForView:spView];
    }
    [LSMBProgressHUD showHUDAddedTo:spView animated:YES];
}

+ (void)hideAllHUDLoadingForView:(UIView *)view{
    UIView *spView = view?:[UIApplication sharedApplication].keyWindow;
    [LSMBProgressHUD hideAllHUDsForView:spView animated:YES];
}

@end
