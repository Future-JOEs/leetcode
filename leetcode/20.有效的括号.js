 /*
  * @lc app=leetcode.cn id=20 lang=javascript
  *
  * [20] 有效的括号
  *
  * https://leetcode-cn.com/problems/valid-parentheses/description/
  *
  * algorithms
  * Easy (36.77%)
  * Total Accepted:    53.2K
  * Total Submissions: 144.5K
  * Testcase Example:  '"()"'
  *
  * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
  * 
  * 有效字符串需满足：
  * 
  * 
  * 左括号必须用相同类型的右括号闭合。
  * 左括号必须以正确的顺序闭合。
  * 
  * 
  * 注意空字符串可被认为是有效字符串。
  * 
  * 示例 1:
  * 
  * 输入: "()"
  * 输出: true
  * 
  * 
  * 示例 2:
  * 
  * 输入: "()[]{}"
  * 输出: true
  * 
  * 
  * 示例 3:
  * 
  * 输入: "(]"
  * 输出: false
  * 
  * 
  * 示例 4:
  * 
  * 输入: "([)]"
  * 输出: false
  * 
  * 
  * 示例 5:
  * 
  * 输入: "{[]}"
  * 输出: true
  * 
  */
 /**
  * @param {string} s
  * @return {boolean}
  */
 var isValid = function (s) {
     //依次遍历
     //使用栈解决
     //js中利用push()和pop()方法来实现栈
     //栈 后进先出（LIFO）
     var arr = s.split("")
     //创建一个栈
     var sta = []
     //遍历
     for (i = 0; i < arr.length; i++) {
         if (arr[i] == "{" || arr[i] == "[" || arr[i] == "(") {
             //入栈
             sta.push(arr[i])
         } else if (arr[i] == "}") {
             //出栈操作
             //检查最后一位是不是对应的括号 
             //出栈
             if (sta[sta.length - 1] == "{") {
                 //将{移除栈
                 sta.pop()
             } else {            
                 return false
             }
         } else if (arr[i] == "]") {
             //检查最后一位是不是对应的括号 
             //出栈
             if (sta[sta.length - 1] == "[") {
                 //将[移除栈
                 sta.pop()
             } else {
                 return false
             }
         } else if (arr[i] == ")") {
             //检查最后一位是不是对应的括号 
             //出栈
             if (sta[sta.length - 1] == "(") {
                 //将(移除栈
                 sta.pop()
             } else {
                 return false
             }
         }
     }
     //再加一个判断
     if(sta=="")
     return true
     else
     return false
 }
 isValid("{[]}")