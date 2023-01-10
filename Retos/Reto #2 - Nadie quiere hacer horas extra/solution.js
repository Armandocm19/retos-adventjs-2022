function countHours(year, holidays) {
  
    let horaExtra = 0;
    
    holidays.map( item => {
      item += `/${year}`
      let fecha = new Date(item);
      let dia = fecha.getDay();
  
      if( dia !== 6 && dia !== 0 )horaExtra += 2;
      
    } )
    
    return horaExtra;
  
  }