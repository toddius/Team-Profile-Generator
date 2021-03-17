const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

getGithub() {
  return inquirer
      .prompt([
        {
          type: "input",
          name: "officeNumber",
          message: "Enter your office number."
        }
      ])
      .then(val => {
         this.officeNumber = val.name;
         console.log(this.officeNumber);
         this.getRole();
      });
}

getRole() {
  this.role = "Manger"
  return this.role;
}

}

module.exports = Manager;