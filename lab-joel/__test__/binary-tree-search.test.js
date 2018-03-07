'use strict';

const TreeNode = require('../lib/nd');
const BinaryTree = require('../lib/binaryTree');
require('jest');

describe('Binary Tree Traversal', function() {
  let one = new TreeNode(1);
  let two = new TreeNode(2);
  let three = new TreeNode(3);
  let four = new TreeNode(4);
  let five = new TreeNode(5);
  let six = new TreeNode(6);
  let seven = new TreeNode(7);
  let eight = new TreeNode(8);
  let nine = new TreeNode(9);

  let binaryTree = new BinaryTree();
  binaryTree.root = one;
  one.left = two;
  one.right = three;
  two.left = six;
  three.left = four;
  three.right = five;
  six.right = seven;
  seven.left = eight;
  seven.right = nine;
  describe('In Order Traversal', function() {
    it('Should return an array of values', () => {
      expect(binaryTree.inOrderTraversal()).toBeInstanceOf(Array);
    });
    it('Should return the correct node values according to In Order Traversal', () => {
      expect(binaryTree.inOrderTraversal()).toEqual([ 6, 8, 7, 9, 2, 1, 4, 3, 5 ]);
    });
    it('Should return null if the root does not exist in the binary tree', () => {
      let binaryTwo = new BinaryTree();
      expect(binaryTwo.inOrderTraversal()).toBeNull();
    });
  });
  describe('Pre Order Traversal', () => {
    it('Should return an array of values', () => {
      expect(binaryTree.preOrderTraversal()).toBeInstanceOf(Array);
    });
    it('Should return the correct node values according to Pre Order Traversal', () => {
      expect(binaryTree.preOrderTraversal()).toEqual([ 1, 2, 6, 7, 8, 9, 3, 4, 5 ]);
    });
    it('Should return null if the root does not exist in the binary tree', () => {
      let binaryTwo = new BinaryTree();
      expect(binaryTwo.preOrderTraversal()).toBeNull();
    });
  });
  describe('Post Order Traversal', () => {
    it('Should return an array of values', () => {
      expect(binaryTree.postOrderTraversal()).toBeInstanceOf(Array);
    });
    it('Should return the correct node values according to Pre Order Traversal', () => {
      expect(binaryTree.postOrderTraversal()).toEqual([ 8, 9, 7, 6, 2, 4, 5, 3, 1 ]);
    });
    it('Should return null if the root does not exist in the binary tree', () => {
      let binaryTwo = new BinaryTree();
      expect(binaryTwo.postOrderTraversal()).toBeNull();
    });
  });
});