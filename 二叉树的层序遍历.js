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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // 带深度的递归
  const res = [];
  const dfs = (root, depth) => {
    if (!root) {
      return;
    }
    // 前序遍历
    if (res[depth]) {
      res[depth].push(root.val);
    } else {
      res[depth] = [root.val];
    }
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  };
  dfs(root, 0);
  return res;
};
