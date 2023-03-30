//
//  ATBidInfo.h
//  AnyThinkSDK
//
//  Created by Martin Lau on 2020/4/27.
//  Copyright © 2020 AnyThink. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ATModel.h"

@class ATUnitGroupModel;

#define kATBiddingInitiatingFailedCode -2
#define kATBiddingNetworkTimeoutCode -3
#define KATBiddingS2SConnectionErrorCode -4
#define kATBiddingBiddingFailedByCapCode -5
#define kATBiddingBiddingFailedByPacingCode -6
#define kATBiddingBiddingFailedIntervalCode -7
#define kATBiddingBiddingFailedByExcludedCode -8
#define kATBiddingBiddingFailedIntegrationErrorCode -9

typedef NS_ENUM(NSInteger, ATHBAdvanceRequestType) {
    ATHBAdvanceRequestUnknownType = 0,
    ATHBAdvanceRequestYesType,
    ATHBAdvanceRequestNOType,
};


@interface ATBidInfo : ATModel

@property(nonatomic, copy) NSDictionary *bidResult;

@property(nonatomic, readonly) NSDate *expireDate;
@property(nonatomic, readonly) NSDictionary *offerDataDict;
@property(nonatomic, readonly) NSString *bidId;
@property(nonatomic, readonly) NSString *tpBidId;

@property(nonatomic, strong) NSString *originPrice;

@property (nonatomic, strong) NSString *sortPriorityLevel;

@property(nonatomic, strong) NSString *price;
@property(nonatomic, readwrite) NSString *ecpmApi;
@property(nonatomic, readwrite) NSString *precision;
@property(nonatomic, strong) NSString *curRate;
@property(nonatomic, readonly) ATBiddingCurrencyType currencyType;
@property(nonatomic, readonly) id customObject;
@property(nonatomic, readonly) NSString *placementID;
@property(nonatomic, readonly) NSString *unitGroupUnitID;
@property(nonatomic, assign) NSInteger networkFirmID;
@property(nonatomic, readonly) NSString *adapterClassString;
@property(nonatomic, readonly) NSString *lURL;
@property(nonatomic, readonly) NSString *nURL;
@property(nonatomic, readonly) NSString *bURL;
@property(nonatomic, readonly) NSString *bURLWin;
@property(nonatomic, readonly) NSString *reqURL;
@property(nonatomic, readonly) BOOL bidResultCanRequest;

@property(nonatomic, readwrite) NSTimeInterval bidTime;
@property(nonatomic, readwrite) BOOL bidPriceSmallerlast;
@property(nonatomic, readwrite) BOOL bidResultIsFailed;
@property(nonatomic, readwrite) NSError *error;
@property(nonatomic, readonly, getter=isValid) BOOL valid;
@property(nonatomic, readonly, getter=isExpired) BOOL expired;
@property(nonatomic, readonly, getter=isSendNotif) BOOL sendNotif;
@property(nonatomic, readonly, getter=isNoPrice) BOOL noPrice;
@property(nonatomic, readonly, getter=isLoaded) BOOL loaded;
// for load success retry send tk&da auto_req
@property(nonatomic, readwrite) BOOL isLoadSuccessRetry;
@property(nonatomic, readonly) ATUnitGroupType unitGroupType;

@property(nonatomic, assign) ATHBAdvanceRequestType HBAdvanceRequestType;

@property(nonatomic, assign) BOOL isC2SNotNeedLoad;

@property(nonatomic, strong) id c2sCustomObject;

@property(nonatomic, strong) id c2SCustomEvent;

// for send win notification
@property(nonatomic, strong) NSString *nextUGPrice;

/// C2S
+(instancetype) bidInfoC2SWithPlacementID:(NSString*)placementID unitGroupUnitID:(NSString*)unitGroupUnitID adapterClassString:(NSString *)adapterClassString token:(NSString*)token price:(NSString*)price currencyType:(ATBiddingCurrencyType)currencyType expirationInterval:(NSTimeInterval)expirationInterval customObject:(id)customObject;

// only for Adx DirectOffer
@property(nonatomic, readwrite) NSString *offerID;
@property(nonatomic, readwrite) NSString *offerDspID;


/// S2S
- (instancetype)initS2SWithDictionary:(NSDictionary *)dictionary
                       placementID:(NSString *)placementID
                    unitGroupModel:(ATUnitGroupModel *)unitGroupModel
                      currencyType:(ATBiddingCurrencyType)currencyType;

/// adx cache 
-(instancetype) initWithCacheDictionary:(NSDictionary*)dictionary;

-(void) invalidate;
-(void) hasBeenSendNotif;
- (void)hasBeenLoaded;
-(NSDictionary *) serializationToDictionary;

- (NSString *)getBidInfoPrice;

- (NSString *)getBidInfoSortPriorityLevel;

+ (NSString *)getExchRateC2U :(NSString *)placementID;

- (void)saveOfferModelDspID:(NSString *)offerDspID withOfferID:(NSString *)offerID;

- (void)releasCustomObject;
@end
