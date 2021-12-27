/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
  var topKFrequent = function(nums, k) {
    // nlogn 的时间复杂度 想必就是二分了
    // 建立一个小顶堆 如果堆的元素小于k，就可以直接插入堆
    // 如果堆的元素个数等于 k，则检查堆顶与当前出现次数的大小。如果堆顶更大，说明至少有 kk 个数字的出现次数比当前值大，故舍弃当前值；否则，就弹出堆顶，并将当前值插入堆中。

    const obj = {};
    for (let i = 0; i < nums.length; i++) {
      if (!obj[nums[i]]) {
        obj[nums[i]] = 1;
      } else {
        obj[nums[i]]++;
      }
    }

    console.log(obj);

    const res = Object.keys(obj)
      .map(key => ({ key, value: obj[key] }))
      .sort((a, b) => {
        return b.value - a.value;
      })
      .slice(0, k)
      .map(item => item.key - 0);

    return res;
  };
// @lc code=end
