const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
   str = String(str);
  }
  let separator = options.separator;
  let repeatTimes = options.repeatTimes;
  let addition = options.addition;
 
  let additionSeparator = options.additionSeparator;
  let additionRepeatTimes = options.additionRepeatTimes;
  if (options.separator !== undefined) {
      let separator = "+";
    }
  if (options.repeatTimes !== undefined) {
      let repeatTimes = 1;
    }
    if (options.addition !== undefined) {
      addition = String(options.addition);
    if (options.additionSeparator == undefined) {
        let additionSeparator = "|";
      }
    if (additionRepeatTimes == undefined) {
        let additionRepeatTimes = 1;
      } 
    
    }
    else {
      let addition = '';
    }
    let repeated = new Array(repeatTimes).fill(str + new Array(additionRepeatTimes).fill(addition).join(additionSeparator)).join(separator);
  return repeated;
}

module.exports = {
  repeater
};
