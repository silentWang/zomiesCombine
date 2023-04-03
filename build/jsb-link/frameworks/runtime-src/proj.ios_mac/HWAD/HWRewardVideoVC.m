//
//  HWRewardVideoVC.m
//  
//
//  Created by 杜宾 on 2023/4/3.
//

#import "HWRewardVideoVC.h"
#import <AnyThinkSDK/AnyThinkSDK.h>


@interface HWRewardVideoVC ()<ATAdLoadingDelegate, ATRewardedVideoDelegate>
@property(nonatomic,assign)NSInteger paySuccess;

@end

@implementation HWRewardVideoVC

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor blackColor];
    [self loadATRewardAD];

    // Do any additional setup after loading the view.
}

-(void)loadATRewardAD{

     // 加载激励视频广告
        __HWLoading(self.view);
    [[ATAdManager sharedManager] loadADWithPlacementID:self.placementID extra:nil delegate:self];
}


- (void)showRewardVideoAd
{
  /*
     为了统计场景到达率，相关信息可查阅 https://docs.toponad.com/#/zh-cn/ios/NetworkAccess/scenario/scenario
     在满足广告触发条件时调用“进入广告场景”方法，比如：
     ** 广告场景是在清理结束后弹出广告，则在清理结束时调用；
     * 1、先调用 entryxxx
     * 2、在判断 Ready的状态是否可展示
     * 3、最后调用 show 展示
     */
    [[ATAdManager sharedManager] entryRewardedVideoScenarioWithPlacementID:self.placementID scene:nil];

    // 展示前需判断广告是否填充
    if ([[ATAdManager sharedManager] rewardedVideoReadyForPlacementID:self.placementID]) {
        // 广告已填充，展示广告
        [[ATAdManager sharedManager]showRewardedVideoWithPlacementID:self.placementID scene:nil inViewController:self delegate:self];
    } else {
        // 广告未填充，是否重新加载
    }
}

#pragma mark - loading delegate

//对应用广告位广告加载成功回调
//placementId：广告位Id
-(void) didFinishLoadingADWithPlacementID:(NSString *)placementID {
    __HWLoadingCancel(self.view);
    [self showRewardVideoAd];
    NSLog(@"ATRewardedVideoViewController::didFinishLoadingADWithPlacementID:%@", placementID);
}

//对应广告位广告加载失败回调
//placementId：广告位Id
//adError：广告加载失败信息
-(void) didFailToLoadADWithPlacementID:(NSString*)placementID error:(NSError*)error {
    if (self.playSuccessBlock) {
        self.playSuccessBlock(NO,error.domain);
    }
    [self defaultBackBtnAction];
    NSLog(@"ATRewardedVideoViewController::didFailToLoadADWithPlacementID:%@ error:%@", placementID, error);
}

#pragma mark - showing delegate
//激励视频广告奖激励下发
-(void) rewardedVideoDidRewardSuccessForPlacemenID:(NSString *)placementID extra:(NSDictionary *)extra{
    NSLog(@"ATRewardedVideoViewController::rewardedVideoDidRewardSuccessForPlacemenID:%@ extra:%@",placementID,extra);
    self.paySuccess = 1;
//    [self defaultBackBtnAction];
}

//激励视频广告播放开始
-(void) rewardedVideoDidStartPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
    __HWLoadingCancel(self.view);
    NSLog(@"ATRewardedVideoViewController::rewardedVideoDidStartPlayingForPlacementID:%@ extra:%@", placementID, extra);

}

//激励视频广告播放结束
-(void) rewardedVideoDidEndPlayingForPlacementID:(NSString*)placementID extra:(NSDictionary *)extra {
    NSLog(@"ATRewardedVideoViewController::rewardedVideoDidEndPlayingForPlacementID:%@ extra:%@", placementID, extra);
   
}

//激励视频广告播放失败
-(void) rewardedVideoDidFailToPlayForPlacementID:(NSString*)placementID error:(NSError*)error extra:(NSDictionary *)extra {
    NSLog(@"ATRewardedVideoViewController::rewardedVideoDidFailToPlayForPlacementID:%@ error:%@ extra:%@", placementID, error, extra);
        if (self.playSuccessBlock) {
            self.playSuccessBlock(NO,error.domain);
        }
    [self defaultBackBtnAction];
}

//激励视频广告点击
-(void) rewardedVideoDidClickForPlacementID:(NSString*)placementID extra:(NSDictionary *)extra {
    NSLog(@"ATRewardedVideoViewController::rewardedVideoDidClickForPlacementID:%@ extra:%@", placementID, extra);
}

//激励视频广告关闭
-(void) rewardedVideoDidCloseForPlacementID:(NSString*)placementID rewarded:(BOOL)rewarded extra:(NSDictionary *)extra {
    NSLog(@"ATRewardedVideoViewController::rewardedVideoDidCloseForPlacementID:%@, rewarded:%@ extra:%@", placementID, rewarded ? @"yes" : @"no", extra);
//    [self dismissViewControllerAnimated:NO completion:nil];
    if (_paySuccess == 1) {
        if (self.playSuccessBlock) {
            self.playSuccessBlock(YES,nil);
        }
    }
    [self defaultBackBtnAction];
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

-(void)testATReward{
    [ATAPI setHeaderBiddingTestModeWithDeviceID:@"543B84D4-3F0B-45BB-BD4B-76B152FDDD7F"];
    [ATAPI setDebuggerConfig:^(ATDebuggerConfig * _Nullable debuggerConfig) {
//        debuggerConfig.deviceIdfaStr = XMInfo.IDFA();
        //
        debuggerConfig.netWorkType = ATAdNetWorkMetaType;
        
        
        
        // Meta
        //               debuggerConfig.meta_nativeAdType = ATMetaNativeAdNativeBannerSelfRenderType;
                          debuggerConfig.meta_rewardVideoAdType = ATMetaRewardVideoAdDefaultType;
        
        
        
        //               // admob
        //               debuggerConfig.adMob_nativeAdType = ATAdMobNativeAdPictureType;
//        debuggerConfig.adMob_rewardVideoAdType = ATAdMobRewardVideoAdDefaultType;
        
        //        pangle
//                debuggerConfig.pangle_rewardVideoAdType = ATPangleRewardVideoAdDefaultType;
        
    }];
}

@end
