'use strict'

const bts = require('../lib/binaryTree');

describe('binaryTree.js', () => {


  describe('validation', () => {


    describe('valid inputs', () => {

      let testBTS = new bts();
      testBTS.add(30);
      testBTS.add(45);
      testBTS.add(40);
      testBTS.add(41);
      testBTS.add(20);
      testBTS.add(21);
      testBTS.add(19);
      it('should return true for a balanced tree', () => {
        console.log(testBTS.preOrder());


      });
    });
  });
});
