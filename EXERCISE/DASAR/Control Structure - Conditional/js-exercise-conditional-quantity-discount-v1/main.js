function quantityDiscount(quantity, price) {
  let discountedPrice = 0;
  const pjk = 0.11; // 11/100

  if (quantity >= 10) {
    discountedPrice = (quantity * price) * 0.2;
  } else if (quantity >= 5) {
    discountedPrice = (quantity * price) * 0.15;
  } 

  const subtotal=(quantity*price)-discountedPrice;
  return subtotal+pjk*subtotal;
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;