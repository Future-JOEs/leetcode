// 动态规划
// f[0][j] = f[0][j-1]+grid[j][0]
// f[i][0] = f[i-1][0]+grid[i][0]
// f[i][j] = min(f[i-1][j],f[i][j-1])+grid[i][j]
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  var n = grid.length;
  var m = grid[0].length;
  var f = new Array(n).fill(0).map(()=>new Array(m).fill(0));
    f[0][0] = grid[0][0]

  for(let j =1; j<m;j++){
    f[0][j] = f[0][j-1]+ grid[0][j]
  }
  for(let i = 1; i<n;i++) {
    f[i][0] = f[i-1][0]+ grid[i][0]
  }

  for(let i = 1;i<n;i++){
    for(let j = 1;j<m;j++) {
      f[i][j] = Math.min(f[i-1][j],f[i][j-1])+ grid[i][j]
    }
  }
  return f[n-1][m-1]
};