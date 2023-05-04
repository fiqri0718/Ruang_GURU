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
        const dataresp = await responses.json();
        return dataresp;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function studentActivitiesRegistration(data) {
    const [method, ...params] = data;
    if (method === "DELETE") {
        const [id] = params;
        const response = await fetch(`${baseURL}/students/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result;
    } else if (method === "CREATE") {
        const [name, day] = params;
        const activities = await getStudentActivities();
        const filteredActivities = activities.filter((activity) => activity.days.includes(day));
        const murid = {
            name: name,
            activities: filteredActivities.map((activity) => ({
                name: activity.name,
                desc: activity.desc,
            })),
        };
        const response = await fetch(`${baseURL}/students`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(murid),
        });
        const newStudent = await response.json();
        return newStudent;
    }
}

async function addStudent(name, day) {
    try {
        const activities = await getStudentActivities();
        const filteredActivities = activities.filter((activity) => activity.days.includes(day));
        const murid = {
            name: name,
            activities: filteredActivities.map((activity) => ({
                name: activity.name,
                desc: activity.desc,
            })),
        };
        const response = await fetch(`${baseURL}/students`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(murid),
        });
        const dataresp = await response.json();
        return dataresp;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function deleteStudent(id) {
    try {
        const response = await fetch(`${baseURL}/students/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
            }),
        });
        const data = await response.json();
        return data;
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