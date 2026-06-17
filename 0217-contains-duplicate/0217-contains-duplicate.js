/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const arr = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (arr.has(nums[i])) return true;
        arr.add(nums[i]);
    }
    return false;
};