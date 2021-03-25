function Circle(radius) {
    this.radius = radius;
    this.move = function(){
        this.draw();
        console.log("Inside Move function");
    }
}

const c1 = new Circle(20);
const c2 = new Circle(40);
console.log(c1);

Circle.prototype.toString = function(){
    console.log(this.radius);
    return "Circle with radius "+ this.radius;
}


const c3 = new Circle(50);
console.log(Object.keys(c3));

//c1.move();