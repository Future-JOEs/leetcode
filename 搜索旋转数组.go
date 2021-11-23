func search(nums []int, target int) int {
    n := len(nums)
    l, r := 0, n-1
    for l <= r {
        m := (l + r) / 2
        
        // 找到结果
        if nums[m] == target {
            return m
        }

        if nums[l] <= nums[m] {
            // [l-m)单调递增的情况
            if nums[l] <= target && target < nums[m] {
                r = m - 1
            } else {
                l = m + 1
            }
        } else {
            // (m-r]单调递增的情况
            if nums[m] < target && target <= nums[r] {
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }
    return -1
}