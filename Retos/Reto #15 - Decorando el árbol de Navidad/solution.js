function decorateTree(base) {
    const ornamentFormula = {
      BB: "B",
      RR: "R",
      PP: "P",
  
      BP: "R",
      RP: "B",
      BR: "P",
  
      PB: "R",
      PR: "B",
      RB: "P"
    };
  
    const decorate = [base]
    base = base.split(" "); //Separamos para saber el tamaño
  
    while( base.length > 1 ){
  
      base = base.slice(1).map((item, i) => {
        return ornamentFormula[item+base[i]]
      })
  
      decorate.push(base.join(" "))
  
    }
  
    return decorate.reverse();
  }