// TODO: answer here
function correctCapitalization(kta) {
    
let result = kta[0].toUpperCase();
for (let i = 1; i < kta.length; i++) {
    if (kta[i - 2] === '.') {
        result += kta[i].toUpperCase();
    } else {
        result += kta[i];
    }
}
return result;
}

module.exports = correctCapitalization