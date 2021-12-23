/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 动态规划
  if (prices.length === 0) {
    return 0;
  }
  let n = prices.length;
  // f[i][0]: 手上持有股票的最大收益
  // f[i][1] 手上不持有股票 并且处于冷冻期中的累计最大收益
  // f[i][0] 手上不持有股票 并且不在冷冻期中的累计最大收益
};
