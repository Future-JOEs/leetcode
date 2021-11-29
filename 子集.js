/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // 递归 回溯
  var n = nums.length;
  var res = [];
  nums.sort((a, b) => a - b);
  // start 状态变量
  // path 路径结果 要把每一条path加入结果集
  var backTrace = (nums, path, start) => {
    res.push([...path]);
    // 此题不存在结束条件
    for (var i = start; i < n; i++) {
      path.push(nums[i]);
      backTrace(nums, path, i + 1);
      path.pop();
    }
  };
  backTrace(nums, [], 0);
  return res;
};
