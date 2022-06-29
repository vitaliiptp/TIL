const countDown = (n) => {
    if (n < 0) return 0;
    console.log(n)
    return countDown(n - 1);
};

countDown(5)



const elementCountRecursive = (arr) => {
    if (arr.length === 0) return 0;
    return 1 + elementCountRecursive(arr.slice(1));
};

console.log(elementCountRecursive([2, 4, 6, 8])) // 4;



const maxNumberRecursive = (arr) => {
    if (arr.length === 1) return arr[0];
    const temp = maxNumberRecursive(arr.slice(1));
    return arr[0] > temp ? arr[0] : temp;
}

console.log(maxNumberRecursive([2, 4, 11, 9, 6, 8])) // 11