/* 
Your goal in this kata is to implement a difference function, which subtracts one 
list from another and returns the result.
*/
//example:
//arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {
    let array = []
    a.forEach(aItem => {console.log(aItem)});
    return array
  }



console.log(arrayDiff([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5]))

