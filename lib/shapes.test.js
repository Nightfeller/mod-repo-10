const Shapes = require("./shapes.js");

describe('SetShapes', () => {
    describe('Instances', () => {
        it ('should be an instance of a Polygon class', () => {
            const polygon = new Shapes();

            expect(polygon).toBeInstanceOf(Shapes);
        });
    });

    describe('Setting Triangle', () => {
        it ('should set triangle properly', () => {
            const polygon = new Polygon();

            expect(polygon.triangle).toBe(`polygon points="150, 18 244, 182 56, 182" cx="150" cy="150"`);
        });
    });

    describe('Setting Circle', () => {
        it ('should set circle properly', () => {
            const polygon = new Polygon();

            expect(polygon.circle).toBe(`circle cx=150 cy=100 r=75`);
        });
    });

    describe('Setting Square', () => {
        it ('should set square properly', () => {
            const polygon = new Polygon();

            expect(polygon.square).toBe(`rect width=150 height=150 x=75 y=25`);
        });
    });
});

describe('ValidateShapes', () => {
    describe('Validating Square', () => {
        it ('should set validateShape properly for square', () => {
            const polygon = new Polygon();
            const val = { shapeName: 'Square', shapeColors: 'blue' };

            expect(validateShape(val)).toBe(`<${polygon.square} fill="blue" />`);
        });
    });

    describe('Validating Circle', () => {
        it ('should set validateShape properly for circle', () => {
            const polygon = new Polygon();
            const val = { shapeName: 'Circle', shapeColors: 'red' };

            expect(validateShape(val)).toBe(`<${polygon.circle} fill="red" />`);
        });
    });

    describe('Validating Triangle', () => {
        it ('should set validateShape properly for square', () => {
            const polygon = new Polygon();
            const val = { shapeName: 'Triangle', shapeColors: 'green' };

            expect(validateShape(val)).toBe(`<${polygon.triangle} fill="green" />`);
        });
    });
});

describe ('ValidateTexts', () => {
    describe('Validating Square Text', () => {
        it ('should set validateText properly for square, similarly to circle', () => {
            const val = { shapeName: 'Square' };

            expect(validateText(val)).toBe(110);
        });
    });

    describe('Validating Square Text', () => {
        it ('should set validateText properly for circle, similarly to square', () => {
            const val = { shapeName: 'Circle' };

            expect(validateText(val)).toBe(110);
        });
    });

    describe('Validating Square Text', () => {
        it ('should set validateText properly for triangle', () => {
            const val = { shapeName: 'Triangle' };

            expect(validateText(val)).toBe(135);
        });
    });
});