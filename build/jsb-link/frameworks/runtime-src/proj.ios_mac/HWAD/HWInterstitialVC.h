//
//  HWInterstitialVC.h
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import <UIKit/UIKit.h>
#import <AnyThinkInterstitial/AnyThinkInterstitial.h>        // 引入头文件



@interface HWInterstitialVC : UIViewController
@property(nonatomic,copy)void(^playSuccessBlock)(BOOL isPlaySuccess ,NSString *errMessage);
@property (copy, nonatomic) NSString *placementID;
@end


