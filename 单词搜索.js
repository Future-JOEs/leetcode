/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const wordArr = word.split('');
  const m = board[0].length;
  const n = board.length;
  const marked = new Array(n).fill(0).map(() => new Array(m).fill(0));

  const direct = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (i, j, depth) => {
    if (depth === wordArr.length) {
      return true;
    }

    for (var d of direct) {
      var cur_j = j + d[1],
        cur_i = i + d[0];

      if (
        cur_j >= 0 &&
        cur_i >= 0 &&
        cur_j < m &&
        cur_i < n &&
        board[cur_i][cur_j] === wordArr[depth]
      ) {
        if (marked[cur_i][cur_j] === 1) {
          // 换个方向
          continue;
        }
        marked[cur_i][cur_j] = 1;
        if (dfs(cur_i, cur_j, depth + 1)) {
          return true;
        } else {
          marked[cur_i][cur_j] = 0;
        }
      }
    }
    return false;
  };

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (board[i][j] === wordArr[0]) {
        marked[i][j] = 1;
        if (dfs(i, j, 1)) {
          return true;
        } else {
          marked[i][j] = 0;
        }
      }
    }
  }
  return false;
};

exist(
  [
    ['a', 'b'],
    ['c', 'd'],
  ],
  'acdb',
);
