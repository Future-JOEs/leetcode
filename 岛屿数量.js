/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 深度优先搜索
  var n = grid.length;
  var m = grid[0].length;
  var res = 0;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        res++;
        dfs(grid, i, j);
      }
    }
  }
  return res;
};

var dfs = (grid, r, c) => {
  var nr = grid.length;
  var nc = grid[0].length;

  if (r < 0 || c < 0 || r >= nr || c > nc || grid[r][c] === '0') {
    return;
  }

  grid[r][c] = '0';
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
};
