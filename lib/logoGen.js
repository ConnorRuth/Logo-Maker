const {Circle, Triangle, Square} = require("./shapes.js");

function generateLogo(data) {
    let shape = data.shape;
    if(data.shape ==="Circle") {
        shape = new Circle(data.text, data.textColor, data.shapeColor);
    }
    if(data.shape === "Triangle") {
        shape = new Triangle(data.text, data.textColor, data.shapeColor);
    }
    if(data.shape === "Square") {
        shape = new Square(data.text, data.textColor, data.shapeColor);
    }
    return shape.render();
}

module.exports = generateLogo;