function process_argv() {
    const {
        argv
    } = process;
    const result = studentData(argv[2], argv[3]);

    return result;
}

function studentData(name, studentId) {
    let facultyList = [
        ["Fakultas Ekonomi", "Ekonomi"],
        ["Fakultas Ekonomi", "Manajemen"],
        ["Fakultas Ekonomi", "Akuntansi"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
        ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
        ["Fakultas Teknik", "Teknik Sipil"],
        ["Fakultas Teknik", "Arsitektur"],
        ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
        ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
        ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
    ];
    // const programCode = studentId.slice(4, 6);
    //  const facultyCode = studentId.slice(2, 3);
    // let faculty = "";
    let programstudi = "";
    let namafakutas = "";

    let menemukanPatternFakultas = /(\d{4})(\d{2})/;
    let programCode = studentId.match(menemukanPatternFakultas)[2];

    switch (programCode) {
        case "21":
            programstudi = facultyList[0][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Ekonomi");
            break;
        case "22":
            programstudi = facultyList[1][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Manajemen");
            break;
        case "23":
            programstudi = facultyList[2][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Akuntansi");
            break;
        case "31":
            programstudi = facultyList[3][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Administrasi Publik");
            break;
        case "32":
            programstudi = facultyList[4][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Administrasi Bisnis");
            break;
        case "33":
            programstudi = facultyList[5][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Hubungan Internasional");
            break;

        case "41":
            programstudi = facultyList[6][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Teknik Sipil");
            break;
        case "42":
            programstudi = facultyList[7][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Arsitektur");
            break;

        case "51":
            programstudi = facultyList[8][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Matematika");
            break;
        case "52":
            programstudi = facultyList[9][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Fisika");
            break;
        case "53":
            programstudi = facultyList[10][1];
            namafakutas = facultyList.find((Fakultas) => Fakultas[1] === "Informatika");
            break;

        default:
            return "Invalid Student's ID";
    }

    const lecturers = getLecturer(programstudi);

    return {
        id: studentId,
        name,
        prody: programstudi,
        faculty: namafakutas[0],
        thesisLecturer: lecturers,
    };
}

function getLecturer(programstudi) {
    const lecturerList = [
        ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
        ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
        ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
        ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
        ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
        ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
        ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
        ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
        ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
        ["Liem Chin, SSi., MSi.", "Fisika"],
        ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
    ];
    const lecturers = lecturerList.find((dosen) => dosen[1] === programstudi);


    return lecturers[0]; //array index 0

}
// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};