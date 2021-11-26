// 原地旋转
// 研究它旋转的规律

// matrix[col][n-row-1] = matrix[row][col]

// temp = matrix[col][n-row-1]
// matrix[col][n-row-1] = matrix[row][col]

// row = col
// col = n -row -1

// matrix[n-row-1][n-col-1] = matrix[col][n-row-1]

// temp = matirx[n-row-1][n-col-1]
// matrix[n-row-1][n-col-1] = matrix[col][n-row-1]
// matrix[col][n-row-1] = matrix

// row = n -row -1
// col = n - col -1

// matrix[n−col−1][row]=matrix[n−row−1][n−col−1]



func rotate(matrix [][]int)  {
 n:=len(matrix)
 for i:= 0 ;i<n/2;i++ {
	 for j:= 0;j<(n+1)/2;j++ {
		 matrix[i][j],matrix[n-j-1][i],matrix[n-i-1][n-j -1],matrix[j][n-i-1] = 
		 matrix[n-j-1][i],matrix[n-i-1][n-j-1],matrix[j][n-i-1],matrix[i][j]
	 }
 }
}