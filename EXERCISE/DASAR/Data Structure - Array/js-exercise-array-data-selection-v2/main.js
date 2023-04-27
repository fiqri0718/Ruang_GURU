function dataSelection(data, amount, start) {
    let hasildta = [];
    if (data.length === 0) {
        return "Data not found";
    }
    if (typeof amount === "string" || typeof start === "string") {
        return "Invalid command";
    }
    if (amount < 1) {
        return "Minimum amount is 1";
    } 
    if (start < 0) {
        return "Starting number cannot be below 0";
    } else {
        for (let i = start - 1; i < data.length; i++) {
            if (hasildta.length < amount) {
                hasildta.push(data[i])
            }

        }
        return hasildta;
    }
}

// function dataSelection(data, amount, start) {

//     const dataSelection = []
//     // Periksa apakah jumlah dan awal adalah angka
//     if (typeof amount !== "number" || typeof start !== "number") {
//         return "Invalid command";
//     }
//     // Periksa apakah array data kosong
//     if (data.length === 0) {
//         return "Data not found";
//     }

//     // Periksa apakah jumlahnya kurang dari 1
//     if (amount < 1) {
//         return "Minimum amount is 1";
//     }


//     // Periksa apakah mulai di bawah 0
//     if (start < 0) {
//         return "Starting number cannot be below 0";
//     } else {
//         for (let i = start - 1; i < data.length; i++) {
//             if (dataSelection.length < amount) {
//                 dataSelection.push(data[i])
//             }

//         }
//         return dataSelection;
//     }
// }


console.log(dataSelection(["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"], 2, 3));
console.log(dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1));
console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
console.log(dataSelection(["Fauzan", "Uli", "Vika"], 1, 3));
console.log(dataSelection([], 1, 3));

module.exports = dataSelection;