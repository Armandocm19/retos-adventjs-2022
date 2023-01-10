function sortToys(toys, positions) {

    let posicionesOrdenadas = [...positions].sort((a,b) => a - b);
  
    return positions.map((position, i) => 
      toys[
        positions.indexOf(posicionesOrdenadas[i])
      ]
    )
  }