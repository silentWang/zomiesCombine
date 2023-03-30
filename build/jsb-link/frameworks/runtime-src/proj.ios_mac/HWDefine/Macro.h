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


#define NSLog(msg,...) if(ENABLELOG > 0) NSLog(@" 🌹🌹🌹🌹 %@",[NSString stringWithFormat:msg,##__VA_ARGS__]);

#endif /* Macro_h */
