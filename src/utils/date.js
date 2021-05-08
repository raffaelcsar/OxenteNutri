const moment = require("moment");

/**
 * 
 * @param {yyyy-mm-dd} date 
 */
function validateDate(date) {
  if(!moment(date, 'YYYY-MM-DD').isValid()) return false

  return true
}

module.exports = validateDate