function travelSeat(passengers, seatColumn) {
    if (seatColumn <= 0) {
        return "Invalid number";
    }
    if (passengers.length === 0) {
        return "Oops! tickets not sold!";
    }
    passengers.sort();
    const tdudukbariss = Math.ceil(passengers.length / seatColumn);
    const tduduk = [];
    let passengerIndex = 0;
    for (let row = 0; row < tdudukbariss; row++) {
        const tdudukbaris = [];
        for (let col = 0; col < seatColumn; col++) {
            if (passengerIndex < passengers.length) {
                tdudukbaris.push(passengers[passengerIndex]);
                passengerIndex++;
            } else {
                tdudukbaris.push("Seat available");
            }
        }
        tduduk.push(tdudukbaris);
    }
    if (passengerIndex < passengers.length) {
        return "Oops! tickets not sold!";
    }
    return tduduk;
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat