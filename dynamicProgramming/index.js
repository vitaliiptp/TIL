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


// // TODO: canSum - Find if it's possible to get the required number by summing elements of the array
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


// // TODO: howSum - Function that returns an array with combination of elements that add up to exactly the target sum.
// const howSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return []
//     if (targetSum < 0) return null;
//
//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderResult = howSum(remainder, numbers, memo);
//         if (remainderResult !== null) {
//             memo[targetSum] = [...remainderResult, num];
//             return memo[targetSum];
//         }
//     }
//     memo[targetSum] = null;
//     return null;
// }
//
// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));


// // TODO: bestSum - Function that returns an array with the shortest combination of elements that add up to exactly the target sum.
// const bestSum = (targetSum, nums, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;
//     let shortestCombination = null;
//
//     for (let num of nums) {
//         const remainder = targetSum - num;
//         const remainderCombination = bestSum(remainder, nums, memo);
//         if (remainderCombination !== null) {
//             const combination = [...remainderCombination, num];
//             if (shortestCombination === null || combination.length < shortestCombination.length) {
//                 shortestCombination = combination;
//             }
//         }
//     }
//
//     memo[targetSum] = shortestCombination;
//     return memo[targetSum];
// }
//
// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(8, [1 ,4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));


//  // TODO: canConstruct - Construct string out of elements of an array. Return true OR false
// const canConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target];
//     if (target === "") return true;
//
//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             if (canConstruct(suffix, wordBank, memo) === true) {
//                 memo[target] = true;
//                 return true;
//             }
//         }
//     }
//     memo[target] = false;
//     return false;
// };
//
// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
// console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
// console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeeee"])); // false


// // TODO: countConstruct - Construct string out of elements of an array. Return number of ways
// const countConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target];
//     if (target === "") return 1;
//     let countNumWays = 0;
//
//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
//                 countNumWays += numWaysForRest;
//         }
//     }
//     memo[target] = countNumWays;
//     return countNumWays;
// };
//
// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
// console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
// console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeeee"])); // 0


// // TODO: allConstruct - Construct string out of elements of an array. Return all the possible ways
// const allConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target]
//     if (target === "") return [[]];
//
//     const result = []
//
//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             const suffixWays = allConstruct(suffix, wordBank, memo);
//             const targetWays = suffixWays.map(way => [word, ...way])
//             result.push(...targetWays)
//         }
//     }
//     memo[target] = result;
//     return result;
// }
//
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); // 4
// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeeee"])); // 0


// // TODO: Fib tabulation
// const fib = (n) => {
//     const table = Array(n + 1).fill(0);
//     table[1] = 1;
//
//     for (let i = 0; i < n; i++) {
//         table[i + 1] += table[i];
//         table[i + 2] += table[i];
//     }
//     return table[n];
// }
//
// console.log(fib(6)) // 8;
// console.log(fib(7)) // 13;
// console.log(fib(8)) // 21;
// console.log(fib(50)) // 12586269025;


// // TODO: Grid traveller tabulation
// const gridTraveller = (m, n) => {
//     const table = Array (m + 1).fill().map((_) => Array(n + 1).fill(0));
//     table[1][1] = 1;
//     for (let i = 0; i <= m; i++) {
//         for (let j = 0; j <= n; j++) {
//             const current = table[i][j];
//             if (j + 1 <= n) table[i][j + 1] += current;
//             if (i + 1 <= m) table[i + 1][j] += current;
//         }
//     }
//     return table[m][n];
// }
//
// console.log(gridTraveller(1, 1)) // 1
// console.log(gridTraveller(3, 2)) // 3
// console.log(gridTraveller(2, 3)) // 3
// console.log(gridTraveller(3, 3)) // 6
// console.log(gridTraveller(18, 18)) // 2333606220


// // TODO: canSum - Find if it's possible to get the required number by summing elements of the array. Tabulation version
// const canSum = (target, nums) => {
//     const table = Array(target + 1).fill(false);
//     table[0] = true;
//
//     // for (let i = 0; i <= table.length; i++) {
//     for (let i = 0; i <= target; i++) {
//
//             if (table[i] === true) {
//             for (let num of nums) {
//                 // if (table[i + num] <= table.length) table[i + num] = true;
//                 table[i + num] = true;
//             }
//         }
//     }
//     return table[target];
// }
//
// console.log(canSum(7, [2, 3]))  // true
// console.log(canSum(7, [5, 3, 4, 7]))  // true
// console.log(canSum(7, [2, 4]))  // false
// console.log(canSum(8, [2, 3, 5]))  // true
// console.log(canSum(300, [7, 14]))  // false


// // TODO: howSum - Function that returns an array with combination of elements that add up to exactly the target sum. Tabulation
// const howSum = (target, nums) => {
//     const table = Array(target + 1).fill(null);
//     table[0] = [];
//
//     for (let i = 0; i <= target; i++) {
//         if (table[i] != null) {
//             for (let num of nums) {
//                 if (table[i + num] <= table.length) {
//                     table[i + num] = [...table[i], num];
//                 }
//             }
//         }
//     }
//
//     return table[target];
// }
//
//
// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));


// // TODO: bestSum - Function that returns an array with the shortest combination of elements that add up to exactly the target sum. Tabulation
// const bestSum = (targetSum, nums) => {
//     const table = Array(targetSum + 1).fill(null);
//     table[0] = [];
//
//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] !== null) {
//             for (let num of nums) {
//                 const combination = [...table[i], num];
//                 if (!table[i + num] || table[i + num].length > combination.length) {
//                     table[i + num] = combination;
//                 }
//             }
//         }
//     }
//
//     return table[targetSum];
// }
//
// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));


//  // TODO: canConstruct - Construct string out of elements of an array. Return true OR false. Tabulation
// const canConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1).fill(false);
//     table[0] = true;
//
//     for (let i = 0; i <= target.length; i++) {
//         if (table[i] === true) {
//             for (let word of wordBank) {
//                 if (target.slice(i, i + word.length) === word) {
//                     table[i + word.length] = true;
//                 }
//             }
//         }
//     }
//
//     return table[target.length];
// };
//
// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
// console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
// console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeeee"])); // false


// // TODO: countConstruct - Construct string out of elements of an array. Return number of ways
// const countConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1).fill(0);
//     table[0] = 1;
//
//     for (let i = 0; i <= target.length; i++) {
//         for (let word of wordBank) {
//             if (target.slice(i, i + word.length) === word) {
//                 table[i + word.length] += table[i];
//             }
//         }
//     }
//
//     return table[target.length];
// };
//
// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
// console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
// console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeeee"])); // 0


// // TODO: allConstruct - Construct string out of elements of an array. Return all the possible ways. Tabulation
// const allConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1).fill().map((_) => []);
//     table[0] = [[]];
//
//     for (let i = 0; i <= target.length; i++) {
//         for (let word of wordBank) {
//             if (target.slice(i, i + word.length) === word) {
//                 const newCombinations = table[i].map(subArray => [...subArray, word]);
//                 table[i + word.length].push(...newCombinations);
//             }
//         }
//     }
//
//     return table[target.length];
// }
//
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); // 4
// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeeee"])); // 0
