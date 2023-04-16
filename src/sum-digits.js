const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let counter = 0;
  let numArr = n.toString(10).split('').map(int => parseInt(int, 10));
  while (numArr.length > 0) {
  for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] == 9){
          return numArr[numArr.length - 1];
      }
     counter += numArr[numArr.length - 1];
     numArr.splice(numArr.length - 1);
     
        }
        
    }
    return counter;
}

module.exports = {
  getSumOfDigits
};
