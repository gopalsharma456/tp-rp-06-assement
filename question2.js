function printStar(n) {
    let str = '*'
    for (let i = 1; i <= n; i++) {
        console.log(`${str.repeat(i)}`)
    }
}

printStar(3)