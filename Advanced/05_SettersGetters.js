function Cirle(raduis) {
    this.raduis = raduis;
    let defaultLocation = { x: 0, y: 0 };

    //Getters and Setters.
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            console.log("Object.defineProperty -> defaultLocation: ", defaultLocation);
            return defaultLocation;
        },

        set: function(value){
            if(!value.x || !value.y){
                throw new Error("Invalid Location!");
            }
            defaultLocation = value;
        }
    });

    let computeOptimumLocation = function (factor) {
        console.log("Factors are: ", factor);
    }

    this.draw = function () {
        let x, y;
        computeOptimumLocation(0.1);
        defaultLocation
        this.raduis;
    }
}

const circle = new Cirle(10);
console.log(circle);
circle.draw();

console.log(circle.defaultLocation);
circle.defaultLocation = { x: 10, y: 30 };
console.log(circle.defaultLocation);