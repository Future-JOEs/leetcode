/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 暴力 动态规划
  var n = matrix.length;
  var m = matrix[0].length;
  var res = 0;

  const check = (matrix, i, j, record, r, c) => {
    for (; j <= c; j++) {
      if (matrix[r][j] !== "1") {
        return false;
      }
    }
    for (; i <= r; i++) {
      if (matrix[i][c] !== "1") {
        return false;
      }
    }
    return true;
  };

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (matrix[i][j] === "1") {
        // 作为左上角
        var record = 1;
        while (i + record < n && j + record < m) {
          if (check(matrix, i, j, record, i + record, j + record)) {
            record++;
          } else {
            break;
          }
        }
        res = Math.max(res, record);
      }
    }
  }
  return Math.pow(res, 2);
};

// TODO: 需补充动态规划版本
