"use strict";
exports.__esModule = true;
exports.maxValue = void 0;
function maxValue(nums) {
    var maxNum = nums[0];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (maxNum < num) {
            maxNum = num;
        }
    }
    return maxNum;
}
exports.maxValue = maxValue;
