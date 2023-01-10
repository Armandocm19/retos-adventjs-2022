function howManyReindeers(reindeerTypes, gifts) {

    return gifts.map(gift => {
      let currentMax = gift.weight
      let weights = Object.values(reindeerTypes)
      .map(x => [x.type, x.weightCapacity])
      .filter(x => x[1] < currentMax)
      .sort((x,y) => y[1] - x[1])
      
      let currentCapacity = weights.reduce((acc, curr) => (acc += curr[1]), 0)
  
      let reeinderQuantity = weights.map( ([type, weight]) => {
        let quantity = Math.floor((currentMax / currentCapacity));
        currentCapacity -= weight;
        currentMax -= quantity * weight
  
        return {type, num: quantity}
      })
  
      return { country: gift.country, reindeers: reeinderQuantity };
  
    })
  
  }