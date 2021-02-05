const calcNumPaths = (m, n) => {
    if (m === 1 && n === 1) {
        return 1
    }
    if (m === 0 || n === 0) {
        return 0
    }
    return calcNumPaths(m - 1, n) + calcNumPaths(m, n - 1)
}

const n = Number.parseInt(process.argv[2]) || 10

const result = { input: n, result: calcFib(n)}
console.log(result)