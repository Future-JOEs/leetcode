/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.27%)
 * Total Accepted:    58.5K
 * Total Submissions: 181.2K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    //找出最短的那一个字符串
    var min = 100
    var index = 0;
    //检验是不是数组数组是否为空
    //以后记得要判断
    if (!Array.isArray(strs)||strs.length<1) {
        return ""
    }
        for (i = 0; i < strs.length; i++) {
            if (strs[i].split("").length < min) {
                min = strs[i].split("").length
                index = i
            }
        }
        //得到了最短的那一个字符串
        //得到公共前缀
        //遍历出最短字符串的所有前缀，存放到数组中
        var arr = []
        for (i = 1; i <= min; i++) {
            //切割字符串
            arr.push(strs[index].slice(0, i))
        }
        //得到了所有可能的前缀
        //进行比较 从长到短
        for (i = arr.length - 1; i >= 0; i--) {
            var flag = 0
            for (m = 0; m < strs.length; m++) {
                if (strs[m].indexOf(arr[i]) != 0) {
                    break
                } else {
                    flag++
                }
            }
            //记录当前前缀
            if (flag == strs.length) {
                return arr[i]
            }
        }
    
    return ""
}
longestCommonPrefix(["a"])