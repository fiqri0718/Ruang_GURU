function calculate(number1, number2, callback) {
  let hasilcalculator;
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    hasilcalculator = number1 - number2;
  } else if (number1 % 2 === 0 && number2 % 2 !== 0) {
    hasilcalculator = number1 + number2;
  } else {
    hasilcalculator = number1 * number2;
  }
  setTimeout(() => callback(hasilcalculator), 2000);
  }
  
  module.exports = calculate;
  