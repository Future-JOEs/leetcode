/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (48.52%)
 * Total Accepted:    23.6K
 * Total Submissions: 48.6K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
//题目描述的不是很好
//这题的题目描述明显有问题，应该是这样的： 有一个数组，第一项是"1"，
//后面每项依次是前一项的描述，即第二项是1个1("11")，第三个是2个1("21")，
//第四个是1个1、1个2("1112")，以此类推，求数组的第N项。
// var countAndSay = function(n) {
//  let strs= []//初始化输出字符串数组
//  strs[0]='1'
//  let str//存放每次循环的结果字符串
//  let value //存放待比较的值
//  let count //存放相同字符的数量

//  for (let i = 0; i < n - 1; i++) {
//     count = 0;
//     str = ''
//     for (let j = 0; j < strs[i].length; j++) {
//         j === 0 ? value = strs[i][0] : '';  //设置value为初始值

//         //比较str[i][j]===value，通过count++，不通过重新设置value的值，并重置count=1
//         if (strs[i][j] === value) {
//             count++;
//         }
//         else {
//             str = str.concat(count + value)
//             count = 1;
//             value = strs[i][j];
//         }
//         //当j=last时，连接一下字符串
//         if (j === strs[i].length - 1) {
//             str = str.concat(count + value)
//         }
//     }
//     strs[i + 1] = str;  //将本次循环的结果赋值给下一个strs
// }

// return strs[n - 1]
// };
var countAndSay = function (n) {
    var base = '1'
    function count (str) {
       var cur = str[0]
       var len = 1
       var res = ""
       for (var i = 1; i <= str.length; i++){
           if (str[i] === cur){
               len++
           } else {
               res += len + cur
               cur = str[i]
               len = 1
           }
       }
       return res
   }
   for (var i = 2; i <= n; i++){
       base = count(base)
   }
   return base
};