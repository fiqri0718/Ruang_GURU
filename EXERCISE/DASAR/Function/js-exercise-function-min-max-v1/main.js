// TODO: answer here

function nilaiminnilaimax(str) {
    let nilaimin = str[0];
    let nilaimax = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] < nilaimin) {
            nilaimin = str[i];
        }
        if (str[i] > nilaimax) {
            nilaimax = str[i];
        }
    }
    if (nilaimin === nilaimax) {
        return `Nilai terkecil dan terbesar adalah ${nilaimin}`;
    } else {
        return `Nilai terkecil adalah ${nilaimin}, dan terbesar adalah ${nilaimax}`;
    }
}
module.exports = nilaiminnilaimax;