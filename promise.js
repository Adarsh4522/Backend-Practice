const myPromise = new Promise((resolve, reject)=> {
    let success = true;
//});

if(success) {
    resolve("operation successful");
} else {
    reject("Operation failed");
}

});

myPromise
.then((message)=> {
    console.log('Then block: ', message);
})
.catch((error)=> {
    console.log('catch block', error);
    
})

.finally(( )=> {
console.log("promise completed");
});
