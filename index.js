const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
// const chalk = require('chalk');
const shap = require('./lib/shapes.js');
// console.log(shap);
// const chalk = new normalChalk({level: 3});

class Insert {
    constructor(inp, li) {
        this.one = inp,
        this.two = li
    }

    messageLimiter(t) {
        if (t.length <= 3) {
            return true;
        }
    }
}


const load = new Insert('input', 'list');
const nORh = "Put in a broad color name or a hexadecimal code.";


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
        type: load.two,
        message: 'What is the shape of the logo?',
        name: 'shapeName',
        choices: [
            'Square',
            'Circle',
            'Triangle',
        ]
    },
    {
        type: load.one,
        message: `What color do you want your initials to be? ${nORh}`,
        name: 'initialColors'
    },
    {
        type: load.one,
        message: `What color do you want the logo shape to be? ${nORh}`,
        name: 'shapeColors'
    }

];

inquirer.prompt(inputs).then((response) => {

    // const shape = new shap.Shapes(response.initialColors, response.shapeColors);
    // const iName = response.initialsName;
    // const sName = response.shapeName;
    // const iC = response.initialColors;
    // const sC = response.shapeColors;
    // let color;
    // let paint;
    // console.log(shape);
    // if (response.colorType == 'Hexadecimal') {
    //     color = chalk.hex(iC);
    //     paint = chalk.hex(sC);
    //     console.log(chalk.hex);
    // } else {
    //     color = chalk[iC];
    //     paint = chalk[sC];
    // }

    // console.log(color);
    // console.log(paint);
    // console.log(response.initialColors);
    // console.log(sC);
    // console.log(color(iName)); 
    // console.log(paint(sName));

    writeFile('logo.svg', shap.renderHTML(response));
}).catch(err => {
    console.log(err);
});