const arrTotalRecursive = (arr) => {
    if (arr.length === 0) return 0;
    return arr[0] + arrTotalRecursive(arr.slice(1))
}

console.log(arrTotalRecursive([2, 4, 6, 8])); // 20;



const greatestCommonDivisorRecursive = (a, b) => {
    if (a === b) return a;
    return greatestCommonDivisorRecursive(Math.min(a, b), (Math.max(a, b) - Math.min(a, b)));
}

console.log(greatestCommonDivisorRecursive(1680, 640));