function stockOpname(items) {
    let stokitem = {
        "Ram": 10,
        "Motherboard": 4,
        "Processor": 5,
        "SSD": 8,
        "PSU": 12,
        "Cooling": 5,
    }
    if (items.length === 0) {
        return "Data not found";
    }

    items.forEach(item => {
        let namaitem = item[0];
        let itemterjual = item[1];

        if (stokitem[namaitem]) {
            stokitem[namaitem] -= itemterjual;
        }
    });

    return stokitem;
}

let items1 = [
    ["PSU", 6],
    ["SSD", 3],
    ["Motherboard", 3],
    ["Ram", 2],
    ["Cooling", 4],
    ["Processor", 5],
]

let items2 = [
    ["SSD", 5],
    ["Motherboard", 4],
    ["Processor", 1],
    ["PSU", 3],
    ["Cooling", 5],
    ["Ram", 5],
]

console.log(stockOpname(items1));
console.log(stockOpname(items2));
console.log(stockOpname([]));

module.exports = stockOpname