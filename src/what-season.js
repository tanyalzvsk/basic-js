const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (!(date instanceof Date && !isNaN(date))) {
    throw new Error('Invalid date!');
}
const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const newDate = new Date(year, month, day);

    if (newDate.getFullYear() !== year || newDate.getMonth() !== month || newDate.getDate() !== day) {
        throw new Error('Invalid date!');
    }
  if (!isNaN(date.getTime())){
    let month = date.getMonth();
    if (month == 11 || month == 1 || month == 0) {
        return 'winter';
    }
    else if (month >= 2 && month <= 4) {
        return 'spring';
    }
    else if (month >=5 && month <= 7){
        return 'summer';
    }
    else {
        return 'autumn';
    }
  }
}
  getSeason(new Date(2020, 02, 31));

module.exports = {
  getSeason
};
