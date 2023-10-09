const inquirer = require('inquirer');
const fs = require('fs');

const inputs = [
    {
        type: 'input',
        message: 'What are the initials for the logo?',
        name: 'initialsName'
        validate: (input) => {
            if (input.length <= 3) {
                return true;
            }
        }
    }
];

inquirer.prompt();