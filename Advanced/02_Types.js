// Value types -> Primitives are copied by Value.
Number
String
Boolean
Symbol
undefined
null

// Reference types -> Objects -> Copied by reference.
Object
Function
Array

function print(xObj, yObj){
    console.log(" Values of X and Y are : X: ", xObj, "Y: ", yObj);
}

let xObj = {value: 20};
let yObj = xObj;
print(xObj, yObj);

xObj.value = 30;
print(xObj, yObj);

yObj.value = 40;
print(xObj, yObj);


let numberObj = {value: 10};
function increase(num){
    num.value++;
}
increase(numberObj);
console.log("Number Object is ", numberObj);
