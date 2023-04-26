function printNumber(totalNumber) {
    let hasil = '';
    let angka = 1;

    for (let i = 1; i <= totalNumber; i++) {
        hasil += angka;
        angka++;
        if (angka > 3) {
            angka = 1;
        }
    }

    return hasil;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber