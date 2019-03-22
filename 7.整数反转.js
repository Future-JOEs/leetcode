/*
 * @Author: QYJ 
 * @Date: 2019-03-15 14:21:41 
 * @Last Modified by: QYJ
 * @Last Modified time: 2019-03-15 14:22:28
 */
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.88%)
 * Total Accepted:    93.7K
 * Total Submissions: 293.7K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
//数学方法更为简单
//这段又臭又长
//但数学方法要注意数据溢出的问题
var reverse = function (x) {
    one = x.toString().split("", 1)
    if (one == '-') {
        var res = "-" + x.toString().substr(1).split("").reverse().join("")
        if (res < (Math.pow(-2, 31))) {
            return 0
        }else{
            return res
        }
    } else {
        var res = x.toString().split("").reverse().join("")
        if (res > (Math.pow(2, 31)) - 1) {
            return 0
        } else {
            return res
        }
    }
};

reverse(1534236469)