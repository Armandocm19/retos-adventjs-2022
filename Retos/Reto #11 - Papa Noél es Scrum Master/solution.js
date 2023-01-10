function getCompleted(part, total) {
    const formatTime = (time) => {
      const [h, m, s] = time.split(":");
      return Number(h) * 3600 + Number(m) * 60 + Number(s);
    };
  
    let segundosTrabajados = formatTime(part);
    let segundosPorTrabajar = formatTime(total);
    
    const maximoComunDivisor = (a, b) => {
      let temporal; //Para no perder b
      while (b !== 0) {
          temporal = b;
          b = a % b;
          a = temporal;
      }
      return a;
    }
  
     const mcdOf = maximoComunDivisor(segundosTrabajados , segundosPorTrabajar)
  
     let porcionPorTrabajar = segundosPorTrabajar / mcdOf;
     let porcionTrabajada = segundosTrabajados / mcdOf; 
  
    return porcionTrabajada + '/' + porcionPorTrabajar;
  }