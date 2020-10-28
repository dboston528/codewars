function rotLeft(a, d){
    for(let i = 0; i<d; i++){
        a.push(a.shift())
    }
    return a
}

//Test cases
console.log(rotLeft([1,2,3,4,5], 1))
console.log(rotLeft([1,2,3,4,5], 2))
console.log(rotLeft([1,2,3,4,5], 3))