let scientist = {firstName:'Albert', lastName: 'Einstien'};

console.log(Object.getOwnPropertyDescriptor(scientist, 'firstName'));
console.log(scientist);
Object.defineProperty(scientist, 'firstName', {
    configurable: false
});

delete scientist.firstName;
console.log(Object.getOwnPropertyDescriptor(scientist, 'firstName'));
console.log("After Deletion of firstName:", scientist);