//
//  ATAd.h
//  AnyThinkSDK
//
//  Created by Martin Lau on 28/06/2018.
//  Copyright © 2018 Martin Lau. All rights reserved.
//

#ifndef ATAd_h
#define ATAd_h
#import "ATPlacementModel.h"
#import "ATUnitGroupModel.h"
@class ATWaterfall;
@protocol ATAd<NSObject>
-(instancetype) initWithPriority:(NSInteger) priority placementModel:(ATPlacementModel*)placementModel requestID:(NSString*)requestID assets:(NSDictionary*)assets unitGroup:(ATUnitGroupModel*)unitGroup finalWaterfall:(ATWaterfall*)finalWaterfall;
-(void) renewAdWithPlacementModel:(ATPlacementModel*)placementModel requestID:(NSString*)requestID;
- (void)releasCustomObject;
@property(nonatomic, readonly) ATPlacementModel *placementModel;
@property(nonatomic, readonly) ATUnitGroupModel *unitGroup;
@property(nonatomic) NSMutableArray<NSDictionary*> *unitGroupInfos;

/**
 Priority is calculate by the index of the unit group in the placement's unit group list; zero is the highest
 */
@property(nonatomic, readonly) NSInteger priority;
@property(nonatomic, readonly) NSInteger priorityLevel;//the order in witch this ad has been requested
@property(nonatomic, readonly) NSString *requestID;

@property(nonatomic, readonly) NSString *originalRequestID;
@property(nonatomic) NSInteger showTimes;
@property(nonatomic, readonly) NSDate *expireDate;
@property(nonatomic, readonly) NSDate *cacheDate;
/**
 * Third-party network native ad object.
 */
@property(nonatomic, readonly) id customObject;
@property(nonatomic, readonly) NSString *unitID;
@property(nonatomic, readonly) NSString *appID;
- (NSString *)ecpm;

@optional
-(BOOL) expired;
-(BOOL) ready;
@property(nonatomic, readonly) BOOL filledByReady;
@property(nonatomic, readonly) BOOL filledByAutoloadOnClose;
@property(nonatomic, readonly) BOOL fillByAutorefresh;
@property(nonatomic) BOOL defaultPlayIfRequired;
@property(nonatomic, readonly) BOOL renewed;
@property(nonatomic, readonly) NSString *price;

@property (nonatomic, strong) NSString *sortPriorityLevel;

@property(nonatomic, readonly) NSString *bidId;
@property(nonatomic, readonly) NSString *tpBidId;
@property(nonatomic, readonly, weak) ATWaterfall *finalWaterfall;
@property(nonatomic, readonly) NSInteger autoReqType;
@property(nonatomic) BOOL adReportClicked;
@end

#endif /* ATAd_h */
