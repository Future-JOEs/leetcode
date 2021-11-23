// 每次从 p 中 取出一个[字符+星号]
// f[i][j] s中前i个字符 和 p中的字符前j个字符是否能够匹配

// 如果p的第j个字符是一个小写字母，那么我们必须在s中匹配一个相同的小写字母
// f[i][j] = f[i-1][j-1]

// 如果p的第j个字符是*，那么就表示我们可以对p的第j-1个字符匹配任意自然数次
// 匹配0次的情况下 f[i][j] = f[i][j-2]
// 匹配1次的情况下 f[i][j] = f[i-1][j-2]
// 匹配2次的情况下 f[i][j] = f[i-2][j-2]
// ...

// 匹配s末尾的一个字符，将该字符扔掉，而该组合还可以继续匹配
// 不匹配字符 就将该组合扔掉，不在进行匹配

// f[i][j] = f[i-1][j] or f[i][j-2] s[i]=p[j-1]
// f[i][j] = f[i][j-2]

func isMatch(s string, p string) bool {
	m, n := len(s), len(p)
	matches := func(i, j int) bool {
			if i == 0 {
					return false
			}
			if p[j-1] == '.' {
					return true
			}
			return s[i-1] == p[j-1]
	}

	f := make([][]bool, m + 1)
	for i := 0; i < len(f); i++ {
			f[i] = make([]bool, n + 1)
	}
	f[0][0] = true
	for i := 0; i <= m; i++ {
			for j := 1; j <= n; j++ {
					if p[j-1] == '*' {
							f[i][j] = f[i][j] || f[i][j-2]
							if matches(i, j - 1) {
									f[i][j] = f[i][j] || f[i-1][j]
							}
					} else if matches(i, j) {
							f[i][j] = f[i][j] || f[i-1][j-1]
					}
			}
	}
	return f[m][n]