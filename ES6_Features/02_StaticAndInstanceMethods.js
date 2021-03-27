class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //instance member
    draw() {
        console.log("Draw!");
    }

    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{"radius": 1}');
console.log(circle.draw());

//-----------------------------------------------------------
const Circle1 = function (radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw: ", this);
    }
}

//Method Call
const circle1 = new Circle1(10);
circle1.draw();