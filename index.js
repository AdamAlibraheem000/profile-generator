const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

const arr = [];

function baseQuestions() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team manager name?",
        name: "name",
        validate: (nameValid) => {
          if (nameValid) {
            return true;
          } else {
            console.log("team manager name required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter team manager ID number?",
        name: "ID",
        validate: (IDValid) => {
          if (IDValid) {
            return true;
          } else {
            console.log("ID number required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter email address?",
        name: "email",
        validate: (emailValid) => {
          if (emailValid) {
            return true;
          } else {
            console.log("email required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter office number?",
        name: "officeNum",
        validate: (officeNumValid) => {
          if (officeNumValid) {
            return true;
          } else {
            console.log("office number required");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "menu",
        message: "Choose from the following options ",
        choices: ["finsh building team", "engineer", "intern"],
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answer.ID,
        answers.email,
        answers.officeNum
      );
      arr.push(manager);
      if (answers.menu === "engineer") {
        engineerGenerator();
      } else if (answers.menu === "intern") {
        internGenerator();
      }
    });
}

function engineerGenerator() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter engineer's name?",
        name: "nameEng",
        validate: (nameEngValid) => {
          if (nameEngValid) {
            return true;
          } else {
            console.log("team engineer's name required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter engineer's ID number?",
        name: "IDEng",
        validate: (IDEngValid) => {
          if (IDEngValid) {
            return true;
          } else {
            console.log("team engineer's ID number required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter engineer's email address?",
        name: "emailEng",
        validate: (emailEngValid) => {
          if (emailEngValid) {
            return true;
          } else {
            console.log("engineer's email address required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter engineer's github username?",
        name: "githubEng",
        validate: (githubEngValid) => {
          if (githubEngValid) {
            return true;
          } else {
            console.log("github username required");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      buildHTML();
    });
}

function internGenerator() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter intern's name?",
        name: "nameInt",
        validate: (nameIntValid) => {
          if (nameIntValid) {
            return true;
          } else {
            console.log("intern's name required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter intern's ID?",
        name: "IDInt",
        validate: (IDIntValid) => {
          if (IDIntValid) {
            return true;
          } else {
            console.log("intern's ID required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter intern's email?",
        name: "emailInt",
        validate: (emailIntValid) => {
          if (emailIntValid) {
            return true;
          } else {
            console.log("intern's email required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter intern's school?",
        name: "schoolInt",
        validate: (schoolIntValid) => {
          if (schoolIntValid) {
            return true;
          } else {
            console.log("intern's school required");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      buildHTML();
    });
}

function buildHTML() {
  // function to build html
  // For loop of arr to generate constructors
  // if arr[i].getRole() === Manager : manager card
  // if arr[i].getRole() === Engineer : engineer card
  // if arr[i].getRole() === Intern : intern card

  return ``;
}

baseQuestions();
