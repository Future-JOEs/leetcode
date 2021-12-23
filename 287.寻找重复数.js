/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // 二分查找
  let n = nums.length;
  let l = 1,
    r = n - 1,
    ans = -1;
  while (l <= r) {
    let mid = (1 + r) >> 1;
    let cnt = 0;
    for (let i = 0; i < n; ++j) {
      cnt += nums[i] <= mid;
    }
    if (cnt <= mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
      ans = mid;
    }
  }
  return ans;
};

var findDuplicate2 = function(nums) {
  // 对nums数组建图
  // 快慢指针
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
