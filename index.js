 const inquirer =require('inquirer');
 const fs = require('fs');
const goToGM =require('./assets/Utilities/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',

    },
    { 
        type: 'input',
        message: 'What is your Github user name',
        name: 'gitName',


    },
    
    {
        type: 'input',
        message: 'Please write a short description describing your site?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What commands should be run to install dependencies?(npm i)',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What can this be used for?',
        name: 'usage',


    },
    {
        type: 'input',
        message: 'What command should be run for testing purposes.(npm test) ',
        name: 'tests',
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
        name: 'Username',
    
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
        const fileName = answers.title;
        writetoFile(fileName,goToGM(answers))
    })
}

init();















