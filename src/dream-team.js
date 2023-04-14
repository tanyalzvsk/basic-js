const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let res = [];
if (Array.isArray(members)) {

 for (let i=0; i< members.length; i++)
 {  
   
     if (typeof members[i] === 'string' && members[i] !== '')
     {
      res.push(members[i].replace(/\s/g,'').charAt(0));
 }
}
res.sort();
return res.join('').toUpperCase();
}

return false;
}


module.exports = {
  createDreamTeam
};
