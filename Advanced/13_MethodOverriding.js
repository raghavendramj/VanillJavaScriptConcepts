function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log("Shape -> Duplicate");
}

// const shape = new Shape('Rectangle');
// shape.duplicate();
// console.log(shape);


function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Parent;
}

extend(Circle, Shape);


Circle.prototype.duplicate = function () {
    console.log("Circle -> duplciate");
}


function Square(size) {
    this.size = size;
}
extend(Square, Shape);

Square.prototype.duplicate = function () {
    console.log("Square -> duplicate");
};

const sh = new Shape("Red");
const ci = new Circle(10, "Yellow");
const sq = new Square(20);


const shapes = [new Circle(15, "black"), new Square(5)];


for (let shape of shapes) {
    console.log(shape);
    shape.duplicate();
}
