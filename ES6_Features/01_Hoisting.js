sayHello();

//Function Declartion -> Hoisted 
function sayHello(){
    console.log("Say Hello");
}

// sayGoodBye(); ->  will result in a error, because Function Expressions will not hosited

//Function Expression -> Not hosited
const sayGoodBye = function(){
    console.log("Say Good Bye!");
}

const circle = new Circle();
console.log(circle);


//Class Declaration -> not hoisted
class Circle {    
}


// Class Expression -> not hoisted
const square = class {
}


// Summary
// --------
// Following will be hosited.
//     1.Function Declaration
//     2.Variable Declaration

//     Following will not be hosited

//     1. Function Expression
//     2. Class Expression
//     3. Class Declaration