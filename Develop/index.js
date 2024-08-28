
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type:"input",
        name:"Title",
        message:"Please input the title for your project:"
    },
    {
        type:"input",
        name:"Description",
        message:"Please describe your project:"
    },
    {
        type:"input",
        name:"Usage",
        message:"Please describe what your project would be uged for:"
    },
    {
        type:"input",
        name:"Insallation",
        message:"Please describe how to insall your project:"  
      },
      {
        type:"input",
        name:"Contributor",
        message:"Please list any contributors to your project:"
      },
      {
        type: "list",
        name: "license",
        message: "Please choose a license for your project:",
        choices: [
            'Apache License 2.0',
            'MIT License',
            'Eclipse Public License',
            'None',
        ],
    },
    {
        type:"input",
        name:"Email",
        message:"Please input your email:"
    },
    {
        type:"input",
        name:"User",
        message:"Please input yor GitHub username:"
    }
    
];

function writeToFile(fileName, data) {
    fs.writeToFile(fileName, date);
    console.log('Your README.md has been made!')
}

function init() {
    inquirer.prompt (questions).then((data) => {
        console.log(JSON.stringify(data, null, ""));
        writeToFile("README.md", data);
    })
}

// Function call to initialize app
init();