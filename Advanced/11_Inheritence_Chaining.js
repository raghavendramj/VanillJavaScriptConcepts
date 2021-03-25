function Shape(color) {
    this.color = color;    
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


function Square(size){
    this.size;
}

Square.prototype = Object.create(Circle.prototype);
Square.prototype.constructor = Square;

const sh = new Shape("Red");
const ci = new Circle(10, "Yellow");
const sq = new Square(20);
