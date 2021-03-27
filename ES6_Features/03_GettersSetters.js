
///Private properties 
const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0)
            throw new Error("Invalid radius!");
        _radius.set(this, value);
    }
}


const cir = new Circle(1);
console.log(cir);
console.log(cir.radius)