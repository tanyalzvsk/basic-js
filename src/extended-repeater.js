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
  let separator = options.separator || "+";
  let repeatTimes = options.repeatTimes || 1;
  let addition = "";
  if (options.addition !== undefined) {
    addition = String(options.addition);
  }
  let additionSeparator = options.additionSeparator || '|';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
 
  let repeated = '';
for (let i = 0; i < repeatTimes; i++) {
  repeated += str;
  for (let j = 0; j < additionRepeatTimes; j++) {
    if (options.addition !== undefined) {
      repeated += addition;
    }
    if (j < additionRepeatTimes - 1) {
      repeated += additionSeparator;
    }
  }
  if (i < repeatTimes - 1) {
    repeated += separator;
  }
}
  return repeated;
}

module.exports = {
  repeater
};
