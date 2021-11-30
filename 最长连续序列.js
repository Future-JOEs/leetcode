/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const nums_set = new Set();
  for (var num of nums) {
    nums_set.add(num);
  }

  var res_length = 0;

  // 遍历
  for (var num of nums_set) {
    if (!nums_set.has(num - 1)) {
      let length = 1;
      let start_num = num;
      while (nums_set.has(start_num + 1)) {
        length++;
        start_num++;
      }
      res_length = Math.max(res_length, length);
    }
  }
  return res_length;
};
