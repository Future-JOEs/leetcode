/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }
  var left_have = lowestCommonAncestor(root.left, p, q);
  var right_have = lowestCommonAncestor(root.right, p, q);
  if (right_have && left_have) {
    return root;
  } else {
    return left_have ? left_have : right_have;
  }
};
