/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let from = 0, to = nums.length;
    while (from < to) {
        const middle = (from + to) >> 1;
        if (nums[middle] < target) from = middle + 1;
        else to = middle;
    }
    return from;
};