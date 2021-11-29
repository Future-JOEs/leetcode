/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  // 动态规划
  // 推出来的表达式看题解
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
};
