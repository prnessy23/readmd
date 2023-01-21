const inquirer = require('./assets/node_modules/inquirer');
const fs = require('fs');
const goToGmark = require('./assets/utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',

    },
    {
        type: 'input',
        message: 'Describe your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the instructions for installation?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What can this be used for?',
        name: 'usage',


    },
    {
        type: 'list',
        message: 'Please select a license for your project?',
        name:'license', 
        choices: [ 'MIT', 'Apache 2.0','BSD 3-Clause', 'none'],

    },
    {
        type: 'input',
        message: 'What is your name',
        name: 'name',
    
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email',

    },
    
];

function writetoFile(fileName, data) {
fs.mkdir(fileName,{recursive: true}, (err) => {if (err)throw err});
fs.writeFile('./' +fileName + '/README.md', data,function(err){
    if (err) throw err;
    console.log ('succesfully saved')
})

};
function init(){
    inquirer
    .prompt(questions)
    .then(answers => {
        const fileName = ansers.title;
        writetoFile(fileName,goToGmark(answers))
    })
}

init();















