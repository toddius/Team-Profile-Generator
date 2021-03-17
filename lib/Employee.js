class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    };

// const employees = [];

getName() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter your name."
        }
      ])
      .then(val => {
         this.name = val.name;
         console.log(this.name);
         this.getId();
      });
}

getId() {
  return inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "Enter your id."
        }
      ])
      .then(val => {
         this.id = val.name;
         console.log(this.id);
         this.getEmail();
      });
}

getEmail() {
  return inquirer
      .prompt([
        {
          type: "input",
          name: "email",
          message: "Enter your email."
        }
      ])
      .then(val => {
         this.email = val.name;
         console.log(this.email);
         this.getRole();
      });
}

getRole() {
  this.role = "Employee"
  return this.role;
}

}

module.exports = Employee;