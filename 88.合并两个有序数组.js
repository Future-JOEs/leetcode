/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (43.14%)
 * Total Accepted:    33.7K
 * Total Submissions: 78K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    //暴力方法
    //全插入尾部->重新排序
    //应该使用的方法
    //依次插入调换位置
    // nums1.splice(m, nums1.length - m);
    // nums2.splice(n, nums2.length - n);
    // nums1.push(...nums2);
    // nums1.sort((a,b)=>(a-b));
    // 我们还是不要这样写了
    //归并排序的理念
    //但归并排序属于外部排序 需要额外的空间
    //插入排序 复杂度太高
    //
    var i = 0
    var j = 0
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            i++
        } else {
            m += 1 //后移
            for (var a = m; a > i + 1; a--) {
                nums1[a - 1] = nums1[a - 2] //依次移动
            }
            nums1[i] = nums2[j];
            j++
        }
    }
    while (j < n) {
        nums1[i++] = nums2[j++] //因为已排序，n>m的部分直接赋上去就行
    }
};

//希望以后再用归并排序做一次
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)