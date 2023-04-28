function travelptngn(id, amount) {

  let statusid = "";
  if (id.includes("STD")) {
      statusid = "STUDENT";
  } else if (id.includes("CORP")) {
      statusid = "CORPORATE";
  } else {
      return "Maaf, voucher yang anda miliki tidak valid!";
  }

  let hrgperorng = 0;
  let ptngn = 0;
  if (statusid === "STUDENT") {
      hrgperorng = 20000;
      if (amount > 20) {
          ptngn = 0.2;
      }
  } else if (statusid === "CORPORATE") {
      hrgperorng = 50000;
      if (amount > 30) {
          ptngn = 0.25;
      }
  }

  let ttlhrg = hrgperorng * amount;
  let totalptngn = ttlhrg * ptngn;
  let hargakhir = ttlhrg - totalptngn;

  return `Selamat! Voucher untuk ${statusid} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${hargakhir}.`;
  }

console.log(travelptngn("STD9845-8461-121", 11));
console.log(travelptngn("CORP8135-4612-912", 30));
console.log(travelptngn("STD7601-639-184", 36));
console.log(travelptngn("CORP5611-8456-999", 31));
console.log(travelptngn("8347-7-9124365", 99));
console.log(travelptngn("XYZ8135461-2-912", 1));

module.exports = travelptngn
