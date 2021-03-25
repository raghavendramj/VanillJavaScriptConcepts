let cricketer = {firstName: 'Virat', lastName: 'Kohli' };
console.log(Object.getOwnPropertyDescriptor(cricketer, 'firstName'));
console.log(Object.keys(cricketer));

Object.defineProperty(cricketer, 'firstName', {
    enumerable: false
});
console.log(Object.keys(cricketer));
console.log(Object.getOwnPropertyDescriptor(cricketer, 'firstName'));
