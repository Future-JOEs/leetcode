/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function (n) {
  if (n === 0) {
      return [0]
  }
  const res = new Array(n + 1).fill(0);
  // 动态规划
  // 奇数 二进制1的个数 比 前一个数多1
  // 偶数 n二进制1的个数 等于n/2
  res[0] = 0;
  res[1] = 1;
  for (let i = 2; i <= n; i++) {
      if (i % 2 === 0) {
          res[i] = res[i / 2];
      } else {
          res[i] = res[i - 1] + 1;
      }
  }
  return res;
};