/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let total = 0;
  let discount = 0;

  total = days * 40;

  if( days >= 7 ) {
    discount = 50;
  } else if() {
    discount = 20;
  } 

  return total - discount;
}

module.exports = calculateRentalCost;
