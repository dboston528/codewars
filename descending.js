function descendingOrder(n){
    const numSplit = n.toString().split('').sort()
    const reverse =  numSplit.reverse()
    const join = reverse.join('')
    return parseInt(join)
  }
  
  //Input: 42145 Output: 54421
  
  console.log(descendingOrder(42145))