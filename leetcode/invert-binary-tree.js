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
  let head;
  head = root;
  let tem;
  function tree(root) {
    if (root == null) return null;

    tem = root.right;
    root.right = root.left;
    root.left = tem;

    tree(root.right);
    tree(root.left);
  }
  tree(root);
  return head;
};
