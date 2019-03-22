 /*
  * @lc app=leetcode.cn id=53 lang=javascript
  *
  * [53] 最大子序和
  *
  * https://leetcode-cn.com/problems/maximum-subarray/description/
  *
  * algorithms
  * Easy (43.29%)
  * Total Accepted:    42.5K
  * Total Submissions: 98.2K
  * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
  *
  * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
  * 
  * 示例:
  * 
  * 输入: [-2,1,-3,4,-1,2,1,-5,4],
  * 输出: 6
  * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
  * 
  * 
  * 进阶:
  * 
  * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
  * 
  */
 /**
  * @param {number[]} nums
  * @return {number}
  */
 var maxSubArray = function (nums) {
     //暴力滑窗去做复杂度O(n^2)
     //     定义一个函数f(n)，以第n个数为结束点的子数列的最大和，存在一个递推关系f(n) = max(f(n-1) + A[n], A[n]);
     // 将这些最大和保存下来后，取最大的那个就是，最大子数组和。因为最大连续子数组 等价于 最大的以n个数为结束点的子数列和 

     //先检验
     if (nums.length < 1)
         return null
     // 最大子序和
     var maxsofar = nums[0];

     // 包含最后一个节点的最大子序和
     var maxending = nums[0];

     for (var i = 1; i < nums.length; i++) {
         maxending = Math.max(nums[i], maxending + nums[i]);
         // sum>0 即 sum+n>n，所以当前取 sum+n
		// sum<=0 则 sum+n<=n, 所以取 n
         maxsofar = Math.max(maxsofar, maxending);
     }
     return maxsofar;
 }