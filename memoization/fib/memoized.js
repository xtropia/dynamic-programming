const calcFib = (function() { // this has linear time complexity
    const memo = {}
    return (n) => {
        if (n === 0 || n === 1) {
            return 1
        }
        if (!memo[n]) {
            memo[n] = calcFib(n - 1) + calcFib(n - 2)
        }
        return memo[n]
    }
}())

const n = Number.parseInt(process.argv[2]) || 10

const result = { input: n, result: calcFib(n)}
console.log(result)