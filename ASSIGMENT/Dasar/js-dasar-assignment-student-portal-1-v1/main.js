function process_argv() {
    const {
        argv
    } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    const namaprogramstudi = {
        ACC: "Akuntansi",
        HIN: "Hubungan Internasional",
        IAB: "Ilmu Administrasi Bisnis",
        IAP: "Ilmu Administrasi Publik",
        MJN: "Manajemen",
        TKM: "Teknik Kimia",
    } [programId];

    if (gpa < 0 || gpa > 4) {
        return "Invalid gpa number";
    }

    let banyaksks = 0;
    if (gpa >= 3) {
        banyaksks = 24;
    } else if (gpa >= 2.5) {
        banyaksks = 21;
    } else if (gpa >= 2) {
        banyaksks = 18;
    } else if (gpa >= 1.5) {
        banyaksks = 15;
    } else {
        banyaksks = 12;
    }

    let pesansistem;
    if (gpa >= 3) {
        pesansistem = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${banyaksks} SKS untuk semester depan.`;
    } else {
        pesansistem = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${namaprogramstudi} dan hanya dapat mengambil SKS sebanyak ${banyaksks} SKS untuk semester depan.`;
    }

    return pesansistem;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;