document.getElementById("appointment-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const patientName = document.getElementById("patient-name").value;

    if (!doctor || !date || !time || !patientName) {
        alert("Please fill in all the fields.");
        return;
    }

    const appointment = {
        doctor,
        date,
        time,
        patientName
    };

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert(`Appointment booked with ${doctor} on ${date} at ${time}`);

    window.location.href = "pd.html";
});
