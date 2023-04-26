function trasureHunter(dailyLog) {
  let hrt = 0;

  for (let i = 0; i < dailyLog.length; i++) {
    if (dailyLog[i] === "$") {
      hrt = hrt + 100;
    } else if (dailyLog[i] === "x") {
      if (hrt > 10) {
        hrt = hrt - 10;
      } else {
        hrt = 0;
      }
    }else{
      if (hrt!==0){
        hrt=hrt-(hrt*0.5);
      }
    }
  }

  return hrt;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;