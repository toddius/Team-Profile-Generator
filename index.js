const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

const employees = [];

Employee.getInfo();
