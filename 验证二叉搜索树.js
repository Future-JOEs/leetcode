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
 * @return {boolean}
 */
var isValidBST = function(root) {
  // 递归每个节点
  // 需要保留子节点的上界和下界
  const dfs = (root, lower, upper) => {
    if (!root) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }
    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
  };
  return dfs(root, -Infinity, Infinity);
};

// TODO: 中序遍历的解法需要补充