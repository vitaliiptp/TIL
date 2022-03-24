// function doSomething() {
//     return new Promise(function (resolve) {
//         console.log("I am function DO SOMETHING")
//     })
// }
//
// function doSomethingElse() {
//     console.log("I am function DO SOMETHING ELSE")
// }
//
//
// doSomething().then(function () {
//     return doSomethingElse();
// });
// doSomething().then(function () {
//     doSomethingElse();
// });
// doSomething().then(doSomethingElse());
// doSomething().then(doSomethingElse);




function addition(a, b) {
    return new Promise((resolve) => {
        return a + b;
    })
}

// addition(2, 3).then((result) => console.log(result)).then(() => console.log("I am executed after"))


let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve(console.log("done")), 1000);
});


