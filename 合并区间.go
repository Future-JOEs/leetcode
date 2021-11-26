func merge(intervals [][]int) [][]int {
	sort.Slice(intervals,func(i,j int)bool {
		return intervals[i][0] < intervals[j][0]
	})
	
	res := [][]int{}
	for i:=0; i < len(intervals); i++ {
		if len(res) == 0 || intervals[i][0] > res[len(res)-1][1] {
			append(res, intervals[i])
		} else {
			res[len(res)-1][1]=max(res[len(res)-1][1],intervals[i][1])
		}
	}
	return res

}

func max(x,y int)int {
	if x > y {
		return x
	}
	return y
}