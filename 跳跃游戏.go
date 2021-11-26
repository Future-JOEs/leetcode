// 贪心算法
func canJump(nums []int) bool {
	n := len(nums)
	m := 0
	for i:=0;i<n;i++ {
		if i<=m {
			m = max(i+nums[i],m)
		}
		if m>=n-1{
				return true	
		}

	}
	return false
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}