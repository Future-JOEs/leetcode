/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 回溯
  var n = nums.length;
  var res = [[]];
  nums = nums.sort((a,b)=>a-b);
  backTrack(nums,[]);
};

function backTrack(nums, path) {
    for(var i =0;i<nums.length;i++){
        
    }
}
