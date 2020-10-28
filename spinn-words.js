function spinWords(string){
    //TODO Have fun :)
   let arr = []
   let split = string.split(' ')
   split.forEach(function(item){
       if (item.length < 5) {
       arr.push(item)
        } else {
            arr.push(item.split('').reverse().join(''))
            }
   })

   return arr.join(' ')
  }

  spinWords("Hey fellow warriors")