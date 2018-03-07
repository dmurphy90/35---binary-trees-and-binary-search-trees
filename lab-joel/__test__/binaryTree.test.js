'use strict';

const BST = require('../lib/binaryTree');
const TreeNode = require('../lib/nd');

describe('Binary Search Tree', function() {
  let bst = new BST();
  let bst2 = new BST;
  bst.insert(new TreeNode(5));
  bst.insert(new TreeNode(2));
  bst.insert(new TreeNode(8));
  bst.insert(new TreeNode(16));
  bst2.insert(new TreeNode(5));
  bst2.insert(new TreeNode(2));
  bst2.insert(new TreeNode(8));
  bst2.insert(new TreeNode(16));
  describe('Insert Method', () => {
    it('Should contain a root node', () => {
      expect(bst.root.value).toEqual(5);
    });
    it('Should have left and right branches', () => {
      expect(bst.root.left).toBeTruthy();
      expect(bst.root.right).toBeTruthy();
    });
    it('should insert higher value nodes on the right branch', () => {
      expect(bst.root.right.value).toEqual(8);
    });
  });
  describe('Find Method', () => {
    it('Should return a valid node object', () => {
      expect(bst.find(8)).toHaveProperty('value');
      expect(bst.find(8)).toHaveProperty('left');
      expect(bst.find(8)).toHaveProperty('right');
    });
    it('Should return null if the value does not exist in the binary tree', () => {
      expect(bst.find(10)).toBeNull();
    });
  });
  describe('Is Balanced Method', () => {
    it('Should return true if the entire binary search tree is balanced', () => {
      expect(bst.isBalanced(bst.find(5))).toBe(true);
    });
    it('Should return false if the entire binary search tree is not balanced', () => {
      bst.insert(new TreeNode(25));
      bst.insert(new TreeNode(50));
      expect(bst.isBalanced(bst.find(5))).toBe(false);
    });
    it('Should return true if the binary tree is empty', () => {
      let empty = new BST();
      expect(empty.isBalanced({value: null, left: null, right: null})).toBe(true);
    });
  });
  describe('Remove', () => {
    it('Should remove the specified node and replace it', () => {
      bst2.remove(8);
      expect(bst2.root.right.value).toEqual(16);
    });
    it('Should remove the root node and replace it', () => {
      bst2.remove(5);
      expect(bst2.root.value).toEqual(16);
    });
    it('Should not alter anything if the specified root value is not found', () => {
      expect(bst2.remove(100)).toEqual(bst2.root);
    });
  });
});