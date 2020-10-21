/*
Simple, given a string of words, 
return the length of the shortest word(s).
String will never be empty and you do not 
need to account for different data types.
*/

function findShort(s){
    let split = s.split(' ')
    let length = []
    split.forEach(function(item){
        length.push(item.length)
    })
    length.sort(function(a,b){return a-b})
    return length[0]

}

//One liner
function findShort2(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

//test
findShort('bitcoin take over the world maybe who knows perhaps')
findShort2('bitcoin take over the world maybe who knows perhaps')