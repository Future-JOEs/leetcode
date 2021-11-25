/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 总共向下n-1次
  // 总共向右m-1次
  // 总共移动n+m-2
  // 组合数学 C m-1 / n+m-2   (m+n-2)!/(m-1)!(n-1)!
  let ans = 1;
  for (var x = n, y = 1; y < m; ++x, ++y) {
    ans = Math.floor((ans * x) / y);
  }
  return ans;
};

// 动态规划
// f[i][j]=f(i-1){j}+f(i)(j-1)
var uniquePaths = function(m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    f[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    f[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }
  return f[m - 1][n - 1];
};
