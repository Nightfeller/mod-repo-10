const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
//const chalk = new normalChalk({level: 3});

const inputs = [
    {
        type: 'input',
        message: 'What are the initials for the logo?',
        name: 'initialsName',
        validate: (input) => {
            if (input.length <= 3) {
                return true;
            }
        }
    },
    {
        type: 'list',
        message: 'What is the shape of the logo?',
        name: 'shapeName',
        choices: [
            'Square',
            'Circle',
            'Triangle',
        ]
    },
    {
        type: 'list',
        message: 'Do you want to use a broad color name or a hexadecimal?',
        name: 'colorType',
        choices: [
            'Hexadecimal',
            'Broad Color Name'
        ]
    },
    {
        type: 'input',
        message: 'What color do you want your initials to be?',
        name: 'initialColors'
    },
    {
        type: 'input',
        message: 'What color do you want the logo shape to be?',
        name: 'shapeColors'
    }

];

inquirer.prompt(inputs).then((response) => {
    const iName = response.initialsName;
    const sName = response.shapeName;
    const iC = response.initialColors;
    const sC = response.shapeColors;
    let color;
    let paint;

    if (response.colorType == 'Hexadecimal') {
        color = chalk.hex(iC);
        paint = chalk.hex(sC);
        console.log(chalk.hex);
    } else {
        color = chalk[iC];
        paint = chalk[sC];
    }

    console.log(color);
    console.log(paint);
    console.log(iC);
    console.log(sC);
    console.log(color(iName)); 
    console.log(paint(sName));

    renderHTML(response, paint, color);
});