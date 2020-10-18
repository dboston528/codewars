/*
Move the first letter of each
word to the end of it, then add "ay" to the end 
of the word. Leave punctuation marks untouched.
*/


//my Solution
function pigIt(str){
    str = str.split(' ')
    let newArray  = []
    let punctuation = []
    str.forEach(function(item){
        if(item === "!" || item === "?"){
            punctuation.push(item)
        } else {
            let splitItem = item.split("")
            let firstLetter = splitItem.shift()
            splitItem.push(firstLetter)
            let join = splitItem.join('')
            let adAy = join.concat('', 'ay')
            newArray.push(adAy)
        }
    })
    if (punctuation.length > 0 ){
        let combined = newArray.concat(punctuation)
        return combined.join(' ')
    }
    return newArray.join(' ')
  }


//One liner 😲!
  function pigIt2(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }


console.log(pigIt2('Pig latin is cool'));