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

    const findWordPattern = /(\d{4})(\d{2})/;
    const studCode = studentId.match(findWordPattern)[2];
    let dataName;

    if (studCode === "21") {
        dataName = facultyList.find((faculty) => faculty[1] === "Ekonomi");
    } else if (studCode === "22") {
        dataName = facultyList.find((faculty) => faculty[1] === "Manajemen");
    } else if (studCode === "23") {
        dataName = facultyList.find((faculty) => faculty[1] === "Akuntansi");
    } else if (studCode === "31") {
        dataName = facultyList.find(
            (faculty) => faculty[1] === "Administrasi Publik"
        );
    } else if (studCode === "32") {
        dataName = facultyList.find(
            (faculty) => faculty[1] === "Administrasi Bisnis"
        );
    } else if (studCode === "33") {
        dataName = facultyList.find(
            (faculty) => faculty[1] === "Hubungan Internasional"
        );
    } else if (studCode === "41") {
        dataName = facultyList.find((faculty) => faculty[1] === "Teknik Sipil");
    } else if (studCode === "42") {
        dataName = facultyList.find((faculty) => faculty[1] === "Arsitektur");
    } else if (studCode === "51") {
        dataName = facultyList.find((faculty) => faculty[1] === "Matematika");
    } else if (studCode === "52") {
        dataName = facultyList.find((faculty) => faculty[1] === "Fisika");
    } else if (studCode === "53") {
        dataName = facultyList.find((faculty) => faculty[1] === "Informatika");
    } else {
        return "Invalid Student's ID";
    }

    const lecturer = getLecturer(dataName[1]);

    return {
        id: studentId,
        name: name,
        faculty: dataName[0],
        prody: dataName[1],
        thesisLecturer: lecturer,
    };
}

function getLecturer(prody) {
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

    let lecturer = lecturerList.find((lecturer) => lecturer[1] === prody);

    return lecturer[0];
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};