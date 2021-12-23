/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 动态规划
  // dp[i] = max(dp[j]) + 1  其中 0 <= j < i 且 num[j] < num[i]
  // res = max(dp[i]) 其中 0 <= i < n
  let dp = [];
  dp[0] = 1;
  let maxans = 1;

  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxans = Math.max(maxans, dp[i]);
  }
  return maxans;
};
