function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
    this.fullName = function(){
        let fullNameVar = firstName + " "+ lastName;
        console.log(fullNameVar);
        return fullNameVar;
    }
}

const kohliObject = new Person('Virat', 'Kohli');
console.log(kohliObject);
kohliObject.fullName();

// Adding a property to an *** object ***.
kohliObject.profession = 'Cicketer';
kohliObject['place'] = 'Delhi';
kohliObject.jersyNumber = {number: 18};
console.log(kohliObject);

const josObject = new Person('Jos', 'Butler');
console.log(josObject);

// Deleting a property to an *** object ***.
delete josObject['firstName'];
console.log(josObject);

const keys = Object.keys(kohliObject);
console.log(keys);

for(let key of keys){
    console.log("Keys Iteration ::  Key is: ", key, " Value is: ", kohliObject[key]);
}

for(let key in kohliObject){
    if(typeof(kohliObject[key]) !== 'function')
        console.log(" Array Iteration :: Key is: ", key, " Value is: ", kohliObject[key]);
}
