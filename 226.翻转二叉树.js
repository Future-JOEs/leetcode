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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const dfs = (root) => {
    if (!root) {
      return;
    }
    if (root.left) {
      dfs(root.left);
    }
    if (root.right) {
      dfs(root.right);
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  };
  dfs(root);
  return root;
};
