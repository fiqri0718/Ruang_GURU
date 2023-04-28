function counterApp(arr) {
if (arr === undefined) {
    return "Invalid input";
} else if (arr.length === 0) {
    return "Data not found";
} else {
    const totaldta = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (totaldta[element] === undefined) {
            totaldta[element] = 1;
        } else {
            totaldta[element]++;
        }
    }
    return totaldta;
}
}

console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp
