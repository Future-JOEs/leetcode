/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const resArr = [];
  const dfs = (root) => {
    if (!root) {
      return;
    }
    resArr.push(root);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  for (var i = 0; i < resArr.length - 1; i++) {
    resArr[i].right = resArr[i + 1];
    resArr[i].left = null;
  }
  return resArr[0];
};
