// 1. Object Literals
const car = {
    model: 'Benz',
    make: 2021,
    carInfo: function(){
        console.log("Car Info - Model: ", this.model, " Make: ", this.make);
    }
}

let obj = {};
// internally let obj = new Object();

console.log(typeof(car));
car.carInfo();

// 2. Factory Function
function createObject(model, make){
    return {
        model,
        make,
        carInfo: function(){
            console.log("Car Info - Model: ", model, " Make: ", make);
        }
    }
}

const carObject = createObject('Maruti Suzuki', 2019);
console.log(carObject);
carObject.carInfo();

// 3. Constructor function
function Circle(radius){
    console.log('this: ', this);
    this.radius = radius;
    this.draw = function(){
        console.log("Circle with radius: ", radius);
    }
}

const circle = new Circle(10);
circle.draw();

// 4. via Function
const Bike = new Function('model', 
    `this.bikeInfo = function(){
        console.log("Bike Info: ", model);
    }`
);

const bike = new Bike(2020);
console.log(bike);
bike.bikeInfo();
