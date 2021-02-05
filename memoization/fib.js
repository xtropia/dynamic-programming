const calcFib = (n) => {
    if (n === 0 || n === 1) {
        return 1
    }
    return calcFib(n - 1) + calcFib(n - 2)
}

const n = Number.parseInt(process.argv[2])

const result = { input: n, result: calcFib(n)}
console.log(result)