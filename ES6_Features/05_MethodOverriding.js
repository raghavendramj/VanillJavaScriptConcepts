class Shape {
    move() {
        console.log("Shape -> move");
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log("Circle -> move");
    }
}

const circle = new Circle();
console.log(circle);
circle.move();