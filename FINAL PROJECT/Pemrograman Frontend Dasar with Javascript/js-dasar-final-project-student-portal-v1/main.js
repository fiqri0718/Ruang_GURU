function process_argv() {
    const {
        argv
    } = process;
    const result = studentPortal(argv[2]);

    return result;
}

function studentPortal(studentId) {
    const studentList = [{
            id: "2010310164",
            name: "Rakanda Pangeran Nasution",
            gpa: 2.65,
            status: false,
        },
        {
            id: "2011310021",
            name: "Yosef Noferianus Gea",
            gpa: 3.1,
            status: true,
        },
        {
            id: "2014310100",
            name: "Angelia",
            gpa: 1.25,
            status: true,
        },
        {
            id: "2011320090",
            name: "Dito Bagus Prasetio",
            gpa: 2.75,
            status: true,
        },
        {
            id: "2011320100",
            name: "Hikman Nurahman",
            gpa: 2.45,
            status: true,
        },
        {
            id: "2010320181",
            name: "Edizon",
            gpa: 1.95,
            status: true,
        },
        {
            id: "2012320055",
            name: "Marrisa Stella",
            gpa: 3.5,
            status: false,
        },
        {
            id: "2012330080",
            name: "Dea Christy Keliat",
            gpa: 3,
            status: true,
        },
        {
            id: "2013330049",
            name: "Sekarini Mahyaswari",
            gpa: 3.5,
            status: true,
        },
        {
            id: "2012330004",
            name: "Yerica",
            gpa: 3.15,
            status: false,
        },
    ];
    const Mahasiswa = studentList.find((Mahasiswa) => Mahasiswa.id === studentId);
    if (!Mahasiswa) { //jika tidak terdaftar
        return "Mahasiswa tidak terdaftar";
    }else if(Mahasiswa.status === false) { //jika tidak aktif
        return `Mahasiswa dengan id ${studentId} sudah tidak aktif`;
    }else if (Mahasiswa.status === true) { //jika aktif
        const banyaksks = getCredits(Mahasiswa.gpa); //berdasarkan sks dari function gpa
        const matakuliahdiambil = getSubjects(banyaksks); //memanggil function subjects

        return {
            name: Mahasiswa.name,
            credits:banyaksks,
            subjectsListLength: matakuliahdiambil.length,
            subjects:matakuliahdiambil,
        };
    }
}

function getCredits(gpa) {
    if (gpa >= 2.9) {
        return 24;
    } else if (gpa >= 2.5 && gpa <= 2.9) {
        return 21;
    } else if (gpa >= 2 && gpa <= 2.5) {
        return 18;
    } else if (gpa >= 1.5 && gpa <= 2) {
        return 15;
    } else {
        return 12;
    }
}

function getSubjects(credits) {
    const subjectsList = [{
            subjectName: "Ilmu Politik",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Ilmu Ekonomi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Estetika",
            credit: 1,
            status: "pilihan",
        },
        {
            subjectName: "Kepemimpinan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Etika",
            credit: 2,
            status: "pilihan",
        },
        {
            subjectName: "Sosiologi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Teori Pengambil keputusan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Statistika",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Aplikasi IT",
            credit: 3,
            status: "pilihan",
        },
    ];
     if (credits >= 24) {
         return subjectsList;
     } else if (credits >= 21) {
         return subjectsList.filter(subjectsList => subjectsList.status === 'wajib' || (subjectsList.status === 'pilihan' && subjectsList.credit === 3));
     } else if (credits >= 18) {
         return subjectsList.filter(subjectsList => subjectsList.status === 'wajib').slice(0,6);  //wajib semua
     } else if (credits >= 15) {
         return subjectsList.filter(subjectsList => subjectsList.status === 'wajib').slice(0, 5); //wajib hanya 5 matkul
     }else {
         return [];
     }
     
}
// Dilarang menghapus/mangganti code dibawah ini!                                                                                                                 !!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentPortal,
    getSubjects,
    getCredits,
};