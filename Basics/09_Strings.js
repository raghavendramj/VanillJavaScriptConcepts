let name1 = "Raghavendra";
let name2 = 'Raghavendra';

let statement = "He is called Raghav";
let statement2 = "He is called 'Raghav'";

console.log(statement2.length);


let statement3 = "We are the so-called \"Vikings\" from the north.";
console.log(statement3);


let stringObj = new String("letiable");
console.log(typeof(stringObj));


let str = "Please locate where 'locate' occurs! locate";
let position = str.indexOf('locate');
console.log("Position is:", position);


let lastPosition = str.lastIndexOf('locate');
console.log("Last Position is:", lastPosition);

let positionFromSearch = str.search('locate');
console.log("Position is:", positionFromSearch);


let fruits = "Apple, Banana, Kiwi";
let result = fruits.slice(7, 13); // slice from 7 to 12, exclusive of 13

console.log(result);

let result2 = fruits.slice(-12, -6);
console.log(result2);


let result3 = fruits.substring(7, 13);
console.log(result3);

let result4 = fruits.substr(7, 6); // 7-> start index, 6-> no of chars to extact
console.log(result4);


let statement4 = "Please visit Bangalore";
let result5 = statement4.replace("Bangalore", "MysoreIN");
console.log(result5);


let statement5 = "Please visit MiCrOSoFt";
var result6 = statement5.replace(/MICROSOFT/i, 'Bangalore')
console.log(result6);