function *factorial(n) {
    let acc = 1;
    let index= 1;
    while (index<= n) {
        acc = acc * index
        yield acc 
        index ++
    }
}

for (let n of factorial(5)) {
    console.log(n)
}