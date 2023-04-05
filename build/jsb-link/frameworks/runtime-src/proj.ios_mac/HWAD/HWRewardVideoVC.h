//
//  HWRewardVideoVC.h
//  
//
//  Created by 杜宾 on 2023/4/3.
//

#import <UIKit/UIKit.h>
#import <AnyThinkRewardedVideo/AnyThinkRewardedVideo.h>        // 引入头文件



@interface HWRewardVideoVC : UIViewController
@property(nonatomic,copy)void(^playSuccessBlock)(BOOL isPlaySuccess ,NSString *errMessage);

@property (copy, nonatomic) NSString *placementID;

@end


