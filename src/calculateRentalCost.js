/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const weekOrMoreDiscount = 50;
  const moreThanThreeDays = 20;
  const longTerm = 6;
  const midlTerm = 3;
  const shortTerm = 2;
  const PriceForDays = basePrice * days;

  if (days > longTerm) {
    return PriceForDays - weekOrMoreDiscount;
  }

  if (days >= midlTerm) {
    return PriceForDays - moreThanThreeDays;
  }

  if (days <= shortTerm) {
    return PriceForDays;
  }
}

module.exports = calculateRentalCost;
