function calcByQuantity(quantity) {
  let totalUang;

  if (quantity <= 35) {
    totalUang = quantity * 650;
  } else {
    totalUang = 35 * 650;
    totalUang = (35*650) + (quantity - 35) * 600;
  }
  return `Jumlah uang yang harus dibayarkan untuk order ${quantity} adalah ${totalUang}!`;
}

function calcByMoney(money) {
  let jumlahBarang;
  let sisaUang;
  let sisaBarang;

  if (money < 650) {
    return `Uang sebesar ${money} tidak cukup untuk membeli barang!`;
  }
  if (money > 650) {
    jumlahBarang = Math.floor(money / 650);
    if (jumlahBarang <= 35) {
      sisaUang = money - (jumlahBarang * 650);
    } else {
      sisaUang = money - (35 * 650);
      sisaBarang = Math.floor(money-(35*650) / 600);
      jumlahBarang = 35 + sisaBarang;
      sisaUang = sisaUang - (sisaBarang * 600);
    }
    if (sisaUang == 0) {
      return `Jumlah barang yang dapat dibeli adalah ${jumlahBarang}, uang habis!`;
    } else {
      return `Jumlah barang yang dapat dibeli adalah ${jumlahBarang}, sisa uang ${sisaUang}!`;
    }
  }
}

function bulkOrderCalculator(type, data) {

  if (type == "money") {
    return calcByMoney(data);
  } else if (type == "quantity") {
    return calcByQuantity(data);
  } else {
    return "Invalid type!"
  }
}
/* 
  example test case

  console.log(bulkOrderCalculator('money', 100000)); // Jumlah barang yang dapat dibeli adalah 163, sisa uang 450!
  console.log(bulkOrderCalculator('quantity', 100)); // Jumlah uang yang harus dibayarkan untuk order 100 adalah 61750!
  console.log(bulkOrderCalculator('money', 100)); // Uang sebesar 100 tidak cukup untuk membeli barang!
  console.log(bulkOrderCalculator('money', 1000)); // Jumlah barang yang dapat dibeli adalah 1, sisa uang 350!
  console.log(bulkOrderCalculator('money', 1300)); Jumlah barang yang dapat dibeli adalah 2, uang habis!
*/

module.exports = {
  bulkOrderCalculator,
  calcByQuantity,
  calcByMoney,
};
