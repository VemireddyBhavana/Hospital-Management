// ===============================
// PATIENT MANAGEMENT
// ===============================

let patients = JSON.parse(localStorage.getItem("patients")) || [];
let editIndex = -1;

function savePatients() {
    localStorage.setItem("patients", JSON.stringify(patients));
}

function displayPatients(list = patients) {

    const table = document.getElementById("patientTable");

    if (!table) return;

    table.innerHTML = "";

    list.forEach((patient, index) => {

        table.innerHTML += `
        <tr>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.disease}</td>
            <td>
                <button class="edit-btn" onclick="editPatient(${index})">
                    Edit
                </button>

                <button class="delete-btn" onclick="deletePatient(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

}

function addPatient() {

    const name = document.getElementById("patientName").value.trim();
    const age = document.getElementById("patientAge").value.trim();
    const gender = document.getElementById("patientGender").value;
    const disease = document.getElementById("patientDisease").value.trim();

    if (name === "" || age === "" || disease === "") {

        alert("Please fill all fields.");
        return;

    }

    const patient = {
        name,
        age,
        gender,
        disease
    };

    if (editIndex === -1) {

        patients.push(patient);

    } else {

        patients[editIndex] = patient;
        editIndex = -1;

    }

    savePatients();
    displayPatients();

    document.getElementById("patientName").value = "";
    document.getElementById("patientAge").value = "";
    document.getElementById("patientDisease").value = "";

}

function editPatient(index) {

    const patient = patients[index];

    document.getElementById("patientName").value = patient.name;
    document.getElementById("patientAge").value = patient.age;
    document.getElementById("patientGender").value = patient.gender;
    document.getElementById("patientDisease").value = patient.disease;

    editIndex = index;

}

function deletePatient(index) {

    if (confirm("Delete this patient?")) {

        patients.splice(index, 1);

        savePatients();

        displayPatients();

    }

}

function searchPatient() {

    const keyword = document
        .getElementById("searchPatient")
        .value
        .toLowerCase();

    const filtered = patients.filter(patient =>
        patient.name.toLowerCase().includes(keyword) ||
        patient.disease.toLowerCase().includes(keyword)
    );

    displayPatients(filtered);

}

displayPatients();

// ===============================
// DOCTOR MANAGEMENT
// ===============================

let doctors = JSON.parse(localStorage.getItem("doctors")) || [];
let doctorEditIndex = -1;

function saveDoctors() {
    localStorage.setItem("doctors", JSON.stringify(doctors));
}

function displayDoctors(list = doctors) {

    const table = document.getElementById("doctorTable");

    if (!table) return;

    table.innerHTML = "";

    list.forEach((doctor, index) => {

        table.innerHTML += `
        <tr>
            <td>${doctor.name}</td>
            <td>${doctor.department}</td>
            <td>${doctor.experience} Years</td>
            <td>₹${doctor.fee}</td>
            <td>
                <button class="edit-btn" onclick="editDoctor(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteDoctor(${index})">Delete</button>
            </td>
        </tr>
        `;

    });

}

function addDoctor() {

    const name = document.getElementById("doctorName").value.trim();
    const department = document.getElementById("doctorDepartment").value;
    const experience = document.getElementById("doctorExperience").value;
    const fee = document.getElementById("doctorFee").value;

    if (name === "" || experience === "" || fee === "") {
        alert("Please fill all fields.");
        return;
    }

    const doctor = {
        name,
        department,
        experience,
        fee
    };

    if (doctorEditIndex === -1) {
        doctors.push(doctor);
    } else {
        doctors[doctorEditIndex] = doctor;
        doctorEditIndex = -1;
    }

    saveDoctors();
    displayDoctors();

    document.getElementById("doctorName").value = "";
    document.getElementById("doctorExperience").value = "";
    document.getElementById("doctorFee").value = "";
}

function editDoctor(index) {

    const doctor = doctors[index];

    document.getElementById("doctorName").value = doctor.name;
    document.getElementById("doctorDepartment").value = doctor.department;
    document.getElementById("doctorExperience").value = doctor.experience;
    document.getElementById("doctorFee").value = doctor.fee;

    doctorEditIndex = index;
}

function deleteDoctor(index) {

    if (confirm("Delete this doctor?")) {
        doctors.splice(index, 1);
        saveDoctors();
        displayDoctors();
    }

}

function searchDoctor() {

    const keyword = document
        .getElementById("searchDoctor")
        .value
        .toLowerCase();

    const filtered = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(keyword) ||
        doctor.department.toLowerCase().includes(keyword)
    );

    displayDoctors(filtered);
}

displayDoctors();

// ===============================
// APPOINTMENT MANAGEMENT
// ===============================

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
let appointmentEditIndex = -1;

function saveAppointments() {
    localStorage.setItem("appointments", JSON.stringify(appointments));
}

function displayAppointments(list = appointments) {

    const table = document.getElementById("appointmentTable");

    if (!table) return;

    table.innerHTML = "";

    list.forEach((appointment, index) => {

        table.innerHTML += `
        <tr>
            <td>${appointment.patient}</td>
            <td>${appointment.doctor}</td>
            <td>${appointment.date}</td>
            <td>${appointment.time}</td>
            <td>${appointment.status}</td>
            <td>
                <button class="edit-btn" onclick="editAppointment(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteAppointment(${index})">Delete</button>
            </td>
        </tr>
        `;

    });

}

function addAppointment() {

    const patient = document.getElementById("patientNameApp").value.trim();
    const doctor = document.getElementById("doctorNameApp").value.trim();
    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;
    const status = document.getElementById("appointmentStatus").value;

    if (!patient || !doctor || !date || !time) {
        alert("Please fill all fields.");
        return;
    }

    const appointment = { patient, doctor, date, time, status };

    if (appointmentEditIndex === -1) {
        appointments.push(appointment);
    } else {
        appointments[appointmentEditIndex] = appointment;
        appointmentEditIndex = -1;
    }

    saveAppointments();
    displayAppointments();

    document.getElementById("patientNameApp").value = "";
    document.getElementById("doctorNameApp").value = "";
    document.getElementById("appointmentDate").value = "";
    document.getElementById("appointmentTime").value = "";
}

function editAppointment(index) {

    const appointment = appointments[index];

    document.getElementById("patientNameApp").value = appointment.patient;
    document.getElementById("doctorNameApp").value = appointment.doctor;
    document.getElementById("appointmentDate").value = appointment.date;
    document.getElementById("appointmentTime").value = appointment.time;
    document.getElementById("appointmentStatus").value = appointment.status;

    appointmentEditIndex = index;
}

function deleteAppointment(index) {

    if (confirm("Delete this appointment?")) {
        appointments.splice(index, 1);
        saveAppointments();
        displayAppointments();
    }

}

function searchAppointment() {

    const keyword = document.getElementById("searchAppointment").value.toLowerCase();

    const filtered = appointments.filter(item =>
        item.patient.toLowerCase().includes(keyword) ||
        item.doctor.toLowerCase().includes(keyword)
    );

    displayAppointments(filtered);
}

displayAppointments();