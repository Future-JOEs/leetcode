/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  var sortedIntervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  var merged = [];
  // 遍历数组
  for (var i = 0; i < sortedIntervals.length; i++) {
    if (merged.length === 0 || sortedIntervals[i][0] > merged[merged.length-1][1]) {
      // 推入数组
      merged.push([sortedIntervals[i][0], sortedIntervals[i][1]]);
    } else {
      // 合并区间
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        sortedIntervals[i][1],
      );
    }
  }
  return merged;
};
