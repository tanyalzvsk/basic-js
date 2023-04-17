const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  res = {};
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i];
    let oneAddress = domain.split(".");
    oneAddress.reverse();
    let part = '';
    for (let j = 0; j < oneAddress.length; j++) {
      part += "." + oneAddress[j];
      if (part in res) {
        res[part]++;
      }
      else {
        res[part] = 1;
      }
    }
  }
  return res;
}


module.exports = {
  getDNSStats
};
