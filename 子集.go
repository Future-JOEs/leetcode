function exist(board: string[][], word: string): boolean {
	// 宽、高
	const h = board.length, w = board[0].length;
	// 四连通 上、下、右、左
	const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
	const visited = new Array(h).fill(false).map(() => new Array(w).fill(false));

	// 遍历并回溯
	for (let i = 0; i < h; i++) {
			for (let j = 0; j < w; j++) {
					const flag = check(i, j, word, 0);
					// 如果找到相同的，直接返回
					if (flag) {
							return true;
					}
			}
	}
	return false;

	/**
	 * i, j 二维网格坐标，s 单词字符串， k字符当前位置
	 */
	function check(i, j, s, k) {
			// 如果指定位置字符不相等，直接结束
			if (board[i][j] != s.charAt(k)) {
					return false;
			} else if (k == s.length - 1) { // 查到最后，说明相等
					return true;
			}
			// 标记当前位置
			visited[i][j] = true;
			let result = false;
			// 遍历上下左右
			for (const [dx, dy] of directions) {
					let newi = i + dx, newj = j + dy;
					// 边界条件
					if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
							if (!visited[newi][newj]) {
									const flag = check(newi, newj, s, k + 1);
									// 如果上下左右有一个位置满足条件，则符合条件
									if (flag) {
											result = true;
											break;
									}
							}
					}
			}
			// 当前位置及上下左右都被遍历过
			visited[i][j] = false;
			return result;
	}
};

作者：zxhnext
链接：https://leetcode-cn.com/problems/word-search/solution/dan-ci-sou-suo-hui-su-by-zxhnext-x88y/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。