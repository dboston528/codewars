function past(h, m, s){
    const sc = (s*1000)
    const mc = (m * 60000)
    const hc = (h * 3600000)
    console.log(sc + mc + hc)
  }

//other solution
function past2(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
}

  past(0,1,1)