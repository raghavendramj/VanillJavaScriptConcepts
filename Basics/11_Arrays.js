var cars = ["Saab", "Volvo", "BMW"];


var fruits = new Array();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Kiwi");

console.log(fruits);


var cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);
console.log(cars[0]);

cars.forEach((element, index) => {
    console.log(element +"  "+ index);
});

console.log(cars.toString());
console.log(cars.join(" ==== "));


cars.pop();
console.log(cars);

cars.push("Benz");
console.log(cars);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);


fruits.unshift("Lemon")
console.log(fruits);


delete fruits[2]; // Using delete may leave undefined holes in the array. Use pop() or shift() instead.
console.log(fruits);


fruits[2] = "Watermelon";
console.log(fruits);

fruits.splice(2, 0, "Banana", "Kiwi");
console.log(fruits);

fruits.splice(2, 2, "Butterfruit", "Grapes");
console.log(fruits);


var citrus = fruits.slice(2); //The slice() method creates a new array. It does not remove any elements from the source array.

console.log(citrus);
console.log(fruits); 


fruits.sort();
console.log(fruits); 

fruits.reverse();
console.log(fruits); 