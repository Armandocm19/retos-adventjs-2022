function printTable(gifts) {

    const nameMax = Math.max(...gifts.map(x => x.name.length), 4)
    const quantityMax = Math.max(...gifts.map(x => x.quantity.toString().length), 8)
  
    let regalo = '+'.repeat((quantityMax+nameMax)+7)+"\n";
    
    regalo += "| "+"Gift"+" ".repeat(nameMax-"gift".length+1)
  
    regalo += "| "+"Quantity"+" ".repeat(quantityMax-"Quantity".length)+" |"+"\n"
  
    regalo += "| "+"-".repeat(nameMax) + " | "+"-".repeat(quantityMax)+" |"+"\n"
  
    gifts.forEach(gift => {
      const espaciosName = (nameMax-gift.name.length+1);
      const espaciosQuantity = (quantityMax-gift.quantity.toString().length);
      
      regalo += "| "+gift.name+" ".repeat(espaciosName)
  
      regalo += "| "+gift.quantity+" "
      .repeat(espaciosQuantity)+" |"+"\n"
    })
  
    regalo += '*'.repeat((quantityMax+nameMax)+7);
  
    return regalo
  }