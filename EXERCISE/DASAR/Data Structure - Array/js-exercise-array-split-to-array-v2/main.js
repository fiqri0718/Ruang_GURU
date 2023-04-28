function splitToArr(str) {
    if (str === undefined) {
        return "Invalid input";
    }
    if (str === "") {
        return "Data not available";
    }
    const nama = str.split(/[^a-zA-Z.]/);
    const hasilsplit = [];
    for (let name of nama) {
        if (name !== "") {
            const awal = name.charAt(0).toUpperCase();
            const akhir = name.slice(1);
            hasilsplit.push(awal + akhir);
        }
    }
    return hasilsplit;
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
console.log(splitToArr(""))
console.log(splitToArr())
// console.log(splitToArr("shelda.alni; pahlevi.fikri - ricky.kurniawan "))

module.exports = splitToArr