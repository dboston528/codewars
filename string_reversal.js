function solve(str){
    let x = str.split('');
    let y = []
    let z = []
    for(let i = x.length - 1; i >= 0; i--){
        if (x[i]=== " "){
            z.push(i)
        }else {
            y.push(x[i])
        }
        
    }
    let reverseZ = z.reverse()
    reverseZ.forEach(function(item){
        y.splice(item, 0, ' ')
        
    })
    return y.join('')
  }

solve("i love codewars");