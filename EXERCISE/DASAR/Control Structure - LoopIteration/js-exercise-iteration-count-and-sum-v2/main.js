function countAndSum(number) {
  //your code here
  let jmlh = 0;
  for (let i = 1; i <= number; i++) {
    jmlh += i % 3;
    if (i % 3 === 0) {
      jmlh += 3;
    }
  }
  return jmlh;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;