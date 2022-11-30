"use strict";
cc._RF.push(module, '7de6ch9oxJOZopj+KFc/W5J', 'DB');
// script/game/DB.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_slot = exports.DB_achievementAwards = exports.DB_airdrop = exports.DB_buyButton = exports.DB_droneRewards = exports.DB_invite = exports.DB_zombie = exports.DB_turntable = exports.DB_spinLevel = exports.DB_shopSort = exports.DB_plant = exports.DB_levelupGem = exports.DB_level = void 0;
// ["level", "wave", "waveCount", "zombieID1", "zombieCount1", "zombieID2", "zombieCount2"]
exports.DB_level = {
    "1_1": [1, 1, 3, 1, 5, 2, 1],
    "1_2": [1, 2, 3, 1, 7, 2, 1],
    "1_3": [1, 3, 3, 101, 1, 2, 0],
    "2_1": [2, 1, 4, 2, 5, 3, 1],
    "2_2": [2, 2, 4, 2, 7, 3, 1],
    "2_3": [2, 3, 4, 2, 9, 3, 1],
    "2_4": [2, 4, 4, 102, 1, 3, 0],
    "3_1": [3, 1, 5, 3, 5, 4, 1],
    "3_2": [3, 2, 5, 3, 7, 4, 1],
    "3_3": [3, 3, 5, 3, 9, 4, 1],
    "3_4": [3, 4, 5, 3, 11, 4, 1],
    "3_5": [3, 5, 5, 103, 1, 4, 0],
    "4_1": [4, 1, 5, 4, 5, 5, 1],
    "4_2": [4, 2, 5, 4, 7, 5, 1],
    "4_3": [4, 3, 5, 4, 9, 5, 1],
    "4_4": [4, 4, 5, 4, 11, 5, 1],
    "4_5": [4, 5, 5, 104, 1, 5, 0],
    "5_1": [5, 1, 5, 5, 5, 6, 1],
    "5_2": [5, 2, 5, 5, 7, 6, 1],
    "5_3": [5, 3, 5, 5, 9, 6, 1],
    "5_4": [5, 4, 5, 5, 11, 6, 1],
    "5_5": [5, 5, 5, 105, 1, 6, 0],
    "6_1": [6, 1, 5, 6, 5, 7, 1],
    "6_2": [6, 2, 5, 6, 7, 7, 1],
    "6_3": [6, 3, 5, 6, 9, 7, 1],
    "6_4": [6, 4, 5, 6, 11, 7, 1],
    "6_5": [6, 5, 5, 106, 1, 7, 0],
    "7_1": [7, 1, 5, 7, 5, 8, 1],
    "7_2": [7, 2, 5, 7, 7, 8, 1],
    "7_3": [7, 3, 5, 7, 9, 8, 1],
    "7_4": [7, 4, 5, 7, 11, 8, 1],
    "7_5": [7, 5, 5, 107, 1, 8, 0],
    "8_1": [8, 1, 5, 8, 5, 9, 1],
    "8_2": [8, 2, 5, 8, 7, 9, 1],
    "8_3": [8, 3, 5, 8, 9, 9, 1],
    "8_4": [8, 4, 5, 8, 11, 9, 1],
    "8_5": [8, 5, 5, 108, 1, 9, 0],
    "9_1": [9, 1, 5, 9, 5, 10, 1],
    "9_2": [9, 2, 5, 9, 7, 10, 1],
    "9_3": [9, 3, 5, 9, 9, 10, 1],
    "9_4": [9, 4, 5, 9, 11, 10, 1],
    "9_5": [9, 5, 5, 109, 1, 10, 0],
    "10_1": [10, 1, 5, 10, 5, 11, 1],
    "10_2": [10, 2, 5, 10, 7, 11, 1],
    "10_3": [10, 3, 5, 10, 9, 11, 1],
    "10_4": [10, 4, 5, 10, 11, 11, 1],
    "10_5": [10, 5, 5, 110, 1, 11, 0],
    "11_1": [11, 1, 5, 11, 5, 12, 1],
    "11_2": [11, 2, 5, 11, 7, 12, 1],
    "11_3": [11, 3, 5, 11, 9, 12, 1],
    "11_4": [11, 4, 5, 11, 11, 12, 1],
    "11_5": [11, 5, 5, 111, 1, 12, 0],
    "12_1": [12, 1, 5, 12, 5, 13, 1],
    "12_2": [12, 2, 5, 12, 7, 13, 1],
    "12_3": [12, 3, 5, 12, 9, 13, 1],
    "12_4": [12, 4, 5, 12, 11, 13, 1],
    "12_5": [12, 5, 5, 112, 1, 13, 0],
    "13_1": [13, 1, 5, 13, 5, 14, 1],
    "13_2": [13, 2, 5, 13, 7, 14, 1],
    "13_3": [13, 3, 5, 13, 9, 14, 1],
    "13_4": [13, 4, 5, 13, 11, 14, 1],
    "13_5": [13, 5, 5, 113, 1, 14, 0],
    "14_1": [14, 1, 5, 14, 5, 15, 1],
    "14_2": [14, 2, 5, 14, 7, 15, 1],
    "14_3": [14, 3, 5, 14, 9, 15, 1],
    "14_4": [14, 4, 5, 14, 11, 15, 1],
    "14_5": [14, 5, 5, 114, 1, 15, 0],
    "15_1": [15, 1, 5, 15, 5, 16, 1],
    "15_2": [15, 2, 5, 15, 7, 16, 1],
    "15_3": [15, 3, 5, 15, 9, 16, 1],
    "15_4": [15, 4, 5, 15, 11, 16, 1],
    "15_5": [15, 5, 5, 115, 1, 16, 0],
    "16_1": [16, 1, 5, 16, 5, 17, 1],
    "16_2": [16, 2, 5, 16, 7, 17, 1],
    "16_3": [16, 3, 5, 16, 9, 17, 1],
    "16_4": [16, 4, 5, 16, 11, 17, 1],
    "16_5": [16, 5, 5, 116, 1, 17, 0],
    "17_1": [17, 1, 5, 17, 5, 18, 1],
    "17_2": [17, 2, 5, 17, 7, 18, 1],
    "17_3": [17, 3, 5, 17, 9, 18, 1],
    "17_4": [17, 4, 5, 17, 11, 18, 1],
    "17_5": [17, 5, 5, 117, 1, 18, 0],
    "18_1": [18, 1, 5, 18, 5, 19, 1],
    "18_2": [18, 2, 5, 18, 7, 19, 1],
    "18_3": [18, 3, 5, 18, 9, 19, 1],
    "18_4": [18, 4, 5, 18, 11, 19, 1],
    "18_5": [18, 5, 5, 118, 1, 19, 0],
    "19_1": [19, 1, 5, 19, 5, 20, 1],
    "19_2": [19, 2, 5, 19, 7, 20, 1],
    "19_3": [19, 3, 5, 19, 9, 20, 1],
    "19_4": [19, 4, 5, 19, 11, 20, 1],
    "19_5": [19, 5, 5, 119, 1, 20, 0],
    "20_1": [20, 1, 5, 20, 5, 21, 1],
    "20_2": [20, 2, 5, 20, 7, 21, 1],
    "20_3": [20, 3, 5, 20, 9, 21, 1],
    "20_4": [20, 4, 5, 20, 11, 21, 1],
    "20_5": [20, 5, 5, 120, 1, 21, 0],
    "21_1": [21, 1, 5, 21, 5, 22, 1],
    "21_2": [21, 2, 5, 21, 7, 22, 1],
    "21_3": [21, 3, 5, 21, 9, 22, 1],
    "21_4": [21, 4, 5, 21, 11, 22, 1],
    "21_5": [21, 5, 5, 121, 1, 22, 0],
    "22_1": [22, 1, 5, 22, 5, 23, 1],
    "22_2": [22, 2, 5, 22, 7, 23, 1],
    "22_3": [22, 3, 5, 22, 9, 23, 1],
    "22_4": [22, 4, 5, 22, 11, 23, 1],
    "22_5": [22, 5, 5, 122, 1, 23, 0],
    "23_1": [23, 1, 5, 23, 5, 24, 1],
    "23_2": [23, 2, 5, 23, 7, 24, 1],
    "23_3": [23, 3, 5, 23, 9, 24, 1],
    "23_4": [23, 4, 5, 23, 11, 24, 1],
    "23_5": [23, 5, 5, 123, 1, 24, 0],
    "24_1": [24, 1, 5, 24, 5, 25, 1],
    "24_2": [24, 2, 5, 24, 7, 25, 1],
    "24_3": [24, 3, 5, 24, 9, 25, 1],
    "24_4": [24, 4, 5, 24, 11, 25, 1],
    "24_5": [24, 5, 5, 124, 1, 25, 0],
    "25_1": [25, 1, 5, 25, 5, 26, 1],
    "25_2": [25, 2, 5, 25, 7, 26, 1],
    "25_3": [25, 3, 5, 25, 9, 26, 1],
    "25_4": [25, 4, 5, 25, 11, 26, 1],
    "25_5": [25, 5, 5, 125, 1, 26, 0],
    "26_1": [26, 1, 5, 26, 5, 27, 1],
    "26_2": [26, 2, 5, 26, 7, 27, 1],
    "26_3": [26, 3, 5, 26, 9, 27, 1],
    "26_4": [26, 4, 5, 26, 11, 27, 1],
    "26_5": [26, 5, 5, 126, 1, 27, 0],
    "27_1": [27, 1, 5, 27, 5, 28, 1],
    "27_2": [27, 2, 5, 27, 7, 28, 1],
    "27_3": [27, 3, 5, 27, 9, 28, 1],
    "27_4": [27, 4, 5, 27, 11, 28, 1],
    "27_5": [27, 5, 5, 127, 1, 28, 0],
    "28_1": [28, 1, 5, 28, 5, 29, 1],
    "28_2": [28, 2, 5, 28, 7, 29, 1],
    "28_3": [28, 3, 5, 28, 9, 29, 1],
    "28_4": [28, 4, 5, 28, 11, 29, 1],
    "28_5": [28, 5, 5, 128, 1, 29, 0],
    "29_1": [29, 1, 5, 29, 5, 30, 1],
    "29_2": [29, 2, 5, 29, 7, 30, 1],
    "29_3": [29, 3, 5, 29, 9, 30, 1],
    "29_4": [29, 4, 5, 29, 11, 30, 1],
    "29_5": [29, 5, 5, 129, 1, 30, 0],
    "30_1": [30, 1, 5, 30, 5, 31, 1],
    "30_2": [30, 2, 5, 30, 7, 31, 1],
    "30_3": [30, 3, 5, 30, 9, 31, 1],
    "30_4": [30, 4, 5, 30, 11, 31, 1],
    "30_5": [30, 5, 5, 130, 1, 31, 0],
    "31_1": [31, 1, 5, 31, 5, 32, 1],
    "31_2": [31, 2, 5, 31, 7, 32, 1],
    "31_3": [31, 3, 5, 31, 9, 32, 1],
    "31_4": [31, 4, 5, 31, 11, 32, 1],
    "31_5": [31, 5, 5, 131, 1, 32, 0],
    "32_1": [32, 1, 5, 32, 5, 33, 1],
    "32_2": [32, 2, 5, 32, 7, 33, 1],
    "32_3": [32, 3, 5, 32, 9, 33, 1],
    "32_4": [32, 4, 5, 32, 11, 33, 1],
    "32_5": [32, 5, 5, 132, 1, 33, 0],
    "33_1": [33, 1, 5, 33, 5, 34, 1],
    "33_2": [33, 2, 5, 33, 7, 34, 1],
    "33_3": [33, 3, 5, 33, 9, 34, 1],
    "33_4": [33, 4, 5, 33, 11, 34, 1],
    "33_5": [33, 5, 5, 133, 1, 34, 0],
    "34_1": [34, 1, 5, 34, 5, 35, 1],
    "34_2": [34, 2, 5, 34, 7, 35, 1],
    "34_3": [34, 3, 5, 34, 9, 35, 1],
    "34_4": [34, 4, 5, 34, 11, 35, 1],
    "34_5": [34, 5, 5, 134, 1, 35, 0],
    "35_1": [35, 1, 5, 35, 5, 36, 1],
    "35_2": [35, 2, 5, 35, 7, 36, 1],
    "35_3": [35, 3, 5, 35, 9, 36, 1],
    "35_4": [35, 4, 5, 35, 11, 36, 1],
    "35_5": [35, 5, 5, 135, 1, 36, 0],
    "36_1": [36, 1, 5, 36, 5, 37, 1],
    "36_2": [36, 2, 5, 36, 7, 37, 1],
    "36_3": [36, 3, 5, 36, 9, 37, 1],
    "36_4": [36, 4, 5, 36, 11, 37, 1],
    "36_5": [36, 5, 5, 136, 1, 37, 0],
    "37_1": [37, 1, 5, 37, 5, 38, 1],
    "37_2": [37, 2, 5, 37, 7, 38, 1],
    "37_3": [37, 3, 5, 37, 9, 38, 1],
    "37_4": [37, 4, 5, 37, 11, 38, 1],
    "37_5": [37, 5, 5, 137, 1, 38, 0],
    "38_1": [38, 1, 5, 38, 5, 39, 1],
    "38_2": [38, 2, 5, 38, 7, 39, 1],
    "38_3": [38, 3, 5, 38, 9, 39, 1],
    "38_4": [38, 4, 5, 38, 11, 39, 1],
    "38_5": [38, 5, 5, 138, 1, 39, 0],
    "39_1": [39, 1, 5, 39, 5, 40, 1],
    "39_2": [39, 2, 5, 39, 7, 40, 1],
    "39_3": [39, 3, 5, 39, 9, 40, 1],
    "39_4": [39, 4, 5, 39, 11, 40, 1],
    "39_5": [39, 5, 5, 139, 1, 40, 0],
    "40_1": [40, 1, 5, 40, 5, 41, 1],
    "40_2": [40, 2, 5, 40, 7, 41, 1],
    "40_3": [40, 3, 5, 40, 9, 41, 1],
    "40_4": [40, 4, 5, 40, 11, 41, 1],
    "40_5": [40, 5, 5, 140, 1, 41, 0],
    "41_1": [41, 1, 5, 41, 5, 42, 1],
    "41_2": [41, 2, 5, 41, 7, 42, 1],
    "41_3": [41, 3, 5, 41, 9, 42, 1],
    "41_4": [41, 4, 5, 41, 11, 42, 1],
    "41_5": [41, 5, 5, 141, 1, 42, 0],
    "42_1": [42, 1, 5, 42, 5, 43, 1],
    "42_2": [42, 2, 5, 42, 7, 43, 1],
    "42_3": [42, 3, 5, 42, 9, 43, 1],
    "42_4": [42, 4, 5, 42, 11, 43, 1],
    "42_5": [42, 5, 5, 142, 1, 43, 0],
    "43_1": [43, 1, 5, 43, 5, 44, 1],
    "43_2": [43, 2, 5, 43, 7, 44, 1],
    "43_3": [43, 3, 5, 43, 9, 44, 1],
    "43_4": [43, 4, 5, 43, 11, 44, 1],
    "43_5": [43, 5, 5, 143, 1, 44, 0],
    "44_1": [44, 1, 5, 44, 5, 45, 1],
    "44_2": [44, 2, 5, 44, 7, 45, 1],
    "44_3": [44, 3, 5, 44, 9, 45, 1],
    "44_4": [44, 4, 5, 44, 11, 45, 1],
    "44_5": [44, 5, 5, 144, 1, 45, 0],
    "45_1": [45, 1, 5, 45, 5, 46, 1],
    "45_2": [45, 2, 5, 45, 7, 46, 1],
    "45_3": [45, 3, 5, 45, 9, 46, 1],
    "45_4": [45, 4, 5, 45, 11, 46, 1],
    "45_5": [45, 5, 5, 145, 1, 46, 0],
    "46_1": [46, 1, 5, 46, 5, 47, 1],
    "46_2": [46, 2, 5, 46, 7, 47, 1],
    "46_3": [46, 3, 5, 46, 9, 47, 1],
    "46_4": [46, 4, 5, 46, 11, 47, 1],
    "46_5": [46, 5, 5, 146, 1, 47, 0],
    "47_1": [47, 1, 5, 47, 5, 48, 1],
    "47_2": [47, 2, 5, 47, 7, 48, 1],
    "47_3": [47, 3, 5, 47, 9, 48, 1],
    "47_4": [47, 4, 5, 47, 11, 48, 1],
    "47_5": [47, 5, 5, 147, 1, 48, 0],
    "48_1": [48, 1, 5, 48, 5, 49, 1],
    "48_2": [48, 2, 5, 48, 7, 49, 1],
    "48_3": [48, 3, 5, 48, 9, 49, 1],
    "48_4": [48, 4, 5, 48, 11, 49, 1],
    "48_5": [48, 5, 5, 148, 1, 49, 0],
    "49_1": [49, 1, 5, 49, 5, 50, 1],
    "49_2": [49, 2, 5, 49, 7, 50, 1],
    "49_3": [49, 3, 5, 49, 9, 50, 1],
    "49_4": [49, 4, 5, 49, 11, 50, 1],
    "49_5": [49, 5, 5, 149, 1, 50, 0],
    "50_1": [50, 1, 5, 50, 5, 51, 1],
    "50_2": [50, 2, 5, 50, 7, 51, 1],
    "50_3": [50, 3, 5, 50, 9, 51, 1],
    "50_4": [50, 4, 5, 50, 11, 51, 1],
    "50_5": [50, 5, 5, 150, 1, 51, 0],
    "51_1": [51, 1, 5, 51, 5, 52, 1],
    "51_2": [51, 2, 5, 51, 7, 52, 1],
    "51_3": [51, 3, 5, 51, 9, 52, 1],
    "51_4": [51, 4, 5, 51, 11, 52, 1],
    "51_5": [51, 5, 5, 151, 1, 52, 0],
    "52_1": [52, 1, 5, 52, 5, 53, 1],
    "52_2": [52, 2, 5, 52, 7, 53, 1],
    "52_3": [52, 3, 5, 52, 9, 53, 1],
    "52_4": [52, 4, 5, 52, 11, 53, 1],
    "52_5": [52, 5, 5, 152, 1, 53, 0],
    "53_1": [53, 1, 5, 53, 5, 54, 1],
    "53_2": [53, 2, 5, 53, 7, 54, 1],
    "53_3": [53, 3, 5, 53, 9, 54, 1],
    "53_4": [53, 4, 5, 53, 11, 54, 1],
    "53_5": [53, 5, 5, 153, 1, 54, 0],
    "54_1": [54, 1, 5, 54, 5, 55, 1],
    "54_2": [54, 2, 5, 54, 7, 55, 1],
    "54_3": [54, 3, 5, 54, 9, 55, 1],
    "54_4": [54, 4, 5, 54, 11, 55, 1],
    "54_5": [54, 5, 5, 154, 1, 55, 0],
    "55_1": [55, 1, 5, 55, 5, 56, 1],
    "55_2": [55, 2, 5, 55, 7, 56, 1],
    "55_3": [55, 3, 5, 55, 9, 56, 1],
    "55_4": [55, 4, 5, 55, 11, 56, 1],
    "55_5": [55, 5, 5, 155, 1, 56, 0],
    "56_1": [56, 1, 5, 56, 5, 57, 1],
    "56_2": [56, 2, 5, 56, 7, 57, 1],
    "56_3": [56, 3, 5, 56, 9, 57, 1],
    "56_4": [56, 4, 5, 56, 11, 57, 1],
    "56_5": [56, 5, 5, 156, 1, 57, 0],
    "57_1": [57, 1, 5, 57, 5, 58, 1],
    "57_2": [57, 2, 5, 57, 7, 58, 1],
    "57_3": [57, 3, 5, 57, 9, 58, 1],
    "57_4": [57, 4, 5, 57, 11, 58, 1],
    "57_5": [57, 5, 5, 157, 1, 58, 0],
    "58_1": [58, 1, 5, 58, 5, 59, 1],
    "58_2": [58, 2, 5, 58, 7, 59, 1],
    "58_3": [58, 3, 5, 58, 9, 59, 1],
    "58_4": [58, 4, 5, 58, 11, 59, 1],
    "58_5": [58, 5, 5, 158, 1, 59, 0],
    "59_1": [59, 1, 5, 59, 5, 60, 1],
    "59_2": [59, 2, 5, 59, 7, 60, 1],
    "59_3": [59, 3, 5, 59, 9, 60, 1],
    "59_4": [59, 4, 5, 59, 11, 60, 1],
    "59_5": [59, 5, 5, 159, 1, 60, 0],
    "60_1": [60, 1, 5, 60, 5, 60, 1],
    "60_2": [60, 2, 5, 60, 7, 60, 1],
    "60_3": [60, 3, 5, 60, 9, 60, 1],
    "60_4": [60, 4, 5, 60, 11, 60, 1],
    "60_5": [60, 5, 5, 160, 1, 60, 0]
};
// '["level", "gem"]
exports.DB_levelupGem = {
    "3": [3, 3],
    "5": [5, 3],
    "8": [8, 3],
    "11": [11, 3],
    "14": [14, 5],
    "17": [17, 5],
    "19": [19, 5],
    "21": [21, 5],
    "23": [23, 5],
    "25": [25, 5],
    "27": [27, 5],
    "29": [29, 5],
    "31": [31, 8],
    "33": [33, 8],
    "35": [35, 8],
    "37": [37, 8],
    "39": [39, 8],
    "41": [41, 8],
    "43": [43, 8],
    "45": [45, 8],
    "47": [47, 10],
    "49": [49, 10],
    "51": [51, 10],
    "53": [53, 10],
    "55": [55, 10],
    "57": [57, 10],
    "59": [59, 10]
};
// ["level", "cd", "power", "skill", "offline", "price", "gem", "prefab", "shootPos", "steakColor", "head"]
exports.DB_plant = [
    [1, 1.0, 10, "1|10", 4, 100, 0, "翅鸡仔1级", "", "#FEDE55", "01"],
    [2, 0.96, 16, "2|10", 9, 1548, 0, "翅鸡仔2级", "", "#F2AA1A", "07"],
    [3, 0.92, 25, "3|5", 19, 6969, 0, "翅鸡仔3级", "", "#B4E253", "15"],
    [4, 0.88, 42, "1|11", 41, 18539, 0, "翅鸡仔4级", "", "#F4C712", "32"],
    [5, 0.84, 75, "2|11", 86, 49314, 0, "翅鸡仔5级", "", "#FEE056", "05"],
    [6, 0.81, 140, "3|5.5", 181, 131176, 0, "翅鸡仔6级", "", "#ECBE4B", "04"],
    [7, 0.78, 293, "1|12", 380, 348928, 0, "翅鸡仔7级", "", "#99E448", "14"],
    [8, 0.75, 601, "2|12", 798, 928149, 0, "翅鸡仔8级", "", "#D4E5EC", "16"],
    [9, 0.72, 1214, "3|6", 1676, 2468878, 0, "翅鸡仔9级", "", "#1971D6", "06"],
    [10, 0.69, 2536, "1|13", 3520, 6567217, 0, "翅鸡仔10级", "", "#E9E178", "24"],
    [11, 0.67, 5307, "2|13", 7392, 17468797, 6, "翅鸡仔11级", "", "#5B7D15", "17"],
    [12, 0.65, 11615, "3|6.5", 15523, 46467000, 8, "翅鸡仔12级", "", "#FDE054", "22"],
    [13, 0.63, 24392, "1|14", 32598, 123602221, 10, "翅鸡仔13级", "", "#E2B845", "08"],
    [14, 0.61, 51224, "2|14", 68455, 328781909, 13, "翅鸡仔14级", "", "#E66823", "33"],
    [15, 0.6, 107572, "3|7", 143756, 874559877, 17, "翅鸡仔15级", "", "#AF452D", "11"],
    [16, 0.59, 225903, "1|15", 301888, 2326329273, 22, "翅鸡仔16级", "", "#C4A261", "23"],
    [17, 0.58, 474396, "2|15", 633965, 6188035867, 30, "翅鸡仔17级", "", "#FAEB2E", "29"],
    [18, 0.57, 996232, "3|7.5", 1331326, 16460175406, 40, "翅鸡仔18级", "", "#BCEC7F", "28"],
    [19, 0.56, 2092088, "1|16", 2795784, 43784066580, 50, "翅鸡仔19级", "", "#FEFDFF", "39"],
    [20, 0.55, 4393386, "2|16", 5871147, 116465617103, 60, "翅鸡仔20级", ",", "#FDDB2C", "50"],
    [21, 0.54, 9226110, "3|8", 12329408, 309798541495, 80, "翅鸡仔21级", "", "#9A7601", "19"],
    [22, 0.53, 19374831, "1|17", 25891758, 824064120378, 100, "翅鸡仔22级", "", "#CB2E26", "27"],
    [23, 0.52, 40687144, "2|17", 54372692, 2192010560204, 130, "翅鸡仔23级", "", "#96A6B3", "10"],
    [24, 0.51, 85443003, "3|8.5", 114182653, 5830748090144, 160, "翅鸡仔24级", "", "#FCCB16", "30"],
    [25, 0.51, 179430308, "1|17.5", 239783571, 15509789919784, 200, "翅鸡仔25级", "", "#E3FF79", "21"],
    [26, 0.51, 376803646, "2|17.5", 503545498, 41256041186627, 240, "翅鸡仔26级", "", "#FCFAC3", "03"],
    [27, 0.51, 791287659, "3|8.5", 1057445546, 109741069556429, 290, "翅鸡仔27级", "", "#FC687A", "13"],
    [28, 0.51, 1661704084, "1|18", 2220635646, 291911245020100, 340, "翅鸡仔28级", "", "#9B671B", "12"],
    [29, 0.51, 3489578577, "2|18", 4663334858, 776483911753466, 400, "翅鸡仔29级", "", "#4F5C70", "02"],
    [30, 0.51, 7328115014, "3|9", 9793003202, 2065447205264220, 460, "翅鸡仔30级", "", "#B9291F", "45"],
    [31, 0.51, 15389041529, "1|18.5", 20565306723, 5494089566002820, 530, "翅鸡仔31级", "", "#82FFB6", "54"],
    [32, 0.51, 32316987211, "2|18.5", 43187144119, 14614278245567600, 600, "翅鸡仔32级", "", "#70A632", "31"],
    [33, 0.51, 67865673145, "3|9", 90693002651, 38873980133209600, 680, "翅鸡仔33级", "", "#B5E13C", "09"],
    [34, 0.51, 142517913605, "1|19", 190455305567, 103404787154336992, 760, "翅鸡仔34级", "", "#A15C54", "25"],
    [35, 0.51, 299287618570, "2|19", 399956141690, 275056733830537984, 850, "翅鸡仔35级", "", "#FCDB50", "35"],
    [36, 0.51, 628503998998, "3|9.5", 839907897549, 731650911989229952, 940, "翅鸡仔36级", "", "#9CBCC0", "37"],
    [37, 0.51, 1319858397895, "1|19.5", 1763806584855, 1946191425891399936, 1040, "翅鸡仔37级", "", "#4089FF", "47"],
    [38, 0.51, 2771702635582, "2|19.5", 3703993828196, 5176869192871100416, 1140, "翅鸡仔38级", "", "#FCDE8E", "49"],
    [39, 0.51, 5820575534722, "3|9.5", 7778387039211, 13770472053037099008, 1250, "翅鸡仔39级", "", "#FEBF89", "52"],
    [40, 0.51, 12223208622916, "1|20", 16334612782345, 36629455661078601728, 1360, "翅鸡仔40级", "", "#F9F2EC", "44"],
    [41, 0.51, 25668738108123, "2|20", 34302686842924, 97434352058469007360, 1480, "翅鸡仔41级", "", "#FAC335", "42"],
    [42, 0.51, 53904350027060, "3|10", 72035642370142, 259175376475526987776, 1600, "翅鸡仔42级", "", "#28D9F9", "51"],
    [43, 0.51, 113199135056826, "1|20.5", 151274848977300, 689406501424900997120, 1730, "翅鸡仔43级", "", "#3CCEF3", "53"],
    [44, 0.51, 237718183619334, "2|20.5", 317677182852330, 1833821293790229954560, 1860, "翅鸡仔44级", "", "#FADC80", "18"],
    [45, 0.51, 499208185600602, "3|10", 667122083989893, 4877964641482029662208, 2000, "翅鸡仔45级", "", "#68DFE0", "26"],
    [46, 0.51, 1048337189761260, "1|21", 1400956376378770, 12975385946342199132160, 2140, "翅鸡仔46级", "", "#FDE570", "55"],
    [47, 0.51, 2201508098498650, "2|21", 2942008390395420, 34514526617270298345472, 2290, "翅鸡仔47级", "", "#60EC00", "46"],
    [48, 0.51, 4623167006847160, "3|10.5", 6178217619830380, 91808640801938899730432, 2440, "翅鸡仔48级", "", "#F7FDFD", "38"],
    [49, 0.51, 9708650714379030, "1|21.5", 12974257001643800, 244210984533157014929408, 2600, "翅鸡仔49级", "", "#E8C6AA", "56"],
    [50, 0.51, 20388166500196000, "2|21.5", 27245939703452000, 649601218858199050878976, 2760, "翅鸡仔50级", "", "#674B88", "40"],
    [51, 0.51, 42815149650411504, "3|10.5", 57216473377249104, 1727939242162809982681088, 2930, "翅鸡仔51级", "", "#A2FD5D", "58"],
    [52, 0.51, 89911814265864192, "1|22", 120154594092223008, 4596318384153069807992832, 3100, "翅鸡仔52级", "", "#43AAF2", "43"],
    [53, 0.51, 188814809958315008, "2|22", 252324647593668992, 12226206901847200714719232, 3280, "翅鸡仔53级", "", "#656D7E", "57"],
    [54, 0.51, 396511100912460992, "3|11", 529881759946704000, 32521710358913501416652800, 3460, "翅鸡仔54级", "", "#F6ECED", "48"],
    [55, 0.51, 832673311916168960, "1|22.5", 1112751695888080000, 86507749554709900883394560, 3650, "翅鸡仔55级", "", "#44DEFE", "60"],
    [56, 0.51, 1748613955023950080, "2|22.5", 2336778561364969984, 230110613815527994470432768, 3840, "翅鸡仔56级", "", "#FDADBE", "59"],
    [57, 0.51, 3672089305550300160, "3|11", 4907234978866429952, 612094232749305026729476096, 4040, "翅鸡仔57级", "", "#FFFEF4", "20"],
    [58, 0.51, 7711387541655640064, "1|23", 10305193455619500032, 1628170659113149875764592640, 4240, "翅鸡仔58级", "", "#DE3A40", "36"],
    [59, 0.51, 16193913837476800512, "2|23", 21640906256801001472, 4330933953240979741557653504, 4350, "翅鸡仔59级", "", "#28B7FE", "41"],
    [60, 0.51, 34007219058701398016, "3|11.5", 45445903139282001920, 11520284315620999911297777664, 4460, "翅鸡仔60级", "", "#D54AF2", "34"]
];
//["level", "MAX", "MAX_1", "MAX_2", "MAX_3", "MAX_4", "MAX_5", "MAX_6", "MAX_7", "MAX_8"]
exports.DB_shopSort = {
    "1": [1, "M", "", "", "", "", "", "", "", ""],
    "2": [2, "U", "M", "", "", "", "", "", "", ""],
    "3": [3, "U", "U", "M", "", "", "", "", "", ""],
    "4": [4, "U", "U", "M", "M", "", "", "", "", ""],
    "5": [5, "U", "U", "M", "M", "M", "", "", "", ""],
    "6": [6, "U", "U", "M", "M", "M", "M", "", "", ""],
    "7": [7, "U", "U", "AD", "M", "M", "M", "M", "", ""],
    "8": [8, "U", "U", "AD", "M", "M", "M", "M", "M", ""],
    "9": [9, "U", "U", "AD", "M", "M", "M", "M", "M", "M"],
    "10": [10, "U", "U", "AD", "M", "M", "M", "M", "M", "M"],
    "11": [11, "U", "U", "AD", "M", "M", "M", "M", "M", "M"],
    "12": [12, "U", "U", "M", "AD", "M", "M", "M", "M", "M"],
    "13": [13, "U", "U", "G", "M", "AD", "M", "M", "M", "M"],
    "14": [14, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
    "15": [15, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
    "16": [16, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
    "17": [17, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
    "18": [18, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
    "19": [19, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
    "20": [20, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
    "21": [21, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
    "22": [22, "U", "U", "G", "G", "M", "AD", "M", "M", "M"],
    "23": [23, "U", "U", "G", "G", "M", "M", "AD", "M", "M"],
    "24": [24, "U", "U", "G", "G", "M", "M", "AD", "M", "M"],
    "25": [25, "U", "U", "G", "G", "M", "M", "AD", "M", "M"],
    "26": [26, "U", "U", "G", "G", "M", "M", "AD", "M", "M"],
    "27": [27, "U", "U", "G", "G", "M", "M", "AD", "M", "M"],
    "28": [28, "U", "U", "G", "G", "M", "M", "AD", "M", "M"],
    "29": [29, "U", "U", "G", "G", "M", "M", "AD", "M", "M"],
    "30": [30, "U", "U", "G", "G", "M", "M", "AD", "M", "M"],
    "31": [31, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "32": [32, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "33": [33, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "34": [34, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "35": [35, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "36": [36, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "37": [37, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "38": [38, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "39": [39, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "40": [40, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "41": [41, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "42": [42, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "43": [43, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "44": [44, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "45": [45, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "46": [46, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "47": [47, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "48": [48, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "49": [49, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "50": [50, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "51": [51, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "52": [52, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "53": [53, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "54": [54, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "55": [55, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "56": [56, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "57": [57, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "58": [58, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "59": [59, "U", "U", "G", "G", "M", "M", "M", "AD", "M"],
    "60": [60, "U", "U", "G", "G", "M", "M", "M", "AD", "M"]
};
//["Level", "SpinS", "SpinA", "SpinB", "SpinC"]
exports.DB_spinLevel = {
    "1": [1, 1, 1, 1, 1],
    "2": [2, 1, 1, 1, 1],
    "3": [3, 1, 1, 1, 1],
    "4": [4, 2, 2, 1, 1],
    "5": [5, 3, 3, 2, 1],
    "6": [6, 4, 3, 3, 2],
    "7": [7, 5, 4, 3, 2],
    "8": [8, 6, 5, 4, 3],
    "9": [9, 6, 5, 4, 3],
    "10": [10, 7, 6, 5, 4],
    "11": [11, 7, 6, 5, 4],
    "12": [12, 8, 7, 6, 5],
    "13": [13, 9, 8, 7, 6],
    "14": [14, 10, 9, 8, 7],
    "15": [15, 11, 10, 9, 8],
    "16": [16, 12, 11, 10, 9],
    "17": [17, 13, 12, 11, 10],
    "18": [18, 14, 13, 12, 11],
    "19": [19, 15, 14, 13, 12],
    "20": [20, 16, 15, 14, 13],
    "21": [21, 17, 16, 15, 14],
    "22": [22, 18, 17, 16, 15],
    "23": [23, 19, 18, 17, 16],
    "24": [24, 20, 19, 18, 17],
    "25": [25, 21, 20, 19, 18],
    "26": [26, 22, 21, 20, 19],
    "27": [27, 23, 22, 21, 20],
    "28": [28, 24, 23, 22, 21],
    "29": [29, 25, 24, 23, 22],
    "30": [30, 26, 25, 24, 23],
    "31": [31, 27, 26, 25, 24],
    "32": [32, 28, 27, 26, 25],
    "33": [33, 29, 28, 27, 26],
    "34": [34, 30, 29, 28, 27],
    "35": [35, 31, 30, 29, 28],
    "36": [36, 32, 31, 30, 29],
    "37": [37, 33, 32, 31, 30],
    "38": [38, 34, 33, 32, 31],
    "39": [39, 35, 34, 33, 32],
    "40": [40, 36, 35, 34, 33],
    "41": [41, 37, 36, 35, 34],
    "42": [42, 38, 37, 36, 35],
    "43": [43, 39, 38, 37, 36],
    "44": [44, 40, 39, 38, 37],
    "45": [45, 41, 40, 39, 38],
    "46": [46, 42, 41, 40, 39],
    "47": [47, 43, 42, 41, 40],
    "48": [48, 44, 43, 42, 41],
    "49": [49, 45, 44, 43, 42],
    "50": [50, 46, 45, 44, 43],
    "51": [51, 47, 46, 45, 44],
    "52": [52, 48, 47, 46, 45],
    "53": [53, 49, 48, 47, 46],
    "54": [54, 50, 49, 48, 47],
    "55": [55, 51, 50, 49, 48],
    "56": [56, 52, 51, 50, 49],
    "57": [57, 53, 52, 51, 50],
    "58": [58, 54, 53, 52, 51],
    "59": [59, 55, 54, 53, 52],
    "60": [60, 56, 55, 54, 53]
};
//["id", "type", "rarity", "weight", "rewards"]
exports.DB_turntable = {
    "1": [1, "coin", "C", 8, -7.0],
    "2": [2, "coin", "B", 4, -6.0],
    "3": [3, "coin", "A", 2, -5.0],
    "4": [4, "coin", "S", 1, -4.0],
    "5": [5, "plant", "C", 8, -7.0],
    "6": [6, "plant", "B", 4, -6.0],
    "7": [7, "plant", "A", 2, -5.0],
    "8": [8, "plant", "S", 1, -4.0],
    "9": [9, "gem", "S", 2, 10.0],
    "10": [10, "speedup", "A", 2, 60.0],
    "11": [11, "drone", "C", 8, 1.0]
};
//["id", "hp", "spd", "money", "prefab", "gender"]
exports.DB_zombie = {
    "1": [1, 57, 0.862529, 137, "", ""],
    "2": [2, 163, 0.90565545, 170, "", ""],
    "3": [3, 413, 0.9509382225, 432, "", ""],
    "4": [4, 705, 0.998485133625, 736, "", ""],
    "5": [5, 1166, 1.04840939081, 1218, "", ""],
    "6": [6, 1636, 1.10082985969, 1709, "", ""],
    "7": [7, 2470, 1.15587135329, 2580, "", ""],
    "8": [8, 3657, 1.21366492019, 3820, "", ""],
    "9": [9, 8104, 1.27434816625, 8467, "", ""],
    "10": [10, 17947, 1.33806557522, 18751, "", ""],
    "11": [11, 39752, 1.40496885378, 41533, "", ""],
    "12": [12, 88056, 1.47521729581, 92000, "", ""],
    "13": [13, 195038, 1.54897816091, 203774, "", ""],
    "14": [14, 419648, 1.57995772459, 438444, "", ""],
    "15": [15, 902906, 1.61155687837, 943347, "", ""],
    "16": [16, 1942629, 1.64378801629, 2029640, "", ""],
    "17": [17, 4179527, 1.67666377692, 4366728, "", ""],
    "18": [18, 8991989, 1.71019705254, 9394740, "", ""],
    "19": [19, 19345313, 1.74440099316, 20211789, "	", ""],
    "20": [20, 41618614, 1.77928901264, 43482712, "", ""],
    "21": [21, 89534672, 1.81487479372, 93544930, "", ""],
    "22": [22, 192613493, 1.85117228909, 201240651, "", ""],
    "23": [23, 414356456, 1.88819573453, 432915482, "", ""],
    "24": [24, 891360763, 1.92595964995, 931284812, "", "dog"],
    "25": [25, 1917454133, 1.92595964995, 2003336903, "", ""],
    "26": [26, 4124664141, 1.92595964995, 4309407848, "", ""],
    "27": [27, 8872467162, 1.92595964995, 9269864966, "", ""],
    "28": [28, 19085013790, 1.92595964995, 19939831558, "", ""],
    "29": [29, 41051864668, 1.92595964995, 42890577687, "", ""],
    "30": [30, 88301015025, 1.92595964995, 92256017488, "", ""],
    "31": [31, 189140774188, 1.92595964995, 197612389464, "", ""],
    "32": [32, 405139538313, 1.92595964995, 423285738234, "", ""],
    "33": [33, 867808891065, 1.92595964995, 906678051296, "", ""],
    "34": [34, 1858846644666, 1.92595964995, 1942104385880, "", ""],
    "35": [35, 3981649512877, 1.92595964995, 4159987594558, "", ""],
    "36": [36, 8528693256581, 1.92595964995, 8910693427544, "", ""],
    "37": [37, 18268460955598, 1.92595964995, 19086705321800, "", ""],
    "38": [38, 39131043366891, 1.92595964995, 40883722799296, "", ""],
    "39": [39, 83818694891880, 1.92595964995, 87572934236092, "", ""],
    "40": [40, 179539644458409, 1.92595964995, 187581225133709, "", ""],
    "41": [41, 384573918429912, 1.92595964995, 401798984236404, "", ""],
    "42": [42, 823757333276871, 1.92595964995, 860653424234377, "", ""],
    "43": [43, 1764488207879050, 1.92595964995, 1843519634710030, "", ""],
    "44": [44, 3779533741276920, 1.92595964995, 3948819057548880, "", ""],
    "45": [45, 8095761273815170, 1.92595964995, 8458370421269710, "", ""],
    "46": [46, 17341120648512100, 1.92595964995, 18117829442359700, "", ""],
    "47": [47, 37144680429112896, 1.92595964995, 38808390665534496, "", ""],
    "48": [48, 79563905479159904, 1.92595964995, 83127572805574896, "", ""],
    "49": [49, 170425885536360000, 1.92595964995, 178059260949540992, "", ""],
    "50": [50, 365052246818883968, 1.92595964995, 381402936953918016, "", ""],
    "51": [51, 781941912686050048, 1.92595964995, 816965090955292032, "", ""],
    "52": [52, 1674919576973519872, 1.92595964995, 1749939224826240000, "", ""],
    "53": [53, 3587677733877279744, 1.92595964995, 3748369819577800192, "", ""],
    "54": [54, 7684805705965119488, 1.92595964995, 8029008153535639552, "", ""],
    "55": [55, 16460853822177300480, 1.92595964995, 17198135464873299968, "", ""],
    "56": [56, 35259148887103799296, 1.92595964995, 36838406165758701568, "", ""],
    "57": [57, 75525096916176306176, 1.92595964995, 78907866007055106048, "", ""],
    "58": [58, 161774757594450001920, 1.92595964995, 169020648987112013824, "", ""],
    "59": [59, 346521530767310979072, 1.92595964995, 362042230130394005504, "", ""],
    "60": [60, 742249118903579967488, 1.92595964995, 775494456939304058880, "", ""],
    "101": [101, 1567, 0.575019333672, 1637, "", ""],
    "102": [102, 2351, 0.6037703, 2456, "", ""],
    "103": [103, 4231, 0.633958815, 4421, "", ""],
    "104": [104, 7680, 0.66565675575, 8024, "", ""],
    "105": [105, 14576, 0.698939593538, 15229, "", ""],
    "106": [106, 29152, 0.733886573468, 30458, "", ""],
    "107": [107, 61754, 0.770580902192, 64520, "", ""],
    "108": [108, 137144, 0.809109946794, 143287, "", ""],
    "109": [109, 303912, 0.84956544383, 317524, "", ""],
    "110": [110, 673026, 0.892043716478, 703171, "", ""],
    "111": [111, 1490720, 0.93664590286, 1557490, "", ""],
    "112": [112, 3302124, 0.983478197546, 3450026, "", ""],
    "113": [113, 7313952, 1.03265210727, 7641543, "", ""],
    "114": [114, 15736814, 1.05330514905, 16441666, "", ""],
    "115": [115, 33859002, 1.07437125293, 35375547, "", ""],
    "116": [116, 72848617, 1.09585867786, 76111506, "", ""],
    "117": [117, 156732268, 1.11777585128, 163752306, "", ""],
    "118": [118, 337199614, 1.14013136802, 352302785, "", ""],
    "119": [119, 725449247, 1.16293399544, 757942119, "", ""],
    "120": [120, 1553912289, 1.23411485973, 1623512021, "", ""],
    "121": [121, 3357550213, 1.20991652847, 3507934887, "", ""],
    "122": [122, 7223005995, 1.23411485973, 7546524433, "", ""],
    "123": [123, 15538367121, 1.25879715703, 16234330585, "", ""],
    "124": [124, 33426028646, 1.28397309997, 34923180469, "", "dog"],
    "125": [125, 71904529998, 1.28397309997, 75125133896, "", ""],
    "126": [126, 154674905317, 1.28397309997, 161602794327, "", ""],
    "127": [127, 332717518589, 1.28397309997, 347619936247, "", ""],
    "128": [128, 715688017161, 1.28397309997, 747743683449, "", ""],
    "129": [129, 1539444925073, 1.28397309997, 1608396663267, "", ""],
    "130": [130, 3311288063449, 1.28397309997, 3459600655811, "", ""],
    "131": [131, 7092779031898, 1.28397309997, 7410464604736, "", ""],
    "132": [132, 15192732686449, 1.28397309997, 15873215183475, "", ""],
    "133": [133, 32542833414490, 1.28397309997, 34000426923126, "", ""],
    "134": [134, 69706749174357, 1.28397309997, 72828914469877, "", ""],
    "135": [135, 149311856732109, 1.28397309997, 155999534795140, "", ""],
    "136": [136, 319825997120177, 1.28397309997, 334151003531189, "", ""],
    "137": [137, 685067285831420, 1.28397309997, 715751449563808, "", ""],
    "138": [138, 1467414126250900, 1.28397309997, 1533139604965670, "", ""],
    "139": [139, 3143201058429420, 1.28397309997, 3283985033836460, "", ""],
    "140": [140, 6732736667155810, 1.28397309997, 7034295942477690, "", ""],
    "141": [141, 14421521941047700, 1.28397309997, 15067461908787200, "", ""],
    "142": [142, 30890899997724100, 1.28397309997, 32274503408622100, "", ""],
    "143": [143, 66168307795125000, 1.28397309997, 69131986301268496, "", ""],
    "144": [144, 141732515297158000, 1.28397309997, 148080714657316992, "", ""],
    "145": [145, 303591047766512000, 1.28397309997, 317188890795972992, "", ""],
    "146": [146, 650292024315868032, 1.28397309997, 679418604084974976, "", ""],
    "147": [147, 1392925516084590080, 1.28397309997, 1455314649950020096, "", ""],
    "148": [148, 2983646455453190144, 1.28397309997, 3117283980192929792, "", ""],
    "149": [149, 6390970707580739584, 1.28397309997, 6677222285573260288, "", ""],
    "150": [150, 13689459255637899264, 1.28397309997, 14302610135697899520, "", ""],
    "151": [151, 29322821725576499200, 1.28397309997, 30636190910664998912, "", ""],
    "152": [152, 62809484136184799232, 1.28397309997, 65622720930644402176, "", ""],
    "153": [153, 134537915019708006400, 1.28397309997, 140563868233440002048, "", ""],
    "154": [154, 288180213972213989376, 1.28397309997, 301087805756029009920, "", ""],
    "155": [155, 617282018328482021376, 1.28397309997, 644930079929414057984, "", ""],
    "156": [156, 1322218083259610038272, 1.28397309997, 1381440231208799961088, "", ""],
    "157": [157, 2832191134342080102400, 1.28397309997, 2959044975249260019712, "", ""],
    "158": [158, 6066553409760740245504, 1.28397309997, 6338274336983910187008, "", ""],
    "159": [159, 12994557403707499085824, 1.28397309997, 13576583629819500036096, "", ""],
    "160": [160, 27834341958741498265600, 1.28397309997, 29081042135073498857472, "", ""]
};
//["id", "invitePeople", "gem"]
exports.DB_invite = { "1": [1, 1, 5], "2": [2, 2, 8], "3": [3, 3, 10], "4": [4, 5, 25], "5": [5, 8, 45], "6": [6, 12, 60] };
//无人机
// ["Level", "Drone"]
exports.DB_droneRewards = {
    "1": [1, 1],
    "2": [2, 1],
    "3": [3, 1],
    "4": [4, 2],
    "5": [5, 3],
    "6": [6, 3],
    "7": [7, 3],
    "8": [8, 4],
    "9": [9, 4],
    "10": [10, 4],
    "11": [11, 5],
    "12": [12, 5],
    "13": [13, 6],
    "14": [14, 6],
    "15": [15, 7],
    "16": [16, 7],
    "17": [17, 8],
    "18": [18, 9],
    "19": [19, 10],
    "20": [20, 11],
    "21": [21, 12],
    "22": [22, 13],
    "23": [23, 14],
    "24": [24, 15],
    "25": [25, 16],
    "26": [26, 16],
    "27": [27, 17],
    "28": [28, 18],
    "29": [29, 19],
    "30": [30, 20],
    "31": [31, 21],
    "32": [32, 22],
    "33": [33, 23],
    "34": [34, 24],
    "35": [35, 25],
    "36": [36, 26],
    "37": [37, 27],
    "38": [38, 28],
    "39": [39, 29],
    "40": [40, 30],
    "41": [41, 31],
    "42": [42, 32],
    "43": [43, 33],
    "44": [44, 34],
    "45": [45, 35],
    "46": [46, 36],
    "47": [47, 37],
    "48": [48, 38],
    "49": [49, 39],
    "50": [50, 40],
    "51": [51, 41],
    "52": [52, 42],
    "53": [53, 43],
    "54": [54, 44],
    "55": [55, 45],
    "56": [56, 46],
    "57": [57, 47],
    "58": [58, 48],
    "59": [59, 49],
    "60": [60, 50]
};
// ["Level", "button"]
exports.DB_buyButton = {
    "1": [1, 1],
    "2": [2, 1],
    "3": [3, 1],
    "4": [4, 1],
    "5": [5, 2],
    "6": [6, 2],
    "7": [7, 3],
    "8": [8, 3],
    "9": [9, 4],
    "10": [10, 4],
    "11": [11, 5],
    "12": [12, 5],
    "13": [13, 6],
    "14": [14, 7],
    "15": [15, 8],
    "16": [16, 9],
    "17": [17, 10],
    "18": [18, 11],
    "19": [19, 12],
    "20": [20, 13],
    "21": [21, 14],
    "22": [22, 15],
    "23": [23, 16],
    "24": [24, 17],
    "25": [25, 18],
    "26": [26, 19],
    "27": [27, 20],
    "28": [28, 21],
    "29": [29, 22],
    "30": [30, 23],
    "31": [31, 24],
    "32": [32, 25],
    "33": [33, 26],
    "34": [34, 27],
    "35": [35, 28],
    "36": [36, 29],
    "37": [37, 30],
    "38": [38, 31],
    "39": [39, 32],
    "40": [40, 33],
    "41": [41, 34],
    "42": [42, 35],
    "43": [43, 36],
    "44": [44, 37],
    "45": [45, 38],
    "46": [46, 39],
    "47": [47, 40],
    "48": [48, 41],
    "49": [49, 42],
    "50": [50, 43],
    "51": [51, 44],
    "52": [52, 45],
    "53": [53, 46],
    "54": [54, 47],
    "55": [55, 48],
    "56": [56, 49],
    "57": [57, 50],
    "58": [58, 51],
    "59": [59, 52],
    "60": [60, 53]
};
//["Level", "Plant1", "Plant2"]
exports.DB_airdrop = {
    "1": [1, 1, 0],
    "2": [2, 1, 0],
    "3": [3, 1, 0],
    "4": [4, 1, 2],
    "5": [5, 1, 2],
    "6": [6, 2, 0],
    "7": [7, 2, 0],
    "8": [8, 3, 0],
    "9": [9, 3, 0],
    "10": [10, 3, 4],
    "11": [11, 4, 0],
    "12": [12, 4, 0],
    "13": [13, 4, 5],
    "14": [14, 5, 0],
    "15": [15, 5, 6],
    "16": [16, 6, 0],
    "17": [17, 7, 0],
    "18": [18, 8, 0],
    "19": [19, 9, 0],
    "20": [20, 10, 0],
    "21": [21, 11, 0],
    "22": [22, 12, 0],
    "23": [23, 13, 0],
    "24": [24, 14, 0],
    "25": [25, 15, 0],
    "26": [26, 16, 0],
    "27": [27, 17, 0],
    "28": [28, 18, 0],
    "29": [29, 19, 0],
    "30": [30, 20, 0],
    "31": [31, 21, 0],
    "32": [32, 22, 0],
    "33": [33, 23, 0],
    "34": [34, 24, 0],
    "35": [35, 25, 0],
    "36": [36, 26, 0],
    "37": [37, 27, 0],
    "38": [38, 28, 0],
    "39": [39, 29, 0],
    "40": [40, 30, 0],
    "41": [41, 31, 0],
    "42": [42, 32, 0],
    "43": [43, 33, 0],
    "44": [44, 34, 0],
    "45": [45, 35, 0],
    "46": [46, 36, 0],
    "47": [47, 37, 0],
    "48": [48, 38, 0],
    "49": [49, 39, 0],
    "50": [50, 40, 0],
    "51": [51, 41, 0],
    "52": [52, 42, 0],
    "53": [53, 43, 0],
    "54": [54, 44, 0],
    "55": [55, 45, 0],
    "56": [56, 46, 0],
    "57": [57, 47, 0],
    "58": [58, 48, 0],
    "59": [59, 49, 0],
    "60": [60, 50, 0]
};
//["id", "Level", "Gain_5", "Gain_20", "Gain_50", "Gain_100", "Gain_200"]
exports.DB_achievementAwards = {
    "1": [1, 4, 1, 0, 0, 0, 0],
    "2": [2, 7, 2, 3, 5, 8, 10],
    "3": [3, 11, 2, 3, 5, 8, 10],
    "4": [4, 15, 3, 5, 8, 15, 15],
    "5": [5, 19, 3, 5, 8, 15, 20],
    "6": [6, 23, 5, 8, 10, 15, 20],
    "7": [7, 27, 5, 8, 10, 15, 20],
    "8": [8, 31, 5, 8, 15, 20, 20],
    "9": [9, 35, 5, 8, 15, 20, 20],
    "10": [10, 39, 10, 15, 20, 20, 20],
    "11": [11, 43, 10, 15, 20, 20, 20],
    "12": [12, 47, 15, 20, 20, 20, 20],
    "13": [13, 51, 15, 20, 20, 20, 0],
    "14": [14, 55, 20, 20, 20, 0, 0],
    "15": [15, 59, 20, 20, 0, 0, 0]
};
exports.DB_slot = [
    { id: 1, type: 0, price: 0 },
    { id: 2, type: 0, price: 0 },
    { id: 3, type: 0, price: 0 },
    { id: 4, type: 0, price: 2 },
    { id: 5, type: 0, price: 4 },
    { id: 6, type: 0, price: 6 },
    { id: 7, type: 0, price: 8 },
    { id: 8, type: 0, price: 10 },
    { id: 9, type: 0, price: 12 },
    { id: 10, type: 0, price: 15 },
    { id: 11, type: 0, price: 18 },
    { id: 12, type: 0, price: 20 },
];

cc._RF.pop();