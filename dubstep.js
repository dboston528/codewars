function songDecoder(song){
    // ...
    let cut = song.search('WUB')
    let newArray = []
    for(let i = 0; i <= song.length; i++){
        let split = song.split("")
        let newArray = split.splice(cut,3)
        // console.log(split)
    }
    console.log(newArray)
  }

  songDecoder("AWUBBWUBC")

// let string = "AWUBBWUBC"
// console.log(string.search('WUB')) 
//returns 1
// let newString = string.split("")
// newString.splice(1,3)
// console.log(string.slice(4,string.length))
// console.log(newString)