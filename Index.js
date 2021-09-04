const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//Objects:
// team members #1 parent
// Create a menu: Engineer or intern
const TeamManager = require("./teamManager")
const Engineer = require("./engineer")
const Intern = require("./intern");
const TeamMember = require('./teamMember');

const htmlHolder =  
`
<!DOCTYPE html>
<html>
<head>
  <title>Employee Tracker</title>
</head>
<body>
<H1 class = 'title'> Team Members </H1>
`



// const teamMember = new TeamMember(managerName, officeNum)
// //Engineer child of team members:
// // Needs: Name, Id, Email, Github username
// const engineer = new Engineer(name, id, email, github)
// //Intern child of team members
// // Needs: Name, Id, email, school
// const intern = new Intern(name, id, email, school)
// Functions
const startManager = () => {
    return inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please enter the employee manager's name:",
    },
    {
        name: "employeeId",
        type: "input",
        message: "Please enter the employees four digit employee ID:",
    },
    {
        name: "email",
        type: "input",
        message: "Please enter the employees Email adress:",
    },
    {
        name: "officeNum",
        type: "input",
        message: "Please enter the employees four digit office number:",
    }
]).then(answers => {
    const name = answers.name
    const employeeId = answers.employeeId
    const email = answers.email
    const officeNum = answers.officeNum
    const teamManager = new TeamManager(name, employeeId, email, officeNum)
    var printIt =teamManager.printHtml()
    htmlHolder += printIt
    console.log(htmlHolder)

    menu()
})
}

const menu = () => {
         return inquirer.prompt([{
             name: "newTm",
             type: "input",
             message: "MENU: Would you like to add a new team member? Y for \"Yes\" N for \"No\"",
         }
     ]).then(answers => {
    if(answers.newTm == 'Y') {
       console.log('Adding a new Team member!')
       employeeMenu()
    }
    else if(answers.newTm == 'N') {
        console.log('No more team members to add!')
        printInfoMenu()
    }
    else{
        console.log('Please enter \"Y\" or \"N\"')
        menu()
    }
     })
    }


const engineerMenu = () => {
    return inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please enter the employee's name:",
    },
    {
        name: "employeeId",
        type: "input",
        message: "Please enter the employees four digit employee ID:",
    },
    {
        name: "email",
        type: "input",
        message: "Please enter the employees Email adress:",
    },
    {
        name: "github",
        type: "input",
        message: "Please enter the employees github account:",
    }
]).then(answers => {
    const name = answers.name
    const employeeId = answers.employeeId
    const email = answers.email
    const github = answers.github
    const engineer = new Engineer(name, employeeId, email, github)
    var printIt =engineer.printHtml()
    htmlHolder += printIt
    console.log(htmlHolder)
    menu()
})
}
const internMenu = () => {
    return inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please enter the employee's name:",
    },
    {
        name: "employeeId",
        type: "input",
        message: "Please enter the employees four digit employee ID:",
    },
    {
        name: "email",
        type: "input",
        message: "Please enter the employees Email adress:",
    },
    {
        name: "school",
        type: "input",
        message: "Please enter the employees current school program:",
    }
]).then(answers => {
    const name = answers.name
    const employeeId = answers.employeeId
    const email = answers.email
    const school = answers.school
    const intern = new Intern(name, employeeId, email, school)
    var printIt =intern.printHtml()
    htmlHolder += printIt
    console.log(htmlHolder)
    menu()
})
}

const employeeMenu = () => {
    return inquirer.prompt([{
        name: "eOrI",
        type: "input",
        message: "Is this employee an engineer or an intern? E for \"Engineer\" I for \"Intern\"",
    }
]).then(answers => {
if(answers.eOrI == 'E') {
  console.log('Adding a new Engineer!')
  engineerMenu()
}
else if(answers.eOrI == 'I') {
   console.log('Adding a new Intern!')
   internMenu()
}
else{
   console.log('Please enter \"E\" or \"I\"')
   employeeMenu()
}
})
}

//Exit function that closes menu and calls html gen
   const printInfoMenu = () => {
    return inquirer.prompt([{
        name: "printThis",
        type: "input",
        message: "Are you ready to export your HTML Page? Y for \"Yes\" N for \"No\"",
    }
]).then(answers => {
    if(answers.printThis == 'Y'){
        printHtml()
    }else if (answers.printThis == 'N'){
        startMenu()
    }
    else{
        console.log('Please enter \"Y\" or \"N\"')
    }
})
}
function printHtml(){
    
}
startManager()




//To Do: Function that creates HTML FIle.



//Previous project for reference (Very similar functions.)
// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () => {
//     return inquirer.prompt([{
//         name: "name",
//         type: "input",
//         message: "What is your name?",
//     },
//     {
//         name: "projectName",
//         type: "input",
//         message: "What is your projects name?",
//     },
//     {
//         name: "projectDetails",
//         type: "input",
//         message: "Give us a description of your project!",
//     },
//     {
//         name: "projectMotivation",
//         type: "input",
//         message: "What was your motivation to create this project?",
//     },
//     {
//         name: "projectProblem",
//         type: "input",
//         message: "What problem does your project solve?",
//     },
//     {
//         name: "projectLearn",
//         type: "input",
//         message: "What have you learned from this project?",
//     },
//     {
//         name: "projectInstalation",
//         type: "input",
//         message: "What steps are required to install your project?",
//     },
//     {
//         name: "projectUsage",
//         type: "input",
//         message: "What are some uses for your project",
//     },
//     {
//         name: "projectCredits",
//         type: "input",
//         message: "Did anyone work on this project with you? list their names down below, or simply type your name again.",
//     },
//     {
//         name: "projectTests",
//         type: "input",
//         message: "What tests could a user run to test your application?",
//     },
//     {
//         name: 'link',
//         type: 'input',
//         message: "Attach a link to the deployed version of your site.",
//     },
// ])
// };
// const generateREADME = (answers) =>
// `
// `
// ;



// const init = () => {
//     promptUser()
//         .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
//         .then(() => console.log('Successfully created your README FIle!'))
//         .catch((err) => console.error(err));
// };

// init();