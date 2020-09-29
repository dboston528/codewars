/* 
Your goal in this kata is to implement a difference function, which subtracts one 
list from another and returns the result.
*/
//example:
//arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {
    let array = []
  

   
    a.forEach(aItem => {
        console.log(aItem)
        b.forEach( bItem => {
            console.log(aItem)

            if(aItem != bItem){
                array.push(aItem)
               
            }
        })
       
    });
    return array
  }



console.log(arrayDiff([1,2,4,5,1], [2,5]))

