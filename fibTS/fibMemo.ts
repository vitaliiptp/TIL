interface Memo {
    [index: string]: number
}

const fibMemo = (n: number, memo: Memo = {}): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
};


const fib = (n: number): number => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2)
}


const fibLoop = (n: number): number[] => {
    let a = 1, b = 0, temp;
    let result = [0, 1];
    while (n > 0) {
        temp = a;
        a = a + b;
        b = temp;
        result.push(b)
        n--;
    }
    return result;
}


console.log(fib(12))
console.log(fibMemo(12))
console.log(fibLoop(12))

