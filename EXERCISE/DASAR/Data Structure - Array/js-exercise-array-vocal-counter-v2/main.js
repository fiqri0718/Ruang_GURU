function vocalCounter(array) {
    const huruf = "aeiouAEIOU";
    let jmlhvocal = 0;
    let hasil = "";
    for (let element of array) {
        if (typeof element === "string") {
            for (let char of element) {
                if (huruf.includes(char)) {
                    jmlhvocal++;
                    hasil += char;
                }
            }
        } else if (typeof element === "number") {
            const str = element.toString();
            for (let char of str) {
                if (huruf.includes(char)) {
                    jmlhvocal++;
                    hasil += char;
                }
            }
        }
    }
    if (jmlhvocal === 0) {
        return "Tidak ada huruf vokal yang ditemukan";
    } else {
        return `Jumlah vokal yang ditemukan sebanyak ${jmlhvocal} berupa ${hasil}`;
    }
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter