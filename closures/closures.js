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