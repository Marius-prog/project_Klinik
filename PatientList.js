class PatientList {
    patients = [];

    addPatient(newPatient) {
        this.patients.push(newPatient);
    }

    toString() {
        return `
      <ul>${this.patients.join('')}</ul>
    `;
    }
}



