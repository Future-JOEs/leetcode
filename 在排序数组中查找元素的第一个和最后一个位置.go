func searchRange(nums []int, target int) []int {
	n := len(nums)
	left := 0
	right := n-1
	for left <= right{ //二分法查找
			m := (left + right)/2
			if nums[m] == target{
					i := m
					j := m
					for (i>=0 && nums[i] == target) || (j<=n-1 &&nums[j] == target){ //左右指针扩散
							if i>=0 && nums[i] == target{
									i--
							}
							if j<=n-1 && nums[j] == target{
									j++
							}
					}
					return []int{i+1 ,j-1}
			}
			if nums[m] > target{
					right = m-1
			}else{
					left = m+1
			}
	}
	return []int{-1,-1}
}