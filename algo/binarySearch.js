// const binarySearchLoop = (range, item) => {
//     let start = 1;
//     let end = range;
//
//     // const list = Array.from({length: range}, (_, i) => i + 1)
//     const list = [...Array(range).keys()].map(i => i + 1);
//
//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2);
//
//         if (list[mid] === item) return list[mid];
//         if (list[mid] < item) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     return null;
// }
//
// console.log(binarySearchLoop(20, 5));

const binarySearchRecursive = (range, item, start, end) => {
    const list = [...Array(range).keys()].map(x => x + 1);

    if (start > end) return false;

    let mid = Math.floor((start + end) / 2);

    if (list[mid] === item) return list[mid];
    if (list[mid] < item) return binarySearchRecursive(range, item, mid + 1, end);
    if (list[mid] > item) return binarySearchRecursive(range, item, start, mid - 1);
}

console.log(binarySearchRecursive(20, 5, 1, 20));