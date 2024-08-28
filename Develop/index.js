
const inquirer = require('inquirer');
const fs=require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices');

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
        type:"list",
        name:"License",
        message:"Please choose a liscense for your project:",
        Choices: [
            'Apache License 2.0',
            'MIT License',
            'Eclipse Public License',
            'None'
        ]
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
    inquirer.prompt (questions).then((date) => {
        console.log(JSON.stringify(date, null, ""));
        writeToFile("README.md", date);
    })
}

// Function call to initialize app
init();