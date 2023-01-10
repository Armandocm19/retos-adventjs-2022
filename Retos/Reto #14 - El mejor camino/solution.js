function getOptimalPath(path) {
  
    const res = path.reduceRight(( prev, curr ) => {
      return curr.map(( num, i ) => {
        return num + Math.min(prev[i], prev[i+1])
      })
    })
  
    return res[0]
  }