/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.99%)
 * Total Accepted:    18.8K
 * Total Submissions: 39.9K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let isOver = 0;
    let i = a.length - 1;
    let j = b.length -1;
    let res = '';
    while(i >= 0 || j >= 0){
        const av = a[i] || 0;
        const bv = b[j] || 0;
        let cv = (~~av) + (~~bv) + (isOver);
        if(cv >= 2){
            cv = cv - 2;
            isOver = 1;
        }else{
            isOver = 0;
        }
        res = cv + res;
        i--;
        j--;
    }
    if(isOver){
       res = isOver + res;
    }
    return res;

    };
addBinary(11,1)

