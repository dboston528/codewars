function addArrays(array1, array2) {
   if(array1.length === 0){
       array1.push(0)
   }
   if (array2.length === 0){
        array2.push(0)
   }
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    let theSum = arrayToNumber1 + arrayToNumber2
    console.log(theSum)
    let numberArray =[]
    if(theSum<0){
        let stringSplit = theSum.toString().split("")
        stringSplit.shift()
        stringSplit[0]= stringSplit[0]*-1
        stringSplit.forEach(element => {
            numberArray.push(parseInt(element))
        });
        console.log(numberArray) 
    } else {
        let stringSplit = theSum.toString().split("")
        // let numberArray =[]
        stringSplit.forEach(element => {
            numberArray.push(parseInt(element))
        });
        console.log(numberArray) 
    }
    
  }

  addArrays([6,7],[])