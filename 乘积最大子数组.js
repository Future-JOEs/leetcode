/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = [];
  let min = [];
  // 动态规划
  for (var i = 1; i < nums.length; ++i) {
    max[i] = Math.max(
      max[i - 1] * nums[i],
      Math.max(min[i - 1] * nums[i], nums[i]),
    );
    min[i] = Math.min(
      min[i - 1] * nums[i],
      Math.min(min[i - 1] * nums[i], nums[i]),
    );
  }

  return Math.max(...max);
};
