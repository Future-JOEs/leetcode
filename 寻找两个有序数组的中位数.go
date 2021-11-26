func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    n := len(nums1)
    m := len(nums2)
    // 判断奇偶
	if ( n+m )%2 == 0 {
		k := (n+m)/2
		median := getKthElement(nums1,nums2, k)
		return median
	} else {
		k1 := (n+m)/2-1
		k2 := (n+m)/2
		median := (getKthElement(nums1,nums2,k1)+getKthElement(nums1,nums2,k2))/2
		return median
	}
}

func getKthElement(nums1 []int, nums2 []int, k int)   int {
	n,m := len(nums1),len(nums2)
	index1,index2 := 0 , 0
	kthElement := 0 

	for {
		if index1 == len(nums1) {
			return nums2[index2 + k -1]
		}
		if index2 == len(nums2) {
			return nums1[index1 + k - 1]
		}
		if k == 1 {
			return min(nums1[index1],nums2[index2])
		}

		half := k/2
		newIndex1 := min(index1+half,len(nums1))-1
		newIndex2 := min(index2+half,len(nums2))-1
		pivot1,pivot2 := nums1[newIndex1],nums2[newIndex2]
		if pivot1<=pivot2 {
			index1 = newIndex1 + 1
			k -= (newIndex1-index1+1)
		} else {
			index2 = newIndex2 + 1
			k -= (newIndex2-index2+1)
		}
	}

	return 0

}

func min(x, y int) int {
    if x < y {
        return x
    }
    return y
}