//
//  HWInterstitialVC.m
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/3.
//

#import "HWInterstitialVC.h"

@interface HWInterstitialVC ()<ATAdLoadingDelegate, ATInterstitialDelegate>  

@end

@implementation HWInterstitialVC

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}
-(void)loadATRewardAD{

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

- (void)didFinishLoadingADSourceWithPlacementID:(NSString *)placementID extra:(NSDictionary*)extra{
}
-(void) didFailToLoadADWithPlacementID:(NSString*)placementID error:(NSError*)error {

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
