//
//  HWInterstitialVC.m
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import "HWInterstitialVC.h"
//#import ""

@interface HWInterstitialVC ()<ATAdLoadingDelegate, ATInterstitialDelegate>  

@end

@implementation HWInterstitialVC

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [self loadATInterstitialAD];
}
-(void)loadATInterstitialAD{

     // 加载激励视频广告
        __HWLoading(self.view);
    // 加载插屏广告
    [[ATAdManager sharedManager] loadADWithPlacementID:self.placementID extra:nil delegate:self];
    
}
- (void)showInterstitialAd
{
    /*
        为了统计场景到达率，相关信息可查阅 https://docs.toponad.com/#/zh-cn/ios/NetworkAccess/scenario/scenario
        在满足广告触发条件时调用“进入广告场景”方法，比如：
        ** 广告场景是在清理结束后弹出广告，则在清理结束时调用；
        * 1、先调用 entryxxx
        * 2、在判断 Ready的状态是否可展示
        * 3、最后调用 show 展示
    */
    [[ATAdManager sharedManager] entryInterstitialScenarioWithPlacementID:self.placementID scene:nil];

    // 展示前需判断广告是否有准备好
    if ([[ATAdManager sharedManager] interstitialReadyForPlacementID:self.placementID]) {
            // 广告已经准备好，展示广告
        [[ATAdManager sharedManager] showInterstitialWithPlacementID:self.placementID inViewController:self delegate:self];
    } else {
            // 广告未准备好
    }
}

// MARK: ATAdLoadingDelegate

/// Callback when the successful loading of the ad
- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID{
    NSLog(@" Callback when the successful loading of the ad  广告加载成功的回调");
    __HWLoadingCancel(self.view);
    [self showInterstitialAd];

}

/// Callback of ad loading failure
- (void)didFailToLoadADWithPlacementID:(NSString*)placementID
                                 error:(NSError*)error{
    NSLog(@" Callback when the successful loading of the ad  广告加载失败的回调");

}
/// Ad start load
- (void)didStartLoadingADSourceWithPlacementID:(NSString *)placementID
                                         extra:(NSDictionary*)extra{
    NSLog(@" Ad start load  广告开始加载");

}
/// Ad load success
- (void)didFinishLoadingADSourceWithPlacementID:(NSString *)placementID
                                          extra:(NSDictionary*)extra{
    NSLog(@" Ad load success  广告加载成功");

}
/// Ad load fail
- (void)didFailToLoadADSourceWithPlacementID:(NSString*)placementID
                                       extra:(NSDictionary*)extra
                                       error:(NSError*)error{
    NSLog(@" Ad load fail 广告加载失败");
    
    dispatch_sync(dispatch_get_main_queue(), ^{
        __HWLoadingCancel(self.view);
        [self defaultBackBtnAction];
    });
}


// MARK: ATInterstitialDelegate
/// Interstitial ad displayed successfully  显示成功
- (void)interstitialDidShowForPlacementID:(NSString *)placementID
                                    extra:(NSDictionary *)extrap{
    NSLog(@"Interstitial ad displayed successfully  显示成功");
    
}

/// Interstitial ad clicked 点击
- (void)interstitialDidClickForPlacementID:(NSString *)placementID
                                     extra:(NSDictionary *)extra{
    NSLog(@" Interstitial ad clicked 点击");

    
}

/// Interstitial ad closed 关闭
- (void)interstitialDidCloseForPlacementID:(NSString *)placementID
                                     extra:(NSDictionary *)extra{
    NSLog(@"Interstitial ad closed 关闭");

}

/// Interstitial ad display failed 播放失败
- (void)interstitialFailedToShowForPlacementID:(NSString *)placementID
                                         error:(NSError*)error
                                         extra:(NSDictionary *)extra{
    NSLog(@" Interstitial ad display failed 播放失败");

}

/// Interstitial video ad playback start  开始播放
- (void)interstitialDidStartPlayingVideoForPlacementID:(NSString *)placementID
                                                 extra:(NSDictionary *)extra{
    NSLog(@" Interstitial video ad playback start  开始播放");

}

/// Interstitial playback end  播放结束
- (void)interstitialDidEndPlayingVideoForPlacementID:(NSString *)placementID
                                               extra:(NSDictionary *)extra{
    NSLog(@" Interstitial playback end  播放结束");

}

/// Interstitial playback fail  回放失败
- (void)interstitialDidFailToPlayVideoForPlacementID:(NSString *)placementID
                                               error:(NSError*)error
                                               extra:(NSDictionary *)extra{
    NSLog(@" nterstitial playback fail  回放失败");
}

-(void)defaultBackBtnAction{
//    self.customNavigationBar.set

//    self.customNavigationBar.titleLabel.text = @""
    //lastVC当前视图的上一层
     UIViewController *lastVC = self.presentingViewController;
     while (lastVC.presentingViewController)
  {//一直找到最顶层
        lastVC = lastVC.presentingViewController;
  }
      [lastVC dismissViewControllerAnimated:YES completion:nil];

}
/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
