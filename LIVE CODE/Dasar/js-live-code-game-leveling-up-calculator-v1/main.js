// function calcByLevel(level) {
//   if (level < 1) {
//     return 'Level tidak valid!';
//   }

//   let exp = 0;
//   for (let i = 1; i < level; i++) {
//     exp += Math.floor(i + 300 * Math.pow(2, i / 7));
//   }

//   return `Untuk mencapai level ${level} membutuhkan ${exp} exp point!`;
//   }

// function calcByExp(exp) {
//   if (exp < 0) {
//     return 'Exp point tidak valid!';
//   }

//   let level = 1;
//   let expNeeded = 0;
//   while (expNeeded <= exp) {
//     expNeeded += Math.floor(level + 300 * Math.pow(2, level / 7));
//     if (expNeeded <= exp) {
//       level++;
//     }
//   }

//   if (level === 1) {
//     return 'Exp point sebanyak ' + exp + ' tidak cukup untuk naik ke level selanjutnya!';
//   } else if (expNeeded - exp === 0) {
//     return 'Cukup untuk mencapai level ' + level + ', semua exp point sudah terpakai!';
//   } else {
//     return 'Cukup untuk mencapai level ' + level + ', dan masih ada ' + (exp - expNeeded + Math.floor(level + 300 * Math.pow(2, level / 7))) + ' exp point yang tersisa!';
//   }
// }


// function gameLevelingUpCalculator(type, data) {
//   if (type !== 'level' && type !== 'exp') {
//     return 'Please input the correct type!';
//   }

//   if (type === 'level') {
//     return calcByLevel(data);
//   } else {
//     return calcByExp(data);
//   }
// }

function calcByLevel(level) {
  const exp = 1200 + (level - 1) * 600;
  return `Untuk mencapai level ${level} membutuhkan ${exp} exp point!`;
}

function calcByExp(exp) {
  let remainingExp = exp;
  let level = 1;
  let expNeeded = 1200;

  while (remainingExp >= expNeeded && level < 20) {
    remainingExp -= expNeeded;
    level++;
    expNeeded = 1200 + (level - 1) * 600;
  }

  if (remainingExp > 0 && level === 1) {
    return `Exp point sebanyak ${exp} tidak cukup untuk naik ke level selanjutnya!`;
  } else if (remainingExp === 0) {
    return `Cukup untuk mencapai level ${level}, semua exp point sudah terpakai!`;
  } else if (remainingExp > 0 && level < 20) {
    return `Cukup untuk mencapai level ${level}, dan masih ada ${remainingExp} exp point yang tersisa!`;
  } else {
    return `Exp point sebanyak ${exp} tidak cukup untuk naik ke level selanjutnya!`;
  }
}

function gameLevelingUpCalculator(type, data) {
  if (type !== 'level' && type !== 'exp') {
    return 'Please input the correct type!';
  }

  if (type === 'level') {
    return calcByLevel(data);
  } else {
    return calcByExp(data);
  }
}


/* 
  example test case

  console.log(gameLevelingUpCalculator('level', 2)); // Untuk mencapai level 2 membutuhkan 1200 exp point!
console.log(gameLevelingUpCalculator('level', 17)); // Untuk mencapai level 17 membutuhkan 19200 exp point!
console.log(gameLevelingUpCalculator('level', 18)); // Untuk mencapai level 18 membutuhkan 20400 exp point!
console.log(gameLevelingUpCalculator('level', 20)); // Untuk mencapai level 20 membutuhkan 26400 exp point!
console.log(gameLevelingUpCalculator('exp', 1200)); // Cukup untuk mencapai level 2, semua exp point sudah terpakai!
console.log(gameLevelingUpCalculator('exp', 3600)); // Cukup untuk mencapai level 4, semua exp point sudah terpakai!
console.log(gameLevelingUpCalculator('exp', 5000)); // Cukup untuk mencapai level 5, dan masih ada 200 exp point yang tersisa!
console.log(gameLevelingUpCalculator('exp', 19200)); // Cukup untuk mencapai level 17, semua exp point sudah terpakai!
console.log(gameLevelingUpCalculator('exp', 22200)); // Cukup untuk mencapai level 18, semua exp point sudah terpakai!
console.log(gameLevelingUpCalculator('exp', 30000)); // Cukup untuk mencapai level 20, dan masih ada 1800 exp point yang tersisa!
console.log(gameLevelingUpCalculator('exp', 300)); // Exp point sebanyak 300 tidak cukup untuk naik ke level selanjutnya!
console.log(gameLevelingUpCalculator('point', 2)); // Please input the correct type!
*/

module.exports = {
  gameLevelingUpCalculator,
  calcByLevel,
  calcByExp,
};