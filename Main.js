

let yourName = document.querySelector('#yourName');
let yourLastName = document.querySelector('#yourLastName');
let yourAge = document.querySelector('#yourAge');
let yourDate = document.querySelector('#yourDate');
let addRegistration = document.querySelector('.submit-btn');
let clearRegistration = document.querySelector('.reset-btn');
let registration = document.querySelector('#movies');
let patientList = new PatientList();

addRegistration.onclick = function (e) {
    e.preventDefault();

    // Create a new movie from input
    let patient = new Patient(yourName.value, yourLastName.value, yourAge.value, yourDate.value); 


    

    // Add new movie to the list
    patientList.addPatient(patient);

    // Replace movies placeholder with updated list
    registration.innerHTML = patientList;
}

clearRegistration.onclick = function (ev) {
    ev.preventDefault();

    yourName.value = '';
    yourLastName.value = '';
    yourAge.value = '';
    yourDate.value = '';
}