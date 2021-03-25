let myPromise = new Promise(function (resolve, reject) {
    let x = 10;
    if(x === 10 ){
        resolve("Accepted");
    } else {
        reject("Rejected");
    }    
});

let nextPromise = myPromise.then(
    function(result) {
        return new Promise(function (resolve, reject) {
            let x = 10;
            if(x === 10 ){
                resolve("Accepted");
            } else {
                reject("Rejected");
            }    
        });
    },
    function (error) {
        console.log(error);
    }
);

nextPromise.then(
    function(result) {
        console.log(result);
    },
    function (error) {
        console.log(error);
    }
);