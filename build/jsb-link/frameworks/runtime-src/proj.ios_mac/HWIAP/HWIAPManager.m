//
//  HWIAPManager.m
//  hdwinged-mobile
//
//  Created by 杜宾 on 2023/4/7.
//

#import "HWIAPManager.h"
#import <StoreKit/StoreKit.h>

@interface HWIAPManager()<SKPaymentTransactionObserver,SKProductsRequestDelegate>
//  用户要购买的商品id
@property (nonatomic ,copy) NSString *appleProductId;
@end

@implementation HWIAPManager
- (instancetype)init
{
    self = [super init];
    if (self) {
        [[SKPaymentQueue defaultQueue] addTransactionObserver:self];
    }
    return self;
}

- (void)dealloc{
    //移除支付监听
    [[SKPaymentQueue defaultQueue] removeTransactionObserver:self];
    [super dealloc];
}

+(void)buyAppProductId:(NSString *)appleProductId withIAPSuccess:(void (^)(BOOL))block{
    
    [HWIAPManager shareInstence].appleProductId = appleProductId;
    [HWIAPManager shareInstence].payBlock = block;
    [HWIAPManager cs_StarBuyProduct];
}
#pragma mark -- 开始购买
+(void)cs_StarBuyProduct{
    if ([SKPaymentQueue canMakePayments]) {
        NSLog(@"允许程序内购买");
            [HWIAPManager CSRequestProductData:[HWIAPManager shareInstence].appleProductId];
    }else{
        NSLog(@"手机没有打开程序内付费购买");
    }
}

+(void)CSRequestProductData:(NSString *)appleProductId{
    if ([SKPaymentQueue canMakePayments]) {
        //     step 1 ：验证该商品是否可以购买
            if (!appleProductId || ![appleProductId isKindOfClass:[NSString class]] || appleProductId.length <= 0) {
                NSLog(@"未获取到App Store对应的商品id");
                return;
            }
//        开始购买
        __HWLoading(nil);
//        [CSIAPManager CSSaveBuyProductInfo];
        // 能够销售的商品
        dispatch_async(dispatch_get_global_queue(0, 0), ^{
            NSSet *set = [[NSSet alloc] initWithArray:@[appleProductId]];
            // "异步"询问苹果能否销售
            SKProductsRequest *request = [[SKProductsRequest alloc] initWithProductIdentifiers:set];
            
            request.delegate = [HWIAPManager shareInstence];
            
            // 启动请求
            [request start];
        });
    }else{
        NSLog(@"手机没有打开程序内付费购买");
    }
}

#pragma mark -  开始购买之后会先查询该商品
/**
*  获取询问结果，成功采取操作把商品加入可售商品字典里
*
*  @param request  请求内容
*  @param response 返回的结果
*/
- (void)productsRequest:(nonnull SKProductsRequest *)request didReceiveResponse:(nonnull SKProductsResponse *)response {
    
    NSLog(@"-----------收到产品反馈信息--------------");
    NSArray *myProduct = response.products;
    NSLog(@"产品Product ID:%@",response.invalidProductIdentifiers);
    NSLog(@"产品付费数量: %d", (int)[myProduct count]);
    
    if(myProduct.count >0){
        for (SKProduct *product in myProduct) {
            NSLog(@"product info");
            NSLog(@"SKProduct 描述信息%@", [product description]);
            NSLog(@"产品标题 %@" , product.localizedTitle);
            NSLog(@"i产品描述信息: %@" , product.localizedDescription);
            NSLog(@"价格: %@" , product.price);
            NSLog(@"Product id: %@" , product.productIdentifier);
//                                                                                      }];
            if ([product.productIdentifier isEqualToString:[HWIAPManager shareInstence].appleProductId]) {
                dispatch_async(dispatch_get_main_queue(), ^{
                    // 要购买产品(店员给用户开了个小票)
                    SKPayment *payment = [SKPayment paymentWithProduct:product];
                    // 去收银台排队，准备购买(异步网络)
                    [[SKPaymentQueue defaultQueue] addPayment:payment];
                });
            }else{
                dispatch_async(dispatch_get_main_queue(), ^{
                    __HWLoadingCancel(nil);
                });
            }
        }
    }else{
        dispatch_async(dispatch_get_main_queue(), ^{
            __HWLoadingCancel(nil);
        });
        NSLog(@"商品不存在，请查询oc后台以及appstore后台或者银行协议是否配置");
    }
}

-(void)request:(SKRequest *)request didFailWithError:(NSError *)error
{
    
   dispatch_async(dispatch_get_main_queue(), ^{
       NSLog(@"查询商品失败 ---- %@",error.description);
//        更新本地缓存信息、
          __HWLoadingCancel(nil);
   });
}

#pragma mark  -- SKPaymentTransactionObserver,SKProductsRequestDelegate  购买信息回调
/**
*  监测购买队列的变化
*
*  @param queue        队列
*  @param transactions 交易
*/
- (void)paymentQueue:(nonnull SKPaymentQueue *)queue updatedTransactions:(nonnull NSArray<SKPaymentTransaction *> *)transactions {
    // 处理结果
    NSLog(@"%@",transactions);
    for (SKPaymentTransaction *transaction in transactions) {
        NSLog(@"队列状态变化 %@", transaction);
        switch (transaction.transactionState) {
            case SKPaymentTransactionStatePurchased:
            {
//                购买完成
//                [self CS_SKPaymentTransactionStatePurchased:transaction];
            }
                break;
            case SKPaymentTransactionStateFailed:
            {
                __HWLoadingCancel(nil);
//                失败，结束掉订单，更新本地缓存信息
                [[SKPaymentQueue defaultQueue] finishTransaction:transaction];
//
                if (transaction.error.code == SKErrorPaymentCancelled) {
//                    cancel
//
                    
                }else{
//                    fail
                   
                }
//
            }
                break;
            case SKPaymentTransactionStatePurchasing:
            {
                NSLog(@"-----商品添加进列表 --------");
            }
                break;
            case SKPaymentTransactionStateRestored:
            {
                __HWLoadingCancel(nil);
                NSLog(@"-----已经购买过该商品 消耗性商品不需要恢复--------");
                // 将交易从交易队列中删除
//                [[SKPaymentQueue defaultQueue] finishTransaction:transaction];
                
            }
                break;
            case SKPaymentTransactionStateDeferred:
            {
                __HWLoadingCancel(nil);
                NSLog(@"-----最终状态未确定--------");
                // 将交易从交易队列中删除
                [[SKPaymentQueue defaultQueue] finishTransaction:transaction];
            }
                break;
            default:
                break;
        }
    }
}

@end
