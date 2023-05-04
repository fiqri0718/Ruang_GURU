async function process_argv() {
    let {
        argv
    } = process;
    argv = argv.slice(2);
    const result = await studentActivitiesRegistration(argv);

    return result;
}

const baseURL = "http://localhost:3001"

async function getStudentActivities() {
    try {
        const responses = await fetch(`${baseURL}/activities`);
        const datarespstudentActivities = await responses.json();
        return datarespstudentActivities;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function studentActivitiesRegistration(data) {
    try {
        const [choose, ...parameter] = data;
        if (choose === "DELETE") {
            const [id] = parameter;
            const responsesdelete = await fetch(`${baseURL}/students/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: id,
                }),
            });
            const hapusmurid = await responsesdelete.json();
            return hapusmurid;
        } else if (choose === "CREATE") {
            const [nama, hari] = parameter;
            const aktivitas = await getStudentActivities();
            const newaktivitas = aktivitas.filter((aktivitass) => aktivitass.days.includes(hari));
            const murid = {
                name: nama,
                activities: newaktivitas.map((aktivitass) => ({
                    name: aktivitass.name,
                    desc: aktivitass.desc,
                })),
            };
            const responsescreate = await fetch(`${baseURL}/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(murid),
            });
            const tambahmurid = await responsescreate.json();
            return tambahmurid;
        } else {
            throw new Error(`wrong`);
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function addStudent(name, day) {
    try {
        const aktivitas = await getStudentActivities();
        const newaktivitas = aktivitas.filter((aktivitass) => aktivitass.days.includes(day));
        const murid = {
            name: name,
            activities: newaktivitas.map((aktivitass) => ({
                name: aktivitass.name,
                desc: aktivitass.desc,
            })),
        };
        const responsesadd = await fetch(`${baseURL}/students`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(murid),
        });
        const dataresponsesadd = await responsesadd.json();
        return dataresponsesadd;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function deleteStudent(id) {
    try {
        const responsesdelete = await fetch(`${baseURL}/students/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
            }),
        });
        const dataresponsesdelete = await responsesdelete.json();
        return dataresponsesdelete;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

process_argv()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = {
    studentActivitiesRegistration,
    getStudentActivities,
    addStudent,
    deleteStudent
};