let car = "Benz";
console.log(car);
console.log(typeof(car));
car = {type: "HatchBack", model: "S3", color:"white"};
console.log(car);
console.log(typeof(car));
console.log(car.type);
console.log(car['type']);

car = {
    type: "HatchBack",
    model: "S3", 
    color:"white",
    getCarInfo: function(){
        return this.type +" -- "+ this.model+ " -- "+ this.color;
    }
};
console.log(car.getCarInfo());
console.log(car['getCarInfo']());