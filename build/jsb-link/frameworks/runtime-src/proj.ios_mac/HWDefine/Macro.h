//
//  Macro.h
//  hdwinged
//
//  Created by 杜宾 on 2023/3/30.
//

#ifndef Macro_h
#define Macro_h

#define HW_topOnAd_APPID @"a64242a6c20eca"
#define HW_topOnAd_APPkey @"48512db29762ce894edfa9e279614e30"


#define ColorWithHex(str)           [UIColor colorWithRed:((float)((str & 0xFF0000) >> 16))/255.0 green:((float)((str & 0xFF00) >> 8))/255.0 blue:((float)(str & 0xFF))/255.0 alpha:1.0]
#define ColorWithHexA(str,a)        [UIColor colorWithRed:((float)((str & 0xFF0000) >> 16))/255.0 green:((float)((str & 0xFF00) >> 8))/255.0 blue:((float)(str & 0xFF))/255.0 alpha:a]
#define ColorWithRGBA(r,g,b,a)      [UIColor colorWithRed:(float)r/255.0f green:(float)g/255.0f blue:(float)b/255.0f alpha:a]

#define kAppDelegate ((HWAppDelegate *)[UIApplication sharedApplication].delegate)
#define NSLog(msg,...) if(ENABLELOG > 0) NSLog(@" 🌹🌹🌹🌹 %@",[NSString stringWithFormat:msg,##__VA_ARGS__]);

#endif /* Macro_h */
