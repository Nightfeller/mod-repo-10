class Polygon {
    constructor(){
        this.triangle = `polygon points="150, 18 244, 182 56, 182" cx="150" cy="150"`;
        this.circle = `circle cx=150 cy=100 r=75`;
        this.square = `rect width=150 height=150 x=75 y=25`;
    }
}

const poly = new Polygon();

// class Shapes {
//     constructor() {
//         Polygon.call(this, triangle, circle, square);
//         this.color = val.shapeColors;
//     }
// }

// class Shapes {
//     constructor(initials, shapes) {
        
//         this.iC = initials;
//         this.sC = shapes;
//     }
//   }

// const shape = new Shapes();

function validateShape(val) {
    switch(val.shapeName) {
        case 'Square':
            return `<${poly.square} fill="${val.shapeColors}"/>`;
        case 'Circle':
            return `<${poly.circle} fill="${val.shapeColors}" />`;
        case 'Triangle':
            return `<${poly.triangle } fill="${val.shapeColors}" />`;
    }
}

function validateText(val) {
    switch(val.shapeName) {
        case 'Square':
        case 'Circle':
            return 110;
        case 'Triangle':
            return 135;
    }
}

// class Circle extends Shapes {
//     return(){`<${poly.circle} fill=${this.shapeColors} />`} ;
// }

// class Square extends Shapes {
//     return(){`<${poly.square} fill=${this.shapeColors} />`} ;
// }

// class Triangle extends Shapes {

// }

function renderHTML(rend) {
    const trueShape = validateShape(rend);
    const trueYValue = validateText(rend);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect width=100% height=100% fill="white" />

    ${trueShape}

    <text x=150 y=${trueYValue} font-size=40 text-anchor="middle" fill="${rend.initialColors}">${rend.initialsName}</text>
</svg>`;
}

module.exports = {
    renderHTML, 
    // Shapes,
};