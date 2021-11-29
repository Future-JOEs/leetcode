/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum2 = function(candidates, target) {
//   // 回溯+剪枝 三数之和 使用rest
//   if (candidates.length === 0) {
//     return [];
//   }
//   const nums = candidates.sort((a, b) => a - b);
//   const n = nums.length;
//   const res = [];
//   const path = [];
//   const backTrace = (nums, depth) => {
//     if (depth === n) {
//       return;
//     }
//     for (var i = 0; i < n; i++) {
//       path.push(nums[i]);
//       console.log(path, depth);
//       const total = path.reduce((total, num) => total + num);
//       if (total === target) {
//         console.log('剪枝');
//         res.push(path);
//         // 剪枝
//         path.pop();
//         path.pop();
//         break;
//       } else if (total > target) {
//         console.log('剪枝');
//         path.pop();
//         path.pop();
//         break;
//       }
//       backTrace(nums, depth + 1);
//     }
//   };
//   backTrace(nums, 0);
//   return res;
// };

// combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);

var combinationSum2 = function(candidates, target) {
  const res = [];
  const path = [];
  const dfs = (begin, path, residue) => {
    if (residue === 0) {
      res.push([...path]);
      return;
    }
    for (var i = begin; i < candidates.length; i++) {
      if (candidates[i] > residue) {
        break;
      }

      if (i > begin && candidates[i - 1] === candidates[i]) {
        continue;
      }
      path.push(candidates[i]);
      console.log(path);
      dfs(i + 1, path, residue - candidates[i]);
      path.pop();
    }
  };
  const n = candidates.length;
  if (n === 0) {
    return [];
  }
  candidates.sort((a, b) => a - b);
  dfs(0, path, target);
  return res;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
