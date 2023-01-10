function selectSleigh(distance, sleighs) {
    const arrayDeConsumos = [];
  
    sleighs.forEach((item) => {
      arrayDeConsumos.push(item.consumption * distance);
    });
  
    const mejoresTrineos = Math.max(
      ...arrayDeConsumos.filter(item => item <= 20
    ));
  
    let result = ''
  
    sleighs.map(item => {
            let consumo = item.consumption * distance;
            return consumo === mejoresTrineos && (result = item.name);
          });
  
    return result !== "" ? result : null;
  }
  