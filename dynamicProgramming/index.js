// // TODO: Fib memoization
//
// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2)
// }
//
//
// const fibMemo = (n, memo = {}) => {
//     if (n in memo) return memo[n];
//     if (n <= 2) return 1;
//     memo[n] = fibMemo(n-1, memo) + fibMemo(n - 2, memo)
//     return memo[n]
// }
//
// console.time('fib')
// console.log(fib(11));
// console.timeEnd('fib')
//
//
// console.time('fibMemo')
// console.log(fibMemo(5));
// console.timeEnd('fibMemo')


// // TODO: Grid Traveler with memoization
// const gridTraveler = (m, n, memo = {}) => {
//     const key = m + ',' + n;
//     if (key in memo) return memo[key]
//     if (m === 1 && n === 1) return 1
//     if (m ===0 || n === 0) return 0
//     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
//     return memo[key]
// }
//
// console.log(gridTraveler(1, 0)); // 0
// console.log(gridTraveler(1, 1)); // 1
// console.log(gridTraveler(2, 3)); // 3
// console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(18, 18)); // 2333606220


// // TODO: Find if it's possible to get the required number by summing elements of the array
// const canSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum]
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;
//
//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         if (canSum(remainder, numbers, memo) === true) {
//             memo[targetSum] = true
//             return true
//         }
//     }
//
//     memo[targetSum] = false
//     return false;
// }
//
// console.log(canSum(7, [2, 3]))  // true
// console.log(canSum(7, [5, 3, 4, 7]))  // true
// console.log(canSum(7, [2, 4]))  // false
// console.log(canSum(8, [2, 3, 5]))  // true
// console.log(canSum(300, [7, 14]))  // true


// TODO: Function that returns an array with combination of elements that add up to exactly the target sum.
const howSum = (targetSum, numbers, memo = {}) => {
    // if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return []
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null) {
            return [...remainderResult, num];
        }
    }
    return null;
}

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));



