function songDecoder(song){
    // ...
    let cut = song.search('WUB')
let array
    for(let i = 0; i>song.length ; i++){
        
          let split =  song.split("")
           array = split.splice(cut, 3)
           console.log(array)
        
        // console.log(song)
    }
    
  }

  songDecoder("AWUBBWUBC")

// let string = "AWUBBWUBC"

// let newString = string.replace('WUB', "")
// console.log(newString)
// newString.replace('WUB', "")
// console.log(newString)
//returns 1
// let newString = string.split("")
// newString.splice(1,3)
// console.log(string.slice(4,string.length))
// console.log(newString)