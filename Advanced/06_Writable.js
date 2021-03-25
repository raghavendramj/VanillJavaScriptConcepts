let person = {name: 'Anusha'};
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// writable: false -> Read only field
Object.defineProperty(person, 'name', {
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(person);

person.name = 'Keshav';
console.log("After modification: ", person);

// let objectBase = Object.getPrototypeOf(person);
// console.log(objectBase);

// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(descriptor);


