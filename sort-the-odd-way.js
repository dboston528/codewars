/*
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted 
in ascending order and the even numbers are sorted in descending order after the last odd number. 
For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, 
round them down while checking for odd/even. The output must have the original numbers!
*/

function sortItOut(array){
    let oddArray = []
    let evenArray = []
    array.forEach(function (item) {
        if (item % 2 === 0){
            evenArray.push(item)
        } else {
            oddArray.push(item)
        }
    })
    oddArray.forEach((item)=>{
        Math.floor(item)
        console.log(item)
    })
    console.log(oddArray)
    evenArray.sort(function(a,b){
        return b - a
    })
    let combinedArray = oddArray.concat(evenArray)
    return combinedArray
    }

let solution = sortItOut([3.3,1.1, 2.2,  4.4, 5.5, 6.6])
console.log(solution)