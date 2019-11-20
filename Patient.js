class Patient {
    name = '';
    lastName = '';
    age = '';
    date = '';

    constructor(name, lastName, age, date) {

        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.date = date;
    }




    toString() {
            
        return `
        <li>
        Your registration is accepted:<br>
        name: ${this.name}, <br>
        last name: ${this.lastName}, <br>
        age: ${this.age},<br>
        date: ${this.date}
        </li>
       
        `
    }
    
}

