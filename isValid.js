function isValidIP(str) {
    if (str === ''){
      return false
    }
    let split = str.split(".")
    if (split.length > 4 || split.length < 0){
      return false
    } else {
      split.forEach(function(item){
        console.log(parseInt(item))
        if (parseInt(item)===NaN){
            return false
          }
        if(parseInt(item) > 255 || parseInt(item) < 0) {
          return false
        }
      })
    }
    // return true;
  }

  console.log(isValidIP('l23.233.565.657'))