let sachin = {
    firstName: 'Sachin',
    lastName: 'Tendulkar',
    getFullName: function(){
        return this.firstName + ' '+ this.lastName;
    }
}
// ----------------------------------------------------------
let virat = {
    firstName: 'Virat',
    lastName: 'Kohli',
    getFullName: function(){
        return this.firstName + ' '+ this.lastName;
    }
}
// ----------------------------------------------------------
let yuraj = {
    firstName: 'Yuraj',
    lastName: 'Singh',
    getFullName: function(){
        return this.firstName + ' '+ this.lastName;
    }
}
// ----------------------------------------------------------

//Bind
let choosePlayer = function(){    
    console.log(this.getFullName()+ ' I choose you!');
}

//choosePlayer.bind(sachin)();
let sachinObject = choosePlayer.bind(sachin);
sachinObject();

let playerInfo = function(battingStyle, city){
    console.log(this.getFullName()+ ' bats ', battingStyle, ' and is from ', city);
}

//Call
playerInfo.call(virat, 'Right Handed!','Delhi');

//Apply
playerInfo.apply(yuraj, ['Left Handed!','Mumbai']);