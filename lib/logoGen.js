const { Circle, Square, Triangle } = require("./shapes");
function generateLogo(data) {
    let shape;
    if(data.shape === "Circle") {
        shape = new Circle(data.text, data.textColor, data.shapeColor);
    }else if(data.shape === "Triangle") {
        shape = new Triangle(data.text, data.textColor, data.shapeColor);
    } else {
        shape = new Square(data.text, data.textColor, data.shapeColor);
    }
    return shape.render();
}

module.exports = generateLogo;