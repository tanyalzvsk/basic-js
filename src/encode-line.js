const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let res = '';
  let s = str.split('');
  for (let i = 0; i < s.length; i++){
    if (s[i] == s[i+1]) {
      counter++;
    }
    else {
      if (counter > 1) {
        res += counter + s[i];
      }
      else {
        res += s[i];
      }
      counter = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
