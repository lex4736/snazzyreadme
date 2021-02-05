
// Here is where we will access our tools, technologies and paths 
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const axios = require("axios")
const generateMarkdown = require("./utils/generateMarkdown")


// Here is where you will find or edit the list of questions for the users
const promptQuestions= [
    {
        type: "input",
        name: "title",
        message: "What would you like to call your application?",  
    },

    {
        type: "input",
        name: "description",
        message: "What can you tell me about your application?"
    },

    {
        type: "input",
        name: "installation",
        message: "How would other people install this?",
    },

    {
        type: "input",
        name: "usage",
        message: "What is this used for?",
    },

    {
        type: "list",
        name: "license",
        message: "Which license below is needed for this application?",
        choices: [
            "MIT",
            "GNU GPLv3",
            "APACHE 2.0",
            "BSD 3",
            "None",
        ]
    },

    {
        type: "input",
        name: "contributors",
        message: "Are there any contributors to this project?",
    },

    {
        type: "input",
        name: "tests",
        message: "How would you test this application?",
    },

    {
        type: "input",
        name: "userName",
        message: "What is your Github Username?",
    },

    {
        type: "input",
        name: "screenshot",
        message: "Input the url for your screenshot",
    },

    {
        type: "input",
        name: "demo",
        message: "Input the url for your live demo",
    },


];

// Here you will find the function to write README file
function writeToFile(fileName, data) {
 

    fs.writeFileSync(path.join(process.cwd(), fileName), data)
    
    }

// This function will initialize our program
function init() {
    inquirer.prompt(promptQuestions)
        .then((answers) => {
            const url = `https://api.github.com/users/${answers.userName}`
            console.log(answers)
            axios.get(url)
                .then(function (response) {
                  
                  console.log(response.data);
                   
                    answers.photo = response.data.avatar_url;

                    console.log("Now creating your custom README");
                    writeToFile("README.md", generateMarkdown(answers));
                })
        });

}
// This is a function call to initialize program
init();