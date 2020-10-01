function accum(s) {
    let stringArray = s.toLowerCase().split("")
    let emptyArrray = []
    for(let i = 0; i <= stringArray.length-1; i++){
        let repeatString = stringArray[i].repeat(i+1)
        let firstLetter = repeatString.charAt(0).toUpperCase()
        let finalString = repeatString.replace(repeatString.charAt(0), firstLetter)
        emptyArrray.push(finalString)
    }
    return emptyArrray.join("-")
}

//test

let result = accum("ZpglnRxqenU")
console.log(result)