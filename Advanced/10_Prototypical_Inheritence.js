
// Implicitly -> Shape.prototype = Object.create(Object.prototype);

function Shape(color) {
    this.color = color;    
}

function Circle(radius) {
    this.radius = radius;
}

// ==> extends -> Object --> Shape --> Circle
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const shapeObject = new Shape('Red');
const circleObject = new Circle(30);

console.dir(shapeObject);
console.dir(circleObject);
// console.dir(circleObject.color); -> Not clear yet