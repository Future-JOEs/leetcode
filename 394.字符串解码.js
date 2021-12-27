/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s, i = 0) {
  let num = '';
  let str = '';

  while (i < s.length) {
    if (s[i] <= '9' && s[i] >= 0) {
      num += s[i];
      i++;
    }

    if (s[i] <= 'z' && s[i] >= 'a') {
      str += s[i];
      i++;
    }
    if ('[' === s[i]) {
      let [tmp, nextIndex] = decodeString(s, i + 1);
      str += tmp.repeat(num || 1);
      i = nextIndex;
      num = '';
    }

    if (s[i] === ']') {
      return [str, i + 1];
    }
  }
  return str;
};

// @lc code=end
