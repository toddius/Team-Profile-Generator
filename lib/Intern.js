const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, school) {
    super(name, id, email);
    this.school = school;
  }

getSchool() {
  return inquirer
      .prompt([
        {
          type: "input",
          name: "school",
          message: "Enter the school you are attending."
        }
      ])
      .then(val => {
         this.school = val.name;
         console.log(this.school);         
      }
    }

getRole() {
  this.role = "Intern";
  return this.role;
}
  
}

module.exports = Intern;