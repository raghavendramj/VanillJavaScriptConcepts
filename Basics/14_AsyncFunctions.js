function testSetTimeOut(){

    let a1 = 10;
    let b1 = 20; 
    console.log("Multiple of Numbers is: ", (a1 * b1) );

    setTimeout(function(){
            console.log("Set time out executed");
    }, 0);

    let a = 10;
    let b = 20; 
    console.log("Sum of Numbers is: ", (a + b) );
}

testSetTimeOut();