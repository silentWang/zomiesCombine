//
//  HWAppDelegate.h
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import <UIKit/UIKit.h>

@class RootViewController;
@interface HWAppDelegate : UIResponder<UIApplicationDelegate>
@property (nonatomic, strong) UIWindow *window;
@property(nonatomic, readonly) RootViewController* viewController;

@end


