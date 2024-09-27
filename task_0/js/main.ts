interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Houcine",
    lastName: "Enicuoh",
    age: 20,
    location: "Bordeaux",
};

const student2: Student = {
    firstName: "Malak",
    lastName: "Kalam",
    age: 21,
    location: "Biarritz",
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    students.forEach(student => {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;

        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

renderTable(studentsList);
