/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        rows[i][board[i][j] - 1]++;
        columns[j][board[i][j] - 1]++;
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][board[i][j] - 1]++;
        if (
          rows[i][board[i][j] - 1] > 1 ||
          columns[j][board[i][j] - 1] > 1 ||
          subboxes[Math.floor(i / 3)][Math.floor(j / 3)][board[i][j] - 1] > 1
        ) {
          return false;
        }
      }
    }
  }

  return true;
};
