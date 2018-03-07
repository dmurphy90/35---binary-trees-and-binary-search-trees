'use strict';

const Nd = require('./nd.js');

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(node) {
    if(!this.root) {
      this.root = node;
    } else {
      this._insert(this.root, node);
    }
  }

  _insert(root, node) {
    if(node.value < root.value) {
      if(!root.left) {
        root.left = node;
      } else {
        this._insert(root.left, node);
      }
    } else {
      if(!root.right) {
        root.right = node;
      } else {
        this._insert(root.right, node);
      }
    }
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }
  //================
  // last left NODE
  //================
  find(value) {
    return this._find(this.root, value);
  }

  _find(root, value) {
    if(!root) return null;
    if(root.value === value) return root;
    if(root.value < value) return this._find(root.right, value);
    return this._find(root.left, value);
  }
  
  findMin(node) {
    return node.left ? this.findMin(node.left) : node.value;
  }
  //=======================================
  // finds first parent without 2 children
  //=======================================
  findMinHeight(node = this.root) {
    if(node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if(left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  //=================
  // last right NODE
  //=================
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }
  //========================
  // finds the lowest level
  //========================
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if(left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrderTraversal(){
    if(!this.root) return null;
    this.inOrderArr = [];
    this._inOrderTraversal(this.root);
    return this.inOrderArr;
  }
 
  _inOrderTraversal(root){
    if(root === null)
      return null;
 
    this._inOrderTraversal(root.left);
    console.log(`Visiting ${root.value}`);
    this.inOrderArr.push(root.value);
    this._inOrderTraversal(root.right);
  }

  preOrderTraversal() {
    if(this.root == null) return null;
    this.preOrderArr = [];
    this._preOrderTraversal(this.root);
    return this.preOrderArr;
  }

  _preOrderTraversal(root) {
    if(root === null) return null;

    console.log(`Visiting ${root.value}`);
    this.preOrderArr.push(root.value);
    this._preOrderTraversal(root.left);
    this._preOrderTraversal(root.right);
  }
 
  postOrderTraversal() {
    if(this.root == null) return null;
    this.postOrderArr = [];
    this._postOrderTraversal(this.root);
    return this.postOrderArr;
  }
    
  _postOrderTraversal(root) {
    if(root === null) return null;

    this._postOrderTraversal(root.left);
    this._postOrderTraversal(root.right);
    console.log(`Visiting ${root.value}`);
    this.postOrderArr.push(root.value);
  }

  isPresent(value) {
    let current = this.root;
    while(current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(value) {
    return this._remove(this.root, value);
  }

  _remove(root, value) {
    if (root) {
      if (value < root.value) {
        root.left = this._remove(root.left, value);
      } else if (value > root.value) {
        root.right = this._remove(root.right, value);
      } else if (root.left && root.right) {
        root.value = this.findMin(root.right);
        root.right = this._remove(root.right, root.value);
      } else {
        root = root.left || root.right;
      }
    }
    return root;
  }


}



module.exports = binarySearchTree;
