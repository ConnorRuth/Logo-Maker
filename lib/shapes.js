class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
        setColor(shapeColor) {
            this.shapeColor = shapeColor;
        }
        setText(text) {
            this.text = text;
        }
        setTextColor(textColor) {
            this.textColor = textColor;
        }
    
}

class Circle extends Shape {
    render() {
        return `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle"fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg width="300" height="200"><rect width="150" height="100" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Circle, Square, Triangle };