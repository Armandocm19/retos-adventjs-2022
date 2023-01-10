function distributeGifts(packOfGifts, reindeers) {
    
    let pesoPorRegalos = 0;
    let pesoPorRenos = 0;
    let cantidadParaEntregar = 0;
  
    packOfGifts.map( regalo => {
      if( regalo.length === 0 ) return;
      pesoPorRegalos += regalo.length
    });
    reindeers.map( reno => {
      if( reno.length === 0 ) return;
      pesoPorRenos += reno.length * 2
    });
  
    cantidadParaEntregar = pesoPorRenos / pesoPorRegalos;
  
    return Math.floor(cantidadParaEntregar);
  
  }