function carryGifts(gifts, maxWeight) {

    let arrayNew = []
  
    const lastAcc = gifts.reduce((acc, curr) => {
      const accLength = acc.replaceAll(" ", "").length;
      const giftLength = curr.replaceAll(" ", "").length;
  
      if(accLength + giftLength <= maxWeight){
        return `${acc} ${curr}`
      } else if (giftLength <= maxWeight) arrayNew.push(acc)
  
      return curr;
  
    })
  
    if (lastAcc.replaceAll(" ", "").length <= maxWeight) arrayNew.push(lastAcc)
  
  
    return arrayNew
  }