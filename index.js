const inquirer = require("inquirer");

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
      if (answers.menu === "engineer") {
        console.log("engineers are gay!");
      }
    });
}

function engineerGenerator() {
  return inquirer.prompt([
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
  ]);
}

baseQuestions();
