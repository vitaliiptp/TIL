// const message = 'The British are coming.';
// function sayMessage(){
//     console.log(message); // Here we have access to message,
//     // even though it's declared outside this function!
// }
//
// // Function for getting the id of a dom element,
// // giving it a new, unique id if it doesn't have an id yet
// const getUniqueId = (() => {
//     let nextGeneratedId = 0;
//     return element => {
//         if (!element.id) {
//             element.id = `generated-uid-${nextGeneratedId}`;
//             nextGeneratedId++;
//         }
//         console.log(element.id)
//         return element.id;
//     };
// })();

// function outerFunc() {
//     // the outer scope
//     let outerVar = 'I am outside!';
//     function innerFunc() {
//         // the inner scope
//         console.log(outerVar); // => logs "I am outside!"
//     }
//     innerFunc();
// }
// outerFunc();

// const myGlobal = 0;
// function func() {
//     const myVar = 1;
//     console.log(myGlobal); // logs "0"
//     function innerOfFunc() {
//         const myInnerVar = 2;
//         console.log(myVar, myGlobal); // logs "1 0"
//         function innerOfInnerOfFunc() {
//             console.log(myInnerVar, myVar, myGlobal); // logs "2 1 0"
//         }
//         innerOfInnerOfFunc();
//     }
//     innerOfFunc();
// }
// func();

// function outerFunc() {
//     let outerVar = 'I am outside!';
//     function innerFunc() {
//         console.log(outerVar); // => logs "I am outside!"
//     }
//     return innerFunc;
// }
// function exec() {
//     const myInnerFunc = outerFunc();
//     myInnerFunc();
// }
// exec();

// function multiply(a) {
//     return function executeMultiply(b) {
//         console.log(a * b);
//     }
// }
// const double = multiply(2);
// double(3); // => 6
// double(5); // => 10
// const triple = multiply(3);
// triple(4); // => 12

// (function immediateA(a) {
//     return (function immediateB(b) {
//         console.log(a);
//     })(1);
// })(0);

// let count = 0;
// (function immediate() {
//     if (count === 0) {
//         let count = 1;
//         console.log(count); // What is logged?
//     }
//     console.log(count); // What is logged?
// })();

// setTimeout(function log() {
//     for (let i = 0; i < 3; i++) {
//         console.log(i); // What is logged?
//     }
// }, 1000);
//
// for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); // What is logged?
//     }, 1000);
// }
//
//
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log(j) {
//         console.log(j); // What is logged?
//     }, 1000, i);
// }
//
// for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(); // What is logged?
//     }, 1000);
// }

// function createIncrement() {
//     let count = 0;
//     function increment() {
//         count++;
//         // console.log(count) // Changes count only inside increment function
//     }
//     // let message = `Count is ${count}`; // message variable always holds 'Count is 0'
//     function log() {
//         let message = `Count is ${count}`;
//         console.log(message);
//     }
//
//     // console.log(count)
//     return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log(); // What is logged?

// // items are accessible from outside
// function createStack() {
//     return {
//         items: [],
//         push(item) {
//             this.items.push(item);
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }
//
// // items are only accessible from inner scope
// function createStack() {
//     const items = [];
//     return {
//         push(item) {
//             items.push(item);
//         },
//         pop() {
//             return items.pop();
//         }
//     };
// }
//
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// console.log(stack.pop()); // => 5
// console.log(stack.items); // => [10]
// stack.items = [10, 100, 1000]; // Encapsulation broken!
// console.log(stack.items); // => [10, 100, 1000]

// function multiply(num1, num2) {
//     // if (num2 !== undefined) {
//     if (num1 && num2) {
//         return num1 * num2;
//     } else {
//         return function innerMultiply(num2) {
//             return num1 * num2;
//         }
//     }
// }
//
// console.log(multiply(4, 5)); // => 20
// console.log(multiply(3, 3)); // => 9
// const double = multiply(2);
// console.log(double(5));  // => 10
// console.log(double(11)); // => 22


// let a = !undefined;
// console.log(Boolean(a))



// function makeFunc() {
//     let name = 'Mozilla';
//     function displayName() {
//         console.log(name);
//     }
//     // return displayName;
//     displayName();
// }
// makeFunc()
// var myFunc = makeFunc();
// myFunc();

//
// function outerFunc() {
//     let outerVar = 'I am outside!';
//     function innerFunc() {
//         console.log(outerVar); // => logs "I am outside!"
//     }
//     return innerFunc;
// }
// function exec() {
//     const myInnerFunc = outerFunc();
//     myInnerFunc();
// }
// exec();


// let countEven = 0;
// const items = [1, 5, 100, 10];
// items.forEach(iterator = (number) => {
// // items.forEach(function iterator(number) {
//         if (number % 2 === 0) {
//             countEven++;
//         }
// })
// console.log(countEven);




// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// function bind(obj) {
//     this.name = obj.name
//     this.age = obj.age
//     this.job = obj.job
//
//     return logPerson()
// }


// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args)
//     }
// }
//
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }
//
// const person1 = {name: 'John', age: 22, job: 'Frontend'};
// const person2 = {name: 'Sara', age: 20, job: 'Backend'};
//
//
// bind(person1, logPerson)()
// bind(person2, logPerson)()




// function makeFunc() {
//     let name = 'Mozilla';
//     function displayName() {
//         return name;
//     }
//     return displayName;
// }
//
// console.log(makeFunc()())
// let myFunc = makeFunc();
//
//
// let someArray = [];
// someArray.push(myFunc())
// someArray.push(makeFunc()())
//
// console.log(someArray)




// CHALLENGE 1
function createFunction() {
    return function() {
        console.log("hello");
    }

}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
    return function(){
        console.log(input);
    }

}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');




// CHALLENGE 3
function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
        counter ++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter(); // counter 1
// willCounter(); // counter 2
// willCounter(); // counter 3

// jasCounter(); // counter 0
// willCounter(); // counter 4


function addByX(x) {
    return function incrementCounter(num) {
        // console.log(num)
        return num += x;
    };

    // function incrementCounter(num) {
    //   num += x;
    //   console.log(num)
    //   return num += x;
    // };
    // return incrementCounter;

}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
    let counter = 0;
    let result;
    return function callCallback(num) {
        counter++;
        return counter < 2 ? (result = func(num)) : result;
    }
}


// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
    let counter = 0;
    let result;
    return function callbackCounter() {
        counter++;
        return counter >= count ? result = func() : result;
    }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed
// afterCalled(); // => 'hello' is printed



// CHALLENGE 6
function delay(func, wait) {
    setTimeout(func, wait);
}