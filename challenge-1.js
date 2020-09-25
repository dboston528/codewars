let spin_words = function (string){
    //TODO Have fun :)
    let splitString = string.split(' ')

    for(i = 0; i <= splitString.length - 1 ; i++) { 
        if(splitString[i].length >= 5){
            splitString[i] = splitString[i].split('').reverse().join('')
        }
        
    }

    return splitString.join(' ')
}

console.log(spin_words('Hi, hello DeAndre Boston'));
