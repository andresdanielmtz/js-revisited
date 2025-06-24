// Use memory to save on computing power by trying "all" possible combinations. 

const fib = (n, memo) => {
    memo = memo || [];

    if (memo[n]) {
        console.log(`Memoization called on ${n}`);

        return memo[n]
    }
    if (n <= 1) return 1;

    console.log(`n: ${n}`);

    return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}

fib(5, [])