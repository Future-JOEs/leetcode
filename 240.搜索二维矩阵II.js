/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;
  let x = 0;
  let y = n - 1;

  while (x < m && y > 0) {
    if (matrix[x][y] === target) {
      return true;
    }
    if (matrix[x][y] > target) {
      x++;
    } else {
      y--;
    }
  }

  return false;
};
