func minPathSum(grid [][]int) int {
	n:= len(grid)
	m:=len(grid[0])

	f := make([][]int, n)
	for i := 0; i < len(dp); i++ {
		f[i] = make([]int, columns)
}
	f[0][0] = grid[0][0]

	for j:=1;j<m;j++ {
    f[0][j] = f[0][j-1]+ grid[0][j]
	}

	for i:=1;i<n;i++ {
		f[i][0] = f[i-1][0]+grid[i][0]
	}

	for i:=1;i<n;i++ {
		for j:=1;j<m;j++ {
			f[i][j] = min(f[i-1][j],f[i][j-1])+ grid[i][j]
		}
	}


}

func min(a,b int) int {
	if a<b{
		return a
	}else {
		return b
	}
}