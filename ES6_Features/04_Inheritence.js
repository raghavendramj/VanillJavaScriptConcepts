class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }
}

const circle = new Circle("red", 10);
console.log(circle);
circle.draw();
circle.move();
console.log(circle.radius);
console.log(circle.color);

// ---------- In ES-5 ------------------

function ShapeES5(color) {
  this.color = color;
  this.move = function() {
    console.log("move");
  }  
}

function CircleES5(color, raidus) {
  Shape.call(this, color);
  this.color = color;
  this.radius = raidus;
  this.draw = function() {
    console.log("draw");
  }  
}

CircleES5.prototype = Object.create(ShapeES5.prototype);
CircleES5.prototype.constructor = CircleES5;