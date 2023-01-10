function getFilesToBackup(lastBackup, changes) {

    return Array.from(new Set(changes.filter((item) =>{
      if(item[1] !== lastBackup && item[1] > lastBackup) return item[0]
    }).map((i) => {
      return i[0]
    }))).sort((a,b) => a - b)
  
  }