const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, github) {
    super(name, id, email);
    this.github = github;
  }

getGithub() {
  return inquirer
      .prompt([
        {
          type: "input",
          name: "github",
          message: "Enter your github profile name."
        }
      ])
      .then(val => {
         this.github = val.name;
         console.log(this.github);
         this.getRole();
      });
}

  getRole() {
    this.role = "Engineer";
    return this.role;
}

}
module.exports = Engineer;