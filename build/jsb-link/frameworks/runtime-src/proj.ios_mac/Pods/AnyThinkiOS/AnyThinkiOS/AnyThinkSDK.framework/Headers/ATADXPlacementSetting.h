//
//  ATADXPlacementSetting.h
//  AnyThinkSDK
//
//  Created by stephen on 20/8/2020.
//  Copyright © 2020 AnyThink. All rights reserved.
//

#import "ATOfferSetting.h"

typedef NS_ENUM(NSInteger, ATAdOfferInterType) {
    ATAdOfferInterTypeFull = 1,
    ATAdOfferInterTypeHalf
};

typedef NS_ENUM(NSInteger, ATDirectOfferUnitType) {
    ATDirectOfferUnitPictureType = 0,
    ATDirectOfferUnitVideoType = 1,
};

@interface ATADXPlacementSetting : ATOfferSetting
-(instancetype) initWithPlacementDictionary:(NSDictionary *)placementDictionary infoDictionary:(NSDictionary *)infoDictionary  placementID:(NSString*)placementID;

+(instancetype) mockSetting;

@property(nonatomic, assign) ATAdOfferInterType interType;

@property(nonatomic, assign) ATDirectOfferUnitType unitType;



@end
