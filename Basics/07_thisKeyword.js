function testThis(){
    'use strict';
    color = "Blue";
    var person = {
        firstName: "Sachin",
        lastName: "Tendulkar",
        getFullName: function(){
            console.log(this);
            return this.firstName + " "+ this.lastName;
        }
    };
    console.log(person.getFullName());
    console.log(this);
}

testThis();