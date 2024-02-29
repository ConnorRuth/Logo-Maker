const { Circle, Square, Triangle } = require("./shapes");

describe('Shapes', () => {
    describe('Triangle', () => {
      it('should take the word blue and set the fill of the triangle to it', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="undefined">undefined</text></svg>');
      });

      it('should take the word white and set the fill of the text to it', () => {
        const shape = new Triangle();
        shape.setTextColor("white");
        expect(shape.render()).toEqual('<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="undefined"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="white">undefined</text></svg>');
      });

      it('should take the letters TES and set the text of the Triangle to it', () => {
        const shape = new Triangle();
        shape.setText("TES");
        expect(shape.render()).toEqual('<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="undefined"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="undefined">TES</text></svg>');
      });
    });
    describe('Square', () => {
        it('should take the word blue and set the fill of the Square to it', () => {
          const shape = new Square();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<svg width="300" height="200"><rect width="150" height="100" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text></svg>');
        });
        it('should take the letters TES and set the text of the Square to it', () => {
            const shape = new Square();
            shape.setText("TES");
            expect(shape.render()).toEqual('<svg width="300" height="200"><rect width="150" height="100" fill="undefined"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">TES</text></svg>');
        });

        it('should take the word white and set the fill of the text to it', () => {
            const shape = new Square();
            shape.setTextColor("white");
            expect(shape.render()).toEqual('<svg width="300" height="200"><rect width="150" height="100" fill="undefined"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">undefined</text></svg>');
        });
      });
      describe('Circle', () => {
        it('should take the word blue and set the fill of the Circle to it', () => {
          const shape = new Circle();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle"fill="undefined">undefined</text></svg>');
        });
        it('should take the letters TES and set the text of the Circle to it', () => {
            const shape = new Circle();
            shape.setText("TES");
            expect(shape.render()).toEqual('<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="undefined"/><text x="150" y="125" font-size="60" text-anchor="middle"fill="undefined">TES</text></svg>');
          });
        it('should take the word white and set the fill of the text to it', () => {
            const shape = new Circle();
            shape.setTextColor("white");
            expect(shape.render()).toEqual('<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="undefined"/><text x="150" y="125" font-size="60" text-anchor="middle"fill="white">undefined</text></svg>');
        });
      });
  });
